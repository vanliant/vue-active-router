// 引入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
// const Random = Mock.Random
//  mock一组数据
let data = [
    [{id:1,tagName:'数据1',label:'我是第一棵树',children:[{}]}],
    [{id:2,tagName:'数据2',label:'我是第二棵树',children:[{}]}],
    [{id:3,tagName:'数据3',label:'我是第三棵树',children:[{}]}],
    [{id:4,tagName:'数据4',label:'我是第四棵树',children:[{}]}],
]

let rootData = Mock.mock({
    data
})

let detailData = {
    1:[{
        label: "数据1 1-1",
        tagName:'二级(数据1)',
        id:11,
        children: [
            {
                label: "数据1 1-1-1",
                tagName:'三级(数据1)',
                id:111,
            }
        ]
    }],
    2:[{
        label: "数据2 2-1",
        tagName:'二级(数据2)',
        id:21,
        children: [
            {
                label: "数据2 2-1-1",
                tagName:'三级(数据2)',
                id:211,
            }
        ]
    },{
        label: "数据2 2-2",
        tagName:'二级(数据2)',
        id:22,
        children: [
            {
                label: "数据2 2-2-1",
                tagName:'三级(数据2)',
                id:221,
            }
        ]
    }],
    3:[{
        label: "数据3 3-1",
        tagName:'二级(数据3)',
        id:31,
        children: [
            {
                label: "数据3 3-1-1",
                tagName:'三级(数据3)',
                id:311,
            }
        ]
    }],
    4:[{
        label: "数据4 4-1",
        tagName:'二级(数据4)',
        id:41,
        children: [
            {
                label: "数据4 4-1-1",
                tagName:'三级(数据4)',
                id:411,
            },
            {
                label: "数据4 4-1-2",
                tagName:'三级(数据4)',
                id:412,
            }
        ]
    },{
        label: "数据4 4-2",
        tagName:'二级(数据4)',
        id:42,
        children: [
            {
                label: "数据4 4-2-1",
                tagName:'三级(数据4)',
                id:421,
            },
            {
                label: "数据4 4-2-2",
                tagName:'三级(数据4)',
                id:422,
            }
        ]
    }]
}

let detail = Mock.mock({
    detailData
})
// 拦截ajax请求，配置mock的数据
Mock.mock(/\/treePage\/rootData/, 'post', ()=>{
    return rootData
})

Mock.mock(/\/treePage\/detailData/, 'post', (res)=>{
    return detail.detailData[res.body]
})