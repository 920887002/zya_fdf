<template>
  <div id="app">
      <router-link to="/"></router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  watch:{
    listenAddress:{
            async handler(newVal,oldVal){
               if(this.$connect.getUsername()){
                this.$connect.getSysInfo()
                this.$connect.getIDOInfo()
                this.$connect.getuserInfoPer(newVal)
               }
            },
            deep:true
        }
  },
  computed:{
         listenAddress(){
            return this.$store.state.user.UserAddress
        }
    },
  setup() {
    
  },
  mounted(){
    this.$connect.sendThis(this)
  }
}
</script>
<style lang="less">
@import '../src/styles/global.less';

</style>
