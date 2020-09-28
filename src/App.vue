<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
    |
    <router-link to="/NewSite">Новая страница</router-link>
  </div>
  <router-view/>
  <button @click="toggleModalState">Open modal</button>
  <teleport to="#modal-wrapper">
    <modal
      v-if="modalOpen"
      @close="toggleModalState"
    >
      <p>Hello, I'm a modal window.</p>
    </modal>
  </teleport>
</template>
<script>
import { ref } from 'vue';
import Modal from './components/Modal.vue';

export default {
  setup() {
    const modalOpen = ref(false);
    const toggleModalState = () => {
      modalOpen.value = !modalOpen.value;
    };
    return {
      modalOpen,
      toggleModalState,
    };
  },
  components: {
    Modal,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 50px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
