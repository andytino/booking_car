<script lang="ts" setup>
import { ROUTES } from "~/constants/routes";

const items = [
  [
    {
      label: "Khách hàng",
      click: () => {
        navigateTo(ROUTES.userSignIn);
      },
    },
    {
      label: "Tài xế",
      click: () => {
        navigateTo(ROUTES.driverSignIn);
      },
    },
  ],
];

const hdNavigateToSignUp = () => {
  navigateTo(ROUTES.userSingUp);
};
</script>
<template>
  <div class="w-full flex items-center py-4 px-5 bg-secondary">
    <!-- <div><p>Logo</p></div> -->
    <div class="flex-auto"></div>
    <div class="flex items-center">
      <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
        <UButton class="text-white bg-transparent ring-transparent" label="Đăng nhập" />
      </UDropdown>
      <UButton
        class="text-white bg-transparent ring-transparent mr-4"
        label="Đăng ký"
        @click="hdNavigateToSignUp"
      />
    </div>
  </div>
</template>
