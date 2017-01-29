import store from '../../store'
import adminTemplate from '../template/template-admin.vue'
import home from '../template/home.vue'
import user_details from './admin/user/user-details.vue'
import user_create from './admin/user/user-create.vue'

const menus = [
                {
                            "path": "/admin/home",
                            "name": "Home",
                            "component": adminTemplate,                        
                            "meta": {
                                "icon": "fa fa-home",
                                "smallTitle": "home small",
                                "publicTitle": "Home"
                            }
                        },
                        {
                            "path": "#",
                            "name": "Users",
                            "component":adminTemplate,
                            "meta": {
                                "icon": "fa fa-user",
                                "smallTitle": "user profile",
                                "publicTitle": "Users"
                            },
                            "children": [
                                {
                                    "path": "/admin/users/create",
                                    "name": "user-create",
                                    "component": user_create,
                                    "meta": {
                                        "icon": "fa fa-user-plus",
                                        "smallTitle": "register user profile",
                                        "publicTitle": "Create user"
                                    }
                                },
                                {
                                    "path": "/admin/users/:userId",
                                    "name": "user-details",
                                    "component": user_details,
                                    "meta": {
                                        "icon": "fa fa-user",
                                        "smallTitle": "user profile",
                                        "internalRoute": true,
                                        "publicTitle": "User details"
                                    }
                                }
                            ]
                        }
]

/**Comente essa linha de código caso não queria adicionar um prefixo na rota */
const routePrefix = "";
menus.forEach(v => v.path = routePrefix + v.path);


/*Registrando a estrutura de menu no store da aplicação*/
store.commit('setMenus', menus);

export { menus }