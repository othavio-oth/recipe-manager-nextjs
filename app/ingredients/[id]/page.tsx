import { services } from "@/domain/services";

const IngredientDetails = async ({ params }: { params: { id: string } }) => {
  const ingredient = await services().ingredients.get(
    decodeURIComponent(params.id)
  );

  return <h1>{ingredient.name}</h1>;
};

export default IngredientDetails;
