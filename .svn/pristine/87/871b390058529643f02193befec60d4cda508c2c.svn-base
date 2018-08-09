<template>
  <el-dialog
    title="图书借阅"
    :visible.sync="centerDialogVisible"
    @close="$emit('update:show', false)"
    :show="show"
    width="40%"
    class="lendBook"
    top='10vh'
    center>
    <div class="dialog-content">
      <el-input v-model="tlephone" @focus="showNum($event)" placeholder="输入会员电话："></el-input>
      <calculator-two :input="input"></calculator-two>
      <span slot="footer" class="dialog-footer">
        <el-button class="confirm" @click="readBook">确 定</el-button>
        <el-button class="cancel" @click="centerDialogVisible = false">取 消</el-button>
        <el-button class="newadd" @click="addVIP">新增会员</el-button>
      </span>
    </div>
  </el-dialog>
</template>
<script>
import calculatorTwo from "@/components/calculatorTwo";
import { mapState } from "vuex";
export default {
  components : {
    'calculator-two':calculatorTwo
  },
  data () {
    return {
      centerDialogVisible: this.show,
      tlephone:'',
      input:null,
      msg:null
    }
  },
  props: {
    show:{
      type:Boolean,
      default:false
    },
    vipShow:{
      type:Object
    },
    depositShow:{
      type:Object
    },
  },
  watch: {
    show(){
      this.centerDialogVisible = this.show
    }
  },
  methods: {
    showNum(e){
      this.input = e.target
      this.tlephone = this.input.value
    },
    addVIP(){
      this.centerDialogVisible = false
      this.vipShow.showAdd = true
    },
    readBook(){
      if((/^1[34578]\d{9}$/.test(this.tlephone))){
        const params = {
          url:'CC100003',
          data:{
            phone:this.tlephone
          }
        }
        this.api.post(params,(res)=>{
          Object.assign(res.user,{account:{ foregiftAmount:0,
            foregiftNeedAmount:0}})
          console.log(res.user.account);
          this.$store.commit("saveReadUser", res);
          const params = {
            url:'BI00308',
              data:{
                currentPageNum:1,
                orderStatus:1,
                pageCount:5,
                shopSn:this.userInfo.shop.shopSn,
                userId:res.user.userId
              }
          }
          this.api.post(params,(page)=>{
            if(res.user.privilegeMember == "1" || res.grade.sort >=3){
                this.$router.push({path:"/content/read/borrow"})
                //this.$store.commit('saveActiveIndex','borrow')
              }else{
                this.centerDialogVisible = false
                this.msg && this.msg.close()
                this.msg = this.$notify({
                  title: '提示',
                  message: '您不是优享会员或您的会员等级低于三级',
                  type: 'warning',
                  duration:2000
                });
              }
              this.tlephone=''
            },(msg)=>{
              this.$message({
                duration:1000,
                showClose: true,
                message: msg,
                type: 'error'
              });
            })

        },(msg)=>{
          this.$message({
            duration:1000,
            showClose: true,
            message: msg,
            type: 'error'
          });
        })
      }else{
        this.$message({
          duration:1000,
            showClose: true,
            message: '手机号输入有误',
            type: 'error'
          });
      }
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
  .lendBook{
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
      .calculatorTwo{
        margin: 20px 0 30px;
      }
      .dialog-footer{
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
