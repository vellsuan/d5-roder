<template>
  <el-container>
    <el-header height="220px"><img :src="logo" alt="logo"></el-header>
    <el-main>
        <el-form :model="ruleForm" status-icon label-position="top" ref="ruleForm"  label-width="0px" class="demo-ruleForm">
          <el-form-item label="账号" label-width="80px" prop="userName" :rules="[{required: true, message: '账号不能为空'}]">
           <el-input type="text"  @focus="show" v-model="ruleForm.userName" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" label-width="80px"  prop="pass" :rules="[{required: true, message: '密码不能为空'}]">
            <el-input type="password" @focus="show" v-model="ruleForm.pass" auto-complete="off"></el-input>
          </el-form-item>
          <div class="errmsg"><p v-if='flag'>{{msg}}</p></div>
          <el-form-item>
            <el-button type="primary" @click.native="submitForm('ruleForm')" to='/index'>登录</el-button>
          </el-form-item>
        </el-form>
    </el-main>
    <v-footer>Footer</v-footer>
  </el-container>
</template>
<script>
import md5 from "md5";
import logo from "@/assets/images/logo@1x.png";
import vFooter from "@/components/vFooter";
import { mapMutations } from "vuex";
export default {
  components : {
    'v-footer':vFooter
  },
  data() {
    return {
      logo: logo,
      flag:'',
      msg:'',
      ruleForm: {
        userName: "",
        pass: "",
      },
      visible: false,
      layout: "normal",
      input: null,
      options: {
        useKbEvents: false
      }
    };
  },
  created () {
    this.reset(this.$store.state);

    document.onkeydown= e => {
        let key=window.event.keyCode;
        if(key==13){
          this.submitForm('ruleForm');
        }
    }
  },
  methods: {
    ...mapMutations([
      'reset'
    ]),
    show(){
     // API.openSoftKey()
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const	params = {
						url:'CM300101',
						data:{
							name:this.ruleForm.userName,
							loginPwd:md5(this.ruleForm.pass)
						}
					}
					this.api.post(params,res => {
						this.flag = false
						let userInfo = res
						this.$store.commit("saveUserInfo", userInfo);
						this.$router.push({path:"/index"})
					},(msg)=>{
						this.msg = msg
						this.flag = true
					})
				}else{
					this.flag = true
					this.msg = "账号或密码不能为空"
				}
      });
    },
  }
};
</script>
<style lang="scss">
.el-container {
  height: 100%;
}
.el-header {
  background-color: #32d6be;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-main {
  background-color: #2c2c2c;
  color: #fff;
  font-size:14px;
  .el-form{
    width: 314px;
    margin: 60px  auto 0;
    .el-form-item{
      margin-bottom: 30px;
      .el-form-item__label{
        color: #fff;
        padding: 0 0 0 20px;
      }
      .el-input__inner{
        background: #212121;
        border:1px solid #434343;
      }
      .el-button{
        background-image:linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
        box-shadow:0 6px 8px 0 rgba(0,0,0,0.50);
        height:58px;
        width: 100%;
        font-size:20px;
      }
    }
    .errmsg{
      color:red;
      height: 20px;
      width: 100%;
      text-align: center;
      margin-bottom: 10px;
    }
  }
}
</style>
