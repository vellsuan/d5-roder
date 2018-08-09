<template>
    <el-dialog title="锁定桌位" :visible.sync="dialogVisible" width="642px" top="calc((100vh - 664px)/2)" :before-close="handleClose" class="lockSeat" center>
    <div class="dialog-body-left">
        <div class="selectTable" v-if="selectTable.length > 0">
            <el-button v-for="(lockTable,index1) in selectTable" :key="lockTable.id" @click="cleanLockTable(index1)">{{lockTable.number}}</el-button>
        </div>
        <div class="selectTable" v-else>
            <div class="selectEmpty">
                <div>
                    <span></span>
                    <p>点击右侧选择</p>
                    <p>需要锁定的座位</p>
                </div>
            </div>
        </div>
    </div>
    <div class="dialog-body-right">
        <div class="seatList" v-for="(item,index) in res" :key="item.id" >
            <el-button class="tableNumber" @click="turnTable(index)">{{item.number}}</el-button>
        </div>
        <div class="turn-page" v-show="show">
            <el-button class="tableNumber" @click="pageUp">
                <span class="left-arrow"></span>
            </el-button>
            <el-button class="tableNumber" @click="pageDown">
                <span class="right-arrow"></span>
            </el-button>
        </div>
    </div>
    <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="isOkLock">确认</el-button>
        <el-button @click="cancel">取消</el-button>
    </span>
    </el-dialog>
</template>

<script>
import { mapState,mapMutations } from 'vuex';
import BScroll from "better-scroll";
  export default {
    data() {
      return {
        show:true,
        dialogVisible: false,
        res:{},
        pageCount:22,
        currentPageNum: 1,
        selectTable:[],
        idStr:[],
        s:[]
      };
    },
    mounted ()  {
    },
    methods: {
        isLockList(){
            const params = {
                url: 'TB000001',
                data: {
                    currentPageNum:this.currentPageNum,
                    pageCount:this.pageCount,
                    isDelete: '0',
                    shopSn : this.userInfo.shop.shopSn,
                    //shopSn : "B007007",
                    status : 0,
                    isLocked : 0
                }
            }
            this.api.post(params, res=> {
                this.res = res && res.page.datas;
            },msg=>{
                this.currentPageNum = this.currentPageNum -1;
                if(this.currentPageNum < 1){
                    this.currentPageNum = 1;
                }
                this.$alert(msg, '提示',{
                    closeOnClickModal:true,
                    center: true,
                });
                return false;
            });
        },
        pageUp(){
            this.currentPageNum = this.currentPageNum - 1;
            if(this.currentPageNum < 1){
                this.currentPageNum = 1;
            }
            this.isLockList();

        },
        pageDown(){
            this.currentPageNum = this.currentPageNum + 1;
            this.isLockList();
        },
        idYan(arr1,data){
          for(let item of arr1){
            if(item.id == data) {
              return true
            }
          }
          return false
        },
        turnTable(index){
          if(!this.idYan(this.selectTable,this.res[index].id)){
            this.selectTable.push(this.res[index]);
            let s = new Set(this.selectTable);
            this.selectTable = Array.from(s);
          }else {
            this.$message({
              duration: 1000,
              showClose: true,
              message: '请勿添加重复桌位',
              type: 'error'
            });
          }
        },
        cleanLockTable(index){
            this.selectTable.splice(index,1);
        },
        cancel(){
            // this.dialogVisible = false;
            // this.selectTable=[];
            Object.assign(this.$data, this.$options.data())
        },
        handleClose(){
            // this.dialogVisible = false;
            // this.selectTable=[];
            Object.assign(this.$data, this.$options.data())
        },
        isOkLock(){
            if(this.selectTable.length > 0){
                for(let i= 0; i< this.selectTable.length;i++){
                    this.idStr.push(this.selectTable[i].id);
                }
                const params = {
                    url: 'TB000013',
                    data: {
                        idStr: this.idStr.join(","),
                        isLocked: 1
                    }
                }
                this.api.post(params, res=> {
                    if(res){
                        this.dialogVisible = false;
                        this.selectTable = [];
                        this.idStr = [];
                        this.currentPageNum = 1;
                        this.isLockList();
                        this.$emit("lockSeat");
                        this.$alert('锁定桌位成功!', '提示',{
                            closeOnClickModal:true,
                            center: true,
                        });
                    }
                },msg=>{
                    this.currentPageNum = this.currentPageNum -1;
                    if(this.currentPageNum < 1){
                        this.currentPageNum = 1;
                    }
                    this.$alert(msg, '提示',{
                    closeOnClickModal:true,
                    center: true,
                    });
                    return false;
                });
            }else{
                this.$alert('请先选择需要锁定的桌位!', '提示',{
                    closeOnClickModal:true,
                    center: true,
                });
                return false;
            }
        }
    },
    computed: {
        ...mapState([
            'userInfo'
        ]),
    },
  };
</script>

<style lang="scss">
  .lockSeat{
    .el-dialog{
        height: 664px;
        .el-dialog__header{
            padding-top: 20px;
            padding-bottom: 30px;
            .el-dialog__close{
                display: none;
            }
        }
        .el-dialog__body{
            margin-bottom: 20px;
            padding: 0 20px;
            height: 487px;
            display: flex;
            .dialog-body-left{
                margin-right: 20px;
                width: 250px;
                height: 488px;
                overflow: hidden;
                .selectTable{
                    display: flex;
                    //overflow: auto;
                    flex-flow:row wrap;
                    align-content:flex-start;
                    padding: 8px;
                    background:#efefef;
                    border-radius:4px;
                    width:270px;
                    height:100%;
                    margin-bottom: 5px;
                    overflow-y: auto;
                    button{
                        border: 0;
                        border-radius: 0;
                        margin: 10px;
                        background:#525252;
                        box-shadow:0 2px 4px 0 rgba(0,0,0,0.50);
                        width:58px;
                        height:58px;
                        span{
                            font-size:20px;
                            color:#ffffff;
                        }
                    }
                    .selectEmpty{
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        div{
                            text-align: center;
                            span{
                                margin-left: 35px;
                                margin-bottom: 20px;
                                display: block;
                                border: 2px dashed #989898;
                                width:58px;
                                height:58px;
                            }
                            p{
                                font-size: 16px;
                                line-height: 16px;
                                color: #989898;
                            }
                            p:last-child{
                                margin: 8px;
                            }
                        }

                    }
                }
            }
            .dialog-body-right{
                background:#efefef;
                border-radius:4px;
                width:332px;
                height:488px;
                padding: 10px;
                display: flex;
                flex-flow:row wrap;
                align-content:flex-start;
                position: relative;
                .tableNumber{
                    border: 0;
                    margin: 10px;
                    border-radius: 0;
                    background:#525252;
                    box-shadow:0 2px 4px 0 rgba(0,0,0,0.50);
                    width:58px;
                    height:58px;
                    span{
                        display: block;
                        font-size:20px;
                        color:#ffffff;
                        text-align:center;
                        .left-arrow{
                            display: block;
                            width: 12px;
                            height: 21px;
                            background:url(../../../assets/images/left-arrow.png) center no-repeat;
                        }
                        .right-arrow{
                            display: block;
                            width: 20px;
                            height: 21px;
                            background:url(../../../assets/images/right-arrow.png) center no-repeat;
                        }
                    }
                }
                .turn-page{
                    position: absolute;
                    right: 10px;
                    bottom: 10px;
                    button:last-child{
                        margin-left: 6px;
                    }
                }
            }
        }
        .el-dialog__footer{
            height: 78px;
            padding: 0;
            .el-button--primary{
                border: 0;
                margin-right: 20px;
                background-image:linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
                border-radius:4px;
                width:160px;
                height:58px;
                font-size:20px;
                color:#ffffff;
                text-align:center;
            }
            .el-button--default{
                border: 0;
                background:#dee0e7;
                border-radius:4px;
                width:160px;
                height:58px;
                font-size:20px;
                color:#989898;
                text-align:center;
            }
        }
    }
  }
</style>
