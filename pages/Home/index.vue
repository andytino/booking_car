<script lang="ts" setup>
definePageMeta({
  layout: "home-layout",
  colorMode: "light",
});

const user = useSupabaseUser();
</script>
<template>
  <div>
    <h1>HOME</h1>
    <p>Email: {{ user?.email }}</p>
  </div>
</template>
