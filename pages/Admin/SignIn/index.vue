<script lang="ts" setup>
import type { IFormSignInState } from "~/components/SignIn/type";
import { ROUTES } from "~/constants/routes";

definePageMeta({
  layout: "default",
});
const supabase = useSupabaseClient();
const toast = useToast();
const isLoading = ref<boolean>(false);

const hdSignIn = async (formSignIn: IFormSignInState) => {
  try {
    isLoading.value = true;
    const { error } = await supabase.auth.signInWithPassword({
      email: formSignIn.email,
      password: formSignIn.password,
    });
    if (error) throw error;

    navigateTo(ROUTES.adminDashboard);
  } catch (err) {
    toast.add({ title: "Lỗi!!", color: "red" });
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="flex flex-col items-center">
    <SettingGroup></SettingGroup>
    <img src="../../../assets/images/call-center-logo.png" alt="" width="80" height="60" />
    <h1 class="font-bold text-2xl mt-5">Đăng nhập</h1>
    <SignInFormBase
      class="mt-10"
      :use-sign-up-text="false"
      :is-loading="isLoading"
      :route-forgot-password="ROUTES.adminForgotPassword"
      @sign-in="hdSignIn"
    />
  </div>
</template>
