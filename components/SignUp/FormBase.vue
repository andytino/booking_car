<script lang="ts" setup>
import type { FormError } from "#ui/types";
import type { IFormSignUpState } from "./type";

const emit = defineEmits(["signUp"]);

const formSignUpState = reactive<IFormSignUpState>({
  email: "",
  password: "",
});

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.email) errors.push({ path: "email", message: "Required" });
  if (!state.password) errors.push({ path: "password", message: "Required" });
  return errors;
};

const handleSignUp = () => {
  emit("signUp", formSignUpState);
};
</script>

<template>
  <div class="flex flex-col items-center">
    <UForm
      class="flex flex-col items-center"
      :validate="validate"
      :state="formSignUpState"
      @submit="handleSignUp"
    >
      <UFormGroup label="Email" name="email">
        <UInput v-model="formSignUpState.email" />
      </UFormGroup>

      <UFormGroup label="Password" name="password">
        <UInput v-model="formSignUpState.password" type="password" />
      </UFormGroup>

      <UButton type="submit">Sign Up</UButton>
    </UForm>
  </div>
</template>
