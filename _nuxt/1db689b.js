(window.webpackJsonp=window.webpackJsonp||[]).push([[8,4],{274:function(t,o,e){var content=e(277);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(57).default)("f0b690b8",content,!0,{sourceMap:!1})},276:function(t,o,e){"use strict";e(274)},277:function(t,o,e){var n=e(56)(!1);n.push([t.i,'.img__wrapper[data-v-ba830f90]{width:100%;text-align:center}.img__wrapper img[data-v-ba830f90]{width:100%}body[data-v-ba830f90],html[data-v-ba830f90]{background-color:#212121}.h1[data-v-ba830f90],h2[data-v-ba830f90],h3[data-v-ba830f90],h4[data-v-ba830f90],h5[data-v-ba830f90],h6[data-v-ba830f90],p[data-v-ba830f90]{color:#fff}.mx-n15[data-v-ba830f90]{margin-left:-15px;margin-right:-15px}.fluid_fullwidth[data-v-ba830f90]{padding-left:0;padding-right:0;box-sizing:content-box;width:100vw}p[data-v-ba830f90]{height:34px;margin:10px 0;text-align:left;padding-bottom:10px;border-bottom:1px solid #707070;color:#fff;font-size:24px}p[data-v-ba830f90]:before{display:inline-block;content:"";width:5px;height:100%;background-color:red;margin-right:5px}p.color_infred[data-v-ba830f90]:before{background-color:#fd226b}p.color_inforange[data-v-ba830f90]:before{background-color:#feb334}p.color_inflightblue[data-v-ba830f90]:before{background-color:#26d7d5}p.color_infblue[data-v-ba830f90]:before{background-color:#1e77f2}',""]),t.exports=n},278:function(t,o,e){"use strict";e.r(o);var n={props:{color_infred:{type:Boolean,default:!1},color_inforange:{type:Boolean,default:!1},color_inflightblue:{type:Boolean,default:!1},color_infblue:{type:Boolean,default:!1}}},r=(e(276),e(46)),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("p",{class:{color_infred:t.color_infred,color_inforange:t.color_inforange,color_inflightblue:t.color_inflightblue,color_infblue:t.color_infblue}},[t._t("default",[t._v("テキスト")])],2)])}),[],!1,null,"ba830f90",null);o.default=component.exports},284:function(t,o,e){var content=e(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(57).default)("d85a91de",content,!0,{sourceMap:!1})},291:function(t,o,e){"use strict";e(284)},292:function(t,o,e){var n=e(56)(!1);n.push([t.i,'.img__wrapper{width:100%;text-align:center}.img__wrapper img{width:100%}body,html{background-color:#212121}.h1,h2,h3,h4,h5,h6,p{color:#fff}.mx-n15{margin-left:-15px;margin-right:-15px}.fluid_fullwidth{padding-left:0;padding-right:0;box-sizing:content-box;width:100vw}.reaction_button{display:inline-block;flex-basis:30%;color:#fff;padding:10px;border:none;font-size:18px}.reaction_button,.reaction_button.color_infred{background-color:#fd226b}.reaction_button.color_inforange{background-color:#feb334}.reaction_button.color_inflightblue{background-color:#26d7d5}.reaction_button.color_infblue{background-color:#1e77f2}.title{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}',""]),t.exports=n},299:function(t,o,e){"use strict";e.r(o);var n=e(278),r=e(138),c={components:{CHeaderStyleOne:n.default},data:function(){return{waitingLink:"/waiting/",chooseLink:"/chooseSeat/",watchLink:"/watch/"}},created:function(){this.db=r.a.firestore()},methods:{submitClap:function(){var t=this.db.collection("action"),o=Math.round((new Date).getTime());t.add({isClap:!0,isWhistle:!1,isLaugh:!1,time:o}).then((function(t){console.log("Document written with ID: ",t.id)})).catch((function(t){console.error("Error adding document: ",t)}))},submitWhistle:function(){var t=this.db.collection("action"),o=Math.round((new Date).getTime());t.add({isClap:!1,isWhistle:!0,isLaugh:!1,time:o}).then((function(t){console.log("Document written with ID: ",t.id)})).catch((function(t){console.error("Error adding document: ",t)}))},submitLaugh:function(){var t=this.db.collection("action"),o=Math.round((new Date).getTime());t.add({isClap:!1,isWhistle:!1,isLaugh:!0,time:o}).then((function(t){console.log("Document written with ID: ",t.id)})).catch((function(t){console.error("Error adding document: ",t)}))}}},l=(e(291),e(46)),component=Object(l.a)(c,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),e("div",{staticClass:"row mb-5"},[e("div",{staticClass:"col-md-6"},[e("c-header-style-one",[t._v("トークでの気づきを発信しましょう！")]),t._v(" "),e("p",[t._v("トーク視聴中の気づきを下のボタンから発信しましょう！")]),t._v(" "),t._m(1)],1),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"text-center"},[e("c-header-style-one",[t._v("スピーカーさんに拍手を送ろう！")]),t._v(" "),e("p",[t._v("（アイコンにしよ）")]),t._v(" "),e("div",{staticClass:"d-flex justify-content-around "},[e("button",{staticClass:"reaction_button color_inforange",on:{click:function(o){return t.submitClap()}}},[t._v("拍手")]),t._v(" "),e("button",{staticClass:"reaction_button color_infred",on:{click:function(o){return t.submitWhistle()}}},[t._v("口笛")]),t._v(" "),e("button",{staticClass:"reaction_button color_infblue",on:{click:function(o){return t.submitLaugh()}}},[t._v("笑い声")])])],1)])]),t._v(" "),e("div",{staticClass:"row mb-5"},[e("div",{staticClass:"col-md-6"},[e("c-header-style-one",{attrs:{color_infblue:""}},[t._v("ブレイク")]),t._v(" "),e("p",[t._v("00:00~から〇〇にてブレイクタイムを設けています。参加希望の方は下のボタンからご参加ください！")])],1),t._v(" "),t._m(2)]),t._v(" "),e("div",{staticClass:"row mb-5"},[t._m(3),t._v(" "),e("div",{staticClass:"col-md-6"},[e("c-header-style-one",{attrs:{color_inforange:""}},[t._v("休憩中は...")]),t._v(" "),e("p",[t._v("00:00~トークの間の休憩中は、ちょっと背伸びして、気づきを整理しましょう。整理し終わったらまた違う視点でもトークを楽しんでください！")])],1)])])}),[function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"row mb-5"},[o("div",{staticClass:"col-12 fluid_fullwidth"},[o("div",{staticClass:"img__wrapper"},[o("img",{attrs:{src:"watch/youtube_dummy.png",alt:""}})])])])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"text-center"},[e("form",{attrs:{action:"",method:"post"}},[e("input",{attrs:{type:"text",name:"yes",placeholder:"その考えおもろ"}}),t._v(" "),e("input",{staticClass:"reaction_button",attrs:{type:"submit",value:"あっ！！"}})])])},function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"img__wrapper"},[o("img",{attrs:{src:"watch/youtube_dummy.png",alt:""}})])])},function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"img__wrapper"},[o("img",{attrs:{src:"watch/youtube_dummy.png",alt:""}})])])}],!1,null,null,null);o.default=component.exports}}]);