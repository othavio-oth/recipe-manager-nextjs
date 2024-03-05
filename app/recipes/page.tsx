import { services } from "@/domain/services";
import Link from "next/link";

const Recipes = async () => {
  const recipes = await services().recipes.list();

  const links = recipes?.map((ingredient) => {
    return (
      <li key={ingredient.id}>
        <Link href={`/recipes/${ingredient.id}`}>{ingredient.name}</Link>
      </li>
    );
  });

  return <ul>{links}</ul>;
};

export default Recipes;
