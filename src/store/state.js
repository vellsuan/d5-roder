export default {
  userInfo:{},
  readUser:{user:{account:{}},grade:{}},
  tableData:[],
  bookCode:[],
  returnData:[],
  giveBackbooks:[],
  activeIndex: 'borrow',
  greensList:{},//菜品列表本地存储
  orderId:"",
  //单品备注
  menuid:{
    index:'',
    footString:"",
    productobj:[],
    productId:''
  },
  //整单备注
  allSlote:{
    allfootString:[],
    productobj:[]
  },
  //开台tableOrder
  tableOrder:"",
  manageStaus:'',
  //奉送
  modiFyname:false,
  //退菜
  returnDishes:false,
  //整单取消
  wholeSingleCancel:false,
  //整单打折
  wholefold:false,
  //单品打折
  itemonSale:false,
  //刷新菜单
  refreshMenu:false,
  //开台成功弹窗状态值
  foundSuccess :{},
  quxiaobutton:0,
  // 二维码信息
  codeJson:{}
}
// state 定义了应用状态的数据结构，同样可以在这里设置默认的初始状态。
