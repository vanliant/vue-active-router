<template>
    <div>
        <span class="title">多组数据间拖拽</span>
        <div id="group">
            <div class="first-group">
                <div class="group-list" v-for="(item,index) in groupList" :key="`one_${index}`">
                    <span>{{item}}</span>
                </div>
            </div>
            <div class="second-group">
                <div class="group-list2" v-for="(item,index) in groupList2" :key="`two_${index}`">
                    <span>{{item}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Sortable from "sortablejs";

export default {
    data() {
        return {
            groupList: [
                "数据一(1)",
                "数据一(2)",
                "数据一(3)",
                "数据一(4)",
                "数据一(5)",
                "数据一(6)"
            ],
            groupList2: [
                "数据二(1)",
                "数据二(2)",
                "数据二(3)",
                "数据二(4)",
                "数据二(5)",
                "数据二(6)"
            ]
        };
    },
    methods: {
        drag() {
            const firstList = this.$el.querySelector(".first-group");

            this.sortable = Sortable.create(firstList, {
                group: "group",
                animation: 180,
                delay: 0,
                onEnd: evt => {
                    if (evt.to.className == "first-group") {
                        const item = this.groupList[evt.oldIndex];
                        this.groupList.splice(evt.oldIndex, 1);
                        this.groupList.splice(evt.newIndex, 0, item);

                        let newArray = this.groupList.slice(0);
                        this.groupList = [];
                        this.$nextTick(function() {
                            this.groupList = newArray;
                        });
                    } else if (evt.to.className == "second-group") {
                        // 取出old，添加new
                        const item = this.groupList[evt.oldIndex];
                        this.groupList.splice(evt.oldIndex, 1);
                        this.groupList2.splice(evt.newIndex, 0, item);

                        let newArray = this.groupList.slice(0);
                        let newArray2 = this.groupList2.slice(0);
                        this.groupList = [];
                        this.groupList2 = [];
                        this.$nextTick(function() {
                            this.groupList = newArray;
                            this.groupList2 = newArray2;
                        });
                    }
                }
            });

            const secondList = this.$el.querySelector(".second-group");
            this.sortable = Sortable.create(secondList, {
                group: "group",
                animation: 180,
                delay: 0,
                onEnd: evt => {
                    if (evt.to.className == "second-group") {
                        const item = this.groupList2[evt.oldIndex];
                        this.groupList2.splice(evt.oldIndex, 1);
                        this.groupList2.splice(evt.newIndex, 0, item);

                        let newArray = this.groupList2.slice(0);
                        this.groupList2 = [];
                        this.$nextTick(function() {
                            this.groupList2 = newArray;
                        });
                    } else if (evt.to.className == "first-group") {
                        // 取出old，添加new
                        const item = this.groupList2[evt.oldIndex];
                        console.log("sss", item);
                        this.groupList2.splice(evt.oldIndex, 1);
                        this.groupList.splice(evt.newIndex, 0, item);

                        let newArray = this.groupList.slice(0);
                        let newArray2 = this.groupList2.slice(0);
                        this.groupList = [];
                        this.groupList2 = [];
                        this.$nextTick(function() {
                            this.groupList = newArray;
                            this.groupList2 = newArray2;
                        });
                    }
                }
            });
        }
    },
    mounted() {
        this.drag();
    }
};
</script>

<style lang="less" scoped>
.title {
    color: @textColor;
    display: block;
    font-size: 16px;
    line-height: 24px;
    margin: 20px 0;
}

#group {
    display: flex;
    .first-group {
        flex: 1;
        .group-list {
            height: 22px;
            line-height: 22px;
            margin: 2px 4px 2px 0;
            padding: 0 8px;
            border: 1px solid #e8eaec;
            border-radius: 3px;
            background: #fff6b2;
            font-size: 12px;
            vertical-align: middle;
            opacity: 1;
            overflow: hidden;
            cursor: pointer;
            span {
                color: @textColor;
                line-height: 22px;
            }
        }
    }

    .second-group {
        flex: 1;
        .group-list2 {
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
            span {
                color: @textColor;
                line-height: 22px;
            }
        }
    }
}
</style>