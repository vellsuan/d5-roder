<template>
  <div class="lend-table">
    <el-table :data="lendData" stripe style="width: 100%" height="10">
      <el-table-column align="center" prop="bookName" label="图书名称" ></el-table-column>
      <el-table-column align='center' width="178" :formatter="dateFormat"  prop="borrowTime" label="借书时间"></el-table-column>
      <el-table-column align='center' :formatter="dateFormat"  width="178" prop="mustReturnTime" label="还书时间"></el-table-column>
      <el-table-column align='center' width="178" :formatter="dateFormat" prop="returnTime" label="实际还书时间"></el-table-column>
      <el-table-column align='center' :formatter="dayFormat"  prop="expireDayNum" label="逾期时间"></el-table-column>
      <el-table-column align='center' :formatter="whyFormat" prop="exp1" label="其他原因"></el-table-column>
      <el-table-column align='center' :formatter="moneyFormat"  prop="payPrice" label="罚款"></el-table-column>
      <el-table-column align='center' :formatter="statusFormat" prop="orderStatus" label="状态"></el-table-column>
    </el-table>
    <div class="lend-table-ctrl">
      <div class="lend-table-ctrl-page">
        <p class="pages">共{{totalRowCount}}条记录 共{{totalPage}}页</p>
        <div class="block">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="currentPageNum"
            :page-size="pageCount"
            layout="prev,slot, next"
            :total="totalRowCount">
            <slot><span>第{{currentPageNum}}页</span></slot>
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data () {
    return {
      lendData:[],
      currentPageNum:1,
      totalPage:1,
      totalRowCount:1,
      pageCount:10
    }
  },
  mounted () {
    this.postajax(1)
  },
   methods: {
     dayFormat:function(row, column) {
      var data = row[column.property];
      if (data == undefined || data == '0') {
        return "";
      }
      return data + '天';
    },
    moneyFormat:function(row, column) {
      var data = row[column.property];
      if (data == undefined || data == '0') {
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
    statusFormat:function(row, column) {
      var data = row[column.property];
      if (data == 1) {
        return "借阅中";
      }else if(data == 2){
        return "正常归还";
      }else if(data == 3){
        return "逾期归还";
      }else{
        return ''
      }
    },
    whyFormat:function(row, column) {
      var data = row[column.property];
      if (data == 0) {
        return "图书丢失";
      }else if(data == 1){
        return "破损严重";
      }else{
        return ''
      }
    },
    handleCurrentChange(val){
      this.postajax(val)
      const SELECTWRAP_DOM = document.querySelector('.el-table__body-wrapper');
      SELECTWRAP_DOM.scrollTop = 0
    },
    postajax(val){
      const params = {
        url:'BI00308',
          data:{
            currentPageNum:val,
            orderStatus:'',
            pageCount:this.pageCount,
            shopSn:this.userInfo.shop.shopSn,
            userId:this.readUser.user.userId
          }
      }
      this.api.post(params,(res)=>{
          this.lendData = res.page.datas
          this.totalRowCount = Number(res.page.totalRowCount)
          this.totalPage = Number(res.page.totalPage)
          console.log(res)
        },(msg)=>{
          this.$message({             duration:1000,
            showClose: true,
            message: msg,
            type: 'error'
          });
        })
    }
  },
  computed: {
    ...mapState([
        'readUser',
        'userInfo',
    ]),
  },
}
</script>
<style lang="scss">
  .lend-table{
    flex:1;
    display: flex;
    flex-direction: column;
    .lend-table-ctrl{
      height: 70px;
      background:#ffffff;
      padding: 0 20px 0 30px;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .lend-table-ctrl-page{
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


