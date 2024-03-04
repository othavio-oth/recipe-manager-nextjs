import { SupabaseClient } from "@supabase/supabase-js";
import { IngredientSummary } from "../types/IngredientSummary";

export const create =
  (supabase: SupabaseClient) => async (ingredient: IngredientSummary) => {
    const { data, error } = await supabase
      .from("ingredients")
      .insert(ingredient)
      .select(`*`)
      .single();
    if (error) throw error;
    return data;
  };
