<template>
  <div>
    <el-dialog
      :title="titleName"
      :visible.sync="dialogVisible"
      :show-close="false"
      class="dishes"
      :close-on-click-modal="false" v-if="portType==1">

      <el-button @click="allUpfood" class="active" >{{inpCon}}</el-button>
      <el-button v-if="inpContain" @click="onglyFood" class="active">{{inpContain}}</el-button>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" >取消</el-button>
      </div>
    </el-dialog>
    <el-dialog
      :title="titleName"
      :visible.sync="dialogVisible"
      :show-close="false"
      class="dishes"
      :close-on-click-modal="false" v-else="portType==2">

      <el-button @click="rFootClick" class="active" >{{inpCon}}</el-button>
      <el-button v-if="inpContain" @click="sFootClick" class="active">{{inpContain}}</el-button>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" >取消</el-button>
      </div>
    </el-dialog>
  </div>

</template>
<!--有等叫才能起菜-->
<script>
export default {
  data() {
    return {
      dialogVisible: false,
      input: "15230644778",
      input1: "aaaaa",
    };
  },
  props:['checedList',"titleName","inpCon","inpContain","portType",'odersn','oderip'],
  methods: {
    mseagelog(msg,tiem=2000){
      this.msg && this.msg.close();
      this.msg = this.$notify({
        title: '失败',
        message: msg,
        type: 'error',
        duration:tiem
      });
    },
    //整单器材
    rFootClick() {

        const params = {
            url: 'POS00009',
            data: {
              orderSn:this.odersn,
              dishStatus:this.portType,
            }
          };
          this.api.post(params, res => {

            this.$emit('qicai',res,7);
              this.dialogVisible = false;
          },msg=>{
            this.$emit('qicai','all');
            this.dialogVisible = false;
            this.mseagelog(msg)
          })

    },
    //单个起菜
    sFootClick(){

        let branch = this.$store.state.userInfo.shop.branch;
        const params = {
        url: "OR900208",
        data: {
          dishStatus:this.portType,
          branch:branch,
         	id: this.checedList.id
        }
      };
      this.api.post(params, res => {
          if(this.panqicai()){
            this.$emit('qicai',res,2)
          }

          this.dialogVisible = false;
		  });
    },
    //整单等叫
    allUpfood(){
     let neworderip=this.oderip;
     let newgrenlist=this.$store.state.greensList[neworderip];
      this.changwRemark(newgrenlist,'dishStatus',1);
      this.$store.commit("saveFoodListBack",{
        key:neworderip,
        val:newgrenlist
      });
      this.$emit('dengjiaocl','333333');
      this.dialogVisible = false;
    },
    //整单状态循环
    changwRemark(nodes,nodeitem,val){
      if(nodes.length>0){
        for(let item of nodes){
          this.$set(item,nodeitem,val);
        }
      }
    },
    //单个等叫
    onglyFood(){

     if(this.xia()){
       this.$message.error('请选择未下单的菜品');
       this.dialogVisible = false;
       return false
     }else{
       let newindex=this.checedList.index;
       let neworderip=this.oderip;
       let newgrenlist=this.$store.state.greensList[neworderip];
     //  this.changwRemark(newgrenlist,'dishStatus',1);
        newgrenlist[newindex].dishStatus=1;
       this.$store.commit("saveFoodListBack",{
         key:neworderip,
         val:newgrenlist
       });
       this.$emit('dengjiaocl','333333');
       this.dialogVisible = false;
     }
    },
    //下单判断
    xia(){
      let xia=this.checedList.xia;
      return xia
    },
    //等叫判断
    pandengjiao(){
      if(this.xia()){
      if(this.checedList.dishStatus==1){
        this.$message.error('此菜品以在等叫中');
           return false
            }else
        if(this.checedList.dishStatus==2){
        this.$message.error('请选择未起菜的菜品');
        return false
       }else if(this.checedList.dishStatus==3){
        this.$message.error('以在催菜中');
        return false
        }else{
        if(this.checedList.isState == "1"){
          this.$message.error('请选择未退的菜品');
          return false
        }else {
          return true
        }
       }
      }else{
        this.$message.error('请选择以下单的菜品');
        return false
      }
    },
    panqicai(){
      if(this.xia()){
      if(this.checedList.dishStatus!=1){
        this.$message.error('请选择等叫中的菜品');
        return false
      }else{
        return true
      }
     }else{
        this.$message.error('请选择以下单的菜品');
        return false
      }
    }
  },

};
</script>

<style lang="scss">
 .active {
    background: #1bbc9b!important;
    color: #ffffff!important;
    span{
       color: #ffffff!important;
    }
}
.dishes {
  .el-dialog {
   background:#ffffff;
  box-shadow:0 4px 8px 0 rgba(0,0,0,0.50);
  border-radius:4px;
  width:410px;
  height:246px;
    .el-dialog__title {
      line-height: 70px;
      margin: 0;
    }
    .el-dialog__header {
      padding: 0;
      height: 70px;
      text-align: center;
      .el-dialog__title {
        line-height: 70px;
        margin: 0;
      }
    }
    .el-dialog__body {
      padding:0;
      text-align: center;
      font-family: MicrosoftYaHei;
      font-size: 16px;
      color: #2d2d2d;
      .el-button--default {
         background: #1bbc9b;
          border-radius: 4px;
          width: 160px;
          height: 58px;
          span{
           font-family:MicrosoftYaHei;
            font-size: 20px;
            color: #ffffff;
          }
        }
    }
    .el-dialog__footer{
      line-height: 0;
      text-align: center;
      .dialog-footer{
        height: 98px;
        padding-top:20px;

      }
      .el-button--default {
          background: #dee0e7;
          border-radius: 4px;
          width: 160px;
          height: 58px;
          span{
           font-family: MicrosoftYaHei;
            font-size: 20px;
            color: #989898;
          }
     }
    }
  }
}
</style>
