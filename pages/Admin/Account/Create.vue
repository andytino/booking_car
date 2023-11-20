<script lang="ts" setup>
import { ROUTES } from "~/constants/routes";

definePageMeta({
  layout: "auth-admin",
  middleware: ["auth-admin"],
  colorMode: "light",
});
</script>
<template>
  <div class="flex flex-col pl-10">
    <BackBtn :url-back="ROUTES.adminAccount"></BackBtn>
    <h1 class="font-medium text-2xl mt-5">Tạo tài khoản</h1>
    <AccountFormBase class="mt-5" :url-back="ROUTES.adminAccount"></AccountFormBase>
  </div>
</template>
