(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f98fc72c"],{"23ba":function(e,n,t){"use strict";t.r(n);var s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app-base-socket-ipc"}},[e._m(0),t("div",{staticClass:"one-block-2"},[t("a-space",[t("a-button",{on:{click:e.handleInvoke}},[e._v("发送 - 回调")]),e._v(" 结果："+e._s(e.message1)+" ")],1),t("p"),t("a-space",[t("a-button",{on:{click:e.handleInvoke2}},[e._v("发送 - async/await")]),e._v(" 结果："+e._s(e.message2)+" ")],1)],1),e._m(1),t("div",{staticClass:"one-block-2"},[t("a-space",[t("a-button",{on:{click:e.handleSendSync}},[e._v("同步消息")]),e._v(" 结果："+e._s(e.message3)+" ")],1)],1),e._m(2),t("div",{staticClass:"one-block-2"},[t("a-space",[t("a-button",{on:{click:e.sendMsgStart}},[e._v("开始")]),t("a-button",{on:{click:e.sendMsgStop}},[e._v("结束")]),e._v(" 结果："+e._s(e.messageString)+" ")],1)],1),e._m(3),t("div",{staticClass:"one-block-2"},[t("a-space",[t("a-button",{on:{click:function(n){return e.createWindow(0)}}},[e._v("打开新窗口2")]),t("a-button",{on:{click:function(n){return e.sendTosubWindow()}}},[e._v("向新窗口2发消息")])],1)],1)])},i=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"one-block-1"},[t("span",[e._v(" 1. 发送异步消息 ")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"one-block-1"},[t("span",[e._v(" 2. 同步消息（不推荐，阻塞执行） ")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"one-block-1"},[t("span",[e._v(" 3. 长消息： 服务端持续向前端页面发消息 ")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"one-block-1"},[t("span",[e._v(" 4. 多窗口通信：子窗口与主进程通信，子窗口互相通信 ")])])}],c=t("1da1"),o=(t("96cf"),t("a358")),a={data:function(){return{messageString:"",message1:"",message2:"",message3:"",windowName:"window-ipc",newWcId:0,views:[{type:"vue",content:"/#/special/subwindow",windowName:"window-ipc",windowTitle:"ipc window"}]}},mounted:function(){this.init()},methods:{init:function(){var e=this;this.$ipc.removeAllListeners(o["a"].ipcSendMsg),this.$ipc.on(o["a"].ipcSendMsg,(function(n,t){console.log("[ipcRenderer] [socketMsgStart] result:",t),e.messageString=t,n.sender.send(o["a"].hello,"electron-egg")})),this.$ipc.removeAllListeners(o["c"].window2ToWindow1),this.$ipc.on(o["c"].window2ToWindow1,(function(n,t){e.$message.info(t)}))},sendMsgStart:function(){var e={type:"start",content:"开始"};this.$ipc.send(o["a"].ipcSendMsg,e)},sendMsgStop:function(){var e={type:"end",content:""};this.$ipc.send(o["a"].ipcSendMsg,e)},handleInvoke:function(){var e=this;this.$ipc.invoke(o["a"].ipcInvokeMsg,"异步-回调").then((function(n){console.log("r:",n),e.message1=n}))},handleInvoke2:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$ipc.invoke(o["a"].ipcInvokeMsg,"异步");case 2:t=n.sent,console.log("msg:",t),e.message2=t;case 5:case"end":return n.stop()}}),n)})))()},handleSendSync:function(){var e=this.$ipc.sendSync(o["a"].ipcSendSyncMsg,"同步");this.message3=e},createWindow:function(e){this.$ipc.invoke(o["a"].createWindow,this.views[e]).then((function(e){console.log("[createWindow] id:",e)}))},sendTosubWindow:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$ipc.invoke(o["a"].getWCid,e.windowName);case 2:e.newWcId=n.sent,e.$ipc.sendTo(e.newWcId,o["c"].window1ToWindow2,"窗口1通过 sendTo 给窗口2发送消息");case 4:case"end":return n.stop()}}),n)})))()}}},r=a,d=(t("7d45"),t("2877")),u=Object(d["a"])(r,s,i,!1,null,"010d9bff",null);n["default"]=u.exports},"51f9":function(e,n,t){},"7d45":function(e,n,t){"use strict";t("51f9")}}]);
//# sourceMappingURL=chunk-f98fc72c.6df89cdd.js.map