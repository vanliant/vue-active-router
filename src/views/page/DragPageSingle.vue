<template>
    <div>
        <span class="title">单组数据间拖拽</span>
        <div id="single">
            <div class="single-list" v-for="(item,index) in singleList" :key="index">
                <span>{{item}}</span>
            </div>
        </div>

    </div>
</template>

<script>

import Sortable from "sortablejs";

export default {
    data(){
        return{
            singleList:[
                'data1','data2','data3','data4','data5','data6'
            ],
        }
    },
    methods:{
        drag() {
            const tagList = this.$el.querySelector(
                "#single"
            );

            this.sortable = Sortable.create(tagList, {
                animation: 180,
                delay: 0,
                onEnd: evt => {
                    const item = this.singleList[evt.oldIndex]
                    this.singleList.splice(evt.oldIndex,1)
                    this.singleList.splice(evt.newIndex,0,item)

                    let newArray = this.singleList.slice(0);
                    this.singleList = [];
                    this.$nextTick(function () {
                        this.singleList = newArray;
                    });
                }
            });
        },
    },
    mounted(){
        this.drag()
    }
}
</script>

<style lang="less" scoped>

.title{
color: @textColor;
display: block;
font-size: 16px;
    line-height: 24px;
    margin: 20px 0;
}

.single-list{
    display: inline-block;
    height: 22px;
    line-height: 22px;
    margin: 2px 4px 2px 0;
    padding: 0 8px;
    border: 1px solid #e8eaec;
    border-radius: 3px;
    background: #f7f7f7;
    font-size: 12px;
    vertical-align: middle;
    opacity: 1;
    overflow: hidden;
    cursor: pointer;
    span{
        color: @textColor;
        line-height: 22px;
    }
}
</style>