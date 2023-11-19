<script lang="ts" setup>
import type { IFormSignUpState } from "./type";
import { ROLES } from "~/types/roles";

definePageMeta({
  layout: "default",
  colorMode: "light",
});
const supabase = useSupabaseClient();
const router = useRouter();

const formSignUpState = reactive<IFormSignUpState>({
  email: "",
  password: "",
});

const handleSignUp = async () => {
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

    router.push("/login");
  } catch (err) {}
};
</script>

<template>
  <div class="flex flex-col items-center">
    <h1 class="font-bold text-xl">SIGN UP</h1>

    <SignUpFormBase @sign-up="handleSignUp" />
  </div>
</template>
