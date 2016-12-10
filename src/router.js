//App Vue
import store from './store'
import Vue from 'vue'
import VueRouter from 'vue-router'

// router 
import index from './index'
import attendance from './components/attendance.vue'
import import_data from './components/import_data.vue'

//Pages
import overtime_pass from './pages/overtime_pass.vue'
import leave_record from './pages/leave_record.vue'
import home from './pages/home.vue'
import overtime_petitioner from './pages/overtime_petitioner.vue'
import overtime_record from './pages/overtime_record.vue'

 

//Plugin install
Vue.use(VueRouter)


 
const routes = [
    { path: '/', name: "home", component: home },
    { path: '/attendance', nmae: "attendance", component: attendance },
    { path: '/leave_record', name: "record", component: leave_record },
    { path: '/overtime_pass', name: "pass", component: overtime_pass },
    { path: '/overtime_record', name: "overtimeRecord", component: overtime_record },
    { path: '/overtime_petitioner', name: "ptitioner", component: overtime_petitioner },
    { path: '/import_data', name: "importData", component: import_data }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

const app = new Vue({
    router,
    store,
    render: h => h(index),
    data: {}
}).$mount('#app')
