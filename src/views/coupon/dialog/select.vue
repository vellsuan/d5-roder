<template>
  <el-dialog
    title="选择抵货菜品"
    id='selectDish'
    :visible.sync="addVisible"
    @close="$emit('update:showDish', false)"
    :showDish="showDish"
    width="40%"
    top='15vh'
    center>
    <div class="dialog-content">
      <el-table :data="proList" stripe style="width: 100%" height='300' :show-header='false' highlight-current-row  @current-change="handleCurrentChange">
        <el-table-column align="center" prop="productName"  label="菜名"></el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button class="confirm" @click="handlePost">确 定</el-button>
        <el-button class="cancel" @click="addVisible = false">取 消</el-button>
      </span>
    </div>
  </el-dialog>
</template>
<script>
export default {
  data () {
    return {
      addVisible:false
    }
  },
  methods: {
    handleCurrentChange(val){
      this.yhm.proSn = val.productNumber
    },
    handlePost(){
      const	params = {
        url:'CY200031',
        data:this.yhm
      }
      this.api.post(params,res=>{
        if(this.yhm.proSn){
          this.addVisible = false
          this.$alert('核销成功', '提示',{
            closeOnClickModal:true,
            center: true,
            callback:()=>{
              this.$parent.getajax(1)
              this.$parent.remarkInput=''
              this.$parent.yhmInput=''
            }
          });
        }else{
          this.$message({             duration:1000,
            showClose: true,
            message: '必须选择一个商品进行核销',
            type: 'error'
          });
        }
      },res=>{
        this.addVisible = false
        this.$alert(res, '提示',{
          closeOnClickModal:true,
          center: true,
        });
      })
    }
  },
  props:{
    showDish:{
      type:Boolean,
      default:false
    },
    proList:{
      type:Array,
      default:[]
    },
    yhm:{
      type:Object,
      default:[]
    }
  },
  watch: {
    showDish(){
      this.addVisible = this.showDish
    }
  },
}
</script>
<style lang="scss">
  #selectDish{
    border-radius: 4px;
    .dialog-content{
      width: 350px;
      margin: 0 auto;
      .current-row>td{
        background:#1bbc9b;
      }
      .dialog-footer{
        margin-top: 20px;
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
