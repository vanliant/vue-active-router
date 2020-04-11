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
				path: 'index',
				component: () => import('../views/page/indexPage.vue'),
				meta:{
					roles:['admin','user']
				}
			},
			{
				path: 'table/',
				component: () => import('../views/page/TablePage.vue'),
				meta:{
					roles:['admin','user']
				},
				children: [
					{
						path: 'editTable',
						component: () => import('../views/page/TablePageEdit.vue'),
						meta:{
							roles:['admin','user']
						},
					},
					{
						path: 'flexibleTable',
						component: () => import('../views/page/TablePageFlexible.vue'),
						meta:{
							roles:['admin','user']
						},
					}
				]
			},
			{
				path: 'admin',
				component: () => import('../views/page/AdminPage.vue'),
				meta:{
					roles:['admin']
				},
			},
			{
				path: 'drag/',
				component: () => import('../views/page/DragPage.vue'),
				meta:{
					roles:['admin','user']
				},
				children: [
					{
						path: 'single',
						component: () => import('../views/page/DragPageSingle.vue'),
						meta:{
							roles:['admin','user']
						},
					},
					{
						path: 'group',
						component: () => import('../views/page/DragPageGroup.vue'),
						meta:{
							roles:['admin','user']
						},
					}
				]
			},
			{
				path: 'tree',
				component: () => import('../views/page/TreePage.vue'),
				meta:{
					roles:['admin','user']
				},
			},
			{
				path: 'error/',
				component: () => import('../views/page/ErrorPage.vue'),
				meta:{
					roles:['admin','user']
				},
				children: [
					{
						path: '404',
						component: () => import('../views/page/ErrorPage404.vue'),
						meta:{
							roles:['admin','user']
						},
					},
					{
						path: '500',
						component: () => import('../views/page/ErrorPage500.vue'),
						meta:{
							roles:['admin','user']
						},
					}
				]
			},
		]
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes:fixRoutes
})

export default router
