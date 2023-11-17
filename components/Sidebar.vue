<script lang="ts" setup>
import { ADMIN_NAVIGATION } from "~/constants/navigation";

const user = useSupabaseUser();
const supabase = useSupabaseClient();
const router = useRouter();

const isMinimize = ref<boolean>(true);

const hdShowSidebar = () => {
  isMinimize.value = !isMinimize.value;
};

const SIDEBAR = computed(() => {
  return ADMIN_NAVIGATION();
});

const hdLogout = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    router.push("/");
  } catch (err) {}
};
</script>
<template>
  <div class="h-full flex flex-col items-center">
    <div class="flex items-center w-full py-4">
      <p class="flex-auto text-center">LOGO</p>
      <UButton @click="hdShowSidebar" class="w-10">a</UButton>
    </div>
    <UVerticalNavigation :links="SIDEBAR" class="flex-auto py-4">
      <template #default="{ link }">
        <p class="group-hover:text-primary relative flex">
          <SvgIcon :icon="link.icon" width="20" class="mr-2"></SvgIcon>
          <span>{{ link.label }}</span>
        </p>
      </template>
    </UVerticalNavigation>
    <UButton class="w-fit" @click="hdLogout">Logout</UButton>
  </div>
</template>
