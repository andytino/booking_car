<script lang="ts" setup>
import type { IFormSignInState } from "~/components/SignIn/type";
import { ROUTES } from "~/constants/routes";

definePageMeta({
  layout: "default",
  colorMode: "light",
});
const supabase = useSupabaseClient();
const router = useRouter();

const hdSignIn = async (formSignIn: IFormSignInState) => {
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: formSignIn.email,
      password: formSignIn.password,
    });
    if (error) console.log(error);

    router.push(ROUTES.adminDashboard);
  } catch (err) {}
};
</script>

<template>
  <div class="flex flex-col items-center">
    <h1 class="font-bold text-xl">ADMIN SIGN IN</h1>
    <SignInFormBase @sign-in="hdSignIn" />
  </div>
</template>
