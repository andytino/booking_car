<script lang="ts" setup>
const user = useSupabaseUser();
</script>
<template>
  <div class="w-full flex items-center py-4 px-5 min-h-[77px]">
    <h1 class="flex-auto"></h1>
    <div class="flex items-center">
      <p>{{ user?.email }}</p>
      <UAvatar class="ml-4"></UAvatar>
    </div>
  </div>
</template>
