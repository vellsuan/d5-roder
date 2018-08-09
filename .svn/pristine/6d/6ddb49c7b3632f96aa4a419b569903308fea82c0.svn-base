<template>
  <el-dialog
    title="提示"
    :visible.sync="deposit"
    @close="$emit('update:showMoney', false)"
    :showMoney="showMoney"
    width="410px"
    top='30vh'
    class="reDeposit"
    center>
    <p>用户:{{readUser.user.nickName}}</p>
    <p>押金:{{readUser.user.account.foregiftAmount || 0}}元</p>
    <p>差额:{{(readUser.user.account.foregiftNeedAmount - readUser.user.account.foregiftAmount).toFixed(2)}}元</p>
    <p>押金不足<span>{{readUser.user.account.foregiftNeedAmount}}元</span>，不支持借阅功能</p>
    <span slot="footer" class="dialog-footer">
      <el-button class="confirm" @click="pay">补交押金</el-button>
      <el-button class="cancel" v-if="!readUser.user.account.foregiftAmount" @click="deposit = false">取 消</el-button>
      <el-button class="confirm" v-else @click="reDeposit">退还押金</el-button>

    </span>
  </el-dialog>
</template>
<script>
import { mapState } from "vuex";
export default {
  data () {
    return {
      deposit:this.showMoney
    }
  },
  methods: {
    pay(){
      this.$router.push({path:"/content/payment/2"})
      this.deposit = false
    },
    reDeposit(){
      this.$router.push({path:"/content/payment/1"})
      this.deposit = false
    }
  },
  props: {
    showMoney:{
      type:Boolean
    }
  },
  watch: {
    showMoney(){
      this.deposit = this.showMoney
    }
  },
  computed: {
    ...mapState([
        'readUser'
    ]),
  },
}
</script>
<style lang="scss">
  .reDeposit{
    border-radius: 8px;
    p{
      padding-left: 36px;
      text-align: start;
      font-size:18px;
      color:#2d2d2d;
      line-height: 28px;
      span{
        font-size: 20px;
        color:#f00;
      }
    }
    .dialog-footer{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
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
      }
  }
</style>
