//Plugins
import Vue from 'vue'


//Importe os componetes 
import notify from './quick-notify.vue'
import quickTask from './quick-task'
import quickMessage from './quick-message'
import userProfile from './profile/user-profile.vue'
  import breadcrumb from './breadcrumb'
  import appHeader from './app_header'
  import appMenu from './app_menu'
//Adicione os compnentes nesse vetor
var components = [
    notify,
    quickMessage,
    quickTask,
    userProfile,
    breadcrumb,
    appHeader,
    appMenu
];


//Adiciona o componente ao escopo global
components.forEach(function (element) {
    Vue.component(element.name, element)
}, this);

export default {

    components
}

