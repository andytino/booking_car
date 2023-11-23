<script lang="ts" setup>
import { ROUTES } from "~/constants/routes";
import type { Database } from "~/types/supabase";

definePageMeta({
  layout: "auth-admin",
  middleware: ["auth-admin"],
  colorMode: "light",
});

type IDriver = Database["public"]["Tables"]["drivers"]["Row"];
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

  {
    key: "actions",
  },
];

const items = (row: IDriver) => [
  [
    {
      label: "Chỉnh sửa",
      icon: "edit",
      click: () => {
        navigateTo(ROUTES.adminEditDriver(row.id));
      },
    },
    {
      label: "Xoá",
      icon: "trash",
      click: async () => {
        try {
          const { error } = await useFetch(`/api/driver/${row.id}`, {
            method: "PUT",
          });
          if (error.value) throw error;

          getDrivers();
        } catch (err) {
          toast.add({ title: "Lỗi!!", color: "red" });
        }
      },
    },
  ],
];

const hdNavigateToCreate = () => {
  navigateTo(ROUTES.adminCreateDriver);
};

const drivers = ref<IDriver[]>([]);

const getDrivers = async () => {
  try {
    isLoading.value = true;
    const { data, error } = await useFetch("/api/drivers");
    if (error.value) throw error.value.message;
    drivers.value =
      data.value?.data?.map((driver) => {
        return {
          ...driver,
        };
      }) || [];
    isLoading.value = false;
  } catch (err) {
    isLoading.value = false;
  }
};

getDrivers();
</script>

<template>
  <div>
    <h1 class="font-medium text-xl">DANH SÁCH TÀI XẾ</h1>
    <div class="flex justify-end">
      <UButton class="bg-secondary w-20 justify-center" @click="hdNavigateToCreate">Tạo</UButton>
    </div>
    <div>
      <UTable :rows="drivers" :columns="columns" :loading="isLoading">
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
