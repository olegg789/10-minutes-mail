(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{214:function(e,t,a){"use strict";a.r(t);var n=a(13),c=a.n(n),o=a(22),l=a(14),r=a(0),i=a.n(r),s=a(6);t.default=function(e){var t=e.router,a=e.mailId,n=e.login,u=e.domain,p=(e.isDesktop,Object(r.useState)(null)),m=Object(l.a)(p,2),f=m[0],d=m[1],j=Object(r.useState)(null),w=Object(l.a)(j,2),b=w[0],h=w[1],E=Object(r.useState)(null),O=Object(l.a)(E,2),k=O[0],v=O[1],g=Object(r.useState)(null),S=Object(l.a)(g,2),x=S[0],y=S[1],B=Object(r.useState)([]),z=Object(l.a)(B,2),C=z[0],J=z[1];function D(){return(D=Object(o.a)(c.a.mark(function e(){var o,l;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://www.1secmail.com/api/v1/?action=readMessage&login=".concat(n,"&domain=").concat(u,"&id=").concat(a));case 3:return o=e.sent,e.next=6,o.json();case 6:l=e.sent,console.log(l),d(l.from),h(l.subject),v(l.textBody),y(l.date),J(l.attachments),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),t.toBack();case 18:case"end":return e.stop()}},e,null,[[0,15]])}))).apply(this,arguments)}return Object(r.useEffect)(function(){!function(){D.apply(this,arguments)}()},[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(s.w,{separator:!0,left:i.a.createElement(s.x,{onClick:function(){return t.toBack()}})},"\u041f\u0438\u0441\u044c\u043c\u043e"),i.a.createElement(s.m,null,i.a.createElement(s.k,null,i.a.createElement(s.j,{top:"\u041e\u0442"},f),i.a.createElement(s.j,{top:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",style:{whiteSpace:"pre-line"}},b),i.a.createElement(s.j,{top:"\u0422\u0435\u043a\u0441\u0442 \u043f\u0438\u0441\u044c\u043c\u0430",style:{whiteSpace:"pre-line"}},k),i.a.createElement(s.j,{top:"\u0414\u0430\u0442\u0430"},x),0!==C.length&&C.map(function(e){return i.a.createElement(s.j,{top:"\u0412\u043b\u043e\u0436\u0435\u043d\u0438\u0435",bottom:"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0435\u0440\u0432\u043e\u0435 \u0432\u043b\u043e\u0436\u0435\u043d\u0438\u0435"},i.a.createElement(s.d,{size:"l",stretched:!0,href:"https://www.1secmail.com/api/v1/?action=download&login=".concat(n,"&domain=").concat(u,"&id=").concat(a,"&file=").concat(e.filename)},"\u0421\u043a\u0430\u0447\u0430\u0442\u044c"))}),i.a.createElement(s.h,null,i.a.createElement(s.d,{size:"l",stretched:!0,onClick:function(){return t.toBack()}},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c")))))}}}]);
//# sourceMappingURL=6.5c4baef2.chunk.js.map