<template>
    <van-popover
          v-model="showPopover"
          trigger="click"
          :actions="actions"
          placement="bottom"
          theme="dark"
          @select="onSelect"
        >
          <template #reference>
            <span
              class="flex text-[12px] "
              >{{localLanguage}} <img src="~@/img/bottombut.png" alt=""
            /></span>
          </template>
        </van-popover>
</template>

<script>
import Vue from "vue";
import { Popover } from "vant";
Vue.use(Popover);
export default {
    setup() {
        
    },
    data(){
        return{
            showPopover: false,
            localLanguage:"中文繁体",
            actions: [{ text: "اللغة العربية" ,sx:"ar"}, { text: "Español",sx:"es"}, { text: "English",sx:"en"}, { text: "Русский язык" ,sx:"ru"}, { text: "한국어" ,sx:"ko"}, { text: "日本語 ",sx:"jp" },{ text: "中文繁体 ",sx:"zh" }],
        }
    },
    methods:{
        onSelect(action) {
      if(action.sx==="ar"){
        document.documentElement.setAttribute("dir","rtl")
      }else{
        document.documentElement.removeAttribute("dir")
      }
      this.localLanguage=action.text
      this.$i18n.locale=action.sx
    },
    }
}
</script>

<style lang="less" scoped>
.van-popover__content{
    width: 80px !important; 
    border-radius: 2px !important;
}
.van-popover__action{
    width: 80px !important; 
    height: 30px !important;
    padding: 0 !important;
    font-size: 12px !important;
}
.van-popover__action-text{
    width: 100% !important; 
}
</style>