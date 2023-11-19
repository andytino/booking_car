<script lang="ts" setup>
definePageMeta({
  layout: "auth-admin",
  middleware: ["auth-admin"],
  colorMode: "light",
});
const user = useSupabaseUser();
</script>

<template>
  <div>
    <h1>Dashboard</h1>
    <p>Email: {{ user?.email }}</p>
  </div>
</template>
