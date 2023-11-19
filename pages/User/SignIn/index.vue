<script lang="ts" setup>
import type { IFormSignInState } from "~/components/SignIn/type";
import { ROUTES } from "~/constants/routes";

definePageMeta({
  layout: "default",
  colorMode: "light",
});
const supabase = useSupabaseClient();
const router = useRouter();

const hdSignInWithGoogle = async () => {
  try {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) console.log(error);

    router.push(ROUTES.userHome);
  } catch (err) {}
};

const hdSignIn = async (formSignIn: IFormSignInState) => {
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: formSignIn.email,
      password: formSignIn.password,
    });
    if (error) console.log(error);

    router.push(ROUTES.userHome);
  } catch (err) {}
};
</script>

<template>
  <div class="flex flex-col items-center">
    <h1 class="font-bold text-xl">Sign In</h1>
    <UButton @click="hdSignInWithGoogle">Google</UButton>

    <SignInFormBase @sign-in="hdSignIn" />
  </div>
</template>
