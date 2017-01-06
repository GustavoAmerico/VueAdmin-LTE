import Vue from 'vue'
import { Template } from './template/components.js'
import { Shared } from './shared/main.js'


var comps = [].concat(
    Template.components,
    Shared.components

    /*Adicione seus componentes que não são paginas*/
)

//Adiciona o componente ao escopo global
comps.forEach(function (element) {
    Vue.component(element.name, element)
}, this);

 