<script lang="ts" setup>
import { ROUTES } from "~/constants/routes";

definePageMeta({
  layout: "auth-admin",
  middleware: ["auth-admin"],
  colorMode: "light",
});
const people = [
  {
    id: 1,
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    id: 2,
    name: "Courtney Henry",
    title: "Designer",
    email: "courtney.henry@example.com",
    role: "Admin",
  },
];
const columns = [
  {
    key: "name",
    label: "Name",
  },
  {
    key: "title",
    label: "Title",
  },
  {
    key: "email",
    label: "Email",
  },
  {
    key: "role",
    label: "Role",
  },
  {
    key: "actions",
  },
];

const items = (row) => [
  [
    {
      label: "Chỉnh sửa",
      icon: "edit",
      click: () => console.log("Edit", row.id),
    },
    {
      label: "Xoá",
      icon: "trash",
    },
  ],
];

const hdNavigateToCreate = () => {
  navigateTo(ROUTES.adminCreateAccount);
};

const { data } = await useFetch("/api/users");

console.log("data", data);
// fetchLibrary();
</script>

<template>
  <div>
    <h1>Account</h1>
    <div class="flex justify-end">
      <UButton class="bg-secondary w-20 justify-center" @click="hdNavigateToCreate">Tạo</UButton>
    </div>
    <div>
      <UTable :rows="people" :columns="columns">
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
