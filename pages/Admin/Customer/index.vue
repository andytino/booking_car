<script lang="ts" setup>
import { ROUTES } from "~/constants/routes";
import type { Database } from "~/types/supabase";

definePageMeta({
  layout: "auth-admin",
  middleware: ["auth-admin"],
  colorMode: "light",
});

type ICustomers = Database["public"]["Tables"]["customers"]["Row"];
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
    key: "phone_number",
    label: "Số điện thoại",
  },

  // {
  //   key: "actions",
  // },
];

const items = (row: ICustomers) => [
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
      click: async () => {
        try {
          const { error } = await useFetch(`/api/user/${row.id}`, {
            method: "PUT",
          });
          if (error.value) throw error;

          getCustomers();
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

const customers = ref<ICustomers[]>([]);

const getCustomers = async () => {
  try {
    isLoading.value = true;
    const { data, error } = await useFetch("/api/customers");
    if (error.value) throw error.value.message;
    customers.value =
      data.value?.data?.map((account) => {
        return {
          ...account,
        };
      }) || [];
    isLoading.value = false;
  } catch (err) {
    isLoading.value = false;
  }
};

getCustomers();
</script>

<template>
  <div>
    <h1 class="font-medium text-xl">DANH SÁCH KHÁCH HÀNG</h1>
    <div class="flex justify-end">
      <UButton class="bg-secondary w-20 justify-center" :disabled="true" @click="hdNavigateToCreate"
        >Tạo mới</UButton
      >
    </div>
    <div>
      <UTable :rows="customers" :columns="columns" :loading="isLoading">
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
