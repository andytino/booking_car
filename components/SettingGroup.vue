<script lang="ts" setup>
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "light";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});

// const emits = defineEmits(["changeModeTheme", "changeLanguage"]);

const items = [
  [
    {
      label: "Tiếng Anh",
      click: () => {},
    },
    {
      label: "Tiếng Việt",
      click: () => {},
    },
  ],
];
</script>
<template>
  <div class="w-full flex justify-end mb-10">
    <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
      <SvgIcon icon="global" width="18" height="18" class="text-transparent cursor-pointer" />
    </UDropdown>
    <template v-if="isDark">
      <SvgIcon
        icon="moon"
        width="18"
        height="18"
        class="text-secondary cursor-pointer ml-4"
        @click="isDark = !isDark"
      />
    </template>
    <template v-else>
      <SvgIcon
        icon="sun"
        width="18"
        height="18"
        class="text-secondary cursor-pointer ml-4"
        @click="isDark = !isDark"
    /></template>
  </div>
</template>
