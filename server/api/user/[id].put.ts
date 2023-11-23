import { serverSupabaseServiceRole } from "#supabase/server";
import { Database } from "~/types/supabase";

export default eventHandler(async (event) => {
  const body = await readBody(event);
  const id = event.context.params?.id || "";

  const service = serverSupabaseServiceRole<Database>(event);
  const { data, error } = await service.auth.admin.updateUserById(id, {
    user_metadata: {
      role_id: body.role,
      full_name: body.fullName,
      is_active: body.isActive,
      phone_number: body.phoneNumber,
    },
  });

  console.log("error", error);

  return { data, error };
});
