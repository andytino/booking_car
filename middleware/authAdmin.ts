import { ROUTES } from "~/constants/routes";
import { ROLES } from "~/types/roles";

export default defineNuxtRouteMiddleware(async () => {
  console.log("aaa");
  const supabase = useSupabaseClient();
  const user = useSupabaseUser();
  const userRole = user.value?.user_metadata.role_id;

  if (!user.value) {
    return navigateTo(ROUTES.adminLogin);
  } else if (![ROLES.admin, ROLES.staff].includes(userRole)) {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return navigateTo(ROUTES.adminLogin);
  }
});
