<template>
  <el-dialog
    title="新增会员"
    :visible.sync="member"
    @close="$emit('update:showAdd', false)"
    :showAdd="showAdd"
    width="40%"
    top='10vh'
    class="member"
    center>
    <div class="dialog-content">
      <el-input class="telphone" @focus="showMember($event)" name="telphone" v-model="tlephone" placeholder="输入电话号码：">
        <template slot="append">
          <el-button @click="getCode" v-if='!show'>获取验证码</el-button>
          <el-button class="countdown" v-else :disabled='show'>{{count}}秒后重新发送</el-button>
        </template>
      </el-input>
      <el-input v-model="textCode" @focus="showMember($event)" name="textCode" placeholder="输入验证码："></el-input>
      <calculator-two :input="input"></calculator-two>
      <span slot="footer" class="dialog-footer">
        <el-button class="confirm" @click="login">确 定</el-button>
        <el-button class="cancel" @click="member = false">取 消</el-button>
      </span>
    </div>
  </el-dialog>
</template>
<script>
import calculatorTwo from "@/components/calculatorTwo";
export default {
  components : {
    'calculator-two':calculatorTwo
  },
  data () {
    return {
      member: this.showAdd,
      tlephone:'',
      textCode:'',
      timer:null,
      show:false,
      count:'',
      input:null
    }
  },
  props: {
    showAdd:{
      type:Boolean
    },
    depositShow:{
      type:Object
    },
  },
  watch: {
    showAdd(){
      this.member = this.showAdd
    }
  },
  methods: {
    showMember(e){
      this.input = e.target
      if(this.input.name=="telphone"){
        this.tlephone = this.input.value
      }else if(this.input.name == 'textCode'){
        this.textCode = this.input.value
      }
    },
    getCode(){
      if((/^1[34578]\d{9}$/.test(this.tlephone))){
        const params = {
          url:'CM100001',
          data:{
            phone:this.tlephone
          }
        }
        this.api.post(params,(res)=>{
          console.log(res)
          const TIME_COUNT = 60;
          if (!this.timer) {
            this.count = TIME_COUNT;
            this.show = true;
            this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--;
            } else {
              this.show = false;
              clearInterval(this.timer);
              this.timer = null;
            }
            }, 1000)
          }
        },(msg)=>{
          this.$message({             duration:1000,
            showClose: true,
            message: msg,
            type: 'error'
          });
        })
      }else{
        this.$message({             duration:1000,
          showClose: true,
          message: '手机号输入有误',
          type: 'error'
        });
      }
    },
    login(){
      if((/^1[34578]\d{9}$/.test(this.tlephone)) && !(/^[\s]{0,}$/.test(this.textCode))){
        const params = {
          url:'CU100001',
          data:{
            phone:this.tlephone,
            vaCode:this.textCode
          }
        }
        this.api.post(params,(res)=>{
          // console.log(res)
          //  this.$store.commit("saveReadUser", res);
          //  this.$store.commit('saveActiveIndex','borrow')
        const params = {
          url:'CC100003',
          data:{
            phone:this.tlephone
          }
        }
        this.api.post(params,(res)=>{
          console.log(res)
          Object.assign(res.user,{account:{ foregiftAmount:0,
          foregiftNeedAmount:0}})
          this.$store.commit("saveReadUser", res);
          //this.$store.commit('saveActiveIndex','borrow')
          this.tlephone=''
        },(msg)=>{
          this.$message({
            duration:1000,
            showClose: true,
            message: msg,
            type: 'error'
          });
        })
          // this.$router.push({path:"/content/read/borrow"})
          this.member = false
          // this.depositShow.showMoney = true
          this.$router.push({path:"/content/read/borrow"})
        },(msg)=>{
          this.$message({
            duration:1000,
            showClose: true,
            message: msg,
            type: 'error'
          });
        })
      }else{
        this.$message({
            duration:1000,
            showClose: true,
            message: '手机号输入有误或验证码为空',
            type: 'error'
          });
      }

    }
  },

}
</script>
<style lang="scss">
  .member{
    border-radius: 4px;
    .dialog-content{
      width: 350px;
      margin: 0 auto;
      .telphone{
        width: 350px;
        margin-bottom: 10px;

        .el-input__inner{
           width: 230px;
           margin: 0;
        }
        .el-button{
          width:118px;
          height:46px;
          font-size:16px;
          color:#ffffff;
          &.countdown{
            font-size: 12px;
          }
        }
        .is-disabled{
          color: #232323;
        }
      }
      .el-input__inner{
        background:#efefef;
        border:1px solid #dee0e7;
        border-radius:4px;
        width:348px;
        height:46px;
      }
      .calculatorTwo{
        margin: 20px 0 30px;
      }
      .dialog-footer{
        width: 350px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .el-button{
          width:160px;
          height:58px;
          font-size:20px;
          color:#ffffff;
        }
        .cancel{
          background:#dee0e7;
          color:#989898;
        }
      }
    }
  }
</style>
