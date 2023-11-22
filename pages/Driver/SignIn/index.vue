<script lang="ts" setup>
import type { IFormSignInState } from "~/components/SignIn/type";
import { ROUTES } from "~/constants/routes";

definePageMeta({
  layout: "default",
  colorMode: "light",
});

const supabase = useSupabaseClient();
const toast = useToast();
const isLoading = ref<boolean>(false);

const hdLSignIn = async (formSignIn: IFormSignInState) => {
  try {
    isLoading.value = true;
    const { error } = await supabase.auth.signInWithPassword({
      email: formSignIn.email,
      password: formSignIn.password,
    });
    if (error) throw error;

    navigateTo(ROUTES.driverSignIn);
  } catch (err) {
    toast.add({ title: "Lỗi!!", color: "red" });
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="flex flex-col items-center">
    <img src="../../../assets/images/driver-logo.png" alt="" width="58" height="50" />
    <h1 class="font-bold text-2xl mt-5">Đăng nhập</h1>
    <SignInFormBase
      class="mt-10"
      :use-sign-up-text="false"
      :is-loading="isLoading"
      :route-forgot-password="ROUTES.driverForgotPassword"
      @sign-in="hdLSignIn"
    />
    <p class="max-w-[250px] flex-wrap mt-8 p-4 bg-blue-50 text-white rounded-xl text-sm">
      Bạn muốn cộng tác làm tài xế. <br />Hãy liên hệ Tổng đài
      <span class="font-medium">1900.0000</span> để được hướng dẫn.
    </p>
    <span class="underline text-xs cursor-pointer mt-4" @click="navigateTo(ROUTES.main)"
      >Quay lại Trang chủ</span
    >
  </div>
</template>
