import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/Login.vue')
	},
	{
		path: '/page/',
		name: 'pageIndex',
		component: () => import('../views/index.vue'),
		children: [
			{
				path: 'index',
				component: () => import('../views/page/indexPage.vue'),
			},
			{
				path: 'table/',
				component: () => import('../views/page/TablePage.vue'),
				children: [
					{
						path: 'editTable',
						component: () => import('../views/page/TablePageEdit.vue')
					},
					{
						path: 'flexibleTable',
						component: () => import('../views/page/TablePageFlexible.vue')
					}
				]
			},
			{
				path: 'admin',
				meta:{
					auth:true
				},
				component: () => import('../views/page/AdminPage.vue'),
			},
			{
				path: 'drag/',
				component: () => import('../views/page/DragPage.vue'),
				children: [
					{
						path: 'single',
						component: () => import('../views/page/DragPageSingle.vue')
					},
					{
						path: 'group',
						component: () => import('../views/page/DragPageGroup.vue')
					}
				]
			},
			{
				path: 'tree',
				component: () => import('../views/page/TreePage.vue'),
			},
			{
				path: 'error/',
				component: () => import('../views/page/ErrorPage.vue'),
				children: [
					{
						path: '404',
						component: () => import('../views/page/ErrorPage404.vue')
					},
					{
						path: '500',
						component: () => import('../views/page/ErrorPage500.vue')
					}
				]
			},
		]
	}
]


const newRoute = routes.filter(item => {
	// 遍历item，存在 auth为 true 的则不添加
	return getNewRouter(item)
})


function getNewRouter(item){

	let userName = JSON.parse(sessionStorage.getItem('userInfo'))
	// console.log('bbbbbbbb',userName.name)

	if(item.children){
		let curArr = []
		item.children.map((value) => {
			if(getNewRouter(value)){
				curArr.push(getNewRouter(value))
			}
		})
		item.children = curArr
		return item
		
	}else{
		// console.log('userName',userName)
		if(userName.name == 'admin'){
			return item
		}else{
			if(!item.meta || !item.meta.auth){
				return item
			}
		}
		
	}
}

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	// newRoute
})

router.beforeEach((to,from,next)=>{
	console.log(to,from,next)
	router.addRoutes([...newRoute])
	next()
})



export default router
