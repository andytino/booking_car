<script lang="ts" setup>
import type { IFormSignInState } from "~/components/SignIn/type";
import { ROUTES } from "~/constants/routes";

definePageMeta({
  layout: "default",
  colorMode: "light",
});

const supabase = useSupabaseClient();
const router = useRouter();

const hdLSignIn = async (formSignIn: IFormSignInState) => {
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: formSignIn.email,
      password: formSignIn.password,
    });
    if (error) throw error;

    router.push(ROUTES.driverLogin);
  } catch (err) {}
};
</script>

<template>
  <div class="flex flex-col items-center">
    <h1 class="font-bold text-xl">DRIVER SIGN IN</h1>

    <SignInFormBase @sign-in="hdLSignIn" />
  </div>
</template>
