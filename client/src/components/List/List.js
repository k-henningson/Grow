import Card from "../Card/Card";
import "./List.scss";
import useFetch from "../../hooks/useFetch";

export default function List({ maxPrice, sort, catId, subCats }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  console.log(data)

  return (
    <div className="list">
      {(data && data.length !== 0) ? data?.map((item) => <Card item={item} key={item.id} />) : "No products match filter"}
    </div>
  );
}
