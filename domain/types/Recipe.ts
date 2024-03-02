import { IngredientRecipe } from "./IngredientRecipe";

export type Recipe = {
    id: string;
    name: string;
    description: string;
    ingredients: IngredientRecipe[];
    instructions: string;
}