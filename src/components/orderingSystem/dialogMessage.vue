<template>
    <el-dialog
    title="客人留言"
    top="31vh"
    :visible.sync="outerVisible"
    :show-close="false"
    :close-on-click-modal="false"
    class="modiMess">
     <el-input v-model="input" placeholder="请留言:" ></el-input>
    <div slot="footer" class="dialog-footer">
      <el-button @click="outClick" class="active">确定</el-button>
      <el-button @click="quxiao">取 消</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props:['odersn'],
  data() {
    return {
      input:"",
      outerVisible: false,
      orderId:"",
    };
  },
  methods: {
    quxiao(){
      this.input='';
      this.outerVisible = false;
      var str=this.$store.state.quxiaobutton;
      str++;
      this.$store.commit("saveaobutton",str);
    },
    errmsg: function () {
      return msg => this.$message({
        duration: 1000,
        showClose: true,
        message: msg,
        type: 'error'
      });
    },//弹窗的错误警告
    outClick() {
     // console.log(this.$store.state.userInfo)
      //this.orderId=this.$store.state.userInfo.shop.orderId

      if(this.input.trim()!=''){


      const params = {
          url: 'POS00009',
          data: {
            orderSn:this.odersn,
            buyerNote:this.input||'',
          }
        }
        this.api.post(params, res => {

            this.outerVisible = false;
            this.input=''
          this.$emit('aftermess')
        },this.errmsg())
      }else{
        this.outerVisible = false;
        this.$emit('aftermess')
      }
    },
    innerClick() {
      this.innerVisible = false;
    },

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
.modiMess{
  .el-dialog{
    ///margin-top:calc(100% - 502px);
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
          color:#2d2d2d;
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
