<script lang="ts" setup></script>
<template>
  <Html>
    <!-- <head>
      <link rel="manifest" href="/manifest.webmanifest" />
    </head> -->
    <Body>
      <div class="h-screen flex flex-col">
        <!-- <TheHeader class="flex-none"></TheHeader> -->
        <div class="flex-auto">
          <slot />
        </div>
        <!-- <TheFooter></TheFooter> -->
      </div>
    </Body>
  </Html>
</template>
