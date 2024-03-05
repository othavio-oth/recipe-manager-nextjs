import { services } from "@/domain/services";

const RecipeDetails = async ({ params }: { params: { id: string } }) => {
  const recipeId = decodeURIComponent(params.id);
  const recipe = await services().recipes.id(recipeId).get();

  return (
    <>
      <h1>{recipe?.name}</h1>
      <p>{recipe?.description}</p>
      <p>{recipe?.instructions}</p>
      <p>{recipe?.duration} minutes</p>
      Ingredients:
      <ul>
        {recipe?.ingredient_recipes.map((ingredient: any) => (
          <li key={ingredient.ingredient.id}>
            {ingredient.ingredient.name} - {ingredient.amount}{" "}
            {ingredient.unit_of_measurement.name}
          </li>
        ))}
      </ul>
    </>
  );
};
export default RecipeDetails;
