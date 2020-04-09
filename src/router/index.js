import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'

Vue.use(VueRouter)

const routes = [
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/Login.vue')
	},
	// {
	//   path: '/page/',
	//   name: 'pageIndex',
	//   component: () => import('../views/index.vue'),
	//   children: [
	//     {
	//       path: 'index',
	//       component: () => import('../views/page/indexPage.vue'),
	//     },
	//     {
	//       path: 'table/',
	//       component: () => import('../views/page/TablePage.vue'),
	//       children: [
	//         {
	//           path: 'editTable',
	//           component: () => import('../views/page/TablePageEdit.vue')
	//         },
	//         {
	//           path: 'flexibleTable',
	//           component: () => import('../views/page/TablePageFlexible.vue')
	//         }
	//       ]
	//     },
	//     {
	//       path: 'admin',
	//       component: () => import('../views/page/AdminPage.vue'),
	//     },
	//     {
	//       path: 'drag/',
	//       component: () => import('../views/page/DragPage.vue'),
	//       children: [
	//         {
	//           path: 'single',
	//           component: () => import('../views/page/DragPageSingle.vue')
	//         },
	//         {
	//           path: 'group',
	//           component: () => import('../views/page/DragPageGroup.vue')
	//         }
	//       ]
	//     },
	//     {
	//       path: 'tree',
	//       component: () => import('../views/page/TreePage.vue'),
	//     },
	//     {
	//       path: 'error/',
	//       component: () => import('../views/page/ErrorPage.vue'),
	//       children: [
	//         {
	//           path: '404',
	//           component: () => import('../views/page/ErrorPage404.vue')
	//         },
	//         {
	//           path: '500',
	//           component: () => import('../views/page/ErrorPage500.vue')
	//         }
	//       ]
	//     },
	//   ]
	// }
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
	console.log(to, from, next)
	console.log(sessionStorage.getItem('newRouter'))
	if (to.path.includes('page') && sessionStorage.getItem('newRouter') == 'true') {
		// 跳转至详情页面
		let userName = JSON.parse(sessionStorage.getItem('userInfo'))
		axios.post('/routerInfo/', userName.name).then((res)=>{
		router.options.routes.push(...res.data.routes);
		sessionStorage.setItem('newRouter',false)
		router.addRoutes(res.data.routes);


		console.log('router',router)
		// next()
		router
	})
		
	} else {
		sessionStorage.setItem('newRouter',true)
		console.log('router',router)
		next()
	}


})

// async function getRouterData() {
// 	let userName = JSON.parse(sessionStorage.getItem('userInfo'))


// 	let res = await axios.post('/routerInfo/', userName.name)
// 	// await axios.post('/routerInfo/', userName.name).then((res) => {
// 		// console.log('dddddd',res.data.routes)

// 		// console.log(this)
// 		router.options.routes = res.data.routes;
// 		router.addRoutes(res.data.routes);
// 		// router.options.routes.push(res.data.routes)
// 		// router.addRoutes(routers)
// 		// router.options.routes.push(routers)
// 		// router.options.routes.push(res.data.routes[0])
// 		console.log('bbbbbbbb', router.options.routes)
// 		// router.addRoutes(
// 		//   res.data.routes
// 		// )
// 		console.log(3)
// 	// }z
// }

export default router
