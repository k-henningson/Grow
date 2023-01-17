import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Slider from "../../components/Slider/Slider"
import "./Home.scss"

export default function Home() {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts />
    </div>
  )
}