<template>
  <div id="app">
    <router-view/>
    <div v-drag="greet" class="keyboard"></div>
  </div>
</template>

<script>
export default {
  methods: {
    greet(obj){
      console.log(obj);
    }
  }
};
</script>

<style lang="scss">
a{
  text-decoration: none;
}
html,
body,
#app {
  height: 100%;
  min-width: 1024px;
  .keyboard{
    height: 60px;
    width: 60px;
    position: fixed;
    background: url('./assets/images/jianpan.png');
    z-index: 999999;
    top: 240px;
    right:30px;
  }
}
html {
  box-sizing: border-box;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
// .vue-touch-keyboard{
//   width: 100%;
//   position: absolute;
//   bottom: 28px;
//   padding: 1em;
//   z-index: 999;
//   background-color: #EEE;
//   box-shadow: 0px -3px 10px rgba(0, 0, 0, 0.3);
//   border-radius: 10px;
// }
.el-button{
  background:linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
  box-shadow:0 2px 2px 0 rgba(0,0,0,0.10);
  border-radius:4px;
}
.el-message-box{
  .el-button{
    background:linear-gradient(-180deg, #3adfcb 0%, #1bbc9b 100%);
    border-radius:4px;
    width:160px;
    height:58px;
    color:#fff;
    border-color: #fff;
    font-size:18px;
  }
  .el-message-box__message{
    font-size:16px;
    color:#2d2d2d;
    text-align: center;
    padding:20px 0;
  }
}
.el-notification{
  top:0!important;
  right: 0!important;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 100px;

  //transition: transform 0.5s;
  animation: zoomIn .2s;
  transform: none!important;
}
	@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }

  50% {
    opacity: 1;
  }
}
</style>
