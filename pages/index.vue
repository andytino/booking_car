<script lang="ts" setup>
import { ROUTES } from "~/constants/routes";

definePageMeta({
  colorMode: "light",
});

const hdNavigateToLogin = () => {
  navigateTo(ROUTES.login);
};

const hdNavigateToRegister = () => {
  navigateTo(ROUTES.register);
};

// const { data } = await useFetch("/api/test");

// console.log("data", data);
// fetchLibrary();
</script>
<template>
  <div>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>

    <UButton @click="hdNavigateToLogin">Login</UButton>
    <UButton @click="hdNavigateToRegister">Register</UButton>
  </div>
</template>
