<template>
  <div class="paymentbill">
   <el-dialog
     :visible.sync="centerDialogVisible"
     center
   >
     <my-rmbdialog  v-on:closeBox="selectBox" v-on:openBox="selectBox" :Receivable="yfmony" :datafn="datavalfun"  ></my-rmbdialog>
   </el-dialog>

    <div class="payment-table">
      <el-table :data="payDatas" stripe style="width: 100%" height="10">
        <el-table-column align="center"  type="index" :index="1+startPageRowCount" label="序号" ></el-table-column>
        <el-table-column align='center' prop="productName" label="名称" width="150"></el-table-column>
        <el-table-column align='center' prop="oneMoney" label="单价" ></el-table-column>
        <el-table-column align='center' prop="guiGe" label="单位" ></el-table-column>
        <el-table-column align='center' prop="num" label="数量" ></el-table-column>
        <el-table-column align='center' prop="yuanjiaTotal" label="金额" ></el-table-column>
        <el-table-column align='center' prop="disMoney" label="优惠" ></el-table-column>
        <el-table-column align='center' prop="discountRate" label="折扣率" ></el-table-column>

        <el-table-column align='center' prop="isState" label="状态" ></el-table-column>
        <el-table-column align='center' prop="shifuTotal" label="实收金额" ></el-table-column>
        <el-table-column align='center' prop="acceptName" label="点餐员" ></el-table-column>
      </el-table>
      <div class="discountBills">
        <div class="disBillsLeft">
          <div>
            <span>单品优惠合计：</span>
            <span v-text="danPinYouHuiTotal" >18.00</span>
          </div>
          <div>
            <span>折扣优惠：</span>
            <span v-text="zheKouYouHuiTotal">0：00</span>
          </div>
       <div>
         <span>抵扣优惠：</span>
         <span v-text="diKouYouHuiTotal">18.00</span>
       </div>
         <div>
           <span>会员优惠：</span>
           <span v-text="memberHuiTotal">78.00</span>
         </div>
        </div>
       <div class="disBillright">
         <span >合计优惠：</span>
         <span v-text="discount">18.00</span>
       </div>

      </div>
      <div class="payment-table-ctrl">
        <div class="newbook">
          <p>合计：<span>{{orgPrice}}元</span></p>
          <p>应收金额：<span>{{allprice}}元</span></p>
        </div>
        <div class="payment-table-ctrl-page">
          <p class="pages">共{{totalRowCount}}条记录 共{{totalPage}}页</p>
          <div class="block">
            <el-pagination
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage"
              :page-size="8"
              layout="prev,slot, next"
              :total="totalRowCount">
              <slot><span>第{{currentPage}}页</span></slot>
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
    <div class="payment-ctrl">
      <div class="payment-ctrl-pay">
        <el-row :gutter="60">
          <el-col :span="8"><el-button>银联支付</el-button></el-col>
          <el-col :span="8"><el-button>微信支付</el-button></el-col>
          <el-col :span="8"><el-button>系统卡支付</el-button></el-col>
          <el-col :span="8"><el-button  @click="centerDialogVisible=true">人民币</el-button></el-col>
          <el-col :span="8"><el-button>支付宝支付</el-button></el-col>
          <el-col :span="8"><el-button>押金支付</el-button></el-col>
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
        yfmony:Number(0),
        boxhide:false,
        unit:'元',
        currentPage:1,
        totalRowCount:0,
        startPageRowCount:0,
        totalPage:0,
        payDatas:[{
          number:'1',
          productName:'',
          oneMoney:'',
          num:'',
          money:'',
          discount:'',
          sale:'',
          isState:'',
          realMoney:'',
          acceptName:'',
          disMoney:''
        }],
        diKouYouHuiTotal:0,
        danPinYouHuiTotal:0,
        discount:0,
        allprice:0,
        orgPrice:0,
        zheKouYouHuiTotal:0,
        memberHuiTotal:0
      }
    },
    mounted () {
      this.getajax(1)
    },
    methods: {
      ...mapMutations([
        'escIndex'
      ]),
      // 支付接口封装
    payFine(amount,payType){
      console.log(123);
       const params = {
        url:'DE400007',
          data:{
            orderSn:this.$route.query.orderSn || '',
            amount:amount,
            payType:payType,
            source: 1,
            userId:this.$route.query.userId || ''
          }
      }
      this.api.post(params,(res)=>{
        console.log(res)
        // 通知桌子变空 桌子本地菜品清空
        // TB000016
        const params = {
          url:'TB000016',
          data:{
           id:this.$route.query.id
          }
        };
        this.api.post(params,(res)=>{
                   console.log(res)
          })
        //桌号
        let paramssucces={
          successPopup:true,money:this.allprice,table:this.$route.query.deskNo
        };
        this.$store.commit("saveFoundSuccess",paramssucces);
        this.$router.push({path:'/content/found',query:{successPopup:true,money:this.allprice,table:this.$route.query.deskNo}})
        },(msg)=>{
          this.$message({
            duration:1000,
            showClose: true,
            message: msg,
            type: 'error'
          });
        })
    },

    // 人民币支付
      datavalfun(){
      /*   let accountType='';
         let queryacc=this.$route.query.userId || '';
         if(queryacc==''){
            accountType=4
         }else{
           accountType=1
         }
        const paramsDe = {
          //后台打版万POS00012
          url: "DE400007",
          data: {
            accountType:accountType,
            amount:this.allprice,
            orderSn:this.$route.query.ordersn,
            userId:queryacc,
            payType:11,
            source:1
          }
        };
        let paramssucces={
          successPopup:true,money:this.allprice,table:this.$route.query.deskNo
        };
        this.api.post(paramsDe, res => {
          // 通知桌子变空 桌子本地菜品清空
          //桌号
          this.$store.commit("saveFoundSuccess",paramssucces);
          this.$router.push({path:'/content/found',query:{successPopup:true,money:this.allprice,table:this.$route.query.deskNo}})

        })
        //可以定义两参数
        */
        this.payFine(this.allprice,11)
      },
      //系统卡支付
      eAccount(){
        this.payFine(this.allprice,4)
      },
      selectBox(val){

         this.centerDialogVisible=val;
      },
      handleCurrentChange(val) {
        this.getajax(val)
      },
      getajax(val){

        let branch = this.$store.state.userInfo.shop.branch;
        let channel = this.$store.state.userInfo.shop.channel;
        const params = {
          //后台打版万POS00012
          url: "POS00012",
          data: {
            currentPageNum:val,
            pageCount:'8',
            orderSn: this.$route.query.orderSn
          }
        };
        this.api.post(params, res => {

          if(JSON.stringify(res)=='{}'){

          }else{
            if ( res.message == '') { }else{
              this.$notify.error({
                title: '错误',
                showClose:true,
                message: res.message,
                duration:0
              })
            }
          }

          let {danPinYouHuiTotal, diKouYouHuiTotal, discount, allprice, orgPrice, zheKouYouHuiTotal, memberHuiTotal} = res.page.datas[0];
          this.zheKouYouHuiTotal = zheKouYouHuiTotal || 0;
          //折扣
          this.danPinYouHuiTotal = danPinYouHuiTotal || 0;

          this.diKouYouHuiTotal = diKouYouHuiTotal || 0;

          this.discount = discount || 0;

          this.allprice = allprice || 0;

          this.orgPrice = orgPrice || 0;

          this.memberHuiTotal = memberHuiTotal || 0;
          this.yfmony = Number(this.allprice)
          //金额总数
          let {opList} = res.page.datas[0];
          let {startPageRowCount} = res.page;
          this.startPageRowCount = startPageRowCount;
          let newOplist = [];
          for (let item of opList) {
            let itemSate = item.isState
            if (itemSate == 0) {
              item.isState = ''
            } else if (itemSate == 1) {
              item.isState = '退'
            } else if (itemSate == 2) {
              item.isState = '送'
            }
            else if (itemSate == 4) {
              item.isState = '特'
            }
            else {
              item.isState = '折'
            }
            newOplist.push(item)
          }

          this.payDatas = newOplist;
          this.totalPage = Number(res.page.totalPage);
          this.totalRowCount = Number(res.page.totalRowCount)
          /*this.payDatas=opList*/

        })
      },
      //
      getUserInfo(callback){
        const params = {
          url:'CC100003',
          data:{
            phone:this.readUser.user.phone
          }
        }
        this.api.post(params,(res)=>{

          this.$store.commit("saveReadUser", res);
          //this.$store.commit('saveActiveIndex','borrow')
          callback && callback()
        },(msg)=>{
          this.$message({             duration:1000,
            showClose: true,
            message: msg,
            type: 'error'
          });
        })
      },
      // 返回按键
      esc(){
        this.yfmony='';
        //离开时候清空应收金额 那么负金额也跟着清空
        this.$router.back()
        /*if(this.readUser.user.account.foregiftNeedAmount <= this.readUser.user.account.foregiftAmount){
          this.$store.commit('saveActiveIndex','borrow')
          this.$router.push({path:"/content/read/borrow"})
        }else{
          this.$router.push({path:"/index"})
          this.escIndex(this.$store.state)
        }*/
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
         // this.$store.commit('saveActiveIndex','borrow')
          this.$router.push({path:"/content/read/borrow"})
        },(msg)=>{
          this.$message({             duration:1000,
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
          this.$message({             duration:1000,
            showClose: true,
            message: msg,
            type: 'error'
          });
        })
      },
      //RMB点击
      RMB(){
      /* this.boxhide=true;*/

      },
      dePay(){
        if(this.$route.params.id == 3){
          this.returnBook(1)
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
  .paymentbill{
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
        .payment-table-ctrl-page{
          display: flex;
          font-size: 16px;
         /* display: none;*/
          .pages{
            padding: 16px 10px 0 0;
          }
          .el-pagination{
            display: flex;
            .btn-prev,.btn-next{
              background:linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
              border-radius:4px;
              width:60px;
              height:48px;
              .el-icon{
                font-size: 22px;
                color:#fff;
                font-weight: bold;
              }
            }
            span{
              display: flex;
              justify-content: center;
              align-items: center;
              border:2px solid #1bbc9b;
              border-radius:4px;
              font-size: 16px;
              width:60px;
              height:48px;
              margin: 0 20px;
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
    .discountBills{
      display: flex;
      background:#ffffff;
      justify-content: space-between;
      padding: 0 5px;
      align-items: center;
      min-height: 38px;
      border-bottom: 1px solid #efefef;;
      .disBillsLeft{
        display: flex;
        font-size:12px;
        color:#2d2d2d;
        line-height:14px;
        div{
          padding: 0 15px;
          span:nth-child(2){
            color:#ea5414;

          }
        }

      }
      .disBillright{
        display: flex;
        font-size:12px;
        color:#2d2d2d;
        line-height:14px;
        margin-right: 20px;
          span:nth-child(2){
            color:#ea5414;
        }
      }

    }

  }
</style>
