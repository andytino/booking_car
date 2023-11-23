<script lang="ts" setup>
const isLoading = ref(true);
const nuxtApp = useNuxtApp();

// nuxtApp.hook("page:start", () => {
//   isLoading.value = true;
// });

nuxtApp.hook("page:finish", () => {
  isLoading.value = false;
});
</script>
<template>
  <Html>
    <Body>
      <section class="h-screen flex">
        <Sidebar></Sidebar>
        <div class="h-screen w-full relative">
          <div class="flex flex-col h-full">
            <HeaderPage></HeaderPage>
            <div class="flex-auto h-0 overflow-y-auto py-4 px-5">
              <CustomLoading v-if="isLoading"></CustomLoading>

              <slot />
            </div>
          </div>
        </div>
      </section>
    </Body>
  </Html>
</template>
