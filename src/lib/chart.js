import { HorizontalBar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: HorizontalBar,
  mixins: [reactiveProp],
  props: {
    options: {type: Object},
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}