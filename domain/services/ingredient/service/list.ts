import { SupabaseClient } from "@supabase/supabase-js";

export const list = async (supabase: SupabaseClient) => {
  const { data, error } = await supabase.from("ingredients").select("*");
  return data;
};
