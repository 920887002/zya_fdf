<template>
  <div id="app">
      <router-link to="/"></router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
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
