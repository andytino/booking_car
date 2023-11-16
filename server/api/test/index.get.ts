import { serverSupabaseClient } from "#supabase/server";
import { Database } from "~/types/supabase";

export default eventHandler(async (event) => {
  const client = await serverSupabaseClient<Database>(event);

  const { data, error } = await client.from("Test").select("*");
  return { data };
});
