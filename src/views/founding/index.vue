<template>
  <div class="founding">
    <div class="found-right">
      <div class="found-right-table">
          <el-row :gutter="10" type="flex">
            <el-col :span="3" v-for="(p,i) in 30" :key="i">
               <div class="grid-content" v-if="res && res[i]">
                 <el-button class="tableNumber" plain :class="res[i].classsate" v-if="res[i].status==0 && res[i].isLocked==0" @click="openTable(res[i].id,res[i].number,res[i].headcount)">
                    <span class="number">{{res[i].number}}</span>
                    <span class="seatNumber">{{res[i].usedNumber}}/{{res[i].headcount}}</span>
                 </el-button>
                 <el-button class="tableNumber" plain :class="res[i].classsate" v-else-if="res[i].status==0 && res[i].isLocked==1" @click="isLockedTip">
                    <span class="number">{{res[i].number}}</span>
                    <span class="seatNumber"></span>
                 </el-button>
                 <el-button class="tableNumber" plain :class="res[i].classsate"  v-else @click="openDetails(res[i].tableOrder,res[i].id)">
                    <span class="number">{{res[i].number}}</span>
                    <span class="seatNumber">{{res[i].usedNumber}}/{{res[i].headcount}}</span>
                 </el-button>
               </div>
               <div v-else class="grid-content">
               </div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content up-page">
                  <el-button @click="upPage"></el-button>
              </div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content down-page">
                  <el-button @click="downPage"></el-button>
              </div>
            </el-col>
          </el-row>
      </div>
      <div class="found-right-button">
        <div class="found-right-button-ctrl">
          <el-row :gutter="20" type="flex">
            <el-col :span="4"><div class="grid-button"><el-button @click="shiftTable">转台<br/>[F1]</el-button></div></el-col>
            <el-col :span="4"><div class="grid-button"><el-button @click="lockSeat">锁定桌位<br/>[F2]</el-button></div></el-col>
            <el-col :span="4"><div class="grid-button"><el-button @click="unlockSeat">强制解锁<br/>[F3]</el-button></div></el-col>
            <el-col :span="4"><div class="grid-button"><el-button @click="copyTable">复制桌位<br/>[F4]</el-button></div></el-col>
            <el-col :span="4"><div class="grid-button"><el-button @click="productTurnTable">单品转台<br/>[F5]</el-button></div></el-col>
            <el-col :span="4"><div class="grid-button"><el-button @click="refreshTable">刷新桌位<br/>[F6]</el-button></div></el-col>
            <el-col :span="4">
              <div class="grid-button">
                <router-link to="viewunfinished">
                  <el-button>
                    查看未结<br/>[F7]
                  </el-button>
                </router-link>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="grid-button">
                <router-link to="checkreckoning">
                  <el-button>
                    查看已结<br/>[F8]
                  </el-button>
                </router-link>
              </div>
            </el-col>
            <el-col :span="4"><div class="grid-button"><el-button @click="sabotage">拆台</el-button></div></el-col>
            <el-col :span="4"><div class="grid-button-opacity"></div></el-col>
            <el-col :span="4"><div class="grid-button-opacity"></div></el-col>
            <el-col :span="4"><div class="grid-button-opacity"></div></el-col>
          </el-row>
        </div>
        <router-link class="found-esc" to="/index">
           <el-button type="primary" round>返回<br/>[ESC]</el-button>
        </router-link>
        <!-- Dialog组件引入 -->
        <open-table ref="openTable" :tableId = "tableId" :tableNumber="tableNumber" :headcount="headcount"></open-table>
        <copy-table ref="copyTable" @copyTable = "getSeatList"></copy-table>
        <lock-seat ref="lockSeat" @lockSeat = "getSeatList"></lock-seat>
        <product-turn-table ref="productTurnTable"></product-turn-table>
        <sabotage ref="sabotage" @sabotage = "getSeatList"></sabotage>
        <shift-table ref="shiftTable" @shiftTable = "getSeatList"></shift-table>
        <tips ref="tips" @msgFunc="tipsShow" :placeOrder = "placeOrder" :money="money"></tips>
        <unlock-seat ref="unlockSeat" @unlockSeat = "getSeatList"></unlock-seat>
        <!-- Dialog组件结束 -->
      </div>
    </div>
    <div class="found-left">
        <div class="tableDetails">
            <div class="all">
              <div class="allLeft">
                <div class="allImg"></div>
                <span>全部</span>
              </div>
              <span>{{resSeat.totalCount}}</span>
            </div>
            <div class="details">
                <div class="free">
                  <div>
                    <div></div>
                    <span>空闲</span>
                  </div>
                  <span class="freeNumber">{{resSeat.freeCount}}</span>
                </div>
                <div class="openPlatform">
                  <div>
                    <div></div>
                    <span>开台</span>
                  </div>
                  <span class="openNumber">{{resSeat.openCount}}</span>
                </div>
                <div class="dismantleStation">
                  <div>
                    <div></div>
                    <span>拆台</span>
                  </div>
                  <span class="dismantleNumber">{{resSeat.shareCount}}</span>
                </div>
                <div class="print">
                  <div>
                    <div></div>
                    <span>打印</span>
                  </div>
                  <span class="printNumber">{{resSeat.printedCount}}</span>
                </div>
            </div>
            <div class="status">
              <div class="statusTitle">
                <span>厨打状态正常</span>
              </div>
              <div class="statusContent">
                <div class="checkout">
                  <div>已结：</div>
                  <span>{{resSummary.payPrice}}元</span>
                </div>
                <div class="checkout">
                  <div>未结：</div>
                  <span>{{resSummary.noPayPrice}}元</span>
                </div>
                <div class="checkout">
                  <div>总额：</div>
                  <span>{{resSummary.totalPrice}}元</span>
                </div>
                <div class="checkout">
                  <div>在店人数：</div>
                  <span>{{resSummary.currentNumber}}人</span>
                </div>
                <div class="checkout">
                  <div>总人数：</div>
                  <span>{{resSummary.totalPerson}}人</span>
                </div>
              </div>
            </div>
        </div>
        <div class="footerJump">
            <router-link class="found-esc" to="order"> <span>订单管理</span></router-link>
        </div>
    </div>
  </div>
</template>
<script>
import { mapState,mapMutations } from 'vuex';
import openTable from './dialog/openTable';//开台
import copyTable from './dialog/copyTable';//复制桌位
import lockSeat from './dialog/lockSeat';//锁定桌位
import productTurnTable from './dialog/productTurnTable';//单品转台
import sabotage from './dialog/sabotage';//拆台
import shiftTable from './dialog/shiftTable';//转台
import tips from './dialog/tips';//提示
import unlockSeat from './dialog/unlockSeat';//强制解锁桌位
export default {
  components: {
    'open-table':openTable,
    'copy-table':copyTable,
    'lock-seat':lockSeat,
    'product-turn-table':productTurnTable,
    'sabotage':sabotage,
    'shift-table':shiftTable,
    'tips':tips,
    'unlock-seat':unlockSeat
  },
  data () {
    return {
      res:{},
      resSummary:{},
      resSeat:{},
      show:false,
      tableId:'',
      tableNumber:'',
      headcount:'',
      tableOrder:'',
      currentPageNum: 1,
      pageCount : 30,
      placeOrder : "",
      money : "",
      successPopup :'',
      resDataAll:{} //所有列表数据
    }
  },
  created(){
      this.successPopup = this.$store.state.foundSuccess.successPopup;
      document.onkeydown= e => {
        let key=window.event.keyCode;
        if(key==112){
          this.shiftTable();
        }else if(key==113){
          this.lockSeat()
        }else if(key==114){
          this.unlockSeat()
        }else if(key==115){
          this.copyTable()
        }else if(key==116){
          this.productTurnTable()
        }else if(key==117){
          this.refreshTable()
        }else if(key==118){
          this.$router.push('viewunfinished')
        }else if(key==119){
          this.$router.push('checkreckoning')
        }else if(key == 27){
          this.$router.push('/index')
        }
      }
  },
  mounted () {
    this.getSeatList();
    this.getSeatListAll();
    this.getSummaryToday();
    this.getSeatDetail();
    if(this.successPopup == true){
        this.$refs.tips.dialogVisible = true;
    }
  },
  methods: {
     getSeatList(){
        const params = {
            url: 'TB000001',
            data: {
                currentPageNum:this.currentPageNum,
                pageCount:this.pageCount,
                isDelete: '0',
                shopSn : this.userInfo.shop.shopSn,
                //shopSn : "B007007"
            }
        }
        this.api.post(params, res=> {
            this.res = res && res.page.datas;
            if(this.res){
              for(let i = 0;i<this.res.length;i++){
                if(this.res[i].status==1){
                    this.res[i].classsate='tableNumber3';//占用颜色
                }else if(this.res[i].status==4){
                    this.res[i].classsate='tableNumber2'//打印颜色
                }else if(this.res[i].status==0){
                    if(this.res[i].isLocked==1){
                      this.res[i].classsate='tableNumber4'//锁定颜色
                    }else{
                      this.res[i].classsate='tableNumber'//空闲颜色
                    }
                }else if(this.res[i].status==6){
                    this.res[i].classsate='tableNumber1'//拆台颜色
                }
              }
            }
        },msg=>{
              this.currentPageNum = this.currentPageNum -1;
                this.$alert('已经没有更多了!', '提示',{
                  closeOnClickModal:false,
                  center: true,
                });
              return false;
        });

     },
     //获取所有桌位数据列表
     getSeatListAll(callback){
        const params = {
            url: 'TB000015',
            data: {
                shopSn : this.userInfo.shop.shopSn
            }
        }
        this.api.post(params, res=> {
            this.resDataAll = res && res.list;
            callback && callback();
        },msg=>{
            this.$message({
            duration:1000,
            showClose: true,
            message: msg,
            type: 'error'
          });
        });
     },
     getSummaryToday(){
        const params = {
            url: 'OR100306',
            data: {
                platform : '8',
                shopSn : this.userInfo.shop.shopSn,
                //shopSn : "B007007"
            }
        }
        this.api.post(params, resSummary=> {
            this.resSummary = resSummary
        });
     },
     getSeatDetail(){
        const params = {
          url: 'TB000012',
          data:{
            shopSn : this.userInfo.shop.shopSn,
            //shopSn: "B007007"
          }
        }
        this.api.post(params, resSeat=> {
            this.resSeat = resSeat
        });
     },
     //弹窗开始
     //开台
     openTable(tableId,tableNumber,headcount){
       this.tableId = tableId;
       this.tableNumber = tableNumber;
       this.headcount = headcount;
       this.$refs.openTable.dialogVisible = true;
     },
    shiftTable(){
      this.getSeatListAll(this.shiftTableAll);
    },

     //转台
     shiftTableAll(){
        if(this.resDataAll){
            let flag  = false;
            for(let i = 0; i<this.resDataAll.length;i++){
               if(this.resDataAll[i].status==1){
                   flag = true;
               }
            }
            if(!flag){
                this.$alert('暂无可转台桌位!', '提示',{
                  closeOnClickModal:false,
                  center: true,
                });
            }else{
                this.$refs.shiftTable.dialogVisible = true;
                this.$refs.shiftTable.rollOut();
            }
        }else{
            this.$alert('暂无可操作桌位!', '提示',{
              closeOnClickModal:false,
              center: true,
            });
        }
     },
     //锁定桌位
    lockSeat(){

      this.$refs.lockSeat.dialogVisible = true;
      this.$refs.lockSeat.isLockList();
    },

    unlockSeat(){
      this.getSeatListAll(this.unlockSeatAll);
    },
     //强制解锁
     unlockSeatAll(){
        if(this.resDataAll){
            let flag  = false;
            for(let i = 0; i<this.resDataAll.length;i++){
               if(this.resDataAll[i].isLocked==1){
                   flag = true;
               }
            }
            if(!flag){
                this.$alert('暂无锁定桌位!', '提示',{
                  closeOnClickModal:false,
                  center: true,
                });
            }else{
                this.$refs.unlockSeat.dialogVisible = true;
                this.$refs.unlockSeat.isLockList();
            }
        }else{
            this.$alert('暂无锁定桌位!', '提示',{
              closeOnClickModal:false,
              center: true,
            });
        }
     },
    copyTable(){
      this.getSeatListAll(this.copyTableAll);
    },
     //复制桌位
     copyTableAll(){
        if(this.resDataAll){
            let flag  = false;
            for(let i = 0; i<this.resDataAll.length;i++){
               if(this.resDataAll[i].status==1){
                   flag = true;
               }
            }
            if(!flag){
                this.$alert('暂无可复制桌位!', '提示',{
                  closeOnClickModal:false,
                  center: true,
                });
            }else{
                this.$refs.copyTable.dialogVisible = true;
                this.$refs.copyTable.occupyTableList();
            }
        }else{
            this.$alert('暂无可复制桌位!', '提示',{
              closeOnClickModal:false,
              center: true,
            });
        }
     },
    productTurnTable(){
      this.getSeatListAll(this.productTurnTableAll);
    },
     //单品转台
     productTurnTableAll(){
        if(this.resDataAll){
            let flag  = false;
            for(let i = 0; i<this.resDataAll.length;i++){
               if(this.resDataAll[i].status==1){
                   flag = true;
               }
            }
            if(!flag){
                this.$alert('暂无可转台菜品!', '提示',{
                  closeOnClickModal:false,
                  center: true,
                });
            }else{
               this.$refs.productTurnTable.dialogVisible = true;
            }
        }else{
            this.$alert('暂无可转台菜品!', '提示',{
              closeOnClickModal:false,
              center: true,
            });
        }
     },
    sabotage(){
      this.getSeatListAll(this.sabotageAll);
    },
     //拆台
     sabotageAll(){
        if(this.resDataAll){
            let flag  = false;
            for(let i = 0; i<this.resDataAll.length;i++){
               if(this.resDataAll[i].status==1){
                   flag = true;
               }
            }
            if(!flag){
                this.$alert('暂无可拆台桌位!', '提示',{
                  closeOnClickModal:false,
                  center: true,
                });
            }else{
                this.$refs.sabotage.dialogVisible = true;
                this.$refs.sabotage.isSabotage();
            }
        }else{
            this.$alert('暂无可拆台桌位!', '提示',{
              closeOnClickModal:false,
              center: true,
            });
        }
     },
     //刷新桌
     refreshTable(){
        this.getSeatList();
     },
     //跳转点餐详情
     openDetails(tableOrder,id){
        this.$store.commit("savatableOrder", tableOrder);
         let allSlote={
           allfootString:[],
           productobj:[]
         };
        this.$store.commit("saveCuisineList", allSlote);
        //this.$router.push({path: 'orderSystem'});
        this.$router.push({path: 'orderSystem',query:{tableOrder:tableOrder,id:id}});
     },
     //提示锁定弹窗
     isLockedTip(){
        this.$alert('此桌位已锁定!', '提示',{
          closeOnClickModal:true,
          center: true,
        });
     },
     //上一页
     upPage(){
        this.currentPageNum = this.currentPageNum - 1;
        if(this.currentPageNum < 1){
            this.currentPageNum = 1;
        }
        this.getSeatList();
     },
     //下一页
     downPage(){
        this.currentPageNum = this.currentPageNum + 1;
        this.getSeatList();
     },
     //下单之后触发事件
     tipsShow(tableNumber,money){
        this.$refs.tips.dialogVisible = true;
        this.placeOrder = tableNumber;
        this.money  = money;
     }
  },
  computed: {
    ...mapState([
        'userInfo'
    ]),
  },
}
</script>
<style lang="scss">
  .founding{
    height: 100%;
    background:#2c2c2c;
    display: flex;
    .found-right{
      flex: 1;
      display: flex;
      flex-direction: column;
      margin: 26px 22px 20px;
      .found-right-table{
        flex: 1;
         .el-row {
           width: 101%;
           height: 100%;
            flex-wrap: wrap;
            .el-col{
              margin-bottom: 10px;
              .grid-content{
                display: flex;
                background:#2d2d2d;
                box-shadow:0 4px 8px 0 rgba(0,0,0,0.50);
                min-width:92px;
                min-height:92px;
                height: 100%;
                .tableNumber{
                  border: 0;
                  border-radius: 0;
                  flex:1;
                  display: flex;
                  cursor:pointer;
                  justify-content: center;
                  align-items: center;
                  background:#525252;
                  position: relative;
                  box-shadow:0 4px 8px 0 rgba(0,0,0,0.50);
                  .number{
                    align-self: center;
                    font-size:20px;
                    color:#ffffff;
                    letter-spacing:0;
                  }
                  .seatNumber{
                    position:absolute;
                    right:5px;
                    bottom: 5px;
                    font-size:16px;
                    color:#989898;
                    letter-spacing:0;
                  }
                }
                .tableNumber3{
                  background-image:linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
                  .seatNumber{
                    color: #fff;
                  }
                }
                .tableNumber2{
                  background-image:linear-gradient(-180deg, #bee4fa 0%, #89c4f4 100%);
                  .seatNumber{
                    color: #fff;
                  }
                }
                .tableNumber1{
                  background-image:linear-gradient(-180deg, #edcc8c 0%, #d69d54 100%);
                  .seatNumber{
                    color: #fff;
                  }
                }
                .tableNumber4{
                  background:#2d2d2d;
                }
                .openGreen{
                  flex:1;
                  display: flex;
                  cursor:pointer;
                  justify-content: center;
                  align-items: center;
                  position: relative;
                  background-image:linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
                  box-shadow:0 4px 8px 0 rgba(0,0,0,0.50);
                  .number{
                    font-size:20px;
                    color:#ffffff;
                    letter-spacing:0;
                  }
                  .seatNumber{
                    position:absolute;
                    right:5px;
                    bottom: 5px;
                    font-size:16px;
                    color:#ffffff ;
                    letter-spacing:0;
                  }
                }
                .printBlue{
                  flex:1;
                  display: flex;
                  cursor:pointer;
                  justify-content: center;
                  align-items: center;
                  position: relative;
                  background-image:linear-gradient(-180deg, #bee4fa 0%, #89c4f4 100%);
                  box-shadow:0 4px 8px 0 rgba(0,0,0,0.50);
                  .number{
                    font-size:20px;
                    color:#ffffff;
                    letter-spacing:0;
                  }
                  .seatNumber{
                    position:absolute;
                    right:5px;
                    bottom: 5px;
                    font-size:16px;
                    color:#ffffff ;
                    letter-spacing:0;
                  }
                }
              }
              .up-page{
                button{
                   border:none;
                   border-radius: 0;
                   width: 100%;
                   height: 100%;
                   box-shadow:0 4px 8px 0 rgba(0,0,0,0.50);
                   background:#525252 url(../../assets/images/left-arrow.png) center no-repeat;
                }
                button:hover{
                  background:#2d2d2d url(../../assets/images/left-arrow.png) center no-repeat;
                }
              }
              .down-page{
                button{
                  border:none;
                  border-radius: 0;
                  box-shadow:0 4px 8px 0 rgba(0,0,0,0.50);
                  width: 100%;
                  height: 100%;
                  background:#525252 url(../../assets/images/right-arrow.png) center no-repeat;
                }
                button:hover{
                  background:#2d2d2d url(../../assets/images/right-arrow.png) center no-repeat;
                }
              }
            }
          }


      }
      .found-right-button{
        min-height: 228px;
        background:#254a42;
        box-shadow:0 4px 8px 0 rgba(0,0,0,0.50);
        padding: 20px;
        padding-bottom: 0;
        display:flex;
        .found-right-button-ctrl{
          flex: 1;
          .el-row {
            width: 100%;
            height: 100%;
            flex-wrap: wrap;
            .el-col{
              margin-bottom: 20px;
              .grid-button{
                background-image:linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
                box-shadow:0 2px 2px 0 rgba(0,0,0,0.10);
                border-radius:4px;
                min-width:84px;
                min-height:84px;
                height: 100%;
                button{
                    padding: 0;
                    border: none;
                    width:100%;
                    min-height:100%;
                    font-size:14px;
                    color:#ffffff;
                    letter-spacing:0;
                    text-align:center;
                    background-image:linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
                    box-shadow:0 2px 2px 0 rgba(0,0,0,0.10);
                    border-radius:4px;
                }
                button:hover{
                  background:#009176;
                }
              }
              .grid-button-opacity{
                opacity:0.5;
                background-image:linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
                box-shadow:0 2px 2px 0 rgba(0,0,0,0.10);
                border-radius:4px;
                min-width:84px;
                min-height:84px;
                height: 100%;
              }
            }
          }
        }
        .found-esc > .el-button{
          border: 0;
          background-image:linear-gradient(0deg, #ea5414 0%, #ff8f5f 98%);
          border-radius:4px;
          min-width:85px;
          min-height:188px;
          font-size:14px;
          color:#ffffff;
        }
      }
    }
    .found-left{
      display: flex;
      flex-direction:column;
      width: 180px;
      height: 100%;
      background:#ffffff;
      .tableDetails{
        width: 100%;
        height: 94.5%;
        .all{
          display: flex;
          background:#2c2c2c;
          box-shadow:0 2px 4px 0 rgba(0,0,0,0.20);
          width:180px;
          height:56px;
          .allLeft{
            width: 136px;
            height: 100%;
            display: flex;
            padding: 20px;
            .allImg{
              width: 20px;
              height: 20px;
              color:#ffffff;
              background: url(../../assets/images/all.png) 100% 100% no-repeat;
              margin-right: 8px;
            }
            span{
              margin-top: 2px;
              display: block;
              font-size:16px;
              color:#ffffff;
              letter-spacing:0;
              line-height:16px;
              text-align:left;
            }
          }
          span{
            margin-top: 20px;
            display: block;
            font-size:20px;
            color:#ffffff;
            letter-spacing:0;
            line-height:20px;
            text-align:right;
          }
        }
        .details{
          width: 100%;
          height: 234px;
          div{
            width: 100%;
            height: 56px;
          }
          .free{
            display: flex;
            div{
              display: flex;
              width: 136px;
              height: 100%;
              div{
                margin: 20px 10px 20px 20px;
                background:#525252;
                border-radius:2px;
                width:16px;
                height:16px;
              }
              span{
                margin-top: 20px;
                display: block;
                font-size:16px;
                color:#989898;
                letter-spacing:0;
                line-height:16px;
              }
            }
            .freeNumber{
              width: 44px;
              margin: 17px 20px 0 0;
              display: block;
              font-size:20px;
              color:#2d2d2d;
              letter-spacing:0;
              line-height:20px;
              text-align:right;
            }
          }
          .openPlatform{
            display: flex;
              div{
                display: flex;
                width: 136px;
                height: 100%;
                div{
                  margin: 20px 10px 20px 20px;
                  background:#1bbc9b;
                  border-radius:2px;
                  width:16px;
                  height:16px;
                }
                span{
                  margin-top: 20px;
                  display: block;
                  font-size:16px;
                  color:#989898;
                  letter-spacing:0;
                  line-height:16px;
                }
              }
              .openNumber{
                width: 44px;
                margin: 17px 20px 0 0;
                margin-top: 17px;
                display: block;
                font-size:20px;
                color:#1bbc9b;
                letter-spacing:0;
                line-height:20px;
                text-align:right;
              }
          }
          .dismantleStation{
            display: flex;
              div{
                display: flex;
                width: 136px;
                height: 100%;
                div{
                  margin: 20px 10px 20px 20px;
                  background:#deb27f;
                  border-radius:2px;
                  width:16px;
                  height:16px;
                }
                span{
                  margin-top: 20px;
                  display: block;
                  font-size:16px;
                  color:#deb27f;
                  letter-spacing:0;
                  line-height:16px;
                }
              }
              .dismantleNumber{
                width: 44px;
                margin: 17px 20px 0 0;
                display: block;
                font-size:20px;
                color:#deb27f;
                letter-spacing:0;
                line-height:20px;
                text-align:right;
              }
          }
          .print{
            display: flex;
              div{
                display: flex;
                width: 136px;
                height: 100%;
                div{
                  margin: 20px 10px 20px 20px;
                  background:#89c4f4;
                  border-radius:2px;
                  width:16px;
                  height:16px;
                }
                span{
                  margin-top: 20px;
                  display: block;
                  font-family:MicrosoftYaHei;
                  font-size:16px;
                  color:#89c4f4;
                  letter-spacing:0;
                  line-height:16px;
                }
              }
              .printNumber{
                width: 44px;
                margin: 17px 20px 0 0;
                display: block;
                font-size:20px;
                color:#89c4f4;
                letter-spacing:0;
                line-height:20px;
                text-align:right;
              }
          }
        }
        .status{
          height: 336px;
          width: 100%;
          .statusTitle{
            background:#efefef;
            width:180px;
            height:56px;
            text-align:center;
            span{
              display: block;
              padding-top: 20px;
              font-size:16px;
              color:#1bbc9b;
              letter-spacing:0;
              line-height:16px;
            }
          }
          .statusContent{
            width: 100%;
            height: 278px;
            .checkout{
              display: flex;
              background:#ffffff;
              width:180px;
              height:56px;
              overflow: hidden;
              padding-left: 20px;
              div{
                width: 80px;
                height: 100%;
                font-size:16px;
                color:#989898;
                letter-spacing:0;
                line-height:56px;
                text-align:left;
              }
              span{
               flex: 1;
                display: block;
                font-size:16px;
                color:#2d2d2d;
                letter-spacing:0;
                line-height:56px;
                text-align:right;
              }
            }
          }
        }
      }
      .footerJump{
        flex: 1;
        background:#525252;
        width:180px;
        height:54px;
        a:link{
          text-decoration: none;
        }
        a:hover{
          text-decoration: none;
        }
        span{
          display: block;
          margin-top:17px;
          font-size:16px;
          color:#ffffff;
          letter-spacing:0;
          line-height:16px;
          text-align:center;
        }
      }
    }
  }
</style>
