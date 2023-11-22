<template>
  <div class="w-full">
    <VitePwaManifest />
    <UContainer :ui="{ constrained: 'max-w-none px-0 sm:px-0 lg:px-0 mx-0' }">
      <!-- <UContainer class="max-w-none px-0 sm:px-0 lg:px-0 mx-0"> -->
      <NuxtLayout>
        <NuxtPage></NuxtPage>
      </NuxtLayout>
    </UContainer>
    <UNotifications />
  </div>
</template>
