<template>
  <div class="read">
    <div class="read-header">
      <div class="nickname">
        <p>昵称</p>
        <div>{{readUser.user.nickName}}</div>
      </div>
      <div class="mobile">
        <p>手机号</p>
        <div>{{readUser.user.phone}}</div>
      </div>
      <div class="deposit">
        <p>押金</p>
        <div>{{readUser.user.account}}</div>
      </div>
      <el-button class="deposit" @click="returnDep">退还押金</el-button>
      <el-button @click="toIndex">返回首页</el-button>
    </div>
    <div class="read-table">
      <el-menu :default-active="activeIndex" :router=true class="el-menu-demo" active-text-color='#ea5414' mode="horizontal" @select="handleSelect">
        <el-menu-item index="Borrow">借书</el-menu-item>
        <el-menu-item index="ReturnBook">还书</el-menu-item>
        <el-menu-item index="LendBook">已借阅</el-menu-item>
      </el-menu>
      <router-view></router-view>
    </div>
    <return-deposit :showEsc.sync="showEsc" />
  </div>
</template>
<script>
import returnDeposit from "./dialog/returnDeposit";
import { mapState,mapMutations } from "vuex";
export default {
  components: {
    'return-deposit':returnDeposit
  },
  data () {
    return {
      showEsc:false
    }
  },
  methods: {
    ...mapMutations([
      'escIndex'
    ]),
    returnDep(){
      // if(this.readUser.user.account.foregiftAmount){
        const params = {
          url:'BI00308',
            data:{
              currentPageNum:1,
              orderStatus:1,
              pageCount:5,
              shopSn:this.userInfo.shop.shopSn,
              userId:this.readUser.user.userId,
              msg:null
            }
        }
        this.api.post(params,(res)=>{
            if(!res.page.totalRowCount || this.readUser.grade.sort >=3){
              this.showEsc = true
            }else{
            //   this.$message({             duration:1000,
            //   showClose: true,
            //   message: '请归还所有图书后再点击退还押金按钮',
            //   type: 'error'
            // });
            this.msg && this.msg.close()

            this.msg = this.$notify.error({
                title: '错误',
                showClose:false,
                message: '请归还所有图书后再点击退还押金按钮',
                duration:2000
              });
            }
          },(msg)=>{
            this.$message({             duration:1000,
              showClose: true,
              message: msg,
              type: 'error'
            });
          })
        // }else{
        //   // this.$message({             duration:1000,
        //   //     showClose: true,
        //   //     message: '账户押金余额为零,请确认后再次提交',
        //   //     type: 'error'
        //   //   });
        //   this.msg && this.msg.close()

        //   this.msg = this.$notify.error({
        //       title: '错误',
        //       showClose:false,
        //       message: '账户押金余额为零,请确认后再次提交',
        //       duration:2000
        //     });
        // }
    },
    handleSelect(key, keyPath) {
      // this.$store.commit('saveActiveIndex',key)
    },
    toIndex(){
      this.$router.push({path:"/index"})
      this.escIndex(this.$store.state)
    }
  },
  computed: {
    ...mapState([
        'userInfo',
        'readUser',
        'activeIndex'
    ]),
  },
}
</script>
<style lang="scss">
  .read{
    height: 100%;
    display: flex;
    flex-direction: column;
    background:#2c2c2c;
    .read-header{
      height: 72px;
      background:#254a42;
      box-shadow:0 4px 8px 0 rgba(0,0,0,0.50);
      margin: 4px 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color:#fff;
      font-size: 14px;
      padding-left: 30px;
      padding-right: 10px;
      & > div{
        display: flex;
        & > p{
          padding-right: 20px;
          line-height: 48px;
        }
        & > div{
          outline: none;
          background-color: rgba(0,0,0,0.50);
          border: none;
          background-image:linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
          box-shadow:0 2px 2px 0 rgba(0,0,0,0.10);
          border-radius:4px;
          color:#ffffff;
          height: 48px;
          font-size: 14px;
          padding: 15px 20px;
        }
      }
      .deposit{
        div{
          width: 142px;
        }
      }
      .nickname{
        div{
          max-width: 236px;
        }
      }
      .deposit{
        visibility: hidden;
      }
      .mobile{
        div{
          width: 196px;
        }
      }
      .el-button{
        width:104px;
        height:48px;
        color: #fff;
        font-size: 16px;
      }
    }
    .read-table{
      flex:1;
      margin: 30px 10px 53px;
      display: flex;
      flex-direction: column;
      .el-menu{
        background: none;
        border:none;
        .el-menu-item{
          height: 54px;
          width: 128px;
          font-size:16px;
          color:#ffffff;
          text-align: center;
          border:1px solid  #fff;
          border-radius: 4px 4px 0 0;
          &:hover{
            color:#ea5414;
          }
        }
        .is-active{
          border-bottom: none;
          background: #fff;
        }
      }
    }
  }
</style>
