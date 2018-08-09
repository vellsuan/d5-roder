<template>
    <div class="dishDisplayPage">
        <div class="dishTop">
            <div class="dishLogo">
                <img :src="logo" alt="logo">
                <div class="f-right">
                    <span>{{this.$moment().format("YYYY年MM月DD日")}}</span>
                    <span>{{week}}</span>
                </div>
                <div class="f-right"><span>{{this.$moment().format("HH : mm")}}</span></div>
            </div>
            <div class="dishDetail">
                <div class="dishTotal">
                    <span class="font24">总计</span>
                    <span class="font36">97</span>
                    <span class="font24">收款</span>
                    <span class="font36">97</span>
                    <span class="font24">找零</span>
                    <span class="font36">0</span>
                </div>
                <div class="dishContent">
                    <table>
                        <thead>
                            <tr>
                                <th>编号</th>
                                <th>名称</th>
                                <th>数量</th>
                                <th>价格（元）</th>
                            </tr>    
                        </thead>
                        <tbody>
                            <tr>
                                <td>2</td>
                                <td>老妈兔头</td>
                                <td>x1</td>
                                <td>20.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>    
            </div>
        </div>
        <div class="dishButtom">
            <div class="hotActivity">
                <img :src="dish" alt="dish"/>
            </div>
            <div class="foodRecommend">
                <div class="offers">
                    <img :src="jitangmian" alt="jitangmian">
                    <div class="buttom-content">
                        <span>鸡汤面</span>
                        <span>￥38</span>
                        <span>￥48</span>
                    </div>
                    <div class="lable-title">
                        <span>{{swiperTop}}</span>
                    </div> 
                </div>
                <div class="recommend">
                    <img :src="fuguixia" alt="fuguixia">
                    <div class="buttom-content">
                        <span>富贵虾</span>
                        <span>￥68</span>
                    </div>
                    <div class="lable-title">
                        <span>{{swiperBottom}}</span>
                    </div> 
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
import logo from "../../assets/images/logo@1x.png";
import dish from "../../assets/images/dish@1x.png";
import jitangmian from "../../assets/images/jitangmian@1x.png";
import fuguixia from "../../assets/images/fuguixia@1x.png";

export default {
    data () {
      return {
        logo,
        dish,
        jitangmian,
        fuguixia,
        week: "",
        swiperTop:"今日特价",
        swiperBottom:"本店推荐",
      }
    },
    mounted () {
        let str = new Date().getDay();  
        switch (str) {  
            case 0 :  
                    this.week += "星期日";  
                    break;  
            case 1 :  
                    this.week += "星期一";  
                    break;  
            case 2 :  
                    this.week += "星期二";  
                    break;  
            case 3 :  
                    this.week += "星期三";  
                    break;  
            case 4 :  
                    this.week += "星期四";  
                    break;  
            case 5 :  
                    this.week += "星期五";  
                    break;  
            case 6 :  
                    this.week += "星期六";  
                    break;  
        }  
    }
}
</script>

<style lang="scss">
    .dishDisplayPage{
        background: #262626;
        height: 100%;
        .dishTop{
            margin: 0 auto;
            background:#3e3e3e;
            box-shadow:0 2px 10px 0 rgba(0,0,0,0.50);
            width:1024px;
            height:290px; 
            padding: 30px;
            display: flex;
            .dishLogo{
                width: 296px;
                margin: 30px 2px 0 15px;
                img{
                    display: block;
                    width: 144px;
                    height: 48px;
                    margin: 0 0 40px 55px;
                }
                .f-right{
                    font-size:22px;
                    color:#ffffff;
                    letter-spacing:0;
                    line-height:22px;
                    text-shadow:0 1px 2px rgba(0,0,0,0.40);
                    span:nth-child(1){
                        margin-right: 5px;
                    }
                }
                div:nth-child(3){
                    margin-left: 85px;
                    margin-top: 30px;
                    font-size:30px;
                    color:#ffffff;
                    line-height:30px;
                    text-shadow:0 1px 2px rgba(0,0,0,0.40);
                }
            }
            .dishDetail{
                .dishTotal{
                    display: flex;
                    padding: 20px 40px;
                    margin-bottom: 12px;
                    opacity:0.5;
                    background:#2c2c2c;
                    box-shadow:0 2px 2px 0 rgba(0,0,0,0.10);
                    border-radius:4px;
                    width:668px;
                    height:88px;
                    .font24{
                        display: block;
                        font-size:24px;
                        color:#ffffff;
                        letter-spacing:0;
                        text-align:center;
                        line-height: 48px;
                        margin-right: 20px;
                    }
                    .font36{
                        display: block;
                        font-size:36px;
                        color:#1bbc9b;
                        letter-spacing:0;
                        text-align:left;
                        line-height: 48px;
                    }
                    span:nth-child(3){
                        margin-left: 180px;
                    }
                    span:nth-child(5){
                        margin-left: 45px;
                    }
                }
                .dishContent{
                    opacity:0.5;
                    background:#2c2c2c;
                    border-radius:4px;
                    width:668px;
                    height:128px;
                    padding: 30px 0px;
                    table{
                        width: 100%;
                        height: 100%;
                        margin-left: 15px;
                        thead{
                            tr{
                                font-size:14px;
                                color:#ffffff;
                                letter-spacing:0;
                                line-height:14px;
                                text-align:center;
                            }
                        }
                        tbody{
                            tr{
                                height: 70px;
                                font-size:24px;
                                color:#ffffff;
                                letter-spacing:0;
                                line-height:24px;
                                text-align:center;
                            }
                        }
                    }
                }
            }
        }
        .dishButtom{
            margin: 0 auto;
            width:1024px;
            height:478px;
            padding: 10px;
            display: flex;
            .hotActivity{
                background:#343434;
                width:684px;
                height: 100%;
                margin-right: 10px;
            }
            .foodRecommend{
                .offers{
                    width:310px;
                    height:224px;
                    margin-bottom: 10px;
                    position:relative;
                    .buttom-content{
                        bottom: 0;
                        position: absolute;
                        opacity:0.8;
                        background:#343434;
                        width:100%;
                        height:48px;
                        span:nth-child(1){
                            margin-left: 20px;
                            line-height: 48px;
                            font-size:20px;
                            color:#f2f2f2;
                        }
                        span:nth-child(2){
                            margin-left: 120px;
                            line-height: 48px;
                            font-size:24px;
                            color:#f2f2f2;
                            text-align:left;
                        }
                        span:nth-child(3){
                            line-height: 48px;
                            font-size:18px;
                            color:#f2f2f2;
                            text-align:left;
                            text-decoration:line-through;
                        }
                    }
                    .lable-title{
                        position: absolute;
                        border-top-right-radius:20px;
                        border-bottom-right-radius:20px;
                        top:10px; 
                        background-image:linear-gradient(-269deg, #3adfcb 0%, #1bbc9b 100%);
                        width:101px;
                        height:38px;
                        span{
                            display: block;
                            font-size:16px;
                            color:#ffffff;
                            line-height:38px;
                            text-align:center;
                        }
                    }
                }
                .recommend{
                    width:310px;
                    height:224px;
                    position:relative;
                    .buttom-content{
                        bottom: 0;
                        position: absolute;
                        opacity:0.8;
                        background:#343434;
                        width:100%;
                        height:48px;
                        span:nth-child(1){
                            margin-left: 20px;
                            line-height: 48px;
                            font-size:20px;
                            color:#f2f2f2;
                        }
                        span:nth-child(2){
                            margin-left: 156px;
                            line-height: 48px;
                            font-size:24px;
                            color:#f2f2f2;
                            text-align:left;
                        }
                    }
                    .lable-title{
                        position: absolute;
                        border-top-right-radius:20px;
                        border-bottom-right-radius:20px;
                        top:10px; 
                        background-image:linear-gradient(-270deg, #f9b562 0%, #f07e33 100%);
                        width:101px;
                        height:38px;
                        span{
                            display: block;
                            font-size:16px;
                            color:#ffffff;
                            line-height:38px;
                            text-align:center;
                        }
                    }
                }
            }
        }
    }
</style>
