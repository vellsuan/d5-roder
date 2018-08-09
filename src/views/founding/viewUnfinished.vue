<template>
    <div class="checkReck">
        <div class="searchList">
            <div class="searchContent">
                <el-row>
                    <el-col :span="6">
                        <div class="grid-content bg-purple">
                            <span>单号</span>
                            <input type="text" v-model="journalNo" />
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple">
                            <span>桌类</span>
                            <input type="text" v-model="tableCategory"/>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple">
                            <span>收款员</span>
                            <input type="text" v-model="payee"/>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple">
                            <span>订单号</span>
                            <input type="text" v-model="orderSn" />
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple">
                            <span>机号</span>
                            <input type="text" v-model="machineNumber" />
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple">
                            <span>桌位</span>
                            <input type="text" v-model="deskNo" />
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple">
                            <span>班次</span>
                            <input type="text" v-model="shift" />
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple">
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="searchBtn">
                <el-button @click="searchBtn">搜索</el-button>
                <router-link to="found">
                    <el-button>返回<br/>[ESC]</el-button>
                </router-link>
            </div>
        </div>
        <div class="checkReckList">
            <div class="checkReckList-table">
                <el-table :data="tableData" stripe style="width: 100%;overflow-y:auto" @row-click="viewDetails" highlight-current-row>
                <el-table-column align="center" prop="deskNo" label="桌位" width="50"></el-table-column>
              <!--  <el-table-column align="center" prop="journalNo" label="账单编号" width="70"></el-table-column>-->
                <!--<el-table-column align="center" prop="completeTime" label="结账时间" width="80"></el-table-column>-->
                <el-table-column align="center" prop="zheKou" label="折扣" width="50"></el-table-column>
                <el-table-column align="center" prop="zheRang" label="折让" width="50"></el-table-column>
               <!-- <el-table-column align="center" prop="moLing" label="抹零" width="40"></el-table-column>-->
                <el-table-column align="center" prop="person" label="顾客数" width="55"></el-table-column>
                <el-table-column align="center" prop="orgPrice" label="项目小计金额" width="80"></el-table-column>
                <el-table-column align="center" prop="preConsume" label="人均消费" width="60"></el-table-column>
                <el-table-column align="center" prop="allprice" label="应付" width="50"></el-table-column>
                <el-table-column align="center" prop="fsMoney" label="奉送金额" width="60"></el-table-column>
                <el-table-column align="center" prop="printCount" label="打印次数" width="60"></el-table-column>
                <el-table-column align="center" prop="orderSn" label="订单号" width="65"></el-table-column>
                <el-table-column align="center" prop="invoiceValue" label="发票金额" width="60"></el-table-column>
                <el-table-column align="center" prop="invoiceCount" label="发票数量" width="60"></el-table-column>
                <el-table-column align="center" label="">
                     <template slot-scope="scope">
                        <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">查看明细</el-button>
                    </template>
                </el-table-column>
                </el-table>
                <div class="check-table-ctrl">
                    <div class="check-table-ctrl-page">
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
        </div>
        <check-detail ref="checkDetail"></check-detail>
    </div>
</template>
<script>
import { mapState } from "vuex";
import checkDetail from './dialog/checkDetail'; //菜品明细
export default {
    components: {
        'check-detail':checkDetail
    },
    data () {
        return {
            currentPage:1,
            totalRowCount:0,
            totalPage:0,
            tableData: null,
            number:'',        //右侧数量
            payType:'',   //付款名称
            paymentAmount:'', //付款金额
            journalNo:'',     //单号
            deskNo:'',        //桌位
            orderSn:'',       //订单号
            tableCategory:'', //桌子类别
            payee:'',         //收款员
            machineNumber:'', //机号
            shift:'',          //班次
        }
    },
    created () {
        this.getBillList(1);
    },
    methods: {
        getBillList(val){
            const params = {
                url: 'POS00001',
                data: {
                    currentPageNum:val,
                    pageCount:6,
                    deskNo : this.deskNo,
                    journalNo : this.journalNo,
                    orderSn : this.orderSn,
                    payStatus: 0,
                    table : this.tableCategory,
                    number : this.machineNumber,
                    classes : this.shift,
                    acceptMan : this.payee,
                    shopSn : this.userInfo.shop.shopSn
                }
            }
            this.api.post(params, res=> {
                res.page.datas.forEach(content=>{
                    content.completeTime = content.completeTime == 0 ? '' : this.$moment(content.completeTime).format("YYYY-MM-DD HH:mm:ss")
                })
                this.tableData = res.page.datas;
                this.totalPage = Number(res.page.totalPage);
                this.totalRowCount = Number(res.page.totalRowCount);
            },msg=>{
                this.tableData = null;
                this.$alert('查无数据!', '提示',{
                    closeOnClickModal:true,
                    center: true,
                });
                return false;
            });
        },
        searchBtn(){
            this.getBillList(1);
        },
        // 分页按钮
        handleCurrentChange(val) {
            this.getBillList(val);
            const SELECTWRAP_DOM = document.querySelector('.el-table__body-wrapper');
            SELECTWRAP_DOM.scrollTop = 0
        },
        handleEdit(index, row) {
            this.$refs.checkDetail.dialogTableVisible = true;
            this.$refs.checkDetail.dishesDetail(1,row.orderSn);
        },
        viewDetails(val){
            return;
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
    .checkReck{
        background: #2c2c2c;
        flex:1;
        display: flex;
        width: 100%;
        padding: 5px 10px 0;
        flex-direction:column;
        .searchList{
            width: 100%;
            background:#254a42;
            box-shadow:0 4px 8px 0 rgba(0,0,0,0.50);
            height:120px;
            padding: 10px 20px;
            display: flex;
            .searchContent{
                flex: 1;
                  .el-row {
                        margin-bottom: 10px;
                        &:last-child {
                        margin-bottom: 0;
                        }
                        .grid-content {
                            border-radius: 4px;
                            min-height: 36px;
                            display: flex;
                            margin-bottom: 10px;
                            span{
                                white-space: nowrap;
                                width: 20%;
                                font-size:14px;
                                color:#ffffff;
                                letter-spacing:0;
                                text-align:center;
                                margin:13px 5% 0 0;
                            }
                            input{
                                padding: 0 20px;
                                border: 0;
                                outline: none;
                                font-size:14px;
                                color: #ffffff;
                                background-image:linear-gradient(-180deg, #258876 0%, #258876 100%);
                                box-shadow:0 2px 2px 0 rgba(0,0,0,0.10);
                                border-radius:4px;
                                width:72%;
                                height:44px;
                            }
                        }
                    }
                    .el-col {
                        border-radius: 4px;
                    }

            }
            .searchBtn{
                display: flex;
                margin-left:20px;
                button{
                    border: none;
                    border-radius:4px;
                    width:85px;
                    height:100px;
                    font-size:14px;
                    color:#ffffff;
                    text-align:center;
                }
                button:first-child{
                    margin-right: 20px;
                    background-image:linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
                }
                button:last-child{
                    background-image:linear-gradient(0deg, #ea5414 0%, #ff8f5f 98%);
                }
            }
        }
        .checkReckList{
            flex: 1;
            display: flex;
            margin-bottom:30px;
            .checkReckList-table{
                flex: 1;
                display: flex;
                flex-direction: column;
                .el-table{
                    .current-row>td{
                        background:#1bbc9b;
                        color: #fff;
                    }
                    .el-table__header-wrapper{
                        font-size:12px;
                        color:#989898;
                        letter-spacing:0;
                        .el-table__header{
                            .has-gutter{
                                .cell{
                                    padding: 0 0;
                                }
                            }
                        }
                    }
                    .el-table__body-wrapper{
                        font-size:12px;
                        color:#2d2d2d;
                        .el-table__body{
                            .el-table__row{
                                td{
                                    padding: 8px 3px;
                                    .cell{
                                        padding: 0 0;
                                        & > .el-button{
                                            background:#1bbc9b;
                                            border-radius:4px;
                                            width:92px;
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
                        }
                    }
                }
                .check-table-ctrl{
                    height: 70px;
                    background:#ffffff;
                    padding: 0 20px 0 30px;
                    display: flex;
                    flex-direction:row-reverse;
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
                    .check-table-ctrl-page{
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
    }
</style>
