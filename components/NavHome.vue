<script lang="ts" setup>
import { ROUTES } from "~/constants/routes";

const items = [
  [
    {
      label: "Tài xế",
      click: () => {
        navigateTo(ROUTES.driverSignIn);
      },
    },
    {
      label: "Người dùng",
      click: () => {
        navigateTo(ROUTES.userSignIn);
      },
    },
  ],
];

const hdNavigateToSignUp = () => {
  navigateTo(ROUTES.userSingUp);
};
</script>
<template>
  <div class="w-full flex items-center py-4 px-5">
    <div><p>Logo</p></div>
    <div class="flex-auto"></div>
    <div class="flex items-center">
      <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
        <UButton color="white" label="Đăng nhập" />
      </UDropdown>
      <UButton color="white" label="Đăng ký" @click="hdNavigateToSignUp" />
    </div>
  </div>
</template>
