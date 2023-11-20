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
  <div>
    <div class="text-blue-50 underline hover:text-secondary cursor-pointer" @click="hdBack">
      Trở lại
    </div>
  </div>
</template>
