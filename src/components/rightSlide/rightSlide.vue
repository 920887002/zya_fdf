<template>
  <div>
    <img
      src="~@/img/Nav.png"
      class="w-[24px] h-[24px]"
      @click="showPopup"
      alt=""
    />
    <van-popup
      v-model="show"
      position="right"
      :style="{ height: '100%', width: '240px', background: '#2D2D2D' }"
    >
      <div class="w-full h-full relative">
        <ul class="slideList relative">
          <router-link :to="{ name: 'major' }"
            ><li>
              <img src="~@/img/majoricon.png" alt="" /><span>{{$t("sideSlide.HomePage")}}</span>
            </li></router-link
          >
          <router-link :to="{ name: 'FDFIDO' }"
            ><li>
              <img src="~@/img/DFDIDOicon.png" alt="" /><span>FDF-IDO</span>
            </li></router-link
          >
          <router-link :to="{ name: 'NFTpool' }"
            ><li>
              <img src="~@/img/NFTpoolicon.png" alt="" /><span>{{$t("sideSlide.NFTpool")}}</span>
            </li></router-link
          >
          <router-link :to="{ name: 'panel' }"
            ><li>
              <img src="~@/img/pannelicon.png" alt="" /><span>{{$t("sideSlide.pannel")}}</span>
            </li></router-link
          >
          <router-link :to="{ name: 'myteam' }"
            ><li>
              <img src="~@/img/myteamicon.png" alt="" /><span>{{$t("sideSlide.myTeam")}}</span>
            </li></router-link
          >
          <router-link :to="{ name: 'orderDetails' }"
            ><li>
              <img src="~@/img/orderdetailicon.png" alt="" /><span
                >{{$t("sideSlide.orderDetail")}}</span
              >
            </li></router-link
          >
          <router-link :to="{ name: 'major' }"
            ><li>
              <img src="~@/img/gameruleicon.png" alt="" /><span>{{$t("sideSlide.gameRules")}}</span>
            </li></router-link
          >
          <router-link :to="{ name: 'major' }"
            ><li>
              <img src="~@/img/whitepapericon.png" alt="" /><span>{{$t("sideSlide.whitePaper")}}</span>
            </li></router-link
          >
          <router-link :to="{ name: 'major' }"
            ><li>
              <img src="~@/img/reporticon.png" alt="" /><span>{{$t("sideSlide.AuditReport")}}</span>
            </li></router-link
          >
          <router-link :to="{ name: 'major' }"
            ><li>
              <img src="~@/img/sushiswapicon.png" alt="" /><span
                >Sushi SWAP</span
              >
            </li></router-link
          >
          <router-link :to="{ name: 'IDOswitch' }"
            ><li>
              <img src="~@/img/idoswitchicon.png" alt="" /><span>{{$t("sideSlide.IDOswitch")}}</span>
            </li></router-link
          >
        </ul>
        <span
          class="absolute Transtips font-semibold text-[12px] bottom-[68px] text-right right-[21px]"
          >{{$t("sideSlide.copyInviteUrl")}}</span
        >
        <van-popover
          v-model="showPopover"
          trigger="click"
          :actions="actions"
          placement="top"
          theme="dark"
          @select="onSelect"
          class="absolute bottom-[29px] right-[21px]"
        >
          <template #reference>
            <span
              class="flex  text-[12px]  bottom-[31px] right-[18px]"
              >{{localLanguage}} <img src="~@/img/bottombut.png" alt=""
            /></span>
          </template>
        </van-popover>
      </div>
    </van-popup>
  </div>
</template>

<script>
import Vue from "vue";
import { Cell, Popup, Popover } from "vant";
Vue.use(Cell);
Vue.use(Popup);
Vue.use(Popover);
export default {
  name: "rightslide",
  data() {
    return {
      show: false,
      showPopover: false,
      localLanguage:"中文繁体",
      actions: [{ text: "اللغة العربية" ,sx:"ar"}, { text: "Español",sx:"es"}, { text: "English",sx:"en"}, { text: "Русский язык" ,sx:"ru"}, { text: "한국어" ,sx:"ko"}, { text: "日本語 ",sx:"jp" },{ text: "中文繁体 ",sx:"zh" }],
      
    };
  },
  methods: {
    showPopup() {
      this.show = true;
      console.log(this.$store.state.count)
    },
    onSelect(action) {
      if(action.sx==="ar"){
        document.documentElement.setAttribute("dir","rtl")
      }else{
        document.documentElement.removeAttribute("dir")
      }
      this.localLanguage=action.sx+" "+action.text
      this.$i18n.locale=action.sx
    },
  },
};
</script>

<style lang="less">
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
.slideList {
  padding-top: 10px;
  padding-left: 32px;
  li {
    width: 180px;
    height: 40px;
    border-radius: 8px;
    display: flex;
    color: #ffffff;
    opacity: 0.7;
    margin-top: 15px;
    img {
      width: 20px;
      height: 20px;
      display: inline;
      margin-top: 9px;
      margin-left: 16px;
      line-height: 40px;
      margin-right: 12px;
    }
    span {
      line-height: 40px;
      white-space: nowrap;
    }
  }
  li:hover {
    background-color: #000000;
  }
}
.Transtips {
  background-image: linear-gradient(to right, #fae2be, #e7b67c);
  -webkit-background-clip: text;
  color: transparent;
}
</style>