//App Vue
import store from '../../store'
import Vue from 'vue'
import VueRouter from 'vue-router'

//Pages
import index from '../template/template.vue'
import home from '../template/home.vue'
var VueResource = require('vue-resource')


import user_details from './user/user-details.vue'

import user_create from './user/user-create.vue'


/*Aqui é aonde deve ser definido a estrutura do menu*/
var routes = [
    {
        path: '/home',
        name: "Home",
        component: home,
        meta: {
            icon: "fa fa-home",
            smallTitle: "home small",
            publicTitle:"Home"
        }
    },
    {
        path: '#',
        name: "Users",
        component: home,
        meta: {
            icon: "fa fa-user",
            smallTitle: "user profile",
            publicTitle:"Users"
        },
        children: [
            {
                path: '/user/create',
                name: "user-create",
                component: user_create,
                meta: {
                    icon: "fa fa-user-plus",
                    smallTitle: "register user profile",
                    publicTitle:"Create user"
                }
            },
            {
                path: '/user/:userId',
                name: "User details",
                component: user_details,
                meta: {
                    icon: "fa fa-user",
                    smallTitle: "user profile",
                    internalRoute: true,
                    publicTitle:"User details"
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
            //        if (route.children) routePush(route.children);
        }
    }
    routePush(routes);
})();

//Plugin install
Vue.use(VueRouter)
Vue.use(VueResource);
const app = new Vue({
    store,
    render: h => h(index),
    router: new VueRouter({
        mode: 'history',
        base: "/",
        routes: vueRouter
    }),
    http: {
        root: '/',
        headers: {
            Authorization: 'Basic YXBpOnBhc3N3b3Jk'
        }
    }
}).$mount('#app')
