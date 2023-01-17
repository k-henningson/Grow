import Card from "../Card/Card"
import "./List.scss";

export default function List() {
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
    {
      id: 3,
      img: "https://raw.githubusercontent.com/k-henningson/Grow/main/client/src/docs/BreadseedPoppy.webp",
      img2: "https://raw.githubusercontent.com/k-henningson/Grow/main/client/src/docs/BreadseedPoppy2.webp",
      title: "Breadseed Poppy Frosted Salmon",
      oldPrice: 5.95,
      price: 4.95,
    },
    {
      id: 4,
      img: "https://raw.githubusercontent.com/k-henningson/Grow/main/client/src/docs/MarigoldStarfire.webp",
      img2: "https://raw.githubusercontent.com/k-henningson/Grow/main/client/src/docs/MarigoldStarfire2.webp",
      title: "Marigold Starfire Mix",
      oldPrice: 5.95,
      price: 4.95,
    },
  ];
  
  return <div className="list">{data?.map((item) =>(
    <Card item={item} key={item.id} />
  ))}</div>;
}
