import{S as Y,i as K,D as Z,e as u,t as H,k as N,c as f,a as v,g as M,n as A,d as o,b as i,f as q,E as l,F as U,K as Ie,L as oe,h as ce,M as ie,N as ue,j as ee,m as te,o as ae,x as Q,u as F,v as se,l as fe,r as Se,w as ke,O as xe,s as De,P as we}from"../chunks/vendor-b6384ef0.js";function ve(p,e,a){const s=p.slice();return s[2]=e[a],s}function he(p,e,a){const s=p.slice();return s[5]=e[a],s}function me(p,e,a){const s=p.slice();return s[8]=e[a],s}function pe(p){let e,a=p[8]+"",s,r;return{c(){e=u("p"),s=H(a),r=N(),this.h()},l(c){e=f(c,"P",{class:!0});var t=v(e);s=M(t,a),r=A(t),t.forEach(o),this.h()},h(){i(e,"class","lead")},m(c,t){q(c,e,t),l(e,s),l(e,r)},p:U,d(c){c&&o(e)}}}function _e(p){let e,a=p[5]+"",s;return{c(){e=u("div"),s=H(a),this.h()},l(r){e=f(r,"DIV",{class:!0});var c=v(e);s=M(c,a),c.forEach(o),this.h()},h(){i(e,"class","badge rounded-pill bg-light text-primary")},m(r,c){q(r,e,c),l(e,s)},p:U,d(r){r&&o(e)}}}function ge(p){let e,a,s,r,c=p[2].displayText+"",t,n,d,I,x=Ve(p[2].percentage)+"",P,L,S,$,E,D,k,w,T,V,y=p[2].tags,g=[];for(let m=0;m<y.length;m+=1)g[m]=_e(he(p,y,m));return{c(){e=u("div"),a=u("div"),s=u("div"),r=u("span"),t=H(c),n=N(),d=u("div"),I=u("span"),P=H(x),L=N(),S=u("div"),$=u("div"),E=u("div"),T=N();for(let m=0;m<g.length;m+=1)g[m].c();V=N(),this.h()},l(m){e=f(m,"DIV",{class:!0});var _=v(e);a=f(_,"DIV",{class:!0});var h=v(a);s=f(h,"DIV",{class:!0});var b=v(s);r=f(b,"SPAN",{});var O=v(r);t=M(O,c),O.forEach(o),b.forEach(o),n=A(h),d=f(h,"DIV",{class:!0});var C=v(d);I=f(C,"SPAN",{class:!0});var R=v(I);P=M(R,x),R.forEach(o),C.forEach(o),L=A(h),S=f(h,"DIV",{class:!0});var B=v(S);$=f(B,"DIV",{class:!0});var J=v($);E=f(J,"DIV",{class:!0,role:!0,style:!0,"aria-valuenow":!0,"aria-valuemin":!0,"aria-valuemax":!0}),v(E).forEach(o),J.forEach(o),B.forEach(o),h.forEach(o),T=A(_);for(let j=0;j<g.length;j+=1)g[j].l(_);V=A(_),_.forEach(o),this.h()},h(){i(s,"class","col-md-8 col-xs-6"),i(I,"class","float-end"),i(d,"class","col-md-4 col-xs-6"),i(E,"class","progress-bar"),i(E,"role","progressbar"),Ie(E,"width",p[2].percentage+"%"),i(E,"aria-valuenow",D=Number(p[2].percentage)),i(E,"aria-valuemin",k=0),i(E,"aria-valuemax",w=100),i($,"class","progress"),i(S,"class","col-12"),i(a,"class","row"),i(e,"class","mt-3")},m(m,_){q(m,e,_),l(e,a),l(a,s),l(s,r),l(r,t),l(a,n),l(a,d),l(d,I),l(I,P),l(a,L),l(a,S),l(S,$),l($,E),l(e,T);for(let h=0;h<g.length;h+=1)g[h].m(e,null);l(e,V)},p(m,_){if(_&2){y=m[2].tags;let h;for(h=0;h<y.length;h+=1){const b=he(m,y,h);g[h]?g[h].p(b,_):(g[h]=_e(b),g[h].c(),g[h].m(e,V))}for(;h<g.length;h+=1)g[h].d(1);g.length=y.length}},d(m){m&&o(e),oe(g,m)}}}function Te(p){let e,a,s,r,c,t,n,d,I,x,P,L,S,$,E,D,k,w,T,V=p[0],y=[];for(let _=0;_<V.length;_+=1)y[_]=pe(me(p,V,_));let g=p[1],m=[];for(let _=0;_<g.length;_+=1)m[_]=ge(ve(p,g,_));return{c(){e=u("section"),a=u("div"),s=u("div"),r=u("div"),c=u("div"),t=u("div"),n=u("div"),d=u("div"),I=u("div"),x=u("h5"),P=H("About me"),L=N();for(let _=0;_<y.length;_+=1)y[_].c();S=N(),$=u("div"),E=u("div"),D=u("div"),k=u("h5"),w=H("Skill"),T=N();for(let _=0;_<m.length;_+=1)m[_].c();this.h()},l(_){e=f(_,"SECTION",{id:!0,class:!0});var h=v(e);a=f(h,"DIV",{class:!0});var b=v(a);s=f(b,"DIV",{class:!0});var O=v(s);r=f(O,"DIV",{class:!0});var C=v(r);c=f(C,"DIV",{class:!0});var R=v(c);t=f(R,"DIV",{class:!0});var B=v(t);n=f(B,"DIV",{class:!0});var J=v(n);d=f(J,"DIV",{class:!0});var j=v(d);I=f(j,"DIV",{class:!0});var W=v(I);x=f(W,"H5",{class:!0});var z=v(x);P=M(z,"About me"),z.forEach(o),W.forEach(o),L=A(j);for(let G=0;G<y.length;G+=1)y[G].l(j);j.forEach(o),J.forEach(o),S=A(B),$=f(B,"DIV",{class:!0});var le=v($);E=f(le,"DIV",{class:!0});var X=v(E);D=f(X,"DIV",{class:!0});var re=v(D);k=f(re,"H5",{class:!0});var ne=v(k);w=M(ne,"Skill"),ne.forEach(o),re.forEach(o),T=A(X);for(let G=0;G<m.length;G+=1)m[G].l(X);X.forEach(o),le.forEach(o),B.forEach(o),R.forEach(o),C.forEach(o),O.forEach(o),b.forEach(o),h.forEach(o),this.h()},h(){i(x,"class","title-left"),i(I,"class","title-box-2"),i(d,"class","about-me pt-4 pt-md-0"),i(n,"class","col-md-6"),i(k,"class","title-left"),i(D,"class","title-box-2"),i(E,"class","skill-mf"),i($,"class","col-md-6"),i(t,"class","row"),i(c,"class","box-shadow-full"),i(r,"class","col-sm-12"),i(s,"class","row"),i(a,"class","container"),i(e,"id","about"),i(e,"class","about-mf sect-pt4 route")},m(_,h){q(_,e,h),l(e,a),l(a,s),l(s,r),l(r,c),l(c,t),l(t,n),l(n,d),l(d,I),l(I,x),l(x,P),l(d,L);for(let b=0;b<y.length;b+=1)y[b].m(d,null);l(t,S),l(t,$),l($,E),l(E,D),l(D,k),l(k,w),l(E,T);for(let b=0;b<m.length;b+=1)m[b].m(E,null)},p(_,[h]){if(h&1){V=_[0];let b;for(b=0;b<V.length;b+=1){const O=me(_,V,b);y[b]?y[b].p(O,h):(y[b]=pe(O),y[b].c(),y[b].m(d,null))}for(;b<y.length;b+=1)y[b].d(1);y.length=V.length}if(h&2){g=_[1];let b;for(b=0;b<g.length;b+=1){const O=ve(_,g,b);m[b]?m[b].p(O,h):(m[b]=ge(O),m[b].c(),m[b].m(E,null))}for(;b<m.length;b+=1)m[b].d(1);m.length=g.length}},i:U,o:U,d(_){_&&o(e),oe(y,_),oe(m,_)}}}function Ve(p){const e="\u2B50";let a="";if(typeof p=="undefined")return a;const s=p/20;for(let r=0;r<s;r++)a+=e;return a}function Ne(p){return[["I am a cloud-oriented web developer.","I'm fluent with Microsoft stack (Azure Services, ASP.NET, .NET Core/Framework) and Javascript/Typescript.","My passion is both frontend and backend and because of that, I learned different frontend frameworks (Angular, React, Svelte, and ASP.NET) to create more interactive user interfaces and backend technologies (.NET Core, and NodeJS) to make performance-oriented API. ","During my work experience, I improved day by day my knowledge about enterprise projects building (using design patterns like repository pattern) and how to design features to be easy to maintain and improvable with more features in the near future.","I keep busy with various hobbies during my free time, particularly cyber security (mainly web security), listening to podcasts about the tech world, and riding a bike."],[{displayText:"Web",percentage:100,tags:["HTML/CSS","JavaScript","TypeScript","Svelte","React","Angular","ASP.NET Core"]},{displayText:"Backend",percentage:100,tags:["Dotnet Core","NodeJS"]},{displayText:"Server",percentage:60,tags:["MSSQL","MYSQL","POSTGRESQL","REDIS"]},{displayText:"Operating Systems",percentage:80,tags:["Linux (I use arch btw)","Windows"]},{displayText:"Other",percentage:80,tags:["Git","Nmap","Postman","Docker","Exception Reading","Copy&Paste"]}]]}class Ae extends Y{constructor(e){super();K(this,e,Ne,Te,Z,{})}}function be(p,e,a){const s=p.slice();return s[2]=e[a],s}function Ee(p){let e,a,s=p[2].displayText+"",r,c,t;return{c(){e=u("span"),a=u("a"),r=H(s),t=N(),this.h()},l(n){e=f(n,"SPAN",{});var d=v(e);a=f(d,"A",{href:!0,target:!0});var I=v(a);r=M(I,s),I.forEach(o),t=A(d),d.forEach(o),this.h()},h(){i(a,"href",c=p[2].url),i(a,"target","_blank")},m(n,d){q(n,e,d),l(e,a),l(a,r),l(e,t)},p(n,d){d&1&&s!==(s=n[2].displayText+"")&&ce(r,s),d&1&&c!==(c=n[2].url)&&i(a,"href",c)},d(n){n&&o(e)}}}function Pe(p){let e,a,s,r,c,t,n,d,I,x=p[0].title+"",P,L,S,$=p[0].description+"",E,D,k,w,T,V,y=p[0].links,g=[];for(let m=0;m<y.length;m+=1)g[m]=Ee(be(p,y,m));return{c(){e=u("div"),a=u("div"),s=u("div"),r=u("span"),c=u("i"),n=N(),d=u("div"),I=u("h2"),P=H(x),L=N(),S=u("p"),E=H($),D=N(),k=u("div"),w=u("div");for(let m=0;m<g.length;m+=1)g[m].c();this.h()},l(m){e=f(m,"DIV",{class:!0});var _=v(e);a=f(_,"DIV",{class:!0});var h=v(a);s=f(h,"DIV",{class:!0});var b=v(s);r=f(b,"SPAN",{class:!0});var O=v(r);c=f(O,"I",{class:!0}),v(c).forEach(o),O.forEach(o),b.forEach(o),n=A(h),d=f(h,"DIV",{class:!0});var C=v(d);I=f(C,"H2",{class:!0});var R=v(I);P=M(R,x),R.forEach(o),L=A(C),S=f(C,"P",{class:!0});var B=v(S);E=M(B,$),B.forEach(o),D=A(C),k=f(C,"DIV",{class:!0});var J=v(k);w=f(J,"DIV",{class:!0});var j=v(w);for(let W=0;W<g.length;W+=1)g[W].l(j);j.forEach(o),J.forEach(o),C.forEach(o),h.forEach(o),_.forEach(o),this.h()},h(){i(c,"class",t="fas "+p[0].iconcode+" svelte-1ambl6o"),i(r,"class","ico-circle"),i(s,"class","service-ico"),i(I,"class","s-title"),i(S,"class","s-description text-center"),i(w,"class","col-12 text-center"),i(k,"class","row"),i(d,"class","service-content"),i(a,"class","service-box"),i(e,"class","col-md-4")},m(m,_){q(m,e,_),l(e,a),l(a,s),l(s,r),l(r,c),l(a,n),l(a,d),l(d,I),l(I,P),l(d,L),l(d,S),l(S,E),l(d,D),l(d,k),l(k,w);for(let h=0;h<g.length;h+=1)g[h].m(w,null);T||(V=[ie(a,"mouseenter",p[1]),ie(a,"mouseleave",p[1])],T=!0)},p(m,[_]){if(_&1&&t!==(t="fas "+m[0].iconcode+" svelte-1ambl6o")&&i(c,"class",t),_&1&&x!==(x=m[0].title+"")&&ce(P,x),_&1&&$!==($=m[0].description+"")&&ce(E,$),_&1){y=m[0].links;let h;for(h=0;h<y.length;h+=1){const b=be(m,y,h);g[h]?g[h].p(b,_):(g[h]=Ee(b),g[h].c(),g[h].m(w,null))}for(;h<g.length;h+=1)g[h].d(1);g.length=y.length}},i:U,o:U,d(m){m&&o(e),oe(g,m),T=!1,ue(V)}}}function Le(p,e,a){let{item:s}=e;function r(c){var t=c.target.getElementsByClassName("fas");if(t.length>0){const n=t[0];n.classList.toggle(s.iconcode),n.classList.toggle("fa-star"),n.classList.toggle("text-light")}}return p.$$set=c=>{"item"in c&&a(0,s=c.item)},[s,r]}class Ce extends Y{constructor(e){super();K(this,e,Le,Pe,Z,{item:0})}}function $e(p,e,a){const s=p.slice();return s[1]=e[a],s}function ye(p){let e,a;return e=new Ce({props:{item:p[1]}}),{c(){ee(e.$$.fragment)},l(s){te(e.$$.fragment,s)},m(s,r){ae(e,s,r),a=!0},p(s,r){const c={};r&1&&(c.item=s[1]),e.$set(c)},i(s){a||(Q(e.$$.fragment,s),a=!0)},o(s){F(e.$$.fragment,s),a=!1},d(s){se(e,s)}}}function je(p){let e,a,s=p[0],r=[];for(let t=0;t<s.length;t+=1)r[t]=ye($e(p,s,t));const c=t=>F(r[t],1,1,()=>{r[t]=null});return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=fe()},l(t){for(let n=0;n<r.length;n+=1)r[n].l(t);e=fe()},m(t,n){for(let d=0;d<r.length;d+=1)r[d].m(t,n);q(t,e,n),a=!0},p(t,[n]){if(n&1){s=t[0];let d;for(d=0;d<s.length;d+=1){const I=$e(t,s,d);r[d]?(r[d].p(I,n),Q(r[d],1)):(r[d]=ye(I),r[d].c(),Q(r[d],1),r[d].m(e.parentNode,e))}for(Se(),d=s.length;d<r.length;d+=1)c(d);ke()}},i(t){if(!a){for(let n=0;n<s.length;n+=1)Q(r[n]);a=!0}},o(t){r=r.filter(Boolean);for(let n=0;n<r.length;n+=1)F(r[n]);a=!1},d(t){oe(r,t),t&&o(e)}}}function Oe(p,e,a){let{list:s}=e;return p.$$set=r=>{"list"in r&&a(0,s=r.list)},[s]}class Be extends Y{constructor(e){super();K(this,e,Oe,je,Z,{list:0})}}function He(p){let e,a,s,r,c,t,n,d,I,x,P,L,S,$,E,D;return E=new Be({props:{list:p[0]}}),{c(){e=u("section"),a=u("div"),s=u("div"),r=u("div"),c=u("div"),t=u("h3"),n=H("Projects"),d=N(),I=u("p"),x=H("On my freetime, I try to create projects"),P=N(),L=u("div"),S=N(),$=u("div"),ee(E.$$.fragment),this.h()},l(k){e=f(k,"SECTION",{id:!0,class:!0});var w=v(e);a=f(w,"DIV",{class:!0});var T=v(a);s=f(T,"DIV",{class:!0});var V=v(s);r=f(V,"DIV",{class:!0});var y=v(r);c=f(y,"DIV",{class:!0});var g=v(c);t=f(g,"H3",{class:!0});var m=v(t);n=M(m,"Projects"),m.forEach(o),d=A(g),I=f(g,"P",{class:!0});var _=v(I);x=M(_,"On my freetime, I try to create projects"),_.forEach(o),P=A(g),L=f(g,"DIV",{class:!0}),v(L).forEach(o),g.forEach(o),y.forEach(o),V.forEach(o),S=A(T),$=f(T,"DIV",{class:!0});var h=v($);te(E.$$.fragment,h),h.forEach(o),T.forEach(o),w.forEach(o),this.h()},h(){i(t,"class","title-a"),i(I,"class","subtitle-a"),i(L,"class","line-mf"),i(c,"class","title-box text-center"),i(r,"class","col-sm-12"),i(s,"class","row"),i($,"class","row"),i(a,"class","container"),i(e,"id","projects"),i(e,"class","services-mf route")},m(k,w){q(k,e,w),l(e,a),l(a,s),l(s,r),l(r,c),l(c,t),l(t,n),l(c,d),l(c,I),l(I,x),l(c,P),l(c,L),l(a,S),l(a,$),ae(E,$,null),D=!0},p:U,i(k){D||(Q(E.$$.fragment,k),D=!0)},o(k){F(E.$$.fragment,k),D=!1},d(k){k&&o(e),se(E)}}}function Me(p){return[[{title:"Spork",description:"Get your top listened spotify tracks",links:[{displayText:"repo",url:"https://github.com/simone98dm/spork"},{displayText:"webapp",url:"https://simone98dm.github.io/spork/"}],iconcode:"fa-music"},{title:"TODO SPA Projects",description:"Those projects aim to create the same todo application with different web frameworks",links:[{displayText:"Angular",url:"https://github.com/simone98dm/angular-todoapp"},{displayText:"React",url:"https://github.com/simone98dm/react-todoapp"},{displayText:"Svelte",url:"https://github.com/simone98dm/svelte-todoapp"},{displayText:"VueJS",url:"https://github.com/simone98dm/vue2-proj"}],iconcode:"fa-list-ul"},{title:"TSAC2019",description:"Complex queue based api and frontend",links:[{displayText:"repo",url:"https://github.com/simone98dm/ITS-TSAC2019-Esame"}],iconcode:"fa-cloud"},{title:"LeetCode",description:"Some solutions for leetcode problems",links:[{displayText:"repo",url:"https://github.com/simone98dm/LeetCode"}],iconcode:"fa-dna"},{title:"Spork Playlist",description:"Sync your local music folder to spotify acc.",links:[{displayText:"repo",url:"https://github.com/simone98dm/simone98dm.playlist"}],iconcode:"fa-guitar"},{title:"Bing Daily Wallpaper",description:"Set bing daily wallpaper",links:[{displayText:"repo",url:"https://github.com/simone98dm/simone98dm.dailybingwallpaper"}],iconcode:"fa-image"}]]}class Re extends Y{constructor(e){super();K(this,e,Me,He,Z,{})}}function Ue(p){let e,a,s,r,c,t,n,d,I,x,P,L,S,$,E,D,k,w,T,V;return{c(){e=u("div"),a=u("div"),s=N(),r=u("div"),c=u("div"),t=u("div"),n=u("h1"),d=H("I am Simone"),I=N(),x=u("p"),P=u("span"),L=H("I am a frontend & backend developer"),S=N(),$=u("p"),E=u("span"),D=H("tech enthusiast"),k=N(),w=u("p"),T=u("span"),V=H("\u{1F355} lover"),this.h()},l(y){e=f(y,"DIV",{id:!0,class:!0});var g=v(e);a=f(g,"DIV",{class:!0}),v(a).forEach(o),s=A(g),r=f(g,"DIV",{class:!0});var m=v(r);c=f(m,"DIV",{class:!0});var _=v(c);t=f(_,"DIV",{class:!0});var h=v(t);n=f(h,"H1",{class:!0});var b=v(n);d=M(b,"I am Simone"),b.forEach(o),I=A(h),x=f(h,"P",{class:!0});var O=v(x);P=f(O,"SPAN",{});var C=v(P);L=M(C,"I am a frontend & backend developer"),C.forEach(o),O.forEach(o),S=A(h),$=f(h,"P",{class:!0});var R=v($);E=f(R,"SPAN",{});var B=v(E);D=M(B,"tech enthusiast"),B.forEach(o),R.forEach(o),k=A(h),w=f(h,"P",{class:!0});var J=v(w);T=f(J,"SPAN",{});var j=v(T);V=M(j,"\u{1F355} lover"),j.forEach(o),J.forEach(o),h.forEach(o),_.forEach(o),m.forEach(o),g.forEach(o),this.h()},h(){i(a,"class","overlay-itro"),i(n,"class","intro-title mb-4"),i(x,"class","intro-subtitle animate__animated animate__backInUp"),i($,"class","intro-subtitle animate__animated animate__backInUp animate__delay-1s"),i(w,"class","intro-subtitle animate__animated animate__backInUp animate__delay-2s"),i(t,"class","container"),i(c,"class","table-cell"),i(r,"class","intro-content display-table"),i(e,"id","home"),i(e,"class","intro route bg-image svelte-1xi9dgz")},m(y,g){q(y,e,g),l(e,a),l(e,s),l(e,r),l(r,c),l(c,t),l(t,n),l(n,d),l(t,I),l(t,x),l(x,P),l(P,L),l(t,S),l(t,$),l($,E),l(E,D),l(t,k),l(t,w),l(w,T),l(T,V)},p:U,i:U,o:U,d(y){y&&o(e)}}}class Je extends Y{constructor(e){super();K(this,e,null,Ue,Z,{})}}function qe(p){let e,a,s,r,c,t;return e=new Je({}),s=new Ae({}),c=new Re({}),{c(){ee(e.$$.fragment),a=N(),ee(s.$$.fragment),r=N(),ee(c.$$.fragment)},l(n){te(e.$$.fragment,n),a=A(n),te(s.$$.fragment,n),r=A(n),te(c.$$.fragment,n)},m(n,d){ae(e,n,d),q(n,a,d),ae(s,n,d),q(n,r,d),ae(c,n,d),t=!0},p:U,i(n){t||(Q(e.$$.fragment,n),Q(s.$$.fragment,n),Q(c.$$.fragment,n),t=!0)},o(n){F(e.$$.fragment,n),F(s.$$.fragment,n),F(c.$$.fragment,n),t=!1},d(n){se(e,n),n&&o(a),se(s,n),n&&o(r),se(c,n)}}}class Ge extends Y{constructor(e){super();K(this,e,null,qe,Z,{})}}const{window:Qe}=xe;function We(p){let e,a,s,r,c,t,n,d,I,x,P,L,S,$,E,D,k,w,T,V,y,g,m,_,h,b,O;return{c(){e=u("nav"),a=u("div"),s=u("a"),r=H("simone98dm"),c=N(),t=u("button"),n=u("span"),d=N(),I=u("span"),x=N(),P=u("span"),L=N(),S=u("div"),$=u("ul"),E=u("li"),D=u("a"),k=H("Home"),w=N(),T=u("li"),V=u("a"),y=H("About"),g=N(),m=u("li"),_=u("a"),h=H("projects"),this.h()},l(C){e=f(C,"NAV",{class:!0,id:!0});var R=v(e);a=f(R,"DIV",{class:!0});var B=v(a);s=f(B,"A",{class:!0,href:!0});var J=v(s);r=M(J,"simone98dm"),J.forEach(o),c=A(B),t=f(B,"BUTTON",{class:!0,type:!0,"data-toggle":!0,"data-target":!0,"aria-controls":!0,"aria-expanded":!0,"aria-label":!0});var j=v(t);n=f(j,"SPAN",{}),v(n).forEach(o),d=A(j),I=f(j,"SPAN",{}),v(I).forEach(o),x=A(j),P=f(j,"SPAN",{}),v(P).forEach(o),j.forEach(o),L=A(B),S=f(B,"DIV",{class:!0,id:!0});var W=v(S);$=f(W,"UL",{class:!0});var z=v($);E=f(z,"LI",{class:!0});var le=v(E);D=f(le,"A",{class:!0,href:!0});var X=v(D);k=M(X,"Home"),X.forEach(o),le.forEach(o),w=A(z),T=f(z,"LI",{class:!0});var re=v(T);V=f(re,"A",{class:!0,href:!0});var ne=v(V);y=M(ne,"About"),ne.forEach(o),re.forEach(o),g=A(z),m=f(z,"LI",{class:!0});var G=v(m);_=f(G,"A",{class:!0,href:!0});var de=v(_);h=M(de,"projects"),de.forEach(o),G.forEach(o),z.forEach(o),W.forEach(o),B.forEach(o),R.forEach(o),this.h()},h(){i(s,"class","navbar-brand js-scroll"),i(s,"href","#home"),i(t,"class","navbar-toggler collapsed"),i(t,"type","button"),i(t,"data-toggle","collapse"),i(t,"data-target","#navbarDefault"),i(t,"aria-controls","navbarDefault"),i(t,"aria-expanded","false"),i(t,"aria-label","Toggle navigation"),i(D,"class","nav-link js-scroll active"),i(D,"href","#home"),i(E,"class","nav-item"),i(V,"class","nav-link js-scroll"),i(V,"href","#about"),i(T,"class","nav-item"),i(_,"class","nav-link js-scroll"),i(_,"href","#projects"),i(m,"class","nav-item"),i($,"class","navbar-nav"),i(S,"class","navbar-collapse collapse justify-content-end"),i(S,"id","navbarDefault"),i(a,"class","container"),i(e,"class","navbar navbar-b navbar-trans navbar-expand-md fixed-top"),i(e,"id","mainNav")},m(C,R){q(C,e,R),l(e,a),l(a,s),l(s,r),l(a,c),l(a,t),l(t,n),l(t,d),l(t,I),l(t,x),l(t,P),l(a,L),l(a,S),l(S,$),l($,E),l(E,D),l(D,k),l($,w),l($,T),l(T,V),l(V,y),l($,g),l($,m),l(m,_),l(_,h),b||(O=[ie(Qe,"scroll",Fe),ie(t,"click",ze)],b=!0)},p:U,i:U,o:U,d(C){C&&o(e),b=!1,ue(O)}}}function ze(){document.getElementsByClassName("navbar-toggler")[0].classList.toggle("navbar-reduce")}function Fe(){const p=50,e=window.pageXOffset!==void 0,a=(document.compatMode||"")==="CSS1Compat";(e?window.pageYOffset:a?document.documentElement.scrollTop:document.body.scrollTop)>p?(document.getElementById("mainNav").classList.remove("navbar-trans"),document.getElementById("mainNav").classList.add("navbar-reduce")):(document.getElementById("mainNav").classList.remove("navbar-reduce"),document.getElementById("mainNav").classList.add("navbar-trans"))}class Ye extends Y{constructor(e){super();K(this,e,null,We,Z,{})}}function Ke(p){let e,a,s,r,c;return a=new Ye({}),r=new Ge({}),{c(){e=N(),ee(a.$$.fragment),s=N(),ee(r.$$.fragment),this.h()},l(t){we('[data-svelte="svelte-1anpopb"]',document.head).forEach(o),e=A(t),te(a.$$.fragment,t),s=A(t),te(r.$$.fragment,t),this.h()},h(){document.title="Home"},m(t,n){q(t,e,n),ae(a,t,n),q(t,s,n),ae(r,t,n),c=!0},p:U,i(t){c||(Q(a.$$.fragment,t),Q(r.$$.fragment,t),c=!0)},o(t){F(a.$$.fragment,t),F(r.$$.fragment,t),c=!1},d(t){t&&o(e),se(a,t),t&&o(s),se(r,t)}}}class Ze extends Y{constructor(e){super();K(this,e,null,Ke,De,{})}}export{Ze as default};
