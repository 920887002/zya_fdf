<template>
    <div class="w-full">
        <div class="w-[345px] mx-auto">
             <topheader></topheader>
            <div class="bg-[#1B1B1B] h-auto pb-[20px] mt-[16px]">
                <h1  class="text-[20px] text-[#F8DCB5] font-medium text-left  pt-[20px] pl-[22px]">{{$t("IDOswitch.totalNft")}}:<span class="text-[28px]  font-medium ">{{$store.state.IDOinfo.totalNFTS}}</span>{{$t("FDFIDO.PCS")}}</h1>
                
                <div v-if="ido" class="w-[304px] mx-auto h-[36px] bg-gradient-to-r from-[#FAE2BE] to-[#E7B67C] rounded-[4px] text-[#633706] mt-[15px] leading-[36px] font-semibold" @click="showpopup">{{$t("IDOswitch.stopIDO")}}</div> 
                <div v-else class="w-[304px] mx-auto h-[36px] border-2 border-[#E3B97D] rounded-[4px] text-[#E3B97D] leading-[34px] font-medium" @click="showpopup">{{$t("IDOswitch.HaveStopped")}}</div>

                <div v-if="fdf" class="w-[304px] mx-auto h-[36px] bg-gradient-to-r from-[#FAE2BE] to-[#E7B67C] rounded-[4px] text-[#633706] mt-[15px] leading-[36px] font-semibold"  @click="setFDFNft">{{$t("IDOswitch.startclaim")}}</div>
                <div v-else class="w-[304px] mx-auto h-[36px] border-2 border-[#E3B97D] rounded-[4px] text-[#E3B97D] leading-[34px] mt-[15px] font-medium" @click="setFDFNft">{{$t("IDOswitch.closeedClaim")}}</div>
            </div>
            <popupInput></popupInput>
        </div>
    </div>
</template>

<script>
import {Toast} from 'vant'
export default{
    created(){
        if(!this.$connect.judgeDefaultAddr()){
            this.$router.push({name:'major'})
        }
    },
    async mounted(){
        this.$connect.getIDOInfo()
    },
    data(){
        return{
            show:true,
            ido:this.$store.state.IDOinfo.IDOStop,
            fdf:this.$store.state.IDOinfo.receiveStart,
        }
    },
    computed:{
        listenido(){
            return this.$store.state.IDOinfo.IDOStop
        },
        listenfdf(){
            return this.$store.state.IDOinfo.receiveStart
        }
    },
    watch:{
        listenido:{
        async handler(newVal,oldVal){
            this.ido=newVal
            }
        },
        listenfdf:{
        async handler(newVal,oldVal){
            this.fdf=newVal
            }
        }
    },
    components:{
        tipspopup:()=> import(/* webpackChunkName: 'index' */ "@/components/tipspopup/tipspopup.vue"),
        topheader:()=> import(/* webpackChunkName: 'index' */ "@/components/header/header.vue"),
        sidebar:()=>import(/* webpackChunkName: 'index' */ "@/components/sidebar/sidebar.vue"),
        popupInput:()=>import(/* webpackChunkName: 'index' */ "@/components/dialog/dialog.vue")
    },
    methods:{
        async showpopup(){
            await this.$connect.IDOswitch().catch(res=>{
                this.$open('error',(this.$t('errormessage.walleterror')),(this.$t('errormessage.wallettitle')))
            })
        },
        async setFDFNft(){
            await this.$connect.setFDFaNft().catch(res=>{
                this.$open('error',(this.$t('errormessage.walleterror')),(this.$t('errormessage.wallettitle')))
            })
        }
        
    }
}

</script>

<style lang="less" scoped>


.Transtips{
    background-image: linear-gradient(to right,#FAE2BE,#E7B67C);
     -webkit-background-clip: text;
      color: transparent;
}


</style>
