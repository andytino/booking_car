<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"],
  colorMode: "light",
});

const user = useSupabaseUser();
const supabase = useSupabaseClient();
const router = useRouter();

const hdLogout = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    router.push("/");
  } catch (err) {}
};
</script>
<template>
  <div>
    <h1>HOME</h1>
    <p>Email: {{ user?.email }}</p>
    <UButton @click="hdLogout">Logout</UButton>
  </div>
</template>
