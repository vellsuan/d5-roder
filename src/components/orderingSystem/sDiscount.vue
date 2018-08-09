<template>
    <el-dialog
    title="单品折扣"
    :visible.sync="dialogVisible"
    :show-close="false"

    :before-close="open"
    class="sDiscount"
    top="calc((100vh - 700px)/2)"
    :close-on-click-modal="false">
    <div class="sDisCon">
      <p>
        <span>菜品名称:</span>
        <span>{{inpContain.productName}}</span>
        <span class="sDisPrece">{{formatMoney(inpContain.oneMoney)}}</span>
      </p>
      <div class="sDisNum">
        <span>菜品数量:</span>
       <!-- 下单前<div class="sDisNumDiv">{{inpContain.fen}}</div>-->
        <div class="sDisNumDiv">{{inpContain.num}}</div>
        <!-- <el-input v-model="sDisFootNum" @focus="showMember($event)" name="sDisFootNum" disabled></el-input> -->
      </div>
      <div class="sDisNum">
        <span>单品折扣率:</span>
        <el-input  placeholder="例如：88表示八八折，范围1-100" ref="input1"  v-on:input="change"    v-model="sDisCountRate"  @focus="showMember($event)" name="sDisCountRate" autofocus></el-input>
      </div>
      <div class="sDisNum">
        <span>折后金额:</span>
        <div class="sDisNumDiv">{{zhekou}}</div>
        <!-- <el-input v-model="sDistSum" disabled></el-input> -->
      </div>

    </div>
     <div class="calculatorBox">
          <calculator-two :input="input" :point="false"></calculator-two>
      </div>
    <div slot="footer" class="dialog-footer">
      <el-button @click="rFootClick" class="active">确 定</el-button>
      <el-button @click="quxiao">取消</el-button>
    </div>
  </el-dialog>
</template>

<script>
import calculatorTwo from "@/components/calculatorTwo"; //MINI计算器


export default {
  verify: {
    sDisCountRate: ["required","number"]
  },
  data() {
    return {

      dialogVisible: false,
      sDisFootMoney: "",
      sDisFootNum: "1",
      sDisCountRate: 100,
      input:null,
      sharval:true
    };
  },
  components: {
     'calculator-two':calculatorTwo
  },
   props:["inpContain",'yuanjia'],
  mounted(){

  },
  methods: {
    change(value){
      if( !this.$verifiod.zheng(value)){
        this.sharval=false;
      }else{
        this.sharval=true;
      }
    },
    errmsg: function () {
      return msg => this.$message({
        duration: 1000,
        showClose: true,
        message: msg,
        type: 'error'
      });
    },//弹窗的错误警告
    open(){

      console.log(this.inpContain)
    },

    quxiao(){

      this.dialogVisible=false;
      this.sDisCountRate=100;
      this.$store.commit("saveItemonSale",false);
    },
    showMember(e){
      this.input = e.target;
      switch(this.input.name){
          case "sDisFootNum":
              this.sDisFootNum = this.input.value;
              break;
          case "sDisCountRate":
              this.sDisCountRate = this.input.value;
              break;
      }
    },
    rFootClick() {
      console.log(this.sDisCountRate)
      const params = {
        url: "OR900210",
        data: {
          id:this.inpContain.id,
          rate:this.sDisCountRate+''.trim()
        }
      };

      if(this.sharval){

      let _t=this;
      this.api.post(params, res => {
        console.log(res);
      //下单前this.$emit('danpin',this.sDisCountRate, Math.floor((this.yuanjia.fen*this.yuanjia.oneMoney)*100)/100-this.sDisCountRate);
        _t.$emit('danpin',this.sDisCountRate, Math.floor((this.yuanjia.num*this.yuanjia.oneMoney)*100)/100-this.sDisCountRate);
        _t.dialogVisible = false;
        _t.sDisCountRate=100;
      } ,msg =>{
        this.$message({
          duration:1000,
          showClose: true,
          message: msg,
          type: 'error'
        });
      });
      //單品這款接口
      this.$store.commit("saveItemonSale",false);
      }else{
        this.$message({
          duration: 1000,
          showClose: true,
          message: '请输入1-100之间的正整数',
          type: 'error'
        });
        return false
      }
    },
    //人民币显示
    formatMoney(val) {
      return "￥" + Number(val).toFixed(2);
    }
  },
  computed: {

    //折扣金额
    zhekou(){

            let inuum=this.inpContain.num;
            //数量
            let inmony=this.inpContain.oneMoney;
            //单价
            let count=this.sDisCountRate;
            //折扣率

      return Math.floor(Math.fround((inuum*inmony*(count/100))*100))/100
    },
    sDistSum(){
      let num = (Number(this.sDisFootMoney) * Number(this.sDisCountRate) /100).toFixed(2)
      if(isNaN(num)){
        return ''
      }else{
        return num
      }
    }
  },
  watch:{
    sDisCountRate(){
      this.change(this.sDisCountRate)
    },

    dialogVisible(){
      this.open()
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
.sDiscount {
  .el-dialog {
    background: #ffffff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    width: 450px;
    height: 636px;
    padding: 0 50px;
    .el-dialog__header {
      height: 74px;
      padding: 0;
      text-align: center;
      margin-bottom: 3px;
      .el-dialog__title {
        line-height: 74px;
        margin: 0;
      }
    }
    .el-dialog__body {
      padding: 0;
      min-height: 220px;
      .textDomain{
        display:none;
      }
      .sDisCon {
        p {
          margin-bottom: 30px;
          span {
            font-family: MicrosoftYaHei;
            font-size: 18px;
            color: #2d2d2d;
          }
          .sDisPrece {
            color: #ea5414;
            margin-left: 20px;
          }
        }
        div {
          width: 100%;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }
        .sDisNum {
          span {
            font-family: MicrosoftYaHei;
            font-size: 18px;
            color: #989898;
          }
          .sDisNumDiv{
            padding-left: 15px;
            background:#efefef;
            border:1px solid #dee0e7;
            border-radius:4px;
            width:238px;
            height:46px;
            font-size:18px;
            color:#2d2d2d;
            line-height:18px;
          }
          .el-input {
            width: 238px;
           margin: 0;
            input {
              background: #efefef;
              border: 1px solid #dee0e7;
              border-radius: 4px;
              width: 238px;
              height: 46px;
              padding:0 10px 0 15px;
              font-size: 14px;
              color: #2d2d2d;
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
          margin-left: 20px;
        }
      }

    }
    // .el-dialog__footer {

    //   height: 98px;
    //   .dialog-footer {
    //     padding-top: 20px;
    //    display: flex;
    //    align-items: center;
    //    justify-content: space-between
    //   }
    // }
  }
}
</style>
