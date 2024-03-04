import { createClient } from '@supabase/supabase-js'
import * as Ingredient from './ingredient'

export const services =  ()=>{
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!!)

    const services = {
        ingredients: {
            list:  () => Ingredient.list(supabase),
            get: (id:string) => Ingredient.get(supabase)(id),
        }
    }
    return services;

}