<template>
    <div id="tag">
        <div class="tagItem" v-for="(item,index) in tagArr" :key="index">
            <div class="tag-content">
                <div>
                    <img :src="item.icon" />
                </div>
                <div class="tag-content-text">
                    <span>{{item.name}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tagArr: [
                { name: "用户", icon: require("../../assets/img/yonghu.png") },
                { name: "分析", icon: require("../../assets/img/fenxi.png") },
                {
                    name: "商品",
                    icon: require("../../assets/img/gouwuche.png")
                },
                { name: "订单", icon: require("../../assets/img/dingdan.png") },
                { name: "票据", icon: require("../../assets/img/票据.png") },
                { name: "消息", icon: require("../../assets/img/信息.png") },
                { name: "标签", icon: require("../../assets/img/标签.png") },
                { name: "配置", icon: require("../../assets/img/配置.png") }
            ]
        };
    }
};
</script>

<style lang="less" scoped>
@keyframes myfirst {
    from {
        -webkit-box-shadow: 2px 2px 10px #fff;
    }
    to {
        -webkit-box-shadow: 2px 2px 10px #b1b1b1;
    }
}

#tag {
    display: flex;
    padding: 16px 0;
    justify-content: space-between;
    .tagItem {
        cursor: pointer;
        width: 10%;
        background-color: #fff;
        .tag-content {
            padding: 16px;
            text-align: center;
            .tag-content-text {
                margin-top: 8px;
                font-size: 14px;
                color: @textColor;
            }
        }
        &:hover {
            animation: myfirst 2s ease forwards;
        }
    }
}
</style>