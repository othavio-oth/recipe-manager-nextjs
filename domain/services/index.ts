import { createClient } from "@supabase/supabase-js";
import * as Ingredient from "./ingredient/service";
import * as UnitOfMeasurement from "./units-of-measurement/service";
import * as Recipe from "./recipe/service";
import { IngredientSummary } from "./ingredient/types/IngredientSummary";
import { UnitOfMeasurementSummary } from "./units-of-measurement/types/UnitOfMeasurementSummary";
import { RecipeSummary } from "./recipe/types/RecipeSummary";
export const services = () => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!!
  );

  const services = {
    ingredients: {
      list: () => Ingredient.list(supabase),
      id: (id: string) => ({
        get: () => Ingredient.get(supabase)(id),
        delete: () => Ingredient.remove(supabase)(id),
      }),
      create: (ingredient: IngredientSummary) =>
        Ingredient.create(supabase)(ingredient),
    },
    unitOfMeasurement: {
      list: () => UnitOfMeasurement.list(supabase),
      id: (id: string) => ({
        get: () => UnitOfMeasurement.get(supabase)(id),
        delete: () => UnitOfMeasurement.remove(supabase)(id),
      }),
      create: (unitOfMeasurement: UnitOfMeasurementSummary) =>
        UnitOfMeasurement.create(supabase)(unitOfMeasurement),
    },
    recipes: {
      list: () => Recipe.list(supabase),
      id: (id: string) => ({
        get: () => Recipe.get(supabase)(id),
        delete: () => Recipe.remove(supabase)(id),
      }),
      create: (recipe: RecipeSummary) => Recipe.create(supabase)(recipe),
    },
  };
  return services;
};
