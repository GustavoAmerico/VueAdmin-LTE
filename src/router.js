//App Vue
import store from './store'
import Vue from 'vue'
import VueRouter from 'vue-router'

//Pages
import index from './index'
import home from './pages/home.vue'
import profile from './pages/profile.vue'
import profile_register from './pages/profile_register.vue'


/*Aqui é aonde deve ser definido a estrutura do menu*/
var routes = [
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
        name: "Home",
        component: home,
        meta: {
            icon: "fa fa-circle-o",
            smallTitle: "home small"
        }
    },
    {
        path: '#',
        name: "Users",
        meta: {
            icon: "fa fa-user",
            smallTitle: "user profile"
        },
        children: [
            {
                path: '/register-user',
                name: "Register",
                component: profile_register,
                meta: {
                    icon: "fa fa-user-plus",
                    smallTitle: "register user profile"
                }
            },

            {
                path: '/user/:userId',
                name: "Users",
                component: profile,
                meta: {
                    icon: "fa fa-user",
                    smallTitle: "user profile"
                }
            }

        ]

    }

]


/*Registrando a estrutura de menu no store da aplicação*/
store.commit('setMenus', routes);

var vueRouter = [];
(function () {
    /*Esse trecho de código var alinhar os componentes interno do menu  */

    function routePush(routes) {
        var i = 0;
        for (i; i < routes.length; i++) {
            var route = routes[i];
            vueRouter.push(route);
            if (route.children)
                routePush(route.children);
        }
    }
    routePush(routes);
})();



//Plugin install
Vue.use(VueRouter)

const app = new Vue({
    store,
    render: h => h(index),
    router: new VueRouter({
        mode: 'history',
        base: "/",
        routes: vueRouter
    })
}).$mount('#app')
