(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2],{251:function(t,n,e){var content=e(253);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(55).default)("2e465624",content,!0,{sourceMap:!1})},252:function(t,n,e){"use strict";e(251)},253:function(t,n,e){var o=e(54)(!1);o.push([t.i,".button[data-v-106aa894]{background-color:red;color:#fff;padding:10px}.button.color_red[data-v-106aa894]{background-color:#d51212}.button.color_blue[data-v-106aa894]{background-color:#19199a}",""]),t.exports=o},254:function(t,n,e){"use strict";e.r(n);var o={props:{link:{type:String,default:"/"},color_red:{type:Boolean,default:!1},color_blue:{type:Boolean,default:!1}},methods:{isInternalLink:function(path){return!/^https?:\/\//.test(path)}}},l=(e(252),e(43)),component=Object(l.a)(o,(function(){var t=this,n=t.$createElement;return(t._self._c||n)(t.isInternalLink(t.link)?"nuxt-link":"a",{tag:"component",staticClass:"button",class:{color_red:t.color_red,color_blue:t.color_blue},attrs:{to:t.isInternalLink(t.link)?t.link:"",href:t.isInternalLink(t.link)?"":t.link}},[t._t("default",[t._v("ボタン")])],2)}),[],!1,null,"106aa894",null);n.default=component.exports},259:function(t,n,e){var content=e(266);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(55).default)("668c4992",content,!0,{sourceMap:!1})},265:function(t,n,e){"use strict";e(259)},266:function(t,n,e){var o=e(54)(!1);o.push([t.i,'.container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}',""]),t.exports=o},272:function(t,n,e){"use strict";e.r(n);var o={components:{CButton:e(254).default},data:function(){return{waitingLink:"/waiting/",chooseLink:"/chooseSeat/",watchLink:"/watch/"}}},l=(e(265),e(43)),component=Object(l.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("div",[e("h1",{staticClass:"title"},[t._v("\n      待機ページ\n    ")]),t._v(" "),e("c-button",{attrs:{href:"/connect",color_blue:""}},[t._v(" トップへ ")]),t._v(" "),e("c-button",{attrs:{href:t.waitingLink}},[t._v(" 待機ページへ ")]),t._v(" "),e("c-button",{attrs:{href:t.chooseLink,color_blue:""}},[t._v(" 席を選択ページへ ")]),t._v(" "),e("c-button",{attrs:{href:t.watchLink}},[t._v(" 視聴用ページへ ")])],1)])}),[],!1,null,null,null);n.default=component.exports}}]);