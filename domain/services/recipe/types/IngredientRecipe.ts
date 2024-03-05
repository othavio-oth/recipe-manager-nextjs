import { Ingredient } from "../../ingredient/types/Ingredient";
import { UnitOfMeasurement } from "../../units-of-measurement/types/UnitOfMeasurement";
import { RecipeSummary } from "./RecipeSummary";

export type IngredientRecipe = {
  id: string;
  recipe: RecipeSummary;
  ingredient: Ingredient;
  amount: number;
  unitOfMeasurement: UnitOfMeasurement;
};
