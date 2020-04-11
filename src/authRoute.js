import { fixRoutes, authRoutes } from '@/router/index.js'

import router from '@/router/index.js'

var addRouteFlag = false

router.beforeEach((to, from, next) => {
    
    let userName = localStorage.getItem("userName")
    console.log('ddd',userName)
    if (userName && userName != 'unLogin') {
        next()
        if (!addRouteFlag) {

            addRouteFlag = true
            // 1.根据当前登陆用户角色筛选路由
            var getRoutes = filterRouter(authRoutes, userName)
            // 2.将生成好的路由addRoutes
            router.addRoutes(fixRoutes.concat(getRoutes))
            // 3.重新进入beforeEach判断
            router.push({ path: to.path })
        }
    } else {
        // 未登陆市设置用户权限未普通成员权限，避免在addRouter之后，删除了localstorage，进入无限循环状态
        localStorage.setItem('userName','user')
        // 用户没登录，跳转到登录页面
        next('/login')
    }

})


function ifHasAuth(route, userName) {
    if (route.meta && route.meta.roles) {
        return route.meta.roles.includes(userName)
    } else {
        return true
    }
}

function filterRouter(allRoutes, userName) {
    // 根据用户的角色取到该用户对应的路由
    let accordRoutes = allRoutes.filter((route) => {
        if (ifHasAuth(route, userName)) {
            if (route.children && route.children.length) {
                // 筛选路由
                route.children = filterRouter(route.children, userName)
            }
            return true
        }
        return false
    })
    return accordRoutes
}