<script lang="ts" setup>
import { ROUTES } from "~/constants/routes";
import type { Database } from "~/types/supabase";

definePageMeta({
  layout: "auth-admin",
  middleware: ["auth-admin"],
  colorMode: "light",
});

type IProfiles = Database["public"]["Tables"]["profiles"]["Row"];
const toast = useToast();

const columns = [
  {
    key: "full_name",
    label: "Name",
  },

  {
    key: "email",
    label: "Email",
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
  const { data } = await useFetch("/api/users");
  accounts.value = data.value?.data || [];
};

getAccounts();
</script>

<template>
  <div>
    <h1>Account</h1>
    <div class="flex justify-end">
      <UButton class="bg-secondary w-20 justify-center" @click="hdNavigateToCreate">Tạo</UButton>
    </div>
    <div>
      <UTable :rows="accounts" :columns="columns">
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
