<script lang="ts" setup>
import { STATUS, type IFormAccountState } from "~/components/Account/type";
import { ROUTES } from "~/constants/routes";
import { ROLES } from "~/types/roles";
import type { Database } from "~/types/supabase";

definePageMeta({
  layout: "auth-admin",
  middleware: ["auth-admin"],
  colorMode: "light",
});

const route = useRoute();
const toast = useToast();

const idAccount = route.params.id || "";
const isLoading = ref<boolean>(false);

const user = ref<IFormAccountState>({
  email: "",
  password: "",
  fullName: "",
  role: ROLES.staff,
  isActive: STATUS.ACTIVE,
  phoneNumber: "",
});

const hdEditAccount = async (formAccountState: IFormAccountState) => {
  console.log("formAccountState", formAccountState);

  try {
    isLoading.value = true;
    const { error } = await useFetch(`/api/user/${idAccount}`, {
      method: "PUT",
      body: {
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

const getUser = async () => {
  try {
    const { data, error } = await useFetch(`/api/user/${idAccount}`);

    if (error.value) throw error;
    const result = data.value?.data;
    console.log("result", result);
    user.value = {
      email: result?.email || "",
      fullName: result?.full_name || "",
      role: result?.role_id || 4,
      isActive: STATUS[result?.is_active ? "ACTIVE" : "INACTIVE"],
      phoneNumber: result?.phone_number || "",
    };
  } catch (err) {}
};

getUser();
</script>
<template>
  <div class="flex flex-col pl-20">
    <BackBtn :url-back="ROUTES.adminAccount"></BackBtn>
    <h1 class="font-medium text-2xl">Chỉnh sửa tài khoản</h1>
    <AccountFormBase
      class="mt-5"
      :user="user"
      :url-back="ROUTES.adminAccount"
      :is-loading="isLoading"
      :is-edit="true"
      @submit="hdEditAccount"
    ></AccountFormBase>
  </div>
</template>
