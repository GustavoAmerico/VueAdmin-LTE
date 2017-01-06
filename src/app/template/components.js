//Plugins
import Vue from 'vue'


//Importe os componetes 
import notify from './components/quick-notify.vue'
import quickTask from './components/quick-task'
import quickMessage from './components/quick-message'
import breadcrumb from './components/breadcrumb'
import appHeader from './components/app_header'
import appMenu from './components/app_menu'
import home from './home.vue'
//Adicione os compnentes nesse vetor
var components = [
    notify,
    quickMessage,
    quickTask,
    breadcrumb,
    appHeader,
    appMenu
];

export class Template   {
    static  components= components 
}

