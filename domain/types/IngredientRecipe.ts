import { Ingredient } from "./Ingredient";
import { UnitOfMeasurement } from "./UnitOfMeasurement";

export type IngredientRecipe = {
    id: string;
    ingredient: Ingredient;
    amount: number;
    unitOfMeasurement: UnitOfMeasurement;
}