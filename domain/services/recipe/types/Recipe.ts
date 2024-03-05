import { IngredientRecipe } from "../../../types/IngredientRecipe";

export type Recipe = {
  id: string;
  name: string;
  description: string;
  ingredients: IngredientRecipe[];
  instructions: string;
};
