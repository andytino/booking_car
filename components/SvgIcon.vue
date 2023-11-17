<script lang="ts" setup>
import { ref, defineProps, markRaw, withDefaults } from "@vue/runtime-core";
interface Props {
  icon: string;
  class?: string;
  rotate?: string | number;
  spin?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  spin: false,
});
const loadedIcon = ref(null);
import(`../assets/images/icons/${props.icon}.svg`)
  .then((module) => {
    loadedIcon.value = markRaw(module.default);
  })
  .catch(console.error.bind(console));
</script>

<template>
  <component
    v-if="loadedIcon"
    :class="[{ rotating: spin }, props.class]"
    class="svg-icon !fill-current inline"
    :is="loadedIcon"
    :name="icon"
    v-bind="$attrs"
    :style="{
      transform: `rotate(${rotate}deg)`,
    }"
  />
</template>
<style lang="scss" scoped>
.svg-icon {
  &.rotating {
    -webkit-animation: rotating 2s linear infinite;
    animation: rotating 2s linear infinite;
  }

  @keyframes rotating {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
}
</style>
