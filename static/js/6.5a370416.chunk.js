(this.webpackJsonpsimpleforum=this.webpackJsonpsimpleforum||[]).push([[6],{47:function(e,n,t){"use strict";t.r(n);var r=t(37),a=t(3),o=t(0),u=t.n(o),i=t(38),c=t(39),l=t(17),s=t(43),d=t(44),m=t(2);function f(){var e=Object(a.a)(["\n  border: 1px solid ",";\n"]);return f=function(){return e},e}function b(){var e=Object(a.a)(["\n  background: #f3f3f3;\n  width: 100rem;\n  padding: 2rem;\n  font-size: 1.5rem;\n  cursor: ",";\n  transition: all 0.3s;\n\n  &:hover {\n    background: #ccc;\n  }\n"]);return b=function(){return e},e}function h(){var e=Object(a.a)(["\n  height: 3.5rem;\n  width: 100rem;\n  border-radius: 5px;\n  font-size: 1.6rem;\n  padding: 2rem;\n  outline: none;\n  border: 1px solid ",";\n  margin-bottom: 1rem;\n"]);return h=function(){return e},e}var v=m.c.input(h(),(function(e){return e.theme.secondaryTextColor})),p=m.c.li(b(),(function(e){return!e.disablePointer&&"pointer"})),g=m.c.ul(f(),(function(e){return e.theme.secondaryTextColor})),j=function(e){var n=e.suggestions,t=void 0===n?[]:n,a=e.history,i=Object(o.useState)(!1),c=Object(r.a)(i,2),l=c[0],s=c[1],d=Object(o.useState)([]),m=Object(r.a)(d,2),f=m[0],b=m[1],h=function(e){a.push("/user/".concat(e.id))};return u.a.createElement(u.a.Fragment,null,u.a.createElement(v,{placeholder:"Search for authors",onChange:function(e){if(e.target.value){var n=t.filter((function(n){return n.name.toLowerCase().includes(e.target.value.toLowerCase())}));b(n),s(!0)}else s(!1)}}),l?f.length?u.a.createElement(g,null,f.map((function(e){return u.a.createElement(p,{onClick:function(){return h(e)}},e.name)}))):u.a.createElement(g,null,u.a.createElement(p,{disablePointer:!0},"No Users Found!")):null)};function O(){var e=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return O=function(){return e},e}var E=m.c.div(O());n.default=function(e){var n=e.history,t=Object(c.a)({url:Object(i.c)(),method:{method:"GET"}}),a=Object(r.a)(t,2),o=a[0],m=a[1],f=Object(c.a)({url:Object(i.f)(),method:{method:"GET"}}),b=Object(r.a)(f,2),h=b[0],v=b[1];return m||v?u.a.createElement(l.a,null):u.a.createElement(E,null,u.a.createElement(j,{suggestions:h,history:n}),u.a.createElement(d.a,null,o&&o.map((function(e){var t=h.find((function(n){return n.id===e.userId}));return u.a.createElement(s.a,{history:n,key:e.id,id:e.id,title:e.title,body:e.body,userId:null===t||void 0===t?void 0:t.id,username:null===t||void 0===t?void 0:t.username})}))))}}}]);
//# sourceMappingURL=6.5a370416.chunk.js.map