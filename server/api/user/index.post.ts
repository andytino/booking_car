import { serverSupabaseClient } from "#supabase/server";
import { Database } from "~/types/supabase";

export default eventHandler(async (event) => {
  const body = await readBody(event);

  const client = await serverSupabaseClient<Database>(event);

  const { data, error } = await client.auth.signUp({
    email: body.email,
    password: body.password,
    options: {
      data: {
        role_id: body.role_id,
        is_active: body.is_active,
        full_name: body.full_name,
        phone_number: body.phone_number,
      },
    },
  });

  return { data, error };
});
