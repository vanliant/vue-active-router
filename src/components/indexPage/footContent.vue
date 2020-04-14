<template>
    <div id="indexPageFoot">
        <div class="foot">
            <el-row :gutter="20">
                <el-col :span="12">
                    <div class="grid-content">
                        <div class="foot-header">
                            <div class="foot-header-content">
                                <img src="../../assets/img/放大镜.png" />
                                <span>热门搜索</span>
                            </div>
                        </div>
                        <div class="foot-body">
                            <div>
                                <el-row :gutter="16">
                                    <el-col
                                        :span="12"
                                        v-for="(item,index) in dataList"
                                        :key="index"
                                    >
                                        <div class="foot-body-title">
                                            <span>{{item.title}}</span>
                                        </div>
                                        <div class="foot-body-num">
                                            <div class="foot-body-num-total">{{item.num}}</div>
                                            <div class="foot-body-num-trend" v-if="item.up">
                                                {{item.up}}
                                                <i
                                                    class="el-icon-caret-top"
                                                    style="color:#ed4014"
                                                ></i>
                                            </div>
                                            <div class="foot-body-num-trend" v-else>
                                                {{item.down}}
                                                <i
                                                    class="el-icon-caret-bottom"
                                                    style="color:#19be6b"
                                                ></i>
                                            </div>
                                        </div>
                                        <foot-chart-left
                                            :chartClass="item.class"
                                            :chartData="item.data"
                                            :title="item.title"
                                            style="height:50px"
                                        />
                                    </el-col>
                                </el-row>
                            </div>
                            <div class="foot-left-table">
                                <el-table
                                    class="leftTable"
                                    :data="tableData"
                                    :highlight-current-row="true"
                                    :row-style="{height:'40px'}"
                                    style="width: 100%"
                                >
                                    <el-table-column prop="rate" label="排名" align="center"></el-table-column>
                                    <el-table-column prop="keyWord" label="搜索关键词" align="center"></el-table-column>
                                    <el-table-column prop="user" label="用户数" align="center"></el-table-column>
                                    <el-table-column prop="weekly" label="周涨幅" align="center">
                                        <template slot-scope="scope">
                                            <span>{{scope.row.weekly}}%</span>
                                        </template>
                                    </el-table-column>
                                </el-table>
                                <el-pagination
                                    style="text-align:right;"
                                    small
                                    layout="prev, pager, next"
                                    :total="50"
                                ></el-pagination>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content">
                        <div class="foot-header">
                            <div class="foot-header-content">
                                <img src="../../assets/img/用户.png" />
                                <span>用户画像</span>
                            </div>
                        </div>
                        <div class="foot-body">
                            <div class="user-group">
                                <div class="user-item" v-for="(item,index) in sexList" :key="index">
                                    <img :src="item.pic" />
                                    <div>
                                        <span :style="{color:item.color}">{{item.sex}}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="block">
                                <div v-for="(item,index) in 65" :key="'male'+index" class="male">
                                    <div></div>
                                </div>
                                <div
                                    v-for="(item,index) in 25"
                                    :key="'female'+index"
                                    class="female"
                                >
                                    <div></div>
                                </div>
                                <div
                                    v-for="(item,index) in 10"
                                    :key="'unknow'+index"
                                    class="unknow"
                                >
                                    <div></div>
                                </div>
                            </div>
                            <div class="block-img">
                                <div></div>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import footChartLeft from "@/components/indexPage/footChartLeft.vue";
export default {
    components: {
        footChartLeft
    },
    data() {
        return {
            dataList: [
                {
                    title: "搜索用户数",
                    num: "23378",
                    up: "16.8",
                    class: "searchUser",
                    data: [120, 300, 150, 350, 70, 210, 130]
                },
                {
                    title: "人均搜索次数",
                    num: "3.1",
                    down: "8.5",
                    class: "averageSearch",
                    data: [120, 320, 125, 342, 145, 156, 229]
                }
            ],
            tableData: [
                { rate: "1", keyWord: "搜索关键词", user: "243", weekly: "69" },
                { rate: "1", keyWord: "搜索关键词", user: "243", weekly: "69" },
                { rate: "1", keyWord: "搜索关键词", user: "243", weekly: "69" },
                { rate: "1", keyWord: "搜索关键词", user: "243", weekly: "69" },
                { rate: "1", keyWord: "搜索关键词", user: "243", weekly: "69" }
            ],
            sexList: [
                {
                    sex: "男性65%",
                    color: "#3399ff",
                    pic: require("../../assets/img/男.png")
                },
                {
                    sex: "女性25%",
                    color: "#be6be0",
                    pic: require("../../assets/img/女.png")
                },
                {
                    sex: "未知10%",
                    color: "#babdc3",
                    pic: require("../../assets/img/男2.png")
                }
            ]
        };
    }
};
</script>

<style lang="less" scoped>
#indexPageFoot {
    background-color: #f6f7f9;
    padding: 16px 0;
    .foot {
        background-color: #fff;
    }
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
    .foot-header {
        border-bottom: 1px solid #e8eaec;
        padding: 14px 16px;
        line-height: 1;
        .foot-header-content {
            line-height: 1;
            font-size: 14px;
            img {
                vertical-align: middle;
            }
            span {
                padding-left: 8px;
                vertical-align: middle;
                color: @textColor;
            }
        }
    }
    .foot-body {
        padding: 16px;
    }
}
.foot-body-title {
    height: 22px;
    color: #808695;
    font-size: 14px;
    line-height: 22px;
}

.foot-body-num {
    div {
        display: inline-block;
        &.foot-body-num-total {
            margin-right: 32px;
            color: #515a6e;
            font-size: 24px;
        }
        &.foot-body-num-trend {
            font-size: 14px;
            color: #808695;
            line-height: 32px;
        }
    }
}

.foot-left-table {
    margin-top: 16px;
}
.leftTable {
    /deep/ thead tr th td {
        padding: 8px 0 !important;
    }
    /deep/ .cell,
    .el-table th,
    .el-table td {
        line-height: 15px !important;
    }
}

.user-group {
    display: flex;
    .user-item {
        flex: 1;
        text-align: center;
        div {
            line-height: 1.5;
            font-size: 14px;
            margin-top: 8px;
        }
    }
}

.block {
    width: 100%;

    opacity: 0.75;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    div {
        display: inline-block;
        width: 4%;
    }

    .male {
        div {
            background-color: #3399ff;
            width: 75%;
            padding-top: 75%;
            border-radius: 2px;
        }
    }
    .female {
        div {
            background-color: #be6be0;
            width: 75%;
            padding-top: 75%;
            border-radius: 2px;
        }
    }
    .unknow {
        div {
            background-color: #babdc3;
            width: 75%;
            padding-top: 75%;
            border-radius: 2px;
        }
    }
}
.block-img{
    height: 210px;
    div{
        height: 100%;
    background-image: url(../../assets/img/user-preference.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    }
    
}
</style>