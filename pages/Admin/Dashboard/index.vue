<script lang="ts" setup>
definePageMeta({
  middleware: ["auth-admin"],
  colorMode: "light",
});
const user = useSupabaseUser();
const supabase = useSupabaseClient();
const router = useRouter();
</script>

<template>
  <div>
    <h1>Dashboard</h1>
    <p>Email: {{ user?.email }}</p>
  </div>
</template>
