import "./FeaturedProducts.scss";
import Card from "../Card/Card";

export default function FeaturedProducts({ type }) {
  const data = [
    {
      id: 1,
      img: "",
      img2: "",
      title: "",
      isNew: true,
      oldPrice: 2,
      price: 1,
    },
    {
      id: 2,
      img: "",
      img2: "",
      title: "",
      isNew: true,
      oldPrice: 2,
      price: 1,
    },
    {
      id: 3,
      img: "",
      img2: "",
      title: "",
      isNew: true,
      oldPrice: 2,
      price: 1,
    },
    {
      id: 4,
      img: "",
      img2: "",
      title: "",
      isNew: true,
      oldPrice: 2,
      price: 1,
    },
  ];

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
          amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt ut
          labore etdolore.
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
