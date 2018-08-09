<template>
<div id="cancelOrderPrent">
      <el-dialog
        @open="open"
    title="提示"
    :visible.sync="dialogVisible"
    :show-close="false"
    class="cancelOrder"
    top="32vh"
    :close-on-click-modal="false">
    您确认要取消整单吗？
    <div slot="footer" class="dialog-footer">
      <el-button @click="rFootClick" class="active">确 定</el-button>
       <el-button @click="quxiao">取消</el-button>
    </div>

  </el-dialog>
  <div>
      <dia-foot ref="diaFoot"></dia-foot>
   </div>
</div>
</template>

<script>
import dialogRetFoot from "@/components/orderingSystem/dialogRetFoot";           //退菜
export default {
  props:['ketorder','ketordersn','orderIdval','tableIdval'],
  data() {
    return {
      dialogVisible: false,
      input: "15230644778",
      input1: "aaaaa",
      orderId:'',
      tableId:''
    };
  },
  components: {
      "dia-foot": dialogRetFoot,
  },
  mounted(){

  },
  methods: {
    open(){
      this.orderId=this.orderIdval;
      this.tableId=this.tableIdval
    },
    quxiao(){
      this.dialogVisible = false;
      //重置狀態
      this.$store.commit("saveWholeSingleCancel",false);
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
    rFootClick() {
       //清空本地和以下单的
        this.$store.commit("saveFoodListBack", {
          key:this.ketorder,
          val:[]
        });
        //如果以下单的有
        const params = {
        url: "POS00016",
        data: {
          orderId: this.orderId,
          tableId:this.tableId
        }
      };
      this.$store.commit("saveWholeSingleCancel",false);
      //重置整單權限
      this.api.post(params, res => {
        //this.$store.commit("saveWholeSingleCancel",false);
        this.dialogVisible = false;
        this.$store.commit("saveRefreshMenu", true);
        this.$emit('diaCancel');
        this.$router.push({path:"/content/found"})
       // this.$router.push({path:"/content/found"})
      },(msg)=>{
          this.$router.push({path:"/content/found"})
          this.dialogVisible = false;
         // this.$refs.diaFoot.dialogVisible = true;
        //失败后弹窗
		});
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
#cancelOrderPrent{
.cancelOrder {
  .el-dialog {
    background:#ffffff;
    box-shadow:0 4px 8px 0 rgba(0,0,0,0.50);
    border-radius:4px;
    width:410px;

    .el-dialog__title {
      line-height: 60px;
      margin: 0;
    }
    .el-dialog__header {
      padding: 0;
      text-align: center;
      .el-dialog__title {
        line-height: 60px;
        margin: 0;
      }
    }
    .el-dialog__body {
      padding:0;
      height: 46px;
      text-align: center;
      font-family: MicrosoftYaHei;
      font-size: 16px;
      color: #2d2d2d;
      line-height: 46px;
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
          margin-left: 30px;
        }
      }

    }
  }
}
}
</style>
