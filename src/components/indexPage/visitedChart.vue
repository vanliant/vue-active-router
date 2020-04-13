<template>
    <div :class="chartClass" :style="{height:'100%',width:'100%'}" />
</template>

<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme

export default {
    props: {
        chartData: {
            type: Array,
            default: () => []
        },
        chartClass: {
            type: String,
            default: "curChart"
        }
    },
    data() {
        return {
            chart: null
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
        },
        setOptions(val) {
            this.chart.setOption({
                xAxis: {
                    show: true,
                    data: [
                        "1月",
                        "2月",
                        "3月",
                        "4月",
                        "5月",
                        "6月",
                        "7月",
                        "8月",
                        "9月",
                        "10月",
                        "11月",
                        "12月"
                    ],
                    boundaryGap: ["5%", "5%"], //留白大小，坐标轴两边留白
                    axisTick: {
                        show: false
                    }
                },
                grid: {
                    left: 0,
                    right: 0,
                    bottom: 0,
                    top: 20,
                    containLabel: true
                },
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "cross"
                    }
                    // padding: [5, 10]
                },
                yAxis: {
                    show: true,
                    axisTick: {
                        show: false
                    }
                },
                series: [
                    {
                        name: "访问量",
                        barWidth: 30, //柱图宽度
                        itemStyle: {
                            normal: {
                                barBorderRadius: 7,
                                color: new echarts.graphic.LinearGradient(
                                    0,
                                    0,
                                    0,
                                    1,
                                    [
                                        { offset: 0, color: "#67ccff" }, //柱图渐变色
                                        { offset: 0.5, color: "#3ab0f6" }, //柱图渐变色
                                        { offset: 1, color: "#1595ec" } //柱图渐变色
                                    ]
                                ),
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
                        type: "bar",
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