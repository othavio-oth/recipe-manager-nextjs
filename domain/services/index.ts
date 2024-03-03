import { SupabaseClient } from '@supabase/supabase-js'
import * as ingredient from './ingredient'

export const services = (supabase:SupabaseClient)=>({
    ingredients:()=>({
        list: ingredient.get(supabase)
    })
})