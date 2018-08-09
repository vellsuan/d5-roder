<template>
  <div class="index-content">
    <v-header></v-header>
    <router-view/>
    <v-footer></v-footer>
  </div>
</template>
<script>
  import vHeader from  './vHeader'
  import vFooter from  './vFooter'
  export default {
    components : {
      'v-header':vHeader,
      'v-footer':vFooter
    },
  }
</script>
<style lang="scss" scoped>
  .index-content{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
