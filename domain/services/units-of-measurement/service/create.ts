import { SupabaseClient } from "@supabase/supabase-js";
import { UnitOfMeasurementSummary } from "../types/UnitOfMeasurementSummary";

export const create =
  (supabase: SupabaseClient) =>
  async (unitOfMeasurement: UnitOfMeasurementSummary) => {
    const { data, error } = await supabase
      .from("unit_of_measurement")
      .insert(unitOfMeasurement)
      .select(`*`)
      .single();
    if (error) throw error;
    return data;
  };
