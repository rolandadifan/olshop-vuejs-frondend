(function(t){function a(a){for(var s,r,o=a[0],c=a[1],l=a[2],u=0,d=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);g&&g(a);while(d.length)d.shift()();return n.push.apply(n,l||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],s=!0,r=1;r<e.length;r++){var o=e[r];0!==i[o]&&(s=!1)}s&&(n.splice(a--,1),t=c(c.s=e[0]))}return t}var s={},r={app:0},i={app:0},n=[];function o(t){return c.p+"js/"+({about:"about",cart:"cart",product:"product",success:"success"}[t]||t)+"."+{about:"3f8f2095",cart:"c0f305a1",product:"75a6f0c2",success:"27b43494"}[t]+".js"}function c(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.e=function(t){var a=[],e={cart:1,product:1};r[t]?a.push(r[t]):0!==r[t]&&e[t]&&a.push(r[t]=new Promise((function(a,e){for(var s="css/"+({about:"about",cart:"cart",product:"product",success:"success"}[t]||t)+"."+{about:"31d6cfe0",cart:"a92c5483",product:"40e5b968",success:"31d6cfe0"}[t]+".css",i=c.p+s,n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var l=n[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===s||u===i))return a()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===s||u===i)return a()}var g=document.createElement("link");g.rel="stylesheet",g.type="text/css",g.onload=a,g.onerror=function(a){var s=a&&a.target&&a.target.src||i,n=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=s,delete r[t],g.parentNode.removeChild(g),e(n)},g.href=i;var v=document.getElementsByTagName("head")[0];v.appendChild(g)})).then((function(){r[t]=0})));var s=i[t];if(0!==s)if(s)a.push(s[2]);else{var n=new Promise((function(a,e){s=i[t]=[a,e]}));a.push(s[2]=n);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var d=new Error;l=function(a){u.onerror=u.onload=null,clearTimeout(g);var e=i[t];if(0!==e){if(e){var s=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;d.message="Loading chunk "+t+" failed.\n("+s+": "+r+")",d.name="ChunkLoadError",d.type=s,d.request=r,e[1](d)}i[t]=void 0}};var g=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(a)},c.m=t,c.c=s,c.d=function(t,a,e){c.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,a){if(1&a&&(t=c(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)c.d(e,s,function(a){return t[a]}.bind(null,s));return e},c.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(a,"a",a),a},c.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=a,l=l.slice();for(var d=0;d<l.length;d++)a(l[d]);var g=u;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var s=e("85ec"),r=e.n(s);r.a},"0418":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("header",{staticClass:"header-section"},[t._m(0),e("div",{staticClass:"container"},[e("div",{staticClass:"inner-header"},[e("div",{staticClass:"row"},[t._m(1),t._m(2),e("div",{staticClass:"col-lg-5 col-md-7"}),e("div",{staticClass:"col-lg-3 text-right col-md-3 mt-5"},[e("ul",{staticClass:"nav-right"},[e("li",{staticClass:"cart-icon"},[t._v(" Daftar Belanja "),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"icon_bag_alt"}),e("span",[t._v(t._s(t.keranjangUser.length))])]),e("div",{staticClass:"cart-hover"},[e("div",{staticClass:"select-items"},[e("table",[t.keranjangUser.length>0?e("tbody",t._l(t.keranjangUser,(function(a){return e("tr",{key:a.id},[e("td",{staticClass:"si-pic"},[e("img",{staticClass:"photo-item",attrs:{src:a.photo,alt:""}})]),e("td",{staticClass:"si-text"},[e("div",{staticClass:"product-selected"},[e("p",[t._v("$"+t._s(a.price)+" x 1")]),e("h6",[t._v(t._s(a.name))])])]),e("td",{staticClass:"si-close",on:{click:function(e){return t.removeItem(a.id)}}},[e("i",{staticClass:"ti-close"})])])})),0):e("tbody",[t._m(3)])])]),e("div",{staticClass:"select-total"},[e("span",[t._v("total:")]),e("h5",[t._v("$"+t._s(t.totalHarga))])]),e("div",{staticClass:"select-button"},[e("a",{staticClass:"primary-btn view-card",attrs:{href:"#"}},[e("router-link",{staticStyle:{color:"white"},attrs:{to:"/cart"}},[t._v("VIEW CARD")])],1),e("a",{staticClass:"primary-btn checkout-btn",attrs:{href:"#"}},[t._v("CHECK OUT")])])])])])])])])])])])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"header-top"},[e("div",{staticClass:"container"},[e("div",{staticClass:"ht-left"},[e("div",{staticClass:"mail-service"},[e("i",{staticClass:" fa fa-envelope"}),t._v(" Olshop@gmail.com ")]),e("div",{staticClass:"phone-service"},[e("i",{staticClass:" fa fa-phone"}),t._v(" +628 22081996 ")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-md-2 col-md-2"},[e("div",{staticClass:"logo"},[e("a",{attrs:{href:"./index.html"}},[e("img",{staticClass:"image-header",attrs:{width:"125px",src:"/logo.png",alt:""}})])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-sm-2 col-sm-2 mt-5"},[e("h3",{staticClass:"tittle-header"},[t._v("OLSHOP")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",[e("td",[t._v(" keranjan kosong ")])])}],i=(e("c740"),e("d81d"),e("13d5"),e("a434"),{name:"Header",data:function(){return{keranjangUser:[]}},methods:{removeItem:function(t){var a=JSON.parse(localStorage.getItem("keranjangUser")),e=a.map((function(t){return t.id})),s=e.findIndex((function(a){return a==t}));this.keranjangUser.splice(s,1);var r=JSON.stringify(this.keranjangUser);localStorage.setItem("keranjangUser",r),window.location.reload()}},mounted:function(){if(localStorage.getItem("keranjangUser"))try{this.keranjangUser=JSON.parse(localStorage.getItem("keranjangUser"))}catch(t){localStorage.removeItem("keranjangUser")}},computed:{totalHarga:function(){return this.keranjangUser.reduce((function(t,a){return t+a.price}),0)}}}),n=i,o=(e("0df8"),e("2877")),c=Object(o["a"])(n,s,r,!1,null,null,null);a["a"]=c.exports},"0940":function(t,a,e){},"0df8":function(t,a,e){"use strict";var s=e("309a"),r=e.n(s);r.a},"1f33":function(t,a,e){"use strict";var s=e("0940"),r=e.n(s);r.a},"309a":function(t,a,e){},"41b4":function(t,a,e){"use strict";var s=e("ba42"),r=e.n(s);r.a},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},i=[],n=(e("034f"),e("2877")),o={},c=Object(n["a"])(o,r,i,!1,null,null,null),l=c.exports,u=(e("d3b7"),e("8c4f")),d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("Header"),e("Hero"),e("Banner"),e("Instagram"),e("Patnerlogo"),e("Footer")],1)},g=[],v=e("0418"),m=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("section",{staticClass:"hero-section"},[e("carousel",{staticClass:"hero-items",attrs:{items:1,autoplay:!0,nav:!1}},[e("div",{staticClass:"single-hero-items set-bg",staticStyle:{"background-image":"url('/img/hero-1.jpg')"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-5"},[e("span",[t._v("Bag,kids")]),e("h1",[t._v("Black friday")]),e("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore ")]),e("a",{staticClass:"primary-btn",attrs:{href:"#"}},[t._v("Shop Now")])])])])]),e("div",{staticClass:"single-hero-items set-bg",staticStyle:{"background-image":"url('/img/hero-2.jpg')"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-5"},[e("span",[t._v("Bag,kids")]),e("h1",[t._v("Black friday")]),e("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore ")]),e("a",{staticClass:"primary-btn",attrs:{href:"#"}},[t._v("Shop Now")])])])])]),e("div",{staticClass:"single-hero-items set-bg",staticStyle:{"background-image":"url('/img/hero-3.jpg')"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-5"},[e("span",[t._v("Bag,kids")]),e("h1",[t._v("Black friday")]),e("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore ")]),e("a",{staticClass:"primary-btn",attrs:{href:"#"}},[t._v("Shop Now")])])])])])])],1)])},f=[],p=e("7ec7"),h=e.n(p),C={name:"Hero",components:{carousel:h.a}},_=C,b=Object(n["a"])(_,m,f,!1,null,null,null),y=b.exports,k=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("section",{staticClass:"women-banner spad"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[t.products.length>0?e("div",{staticClass:"col-lg-12 mt-5"},[e("carousel",{staticClass:"product-slider",attrs:{items:3,nav:!1,autoplay:!0,dots:!1}},t._l(t.products,(function(a){return e("div",{key:a.id,staticClass:"product-item"},[e("div",{staticClass:"pi-pic"},[e("img",{attrs:{src:a.galleries[0].photo,alt:""}}),e("ul",[e("li",{staticClass:"w-icon active"},[e("a",{attrs:{href:"/"},on:{click:function(e){return t.saveKeranjang(a.id,a.name,a.price,a.galleries[0].photo)}}},[e("i",{staticClass:"icon_bag_alt"})])]),e("li",{staticClass:"quick-view"},[e("router-link",{attrs:{to:"/product/"+a.id}},[t._v("+ Quick View")])],1)])]),e("div",{staticClass:"pi-text"},[e("div",{staticClass:"catagory-name"},[t._v(t._s(a.type))]),e("router-link",{attrs:{to:"/product"}},[e("a",{attrs:{href:"#"}},[e("h5",[t._v(t._s(a.name))])])]),e("div",{staticClass:"product-price"},[t._v(" $"+t._s(a.price)+" "),e("span",[t._v("$35.00")])])],1)])})),0)],1):e("div",{staticClass:"col-lg-12"},[e("p",[t._v("Produk Terbaru Belum Tersedia")])])])])])])},j=[],S=e("bc3a"),w=e.n(S),O={name:"Banner",components:{carousel:h.a},data:function(){return{products:[],keranjangUser:[]}},methods:{saveKeranjang:function(t,a,e,s){var r={id:t,name:a,price:e,photo:s};this.keranjangUser.push(r);var i=JSON.stringify(this.keranjangUser);localStorage.setItem("keranjangUser",i)}},mounted:function(){var t=this;if(localStorage.getItem("keranjangUser"))try{this.keranjangUser=JSON.parse(localStorage.getItem("keranjangUser"))}catch(a){localStorage.removeItem("keranjangUser")}w.a.get("http://127.0.0.1:8000/api/products").then((function(a){return t.products=a.data.data.data})).catch((function(t){return console.log(t)}))}},x=O,E=(e("41b4"),Object(n["a"])(x,k,j,!1,null,null,null)),U=E.exports,I=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"instagram-photo"},[e("div",{staticClass:"insta-item set-bg",staticStyle:{"background-image":"url('/img/insta-1.jpg')"}},[e("div",{staticClass:"inside-text"},[e("i",{staticClass:"ti-instagram"}),e("h5",[e("a",{attrs:{href:"#"}},[t._v("Our Member")])])])]),e("div",{staticClass:"insta-item set-bg",staticStyle:{"background-image":"url('/img/insta-2.jpg')"}},[e("div",{staticClass:"inside-text"},[e("i",{staticClass:"ti-instagram"}),e("h5",[e("a",{attrs:{href:"#"}},[t._v("Our Member")])])])]),e("div",{staticClass:"insta-item set-bg",staticStyle:{"background-image":"url('/img/insta-3.jpg')"}},[e("div",{staticClass:"inside-text"},[e("i",{staticClass:"ti-instagram"}),e("h5",[e("a",{attrs:{href:"#"}},[t._v("Our Member")])])])]),e("div",{staticClass:"insta-item set-bg",staticStyle:{"background-image":"url('/img/insta-4.jpg')"}},[e("div",{staticClass:"inside-text"},[e("i",{staticClass:"ti-instagram"}),e("h5",[e("a",{attrs:{href:"#"}},[t._v("Our Member")])])])]),e("div",{staticClass:"insta-item set-bg",staticStyle:{"background-image":"url('/img/insta-5.jpg')"}},[e("div",{staticClass:"inside-text"},[e("i",{staticClass:"ti-instagram"}),e("h5",[e("a",{attrs:{href:"#"}},[t._v("Our Member")])])])]),e("div",{staticClass:"insta-item set-bg",staticStyle:{"background-image":"url('/img/insta-6.jpg')"}},[e("div",{staticClass:"inside-text"},[e("i",{staticClass:"ti-instagram"}),e("h5",[e("a",{attrs:{href:"#"}},[t._v("Our Member")])])])])])])}],P={name:"Instagram",components:{}},B=P,H=Object(n["a"])(B,I,$,!1,null,null,null),A=H.exports,M=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"partner-logo"},[e("div",{staticClass:"container"},[e("carousel",{staticClass:"logo-carousel",attrs:{items:5,nav:!1,dots:!1,loop:!0,autoplay:!0}},[e("div",{staticClass:"logo-item"},[e("div",{staticClass:"tablecell-inner"},[e("img",{attrs:{src:"img/logo-carousel/logo-1.png",alt:""}})])]),e("div",{staticClass:"logo-item"},[e("div",{staticClass:"tablecell-inner"},[e("img",{attrs:{src:"img/logo-carousel/logo-2.png",alt:""}})])]),e("div",{staticClass:"logo-item"},[e("div",{staticClass:"tablecell-inner"},[e("img",{attrs:{src:"img/logo-carousel/logo-3.png",alt:""}})])]),e("div",{staticClass:"logo-item"},[e("div",{staticClass:"tablecell-inner"},[e("img",{attrs:{src:"img/logo-carousel/logo-4.png",alt:""}})])]),e("div",{staticClass:"logo-item"},[e("div",{staticClass:"tablecell-inner"},[e("img",{attrs:{src:"img/logo-carousel/logo-5.png",alt:""}})])])])],1)])])},N=[],T={name:"Patnerlogo",components:{carousel:h.a}},L=T,J=Object(n["a"])(L,M,N,!1,null,null,null),D=J.exports,F=e("fd2d"),K={name:"Home",components:{Header:v["a"],Hero:y,Banner:U,Instagram:A,Patnerlogo:D,Footer:F["a"]}},q=K,V=Object(n["a"])(q,d,g,!1,null,null,null),z=V.exports;s["a"].use(u["a"]);var Q=[{path:"/",name:"Home",component:z},{path:"/about",name:"About",component:function(){return e.e("about").then(e.bind(null,"f820"))}},{path:"/product/:id",props:!0,name:"product",component:function(){return e.e("product").then(e.bind(null,"d2f1"))}},{path:"/cart",name:"ShoppingCart",component:function(){return e.e("cart").then(e.bind(null,"8c6e"))}},{path:"/success",name:"Success",component:function(){return e.e("success").then(e.bind(null,"bb0d"))}}],R=new u["a"]({routes:Q}),W=R;s["a"].config.productionTip=!1,new s["a"]({router:W,render:function(t){return t(l)}}).$mount("#app")},"85ec":function(t,a,e){},ba42:function(t,a,e){},fd2d:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("footer",{staticClass:"footer-section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-5"},[e("div",{staticClass:"footer-left text-left"},[e("div",{staticClass:"footer-logo"},[e("a",{staticStyle:{color:"red","font-size":"25px"},attrs:{href:"#"}},[t._v("OLSHOP.ID")])]),e("ul",[e("li",[t._v("Address: Mangga dua, Jakarta")]),e("li",[t._v("Phone: +628 22081996")]),e("li",[t._v("Email: olshop@gmail.com")])]),e("div",{staticClass:"footer-social"},[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-facebook"})]),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-instagram"})]),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-twitter"})]),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-pinterest"})])])])]),e("div",{staticClass:"col-lg-3 offset-lg-1"},[e("div",{staticClass:"footer-widget text-left"},[e("h5",[t._v("Information")]),e("ul",[e("li",[e("a",{attrs:{href:"#"}},[t._v("About Us")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("Checkout")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("Contact")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("Serivius")])])])])]),e("div",{staticClass:"col-lg-3"},[e("div",{staticClass:"footer-widget text-left"},[e("h5",[t._v("My Account")]),e("ul",[e("li",[e("a",{attrs:{href:"#"}},[t._v("My Account")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("Contact")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("Shopping Cart")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("Shop")])])])])])])]),e("div",{staticClass:"copyright-reserved"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"copyright-text text-center"},[t._v(" Copyright © 2020 All rights reserved | olshopcorp ")])])])])])])])}],i={name:"Footer",components:{}},n=i,o=(e("1f33"),e("2877")),c=Object(o["a"])(n,s,r,!1,null,null,null);a["a"]=c.exports}});
//# sourceMappingURL=app.0b6cf21a.js.map