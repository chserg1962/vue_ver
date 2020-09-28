<template lang="html">
  <div class='wrapper'>
    <button class='change__style' @click='changeStyle()'>Change Style</button>
    <Tabs :mode="mode">
      <Tab title="Tab 1">Tab 1</Tab>
      <Tab title="Tab 2">Tab 2</Tab>
      <Tab title="Tab 3">Tab 3</Tab>
    </Tabs>
  </div>
</template>

<script>
import Tab from '@/components/tabs/tab.vue';
import Tabs from '@/components/tabs/tabs.vue';
import { ref } from 'vue';

export default {
  setup() {
    const mode = ref('dark');
    function changeStyle() {
      if (mode.value === 'dark') {
        mode.value = 'light';
      } else {
        mode.value = 'dark';
      }
    }

    return {
      mode,
      Tab,
      Tabs,
      changeStyle,
    };
  },
};
</script>

<style>
.wrapper {
  width: 100%;
  min-height: 100vh;
  background-color: #f8f8f8;
  margin: 0;
  padding: 20px;
}

.change__style {
  background-color: #eee;
  font-size: 1em;
  margin-bottom: 10px;
  padding: 5px;
}
</style>
