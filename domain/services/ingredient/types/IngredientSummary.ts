import { Ingredient } from "./Ingredient";

export type IngredientSummary = Omit<Ingredient, "id">;
