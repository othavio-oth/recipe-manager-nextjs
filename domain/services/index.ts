import { createClient } from '@supabase/supabase-js'
import * as Ingredient from './ingredient'

export const services =  ()=>{
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!!)

    const services = {
        ingredients: {
            list: async () => {
                return await Ingredient.get(supabase);
            }
        }
    }
    return services;

}