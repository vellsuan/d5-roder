<template>
  <div>
    <el-dialog
      :title="titlename"
      :visible.sync="dialogVisible"
      :show-close="false"
      class="dishes"
      :close-on-click-modal="false">
      <el-button @click="downfood" class="active" >下单</el-button>
      <el-button  @click="backFood" class="active">退菜</el-button>
      <div slot="footer" class="dialog-footer">
        <el-button @click="quxiao" >取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<!--有等叫才能起菜-->
<script>
  export default {
    data() {
      return {
        dialogVisible: false,
        titlename:'有未下单菜品'
      };
    },
    props:[],
    methods: {
      quxiao(){
        var str=this.$store.state.quxiaobutton;
        str++;
        this.$store.commit("saveaobutton",str);
        this.dialogVisible = false
      },

      mseagelog(msg,tiem=2000){
        this.msg && this.msg.close();
        this.msg = this.$notify({
          title: '失败',
          message: msg,
          type: 'error',
          duration:tiem
        });
      },

      downfood(){

        this.$emit('diaDishess',1);
        var str=this.$store.state.quxiaobutton;
        str++;
        this.$store.commit("saveaobutton",str);
      },

      backFood(){
        //disheclick
        this.$emit('diaDishess',0);
        var str=this.$store.state.quxiaobutton;
        str++;
        this.$store.commit("saveaobutton",str);
      },

    },

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
  .dishes {
    .el-dialog {
      background:#ffffff;
      box-shadow:0 4px 8px 0 rgba(0,0,0,0.50);
      border-radius:4px;
      width:410px;
      height:246px;
      .el-dialog__title {
        line-height: 70px;
        margin: 0;
      }
      .el-dialog__header {
        padding: 0;
        height: 70px;
        text-align: center;
        .el-dialog__title {
          line-height: 70px;
          margin: 0;
        }
      }
      .el-dialog__body {
        padding:0;
        text-align: center;
        font-family: MicrosoftYaHei;
        font-size: 16px;
        color: #2d2d2d;
        .el-button--default {
          background: #1bbc9b;
          border-radius: 4px;
          width: 160px;
          height: 58px;
          span{
            font-family:MicrosoftYaHei;
            font-size: 20px;
            color: #ffffff;
          }
        }
      }
      .el-dialog__footer{
        line-height: 0;
        text-align: center;
        .dialog-footer{
          height: 98px;
          padding-top:20px;

        }
        .el-button--default {
          background: #dee0e7;
          border-radius: 4px;
          width: 160px;
          height: 58px;
          span{
            font-family: MicrosoftYaHei;
            font-size: 20px;
            color: #989898;
          }
        }
      }
    }
  }
</style>

