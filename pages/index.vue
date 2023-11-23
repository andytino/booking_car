import { UButton } from '../.nuxt/components';
<script lang="ts" setup>
definePageMeta({
  colorMode: "light",
  layout: "home-layout",
});
</script>
<template>
  <div class="relative px-8">
    <div class="ml-16 sm:ml-40 md:ml-0 md:flex md:justify-center">
      <div>
        <p class="text-white text-xs md:text-black font-medium">Hãy đặt</p>
        <h1 class="text-3xl font-bold md:text-secondary">BOOK</h1>
        <p class="text-xs font-medium">Đưa bạn đến bất cứ đâu</p>
      </div>
    </div>
    <div class="absolute -top-40 left-0 -z-10 w-full h-[1100px]">
      <img src="../assets/images/Vector.png" alt="" class="absolute w-full md:hidden" />
      <img
        src="../assets/images/bg-1.png"
        alt=""
        class="absolute bottom-1/2 right-1/2 translate-x-[50%]"
        width="300"
        height="auto"
      />
    </div>
    <div class="flex-auto flex flex-col items-center mt-96">
      <UButton color="green" variant="solid" class="mb-3 flex-auto w-32 flex justify-center"
        >Đặt xe</UButton
      >
      <UButton color="green" variant="outline" class="flex-auto w-32 flex justify-center"
        >Tạo tài khoản</UButton
      >
    </div>
  </div>
</template>
