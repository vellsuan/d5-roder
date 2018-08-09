<template>
  <el-footer height="28px">
    <div class="f-right">当前时间：<span>{{this.$moment().format("YYYY-MM-DD hh:mm")}}</span></div>
  </el-footer>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
  .el-footer{
    background:#525252;
    box-shadow:0 4px 8px 0 rgba(0,0,0,0.50);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color:#fff;
    font-size: 12px;
  }
</style>
