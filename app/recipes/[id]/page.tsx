import { services } from "@/domain/services";

const RecipeDetails = async ({ params }: { params: { id: string } }) => {
  const recipeId = decodeURIComponent(params.id);
  const recipe = await services().recipes.id(recipeId).get();

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl mb-4">{recipe?.name}</h1>
      <p>Description: {recipe?.description}</p>
      <p> Instructions: {recipe?.instructions}</p>
      <p> Duration: {recipe?.duration} minutes</p>
      Ingredients:
      <ul>
        {recipe?.ingredient_recipes.map((ingredient: any) => (
          <li key={ingredient.ingredient.id}>
            {ingredient.ingredient.name} - {ingredient.amount}{" "}
            {ingredient.unit_of_measurement.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RecipeDetails;
