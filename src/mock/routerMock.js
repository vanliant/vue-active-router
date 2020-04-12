const Mock = require('mockjs')

let routerData = Mock.mock(

)

Mock.mock(/routerInfo/, 'post', (res) => {
    return routerData[res.body]
})