<template>
    <el-dialog title="支付成功" :visible.sync="dialogVisible" width="272px" top="calc((100vh - 148px)/2)" class="tips" @close="finish" center>
        <div class="tip">
            <span>支付金额：{{codeJson.bill_amount}}</span>
        </div>
    </el-dialog>
</template>
<script>
import { mapState } from "vuex";
  export default {
    data() {
      return {
        dialogVisible: false,
        time: 3,
        number : '',
        money : ''
      };
    },
    computed: {
      ...mapState([
          'codeJson'
      ]),
    },
    methods: {
        finish(){
            this.dialogVisible = false;
        }
    },
    props: {
        showTips:{
            type:Boolean
        }
  },
    watch: {
        showTips(){
            this.dialogVisible = this.showTips
        }
    }
  };
</script>
<style lang="scss">
  .tips{
    .el-dialog{
        height:148px;
        border-radius:4px;
        .el-dialog__header{
            padding-top: 20px;
            padding-bottom: 30px;
            .el-dialog__title{
                font-size:20px;
                color:#2d2d2d;
                line-height:20px;
            }
        }
        .el-dialog__body{
            padding: 0;
            .tip{
                text-align: center;
                span{
                    font-size:14px;
                    color:#1bbc9b;
                    line-height:24px;
                    text-align:center;
                }
            }
        }
    }
  }
</style>
