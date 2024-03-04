import { Ingredient } from "../services/ingredient/types/Ingredient";
import { RecipeSummary } from "./RecipeSummary";
import { UnitOfMeasurement } from "./UnitOfMeasurement";

export type IngredientRecipe = {
  id: string;
  recipe: RecipeSummary;
  ingredient: Ingredient;
  amount: number;
  unitOfMeasurement: UnitOfMeasurement;
};
