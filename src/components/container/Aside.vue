<template>
    <div>
        <el-menu
            :default-active="activePath"
            class="el-menu-vertical"
            @select="selectPage"
            background-color="#304155"
            text-color="#fff"
            :collapse="false"
        >
            <el-menu-item index="/page/index">
                <i class="el-icon-house"></i>
                <span slot="title">首页</span>
            </el-menu-item>

            <el-submenu index="/page/table">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span slot="title">表格案例</span>
                </template>
                <el-menu-item index="/page/table/editTable">
                    <i class="el-icon-document"></i>
                    <span slot="title">可编辑表格</span>
                </el-menu-item>
                <el-menu-item index="/page/table/flexibleTable">
                    <i class="el-icon-document"></i>
                    <span slot="title">自定义列表格</span>
                </el-menu-item>
            </el-submenu>
            
            <el-menu-item index="/page/admin">
                <i class="el-icon-user"></i>
                <span slot="title">权限管理</span>
            </el-menu-item>

            <el-submenu index="/page/drag">
                <template slot="title">
                    <i class="el-icon-magic-stick"></i>
                    <span slot="title">拖拽案例</span>
                </template>
                <el-menu-item index="/page/drag/single">
                    <i class="el-icon-magic-stick"></i>
                    <span slot="title">单组拖拽</span>
                </el-menu-item>
                <el-menu-item index="/page/drag/group">
                    <i class="el-icon-magic-stick"></i>
                    <span slot="title">多组拖拽</span>
                </el-menu-item>
            </el-submenu>
            <el-menu-item index="/page/tree">
                <i class="el-icon-folder-opened"></i>
                <span slot="title">树案例</span>
            </el-menu-item>
            <el-submenu index="/page/error">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span slot="title">Error页面</span>
                </template>
                <el-menu-item index="/page/error/404">
                    <i class="el-icon-warning-outline"></i>
                    <span slot="title">404</span>
                </el-menu-item>
                <el-menu-item index="/page/error/500">
                    <i class="el-icon-warning-outline"></i>
                    <span slot="title">500</span>
                </el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        selectPage(key,keyPath){
            this.$router.push({
                path:keyPath[keyPath.length - 1],
            })
        }
    },
    computed:{
        activePath:function(){
            return this.$route.path
        }
    },
    created(){

    }
};
</script>

<style lang="less" scoped>
.el-menu-vertical {
    border-right-width: 0px;
    width: 100%;
    text-align: left;
}
</style>