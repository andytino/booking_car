<script lang="ts" setup>
import type { FormError } from "#ui/types";

export interface IFormLoginState {
  email: string;
  password: string;
}

const emit = defineEmits(["login"]);

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

const handleLogin = () => {
  emit("login", formLoginState);
};
</script>

<template>
  <div class="flex flex-col items-center">
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
