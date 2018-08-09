<template>
    <el-dialog title="复制桌位" :visible.sync="dialogVisible" :before-close="handleClose" top="calc((100vh - 664px)/2)" width="642px" class="copyTable" center>
    <div class="dialog-body-left">
        <div class="rollOut">
            <div>
                <el-button v-for="(occupyTable,index1) in occupyTable" :key="occupyTable.id" @click="cleanOccupyTable">{{occupyTable.number}}</el-button>
            </div>
            <el-button @click="occupyTableList(0)">选择台位</el-button>
        </div>
        <div class="switchTo">
            <div>
                <el-button v-for="(copyTable,index2) in copyTable" :key="copyTable.id" @click="cleanCopyTable(index2)">{{copyTable.number}}</el-button>
            </div>
            <el-button @click="freeTableList(1)">选择台位</el-button>
        </div>
    </div>
    <div class="dialog-body-right">
        <div class="seatList" v-for="(item,index) in res" :key="item.id">
            <el-button class="tableNumber" :class="item.classBtn" @click="selectTable(index,item.status)">{{item.number}}</el-button>
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
        <el-button type="primary" @click="copyTableOk">确认</el-button>
        <el-button @click="cancel">取消</el-button>
    </span>
    </el-dialog>
</template>

<script>
import { mapState,mapMutations } from 'vuex';
  export default {
    data() {
      return {
        dialogVisible: false,
        show:true,
        status:'',
        pageCount:22,
        currentPageNum: 1,
        res:{},
        occupyTable:[],
        copyTable:[],
        toIds:[]
      };
    },
    mounted ()  {
    },
    methods: {
        occupyTableList(identity){
            this.status = '1,4';
            this.show = true;
            if(identity == 0){
                this.currentPageNum = 1;
                const params = {
                    url: 'TB000001',
                    data: {
                        currentPageNum:this.currentPageNum,
                        pageCount:this.pageCount,
                        isDelete: '0',
                        shopSn : this.userInfo.shop.shopSn,
                        //shopSn : "B007007",
                        status : this.status
                    }
                }
                this.api.post(params, res=> {
                    this.res = res && res.page.datas;
                    if(this.res){
                        for(let i = 0;i<this.res.length;i++){
                            if(this.res[i].status==1 || this.res[i].status==4){
                                this.res[i].classBtn='tableNumber1';
                            }
                        }
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
                const params = {
                    url: 'TB000001',
                    data: {
                        currentPageNum:this.currentPageNum,
                        pageCount:this.pageCount,
                        isDelete: '0',
                        shopSn : this.userInfo.shop.shopSn,
                        //shopSn : "B007007",
                        status : this.status
                    }
                }
                this.api.post(params, res=> {
                    this.res = res && res.page.datas;
                    if(this.res){
                        for(let i = 0;i<this.res.length;i++){
                            if(this.res[i].status==1 || this.res[i].status==4){
                                this.res[i].classBtn='tableNumber1';
                            }
                        }
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
            }

        },
        freeTableList(identity){
            if(this.occupyTable.length > 0){
                this.status = 0;
                this.show = true;
                if(identity == 1){
                    this.currentPageNum = 1;
                    const params = {
                        url: 'TB000001',
                        data: {
                            currentPageNum:this.currentPageNum,
                            pageCount:this.pageCount,
                            isDelete: '0',
                            shopSn : this.userInfo.shop.shopSn,
                            //shopSn : "B007007",
                            status : this.status,
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
                }else{
                    const params = {
                        url: 'TB000001',
                        data: {
                            currentPageNum:this.currentPageNum,
                            pageCount:this.pageCount,
                            isDelete: '0',
                            shopSn : this.userInfo.shop.shopSn,
                            //shopSn : "B007007",
                            status : this.status,
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
                }
            }else{
                this.$alert('请先选择需要复制的桌位!', '提示',{
                  closeOnClickModal:true,
                  center: true,
                });
                return false;
            }
        },
        pageUp(){
            this.currentPageNum = this.currentPageNum - 1;
            if(this.currentPageNum < 1){
                this.currentPageNum = 1;
            }
            if(this.status == 1){
                this.occupyTableList();
            }else if(this.status == 0){
                this.freeTableList();
            }else{
                return false;
            }

        },
        pageDown(){
            this.currentPageNum = this.currentPageNum + 1;
            if(this.status == 1){
                this.occupyTableList();
            }else if(this.status == 0){
                this.freeTableList();
            }else{
                return false;
            }
        },
        selectTable(index,status){
            if(status == 1 || status == 4){
                if(this.occupyTable.length<1){
                    this.occupyTable.push(this.res[index]);
                }else{
                    this.occupyTable.splice(0,1,this.res[index]);
                }
            }else if(status == 0 && !this.occupyTable.length){
                this.$alert('请先选择被复制桌位!', '提示',{
                    closeOnClickModal:true,
                    center: true,
                });
            }else{
                this.copyTable.push(this.res[index]);
                let s = new Set(this.copyTable);
                this.copyTable = Array.from(s);
            }
        },
        cleanOccupyTable(){
            if(this.copyTable.length < 1){
                this.occupyTable.splice(0,1);
            }else{
                this.$alert('请先清空复制桌位!', '提示',{
                    closeOnClickModal:true,
                    center: true,
                });
                return false;
            }
        },
        cleanCopyTable(index2){
            this.copyTable.splice(index2,1);
        },
        cancel(){
            // this.dialogVisible = false;
            // this.occupyTable=[];
            // this.copyTable=[];
            // this.occupyTableList();
            Object.assign(this.$data, this.$options.data())
        },
        handleClose(){
            // this.dialogVisible = false;
            // this.occupyTable=[];
            // this.copyTable=[];
            // this.occupyTableList();
            Object.assign(this.$data, this.$options.data())
        },
        copyTableOk(){
            if(this.occupyTable.length > 0 && this.copyTable.length > 0){
                for(let i= 0; i< this.copyTable.length;i++){
                    this.toIds.push(this.copyTable[i].id);
                }
                const params = {
                    url: 'TB000010',
                    data: {
                        fromId:this.occupyTable[0].id,
                        toIds: this.toIds.join(",")
                    }
                }
                this.api.post(params, res=> {
                    if(res){
                        this.dialogVisible = false;
                        this.occupyTable = [];
                        this.copyTable = [];
                        this.currentPageNum = 1;
                        this.occupyTableList();
                        this.$emit("copyTable");
                        this.$alert('复制桌位成功!', '提示',{
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
                this.$alert('请查看桌位是否选择完成!', '提示',{
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
  .copyTable{
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
                .rollOut{
                    width: 100%;
                    height: 185px;
                    div{
                        background:#efefef;
                        border-radius:4px;
                        width:250px;
                        height:98px;
                        padding: 10px;
                        display: flex;
                        flex-flow:row wrap;
                        align-content:flex-start;
                        .el-button{
                            margin: 10px;
                            border-radius: 0;
                            background-image:linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
                            box-shadow:0 2px 4px 0 rgba(0,0,0,0.50);
                            width:58px;
                            height:58px;
                        }
                        .el-button:hover{
                            background-image:linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
                            box-shadow:0 2px 4px 0 rgba(0,0,0,0.50);
                        }
                    }
                    .el-button{
                        border: 0;
                        margin-top: 10px;
                        background-image:linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
                        box-shadow:0 4px 8px 0 rgba(0,0,0,0.50);
                        border-radius:4px;
                        width:250px;
                        height:58px;
                        span{
                            font-size:16px;
                            color:#ffffff;
                            text-align:center;
                        }
                    }
                    .el-button:hover{
                        background:#009176;
                        box-shadow:0 0 0 0 rgba(0,0,0,0);
                    }
                }
                .switchTo{
                    width: 100%;
                    height: 300px;
                    overflow: hidden;
                    div{
                        overflow: auto;
                        padding: 0 10px 10px;
                        background:#efefef;
                        border-radius:4px;
                        width:calc(100% + 20px);
                        max-height:232px;
                        min-height:232px;
                        display: flex;
                        flex-flow:row wrap;
                        align-content:flex-start;
                        .el-button{
                            margin: 10px;
                            border-radius: 0;
                            background:#525252;
                            box-shadow:0 2px 4px 0 rgba(0,0,0,0.50);
                            width:56px;
                            height:56px;
                        }
                        .el-button:hover{
                            background:#525252;
                            box-shadow:0 2px 4px 0 rgba(0,0,0,0.50);
                        }
                    }
                    .el-button{
                        border: 0;
                        margin-top: 10px;
                        background-image:linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
                        box-shadow:0 4px 8px 0 rgba(0,0,0,0.50);
                        border-radius:4px;
                        width:250px;
                        height:58px;
                        span{
                            font-size:16px;
                            color:#ffffff;
                            text-align:center;
                        }
                    }
                    .el-button:hover{
                        background:#009176;
                        box-shadow:0 0 0 0 rgba(0,0,0,0);
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
                .tableNumber1{
                    background-image:linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
                    box-shadow:0 2px 4px 0 rgba(0,0,0,0.50);
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
