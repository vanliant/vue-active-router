<template>
    <div id="visitedContent">
        <div class="visited-head">
            <img src="../../assets/img/图表.png" />
            <span>访问量</span>
        </div>
        <div>
            <el-row>
                <el-col :span="16">
                    <div class="grid-content">
                        <div class="grid-content-title">
                            <span>访问量趋势</span>
                        </div>
                        <visited-chart
                            style="width:100%;height:240px;"
                            chartClass="visitedChart"
                            :chartData="chartData"
                        />
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content">
                        <div class="grid-content-title">
                            <span>访问量排行</span>
                        </div>
                        <div class="rank">
                            <div v-for="(item,index) in rankData" :key="index">
                                <div class="rank-name">
                                    <div
                                        :class="index < 2 ? 'rank-name-index' : 'rank-name-index-low' "
                                    >
                                        <span>{{index + 1}}</span>
                                    </div>
                                    <div class="rank-name-name">
                                        <span>{{item.name}}</span>
                                    </div>
                                </div>
                                <div class="rank-num">
                                    <span>{{item.num}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import visitedChart from "@/components/indexPage/visitedChart.vue";
export default {
    components: {
        visitedChart
    },
    data() {
        return {
            chartData: [
                1000,
                1300,
                3500,
                2400,
                1200,
                4311,
                3000,
                2453,
                4567,
                2577,
                6543,
                2334
            ],
            rankData: [
                { name: "你干么四啊", num: "3432" },
                { name: "你干么四啊", num: "3252" },
                { name: "你干么四啊", num: "2835" },
                { name: "你干么四啊", num: "2795" },
                { name: "你干么四啊", num: "2300" },
                { name: "你干么四啊", num: "1792" },
                { name: "你干么四啊", num: "1394" }
            ]
        };
    }
};
</script>

<style lang="less" scoped>
#visitedContent {
    background-color: #fff;
}
.visited-head {
    border-bottom: 1px solid #e8eaec;
    padding: 14px 16px;
    line-height: 1;
    span {
        display: inline-block;
        height: 24px;
        line-height: 24px;
        vertical-align: middle;
        font-size: 14px;
        color: @textColor;
        padding-left: 8px;
    }
    img {
        vertical-align: middle;
    }
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
    height: 300px;
    padding: 0 12px;
    .grid-content-title {
        padding: 16px 0;
        span {
            font-size: 14px;
            color: @textColor;
            height: 20px;

            font-weight: bold;
        }
    }
}
.rank {
    height: 240px;
    display: flex;
    flex-direction: column;
    div {
        height: 36px;
        display: flex;
        .rank-name {
            flex: 1;
            div {
                display: inline-block;
            }
            .rank-name-index {
                margin-right: 8px;
                color: #1890ff;
                background-color: #e6f7ff;
                border-radius: 50%;
                height: 24px;
                width: 24px;
                text-align: center;
                span {
                    line-height: 24px;
                }
            }

            .rank-name-index-low {
                margin-right: 8px;
                color: #8c8c8c;
                background-color: #f5f5f5;
                border-radius: 50%;
                height: 24px;
                width: 24px;
                text-align: center;
                span {
                    line-height: 24px;
                }
            }
            .rank-name-name {
                span {
                    line-height: 24px;
                    font-size: 14px;
                    color: @textColor;
                }
            }
        }
        .rank-num {
            span {
                line-height: 24px;
                font-size: 14px;
                color: @textColor;
            }
        }
    }
}
</style>