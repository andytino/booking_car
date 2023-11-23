import { serverSupabaseServiceRole } from "#supabase/server";
import { Database } from "~/types/supabase";

export default eventHandler(async (event) => {
  const id = event.context.params?.id || "";

  const service = serverSupabaseServiceRole<Database>(event);
  const { data, error } = await service.auth.admin.deleteUser(id, true);

  return { data, error };
});
