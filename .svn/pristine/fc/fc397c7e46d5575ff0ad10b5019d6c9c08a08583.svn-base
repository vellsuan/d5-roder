<template>
    <el-dialog
    title="修改菜品名称"
    :visible.sync="outerVisible"
    :show-close="false"
    :close-on-click-modal="false"
    class="modiName">
     <el-input v-model="input" placeholder="菜品名称:" ></el-input>
    <div slot="footer" class="dialog-footer">
      <el-button @click="innerClick" class="active">确定</el-button>
      <el-button @click="outerVisible = false">取 消</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props:['noneItems'],
  data() {
    return {
      input:"",
      outerVisible: false,
      innerVisible: false,
      biaoshi:false,//判断标识,只有临时菜可修改标识  v-bind:class="{ focusColor:isActive }"
    };
  },
  methods: {
    //修改成功以后
    innerClick() {

      this.$emit('diaName',this.input);
      this.outerVisible=false;
      this.input='';
    }
  }
};
</script>

<style lang="scss">
 .active {
    background: #1bbc9b!important;
    color: #ffffff!important;
    span{
       color: #ffffff!important;
    }
}
.modiName{
  .el-dialog{
    background:#ffffff;
    box-shadow:0 4px 8px 0 rgba(0,0,0,0.50);
    border-radius:4px;
    width:410px;
    height:236px;
    padding: 0 30px;
    .el-dialog__header{
      height: 70px;
      padding: 0;
      text-align: center;
      .el-dialog__title{
        line-height: 70px;
        margin:0;
      }
    }
    .el-dialog__body{
      padding: 0;
      height: 68px;
      .el-input{
        input{
          height: 48px;
          padding-left: 20px;
          font-size:18px;
          color:#989898;
          background:#efefef;
        }
      }
    }
    .el-dialog__footer{
      padding: 0;
      padding-top: 20px;
      height: 98px;
      .dialog-footer{
        text-align: center;
        button:first-child{
          background-image:linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
          border-radius:4px;
          width:160px;
          height:58px;
          span{
            font-family:MicrosoftYaHei;
            font-size:20px;
            color:#ffffff;
          }
        }
        button:last-child{
          background:#dee0e7;
          border-radius:4px;
          width:160px;
          height:58px;
          span{
            font-family:MicrosoftYaHei;
            font-size:20px;
            color:#989898;
          }
        }
        .el-button+.el-button{
          margin-left: 20px;
        }
      }

    }
  }
}
.innerDialog{
  .el-dialog{
   padding:0 30px;
   background:#ffffff;
    box-shadow:0 4px 8px 0 rgba(0,0,0,0.50);
    border-radius:4px;
    width:410px;
    height:236px;
    .el-dialog__header{
      height: 70px;
      text-align: center;
      .el-dialog__title{
        line-height: 70px;
      }
    }
    .el-dialog__body{
      padding: 0;
    }
    .el-dialog__footer{
      padding: 0;
      height: 98px;
      .dialog-footer{
        text-align: center;
        button:first-child{
          background-image:linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
          border-radius:4px;
          width:160px;
          height:58px;
          span{
            font-family:MicrosoftYaHei;
            font-size:20px;
            color:#ffffff;
          }
        }
        .el-button+.el-button{
          margin-left: 20px;
        }
      }

    }
  }
  .proLanguage{
    font-family:MicrosoftYaHei;
    font-size:16px;
    color:#2d2d2d;
    letter-spacing:0;
    line-height:24px;
    text-align:center;
  }
}
</style>
