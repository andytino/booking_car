import { serverSupabaseServiceRole } from "#supabase/server";
import { Database } from "~/types/supabase";

export default eventHandler(async (event) => {
  const body = await readBody(event);
  const id = event.context.params?.id || "";

  const service = serverSupabaseServiceRole<Database>(event);

  const { data, error } = await service.auth.admin.updateUserById(id, {
    user_metadata: {
      role_id: body.role_id,
      full_name: body.full_name,
      is_active: body.is_active,
      phone_number: body.phone_number,
      citizen_id: body.citizen_id,
      is_online: body.is_online,
    },
  });

  return { data, error };
});
