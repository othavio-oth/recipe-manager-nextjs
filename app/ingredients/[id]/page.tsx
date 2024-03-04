import { services } from "@/domain/services";

const IngredientDetails = async ({ params }: { params: { id: string } }) => {
  const ingredient = await services()
    .ingredients.id(decodeURIComponent(params.id))
    .get();

  return <h1>{ingredient.name}</h1>;
};

export default IngredientDetails;
