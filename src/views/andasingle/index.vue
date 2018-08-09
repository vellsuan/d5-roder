
<template>

  <div class="vouching">
    <div class="coupon-main">
      <div class="coupon-titlept">
      <div class="coupon-title">
        <div>
          <p>
            <span>桌位：</span>
            <span>{{tableData.deskNo}}</span>
          </p>
          <p>
            <span>消费客数：</span>
            <span>{{tableData.person}}</span>
          </p>
          <p>
            <span>单号：</span>
            <span>{{tableData.orderSn}}</span>
          </p>
          <p>
            <span>预打次数：</span>
            <span>{{tableData.email}}</span>
          </p>
          <p>
            <span>操作员：</span>
            <span>{{tableData.acceptName}}</span>
          </p>
          <p><span>开台时间：</span><span>{{openTime}}</span></p>
        </div>
        <div>
            <div class="nuclearBtn" @click="cancelBack">返回</div>
        </div>
      </div>
      </div>
      <div class="coupon-hend">
        <div class="coupon-title">
          <div>
            <p>
              <span>优惠方式：</span>
              <span>{{tableData.type}}</span>
            </p>
            <p>
              <span>优惠金额：</span>
              <span>{{tableData.discount}}元</span>
            </p>
            <p>
              <span>奉送金额：</span>
              <span>{{tableData.fsMoney}}元</span>
            </p>
            <p>
              <span>菜品小计：</span>
              <span>{{tableData.orgPrice}}元</span>
            </p>
            <!-- <p>
              <span>操作员：</span>
              <span>002</span>
            </p> -->
          </div>
          <div>
            <p><span>应付金额：</span><span class="vouchAmount">{{tableData.allprice}}元</span></p>
          </div>
        </div>
      </div>
      <div class="coupon-table">
        <el-table :data="tableDataList" stripe style="width: 100%" height="10" highlight-current-row>
          <el-table-column align="center" type="index" :index="1+startPageRowCount" label="序号" width="70"></el-table-column>
          <el-table-column align='center' prop="productName" label="菜目名称" width="180"></el-table-column>
          <el-table-column align='center' prop="guiGe" label="单位"  width="60"></el-table-column>
          <el-table-column align='center' prop="oneMoney" label="单价（元）" width="90"></el-table-column>
          <el-table-column align="center" prop="num" label="数量" width="60"></el-table-column>
          <el-table-column align="center" prop="shifuTotal" label="金额（元）" width="90"></el-table-column>
          <el-table-column align="center" prop="discountRate" label="折扣率" width="80"></el-table-column>
          <el-table-column align="center" :formatter="isState" prop="isState" class-name="isState" label="状态" width="60"></el-table-column>
          <el-table-column align="center" prop="acceptName" label="点菜人" width="80"></el-table-column>
          <el-table-column align="center" :formatter="reciveTime" prop="reciveTime" label="时间"></el-table-column>
        </el-table>
        <div class="coupon-table-ctrl">
          <div></div>
          <div class="coupon-table-ctrl-page">
            <p class="pages">共{{totalRowCount}}条记录 共{{totalPage}}页</p>
            <div class="block">
              <el-pagination
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="6"
                layout="prev,slot, next"
                :total="totalRowCount">
                <slot><span>第{{currentPage}}页</span></slot>
              </el-pagination>
            </div>
          </div>
        </div>
      </div>
      <!-- <select-dialog :showDish.sync="showDish" :proList='proList' :yhm='yhm'/> -->
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
  export default {
    data () {
      return{
        startPageRowCount : 0,
        totalRowCount : 0,
        totalPage : 0,
        currentPage : 1,
        tableData: {},
        openTime : '',
        tableDataList : null
      }
    },
    mounted () {
      this.Andasingle(1);
    },
    methods: {
    	isState:function(row, column) {

	      var itemSate = row[column.property];
	     if(itemSate==0){
          return " ";
        }else if(itemSate==1){
         return '退'
        }else if(itemSate==2){
         return '送'
        }
        else if(itemSate==4){
         if(row.productId.indexOf('TC')==-1){
           return "特"
         }
        }
        else{
         return '折'
        }
    	},
    	reciveTime:function(row, column) {
	      var data = row[column.property];
	      if(data == null){
           return '';
        }else{
          data = this.$moment(data).format("YYYY-MM-DD HH:mm:ss")
          return data;
        }
    	},
      Andasingle(val){
        const	params = {
          url:'OR900205',
          data:{
            currentPageNum: val,
            orderSn:this.$route.query.orderSn,
            pageCount : 6
          }
        }
        this.api.post(params,res=>{
          this.startPageRowCount = res.page.startPageRowCount;
          this.tableData = res.page.datas[0];
          this.tableDataList = res.page.datas[0].opList;
          if(res.page.datas[0].openTime == null){
            this.openTime = '';
          }else{
            this.openTime = this.$moment(res.page.datas[0].openTime).format("YYYY-MM-DD HH:mm:ss");
          }
          res.page.datas[0].opList.forEach(content=>{
            if(content.addTime == null){
               content.addTime = '';
            }else{
              content.addTime = this.$moment(content.addTime).format("YYYY-MM-DD HH:mm:ss")
            }
          })
          this.totalPage = Number(res.page.totalPage);
          this.totalRowCount = Number(res.page.totalRowCount);
        })
      },
      // 分页按钮
      handleCurrentChange(val) {
        this.Andasingle(val)
      },
      cancelBack(){
         this.$router.back(-1);
      }
    },
    computed: {
      ...mapState([
        'userInfo'
      ]),
    }
  }
</script>
<style lang="scss">
  .vouching {
    background: #2c2c2c;
    flex:1;
    display: flex;
    width: 100%;
    .coupon-main{
      background:#2c2c2c;
      display: flex;
      margin: 0 10px 32px;
      flex-direction: column;
      flex:1;
      width: 100%;
      .coupon-check{
        height: 120px;
        background:#254a42;
        box-shadow:0 4px 8px 0 rgba(0,0,0,0.50);
        .coupon-check-code{
          margin-top:8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          p{
            width: 14px;
            font-size: 14px;
            color:#fff;
            margin: 0 10px;
          }
          .text,.textarea{
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .text{
            input{
              background-color:rgba(0,0,0,0.5);
              background-image:linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
              box-shadow:0 2px 2px 0 rgba(0,0,0,0.10);
              border-radius:4px;
              width:244px;
              height:100px;
              outline:none;
              border: none;
              padding: 36px 54px;
              font-size: 20px;
              color:#fff;
            }
          }
          .textarea{
            textarea{
              background-color:rgba(0,0,0,0.5);
              background-image:linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
              box-shadow:0 2px 2px 0 rgba(0,0,0,0.10);
              border-radius:4px;
              width:360px;
              height:100px;
              outline:none;
              border: none;
              padding: 10px 20px;
              font-size: 14px;
              color:#fff;
              resize:none;
            }
          }
          .el-button{
            color:#fff;
            font-size: 14px;
          }
          .cancel{
            background-image:linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
            border-radius:4px;
            width:85px;
            height:100px;
          }
          .esc{
            background-image:linear-gradient(0deg, #ea5414 0%, #ff8f5f 98%);
            border-radius:4px;
            width:85px;
            height:100px;
          }
        }
      }
      .coupon-table{
        flex:1;
        display: flex;
        flex-direction: column;
        .el-table{
          .current-row>td{
              background:#1bbc9b;
              color: #fff;
          }
          .el-table__body-wrapper{
            .el-table__body{
              .el-table__row{
                height: 58px;
                .isState{
                	/*color:red;*/
                }
              }
            }
          }
        }
        .coupon-table-ctrl{
          height: 70px;
          background:#ffffff;
          padding: 0 20px 0 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          & > .el-button{
            background-image:linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
            border-radius:4px;
            border: none;
            color:#fff;
            width:104px;
            height:48px;
            font-size: 16px;
          }
          .coupon-table-ctrl-page{
            display: flex;
            font-size: 16px;
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
      }
    }
    .coupon-titlept{
      background:#1bbc9b;
      width: 100%;
      .coupon-title{
        min-height: 56px;
        min-width: 964px;
        background:#1bbc9b;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: 20px;
        margin-left: 20px;
        div{
          font-size:12px;
          color:#ffffff;
        }
        div:nth-child(1){
          display: flex;
           p{
             margin-right: 39px;
           }
        }
        div:nth-child(2){
          a{
            text-decoration: none;
          }
        }
      }
    }
    .coupon-hend{
      background:#254a42;
      width: 100%;
      .coupon-title{
        min-height: 64px;
        min-width: 964px;
        background:#254a42;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: 20px;
        margin-left: 20px;
        div{
          font-size:14px;
          color:#ffffff;
        }
        div:nth-child(1){
          display: flex;
          p{
            margin-right: 39px;
          }
          p:nth-child(5){
            margin-right: 0;
          }
        }
      }
    }
    .vouchAmount{
      font-size:20px;
      color:#ea5414;

    }
    .nuclearBtn{
      //width: 90px;
     /* height: 48px;
      background:#ea5414;*/
      cursor: pointer;
      background-image:linear-gradient(0deg, #ea5414 0%, #ff8f5f 98%);
      border-radius:4px;
      width:90px;
      height:48px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size:24px;
      color:#ffffff;
    }
    /*tr:hover{

    }*/
   /* .coupon-hend{
      background:#254a42;
      box-shadow:0 4px 8px 0 rgba(0,0,0,0.50);
      min-height:64px;
      width: 100%;

    }*/
  }
</style>
