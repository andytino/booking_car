<script lang="ts" setup>
import type { IFormSignInState } from "~/components/SignIn/type";
import { ROUTES } from "~/constants/routes";

definePageMeta({
  layout: "default",
  colorMode: "light",
});
const supabase = useSupabaseClient();

const hdSignIn = async (formSignIn: IFormSignInState) => {
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: formSignIn.email,
      password: formSignIn.password,
    });
    if (error) console.log(error);

    navigateTo(ROUTES.adminDashboard);
  } catch (err) {}
};
</script>

<template>
  <div class="flex flex-col items-center">
    <img src="../../../assets/images/call-center-logo.png" alt="" width="80" height="60" />
    <h1 class="font-bold text-2xl mt-5">Đăng nhập</h1>
    <SignInFormBase class="mt-10" @sign-in="hdSignIn" :use-sign-up-text="false" />
  </div>
</template>
