var VueResource = require('vue-resource')

//App Vue
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../../store'
import {menus} from './menu'
//Pages
import template from '../template/template.vue'
import oauthTemplate from '../template/template-login.vue'
import adminTemplate from '../template/template-admin.vue'

import user_create from './admin/user/user-create.vue'
import login from './oauth/login.vue'


/*Aqui é aonde deve ser definido a estrutura do menu*/
let routes = [
       {

            "path": "/",
            "name": "Default",
            "children":[
                            {
                                "path": "/admin",
                                "name": "admin",
                                "component": adminTemplate,
                                beforeEnter: (to, from, next) => {
                                    next({"path":"admin/home"});
                            }
                            }                         
                        ]
                        },
                        {
                            "path": '/oauth',
                            "name": oauthTemplate.name,
                            "meta":oauthTemplate.meta,
                            "component": oauthTemplate,
                             beforeEnter: (to, from, next) => {
                                 if(to.path==="/oauth")
                                    next({"path":"oauth/login"});
                                next();
                            },                                                      
                           "children": [
                                {
                                    path: '/oauth/create',
                                    name: user_create.name,
                                    component: user_create,
                                    meta: user_create.meta
                                },
                                {
                                    path: '/oauth/login',
                                    name: login.name,
                                    component: login,
                                    meta: login.meta
                                }
                            ]
                          }
        
        
];
 
routes = routes.concat(menus)

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

let routeApp =  new VueRouter({
        mode: 'history',
        base: "/",
        routes: vueRouter
    });
 /*
routeApp.beforeEach((to, from, next) => {
 
    if (false) 
     {  next({
        path: 'oauth/login',
        query: { redirect: to.fullPath }
      });
     return;
    }
    
  if (to.meta.internalRoute)
    {
         next({path: to.meta.redirect});
         return;
    }

    next() 
  
})  */


//Plugin install
Vue.use(VueRouter)
Vue.use(VueResource);
const app = new Vue({
    store,
    render: h => h(template),
    router:routeApp,
    http: {
        root: '/',
        headers: {
            Authorization: 'Basic YXBpOnBhc3N3b3Jk'
        }
    }
}).$mount('#app')
