(function(e){function t(t){for(var a,c,i=t[0],o=t[1],u=t[2],d=0,m=[];d<i.length;d++)c=i[d],s[c]&&m.push(s[c][0]),s[c]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);l&&l(t);while(m.length)m.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var o=n[i];0!==s[o]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},s={1:0},r=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},c.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=o;r.push([5,0]),n()})({"2xH5":function(e,t,n){"use strict";var a=n("Tp97"),s=n.n(a);s.a},5:function(e,t,n){e.exports=n("Vtdi")},"58Ru":function(e,t,n){},L2VN:function(e,t,n){"use strict";var a=n("g7jm"),s=n.n(a);s.a},"R4I/":function(e,t,n){"use strict";var a=n("UOGv"),s=n.n(a);s.a},Tp97:function(e,t,n){},UOGv:function(e,t,n){},Vtdi:function(e,t,n){"use strict";n.r(t);n("VRzm");var a=n("Kw5r"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),e._v(" "),n("News")],1)},r=[],c=n("yT7P"),i=n("L2JU"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header",class:{"header--loading":e.isFetching}},[n("div",{staticClass:"header__inner"},[e._m(0),e._v(" "),n("div",{staticClass:"header__menu"},[n("Datepicker"),e._v(" "),n("Languages"),e._v(" "),e._m(1)],1)])])},u=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header__logo"},[a("img",{attrs:{src:n("hFcQ"),width:"24",height:"24"}}),e._v(" "),a("h1",[e._v("Economic News")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header__menu-item"},[n("span",[e._v("Update")])])}],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header__menu-item",class:{"header__menu-item--selected":e.isCalOpen}},[n("flat-pickr",{staticClass:"header__menu-item--datepicker",attrs:{config:e.datePickerConfig},on:{"on-change":e.onDateSelect,"on-open":e.onDatepickerOpen,"on-close":e.onDatepickerClose},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)},d=[],m=n("k5N+"),f=n("quXc"),_=n.n(f),p=n("b/zg"),g=n("SYT2"),v=n("3BxJ"),h=n("Io36"),w=n("UMqg"),O=n("Jt8t"),b=n("ExVU"),j={ru:p["Russian"],en:null,es:g["Spanish"],zh:v["Mandarin"],pt:h["Portuguese"],ja:w["Japanese"],de:O["German"]},D={name:"Datepicker",components:{flatPickr:_.a},data:function(){return{date:null,datePickerConfig:{wrap:!1,mode:"range",altInput:!0,altFormat:"M j",static:!0,locale:null},isCalOpen:!1}},computed:Object(c["a"])({},Object(i["c"])(["currentLang","dateFrom","dateTo"])),watch:{currentLang:function(e){this.datePickerConfig.locale=j[e],this.resetDates()}},methods:Object(c["a"])({},Object(i["b"])(["setFromDate","setToDate","fetchNews"]),{onDateSelect:function(e){var t=e.map(function(e){return b["DateTime"].fromJSDate(e).toISODate()}),n=Object(m["a"])(t,2),a=n[0],s=n[1];a&&s&&(a!==this.dateFrom||s!==this.dateTo?(a&&this.setFromDate({date:a}),s&&this.setToDate({date:s}),a&&s&&this.fetchNews()):console.log("Same dates selected"))},onDatepickerOpen:function(){this.isCalOpen=!0},onDatepickerClose:function(){this.isCalOpen=!1,this.resetDates()},resetDates:function(){console.log("RESET DATES"),this.date=[this.dateFrom,this.dateTo]}}),created:function(){this.resetDates()}},L=D,C=(n("Xzxc"),n("KHd+")),T=Object(C["a"])(L,l,d,!1,null,null,null),N=T.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header__menu-item header__menu-item--dropdown sub"},[n("span",[e._v(e._s(e.langs[e.currentLang]))]),e._v(" "),n("ul",{staticClass:"header__lang-list sub__menu"},e._l(e.langs,function(t,a){return n("li",{key:a,staticClass:"header__lang-item",on:{click:function(t){e.onLangClick(a)}}},[e._v("\n      "+e._s(t)+"\n    ")])}))])},y=[],E={name:"Languages",computed:Object(c["a"])({},Object(i["c"])(["langs","currentLang"])),methods:Object(c["a"])({},Object(i["b"])(["setLanguage","fetchNews"]),{onLangClick:function(e){e!==this.currentLang&&(console.log("CHANGING LANG"),this.setLanguage({lang:e}),this.fetchNews())}})},x=E,F=(n("2xH5"),Object(C["a"])(x,k,y,!1,null,null,null)),S=F.exports,I={name:"Header",components:{Datepicker:N,Languages:S},computed:Object(c["a"])({},Object(i["c"])(["isFetching"]))},P=I,J=(n("R4I/"),Object(C["a"])(P,o,u,!1,null,null,null)),R=J.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"news"},e._l(e.news,function(t,a){var s=t.dayName,r=t.list;return n("div",{key:a,staticClass:"news__day"},[n("h4",{staticClass:"news__day-name"},[e._v(e._s(s))]),e._v(" "),n("ul",{staticClass:"news__items"},e._l(r,function(t){var a=t.EventName,s=t.CurrencyCode,r=t.formattedTime,c=t.PreviousValue,i=t.ForecastValue,o=t.ActualValue,u=t.ImpactDirection,l=t.Id;return n("li",{key:l,staticClass:"news__item"},[n("div",{staticClass:"news__time"},[e._v("\n          "+e._s(r)+"\n        ")]),e._v(" "),n("div",{staticClass:"news__currency"},[e._v("\n          "+e._s(s)+"\n        ")]),e._v(" "),n("div",{staticClass:"news__name"},[e._v("\n          "+e._s(a)+"\n        ")]),e._v(" "),n("div",{staticClass:"news__previous"},[e._v("\n          "+e._s(c)+"\n        ")]),e._v(" "),n("div",{staticClass:"news__forecast"},[e._v("\n          "+e._s(i)+"\n        ")]),e._v(" "),n("div",{staticClass:"news__actual",class:"news__actual--"+u},[n("strong",[e._v(e._s(o))])])])}))])}))},H=[],M={name:"News",computed:Object(i["c"])({news:function(e){return e.newsList}})},V=M,U=(n("L2VN"),Object(C["a"])(V,G,H,!1,null,null,null)),$=U.exports,z={name:"app",components:{Header:R,News:$},methods:Object(c["a"])({},Object(i["b"])(["fetchNews"])),created:function(){this.fetchNews()}},A=z,X=(n("ZL7j"),Object(C["a"])(A,s,r,!1,null,null,null)),q=X.exports,Y=n("a94B"),B=(n("ls82"),n("MECJ")),K=(n("91GP"),n("pIFo"),n("XHau")),Q=b["DateTime"].fromJSDate(new Date),W=Q.toISODate(),Z=Q.minus({days:3}).toISODate();function ee(e,t){var n=JSON.parse(e.replace(/<!--[\s\S]*?-->/g,"")).reduce(function(e,n){var a=n.ReleaseDate,s=b["DateTime"].fromMillis(a),r=s.endOf("day").toMillis(),c=s.setLocale(t).toLocaleString(Object.assign({weekday:"long"},b["DateTime"].DATE_HUGE)),i=s.toLocaleString(b["DateTime"].TIME_24_SIMPLE);return e.hasOwnProperty(r)||(e[r]={dayName:c,list:[]}),e[r].list.push(Object.assign({},n,{formattedTime:i})),e},{});return n}a["a"].use(i["a"]);var te=new i["a"].Store({state:{langs:{ru:"Русский",en:"English",es:"Español",zh:"中文",pt:"Português",ja:"日本語",de:"Deutsch"},currentLang:"en",newsList:[],dateFrom:Z,dateTo:W,isFetching:!0,errors:null},mutations:{updateNewsList:function(e,t){var n=t.newsList;e.newsList=n},toggleNewsLoadingIndication:function(e,t){var n=t.flag;e.isFetching=n},setError:function(e,t){var n=t.errorObj;e.errors=n},setLanguage:function(e,t){var n=t.lang;e.currentLang=n},setFromDate:function(e,t){var n=t.date;e.dateFrom=n},setToDate:function(e,t){var n=t.date;e.dateTo=n}},actions:{fetchNews:function(){var e=Object(B["a"])(regeneratorRuntime.mark(function e(t){var n,a,s,r,c,i,o,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log("FETCHING NEWWS"),e.prev=1,t.commit("toggleNewsLoadingIndication",{flag:!0}),n=t.state,a=n.currentLang,s=n.dateFrom,r=n.dateTo,c="https://www.mql5.com/".concat(a,"/economic-calendar/widget/content?date_mode=2&from=").concat(s,"T00:00:00&to=").concat(r,"T23:59:59"),e.next=7,Object(K["a"])(encodeURI(c));case 7:return i=e.sent,e.next=10,i.text();case 10:o=e.sent,u=ee(o,a),console.log(u),"object"===Object(Y["a"])(u)&&Object.keys(u).length?t.commit("updateNewsList",{newsList:u}):t.commit("setError",{errorObj:new Error("Response is not an array or empty array")}),e.next=19;break;case 16:e.prev=16,e.t0=e["catch"](1),t.commit("setError",{errorObj:e.t0});case 19:return e.prev=19,t.commit("toggleNewsLoadingIndication",{flag:!1}),e.finish(19);case 22:case"end":return e.stop()}},e,this,[[1,16,19,22]])}));return function(t){return e.apply(this,arguments)}}(),setLanguage:function(e,t){var n=t.lang;e.commit("setLanguage",{lang:n})},setFromDate:function(e,t){var n=t.date;e.commit("setFromDate",{date:n})},setToDate:function(e,t){var n=t.date;e.commit("setToDate",{date:n})}},getters:{}}),ne=te;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(q)},store:ne}).$mount("#app")},Xzxc:function(e,t,n){"use strict";var a=n("58Ru"),s=n.n(a);s.a},YnGJ:function(e,t,n){},ZL7j:function(e,t,n){"use strict";var a=n("YnGJ"),s=n.n(a);s.a},g7jm:function(e,t,n){},hFcQ:function(e,t,n){e.exports=n.p+"img/flamingo.63d35d1b.svg"}});
//# sourceMappingURL=app.3ebc3a07.js.map