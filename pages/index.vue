<script lang="ts" setup>
definePageMeta({
  colorMode: "light",
});

const hdClick = () => {
  // console.log("aa");
};

// const { data } = await useFetch("/api/test");

// console.log("data", data);
// fetchLibrary();
</script>
<template>
  <div>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <div>ts</div>
    <UButton @click="hdClick">Button</UButton>
  </div>
</template>
