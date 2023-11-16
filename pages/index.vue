<script lang="ts" setup>
definePageMeta({
  colorMode: "light",
});

const hdClick = () => {
  // console.log("aa");
};

// const { $pwa } = useNuxtApp();

// onMounted(() => {
//   if ($pwa?.offlineReady) {
//     console.log("t");
//   }
// });

// const fetchLibrary = async () => {
//   const { data } = await $fetch("/api/test");
// };

const { data } = await useFetch("/api/test");

console.log("data", data);
// fetchLibrary();
</script>
<template>
  <div>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <div>ts</div>
    <UButton @click="hdClick">Button</UButton>
    <template v-for="test in data?.data">
      <div>{{ test.title }}</div>
    </template>
    <!-- <div v-show="$pwa?.needRefresh">
      <span> New content available, click on reload button to update. </span>

      <UButton @click="$pwa?.updateServiceWorker()">Reload</UButton>
    </div> -->
  </div>
</template>
