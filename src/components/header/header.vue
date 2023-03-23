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
export default {
    data(){
        return{
            prolist:['123','123']
        }
    },
    mounted(){
    },
     components:{
        rightslide:()=> import(/* webpackChunkName: 'index' */ "@/components/rightSlide/rightSlide.vue"),
        tipspopup:()=> import(/* webpackChunkName: 'index' */ "@/components/tipspopup/tipspopup.vue"),
    },
    computed:{
        
    },
    methods:{
        async connectedWallet(){
        if((window.location.href).indexOf("addr")!=-1){
            const lohref=new URL(window.location).hash
            const addr=lohref.toString().split("addr=").slice(-1)
            console.log(addr)
            await this.$connect.connectRegister(addr[0])
        }else{
            await this.$connect.connect()
        }
        
        }
    },
   
    
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