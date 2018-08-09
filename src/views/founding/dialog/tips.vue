<template>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="272px" top="calc((100vh - 148px)/2)" class="tips" @close="finish" center>
        <div class="tip">
            <p>{{number}}号台付款成功</p>
            <p>付款金额：{{money}}</p>
        </div>
    </el-dialog>
</template>
<script>
  export default {
    data() {
      return {
        dialogVisible: false,
        time: 3,
        number : '',
        money : ''
      };
    },
    created(){
        this.number = this.$store.state.foundSuccess.table;
        this.money = this.$store.state.foundSuccess.money;
    },
    methods: {
        // finish () {
        //     this.dialogVisible = true;
        //     this.$emit('msgFunc');
        // }
        finish(){
            let paramssucces={
                successPopup:false,money:'',table:''
            };
            this.$store.commit("saveFoundSuccess",paramssucces);
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
            // .el-dialog__close{
            //     display: none;
            // }
        }
        .el-dialog__body{
            padding: 0;
            .tip{
                text-align: center;
                p{
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
