<script lang="ts" setup>
useServerSeoMeta({
  title: "Booking car",
  description: "Đồ án môn Nhập môn lập trình",
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
            <p>Auth Driver</p>
            <div class="flex-auto h-0 overflow-y-auto py-4 px-5"><slot /></div>
          </div>
        </div>
      </section>
    </Body>
  </Html>
</template>
