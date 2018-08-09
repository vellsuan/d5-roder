<template>
  <div class="borrow-table">
    <el-table :data="tableData.slice((currentPage-1)*10,currentPage*10)" stripe style="width: 100%" height="10">
      <el-table-column align="center" prop="bookName" label="图书名称" min-width="180"></el-table-column>
      <el-table-column align='center' :formatter="dateFormat"  prop="borrowTime" label="借书时间" min-width="180"></el-table-column>
      <el-table-column align='center' :formatter="dateFormat"  prop="returnTime" label="还书时间" min-width="180"></el-table-column>
      <el-table-column align='center' label="操作" min-width="180">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="borrow-table-ctrl">
      <div class="newbook">
        <el-button @click="open">新增</el-button>
        <el-button @click='enterBorrow'>确认借阅</el-button>
      </div>
      <div class="borrow-table-ctrl-page">
        <p class="pages">共{{tableData.length}}条记录 共{{Math.ceil(tableData.length/10)}}页</p>
        <div class="block">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="10"
            layout="prev,slot,next"
            :total="tableData.length">
            <slot><span>第{{currentPage}}页</span></slot>
          </el-pagination>
        </div>
      </div>
    </div>
    <add-book :showBook.sync="showBook"/>
  </div>
</template>
<script>
import addBook from "../dialog/addBook";
import { mapState } from "vuex";
export default {
  components : {
    'add-book':addBook
  },
  data () {
    return {
      showBook:false,
      currentPage:1,
      msg:null
    }
  },
   methods: {
     dateFormat:function(row, column) {
      var date = row[column.property];
      if (date == undefined) {
        return "";
      }
      return this.$moment(date).format("YYYY-MM-DD HH:mm:ss");
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
      this.bookCode.splice(index,1)
      this.$store.commit("spliceTableData", rows);
      this.$store.commit("spliceBookCode", this.bookCode);
    },
    handleCurrentChange(){
      const SELECTWRAP_DOM = document.querySelector('.el-table__body-wrapper');
      SELECTWRAP_DOM.scrollTop = 0
    },
    open(){
      this.showBook = true
    },
    enterBorrow(){
      if(this.bookCode.length){
        const params = {
          url:'BI00306',
          data:{
            booksInfo:this.bookCode.join(','),
            deposit:this.readUser.user.account.foregiftAmount,
            payType:'1',
            shopSn:this.userInfo.shop.shopSn,
            userId:this.readUser.user.userId
          }
        }
        this.api.post(params,(res)=>{
          console.log(res)
          this.$store.commit("spliceTableData", []);
          this.$store.commit("spliceBookCode", []);
          // this.$message({             duration:1000,
          //   showClose: true,
          //   message: '借阅成功',
          //   type: 'success'
          // });
          this.msg && this.msg.close()
          this.msg = this.$notify({
            title: '成功',
            message: '借阅成功',
            type: 'success',
            duration:2000
          });
        },(msg)=>{
          console.log(msg);
          this.$message({
            duration:2000,
            showClose: true,
            message: msg,
            type: 'error'
          });
        })
      }else{
        // this.$message({             duration:1000,
        //     showClose: true,
        //     message: '请添加借阅图书',
        //     type: 'error'
        //   });

        this.msg && this.msg.close()

        this.msg = this.$notify.error({
            title: '错误',
            showClose:false,
            message: '请添加借阅图书',
            duration:2000
          });
      }
    }
  },
  computed: {
    ...mapState([
        'tableData',
        'bookCode',
        'readUser',
        'userInfo'
    ]),
  },
}
</script>
<style lang="scss">
.borrow-table {
  flex: 1;
  display: flex;
  flex-direction: column;
  .borrow-table-ctrl {
    height: 70px;
    background: #ffffff;
    padding: 0 20px 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .newbook > .el-button {
      background-image: linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
      border-radius: 4px;
      border: none;
      color: #fff;
      width: 104px;
      height: 48px;
      font-size: 16px;
    }
    .borrow-table-ctrl-page {
      display: flex;
      font-size: 16px;
      .pages {
        padding: 16px 10px 0 0;
      }
      .el-pagination {
        display: flex;
        .btn-prev,
        .btn-next {
          background: linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
          border-radius: 4px;
          width: 60px;
          height: 48px;
          .el-icon {
            font-size: 22px;
            color: #fff;
            font-weight: bold;
          }
        }
        span {
          display: flex;
          justify-content: center;
          align-items: center;
          border: 2px solid #1bbc9b;
          border-radius: 4px;
          font-size: 16px;
          width: 60px;
          height: 48px;
          margin: 0 20px;
        }
      }
    }
  }
  .el-button {
    width: 92px;
    height: 48px;
    font-size: 16px;
    color: #ffffff;
  }
}
</style>

