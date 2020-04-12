<template>
    <div id="headerDIv">
        <div class="btn">
            <i
                title="收起"
                v-if="!isCollapse"
                class="el-icon-s-fold collapseBtn"
                @click="collapseBtn('flod')"
            ></i>
            <i
                title="展开"
                v-else
                class="el-icon-s-unfold collapseBtn"
                @click="collapseBtn('unflod')"
            ></i>
        </div>

        <div class="bread">
            <el-breadcrumb class="breadItem" separator-class="el-icon-arrow-right">
                <el-breadcrumb-item
                    v-for="(item,index) in breadcrumbList"
                    :key="index"
                >{{item.name}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="userInfo">
            <div class="avatar">
                <!-- <el-avatar class="headPic" :size="30" src="../../assets/img/avatar.png"></el-avatar> -->
                <img src="../../assets/img/pang.png" width="30px" height="30px" />
            </div>
            <div class="userName">
                <span>{{userName}}</span>
            </div>
            <div>
                <i class="el-icon-switch-button" @click="layout()" title="登出"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            breadcrumbList: []
        };
    },
    computed: {
        userName: function() {
            return localStorage.getItem("userName");
        },
        isCollapse: function() {
            return this.$store.state.isCollapse;
        }
    },
    watch: {
        $route() {
            this.loadChange();
        }
    },
    methods: {
        collapseBtn(type) {
            if (type == "flod") {
                this.$store.commit("saveIsCollapse", true);
            } else {
                this.$store.commit("saveIsCollapse", false);
            }
        },
        layout() {
            window.location.href = "/login";
        },
        loadChange() {
            this.breadcrumbList = [];
            this.$route.matched.map(val => {
                let curObj = {};
                curObj.name = val.name;

                if (val.name != "pageIndex") {
                    this.breadcrumbList.push(curObj);
                }
            });
        }
    },
    created() {
        this.loadChange();
    }
};
</script>

<style lang="less" scoped>
#headerDIv {
    height: 60px;
    display: flex;
    div {
        display: inline-block;
    }
    .btn {
        width: 30px;
    }
    .bread {
        flex: 1;
        position: relative;
        .breadItem {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            line-height: 1.5;
        }
    }
    .userInfo {
        width: 150px;
        display: inline-block;
        .avatar {
            display: inline-block;
            margin-right: 10px;
            img {
                vertical-align: middle;
                border-radius: 50%;
                cursor: pointer;
            }
        }
        .userName {
            display: inline-block;
            margin-right: 10px;
        }
    }
}
.collapseBtn {
    cursor: pointer;
}

.el-icon-switch-button {
    color: @red;
    cursor: pointer;
}
</style>