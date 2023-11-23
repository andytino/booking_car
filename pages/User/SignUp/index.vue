<script lang="ts" setup>
import type { IFormSignUpState } from "~/components/SignUp/type";
import { ROUTES } from "~/constants/routes";
import { ROLES } from "~/types/roles";

definePageMeta({
  layout: "default",
  colorMode: "light",
});
const supabase = useSupabaseClient();
const toast = useToast();
const isLoading = ref<boolean>(false);

const handleSignUp = async (formSignUpState: IFormSignUpState) => {
  try {
    isLoading.value = true;
    const { error } = await supabase.auth.signUp({
      email: formSignUpState.email,
      password: formSignUpState.password,
      options: {
        data: {
          role_id: ROLES.user,
          is_active: true,
        },
      },
    });

    console.log("error", error);

    if (error) throw error;

    navigateTo(ROUTES.userSignIn);
  } catch (err) {
    toast.add({ title: "Lỗi!!", color: "red" });
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="flex flex-col items-center">
    <img src="../../../assets/images/user-logo.png" alt="" width="58" height="50" />
    <h1 class="font-bold text-2xl mt-5">Đăng ký</h1>
    <SignUpFormBase class="mt-10" :is-loading="isLoading" @sign-up="handleSignUp" />
    <span class="underline text-xs cursor-pointer mt-4" @click="navigateTo(ROUTES.userHome)"
      >Quay lại Trang chủ</span
    >
  </div>
</template>
