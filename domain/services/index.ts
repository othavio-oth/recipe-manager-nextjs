import { createClient } from "@supabase/supabase-js";
import * as Ingredient from "./ingredient/service";
import { IngredientSummary } from "./ingredient/types/IngredientSummary";

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
  };
  return services;
};
