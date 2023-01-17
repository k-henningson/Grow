import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./Cart.scss";

export default function Cart() {
  const data = [
    {
      id: 1,
      img: "https://raw.githubusercontent.com/k-henningson/Grow/main/client/src/docs/GlobePastelMix.webp",
      img2: "https://raw.githubusercontent.com/k-henningson/Grow/main/client/src/docs/GlobePastelMix2.webp",
      title: "Globe Amaranth Pastel Mix",
      oldPrice: 5.95,
      price: 4.95,
    },
    {
      id: 2,
      img: "https://raw.githubusercontent.com/k-henningson/Grow/main/client/src/docs/Strawflower.webp",
      img2: "https://raw.githubusercontent.com/k-henningson/Grow/main/client/src/docs/Strawflower2.webp",
      title: "Strawflower Silvery Rose",
      oldPrice: 5.95,
      price: 4.95,
    },
  ];

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="flowers" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$5.95</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Empty Cart</span>
    </div>
  );
}
