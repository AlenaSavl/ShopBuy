<template>
  <main id="app">
    <Header />
    <Window />
  </main>
</template>

<script>
import Header from "@/components/Header.vue";
import Window from "@/components/Window.vue";

export default {
  name: "App",
  components: {
    Header,
    Window,
  },
};
</script>



<style lang="scss">
// #app {
//   // font-family: Avenir, Helvetica, Arial, sans-serif;
//   // -webkit-font-smoothing: antialiased;
//   // -moz-osx-font-smoothing: grayscale;
// }

#nav {
  a {
    // font-weight: bold;
    color: rgb(5, 5, 5);
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
