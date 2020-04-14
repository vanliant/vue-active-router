<template>
    <div id="pageIndex">
        <el-container class="content">
            <el-aside :width="asideWidth">
                <aside-part />
            </el-aside>
            <el-container>
                <el-header>
                    <header-part />
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
import headerPart from "@/components/container/Header.vue";

export default {
    components: {
        asidePart,
        headerPart
    },
    data() {
        return {};
    },
    computed: {
        asideWidth: function() {
            if (this.$store.state.isCollapse) {
                return "65px";
            } else {
                return "200px";
            }
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
    background-color: #fff;
    color: #333;
    line-height: 60px;
    padding: 0 0 0 20px;
}

.el-aside {
    background-color: #304155;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    background-color: #f6f7f9;
    color: #333;
}
</style>