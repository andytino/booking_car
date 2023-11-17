<script lang="ts" setup>
import type { IFormLoginState } from "~/components/LoginBase.vue";
import { ROUTES } from "~/constants/routes";

definePageMeta({
  colorMode: "light",
});
const supabase = useSupabaseClient();
const router = useRouter();

const hdLogin = async (formLogin: IFormLoginState) => {
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: formLogin.email,
      password: formLogin.password,
    });
    if (error) console.log(error);

    router.push(ROUTES.adminDashboard);
  } catch (err) {}
};
</script>

<template>
  <div class="flex flex-col items-center">
    <h1 class="font-bold text-xl">ADMIN LOGIN</h1>
    <LoginBase @login="hdLogin" />
  </div>
</template>
