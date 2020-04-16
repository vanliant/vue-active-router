// 引入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random
//  mock一组数据
let data = []

for(let i=0;i<10;i++){
    let obj = {
        'id':i+1,
        'name':Random.cname(),
        'age':Random.natural(1, 50),
        'sex':Random.natural(1, 2),
        'address':Random.city(true),
    }
    data.push(obj)
}

let tableData = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 10 个元素
    data
})
// 拦截ajax请求，配置mock的数据
Mock.mock(/\/tablePage\/editTable/, 'post', ()=>{
    return tableData
})