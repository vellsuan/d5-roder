<template>
 <!-- <keep-alive>-->
    <el-dialog
      :title="titleName"
      :visible.sync="dialogVisible"
      :show-close="false"
      class="sRemarks"
      :close-on-click-modal="false">
      <el-input v-model="input" value="554" :placeholder="
inputRemark"  :autofocus="true"></el-input>
      <div :class="{btnlist:true}" >
        <div class="aititle" v-for="(item,index) in obj" >

          <div @click="delbtn(index,itemindex)"  v-if="x.status"  v-for="(x,itemindex) in item.childrens">
            <div :class="{bgtitle:true}" >{{x.noteName}}</div>
          </div>

        </div>
      </div>

      <div class="outTitle newoutle"   >
        <div  v-for="item in obj">
          <div :class="{active:item.status}" v-text="item.noteName" @click="classifyProct(obj,item)"></div>
        </div>
      </div>

      <div class="SrContent" >
        <div class="SrContentItem" v-for="(item,index) in obj" >
          <div >
            <div  v-for="(x,itemindex) in item.childrens" v-if="item.status">
              <div :class="{bgaCtiv:x.status,defarbtn:true}" @click="indexfun(index,itemindex,x.status)" v-model="x.noteName">{{x.noteName}}</div>
            </div>
          </div>
        </div>
      </div>
     <!-- this.$emit('remarkcall')-->
      <div slot="footer" class="dialog-footer">
        <el-button @click="rFootClick" class="active">确 定</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  <!--</keep-alive>-->

</template>

<script>

export default {
  mounted() {

    this.initnote();
    //input值
  },
  data() {
    return {
      comitnewarr:[],
      obj:[],
      dialogVisible: false,
      input:"",
     // isActive:false
     localarr:[],
      radiomsg:"",
      inputRemark:'输入备注'
    };
  },
  props:['titleName','remarkList','titRemark'],
  methods: {
    errmsg: function () {
      return msg => this.$message({
        duration: 1000,
        showClose: true,
        message: msg,
        type: 'error'
      });
    },//弹窗的错误警告
    //全单备注
    allnote(){

      let allSlote=this.$store.state.allSlote.productobj;

      if( allSlote.length>1){
        this.obj=allSlote;
      }else{
        let url = 'PN100008';
        const params = {
          url: url,
          data: {}
        };
        this.api.get(params, res => {
          //console.log('全单备注');

          for(let item of res.list){
              for(let items of item.childrens){

                for(let itemss of this.$store.state.allSlote.allfootString){
                  if(items['noteName']+','==itemss){
                    items.status=1
                  }
                }
              }
          }

          this.obj=res.list;
         // this.$emit('remarkcall')
         // this.obj[0].status=1;
          console.log(this.obj)
        },this.errmsg());
      }

    },
    //确认按钮
    rFootClick() {
      this.dialogVisible = false;
      this.$emit('diaRemark')
      this.commitjson()
    },
    //初始化所有数组
    initarr(){
      //接口调用调用深靠
      return JSON.parse(JSON.stringify(data));
    },
    //初始化当前数组
    commitjson(){

      this.comitnewarr=[];
      //存储的单个id是否存在，index要赋值结束后给它置空，当选择的时候在保存
      let noetId=this.$store.state.menuid.productId;

     for(let items of this.obj){

            for(let itemchend of items.childrens){

                if(itemchend.status==1){
                  this.comitnewarr.push(itemchend.noteName)
                }

            }
     }
      this.comitnewarr.push(this.input);
     /* this.comitnewarr.join();*/
      //
     if(this.titleName!=='整单备注'){
       //循环单个footstring将对应的字段状态为1
       //单个备注上送
       this.$store.commit('saveMenuid',{
         footString:this.comitnewarr.join() || '',
         productId:noetId,
         productobj:this.obj
       });

     }else{
       //全单备注
       let newgrenn={
         allfootString:this.comitnewarr,
         productobj:this.obj
       };
       this.$store.commit('saveCuisineList',newgrenn);
      }
    },
   /* commitonly(noetId){
      const paramss = {
        url: 'OR200013',
        data: {
          productId: this.$route.query.id || '',
          /!*productNote: this.radiomsg || '',
          userShopPlatformKey:userid +'_'+this.$store.state.shopSn+'_platform0'*!/
        }
      };
      //200013为单个案列上送备注字符串
      this.api.post(paramss, res => {
        this.item = res.list;
      });
    },*/
    //功能部分
    selectarr(selectitem){
      for(let val of selectitem.childrens){
        val.status=0;
      }
    },
    indexfun(index,itemindex,dangqianStaus){
      //当前数组
      let selectitem=this.obj[index];

      if(dangqianStaus==1){
        //选中当前的值
        this.selectarr(selectitem);
      }else{

        this.selectarr(selectitem);
        this.obj[index].childrens[itemindex].status=1;
      }
    },
    //通过点击上面删除数据
    delbtn(index,xindex){
      this.obj[index].childrens[xindex].status=0;
    },
    classifyProct(allitem,item){
      for(let itemchend  of allitem){
        itemchend.status=0;
      }
       item.status=1;

    },






    //备注
    initnote(){
      console.log(this.titleName)
      if(this.titleName=='整单备注'){
        this.obj=[]
        this.allnote();
        let arrlen=this.$store.state.allSlote.allfootString.length;
        this.input=this.$store.state.allSlote.allfootString[arrlen-1]
      }else{
        this.obj=[]
        let arr=this.$store.state.menuid.footString.split(',')
        let arrlen=arr.length;
        this.input=arr[arrlen-1];
        console.log(arr)
        this.onlynote()
      }
    },

    onlynote(){

      const params = {
        url: 'PR900001',
        data: {
          shopSn: this.$store.state.userInfo.shop.shopSn || '',
          productId: this.$store.state.menuid.productId || '',
        }
      };
      //单个商品列表请求900001
      this.api.post(params, res => {
        let arr=this.titRemark.footString.split(',');
        if(res.productNotes!==undefined){


        for(let item of res.productNotes){
          for(let items of item.childrens){
            //在多加个index参数判断就行了
            console.log(this.titRemark.footString)

            //等于当前菜品备注的发亮就好了//获取当前菜品的备注就ok了根本不需要存
            //这个for循环可以抛弃了 理论上，因为只需要和拿currOption记录的单个就可以
            for(let itemss of arr){
              if(items['noteName']==itemss){
                items.status=1
              }
            }
          }
        }
        this.obj = res.productNotes;
        }else{
          this.obj=[]
        }
        //   this.obj[0].status = 1;
        //将字符串上送
      },this.errmsg());
    },
  },
  computed:{
    menuid(){
      return this.$store.state.menuid
    },
    allSlote(){
      return this.$store.state.allSlote
    }
  },
  watch:{
    titleName(){
      this.initnote();
    },
    menuid(){
      this.initnote();
    },
    allSlote(){
      this.initnote();
    }
  }

};
</script>

<style lang="scss">
.newoutle{
  flex-wrap: wrap ;
  height: auto;
  min-height: 48px;
}
.bgtitle{
  display: flex;
  background:#1bbc9b;

  box-shadow:0 2px 4px 0 rgba(0,0,0,0.10);
  border-radius:4px;
  width:86px;
  height:40px;
  margin-right: 8px;
  margin-left: 8px;
  font-size:14px;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  color:#ffffff;
}

.aititle{
  display: flex;
}

.btnlist{
  display: flex;
  margin-right: 12px;
  margin-left: 12px;
  flex-wrap: wrap;
  min-height:80px;
  margin-bottom: 16px;
}
.sRemarks{


  .el-dialog{

    box-shadow:0 4px 8px 0 rgba(0,0,0,0.50);
    border-radius:4px;
    width:638px;
   min-height:486px;

    .el-dialog__header{
      height: 70px;
      text-align: center;
      padding: 0;
      .el-dialog__title{
        font-family:MicrosoftYaHei;
        font-size:20px;
        color:#2d2d2d;
        letter-spacing:0;
        line-height:70px;
        text-align:center;
        margin:0;
      }

    }
    .el-dialog__body{
      min-height: 338px;
      padding: 0;
      .el-input{
        padding: 0 20px;
        .el-input__inner{
          background:#efefef;
          border:1px solid #dee0e7;
          border-radius:4px;
          height:48px;
        }
      }

    }
    .el-dialog__footer{
      margin-top: 10px;
      line-height: 0;
      text-align: center;
     .dialog-footer{

      line-height: 0;
      height: 98px;
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

    .SrContent{
       margin-left: 12px;
       margin-right: 12px;
       //margin-top: 16px;
       display: flex;
      flex-wrap:wrap;
      .SrContentItem{

       /* width: 100px;*/
        flex-wrap:wrap;

        div{
         /* width: 200px;*/
          display: flex;
          flex-wrap:wrap;

        }
      }
      .defarbtn{
        background:#ffffff;
        box-shadow:0 2px 4px 0 rgba(0,0,0,0.10);
        border-radius:4px;
        width:86px;
        height:40px;
        margin-right: 8px;
        margin-left: 8px;
        font-size:14px;
        color:#2d2d2d;
        justify-content: center;
        align-items: center;
        margin-top: 16px;
      }
      .bgaCtiv{
        background:#1bbc9b;
        color:#ffffff;
      }
      .outTitlePt{
        display: flex;
      }
    }
  }
}
</style>
