<template>
    <div class="scancode">
        <div class="scancode-content">
            <div class="scancode-content-top">
                <div class="scancode-content-img">
                    <img src="../../assets/images/qianbao_icon.png" />
                </div>
                <div class="scancode-content-main">
                    <div>
                        <span>订单号：</span>
                        <span>{{codeJson.bill_num}}</span>
                    </div>
                    <div>
                        <span>金额：</span>
                        <span>{{codeJson.bill_amount}}</span>
                    </div>
                </div>
            </div>
            <div class="scancode-content-bottom">
              <router-link to="/index">
                <div class="cancel">
                    <span>返回</span>
                    <span>[ESC]</span>
                </div>
              </router-link>
                <div class="payment" @click="payment">
                    <span>支付</span>
                </div>
            </div>
        </div>
        <tips :showTips.sync='showTips'></tips>
        <scaning-code class="sacning" :scanCodeShow.sync='scanCodeShow'></scaning-code>
        <input type="text" @keypress="onkeypress($event)" @focus="onfocus($event)" ref="paymentInput" class="order-input">
    </div>
</template>
<script>
import tips from './dialog/tips';//提示
import scaningCode from './dialog/scaningCode';
import { mapState } from "vuex";
export default {
    components: {
        'tips':tips,
        'scaningCode':scaningCode,
    },
    data() {
      return {
        scanCodeShow:false,
        showTips:false,
        code:''
      };
    },
    methods: {
      payment(){
        this.scanCodeShow = true
        this.$refs.paymentInput.focus()
      },
      onkeypress(e) {
          if (e.keyCode === 13) {
              const val = e.target.value

              if (val === this.code) {
                console.log(val);
                const params = {
                  url:'DE100025',
                  data:{
                    amount:this.codeJson.bill_amount,
                    orderSn:this.codeJson.bill_num,
                    source:"1",
                    userId:'',
                    qrcode:this.code,
                    shopSn: this.userInfo.shop.shopSn
                  }
                }
                this.api.post(params,res => {
                  this.scanCodeShow = false
                  this.showTips = true
                  setTimeout(() => {
                      this.showTips = false
                      this.$router.push({path:"/index"})
                  }, 3000);
                },(msg)=>{
                      this.scanCodeShow = false
                      this.$confirm( msg , '支付失败', {
                      customClass : 'scan-code-message',
                      confirmButtonText: '重新支付',
                      cancelButtonText: '取消',
                      type: 'info',
                      showClose : false,
                      }).then(() => {
                          this.payment()
                      }).catch(() => {

                  });
                })
              }else {
                  console.log('error')
              }
              this.code = ''
              e.target.value = ''
          }
          else {
              const keychar = String.fromCharCode(e.keyCode)
              this.code += keychar
          }
      },
      onfocus(e) {
          this.code = ''
          e.target.value = ''
      },
    },
    computed: {
      ...mapState([
          'codeJson',
          'userInfo'
      ]),
    },

}
</script>
<style lang="scss">
    #app{
        .scancode{
            height: 100%;
            background:#2c2c2c;
            display: flex;
            padding: 20px;
            .scancode-content{
                width: 100%;
                height: 100%;
                background:#ffffff;
                display: flex;
                flex-direction: column;
                padding: 80px;
                .scancode-content-top{
                    background:#f5f5f5;
                    height:272px;
                    padding: 72px 122px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 80px;
                    .scancode-content-img{
                        width: 128px;
                        margin-right: 40px;
                        img{
                            height: 126px;
                        }
                    }
                    .scancode-content-main{
                        display: flex;
                        flex-direction: column;
                        padding: 22px 0;
                        div{
                            display: flex;
                            span:nth-child(1){
                                width: 95px;
                                font-size:20px;
                                color:#989898;
                                letter-spacing:0;
                                line-height:20px;
                                margin-right: 30px;
                            }
                        }
                        div:nth-child(1){
                            margin-bottom: 40px;
                            span:nth-child(2){
                                font-size:20px;
                                color:#2d2d2d;
                                line-height:20px;
                            }
                        }
                        div:nth-child(2){
                            span:nth-child(2){
                                font-size:20px;
                                color:#ea5414;
                                line-height:20px;
                            }
                        }
                    }
                }
                .scancode-content-bottom{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .cancel{
                        background-image:linear-gradient(0deg, #ea5414 0%, #ff8f5f 98%);
                        border-radius:4px;
                        width:85px;
                        height:100px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        margin-right: 20px;
                        span{
                            font-size:14px;
                            color:#ffffff;
                        }
                    }
                    .payment{
                        background-image:linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
                        border-radius:4px;
                        width:475px;
                        height:100px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        span{
                            font-size:20px;
                            color:#ffffff;
                        }
                    }
                    div:nth-child(2){
                        span:nth-child(2){
                            font-size:20px;
                            color:#ea5414;
                            line-height:20px;
                        }
                    }
                }
                }
            }
            .scaning{
              background: rgba(0,0,0,0.6);
            }
            .order-input{
              position: absolute;
              z-index: -1;
            }
        }
    .el-message-box__wrapper{
        .scan-code-message{
            background:#ffffff;
            box-shadow:0 4px 8px 0 rgba(0,0,0,0.50);
            border-radius:4px;
            width:410px;
            height:236px;
            .el-message-box__header{
                margin-top: 5px;
                .el-message-box__title{
                    text-align: center;
                }
            }
            .el-message-box__content{
                .el-icon-info{
                    display: none;
                }
                .el-message-box__message{
                    p{
                        font-size:18px;
                        color:#989898;
                        line-height:18px;
                    }
                }
            }
            .el-message-box__btns{
                margin-top: 20px;
                text-align: center;
                .el-button--primary{
                    float: left;
                }
                .el-button--default:nth-child(1){
                    background:#dee0e7;
                    border-radius:4px;
                }
            }
        }
    }
</style>
