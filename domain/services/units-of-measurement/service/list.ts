import { SupabaseClient } from "@supabase/supabase-js";

export const list = async (supabase: SupabaseClient) => {
  const { data, error } = await supabase
    .from("unit_of_measurement")
    .select("*");
  if (error) throw error;

  return data;
};
