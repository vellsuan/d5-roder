<template>
  <header>
    <img :src="logo" alt="logo">
    <div class="header-content">
      <p class="el-icon-xr-yonghufile">{{userInfo.adminInfo.realName}}</p>
      <p class="el-icon-xr-screen">{{userInfo.adminId}}</p>
      <p >营业日期：<span>{{this.$moment().format("YYYY-MM-DD")}}</span></p>
    </div>
  </header>
</template>
<script>
  import logo from "../assets/images/logo@1x.png";
  import { mapState } from "vuex";
  export default {
    data () {
      return {
        logo
      }
    },
    computed: {
    ...mapState([
        'userInfo'
    ]),
  },
  }
</script>
<style lang="scss">
  header{
    height: 60px;
    background:#525252;
    display: flex;
    justify-content: space-between;
    img{
      display: block;
      margin-top:11px;
      margin-left: 20px;
    }
    .header-content{
      flex:1;
      margin-right: 20px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      p{
        padding-right: 50px;
        color: #fff;
        font-size: 14px;
       &::before{
         font-size: 16px;
         padding-right: 10px;
       }
      }
      & :last-child{
        padding: 0;
      }
    }
  }
</style>
