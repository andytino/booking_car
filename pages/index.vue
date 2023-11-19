<script lang="ts" setup>
import { ROUTES } from "~/constants/routes";

definePageMeta({
  colorMode: "light",
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
    <h1 class="text-3xl font-bold underline">Hello world!</h1>

    <UButton @click="hdNavigateToSignIn">SignIn</UButton>
    <UButton @click="hdNavigateToSignUp">SignUp</UButton>
  </div>
</template>
