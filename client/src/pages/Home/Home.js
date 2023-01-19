import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Slider from "../../components/Slider/Slider";
import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact"
import "./Home.scss";

export default function Home() {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="POPULAR"/>
      <Categories />
      <FeaturedProducts type="FEATURED"/>
      <Contact />
    </div>
  );
}
