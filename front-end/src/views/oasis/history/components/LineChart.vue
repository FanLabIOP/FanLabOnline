<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import * as echarts from 'echarts'

export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '350px'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el)
      this.setOptions(this.chartData)
      window.onresize = this.chart.resize
    },
    setOptions({ before, after } = {}) {
      this.chart.setOption({
        title: {
          text: 'FOM'
        },
        xAxis: {
          type: 'category',
          data: ['Before', 'After']
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          padding: [5, 10]
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'FOM',
            type: 'bar',
            barWidth: '20%',
            label: {
              show: true,
              position: 'inside'
            },
            data: [
              {
                value: before,
                itemStyle: {
                  color: '#FF005A'
                }
              },
              {
                value: after,
                itemStyle: {
                  color: '#3888fa'
                }
              }],
            animationDuration: 1200,
            animationEasing: 'cubicInOut'
          }
        ]
      })
    }
  }
}
</script>
