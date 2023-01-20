import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.scss";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { makeRequest } from "../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";

export default function Cart() {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    "pk_test_51Lu6wxKsfkXh0Y5Xv9pm1Dbsqgzf7vl8WticTCvZJq8HF422pp6TM4C9Q8HHaBCMj7IvTx1R5GFdBW7XH8NrJ6kd00ONfZTRQ1"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;

      const res = await makeRequest.post("/orders", {
        products,
      });

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img
            src={process.env.REACT_APP_UPLOAD_URL + item.img}
            alt="flowers"
          />
          <div className="details">
            <h1>{item.title}</h1>
            <div className="price">
              {item.quantity} x ${item.price}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Empty Cart
      </span>
    </div>
  );
}
