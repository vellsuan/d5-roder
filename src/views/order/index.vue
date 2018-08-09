<template>
  <div class="iframe">
    <iframe class="show-iframe"  frameborder=0 name="showHere" scrolling=auto src="../../../static/assets/index.html"></iframe>
    <router-link to="/index">
      <el-button>返回首页</el-button>
    </router-link>  
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
  .iframe{
    flex:1;
    background: #ccc;
    position: relative;
    .show-iframe{
      height: 100%;
      width: 100%;
    }
    .el-button{
      position:absolute;
      background-image:linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
      border-radius:4px;
      width:128px;
      height:53px;
      border: none;
      right: 13px;
      top:8px;
      color: #fff;
       font-size: 16px;
    }
  }
</style>

