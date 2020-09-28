// vue/no-mutating-props
<template>
  <div>
    <input :value="aValue" @input="$emit('input', $event.target.value)" @click="openModal">
  </div>
</template>
<script>
import { ref } from 'vue';

export default {
  props: {
    value: {
      type: String,
      required: false,
    },
  },
  emits: ['input', 'test'],
  setup() {
    const aValue = ref('пример');

    function openModal() {
      this.$emit('input', 'test');
    }

    return {
      aValue,
      openModal,
    };
  },
};
</script>
