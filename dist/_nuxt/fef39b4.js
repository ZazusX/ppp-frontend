(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{288:function(t,e,r){"use strict";r.r(e);var n=r(12),o=(r(27),r(49),r(40),r(20),r(48),r(278)),c=r(279);c.marked.use({gfm:!0,breaks:!0});var l={name:"kontakt",data:function(){return{title:"PPP",show:!1,pages:null}},methods:{fetchContents:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("https://api.ppp.co.at/api/pages?populate=*");case 2:r=e.sent,t.pages=r.data.data;case 4:case"end":return e.stop()}}),e)})))()},formatRte:function(t){return null!=t?Object(c.marked)(t):""},formatTitle:function(t){return null!=t?t.replace(/\/n/g,"<br />"):""}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchContents();case 2:document.body.removeAttribute("class"),document.body.classList.add("page-kontakt"),t.show=!0;case 5:case"end":return e.stop()}}),e)})))()},computed:{getPage:function(){var t=this;if(null==this.pages)return!1;var e=this.pages.filter((function(e){return e.attributes.Slug===t.$route.params.kontakt}));return this.title="PPP - "+e[0].attributes.Title.replace(/\/n/g,""),e[0]}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.title}]}}},d=r(16),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("article",{class:"show-"+t.show},[t.show?e("main",[e("Transition",[null!==t.getPage.attributes.Image_mobile.data?e("img",{staticClass:"background-mobile",attrs:{src:"https://api.ppp.co.at/"+t.getPage.attributes.Image_mobile.data.attributes.url,alt:""}}):t._e()]),t._v(" "),e("h1",{domProps:{innerHTML:t._s(t.formatTitle(t.getPage.attributes.Title))}}),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.formatRte(t.getPage.attributes.Content))}})],1):t._e(),t._v(" "),t.show?e("div",[null!==t.getPage.attributes.Image_desktop.data?e("img",{staticClass:"background",attrs:{src:"https://api.ppp.co.at/"+t.getPage.attributes.Image_desktop.data.attributes.url,alt:""}}):t._e()]):t._e(),t._v(" "),t.show?e("aside",[e("div",{domProps:{innerHTML:t._s(t.formatRte(t.getPage.attributes.Hashtags))}})]):t._e()])}),[],!1,null,null,null);e.default=component.exports}}]);