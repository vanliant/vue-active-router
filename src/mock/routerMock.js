const Mock = require('mockjs')

let routerData = Mock.mock(
    {
        'admin': {
            'routes': [
                {
                    path: '/login',
                    name: 'Login',
                    component: `() => import('../views/Login.vue')`
                },
                {
                    path: '/page/',
                    name: 'pageIndex',
                    component: `() => import('../views/index.vue')`,
                    children: [
                        {
                            path: 'index',
                            component: `() => import('../views/page/indexPage.vue')`,
                        },
                        {
                            path: 'table/',
                            component: `() => import('../views/page/TablePage.vue')`,
                            children: [
                                {
                                    path: 'editTable',
                                    component: `() => import('../views/page/TablePageEdit.vue')`
                                },
                                {
                                    path: 'flexibleTable',
                                    component: `() => import('../views/page/TablePageFlexible.vue')`
                                }
                            ]
                        },
                        {
                            path: 'admin',
                            component: `() => import('../views/page/AdminPage.vue')`,
                        },
                        {
                            path: 'drag/',
                            component: `() => import('../views/page/DragPage.vue')`,
                            children: [
                                {
                                    path: 'single',
                                    component: `() => import('../views/page/DragPageSingle.vue')`
                                },
                                {
                                    path: 'group',
                                    component: `() => import('../views/page/DragPageGroup.vue')`
                                }
                            ]
                        },
                        {
                            path: 'tree',
                            component: `() => import('../views/page/TreePage.vue')`,
                        },
                        {
                            path: 'error/',
                            component: `() => import('../views/page/ErrorPage.vue')`,
                            children: [
                                {
                                    path: '404',
                                    component: `() => import('../views/page/ErrorPage404.vue')`
                                },
                                {
                                    path: '500',
                                    component: `() => import('../views/page/ErrorPage500.vue')`
                                }
                            ]
                        },
                    ]
                }
            ],
            'menu': [
                {
                    'index':'/page/index',
                    'icon':'el-icon-house',
                    'title':'首页'
                },
                {
                    'index':'/page/table',
                    'icon':'el-icon-menu',
                    'title':'表格案例',
                    'children':[
                        {
                            'index':'/page/table/editTable',
                            'icon':'el-icon-document',
                            'title':'可编辑表格',
                        },
                        {
                            'index':'/page/table/flexibleTable',
                            'icon':'el-icon-document',
                            'title':'自定义列表格',
                        }
                    ]
                },
                {
                    'index':'/page/drag',
                    'icon':'el-icon-magic-stick',
                    'title':'拖拽案例',
                    'children':[
                        {
                            'index':'/page/drag/single',
                            'icon':'el-icon-magic-stick',
                            'title':'单组拖拽',
                        },
                        {
                            'index':'/page/drag/group',
                            'icon':'el-icon-magic-stick',
                            'title':'多组拖拽',
                        }
                    ]
                },
                {
                    'index':'/page/tree',
                    'icon':'el-icon-folder-opened',
                    'title':'树案例'
                },
                {
                    'index':'/page/error',
                    'icon':'el-icon-magic-stick',
                    'title':'Error页面',
                    'children':[
                        {
                            'index':'/page/error/404',
                            'icon':'el-icon-warning-outline',
                            'title':'404',
                        },
                        {
                            'index':'/page/error/500',
                            'icon':'el-icon-warning-outline',
                            'title':'500',
                        }
                    ]
                },
                {
                    'index':'/page/admin',
                    'icon':'el-icon-user',
                    'title':'权限管理'
                }
            ]
        },
        'user': {
            'routes': [
                {
                    path: '/login',
                    name: 'Login',
                    component: `() => import('../views/Login.vue')`
                },
                {
                    path: '/page/',
                    name: 'pageIndex',
                    component: `() => import('../views/index.vue')`,
                    children: [
                        {
                            path: 'index',
                            component: `() => import('../views/page/indexPage.vue')`,
                        },
                        {
                            path: 'table/',
                            component: `() => import('../views/page/TablePage.vue')`,
                            children: [
                                {
                                    path: 'editTable',
                                    component: `() => import('../views/page/TablePageEdit.vue')`
                                },
                                {
                                    path: 'flexibleTable',
                                    component: `() => import('../views/page/TablePageFlexible.vue')`
                                }
                            ]
                        },
                        {
                            path: 'admin',
                            component: `() => import('../views/page/AdminPage.vue')`,
                        },
                        {
                            path: 'drag/',
                            component: `() => import('../views/page/DragPage.vue')`,
                            children: [
                                {
                                    path: 'single',
                                    component: `() => import('../views/page/DragPageSingle.vue')`
                                },
                                {
                                    path: 'group',
                                    component: `() => import('../views/page/DragPageGroup.vue')`
                                }
                            ]
                        },
                        {
                            path: 'tree',
                            component: `() => import('../views/page/TreePage.vue')`,
                        },
                        // {
                        //     path: 'error/',
                        //     component: () => import('../views/page/ErrorPage.vue'),
                        //     children: [
                        //         {
                        //             path: '404',
                        //             component: () => import('../views/page/ErrorPage404.vue')
                        //         },
                        //         {
                        //             path: '500',
                        //             component: () => import('../views/page/ErrorPage500.vue')
                        //         }
                        //     ]
                        // },
                    ]
                }
            ],
            'menu': [
                {
                    'index':'/page/index',
                    'icon':'el-icon-house',
                    'title':'首页'
                },
                {
                    'index':'/page/table',
                    'icon':'el-icon-menu',
                    'title':'表格案例',
                    'children':[
                        {
                            'index':'/page/table/editTable',
                            'icon':'el-icon-document',
                            'title':'可编辑表格',
                        },
                        {
                            'index':'/page/table/flexibleTable',
                            'icon':'el-icon-document',
                            'title':'自定义列表格',
                        }
                    ]
                },
                // {
                //     'index':'/page/admin',
                //     'icon':'el-icon-user',
                //     'title':'权限管理'
                // },
                {
                    'index':'/page/drag',
                    'icon':'el-icon-magic-stick',
                    'title':'拖拽案例',
                    'children':[
                        {
                            'index':'/page/drag/single',
                            'icon':'el-icon-magic-stick',
                            'title':'单组拖拽',
                        },
                        {
                            'index':'/page/drag/group',
                            'icon':'el-icon-magic-stick',
                            'title':'多组拖拽',
                        }
                    ]
                },
                {
                    'index':'/page/tree',
                    'icon':'el-icon-folder-opened',
                    'title':'树案例'
                },
                {
                    'index':'/page/error',
                    'icon':'el-icon-magic-stick',
                    'title':'Error页面',
                    'children':[
                        {
                            'index':'/page/error/404',
                            'icon':'el-icon-warning-outline',
                            'title':'404',
                        },
                        {
                            'index':'/page/error/500',
                            'icon':'el-icon-warning-outline',
                            'title':'500',
                        }
                    ]
                },
            ]
        }
    }
)

Mock.mock(/goods/, 'post', (res) => {
    console.log('mock', res)
    return routerData
})