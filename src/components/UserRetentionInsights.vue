<template>
  <highcharts :options="chartOptions"></highcharts>
</template>

<script>
export default {
  name: 'UserRetentionInsights',
  mounted () {
    this.$http.get(process.env.VUE_APP_API_URL + '/api/v1/on_boarding_flow/insights')
      .then((response) => {
        if (response.status >= 200 && response.status < 400) {
          const series = this.generateWeeklySeries(response.data.data)
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
      }
    }
  },
  methods: {
    generateWeeklySeries (responseData) {
      let chartOptions = []
      responseData.forEach(weeklySeriesCohort => {
        const { title, series } = weeklySeriesCohort
        chartOptions.push({
          name: title,
          data: this.generateStepSeries(series)
        })
      })

      return chartOptions
    },
    generateStepSeries (responseSeries) {
      let seriesForChart = []
      responseSeries.forEach(userRetentionStep => {
        const { name, percentage } = userRetentionStep.step
        seriesForChart.push({
          name,
          x: percentage,
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
