<template>
    <el-dialog title="优惠券" :visible.sync="dialogVisible"  width="410px" :before-close="handleClose" center>
        <div class="search">
            <input type="text" value="ED4334BA" />
            <button>搜索</button>
        </div>
        <div class="couponDetail">
             <ul>
                 <li>
                     <span>优惠规则</span>
                     <div class="couponVal">5元抵扣卷，只限早餐6:00-10:00使用</div>
                 </li>
                 <li>
                     <span>有效日期</span>
                     <div class="couponVal">2017-10-10至2017-11-11</div>
                 </li>
                 <li>
                     <span>使用状态</span>
                     <div class="couponVal">已使用，不可重复使用</div>
                 </li>
                 <li>
                     <span>使用时间</span>
                     <div class="couponVal">2017-10-20 7:23:54</div>
                 </li>
                 <li>
                     <span>会员编码</span>
                     <div class="couponVal">222234</div>
                 </li>
             </ul>   
        </div>    
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogVisible = false">使用</el-button>
            <el-button @click="dialogVisible = false">取消</el-button>
        </span>
    </el-dialog>

</template>
<script>
 export default {
    data() {
      return {
        dialogVisible: true
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  };
</script>
<style lang="scss">
    .el-dialog{
        height: 406px;
        .el-dialog__header{
            padding-top: 20px;
            .el-dialog__title{
                font-size:20px;
                color:#2d2d2d;
                letter-spacing:0;
                line-height:20px;
                text-align:center;
            }
            .el-dialog__close{
                display: none;
            }
        }
        .el-dialog__body{
            padding-top:20px; 
            padding-bottom:0px; 
           .search{ 
                display: flex;
                margin: 0 auto;
                width: 348px;
                height: 46px;
                background:#efefef;
                border:1px solid #dee0e7;
                border-radius:4px;
                input{
                    border: 0;
                    width: 252px;
                    padding-left:20px;
                    outline:none;
                    background: #efefef;
                    font-size:18px;
                    color:#2d2d2d;
                    letter-spacing:0;
                    line-height:18px;
                    text-align:left;
                }
                button{
                    outline: none;
                    background:#1bbc9b;
                    border:0.1px solid #dee0e7;
                    border-radius:4px;
                    width:94px;
                    height:44px;
                    font-size:16px;
                    color:#ffffff;
                    line-height:16px;
                    text-align:center;
                }
           }
           .couponDetail{
               margin:20px 0 0 5px;
               ul{
                   li{
                    list-style-type:none;
                    display: flex;
                    margin-bottom: 20px;   
                       span{
                            width: 56px;
                            display: block;
                            font-size:14px;
                            color:#989898;
                            letter-spacing:0;
                            line-height:14px;
                            margin-right: 20px;
                       }
                       .couponVal{
                            font-size:14px;
                            color:#2d2d2d;
                            letter-spacing:0;
                            line-height:14px;
                            text-align:left;
                       }
                   }
               }
           }
        }
        .el-dialog__footer{
            padding: 0px;
           .dialog-footer{
               width: 100%;
               .el-button--primary{
                    margin-right: 10px;
                    outline:none;
                    border: none;
                    background-image:linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
                    border-radius:4px;
                    width:160px;
                    height:58px;
                    font-size:20px;
                    color:#ffffff;
                    letter-spacing:0;
                    line-height:20px;
                    text-align:center;
               }
               .el-button--default{
                    outline:none;
                    border: none;
                    background:#dee0e7;
                    border-radius:4px;
                    width:160px;
                    height:58px;
                    font-size:20px;
                    color:#989898;
                    letter-spacing:0;
                    line-height:20px;
                    text-align:center;
               }
           }
        }
    }
    
</style>
