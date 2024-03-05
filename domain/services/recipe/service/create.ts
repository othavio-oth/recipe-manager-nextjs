import { SupabaseClient } from "@supabase/supabase-js";
import { RecipeSummary } from "../types/RecipeSummary";

export const create =
  (supabase: SupabaseClient) => async (recipe: RecipeSummary) => {
    const { data, error } = await supabase
      .from("recipes")
      .insert(recipe)
      .select(
        `
      *,
      ingredient_recipes (
        ingredient(name),
        unit_of_measurement(name),
        amount
      )
      `
      )
      .single();
    if (error) throw error;
    return data;
  };
