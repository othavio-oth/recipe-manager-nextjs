export const fromModel = (model: any) => {
  return {
    id: model.id,
    name: model.name,
    description: model.description,
    ingredients: model.ingredients,
    instructions: model.instructions,
  };
};
