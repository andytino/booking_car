<script lang="ts" setup>
import { ADMIN_NAVIGATION } from "~/constants/navigation";
import { ROUTES } from "~/constants/routes";

const supabase = useSupabaseClient();
const user = useSupabaseUser();

const isMinimize = ref<boolean>(true);

const hdShowSidebar = () => {
  isMinimize.value = !isMinimize.value;
};

const SIDEBAR = computed(() => {
  return ADMIN_NAVIGATION().filter((i) => i.role.includes(user.value?.user_metadata.role_id || 0));
});

const hdSignOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    navigateTo(ROUTES.adminSignIn);
  } catch (err) {}
};
</script>
<template>
  <div class="h-full flex flex-col items-center bg-secondary">
    <div class="flex items-center w-full py-4">
      <div class="flex-auto flex justify-center">
        <SvgIcon icon="logo" width="40" height="45" />
      </div>
      <SvgIcon class="text-white mr-2" icon="menu" width="24" height="24" />
    </div>
    <UVerticalNavigation :links="SIDEBAR" class="flex-auto py-4">
      <template #default="{ link }">
        <p class="group-hover:text-secondary relative flex">
          <SvgIcon :icon="link.icon" width="20" class="mr-2"></SvgIcon>
          <span>{{ link.label }}</span>
        </p>
      </template>
    </UVerticalNavigation>
    <UButton class="w-fit bg-blue-50 mb-10" @click="hdSignOut" label="Sign out"> </UButton>
  </div>
</template>
