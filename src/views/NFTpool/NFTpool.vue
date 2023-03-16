<template>
  <div class="w-full">
    <div class="w-[345px] mx-auto">
      <topheader></topheader>
      <div
        class="w-full h-[345px] bg-[url('~@/img/NFTpool.png')] font-semibold bg-[345px,375px] mt-[-75px] overflow-hidden"
      >
        <h1 class="Transtips text-[32px] mt-[100px] h-[45px]">
          {{ $t("NFTPOOL.holdNFT") }}
        </h1>
        <h1 class="Transtips text-[32px] h-[45px]">
          {{ $t("NFTPOOL.DivideEqually") }}
        </h1>
      </div>
      <div
        class="bg-[url('~@/img/group.png')] w-[319px] overflow-hidden mt-[-11px] mx-auto h-[184px] bg-contain bg-no-repeat"
      >
        <h1 class="h-[34px] text-[24px] pool mt-[6px]">
          {{ $t("NFTPOOL.currentPrizePool") }}
        </h1>
        <div
          class="bg-[url('~@/img/time2.png')] bg-no-repeat bg-contain mt-[28px] ml-[20px] mr-[20px] w-[279px] h-[35px] relative"
        >
          <p
            class="text-[10px] text-[#633706] h-35px leading-[35px] text-left pl-[8px]"
          >
            {{ $t("NFTPOOL.hour24claim") }}
          </p>
          <span
            class="absolute leading-[26px] top-[5px] right-[15px] text-[#633706] font-semibold"
          >
            <span class="brownback">{{displayTime.hh+displayTime.dd*24}}</span>
            {{ $t("NFTPOOL.hour") }}
            <span class="brownback">{{displayTime.mm}}</span>
            {{ $t("NFTPOOL.minutes") }}
            <span class="brownback">{{displayTime.ss}}</span>
            {{ $t("NFTPOOL.seconds") }}
          </span>
        </div>
        <div class="Transtips text-[32px] font-semibold mt-[15px]">
          {{$store.state.nftpool.balanceOf}} <span class="text-[16px]">USDT</span>
        </div>
      </div>
      <div class="available w-[284px] mx-auto h-[34px] mt-[19px]">
        <p
          class="w-full h-full bg-[#020202] rounded-[53px] leading-[34px] text-[#F8DCB5]"
        >
          {{ $t("NFTPOOL.holdNFT") }}:{{this.$store.state.nftpool.pendingWith}}USDT
        </p>
      </div>
      <div
        class="w-[284px] h-[40px] bg-[url('~@/img/receiveBut.png')] mt-[16px] bg-[270px,35px] mx-auto bg-no-repeat bg-center font-semibold text-[#633706] leading-[32px]"
        @click="showpopup"
      >
        {{ $t("NFTPOOL.ImmediateClaim") }}
      </div>
    </div>
    <tipspopup ref="popup"></tipspopup>
  </div>
</template>

<script>
import Tipspopup from '@/components/tipspopup/tipspopup.vue';
export default {
  async created(){
    await this.$connect.getNFTpoolINFO(this.$store.state.user.UserAddress)
  },
   computed:{
    listenTimepassed(){
        return this.$store.state.IDOinfo.timePassed
    }
  },
  watch:{
    listenTimepassed:{
        async handler(newVal,oldVal){
            this.timePassed=newVal
        }
    }
  },
   beforeDestroy(){
    clearInterval(this.setval)
  },
  data() {
    return {
      show: true,
      timePassed:this.$store.state.IDOinfo.timePassed,
      displayTime:{
        dd:0,
        hh:0,
        mm:0,
        ss:0
      },
      setval:NaN
    };
  },
  mounted() {
    this.changeTimePassed()
  },
  components: {
    tipspopup: () =>
      import(
        /* webpackChunkName: 'index' */ "@/components/tipspopup/tipspopup.vue"
      
    ),
    topheader:()=> import(/* webpackChunkName: 'index' */ "@/components/header/header.vue")
  },
  methods: {
    showpopup(){
        this.$refs.popup.showPopup("notopenyet")
    },
    changeTimePassed(){
        this.setval=setInterval(()=>{
            this.timePassed++
            this.displayTime=this.$connect.formatDateTime(this.timePassed)
        },1000)
    }
  },
};
</script>

<style lang="less" scoped>
.available {
  background-image: linear-gradient(to bottom, #fae2be, #e3b97d);
  border-radius: 53px;
  padding: 1px;
}
.Transtips {
  background-image: linear-gradient(to bottom, #ffffff, #ffffff, #d08200);
  -webkit-background-clip: text;
  color: transparent;
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
  height: 24px;
  border-radius: 4px;
  background-color: #633706;
  color: white;
}
</style>
