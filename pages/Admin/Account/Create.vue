<script lang="ts" setup>
import type { IFormAccountState } from "~/components/Account/type";
import { ROUTES } from "~/constants/routes";

definePageMeta({
  layout: "auth-admin",
  middleware: ["auth-admin"],
  colorMode: "light",
});

const hdCreateAccount = async (formAccountState: IFormAccountState) => {
  try {
    const { error } = await useFetch("/api/users", {
      method: "POST",
      body: {
        email: formAccountState.email,
        password: formAccountState.password,
        role_id: formAccountState.role,
        is_active: formAccountState.isActive,
        full_name: formAccountState.fullName,
      },
    });
    if (error) throw error;
    navigateTo(ROUTES.adminAccount);
  } catch (err) {}
};
</script>
<template>
  <div class="flex flex-col pl-10">
    <BackBtn :url-back="ROUTES.adminAccount"></BackBtn>
    <h1 class="font-medium text-2xl mt-5">Tạo tài khoản</h1>
    <AccountFormBase
      class="mt-5"
      :url-back="ROUTES.adminAccount"
      @submit="hdCreateAccount"
    ></AccountFormBase>
  </div>
</template>
