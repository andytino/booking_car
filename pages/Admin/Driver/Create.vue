<script lang="ts" setup>
import { ROUTES } from "~/constants/routes";
import { ROLES } from "~/types/roles";
import { STATUS, type IFormDriverState } from "~/components/Driver/type";

definePageMeta({
  layout: "auth-admin",
  middleware: ["auth-admin"],
  colorMode: "light",
});

const toast = useToast();
const isLoading = ref<boolean>(false);

const newUser: IFormDriverState = {
  email: "",
  password: "",
  fullName: "",
  isActive: STATUS.ACTIVE,
  phoneNumber: "",
  citizenId: "",
};

const hdCreateDriver = async (formAccountState: IFormDriverState) => {
  try {
    isLoading.value = true;
    const { error } = await useFetch("/api/driver", {
      method: "POST",
      body: {
        email: formAccountState.email,
        password: formAccountState.password,
        role_id: ROLES.driver,
        is_active: formAccountState.isActive,
        full_name: formAccountState.fullName,
        phone_number: formAccountState.phoneNumber,
        citizen_id: formAccountState.citizenId,
        is_online: STATUS.INACTIVE,
      },
    });
    if (error.value) throw error;
    navigateTo(ROUTES.adminDriver);
  } catch (err) {
    toast.add({ title: "Lỗi!!", color: "red" });
    isLoading.value = false;
  }
};
</script>
<template>
  <div class="flex flex-col pl-10">
    <BackBtn :url-back="ROUTES.adminDriver"></BackBtn>
    <h1 class="font-medium text-2xl mt-5">Tạo tài khoản</h1>
    <DriverFormBase
      class="mt-5"
      :url-back="ROUTES.adminDriver"
      :is-loading="isLoading"
      :user="newUser"
      @submit="hdCreateDriver"
    ></DriverFormBase>
  </div>
</template>
