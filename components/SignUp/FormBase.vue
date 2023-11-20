<script lang="ts" setup>
import type { FormError } from "#ui/types";
import { ROUTES } from "~/constants/routes";
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

const hdNavigateToSignIn = () => {
  navigateTo(ROUTES.userSignIn);
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
      <UFormGroup label="Email" name="email" class="w-60">
        <UInput v-model="formSignUpState.email" color="green" variant="solid" />
      </UFormGroup>

      <UFormGroup label="Password" name="password" class="w-60 mt-5">
        <UInput v-model="formSignUpState.password" type="password" color="green" variant="solid" />
      </UFormGroup>

      <UButton class="bg-secondary mt-10" type="submit">Đăng ký</UButton>

      <p class="text-xs mt-4">
        Tôi đã là thành viên!
        <span class="text-secondary font-medium cursor-pointer" @click="hdNavigateToSignIn"
          >Đăng nhập</span
        >
      </p>
    </UForm>
  </div>
</template>
