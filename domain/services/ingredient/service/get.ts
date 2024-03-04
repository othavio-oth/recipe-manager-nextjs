import { SupabaseClient } from "@supabase/supabase-js";

export const get = (supabase: SupabaseClient) => async (id: string) => {
  const { data, error } = await supabase
    .from("ingredients")
    .select("*")
    .is("deleted_at", null)
    .eq("id", id)
    .single();

  return data;
};
