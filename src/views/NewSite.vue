<template>
  <div class="newPage">
    <Comp msg="Welcome to New site"/>
    <MyInput></MyInput>
    <br>
    <Tabs></Tabs>
  </div>
</template>

<script>
// @ is an alias to /src
import Comp from '@/components/Comp.vue';
import MyInput from '@/components/MyInput.vue';
import Tabs from '@/views/tabsview.vue';
import { ref } from 'vue';

export default {
  props: {
    value: {
      type: String,
      default: 'none',
    },
  },
  setup() {
    const name = ref('NewSite');
    const aValue = ref('ref');
    return {
      aValue,
      name,
      Comp,
      MyInput,
      Tabs,
    };
  },
};
</script>

<style scoped>
.newPage {
  background: #daac19;
}
</style>
