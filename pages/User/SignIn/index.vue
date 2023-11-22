<script lang="ts" setup>
import type { IFormSignInState } from "~/components/SignIn/type";
import { ROUTES } from "~/constants/routes";
import { ROLES } from "~/types/roles";

definePageMeta({
  layout: "default",
  colorMode: "light",
});
const supabase = useSupabaseClient();
const toast = useToast();
const isLoading = ref<boolean>(false);

const hdSignInWithGoogle = async (isSignInWithGoogle: boolean) => {
  if (isSignInWithGoogle) {
    try {
      isLoading.value = true;
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      if (error) throw error;

      navigateTo(ROUTES.userHome);
    } catch (err) {
      toast.add({ title: "Lỗi!!", color: "red" });
      isLoading.value = false;
    }
  }
};

const hdSignIn = async (formSignIn: IFormSignInState) => {
  try {
    isLoading.value = true;
    const { data, error } = await supabase.auth.signInWithPassword({
      email: formSignIn.email,
      password: formSignIn.password,
    });
    if (error) throw error;

    if (data.user.user_metadata.role_id !== ROLES.user) {
      isLoading.value = false;
      throw Error;
    }

    navigateTo(ROUTES.userHome);
  } catch (err) {
    toast.add({ title: "Lỗi!!", color: "red" });
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="flex flex-col items-center">
    <img src="../../../assets/images/user-logo.png" alt="" width="58" height="50" />
    <h1 class="font-bold text-2xl mt-5">Đăng nhập</h1>
    <SignInFormBase
      class="mt-10"
      :is-sign-in-with-google="true"
      @sign-in="hdSignIn"
      @sign-in-with-google="hdSignInWithGoogle"
      :is-loading="isLoading"
    />
    <span class="underline text-xs cursor-pointer mt-4" @click="navigateTo(ROUTES.userHome)"
      >Quay lại Trang chủ</span
    >
  </div>
</template>
