<script lang="ts" setup></script>
<template>
  <Html>
    <Body>
      <div class="h-screen flex flex-col">
        <div class="flex-auto px-5 py-10 mx-auto">
          <slot />
        </div>
      </div>
    </Body>
  </Html>
</template>
