<template>
  <div class="newPage">
    <Comp msg="Welcome to New site"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Comp from '@/components/Comp.vue';

export default {
  name: 'NewSite',
  components: {
    Comp,
  },
};
</script>

<style scoped>
.newPage {
      background: #daac19;
    }
</style>
