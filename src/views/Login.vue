<template>
    <div id="login">
        <div class="loginDiv">
            <div class="login-header">
                <span>用户登录</span>
            </div>
            <div class="login-body">
                <el-input v-model.trim="userName" placeholder="请输入用户名" class="myInput">
                    <i slot="prefix" class="el-input__icon el-icon-date"></i>
                </el-input>
                <el-input v-model.trim="password" placeholder="请输入密码" show-password class="myInput">
                    <i slot="prefix" class="el-input__icon el-icon-date"></i>
                </el-input>
            </div>
            <el-button class="login-submit" @click="submitInfo">登录</el-button>
            <div class="login-foot">
                <span class="tips">
                    管理员账号：admin 密码：123
                    <br />普通用户：user 密码：123
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            userName:'',
            password:''
        }
    },
    methods:{
        submitInfo(){
            
            if(this.userName != 'admin' && this.userName != 'user'){
                this.$message.error('用户名错误')
                return
            }

            if(this.password != 123){
                this.$message.error('密码错误')
                return
            }

            this.enterPage()

        },

        // 路由跳转
        enterPage(){
            // 存储当前的用户数据到store
            let userInfo = {
                name:this.userName,
                password:this.password
            }
            sessionStorage.setItem('userInfo',[JSON.stringify(userInfo)])
            this.$store.commit('saveUserInfo',userInfo)
            this.$router.push({
                path:'/page/index',
            })
        }

    }
}
</script>

<style lang="less" scoped>
#login {
    background: @blue;
    width: 100%;
    height: 100%;
    background: url("../assets/img/bg.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
}
.loginDiv {
    .center();
    width: 300px;
    border: @border;
    background: #fff;
    border-radius: @radius;
    text-align: center;
    padding: 20px 0;

    .login-header {
        text-align: center;
    }

    .login-body {
        text-align: center;
        .myInput {
            width: 250px;
            margin: 10px 0 0 0;
        }
    }

    .login-submit {
        background: @blue;
        color: #fff;
        width: 250px;
        margin: 10px 0 10px 0;
    }

    .login-foot {
        .tips {
            display: inline-block;
            width: 250px;
            text-align: left;
            font-size: 12px;
            color: #888888;
        }
    }
}
</style>