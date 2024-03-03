import { SupabaseClient } from "@supabase/supabase-js";

export const get = async (supabase: SupabaseClient) => {
  const { data, error } = await supabase.from("ingredients").select("*");
  return data;
};
