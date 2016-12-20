//App Vue
import store from './store'
import Vue from 'vue'
import VueRouter from 'vue-router'

// router 
import index from './index'



//Pages
import profile from './pages/profile.vue'
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
        name: "index",
        smallTitle: "First page",
        meta: {
            icon: "fa fa-circle-o",
            smallTitle: "home small"
        }
    },

    {
        path: '/home',
        name: "home",
        smallTitle: "home page",
        component: home,
        meta: {
            icon: "fa fa-circle-o",
            smallTitle: "home small"
        },
        "children": [
            {
                path: 'attendance',
                name: "attendance",
                component: attendance,
                smallTitle: "First page",
                meta: {
                    icon: "fa fa-circle-o",
                    smallTitle: "attendance small"
                }
            },
            {
                path: 'leave_record',
                name: "Big Record",
                component: leave_record,
                meta: {
                    icon: "fa fa-circle-o",
                    smallTitle: "Records small"
                }
            },
            {
                path: 'overtime_pass',
                name: "pass",
                component: overtime_pass,
                meta: {
                    icon: "fa fa-circle-o",
                    smallTitle: "Records small"
                }
            }

        ]
    },
    {
        path: '/overtime_record', name: "overtimeRecord", component: overtime_record,
        meta: {
            icon: "fa fa-circle-o",
            smallTitle: "Records small"
        }
    },
    {
        path: '/Profile',
        name: "Profile",
        component: profile,
        meta: {
            icon: "fa fa-circle-o",
            smallTitle: "user profile"
        }
    }
]


store.commit('setMenus', routes);

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
