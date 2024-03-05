import { Recipe } from "./Recipe";

export type RecipeSummary = Omit<Recipe, "id"|"description"|"instructions"|"ingredients">