import { supabase } from "./client";

export default async function FetchData() {

  return supabase
    .from("diary")
    .select("*")
    .then(({ data }) => {
      return data || [];
    });
    
}