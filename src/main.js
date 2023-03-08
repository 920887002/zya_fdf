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
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$backFun=function(){
  this.$router.go(-1);
}
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
