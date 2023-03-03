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
              <img src="~@/img/majoricon.png" alt="" /><span>首页</span>
            </li></router-link
          >
          <router-link :to="{ name: 'FDFIDO' }"
            ><li>
              <img src="~@/img/DFDIDOicon.png" alt="" /><span>FDF-IDO</span>
            </li></router-link
          >
          <router-link :to="{ name: 'NFTpool' }"
            ><li>
              <img src="~@/img/NFTpoolicon.png" alt="" /><span>NFT奖池</span>
            </li></router-link
          >
          <router-link :to="{ name: 'panel' }"
            ><li>
              <img src="~@/img/pannelicon.png" alt="" /><span>仪表盘</span>
            </li></router-link
          >
          <router-link :to="{ name: 'myteam' }"
            ><li>
              <img src="~@/img/myteamicon.png" alt="" /><span>我的团队</span>
            </li></router-link
          >
          <router-link :to="{ name: 'orderDetails' }"
            ><li>
              <img src="~@/img/orderdetailicon.png" alt="" /><span
                >订单详情</span
              >
            </li></router-link
          >
          <router-link :to="{ name: 'major' }"
            ><li>
              <img src="~@/img/gameruleicon.png" alt="" /><span>游戏规则</span>
            </li></router-link
          >
          <router-link :to="{ name: 'major' }"
            ><li>
              <img src="~@/img/whitepapericon.png" alt="" /><span>白皮书</span>
            </li></router-link
          >
          <router-link :to="{ name: 'major' }"
            ><li>
              <img src="~@/img/reporticon.png" alt="" /><span>审计报告</span>
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
              <img src="~@/img/idoswitchicon.png" alt="" /><span>IDO开关</span>
            </li></router-link
          >
        </ul>
        <span
          class="absolute Transtips font-semibold text-[12px] bottom-[31px] left-[21px]"
          >复制邀请链接</span
        >
        <van-popover
          v-model="showPopover"
          trigger="click"
          :actions="actions"
          placement="top"
          theme="dark"
          @select="onSelect"
          class="absolute bottom-[29px] right-[18px]"
        >
          <template #reference>
            <span
              class="flex  text-[12px]  bottom-[31px] right-[18px]"
              >CN 繁中 <img src="~@/img/bottombut.png" alt=""
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
      actions: [{ text: "阿拉伯文" }, { text: "西班牙文" }, { text: "英文" }, { text: "俄文" }, { text: "韩文" }, { text: "日文" }],
    };
  },
  methods: {
    showPopup() {
      this.show = true;
      console.log(this.$store.state.count)
    },
    onSelect(action) {
      console.log(action.text)
    },
  },
};
</script>

<style lang="less">
.van-popover__content{
    width: 67px !important; 
    border-radius: 2px !important;
}
.van-popover__action{
    width: 67px !important; 
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