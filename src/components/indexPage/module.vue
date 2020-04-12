<template>
        <el-row :gutter="20">
                <el-col :span="6">
                    <div class="grid-content bg-white">
                        <div class="module-head">
                            <div class="module-head-name">
                                <span>{{visitedModule.name}}</span>
                            </div>
                            <div class="module-head-tag">
                                <el-tag size="small" type="success">日</el-tag>
                            </div>
                        </div>
                        <div class="module-body">
                            <div class="module-body-stastic">
                                <span>{{visitedModule.stastic}}</span>
                            </div>
                            <div class="module-body-content">
                                <span>{{visitedModule.up}}</span>
                                <i class="el-icon-caret-top" style="font-size:14px;color:#ed4014"></i>
                                <br />
                                <span>{{visitedModule.down}}</span>
                                <i
                                    class="el-icon-caret-bottom"
                                    style="font-size:14px;color:#1bbe6a"
                                ></i>
                            </div>
                            <div class="module-body-foot">
                                <div class="module-body-foot-name">总访问量</div>
                                <div class="module-body-foot-num">{{visitedModule.num}}</div>
                            </div>
                        </div>
                    </div>
                </el-col>

                <el-col :span="6">
                    <div class="grid-content bg-white">
                        <div class="module-head">
                            <div class="module-head-name">
                                <span>{{saleModule.name}}</span>
                            </div>
                            <div class="module-head-tag">
                                <el-tag size="small">月</el-tag>
                            </div>
                        </div>
                        <div class="module-body">
                            <div class="module-body-stastic">
                                <span>{{saleModule.stastic}}</span>
                            </div>
                            <div class="module-body-content">
                                <el-progress
                                    class="maProgress"
                                    :text-inside="true"
                                    :stroke-width="14"
                                    :percentage="60"
                                ></el-progress>
                            </div>
                            <div class="module-body-foot">
                                <div class="module-body-foot-name">总销售额</div>
                                <div class="module-body-foot-num">{{saleModule.num}}</div>
                            </div>
                        </div>
                    </div>
                </el-col>

                <el-col :span="6">
                    <div class="grid-content bg-white">
                        <div class="module-head">
                            <div class="module-head-name">
                                <span>{{orderModule.name}}</span>
                            </div>
                            <div class="module-head-tag">
                                <el-tag size="small" type="danger">周</el-tag>
                            </div>
                        </div>
                        <div class="module-body">
                            <div class="module-body-stastic">
                                <span>{{orderModule.stastic}}</span>
                            </div>
                            <div class="module-body-content">
                                <!-- <span>{{visitedModule.up}}</span>
                                <i class="el-icon-caret-top" style="font-size:14px;color:#ed4014"></i>
                                <br>
                                <span>{{visitedModule.down}}</span>
                                <i class="el-icon-caret-bottom" style="font-size:14px;color:#1bbe6a"></i>-->
                            </div>
                            <div class="module-body-foot">
                                <div class="module-body-foot-name">转化率</div>
                                <div class="module-body-foot-num">{{orderModule.num}}</div>
                            </div>
                        </div>
                    </div>
                </el-col>

                <el-col :span="6">
                    <div class="grid-content bg-white">
                        <div class="module-head">
                            <div class="module-head-name">
                                <span>{{userModule.name}}</span>
                            </div>
                            <div class="module-head-tag">
                                <el-tooltip
                                    class="item"
                                    effect="dark"
                                    content="指示说明"
                                    placement="top"
                                >
                                    <i
                                        class="el-icon-question"
                                        style="color:#acb0ba;vertical-align:middle;"
                                    ></i>
                                </el-tooltip>
                            </div>
                        </div>
                        <div class="module-body">
                            <div class="module-body-stastic">
                                <span>{{userModule.stastic}}</span>
                            </div>
                            <div class="module-body-content">
                                <div class="module-body-content-img">
                                    <img
                                        v-for="(item,index) in 7"
                                        :key="index"
                                        src="../../assets/img/avatar.png"
                                    />
                                </div>
                                <div class="imgTag">
                                    <div>+3</div>
                                </div>
                            </div>
                            <div class="module-body-foot">
                                <div class="module-body-foot-name">总用户</div>
                                <div class="module-body-foot-num">{{userModule.num}}</div>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>

</template>

<script>
export default {
    data(){
        return {
            visitedModule: {
                name: "访问量",
                stastic: "25848",
                up: "日同比 12.5%",
                down: "周同比 5%",
                num: "280 万"
            },
            saleModule: {
                name: "销售额",
                stastic: "￥12000",
                num: "68 万"
            },
            orderModule: {
                name: "订单量",
                stastic: "1680",
                num: "60%"
            },
            userModule: {
                name: "新增用户",
                stastic: "128位",
                num: "10800 万"
            }
        }
    }
}
</script>

<style lang="less" scoped>
.el-row {
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
}
.el-col {
    border-radius: 4px;
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
.bg-white {
    background: #fff;
}
.module-head {
    border-bottom: @border;
    padding: 14px 16px;
    line-height: 1;

    display: flex;
    .module-head-name {
        line-height: 24px;
        width: 100%;
        span {
            font-size: 14px;
            font-weight: 500;
        }
    }
    .module-head-tag {
        flex: 1;
    }
}
.module-body {
    padding: 14px 16px;
    .module-body-stastic {
        font-size: 30px;
        height: 36px;
        color: #515a6e;
    }
    .module-body-content {
        height: 42px;
        padding-top: 8px;
        border-bottom: @border;
        span {
            font-size: 14px;
            line-height: 1.5;
            color: #515a6e;
        }
        .module-body-content-img {
            display: inline-block;
            img {
                border-radius: 50%;
                width: 25px;
                &:not(:first-child) {
                    margin-left: -10px;
                }
            }
        }

        .imgTag {
            vertical-align: top;
            display: inline-block;
            border-radius: 50%;
            width: 25px;
            height: 25px;
            color: #f56a00;
            background-color: #fde3cf;
            position: relative;
            div{
                font-size: 14px;
                .center()
            }
        }
    }
    .module-body-foot {
        display: flex;
        padding-top: 8px;
        font-size: 14px;
        line-height: 1.5;
        color: #515a6e;
        .module-body-foot-name {
            flex: 1;
        }
        .module-body-foot-num {
            display: inline-block;
            margin-right: 0;
        }
    }
}
.maProgress {
    padding-top: 8px;
    /deep/ .el-progress-bar__innerText {
        margin-top: -4px;
    }
}
</style>