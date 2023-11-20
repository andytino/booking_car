<script lang="ts" setup>
import { ROUTES } from "~/constants/routes";

definePageMeta({
  colorMode: "light",
  layout: "home-layout",
});

const hdNavigateToSignIn = () => {
  navigateTo(ROUTES.userSignIn);
};

const hdNavigateToSignUp = () => {
  navigateTo(ROUTES.userSingUp);
};

// const { data } = await useFetch("/api/test");

// console.log("data", data);
// fetchLibrary();
</script>
<template>
  <div>
    <h1 class="text-3xl font-bold">Trang chủ</h1>
  </div>
</template>
