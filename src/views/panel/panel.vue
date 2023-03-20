<template>
  <div class="w-full">
    <div class="w-[345px] mx-auto pb-[20px]">
      <div class="h-44 flex flex-row items-center justify-between">
        <div class="w-[103px] h-23 bg-[url('~@/img/logo.png')] bg-cover"></div>
        <span class="flex ml-[133px] text-[12px]">
          <toppopup></toppopup>
        </span>
        <rightslide></rightslide>
      </div>
      <div class="h-[155px] mt-[10px] bg-[#1B1B1B]">
        <ul class="contractAddress pt-[12px] pl-[8px]">
          <li class="h-[55px]">
            {{ $t("orderDetails.contractAddress") }}:{{
              $store.state.contractAddress.IDOfdfStaking
            }}
          </li>
          <li>{{ $t("orderDetails.platformTime") }}：{{displayTime.dd}}{{$t('NFTPOOL.days')}}{{displayTime.hh}}{{$t('NFTPOOL.hour')}}{{displayTime.mm}}{{$t('NFTPOOL.minutes')}}{{displayTime.ss}}{{$t('NFTPOOL.seconds')}}</li>
          <li>
            {{ $t("orderDetails.CyclicalReturn") }}：<span
              class="text-[#E7B67C]"
              >225%</span
            >
          </li>
        </ul>
      </div>
      <div
        class="h-[109px] mt-[16px] bg-gradient-to-r from-[#FAE2BE] pt-[24px] pr-[20px] pl-[16px] text-start to-[#E7B67C] rounded-[4px] flex flex-col flex-wrap"
      >
        <h1 class="text-[20px] w-[178px] text-start text-[#633706] font-medium">
          {{ $t("PANNEL.playersNum") }}
        </h1>
        <span class="text-[32px] text-start text-[#633706]">{{
          $store.state.IDOinfo.totalRegisterUser
        }}</span>
        <img src="~@/img/panelLogo.png" class="w-[104px] h-[80px]" alt="" />
      </div>
      <div class="h-[183px] bg-[#1B1B1B] overflow-hidden mt-[16px]">
        <div
          class="bg-[url('~@/img/group2.png')] mt-[18px] h-[147.38px] bg-[339px,147.38px] bg-no-repeat bg-center"
        >
          <h1 class="h-[34px] text-[24px] pool mt-[6px]">
            {{ $t("PANNEL.luckyPrizePool") }}
          </h1>
          <div class="Transtips text-[32px] font-semibold mt-[4px]">
            {{ $store.state.IDOinfo.stakingPool}}
            <span class="text-[16px]">USDT</span>
          </div>
          <van-count-down :time="time">
            <template #default="timeDate">
              <div
                class="bg-[url('~@/img/time2.png')] bg-no-repeat bg-contain mt-[4px] mx-auto w-[279px] h-[35px] relative"
              >
                <span
                  class="absolute leading-[26px] top-[5px] left-[40px] text-[#633706] font-semibold"
                >
                  <span class="brownback">{{ timeDate.hours }}</span>
                  {{ $t("NFTPOOL.hour") }}
                  <span class="brownback">{{ timeDate.minutes }}</span>
                  {{ $t("NFTPOOL.minutes") }}
                  <span class="brownback">{{ timeDate.seconds }}</span>
                  {{ $t("NFTPOOL.seconds") }}
                </span>
                <p
                  class="text-[14px] w-[110px] text-[#633706] h-35px ml-[180px] leading-[35px] font-semibold text-left"
                >
                  {{ $t("PANNEL.notStarted") }}
                </p>
              </div>
            </template>
          </van-count-down>
        </div>
      </div>
      <div
        class="h-[131px] text-[16px] bg-[#1B1B1B] mt-[16px] flex justify-around pt-[18px] pl-[40px] pr-[40px]"
      >
        <router-link :to="{ name: 'IN' }">
          <div class="threeCon">
            <img src="~@/img/INlogo.png" alt="" />
            <p>IN</p>
          </div>
        </router-link>

        <router-link :to="{ name: 'OUT' }">
          <div class="threeCon">
            <img src="~@/img/OUTlogo.png" alt="" />
            <p>OUT</p>
          </div>
        </router-link>

        <router-link :to="{ name: 'splitAccount' }">
          <div class="threeCon">
            <img src="~@/img/cyclelogo.png" alt="" />
            <p>{{ $t("SplitAccount.SplitAccounts") }}</p>
          </div>
        </router-link>
      </div>
      <div class="h-auto bg-[#1B1B1B] mt-[16px] pb-[25px]">
        <ul class="contractAddress pl-[8px] relative pb-[20px]">
          <li class="h-[20px]">
            {{ $t("SplitAccount.SplitAccounts") }} :
            <van-rate
              v-model="$store.state.user.star"
              :icon="star"
              :void-icon="hollowstra"
              readonly
              size="22px"
            />
          </li>
          <li>{{ $t("PANNEL.GrossIncome") }}：$0.00</li>
          <li>
            {{ $t("PANNEL.myInviter") }}：{{ $store.state.user.referrer }}
          </li>
          <li>
            {{ $t("PANNEL.myinviterUrl") }}：http//:{{
              $store.state.user.UserAddress
            }}
          </li>
          <span
            class="absolute bottom-[-15px] right-[16px] w-auto pl-[10px] pr-[10px] h-[24px] text-center font-medium text-[12px] text-[#633706] box-border leading-[24px] rounded-[4px] bg-gradient-to-r from-[#FAE2BE] to-[#E7B67C]"
            @click="showpopup"
            >{{ $t("PANNEL.copyurl") }}</span
          >
        </ul>
      </div>
      <tipspopup ref="popup"></tipspopup>
      <div
        class="h-[22px] text-[#FAE2BE] text-[16px] font-semibold text-left mt-[16px]"
      >
        NEW IN
      </div>
      <div class="h-auto pb-[10px] bg-[#1B1B1B] mt-[16px]">
        <ul class="NewinList">
          <li v-for="item in getNewestOrder">
            <span>{{item.addr}}</span>
            <p>{{timetranstion(item.startTime*1000)}}</p>
            <h5>{{bignumberTrans(item.amount)}}U</h5>
          </li>
          
          
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Rate, CountDown } from "vant";
Vue.use(Rate).use(CountDown);
export default {
  async created() {
      this.$connect.getuserInfoPer(this.$store.state.user.UserAddress)
      this.getNewestOrder=await this.$connect.getOrders()
  },
  computed:{
    timetranstion(){
      return function(val){
      let time= new Date(val)
      let y=time.getFullYear()
      let m=time.getMonth()+1
      let d=time.getDate()
      return y+"."+m+"."+d
      }
    },
    listenTimepassed(){
        return this.$store.state.IDOinfo.timePassed
    },

  },
  watch:{
    listenTimepassed:{
        async handler(newVal,oldVal){
            console.log(newVal)
            this.timePassed=newVal
        }
    }
  },
  mounted() {
    this.changeTimePassed()
  },
  beforeDestroy(){
    clearInterval(this.setval)
  },
  data() {
    return {
      show: true,
      star: require("../../img/star.png"),
      hollowstra: require("../../img/hollowStar.png"),
      val: 3,
      time:
        (48 * 60 * 60 - this.$store.state.IDOinfo.stakingPoolCountDown) * 1000,
      timeDate: {
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
      timePassed:this.$store.state.IDOinfo.timePassed,
      displayTime:{
        dd:0,
        hh:0,
        mm:0,
        ss:0
      },
      setval:NaN,
      getNewestOrder:[]
    };
  },
  components: {
    rightslide: () =>
      import(
        /* webpackChunkName: 'index' */ "@/components/rightSlide/rightSlide.vue"
      ),
    tipspopup: () =>
      import(
        /* webpackChunkName: 'index' */ "@/components/tipspopup/tipspopup.vue"
      ),
    toppopup: () =>
      import(
        /* webpackChunkName: 'index' */ "@/components/toppopup/toppopup.vue"
      ),
  },
  methods: {
    showpopup() {
        console.log(this.timePassed)
      this.$refs.popup.showPopup("copyurl");
    },
    onSelect(action) {
      if (action.sx === "ar") {
        document.documentElement.setAttribute("dir", "rtl");
      } else {
        document.documentElement.removeAttribute("dir");
      }
      this.localLanguage = action.sx + " " + action.text;
      this.$i18n.locale = action.sx;
    },
    changeTimePassed(){
        this.setval=setInterval(()=>{
            this.timePassed++
            this.displayTime=this.$connect.formatDateTime(this.timePassed)
        },1000)
    },
    bignumberTrans(val){
      return parseInt(this.$ethers.utils.formatUnits(val,6))
    }
  },
}
</script>

<style lang="less" scoped>
.Transtips {
  background-image: linear-gradient(to bottom, #ffffff, #ffffff, #d08200);
  -webkit-background-clip: text;
  color: transparent;
}
.NewinList {
  padding-left: 8px;
  padding-right: 8px;
  overflow: hidden;
  li {
    margin-top: 10px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    span {
      width: 87px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    p {
      width: 121px;
    }
    h5 {
      width: 80px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
.contractAddress {
  li {
    text-align: start;
    word-wrap: break-word;
    padding-top: 10px;
    height: auto;
    word-break: break-all;
    text-overflow: ellipsis;
    font-size: 16px;
    width: 327px;
    font-weight: 500;
    line-height: 24px;
  }
  li:nth-child(1) {
    display: flex;
  }
}

.pool {
  background-image: linear-gradient(
    to bottom,
    #ffe7d2,
    #ffe7d2,
    #e8cbb1,
    #d0b199
  );
  -webkit-background-clip: text;
  color: transparent;
  font-weight: 600;
}
.brownback {
  display: inline-block;
  width: 24px;
  height: auto;
  border-radius: 4px;
  background-color: #633706;
  color: white;
}
.threeCon {
  width: 70px;
  height: 95px;
  display: flex;
  flex-direction: column;
  img {
    display: block;
    margin: 0 auto;
    width: 55px;
    height: 55px;
  }
  p {
    font-size: 16px;
    margin-top: 5px;
    font-weight: 600;
  }
}
</style>
