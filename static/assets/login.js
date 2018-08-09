/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		6:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + {"1":"ebf3fe3cb6405646","2":"2d8b87c6d8ee9ec2","3":"fda93c2ac46efb93","4":"fea9726ea84e29c8","5":"7af60a81d9a4debd","7":"6eae16a5f64683ab"}[chunkId] + "-" + ({}[chunkId]||chunkId) + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(6);
	__webpack_require__(24);
	//require('./lib/sm/sm.js');
	//require('./lib/sm/sm-extend.js');
	/**
	 * @namespace APP
	 * @name APP
	 * @class
	 * @requires common,model,noAuthModules
	 */
	__webpack_require__.e/* require */(1/* duplicate */, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(7), __webpack_require__(8), __webpack_require__(9)]; (function(domReady, EJS, Common) {
		var login = function() {
			this.onError();
			this.initPage();
		};
		login.prototype = {
			initPage: function() {
					//Common.urlParams.demo = true;
					__webpack_require__.e/* require */(7, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(27)]; (function(route) {
						new route("");
					}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
			},

			/**
			 * 定义当页面发送错误时的处理
			 * @memberof APP
			 * @name onError
			 * @function
			 */
			onError: function() {
				__webpack_require__.onError = function(err) {
					if (err.requireType === "timeout") {
						//$("#maskbox").length&&$("#maskbox").remove();
					}
					throw err;
				};
				window.onerror = function(msg, file, lineNum, charNum, errorObj) {
					//$("#maskbox").length&&$("#maskbox").remove();
				};
			}
		};
		new login();
	}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery v1.8.3 jquery.com | jquery.org/license */
	(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])}o.data&&(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function _t(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e])return Wt[e];var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s==="toggle";if(s===(g?"hide":"show"))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,"fxshow",!0);for(t in d)v.style(e,t,d[t])});for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);if(s&&(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&&--v.readyWait>0)return;r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=v.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&g.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&&!d.call("\ufeff\u00a0")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete")setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);else{i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);var n=!1;try{n=e.frameElement==null&&i.documentElement}catch(s){}n&&n.doScroll&&function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e=="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)})})(arguments),i?o=a.length:n&&(s=t,l(n))}return this},remove:function(){return a&&v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)}),this},has:function(e){return v.inArray(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a)return;n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){v.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){return e==null?"":e+""})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button"))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===""&&(t="false"),j.set(e,t,n)}}),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&&s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&&!v.event.global[y])return;n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);f.length&&w.push({elem:s,matches:f})}d.length>m&&w.push({elem:this,matches:d.slice(m)});for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&&b.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){v.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,"form"))return!1;v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),v._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,"form"))return!1;v.event.remove(this,"._submit")}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),v.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)});return!1}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;$.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)}),v._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,"._change"),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&&i.addEventListener(e,r,!0)},teardown:function(){--n===0&&i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&&(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function ct(e,t,n,r,i,s){return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;T&&(c=a!==g&&a,n=o.el);for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(b=k,n=++o.el)}r&&((p=!v&&p)&&y--,u&&x.push(p))}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)}return T&&(b=k,c=N),x};return o.el=0,r?N(o):o}function dt(e,t,n){var r=0,i=t.length;for(;r<i;r++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length}),G=K(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),et=K(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0},s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace($,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace($,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+" "];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&&function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),K(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=z.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",H)}catch(n){}}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return v(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,v.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),"not",e)},filter:function(e){return this.pushStack(ft(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))}}),v.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&&v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=i;for(s=0;(u=e[s])!=null;s++){typeof u=="number"&&(u+="");if(!u)continue;if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&&(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={BODY:"block"},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e=="boolean";return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!v.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&&(Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t)return Dt(e,"marginRight")})}}),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a"),cn.href="",cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){if(typeof e!="string"&&En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)}),this},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T="error",e<0&&(e=0)}x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&&o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");if(!c.hasContent){c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){S="abort";for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,"No Transport");else{x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){x.abort("timeout")},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E<2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||v.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t}),"script"}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&v.dequeue(this,e)})}}),v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&&typeof e=="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");r==="static"&&(e.style.position="relative");var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,"function"=="function"&&__webpack_require__(2)&&__webpack_require__(2).jQuery&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return v}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))})(window);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

	module.exports = jQuery;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

	/*
	 * jQuery showLoading plugin v1.0
	 * 
	 * Copyright (c) 2009 Jim Keller
	 * Context - http://www.contextllc.com
	 * 
	 * Dual licensed under the MIT and GPL licenses.
	 *
	 */
	jQuery.fn.showLoading=function(options){var indicatorID;var settings={'addClass':'','beforeShow':'','afterShow':'','hPos':'center','vPos':'center','indicatorZIndex':5001,'overlayZIndex':5000,'parent':'','marginTop':0,'marginLeft':0,'overlayWidth':null,'overlayHeight':null};jQuery.extend(settings,options);var loadingDiv=jQuery('<div></div>');var overlayDiv=jQuery('<div></div>');if(settings.indicatorID){indicatorID=settings.indicatorID;}
	else{indicatorID=jQuery(this).attr('id');}
	jQuery(loadingDiv).attr('id','loading-indicator-'+indicatorID);jQuery(loadingDiv).addClass('loading-indicator');if(settings.addClass){jQuery(loadingDiv).addClass(settings.addClass);}
	jQuery(overlayDiv).css('display','none');jQuery(document.body).append(overlayDiv);jQuery(overlayDiv).attr('id','loading-indicator-'+indicatorID+'-overlay');jQuery(overlayDiv).addClass('loading-indicator-overlay');if(settings.addClass){jQuery(overlayDiv).addClass(settings.addClass+'-overlay');}
	var overlay_width;var overlay_height;var border_top_width=jQuery(this).css('border-top-width');var border_left_width=jQuery(this).css('border-left-width');border_top_width=isNaN(parseInt(border_top_width))?0:border_top_width;border_left_width=isNaN(parseInt(border_left_width))?0:border_left_width;var overlay_left_pos=jQuery(this).offset().left+parseInt(border_left_width);var overlay_top_pos=jQuery(this).offset().top+parseInt(border_top_width);if(settings.overlayWidth!==null){overlay_width=settings.overlayWidth;}
	else{overlay_width=parseInt(jQuery(this).width())+parseInt(jQuery(this).css('padding-right'))+parseInt(jQuery(this).css('padding-left'));}
	if(settings.overlayHeight!==null){overlay_height=settings.overlayWidth;}
	else{overlay_height=parseInt(jQuery(this).height())+parseInt(jQuery(this).css('padding-top'))+parseInt(jQuery(this).css('padding-bottom'));}
	jQuery(overlayDiv).css('width',overlay_width.toString()+'px');jQuery(overlayDiv).css('height',overlay_height.toString()+'px');jQuery(overlayDiv).css('left',overlay_left_pos.toString()+'px');jQuery(overlayDiv).css('position','absolute');jQuery(overlayDiv).css('top',overlay_top_pos.toString()+'px');jQuery(overlayDiv).css('z-index',settings.overlayZIndex);if(settings.overlayCSS){jQuery(overlayDiv).css(settings.overlayCSS);}
	jQuery(loadingDiv).css('display','none');jQuery(document.body).append(loadingDiv);jQuery(loadingDiv).css('position','absolute');jQuery(loadingDiv).css('z-index',settings.indicatorZIndex);var indicatorTop=overlay_top_pos;if(settings.marginTop){indicatorTop+=parseInt(settings.marginTop);}
	var indicatorLeft=overlay_left_pos;if(settings.marginLeft){indicatorLeft+=parseInt(settings.marginTop);}
	if(settings.hPos.toString().toLowerCase()=='center'){jQuery(loadingDiv).css('left',(indicatorLeft+((jQuery(overlayDiv).width()-parseInt(jQuery(loadingDiv).width()))/2)).toString()+'px');}
	else if(settings.hPos.toString().toLowerCase()=='left'){jQuery(loadingDiv).css('left',(indicatorLeft+parseInt(jQuery(overlayDiv).css('margin-left'))).toString()+'px');}
	else if(settings.hPos.toString().toLowerCase()=='right'){jQuery(loadingDiv).css('left',(indicatorLeft+(jQuery(overlayDiv).width()-parseInt(jQuery(loadingDiv).width()))).toString()+'px');}
	else{jQuery(loadingDiv).css('left',(indicatorLeft+parseInt(settings.hPos)).toString()+'px');}
	if(settings.vPos.toString().toLowerCase()=='center'){jQuery(loadingDiv).css('top',(indicatorTop+((jQuery(overlayDiv).height()-parseInt(jQuery(loadingDiv).height()))/2)).toString()+'px');}
	else if(settings.vPos.toString().toLowerCase()=='top'){jQuery(loadingDiv).css('top',indicatorTop.toString()+'px');}
	else if(settings.vPos.toString().toLowerCase()=='bottom'){jQuery(loadingDiv).css('top',(indicatorTop+(jQuery(overlayDiv).height()-parseInt(jQuery(loadingDiv).height()))).toString()+'px');}
	else{jQuery(loadingDiv).css('top',(indicatorTop+parseInt(settings.vPos)).toString()+'px');}
	if(settings.css){jQuery(loadingDiv).css(settings.css);}
	var callback_options={'overlay':overlayDiv,'indicator':loadingDiv,'element':this};if(typeof(settings.beforeShow)=='function'){settings.beforeShow(callback_options);}
	jQuery(overlayDiv).show();jQuery(loadingDiv).show();if(typeof(settings.afterShow)=='function'){settings.afterShow(callback_options);}
	return this;};jQuery.fn.hideLoading=function(options){var settings={};jQuery.extend(settings,options);if(settings.indicatorID){indicatorID=settings.indicatorID;}
	else{indicatorID=jQuery(this).attr('id');}
	jQuery(document.body).find('#loading-indicator-'+indicatorID).remove();jQuery(document.body).find('#loading-indicator-'+indicatorID+'-overlay').remove();return this;};


/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery UI Virtual Keyboard v1.22.5 *//*

	Author: Jeremy Satterfield
	Modified: Rob Garrison (Mottie on github)
	-----------------------------------------
	Licensed under the MIT License

	Caret code modified from jquery.caret.1.02.js
	Licensed under the MIT License:
	http://www.opensource.org/licenses/mit-license.php
	-----------------------------------------

	An on-screen virtual keyboard embedded within the browser window which
	will popup when a specified entry field is focused. The user can then
	type and preview their input before Accepting or Canceling.

	As a plugin to jQuery UI styling and theme will automatically
	match that used by jQuery UI with the exception of the required CSS.

	Requires: jQuery v1.4.3+
	Optional:
	 jQuery UI (position utility only) & CSS theme
	 jQuery mousewheel

	Setup/Usage:
		Please refer to https://github.com/Mottie/Keyboard/wiki
	*/
	/*jshint browser:true, jquery:true, unused:false */
	/*global require:false, define:false, module:false */
	;(function(factory) {
		if (true) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module === 'object' && typeof module.exports === 'object') {
			module.exports = factory(require('jquery'));
		} else {
			factory(jQuery);
		}
	}(function($) {
	'use strict';
	var $keyboard = $.keyboard = function(el, options){
		var base = this, o;

		base.version = '1.22.5';

		// Access to jQuery and DOM versions of element
		base.$el = $(el);
		base.el = el;

		// Add a reverse reference to the DOM object
		base.$el.data('keyboard', base);

		base.init = function(){
			var kbcss = $keyboard.css;
			base.settings = options || {};
			base.options = o = $.extend(true, {}, $keyboard.defaultOptions, options);

			// keyboard is active (not destroyed);
			base.el.active = true;
			// unique keyboard namespace
			base.namespace = '.keyboard' + Math.random().toString(16).slice(2);
			// Shift and Alt key toggles, sets is true if a layout has more than one keyset
			// used for mousewheel message
			base.shiftActive = base.altActive = base.metaActive = base.sets = base.capsLock = false;
			// Class names of the basic key set - meta keysets are handled by the keyname
			base.rows = [ '', '-shift', '-alt', '-alt-shift' ];

			base.inPlaceholder = base.$el.attr('placeholder') || '';
			// html 5 placeholder/watermark
			base.watermark = $keyboard.watermark && base.inPlaceholder !== '';
			// convert mouse repeater rate (characters per second) into a time in milliseconds.
			base.repeatTime = 1000/(o.repeatRate || 20);
			// delay in ms to prevent mousedown & touchstart from both firing events at the same time
			o.preventDoubleEventTime = o.preventDoubleEventTime || 100;
			// flag indication that a keyboard is open
			base.isOpen = false;
			// is mousewheel plugin loaded?
			base.wheel = $.isFunction( $.fn.mousewheel );
			// keyCode of keys always allowed to be typed - caps lock, page up & down, end, home, arrow, insert &
			// delete keys
			base.alwaysAllowed = [20,33,34,35,36,37,38,39,40,45,46];
			base.$keyboard = [];
			// keyboard enabled
			base.enabled = true;
			// make a copy of the original keyboard position
			if (!$.isEmptyObject(o.position)) {
				o.position.orig_at = o.position.at;
			}

			base.checkCaret = ( o.lockInput || $keyboard.checkCaretSupport() );

			// [shift, alt, meta]
			base.last = { start:0, end:0, key:'', val:'', layout:'', virtual:true, keyset: [false, false, false] };
			base.temp = [ '', 0, 0 ]; // used when building the keyboard - [keyset element, row, index]

			// Bind events
			$.each('initialized beforeVisible visible hidden canceled accepted beforeClose'.split(' '), function(i,f){
				if ($.isFunction(o[f])){
					base.$el.bind(f + base.namespace, o[f]);
				}
			});

			// Close with esc key & clicking outside
			if (o.alwaysOpen) { o.stayOpen = true; }
			$(document).bind('mousedown keyup touchstart checkkeyboard '.split(' ').join(base.namespace + ' '), function(e){
				if (base.opening) { return; }
				base.escClose(e);
				// needed for IE to allow switching between keyboards smoothly
				if ( e.target && $(e.target).hasClass( kbcss.input ) ) {
					var kb = $(e.target).data('keyboard');
					// only trigger on self
					if (kb === base && kb.options.openOn) {
						kb.focusOn();
					}
				}
			});

			// Display keyboard on focus
			base.$el
				.addClass( kbcss.input + ' ' + o.css.input )
				.attr({ 'aria-haspopup' : 'true', 'role' : 'textbox' });

			// add disabled/readonly class - dynamically updated on reveal
			if (base.$el.is(':disabled') || (base.$el.attr('readonly') &&
				!base.$el.hasClass(kbcss.locked))) {
				base.$el.addClass(kbcss.noKeyboard);
			}
			if (o.openOn) {
				base.$el.bind(o.openOn + base.namespace, function(){
					base.focusOn();
				});
			}

			// Add placeholder if not supported by the browser
			if (!base.watermark && base.$el.val() === '' && base.inPlaceholder !== '' &&
				base.$el.attr('placeholder') !== '') {
				base.$el
					.addClass(kbcss.placeholder) // css watermark style (darker text)
					.val( base.inPlaceholder );
			}

			base.$el.trigger( $keyboard.events.kbInit, [ base, base.el ] );

			// initialized with keyboard open
			if (o.alwaysOpen) {
				base.reveal();
			}

		};

		base.toggle = function(){
			var $toggle = base.$keyboard.find( '.' + $keyboard.css.keyToggle ),
				locked = !base.enabled;
			// prevent physical keyboard from working
			base.$preview.prop( 'readonly', locked );
			// disable all buttons
			base.$keyboard
				.toggleClass( $keyboard.css.keyDisabled, locked )
				.find( '.' + $keyboard.css.keyButton )
				.not( $toggle )
				.prop( 'disabled', locked )
				.attr( 'aria-disabled', locked );
			$toggle.toggleClass( $keyboard.css.keyDisabled, locked );
			// stop auto typing
			if ( locked && base.typing_options ) {
				base.typing_options.text = '';
			}
		};

		base.setCurrent = function(){
			var kbcss = $keyboard.css;
			// ui-keyboard-has-focus is applied in case multiple keyboards have alwaysOpen = true and are stacked
			$('.' + kbcss.hasFocus).removeClass(kbcss.hasFocus);
			$('.' + kbcss.isCurrent).removeClass(kbcss.isCurrent);

			base.$el.addClass(kbcss.isCurrent);
			base.$keyboard.addClass(kbcss.hasFocus);
			base.isCurrent(true);
			base.isOpen = true;
		};

		base.isCurrent = function(set){
			var cur = $keyboard.currentKeyboard || false;
			if (set) {
				cur = $keyboard.currentKeyboard = base.el;
			} else if (set === false && cur === base.el) {
				cur = $keyboard.currentKeyboard = '';
			}
			return cur === base.el;
		};

		base.isVisible = function() {
			return base.$keyboard && base.$keyboard.length ? base.$keyboard.is(':visible') : false;
		};

		base.focusOn = function(){
			if (!el.active) {
				// keyboard was destroyed
				return;
			}
			if (base.$el.is(':visible')) {
				// caret position is always 0,0 in webkit; and nothing is focused at this point... odd
				// save caret position in the input to transfer it to the preview
				// add delay to get correct caret position
				base.timer2 = setTimeout(function(){
					var undef;
					// Number inputs don't support selectionStart and selectionEnd
					// Number/email inputs don't support selectionStart and selectionEnd
					if ( !/(number|email)/i.test(base.el.type) && !o.caretToEnd ) {
						base.saveCaret( undef, undef, base.$el );
					}
				}, 20);
			}
			if (!base.isVisible()) {
				clearTimeout(base.timer);
				base.reveal();
			}
			if (o.alwaysOpen) {
				base.setCurrent();
			}
		};

		base.reveal = function(refresh){
			if (base.isOpen) {
				refresh = true;
			}
			var kbcss = $keyboard.css;
			base.opening = true;
			// remove all 'extra' keyboards
			$('.' + kbcss.keyboard).not('.' + kbcss.alwaysOpen).remove();

			// update keyboard after a layout change
			if (refresh) {
				base.isOpen = false;
				base.last.val = base.$preview && base.$preview.val() || '';
				if (base.$keyboard.length) {
					base.$keyboard.remove();
					base.$keyboard = [];
					base.shiftActive = base.altActive = base.metaActive = false;
				}
			}

			// Don't open if disabled
			if (base.$el.is(':disabled') || (base.$el.attr('readonly') &&
				!base.$el.hasClass(kbcss.locked))) {
				base.$el.addClass(kbcss.noKeyboard);
				return;
			} else {
				base.$el.removeClass(kbcss.noKeyboard);
			}

			// Unbind focus to prevent recursion - openOn may be empty if keyboard is opened externally
			if (o.openOn) {
				base.$el.unbind( o.openOn + base.namespace );
			}

			// build keyboard if it doesn't exist; or attach keyboard if it was removed, but not cleared
			if ( !base.$keyboard || base.$keyboard && ( !base.$keyboard.length || $.contains(document.body, base.$keyboard[0]) ) ) {
				base.startup();
			}

			// clear watermark
			if (!base.watermark && base.el.value === base.inPlaceholder) {
				base.$el
					.removeClass(kbcss.placeholder)
					.val('');
			}
			// save starting content, in case we cancel
			base.originalContent = base.$el.val();
			base.$preview.val( refresh ? base.last.val : base.originalContent );

			// disable/enable accept button
			if (o.acceptValid) { base.checkValid(); }

			if (o.resetDefault) {
				base.shiftActive = base.altActive = base.metaActive = false;
				base.showKeySet();
			}

			// beforeVisible event
			base.$el.trigger( $keyboard.events.kbBeforeVisible, [ base, base.el ] );

			base.setCurrent();
			// update keyboard - enabled or disabled?
			base.toggle();

			// show keyboard
			base.$keyboard.show();

			// adjust keyboard preview window width - save width so IE won't keep expanding (fix issue #6)
			if (o.usePreview && $keyboard.msie) {
				if (typeof base.width === 'undefined') {
					base.$preview.hide(); // preview is 100% browser width in IE7, so hide the damn thing
					base.width = Math.ceil(base.$keyboard.width()); // set input width to match the widest keyboard row
					base.$preview.show();
				}
				base.$preview.width(base.width);
			}

			base.position = $.isEmptyObject(o.position) ? false : o.position;

			// position after keyboard is visible (required for UI position utility) and appropriately sized
			if ($.ui && $.ui.position && base.position) {
				// get single target position || target stored in element data (multiple targets) || default @ element
				base.position.of = base.position.of || base.$el.data('keyboardPosition') || base.$el;
				base.position.collision = base.position.collision || 'flipfit flipfit';
				o.position.at = o.usePreview ? o.position.orig_at : o.position.at2;
				base.$keyboard.position(base.position);
			}

			base.checkDecimal();

			// get preview area line height
			// add roughly 4px to get line height from font height, works well for font-sizes from 14-36px
			// needed for textareas
			base.lineHeight = parseInt( base.$preview.css('lineHeight'), 10) ||
				parseInt(base.$preview.css('font-size') ,10) + 4;

			if (o.caretToEnd) {
				base.saveCaret( base.originalContent.length, base.originalContent.length );
			}

			// IE caret haxx0rs
			if ($keyboard.allie){
				// sometimes end = 0 while start is > 0
				if (base.last.end === 0 && base.last.start > 0) {
					base.last.end = base.last.start;
				}
				// IE will have start -1, end of 0 when not focused (see demo: http://jsfiddle.net/Mottie/fgryQ/3/)
				if (base.last.start < 0) {
					// ensure caret is at the end of the text (needed for IE)
					base.last.start = base.last.end = base.originalContent.length;
				}
			}

			// opening keyboard flag; delay allows switching between keyboards without immediately closing
			// the keyboard
			base.timer2 = setTimeout(function(){
				base.opening = false;
				if (o.initialFocus) {
					$keyboard.caret( base.$preview, base.last );
				}
				// save event time for keyboards with stayOpen: true
				base.last.eventTime = new Date().getTime();
				base.$el.trigger( $keyboard.events.kbVisible, [ base, base.el ] );
				base.timer = setTimeout(function(){
					// get updated caret information after visible event - fixes #331
					if (base) { // Check if base exists, this is a case when destroy is called, before timers have fired
						base.saveCaret();
					}
				}, 200);
			}, 10);
			// return base to allow chaining in typing extension
			return base;
		};

		base.updateLanguage = function(){
			// change language if layout is named something like 'french-azerty-1'
			var layouts =  $keyboard.layouts,
				lang = o.language || layouts[ o.layout ] && layouts[ o.layout ].lang && layouts[ o.layout ].lang || [ o.language || 'en' ],
				kblang = $keyboard.language;

			// some languages include a dash, e.g. 'en-gb' or 'fr-ca'
			// allow o.language to be a string or array...
			// array is for future expansion where a layout can be set for multiple languages
			lang = ( $.isArray(lang) ? lang[0] : lang ).split('-')[0];

			// set keyboard language
			o.display = $.extend( true, {}, kblang.en.display, kblang[ lang ] && kblang[ lang ].display || {}, base.settings.display );

			o.combos = $.extend( true, {}, kblang.en.combos, kblang[ lang ] && kblang[ lang ].combos || {}, base.settings.combos );
			o.wheelMessage = kblang[ lang ] && kblang[ lang ].wheelMessage || kblang.en.wheelMessage;
			// rtl can be in the layout or in the language definition; defaults to false
			o.rtl = layouts[ o.layout ] && layouts[ o.layout ].rtl || kblang[ lang ] && kblang[ lang ].rtl  || false;

			// save default regex (in case loading another layout changes it)
			base.regex = kblang[ lang ] && kblang[ lang ].comboRegex || $keyboard.comboRegex;
			// determine if US '.' or European ',' system being used
			base.decimal = /^\./.test(o.display.dec);
			base.$el
				.toggleClass('rtl', o.rtl)
				.css('direction', o.rtl ? 'rtl' : '');
		};

		base.startup = function(){
			var kbcss = $keyboard.css;
			// ensure base.$preview is defined
			base.$preview = base.$el;

			if ( !(base.$keyboard && base.$keyboard.length) ) {
				// custom layout - create a unique layout name based on the hash
				if (o.layout === 'custom') { o.layoutHash = 'custom' + base.customHash(); }
				base.layout = o.layout === 'custom' ? o.layoutHash : o.layout;
				base.last.layout = base.layout;

				base.updateLanguage();

				if (typeof $keyboard.builtLayouts[base.layout] === 'undefined') {
					if ($.isFunction(o.create)) {
						o.create(base);
					}
					if (!base.$keyboard.length) {
						base.buildKeyboard(base.layout, true);
					}
				}
				base.$keyboard = $keyboard.builtLayouts[base.layout].$keyboard.clone();
				if ( ( base.el.id || '' ) !== '' ) {
					// add ID to keyboard for styling purposes
					base.$keyboard.attr( 'id', base.el.id + $keyboard.css.idSuffix );
				}

				// build preview display
				if (o.usePreview) {
					// restore original positioning (in case usePreview option is altered)
					if (!$.isEmptyObject(o.position)) {
						o.position.at = o.position.orig_at;
					}
					base.$preview = base.$el.clone(false)
						.removeAttr('id')
						.removeClass(kbcss.placeholder + ' ' + kbcss.input)
						.addClass(kbcss.preview + ' ' + o.css.input)
						.removeAttr('aria-haspopup')
						.attr('tabindex', '-1')
						.show(); // for hidden inputs
					// Switch the number input fields to text so the caret positioning will work again
					if (base.$preview.attr('type') == 'number') {
						base.$preview.attr('type', 'text');
					}
					// build preview container and append preview display
					$('<div />')
						.addClass(kbcss.wrapper)
						.append(base.$preview)
						.prependTo(base.$keyboard);
				} else {
					// No preview display, use element and reposition the keyboard under it.
					if (!$.isEmptyObject(o.position)) {
						o.position.at = o.position.at2;
					}
				}

			}

			base.preview = base.$preview[0];
			base.$decBtn = base.$keyboard.find('.' + kbcss.keyPrefix + 'dec');
			// add enter to allowed keys; fixes #190
			if (o.enterNavigation || base.el.nodeName === 'TEXTAREA') { base.alwaysAllowed.push(13); }
			if (o.lockInput) {
				base.$preview.addClass(kbcss.locked).attr({ 'readonly': 'readonly'});
			}

			base.bindKeyboard();

			base.$keyboard.appendTo( o.appendLocally ? base.$el.parent() : o.appendTo || 'body' );

			base.bindKeys();

			// adjust with window resize; don't check base.position
			// here in case it is changed dynamically
			if (o.reposition && $.ui && $.ui.position && o.appendTo == 'body') {
				$(window).bind('resize' + base.namespace, function(){
					if (base.position && base.isVisible()) {
						base.$keyboard.position(base.position);
					}
				});
			}

		};

		base.saveCaret = function(start, end, $el){
			var p = $keyboard.caret( $el || base.$preview, start, end );
			base.last.start = start || p.start;
			base.last.end = end || p.end;
		};

		base.setScroll = function(){
			// Set scroll so caret & current text is in view
			// needed for virtual keyboard typing, NOT manual typing - fixes #23
			if ( base.last.virtual ) {

				var scrollWidth, clientWidth, adjustment, direction,
					isTextarea = base.preview.nodeName === 'TEXTAREA',
					value = base.last.val.substring( 0, Math.max( base.last.start, base.last.end ) );

				if ( !base.$previewCopy ) {
					// clone preview
					base.$previewCopy = base.$preview.clone()
						.removeAttr('id') // fixes #334
						.css({
							position : 'absolute',
							zIndex : -10,
							visibility : 'hidden'
						})
						.addClass('ui-keyboard-preview-clone');
					if ( !isTextarea ) {
						// make input zero-width because we need an accurate scrollWidth
						base.$previewCopy.css({ 'white-space' : 'pre', 'width' : 0 });
					}
					if (o.usePreview) {
						// add clone inside of preview wrapper
						base.$preview.after( base.$previewCopy );
					} else {
						// just slap that thing in there somewhere
						base.$keyboard.prepend( base.$previewCopy );
					}
				}

				if ( isTextarea ) {
					// need the textarea scrollHeight, so set the clone textarea height to be the line height
					base.$previewCopy
						.height( base.lineHeight )
						.val( value );
					// set scrollTop for Textarea
					base.preview.scrollTop = base.lineHeight * ( Math.floor( base.$previewCopy[0].scrollHeight / base.lineHeight ) - 1 );
				} else {
					// add non-breaking spaces
					base.$previewCopy.val( value.replace(/\s/g, '\xa0') );

					// if scrollAdjustment option is set to "c" or "center" then center the caret
					adjustment = /c/i.test( o.scrollAdjustment ) ? base.preview.clientWidth / 2 : o.scrollAdjustment;
					scrollWidth = base.$previewCopy[0].scrollWidth - 1;

					// set initial state as moving right
					if ( typeof base.last.scrollWidth === 'undefined' ) {
						base.last.scrollWidth = scrollWidth;
						base.last.direction = true;
					}
					// if direction = true; we're scrolling to the right
					direction = base.last.scrollWidth === scrollWidth ? base.last.direction : base.last.scrollWidth < scrollWidth;
					clientWidth = base.preview.clientWidth - adjustment;

					// set scrollLeft for inputs; try to mimic the inherit caret positioning + scrolling:
					// hug right while scrolling right...
					if ( direction ) {
						if ( scrollWidth < clientWidth ) {
							base.preview.scrollLeft = 0;
						} else {
							base.preview.scrollLeft = scrollWidth - clientWidth;
						}
					} else {
						// hug left while scrolling left...
						if ( scrollWidth >= base.preview.scrollWidth - clientWidth ) {
							base.preview.scrollLeft = base.preview.scrollWidth - adjustment;
						} else if ( scrollWidth - adjustment > 0 ) {
							base.preview.scrollLeft = scrollWidth - adjustment;
						} else {
							base.preview.scrollLeft = 0;
						}
					}

					base.last.scrollWidth = scrollWidth;
					base.last.direction = direction;
				}
			}
		};

		base.bindKeyboard = function(){
			var evt, layout = $keyboard.builtLayouts[base.layout];
			base.$preview
				.unbind('keypress keyup keydown mouseup touchend '.split(' ').join(base.namespace + ' '))
				.bind('click' + base.namespace, function(){
					// update last caret position after user click, use at least 150ms or it doesn't work in IE
					base.timer2 = setTimeout(function(){
						base.saveCaret();
					}, 150);
				})
				.bind('keypress' + base.namespace, function(e){
					if (o.lockInput) { return false; }
					var k = base.last.key = String.fromCharCode(e.charCode || e.which);
					base.last.virtual = false;
					base.last.event = e;
					base.last.$key = []; // not a virtual keyboard key
					if (base.checkCaret) {
						base.saveCaret();
					}

					// update caps lock - can only do this while typing =(
					base.capsLock = (((k >= 65 && k <= 90) && !e.shiftKey) ||
						((k >= 97 && k <= 122) && e.shiftKey)) ? true : false;

					// restrict input - keyCode in keypress special keys:
					// see http://www.asquare.net/javascript/tests/KeyCode.html
					if (o.restrictInput) {
						// allow navigation keys to work - Chrome doesn't fire a keypress event (8 = bksp)
						if ( (e.which === 8 || e.which === 0) && $.inArray( e.keyCode, base.alwaysAllowed ) ) { return; }
						// quick key check
						if ($.inArray(k, layout.acceptedKeys) === -1) {
							e.preventDefault();
							// copy event object in case e.preventDefault() breaks when changing the type
							evt = $.extend({}, e);
							evt.type = $keyboard.events.inputRestricted;
							base.$el.trigger( evt, [ base, base.el ] );
							if ( $.isFunction(o.restricted) ) {
								o.restricted( evt, base, base.el );
							}
						}
					} else if ( (e.ctrlKey || e.metaKey) && (e.which === 97 || e.which === 99 || e.which === 118 ||
							(e.which >= 120 && e.which <=122)) ) {
						// Allow select all (ctrl-a:97), copy (ctrl-c:99), paste (ctrl-v:118) & cut (ctrl-x:120) &
						// redo (ctrl-y:121)& undo (ctrl-z:122); meta key for mac
						return;
					}
					// Mapped Keys - allows typing on a regular keyboard and the mapped key is entered
					// Set up a key in the layout as follows: 'm(a):label'; m = key to map, (a) = actual keyboard key
					// to map to (optional), ':label' = title/tooltip (optional)
					// example: \u0391 or \u0391(A) or \u0391:alpha or \u0391(A):alpha
					if (layout.hasMappedKeys) {
						if (layout.mappedKeys.hasOwnProperty(k)){
							base.last.key = layout.mappedKeys[k];
							base.insertText( base.last.key );
							e.preventDefault();
						}
					}
					base.checkMaxLength();

				})
				.bind('keyup' + base.namespace, function(e){
					base.last.virtual = false;
					switch (e.which) {
						// Insert tab key
						case 9 :
							// Added a flag to prevent from tabbing into an input, keyboard opening, then adding the tab to the keyboard preview
							// area on keyup. Sadly it still happens if you don't release the tab key immediately because keydown event auto-repeats
							if (base.tab && o.tabNavigation && !o.lockInput) {
								base.shiftActive = e.shiftKey;
								// when switching inputs, the tab keyaction returns false
								var notSwitching = $keyboard.keyaction.tab(base);
								base.tab = false;
								if (!notSwitching) { return false; }
							} else {
								e.preventDefault();
							}
							break;

						// Escape will hide the keyboard
						case 27:
							base.close( o.autoAccept && o.autoAcceptOnEsc ? 'true' : false );
							return false;
					}

					// throttle the check combo function because fast typers will have an incorrectly positioned caret
					clearTimeout(base.throttled);
					base.throttled = setTimeout(function(){
						// fix error in OSX? see issue #102
						if (base.isVisible()) {
							base.checkCombos();
						}
					}, 100);

					base.checkMaxLength();
					// change callback is no longer bound to the input element as the callback could be
					// called during an external change event with all the necessary parameters (issue #157)
					base.$el.trigger( $keyboard.events.kbChange, [ base, base.el ] );
					base.last.val = base.$preview.val();

					if ($.isFunction(o.change)){
						o.change( $.Event('change'), base, base.el );
						return false;
					}
				})
				.bind('keydown' + base.namespace, function(e){
					base.last.virtual = false;
					switch (e.which) {

						case 8 :
							$keyboard.keyaction.bksp(base, null, e);
							e.preventDefault();
							break;

						// prevent tab key from leaving the preview window
						case 9 :
							if (o.tabNavigation) {
								// allow tab to pass through - tab to next input/shift-tab for prev
								base.tab = true;
								return false;
							} else {
								base.tab = true; // see keyup comment above
								return false;
							}
							break; // adding a break here to make jsHint happy

						case 13:
							$keyboard.keyaction.enter(base, null, e);
							break;

						// Show capsLock
						case 20:
							base.shiftActive = base.capsLock = !base.capsLock;
							base.showKeySet(this);
							break;

						case 86:
							// prevent ctrl-v/cmd-v
							if (e.ctrlKey || e.metaKey) {
								if (o.preventPaste) { e.preventDefault(); return; }
								base.checkCombos(); // check pasted content
							}
							break;
					}
				})
				.bind('mouseup touchend '.split(' ').join(base.namespace + ' '), function(){
					base.last.virtual = true;
					if (base.checkCaret) {
						base.saveCaret();
					}
				});

			// prevent keyboard event bubbling
			base.$keyboard.bind('mousedown click touchstart '.split(' ').join(base.namespace + ' '), function(e){
				e.stopPropagation();
				if (!base.isCurrent()) {
					base.reveal();
					$(document).trigger('checkkeyboard' + base.namespace);
				}
				base.$preview.focus();
			});

			// If preventing paste, block context menu (right click)
			if (o.preventPaste){
				base.$preview.bind('contextmenu' + base.namespace, function(e){ e.preventDefault(); });
				base.$el.bind('contextmenu' + base.namespace, function(e){ e.preventDefault(); });
			}

		};

		base.bindKeys = function(){
			var kbcss = $keyboard.css;
			base.$allKeys = base.$keyboard.find('button.' + kbcss.keyButton)
				.unbind(base.namespace + ' ' + base.namespace + 'kb')
				.bind(o.keyBinding.split(' ').join(base.namespace + ' ') + base.namespace + ' ' + $keyboard.events.kbRepeater, function(e){
					e.preventDefault();
					// prevent errors when external triggers attempt to 'type' - see issue #158
					if (!base.$keyboard.is(':visible')){ return false; }
					// 'key', { action: doAction, original: n, curtxt : n, curnum: 0 }
					var action, $key,
						indx = 0,
						key = this,
						$this = $(key),
						// get keys from other layers/keysets (shift, alt, meta, etc) that line up by data-position
						$keys = base.getLayers( $this ),
						txt = $keys.map(function(){ return $(this).attr('data-curtxt'); }).get(),
						// prevent mousedown & touchstart from both firing events at the same time - see #184
						timer = new Date().getTime();
					// find index of mousewheel selected key
					$keys.each(function(i, v){
						if (v === key) {
							indx = i;
							return false;
						}
					});
					// target mousewheel selected key
					$key = indx < 0 ? $this : $keys.eq(indx + $this.data('curnum'));
					action = $key.attr('data-action');
					// don't split colon key. Fixes #264
					action = action === ':' ? ':' : (action || '').split(':')[0];
					if (timer - (base.last.eventTime || 0) < o.preventDoubleEventTime) { return; }
					base.last.eventTime = timer;
					base.last.event = e;
					base.last.virtual = true;
					base.$preview.focus();
					base.last.$key = $key;
					base.last.key = $key.attr('data-curtxt');
					// Start caret in IE when not focused (happens with each virtual keyboard button click
					if (base.checkCaret) {
						$keyboard.caret( base.$preview, base.last );
					}
					if (action.match('meta')) { action = 'meta'; }
					if (action in $keyboard.keyaction && $.isFunction($keyboard.keyaction[action])) {
						// stop processing if action returns false (close & cancel)
						if ($keyboard.keyaction[action](base,this,e) === false) { return false; }
					} else if (typeof action !== 'undefined') {
						txt = base.last.key = (base.wheel && !$(this).hasClass(kbcss.keyAction)) ?
							base.last.key : action;
						base.insertText(txt);
						if (!base.capsLock && !o.stickyShift && !e.shiftKey) {
							base.shiftActive = false;
							base.showKeySet(this);
						}
					}
					// set caret if caret moved by action function; also, attempt to fix issue #131
					$keyboard.caret( base.$preview, base.last );
					base.checkCombos();
					base.$el.trigger( $keyboard.events.kbChange, [ base, base.el ] );
					base.last.val = base.$preview.val();

					if ($.isFunction(o.change)){
						o.change( $.Event( $keyboard.events.inputChange ), base, base.el );
						// return false to prevent reopening keyboard if base.accept() was called
						return false;
					}

				})
				// Change hover class and tooltip
				.bind('mouseenter mouseleave touchstart '.split(' ').join(base.namespace + ' '), function(e){
					if (!base.isCurrent()) { return; }
					var $this = $(this),
						$keys = base.getLayers( $this ),
						txt = ( $keys.length ? $keys.map(function(){ return $(this).attr('data-curtxt') || ''; }).get() : '' ) || [ $this.find('.' + kbcss.keyText).text() ];

					if ((e.type === 'mouseenter' || e.type === 'touchstart') && base.el.type !== 'password' &&
						!$this.hasClass(o.css.buttonDisabled) ){
						$this
							.addClass(o.css.buttonHover)
							.attr('title', function(i,t){
								// show mouse wheel message
								return (base.wheel && t === '' && base.sets && txt.length > 1 && e.type !== 'touchstart') ?
									o.wheelMessage : t;
							});
					}
					if (e.type === 'mouseleave'){
						$this.data({
							'curtxt' : $this.data('original'),
							'curnum' : 0
						});
						$this
							// needed or IE flickers really bad
							.removeClass( (base.el.type === 'password') ? '' : o.css.buttonHover)
							.attr('title', function(i,t){ return (t === o.wheelMessage) ? '' : t; })
							.find('.' + kbcss.keyText).html( $this.data('original') ); // restore original button text
					}
				})
				// using 'kb' namespace for mouse repeat functionality to keep it separate
				// I need to trigger a 'repeater.keyboard' to make it work
				.bind('mouseup' + base.namespace + ' ' + 'mouseleave touchend touchmove touchcancel '.split(' ').join(base.namespace + 'kb '), function(e){
					base.last.virtual = true;
					if (/(mouseleave|touchend|touchcancel)/i.test(e.type)) {
						$(this).removeClass(o.css.buttonHover); // needed for touch devices
					} else {
						if (base.isVisible() && base.isCurrent()) { base.$preview.focus(); }
						if (base.checkCaret) {
							$keyboard.caret( base.$preview, base.last );
						}
					}
					base.mouseRepeat = [false,''];
					clearTimeout(base.repeater); // make sure key repeat stops!
					return false;
				})
				// prevent form submits when keyboard is bound locally - issue #64
				.bind('click' + base.namespace, function(){
					return false;
				})
				// no mouse repeat for action keys (shift, ctrl, alt, meta, etc)
				.not('.' + kbcss.keyAction)
				// Allow mousewheel to scroll through other keysets of the same (non-action) key
				.bind('mousewheel' + base.namespace, function(e, delta){
					if (base.wheel) {
						// deltaY used by newer versions of mousewheel plugin
						delta = delta || e.deltaY;
						var n,
							$this = $(this),
							$keys = base.getLayers( $this ),
							txt = $keys.length && $keys.map(function(){ return $(this).attr('data-curtxt'); }).get() || [ $this.find('.' + kbcss.keyText).text() ];
						if (txt.length > 1) {
							n = $this.data('curnum') + (delta > 0 ? -1 : 1);
							if (n > txt.length-1) { n = 0; }
							if (n < 0) { n = txt.length-1; }
						} else {
							n = 0;
						}
						$this.data({
							'curnum' : n,
							'layers' : txt,
							'curtxt' : txt[n]
						});
						$this.find('.' + kbcss.keyText).html( txt[n] );
						return false;
					}
				})
				// mouse repeated action key exceptions
				.add('.' + kbcss.keyPrefix + ('tab bksp space enter'.split(' ').join(',.' + kbcss.keyPrefix)), base.$keyboard)
				.bind('mousedown touchstart '.split(' ').join(base.namespace + 'kb '), function(){
					if (o.repeatRate !== 0) {
						var key = $(this);
						base.mouseRepeat = [true, key]; // save the key, make sure we are repeating the right one (fast typers)
						setTimeout(function() {
							if (base.mouseRepeat[0] && base.mouseRepeat[1] === key) { base.repeatKey(key); }
						}, o.repeatDelay);
					}
					return false;
				});
		};

		// Insert text at caret/selection - thanks to Derek Wickwire for fixing this up!
		base.insertText = function(txt){
			var bksp, t,
				isBksp = txt === '\b',
				// use base.$preview.val() instead of base.preview.value (val.length includes carriage returns in IE).
				val = base.$preview.val(),
				pos = $keyboard.caret( base.$preview ),
				len = val.length; // save original content length

			// silly IE caret hacks... it should work correctly, but navigating using arrow keys in a textarea
			// is still difficult
			// in IE, pos.end can be zero after input loses focus
			if (pos.end < pos.start) { pos.end = pos.start; }
			if (pos.start > len) { pos.end = pos.start = len; }

			if (base.preview.nodeName === 'TEXTAREA') {
				// This makes sure the caret moves to the next line after clicking on enter (manual typing works fine)
				if ($keyboard.msie && val.substr(pos.start, 1) === '\n') { pos.start += 1; pos.end += 1; }
			}

			bksp = isBksp && pos.start === pos.end;
			txt = isBksp ? '' : txt;
			t = pos.start + (bksp ? -1 : txt.length);

			if (txt === '{d}') {
				txt = '';
				t = pos.start;
				pos.end += 1;
			}

			base.$preview.val( val.substr(0, pos.start - (bksp ? 1 : 0)) + txt + val.substr(pos.end) );
			base.saveCaret( t, t ); // save caret in case of bksp
			base.setScroll();
		};

		// check max length
		base.checkMaxLength = function(){
			var start, caret,
				val = base.$preview.val();
			if (o.maxLength !== false && val.length > o.maxLength) {
				start = $keyboard.caret( base.$preview ).start;
				caret = Math.min(start, o.maxLength);

				// prevent inserting new characters when maxed #289
				if (!o.maxInsert) {
					val = base.last.val;
					caret = start - 1; // move caret back one
				}

				base.$preview.val( val.substring(0, o.maxLength) );
				// restore caret on change, otherwise it ends up at the end.
				base.saveCaret( caret, caret );
			}
			if (base.$decBtn.length) {
				base.checkDecimal();
			}
		};

		// mousedown repeater
		base.repeatKey = function(key){
			key.trigger( $keyboard.events.kbRepeater );
			if (base.mouseRepeat[0]) {
				base.repeater = setTimeout(function() {
					base.repeatKey(key);
				}, base.repeatTime);
			}
		};

		base.showKeySet = function(el){
			o = base.options; // refresh options
			var kbcss = $keyboard.css,
				key = '',
				toShow = (base.shiftActive ? 1 : 0) + (base.altActive ? 2 : 0);
			if (!base.shiftActive) { base.capsLock = false; }
			// check meta key set
			if (base.metaActive) {
				// the name attribute contains the meta set # 'meta99'
				key = (el && el.name && /meta/i.test(el.name)) ? el.name : '';
				// save active meta keyset name
				if (key === '') {
					key = (base.metaActive === true) ? '' : base.metaActive;
				} else {
					base.metaActive = key;
				}
				// if meta keyset doesn't have a shift or alt keyset, then show just the meta key set
				if ( (!o.stickyShift && base.last.keyset[2] !== base.metaActive) ||
					( (base.shiftActive || base.altActive) && !base.$keyboard.find('.' + kbcss.keySet + '-' + key +
						base.rows[toShow]).length) ) {
					base.shiftActive = base.altActive = false;
				}
			} else if (!o.stickyShift && base.last.keyset[2] !== base.metaActive && base.shiftActive) {
				// switching from meta key set back to default, reset shift & alt if using stickyShift
				base.shiftActive = base.altActive = false;
			}
			toShow = (base.shiftActive ? 1 : 0) + (base.altActive ? 2 : 0);
			key = (toShow === 0 && !base.metaActive) ? '-normal' : (key === '') ? '' : '-' + key;
			if (!base.$keyboard.find('.' + kbcss.keySet + key + base.rows[toShow]).length) {
				// keyset doesn't exist, so restore last keyset settings
				base.shiftActive = base.last.keyset[0];
				base.altActive = base.last.keyset[1];
				base.metaActive = base.last.keyset[2];
				return;
			}
			base.$keyboard
				.find('.' + kbcss.keyPrefix + 'alt,.' + kbcss.keyPrefix + 'shift,.' + kbcss.keyAction + '[class*=meta]')
					.removeClass(o.css.buttonActive).end()
				.find('.' + kbcss.keyPrefix + 'alt').toggleClass( o.css.buttonActive, base.altActive ).end()
				.find('.' + kbcss.keyPrefix + 'shift').toggleClass( o.css.buttonActive, base.shiftActive ).end()
				.find('.' + kbcss.keyPrefix + 'lock').toggleClass( o.css.buttonActive, base.capsLock ).end()
				.find('.' + kbcss.keySet).hide().end()
				.find('.' + kbcss.keySet + key + base.rows[toShow]).show().end()
				.find('.' + kbcss.keyAction + '.' + kbcss.keyboard + key).addClass(o.css.buttonActive);
			base.last.keyset = [ base.shiftActive, base.altActive, base.metaActive ];
			base.$el.trigger( $keyboard.events.kbKeysetChange, [ base, base.el ] );
		};

		// check for key combos (dead keys)
		base.checkCombos = function(){
			if (!base.isVisible()) { return base.$preview.val(); }
			var i, r, t, t2,
				// use base.$preview.val() instead of base.preview.value (val.length includes carriage returns in IE).
				val = base.$preview.val(),
				pos = $keyboard.caret( base.$preview ),
				layout = $keyboard.builtLayouts[base.layout],
				len = val.length; // save original content length

			// silly IE caret hacks... it should work correctly, but navigating using arrow keys in a textarea
			// is still difficult
			// in IE, pos.end can be zero after input loses focus
			if (pos.end < pos.start) { pos.end = pos.start; }
			if (pos.start > len) { pos.end = pos.start = len; }
			// This makes sure the caret moves to the next line after clicking on enter (manual typing works fine)
			if ($keyboard.msie && val.substr(pos.start, 1) === '\n') { pos.start += 1; pos.end += 1; }

			if (o.useCombos) {
				// keep 'a' and 'o' in the regex for ae and oe ligature (æ,œ)
				// thanks to KennyTM: http://stackoverflow.com/q/4275077
				// original regex /([`\'~\^\"ao])([a-z])/mig moved to $.keyboard.comboRegex
				if ($keyboard.msie) {
					// old IE may not have the caret positioned correctly, so just check the whole thing
					val = val.replace(base.regex, function(s, accent, letter){
						return (o.combos.hasOwnProperty(accent)) ? o.combos[accent][letter] || s : s;
					});
				// prevent combo replace error, in case the keyboard closes - see issue #116
				} else if (base.$preview.length) {
					// Modern browsers - check for combos from last two characters left of the caret
					t = pos.start - (pos.start - 2 >= 0 ? 2 : 0);
					// target last two characters
					$keyboard.caret( base.$preview, t, pos.end );
					// do combo replace
					t2 = ($keyboard.caret( base.$preview ).text || '').replace(base.regex, function(s, accent, letter){
						return (o.combos.hasOwnProperty(accent)) ? o.combos[accent][letter] || s : s;
					});
					// add combo back
					base.$preview.val( $keyboard.caret( base.$preview ).replaceStr(t2) );
					val = base.$preview.val();
				}
			}

			// check input restrictions - in case content was pasted
			if (o.restrictInput && val !== '') {
				t = val;
				r = layout.acceptedKeys.length;
				for (i=0; i < r; i++){
					if (t === '') { continue; }
					t2 = layout.acceptedKeys[i];
					if (val.indexOf(t2) >= 0) {
						// escape out all special characters
						if (/[\[|\]|\\|\^|\$|\.|\||\?|\*|\+|\(|\)|\{|\}]/g.test(t2)) { t2 = '\\' + t2; }
						t = t.replace( (new RegExp(t2, 'g')), '');
					}
				}
				// what's left over are keys that aren't in the acceptedKeys array
				if (t !== '') { val = val.replace(t, ''); }
			}

			// save changes, then reposition caret
			pos.start += val.length - len;
			pos.end += val.length - len;
			base.$preview.val(val);
			base.saveCaret( pos.start, pos.end );

			// set scroll to keep caret in view
			base.setScroll();

			base.checkMaxLength();

			if (o.acceptValid) { base.checkValid(); }

			return val; // return text, used for keyboard closing section
		};

		// Toggle accept button classes, if validating
		base.checkValid = function(){
			var kbcss = $keyboard.css,
				valid = true;
			if ($.isFunction(o.validate)) {
				valid = o.validate(base, base.$preview.val(), false);
			}
			// toggle accept button classes; defined in the css
			base.$keyboard.find('.' + kbcss.keyPrefix + 'accept')
				.toggleClass( kbcss.inputInvalid, !valid )
				.toggleClass( kbcss.inputValid, valid );

		};

		// Decimal button for num pad - only allow one (not used by default)
		base.checkDecimal = function(){
			// Check US '.' or European ',' format
			if ( ( base.decimal && /\./g.test(base.preview.value) ) ||
				( !base.decimal && /\,/g.test(base.preview.value) ) ) {
				base.$decBtn
					.attr({ 'disabled': 'disabled', 'aria-disabled': 'true' })
					.removeClass(o.css.buttonHover)
					.addClass(o.css.buttonDisabled);
			} else {
				base.$decBtn
					.removeAttr('disabled')
					.attr({ 'aria-disabled': 'false' })
					.addClass(o.css.buttonDefault)
					.removeClass(o.css.buttonDisabled);
			}
		};

		// get other layer values for a specific key
		base.getLayers = function($el){
			var kbcss = $keyboard.css,
				key = $el.attr('data-pos'),
				$keys = $el.closest('.' + kbcss.keyboard).find('button[data-pos="' + key + '"]');
			return $keys.filter(function(){ return $(this).find('.' + kbcss.keyText).text() !== ''; }).add($el);
		};

		// Go to next or prev inputs
		// goToNext = true, then go to next input; if false go to prev
		// isAccepted is from autoAccept option or true if user presses shift-enter
		base.switchInput = function(goToNext, isAccepted){
			if ($.isFunction(o.switchInput)) {
				o.switchInput(base, goToNext, isAccepted);
			} else {
				// base.$keyboard may be an empty array - see #275 (apod42)
				if (base.$keyboard.length) {
					base.$keyboard.hide();
				}
				var kb, stopped = false,
					all = $('button, input, textarea, a').filter(':visible').not(':disabled'),
					indx = all.index(base.$el) + (goToNext ? 1 : -1);
				if (base.$keyboard.length) {
					base.$keyboard.show();
				}
				if (indx > all.length - 1) {
					stopped = o.stopAtEnd;
					indx = 0; // go to first input
				}
				if (indx < 0) {
					stopped = o.stopAtEnd;
					indx = all.length - 1; // stop or go to last
				}
				if (!stopped) {
					isAccepted = base.close(isAccepted);
					if (!isAccepted) { return; }
					kb = all.eq(indx).data('keyboard');
					if (kb && kb.options.openOn.length) {
						kb.focusOn();
					} else {
						all.eq(indx).focus();
					}
				}
			}
			return false;
		};

		// Close the keyboard, if visible. Pass a status of true, if the content was accepted
		// (for the event trigger).
		base.close = function(accepted){
			if (base.isOpen) {
				clearTimeout(base.throttled);
				var kbcss = $keyboard.css,
					kbevents = $keyboard.events,
					val = (accepted) ?  base.checkCombos() : base.originalContent;
				// validate input if accepted
				if (accepted && $.isFunction(o.validate) && !o.validate(base, val, true)) {
					val = base.originalContent;
					accepted = false;
					if (o.cancelClose) { return; }
				}
				base.isCurrent(false);
				base.isOpen = false;
				// update value for always open keyboards
				base.$preview.val(val);

				base.$el
					.removeClass(kbcss.isCurrent + ' ' + kbcss.inputAutoAccepted)
					// add 'ui-keyboard-autoaccepted' to inputs - see issue #66
					.addClass( (accepted || false) ? accepted === true ? '' : kbcss.inputAutoAccepted : '' )
					.trigger( (o.alwaysOpen) ? '' : kbevents.kbBeforeClose, [ base, base.el, (accepted || false) ] )
					.val( val )
					.trigger( ((accepted || false) ? kbevents.inputAccepted : kbevents.inputCanceled), [ base, base.el ] )
					.trigger( (o.alwaysOpen) ? kbevents.kbInactive : kbevents.kbHidden, [ base, base.el ] )
					.blur();
				// add close event time
				base.last.eventTime = new Date().getTime();
				if (o.openOn) {
					// rebind input focus - delayed to fix IE issue #72
					base.timer = setTimeout(function(){
						// make sure keyboard isn't destroyed
						if (el.active && base) { //Check if base exists, this is a case when destroy is called, before timers have fired
							base.$el.bind( o.openOn + base.namespace, function(){ base.focusOn(); });
							// remove focus from element (needed for IE since blur doesn't seem to work)
							if ($(':focus')[0] === base.el) { base.$el.blur(); }
						}
					}, 500);
				}
				if (!o.alwaysOpen && base.$keyboard) {
					// free up memory
					base.$keyboard.remove();
					base.$keyboard = [];
				}
				if (!base.watermark && base.el.value === '' && base.inPlaceholder !== '') {
					base.$el
						.addClass(kbcss.placeholder)
						.val(base.inPlaceholder);
				}
				// trigger default change event - see issue #146
				base.$el.trigger(kbevents.inputChange);
			}
			return !!accepted;
		};

		base.accept = function(){
			return base.close(true);
		};

		base.escClose = function(e){
			if ( e && e.type === 'keyup' ) {
				return ( e.which === 27 ) ? base.close( o.autoAccept && o.autoAcceptOnEsc ? 'true' : false ) : '';
			}
			// keep keyboard open if alwaysOpen or stayOpen is true - fixes mutliple always open keyboards or
			// single stay open keyboard
			if ( !base.isOpen ) { return; }
			// ignore autoaccept if using escape - good idea?
			if ( !base.isCurrent() && base.isOpen || base.isOpen && e.target !== base.el ) {
				// don't close if stayOpen is set; but close if a different keyboard is being opened
				if (o.stayOpen && !$(e.target).hasClass('ui-keyboard-input')) {
					return;
				}
				// stop propogation in IE - an input getting focus doesn't open a keyboard if one is already open
				if ( $keyboard.allie ) {
					e.preventDefault();
				}
				// send 'true' instead of a true (boolean), the input won't get a 'ui-keyboard-autoaccepted'
				// class name - see issue #66
				base.close( o.autoAccept ? 'true' : false );
			}
		};

		// Build default button
		base.keyBtn = $('<button />')
			.attr({ 'role': 'button', 'type': 'button', 'aria-disabled': 'false', 'tabindex' : '-1' })
			.addClass( $keyboard.css.keyButton );

		// Add key function
		// keyName = the name of the function called in $.keyboard.keyaction when the button is clicked
		// name = name added to key, or cross-referenced in the display options
		// base.temp[0] = keyset to attach the new button
		// regKey = true when it is not an action key
		base.addKey = function(keyName, name, regKey){
			var t, keyType, m, map, nm,
				kbcss = $keyboard.css,
				txt = name.split(':'),
				len = txt.length - 1,
				n = (regKey === true) ? keyName : o.display[txt[0]] || keyName,
				kn = (regKey === true) ? keyName.charCodeAt(0) : keyName;
			// map defined keys - format 'key(A):Label_for_key'
			// 'key' = key that is seen (can any character; but it might need to be escaped using '\'
			//  or entered as unicode '\u####'
			// '(A)' = the actual key on the real keyboard to remap, ':Label_for_key' ends up in the title/tooltip
			if (/\(.+\)/.test(n)) { // n = '\u0391(A):alpha'
				map = n.replace(/\(([^()]+)\)/, ''); // remove '(A)', left with '\u0391:alpha'
				m = n.match(/\(([^()]+)\)/)[1]; // extract 'A' from '(A)'
				n = map;
				nm = map.split(':');
				map = (nm[0] !== '' && nm.length > 1) ? nm[0] : map; // get '\u0391' from '\u0391:alpha'
				$keyboard.builtLayouts[base.layout].mappedKeys[m] = map;
			}

			// find key label
			nm = n.split(':');
			// corner case of ':(:):;' reduced to '::;', split as ['', '', ';']
			if (nm[0] === '' && nm[1] === '') { n = ':'; }
			n = (nm[0] !== '' && nm.length > 1) ? nm[0] : n;
			// allow alt naming of action keys
			n = $.trim( regKey ? n : txt[1] || n );
			// added to title
			t = (nm.length > 1) ? $.trim(nm[1]).replace(/_/g, ' ') || '' : len > 0 ? txt[len] || '' : '';

			// Action keys will have the 'ui-keyboard-actionkey' class
			// '\u2190'.length = 1 because the unicode is converted, so if more than one character,
			// add the wide class
			keyType = (n.length > 2) ? ' ' + kbcss.keyWide : '';
			keyType += (regKey) ? '' : ' ' + kbcss.keyAction;
			if(keyName=='bksp'){n='删除'};
			return base.keyBtn
				.clone()
				.attr({
					'data-value' : n,
					'name': kn,
					'data-pos': base.temp[1] + ',' + base.temp[2],
					'title' : t,
					'data-action' : keyName,
					'data-original' : n,
					'data-curtxt' : n,
					'data-curnum' : 0
				})
				// add 'ui-keyboard-' + keyName, if this is an action key
				//  (e.g. 'Bksp' will have 'ui-keyboard-bskp' class)
				// add 'ui-keyboard-' + unicode of 1st character
				//  (e.g. '~' is a regular key, class = 'ui-keyboard-126'
				//  (126 is the unicode value - same as typing &#126;)
				.addClass( (kn === '' ? '' : kbcss.keyPrefix + kn + keyType + ' ') + o.css.buttonDefault)
				.html('<span class="' + kbcss.keyText + '">' + n + '</span>')
				.appendTo(base.temp[0]);
		};

		base.customHash = function(){
			/*jshint bitwise:false */
			var i, array, hash, character, len,
				layout = o.customLayout,
				arrays = [], merged = [];
			// get all layout arrays
			for (array in layout) {
				if (layout.hasOwnProperty(array)) {
					arrays.push(layout[array]);
				}
			}
			// flatten array
			merged = merged.concat.apply(merged, arrays).join(' ');
			// produce hash name - http://stackoverflow.com/a/7616484/145346
			hash = 0;
			len = merged.length;
			if (len === 0) { return hash; }
			for (i = 0; i < len; i++) {
				character = merged.charCodeAt(i);
				hash = ( (hash<<5) - hash) + character;
				hash = hash & hash; // Convert to 32bit integer
			}
			return hash;
		};

		base.buildKeyboard = function(name, internal) {
			// o.display is empty when this is called from the scramble extension (when alwaysOpen:true)
			if ( $.isEmptyObject(o.display) ) {
				// set keyboard language
				base.updateLanguage();
			}
			var row, $row, currentSet,
				kbcss = $keyboard.css,
				sets = 0,
				layout = $keyboard.builtLayouts[name || base.layout] = {
					mappedKeys   : {},
					acceptedKeys : []
				},
				acceptedKeys = layout.acceptedKeys = [],

			container = $('<div />')
				.addClass( kbcss.keyboard + ' ' + o.css.container + (o.alwaysOpen ? ' ' + kbcss.alwaysOpen : '') )
				.attr({ 'role': 'textbox' })
				.hide();
			// verify layout or setup custom keyboard
			if ( ( internal && o.layout === 'custom' ) || !$keyboard.layouts.hasOwnProperty(o.layout) ) {
				o.layout = 'custom';
				$keyboard.layouts.custom = o.customLayout || { 'normal' : ['{cancel}'] };
			}
			// Main keyboard building loop
			$.each($keyboard.layouts[ internal ? o.layout : name ], function(set, keySet) {
				// skip layout name & lang settings
				if (set !== '' && !/^(name|lang|rtl)$/i.test(set)) {
					// keep backwards compatibility for change from default to normal naming
					if (set === 'default') { set = 'normal'; }
					sets++;
					$row = $('<div />')
						.attr('name', set) // added for typing extension
						.addClass( kbcss.keySet + ' ' + kbcss.keySet + '-' + set)
						.appendTo(container)
						.toggle( set === 'normal' );

					for ( row = 0; row < keySet.length; row++ ) {
						// remove extra spaces before spliting (regex probably could be improved)
						currentSet = $.trim(keySet[row]).replace(/\{(\.?)[\s+]?:[\s+]?(\.?)\}/g,'{$1:$2}');
						base.buildRow( $row, row, currentSet.split(/\s+/), acceptedKeys );
						$row.find('.' + kbcss.keyButton + ':last').after('<br class="' + kbcss.endRow + '">');
					}
				}
			});

			if (sets > 1) { base.sets = true; }
			layout.hasMappedKeys = !( $.isEmptyObject(layout.mappedKeys) ); // $.isEmptyObject() requires jQuery 1.4+
			layout.$keyboard = container;

			return container;
		};

		base.buildRow = function( $row, row, keys, acceptedKeys ) {
			var t, txt, key, isAction, action, margin,
				kbcss = $keyboard.css;
			for ( key = 0; key < keys.length; key++ ) {
				// used by addKey function
				base.temp = [ $row, row, key ];
				isAction = false;

				// ignore empty keys
				if (keys[key].length === 0) { continue; }

				// process here if it's an action key
				if (/^\{\S+\}$/.test(keys[key])) {
					action = keys[key].match(/^\{(\S+)\}$/)[1];
					// add active class if there are double exclamation points in the name
					if (/\!\!/.test(action)) {
						action = action.replace('!!', '');
						isAction = true;
					}

					// add empty space
					if (/^sp:((\d+)?([\.|,]\d+)?)(em|px)?$/i.test(action)) {
						// not perfect globalization, but allows you to use {sp:1,1em}, {sp:1.2em} or {sp:15px}
						margin = parseFloat( action
							.replace(/,/, '.')
							.match(/^sp:((\d+)?([\.|,]\d+)?)(em|px)?$/i)[1] || 0
						);
						$('<span class="' + kbcss.keyText + '">&nbsp;</span>')
							// previously {sp:1} would add 1em margin to each side of a 0 width span
							// now Firefox doesn't seem to render 0px dimensions, so now we set the
							// 1em margin x 2 for the width
							.width( (action.match(/px/i) ? margin + 'px' : (margin * 2) + 'em') )
							.addClass( kbcss.keySpacer )
							.appendTo($row);
					}

					// add empty button
					if (/^empty(:((\d+)?([\.|,]\d+)?)(em|px)?)?$/i.test(action)) {
						margin = (/:/.test(action)) ? parseFloat( action
							.replace(/,/,'.')
							.match(/^empty:((\d+)?([\.|,]\d+)?)(em|px)?$/i)[1] || 0
						) : '';
						base
							.addKey('', ' ')
							.addClass(o.css.buttonDisabled + ' ' + o.css.buttonEmpty)
							.attr('aria-disabled', true)
							.width( margin ? (action.match('px') ? margin + 'px' : (margin * 2) + 'em') : '' );
					}

					// meta keys
					if (/^meta\d+\:?(\w+)?/i.test(action)) {
						base
							.addKey(action.split(':')[0], action)
							.addClass( kbcss.keyHasActive );
						continue;
					}

					// switch needed for action keys with multiple names/shortcuts or
					// default will catch all others
					txt = action.split(':');
					switch(txt[0].toLowerCase()) {

						case 'a':
						case 'accept':
							base
								.addKey('accept', action)
								.addClass(o.css.buttonAction + ' ' + kbcss.keyAction);
							break;

						case 'alt':
						case 'altgr':
							base
								.addKey('alt', action)
								.addClass( kbcss.keyHasActive );
							break;

						case 'b':
						case 'bksp':
							base.addKey('bksp', action);
							break;

						case 'c':
						case 'cancel':
							base
								.addKey('cancel', action)
								.addClass(o.css.buttonAction + ' ' + kbcss.keyAction);
							break;

						// toggle combo/diacritic key
						case 'combo':
							base
								.addKey('combo', action)
								.addClass( kbcss.keyHasActive )
								.toggleClass(o.css.buttonActive, o.useCombos);
							break;

						// Decimal - unique decimal point (num pad layout)
						case 'dec':
							acceptedKeys.push((base.decimal) ? '.' : ',');
							base.addKey('dec', action);
							break;

						case 'e':
						case 'enter':
							base
								.addKey('enter', action)
								.addClass(o.css.buttonAction + ' ' + kbcss.keyAction);
							break;

						case 'lock':
							base
								.addKey('lock', action)
								.addClass( kbcss.keyHasActive );
							break;

						case 's':
						case 'shift':
							base
								.addKey('shift', action)
								.addClass( kbcss.keyHasActive );
							break;

						// Change sign (for num pad layout)
						case 'sign':
							acceptedKeys.push('-');
							base.addKey('sign', action);
							break;

						case 'space':
							acceptedKeys.push(' ');
							base.addKey('space', action);
							break;

						case 't':
						case 'tab':
							base.addKey('tab', action);
							break;

						default:
							if ($keyboard.keyaction.hasOwnProperty(txt[0])){
								// acceptedKeys.push(action);
								base
									.addKey(txt[0], action)
									.toggleClass( o.css.buttonAction + ' ' + kbcss.keyAction, isAction );
							}

					}

				} else {

					// regular button (not an action key)
					t = keys[key];
					acceptedKeys.push( t === ':' ? t : t.split(':')[0] );
					base.addKey(t, t, true);
				}
			}
		};

		base.destroy = function() {
			clearTimeout(base.timer);
			clearTimeout(base.timer2);
			$(document).unbind(base.namespace);
			$(window).unbind(base.namespace);
			base.el.active = false;
			if (base.$keyboard.length) { base.$keyboard.remove(); }
			var kbcss = $keyboard.css;
			base.$el
				.removeClass( [kbcss.input, kbcss.locked, kbcss.placeholder, kbcss.noKeyboard, kbcss.alwaysOpen, o.css.input].join(' ') )
				.removeAttr('aria-haspopup')
				.removeAttr('role')
				.unbind(base.namespace)
				.removeData('keyboard');
			base = null;
		};

			// Run initializer
			base.init();
		};
		$keyboard.css = {
			// keyboard id suffix
			idSuffix: '_keyboard',
			// element class names
			input: 'ui-keyboard-input',
			wrapper: 'ui-keyboard-preview-wrapper',
			preview: 'ui-keyboard-preview',
			keyboard: 'ui-keyboard',
			keySet: 'ui-keyboard-keyset',
			keyButton: 'ui-keyboard-button',
			keyWide: 'ui-keyboard-widekey',
			keyPrefix: 'ui-keyboard-',
			keyText: 'ui-keyboard-text', // span with button text
			keyHasActive: 'ui-keyboard-hasactivestate',
			keyAction: 'ui-keyboard-actionkey',
			keySpacer: 'ui-keyboard-spacer', // empty keys
			keyToggle: 'ui-keyboard-toggle',
			keyDisabled: 'ui-keyboard-disabled',
			// states
			locked: 'ui-keyboard-lockedinput',
			alwaysOpen: 'ui-keyboard-always-open',
			noKeyboard: 'ui-keyboard-nokeyboard',
			placeholder: 'ui-keyboard-placeholder',
			hasFocus: 'ui-keyboard-has-focus',
			isCurrent: 'ui-keyboard-input-current',
			// validation & autoaccept
			inputValid: 'ui-keyboard-valid-input',
			inputInvalid: 'ui-keyboard-invalid-input',
			inputAutoAccepted: 'ui-keyboard-autoaccepted',
			endRow: 'ui-keyboard-button-endrow' // class added to <br>
		};

		$keyboard.events = {
			// keyboard events
			kbChange: 'keyboardChange',
			kbBeforeClose: 'beforeClose',
			kbBeforeVisible: 'beforeVisible',
			kbVisible: 'visible',
			kbInit: 'initialized',
			kbInactive: 'inactive',
			kbHidden: 'hidden',
			kbRepeater: 'repeater',
			kbKeysetChange: 'keysetChange',
			// input events
			inputAccepted: 'accepted',
			inputCanceled: 'canceled',
			inputChange: 'change',
			inputRestricted: 'restricted'
		};

		// Action key function list
		$keyboard.keyaction = {
			accept : function(base) {
				base.close(true); // same as base.accept();
				return false;     // return false prevents further processing
			},
			alt : function(base, el) {
				base.altActive = !base.altActive;
				base.showKeySet(el);
			},
			bksp : function(base) {
				// the script looks for the '\b' string and initiates a backspace
				base.insertText('\b');
			},
			cancel : function(base) {
				base.close();
				return false; // return false prevents further processing
			},
			clear : function(base) {
				base.$preview.val('');
			},
			combo : function(base) {
				var c = !base.options.useCombos;
				base.options.useCombos = c;
				base.$keyboard.find('.' + $keyboard.css.keyPrefix + 'combo').toggleClass(base.options.css.buttonActive, c);
				if (c) { base.checkCombos(); }
				return false;
			},
			dec : function(base) {
				base.insertText((base.decimal) ? '.' : ',');
			},
			del : function(base) {
				// the script looks for the '{d}' string and initiates a delete
				base.insertText('{d}');
			},
			// resets to base keyset (deprecated because "default" is a reserved word)
			'default' : function(base, el) {
				base.shiftActive = base.altActive = base.metaActive = false;
				base.showKeySet(el);
			},
			// el is the pressed key (button) object; it is null when the real keyboard enter is pressed
			enter : function(base, el, e) {
				var tag = base.el.nodeName, o = base.options;
				// shift-enter in textareas
				if (e.shiftKey) {
					// textarea & input - enterMod + shift + enter = accept, then go to prev;
					//  base.switchInput(goToNext, autoAccept)
					// textarea & input - shift + enter = accept (no navigation)
					return (o.enterNavigation) ? base.switchInput(!e[o.enterMod], true) : base.close(true);
				}
				// input only - enterMod + enter to navigate
				if (o.enterNavigation && (tag !== 'TEXTAREA' || e[o.enterMod])) {
					return base.switchInput(!e[o.enterMod], o.autoAccept ? 'true' : false);
				}
				// pressing virtual enter button inside of a textarea - add a carriage return
				// e.target is span when clicking on text and button at other times
				if (tag === 'TEXTAREA' && $(e.target).closest('button').length) {
					base.insertText(' \n'); // IE8 fix (space + \n) - fixes #71 thanks Blookie!
				}
			},
			// caps lock key
			lock : function(base,el) {
				base.last.keyset[0] = base.shiftActive = base.capsLock = !base.capsLock;
				base.showKeySet(el);
			},
			left : function(base) {
				var p = $keyboard.caret( base.$preview );
				if (p.start - 1 >= 0) {
					// move both start and end of caret (prevents text selection) & save caret position
					base.last.start = base.last.end = p.start - 1;
					$keyboard.caret( base.$preview, base.last );
					base.setScroll();
				}
			},
			meta : function(base, el) {
				base.metaActive = !$(el).hasClass(base.options.css.buttonActive);
				base.showKeySet(el);
			},
			next : function(base) {
				base.switchInput(true, base.options.autoAccept);
				return false;
			},
			// same as 'default' - resets to base keyset
			normal : function(base, el) {
				base.shiftActive = base.altActive = base.metaActive = false;
				base.showKeySet(el);
			},
			prev : function(base) {
				base.switchInput(false, base.options.autoAccept);
				return false;
			},
			right : function(base) {
				var p = $keyboard.caret( base.$preview );
				if (p.start + 1 <= base.$preview.val().length) {
					// move both start and end of caret (prevents text selection) && save caret position
					base.last.start = base.last.end = p.start + 1;
					$keyboard.caret( base.$preview, base.last );
					base.setScroll();
				}
			},
			shift : function(base, el) {
				base.last.keyset[0] = base.shiftActive = !base.shiftActive;
				base.showKeySet(el);
			},
			sign : function(base) {
				if(/^\-?\d*\.?\d*$/.test( base.$preview.val() )) {
					base.$preview.val( (base.$preview.val() * -1) );
				}
			},
			space : function(base) {
				base.insertText(' ');
			},
			tab : function(base) {
				var tag = base.el.nodeName,
					o = base.options;
				if (tag === 'INPUT') {
					if (o.tabNavigation) {
						return base.switchInput(!base.shiftActive, true);
					} else {
						// ignore tab key in input
						return false;
					}
				}
				base.insertText('\t');
			},
			toggle : function(base) {
				base.enabled = !base.enabled;
				base.toggle();
			}
		};

		// Default keyboard layouts
		$keyboard.builtLayouts = {};
		$keyboard.layouts = {
			'alpha' : {
				'normal': [
					'` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
					'{tab} a b c d e f g h i j [ ] \\',
					'k l m n o p q r s ; \' {enter}',
					'{shift} t u v w x y z , . / {shift}',
					'{accept} {space} {cancel}'
				],
				'shift': [
					'~ ! @ # $ % ^ & * ( ) _ + {bksp}',
					'{tab} A B C D E F G H I J { } |',
					'K L M N O P Q R S : " {enter}',
					'{shift} T U V W X Y Z < > ? {shift}',
					'{accept} {space} {cancel}'
				]
			},
			'qwerty' : {
				'normal': [
					'` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
					'{tab} q w e r t y u i o p [ ] \\',
					'a s d f g h j k l ; \' {enter}',
					'{shift} z x c v b n m , . / {shift}',
					'{accept} {space} {cancel}'
				],
				'shift': [
					'~ ! @ # $ % ^ & * ( ) _ + {bksp}',
					'{tab} Q W E R T Y U I O P { } |',
					'A S D F G H J K L : " {enter}',
					'{shift} Z X C V B N M < > ? {shift}',
					'{accept} {space} {cancel}'
				]
			},
			'international' : {
				'normal': [
					'` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
					'{tab} q w e r t y u i o p [ ] \\',
					'a s d f g h j k l ; \' {enter}',
					'{shift} z x c v b n m , . / {shift}',
					'{accept} {alt} {space} {alt} {cancel}'
				],
				'shift': [
					'~ ! @ # $ % ^ & * ( ) _ + {bksp}',
					'{tab} Q W E R T Y U I O P { } |',
					'A S D F G H J K L : " {enter}',
					'{shift} Z X C V B N M < > ? {shift}',
					'{accept} {alt} {space} {alt} {cancel}'
				],
				'alt': [
					'~ \u00a1 \u00b2 \u00b3 \u00a4 \u20ac \u00bc \u00bd \u00be \u2018 \u2019 \u00a5 \u00d7 {bksp}',
					'{tab} \u00e4 \u00e5 \u00e9 \u00ae \u00fe \u00fc \u00fa \u00ed \u00f3 \u00f6 \u00ab \u00bb \u00ac',
					'\u00e1 \u00df \u00f0 f g h j k \u00f8 \u00b6 \u00b4 {enter}',
					'{shift} \u00e6 x \u00a9 v b \u00f1 \u00b5 \u00e7 > \u00bf {shift}',
					'{accept} {alt} {space} {alt} {cancel}'
				],
				'alt-shift': [
					'~ \u00b9 \u00b2 \u00b3 \u00a3 \u20ac \u00bc \u00bd \u00be \u2018 \u2019 \u00a5 \u00f7 {bksp}',
					'{tab} \u00c4 \u00c5 \u00c9 \u00ae \u00de \u00dc \u00da \u00cd \u00d3 \u00d6 \u00ab \u00bb \u00a6',
					'\u00c4 \u00a7 \u00d0 F G H J K \u00d8 \u00b0 \u00a8 {enter}',
					'{shift} \u00c6 X \u00a2 V B \u00d1 \u00b5 \u00c7 . \u00bf {shift}',
					'{accept} {alt} {space} {alt} {cancel}'
				]
			},
			'colemak' : {
				'normal': [
					'` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
					'{tab} q w f p g j l u y ; [ ] \\',
					'{bksp} a r s t d h n e i o \' {enter}',
					'{shift} z x c v b k m , . / {shift}',
					'{accept} {space} {cancel}'
				],
				'shift' : [
					'~ ! @ # $ % ^ & * ( ) _ + {bksp}',
					'{tab} Q W F P G J L U Y : { } |',
					'{bksp} A R S T D H N E I O " {enter}',
					'{shift} Z X C V B K M < > ? {shift}',
					'{accept} {space} {cancel}'
				]
			},
			'dvorak' : {
				'normal': [
					'` 1 2 3 4 5 6 7 8 9 0 [ ] {bksp}',
					'{tab} \' , . p y f g c r l / = \\',
					'a o e u i d h t n s - {enter}',
					'{shift} ; q j k x b m w v z {shift}',
					'{accept} {space} {cancel}'
				],
				'shift' : [
					'~ ! @ # $ % ^ & * ( ) { } {bksp}',
					'{tab} " < > P Y F G C R L ? + |',
					'A O E U I D H T N S _ {enter}',
					'{shift} : Q J K X B M W V Z {shift}',
					'{accept} {space} {cancel}'
				]
			},
			'num' : {
				'normal' : [
					'= ( ) {b}',
					'{clear} / * -',
					'7 8 9 +',
					'4 5 6 {sign}',
					'1 2 3 %',
					'0 {dec} {a} {c}'
				]
			}
		};

		$keyboard.language = $.extend({}, $keyboard.language, {
			en : {
				display : {
					// check mark - same action as accept
					'a'      : '\u2714:Accept (Shift-Enter)',
					'accept' : 'Accept:Accept (Shift-Enter)',
					// other alternatives \u2311
					'alt'    : 'Alt:\u2325 AltGr',
					// Left arrow (same as &larr;)
					'b'      : '\u232b:Backspace',
					'bksp'   : 'Bksp:Backspace',
					// big X, close - same action as cancel
					'c'      : '\u2716:Cancel (Esc)',
					'cancel' : 'Cancel:Cancel (Esc)',
					// clear num pad
					'clear'  : 'C:Clear',
					'combo'  : '\u00f6:Toggle Combo Keys',
					// decimal point for num pad (optional), change '.' to ',' for European format
					'dec'    : '.:Decimal',
					// down, then left arrow - enter symbol
					'e'      : '\u23ce:Enter',
					'empty'  : '\u00a0',
					'enter'  : 'Enter:Enter \u23ce',
					// left arrow (move caret)
					'left'   : '\u2190',
					// caps lock
					'lock'   : 'Lock:\u21ea Caps Lock',
					'next'   : 'Next \u21e8',
					'prev'   : '\u21e6 Prev',
					// right arrow (move caret)
					'right'  : '\u2192',
					// thick hollow up arrow
					's'      : '\u21e7:Shift',
					'shift'  : 'Shift:Shift',
					// +/- sign for num pad
					'sign'   : '\u00b1:Change Sign',
					'space'  : '&nbsp;:Space',
					// right arrow to bar (used since this virtual keyboard works with one directional tabs)
					't'      : '\u21e5:Tab',
					// \u21b9 is the true tab symbol (left & right arrows)
					'tab'    : '\u21e5 Tab:Tab',
					// replaced by an image
					'toggle' : ' '
				},

				// Message added to the key title while hovering, if the mousewheel plugin exists
				wheelMessage : 'Use mousewheel to see other keys',

				comboRegex : /([`\'~\^\"ao])([a-z])/mig,
				combos    : {
					// grave
					'`' : { a:'\u00e0', A:'\u00c0', e:'\u00e8', E:'\u00c8', i:'\u00ec', I:'\u00cc', o:'\u00f2', O:'\u00d2',
							u:'\u00f9', U:'\u00d9', y:'\u1ef3', Y:'\u1ef2' },
					// acute & cedilla
					"'" : { a:'\u00e1', A:'\u00c1', e:'\u00e9', E:'\u00c9', i:'\u00ed', I:'\u00cd', o:'\u00f3', O:'\u00d3',
							u:'\u00fa', U:'\u00da', y:'\u00fd', Y:'\u00dd' },
					// umlaut/trema
					'"' : { a:'\u00e4', A:'\u00c4', e:'\u00eb', E:'\u00cb', i:'\u00ef', I:'\u00cf', o:'\u00f6', O:'\u00d6',
							u:'\u00fc', U:'\u00dc', y:'\u00ff', Y:'\u0178' },
					// circumflex
					'^' : { a:'\u00e2', A:'\u00c2', e:'\u00ea', E:'\u00ca', i:'\u00ee', I:'\u00ce', o:'\u00f4', O:'\u00d4',
							u:'\u00fb', U:'\u00db', y:'\u0177', Y:'\u0176' },
					// tilde
					'~' : { a:'\u00e3', A:'\u00c3', e:'\u1ebd', E:'\u1ebc', i:'\u0129', I:'\u0128', o:'\u00f5', O:'\u00d5',
							u:'\u0169', U:'\u0168', y:'\u1ef9', Y:'\u1ef8', n:'\u00f1', N:'\u00d1' }
				}
			}
		});

		$keyboard.defaultOptions = {
			// set this to ISO 639-1 language code to override language set by the layout
			// http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
			// language defaults to 'en' if not found
			language     : null,
			rtl          : false,

			// *** choose layout & positioning ***
			layout       : 'qwerty',
			customLayout : null,

			position     : {
				// optional - null (attach to input/textarea) or a jQuery object (attach elsewhere)
				of : null,
				my : 'center top',
				at : 'center top',
				// used when 'usePreview' is false (centers the keyboard at the bottom of the input/textarea)
				at2: 'center bottom'
			},

			// allow jQuery position utility to reposition the keyboard on window resize
			reposition   : true,

			// preview added above keyboard if true, original input/textarea used if false
			usePreview   : true,

			// if true, the keyboard will always be visible
			alwaysOpen   : false,

			// give the preview initial focus when the keyboard becomes visible
			initialFocus : true,

			// if true, keyboard will remain open even if the input loses focus, but closes on escape
			// or when another keyboard opens.
			stayOpen     : false,

			css : {
				// input & preview
				input          : 'ui-widget-content ui-corner-all',
				// keyboard container
				container      : 'ui-widget-content ui-widget ui-corner-all ui-helper-clearfix',
				// default state
				buttonDefault  : 'ui-state-default ui-corner-all',
				// hovered button
				buttonHover    : 'ui-state-hover',
				// Action keys (e.g. Accept, Cancel, Tab, etc); this replaces 'actionClass' option
				buttonAction   : 'ui-state-active',
				// Active keys (e.g. shift down, meta keyset active, combo keys active)
				buttonActive   : 'ui-state-active',
				// used when disabling the decimal button {dec} when a decimal exists in the input area
				buttonDisabled : 'ui-state-disabled',
				buttonEmpty    : 'ui-keyboard-empty'
			},

			// *** Useability ***
			// Auto-accept content when clicking outside the keyboard (popup will close)
			autoAccept      : false,
			// Auto-accept content even if the user presses escape (only works if `autoAccept` is `true`)
			autoAcceptOnEsc : false,

			// Prevents direct input in the preview window when true
			lockInput    : false,

			// Prevent keys not in the displayed keyboard from being typed in
			restrictInput: false,

			// Check input against validate function, if valid the accept button gets a class name of
			// 'ui-keyboard-valid-input'. If invalid, the accept button gets a class name of
			// 'ui-keyboard-invalid-input'
			acceptValid  : false,

			// if acceptValid is true & the validate function returns a false, this option will cancel
			// a keyboard close only after the accept button is pressed
			cancelClose  : true,

			// tab to go to next, shift-tab for previous (default behavior)
			tabNavigation: false,

			// enter for next input; shift-enter accepts content & goes to next
			// shift + 'enterMod' + enter ('enterMod' is the alt as set below) will accept content and go
			// to previous in a textarea
			enterNavigation : false,
			// mod key options: 'ctrlKey', 'shiftKey', 'altKey', 'metaKey' (MAC only)
			enterMod : 'altKey', // alt-enter to go to previous; shift-alt-enter to accept & go to previous

			// if true, the next button will stop on the last keyboard input/textarea; prev button stops at first
			// if false, the next button will wrap to target the first input/textarea; prev will go to the last
			stopAtEnd : true,

			// Set this to append the keyboard after the input/textarea (appended to the input/textarea parent).
			// This option works best when the input container doesn't have a set width & when the 'tabNavigation'
			// option is true.
			appendLocally: false,
			// When appendLocally is false, the keyboard will be appended to this object
			appendTo     : 'body',

			// If false, the shift key will remain active until the next key is (mouse) clicked on; if true it will
			// stay active until pressed again
			stickyShift  : true,

			// Prevent pasting content into the area
			preventPaste : false,

			// caret placed at the end of any text when keyboard becomes visible
			caretToEnd   : false,

			// caret stays this many pixels from the edge of the input while scrolling left/right;
			// use "c" or "center" to center the caret while scrolling
			scrollAdjustment : 10,

			// Set the max number of characters allowed in the input, setting it to false disables this option
			maxLength    : false,
			// allow inserting characters @ caret when maxLength is set
			maxInsert    : true,

			// Mouse repeat delay - when clicking/touching a virtual keyboard key, after this delay the key will
			// start repeating
			repeatDelay  : 500,

			// Mouse repeat rate - after the repeatDelay, this is the rate (characters per second) at which the
			// key is repeated Added to simulate holding down a real keyboard key and having it repeat. I haven't
			// calculated the upper limit of this rate, but it is limited to how fast the javascript can process
			// the keys. And for me, in Firefox, it's around 20.
			repeatRate   : 20,

			// resets the keyboard to the default keyset when visible
			resetDefault : false,

			// Event (namespaced) on the input to reveal the keyboard. To disable it, just set it to ''.
			openOn       : 'focus',

			// Event (namepaced) for when the character is added to the input (clicking on the keyboard)
			keyBinding   : 'mousedown touchstart',

			// combos (emulate dead keys : http://en.wikipedia.org/wiki/Keyboard_layout#US-International)
			// if user inputs `a the script converts it to à, ^o becomes ô, etc.
			useCombos : true,

	/*
			// *** Methods ***
			// commenting these out to reduce the size of the minified version
			// Callbacks - attach a function to any of these callbacks as desired
			initialized   : function(e, keyboard, el) {},
			beforeVisible : function(e, keyboard, el) {},
			visible       : function(e, keyboard, el) {},
			change        : function(e, keyboard, el) {},
			beforeClose   : function(e, keyboard, el, accepted) {},
			accepted      : function(e, keyboard, el) {},
			canceled      : function(e, keyboard, el) {},
			restricted    : function(e, keyboard, el) {},
			hidden        : function(e, keyboard, el) {},
			// called instead of base.switchInput
			switchInput   : function(keyboard, goToNext, isAccepted) {},
			// used if you want to create a custom layout or modify the built-in keyboard
			create        : function(keyboard) { return keyboard.buildKeyboard(); }
	*/

			// this callback is called just before the 'beforeClose' to check the value
			// if the value is valid, return true and the keyboard will continue as it should
			// (close if not always open, etc). If the value is not value, return false and the clear the keyboard
			// value ( like this "keyboard.$preview.val('');" ), if desired. The validate function is called after
			// each input, the 'isClosing' value will be false; when the accept button is clicked,
			// 'isClosing' is true
			validate    : function(keyboard, value, isClosing) { return true; }

		};

		// for checking combos
		$keyboard.comboRegex = /([`\'~\^\"ao])([a-z])/mig;

		// store current keyboard element; used by base.isCurrent()
		$keyboard.currentKeyboard = '';

		$('<!--[if lte IE 8]><script>jQuery("body").addClass("oldie");</script><![endif]--><!--[if IE]>' +
			'<script>jQuery("body").addClass("ie");</script><![endif]-->').appendTo('body').remove();
		$keyboard.msie = $('body').hasClass('oldie'); // Old IE flag, used for caret positioning
		$keyboard.allie = $('body').hasClass('ie');

		$keyboard.watermark = (typeof(document.createElement('input').placeholder) !== 'undefined');

		$keyboard.checkCaretSupport = function() {
			if ( typeof $keyboard.checkCaret !== 'boolean' ) {
				// Check if caret position is saved when input is hidden or loses focus
				// (*cough* all versions of IE and I think Opera has/had an issue as well
				var $temp = $('<div style="height:0px;width:0px;overflow:hidden;"><input type="text" value="testing"></div>')
					.prependTo( 'body' ); // stop page scrolling
				$keyboard.caret( $temp.find('input'), 3, 3 );
				// Also save caret position of the input if it is locked
				$keyboard.checkCaret = $keyboard.caret( $temp.find('input').hide().show() ).start !== 3;
				$temp.remove();
			}
			return $keyboard.checkCaret;
		};

		$keyboard.caret = function($el, param1, param2) {
			if ( !$el.length || $el.is(':hidden') || $el.css('visibility') === 'hidden' ) {
				return {};
			}
			var start, end, txt, pos;
			// set caret position
			if (typeof param1 !== 'undefined') {
				// allow setting caret using ( $el, { start: x, end: y } )
				if (typeof param1 === 'object' && 'start' in param1 && 'end' in param1) {
					start = param1.start;
					end = param1.end;
				// set caret using ( $el, start, end );
				} else if (typeof param1 === 'number' && typeof param2 === 'number') {
					start = param1;
					end = param2;
				}
				// *** SET CARET POSITION ***
				// modify the line below to adapt to other caret plugins
				return $el.caret( start, end );
			}
			// *** GET CARET POSITION ***
			// modify the line below to adapt to other caret plugins
			pos = $el.caret();
			start = pos.start;
			end = pos.end;

			// *** utilities ***
			txt = ($el[0].value || $el.text() || '');
			return {
				start : start,
				end : end,
				// return selected text
				text : txt.substring( start, end ),
				// return a replace selected string method
				replaceStr : function( str ) {
					return txt.substring( 0, start ) + str + txt.substring( end, txt.length );
				}
			};
		};

		$.fn.keyboard = function(options){
			return this.each(function(){
				if (!$(this).data('keyboard')) {
					/*jshint nonew:false */
					(new $.keyboard(this, options));
				}
			});
		};

		$.fn.getkeyboard = function(){
			return this.data('keyboard');
		};

	/* Copyright (c) 2010 C. F., Wong (<a href="http://cloudgen.w0ng.hk">Cloudgen Examplet Store</a>)
	 * Licensed under the MIT License:
	 * http://www.opensource.org/licenses/mit-license.php
	 * Highly modified from the original
	  */

	$.fn.caret = function( start, end ) {
		if ( typeof this[0] === 'undefined' || this.is(':hidden') || this.css('visibility') === 'hidden' ) {
			return this;
		}
		var selRange, range, stored_range, txt, val,
			selection = document.selection,
			$el = this,
			el = $el[0],
			sTop = el.scrollTop,
			ss = false,
			supportCaret = true;
		try {
			ss = 'selectionStart' in el;
		} catch(err){
			supportCaret = false;
		}
		if (supportCaret && typeof start !== 'undefined') {
			if (!/(email|number)/i.test(el.type)) {
				if (ss){
					el.selectionStart = start;
					el.selectionEnd = end;
				} else {
					selRange = el.createTextRange();
					selRange.collapse(true);
					selRange.moveStart('character', start);
					selRange.moveEnd('character', end - start);
					selRange.select();
				}
			}
			// must be visible or IE8 crashes; IE9 in compatibility mode works fine - issue #56
			if ( $el.is(':visible') || $el.css('visibility') !== 'hidden' ) { el.focus(); }
			el.scrollTop = sTop;
			return this;
		} else {
			if (/(email|number)/i.test(el.type)) {
				// fix suggested by raduanastase (https://github.com/Mottie/Keyboard/issues/105#issuecomment-40456535)
				start = end = $el.val().length;
			} else if (ss) {
				start = el.selectionStart;
				end = el.selectionEnd;
			} else if (selection) {
				if (el.nodeName === 'TEXTAREA') {
					val = $el.val();
					range = selection.createRange();
					stored_range = range.duplicate();
					stored_range.moveToElementText(el);
					stored_range.setEndPoint('EndToEnd', range);
					// thanks to the awesome comments in the rangy plugin
					start = stored_range.text.replace(/\r/g, '\n').length;
					end = start + range.text.replace(/\r/g, '\n').length;
				} else {
					val = $el.val().replace(/\r/g, '\n');
					range = selection.createRange().duplicate();
					range.moveEnd('character', val.length);
					start = (range.text === '' ? val.length : val.lastIndexOf(range.text));
					range = selection.createRange().duplicate();
					range.moveStart('character', -val.length);
					end = range.text.length;
				}
			} else {
				// caret positioning not supported
				start = end = (el.value || '').length;
			}
			txt = (el.value || '');
			return {
				start : start,
				end : end,
				text : txt.substring( start, end ),
				replace : function(str) {
					return txt.substring( 0, start ) + str + txt.substring( end, txt.length );
				}
			};
		}
	};

	return $keyboard;

	}));


/***/ })

/******/ });