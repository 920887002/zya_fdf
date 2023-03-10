<template>
<div>
    <div class="h-44 flex flex-row items-center justify-between">
                <div class="w-[103px] h-23 bg-[url('~@/img/logo.png')] bg-cover">
                </div>
                <div class="text-[14px] w-[150px] font-semibold whitespace-nowrap Transtips overflow-hidden overflow-ellipsis" @click="connectedWallet">{{$store.state.user.UserAddress  || $t("major.connectedWallet")}}</div>
                <rightslide></rightslide>
            </div>
            <tipspopup ref="popup"></tipspopup>
    </div>
</template>

<script>
import { ethers } from 'ethers'
import {connect,getUserinfo,getIDOInfo} from '../../utils/connetc'
export default {
    data(){
        return{
            prolist:['123','123']
        }
    },
     components:{
        rightslide:()=> import(/* webpackChunkName: 'index' */ "@/components/rightSlide/rightSlide.vue"),
        tipspopup:()=> import(/* webpackChunkName: 'index' */ "@/components/tipspopup/tipspopup.vue"),
    },
    methods:{
        async connectedWallet(){
            const result =await connect(this);
            console.log(result)
            if(!result){
                this.$refs.popup.showPopup("noregister")
            }
            getIDOInfo();
        }
    },
    watch:{
        
    }
    
}
</script>

<style lang="less" scoped>
.Transtips{
  background-image: linear-gradient(to right,#FAE2BE,#E7B67C);
  -webkit-background-clip: text;
  color: transparent;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-left: 20px;
}
</style>