import{S as a,i as s,D as e,e as t,t as r,k as l,c,a as o,g as n,d as i,n as f,b as h,K as d,f as m,E as v,F as u,L as p,M as g,h as E,N as b,O as I,j as $,m as y,o as D,x,u as S,v as V,l as w,r as P,w as N,P as A,s as T,Q as k}from"../chunks/vendor-a6eeea3e.js";function j(a,s,e){const t=a.slice();return t[2]=s[e],t}function L(a,s,e){const t=a.slice();return t[5]=s[e],t}function C(a,s,e){const t=a.slice();return t[8]=s[e],t}function _(a){let s,e,l=a[8]+"";return{c(){s=t("div"),e=r(l),this.h()},l(a){s=c(a,"DIV",{class:!0});var t=o(s);e=n(t,l),t.forEach(i),this.h()},h(){h(s,"class","badge rounded-pill bg-light text-primary")},m(a,t){m(a,s,t),v(s,e)},p:u,d(a){a&&i(s)}}}function O(a){let s,e,u,g,E,b,I,$,y,D,x,S,V,w,P,N,A,T,k=a[5].displayText+"",j=function(a){const s="⭐";let e="";if(void 0===a)return e;const t=a/20;for(let r=0;r<t;r++)e+=s;return e}(a[5].percentage)+"",L=a[5].tags,O=[];for(let t=0;t<L.length;t+=1)O[t]=_(C(a,L,t));return{c(){s=t("div"),e=t("div"),u=t("div"),g=t("span"),E=r(k),b=l(),I=t("div"),$=t("span"),y=r(j),D=l(),x=t("div"),S=t("div"),V=t("div"),A=l();for(let a=0;a<O.length;a+=1)O[a].c();T=l(),this.h()},l(a){s=c(a,"DIV",{class:!0});var t=o(s);e=c(t,"DIV",{class:!0});var r=o(e);u=c(r,"DIV",{class:!0});var l=o(u);g=c(l,"SPAN",{});var h=o(g);E=n(h,k),h.forEach(i),l.forEach(i),b=f(r),I=c(r,"DIV",{class:!0});var d=o(I);$=c(d,"SPAN",{class:!0});var m=o($);y=n(m,j),m.forEach(i),d.forEach(i),D=f(r),x=c(r,"DIV",{class:!0});var v=o(x);S=c(v,"DIV",{class:!0});var p=o(S);V=c(p,"DIV",{class:!0,role:!0,style:!0,"aria-valuenow":!0,"aria-valuemin":!0,"aria-valuemax":!0}),o(V).forEach(i),p.forEach(i),v.forEach(i),r.forEach(i),A=f(t);for(let s=0;s<O.length;s+=1)O[s].l(t);T=f(t),t.forEach(i),this.h()},h(){h(u,"class","col-md-8 col-xs-6"),h($,"class","float-end"),h(I,"class","col-md-4 col-xs-6"),h(V,"class","progress-bar"),h(V,"role","progressbar"),d(V,"width",a[5].percentage+"%"),h(V,"aria-valuenow",w=Number(a[5].percentage)),h(V,"aria-valuemin",P=0),h(V,"aria-valuemax",N=100),h(S,"class","progress"),h(x,"class","col-12"),h(e,"class","row"),h(s,"class","mt-3")},m(a,t){m(a,s,t),v(s,e),v(e,u),v(u,g),v(g,E),v(e,b),v(e,I),v(I,$),v($,y),v(e,D),v(e,x),v(x,S),v(S,V),v(s,A);for(let e=0;e<O.length;e+=1)O[e].m(s,null);v(s,T)},p(a,e){if(2&e){let t;for(L=a[5].tags,t=0;t<L.length;t+=1){const r=C(a,L,t);O[t]?O[t].p(r,e):(O[t]=_(r),O[t].c(),O[t].m(s,T))}for(;t<O.length;t+=1)O[t].d(1);O.length=L.length}},d(a){a&&i(s),p(O,a)}}}function B(a){let s,e,d,p=a[2]+"";return{c(){s=t("p"),e=r(p),d=l(),this.h()},l(a){s=c(a,"P",{class:!0});var t=o(s);e=n(t,p),d=f(t),t.forEach(i),this.h()},h(){h(s,"class","lead")},m(a,t){m(a,s,t),v(s,e),v(s,d)},p:u,d(a){a&&i(s)}}}function M(a){let s,e,d,E,b,I,$,y,D,x,S,V,w,P,N,A,T,k,C,_,M,H,R,G,U,Q,F,J,W,Y,q,z,K,X,Z,aa,sa,ea,ta,ra,la=a[1],ca=[];for(let t=0;t<la.length;t+=1)ca[t]=O(L(a,la,t));let oa=a[0],na=[];for(let t=0;t<oa.length;t+=1)na[t]=B(j(a,oa,t));return{c(){s=t("section"),e=t("div"),d=t("div"),E=t("div"),b=t("div"),I=t("div"),$=t("div"),y=t("div"),D=t("div"),x=t("div"),S=t("img"),w=l(),P=t("div"),N=t("div"),A=t("p"),T=t("span"),k=r("Name:"),C=l(),_=t("span"),M=r("Simone"),H=l(),R=t("p"),G=t("span"),U=r("Profile:"),Q=l(),F=t("span"),J=r("full stack developer"),W=l(),Y=t("div"),q=t("p"),z=r("Skill"),K=l();for(let a=0;a<ca.length;a+=1)ca[a].c();X=l(),Z=t("div"),aa=t("div"),sa=t("div"),ea=t("h5"),ta=r("About me"),ra=l();for(let a=0;a<na.length;a+=1)na[a].c();this.h()},l(a){s=c(a,"SECTION",{id:!0,class:!0});var t=o(s);e=c(t,"DIV",{class:!0});var r=o(e);d=c(r,"DIV",{class:!0});var l=o(d);E=c(l,"DIV",{class:!0});var h=o(E);b=c(h,"DIV",{class:!0});var m=o(b);I=c(m,"DIV",{class:!0});var v=o(I);$=c(v,"DIV",{class:!0});var u=o($);y=c(u,"DIV",{class:!0});var p=o(y);D=c(p,"DIV",{class:!0});var g=o(D);x=c(g,"DIV",{class:!0});var V=o(x);S=c(V,"IMG",{src:!0,class:!0,alt:!0}),V.forEach(i),g.forEach(i),w=f(p),P=c(p,"DIV",{class:!0});var j=o(P);N=c(j,"DIV",{class:!0});var L=o(N);A=c(L,"P",{});var O=o(A);T=c(O,"SPAN",{class:!0});var B=o(T);k=n(B,"Name:"),B.forEach(i),C=f(O),_=c(O,"SPAN",{});var la=o(_);M=n(la,"Simone"),la.forEach(i),O.forEach(i),H=f(L),R=c(L,"P",{});var oa=o(R);G=c(oa,"SPAN",{class:!0});var ia=o(G);U=n(ia,"Profile:"),ia.forEach(i),Q=f(oa),F=c(oa,"SPAN",{});var fa=o(F);J=n(fa,"full stack developer"),fa.forEach(i),oa.forEach(i),L.forEach(i),j.forEach(i),p.forEach(i),W=f(u),Y=c(u,"DIV",{class:!0});var ha=o(Y);q=c(ha,"P",{class:!0});var da=o(q);z=n(da,"Skill"),da.forEach(i),K=f(ha);for(let s=0;s<ca.length;s+=1)ca[s].l(ha);ha.forEach(i),u.forEach(i),X=f(v),Z=c(v,"DIV",{class:!0});var ma=o(Z);aa=c(ma,"DIV",{class:!0});var va=o(aa);sa=c(va,"DIV",{class:!0});var ua=o(sa);ea=c(ua,"H5",{class:!0});var pa=o(ea);ta=n(pa,"About me"),pa.forEach(i),ua.forEach(i),ra=f(va);for(let s=0;s<na.length;s+=1)na[s].l(va);va.forEach(i),ma.forEach(i),v.forEach(i),m.forEach(i),h.forEach(i),l.forEach(i),r.forEach(i),t.forEach(i),this.h()},h(){g(S.src,V="https://avatars.githubusercontent.com/u/17797267")||h(S,"src","https://avatars.githubusercontent.com/u/17797267"),h(S,"class","img-fluid rounded b-shadow-a rounded-circle svelte-v1v7tx"),h(S,"alt",""),h(x,"class","about-img"),h(D,"class","col-sm-6 col-md-5"),h(T,"class","fw-bold"),h(G,"class","fw-bold"),h(N,"class","about-info"),h(P,"class","col-sm-6 col-md-7 alighn-middle"),h(y,"class","row"),h(q,"class","fw-bold"),h(Y,"class","skill-mf"),h($,"class","col-md-6"),h(ea,"class","title-left"),h(sa,"class","title-box-2"),h(aa,"class","about-me pt-4 pt-md-0"),h(Z,"class","col-md-6"),h(I,"class","row"),h(b,"class","box-shadow-full"),h(E,"class","col-sm-12"),h(d,"class","row"),h(e,"class","container"),h(s,"id","about"),h(s,"class","about-mf sect-pt4 route")},m(a,t){m(a,s,t),v(s,e),v(e,d),v(d,E),v(E,b),v(b,I),v(I,$),v($,y),v(y,D),v(D,x),v(x,S),v(y,w),v(y,P),v(P,N),v(N,A),v(A,T),v(T,k),v(A,C),v(A,_),v(_,M),v(N,H),v(N,R),v(R,G),v(G,U),v(R,Q),v(R,F),v(F,J),v($,W),v($,Y),v(Y,q),v(q,z),v(Y,K);for(let s=0;s<ca.length;s+=1)ca[s].m(Y,null);v(I,X),v(I,Z),v(Z,aa),v(aa,sa),v(sa,ea),v(ea,ta),v(aa,ra);for(let s=0;s<na.length;s+=1)na[s].m(aa,null)},p(a,[s]){if(2&s){let e;for(la=a[1],e=0;e<la.length;e+=1){const t=L(a,la,e);ca[e]?ca[e].p(t,s):(ca[e]=O(t),ca[e].c(),ca[e].m(Y,null))}for(;e<ca.length;e+=1)ca[e].d(1);ca.length=la.length}if(1&s){let e;for(oa=a[0],e=0;e<oa.length;e+=1){const t=j(a,oa,e);na[e]?na[e].p(t,s):(na[e]=B(t),na[e].c(),na[e].m(aa,null))}for(;e<na.length;e+=1)na[e].d(1);na.length=oa.length}},i:u,o:u,d(a){a&&i(s),p(ca,a),p(na,a)}}}function H(a){return[["I am a cloud-oriented developer.","I develop daily with different technologies, in particular, I am oriented to the Microsoft world (Azure, C# dotnet core) and to the javascript/typescript world to be used as a frontend framework (Angular, React, and Svelte) and as a backend (via runtime Node).","In my free time, I keep busy with various hobbies, in particular, concerning the world of cybersecurity (reverse engineering, web security).","I participate in conferences concerning the world of information technology and programming/cybersecurity challenges (CTF, Reply Challenges)."],[{displayText:"Web",percentage:100,tags:["HTML/CSS","JavaScript","TypeScript","Svelte","React","Angular","ASP.NET Core"]},{displayText:"Backend",percentage:100,tags:["DotnetCore","NodeJS","Express"]},{displayText:"Server",percentage:60,tags:["MSSQL","MYSQL","POSTGRESQL","REDIS"]},{displayText:"System Administrator",percentage:80,tags:["Linux (I use arch btw)","Windows"]},{displayText:"Other",percentage:80,tags:["Git","Github/Gitlab","Nmap","Postman","Docker","Raspberry Pi","Exception Reading","Copy&Paste"]}]]}class R extends a{constructor(a){super(),s(this,a,H,M,e,{})}}function G(a,s,e){const t=a.slice();return t[2]=s[e],t}function U(a){let s,e,d,u,p,g=a[2].displayText+"";return{c(){s=t("span"),e=t("a"),d=r(g),p=l(),this.h()},l(a){s=c(a,"SPAN",{});var t=o(s);e=c(t,"A",{href:!0,target:!0});var r=o(e);d=n(r,g),r.forEach(i),p=f(t),t.forEach(i),this.h()},h(){h(e,"href",u=a[2].url),h(e,"target","_blank")},m(a,t){m(a,s,t),v(s,e),v(e,d),v(s,p)},p(a,s){1&s&&g!==(g=a[2].displayText+"")&&E(d,g),1&s&&u!==(u=a[2].url)&&h(e,"href",u)},d(a){a&&i(s)}}}function Q(a){let s,e,d,g,$,y,D,x,S,V,w,P,N,A,T,k,j,L,C=a[0].title+"",_=a[0].description+"",O=a[0].links,B=[];for(let t=0;t<O.length;t+=1)B[t]=U(G(a,O,t));return{c(){s=t("div"),e=t("div"),d=t("div"),g=t("span"),$=t("i"),D=l(),x=t("div"),S=t("h2"),V=r(C),w=l(),P=t("p"),N=r(_),A=l(),T=t("div"),k=t("div");for(let a=0;a<B.length;a+=1)B[a].c();this.h()},l(a){s=c(a,"DIV",{class:!0});var t=o(s);e=c(t,"DIV",{class:!0});var r=o(e);d=c(r,"DIV",{class:!0});var l=o(d);g=c(l,"SPAN",{class:!0});var h=o(g);$=c(h,"I",{class:!0}),o($).forEach(i),h.forEach(i),l.forEach(i),D=f(r),x=c(r,"DIV",{class:!0});var m=o(x);S=c(m,"H2",{class:!0});var v=o(S);V=n(v,C),v.forEach(i),w=f(m),P=c(m,"P",{class:!0});var u=o(P);N=n(u,_),u.forEach(i),A=f(m),T=c(m,"DIV",{class:!0});var p=o(T);k=c(p,"DIV",{class:!0});var E=o(k);for(let s=0;s<B.length;s+=1)B[s].l(E);E.forEach(i),p.forEach(i),m.forEach(i),r.forEach(i),t.forEach(i),this.h()},h(){h($,"class",y="fas "+a[0].iconcode+" svelte-1ambl6o"),h(g,"class","ico-circle"),h(d,"class","service-ico"),h(S,"class","s-title"),h(P,"class","s-description text-center"),h(k,"class","col-12 text-center"),h(T,"class","row"),h(x,"class","service-content"),h(e,"class","service-box"),h(s,"class","col-md-4")},m(t,r){m(t,s,r),v(s,e),v(e,d),v(d,g),v(g,$),v(e,D),v(e,x),v(x,S),v(S,V),v(x,w),v(x,P),v(P,N),v(x,A),v(x,T),v(T,k);for(let a=0;a<B.length;a+=1)B[a].m(k,null);j||(L=[b(e,"mouseenter",a[1]),b(e,"mouseleave",a[1])],j=!0)},p(a,[s]){if(1&s&&y!==(y="fas "+a[0].iconcode+" svelte-1ambl6o")&&h($,"class",y),1&s&&C!==(C=a[0].title+"")&&E(V,C),1&s&&_!==(_=a[0].description+"")&&E(N,_),1&s){let e;for(O=a[0].links,e=0;e<O.length;e+=1){const t=G(a,O,e);B[e]?B[e].p(t,s):(B[e]=U(t),B[e].c(),B[e].m(k,null))}for(;e<B.length;e+=1)B[e].d(1);B.length=O.length}},i:u,o:u,d(a){a&&i(s),p(B,a),j=!1,I(L)}}}function F(a,s,e){let{item:t}=s;return a.$$set=a=>{"item"in a&&e(0,t=a.item)},[t,function(a){var s=a.target.getElementsByClassName("fas");if(s.length>0){const a=s[0];a.classList.toggle(t.iconcode),a.classList.toggle("fa-star"),a.classList.toggle("text-light")}}]}class J extends a{constructor(a){super(),s(this,a,F,Q,e,{item:0})}}function W(a,s,e){const t=a.slice();return t[1]=s[e],t}function Y(a){let s,e;return s=new J({props:{item:a[1]}}),{c(){$(s.$$.fragment)},l(a){y(s.$$.fragment,a)},m(a,t){D(s,a,t),e=!0},p(a,e){const t={};1&e&&(t.item=a[1]),s.$set(t)},i(a){e||(x(s.$$.fragment,a),e=!0)},o(a){S(s.$$.fragment,a),e=!1},d(a){V(s,a)}}}function q(a){let s,e,t=a[0],r=[];for(let c=0;c<t.length;c+=1)r[c]=Y(W(a,t,c));const l=a=>S(r[a],1,1,(()=>{r[a]=null}));return{c(){for(let a=0;a<r.length;a+=1)r[a].c();s=w()},l(a){for(let s=0;s<r.length;s+=1)r[s].l(a);s=w()},m(a,t){for(let s=0;s<r.length;s+=1)r[s].m(a,t);m(a,s,t),e=!0},p(a,[e]){if(1&e){let c;for(t=a[0],c=0;c<t.length;c+=1){const l=W(a,t,c);r[c]?(r[c].p(l,e),x(r[c],1)):(r[c]=Y(l),r[c].c(),x(r[c],1),r[c].m(s.parentNode,s))}for(P(),c=t.length;c<r.length;c+=1)l(c);N()}},i(a){if(!e){for(let a=0;a<t.length;a+=1)x(r[a]);e=!0}},o(a){r=r.filter(Boolean);for(let s=0;s<r.length;s+=1)S(r[s]);e=!1},d(a){p(r,a),a&&i(s)}}}function z(a,s,e){let{list:t}=s;return a.$$set=a=>{"list"in a&&e(0,t=a.list)},[t]}class K extends a{constructor(a){super(),s(this,a,z,q,e,{list:0})}}function X(a){let s,e,d,p,g,E,b,I,w,P,N,A,T,k,j,L;return j=new K({props:{list:a[0]}}),{c(){s=t("section"),e=t("div"),d=t("div"),p=t("div"),g=t("div"),E=t("h3"),b=r("Projects"),I=l(),w=t("p"),P=r("On my freetime, I try to create projects"),N=l(),A=t("div"),T=l(),k=t("div"),$(j.$$.fragment),this.h()},l(a){s=c(a,"SECTION",{id:!0,class:!0});var t=o(s);e=c(t,"DIV",{class:!0});var r=o(e);d=c(r,"DIV",{class:!0});var l=o(d);p=c(l,"DIV",{class:!0});var h=o(p);g=c(h,"DIV",{class:!0});var m=o(g);E=c(m,"H3",{class:!0});var v=o(E);b=n(v,"Projects"),v.forEach(i),I=f(m),w=c(m,"P",{class:!0});var u=o(w);P=n(u,"On my freetime, I try to create projects"),u.forEach(i),N=f(m),A=c(m,"DIV",{class:!0}),o(A).forEach(i),m.forEach(i),h.forEach(i),l.forEach(i),T=f(r),k=c(r,"DIV",{class:!0});var $=o(k);y(j.$$.fragment,$),$.forEach(i),r.forEach(i),t.forEach(i),this.h()},h(){h(E,"class","title-a"),h(w,"class","subtitle-a"),h(A,"class","line-mf"),h(g,"class","title-box text-center"),h(p,"class","col-sm-12"),h(d,"class","row"),h(k,"class","row"),h(e,"class","container"),h(s,"id","projects"),h(s,"class","services-mf route")},m(a,t){m(a,s,t),v(s,e),v(e,d),v(d,p),v(p,g),v(g,E),v(E,b),v(g,I),v(g,w),v(w,P),v(g,N),v(g,A),v(e,T),v(e,k),D(j,k,null),L=!0},p:u,i(a){L||(x(j.$$.fragment,a),L=!0)},o(a){S(j.$$.fragment,a),L=!1},d(a){a&&i(s),V(j)}}}function Z(a){return[[{title:"Certification",description:"",links:[{displayText:"Microsoft 70-483",url:"https://docs.microsoft.com/en-us/learn/certifications/exams/70-483"},{displayText:"Microsoft MB-200",url:"https://docs.microsoft.com/en-us/learn/certifications/exams/mb-200"}],iconcode:"fa-certificate"},{title:"TODO SPA Projects",description:"Those projects aim to create the same todo application with different web frameworks",links:[{displayText:"Angular",url:"https://github.com/simone98dm/angular-todoapp"},{displayText:"React",url:"https://github.com/simone98dm/react-todoapp"},{displayText:"Svelte",url:"https://github.com/simone98dm/svelte-todoapp"}],iconcode:"fa-list-ul"},{title:"TSAC2019",description:"Complex queue based api and frontend",links:[{displayText:"repo",url:"https://github.com/simone98dm/ITS-TSAC2019-Esame"}],iconcode:"fa-cloud"}]]}class aa extends a{constructor(a){super(),s(this,a,Z,X,e,{})}}function sa(a){let s,e,d,p,g,E,b,I,$,y,D,x,S,V,w,P,N,A,T,k;return{c(){s=t("div"),e=t("div"),d=l(),p=t("div"),g=t("div"),E=t("div"),b=t("h1"),I=r("I am Simone"),$=l(),y=t("p"),D=t("span"),x=r("I am a frontend & backend developer"),S=l(),V=t("p"),w=t("span"),P=r("tech enthusiast"),N=l(),A=t("p"),T=t("span"),k=r("🍕 lover"),this.h()},l(a){s=c(a,"DIV",{id:!0,class:!0});var t=o(s);e=c(t,"DIV",{class:!0}),o(e).forEach(i),d=f(t),p=c(t,"DIV",{class:!0});var r=o(p);g=c(r,"DIV",{class:!0});var l=o(g);E=c(l,"DIV",{class:!0});var h=o(E);b=c(h,"H1",{class:!0});var m=o(b);I=n(m,"I am Simone"),m.forEach(i),$=f(h),y=c(h,"P",{class:!0});var v=o(y);D=c(v,"SPAN",{});var u=o(D);x=n(u,"I am a frontend & backend developer"),u.forEach(i),v.forEach(i),S=f(h),V=c(h,"P",{class:!0});var j=o(V);w=c(j,"SPAN",{});var L=o(w);P=n(L,"tech enthusiast"),L.forEach(i),j.forEach(i),N=f(h),A=c(h,"P",{class:!0});var C=o(A);T=c(C,"SPAN",{});var _=o(T);k=n(_,"🍕 lover"),_.forEach(i),C.forEach(i),h.forEach(i),l.forEach(i),r.forEach(i),t.forEach(i),this.h()},h(){h(e,"class","overlay-itro"),h(b,"class","intro-title mb-4"),h(y,"class","intro-subtitle animate__animated animate__backInUp"),h(V,"class","intro-subtitle animate__animated animate__backInUp animate__delay-1s"),h(A,"class","intro-subtitle animate__animated animate__backInUp animate__delay-2s"),h(E,"class","container"),h(g,"class","table-cell"),h(p,"class","intro-content display-table"),h(s,"id","home"),h(s,"class","intro route bg-image svelte-1ecpyik")},m(a,t){m(a,s,t),v(s,e),v(s,d),v(s,p),v(p,g),v(g,E),v(E,b),v(b,I),v(E,$),v(E,y),v(y,D),v(D,x),v(E,S),v(E,V),v(V,w),v(w,P),v(E,N),v(E,A),v(A,T),v(T,k)},p:u,i:u,o:u,d(a){a&&i(s)}}}class ea extends a{constructor(a){super(),s(this,a,null,sa,e,{})}}function ta(a){let s,e,t,r,c,o;return s=new ea({}),t=new R({}),c=new aa({}),{c(){$(s.$$.fragment),e=l(),$(t.$$.fragment),r=l(),$(c.$$.fragment)},l(a){y(s.$$.fragment,a),e=f(a),y(t.$$.fragment,a),r=f(a),y(c.$$.fragment,a)},m(a,l){D(s,a,l),m(a,e,l),D(t,a,l),m(a,r,l),D(c,a,l),o=!0},p:u,i(a){o||(x(s.$$.fragment,a),x(t.$$.fragment,a),x(c.$$.fragment,a),o=!0)},o(a){S(s.$$.fragment,a),S(t.$$.fragment,a),S(c.$$.fragment,a),o=!1},d(a){V(s,a),a&&i(e),V(t,a),a&&i(r),V(c,a)}}}class ra extends a{constructor(a){super(),s(this,a,null,ta,e,{})}}const{window:la}=A;function ca(a){let s,e,d,p,g,E,$,y,D,x,S,V,w,P,N,A,T,k,j,L,C,_,O,B,M,H,R;return{c(){s=t("nav"),e=t("div"),d=t("a"),p=r("simone98dm"),g=l(),E=t("button"),$=t("span"),y=l(),D=t("span"),x=l(),S=t("span"),V=l(),w=t("div"),P=t("ul"),N=t("li"),A=t("a"),T=r("Home"),k=l(),j=t("li"),L=t("a"),C=r("About"),_=l(),O=t("li"),B=t("a"),M=r("projects"),this.h()},l(a){s=c(a,"NAV",{class:!0,id:!0});var t=o(s);e=c(t,"DIV",{class:!0});var r=o(e);d=c(r,"A",{class:!0,href:!0});var l=o(d);p=n(l,"simone98dm"),l.forEach(i),g=f(r),E=c(r,"BUTTON",{class:!0,type:!0,"data-toggle":!0,"data-target":!0,"aria-controls":!0,"aria-expanded":!0,"aria-label":!0});var h=o(E);$=c(h,"SPAN",{}),o($).forEach(i),y=f(h),D=c(h,"SPAN",{}),o(D).forEach(i),x=f(h),S=c(h,"SPAN",{}),o(S).forEach(i),h.forEach(i),V=f(r),w=c(r,"DIV",{class:!0,id:!0});var m=o(w);P=c(m,"UL",{class:!0});var v=o(P);N=c(v,"LI",{class:!0});var u=o(N);A=c(u,"A",{class:!0,href:!0});var b=o(A);T=n(b,"Home"),b.forEach(i),u.forEach(i),k=f(v),j=c(v,"LI",{class:!0});var I=o(j);L=c(I,"A",{class:!0,href:!0});var H=o(L);C=n(H,"About"),H.forEach(i),I.forEach(i),_=f(v),O=c(v,"LI",{class:!0});var R=o(O);B=c(R,"A",{class:!0,href:!0});var G=o(B);M=n(G,"projects"),G.forEach(i),R.forEach(i),v.forEach(i),m.forEach(i),r.forEach(i),t.forEach(i),this.h()},h(){h(d,"class","navbar-brand js-scroll"),h(d,"href","#home"),h(E,"class","navbar-toggler collapsed"),h(E,"type","button"),h(E,"data-toggle","collapse"),h(E,"data-target","#navbarDefault"),h(E,"aria-controls","navbarDefault"),h(E,"aria-expanded","false"),h(E,"aria-label","Toggle navigation"),h(A,"class","nav-link js-scroll active"),h(A,"href","#home"),h(N,"class","nav-item"),h(L,"class","nav-link js-scroll"),h(L,"href","#about"),h(j,"class","nav-item"),h(B,"class","nav-link js-scroll"),h(B,"href","#projects"),h(O,"class","nav-item"),h(P,"class","navbar-nav"),h(w,"class","navbar-collapse collapse justify-content-end"),h(w,"id","navbarDefault"),h(e,"class","container"),h(s,"class","navbar navbar-b navbar-trans navbar-expand-md fixed-top"),h(s,"id","mainNav")},m(a,t){m(a,s,t),v(s,e),v(e,d),v(d,p),v(e,g),v(e,E),v(E,$),v(E,y),v(E,D),v(E,x),v(E,S),v(e,V),v(e,w),v(w,P),v(P,N),v(N,A),v(A,T),v(P,k),v(P,j),v(j,L),v(L,C),v(P,_),v(P,O),v(O,B),v(B,M),H||(R=[b(la,"scroll",na),b(E,"click",oa)],H=!0)},p:u,i:u,o:u,d(a){a&&i(s),H=!1,I(R)}}}function oa(){document.getElementsByClassName("navbar-toggler")[0].classList.toggle("navbar-reduce")}function na(){const a=void 0!==window.pageXOffset,s="CSS1Compat"===(document.compatMode||"");(a?window.pageYOffset:s?document.documentElement.scrollTop:document.body.scrollTop)>50?(document.getElementById("mainNav").classList.remove("navbar-trans"),document.getElementById("mainNav").classList.add("navbar-reduce")):(document.getElementById("mainNav").classList.remove("navbar-reduce"),document.getElementById("mainNav").classList.add("navbar-trans"))}class ia extends a{constructor(a){super(),s(this,a,null,ca,e,{})}}function fa(a){let s,e,t,r,c;return e=new ia({}),r=new ra({}),{c(){s=l(),$(e.$$.fragment),t=l(),$(r.$$.fragment),this.h()},l(a){k('[data-svelte="svelte-1anpopb"]',document.head).forEach(i),s=f(a),y(e.$$.fragment,a),t=f(a),y(r.$$.fragment,a),this.h()},h(){document.title="Home"},m(a,l){m(a,s,l),D(e,a,l),m(a,t,l),D(r,a,l),c=!0},p:u,i(a){c||(x(e.$$.fragment,a),x(r.$$.fragment,a),c=!0)},o(a){S(e.$$.fragment,a),S(r.$$.fragment,a),c=!1},d(a){a&&i(s),V(e,a),a&&i(t),V(r,a)}}}class ha extends a{constructor(a){super(),s(this,a,null,fa,T,{})}}export{ha as default};