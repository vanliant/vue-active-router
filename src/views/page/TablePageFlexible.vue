<template>
    <div>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column
                :prop="item"
                :align="item == 'address' ? 'left' : 'center' "
                :label="labelList[item]"
                v-for="(item,index) in colList"
                :key="index"
                :width="item != 'address' ? '180' : 'auto'"
            >
                <template slot-scope="scope">
                    <div v-if="item == 'sex'">
                        <el-tag
                            v-if="scope.row.sex == 1"
                            :type="scope.row.sex === 1 ? 'primary' : 'success'"
                        >男</el-tag>
                        <el-tag
                            v-if="scope.row.sex == 2"
                            :type="scope.row.sex === 1 ? 'primary' : 'success'"
                        >女</el-tag>
                    </div>
                    <div v-else>
                        <span>{{scope.row[item]}}</span>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [],
            colList: [],
            labelList: {
                id: "ID",
                name: "姓名",
                age: "年龄",
                sex: "性别",
                address: "地址"
            },
            widthList:['id','age','sex']
        };
    },
    methods: {
        getEditTableData() {
            this.axios.post("/tablePage/editTable/").then(res => {
                this.colList = Object.keys(res.data.data[0]);
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