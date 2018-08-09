# myelement

> 一个基于vue和element-ui的pc项目

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# 开发前必读

> 关于接口调用

封装了一个文件，在`@/api`文件夹下，调用方法如下，看下封装的文件，注释已经很清楚了

```
const	params = {
						url:'接口号',    // 只要.do前面的那个接口
						data:{          // 上传字段

						}
					}
					this.api.get(params,callback,errcallback)   // 请求方式为post或get

```

> 关于element ui 按需引入 可以商量更好的方式，目的是为了不多引入组件

如果需要引入文件，就在`main.js`引入，把你需要的文件后面加注释。如果看到有人注释，后面也要写上自己需要
```
// XXX需要
```

> 目录结构


 只允许修改src，目录下的文件，组件都要见名知意，暴露给router的必须是index.vue。router的名字为本组件文件夹名。


> 多学习vue的东西，主要是官网和一些博客，父子组件传值和vuex，关于vue-route也要看看，要熟练使用，关于多个指令和一些细碎的东西，比如`v-for`.

关于计算属性或者观察者
[看看大漠老师如果用三个方法做一个功能](http://www.w3cplus.com/vue/when-to-use-methods-computed-properties-or-watchers.html)


### 关于软键盘calculatorTwo.vue

在页面调用  然后在页面的input标签写入得焦事件,原生input也一样,在data的return里定义input:null
```
	<el-input v-model="tlephone" @focus="showNum($event)" placeholder="输入会员电话："></el-input>
```

然后在methods里定义函数
```
	showNum(e){
      this.input = e.target
      this.tlephone = this.input.value
    },
```


如果是多个input框,就给input定义name属性.在得焦事件里判断是哪个input,进而进行赋值
```
	 showMember(e){
      this.input = e.target
      if(this.input.name=="telphone"){
        this.tlephone = this.input.value
      }else if(this.input.name == 'textCode'){
        this.textCode = this.input.value
      }
    },
```