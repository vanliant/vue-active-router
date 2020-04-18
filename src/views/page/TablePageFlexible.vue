<template>
    <div>
        <el-table
            ref="dragTable"
            :data="tableData"
            border
            style="width: 100%"
            row-key="id"
        >
            <el-table-column
                :prop="dropCol[index].prop"
                align="left"
                :label="item.label"
                v-for="(item,index) in col"
                :key="`col_${index}`"
                :width="dropCol[index].prop != 'address' ? '180' : 'auto'"
            >
                <template slot-scope="scope">
                    <div v-if="dropCol[index].prop == 'sex'">
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
                        <span>{{scope.row[dropCol[index].prop]}}</span>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
// 引入表格拖拽插件
import Sortable from "sortablejs";

export default {
    data() {
        return {
            tableData: [],
            colList: [],
            col: [
                {
                    label: "ID",
                    prop: "id"
                },
                {
                    label: "姓名",
                    prop: "name"
                },
                {
                    label: "年龄",
                    prop: "age"
                },
                {
                    label: "性别",
                    prop: "sex"
                },
                {
                    label: "地址",
                    prop: "address"
                }
            ],
            dropCol: [
                {
                    label: "ID",
                    prop: "id"
                },
                {
                    label: "姓名",
                    prop: "name"
                },
                {
                    label: "年龄",
                    prop: "age"
                },
                {
                    label: "性别",
                    prop: "sex"
                },
                {
                    label: "地址",
                    prop: "address"
                }
            ],
        };
    },
    methods: {
        getEditTableData() {
            this.axios.post("/tablePage/editTable/").then(res => {
                this.colList = Object.keys(res.data.data[0]);
                this.tableData = res.data.data;
            });
        },
        //行拖拽
        rowDrop() {
            const tbody = document.querySelector(
                ".el-table__body-wrapper tbody"
            );
            const _this = this;
            Sortable.create(tbody, {
                onEnd({ newIndex, oldIndex }) {
                    const currRow = _this.tableData.splice(oldIndex, 1)[0];
                    _this.tableData.splice(newIndex, 0, currRow);
                }
            });
        },
        //列拖拽
        columnDrop() {
            const wrapperTr = document.querySelector(
                ".el-table__header-wrapper tr"
            );
            this.sortable = Sortable.create(wrapperTr, {
                animation: 180,
                delay: 0,
                onEnd: evt => {
                    const oldItem = this.dropCol[evt.oldIndex];
                    this.dropCol.splice(evt.oldIndex, 1);
                    this.dropCol.splice(evt.newIndex, 0, oldItem);
                }
            });
        }
    },
    created() {
        this.getEditTableData();
    },
    mounted() {
        this.rowDrop();
        this.columnDrop();
    }
};
</script>

<style lang="less" scoped>
</style>