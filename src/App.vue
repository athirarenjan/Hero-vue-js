<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <div class="header-bar"></div>
    <hero-list></hero-list>
    <!-- <HelloWorld/> -->
  </div>
</template>

<script lang="ts">
import * as HelloWorld from "./components/HelloWorld";
import HeroList from "@/components/HeroList";
import HeroDetail from "@/components/HeroDetail";
export default {
  name: "App",
  components: {
    // HelloWorld,
    HeroList,
    HeroDetail
  },
  data() {
    return {
      title: "My Vue Heroes App"
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
