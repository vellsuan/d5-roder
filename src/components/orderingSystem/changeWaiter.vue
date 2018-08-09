<template>
    <el-dialog
    title="修改服务员"
    top="31vh"
    :visible.sync="outerVisible"
    :show-close="false"
    :close-on-click-modal="false"
    class="changeWaiter"
    @open="show"
    >
    <div ref='waiterref' class="wrapper" style="height:250px;overflow:hidden;flex:1">
    <div class="outList content" >
      <div v-for="(index,realItems) in realNameList" :key="realItems" @click="selectClick(realNameList[realItems],index)" v-bind:class="{active:index==qwerqwre}">{{realNameList[realItems].realName}}</div>
    </div>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button @click="outClick">确定</el-button>
      <el-button @click="quxiao">取 消</el-button>
    </div>

  </el-dialog>
</template>

<script>
  import BScroll from "better-scroll";
export default {
  props:['waiteroreder'],
  data() {
    return {
      input: "",
      outerVisible: false,
      data:{},
      realNameList:{},
      waiterId:"",
      qwerqwre:"0",
      waiterName:"",
    };
  },
  mounted () {
      let branch = this.$store.state.userInfo.shop.branch;
      let shopId = this.$store.state.userInfo.shop.shopId;
      const params = {
        url: "PR100701",
        data: {
          branch: branch,
          shopId: shopId,
          isUse:1
        }
      };
      this.api.post(params, res => {
        //console.log(res.page.datas);
        this.realNameList = res.page.datas
      },this.errmsg());
  },
  methods: {
    quxiao(){
      this.outerVisible = false
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
    //弹窗生成后的回调
    show(){
      this.$nextTick(() => {
        this.waiterref = new BScroll(this.$refs.waiterref, {
          click: true
        });

      })
    },
    selectClick(clerkId,index){
      this.waiterId = clerkId.clerkId;
      this.waiterName = clerkId.realName;
      this.qwerqwre = index
    },
    outClick() {
      //let orderId=this.$store.state.userInfo.shop.orderId
      const params = {
          url: 'POS00009',
          data: {
            orderSn:this.waiteroreder,
            waiterId:this.waiterId,
            acceptName: this.waiterName
          }
        };
        this.api.post(params, res => {
          //修改名称
          this.$emit('diaWaiter')
          this.outerVisible = false;
        },this.errmsg())
    },
    innerClick() {
      this.innerVisible = false;
    }
  }
};
</script>

<style lang="scss">

.changeWaiter{
  .el-dialog {
    ///margin-top:calc(100% - 502px);
    background: #ffffff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    width: 656px;

    .el-dialog__header {
      height: 58px;
      padding: 0;
      line-height: 58px;
      text-align: center;
      .el-dialog__title {
        line-height: 58px;
        margin: 0;
      }
    }
    .el-dialog__body {
      padding: 0;
      //min-height: 148px;
      .outList{
        flex-wrap: wrap;
        div:nth-child(6n){
          margin-right:0;
          .active{
            background:#1bbc9b;
            span{
              color: #ffffff
            }
          }
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
          margin-left: 30px;
        }
      }

    }
  }
}
</style>
