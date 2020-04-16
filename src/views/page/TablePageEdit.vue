<template>
    <div>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="id" label="ID" align="center" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" align="center" width="180"></el-table-column>
            <el-table-column prop="sex" align="center" width="180" label="性别">
                <template slot-scope="scope">
                    <el-tag
                        v-if="scope.row.sex == 1"
                        :type="scope.row.sex === 1 ? 'primary' : 'success'"
                    >男</el-tag>
                    <el-tag
                        v-if="scope.row.sex == 2"
                        :type="scope.row.sex === 1 ? 'primary' : 'success'"
                    >女</el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="age" align="center" width="180" label="年龄"></el-table-column>
            <el-table-column prop="address" align="left" label="地址"></el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: []
        };
    },
    methods: {
        getEditTableData() {
            this.axios.post("/tablePage/editTable/").then(res => {

                

                this.tableData = res.data.data;
            });
        }
    },
    created() {
        this.getEditTableData();
    }
};
</script>

<style lang="less" scoped>
</style>