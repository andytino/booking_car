<script lang="ts" setup>
import type { FormError } from "#ui/types";

export interface IFormSignInState {
  email: string;
  password: string;
}

const emit = defineEmits(["signIn"]);

const formSignInState = reactive<IFormSignInState>({
  email: "",
  password: "",
});

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.email) errors.push({ path: "email", message: "Required" });
  if (!state.password) errors.push({ path: "password", message: "Required" });
  return errors;
};

const handleSignIn = () => {
  emit("signIn", formSignInState);
};
</script>

<template>
  <div class="flex flex-col items-center">
    <UForm
      class="flex flex-col items-center"
      :validate="validate"
      :state="formSignInState"
      @submit="handleSignIn"
    >
      <UFormGroup label="Email" name="email">
        <UInput v-model="formSignInState.email" />
      </UFormGroup>

      <UFormGroup label="Password" name="password">
        <UInput v-model="formSignInState.password" type="password" />
      </UFormGroup>

      <UButton type="submit"> Sign In </UButton>
    </UForm>
  </div>
</template>
