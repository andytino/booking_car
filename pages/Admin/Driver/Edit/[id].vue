<script lang="ts" setup>
import { ROLES } from "../../../../types/roles";
import { STATUS, type IFormDriverState } from "~/components/Driver/type";
import { ROUTES } from "~/constants/routes";

definePageMeta({
  layout: "auth-admin",
  middleware: ["auth-admin"],
  colorMode: "light",
});

const route = useRoute();
const toast = useToast();

const idDriver = route.params.id || "";
const isLoading = ref<boolean>(false);

const driver = ref<IFormDriverState>({
  email: "",
  fullName: "",
  isActive: STATUS.ACTIVE,
  phoneNumber: "",
  citizenId: "",
});

const hdEditDriver = async (formAccountState: IFormDriverState) => {
  try {
    isLoading.value = true;
    const { error } = await useFetch(`/api/driver/${idDriver}`, {
      method: "PATCH",
      body: {
        is_active: formAccountState.isActive,
        full_name: formAccountState.fullName,
        phone_number: formAccountState.phoneNumber,
        citizen_id: formAccountState.citizenId,
        is_online: STATUS.INACTIVE,
        role_id: ROLES.driver,
      },
    });
    if (error.value) throw error;
    navigateTo(ROUTES.adminDriver);
  } catch (err) {
    toast.add({ title: "Lỗi!!", color: "red" });
    isLoading.value = false;
  }
};

const getDriver = async () => {
  try {
    isLoading.value = true;
    const { data, error } = await useFetch(`/api/driver/${idDriver}`);

    if (error.value) throw error;
    const result = data.value?.data;
    driver.value = {
      email: result?.email || "",
      fullName: result?.full_name || "",
      isActive: STATUS[result?.is_active ? "ACTIVE" : "INACTIVE"],
      phoneNumber: result?.phone_number || "",
      citizenId: result?.citizen_id || "",
    };
    isLoading.value = false;
  } catch (err) {
    isLoading.value = false;
  }
};

getDriver();
</script>
<template>
  <div class="flex flex-col pl-20">
    <BackBtn :url-back="ROUTES.adminAccount"></BackBtn>
    <h1 class="font-medium text-2xl">Chỉnh sửa tài khoản</h1>
    <DriverFormBase
      class="mt-5"
      :driver="driver"
      :url-back="ROUTES.adminAccount"
      :is-loading="isLoading"
      :is-edit="true"
      @submit="hdEditDriver"
    ></DriverFormBase>
  </div>
</template>
