import { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://github.com/k-henningson/Grow/blob/main/client/src/docs/wateringSeedlings.jpeg?raw=true",
    "https://github.com/k-henningson/Grow/blob/main/client/src/docs/flowersInBuckets.jpeg?raw=true",
    "https://github.com/k-henningson/Grow/blob/main/client/src/docs/foxglove.jpeg?raw=true",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="flowers" />
        <img src={data[1]} alt="flowers" />
        <img src={data[2]} alt="flowers" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
}
