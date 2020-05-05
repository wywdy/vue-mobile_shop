<template>
  <div id="app">
    <keep-alive include="Home,Category">
      <router-view/>
    </keep-alive>

  </div>
</template>

<script>
  import {request} from "./ntework/request";

  export default {
      name:"App",
    }
</script>

<style lang="less">
  @import "./assets/common/css/base.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  text-align: center;
  /*color: #2c3e50;*/
}

</style>
