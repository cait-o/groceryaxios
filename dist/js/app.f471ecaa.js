(function(t){function e(e){for(var s,o,i=e[0],c=e[1],d=e[2],u=0,f=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(f.length)f.shift()();return n.push.apply(n,d||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},r={app:0},n=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var l=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1:function(t,e){},2350:function(t,e,a){"use strict";var s=a("6645"),r=a.n(s);r.a},2939:function(t,e,a){"use strict";var s=a("51d9"),r=a.n(s);r.a},"2e05":function(t,e,a){"use strict";var s=a("7756"),r=a.n(s);r.a},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=n(t);return a(e)}function n(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}r.keys=function(){return Object.keys(s)},r.resolve=n,t.exports=r,r.id="4678"},"514a":function(t,e,a){},"51d9":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("app-header",{attrs:{title:t.msg}}),a("router-view"),a("app-footer")],1)},n=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"headerStyle"},[a("nav",[a("h1",[t._v(t._s(t.title))]),a("ul",[a("li",[a("router-link",{attrs:{to:"/",exact:""}},[t._v("Home")])],1),a("li",[a("router-link",{attrs:{to:"/add",exact:""}},[t._v("Add Item")])],1),a("li",[a("router-link",{attrs:{to:"/list",exact:""}},[t._v("List")])],1),a("li",[a("router-link",{attrs:{to:"/axios",exact:""}},[t._v("Axios")])],1)])])])},i=[],c={data:function(){return{msg:"Grocery List"}},props:{title:{type:String}}},d=c,l=(a("b8cc"),a("2877")),u=Object(l["a"])(d,o,i,!1,null,"ea1bf9e0",null),f=u.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"headerStyle"},[a("footer",[a("p",{domProps:{innerHTML:t._s(t.copyRtSymbol)}})])])},h=[],m={data:function(){return{copyRtSymbol:"&copy;BT3103"}}},p=m,j=(a("ac60"),Object(l["a"])(p,b,h,!1,null,"32b7ae06",null)),g=j.exports,v={name:"App",data:function(){return{itemsListInput:[{name:"Eggs",image:"./assets/eggs.jpg",show:!1},{name:"Bread",image:"/assets/bread.jfif",show:!1},{name:"Jam",image:"/assets/jam.jfif",show:!1},{name:"CornFlakes",image:"/assets/cornflakes.jfif",show:!1},{name:"Milk",image:"/assets/milk.jfif",show:!1},{name:"Juice",image:"/assets/juice.jfif",show:!1}],itemsListSecond:[{name:"Oranges",image:"./assets/orange.jpg",show:!1},{name:"Peanut Butter",image:"/assets/peanutbutter.jpeg",show:!1},{name:"Strawberries",image:"/assets/strawberries.jpg",show:!1}],msg:"Grocery"}},components:{"app-header":f,"app-footer":g}},y=v,k=(a("b010"),Object(l["a"])(y,r,n,!1,null,"65d53ff4",null)),_=k.exports,x=a("28dd"),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ul",t._l(t.itemsList,(function(e,s){return a("li",{key:e.id},[a("h2",{on:{click:function(t){e.show=!e.show}}},[t._v(t._s(e.name))]),a("img",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"item.show"}],attrs:{src:e.image}}),a("buttonComponent"),a("button",{attrs:{name:"delete",id:e.id},on:{click:function(a){return t.deleteItem(s,e)}}},[t._v("Delete")])],1)})),0)])},C=[],z=(a("4160"),a("a434"),a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("button",{on:{click:function(e){return t.decrement()}}},[t._v("-")]),a("label",[t._v(" "+t._s(t.counter)+" ")]),a("button",{on:{click:function(e){return t.increment()}}},[t._v("+")])])}),S=[],I={data:function(){return{counter:0}},methods:{decrement:function(){return this.counter>0?this.counter--:this.counter},increment:function(){if(this.counter<10)return this.counter++;alert("You cannot buy more than 10 items")}}},O=I,A=(a("f556"),Object(l["a"])(O,z,S,!1,null,"31bff10a",null)),D=A.exports,T=a("8aa5"),P=a.n(T),E={apiKey:"AIzaSyByuFhJglTG0EJTvNATpGZBAiXWmaRJdFY",authDomain:"axios-803df.firebaseapp.com",databaseURL:"https://axios-803df.firebaseio.com",projectId:"axios-803df",storageBucket:"axios-803df.appspot.com",messagingSenderId:"195609141993",appId:"1:195609141993:web:7310f653a2493bb7688678",measurementId:"G-DM5QVXDNGP"};P.a.initializeApp(E);var B=P.a.firestore(),L=B,M={data:function(){return{itemsList:[]}},components:{buttonComponent:D},methods:{fetchItems:function(){var t=this,e={};L.collection("items").get().then((function(a){a.forEach((function(a){console.log(a.id+"==>"+a.data()),e=a.data(),e.show=!1,e.id=a.id,t.itemsList.push(e)}))}))},deleteItem:function(t,e){L.collection("items").doc(e.id).delete(),this.itemsList.splice(t,1),console.log("Item Deleted Successfully")}},created:function(){this.fetchItems()}},W=M,$=(a("2e05"),Object(l["a"])(W,w,C,!1,null,"dfea0b26",null)),J=$.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("h1",[t._v("Add Item Page")]),a("form",{attrs:{id:"fm1"}},[a("label",[t._v("Item Name")]),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.item.name,expression:"item.name",modifiers:{lazy:!0}}],attrs:{type:"text",required:""},domProps:{value:t.item.name},on:{change:function(e){return t.$set(t.item,"name",e.target.value)}}}),a("label",[t._v("Item Category")]),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.item.category,expression:"item.category",modifiers:{lazy:!0}}],attrs:{type:"text"},domProps:{value:t.item.category},on:{change:function(e){return t.$set(t.item,"category",e.target.value)}}}),a("button",{on:{click:function(e){return e.preventDefault(),t.addItem(e)}}},[t._v("Add Item")])])])},G=[],N=(a("b0c0"),{data:function(){return{msg:"Add Item",item:{name:"",category:"",addedBy:"Thangamani"}}},methods:{addItem:function(){L.collection("items").doc().set(this.item),this.item.name="",this.item.category="",alert("I am in the DB .... :-) Item saved successfully")}}}),q=N,F=(a("2350"),Object(l["a"])(q,R,G,!1,null,"2736b5eb",null)),U=F.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"main"}},[a("div",{attrs:{id:"chart"}},[a("charts")],1),a("div",{attrs:{id:"chart"}},[a("doughnut")],1),a("div",{attrs:{id:"chart"}},[a("linechart")],1)])},V=[],X=a("1fca"),Y={extends:X["a"],data:function(){return{chartdata:{labels:["January","February","March","April"],datasets:[{label:"Sales1",data:[400,300,150,100],backgroundColor:"#AA6",borderWidth:1,borderColor:"#000"}]},options:{title:{display:!0,text:"Bar Chart BT3103",fontColor:"Black",fontSize:15},legend:{position:"top"},layout:{padding:{left:5,right:0,top:0,bottom:5}},scales:{yAxes:[{ticks:{min:0}}]}}}},mounted:function(){this.renderChart(this.chartdata,this.options)}},K={extends:X["b"],data:function(){return{chartdata:{labels:["January","February","March","April"],datasets:[{label:"Sales",data:[400,300,150,100],backgroundColor:["aqua","lightgreen","red","orange"],borderWidth:.5,borderColor:"#000"}]},options:{scales:{yAxes:[{ticks:{min:0}}]},layout:{padding:{left:5,right:0,top:0,bottom:10}}}}},mounted:function(){this.renderChart(this.chartdata,this.options)}},Q={extends:X["c"],data:function(){return{chartdata:{labels:["January","February","March","April"],datasets:[{label:"Sales",data:[400,300,150,100],backgroundColor:["aqua","lightgreen","red","orange"],borderWidth:.5,borderColor:"#000",fill:!1},{label:"Sales2",data:[40,30,10,15]}]},options:{scales:{yAxes:[{ticks:{min:0}}]}}}},mounted:function(){this.renderChart(this.chartdata,this.options)}},Z={components:{charts:Y,doughnut:K,linechart:Q}},tt=Z,et=(a("2939"),Object(l["a"])(tt,H,V,!1,null,"13940a3e",null)),at=et.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"main"}},[a("div",{attrs:{id:"chart"}},[a("axiosExample")],1),a("div",{attrs:{id:"chart"}},[a("PSIIndex")],1),a("div",{attrs:{id:"chart"}},[a("covid19")],1),a("div",{attrs:{id:"chart"}},[a("smrt")],1)])},rt=[],nt=a("bc3a"),ot=a.n(nt),it={extends:X["c"],data:function(){return{results:[],chartdata:{labels:[],datasets:[{label:"Bitcoin price in USD",data:[],borderWidth:.5,borderColor:"magenta",backgroundColor:"magenta",fill:!1}]},options:{}}},methods:{fetchData:function(){var t=this;ot.a.get("https://api.coindesk.com/v1/bpi/historical/close.json").then((function(e){for(var a in t.results=e.data.bpi,t.results)t.chartdata.datasets[0].data.push(t.results[a]),t.chartdata.labels.push(a+"");t.renderChart(t.chartdata,t.options)}))}},mounted:function(){this.fetchData()}},ct={extends:X["c"],data:function(){return{results:[],chartdata:{labels:[],datasets:[{label:"PSI Readings-Singapore",data:[],borderWidth:.5,borderColor:"orange",backgroundColor:"orange",fill:!1}]},options:{scales:{yAxes:[{ticks:{min:0}}]}}}},methods:{fetchData:function(){var t=this;ot.a.get("https://api.data.gov.sg/v1/environment/psi").then((function(e){for(var a in t.results=e.data.items[0].readings.psi_twenty_four_hourly,t.results)t.chartdata.datasets[0].data.push(t.results[a]),t.chartdata.labels.push(a+"");t.renderChart(t.chartdata,t.options)}))}},mounted:function(){this.fetchData()}},dt=(a("d3b7"),a("6062"),a("3ca3"),a("ddb0"),a("b85c")),lt={extends:X["c"],data:function(){return{results:[],chartdata:{labels:[],datasets:[{label:"Total COVID-19 cases",data:[],borderWidth:.5,borderColor:"turquoise",backgroundColor:"turquoise",fill:!1}]},options:{}}},methods:{fetchData:function(){var t=this;ot.a.get("http://covid19.soficoop.com/country/us").then((function(e){var a;t.results=e.data.snapshots;var s,r=new Set,n=Object(dt["a"])(t.results);try{for(n.s();!(s=n.n()).done;){a=s.value;var o=a["timestamp"].substring(8,10);r.has(o)||(r.add(o),t.chartdata.datasets[0].data.push(a["cases"]),t.chartdata.labels.push(a["timestamp"].substring(0,10)+""))}}catch(i){n.e(i)}finally{n.f()}t.renderChart(t.chartdata,t.options)}))}},mounted:function(){this.fetchData()}},ut={extends:X["c"],data:function(){return{results:[],chartdata:{labels:[],datasets:[{label:"MRT ridership",data:[],borderWidth:.5,borderColor:"hotpink",backgroundColor:"hotpink",fill:!1},{label:"LRT ridership",data:[],borderWidth:.5,borderColor:"deepskyblue",backgroundColor:"deepskyblue",fill:!1},{label:"Bus ridership",data:[],borderWidth:.5,borderColor:"limegreen",backgroundColor:"limegreen",fill:!1},{label:"Taxi ridership",data:[],borderWidth:.5,borderColor:"gold",backgroundColor:"gold",fill:!1}]},options:{}}},methods:{fetchData:function(){var t=this;ot.a.get("https://data.gov.sg/api/action/datastore_search?resource_id=552b8662-3cbc-48c0-9fbb-abdc07fb377a").then((function(e){var a;t.results=e.data.result.records;var s,r=Object(dt["a"])(t.results);try{for(r.s();!(s=r.n()).done;)a=s.value,"MRT"==a["type_of_public_transport"]?(t.chartdata.datasets[0].data.push(a["average_ridership"]),t.chartdata.labels.push(a["year"]+"")):"LRT"==a["type_of_public_transport"]?t.chartdata.datasets[1].data.push(a["average_ridership"]):"Bus"==a["type_of_public_transport"]?t.chartdata.datasets[2].data.push(a["average_ridership"]):"Taxi"==a["type_of_public_transport"]&&t.chartdata.datasets[3].data.push(a["average_ridership"])}catch(n){r.e(n)}finally{r.f()}t.renderChart(t.chartdata,t.options)}))}},mounted:function(){this.fetchData()}},ft={components:{axiosExample:it,PSIIndex:ct,covid19:lt,smrt:ut}},bt=ft,ht=(a("fbc4"),Object(l["a"])(bt,st,rt,!1,null,"c2f4e690",null)),mt=ht.exports,pt=[{path:"/",component:at},{path:"/add",component:U},{path:"/list",component:J},{path:"/axios",component:mt}],jt=a("8c4f");s["a"].use(jt["a"]),s["a"].use(x["a"]),s["a"].config.productionTip=!1;var gt=new jt["a"]({routes:pt,mode:"history"});new s["a"]({render:function(t){return t(_)},router:gt}).$mount("#app")},"5a8e":function(t,e,a){},6645:function(t,e,a){},7756:function(t,e,a){},"9a8a":function(t,e,a){},ac60:function(t,e,a){"use strict";var s=a("5a8e"),r=a.n(s);r.a},b010:function(t,e,a){"use strict";var s=a("9a8a"),r=a.n(s);r.a},b23e:function(t,e,a){},b8cc:function(t,e,a){"use strict";var s=a("514a"),r=a.n(s);r.a},c0c8:function(t,e,a){},f556:function(t,e,a){"use strict";var s=a("b23e"),r=a.n(s);r.a},fbc4:function(t,e,a){"use strict";var s=a("c0c8"),r=a.n(s);r.a}});
//# sourceMappingURL=app.f471ecaa.js.map