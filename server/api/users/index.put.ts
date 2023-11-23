import { serverSupabaseServiceRole } from "#supabase/server";
import { Database } from "~/types/supabase";

export default eventHandler(async (event) => {
  const body = await readBody(event);

  const service = serverSupabaseServiceRole<Database>(event);
  const { data, error } = await service.auth.admin.deleteUser(body.id, true);

  return { data, error };
});
