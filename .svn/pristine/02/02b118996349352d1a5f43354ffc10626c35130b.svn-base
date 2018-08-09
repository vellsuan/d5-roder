<template>
  <div class="calculator">
      <div class="outputDomian">
          <div class="outputLeft">
            <div class="numberTop">
                <button v-for="i in 9" :key="i" @click="thisNumber(i)" >{{i}}</button>
            </div>
            <div class="numberButtom">
                <button class="button0" @click="thisNumber0" >0</button>
                <!--<button class="buttonSpot"  @click="thisNumberSpot" >.</button>-->
              <button class="buttonSpot"   >.</button>
            </div>
          </div>
          <div class="outputRight">
                <button @click="numberPlus">+</button>
                <button @click="numberMinus">-</button>
                <button @click="cleanVal">
                  清空
                </button>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      outputVal:'1',

    };
  },
  props:[
    'copt_value'
  ,'jisuan'],
  watch:{
    outputVal(nowVal,oldVal){
      if(nowVal<=0){
        nowVal='1'
      }
      this.$emit('update:copt_value', this.outputVal);
      var newRegExp= new RegExp(/^[0-9]{0}([0-9]|[.])+$/);
      if(!newRegExp.test(this.outputVal)){
        if(this.outputVal!=''){
          //非空就等于旧的值 空的话就清空
        this.outputVal=oldVal
        }else{
          this.outputVal=''
        }
      }else{
        this.outputVal=nowVal
      }
     //必须为数字否则不能输入
     //首位如果后面没有.那就直接截取首位字符
      if(this.outputVal.slice(1,2)!='.' && this.outputVal.slice(1,2)!='' && this.outputVal.slice(0,1)==0){
        this.outputVal=this.outputVal.substr(1,9)
        //长度最多多长
      }else{
       // this.outputVal.splice()
      }
      let jisuanindex=this.jisuan.index;
     if(this.outputVal!=''){
       let newval=this.jisuan.fen=nowVal || 1;
       this.$store.state.greensList[this.$route.query.tableOrder].splice(jisuanindex,1,this.jisuan);
        }else{
             }
      if(nowVal>this.jisuan.stock){

        this.outputVal=this.jisuan.stock+''
        this.$message.error("此商品已售空，目前是暂无数据");
      }
    },
    jisuan(){
      this.outputVal=''
    },
    copt_value(){
      this.outputVal=this.copt_value;
    }
  },
  methods: {
    selectOption(){

      if(JSON.stringify(this.jisuan)=="{}"){
        this.$message.error('请选择菜品');
        return
      }else{
        if(this.jisuan.xia){
          this.$message.error('请选择未下单的');
          return false
        }
        return true
      }
    },
    cleanVal() {
      if(this.selectOption()){
        this.outputVal ='';
      let jisuanindex=this.jisuan.index;
      let newval=this.jisuan.fen=this.outputVal || 1;
      this.$store.state.greensList[this.$route.query.tableOrder].splice(jisuanindex,1,this.jisuan);
      console.log( this.$store.state.greensList[this.$route.query.tableOrder])
      }
    },
    numberPlus() {
      if(this.selectOption()){
        if(Number(this.outputVal)<1){
          this.outputVal=1
        }
      this.outputVal = (Number(this.outputVal) + 1)+'';
        console.log(this.outputVal)



      }
    },
    numberMinus() {
      if(this.selectOption()){

      if (this.outputVal > 1) {
        this.outputVal = (Number(this.outputVal) - 1)+'';
      }
      }
    },
    thisNumber(i) {
      if(this.selectOption()){
      this.outputVal = this.outputVal + "" + i;}
    },
    thisNumber0() {
      if(this.selectOption()){
        this.outputVal = this.outputVal + "" + 0;}
    },
    thisNumberSpot() {
      if(this.selectOption()){
           if(this.outputVal!==''){
             if (this.outputVal.indexOf(".") == -1) {

               this.outputVal = this.outputVal + ".";
             } else {
               this.outputVal = this.outputVal;
             }
           }
      }
    },
    passVal(val) {
      if(this.selectOption()){
      this.outputVal = val;
      this.$emit("passVal", this.outputVal);}
    }
  }
};
</script>
<style lang="scss">
.calculator {
  background: #1d1d1d;
  width: 100%;
  border-radius: 4px;
  .textDomain {
    display: flex;
    width: 100%;
    height: 38px;
    margin-bottom: 1px;
    input {
      border: none;
      outline: none;
      text-align: right;
      padding-right: 15px;
      background-image: linear-gradient(0deg, #575757 0%, #2c2c2c 100%);
      border-radius: 4px;
      width: 74%;
      height: 38px;
      color: #fff;
      font-size: 16px;
    }
    button {
      border: 0;
      outline: none;
      border-left: 1px solid #1d1d1d;
      background-image: linear-gradient(-180deg, #575757 0%, #2c2c2c 100%);
      border-radius: 4px;
      width: 26%;
      height: 38px;
      font-size: 16px;
      color: #ffffff;
      letter-spacing: 0;
      line-height: 16px;
      text-align: center;
    }
  }
  .outputDomian {
    display: flex;
    width: 100%;
    height: 220px;
    .outputLeft {
      width: 74%;
      height: 100%;
      .numberTop {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        width:100%;
        button {
          border: 0;
          outline: none;
          border-right: 1px solid #1d1d1d;
          margin-bottom: 1px;
          background-image: linear-gradient(-180deg, #575757 0%, #2c2c2c 100%);
          border-radius: 4px;
          font-size: 18px;
          color: #ffffff;
          letter-spacing: 0;
          text-align: center;
          width:33.33%;
          height:54px;
        }
      }
      .numberButtom {
        display: flex;
        width:100%;
        .button0 {
          border: 0;
          outline: none;
          border-right: 1px solid #1d1d1d;
          background-image: linear-gradient(-180deg, #575757 0%, #2c2c2c 100%);
          border-radius: 4px;
          width: 66.66%;
          height: 54px;
          font-size: 18px;
          color: #ffffff;
          letter-spacing: 0;
          text-align: center;
        }
        .buttonSpot {
          border: 0;
          outline: none;
          border-right: 1px solid #1d1d1d;
          background-image: linear-gradient(-180deg, #575757 0%, #2c2c2c 100%);
          border-radius: 4px;
          width: 33.33%;
          height: 54px;
          font-size: 18px;
          color: #ffffff;
          letter-spacing: 0;
          text-align: center;
        }
      }
    }
    .outputRight {
      display: flex;
      flex-direction: column;
      width: 26%;
      button {
        margin-bottom: 1px;
        border: 0;
        outline: none;
        background-image: linear-gradient(0deg, #ea5414 0%, #ff8f5f 98%);
        border-radius: 4px;
        height: 54px;
        font-size: 24px;
        color: #ffffff;
        letter-spacing: 0;
        text-align: center;
      }
      button:last-child {
        height: 109px;
        .imgbg {
          display: block;
          margin-left: 35%;
          width: 28px;
          height: 27px;
          background: url(../assets/images/huiche.png) 100% 100% no-repeat;
        }
      }
    }
  }
}
</style>
