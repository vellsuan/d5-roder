<template>
  <div class="payment">
    <el-dialog
     :visible.sync="centerDialogVisible"
     center>
     <my-rmbdialog  v-on:closeBox="selectBox" v-on:openBox="selectBox" :Receivable="yfmony" :datafn="RMBpay" :cashPay='cash'></my-rmbdialog>
   </el-dialog>
    <div class="payment-table">
      <el-table :data="payDatas" stripe style="width: 100%" height="10">
        <el-table-column align="center" prop="number" label="序号" ></el-table-column>
        <el-table-column align='center' prop="name" label="名称" width="150"></el-table-column>
        <el-table-column align='center' prop="price" label="单价" ></el-table-column>
        <el-table-column align='center' prop="unit" label="单位" ></el-table-column>
        <el-table-column align='center' prop="nums" label="数量" ></el-table-column>
        <el-table-column align='center' prop="money" label="金额" ></el-table-column>
        <el-table-column align='center' prop="discount" label="优惠" ></el-table-column>
        <el-table-column align='center' prop="sale" label="折扣" ></el-table-column>
        <el-table-column align='center' prop="status" label="状态" ></el-table-column>
        <el-table-column align='center' prop="realMoney" label="实收金额" ></el-table-column>
        <el-table-column align='center' prop="people" label="点餐员" ></el-table-column>
      </el-table>
      <div class="payment-table-ctrl">
        <div class="newbook">
         <p>合计：<span>{{payDatas[0].realMoney || 0}}元</span></p>
         <p v-if="cash">应收金额：<span>{{payDatas[0].realMoney}}元</span></p>
         <p v-else>应退金额：<span>{{payDatas[0].realMoney}}元</span></p>
        </div>
      </div>
    </div>
    <div class="payment-ctrl">
      <div class="payment-ctrl-pay">
        <el-row :gutter="60">
          <el-col :span="8"><el-button>银联支付</el-button></el-col>
          <el-col :span="8"><el-button>微信支付</el-button></el-col>
          <el-col :span="8"><el-button @click="eAccount">系统卡支付</el-button></el-col>
          <el-col :span="8"><el-button @click="RMB">人民币</el-button></el-col>
          <el-col :span="8"><el-button>支付宝支付</el-button></el-col>
          <!-- <el-col :span="8"><el-button @click="dePay">押金支付</el-button></el-col> -->
        </el-row>
      </div>
      <el-button class="esc" @click="esc">返回<br/><br/>ESC</el-button>
    </div>
  </div>
</template>
<script>
import { mapState,mapMutations } from "vuex";
import Rmbdialog from "@/components/rmbdialog";
export default {
   components: {
      'my-rmbdialog':Rmbdialog
    },
  data () {
    return {
      centerDialogVisible:false,
      yfmony:0,
      currentPage:1,
      payDatas:[{
        number:'1',
        name:'',
        price:'',
        unit:'元',
        nums:'',
        money:'',
        discount:'',
        sale:'',
        status:'',
        realMoney:'',
        people:'',
        msg:null,
      }],
      cash:true
    }
  },
  mounted () {
    this.getUserInfo()
    if(this.$route.params.id == 2){
      this.payDatas[0].name = '借阅押金'
      this.payDatas[0].price = this.readUser.user.account.foregiftNeedAmount
      this.payDatas[0].money = (this.readUser.user.account.foregiftNeedAmount - this.readUser.user.account.foregiftAmount).toFixed(2)
      this.payDatas[0].realMoney = (this.readUser.user.account.foregiftNeedAmount - this.readUser.user.account.foregiftAmount).toFixed(2)
      this.payDatas[0].people = this.userInfo.adminInfo.realName
      // 交押金
      //this.rechargeAjax(11,1)
    }else if(this.$route.params.id == 1){
      this.cash = false
      this.payDatas[0].name = '退还押金'
      this.payDatas[0].money =  this.readUser.user.account.foregiftAmount
      this.payDatas[0].realMoney = this.readUser.user.account.foregiftAmount
      this.payDatas[0].people = this.userInfo.adminInfo.realName
      //this.quitMoneyAjax(2,200)
    }else if(this.$route.params.id == 3){
      this.payDatas[0].name = '图书罚款'
      this.payDatas[0].money = this.$route.query.columnTotal
      this.payDatas[0].realMoney = this.$route.query.columnTotal
      this.payDatas[0].people = this.userInfo.adminInfo.realName
    }
  },
  methods: {
    ...mapMutations([
      'escIndex'
    ]),
    returnDep(callback,code){
      if(this.readUser.user.account.foregiftAmount){
        const params = {
          url:'BI00308',
            data:{
              currentPageNum:1,
              orderStatus:1,
              pageCount:5,
              shopSn:this.userInfo.shop.shopSn,
              userId:this.readUser.user.userId,
              msg:null
            }
        }
        this.api.post(params,(res)=>{
            if(res.page.totalRowCount <= this.giveBackbooks.length || this.readUser.grade.sort >=3){
             callback && callback(code)
            }else{
            this.msg && this.msg.close()
            this.msg = this.$notify.error({
                title: '错误',
                showClose:false,
                message: '所借阅图书一起归还时才能使用押金抵扣',
                duration:2000
              });
            }
          },(msg)=>{
            this.$message({
              duration:1000,
              showClose: true,
              message: msg,
              type: 'error'
            });
          })
        }else{
          this.msg && this.msg.close()

          this.msg = this.$notify.error({
              title: '错误',
              showClose:false,
              message: '账户押金余额为零,请确认后再次提交',
              duration:2000
            });
        }
    },
    selectBox(val){
         this.centerDialogVisible=val;
      },
    //获取用户信息
    getUserInfo(callback){
      const params = {
        url:'CC100003',
        data:{
          phone:this.readUser.user.phone
        }
      }
      this.api.post(params,(res)=>{
        console.log("res")
        this.$store.commit("saveReadUser", res);
        //this.$store.commit('saveActiveIndex','borrow')
        callback && callback()
      },(msg)=>{
        this.$message({
          duration:1000,
          showClose: true,
          message: msg,
          type: 'error'
        });
      })
    },
    // 返回按键
    esc(){
      if(this.readUser.grade.sort >=3){
        //this.$store.commit('saveActiveIndex','borrow')
        this.$router.push({path:"/content/read/borrow"})
      }else{
        this.$router.push({path:"/index"})
        this.escIndex(this.$store.state)
      }
    },
    // 充值押金接口
    rechargeAjax(code,money){
      const params = {
        url:'DE100021',
          data:{
            accountType:2,
            amount:money,
            payType:code,
            userId:this.readUser.user.userId
          }
      }
      this.api.post(params,(res)=>{
          console.log(res)
          this.$store.commit("UpdataReadUser", res.entity);
          //this.$store.commit('saveActiveIndex','borrow')
          this.$router.push({path:"/content/read/borrow"})
        },(msg)=>{
          this.$message({
            duration:1000,
            showClose: true,
            message: msg,
            type: 'error'
          });
        })
    },
    // 退押金接口
    quitMoneyAjax(code,money){
      const params = {
        url:'DE300001',
          data:{
            accountType:2,
            amount:money,
            withdrawCashWay:code,
            userId:this.readUser.user.userId
          }
      }
      this.api.post(params,(res)=>{
          console.log(res)
          this.$store.commit("UpdataReadUser", res.entity);
          this.$router.push({path:"/index"})
        },(msg)=>{
          this.$message({
            duration:1000,
            showClose: true,
            message: msg,
            type: 'error'
          });
        })
    },
    //图书罚款支付
    payFine(accountType,amount,payType,reBookcode){
       const params = {
        url:'DE200022',
          data:{
            accountType:accountType,
            amount:amount,
            payType:payType,
            source: 2,
            userId:this.readUser.user.userId
          }
      }
      this.api.post(params,(res)=>{
        console.log(res)
        // this.$store.commit("UpdataReadUser", res.entity);
        this.returnBook(reBookcode)
        },(msg)=>{
          this.$message({
            duration:1000,
            showClose: true,
            message: msg,
            type: 'error'
          });
        })
    },
    // 还书接口
    returnBook(payType){
       const params = {
        url:'BI00307',
        data:{
          giveBackbooks:this.giveBackbooks.join(','),
          payTotalPrice:this.$route.query.columnTotal,
          payType:payType,
          shopSn:this.userInfo.shop.shopSn,
          userId:this.readUser.user.userId
        }
      }
      this.api.post(params,(res)=>{
        console.log(res)
        this.$store.commit("spliceReturnData", []);
        this.$store.commit("spliceGiveBackbooks", []);
        // this.$message({             duration:1000,
        //   showClose: true,
        //   message: '还书成功',
        //   type: 'success'
        // });
        this.msg && this.msg.close()
          this.msg = this.$notify({
            title: '成功',
            message: '还书成功',
            type: 'success',
            duration:2000
          });
        //this.$store.commit('saveActiveIndex','borrow')
        if(payType == 1){
           this.getUserInfo(()=>this.esc())
        }else{
          this.$router.push({path:"/content/read/borrow"})
        }
      },(msg)=>{
        // this.$message({             duration:1000,
        //   showClose: true,
        //   message: msg,
        //   type: 'error'
        // });
        this.msg && this.msg.close()

        this.msg = this.$notify.error({
            title: '错误',
            showClose:false,
            message: msg,
            duration:2000
          });
      })
    },
    //RMB点击
    RMB(){
      // 退押金
      this.centerDialogVisible = true
      this.yfmony = Number(this.payDatas[0].realMoney)
      if(this.$route.params.id == 1){
        this.cash = false
      }
    },
    RMBpay(){
      if(this.$route.params.id == 1){
        this.quitMoneyAjax(2,this.payDatas[0].realMoney)
      }else if(this.$route.params.id == 2){ //  充值押金
        this.rechargeAjax(11,this.payDatas[0].realMoney)
      }else if(this.$route.params.id == 3){
        this.payFine(4,this.payDatas[0].realMoney,11,2)
      }
    },
    // 点击押金支付
    dePay(){
      if(this.$route.params.id == 3){
        this.returnDep(this.returnBook,1)
      }
    },
    // 点击系统卡支付
    eAccount(){
      if(this.$route.params.id == 3){
        this.payFine(1,this.payDatas[0].realMoney,4,3)
      }
    },
  },
  computed: {
    ...mapState([
        'userInfo',
        'readUser',
        'payData',
        'giveBackbooks'
    ]),
  },
}
</script>
<style lang="scss">
.payment{
  flex:1;
  display: flex;
  flex-direction: column;
  background:#eefaf8;
  padding:0 20px 20px;
  .payment-table{
    flex:1;
    display: flex;
    flex-direction: column;
    .payment-table-ctrl{
      height: 70px;
      background:#ffffff;
      padding: 0 20px 0 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .newbook{
        display: flex;
        p{
          padding: 0 20px;
          font-size:20px;
          span{
            color:rgb(234, 84, 20)
          }
        }
      }
    }
    .el-button{
      width:92px;
      height:48px;
      font-size:16px;
      color:#ffffff;
    }
  }
  .payment-ctrl{
    background:#254a42;
    box-shadow:0 4px 8px 0 rgba(0,0,0,0.50);
    border-radius:6px;
    height:276px;
    margin-top: 24px;
    padding: 30px 56px;
    display: flex;
    .payment-ctrl-pay{
      flex:1;
      :nth-of-type(3) ~ .el-col{
        margin-top: 20px;
      }
    }
    .el-button{
        width:100%;
        height:98px;
        font-size:18px;
        color:#ffffff;
        margin: 0;
      }
    .esc{
      background-image:linear-gradient(0deg, #ea5414 0%, #ff8f5f 98%);
      width:162px;
      height:216px;
      align-items:flex-start;
      margin-left:40px;
    }
  }
}
</style>
