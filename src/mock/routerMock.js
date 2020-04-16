const Mock = require('mockjs')

let routerData = Mock.mock(
    'router'
)

Mock.mock(/routerInfos/, 'post', (res) => {
    return routerData[res.body]
})