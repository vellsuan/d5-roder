<template>
    <el-dialog title="抽大钞" :visible.sync="dialogFormVisible" width="450px" top="calc((100vh - 600px)/2)" class="drawBigBill" center>
    <div class="main">
        <div class="faceVal">
            <div class="faceValContent">
                <div>
                    <div class="face-val-span">
                        <span>面值</span>
                        <span>100</span>
                    </div>
                    <div class="face-val-input">
                        <input type="text" @focus="showMember($event)" name="face100" v-model="face100" autofocus="autofocus"/>
                        <span>张</span>
                    </div>
                </div>    
                <div>
                    <div class="face-val-span">
                        <span>面值</span>
                        <span>20</span>
                    </div>
                    <div class="face-val-input">
                        <input type="text" @focus="showMember($event)" name="face20" v-model="face20" />
                        <span>张</span>
                    </div>
                </div>
                <div>
                    <div class="face-val-span">
                        <span>面值</span>
                        <span>50</span>
                    </div>
                    <div class="face-val-input">
                        <input type="text" @focus="showMember($event)" name="face50" v-model="face50"/>
                        <span>张</span>
                    </div>
                </div>
                <div>
                    <div class="face-val-span">
                        <span>面值</span>
                        <span>10</span>
                    </div>
                    <div class="face-val-input">
                        <input type="text" @focus="showMember($event)" name="face10" v-model="face10"/>
                        <span>张</span>
                    </div>
                </div>
            </div>
            <div class="faceValTotal">
                <span>合计：</span>
                <div>
                    <input type="text" v-model="totalNumber" disabled="disabled"/>
                    <span>元</span>
                </div>
            </div>
        </div>
    </div>
    <calculator-two :input="input"></calculator-two>
    <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="OkBigBill">确定</el-button>
        <el-button @click="bigBillCancel">取消</el-button>
    </div>
    </el-dialog>
</template>

<script>
import { mapState,mapMutations } from 'vuex';
import calculatorTwo from "@/components/calculatorTwo";
export default {
    components : {
        'calculator-two':calculatorTwo
    },
    data () {
        return {
            dialogFormVisible: false,
            face100 : '',
            face20 : '',
            face50 : '',
            face10 : '',
            input:null
        }
    },
    methods: {
        showMember(e){
            this.input = e.target;
            switch(this.input.name){
                case "face100":
                    this.face100 = this.input.value;
                    break;
                case "face20":
                    this.face20 = this.input.value;
                    break;
                case "face50":
                    this.face50 = this.input.value;
                    break;
                case "face10":
                    this.face10 = this.input.value;
                    break;
            }
            // if(this.input.name=="face100"){
            //     this.face100 = this.input.value
            // }else if(this.input.name == 'face20'){
            //     this.face20 = this.input.value
            // }else if(this.input.name == 'face50'){
            //     this.face50 = this.input.value
            // }else if(this.input.name == 'face10'){
            //     this.face10 = this.input.value
            // }
        },
        OkBigBill(){
            if(this.totalNumber > 0){
                const params = {
                    url: 'SM00001',
                    data: {
                        sum:this.totalNumber,
                        waiterId:this.userInfo.shopClerK.clerkId,
                        waiterName:this.userInfo.shopClerK.realName
                    }
                }
                this.api.post(params, res=> {
                    if(res){
                        this.$alert('抽大钞成功!', '提示',{
                            closeOnClickModal:true,
                            center: true,
                        });
                        this.dialogFormVisible = false;
                        Object.assign(this.$data, this.$options.data());
                    }
                });
            }else{
                this.$alert('请先输入内容!', '提示',{
                  closeOnClickModal:true,
                  center: true,
                });
            }    
        },
        bigBillCancel(){
            Object.assign(this.$data, this.$options.data());
        }
    },
    watch:{

    },
    computed: {
        ...mapState([
            'userInfo'
        ]), 
        totalNumber(){
            if(!(/(^[1-9]\d*$)/.test(this.face100)) && this.face100 != ""){
                this.face100 = Math.floor(this.face100);
                this.$message({
                    showClose: false,
                    message: '请输入正整数!',
                    type: 'warning'
                }); 
            }
            if(!(/(^[1-9]\d*$)/.test(this.face20)) && this.face20 != ""){
                this.face20 = Math.floor(this.face20);
                this.$message({
                    showClose: false,
                    message: '请输入正整数!',
                    type: 'warning'
                }); 
            }
            if(!(/(^[1-9]\d*$)/.test(this.face50)) && this.face50 != ""){
                this.face50 = Math.floor(this.face50);
                this.$message({
                    showClose: false,
                    message: '请输入正整数!',
                    type: 'warning'
                }); 
            }
            if(!(/(^[1-9]\d*$)/.test(this.face10)) && this.face10 != ""){
                this.face10 = Math.floor(this.face10);
                this.$message({
                    showClose: false,
                    message: '请输入正整数!',
                    type: 'warning'
                }); 
            }
            return ((Number(this.face100) * 100) + (Number(this.face20) * 20) + (Number(this.face50) * 50) + (Number(this.face10) * 10)); 
        }
    },
}
</script>

<style lang="scss">
    .drawBigBill{
        .el-dialog{
            .el-dialog__header{
                padding: 20px 0 30px;
                .el-dialog__title{
                    font-size:20px;
                    color:#2d2d2d;
                    letter-spacing:0;
                    line-height:20px;
                }
                .el-dialog__headerbtn{
                    display: none;
                }
            }
            .el-dialog__body{
                padding: 0 50px;
                .main{
                    .faceVal{
                        height: 188px;
                        .faceValContent{
                            display: flex;
                            flex-wrap :wrap;
                            justify-content :space-between;
                            padding: 0 5px;
                            div{
                                display: flex;
                                .face-val-span{
                                    display: flex;
                                    flex-direction: column;
                                    margin-right: 10px;
                                    span{
                                        font-size:16px;
                                        color:#2d2d2d;
                                        letter-spacing:0;
                                        line-height:24px;
                                        text-align:center;
                                    }
                                }
                                .face-val-input{
                                    display: flex;
                                    background:#efefef;
                                    border:1px solid #dee0e7;
                                    border-radius:4px;
                                    width:118px;
                                    height:46px;
                                    font-size:16px;
                                    color:#989898;
                                    letter-spacing:0;
                                    line-height:16px;
                                    input{
                                        padding-left: 10px;
                                        outline: 0;
                                        border: 0;
                                        width: 90px;
                                        background:#efefef;
                                        font-size:16px;
                                        color:#989898;
                                        letter-spacing:0;
                                        line-height:16px;
                                    }
                                    span{
                                        line-height: 42px;
                                    }
                                }
                            }
                            div:nth-child(3){
                                margin-top:20px;
                            }
                            div:nth-child(4){
                                margin-top:20px;
                            }
                        }
                        .faceValTotal{
                            margin-top: 15px;
                            display: flex;
                            span{
                                font-size:16px;
                                color:#2d2d2d;
                                letter-spacing:0;
                                line-height:44px;
                            }
                            div{
                                display: flex;
                                padding: 0 15px;
                                background:#efefef;
                                border:1px solid #dee0e7;
                                border-radius:4px;
                                width:298px;
                                height:46px;
                                input{
                                    width: 255px;
                                    border: 0;
                                    outline: 0;
                                    background:#efefef;
                                    font-size:16px;
                                    color:#989898;
                                    letter-spacing:0;
                                    text-align:left;
                                }
                                span{
                                    line-height: 44px;
                                    font-size:16px;
                                    color:#989898;
                                    letter-spacing:0;
                                    text-align:left;
                                }
                            }
                        }
                    }
                }

            }
            .el-dialog__footer{
                padding: 20px 0;
                .el-button--primary{
                    border: none;
                    background-image:linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
                    border-radius:4px;
                    width:160px;
                    height:58px;
                    span{
                        font-size:20px;
                        color:#ffffff;
                        letter-spacing:0;
                        line-height:20px;
                    }
                }
                .el-button--default{
                    border: none;
                    background:#dee0e7;
                    border-radius:4px;
                    width:160px;
                    height:58px;
                    span{
                        font-size:20px;
                        color:#989898;
                        letter-spacing:0;
                        line-height:20px;
                    }
                }
            }
        }
    }
</style>
