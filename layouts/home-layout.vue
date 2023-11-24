<script lang="ts" setup>
useServerSeoMeta({
  title: "Booking car",
  description: "Đồ án môn Nhập môn lập trình",
});
</script>
<template>
  <Html>
    <Body>
      <div class="h-screen flex flex-col">
        <NavHome></NavHome>
        <div class="flex-auto py-10">
          <slot />
        </div>
      </div>
    </Body>
  </Html>
</template>
