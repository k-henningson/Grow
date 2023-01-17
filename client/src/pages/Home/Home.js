import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Slider from "../../components/Slider/Slider";
import Categories from "../../components/Categories/Categories";
import "./Home.scss";

export default function Home() {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts />
      <Categories />
    </div>
  );
}
