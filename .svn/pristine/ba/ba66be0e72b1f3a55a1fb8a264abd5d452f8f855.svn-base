<template>
<el-dialog
  title=""
  :visible.sync="showScan"
  @close="$emit('update:scanCodeShow', false)"
  :scanCodeShow="scanCodeShow"
  width="170px"
  top="calc((100vh - 248px)/2)"
  class="scanCode"
  center>
  <div class="background">
    <div class="scan">扫描中...</div>
  </div>
  <el-button class="confirm" @click="showScan = false">取消</el-button>
</el-dialog>
</template>
<script>

export default {
  data () {
    return {
      showScan:this.scanCodeShow,
    }
  },
   props: {
    scanCodeShow:{
      type:Boolean
    }
  },
  methods: {
  },
  watch: {
    scanCodeShow(){
      this.showScan = this.scanCodeShow
    },
    QRcode(){
      this.codeJson = this.urlParse(this.QRcode)
      this.$store.commit("saveCodeJson", codeJson)
      this.$router.push({path:"/content/scancode"})
    }
  },
}
</script>
<style lang="scss">
.scanCode{
  .el-dialog{
    background: rgba(0,0,0,0);
    box-shadow:none;
    .el-dialog__header{
      display: none;
    }
    .el-dialog__body{
      width: 170px;
      height: 248px;
      padding: 0;
      .background{
        height: 170px;
        background: url('../../../assets/images/di.png') center top no-repeat;
        .scan{
          line-height: 170px;
          text-align: center;
          font-size:20px;
          color:#32d6be;
          background: url('../../../assets/images/heng.png') center center no-repeat;
        }
      }
      .el-button{
          width:160px;
          height:58px;
          font-size:20px;
          color:#ffffff;
          margin: 20px auto 0;
        }
    }

  }

}
</style>
