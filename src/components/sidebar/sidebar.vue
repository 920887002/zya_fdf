<template>
    <div>
        <button @click="open"></button>
   <div class="w-[304px] mx-auto h-[36px] bg-gradient-to-r from-[#FAE2BE] to-[#E7B67C] rounded-[4px] text-[#633706] mt-[15px] leading-[36px] font-semibold"  @click="open">{{$t("IDOswitch.closeedClaim")}}</div>

    </div>
</template>

<script>
export default {
    methods: {
    open(){
        const loading=this.$loading({
            lock:true,
            text:"已提交",
            background: 'rgba(0, 0, 0, 0.7)',
            spinner: 'el-icon-loading',
        });
        setTimeout(() => {
            loading.close()
        }, 100000);
    }
  }
}
</script>

<style lang="less" scoped>
.el-icon-spinner{
    i{
        width: 80px !important;
    height: 80px !important;
    background-color: pink !important;
    }
}
</style>