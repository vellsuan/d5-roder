<template>
  <div class="return-table">
    <el-table :data="returnData.slice((currentPage-1)*10,currentPage*10)" stripe style="width: 100%" height="10">
      <el-table-column align="center" prop="bookName" label="图书名称" ></el-table-column>
      <el-table-column align='center' prop="borrowTime" min-width="170" :formatter="dateFormat" label="借书时间"></el-table-column>
      <el-table-column align='center' min-width="170"  prop="mustReturnTime" :formatter="dateFormat" label="还书时间"></el-table-column>
      <el-table-column align='center' min-width="170"  :formatter="dateFormat" prop="returnTime" label="实际还书时间"></el-table-column>
      <el-table-column align='center' prop="expireDayNum" :formatter="dayFormat" label="逾期时间"></el-table-column>
      <el-table-column align='center' prop="other" label="其他原因"></el-table-column>
      <el-table-column align='center' class-name='fine'	:formatter="moneyFormat"  prop="money" label="罚款"></el-table-column>
      <el-table-column align='center' label="操作" min-width="110">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, returnData)"
            type="text"
            size="small">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="return-table-ctrl">
      <div class="newbook">
        <el-button  @click="open">新增</el-button>
        <p>合计罚金：<span>{{columnTotal}}元</span></p>
        <el-button @click="enReturn">确认还书</el-button>
      </div>
      <div class="return-table-ctrl-page">
        <p class="pages">共{{returnData.length}}条记录 共{{Math.ceil(returnData.length/10)}}页</p>
        <div class="block">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="10"
            layout="prev,slot, next"
            :total="returnData.length">
            <slot><span>第{{currentPage}}页</span></slot>
          </el-pagination>
        </div>
      </div>
    </div>
    <add-return  :showAdd.sync="showAdd"/>
  </div>
</template>
<script>
import addReturn from "../dialog/addReturn";
import { mapState } from "vuex";
export default {
  components : {
    'add-return':addReturn
  },
  data () {
    return {
      showAdd:false,
      currentPage:1,
      msg:null
    }
  },
   methods: {
    open(){
      this.showAdd = true
    },
    dayFormat:function(row, column) {
      var data = row[column.property];
      if (data == undefined) {
        return "";
      }
      return data + '天';
    },
    moneyFormat:function(row, column) {
      var data = row[column.property];
      if (data == undefined) {
        return "";
      }
      return data + '元';
    },
    dateFormat:function(row, column) {
      var date = row[column.property];
      if (date == undefined) {
        return "";
      }
      return this.$moment(date).format("YYYY-MM-DD HH:mm:ss");
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
      this.giveBackbooks.splice(index,1)
      this.$store.commit("spliceReturnData", rows);
      this.$store.commit("spliceGiveBackbooks", this.giveBackbooks);
    },
    handleCurrentChange(){
      const SELECTWRAP_DOM = document.querySelector('.el-table__body-wrapper');
      SELECTWRAP_DOM.scrollTop = 0
    },
    enReturn(){
      if(this.giveBackbooks.length){
        if(this.columnTotal != 0){
          this.$router.push({path:`/content/payment/3`,query:{columnTotal:this.columnTotal}})
        }else{
          const params = {
            url:'BI00307',
            data:{
              giveBackbooks:this.giveBackbooks.join(','),
              payTotalPrice:this.columnTotal,
              payType:4, // 没有罚款时的还书方式
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
          },(msg)=>{
            this.$message({
              duration:1000,
              showClose: true,
              message: msg,
              type: 'error'
            });
          })
        }
      }else{
        // this.$message({             duration:1000,
        //     showClose: true,
        //     message: '请添加需要归还的图书',
        //     type: 'error'
        //   });
        this.msg && this.msg.close()

        this.msg = this.$notify.error({
            title: '错误',
            showClose:false,
            message: '请添加需要归还的图书',
            duration:2000
          });
      }
    }
  },
  computed: {
    ...mapState([
        'returnData',
        'giveBackbooks',
        'readUser',
        'userInfo'
    ]),
    columnTotal(){
      return this.returnData.map(row => row.money).reduce((acc, cur) => (cur + acc), 0).toFixed(2)
    }
  },
}
</script>
<style lang="scss">
  .return-table{
    flex:1;
    display: flex;
    flex-direction: column;
    .fine{
      color:#ea5414;
    }
    .return-table-ctrl{
      height: 70px;
      background:#ffffff;
      padding: 0 20px 0 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .newbook{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .el-button{
          background-image:linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
          border-radius:4px;
          border: none;
          color:#fff;
          width:104px;
          height:48px;
          font-size: 16px;
        }
        p{
          padding: 0 20px 0 40px;
        }

      }
      .return-table-ctrl-page{
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
    .el-button{
      width:92px;
      height:48px;
      font-size:16px;
      color:#ffffff;
    }
  }
</style>


