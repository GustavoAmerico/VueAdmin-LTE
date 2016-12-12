//App Vue
import store from './store'
import Vue from 'vue'
import VueRouter from 'vue-router'

// router 
import index from './index'

import import_data from './components/import_data.vue'

//Pages
import attendance from './pages/attendance.vue'
import overtime_pass from './pages/overtime_pass.vue'
import leave_record from './pages/leave_record.vue'
import home from './pages/home.vue'
import overtime_petitioner from './pages/overtime_petitioner.vue'
import overtime_record from './pages/overtime_record.vue'



//Plugin install
Vue.use(VueRouter)



const routes = [
    {
        path: '/',
        name: "Home",
        smallTitle: "First page",
        component: home,
        meta: {
            icon: "fa fa-circle-o",
            smallTitle: "home small"
        },
        "children": [
            {
                path: '/attendance',
                name: "attendance", component: attendance,
                smallTitle: "First page",
                meta: {
                    icon: "fa fa-circle-o",
                    smallTitle: "attendance small"
                }
            },
            {
                path: '/leave_record',
                name: "Big Record",
                component: leave_record,
                meta: {
                    icon: "fa fa-circle-o",
                    smallTitle: "Records small"
                }
            }

        ]
    },
    {
        path: '/overtime_pass', name: "pass", component: overtime_pass,
        meta: {
            icon: "fa fa-circle-o",
            smallTitle: "Records small"
        }
    },
    {
        path: '/overtime_record', name: "overtimeRecord", component: overtime_record,
        meta: {
            icon: "fa fa-circle-o",
            smallTitle: "Records small"
        }
    },
    {
        path: '/overtime_petitioner',
         name: "ptitioner", 
        component: overtime_petitioner,
        meta: {
            icon: "fa fa-circle-o",
            smallTitle: "Records small"
        }
    },
    {
        path: '/import_data', 
        name: "importData",
         component: import_data,
        meta: {
            icon: "fa fa-circle-o",
            smallTitle: "Records small"
        }
    }
]
 
  
 store.commit('setMenus',routes);

const router = new VueRouter({
    mode: 'history',
    base: "/",
    activeClass: "active",
    routes
})

const app = new Vue({
    router,
    store,
    render: h => h(index),
    data: {}
}).$mount('#app')
