import { SupabaseClient } from "@supabase/supabase-js";

export const get = (supabase: SupabaseClient) => async (id: string) => {
  const { data, error } = await supabase
    .from("recipes")
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
    .is("deleted_at", null)
    .eq("id", id)
    .single();
  if (error) throw error;
  return data;
};
