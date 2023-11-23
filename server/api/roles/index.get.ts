import { serverSupabaseClient } from "#supabase/server";
import { Database } from "~/types/supabase";

export default eventHandler(async (event) => {
  const client = await serverSupabaseClient<Database>(event);

  const { data, error } = await client.from("roles").select("*");

  const roles = data?.map((role) => {
    return {
      role_id: Number(role.id),
      role_name: role.role_name,
    };
  });

  return { roles, error };
});
