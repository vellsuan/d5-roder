<template>
  <keep-alive>
    <el-dialog
      @open="open()"
    title="账单打折"
    top="1vh"
    :visible.sync="outerVisible"
    :show-close="false"
    :close-on-click-modal="false"
    class="count">
    <nav>
     <li v-bind:class="{ active: isActive }" @click="entireClick">{{allZhe}}</li>
     <li v-bind:class="{ active: isActive1 }" @click="fastenClick">{{fixedZhe}}</li>
    <!-- <li v-bind:class="{ active: isActive2 }" @click="memberClick">会员优惠</li>-->
      <li v-bind:class="{ active: isActive2 }" >会员优惠</li>
     <li @click="resetClick">清除折扣</li>
    </nav>
    <div>
    <div class="zDiscount">
      <p class="zDisPrompt">{{lala}}</p>
      <div class="zDisCon">
        <!-- 整单折扣 -->
        <div class="zDisLeft" v-if="govern">
          <p>
            <span>折让金额</span>
            <el-input  v-model="Diamount" ref="DiamountIput" class="zDisMarny" @input="change" @focus="showMember($event)" name="Diamount" autofocus="autofocus"></el-input>
          </p>

          <p class="zDisSameMar" v-text="Diamountrule">例如:账单金额101元，只收取100元，则这里输入1</p>
          <p>
            <span>折扣率</span>
            <el-input :disabled="false" v-model="Discount"  class="zDisRate" @focus="showMember($event)" name="Discount">折扣率</el-input>
          </p>
          <p class="zDisSameMar" v-text="Discountrule">例如:88表示八八折</p>
        </div>

        <!-- 会员优享 -->
        <div class="zDisLeft memberModular" v-else>
          <p>
            <span>折让金额</span>
            <el-input  v-model="Diamount" class="zDisMarny"></el-input>
            <el-button class="miniBtn">读卡</el-button>
          </p>
          <p>
            <span>折扣率</span>
            <el-input v-model="Discount" class="zDisRate">折扣率</el-input>
            <el-button class="miniBtn">查卡</el-button>
          </p>
          <section class="sameMarginL">
            <span>会员名称</span>
            <span class="sameColor"></span>
          </section>
          <section class="sameMarginL">
            <span>会员编码</span>
            <span class="sameColor">222007</span>
            <span>折扣率</span>
            <span class="sameColor" ><span v-text="Discount"></span>%</span>
          </section>
          <section class="sameMarginL topAbove">
            <span>享受会员价</span>
            <span class="sameColor">不享受</span>
            <span>等级</span>
            <span class="sameColor">储值会员</span>
          </section>
          <p>
            <span>折让金额</span>
            <el-input v-model="Diamount"  class="zDisMarny"></el-input>
          </p>
          <p class="zDisMar" style="font-size:14px;margin-left:76px;color:#ea5414;">例如:账单金额101元，只收取100元，则这里输入1</p>
        </div>
        <div class="">
          <!-- 计算器 -->
          <calculatortwo :input ="input"></calculatortwo>
        </div>
      </div>
    </div>
    <div class="zDisFooter">
      <div class="zDisfLeft">
          <h2>账单优惠方式</h2>
          <p class="">
            <span class="zDisfLeftTitle">折扣率</span>
            <span><span v-text="Discount"></span>%</span>
            <span class="zDisfLeftTitle">折扣方式</span>
            <span>{{zhekoufangshi}}</span>
          </p>
          <p>
            <span class="zDisfLeftTitle">会员优惠</span>
            <span></span>
            <span class="zDisfLeftTitle">方案名称</span>
            <span></span>
          </p>
          <p>
            <span class="zDisfLeftTitle">折让金额</span>
            <span  v-text="Diamount">0元</span>
          </p>
      </div>
      <div class="zDisfRight">
          <h2>重要提示</h2>
          <p>这里的各种优惠方式中，只有折让是可以其他优惠方式同时使用，否则其它优惠只能任选其一。</p>
          <p>
            <span>餐台：</span>
            <span>{{dazheobj.pricenum.deskNo}}</span>
            <span>全额合计：</span>
            <span>{{Disnum}}元</span>
          </p>
      </div>
    </div>
 </div>

    <div slot="footer" class="dialog-footer">
      <el-button @click="outClick" type="primary">确定</el-button>
      <el-button @click="quxiao">取消</el-button>
    </div>
  </el-dialog>
  </keep-alive>
</template>

<script>
import calculatortwo from "@/components/calculatorTwo";
export default {
  components : {
        'calculatortwo':calculatortwo
  },
  props:['dazheobj','lenobj','zongjia','kezhe','bukezhe','flagtype','zhangdan'],
  mounted(){
    //console.log(this.lenobj)
  },
  data() {
    return {
      allZhe:'整单折扣',
      fixedZhe:'固定折扣',
      zhekoufangshi:'整单折扣',
      //折扣金额
      Diamount:'',
      //折扣率
      Discount:100,
     // inputs: "",
      outerVisible: false,
      govern: true,
      isActive: true,
      codenum:1,//1位整单，2位固定
      isActive1: false,
      isActive2: false,
      lala: "提示：整单折扣主要针对菜品档案中菜品均按当前折扣率执行，不判断菜品和类别的是否允许打折状态。取值大于0小于等于100的整数。",
      input:null,
      msg:null,
      //tabPosition: 'top'
      dalogtime:2000,
      dilogtitle:'失败',
      dilogtype:'error',
      kegu:false,
      reqButn:true,//数值验证
      Diamountrule:'例如:账单金额101元，只收取100元，则这里输入1',
      Diamountrest:'例如:账单金额101元，只收取100元，则这里输入1',
      Discountrule:'例如:88表示八八折',
      Discountrest:'例如:88表示八八折',
      reDisnum:'',//合计初始值
      reqzhelv:true//数值验证

    };
  },
  methods: {
    change(){

    },
    open(){
      this.Diamount=this.dazheobj.zheRang;
        //折扣率
      this.Discount=this.dazheobj.Discount;
      this.reDisnum=this.Disnum;
     // this.qingchuhou();
    },
    errmsg: function () {
      var str=this.$store.state.quxiaobutton;
      str++;
      this.$store.commit("saveaobutton",str);
      return msg => this.$message({
        duration: 1000,
        showClose: true,
        message: msg,
        type: 'error'
      });

    },//弹窗的错误警告
    quxiao(){
      //取消后充值充值
      this.$store.commit("saveWholefold",false);
      this.outerVisible=false;
      var str=this.$store.state.quxiaobutton;
      str++;
      this.$store.commit("saveaobutton",str);
    },
     showMember(e){
        this.input = e.target;
        switch(this.input.name){
            case "Diamount":
                this.Diamount = this.input.value;
                break;
            case "Discount":
                this.Discount = this.input.value;
                break;
        }
    },
    qingchuhou(params,num=null){

      if(this.lenobj>0){
          //选择框 在选择狂中进行接口调用
           this.$emit('diaDiscount',num);
            return false
      }else{

          this.api.post(params, res => {
          this.$store.commit("saveRefreshMenu",true)
        },this.errmsg());
        //下单
      };
    },
    outClick() {
     if(this.reqButn && this.reqzhelv){
      if(this.flagtype==1){
        //是否存在单品折扣
        this.$message.error("此订单存在单品打折商品，请取消单品折扣后重试");
        return false

      }else{

        this.$store.commit("saveWholefold",false);

       if(this.codenum==1){
          //折扣方式
         const params = {
           url: "POS00004",
           data: {
             discount:this.Diamount || 0,
             rate:this.Discount || 100,
             orderSn:this.dazheobj.orderSn
           }
         };


         this.qingchuhou(params,{key:0,val:{
           discount:this.Diamount || 0,
           rate:this.Discount || 100,
           orderSn:this.dazheobj.orderSn
         }});

         //0为整单
       }else if(this.codenum==2){

         const params = {
           url: "POS00005",
           data: {
             discount:this.Diamount || 0,
             rate:this.Discount || 100,
             orderSn:this.dazheobj.orderSn
           }
         };
         //1为固定
         this.qingchuhou(params,{key:0,val:{
           discount:this.Diamount || 0,
           rate:this.Discount || 100,
           orderSn:this.dazheobj.orderSn
         }});

       }
      this.outerVisible = false;
      }
     }else{
       this.$message({
         duration: 1000,
         showClose: true,
         message: '请根据下方提示输入正确的数值',
         type: 'error'
       });
     }
    },

    entireClick() {
       this.codenum=1;
      this.zhekoufangshi=this.allZhe;
      this.govern = true;
      this.lala ="提示：整单折扣主要针对菜品档案中菜品均按当前折扣率执行，不判断菜品和类别的是否允许打折状态。取值大于0小于等于100的整数。";

      this.isActive = true;
      this.isActive1 = false;
      this.isActive2 = false;
      //this.resetClick()
       //折扣金额
      this.Diamount='';
        //折扣率
      this.Discount=100;
    },
    fastenClick() {
      if(this.kezhe==0){
        this.$message.error("没有可折扣的菜品");
      }
      this.codenum=2;
      this.zhekoufangshi=this.fixedZhe;
      this.govern = true;
      this.lala =
        "提示：固定折扣是对菜品档案中菜品打折状态为允许的菜品能够按此折扣率执行。除此之外的菜品均不打折。取值范围大于0小于等于100的整数。";

      this.isActive = false;
      this.isActive1 = true;
      this.isActive2 = false;
      // this.resetClick()
       //折扣金额
      this.Diamount='';
        //折扣率
      this.Discount=100;
    },
    memberClick() {
      this.govern = false;
      this.lala =
        "提示：会员优惠主要有两种形式：1.会员折扣（按普通折扣率算）；2.会员价，如果会员同时具备两种优惠属性则优先使用会员价，即两种优惠不能同时使用。";
      this.isActive = false;
      this.isActive1 = false;
      this.isActive2 = true;
      // this.resetClick()
       //折扣金额
      this.Diamount='';
        //折扣率
      this.Discount=100;
    },
    mseagelog(msg=this.mseage,tiem=this.dalogtime){
      this.msg && this.msg.close();
      this.msg = this.$notify({
        title: this.dilogtitle,
        message: msg,
        type: this.dilogtype,
        duration:tiem
      });
    },
    resetClick() {
      //折扣金额
      this.Diamount='';
        //折扣率
      this.Discount=100;
      const params = {
        url: "POS00015",
        data: {
          orderSn:this.dazheobj.orderSn
        }
      };
      this.api.post(params, res => {
        console.log(res);
        //接口成功以后进行菜单刷新下
        this.$store.commit("saveRefreshMenu",true);
       // this.flagtype==1

        console.log(this.flagtype);
        if(this.flagtype==0){
          this.outerVisible = false;
        }
        this.$store.commit("saveWholefold",false);
        this.$message.success("折扣已清除成功");
        var str=this.$store.state.quxiaobutton;
        str++;
        this.$store.commit("saveaobutton",str);
      },this.errmsg());
    }
  },

  computed:{
    Disnum(){

        //向下取整保留小数
        if(this.zhekoufangshi=='整单折扣'){
          //  console.log('整单折扣');
          this.kegu=false;
          if(Number(this.zhangdan)*(this.Discount/100)>Number(this.zhangdan)){
            this.reqButn=false;
            this.Diamountrule='应付金额不能为负数';
          }else{

           // this.reqButn=true;
           // this.Diamountrule=this.Diamountrest;
          }
          return Math.floor((Number(this.zhangdan)*(this.Discount/100)-this.Diamount)*100)/100;
        }else{
          //   console.log('固定折扣');

          this.kegu=true;
          return Math.floor(((Number(this.kezhe)*(this.Discount/100))-this.Diamount)*100)/100+Number(this.bukezhe)
        }
      }

  },
  watch:{

    Discount(){

      let _res= this.$verifiod.zheng(this.Discount);

      this.reqzhelv=_res
      if( !this.reqzhelv){
        this.Discountrule='请输入1-100的正整数'
      }else{
        this.Discountrule=this.Discountrest
      }

    },
    Diamount(newval,oldval){

     /* if(typeof newval!='number'){
        console.log(22222)
        this.Diamount=123144
      }*/
      let newDiamount=this.Diamount;
      if(newDiamount==''){newDiamount=0}else{
        newDiamount=this.Diamount
      }

      let _req= this.$verifiod.decimal(newDiamount);


       if(!_req){

            if(Number(this.Diamount)>Number(this.reDisnum)){
           //  this.Diamount=Number(this.reDisnum)


              this.Diamountrule='应付金额不能为负';
              this.reqButn=false;
            //  this.illegal=true;
            }else{
              this.Diamountrule=this.Diamountrest;
              this.reqButn=true;
              //this.illegal=false;
            }
       }else{
              this.Diamountrule='请输入正数，浮点数不超过两位的数值';
              this.reqButn=false;
              //this.illegal=true;
       }
    },
    dazheobj(newval,oldval){

    }
  }
};
</script>

<style lang="scss">

.count {
  .el-dialog {
    margin: 10px auto 10px;
    background: #ffffff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    width: 944px;
    height: 744px;
    padding: 0 74px 0 54px;
    .el-dialog__header {
      height: 60px;
      padding: 0;
      text-align: center;
      .el-dialog__title {
        line-height: 60px;
        margin: 0;
      }
    }
    .el-dialog__body {
      height: 586px;
      flex: 1;
      padding: 0 20px;
      nav {
        padding-left: 20px;

        display: flex;
        li {
          background: #efefef;
          border-radius: 4px 4px 0 0;
          width: 120px;
          height: 48px;
          font-family: MicrosoftYaHei;
          font-size: 16px;
          color: #989898;
          text-align: center;
          line-height: 48px;
          list-style: none;
          margin-right: 10px;
        }
        .active {
          background-image: linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
          color: #ffffff;
        }
        li:last-child {
          margin-left: 276px;
          background-image: linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
          border-radius: 4px 4px 0 0;
          width: 120px;
          height: 48px;
          color: #ffffff;
        }
      }

      .zDiscount {
        background: #ffffff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
        border-radius: 6px;
        width: 816px;
        height: 368px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
        margin-bottom: 10px;
        padding-top: 20px;
        .zDisPrompt {
          font-family: MicrosoftYaHei;
          font-size: 14px;
          color: #989898;
          letter-spacing: 0;
          line-height: 20px;
          text-align: left;
          padding: 0 20px;
          margin-top: 20px;
          margin-bottom: 30px;
        }
        .zDisCon {
          padding: 0 20px;
          display: flex;
          align-items: flex-start;
          .zDisCalculator {
            width: 330px;
          }
          .zDisLeft {
            width: 420px;
            span {
              font-size: 16px;
              color: #666666;
            }
            .zDisSameMar {
              font-family: MicrosoftYaHei;
              font-size: 14px;
              color: #ea5414;
              letter-spacing: 0;
              line-height: 14px;
              text-align: left;
              margin: 8px 0px 8px 80px;
            }
            .zDisMarny {
              width: 261px;
              margin-left: 12px;
              input {
                background: #ffffff;
                border: 1px solid #dee0e7;
                border-radius: 4px;
                width: 261px;
                height: 46px;
              }
            }
            .zDisRate {
              width: 261px;
              margin-left: 28px;
              input {
                background: #ffffff;
                border: 1px solid #dee0e7;
                border-radius: 4px;
                width: 261px;
                height: 46px;
              }
            }
          }
          .memberModular {
            p:nth-child(2) {
              margin: 10px 0;
            }
            p:last-child {
              margin-top: 8px;
            }
            .miniBtn {
              background-image: linear-gradient(
                -180deg,
                #3adfcb 0%,
                #1bbc9b 100%
              );
              border-radius: 4px;
              width: 90px;
              height: 48px;
            }
            .topAbove {
              margin-bottom: 20px;
            }
            .sameMarginL {
              margin-left: 76px;
              span {
                font-size: 14px;
                color: #989898;
              }
              span:nth-child(2) {
                margin: 0 15px;
              }
              .sameColor {
                color: #666;
                margin-left: 10px;
              }
            }
          }
        }
      }
      .zDisFooter {
        background: #ffffff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
        border-radius: 6px;
        width: 816px;
        height: 160px;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        h2 {
          font-size: 16px;
          color: #2d2d2d;
          font-weight: normal;
          margin-bottom: 20px;
        }
        p {
          font-size: 16px;
          color: #666666;
          margin-bottom: 10px;
        }
        span {
          font-size: 16px;
          color: #666666;
        }
        .zDisfLeft {
          p{
            display: flex;
            .zDisfLeftTitle{
              width: 80px;
            }
            span{
              width: 100px;
            }
          }
          // p:nth-child(2){
          //   span:nth-child(2){
          //   }
          //   span:nth-child(3){
          //     margin-left: 20px;
          //   }
          //   span:nth-child(4){
          //     margin-left: 5px;
          //   }
          // }
          // p:nth-child(3) span:nth-child(2n) {
          //   margin-right: 65px;
          //   color: #2d2d2d;
          // }
          // p:last-child span:last-child {
          //   color: #2d2d2d;
          //   margin-left: 6px;
          // }
        }
        .zDisfRight {
          width: 359px;
          p:last-child {
            margin-top: 20px;
          }
          p:last-child span {
            font-size: 16px;
            color: #2d2d2d;
          }
          p:last-child span:last-child {
            color: #ea5414;
          }
          p:last-child span:nth-child(3) {
            margin-left: 20px;
          }
        }
      }
    }
    .el-dialog__footer {
      text-align: center;
      padding: 0;
      margin-top: 20px;
      .dialog-footer{
         .el-button--primary{
            border: 0;
            background-image:linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
            border-radius:4px;
            width:160px;
            height:58px;
            font-size:20px;
            color:#ffffff;
            text-align:center;
            margin-right: 20px;
        }
        .el-button--default{
            border: 0;
            background:#dee0e7;
            border-radius:4px;
            width:160px;
            height:58px;
            font-size:20px;
            color:#fff;
            letter-spacing:0;
            text-align:center;
            span{
              font-size:20px;
              color:#989898;
              letter-spacing:0;
              line-height:20px;
              text-align:center;
            }
        }
      }
    }
  }
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"]{
  -moz-appearance: textfield;
}
</style>
