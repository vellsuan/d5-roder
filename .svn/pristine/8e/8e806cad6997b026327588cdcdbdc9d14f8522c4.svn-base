<template>

  <div class="remdialog">
    <div class="remdialogItem">
   <!-- <div class="itemdIscount">单品折扣</div>-->
    <div v-if='cashPay'>
      <div class="remdiaChend" >
        <div class="itemjine">
          <div class="itemjineitem"><div>应收金额：</div><div><span>￥</span><span v-text="Receivable"></span></div></div>
          <div  class="itemjineitem"><div>找零：</div><div><span>￥</span><span v-text="Number(Received)>Number(Receivable)?(Received-Receivable).toFixed(2):0"></span></div></div>
          <div  class="itemjineitem"><div>实收金额：</div> <input type="text" @focus="show($event)" id="male" min="1" max="10"  v-model="Received" /></div>
        </div>
      </div>
      <div class="calcuStyle">
        <calculator-two  :input="input">

        </calculator-two>
      </div>
    </div>
     <div class="deposit" v-else>
      <div class="itemjine">
        <div class="itemjineitem"><div>应退金额：</div><div><span>￥</span><span v-text="Receivable"></span></div></div>
      </div>
    </div>
    <div class="confirmbox">
      <div v-on:click="openBox" class="openBox" @click="centerDialogVisible = false">确认打开钱箱</div><div v-on:click="closeBox">取消</div>
    </div>
    </div>
  </div>

</template>
<script>
  import calculatorTwo from "@/components/calculatorTwo";
  export default {
    props:{
      'Receivable':{
        type:Number,
        default:0
      },
      'datafn':{
        type:Function,
        default:()=>console.log(啥也没传)
      },
      'cashPay':{
        type:Boolean,
        default:true
      }
    },
    watch:{
      Receivable(){
       //只在离开时候清空
        if(this.Receivable==''){
          this.Received=''
        }
      }
    },
//子组件传
    components: {
      'calculator-two':calculatorTwo
    },
    data() {
      return {
        Received:'',
        input:null
      }
    },

    methods: {
      show(e){
        this.input = e.target
        this.Received = this.input.value
      },
      openBox(){
        //如需要判断是否成功以后再关闭就加一个判断
        //钱箱接口
        //跳转地址
        if(Number(this.Received) >= this.Receivable || !this.cashPay){
          this.datafn && this.datafn();
          this.Received = ''
          this.$emit('closeBox',false)
        }else{
          this.$message({             duration:1000,
            showClose: true,
            message: '请按照金额进行支付',
            type: 'error'
          });
        }
      },
      closeBox(){
        //如需要判断是否成功以后再关闭就加一个判断
        //钱箱接口
        //跳转地址
        this.$emit('closeBox',false);
        //支付成功清空值
       // this.Received=''
      }

    },
    mounted() {
      console.log(this.Receivable);
    },

  }
</script>

<style lang="scss">

  .remdialog{

    .remdialogItem{
      padding: 0 50px;

      .itemdIscount{
      /*  padding-top: 20px;*/
        text-align: center;
      }
      .calcuStyle{
        padding-top: 20px;
        padding-bottom: 30px;
      }
    }
    .deposit{
      padding:40px 0;
      text-align: center;
      .itemjine{
        .itemjineitem{

          display: flex;
          justify-content: center;
          align-items: center;
          div:nth-child(1){
            min-width: 100px;
            margin-right: 10px;
          }
          div:nth-child(2){
            font-size:18px;
            color:#ea5414;
            letter-spacing:0;
            line-height:18px;
            text-align:center;
          }
        }
      }
    }
    .remdiaChend{
     // display: flex;
    //  justify-content: space-between;
      padding-top: 30px;

      .itemjine{
        .itemjineitem{

          display: flex;
          align-items: center;
          div:nth-child(1){
            min-width: 100px;
            margin-right: 10px;
          }
          div:nth-child(2){
            font-size:18px;
            color:#ea5414;
            letter-spacing:0;
            line-height:18px;
            text-align:center;
          }
        }
        .itemjineitem:nth-child(1){
          padding-bottom: 20px;
        }
        .itemjineitem:nth-child(2){
          padding-bottom: 20px;
        }
      }
    }

/*    background:#ffffff;
    box-shadow:0 4px 8px 0 rgba(0,0,0,0.50);
    border-radius:4px;
    min-width:450px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 50%;
    text-align: center;
    z-index: 10000;*/
    input{
      background:#efefef;
      border:1px solid #dee0e7;
      border-radius:4px;
      outline: none;
      width:238px;
      height:46px;
      font-size:18px;
      color:#2d2d2d;
      letter-spacing:0;
      line-height:18px;
      padding-left: 10px;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none !important;
      margin: 0;
    }
    div{
      font-size:20px;
      color:#2d2d2d;
      letter-spacing:0;
      line-height:20px;
      text-align:left;
    }


    .confirmbox{
      display: flex;
      justify-content: space-between;
      padding-bottom: 20px;
      div:nth-child(1){
        background-image:linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
        border-radius:4px;
        width:160px;
        height:58px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size:20px;
        color:#ffffff;
        letter-spacing:0;
        line-height:20px;
        text-align:center;
      }
      div:nth-child(2){
        background:#dee0e7;
        border-radius:4px;
        width:160px;
        height:58px;
        font-size:20px;
        color:#989898;
        letter-spacing:0;
        line-height:20px;
        text-align:center;
        display: flex;
        justify-content: center;
        align-items: center;
      }

    }
  }

</style>
