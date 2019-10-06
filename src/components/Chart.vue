<template>
  <div ref="chartDom"></div>
</template>

<script>
import echarts from "echarts";
import debounce from "lodash/debounce";
import { addListener, removeListener } from "resize-detector";
export default {
  props: {
    option: {
      type: Object,
      default: () => {},
    },
  },
  watch: {
    option(val) {
      this.chart.setOption(val);
    }, // 只是改option里面的data的具体值时是监测不到变化的，需要深度监听。
    // 避免深度监听耗费性能的一个做法是在父组件定时器修改传值时做一个浅拷贝
    // option: {
    //   handler(val) {
    //     this.chart.setOption(val);
    //   },
    //   deep: true,
    // }, // 深度监听的做法，但是非常耗性能
  },
  created() {
    this.resize = debounce(this.resize, 300);
  },
  mounted() {
    this.renderChart();
    addListener(this.$refs.chartDom, this.resize);
  },
  beforeDestroy() {
    removeListener(this.$refs.chartDom, this.resize);
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    resize() {
      console.log("resize");
      this.chart.resize();
    },
    renderChart() {
      // 基于准备好的dom，初始化echarts实例
      this.chart = echarts.init(this.$refs.chartDom);
      // 绘制图表
      this.chart.setOption(this.option);
    },
  },
  name: "",
  data() {
    return {};
  },
};
</script>

<style lang="" scoped></style>
