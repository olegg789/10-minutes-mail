(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{214:function(e,t,n){"use strict";n.r(t);var a=n(13),c=n.n(a),o=n(23),l=n(14),r=n(0),i=n.n(r),s=n(6);t.default=function(e){var t=e.router,n=e.mailId,a=e.login,u=e.domain,m=(e.isDesktop,Object(r.useState)(null)),p=Object(l.a)(m,2),f=p[0],d=p[1],j=Object(r.useState)(null),w=Object(l.a)(j,2),b=w[0],h=w[1],E=Object(r.useState)(null),O=Object(l.a)(E,2),k=O[0],g=O[1],S=Object(r.useState)(null),v=Object(l.a)(S,2),x=v[0],y=v[1],B=Object(r.useState)([]),z=Object(l.a)(B,2),C=z[0],J=z[1];function D(){return(D=Object(o.a)(c.a.mark(function e(){var t,o;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.1secmail.com/api/v1/?action=readMessage&login=".concat(a,"&domain=").concat(u,"&id=").concat(n));case 2:return t=e.sent,e.next=5,t.json();case 5:o=e.sent,console.log(o),d(o.from),h(o.subject),g(o.textBody),y(o.date),J(o.attachments);case 12:case"end":return e.stop()}},e)}))).apply(this,arguments)}return Object(r.useEffect)(function(){!function(){D.apply(this,arguments)}()},[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(s.w,{separator:!1,left:i.a.createElement(s.x,{onClick:function(){return t.toBack()}})},"\u041f\u0438\u0441\u044c\u043c\u043e"),i.a.createElement(s.m,null,i.a.createElement(s.k,null,i.a.createElement(s.j,{top:"\u041e\u0442"},f),i.a.createElement(s.j,{top:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",style:{whiteSpace:"pre-line"}},b),i.a.createElement(s.j,{top:"\u0422\u0435\u043a\u0441\u0442 \u043f\u0438\u0441\u044c\u043c\u0430",style:{whiteSpace:"pre-line"}},k),i.a.createElement(s.j,{top:"\u0414\u0430\u0442\u0430"},x),0!==C.length&&C.map(function(e){return i.a.createElement(s.j,{top:"\u0412\u043b\u043e\u0436\u0435\u043d\u0438\u0435",bottom:"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0435\u0440\u0432\u043e\u0435 \u0432\u043b\u043e\u0436\u0435\u043d\u0438\u0435"},i.a.createElement(s.d,{size:"l",stretched:!0,href:"https://www.1secmail.com/api/v1/?action=download&login=".concat(a,"&domain=").concat(u,"&id=").concat(n,"&file=").concat(e.filename)},"\u0421\u043a\u0430\u0447\u0430\u0442\u044c"))}),i.a.createElement(s.h,null,i.a.createElement(s.d,{size:"l",stretched:!0,onClick:function(){return t.toBack()}},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c")))))}}}]);