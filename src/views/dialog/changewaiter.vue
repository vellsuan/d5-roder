<template>
    <el-dialog title="修改服务员" :visible.sync="dialogVisible"  width="656px" :before-close="handleClose" center>   
        <div class="waiterList">
            <ul>
                <li @click="changeWaiter($event)">店长</li>
                <li>何丽丽</li>
                <li>王青</li>
                <li>马贝贝</li>
                <li>玛丽</li>
                <li>郝哲</li>
                <li>董晴晴</li>
                <li>王燕</li>
                <li>管理</li>
                <li>何华</li>
            </ul>
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
            .waiterList{
                ul{
                    display: flex;
                    flex-wrap: wrap;
                    li{
                        cursor:pointer;
                        margin: 16px 16px 0 16px;
                        list-style-type: none;
                        background:#ffffff;
                        box-shadow:0 2px 4px 0 rgba(0,0,0,0.10);
                        border-radius:4px;
                        width:86px;
                        height:40px;
                        font-size:14px;
                        color:#2d2d2d;
                        letter-spacing:0;
                        line-height:40px;
                        text-align:center;
                    }
                    li:hover{
                        background:#1bbc9b;
                        color: #fff;
                    }
                }
            }
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
