<template>
  <div class="modal">
    <slot></slot>
    <button @click="$emit('close')">Dismiss</button>
    <p></p>
  </div>
</template>
<script>
export default {
  emits: ['close'],
};
</script>
<style scoped>
::v-slotted(p) {
  font-style: italic;
  font-size: 1.4rem;
}

.modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #42b983;
  color: crimson;

}
</style>
