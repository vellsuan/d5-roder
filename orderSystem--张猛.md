#点餐系统--PC端 orderSystem 
-负责人张猛
#####父组件orderSystem 子组件compomets/oderSystem 
-所有dialog  命名以及剩余问题
![](https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1511231442&di=7a33740a488e961529226a70498c7e08&src=http://imgsrc.baidu.com/forum/w=580/sign=bdaac71373094b36db921be593cd7c00/5635b9096b63f624e76700cf8244ebf81b4ca3ea.jpg)
######orderingSystem  -- 点餐主页 可查询改名 对应的子组件文件夹名称和父组件均是该名称 包括路由

######子组件命名
- dialogOffer -- 奉送

- dialogRetFoot  -- 退菜
{
	rfoot class名 主要区别Element类名达到重复渲染的目的
}

- 剩余问题： class style绑定 input的icon

- dialogModifyName  -- 修改菜名

- input框背景色问题 是否是选中时更换颜色 

- sRemarks --  单品备注
			- 整单备注 与单品备注目前是一个页面，通过传参改变其title值  	
            - 布局有改动	 
- wRemarks  -- 整单备注

> -**合理组件化需要考虑**-

- hurryFoot -- 催菜   

- dialogDishes  -- 起菜  
			- 起菜&&等叫   一个页面，通过传参改变其title值  		 									
- dialogCalled  --  等叫

> ***更改套暂定***

- sDiscount  -- 单品折扣   

- class=“sDisXX”之类 全部为单品折扣下的 class名  其他组件相同 
- v-model  显示NaN 问题   

- ****键盘组件未引入******

- dialogMessage  -- 客户留言   calc()  css3计算属性 

- changeWaiter  -- 修改服务员   

- modifyPeople  -- 修改人数 
            - 计算器组件未引入

- cancelOrder -- 整单取消 
            - 取消之后跳转页面，权限
- memberentry -- 会员录入
            - 引用蔡路祥 组件
            - 文件位置 views/dialog/memberentry
- dialogDiscount -- 打折
            - zDiscount class名 整单折扣
            - switch  不能放在data里面做条件判断关键词
            - dislog宽度过大
>截止2017 11 21 上午12点  组件就差一个    打折 预计当日结束

