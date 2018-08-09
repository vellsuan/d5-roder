<template>
    <el-dialog title="拆台" :visible.sync="dialogVisible" width="742px" top="calc((100vh - 664px)/2)" class="sabotage" center>
    <div class="sabotage-left">
        <div class="isSet">
            <span>已选择：</span>
            <input type="text" id="isSet" :id="id" v-model="isSet" value="" disabled/>
        </div>
        <div class="consumer">
            <span>消费客数：</span>
            <input type="text" id="consumer" @focus="showMember($event)" name="consumer" v-model="consumer" value="" autofocus="autofocus"/>
        </div>
        <calculatortwo :input = "input"></calculatortwo>
        <div class="waiter">
            <span>服务员：</span>
            <div>
                <input type="text" v-model="realName" value="" disabled/>
                <el-button @click="selectWaiter">选择</el-button>
            </div>
        </div>
    </div>
    <div class="sabotage-right">
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
    <el-dialog title="选择服务员" :visible.sync="outerVisible" top="31vh" custom-class="changeWaiter" center append-to-body>
        <div class="outListCt">
            <div v-for="(index,realItems) in realNameList" :key="realItems" @click="selectClick(realNameList[realItems].clerkId,index,realNameList[realItems].realName)" v-bind:class="{active:index==qwerqwre}">{{realNameList[realItems].realName}}</div>
        </div>
        <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="outerVisible = false">确定</el-button>
            <!-- <el-button @click="outerVisible = false">取 消</el-button> -->
        </div>
    </el-dialog>
    <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="isSabotageTable">确认</el-button>
        <el-button @click="cancel">取消</el-button>
    </span>
    </el-dialog>
</template>

<script>
import { mapState,mapMutations } from 'vuex';
import calculatortwo from "@/components/calculatorTwo";
  export default {
    components : {
        'calculatortwo':calculatortwo
    },
    data() {
      return {
        id:'',                  //桌子的唯一Id
        tableOrder:'',          //桌子开台生成的唯一标识
        show:true,              //列表左右箭头按钮是否显示
        dialogVisible: false,   //外层弹窗
        outerVisible: false,    //第二级弹窗
        realName:"",            //服务员的名字
        qwerqwre:"0",           //选择服务员根据当前值判断选中颜色
        waiterId:"",            //服务员的id
        res:{},                 //右侧列表的datas
        realNameList:{},        //服务员列表的datas
        pageCount:22,           //每页要展示的数据
        currentPageNum: 1,      //当前页数
        remainder:'',           //拆台时该桌子剩余的座位数
        isSet:'',               //接受选中的桌子的桌号
        consumer:'',             //消费的客数
        input:null
      };
    },
    mounted ()  {
        this.realName = this.userInfo.shopClerK && this.userInfo.shopClerK.realName  ? this.userInfo.shopClerK.realName : ''
        this.waiterId = this.userInfo.shopClerK && this.userInfo.shopClerK.clerkId  ? this.userInfo.shopClerK.clerkId : ''
    },
    methods: {
         showMember(e){
            this.input = e.target;
            if(this.input.name=="consumer"){
                this.consumer = this.input.value
            }
        },
        isSabotage(){
            const params = {
                url: 'TB000001',
                data: {
                    currentPageNum:this.currentPageNum,
                    pageCount:this.pageCount,
                    isDelete: '0',
                    shopSn : this.userInfo.shop.shopSn,
                    //shopSn : "B007007",
                    status : '1,4'
                }
            }
            this.api.post(params, res=> {
                this.res = res && res.page.datas;
                this.realName = this.userInfo.shopClerK.realName;
                this.waiterId = this.userInfo.shopClerK.clerkId
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
            this.isSabotage();

        },
        pageDown(){
            this.currentPageNum = this.currentPageNum + 1;
            this.isSabotage();
        },
        cancel(){
            // this.dialogVisible = false;
            // this.isSet = '';
            // this.consumer = '';
            // this.realName = '';
            Object.assign(this.$data, this.$options.data())
        },
        turnTable(index){
            this.id = this.res[index].id;
            this.isSet = this.res[index].number;
            this.remainder = this.res[index].remainder;
        },
        selectWaiter(){
            let branch = this.$store.state.userInfo.shop.branch;
            let shopId = this.$store.state.userInfo.shop.shopId;
            const params = {
                url: "PR100701",
                data: {
                branch: branch,
                shopId: shopId,
                isUse:1
                }
            };
            this.api.post(params, res => {
                this.outerVisible = true;
                this.realNameList = res.page.datas
            });
        },
        selectClick(clerkId,index,realName){
            this.waiterId = clerkId;
            this.qwerqwre = index;
            this.realName = realName;
        },
        isSabotageTable(){
            if(this.isSet != ""){
                if(this.consumer <= this.remainder && this.consumer != "" && this.consumer > 0){
                    let timestamp = Date.parse(new Date());
                    timestamp = timestamp / 1000;
                    this.tableOrder = this.isSet +"_"+ timestamp;
                    const params = {
                        url: 'TB000007',
                        data: {
                            id:this.id,
                            tableOrder:this.tableOrder,
                            type: 6,
                            usedNumber: this.consumer,
                            waiterId: this.waiterId,
                            waiterName: this.realName
                        }
                    }
                    this.api.post(params, res=> {
                        if(res){
                            this.dialogVisible = false;
                            this.isSet = '';
                            this.consumer = '';
                            this.realName = '';
                            this.currentPageNum = 1;
                            this.isSabotage();
                            this.$emit("sabotage");
                            this.$alert('拆台成功!', '提示',{
                                closeOnClickModal:true,
                                center: true,
                            });
                        }
                    });
                }else{
                    this.$message.error('填写人数大于剩余座位数或为空!');
                    return false;
                }
            }else{
                this.$message.error('请点击右侧桌号选择需要拆台的桌子!');
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
  #app{
    .sabotage{
        .el-dialog{
            height: 656px;
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
                .sabotage-left{
                    margin-right: 20px;
                    width:350px;
                    height:488px;
                    display: flex;
                    flex-direction:column;
                    .isSet{
                        width: 100%;
                        display: flex;
                        margin-bottom: 10px;
                        span{
                            width: 100px;
                            font-size:16px;
                            color:#2d2d2d;
                            margin-top: 11px;
                        }
                        input{
                            outline: none;
                            border: 0;
                            background:#efefef;
                            border-radius:4px;
                            width:248px;
                            height:48px;
                            font-size:16px;
                            color:#2d2d2d;
                            text-align:left;
                            padding-left: 20px;
                        }
                    }
                    .consumer{
                        width: 100%;
                        display: flex;
                        margin-bottom: 20px;
                        span{
                            width: 100px;
                            font-size:16px;
                            color:#2d2d2d;
                            margin-top: 11px;
                        }
                        input{
                            outline: none;
                            border: 0;
                            background:#efefef;
                            border-radius:4px;
                            width:248px;
                            height:48px;
                            font-size:16px;
                            color:#2d2d2d;
                            text-align:left;
                            padding-left: 20px;
                        }
                    }
                    .calculatorTwo{
                        margin: 20px 0;
                        flex:0;
                    }
                    .waiter{
                        width: 100%;
                        display: flex;
                        margin:20px 0 10px 0;
                        span{
                            width: 100px;
                            font-size:16px;
                            color:#2d2d2d;
                            margin-top: 11px;
                        }
                        div{
                            border: 0;
                            display: flex;
                            background:#efefef;
                            border-radius:4px;
                            width:248px;
                            height:48px;
                            input{
                                outline: none;
                                border: 0;
                                background:#efefef;
                                border-radius:4px;
                                width:150px;
                                height:48px;
                                font-size:16px;
                                color:#2d2d2d;
                                text-align:left;
                                padding-left: 20px;
                            }
                            .el-button{
                                border:0;
                                background:#1bbc9b;
                                border-radius:4px;
                                width:98px;
                                height:48px;
                                span{
                                    font-size:16px;
                                    color:#ffffff;
                                    text-align:center;
                                }
                            }
                        }
                    }
                }
                .sabotage-right{
                    background:#efefef;
                    border-radius:4px;
                    width:332px;
                    height:488px;
                    display: flex;
                    flex-flow:row wrap;
                    align-content:flex-start;
                    position: relative;
                    padding: 10px;
                    .seatList{
                        .el-button{
                            border:0;
                            border-radius: 0;
                            margin: 10px;
                            background-image:linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
                            box-shadow:0 2px 4px 0 rgba(0,0,0,0.50);
                            width:58px;
                            height:58px;
                            span{
                                font-size:20px;
                                color:#ffffff;
                                text-align:center;
                            }
                        }
                    }
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

  }
   .el-dialog__wrapper{
    .changeWaiter{
            width: 656px;
            .el-dialog__header{
                padding-top: 20px;
                padding-bottom: 30px;
                .el-dialog__close{
                    display: none;
                }
            }
            .el-dialog__body {
                padding: 0;
                margin-bottom: 20px;
                .outListCt{
                    display: flex;
                    padding:0 30px;
                    flex-wrap: wrap;
                    height: 250px;
                    align-content: flex-start;
                    div{
                        padding-top: 8px;
                        cursor:pointer;
                        margin: 16px;
                        background:#ffffff;
                        box-shadow:0 2px 4px 0 rgba(0,0,0,0.10);
                        border-radius:4px;
                        min-width: 86px;
                        height:40px;
                        font-size:14px;
                        color:#2d2d2d;
                        letter-spacing:0;
                        text-align:center;

                    }
                    .active{
                        background:#1bbc9b;
                        color: #ffffff;
                    }
                }
            }
            .el-dialog__footer{
                padding: 0;
                padding-bottom: 20px;
                .dialog-footer{
                    .el-button--primary{
                        border: 0;
                        background-image:linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
                        border-radius:4px;
                        width:160px;
                        height:58px;
                        font-size:20px;
                        color:#ffffff;
                        text-align:center;
                        margin-right: 20px;
                    }
                    .el-button--default{
                        border: 0;
                        background-image:linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
                        border-radius:4px;
                        width:160px;
                        height:58px;
                        font-size:20px;
                        color:#fff;
                        letter-spacing:0;
                        text-align:center;
                    }
                }
            }
        }
   }
</style>
