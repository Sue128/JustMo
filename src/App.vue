<template>
  <div id="app">
    <HelloWorld msg="登录"/>
    <FailMobi shi="失败"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
//import SucessMobi from './components/SucessMobi.vue'
import FailMobi from './components/FailMobi.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    //SucessMobi,
    FailMobi
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
