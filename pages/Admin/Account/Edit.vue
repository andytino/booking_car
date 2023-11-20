<script lang="ts" setup>
definePageMeta({
  layout: "auth-admin",
  middleware: ["auth-admin"],
  colorMode: "light",
});
</script>
<template>
  <div class="flex flex-col pl-20">
    <BackBtn></BackBtn>
    <h1 class="font-medium text-2xl">Chỉnh sửa tài khoản</h1>
    <AccountFormBase class="mt-5"></AccountFormBase>
  </div>
</template>
