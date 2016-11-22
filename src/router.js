
import dic from './js/dictionary.js'

// router
import Vue from 'vue'
import VueRouter from 'vue-router'

// import App from './App'
import index from './index'
import Hello from './components/Hello.vue'
import attendance from './components/attendance.vue'
import import_data from './components/import_data.vue'

//Components
//import menu from './components/menu.vue' 

//Pages
import overtime_pass from './pages/overtime_pass.vue'
import leave_record from './pages/leave_record.vue'
import home from './pages/home.vue'
import overtime_petitioner from './pages/overtime_petitioner.vue'
import overtime_record from './pages/overtime_record.vue'

var pop = index;

Vue.use(VueRouter)
//Vue.component(menu);
/* eslint-disable no-new */
// new Vue({
//   el: '#app',    
//   render: h => h(App)
// })


const routes = [
    { path: '/', name: "home", component: home },
    { path: '/attendance', nmae:"attendance", component: attendance },
    { path: '/leave_record',name:"record", component: leave_record },
    { path: '/overtime_pass', name:"pass", component: overtime_pass },
    { path: '/overtime_record',  name:"overtimeRecord",component: overtime_record },
    { path: '/overtime_petitioner', name:"ptitioner", component: overtime_petitioner },
    { path: '/import_data',  name:"importData",component: import_data }

]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    mode: 'history',
    routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
    router,
    render: h => h(index),
    data: {
      //lib : window.dictionary
    }, props: ['lib'],
    created() {
       this.lib = window.dictionary
    }
}).$mount('#app')

// 现在，应用已经启动了！