const Mock = require('mockjs')

// 访问量、销售额、订单量、新增用户
let indexData = Mock.mock(
    [
        {name:'访问量'}
    ]
)

Mock.mock(/indexPage\/indexData/, 'post', () => {
    return indexData
})