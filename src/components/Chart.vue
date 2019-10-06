<template>
  <div ref="chartDom" style="height: 400px;"></div>
</template>

<script>
import echarts from "echarts";
import debounce from "lodash/debounce";
import { addListener, removeListener } from "resize-detector";
export default {
  created() {
    this.resize = debounce(this.resize, 300);
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    this.chart = echarts.init(this.$refs.chartDom);
    addListener(this.$refs.chartDom, this.resize);
    // 绘制图表
    this.chart.setOption({
      title: {
        text: "ECharts 入门示例",
      },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    });
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
  },
  name: "",
  data() {
    return {};
  },
};
</script>

<style lang="" scoped></style>
