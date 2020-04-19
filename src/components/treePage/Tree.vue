<template>
    <div>
        <!-- <el-tree :data="data" :props="defaultProps" accordion @node-click="handleNodeClick"></el-tree> -->
        <div v-for="(item,index) in rootData" :key="index">
            <el-tree :data="item" :props="defaultProps" accordion @node-click="handleNodeClick" @node-expand='(obj,node,componnet) => showChedckNode(obj,node,componnet,index)'></el-tree>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: [
                {
                    label: "一级 1",
                    children: [
                        {
                            label: "二级 1-1",
                            children: [
                                {
                                    label: "三级 1-1-1"
                                }
                            ]
                        }
                    ]
                },
                {
                    label: "一级 2",
                    children: [
                        {
                            label: "二级 2-1",
                            children: [
                                {
                                    label: "三级 2-1-1"
                                }
                            ]
                        },
                        {
                            label: "二级 2-2",
                            children: [
                                {
                                    label: "三级 2-2-1"
                                }
                            ]
                        }
                    ]
                },
                {
                    label: "一级 3",
                    children: [
                        {
                            label: "二级 3-1",
                            children: [
                                {
                                    label: "三级 3-1-1"
                                }
                            ]
                        },
                        {
                            label: "二级 3-2",
                            children: [
                                {
                                    label: "三级 3-2-1"
                                }
                            ]
                        }
                    ]
                }
            ],

            rootData: [],
            defaultProps: {
                children: "children",
                label: "label"
            }
        };
    },
    methods: {
        handleNodeClick() {},
        getRootData() {
            this.axios.post("/treePage/rootData").then(res => {
                let curData = res.data.data;
                this.rootData = curData;
            });
        },
        getDetailData(id,index){
            this.axios.post('/treePage/detailData/',id).then(res => {
                console.log('res',res.data,index)
    this.rootData[index].children = []
                res.data.map((value)=>{
                    this.rootData[index].children.push(value)
                })
                
                console.log('aa',this.rootData)
            })
        },
        showChedckNode(obj,node,componnet,index){
            console.log('ss',obj,node,componnet,index)
            if(node.level == 1){
                // 点击的为第一层子节点，通过id去获取数据
                this.getDetailData(obj.id,index)
            }
        }
    },
    created() {
        this.getRootData();
    }
};
</script>

<style lang="less" scoped>
</style>