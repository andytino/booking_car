<script lang="ts" setup>
definePageMeta({
  colorMode: "light",
});

const hdNavigateToLogin = () => {
  // console.log("aa");
  navigateTo("/login");
};

const hdNavigateToRegister = () => {
  // console.log("aa");
  navigateTo("/register");
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
