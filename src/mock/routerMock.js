const Mock = require('mockjs')

let routerData = Mock.mock({
    'aaa':123
})

Mock.mock(/goods/,'post',(res)=>{
    console.log('mock',res)
    return routerData.aaa
})