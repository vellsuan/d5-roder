<template>
  <el-container id="main-flex">
    <el-container>
      <el-aside  width='216px'>
        <div class="action-bar"><img :src='indexLogo' alt="index-logo"/>
          <div class="action-content">
            <el-button type="text" to='/content/order' ><div class="el-icon-xr-screen"><p>{{userInfo.adminId}}</p></div></el-button>
            <el-button type="text" ><div class="el-icon-xr-yonghufile"><p>{{userInfo.adminInfo.realName}}</p></div></el-button>
            <el-button type="text" ><div class="el-icon-xr-dianpu"><p>{{userInfo.shop.shopName}}</p></div></el-button>
            <router-link to="/">
              <el-button type="text" @click='exit'><div class="el-icon-xr-zhuxiao"><p>注销</p></div></el-button>
            </router-link>
          </div>
          <p>营业日期：<span>{{this.$moment().format("YYYY-MM-DD")}}</span></p>
        </div>
        <el-button>
          <span class="money">打开钱箱</span>
          <span>OPEN MONEYBOX</span>
        </el-button>
      </el-aside>
      <el-main>
        <el-row :gutter="20" type="flex">
           <el-col :span="6">
            <div class="grid-content bg-purple">
              <router-link to='/content/order'>
                <el-button>订单<br><br>PURCHASE<br>ORDER<br></el-button>
              </router-link>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <router-link to='/content/found'>
                <el-button>开台<br><br>FOUNDING<br>ORDER<br></el-button>
              </router-link>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <el-button @click="openBigBill">抽大钞<br><br>GOT CHANGE<br></el-button>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <router-link to='/content/coupon'>
                <el-button>优惠券<br><br>COUPON<br></el-button>
              </router-link>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <el-button @click="open">图书借阅<br><br>BOOK<br>BORROWING</el-button>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <el-button @click="scanCode">钱包支付<br><br>SCANNING<br>PAYMENT</el-button>
            </div>
          </el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
      </el-main>
    </el-container>
    <v-footer>Footer</v-footer>
    <member :showAdd.sync='vipShow.showAdd' :depositShow.sync='depositShow' />
    <lend-book :show.sync="show" :vipShow.sync='vipShow' :depositShow.sync='depositShow'/>
    <deposit :showMoney.sync='depositShow.showMoney'/>
    <scaning-code class="scanCode" :scanCodeShow.sync='scanCodeShow'></scaning-code>
    <drawbigbill ref="drawbigbill"></drawbigbill>
    <input type="text" @keypress="onkeypress($event)" @focus="onfocus($event)" ref="orderInput" class="order-input">
  </el-container>
</template>
<script>
import vFooter from "@/components/vFooter";
import drawBigBill from "./dialog/drawBigBill";
import indexLogo from "@/assets/images/index-logo@1x.png";
import lendBook from "../read/dialog/lendBook";
import member from "../read/dialog/member";
import deposit from "../read/dialog/deposit";
import scaningCode from '../scanCode/dialog/scaningCode';
import { mapState,mapMutations } from "vuex";
export default {
  components : {
    'v-footer':vFooter,
    'lend-book':lendBook,
    member,
    deposit,
    'drawbigbill':drawBigBill,
    'scaningCode':scaningCode
  },
  data () {
    return {
      show:false,
      indexLogo,
      vipShow:{
        showAdd:false
      },
      depositShow:{
         showMoney:false
      },
      showBigBill:false,
      scanCodeShow:false,
      codeJson:{},
      code:''
    }
  },
  methods:{
    ...mapMutations([
      'reset'
    ]),
    onkeypress(e) {
        if (e.keyCode === 13) {
            const val = e.target.value

            if (val === this.code) {
              this.codeJson = this.urlParse(val)
              console.log(this.codeJson);
              this.$store.commit("saveCodeJson", this.codeJson);
              this.$router.push({path:"/content/scancode"})
            }
            else {
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
    urlParse(url){
      let obj = {};
      let reg = /[?&][^?&]+=[^?&]+/g;
      let arr = url.match(reg);
      if (arr) {
          arr.forEach(function (item) {
              let tempArr = item.substring(1).split('=');
              let key = decodeURIComponent(tempArr[0]);
              let val = decodeURIComponent(tempArr[1]);
              obj[key] = val;
          });
      }
      return obj;
    },
    open(){
      this.show = true
    },
    exit(){
      this.reset(this.$store.state)
     // location.reload()
    },
    openBigBill(){
      this.$refs.drawbigbill.dialogFormVisible = true;
    },
    scanCode(){
      this.scanCodeShow = true
      this.$refs.orderInput.focus()
    }
  },
  computed: {
    ...mapState([
        'userInfo'
    ]),
  },
  watch: {
    // QRcode(){
    //   setTimeout(() => {
    //     this.code = this.QRcode
    //     console.log(this.code);
    //   }, 100);
    // }
  },
}
</script>
<style lang="scss">
  #main-flex{
    height: 100%;
    flex-direction: column;
    .el-container{
      padding: 22px 24px;
      background:#2c2c2c;
      .el-aside{
        width: 216px;
        height: 100%;
        display: flex;
        flex-direction: column;
        .action-bar{
          flex: 1;
          font-size: 0;
          display: flex;
          padding-top: 30px;
          flex-direction: column;
          justify-content: space-between;
          background:#ffffff;
          box-shadow:0 4px 8px 0 rgba(0,0,0,0.50);
          img{
            display: block;
            width: 114px;
            height: 38px;
            margin:0 auto;
          }
          .action-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            .el-button,.router-link-active{
              flex: 1;
              width: 100%;
              margin:0;
              padding: 12px 0;
              color:#2d2d2d;
              background: none;
              box-shadow: none;
              & ::before{
                display: block;
                margin-bottom: 16px;
                font-size: 26px;
              }
            }
          }
          & > p{
           text-align: center;
           font-size: 14px;
           color:#989898;
           height: 16px;
           margin-bottom: 20px;
           span{
             color:#2d2d2d;
           }
          }
        }
        & > .el-button{
            height: 110px;
            width: 100%;
            background-image:linear-gradient(-180deg, #fada92 0%, #d69d54 100%);
            box-shadow:0 4px 8px 0 rgba(0,0,0,0.50);
            font-size: 14px;
            color: #fff;
            text-align: center;
            line-height:16px;
            margin-top: 16px;
            border-color: #2d2d2d;
            .money{
              display: block;
              font-size: 16px;
              line-height: 34px;
            }
          }
      }
      .el-main{
        padding: 0 0 0 20px;
        overflow: hidden;
        .el-row {
          height: 100%;
          width: 100%;
          display: flex;
          flex-wrap: wrap;
        }
        .el-col {
          margin-bottom: 20px;
          &:nth-of-type(12) ~ .el-col{
            margin-bottom: 0;
          }
          border-radius: 4px;
          .bg-purple {
            background: #fff;
          }
          .grid-content {
            border-radius: 4px;
            min-height: 160px;
            min-width: 170px;
            height: 100%;
            background:#2d2d2d;
            box-shadow:0 4px 8px 0 rgba(0,0,0,0.50);
            .el-button{
              width: 100%;
              height: 100%;
              font-size: 16px;
              color:#fff;
              text-align: center;
              line-height: 18px;
            }
          }
            &:nth-of-type(1) .el-button{
              background-image:linear-gradient(-180deg, #acddfb 0%, #89c4f4 100%);
            }
            &:nth-of-type(2) .el-button{
              background-image:linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
            }
            &:nth-of-type(3) .el-button{
              background-image:linear-gradient(-180deg, #edcc8c 0%, #d69d54 100%);
            }
            &:nth-of-type(4) .el-button{
              background-image:linear-gradient(-180deg, #f68d2d 0%, #ea5414 100%);
            }
            &:nth-of-type(5) .el-button{
              background-image:linear-gradient(-180deg, #9b92fa 0%, #8179f9 100%);
            }
            &:nth-of-type(6) .el-button{
              background-image:linear-gradient(-161deg, #00baff 3%, #0084ff 100%);
            }
        }
        .scanCode{
          background: rgba(0,0,0,0.6);
        }
        .row-bg {
          padding: 10px 0;
          background-color: #f9fafc;
        }
      }
    }
    .order-input{
      position: absolute;
      z-index: -1;
    }
  }
</style>
