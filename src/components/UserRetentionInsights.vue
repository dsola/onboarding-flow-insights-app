<template>
  <highcharts :options="chartOptions"></highcharts>
</template>

<script>
  export default {
    name: 'UserRetentionInsights',
    data () {
      return {
        chartOptions: {
          title: {
            text: 'Weekly retention curve of Temper boarding flow'
          },
          subtitle: {
            text: 'Developed with love by David Sola for Temper Works'
          },
          yAxis: {
            title: {
              text: 'Percentage of retained users'
            },
            tickInterval: 5
          },

          xAxis: {
            title: {
              text: 'Percentage of Onboarding progress'
            },
            tickInterval: 5
          },

          series: [{
            name: '2016-09-09',
            data: [
              {
                name: 'Create Account',
                color: '#00FF00',
                x: 0,
                y: 100
              },
              {
                name: 'Activate Account',
                color: '#00FF00',
                x: 20,
                y: 100
              },
              {
                name: 'Provide Profile Information',
                color: '#00FF00',
                x: 40,
                y: 80
              },
              {
                name: 'What jobs are you interested in?',
                color: '#00FF00',
                x: 50,
                y: 60
              },
              {
                name: 'Do you have relevant experience in these jobs?',
                color: '#00FF00',
                x: 70,
                y: 40
              },
              {
                name: 'Are you a freelancer?',
                color: '#00FF00',
                x: 90,
                y: 40
              },
              {
                name: 'Waiting for approval',
                color: '#00FF00',
                x: 99,
                y: 40
              },
              {
                name: 'Approval',
                color: '#00FF00',
                x: 100,
                y: 40
              },
            ]
          }]
        }
      }
    }
  }
</script>

<style scoped>

</style>
