import { ROUTES } from "~/constants/routes";
import { ROLES } from "~/types/roles";
import { useRolesStore } from "~/stores/role";

export default defineNuxtRouteMiddleware(async () => {
  const supabase = useSupabaseClient();
  const user = useSupabaseUser();
  const userRole = user.value?.user_metadata.role_id;

  const store = useRolesStore();
  const { getRoles } = store;
  const { roles } = storeToRefs(store);

  if (!roles.value.length) {
    await getRoles();
  }

  if (!user.value) {
    return navigateTo(ROUTES.adminSignIn);
  } else if (![ROLES.admin, ROLES.staff].includes(userRole)) {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return navigateTo(ROUTES.adminSignIn);
  }
});
