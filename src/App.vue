<template>
  <div id="app">
      <router-link to="/"></router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  async created(){
    this.$connect.getSysInfo()
    this.$connect.getIDOInfo()
    this.$connect.getuserInfoPer(this.$store.state.user.UserAddress)
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
