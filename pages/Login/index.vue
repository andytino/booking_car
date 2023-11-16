<script lang="ts" setup>
import type { FormError } from "#ui/types";

interface IFormLoginState {
  email: string;
  password: string;
}

definePageMeta({
  colorMode: "light",
});
const supabase = useSupabaseClient();
const router = useRouter();

const formLoginState = reactive<IFormLoginState>({
  email: "",
  password: "",
});

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.email) errors.push({ path: "email", message: "Required" });
  if (!state.password) errors.push({ path: "password", message: "Required" });
  return errors;
};

const hdLoginWithGoogle = async () => {
  try {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) console.log(error);

    router.push("/home");
  } catch (err) {}
};

const handleLogin = async () => {
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: formLoginState.email,
      password: formLoginState.password,
    });
    if (error) console.log(error);

    router.push("/home");
  } catch (err) {}
};
</script>

<template>
  <div class="flex flex-col items-center">
    <h1 class="font-bold text-xl">LOGIN</h1>
    <UButton @click="hdLoginWithGoogle">Google</UButton>

    <UForm
      class="flex flex-col items-center"
      :validate="validate"
      :state="formLoginState"
      @submit="handleLogin"
    >
      <UFormGroup label="Email" name="email">
        <UInput v-model="formLoginState.email" />
      </UFormGroup>

      <UFormGroup label="Password" name="password">
        <UInput v-model="formLoginState.password" type="password" />
      </UFormGroup>

      <UButton type="submit"> Login </UButton>
    </UForm>
  </div>
</template>
