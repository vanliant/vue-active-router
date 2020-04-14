<template>
    <div :class="chartClass" :style="{height:'100%',width:'100%'}" />
</template>

<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme

export default {
    props:{
        chartData:{
            type:Array,
            default:()=>[]
        },
        chartClass:{
            type:String,
            default:'demoChart'
        },
        title:{
            type:String,
            default:'title'
        },
    },
    data() {
        return {
            chart: null,
        };
    },
    watch: {
        chartData: {
            deep: true,
            handler(val) {
                this.setOptions(val);
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.initChart();
        });
    },
    beforeDestroy() {
        if (!this.chart) {
            return;
        }
        this.chart.dispose();
        this.chart = null;
    },
    methods: {
        initChart() {
            this.chart = echarts.init(this.$el, "macarons");
            this.setOptions(this.chartData);
            window.addEventListener("resize",  () => {
                this.chart.resize();
            });
        },
        setOptions(val) {
            this.chart.setOption({
                xAxis: {
                    show:false,
                    data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
                    boundaryGap: false,
                    axisTick: {
                        show: false
                    }
                },
                grid: {
                    left: 0,
                    right: 0,
                    bottom: 0,
                    top: 0,
                    containLabel: false
                },
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "cross"
                    },
                    // padding: [5, 10]
                },
                yAxis: {
                    show:false,
                    axisTick: {
                        show: false
                    }
                },
                series: [
                    {
                        name: this.title,
                        itemStyle: {
                            normal: {
                                color: "#00cc65",
                                lineStyle: {
                                    color: "#00cc65",
                                    width: 2
                                },

                                areaStyle: {
                                    color: "#c5f1d2"
                                }
                            }
                        },
                        smooth: true,
                        type: "line",
                        data: val,
                        animationDuration: 2000,
                        animationEasing: "cubicInOut"
                    }
                ]
            });
        }
    }
};
</script>

<style lang="less" scoped>
</style>