<script lang="ts" setup>
definePageMeta({
  layout: "default",
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
