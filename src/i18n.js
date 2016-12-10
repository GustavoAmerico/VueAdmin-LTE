import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n);

//Dicionario
const locales = {
        "en-US": {
                "name": "English",
                lib: {
                        "appTitleMini": "LTE",
                        "appTitle": "Admin LTE",
                        "profile": "Profile",
                        "menu": {
                                "navigation": "MAIN NAVIGATION"
                        }
                }
        },
        "pt-BR": {
                "name": "Português",
                "lib": {
                        "appTitleMini": "PTE",
                        "appTitle": "Administrador LTE",
                        "profile": "Perfil",
                        "menu": {
                                "navigation": "Navegação principal"
                        }
                }
        }
};

//Adiciona as palavras do dicionarios ao VUE
Object.keys(locales).forEach(function (lang) {
        Vue.locale(lang, locales[lang].lib);
        if (Vue.locales == null) Vue.locales = [];
        Vue.locales.push({ code: lang, text: locales[lang].name });
});
Vue.config.lang = "en-US";
Vue.config.fallbackLang = "pt-BR"