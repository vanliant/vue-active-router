<template>
    <div>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="id" label="ID" align="center" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" align="center" width="250">
                <template slot-scope="scope">
                    <span v-if="!scope.row.editName">{{scope.row.name}}</span>
                    <i  v-if="!scope.row.editName" class="el-icon-edit edit" @click="changeData(scope.row,scope.$index,'name')"></i>

                    <el-input v-model="name" v-if="scope.row.editName" style="width:150px"></el-input>
                    <i v-if="scope.row.editName" class="el-icon-circle-check confirm" @click="confirmChange(scope.row,scope.$index,'name')"></i>
                    <i v-if="scope.row.editName" class="el-icon-circle-close quit" @click="quitChange(scope.row,scope.$index)"></i>
                </template>
            </el-table-column>
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
            <el-table-column prop="address" align="left" label="地址">
                <template slot-scope="scope">
                    <span v-if="!scope.row.editAddress">{{scope.row.address}}</span>
                    <i  v-if="!scope.row.editAddress" class="el-icon-edit edit" @click="changeData(scope.row,scope.$index,'address')"></i>

                    <el-input v-model="address" v-if="scope.row.editAddress" style="width:150px"></el-input>
                    <i v-if="scope.row.editAddress" class="el-icon-circle-check confirm" @click="confirmChange(scope.row,scope.$index,'address')"></i>
                    <i v-if="scope.row.editAddress" class="el-icon-circle-close quit" @click="quitChange(scope.row,scope.$index)"></i>
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
            name:'',
            address:''
        };
    },
    methods: {
        getEditTableData() {
            this.axios.post("/tablePage/editTable/").then(res => {

                let curTableData = res.data.data;

                curTableData.map((value)=>{
                    value.editName = false
                    value.editAddress = false
                })

                this.tableData = curTableData;
            });
        },

        changeData(row,index,type){
            this.resetEditStatus()

            let curRow = row

            if(type == 'name'){
                this.name = row.name
                curRow.editName = true
            }else if(type == 'address'){
                this.address = row.address
                curRow.editAddress = true
            }
            
            this.$set(this.tableData,index,curRow)
        },

        confirmChange(row,index,type){
            this.resetEditStatus()
            
            if(type == 'name'){
                let curRow = row
                curRow.name = this.name
                this.$set(this.tableData,index,curRow)
                this.$message.success('修改成功')
            }else if(type == 'address'){
                let curRow = row
                curRow.address = this.address
                this.$set(this.tableData,index,curRow)
                this.$message.success('修改成功')
            }
        },

        quitChange(){
            this.resetEditStatus()
        },

        resetEditStatus(){
            this.tableData.map((value)=>{
                value.editName = false
                value.editAddress = false
            })
        }
    },
    created() {
        this.getEditTableData();
    }
};
</script>

<style lang="less" scoped>
.edit{
    cursor: pointer;
}
.confirm,.quit{
    cursor: pointer;
    margin-left: 10px;
}
</style>