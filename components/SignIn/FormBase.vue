<script lang="ts" setup>
import type { FormError } from "#ui/types";
import type { IFormSignInState } from "~/components/SignIn/type";
import { ROUTES } from "~/constants/routes";

const emit = defineEmits(["signIn", "signInWithGoogle"]);

interface Props {
  isSignInWithGoogle?: boolean;
  useSignUpText: boolean;
  isLoading?: boolean;
  routeSignUp?: string;
  routeForgotPassword?: string;
}

const props = withDefaults(defineProps<Props>(), {
  isSignInWithGoogle: false,
  useSignUpText: true,
  isLoading: false,
  routeSignUp: ROUTES.main,
  routeForgotPassword: ROUTES.main,
});

const formSignInState = reactive<IFormSignInState>({
  email: "",
  password: "",
});

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.email) errors.push({ path: "email", message: "Bắt buộc!" });
  if (!state.password) errors.push({ path: "password", message: "Bắt buộc!" });
  return errors;
};

const handleSignIn = () => {
  emit("signIn", formSignInState);
};

const hdSignInWithGoogle = () => {
  emit("signInWithGoogle", props.isSignInWithGoogle);
};

const hdSignUp = () => {
  navigateTo(props.routeSignUp);
};

const hdNavigateToForgotPassword = () => {
  navigateTo(props.routeForgotPassword);
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
      <UFormGroup label="Email" name="email" class="w-60">
        <UInput v-model="formSignInState.email" color="green" variant="outline" />
      </UFormGroup>

      <UFormGroup label="Mật khẩu" name="password" class="w-60 mt-5">
        <UInput
          v-model="formSignInState.password"
          type="password"
          color="green"
          variant="outline"
        />
      </UFormGroup>
      <div class="flex items-center justify-between w-full mt-3">
        <UCheckbox label="Lưu mật khẩu"></UCheckbox>
        <span
          class="text-secondary font-medium cursor-pointer text-xs"
          @click="hdNavigateToForgotPassword"
          >Quên mật khẩu</span
        >
      </div>

      <p v-if="useSignUpText" class="text-xs mt-2">
        Bạn không có tài khoản?
        <span class="text-secondary font-medium cursor-pointer" @click="hdSignUp">Đăng ký</span>
      </p>

      <template v-if="props.isSignInWithGoogle">
        <div class="flex items-center justify-center w-full mt-5">
          <hr class="flex-1 border-t-2 border-gray-200" />
          <span class="px-4">OR</span>
          <hr class="flex-1 border-t-2 border-gray-200" />
        </div>
        <UButton
          color="white"
          class="flex justify-center w-full mt-5 border-[1.3px] border-solid border-secondary py-2"
          label="Đăng nhập với Google"
          @click="hdSignInWithGoogle"
        >
          <template #leading>
            <SvgIcon icon="google-logo" width="24" height="24" />
          </template>
        </UButton>
      </template>

      <UButton class="bg-secondary mt-10" type="submit" :loading="isLoading">Đăng nhập</UButton>
    </UForm>
  </div>
</template>
