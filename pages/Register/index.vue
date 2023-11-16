<script lang="ts" setup>
import type { FormError, FormSubmitEvent } from "#ui/types";

interface IFormRegisterState {
  email: string;
  password: string;
}

definePageMeta({
  colorMode: "light",
});
const supabase = useSupabaseClient();
const router = useRouter();

const config = useRuntimeConfig();

const formRegisterState = reactive<IFormRegisterState>({
  email: "",
  password: "",
});

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.email) errors.push({ path: "email", message: "Required" });
  if (!state.password) errors.push({ path: "password", message: "Required" });
  return errors;
};

const handleRegister = async () => {
  console.log("form", formRegisterState);

  try {
    const { error } = await supabase.auth.signUp({
      email: formRegisterState.email,
      password: formRegisterState.password,
    });

    if (error) console.log(error);

    router.push("/login");
  } catch (err) {}
};
</script>

<template>
  <div class="flex flex-col items-center">
    <h1 class="font-bold text-xl">REGISTER</h1>

    <UForm
      class="flex flex-col items-center"
      :validate="validate"
      :state="formRegisterState"
      @submit="handleRegister"
    >
      <UFormGroup label="Email" name="email">
        <UInput v-model="formRegisterState.email" />
      </UFormGroup>

      <UFormGroup label="Password" name="password">
        <UInput v-model="formRegisterState.password" type="password" />
      </UFormGroup>

      <UButton type="submit"> Register </UButton>
    </UForm>
  </div>
</template>
