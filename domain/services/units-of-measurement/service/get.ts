import { SupabaseClient } from "@supabase/supabase-js";

export const get = (supabase: SupabaseClient) => async (id: string) => {
  const { data, error } = await supabase
    .from("unit_of_measurement")
    .select("*")
    .is("deleted_at", null)
    .eq("id", id)
    .single();
  if (error) throw error;

  return data;
};
