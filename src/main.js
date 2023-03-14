import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "lib-flexible"
// 引入全部样式
import 'vant/lib/index.less'
import "./index.css"
import i18n from './vuei8n'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Connect from './utils/connect'
Vue.prototype.$connect=Connect;
Vue.use(ElementUI);
Vue.prototype.$open=function(type,arg,title){
    this.$notify({
        title:title,
        message:arg,
        type:type
    });
}
Vue.config.productionTip = false
Vue.prototype.$backFun=function(){
  this.$router.go(-1);
}
Vue.prototype.$this=this;
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
