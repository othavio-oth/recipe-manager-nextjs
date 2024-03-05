import { SupabaseClient } from "@supabase/supabase-js";

export const remove = (supabase: SupabaseClient) => async (id: string) => {
  const { error } = await supabase
    .from("unit_of_measurement")
    .update({ deleted_at: new Date().toISOString() })
    .eq("id", id);

  if (error) throw error;
};
