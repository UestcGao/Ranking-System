<template>
  <div id="grade" :style="{height:height,width:width}" />
</template>
<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme

export default {
  name: 'Grade',
  data() {
    return {
      chart: null,
      height: '350px',
      width: '100%',
      option: {
        title: {
          text: '班级测试',
          // textAlgin: 'center',
          left: 'center',
          top: 'bottom',
          textStyle: {
            fontSize: 24,
            fontWeight: 'bolder'
          }
        },
        tooltip: {
          show: false,
          trigger: 'axis'
        },
        legend: {
          // data: ['成绩']
        },
        xAxis: {
          data: ['一班', '二班', '三班', '四班', '五班']
        },
        yAxis: {},
        series: [{
          name: '成绩',
          type: 'line',
          data: [30, 40, 80, 50, 90]
        }]
      }
    }
  },
  watch: {
    option: {
      handler(val) {
        this.setOptions(val)
      },
      deep: true
    }
  },
  created() {
  },
  //   beforeRouteEnter(to, from, next) {
  //     next(vm => {
  //       console.log(vm.$attrs.id)
  //       //   console.log(this.$store)
  //     })
  //   },
  mounted() {
    // this.$store.state.tagsView.visitedViews[this.$store.state.tagsView.visitedViews.length - 1].meta.title = this.$attrs.id
    // console.log(this.$store.state.tagsView.visitedViews[1].meta.title)
    this.$nextTick(() => {
      this.initChart()
    })
  },
  methods: {
    initChart() {
      // console.log(this.$el)
      this.chart = echarts.init(this.$el)
      this.setOptions(this.option)
    },
    setOptions() {
      this.chart.setOption(this.option)
    }
  }
}
</script>
<style lang="scss" scoped>
.grade-charts {
  height: 100%;
}
</style>
