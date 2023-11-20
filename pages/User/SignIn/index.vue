<script lang="ts" setup>
import type { IFormSignInState } from "~/components/SignIn/type";
import { ROUTES } from "~/constants/routes";

definePageMeta({
  layout: "default",
  colorMode: "light",
});
const supabase = useSupabaseClient();

const hdSignInWithGoogle = async (isSignInWithGoogle: boolean) => {
  if (isSignInWithGoogle) {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      if (error) console.log(error);

      navigateTo(ROUTES.userHome);
    } catch (err) {}
  }
};

const hdSignIn = async (formSignIn: IFormSignInState) => {
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: formSignIn.email,
      password: formSignIn.password,
    });
    if (error) console.log(error);

    navigateTo(ROUTES.userHome);
  } catch (err) {}
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
    />
  </div>
</template>
