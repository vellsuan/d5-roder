<template>
  <el-dialog
    title="新增借阅"
    class='addBook'
    :visible.sync="addVisible"
    @close="$emit('update:showBook', false)"
    :showBook="showBook"
    width="40%"
    top='35vh'
    center>
    <div class="dialog-content">
      <el-input v-model="booksInfo" placeholder="条码号:"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button class="confirm" @click="addBook">确 定</el-button>
        <el-button class="cancel" @click="addVisible = false">取 消</el-button>
      </span>
    </div>
  </el-dialog>
</template>
<script>
import { mapState } from "vuex";
export default {
  data () {
    return {
      addVisible: false,
      booksInfo:'',
    }
  },
  props:{
    showBook:{
      type:Boolean,
      default:false
    }
  },
  watch: {
    showBook(){
      this.addVisible = this.showBook
    }
  },
  methods: {
    addBook(){
      if(!(/^[\s]{0,}$/.test(this.booksInfo)) && this.bookCode &&this.bookCode.indexOf(this.booksInfo) === -1){  // 校验非空并且没有借阅这本书
        const params = {
          url:'BI00005',
          data:{
            bookCode:this.booksInfo,
          }
        }
        this.api.post(params,(res)=>{
          this.$store.commit("saveBookCode", this.booksInfo);
          this.$store.commit("saveTableData", res.entity);
          this.addVisible = false
          this.booksInfo=''
        },(msg)=>{
          this.$message({             duration:1000,
            showClose: true,
            message: msg,
            type: 'error'
          });
        })
      }else{
        this.$message({             duration:1000,
            showClose: true,
            message: '条码输入有误',
            type: 'error'
          });
      }
    }
  },
  computed: {
    ...mapState([
        'bookCode'
    ]),
  },
}
</script>
<style lang="scss">
  .addBook{
    border-radius: 4px;
    .dialog-content{
      width: 350px;
      margin: 0 auto;
      .el-input__inner{
        background:#efefef;
        border:1px solid #dee0e7;
        border-radius:4px;
        width:348px;
        height:46px;
      }
      .dialog-footer{
        margin-top: 30px;
        width: 350px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .el-button{
          width:160px;
          height:58px;
          font-size:20px;
          color:#ffffff;
        }
        .cancel{
          background:#dee0e7;
          color:#989898;
        }
        .newadd{
          width:350px;
          height:58px;
          margin: 20px 0 0;

        }
      }
    }
  }
</style>
