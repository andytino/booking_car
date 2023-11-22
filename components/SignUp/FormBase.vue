<script lang="ts" setup>
import type { FormError } from "#ui/types";
import { ROUTES } from "~/constants/routes";
import type { IFormSignUpState } from "./type";

interface Props {
  isLoading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isLoading: false,
});

const emit = defineEmits(["signUp"]);

const formSignUpState = reactive<IFormSignUpState>({
  email: "",
  password: "",
});

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.email) errors.push({ path: "email", message: "Bắt buộc!" });
  if (!state.password) errors.push({ path: "password", message: "Bắt buộc!" });
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
        <UInput v-model="formSignUpState.email" color="green" variant="outline" />
      </UFormGroup>

      <UFormGroup label="Mật khẩu" name="password" class="w-60 mt-5">
        <UInput
          v-model="formSignUpState.password"
          type="password"
          color="green"
          variant="outline"
        />
      </UFormGroup>

      <UButton class="bg-secondary mt-10" type="submit" :loading="isLoading">Đăng ký</UButton>

      <p class="text-xs mt-4">
        Tôi đã là thành viên!
        <span class="text-secondary font-medium cursor-pointer" @click="hdNavigateToSignIn"
          >Đăng nhập</span
        >
      </p>
    </UForm>
  </div>
</template>
