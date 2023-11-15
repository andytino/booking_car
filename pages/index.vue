<script lang="ts" setup>
definePageMeta({
  colorMode: "light",
});

const hdClick = () => {
  // console.log("aa");
};

const { $pwa } = useNuxtApp();

onMounted(() => {
  if ($pwa?.offlineReady) {
    console.log("t");
  }
});
</script>
<template>
  <div>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <div>ts</div>
    <UButton @click="hdClick">Button</UButton>
    <div v-show="$pwa?.needRefresh">
      <span> New content available, click on reload button to update. </span>

      <button @click="$pwa?.updateServiceWorker()">Reload</button>
    </div>
  </div>
</template>
