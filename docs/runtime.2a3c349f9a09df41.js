(()=>{"use strict";var e,v={},m={};function a(e){var d=m[e];if(void 0!==d)return d.exports;var r=m[e]={exports:{}};return v[e](r,r.exports,a),r.exports}a.m=v,e=[],a.O=(d,r,n,c)=>{if(!r){var t=1/0;for(f=0;f<e.length;f++){for(var[r,n,c]=e[f],u=!0,b=0;b<r.length;b++)(!1&c||t>=c)&&Object.keys(a.O).every(p=>a.O[p](r[b]))?r.splice(b--,1):(u=!1,c<t&&(t=c));if(u){e.splice(f--,1);var o=n();void 0!==o&&(d=o)}}return d}c=c||0;for(var f=e.length;f>0&&e[f-1][2]>c;f--)e[f]=e[f-1];e[f]=[r,n,c]},a.n=e=>{var d=e&&e.__esModule?()=>e.default:()=>e;return a.d(d,{a:d}),d},a.d=(e,d)=>{for(var r in d)a.o(d,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:d[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce((d,r)=>(a.f[r](e,d),d),[])),a.u=e=>(8592===e?"common":e)+"."+{58:"66b3004d52bf40b6",99:"79df950e9f991a71",402:"cdea53922d14f443",585:"9c31b98f9343c104",1327:"ec3fa7481d86bc8b",1430:"4375856ecb5099b4",1519:"b7fe8cb6e2d1036f",1997:"a25788812489cd5d",2091:"3038e2bf766b2db0",2650:"49f81915295d0025",2820:"53436cfb98da0128",3173:"79efceb21fe471ff",3388:"26221e6dce24f2e8",3425:"a624d47f55677142",3598:"6365ff4502f15c78",3969:"d59bb05c993192ca",4225:"4e87aeb2023d6832",4669:"48b84fbc697436a0",4727:"7d86ed54559e184b",4746:"2719636c870737f2",4956:"9e70eabd9b03d583",5013:"f39e820335903d50",5202:"93051cff3e624b92",5623:"d64fa6dd351782ef",5722:"5d29c6502c69b52d",5746:"b1b73ad4144741db",5920:"bbd65d213b387e46",6056:"a2cb73a1aaa5c954",6725:"6767b1254cbd05c0",6799:"2ca3981a1729515e",6818:"b939b4410b292496",6822:"e1634d7bae8d1841",7024:"f292cf618ad79c79",7170:"e6d3b8a6fa1d9b19",7866:"7b5f0284b6b86663",7919:"e5fe00c7a6c78724",8350:"14c9fcb947540423",8592:"dff2fa0536df4523",8761:"d3ed5dbd7a94066b",8878:"44b64591a6ae3248",9322:"b97daad8a0c4ae67",9327:"0e1b6799d47e4b3a",9364:"8639f30658ddfb68",9512:"59ed75e427f52e59",9685:"028fd9f00fffc1f7",9707:"29fd22e0c942a84f",9761:"5b0f3e45aaf51c05",9892:"64560971f8f26704"}[e]+".js",a.miniCssF=e=>{},a.o=(e,d)=>Object.prototype.hasOwnProperty.call(e,d),(()=>{var e={},d="sakai-ng:";a.l=(r,n,c,f)=>{if(e[r])e[r].push(n);else{var t,u;if(void 0!==c)for(var b=document.getElementsByTagName("script"),o=0;o<b.length;o++){var i=b[o];if(i.getAttribute("src")==r||i.getAttribute("data-webpack")==d+c){t=i;break}}t||(u=!0,(t=document.createElement("script")).type="module",t.charset="utf-8",t.timeout=120,a.nc&&t.setAttribute("nonce",a.nc),t.setAttribute("data-webpack",d+c),t.src=a.tu(r)),e[r]=[n];var l=(g,p)=>{t.onerror=t.onload=null,clearTimeout(s);var _=e[r];if(delete e[r],t.parentNode&&t.parentNode.removeChild(t),_&&_.forEach(h=>h(p)),g)return g(p)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),u&&document.head.appendChild(t)}}})(),a.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.tt=()=>(void 0===e&&(e={createScriptURL:d=>d},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),a.tu=e=>a.tt().createScriptURL(e),a.p="",(()=>{var e={3666:0};a.f.j=(n,c)=>{var f=a.o(e,n)?e[n]:void 0;if(0!==f)if(f)c.push(f[2]);else if(3666!=n){var t=new Promise((i,l)=>f=e[n]=[i,l]);c.push(f[2]=t);var u=a.p+a.u(n),b=new Error;a.l(u,i=>{if(a.o(e,n)&&(0!==(f=e[n])&&(e[n]=void 0),f)){var l=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;b.message="Loading chunk "+n+" failed.\n("+l+": "+s+")",b.name="ChunkLoadError",b.type=l,b.request=s,f[1](b)}},"chunk-"+n,n)}else e[n]=0},a.O.j=n=>0===e[n];var d=(n,c)=>{var b,o,[f,t,u]=c,i=0;if(f.some(s=>0!==e[s])){for(b in t)a.o(t,b)&&(a.m[b]=t[b]);if(u)var l=u(a)}for(n&&n(c);i<f.length;i++)a.o(e,o=f[i])&&e[o]&&e[o][0](),e[o]=0;return a.O(l)},r=self.webpackChunksakai_ng=self.webpackChunksakai_ng||[];r.forEach(d.bind(null,0)),r.push=d.bind(null,r.push.bind(r))})()})();