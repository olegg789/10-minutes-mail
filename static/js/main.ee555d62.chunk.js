(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{151:function(e,t,a){e.exports=a(206)},205:function(e,t,a){},206:function(e,t,a){"use strict";a.r(t);a(152),a(177);var n=a(0),r=a.n(n),c=a(34),i=a.n(c),l=a(40),o=a.n(l),u=[{id:"home",hash:"mail",panels:[{id:"base"},{id:"readMail",hash:""}]},{id:"profile",hash:"profile",panels:[{id:"base",hash:"/base"}]}],s=a(13),m=a.n(s),p=a(23),d=a(14),f=a(6),b=a(12),h=a.n(b);var E=Object(f.J)(function(e){var t=e.id,a=(e.platform,e.router),c=e.mailId,i=e.login,l=e.domain,o=(e.isDesktop,Object(n.useState)(null)),u=Object(d.a)(o,2),s=u[0],b=u[1],h=Object(n.useState)(null),E=Object(d.a)(h,2),j=E[0],v=E[1],O=Object(n.useState)(null),w=Object(d.a)(O,2),g=w[0],k=w[1],y=Object(n.useState)(null),x=Object(d.a)(y,2),S=x[0],M=x[1];function B(){return(B=Object(p.a)(m.a.mark(function e(){var t,a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.1secmail.com/api/v1/?action=readMessage&login=".concat(i,"&domain=").concat(l,"&id=").concat(c));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a),b(a.from),v(a.subject),k(a.textBody),M(a.date);case 11:case"end":return e.stop()}},e)}))).apply(this,arguments)}return Object(n.useEffect)(function(){!function(){B.apply(this,arguments)}()},[]),r.a.createElement(f.r,{id:t,header:"\u041f\u0438\u0441\u044c\u043c\u043e",onClose:function(){return a.toBack()},settlingHeight:100},r.a.createElement(f.k,null,r.a.createElement(f.j,{top:"\u041e\u0442"},s),r.a.createElement(f.j,{top:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"},j),r.a.createElement(f.j,{top:"\u0422\u0435\u043a\u0441\u0442 \u043f\u0438\u0441\u044c\u043c\u0430"},g),r.a.createElement(f.j,{top:"\u0414\u0430\u0442\u0430"},S),r.a.createElement(f.h,null,r.a.createElement(f.d,{size:"l",stretched:!0,onClick:function(){return a.toBack()}},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"))))}),j=a(209),v=a(208);var O=Object(f.J)(function(e){var t=e.id,a=e.platform,n=e.router;return r.a.createElement(f.s,{id:t,header:r.a.createElement(f.t,{left:a!==f.o&&r.a.createElement(f.y,{onClick:function(){return n.toBack()}},r.a.createElement(j.a,null)),right:a===f.o&&r.a.createElement(f.y,{onClick:function(){return n.toBack()}},r.a.createElement(v.a,null))},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0435"),onClose:function(){return n.toBack()},settlingHeight:100},r.a.createElement(f.f,{description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",before:r.a.createElement(f.c,{size:40,src:"https://vk.com/images/community_100.png?ava=1"})},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),r.a.createElement(f.q,null,r.a.createElement(f.f,null,r.a.createElement(f.p,{header:"\u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432"},"8800")),r.a.createElement(f.f,null,r.a.createElement(f.p,{header:"\u0417\u0430\u043f\u0438\u0441\u0435\u0439"},"555")),r.a.createElement(f.f,null,r.a.createElement(f.p,{header:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"},"3535"))))}),w=Object(n.lazy)(function(){return a.e(5).then(a.bind(null,215))}),g=Object(n.lazy)(function(){return a.e(6).then(a.bind(null,214))}),k=Object(f.I)(function(e){var t=e.viewWidth,a=e.router,c=Object(n.useState)("light"),i=Object(d.a)(c,2),l=i[0],o=i[1],u=Object(n.useState)(null),s=Object(d.a)(u,2),b=s[0],j=s[1],v=Object(n.useState)(null),k=Object(d.a)(v,2),y=k[0],x=k[1],S=Object(n.useState)(null),M=Object(d.a)(S,2),B=M[0],C=M[1],I=Object(n.useState)("\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."),P=Object(d.a)(I,2),W=P[0],A=P[1],V=Object(n.useState)([]),z=Object(d.a)(V,2),J=z[0],K=z[1],_=Object(n.useState)(!0),D=Object(d.a)(_,2),H=D[0],G=D[1],R=t>=3,U=R?f.F:Object(f.H)(),q=!0!==R;function F(){return N.apply(this,arguments)}function N(){return(N=Object(p.a)(m.a.mark(function e(){var t,a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,A(a[0]),K([]),G(!1);case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}function T(){return L.apply(this,arguments)}function L(){return(L=Object(p.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.toPopout(r.a.createElement(f.B,null)),e.next=3,new Promise(function(e){return setTimeout(e,2e3)});case 3:a.toPopout();case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function Q(){return(Q=Object(p.a)(m.a.mark(function e(){var t,a,n,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return T(),t=W.split("@")[0],a=W.split("@")[1],e.next=5,fetch("https://www.1secmail.com/api/v1/?action=getMessages&login=".concat(t,"&domain=").concat(a));case 5:return n=e.sent,e.next=8,n.json();case 8:r=e.sent,K(r);case 10:case"end":return e.stop()}},e)}))).apply(this,arguments)}function X(){return(X=Object(p.a)(m.a.mark(function e(t){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("vkcom"!==t){e.next=4;break}o("vkcom_light"),e.next=9;break;case 4:return h.a.subscribe(function(e){if("VKWebAppUpdateConfig"===e.detail.type){var t=e.detail.data.scheme;o(t)}}),e.next=7,h.a.send("VKWebAppGetConfig");case 7:a=e.sent,o(a.scheme);case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}function Y(){return(Y=Object(p.a)(m.a.mark(function e(t,n,r){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:j(t),x(n),C(r),a.toPanel("readMail");case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}Object(n.useEffect)(function(){!function(e){X.apply(this,arguments)}(),F()},[]);var Z=r.a.createElement(f.u,{activeModal:a.modal},r.a.createElement(E,{id:"readMail",mailId:b,login:y,domain:B,platform:U,router:a,isDesktop:R}),r.a.createElement(O,{id:"botInfo",platform:U,router:a}));return r.a.createElement(f.g,{platform:U,isWebView:!0,scheme:l},r.a.createElement(f.b,null,r.a.createElement(f.E,{header:q&&r.a.createElement(f.w,{separator:!1}),style:{justifyContent:"center"}},r.a.createElement(f.D,{animate:!R,spaced:R,width:R?"560px":"100%",maxWidth:R?"560px":"100%"},r.a.createElement(f.i,{activeStory:a.activeView},r.a.createElement(f.G,{id:"home",activePanel:"route_modal"===a.activePanel?"base":a.activePanel,popout:a.popout,modal:Z},r.a.createElement(f.v,{id:"base"},r.a.createElement(n.Suspense,{fallback:r.a.createElement(f.B,null)},r.a.createElement(w,{router:a,readMail:function(e,t,a){return function(e,t,a){return Y.apply(this,arguments)}(e,t,a)},mail:W,mails:J,disabled:H,getMails:function(){return function(){return Q.apply(this,arguments)}()},getMailAdress:function(){return F()}}))),r.a.createElement(f.v,{id:"readMail"},r.a.createElement(n.Suspense,{fallback:r.a.createElement(f.B,null)},r.a.createElement(g,{router:a,mailId:b,login:y,domain:B})))))))))},{viewWidth:!0}),y=Object(l.withRouter)(k);a(204),a(205);h.a.subscribe(function(e){switch(e.detail.type){case"VKWebAppUpdateConfig":var t=document.createAttribute("scheme");t.value=e.detail.data.scheme?e.detail.data.scheme:"client_light",document.body.attributes.setNamedItem(t)}}),h.a.send("VKWebAppInit",{}),i.a.render(r.a.createElement(o.a,{structure:u},r.a.createElement(f.a,null,r.a.createElement(y,null))),document.getElementById("root")),Promise.all([a.e(3),a.e(4)]).then(a.bind(null,213)).then(function(e){e.default})}},[[151,1,2]]]);