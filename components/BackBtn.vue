<script lang="ts" setup>
import { ROUTES } from "~/constants/routes";

interface Props {
  urlBack: string;
}

const props = withDefaults(defineProps<Props>(), {
  urlBack: ROUTES.home,
});

const hdBack = () => {
  navigateTo(props.urlBack);
};
</script>

<template>
  <div
    class="text-blue-50 text-sm underline hover:text-secondary cursor-pointer mb-2"
    @click="hdBack"
  >
    Trở lại
  </div>
</template>
