<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import {Chart} from 'highcharts-vue'

export default {
  name: 'App',
  components: {
    highcharts: Chart
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
