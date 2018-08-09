<template>
    <div class="check-detail">
      <el-dialog title="菜品明细" :visible.sync="dialogTableVisible" center>
          <el-table :data="gridData" center>
              <el-table-column align="center" type="" width="20"></el-table-column>
              <el-table-column align="center" property="id" label="序号" width="60"></el-table-column>
              <el-table-column align="center" property="productName" label="菜目名称" width="100"></el-table-column>
              <el-table-column align="center" property="addTime" label="下单时间" width="150"></el-table-column>
              <el-table-column align="center" property="oneMoney" label="单价" width="50"></el-table-column>
              <el-table-column align="center" property="guiGe" label="单位" width="50"></el-table-column>
              <el-table-column align="center" property="num" label="数量" width="50"></el-table-column>
              <el-table-column align="center" property="yuanjiaTotal" label="菜品金额" width="65"></el-table-column>
              <el-table-column align="center" property="disMoney" label="优惠金额" width="65"></el-table-column>
              <el-table-column align="center" property="shifuTotal" label="实结金额" width="65"></el-table-column>
              <el-table-column align="center" property="acceptName" label="点菜员" width="60"></el-table-column>
              <el-table-column align="center" property="isState" label="状态" width="50"></el-table-column>
          </el-table>
          <span slot="footer" class="dialog-footer">
             <div class="block">
                <el-pagination
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="5"
                layout="next,prev"
                :total="totalRowCount">
                </el-pagination>
            </div>
            <el-button type="primary" @click="dialogTableVisible = false;gridData= null;">确定</el-button>
          </span>
      </el-dialog>
    </div>
</template>
<script>
import { mapState,mapMutations } from 'vuex';
export default {
    data() {
      return {
        totalRowCount:0,
        totalPage:0,
        currentPage:1,
        gridData: null,
        dialogTableVisible: false,
        orderSnView:''
      };
    },
    mounted () {
    },
    methods: {
      dishesDetail(val,orderSnView){
        this.orderSnView= orderSnView;
        const params = {
            url: 'OR900207',
            data: {
                currentPageNum:val,
                pageCount:6,
                orderSn: orderSnView
            }
        }
        this.api.post(params, res=> {
            res.page.datas.forEach(content=>{
              console.log(content.addTime)
              content.addTime = this.$moment(content.reciveTime).format("YYYY-MM-DD HH:mm:ss")
            });
            for(let i = 0;i<res.page.datas.length;i++){
                if(res.page.datas[i].isState == 1){
                    res.page.datas[i].isState = "退";
                }else if(res.page.datas[i].isState == 2){
                    res.page.datas[i].isState = "送";
                }else if(res.page.datas[i].isState == 3){

                    res.page.datas[i].isState = "折";
                }
                else if(res.page.datas[i].isState == 4){

                  res.page.datas[i].isState = "特";
                }
                else{
                    res.page.datas[i].isState = "";
                }
            }
            this.gridData = res.page.datas;
            this.totalPage = Number(res.page.totalPage);
            this.totalRowCount = Number(res.page.totalRowCount);
        });
      },
      // 分页按钮
      handleCurrentChange(val) {
        this.dishesDetail(val,this.orderSnView);
      },
    }
}
</script>
<style lang="scss">
    .check-detail{
       .el-dialog__wrapper{
          .el-dialog{
            background:#ffffff;
            box-shadow:0 4px 8px 0 rgba(0,0,0,0.50);
            border-radius:4px;
            width:826px;
            height:548px;
            .el-dialog__header{
              padding: 25px 0 0 0;
              span{
                font-size:20px;
                color:#2d2d2d;
                letter-spacing:0;
                line-height:20px;
                text-align:center;
              }
              .el-dialog__headerbtn{
                display: none;
              }
            }
            .el-dialog__body{
              height: 410px ;
              padding: 30px 20px;
              .el-table{
                .el-table__header-wrapper{
                  font-size:12px;
                  color:#989898;
                  line-height:12px;
                  border-top: 1px solid #efefef;
                  .el-table__header{
                    .has-gutter{
                      th{
                        padding: 5px 0;
                        .cell{
                          padding: 0;
                        }
                      }

                    }
                  }
                }
                .el-table__body-wrapper{
                  font-size:12px;
                  color:#2d2d2d;
                  line-height:12px;
                  .el-table__body{
                    .el-table__row{
                      td{
                        border: none;
                        .cell{
                          padding: 0;
                        }
                      }
                    }
                  }
                }
              }
              .el-table::before{
                height: 0;
              }
            }
            .el-dialog__footer{
              padding-bottom: 20px;
              .dialog-footer{
                display: flex;
                justify-content:center;
                .block{
                  width: 160px;
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
                }
                .el-button--primary{
                  border: 0;
                  background-image:linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
                  border-radius:4px;
                  width:160px;
                  height:58px;
                  span{
                    font-size:20px;
                    color:#ffffff;
                  }
                }
              }
            }
          }
       }
    }
</style>
