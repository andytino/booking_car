import { defineStore } from "pinia";
import type { Database } from "~/types/supabase";

type Roles = Pick<Database["public"]["Tables"]["roles"]["Row"], "role_id" | "role_name">;

export const useRolesStore = defineStore("roles", () => {
  const roles = ref<Roles[]>([]);
  const getRoles = async () => {
    const { data, error } = await useFetch("/api/roles");

    if (error.value) throw error.value.message;
    roles.value = data.value?.roles || [];
  };

  return {
    roles,
    getRoles,
  };
});
