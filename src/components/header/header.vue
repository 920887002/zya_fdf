<template>
<div>
    <div class="h-44 flex flex-row items-center justify-between">
                <div class="w-[103px] h-23 bg-[url('~@/img/logo.png')] bg-cover">
                </div>
                <div class="text-[14px] w-[150px] font-semibold whitespace-nowrap Transtips overflow-hidden overflow-ellipsis">{{$t("major.connectedWallet")}}</div>
                <rightslide></rightslide>
            </div>
    </div>
</template>

<script>
export default {
     components:{
        rightslide:()=> import(/* webpackChunkName: 'index' */ "@/components/rightSlide/rightSlide.vue")
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