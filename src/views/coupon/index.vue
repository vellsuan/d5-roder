<template>
  <div class="coupon">
    <div class="coupon-main">
      <div class="coupon-check">
        <div class="coupon-check-code">
          <div class="text">
            <p>优惠码</p>
            <input type="text" v-model='yhmInput' @focus="show">
          </div>
          <div class="textarea">
            <p>备注</p>
            <textarea name="textarea" v-model='remarkInput' id="textarea" @focus="show" cols="30" rows="5"></textarea>
          </div>
          <el-button class="cancel" @click="onSubmit">核销</el-button>
          <router-link to="/index">
            <el-button class="esc">返回<br/>[ESC]</el-button>
          </router-link>
        </div>
      </div>
      <div class="coupon-table">
         <el-table :data="tableData" stripe style="width: 100%" height="10">
          <el-table-column align="center" prop="yhm" label="优惠码" width="180"></el-table-column>
          <el-table-column align='center' prop="username" label="姓名" width="180"></el-table-column>
          <el-table-column align='center' prop="addtime" label="日期"></el-table-column>
          <el-table-column align='center' prop="remark" label="备注"></el-table-column>
        </el-table>
        <div class="coupon-table-ctrl">
          <el-button @click="refresh">刷新</el-button>
          <div class="coupon-table-ctrl-page">
            <p class="pages">共{{totalRowCount}}条记录 共{{totalPage}}页</p>
            <div class="block">
              <el-pagination
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="10"
                layout="prev,slot, next"
                :total="totalRowCount">
                <slot><span>第{{currentPage}}页</span></slot>
              </el-pagination>
            </div>
          </div>
        </div>
      </div>
      <select-dialog :showDish.sync="showDish" :proList='proList' :yhm='yhm'/>
    </div>
    <!-- <vue-touch-keyboard v-if="visible" :layout="layout" :cancel="hide" :accept="accept" :input="input" :next="next" :change="change"/> -->
  </div>
</template>
<script>
import select from "./dialog/select";
import { mapState } from "vuex";
export default {
  components : {
    'select-dialog':select
  },
  data () {
    return {
      showDish:false,
      currentPage:1,
      totalRowCount:0,
      totalPage:0,
      yhmInput:'',
      remarkInput:'',
      visible: false,
      layout: "normal",
      input: null,
      options: {
        useKbEvents: false
      },
       tableData: null,
       proList:[],
       yhm:{}
    }
  },
  created () {
    this.getajax(1)
  },
  methods: {
    getajax(val){
      const	params = {
        url:'CY200032',
        data:{
          currentPageNum:val,
          pageCount:10,
          shopSn:this.userInfo.shop.shopSn
        }
      }
      this.api.get(params,res=>{
        res.list.datas.forEach(content=>{
          content.addtime = this.$moment(content.addtime).format("YYYY-MM-DD HH:mm:ss")
        })
        this.tableData = res.list.datas
        this.totalPage = Number(res.list.totalPage)
        this.totalRowCount = Number(res.list.totalRowCount)
      })
    },
    postajax(){
      const	params = {
        url:'CY200031',
        data:{
          remark:this.remarkInput,
          yhm:this.yhmInput,
          shopSn:this.userInfo.shop.shopSn
        }
      }
      this.api.post(params,res=>{
        console.log(res.proShowFlag)
        if(res.proShowFlag == '1'){
          this.yhm = params.data
          this.showDish = true
          this.proList = res.proList
        }else{
          this.$alert('核销成功', '提示',{
            closeOnClickModal:true,
            center: true,
            callback:()=>{
              this.getajax(1)
              this.remarkInput=''
              this.yhmInput=''
            }
          });
        }
      },res=>{
        this.$alert(res, '提示',{
          closeOnClickModal:true,
          center: true,
        });
      })
    },
    onSubmit(){
      if(this.yhmInput != '' && this.remarkInput != ''){
        this.postajax()
      }else{
        this.$confirm('没有填写备注, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.postajax()
        }).catch(() => {
          console.log('请输入备注')
        });
      }
    },
    refresh(){
      this.getajax(1)
      this.currentPage = 1
    },
    // 分页按钮
    handleCurrentChange(val) {
      this.getajax(val)
      const SELECTWRAP_DOM = document.querySelector('.el-table__body-wrapper');
      SELECTWRAP_DOM.scrollTop = 0
    },
      // 软键盘操作函数
    change(text){
    },
    accept(text) {
      alert("Input text: " + text);
      this.hide();
    },

    show(e) {
      this.input = e.target;
      if (!this.visible)
        this.visible = true
    },

    hide() {
      this.visible = false;
    },
    next() {
      let inputs = document.querySelectorAll("input");
      let found = false;
      [].forEach.call(inputs, (item, i) => {
        if (!found && item == this.input && i < inputs.length - 1) {
          found = true;
          this.$nextTick(() => {
            inputs[i+1].focus();
          });
        }
      });
      if (!found) {
        this.input.blur();
        this.hide();
      }
    },
    // 软键盘操作函数结束
  },
  computed: {
    ...mapState([
        'userInfo'
    ]),
  },
};
</script>
<style lang="scss">
.coupon {
  background: #2c2c2c;
  flex:1;
  display: flex;
  width: 100%;
  .coupon-main{
    background:#2c2c2c;
    display: flex;
    margin: 0 10px 32px;
    flex-direction: column;
    flex:1;
    width: 100%;
    .coupon-check{
      height: 120px;
      background:#254a42;
      box-shadow:0 4px 8px 0 rgba(0,0,0,0.50);
      .coupon-check-code{
        margin-top:8px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        p{
          width: 14px;
          font-size: 14px;
          color:#fff;
          margin: 0 10px;
        }
        .text,.textarea{
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .text{
          input{
            background-color:rgba(0,0,0,0.5);
            background-image:linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
            box-shadow:0 2px 2px 0 rgba(0,0,0,0.10);
            border-radius:4px;
            width:244px;
            height:100px;
            outline:none;
            border: none;
            padding: 36px 54px;
            font-size: 20px;
            color:#fff;
          }
        }
        .textarea{
            textarea{
              background-color:rgba(0,0,0,0.5);
              background-image:linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
              box-shadow:0 2px 2px 0 rgba(0,0,0,0.10);
              border-radius:4px;
              width:360px;
              height:100px;
              outline:none;
              border: none;
              padding: 10px 20px;
              font-size: 14px;
              color:#fff;
              resize:none;
            }
          }
        .el-button{
          color:#fff;
          font-size: 14px;
          }
        .cancel{
          background-image:linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
          border-radius:4px;
          width:85px;
          height:100px;
        }
        .esc{
          background-image:linear-gradient(0deg, #ea5414 0%, #ff8f5f 98%);
          border-radius:4px;
          width:85px;
          height:100px;
        }
      }
    }
    .coupon-table{
      flex:1;
      display: flex;
      flex-direction: column;
      .coupon-table-ctrl{
        height: 70px;
        background:#ffffff;
        padding: 0 20px 0 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        & > .el-button{
          background-image:linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
          border-radius:4px;
          border: none;
          color:#fff;
          width:104px;
          height:48px;
          font-size: 16px;
        }
        .coupon-table-ctrl-page{
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
    }
  }
}
</style>
