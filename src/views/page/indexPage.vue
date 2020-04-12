<template>
    <div id="indexPage">
        <div>
            <!-- card，访问量、销售额、订单量、新增用户 -->
            <module-content/>
        </div>

        <div>
            <!-- card，用户、分析、商品、订单、票据、消息、标签、配置 -->
        </div>

        <div>
            <!-- 访问量趋势、访问量排行 -->
        </div>

        <div>
            <!-- 热门搜索、用户画像 -->
        </div>
    </div>
</template>

<script>
import moduleContent from '@/components/indexPage/module.vue'
export default {
    components:{
moduleContent
    },
    data() {
        return {
            
        };
    }
};
</script>

<style lang="less" scoped>

</style>