<template lang="html">
  <div class='tab' v-if='isActive'>
    <slot></slot>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    title: {
      type: String,
      default: 'Tab',
    },
  },
  setup() {
    const isActive = ref(true);
    const setActive = (active) => {
      isActive.value = active;
    };
    return {
      isActive,
      setActive,
    };
  },
};
</script>

<style scoped>
 tab {
   color: crimson;
 }

</style>
