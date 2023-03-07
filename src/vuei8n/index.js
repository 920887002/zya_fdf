import VueI18n from "vue-i18n";
import zh from "./zh"
import en from "./en"
import jp from "./jp"
import ko from "./ko"
import ru from "./ru"
import Vue from "vue";
Vue.use(VueI18n)
const i18n =new VueI18n({
    locale:'jp',
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
        }
    }
})

export default i18n;