import{S as Y,i as K,D as X,e as v,t as O,k as T,c as h,a as m,g as B,d as i,n as V,b as c,K as ye,f as J,E as l,F as U,L as re,h as oe,M as ne,N as ue,j as Z,m as ee,o as te,x as z,u as W,v as ae,l as fe,r as ke,w as Se,O as De,s as we,P as xe}from"../chunks/vendor-b6384ef0.js";function ve(_,e,a){const s=_.slice();return s[2]=e[a],s}function he(_,e,a){const s=_.slice();return s[5]=e[a],s}function me(_,e,a){const s=_.slice();return s[8]=e[a],s}function pe(_){let e,a=_[8]+"",s;return{c(){e=v("div"),s=O(a),this.h()},l(r){e=h(r,"DIV",{class:!0});var u=m(e);s=B(u,a),u.forEach(i),this.h()},h(){c(e,"class","badge rounded-pill bg-light text-primary")},m(r,u){J(r,e,u),l(e,s)},p:U,d(r){r&&i(e)}}}function _e(_){let e,a,s,r,u=_[5].displayText+"",t,o,f,$,N=Ve(_[5].percentage)+"",A,L,y,g,E,w,D,x,S,I,k=_[5].tags,p=[];for(let d=0;d<k.length;d+=1)p[d]=pe(me(_,k,d));return{c(){e=v("div"),a=v("div"),s=v("div"),r=v("span"),t=O(u),o=T(),f=v("div"),$=v("span"),A=O(N),L=T(),y=v("div"),g=v("div"),E=v("div"),S=T();for(let d=0;d<p.length;d+=1)p[d].c();I=T(),this.h()},l(d){e=h(d,"DIV",{class:!0});var b=m(e);a=h(b,"DIV",{class:!0});var n=m(a);s=h(n,"DIV",{class:!0});var P=m(s);r=h(P,"SPAN",{});var q=m(r);t=B(q,u),q.forEach(i),P.forEach(i),o=V(n),f=h(n,"DIV",{class:!0});var j=m(f);$=h(j,"SPAN",{class:!0});var H=m($);A=B(H,N),H.forEach(i),j.forEach(i),L=V(n),y=h(n,"DIV",{class:!0});var M=m(y);g=h(M,"DIV",{class:!0});var R=m(g);E=h(R,"DIV",{class:!0,role:!0,style:!0,"aria-valuenow":!0,"aria-valuemin":!0,"aria-valuemax":!0}),m(E).forEach(i),R.forEach(i),M.forEach(i),n.forEach(i),S=V(b);for(let C=0;C<p.length;C+=1)p[C].l(b);I=V(b),b.forEach(i),this.h()},h(){c(s,"class","col-md-8 col-xs-6"),c($,"class","float-end"),c(f,"class","col-md-4 col-xs-6"),c(E,"class","progress-bar"),c(E,"role","progressbar"),ye(E,"width",_[5].percentage+"%"),c(E,"aria-valuenow",w=Number(_[5].percentage)),c(E,"aria-valuemin",D=0),c(E,"aria-valuemax",x=100),c(g,"class","progress"),c(y,"class","col-12"),c(a,"class","row"),c(e,"class","mt-3")},m(d,b){J(d,e,b),l(e,a),l(a,s),l(s,r),l(r,t),l(a,o),l(a,f),l(f,$),l($,A),l(a,L),l(a,y),l(y,g),l(g,E),l(e,S);for(let n=0;n<p.length;n+=1)p[n].m(e,null);l(e,I)},p(d,b){if(b&2){k=d[5].tags;let n;for(n=0;n<k.length;n+=1){const P=me(d,k,n);p[n]?p[n].p(P,b):(p[n]=pe(P),p[n].c(),p[n].m(e,I))}for(;n<p.length;n+=1)p[n].d(1);p.length=k.length}},d(d){d&&i(e),re(p,d)}}}function ge(_){let e,a=_[2]+"",s,r;return{c(){e=v("p"),s=O(a),r=T(),this.h()},l(u){e=h(u,"P",{class:!0});var t=m(e);s=B(t,a),r=V(t),t.forEach(i),this.h()},h(){c(e,"class","lead")},m(u,t){J(u,e,t),l(e,s),l(e,r)},p:U,d(u){u&&i(e)}}}function Te(_){let e,a,s,r,u,t,o,f,$,N,A,L,y,g,E,w,D,x,S=_[1],I=[];for(let d=0;d<S.length;d+=1)I[d]=_e(he(_,S,d));let k=_[0],p=[];for(let d=0;d<k.length;d+=1)p[d]=ge(ve(_,k,d));return{c(){e=v("section"),a=v("div"),s=v("div"),r=v("div"),u=v("div"),t=v("div"),o=v("div"),f=v("div"),$=v("p"),N=O("Skill"),A=T();for(let d=0;d<I.length;d+=1)I[d].c();L=T(),y=v("div"),g=v("div"),E=v("div"),w=v("h5"),D=O("About me"),x=T();for(let d=0;d<p.length;d+=1)p[d].c();this.h()},l(d){e=h(d,"SECTION",{id:!0,class:!0});var b=m(e);a=h(b,"DIV",{class:!0});var n=m(a);s=h(n,"DIV",{class:!0});var P=m(s);r=h(P,"DIV",{class:!0});var q=m(r);u=h(q,"DIV",{class:!0});var j=m(u);t=h(j,"DIV",{class:!0});var H=m(t);o=h(H,"DIV",{class:!0});var M=m(o);f=h(M,"DIV",{class:!0});var R=m(f);$=h(R,"P",{class:!0});var C=m($);N=B(C,"Skill"),C.forEach(i),A=V(R);for(let Q=0;Q<I.length;Q+=1)I[Q].l(R);R.forEach(i),M.forEach(i),L=V(H),y=h(H,"DIV",{class:!0});var F=m(y);g=h(F,"DIV",{class:!0});var G=m(g);E=h(G,"DIV",{class:!0});var se=m(E);w=h(se,"H5",{class:!0});var le=m(w);D=B(le,"About me"),le.forEach(i),se.forEach(i),x=V(G);for(let Q=0;Q<p.length;Q+=1)p[Q].l(G);G.forEach(i),F.forEach(i),H.forEach(i),j.forEach(i),q.forEach(i),P.forEach(i),n.forEach(i),b.forEach(i),this.h()},h(){c($,"class","fw-bold"),c(f,"class","skill-mf"),c(o,"class","col-md-6"),c(w,"class","title-left"),c(E,"class","title-box-2"),c(g,"class","about-me pt-4 pt-md-0"),c(y,"class","col-md-6"),c(t,"class","row"),c(u,"class","box-shadow-full"),c(r,"class","col-sm-12"),c(s,"class","row"),c(a,"class","container"),c(e,"id","about"),c(e,"class","about-mf sect-pt4 route")},m(d,b){J(d,e,b),l(e,a),l(a,s),l(s,r),l(r,u),l(u,t),l(t,o),l(o,f),l(f,$),l($,N),l(f,A);for(let n=0;n<I.length;n+=1)I[n].m(f,null);l(t,L),l(t,y),l(y,g),l(g,E),l(E,w),l(w,D),l(g,x);for(let n=0;n<p.length;n+=1)p[n].m(g,null)},p(d,[b]){if(b&2){S=d[1];let n;for(n=0;n<S.length;n+=1){const P=he(d,S,n);I[n]?I[n].p(P,b):(I[n]=_e(P),I[n].c(),I[n].m(f,null))}for(;n<I.length;n+=1)I[n].d(1);I.length=S.length}if(b&1){k=d[0];let n;for(n=0;n<k.length;n+=1){const P=ve(d,k,n);p[n]?p[n].p(P,b):(p[n]=ge(P),p[n].c(),p[n].m(g,null))}for(;n<p.length;n+=1)p[n].d(1);p.length=k.length}},i:U,o:U,d(d){d&&i(e),re(I,d),re(p,d)}}}function Ve(_){const e="\u2B50";let a="";if(typeof _=="undefined")return a;const s=_/20;for(let r=0;r<s;r++)a+=e;return a}function Ne(_){return[["I am a cloud-oriented web developer.","I'm fluent with Microsoft stack (Azure Services, ASP.NET, .NET Core/Framework) and Javascript/Typescript.","My passion is both frontend and backend and because of that, I learned different frontend frameworks (Angular, React, Svelte, and ASP.NET) to create more interactive user interfaces and backend technologies (.NET Core, and NodeJS) to make performance-oriented API. ","During my work experience, I improved day by day my knowledge about enterprise projects building (using design patterns like repository patterns) and how to design features to be easy to maintain and improvable with more features in the near future.","I keep busy with various hobbies during my free time, particularly cyber security (mainly web security), listening to podcasts about the tech world, and riding a bike."],[{displayText:"Web",percentage:100,tags:["HTML/CSS","JavaScript","TypeScript","Svelte","React","Angular","ASP.NET Core"]},{displayText:"Backend",percentage:100,tags:["Dotnet Core","NodeJS"]},{displayText:"Server",percentage:60,tags:["MSSQL","MYSQL","POSTGRESQL","REDIS"]},{displayText:"Operating Systems",percentage:80,tags:["Linux (I use arch btw)","Windows"]},{displayText:"Other",percentage:80,tags:["Git","Nmap","Postman","Docker","Exception Reading","Copy&Paste"]}]]}class Ae extends Y{constructor(e){super();K(this,e,Ne,Te,X,{})}}function be(_,e,a){const s=_.slice();return s[2]=e[a],s}function Ee(_){let e,a,s=_[2].displayText+"",r,u,t;return{c(){e=v("span"),a=v("a"),r=O(s),t=T(),this.h()},l(o){e=h(o,"SPAN",{});var f=m(e);a=h(f,"A",{href:!0,target:!0});var $=m(a);r=B($,s),$.forEach(i),t=V(f),f.forEach(i),this.h()},h(){c(a,"href",u=_[2].url),c(a,"target","_blank")},m(o,f){J(o,e,f),l(e,a),l(a,r),l(e,t)},p(o,f){f&1&&s!==(s=o[2].displayText+"")&&oe(r,s),f&1&&u!==(u=o[2].url)&&c(a,"href",u)},d(o){o&&i(e)}}}function Pe(_){let e,a,s,r,u,t,o,f,$,N=_[0].title+"",A,L,y,g=_[0].description+"",E,w,D,x,S,I,k=_[0].links,p=[];for(let d=0;d<k.length;d+=1)p[d]=Ee(be(_,k,d));return{c(){e=v("div"),a=v("div"),s=v("div"),r=v("span"),u=v("i"),o=T(),f=v("div"),$=v("h2"),A=O(N),L=T(),y=v("p"),E=O(g),w=T(),D=v("div"),x=v("div");for(let d=0;d<p.length;d+=1)p[d].c();this.h()},l(d){e=h(d,"DIV",{class:!0});var b=m(e);a=h(b,"DIV",{class:!0});var n=m(a);s=h(n,"DIV",{class:!0});var P=m(s);r=h(P,"SPAN",{class:!0});var q=m(r);u=h(q,"I",{class:!0}),m(u).forEach(i),q.forEach(i),P.forEach(i),o=V(n),f=h(n,"DIV",{class:!0});var j=m(f);$=h(j,"H2",{class:!0});var H=m($);A=B(H,N),H.forEach(i),L=V(j),y=h(j,"P",{class:!0});var M=m(y);E=B(M,g),M.forEach(i),w=V(j),D=h(j,"DIV",{class:!0});var R=m(D);x=h(R,"DIV",{class:!0});var C=m(x);for(let F=0;F<p.length;F+=1)p[F].l(C);C.forEach(i),R.forEach(i),j.forEach(i),n.forEach(i),b.forEach(i),this.h()},h(){c(u,"class",t="fas "+_[0].iconcode+" svelte-1ambl6o"),c(r,"class","ico-circle"),c(s,"class","service-ico"),c($,"class","s-title"),c(y,"class","s-description text-center"),c(x,"class","col-12 text-center"),c(D,"class","row"),c(f,"class","service-content"),c(a,"class","service-box"),c(e,"class","col-md-4")},m(d,b){J(d,e,b),l(e,a),l(a,s),l(s,r),l(r,u),l(a,o),l(a,f),l(f,$),l($,A),l(f,L),l(f,y),l(y,E),l(f,w),l(f,D),l(D,x);for(let n=0;n<p.length;n+=1)p[n].m(x,null);S||(I=[ne(a,"mouseenter",_[1]),ne(a,"mouseleave",_[1])],S=!0)},p(d,[b]){if(b&1&&t!==(t="fas "+d[0].iconcode+" svelte-1ambl6o")&&c(u,"class",t),b&1&&N!==(N=d[0].title+"")&&oe(A,N),b&1&&g!==(g=d[0].description+"")&&oe(E,g),b&1){k=d[0].links;let n;for(n=0;n<k.length;n+=1){const P=be(d,k,n);p[n]?p[n].p(P,b):(p[n]=Ee(P),p[n].c(),p[n].m(x,null))}for(;n<p.length;n+=1)p[n].d(1);p.length=k.length}},i:U,o:U,d(d){d&&i(e),re(p,d),S=!1,ue(I)}}}function Le(_,e,a){let{item:s}=e;function r(u){var t=u.target.getElementsByClassName("fas");if(t.length>0){const o=t[0];o.classList.toggle(s.iconcode),o.classList.toggle("fa-star"),o.classList.toggle("text-light")}}return _.$$set=u=>{"item"in u&&a(0,s=u.item)},[s,r]}class je extends Y{constructor(e){super();K(this,e,Le,Pe,X,{item:0})}}function $e(_,e,a){const s=_.slice();return s[1]=e[a],s}function Ie(_){let e,a;return e=new je({props:{item:_[1]}}),{c(){Z(e.$$.fragment)},l(s){ee(e.$$.fragment,s)},m(s,r){te(e,s,r),a=!0},p(s,r){const u={};r&1&&(u.item=s[1]),e.$set(u)},i(s){a||(z(e.$$.fragment,s),a=!0)},o(s){W(e.$$.fragment,s),a=!1},d(s){ae(e,s)}}}function Ce(_){let e,a,s=_[0],r=[];for(let t=0;t<s.length;t+=1)r[t]=Ie($e(_,s,t));const u=t=>W(r[t],1,1,()=>{r[t]=null});return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=fe()},l(t){for(let o=0;o<r.length;o+=1)r[o].l(t);e=fe()},m(t,o){for(let f=0;f<r.length;f+=1)r[f].m(t,o);J(t,e,o),a=!0},p(t,[o]){if(o&1){s=t[0];let f;for(f=0;f<s.length;f+=1){const $=$e(t,s,f);r[f]?(r[f].p($,o),z(r[f],1)):(r[f]=Ie($),r[f].c(),z(r[f],1),r[f].m(e.parentNode,e))}for(ke(),f=s.length;f<r.length;f+=1)u(f);Se()}},i(t){if(!a){for(let o=0;o<s.length;o+=1)z(r[o]);a=!0}},o(t){r=r.filter(Boolean);for(let o=0;o<r.length;o+=1)W(r[o]);a=!1},d(t){re(r,t),t&&i(e)}}}function Oe(_,e,a){let{list:s}=e;return _.$$set=r=>{"list"in r&&a(0,s=r.list)},[s]}class Be extends Y{constructor(e){super();K(this,e,Oe,Ce,X,{list:0})}}function He(_){let e,a,s,r,u,t,o,f,$,N,A,L,y,g,E,w;return E=new Be({props:{list:_[0]}}),{c(){e=v("section"),a=v("div"),s=v("div"),r=v("div"),u=v("div"),t=v("h3"),o=O("Projects"),f=T(),$=v("p"),N=O("On my freetime, I try to create projects"),A=T(),L=v("div"),y=T(),g=v("div"),Z(E.$$.fragment),this.h()},l(D){e=h(D,"SECTION",{id:!0,class:!0});var x=m(e);a=h(x,"DIV",{class:!0});var S=m(a);s=h(S,"DIV",{class:!0});var I=m(s);r=h(I,"DIV",{class:!0});var k=m(r);u=h(k,"DIV",{class:!0});var p=m(u);t=h(p,"H3",{class:!0});var d=m(t);o=B(d,"Projects"),d.forEach(i),f=V(p),$=h(p,"P",{class:!0});var b=m($);N=B(b,"On my freetime, I try to create projects"),b.forEach(i),A=V(p),L=h(p,"DIV",{class:!0}),m(L).forEach(i),p.forEach(i),k.forEach(i),I.forEach(i),y=V(S),g=h(S,"DIV",{class:!0});var n=m(g);ee(E.$$.fragment,n),n.forEach(i),S.forEach(i),x.forEach(i),this.h()},h(){c(t,"class","title-a"),c($,"class","subtitle-a"),c(L,"class","line-mf"),c(u,"class","title-box text-center"),c(r,"class","col-sm-12"),c(s,"class","row"),c(g,"class","row"),c(a,"class","container"),c(e,"id","projects"),c(e,"class","services-mf route")},m(D,x){J(D,e,x),l(e,a),l(a,s),l(s,r),l(r,u),l(u,t),l(t,o),l(u,f),l(u,$),l($,N),l(u,A),l(u,L),l(a,y),l(a,g),te(E,g,null),w=!0},p:U,i(D){w||(z(E.$$.fragment,D),w=!0)},o(D){W(E.$$.fragment,D),w=!1},d(D){D&&i(e),ae(E)}}}function Me(_){return[[{title:"Spork",description:"Get your top listened spotify tracks",links:[{displayText:"repo",url:"https://github.com/simone98dm/spork"},{displayText:"webapp",url:"https://simone98dm.github.io/spork/"}],iconcode:"fa-music"},{title:"TODO SPA Projects",description:"Those projects aim to create the same todo application with different web frameworks",links:[{displayText:"Angular",url:"https://github.com/simone98dm/angular-todoapp"},{displayText:"React",url:"https://github.com/simone98dm/react-todoapp"},{displayText:"Svelte",url:"https://github.com/simone98dm/svelte-todoapp"}],iconcode:"fa-list-ul"},{title:"TSAC2019",description:"Complex queue based api and frontend",links:[{displayText:"repo",url:"https://github.com/simone98dm/ITS-TSAC2019-Esame"}],iconcode:"fa-cloud"}]]}class Re extends Y{constructor(e){super();K(this,e,Me,He,X,{})}}function Ue(_){let e,a,s,r,u,t,o,f,$,N,A,L,y,g,E,w,D,x,S,I;return{c(){e=v("div"),a=v("div"),s=T(),r=v("div"),u=v("div"),t=v("div"),o=v("h1"),f=O("I am Simone"),$=T(),N=v("p"),A=v("span"),L=O("I am a frontend & backend developer"),y=T(),g=v("p"),E=v("span"),w=O("tech enthusiast"),D=T(),x=v("p"),S=v("span"),I=O("\u{1F355} lover"),this.h()},l(k){e=h(k,"DIV",{id:!0,class:!0});var p=m(e);a=h(p,"DIV",{class:!0}),m(a).forEach(i),s=V(p),r=h(p,"DIV",{class:!0});var d=m(r);u=h(d,"DIV",{class:!0});var b=m(u);t=h(b,"DIV",{class:!0});var n=m(t);o=h(n,"H1",{class:!0});var P=m(o);f=B(P,"I am Simone"),P.forEach(i),$=V(n),N=h(n,"P",{class:!0});var q=m(N);A=h(q,"SPAN",{});var j=m(A);L=B(j,"I am a frontend & backend developer"),j.forEach(i),q.forEach(i),y=V(n),g=h(n,"P",{class:!0});var H=m(g);E=h(H,"SPAN",{});var M=m(E);w=B(M,"tech enthusiast"),M.forEach(i),H.forEach(i),D=V(n),x=h(n,"P",{class:!0});var R=m(x);S=h(R,"SPAN",{});var C=m(S);I=B(C,"\u{1F355} lover"),C.forEach(i),R.forEach(i),n.forEach(i),b.forEach(i),d.forEach(i),p.forEach(i),this.h()},h(){c(a,"class","overlay-itro"),c(o,"class","intro-title mb-4"),c(N,"class","intro-subtitle animate__animated animate__backInUp"),c(g,"class","intro-subtitle animate__animated animate__backInUp animate__delay-1s"),c(x,"class","intro-subtitle animate__animated animate__backInUp animate__delay-2s"),c(t,"class","container"),c(u,"class","table-cell"),c(r,"class","intro-content display-table"),c(e,"id","home"),c(e,"class","intro route bg-image svelte-1xi9dgz")},m(k,p){J(k,e,p),l(e,a),l(e,s),l(e,r),l(r,u),l(u,t),l(t,o),l(o,f),l(t,$),l(t,N),l(N,A),l(A,L),l(t,y),l(t,g),l(g,E),l(E,w),l(t,D),l(t,x),l(x,S),l(S,I)},p:U,i:U,o:U,d(k){k&&i(e)}}}class qe extends Y{constructor(e){super();K(this,e,null,Ue,X,{})}}function Je(_){let e,a,s,r,u,t;return e=new qe({}),s=new Ae({}),u=new Re({}),{c(){Z(e.$$.fragment),a=T(),Z(s.$$.fragment),r=T(),Z(u.$$.fragment)},l(o){ee(e.$$.fragment,o),a=V(o),ee(s.$$.fragment,o),r=V(o),ee(u.$$.fragment,o)},m(o,f){te(e,o,f),J(o,a,f),te(s,o,f),J(o,r,f),te(u,o,f),t=!0},p:U,i(o){t||(z(e.$$.fragment,o),z(s.$$.fragment,o),z(u.$$.fragment,o),t=!0)},o(o){W(e.$$.fragment,o),W(s.$$.fragment,o),W(u.$$.fragment,o),t=!1},d(o){ae(e,o),o&&i(a),ae(s,o),o&&i(r),ae(u,o)}}}class Ge extends Y{constructor(e){super();K(this,e,null,Je,X,{})}}const{window:Qe}=De;function ze(_){let e,a,s,r,u,t,o,f,$,N,A,L,y,g,E,w,D,x,S,I,k,p,d,b,n,P,q;return{c(){e=v("nav"),a=v("div"),s=v("a"),r=O("simone98dm"),u=T(),t=v("button"),o=v("span"),f=T(),$=v("span"),N=T(),A=v("span"),L=T(),y=v("div"),g=v("ul"),E=v("li"),w=v("a"),D=O("Home"),x=T(),S=v("li"),I=v("a"),k=O("About"),p=T(),d=v("li"),b=v("a"),n=O("projects"),this.h()},l(j){e=h(j,"NAV",{class:!0,id:!0});var H=m(e);a=h(H,"DIV",{class:!0});var M=m(a);s=h(M,"A",{class:!0,href:!0});var R=m(s);r=B(R,"simone98dm"),R.forEach(i),u=V(M),t=h(M,"BUTTON",{class:!0,type:!0,"data-toggle":!0,"data-target":!0,"aria-controls":!0,"aria-expanded":!0,"aria-label":!0});var C=m(t);o=h(C,"SPAN",{}),m(o).forEach(i),f=V(C),$=h(C,"SPAN",{}),m($).forEach(i),N=V(C),A=h(C,"SPAN",{}),m(A).forEach(i),C.forEach(i),L=V(M),y=h(M,"DIV",{class:!0,id:!0});var F=m(y);g=h(F,"UL",{class:!0});var G=m(g);E=h(G,"LI",{class:!0});var se=m(E);w=h(se,"A",{class:!0,href:!0});var le=m(w);D=B(le,"Home"),le.forEach(i),se.forEach(i),x=V(G),S=h(G,"LI",{class:!0});var Q=m(S);I=h(Q,"A",{class:!0,href:!0});var ie=m(I);k=B(ie,"About"),ie.forEach(i),Q.forEach(i),p=V(G),d=h(G,"LI",{class:!0});var ce=m(d);b=h(ce,"A",{class:!0,href:!0});var de=m(b);n=B(de,"projects"),de.forEach(i),ce.forEach(i),G.forEach(i),F.forEach(i),M.forEach(i),H.forEach(i),this.h()},h(){c(s,"class","navbar-brand js-scroll"),c(s,"href","#home"),c(t,"class","navbar-toggler collapsed"),c(t,"type","button"),c(t,"data-toggle","collapse"),c(t,"data-target","#navbarDefault"),c(t,"aria-controls","navbarDefault"),c(t,"aria-expanded","false"),c(t,"aria-label","Toggle navigation"),c(w,"class","nav-link js-scroll active"),c(w,"href","#home"),c(E,"class","nav-item"),c(I,"class","nav-link js-scroll"),c(I,"href","#about"),c(S,"class","nav-item"),c(b,"class","nav-link js-scroll"),c(b,"href","#projects"),c(d,"class","nav-item"),c(g,"class","navbar-nav"),c(y,"class","navbar-collapse collapse justify-content-end"),c(y,"id","navbarDefault"),c(a,"class","container"),c(e,"class","navbar navbar-b navbar-trans navbar-expand-md fixed-top"),c(e,"id","mainNav")},m(j,H){J(j,e,H),l(e,a),l(a,s),l(s,r),l(a,u),l(a,t),l(t,o),l(t,f),l(t,$),l(t,N),l(t,A),l(a,L),l(a,y),l(y,g),l(g,E),l(E,w),l(w,D),l(g,x),l(g,S),l(S,I),l(I,k),l(g,p),l(g,d),l(d,b),l(b,n),P||(q=[ne(Qe,"scroll",We),ne(t,"click",Fe)],P=!0)},p:U,i:U,o:U,d(j){j&&i(e),P=!1,ue(q)}}}function Fe(){document.getElementsByClassName("navbar-toggler")[0].classList.toggle("navbar-reduce")}function We(){const _=50,e=window.pageXOffset!==void 0,a=(document.compatMode||"")==="CSS1Compat";(e?window.pageYOffset:a?document.documentElement.scrollTop:document.body.scrollTop)>_?(document.getElementById("mainNav").classList.remove("navbar-trans"),document.getElementById("mainNav").classList.add("navbar-reduce")):(document.getElementById("mainNav").classList.remove("navbar-reduce"),document.getElementById("mainNav").classList.add("navbar-trans"))}class Ye extends Y{constructor(e){super();K(this,e,null,ze,X,{})}}function Ke(_){let e,a,s,r,u;return a=new Ye({}),r=new Ge({}),{c(){e=T(),Z(a.$$.fragment),s=T(),Z(r.$$.fragment),this.h()},l(t){xe('[data-svelte="svelte-1anpopb"]',document.head).forEach(i),e=V(t),ee(a.$$.fragment,t),s=V(t),ee(r.$$.fragment,t),this.h()},h(){document.title="Home"},m(t,o){J(t,e,o),te(a,t,o),J(t,s,o),te(r,t,o),u=!0},p:U,i(t){u||(z(a.$$.fragment,t),z(r.$$.fragment,t),u=!0)},o(t){W(a.$$.fragment,t),W(r.$$.fragment,t),u=!1},d(t){t&&i(e),ae(a,t),t&&i(s),ae(r,t)}}}class Ze extends Y{constructor(e){super();K(this,e,null,Ke,we,{})}}export{Ze as default};
