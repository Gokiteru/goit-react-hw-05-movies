"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[392],{392:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var r=t(165),a=t(861),c=t(439),u=t(791),s="cast_section__xx7rU",i="cast_ul__SFbJD",o="cast_li__NhSM5",p=t(689),f=t(256),h=t(184),l=function(){var e=(0,p.UO)().movieID,n=(0,u.useState)(!1),t=(0,c.Z)(n,2),l=t[0],d=t[1],v=(0,u.useState)(null),x=(0,c.Z)(v,2),m=x[0],g=x[1];return(0,u.useEffect)((function(){var n=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return d(!0),n.prev=1,n.next=4,(0,f.Jh)(e);case 4:t=n.sent,g(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:return n.prev=11,d(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]),m?(0,h.jsxs)("section",{className:s,children:[l?(0,h.jsx)("div",{children:"Loading..."}):(0,h.jsx)("ul",{className:i,children:m.map((function(e){var n=e.id,t=e.profile_path,r=e.name,a=e.character,c=t?"https://image.tmdb.org/t/p/w500"+t:"";return(0,h.jsxs)("li",{className:o,children:[(0,h.jsx)("img",{scr:c,alt:r,width:200,height:300}),(0,h.jsxs)("div",{children:[(0,h.jsx)("p",{children:(0,h.jsx)("span",{children:r})}),a?(0,h.jsxs)("p",{children:[(0,h.jsx)("b",{children:"Character"}),(0,h.jsx)("span",{children:a})]}):(0,h.jsxs)("p",{children:[(0,h.jsx)("b",{children:"Character"}),(0,h.jsx)("span",{children:"Unknown"})]})]})]},n)}))}),!m.length&&(0,h.jsx)("p",{children:"There is no information about the cast of thiss film"})]}):(0,h.jsx)("p",{children:"Something went wrong"})}},256:function(e,n,t){t.d(n,{Df:function(){return s},IR:function(){return f},Jh:function(){return o},Pg:function(){return i},_r:function(){return p}});var r=t(165),a=t(861),c=t(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="6a8b72f51bae7833992788a940dbd14d",s=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n,t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/week?api_key=".concat(u));case 2:return n=e.sent,t=n.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"?api_key=").concat(u,"&language=en-US"));case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/credits?api_key=").concat(u,"$language=en-US"));case 2:return t=e.sent,a=t.data,e.abrupt("return",a.cast);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/reviews?api_key=").concat(u,"$language=en-US"));case 2:return t=e.sent,a=t.data,e.abrupt("return",a.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(u,"&query=").concat(n,"&language=en-US&page=1&include_adult=true"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=392.334780d4.chunk.js.map