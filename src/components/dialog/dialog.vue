<template>
  <div>
    <van-dialog v-model="show" :showConfirmButton="false" class="dialogStyle h-[241px] w-[320px]">
        <h1 class="text-[16px] mt-[32px] font-semibold mb-[20px]">{{$t("dialog.amount")}}</h1>
        <van-field v-model="value" type="digit" placeholder="100U"/></van-field>
        <p class="text-start text-[16px] ml-[25px] mr-[25px] mt-[10px]">{{$t("dialog.rate")}} <span class="text-[#CC863A]">1:100</span></p>
        <ul class="buyBut flex mt-[30px]">
            <li @click="showdialog" class="rtlLi ltrLi">{{$t("dialog.cancel")}}</li>
            <li class="text-[#CC863A] font-semibold" @click="buyFDFfr"><van-loading size="24px" color="#CC863A" v-if="loading">{{$t("dialog.buying")}}...</van-loading><p v-else>{{$t("dialog.rightnow")}}</p></li>
        </ul>
    </van-dialog>
    <tipspopup ref="popup"></tipspopup>
  </div>
</template>

<script>
import Vue from "vue"
import {Dialog,Field,Loading} from 'vant'

Vue.use(Field).use(Loading)

export default {
    components:{
        [Dialog.Component.name]:Dialog.Component,
        tipspopup:()=> import(/* webpackChunkName: 'index' */ "@/components/tipspopup/tipspopup.vue"),
    },
    data(){
        return {
            show:false,
            value:"",
            errorMeg:"",
            loading:false
        }
    },
    methods:{
        showdialog(){
            this.show=!this.show
            },
        async buyFDFfr(){
            if(this.value!=0 && this.value % 100===0){
                this.loading=true
                const resulttx=await this.$connect.buyFDF(this.value).then(res=>{
                    console.log(res)
                }).then(res=>{
                    this.show=false
                    this.loading=false
                    this.$open("success",this.$t('dialog.success'),this.$t('dialog.successed'))
                }).catch(res=>{
                    this.show=false
                    this.loading=false
                    this.$open('error',this.$store.state.tips.errormsg,this.$t('dialog.faild'))
                })
            }else{
                this.$refs.popup.showPopup("errorNum")
            }
        }
}}
</script>

<style lang="less" scoped>
.dialogStyle{
    background-color: #363636 !important;
    .van-dialog__content{
        background-color: #363636 !important;
    }
}
.text-indent{
    text-indent: 10px;
}
.buyBut{
    width: 100%;
    li{
        text-align:center;
        width: 50%;
        height: 56px;
        line-height: 56px;
        font-size: 16px;
        border-top: 1px solid gray;
        }
}
[dir="rtl"] .rtlLi{
        border-right: none;
        border-left: 1px solid gray;
    }
    .ltrLi{
        border-right: 1px solid gray;
    }
     /deep/ .van-field{
        width: 272px;
        height: 48px;
        margin-top: 30px;
        margin: 0 auto;
        background-color: #2D2D2D;
        border-bottom: none;
     .van-field__control{
        background-color: #2D2D2D;
        color: white;
        input{
            background-color: #2D2D2D;
            line-height: 48px;
            text-align: start !important;
        }
    }
      }
</style>