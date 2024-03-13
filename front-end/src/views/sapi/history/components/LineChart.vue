<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import * as echarts from 'echarts'
import 'echarts-gl'

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
    setOptions({ coordinate } = {}) {
      this.chart.setOption({
        tooltip: {},
        title: {
          text: 'Heavy Atoms'
        },
        grid3D: {},
        xAxis3D: {
          min: 0,
          max: 1
        },
        yAxis3D: {
          min: 0,
          max: 1
        },
        zAxis3D: {
          min: 0,
          max: 1
        },
        dataset: {
          sourceHeader: false,
          source: coordinate
        },
        series: [{
          name: 'atom',
          type: 'scatter3D',
          symbolSize: 20,
          encode: {
            itemName: 0,
            tooltip: [1, 2, 3],
            x: 1,
            y: 2,
            z: 3
          }
        }]
      })
    }
  }
}
</script>
