import { serverSupabaseClient } from "#supabase/server";
import { Database } from "~/types/supabase";

export default eventHandler(async (event) => {
  const id = event.context.params?.id || "";

  const client = await serverSupabaseClient<Database>(event);
  let user = null;
  const { data, error } = await client.from("drivers").select("*").eq("id", id);

  if (data && data?.length > 0) {
    user = data[0];
  }
  console.log("rr", user);
  return { data: user, error };
});
