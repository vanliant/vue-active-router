import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const fixRoutes = [
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/Login.vue'),
		meta:{
			roles:['admin','user']
		}
	}
]
export const authRoutes = [
	{
		path: '/page/',
		name: 'pageIndex',
		component: () => import('../views/index.vue'),
		meta:{
			roles:['admin','user']
		},
		children: [
			{
				path: 'index/',
				name:'首页',
				component: () => import('../views/page/indexPage.vue'),
				meta:{
					roles:['admin','user']
				}
			},
			{
				path: 'table/',
				name:'表格案例',
				component: () => import('../views/page/TablePage.vue'),
				meta:{
					roles:['admin','user']
				},
				children: [
					{
						path: 'editTable',
						name:'可编辑案例',
						component: () => import('../views/page/TablePageEdit.vue'),
						meta:{
							roles:['admin','user']
						},
					},
					{
						path: 'flexibleTable',
						name:'自定义列表格',
						component: () => import('../views/page/TablePageFlexible.vue'),
						meta:{
							roles:['admin','user']
						},
					}
				]
			},
			{
				path: 'admin',
				name:'权限管理',
				component: () => import('../views/page/AdminPage.vue'),
				meta:{
					roles:['admin']
				},
			},
			{
				path: 'drag/',
				name:'拖拽案例',
				component: () => import('../views/page/DragPage.vue'),
				meta:{
					roles:['admin','user']
				},
				children: [
					{
						path: 'single',
						name:'单组拖拽',
						component: () => import('../views/page/DragPageSingle.vue'),
						meta:{
							roles:['admin','user']
						},
					},
					{
						path: 'group',
						name:'多组拖拽',
						component: () => import('../views/page/DragPageGroup.vue'),
						meta:{
							roles:['admin','user']
						},
					}
				]
			},
			{
				path: 'tree',
				name:'树案例',
				component: () => import('../views/page/TreePage.vue'),
				meta:{
					roles:[]
				},
			},
			{
				path: 'error/',
				name:'Error页面',
				component: () => import('../views/page/ErrorPage.vue'),
				meta:{
					roles:['admin','user']
				},
				children: [
					{
						path: '404',
						name:'404',
						component: () => import('../views/page/ErrorPage404.vue'),
						meta:{
							roles:['admin','user']
						},
					},
					{
						path: '500',
						name:'500',
						component: () => import('../views/page/ErrorPage500.vue'),
						meta:{
							roles:['admin','user']
						},
					}
				]
			},
		]
	},
	{
		path: '*',
		name: 'error',
		redirect:{name:"404"}
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes:fixRoutes
})

export default router
