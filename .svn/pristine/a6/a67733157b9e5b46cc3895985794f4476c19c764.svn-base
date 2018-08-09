import Vue from 'vue'
export default {
  saveUserInfo(state,userInfo){
    state.userInfo = userInfo
  },
  // 图书借阅
  // 保存借阅用户信息
  saveReadUser(state,readUser){
    state.readUser = readUser
  },
  // 更新用户押金信息
  UpdataReadUser(state,data){
    state.readUser.user.account = data
  },

  // 保存 删除借书信息
  saveTableData(state,data){
    state.tableData.push(data)
  },
  spliceTableData(state,data){
    state.tableData = data
  },
  // 保存 删除借书图书条码
  saveBookCode(state,data){
    state.bookCode.push(data)
  },
  spliceBookCode(state,data){
    state.bookCode = data
  },
  // 保存 删除还书信息
  saveReturnData(state,data){
    state.returnData.push(data)
  },
  spliceReturnData(state,data){
    state.returnData = data
  },
  // 保存 删除还书图书条码
  saveGiveBackbooks(state,data){
    state.giveBackbooks.push(data)
  },
  spliceGiveBackbooks(state,data){
    state.giveBackbooks = data
  },
  // 保存当前头部状态
  saveActiveIndex(state,data){
    state.activeIndex = data
  },

  // 返回首页时把借阅用户信息注销 最好的是增加个对象保存一份,等有空改版
  escIndex(state){
    state.readUser ={user:{account:{}},grade:{}}
    state.tableData = []
    state.bookCode = []
    state.returnData = []
    state.giveBackbooks = []
  },
   //图书借阅结束
  // 注销后返回初始值
  reset(state){
    // Object.keys(state).forEach(k=>{
    //   Vue.delete(state,k)
    // })
    Object.assign(state,JSON.parse(localStorage.state))
  },
  //菜品列表
  saveFoodListBack(state,payload){
    let setval=state.greensList[payload['key']]=payload['val'];
  },
  getaddGreensList(state,data){
    state.greensLists = data
  },
  //删除本地菜品
  deleteFootData(state,data){
    state.greensList = data
  },
  //订单ID
  saveOrderId(state,orderId){
    state.orderId = orderId
  },
  saveCuisineList(state,data){
    //全单备注

    state.allSlote= data
  },
  saveMenuid(state,menuid){
    state.menuid = menuid
  },
  //开台tableOrder
  savatableOrder(state,data){
    state.tableOrder = data
  },
  //权限店长
  saveManagerperm(state,data){
    state.manageStaus=data
  },
  //整单取消
  saveWholeSingleCancel(state,data){
    state.wholeSingleCancel=data
  },
  //退菜
  saveReturnDishes(state,data){
    state.returnDishes=data
  },
  //奉送
  saveModiFyname(state,data){
    state.modiFyname=data
  },
  //刷新菜单
  saveRefreshMenu(state,data){
    state.refreshMenu=data
  },
  //开台成功弹窗状态值
  saveFoundSuccess(state,foundSuccess){
    state.foundSuccess = foundSuccess
  },
  //打折
  saveWholefold(state,data){
    state.wholefold = data
  },
  saveItemonSale(state,data){
    state.itemonSale = data
  },
  saveaobutton(state,data){

    state.quxiaobutton=data
  },
  saveCodeJson(state,data){
    state.codeJson = data
  }
}
