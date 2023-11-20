<script lang="ts" setup>
import type { IFormSignUpState } from "~/components/SignUp/type";
import { ROUTES } from "~/constants/routes";
import { ROLES } from "~/types/roles";

definePageMeta({
  layout: "default",
  colorMode: "light",
});
const supabase = useSupabaseClient();

const handleSignUp = async (formSignUpState: IFormSignUpState) => {
  try {
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

    if (error) throw error;

    navigateTo(ROUTES.userSignIn);
  } catch (err) {}
};
</script>

<template>
  <div class="flex flex-col items-center">
    <img src="../../../assets/images/user-logo.png" alt="" width="58" height="50" />
    <h1 class="font-bold text-2xl mt-5">Đăng ký</h1>
    <SignUpFormBase class="mt-10" @sign-up="handleSignUp" />
  </div>
</template>
