(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{290:function(t,e,r){"use strict";r.r(e);var n=r(12),o=(r(27),r(49),r(40),r(20),r(48),r(278)),l=r(279);l.marked.use({gfm:!0,breaks:!0});var c={name:"rechtsgebiete",data:function(){return{showEx:!1,showPub:!1,show:!1,pages:null}},methods:{fetchContents:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("https://api.ppp.co.at//api/pages?populate=*");case 2:r=e.sent,t.pages=r.data.data;case 4:case"end":return e.stop()}}),e)})))()},formatRte:function(t){return null!=t?Object(l.marked)(t):""},formatTitle:function(t){return null!=t?t.replace(/\/n/g,"<br />"):""}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchContents();case 2:document.body.removeAttribute("class"),document.body.classList.add("page-rechtsgebiete"),t.show=!0;case 5:case"end":return e.stop()}}),e)})))()},computed:{getPage:function(){var t=this;return null!=this.pages&&this.pages.filter((function(e){return e.attributes.Slug===t.$route.params.rechtsgebiete}))[0]}}},d=r(16),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("article",{class:"show-"+t.show},[t.show?e("main",[e("Transition",[t.showEx||t.showPub?e("a",{staticClass:"close",on:{click:function(e){t.showEx=!1,t.showPub=!1}}},[e("svg",{attrs:{width:"27",height:"27",viewBox:"0 0 27 27",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("mask",{staticStyle:{"mask-type":"luminance"},attrs:{id:"mask0_0_1",maskUnits:"userSpaceOnUse",x:"2",y:"2",width:"24",height:"24"}},[e("path",{attrs:{d:"M25.1437 2.14453H2.1543V25.1339H25.1437V2.14453Z",fill:"white"}})]),t._v(" "),e("g",{attrs:{mask:"url(#mask0_0_1)"}},[e("path",{attrs:{d:"M25.1437 2.14453H2.1543V25.1339H25.1437V2.14453Z",fill:"#B1AA8D"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.883832 28.9307L28.9362 0.878295L26.4095 -1.64844L-1.6429 26.4039L0.883832 28.9307Z",fill:"white"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M28.9392 26.4055L0.886779 -1.64685L-1.63995 0.879883L26.4124 28.9323L28.9392 26.4055Z",fill:"white"}})]),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.420959 0.412598H26.877V26.8686H0.420959V0.412598ZM3.88763 3.87927V23.402H23.4103V3.87927H3.88763Z",fill:"#B1AA8D"}})])]):t._e()]),t._v(" "),e("Transition",[t.showEx||t.showPub?t._e():e("div",[e("h1",{domProps:{innerHTML:t._s(t.formatTitle(t.getPage.attributes.Title))}}),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.formatRte(t.getPage.attributes.Content))}})])]),t._v(" "),e("Transition",[t.showEx?e("div",{staticClass:"detail"},[e("div",{domProps:{innerHTML:t._s(t.formatRte(t.getPage.attributes.Examples))}})]):t._e()]),t._v(" "),e("Transition",[t.showPub?e("div",{staticClass:"detail"},[e("div",{domProps:{innerHTML:t._s(t.formatRte(t.getPage.attributes.Publications))}})]):t._e()]),t._v(" "),e("Transition",[t.showEx||t.showPub?t._e():e("div",{staticClass:"menu"},[t.getPage.attributes.Examples?e("a",{staticClass:"switch",on:{click:function(e){t.showEx=!t.showEx}}},[t._v("BEISPIELE >")]):t._e(),t._v(" "),e("br"),t._v(" "),t.getPage.attributes.Publications?e("a",{staticClass:"switch",on:{click:function(e){t.showPub=!t.showPub}}},[t._v("PUBLIKATIONEN >")]):t._e()])])],1):t._e(),t._v(" "),t.show?e("div",[null!==t.getPage.attributes.Image_desktop.data?e("img",{staticClass:"background",attrs:{src:"https://api.ppp.co.at/"+t.getPage.attributes.Image_desktop.data.attributes.url,alt:""}}):t._e()]):t._e(),t._v(" "),!t.show||t.showEx||t.showPub?t._e():e("aside",[e("div",{domProps:{innerHTML:t._s(t.formatRte(t.getPage.attributes.Hashtags))}})])])}),[],!1,null,null,null);e.default=component.exports}}]);