const RecipeDetails = ({ params }: { params: { id: string } }) => {
  return <h1>Hello RecipeDetails {params.id}</h1>;
};
export default RecipeDetails;
