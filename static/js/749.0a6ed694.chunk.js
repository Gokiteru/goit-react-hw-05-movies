"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[749],{749:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=n(165),a=n(861),s=n(439),i=n(791),c=n(689),u=n(87),o=n(256),l="movieDetails_wrapper__nFuAQ",d="movieDetails_backButton__U9h5S",p="movieDetails_movieCard__2YA50",v="movieDetails_title__dG4w6",f="movieDetails_imageWrapper__pmOpQ",m="movieDetails_movieInfo__vYtzU",h="movieDetails_li__+XRUC",_="movieDetails_extraInfo__Vod69",x="movieDetails_extraInfoTitle__3JqIH",j="movieDetails_extraListItem__ou0CX",g="movieDetails_link__qL+jw",Z=n(184),w=function(){var e=(0,c.UO)().movieID,t=(0,i.useState)(null),n=(0,s.Z)(t,2),w=n[0],k=n[1],b=(0,i.useState)(!1),N=(0,s.Z)(b,2),D=N[0],y=N[1],U=(0,c.TH)(),S=(0,c.s0)();(0,i.useEffect)((function(){var t=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return y(!0),t.prev=1,t.next=4,(0,o.Pg)(e);case 4:n=t.sent,k(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:return t.prev=11,y(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]);if(w){var C,I=w.genres,L=w.title,G=w.release_date,R=w.overview,q=w.vote_average,A=w.poster_path,F=A?"https://image.tmdb.org/t/p/w500/"+A:"",H=Math.round(100*Number(q)/10),J=I.map((function(e){return e.name})).join(" "),O=G.slice(0,4);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)("section",{className:l,children:[(null===(C=U.state)||void 0===C?void 0:C.from)&&(0,Z.jsx)("button",{className:d,onClick:function(){S(U.state.from)},children:(0,Z.jsx)("span",{children:"Go back"})}),D?(0,Z.jsx)("div",{children:"Loading..."}):(0,Z.jsxs)("div",{className:p,children:[(0,Z.jsx)("div",{className:f,children:(0,Z.jsx)("img",{src:"".concat(F),alt:L})}),(0,Z.jsxs)("div",{className:m,children:[(0,Z.jsxs)("h2",{className:v,children:[L," ",O&&"(".concat(O,")")]}),(0,Z.jsxs)("ul",{children:[(0,Z.jsx)("li",{className:h,children:H>0&&(0,Z.jsxs)("p",{children:["User score: ",H,"%"]})}),(0,Z.jsxs)("li",{className:h,children:[(0,Z.jsx)("b",{children:"Genres"}),(0,Z.jsx)("p",{children:R})]}),(0,Z.jsxs)("li",{className:h,children:[(0,Z.jsx)("b",{children:"Genres"}),(0,Z.jsx)("p",{children:J||" - "})]})]})]})]})]}),(0,Z.jsxs)("div",{className:_,children:[(0,Z.jsx)("h3",{className:x,children:"Additional information"}),(0,Z.jsx)("div",{children:(0,Z.jsxs)("ul",{children:[(0,Z.jsx)("li",{className:j,children:(0,Z.jsx)(u.rU,{to:"cast",state:U.state,className:g,children:"Cast"})}),(0,Z.jsx)("li",{className:j,children:(0,Z.jsx)(u.rU,{to:"reviews",state:U.state,className:g,children:"Reviews"})})]})})]}),(0,Z.jsx)(i.Suspense,{children:(0,Z.jsx)(c.j3,{})})]})}return(0,Z.jsx)("p",{children:"Loading..."})}},256:function(e,t,n){n.d(t,{Df:function(){return c},IR:function(){return d},Jh:function(){return o},Pg:function(){return u},_r:function(){return l}});var r=n(165),a=n(861),s=n(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="6a8b72f51bae7833992788a940dbd14d",c=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("trending/movie/week?api_key=".concat(i));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"$language=en-US"));case 2:return n=e.sent,a=n.data,e.abrupt("return",a.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"$language=en-US"));case 2:return n=e.sent,a=n.data,e.abrupt("return",a.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("search/movie?api_key=".concat(i,"&query=").concat(t,"&language=en-US&page=1&include_adult=true"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=749.0a6ed694.chunk.js.map