<template>
  <el-dialog
    title="套餐明细"
    top="31vh"
    :visible.sync="outerVisible"
    :show-close="false"
    :close-on-click-modal="false"
    class="changeWaiter"
    @open="show"
  >
    <div ref='waiterref' class="wrapper" style="height:250px;overflow:hidden;flex:1">
      <div>
        <div class="outitem"  v-for="(realItems,indexs) in realNameList" >

          <div class="outtitle" ><span>{{name}}</span><span>{{indexs+1}}</span></div>
          <div class="outList content" >
            <div v-for="(items,index) in realItems['changeList']"  @click="selectClick(items,index,indexs,items.status)"
                 v-bind:class="{active:items.status}">{{items.productName}}
            </div>
          </div>
        </div>
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
    props:['package','shopSnId','changTcan'],
    data() {
      return {
        input: "",
        outerVisible: false,
        data:{},
        realNameList:[],
        waiterId:"",
        qwerqwre:"0",
        waiterName:"",
        num:0,
        name:'菜品',
        datas:[]
      };
    },
    mounted () {

    },
    methods: {
      quxiao(){
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
      //弹窗生成后的回调
      show(){
        this.qwerqwre=null;
        const params = {
          url: "PR100665",
          data: {
            proId:this.package,
            shopSn:this.shopSnId
          }
        };
        this.api.post(params, res => {
            this.realNameList = res.entity.items;
            for(let item of this.realNameList){
              if(item['changeList']==null){
                item['changeList']=[];
                item['changeList'].push({productName:item.productName,productId:item.productId,status:0,proNum:item.proNum});
                for(let itemche of  item['changeList']){
                  itemche.status=0;
                  //初始化全只为白色
                }
                for(let str of this.changTcan){
                  for(let itemche of  item['changeList']){

                    if(str.productId==itemche.productId){
                      itemche.status=1;
                    }
                    //  itemche.status=0;
                    //初始化全只为白色
                  }
                }

              }else{
                item['changeList'].push({productName:item.productName,productId:item.productId,status:0,proNum:item.proNum})
                for(let itemche of  item['changeList']){

                    itemche.status=0;
                  //初始化全只为白色
                }
                for(let str of this.changTcan){

                for(let itemche of  item['changeList']){

                  if(str.productId==itemche.productId){
                    itemche.status=1;
                  }
                //  itemche.status=0;
                  //初始化全只为白色
                  }
                }
              }

            }
          },
          this.errmsg()
        );
        this.$nextTick(() => {
          this.waiterref = new BScroll(this.$refs.waiterref, {
            click: true
          });
        })
      },
      chongfu(data){
        for(let item of this.datas){
          if(data.productId==item.productId){
            return true
          }
        }
        return false
      },
      selectClick(olditem,index,indexs,num){
        //修改为item值等于选中的蓝色。
        //根据每个item里istuats判断谁为蓝色就获取谁
        //获取里面 是istuats=1的值
        // let item={productName:olditem.productName,productId: olditem.productId};
        for(let stuats of this.realNameList[indexs]['changeList']){
          stuats.status=0
        }

        this.realNameList[indexs]['changeList'][index].status=1;
        //改变状态
      },
      outClick() {
        //筛选出放进数组的内容
        for(let stuats of this.realNameList){

          if(stuats['changeList']!=null){
            for(let item of  stuats['changeList']){


              if(item.status==1){
                this.datas.push({productName: item.productName, productId: item.productId,status:1,proNum:item.proNum});
              }
            }
          }
        }
        if(this.datas.length<this.realNameList.length){
          this.$message({
            duration: 1000,
            showClose: true,
            message: '商品为必选项！',
            type: 'error'
          });
          return false
        }else{

          this.$emit('diaPartFuns',this.datas);
          this.datas=[];
          this.outerVisible = false;
        }

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
          display: flex;
          flex-wrap: wrap;

          div:nth-child(6n){
            width: auto;
            margin-right:15px;
            .active{

              background:#1bbc9b;
              span{
                color: #ffffff
              }
            }
          }
        }
        .outList div{
          width: auto;
          padding-left: 5px;
          padding-right: 5px;
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
    .outitem{
      display: flex;
      .outtitle{
        padding-top: 20px;
        margin-left: 50px;
        margin-right: 16px;
      }
    }
    /*.contHome{
      display: flex;
      flex-direction: column;
      .conteItem{
        display: flex;
        .leftCata{
          flex: 1;
        }
      }
    }*/
  }
</style>
