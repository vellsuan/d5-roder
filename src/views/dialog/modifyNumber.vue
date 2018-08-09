<template>
    <el-dialog title="修改服务员" :visible.sync="dialogVisible"  width="656px" :before-close="handleClose" center>   
        <div class="waiterList">
        
        </div> 
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogVisible = false">确认</el-button>
            <el-button @click="dialogVisible = false">取消</el-button>
        </span>
    </el-dialog>

</template>
<script>
 export default {
    data() {
      return {
        dialogVisible: true
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      changeWaiter(event){
          console.log(event);
      }
    }
  };
</script>
<style lang="scss">
 .el-dialog{
        min-height: 296px;
        .el-dialog__header{
            padding-top: 20px;
            padding-bottom: 0px;
            .el-dialog__title{
                font-size:20px;
                color:#2d2d2d;
                letter-spacing:0;
                line-height:20px;
            }
            .el-dialog__close{
                display: none;
            }
        }
        .el-dialog__body{
            padding: 0px;
            margin: 23px 30px 0;

        }
        .el-dialog__footer{
            margin-top: 40px;
            padding: 0px;
           .dialog-footer{
               width: 100%;
               .el-button--primary{
                    margin-right: 10px;
                    outline:none;
                    border: none;
                    background-image:linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
                    border-radius:4px;
                    width:160px;
                    height:58px;
                    font-size:20px;
                    color:#ffffff;
                    letter-spacing:0;
                    line-height:20px;
                    text-align:center;
               }
               .el-button--default{
                    outline:none;
                    border: none;
                    background:#dee0e7;
                    border-radius:4px;
                    width:160px;
                    height:58px;
                    font-size:20px;
                    color:#989898;
                    letter-spacing:0;
                    line-height:20px;
                    text-align:center;
               }
           }
        }
 }       
</style>
