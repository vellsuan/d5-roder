// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";

import "@/assets/css/reset.css"; // 重置样式

import verification from "@/assets/js/home";



// 时间处理函数
import moment from "moment";
Vue.prototype.$moment = moment;

// import ElementUI from 'element-ui'
// Vue.use(ElementUI)
// import 'element-ui/lib/theme-chalk/index.css'
router.beforeEach((to, from, next) => {
  store.commit("saveActiveIndex", to.name);
  next();
});

// 按需引入element ui
import {
  Collapse,
  CollapseItem,
  Pagination,
  Dialog,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Button, // LH使用
  ButtonGroup,
  Table,
  TableColumn,
  Form, // LH需要
  FormItem, // LH需要
  Tabs,
  TabPane,
  Tag,
  Alert,
  Row,
  Col, // LH需要
  Carousel,
  CarouselItem,
  // Collapse, // 折叠面板
  // CollapseItem,
  Container,
  Header, // LH需要
  Aside, // LH需要
  Main, // LH需要
  Footer, // LH需要
  // Loading,
  MessageBox,
  Message,
  Notification
} from "element-ui";
Vue.directive("number", {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function(el) {
    // 聚焦元素

    console.log(el);
  }
});
Vue.use(Pagination);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Dialog);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Input);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Tag);
Vue.use(Alert);
Vue.use(Row);
Vue.use(Col);
Vue.use(Carousel);
Vue.use(CarouselItem);
// Vue.use(Collapse);
// Vue.use(CollapseItem);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);

// Vue.use(Loading.directive);

// Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
Vue.prototype.$verifiod = verification;
// 引入结束
import "@/assets/css/iconfont.css"; //字体图标
import api from "./api/api";
Vue.config.productionTip = false;
Vue.prototype.api = api;

Vue.filter("dateFormat", date => {
  if (date == undefined) return "";
  return moment(date).format("YYYY-MM-DD HH:mm:ss");
});
Vue.filter("datafilter", data => {
  if (data == undefined) return "";
  return data;
});

Vue.directive("drag", {
  inserted(el, binding) {
    let oDiv = el;
    let x1, y1, x2, y2;
    //  左边距最大值
    let maxLeft = el.parentNode.clientWidth - el.clientWidth;
    //  上边距最大值
    let maxTop = el.parentNode.clientHeight - el.clientHeight;
    oDiv.onmousedown = function(e) {
      //  鼠标按下，计算当前元素距离可视区的距离
      x1 = e.clientX;
      y1 = e.clientY;
      let disX = e.clientX - oDiv.offsetLeft;
      let disY = e.clientY - oDiv.offsetTop;
      document.onmousemove = function(e) {
        //  获取到鼠标拖拽后的横向位移(距离父级元素)
        let l = e.clientX - disX;
        //  获取到鼠标拖拽后的纵向位移(距离父级元素)
        let t = e.clientY - disY;

        oDiv.style.left = l + "px";

        oDiv.style.top = t + "px";

        if (e.clientX - disX <= 0) {
          oDiv.style.left = 0 + "px";
        }

        if (e.clientY - disY <= 0) {
          oDiv.style.top = 0 + "px";
        }

        if (e.clientX - disX >= maxLeft) {
          oDiv.style.left = maxLeft + "px";
        }

        if (e.clientY - disY >= maxTop) {
          oDiv.style.top = maxTop + "px";
        }

        //     将此时的位置传出去
        binding.value({ x: oDiv.style.left, y: oDiv.style.top });
      };
      //     松开事件后，移除事件
      document.onmouseup = function(e) {
        x2 = e.clientX;
        y2 = e.clientY;
        document.onmousemove = null;
        document.onmouseup = null;
        // 鼠标弹起后,判断移动距离
        let d = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
        if (d < 7) {
          console.log(123);
          API.openSoftKey(); // 键盘事件
        }
      };
    };
  }
});
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  template: "<App/>",
  components: { App }
});
