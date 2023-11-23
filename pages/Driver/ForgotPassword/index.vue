<script lang="ts" setup>
import { ROUTES } from "~/constants/routes";
</script>
<template>
  <div>
    <h1 class="text-3xl font-bold mb-2">Quên mật khẩu</h1>
    <p>Hãy nhập email để nhận link đặt lại mật khẩu</p>
    <div class="mt-3 flex items-center">
      <label class="mr-5">Email:</label>
      <UInput color="green" variant="outline" class="w-60"></UInput>
      <UButton class="ml-5" label="Xác nhận"></UButton>
    </div>
    <p class="underline text-xs cursor-pointer mt-3" @click="navigateTo(ROUTES.main)">
      Quay lại Trang chủ
    </p>
  </div>
</template>
