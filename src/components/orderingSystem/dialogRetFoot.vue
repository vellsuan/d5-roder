<template>
<div>
  <el-dialog
    title="需要授权执行"
    :visible.sync="dialogVisible"
    :show-close="false"
    class="rfoot"
    top="26vh"
    :close-on-click-modal="false">
    <!-- <el-input v-model="input" value="554"  :autofocus="true" ></el-input>
    <el-input v-model="input1" value="555" type="password" ></el-input> -->
        <el-form :model="ruleForm" status-icon label-position="top" ref="ruleForm"  label-width="0px" class="demo-ruleForm">
          <el-form-item label="" label-width="80px" prop="userName" :rules="[{required: true, message: '账号不能为空'}]">
           <el-input type="text"  @focus="show" :placeholder="
accreditAccount" v-model="ruleForm.userName" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="" label-width="80px"  prop="pass" :rules="[{required: true, message: '密码不能为空'}]">
            <el-input type="password" @focus="show" :placeholder="
passWord" v-model="ruleForm.pass"   auto-complete="off"></el-input>
          </el-form-item>
          <div class="errmsg"><p v-if='flag'>{{msg}}</p></div>
        </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="submitForm('ruleForm')" class="active">确 定</el-button>
      <el-button @click="quxiao">取 消</el-button>
    </div>
    <div class="softKeyboard">
      <!-- <vue-touch-keyboard v-if="visible" :layout="layout" :cancel="hide" :accept="accept" :input="input" :next="next" :change="change"/> -->
    </div>
  </el-dialog>

</div>

</template>
<!--此页面为权限-->
<script>
import md5 from "md5";
export default {
  data() {
    return {
      accreditAccount:'账号',
      passWord:'密码',
      dialogVisible: false,
      msg:'',
      flag:'',
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
  props:["checedList",'juriType'],
  methods: {
     // 软键盘操作函数
    change(text){
    },
    quxiao(){
      var str=this.$store.state.quxiaobutton;
      str++;
      this.$store.commit("saveaobutton",str);
      this.dialogVisible = false
    },
    accept(text) {

      alert("Input text: " + text);
      this.hide();
    },

    show(e) {
      this.input = e.target;
      if (!this.visible)
        this.visible = true
    },

    hide() {
      this.visible = false;
    },
    next() {
      let inputs = document.querySelectorAll("input");
      let found = false;
      [].forEach.call(inputs, (item, i) => {
        if (!found && item == this.input && i < inputs.length - 1) {
          found = true;
          this.$nextTick(() => {
            inputs[i+1].focus();
          });
        }
      });
      if (!found) {
        this.input.blur();
        this.hide();
      }
    },

    submitForm(formName) {
      var _t = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          const	params = {
						url:'SHOP0108',//授权执行验证
						data:{
              phone:this.ruleForm.userName,
              pwd:md5(this.ruleForm.pass)
						}
					};

					this.api.post(params,res => {

            if(this.juriType=='退菜'){

              this.$emit('diaFoot','ok');
              //验证结束后调用响应的回调
            }else if(this.juriType=='奉送'){

              this.$store.commit("saveModiFyname",true);


            }else if(this.juriType=='整单取消'){

              this.$store.commit("saveWholeSingleCancel",true);
            }
              else if(this.juriType=='打折'){
              this.$emit('diaFootzhe')

            }
            else if(this.juriType=='单品打折'){

              this.$store.commit("saveItemonSale",true);

            }
					  //权限状态
           // this.$store.commit("manageStaus", true);

            this.flag = false;
            this.dialogVisible = false
					},(msg)=>{

						this.msg = msg;
						this.flag = true
					})
				}else{
					this.flag = true;
					this.msg = "账号或密码不能为空"
				}
      });
    },


    //奉送
   /* retreatFood(){
      const params = {
        url: "POS00014",
        data: {
          ids:this.checedList.id,
          isState:"1",
          reason:"",
        }
      };
      this.api.post(params, res => {

      });
    }*/
  }
};
 //   rFootClick() {
  //   let branch = this.$store.state.userInfo.shop.branch
  //    const params = {
  //       url: "SHOP0108",
  //       data: {
  //         branch:branch,
  //         phone: this.input,
  //         pwd: this.input1
  //       }
  //     };
  //     this.api.post(params, res => {

  //     },(msg)=>{
  //         this.$refs.diaFoot.dialogVisible = true;
	// 	});
  // },
</script>

<style lang="scss">
 .active {
    background: #1bbc9b!important;
    color: #ffffff!important;
    span{
       color: #ffffff!important;
    }
}
.rfoot{
  .el-dialog{
    background:#ffffff;
    box-shadow:0 4px 8px 0 rgba(0,0,0,0.50);
    border-radius:4px;
    width:410px;
    height:304px;
    padding: 0 30px;
    .softKeyboard {
      position: absolute;
      top: 411px;
      right: auto;
      left: -154px;
      .vue-touch-keyboard {
          width: 800px;

          .keyboard .key {
          height: 2rem;
          line-height: 2rem;
          }
          .vue-touch-keyboard {
          width: 100%;
          height: 240px;
          position: static;
          }
      }
    }
    .el-dialog__header{
      height: 70px;
      padding: 0;
      text-align: center;
      .el-dialog__title{
        line-height:70px;
        margin:0;
      }
    }
    .el-dialog__body{
      padding: 0;
      height: 136px;
      .el-input{
        input{
          padding-left: 40px;
          font-size:18px;
          color:#2d2d2d;
        }
      }
      .errmsg{
        text-align:center;
        color: #fa5555;
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
    .focusColor{
      background:#efefef;
    }
  }
}
</style>
