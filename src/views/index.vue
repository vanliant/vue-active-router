<template>
    <div id="pageIndex">
        <el-container class="content">
            <el-aside width="200px">
                <aside-part />
            </el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import asidePart from '@/components/container/Aside.vue';

export default {
    components:{
        asidePart
    },
    data(){
        return {

        }
    }
}
</script>

<style lang="less" scoped>
#pageIndex{
    height: 100%;
    width: 100%;
    .content{
        height: 100%;
    }
}
.el-header{
    background-color: #B3C0D1;
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
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>