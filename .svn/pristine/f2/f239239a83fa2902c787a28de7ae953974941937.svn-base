<template>
    <el-dialog
    title="催菜成功"
    :visible.sync="dialogVisible"
    :show-close="false"
    class="hurryFoot"
    :close-on-click-modal="false">
    菜品“{{checedList.productName}}”正在加紧制作中！
    <div slot="footer" class="dialog-footer">
      <el-button @click="rFootClick" class="active">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
    };
  },
  //props: ['hurryOrderId'],
  created () {
  },
  props:["checedList"],
  methods: {
    rFootClick() {
        if(this.checedList.dishStatus==1){
          this.$message.error('请在起菜后在选择催菜');
          this.dialogVisible = false;
          return false
        }else if(this.checedList.isState == "1"){
            this.$message.error('请选择未退的菜品');
          this.dialogVisible = false;
            return false
        }else{
          let branch = this.$store.state.userInfo.shop.branch;
          const params = {
            url: "OR900208",
            data: {
              dishStatus:"3",
              branch:branch,
              id: this.checedList.id
            }
          };
          this.api.post(params, res => {

            this.dialogVisible = false;
            this.$emit('diaHurry',res)
          });
        }

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
.hurryFoot {
  .el-dialog {
    background: #ffffff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    width: 410px;
    height: 212px;
    .el-dialog__title {
      line-height: 70px;
      margin: 0;
    }
    .el-dialog__header {
      padding: 0;
      text-align: center;
      .el-dialog__title {
        line-height: 70px;
        margin: 0;
      }
    }
    .el-dialog__body {
      padding:0;
      height: 64px;
      text-align: center;
      font-family: MicrosoftYaHei;
      font-size: 16px;
      color: #2d2d2d;
      line-height: 20px;
    }
    .el-dialog__footer{
      text-align:center;
      padding:0;
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
