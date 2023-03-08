import VueI18n from "vue-i18n";
import zh from "./zh"
import en from "./en"
import jp from "./jp"
import ko from "./ko"
import ru from "./ru"
import es from "./es"
import ar from "./ar"
import Vue from "vue";
Vue.use(VueI18n)
const i18n =new VueI18n({
    locale:'zh',
    fallbackLocale:'ru',
    messages:{
        zh:{
            ...zh
        },
        en:{
            ...en
        },
        jp:{
            ...jp
        },
        ko:{
            ...ko
        },
        ru:{
            ...ru
        },
        es:{
            ...es   
        },
        ar:{
            ...ar
        }
    }
})

export default i18n;