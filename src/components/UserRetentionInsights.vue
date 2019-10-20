<template>
  <highcharts :options="chartOptions"></highcharts>
</template>

<script>
  export default {
    name: 'UserRetentionInsights',
    mounted () {
      this.$http.get('http://localhost:5555/api/v1/on_boarding_flow/insights')
        .then((response) => {
          if (response.statusCode >= 200 && response.statusCode < 400) {
              const series = this.generateWeeklySeries(response.data)
              this.chartOptions.series = series
          }
        })
    },
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
          series: []
          // series: [{
          //   name: '2016-09-09',
          //   data: [
          //     {
          //       name: 'Create Account',
          //       color: '#00FF00',
          //       x: 0,
          //       y: 100
          //     },
          //     {
          //       name: 'Activate Account',
          //       color: '#00FF00',
          //       x: 20,
          //       y: 100
          //     },
          //     {
          //       name: 'Provide Profile Information',
          //       color: '#00FF00',
          //       x: 40,
          //       y: 80
          //     },
          //     {
          //       name: 'What jobs are you interested in?',
          //       color: '#00FF00',
          //       x: 50,
          //       y: 60
          //     },
          //     {
          //       name: 'Do you have relevant experience in these jobs?',
          //       color: '#00FF00',
          //       x: 70,
          //       y: 40
          //     },
          //     {
          //       name: 'Are you a freelancer?',
          //       color: '#00FF00',
          //       x: 90,
          //       y: 40
          //     },
          //     {
          //       name: 'Waiting for approval',
          //       color: '#00FF00',
          //       x: 99,
          //       y: 40
          //     },
          //     {
          //       name: 'Approval',
          //       color: '#00FF00',
          //       x: 100,
          //       y: 40
          //     },
          //   ]
          // }]
        }
      }
    },
    methods: {
      generateWeeklySeries(responseData) {
        let chartOptions = []
        responseData.forEach(weeklySeriesCohort => {
          const { title, series } = weeklySeriesCohort;
          chartOptions.push({
            title,
            data: this.generateStepSeries(series)
          })
        });
      },
      generateStepSeries(responseSeries) {
        let seriesForChart = []
        responseSeries.forEach(userRetentionStep => {
          const { name, percentage } = userRetentionStep.step
          seriesForChart.push({
            name: userRetentionStep.step.name,
            color: '#00FF00',
            x: userRetentionStep.step.percentage,
            y: userRetentionStep.user_retained_percentage
          })
        })

        return seriesForChart
      }
    }
  }
</script>

<style scoped>

</style>
