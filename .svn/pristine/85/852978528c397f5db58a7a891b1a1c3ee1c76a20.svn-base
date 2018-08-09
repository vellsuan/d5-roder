<template>
  <el-dialog
    title="还书确认"
    :visible.sync="addReturn"
    @close="$emit('update:showAdd', false)"
    :showAdd="showAdd"
    width="782px"
    top='18vh'
    class="addReturn"
    center>
    <div class="dialog-content">
      <div class="content-main">
        <div class="dialog-content-left">
          <el-input class="telphone" v-model="barcode" placeholder="条码号：">
            <template slot="append">
              <el-button >扫码</el-button>
            </template>
          </el-input>
          <el-table
          @current-change="handleCurrentChange"
          :data="bookMsg"
          height='300'
          highlight-current-row
          stripe
          class="bookMsg"
          style="width: 100%">
          <el-table-column
            prop="bookName"
            label="借阅图书列表"
             align="center"
           >
          </el-table-column>
        </el-table>
        </div>
        <div class="dialog-content-right">
          <div class="right-main">
            <div><i>书名:</i><span>{{bookInfo.bookName}}</span></div>
            <div><i>价值:</i><span class="money">{{bookInfo.book.price}}元</span></div>
            <div><i>借书时间：</i><span>{{this.bookInfo.borrowTime | dateFormat}}</span></div>
            <div><i>规定还书时间：</i><span>{{this.bookInfo.mustReturnTime | dateFormat}}</span></div>
            <div><i>实际还书时间：</i><span>{{this.bookInfo.returnTime | dateFormat}}</span></div>
            <div><i>逾期时间：</i><span>{{this.bookInfo.expireDayNum}}天</span></div>
            <div><i>逾期罚金：</i><span class="money">{{this.bookInfo.expirePrice}}元</span></div>
            <div>
              <i class="other">其他原因：</i>
               <el-checkbox-group
                v-model="why" @change="reason">
                <el-checkbox v-for="(reason,index) in reasons" :label="index" :key="reason">{{reason}}</el-checkbox>
              </el-checkbox-group>
            </div>
            <div><i>其他罚金：</i>
              <span v-if="why[0] == 2" class="money">0元</span>
               <span v-if="why[0] == 0" class="money">{{loseMoney}}元</span>
               <el-checkbox-group v-if="why[0] == 1"
                v-model="mulct" @change="reason">
                <el-checkbox v-for="(level,index) in levels" :label="index" :key="level">{{level}}</el-checkbox>
              </el-checkbox-group>
            </div>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button class="confirm" @click="enterReturn">确 定</el-button>
        <el-button class="cancel" @click="addReturn = false">取 消</el-button>
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
      bookMsg:[],
      addReturn: false,
      barcode:'',
      textCode:'',
      why:[2],
      mulct:[3],
      fine:'',
      bookInfo:{book:''},
      reasons:['图书丢失','破损严重'],
      levels:[],
      currentPageNum:1,
      totalRowCount:'0',
      flag:false,
      input:null,
      loseMoney:""
    }
  },
  props: {
    showAdd:{
      type:Boolean
    }
  },
  updated () {
   if(this.why.length == 0){
     this.why = [2]
   }

  },
  watch: {
    showAdd(){
      this.addReturn = this.showAdd
      this.bookInfo = {book:''}
    },
    addReturn(){
      if(this.addReturn === true){
        this.chooseBooks()
      }
    }
  },

  methods: {
    reason(data){
      if(data.length>1){
         data = data.shift()
      }
    },
    chooseBooks(){
      const params = {
        url:'BI00308',
          data:{
            currentPageNum:this.currentPageNum,
            orderStatus:1,
            pageCount:10000,
            idsNotShow:this.giveBackbooks.join(','),
            shopSn:this.userInfo.shop.shopSn,
            userId:this.readUser.user.userId
          }
      }
      this.api.post(params,(res)=>{
          this.bookMsg = res.page.datas
          this.totalRowCount = res.page.totalPage
        },(msg)=>{
          this.$message({
            duration:1000,
            showClose: true,
            message: msg,
            type: 'error'
          });
        })
    },
    dateFormat:function(row, column) {
      var date = row[column.property];
      if (date == undefined) {
        return "";
      }
      return this.$moment(date).format("YYYY-MM-DD HH:mm:ss");
    },
    // 加法函数，用来得到精确的加法结果
    accAdd(arg1, arg2) {
      var r1, r2, m, c;
      try {
          r1 = arg1.toString().split(".")[1].length;
      }
      catch (e) {
          r1 = 0;
      }
      try {
          r2 = arg2.toString().split(".")[1].length;
      }
      catch (e) {
          r2 = 0;
      }
      c = Math.abs(r1 - r2);
      m = Math.pow(10, Math.max(r1, r2));
      if (c > 0) {
          var cm = Math.pow(10, c);
          if (r1 > r2) {
              arg1 = Number(arg1.toString().replace(".", ""));
              arg2 = Number(arg2.toString().replace(".", "")) * cm;
          } else {
              arg1 = Number(arg1.toString().replace(".", "")) * cm;
              arg2 = Number(arg2.toString().replace(".", ""));
          }
      } else {
          arg1 = Number(arg1.toString().replace(".", ""));
          arg2 = Number(arg2.toString().replace(".", ""));
      }
      return (arg1 + arg2) / m;
    },
    enterReturn(){
      if(JSON.stringify(this.bookInfo) != '{"book":""}'){
        if(this.why[0] == 0){
        this.bookInfo.other = '图书丢失'
        this.fine = this.loseMoney
        }else if(this.why[0] == 1){
          this.bookInfo.other = '破损严重'
          this.fine = this.levels[this.mulct[0]] || 0
          console.log(this.fine)
        }else{
          this.bookInfo.other = ''
          this.fine = 0
        }
        this.bookInfo.money = this.accAdd(Number(this.bookInfo.expirePrice),Number(this.fine))
        console.log(this.bookInfo.money)
        this.$store.commit("saveReturnData",this.bookInfo);
        let giveBackbook = `${this.bookInfo.bookCode}_${this.fine || 0}_${this.why[0]}`
        this.$store.commit("saveGiveBackbooks", giveBackbook);
        this.barcode = ''
        this.why = [2]
        this.fine = ''
        this.addReturn = false
      }else{
        this.$message({
          duration:1000,
          showClose: true,
          message: '请输入正确的条码',
          type: 'error'
        });
      }
    },
    change(){
      if(!(/^[\s]{0,}$/.test(this.barcode))){
        if(this.giveBackbooks.join(',').indexOf(this.barcode) === -1){
          const params = {
            url:'BI00310',
            data:{
              bookCode:this.barcode,
              shopSn:this.userInfo.shop.shopSn,
              userId:this.readUser.user.userId
            }
          }
          this.api.post(params,(res)=>{
            this.bookInfo = res.entity
            this.loseMoney = res.loseMoney
            this.levels = res.damagedList.map((item,index)=>{
              return item.damagePrice
            }).sort((m,n)=>m>n?1:(m<n?-1:0))
           // console.log(this.levels)
          },(msg)=>{
            this.$message({             duration:1000,
              showClose: true,
              message: msg,
              type: 'error'
            });
          })
        }else{
          this.bookInfo = {book:''}
          this.$message({
            duration:1000,
            showClose: true,
            message: '该图书已经提交',
            type: 'error'
          });
        }
      }else{
        this.bookInfo = {book:''}
        this.$message({
          duration:1000,
            showClose: true,
            message: '图书码不能为空',
            type: 'error'
          });
      }
    },
    handleCurrentChange(val){
      if(val){
        this.barcode = val.bookCode
        this.change()
      }

    }
  },
  computed: {
    ...mapState([
        'readUser',
        'userInfo',
        'giveBackbooks'
    ]),
  },
}
</script>
<style lang="scss">
  .addReturn{
    border-radius: 4px;
    .dialog-content{
      margin: 0 auto;
      .el-table{
        margin-bottom: 20px;
      }
      .el-table.bookMsg{
        height: 300px;

      .current-row>td{
        background:#1bbc9b;
       }
      }
      .content-main{
        display: flex;
        .dialog-content-left{
          width: 350px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .telphone{
            width: 350px;
            margin-bottom: 10px;
            .el-input__inner{
              width: 230px;
              margin: 0;
            }
            .el-button{
              width:118px;
              height:46px;
              font-size:16px;
              color:#ffffff;
            }
          }
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
        }
        .dialog-content-right{
          width: 350px;
          height: 336px;
          margin-left:20px;
          background:#efefef;
          border-radius:4px;
          padding: 20px;
          .right-main{
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            &>:last-child{
              height: 40px;
              line-height: 40px;
              .el-checkbox-group{
                .el-checkbox{
                  width:50px;
                  .el-checkbox__label{
                    display: block;
                    text-align: center;
                    padding: 0;
                  }
                }
                .el-checkbox+.el-checkbox{
                  margin-left: 15px;
                }
              }
            }
            i{
               font-style:normal;
               font-size:16px;
               float: left;
               margin-right:10px;
               width: 112px;
               color:#989898;
            }
            span{
              font-size:16px;
              color:#2d2d2d;
            }
            .other{
              line-height: 40px;
            }
            .money{
              color:#ea5414;
            }
            input{
              outline: none;
              border: none;
              height: 30px;
              color:#ea5414;
              font-size:16px;
              border-radius: 4px;
              padding-left: 10px;
              width: 170px;
            }
            .el-checkbox-group{
              float: left;
              .el-checkbox{
                background:#ffffff;
                box-shadow:0 2px 4px 0 rgba(0,0,0,0.10);
                border-radius:4px;
                width:76px;
                height:40px;
                .el-checkbox__input{
                  display: none;
                }
                .el-checkbox__label{
                  font-size: 14px;
                  line-height: 40px;
                  //margin: 0 auto;
                }
              }
              .is-checked{
                background:#1bbc9b;
                box-shadow:0 2px 4px 0 rgba(0,0,0,0.10);
                .el-checkbox__label{
                  color:#fff;
                  font-size: 14px;
                }
              }
              .el-checkbox+.el-checkbox{
                margin-left: 20px;
              }
            }
          }
        }
      }

      .dialog-footer{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .el-pagination{
                    display: flex;
                    padding: 0 5px;
                    .btn-prev,.btn-next{
                    background:linear-gradient(90deg, #3adfcb 0%, #1bbc9b 100%);
                    border-radius:4px;
                    width:60px;
                    height:58px;
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
                        height:58px;
                        margin: 0 20px;
                    }
                    .btn-next{
                      margin-right: 20px;
                      transform:rotate(90deg);
                      -ms-transform:rotate(90deg); 	/* IE 9 */
                      -moz-transform:rotate(90deg); 	/* Firefox */
                      -webkit-transform:rotate(90deg); /* Safari 和 Chrome */
                      -o-transform:rotate(90deg); 	/* Opera */
                      .el-icon{
                        width: 30px;
                      }
                    }
                    .btn-prev{
                      margin-right: 20px;
                      transform:rotate(90deg);
                      -ms-transform:rotate(90deg); 	/* IE 9 */
                      -moz-transform:rotate(90deg); 	/* Firefox */
                      -webkit-transform:rotate(90deg); /* Safari 和 Chrome */
                      -o-transform:rotate(90deg); 	/* Opera */
                      .el-icon{
                        width: 45px;
                      }
                    }
                  }
        .el-button{
          width:160px;
          height:58px;
          font-size:20px;
          color:#ffffff;
        }
        .cancel{
          background:#dee0e7;
          color:#989898;
          margin-left:30px;
        }
      }
    }
  }
</style>
