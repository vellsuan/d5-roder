<template>
  <el-dialog
    title="提示"
    :visible.sync="returnDeposit"
    @close="$emit('update:showEsc', false)"
    :showEsc="showEsc"
    width="410px"
    top='30vh'
    class="depositMoney"
    center>
    <p>用户:{{readUser.user.nickName}}</p>
    <p>是否确定退还押金</p>
    <span slot="footer" class="dialog-footer">
      <el-button class="confirm" @click="pay">退还押金</el-button>
      <el-button class="cancel" @click="returnDeposit = false">取 消</el-button>
    </span>
  </el-dialog>
</template>
<script>
import { mapState } from "vuex";
export default {
  data () {
    return {
      returnDeposit:this.showEsc
    }
  },
  methods: {
    pay(){
      this.returnDeposit = false
      this.$router.push({path:"/content/payment/1"})
    }
  },
  props: {
    showEsc:{
      type:Boolean
    }
  },
  watch: {
    showEsc(){
      this.returnDeposit = this.showEsc
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
  .depositMoney{
    border-radius: 8px;
    p{
      text-align: center;
      font-size:18px;
      color:#2d2d2d;
      line-height: 28px;
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
