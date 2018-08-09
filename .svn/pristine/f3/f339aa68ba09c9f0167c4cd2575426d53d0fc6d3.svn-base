import Vue from "vue";
import Router from "vue-router";
import Content from "@/components/content";
import Login from "@/views/login/index";
import HomePage from "@/views/homePage/index";
import Order from "@/views/order/index";
import Found from "@/views/founding/index";
import Coupon from "@/views/coupon/index";
import Read from "@/views/read/index";
import Payment from "@/views/payment/index";
import Borrow from "@/views/read/table/borrow";
import ReturnBook from "@/views/read/table/returnbook";
import LendBook from "@/views/read/table/lendbook";
import orderSystem from "@/views/orderSystem/index";
import andasingle from "@/views/andasingle/index";
import checkReckoning from "@/views/founding/checkReckoning";
import viewUnfinished from "@/views/founding/viewUnfinished";
import MenuPayment from "@/views/MenuPayment/index";
import ScanCode from "@/views/scanCode/index";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login
    },
    {
      path: "/index",
      name: "HomePage",
      component: HomePage
    },
    {
      path: "/content",
      name: "Content",
      component: Content,
      children:[
        {
          path: "order",
          name: "Order",
          component: Order
        },
        {
          path: "found",
          name: "Found",
          component: Found
        },
        {
          path: "orderSystem",
          name: "orderSystem",
          component:orderSystem
        },
        {
          path: "coupon",
          name: "Coupon",
          component: Coupon
        },
        {
          path: "read",
          name: "Read",
          component: Read,
          children:[
            {
              path: "borrow",
              name: "Borrow",
              component: Borrow
            },
            {
              path: "returnbook",
              name: "ReturnBook",
              component: ReturnBook
            },
            {
              path: "lendbook",
              name: "LendBook",
              component: LendBook
            }
          ]
        },
        {
          path:'payment/:id',
          name:'Payment',
          component:Payment
        },
        {
          path: "checkreckoning",
          name: "checkReckoning",
          component: checkReckoning
          },
          {
          path: "viewunfinished",
          name: "viewUnfinished",
          component: viewUnfinished
          },
        {
          path:'andasingle',
          name:'Andasingle',
          component:andasingle

        },
        {
          path:'menuPayment',
          name:'MenuPayment',
          component:MenuPayment

        },
        {
          path: "scancode",
          name: "ScanCode",
          component: ScanCode
        }
      ]
    }
  ]
});
