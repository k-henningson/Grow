import "./FeaturedProducts.scss";
import Card from "../Card/Card";

export default function FeaturedProducts({ type }) {
  const data = [
    {
      id: 1,
      img: "https://raw.githubusercontent.com/k-henningson/Grow/main/client/src/docs/GlobePastelMix.webp",
      img2: "https://raw.githubusercontent.com/k-henningson/Grow/main/client/src/docs/GlobePastelMix2.webp",
      title: "Globe Amaranth Pastel Mix",
      isNew: true,
      oldPrice: 5.95,
      price: 4.95,
    },
    {
      id: 2,
      img: "",
      img2: "",
      title: "Strawflower Silvery Rose",
      isNew: true,
      oldPrice: 5.95,
      price: 4.95,
    },
    {
      id: 3,
      img: "",
      img2: "",
      title: "Breadseed Poppy Frosted Salmon",
      isNew: true,
      oldPrice: 5.95,
      price: 4.95,
    },
    {
      id: 4,
      img: "",
      img2: "",
      title: "Marigold Starfire Mix",
      isNew: true,
      oldPrice: 5.95,
      price: 4.95,
    },
  ];

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} Popular Products</h1>
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
