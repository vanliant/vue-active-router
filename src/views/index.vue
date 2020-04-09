<template>
    <div id="pageIndex">
        <el-container class="content">
            <el-aside width="200px">
                <aside-part />
            </el-aside>
            <el-container>
                <el-header>
                    {{userName}}
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import asidePart from "@/components/container/Aside.vue";

export default {
    components: {
        asidePart
    },
    data() {
        return {};
    },
    computed:{
        userName:function(){
            return this.$store.state.userInfo.name
        }
    }
};
</script>

<style lang="less" scoped>
#pageIndex {
    height: 100%;
    width: 100%;
    .content {
        height: 100%;
    }
}
.el-header {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #304155;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    background-color: #e9eef3;
    color: #333;
    line-height: 160px;
}
</style>