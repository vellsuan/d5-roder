<template>
    <el-dialog title="解锁桌位" :visible.sync="dialogVisible" width="642px" top="calc((100vh - 664px)/2)" class="lockSeat" :before-close="handleClose" center>
    <div class="dialog-body-left">
        <div class="selectTable" v-if="selectTable.length > 0">
            <el-button v-for="(lockTable,index1) in selectTable" :key="lockTable.id" @click="cleanLockTable(index1)">{{lockTable.number}}</el-button>
        </div>
        <div class="selectTable" v-else>
            <div class="selectEmpty">
                <div>
                    <span></span>
                    <p>点击右侧选择</p>
                    <p>需要解锁的座位</p>
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
        <el-button type="primary" @click="isOkUnlock">确认</el-button>
        <el-button @click="cancel">取消</el-button>
    </span>
    </el-dialog>
</template>

<script>
import { mapState,mapMutations } from 'vuex';
  export default {
    data() {
      return {
        show:true,
        dialogVisible: false,
        res:[],
        pageCount:22,
        currentPageNum: 1,
        selectTable:[],
        idStr:[]
      };
    },
    mounted ()  {
      Array.prototype.remove = function(val) {
        var index = this.indexOf(val);
        if (index > -1) {
          this.splice(index, 1);
        }
      };
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
                    isLocked : 1
                }
            }
            this.api.post(params, res=> {
                this.res = res && res.page.datas;
            },msg=>{
                if(msg){
                    this.currentPageNum = 1;
                }else{
                    this.currentPageNum = this.currentPageNum -1;
                    if(this.currentPageNum < 1){
                        this.currentPageNum = 1;
                    }
                    this.$alert('已经没有更多了!', '提示',{
                        closeOnClickModal:true,
                        center: true,
                    });
                    return false;
                }

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
          console.log(this.idYan(this.selectTable,this.res[index].id))
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
        isOkUnlock(){
            if(this.selectTable.length > 0){
                for(let i= 0; i< this.selectTable.length;i++){
                    this.idStr.push(this.selectTable[i].id);
                }
                const params = {
                    url: 'TB000013',
                    data: {
                        idStr: this.idStr.join(","),
                        isLocked: 0
                    }
                }
                this.api.post(params, res=> {
                    if(res){
                        this.dialogVisible = false;
                        this.selectTable = [];
                        this.idStr = [];
                        this.res = {};
                        this.currentPageNum = 1;
                        this.$emit("unlockSeat");
                        this.$alert('解锁桌位成功!', '提示',{
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
                this.$alert('请先选择需要解锁的桌位!', '提示',{
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

<style lang="scss"></style>
