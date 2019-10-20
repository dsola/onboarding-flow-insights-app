<template>
  <highcharts :options="chartOptions"></highcharts>
</template>

<script>
  export default {
    name: 'UserRetentionInsights',
    data () {
      return {
        chartOptions: {
          series: [{
            data: [1,2,3] // sample data
          }]
        }
      }
    }
  }
</script>

<style scoped>

</style>
