(this.webpackJsonphackernews=this.webpackJsonphackernews||[]).push([[0],{16:function(e,t,a){e.exports=a(39)},39:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(13),o=a.n(c),u=a(3),s=a.n(u),l=a(14),m=a(2),i=a(15),d=a.n(i),b=function(){var e=Object(r.useState)({hits:[]}),t=Object(m.a)(e,2),a=t[0],c=t[1],o=Object(r.useState)("https://hn.algolia.com/api/v1/search?query=redux"),u=Object(m.a)(o,2),i=u[0],b=u[1],f=Object(r.useState)("redux"),g=Object(m.a)(f,2),p=g[0],h=g[1],x=Object(r.useState)(!1),y=Object(m.a)(x,2),v=y[0],j=y[1],E=Object(r.useState)(!1),O=Object(m.a)(E,2),w=O[0],S=O[1];return Object(r.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),S(!1),e.prev=2,e.next=5,d.a.get(i);case 5:t=e.sent,c(t.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),S(!0);case 12:j(!1);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}})()()}),[i]),n.a.createElement("div",{className:"container mt-1 flex justify-center md:border md:rounded m-auto text-center text-gray-900"},n.a.createElement("div",{className:"w-full md:max-w-sm px-1 border rounded bg-orange-300"},n.a.createElement("form",{onSubmit:function(e){b("https://hn.algolia.com/api/v1/search?query=".concat(p)),e.preventDefault()}},n.a.createElement("input",{className:"w-full mt-1 text-center text-green-700 outline-none border rounded border-green-300 focus:border-green-800",type:"search",placeholder:" An implementation of Hacker NEWS API",onChange:function(e){return h(e.target.value)}}),n.a.createElement("button",{type:"submit",className:"block m-auto mt-1 p-1 w-1/2 border rounded bg-gray-800 text-gray-200 hover:bg-gray-900 hover:text-green-500 focus:bg-gray-900 focus:text-green-500 focus:border-orange-700 focus:outline-none "},!0===v?n.a.createElement("p",{className:"text-orange-600"},"...Loading..."):"Search"),!0===w?n.a.createElement("p",{className:"text-red-800"},"Soryy! Something Went Wrong"):""),a.hits.map((function(e){return n.a.createElement("div",{key:e.objectID,className:"flex justify-between my-1 pl-1 bg-gray-900 border border-orange-600 rounded"},n.a.createElement("div",{className:"self-center text-green-700"},n.a.createElement("a",{href:e.url},e.title)))}))))};o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.b131e2e7.chunk.js.map