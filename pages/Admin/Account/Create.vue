<script lang="ts" setup>
import { STATUS, type IFormAccountState } from "~/components/Account/type";
import { ROUTES } from "~/constants/routes";
import { ROLES } from "~/types/roles";

definePageMeta({
  layout: "auth-admin",
  middleware: ["auth-admin"],
  colorMode: "light",
});

const toast = useToast();
const isLoading = ref<boolean>(false);

const newUser: IFormAccountState = {
  email: "",
  password: "",
  fullName: "",
  role: ROLES.staff,
  isActive: STATUS.ACTIVE,
  phoneNumber: "",
};

const hdCreateAccount = async (formAccountState: IFormAccountState) => {
  try {
    isLoading.value = true;
    const { error } = await useFetch("/api/user", {
      method: "POST",
      body: {
        email: formAccountState.email,
        password: formAccountState.password,
        role_id: formAccountState.role,
        is_active: formAccountState.isActive,
        full_name: formAccountState.fullName,
        phone_number: formAccountState.phoneNumber,
      },
    });
    if (error.value) throw error;
    navigateTo(ROUTES.adminAccount);
  } catch (err) {
    toast.add({ title: "Lỗi!!", color: "red" });
    isLoading.value = false;
  }
};
</script>
<template>
  <div class="flex flex-col pl-10">
    <BackBtn :url-back="ROUTES.adminAccount"></BackBtn>
    <h1 class="font-medium text-2xl mt-5">Tạo tài khoản</h1>
    <AccountFormBase
      class="mt-5"
      :url-back="ROUTES.adminAccount"
      :is-loading="isLoading"
      :user="newUser"
      @submit="hdCreateAccount"
    ></AccountFormBase>
  </div>
</template>
