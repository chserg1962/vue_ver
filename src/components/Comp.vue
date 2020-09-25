<template>
  <div class="comp">
    <h1>This is an new page</h1>
     <h2>{{ msg }}</h2>
  </div>
</template>
<script>
export default {
  name: 'Comp',
  props: {
    msg: String,
  },
};
</script>
<style scoped>
.comp {
      background: #42b983;
    }
</style>
