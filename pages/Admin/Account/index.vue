<script lang="ts" setup>
import { ROLES } from "../../../types/roles";
import { ROUTES } from "~/constants/routes";
import type { Database } from "~/types/supabase";

definePageMeta({
  layout: "auth-admin",
  middleware: ["auth-admin"],
  colorMode: "light",
});

type IProfiles = Database["public"]["Tables"]["profiles"]["Row"];
const toast = useToast();
const isLoading = ref<boolean>(false);

const columns = [
  {
    key: "full_name",
    label: "Họ và tên",
  },

  {
    key: "email",
    label: "Email",
  },

  {
    key: "role_name",
    label: "Vai trò",
  },
  {
    key: "phone_number",
    label: "Số điện thoại",
  },

  {
    key: "actions",
  },
];

const items = (row: IProfiles) => [
  [
    {
      label: "Chỉnh sửa",
      icon: "edit",
      click: () => {
        navigateTo(ROUTES.adminEditAccount(row.id));
      },
    },
    {
      label: "Xoá",
      icon: "trash",
      disabled: row.role_id === ROLES.admin,
      click: async () => {
        try {
          const { error } = await useFetch(`/api/user/${row.id}`, {
            method: "PUT",
          });
          if (error.value) throw error;

          getAccounts();
        } catch (err) {
          toast.add({ title: "Lỗi!!", color: "red" });
        }
      },
    },
  ],
];

const hdNavigateToCreate = () => {
  navigateTo(ROUTES.adminCreateAccount);
};

const accounts = ref<IProfiles[]>([]);

const getAccounts = async () => {
  try {
    isLoading.value = true;
    const { data, error } = await useFetch("/api/users");
    if (error.value) throw error.value.message;
    accounts.value =
      data.value?.data?.map((account) => {
        return {
          ...account,
          role_name: ROLES[account.role_id || 4],
        };
      }) || [];
    isLoading.value = false;
  } catch (err) {
    isLoading.value = false;
  }
};

getAccounts();
</script>

<template>
  <div>
    <h1 class="font-medium text-xl">DANH SÁCH ADMIN, TỔNG ĐÀI VIÊN</h1>
    <div class="flex justify-end">
      <UButton class="bg-secondary w-20 justify-center" @click="hdNavigateToCreate"
        >Tạo mới</UButton
      >
    </div>
    <div>
      <UTable :rows="accounts" :columns="columns" :loading="isLoading">
        <template #actions-data="{ row }">
          <UDropdown :items="items(row)">
            <UButton color="gray" variant="ghost">
              <template #leading>
                <SvgIcon icon="more" width="12" height="12" />
              </template>
            </UButton>
            <template #item="{ item }">
              <SvgIcon width="16" height="16 " :icon="item.icon" />
              <span class="truncate">{{ item.label }}</span>
            </template>
          </UDropdown>
        </template>
      </UTable>
    </div>
  </div>
</template>
