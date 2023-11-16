<script lang="ts" setup></script>
<template>
  <Html>
    <Body>
      <div class="h-screen flex flex-col">
        <!-- <TheHeader class="flex-none"></TheHeader> -->
        <div class="flex-auto px-5 py-10">
          <slot />
        </div>
        <!-- <TheFooter></TheFooter> -->
      </div>
    </Body>
  </Html>
</template>
