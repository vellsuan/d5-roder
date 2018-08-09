<template>
    <el-dialog
      @open="open"
    title="修改人数"
    :visible.sync="outerVisible"
    :show-close="false"
    :close-on-click-modal="false"
    class="modifyPeople">
      <el-input v-model="changman" ref="changIp" @input="change" @focus="showNum($event)" autofocus ></el-input>
     <div>
        <!-- 简易计算器 -->
      <calcu-lator :point="false" :input="input" class="zDisCalculator"></calcu-lator>
     </div>
    <div slot="footer" class="dialog-footer">
      <el-button @click="outClick" class="active">确定</el-button>
      <el-button @click="quxiao">取 消</el-button>
    </div>
  </el-dialog>
</template>

<script>
import calculator from "@/components/calculatorTwo";
import zheng from '@/assets/js/home'


export default {
  data() {
    return {
      changman:'',
      outerVisible: false,
      input:null,
      sharval:true
    };
  },
  props:["deskId",'desval'],
  mounted(){

  },
  methods: {
    change(msg){

      if( !this.$verifiod.zheng(msg)){
        this.sharval=false;
      }else{
        this.sharval=true;
      }

    },
    open(){

    },
    quxiao(){

      this.outerVisible = false;
      var str=this.$store.state.quxiaobutton;
      str++;
      this.$store.commit("saveaobutton",str);
    },
    errmsg: function () {

       console.log(2)
      this.$emit('changman',this.desval)
      this.outerVisible = false;
     // this.changman="";
      return msg => this.$message({
        duration: 1000,
        showClose: true,
        message: msg,
        type: 'error'
      });

    },//弹窗的错误警告
    showNum(e){
      this.input = e.target;
      this.changman = this.input.value
    },
    outClick() {

      if(this.sharval){
      let branch = this.$store.state.userInfo.shop.branch;
      const params = {
          url: 'TB000011',
          data: {
            branch: branch,
            id:this.deskId,
            usedNumber:this.changman.trim(),
          }
        }
        if(this.changman.trim()!=''){
          this.api.post(params, res => {
            console.log(3)
            this.$emit('diaModify',this.changman)
            this.changman="";

            this.outerVisible = false;
          },this.errmsg())

        }else{
          this.outerVisible = false;
        }


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
  },
   components: {
     "calcu-lator": calculator,
  },
  watch:{
    changman(){
      this.change(this.changman)
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
.modifyPeople{
  .el-dialog{
    background:#ffffff;
    box-shadow:0 4px 8px 0 rgba(0,0,0,0.50);
    border-radius:4px;
    width:410px;
    height:484px;
    .el-dialog__header{
      height: 70px;
      padding: 0;
      text-align: center;
      .el-dialog__title{
        line-height: 70px;
        margin:0;
        font-size:20px;
        color:#2d2d2d;
      }
    }
    .el-dialog__body{
       height: 316px;
      padding:0 30px;
      .zDisCalculator{
          .outputRight{
            height: 230px;
          }
      }
      .el-input{
        margin-bottom: 10px;
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

</style>
