import { services } from "@/domain/services";
import Link from "next/link";
const Ingredients = async () => {
  const ingredients = await services().ingredients.list();

  const links = ingredients?.map((ingredient) => {
    return (
      <li key={ingredient.id}>
        <Link href={`/ingredients/${ingredient.id}`}>{ingredient.name}</Link>
      </li>
    );
  });

  return <ul>{links}</ul>;
};
export default Ingredients;
