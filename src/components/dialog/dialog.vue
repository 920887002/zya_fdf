<template>
  <div>
    <van-dialog v-model="show" :showConfirmButton="false" class="dialogStyle h-[241px] w-[320px]">
        <h1 class="text-[16px] mt-[32px] font-semibold">输入抢购金额</h1>
        <input type="text" class="bg-[#2D2D2D] w-[272px] h-[48px] mt-[15px] text-start text-opacity-80 text-indent" placeholder="100U" v-model="value">
        <p class="text-start text-[16px] ml-[25px] mr-[25px] mt-[10px]">抢购比例 <span class="text-[#CC863A]">1:100</span></p>
        <ul class="buyBut flex mt-[30px]">
            <li @click="showdialog" class="rtlLi ltrLi">取消</li>
            <li class="text-[#CC863A] font-semibold" @click="buyFDF">马上抢购</li>
        </ul>
    </van-dialog>
  </div>
</template>

<script>
import Vue from "vue"
import {Dialog,Field} from 'vant'
Vue.use(Field)

export default {
    components:{
        [Dialog.Component.name]:Dialog.Component,
    },
    data(){
        return {
            show:false,
            value:""
        }
    },
    methods:{
        showdialog(){
            this.show=!this.show
            },
        buyFDF(){
            this.$connect.buyFDF();
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

</style>