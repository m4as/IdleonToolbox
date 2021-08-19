(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[83],{3036:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return gn}});var i=e(2209),r=e(5893),a=e(2809),c=e(7294),s=e(9163),l=e(9009),o=e(163),u=e(5258),d=e(65),p=e(1423),x=e(7665);function m(){var n=(0,i.Z)(["\n  width: 85px;\n  height: 85px;\n  border: 1px solid #7b7b7b8c;\n  background: url(",") no-repeat;\n  background-size: contain;\n\n  //@media (max-width: 1440px) {\n  //  width: 85px;\n  //  height: 85px;\n  //}\n  //\n  //@media (max-width: 370px) {\n  //  width: 60px;\n  //  height: 60px;\n  //}\n  //\n  //@media (max-width: 370px) {\n  //  width: 60px;\n  //  height: 60px;\n  //}\n"]);return m=function(){return n},n}function h(){var n=(0,i.Z)(["\n  display: grid;\n  justify-content: center;\n  grid-template-columns: repeat(2, max-content);\n  grid-template-rows: repeat(4, 85px);\n"]);return h=function(){return n},n}var f=s.ZP.div(h()),v=s.ZP.div(m(),(function(n){var t=n.img;return"None"!==t?"".concat(x.O4,"materials/").concat(t,".png"):""})),g=function(n){var t=n.equipment;return(0,r.jsx)(f,{children:null===t||void 0===t?void 0:t.map((function(n,t){var e=n.name;return t>7?null:(0,r.jsx)(v,{"aria-label":e,role:"img",title:(0,x.Dq)(e),img:e},e+t)}))})};function j(){var n=(0,i.Z)(["\n  justify-self: center;\n  @media (max-width: 750px) {\n    img {\n      width: 48px;\n      height: 48px;\n    }\n  }\n\n  @media (max-width: 370px) {\n    img {\n      width: 36px;\n      height: 36px;\n    }\n  }\n"]);return j=function(){return n},n}var w=s.ZP.div(j()),y=function(n){var t=n.bubbles;return(0,r.jsx)(w,{children:null===t||void 0===t?void 0:t.map((function(n,t){var e="Sanic_Tools"===n?"Bug2":n;return(0,r.jsx)("img",{title:(0,x.Dq)(e),src:"".concat(x.O4,"alchemy/").concat(e,".png"),alt:""},n+t)}))})};function b(){var n=(0,i.Z)(["\n  justify-self: center;\n  margin-bottom: 5px;\n  text-align: center;\n\n  > div {\n    font-size: 16px;\n    @media (max-width: 370px) {\n      font-size: 12px;\n    }\n  }\n\n  > img {\n    width: 38px;\n    height: 36px;\n    @media (max-width: 370px) {\n      width: 24px;\n      height: 24px;\n    }\n  }\n"]);return b=function(){return n},n}function O(){var n=(0,i.Z)(["\n  display: grid;\n  grid-template-columns: repeat(3, minmax(45px, 70px));\n  grid-template-rows: repeat(3, minmax(45px, 70px));\n  grid-auto-flow: column;\n  justify-content: center;  \n"]);return O=function(){return n},n}var Z=s.ZP.div(O()),P=s.ZP.div(b()),N=function(n){var t,e=n.skills;return(0,r.jsx)(Z,{children:null===(t=Object.keys(e))||void 0===t?void 0:t.map((function(n,t){var i=e[n];return"character"===n?null:(0,r.jsxs)(P,{children:[(0,r.jsx)("img",{title:n.capitalize(),src:"".concat(x.O4,"icons/").concat(n.capitalize(),"_Icon.png"),alt:""}),(0,r.jsxs)("div",{children:["LV ",i]})]},t)}))})};function k(){var n=(0,i.Z)(["\n  filter: ",";\n  opacity: ",";\n  justify-self: center;\n  width: 48px;\n  height: 48px;\n\n  @media (max-width: 370px) {\n    width: 36px;\n    height: 36px;\n  }\n"]);return k=function(){return n},n}function S(){var n=(0,i.Z)(["\n  display: grid;\n  gap: 5px;\n  grid-template-columns: repeat(4, minmax(36px, max-content));\n  justify-self: center;\n"]);return S=function(){return n},n}function D(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,i)}return e}function _(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?D(Object(e),!0).forEach((function(t){(0,a.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):D(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var E=s.ZP.div(S()),q=s.ZP.img(k(),(function(n){return n.exists?"grayscale(0)":"grayscale(1)"}),(function(n){return n.exists?"1":"0.3"})),C=function(n){var t=n.bags,e=(0,c.useState)(),i=e[0],s=e[1];return(0,c.useEffect)((function(){s(t.reduce((function(n,t){var e=t.name;return _(_({},n),{},(0,a.Z)({},e,!0))}),{}))}),[]),(0,r.jsx)(E,{children:i&&(null===x.xw||void 0===x.xw?void 0:x.xw.map((function(n,t){return(0,r.jsx)(q,{exists:i[n],title:(0,x.Dq)(n),src:"".concat(x.O4,"checklist/").concat(n,".png"),alt:""},n+t)})))})};function I(){var n=(0,i.Z)(["\n  justify-self: center;\n  @media (max-width: 750px) {\n    img {\n      width: 48px;\n      height: 48px;\n    }\n  }\n\n  @media (max-width: 370px) {\n    img {\n      width: 36px;\n      height: 36px;\n    }\n  }\n"]);return I=function(){return n},n}var J=s.ZP.div(I()),z=function(n){var t=n.products;return(0,r.jsx)(J,{children:null===t||void 0===t?void 0:t.map((function(n,t){return(0,r.jsx)("img",{title:(0,x.Dq)(n),src:"".concat(x.O4,"materials/").concat(n,".png"),alt:""},n+t)}))})};function T(){var n=(0,i.Z)(["\n  justify-self: center;\n\n  .product-container {\n    position: relative;\n    display: inline-block;\n\n    .product-value {\n      position: absolute;\n      right: 0;\n      top: -5px;\n    }\n  }\n\n  @media (max-width: 750px) {\n    img {\n      width: 48px;\n      height: 48px;\n    }\n  }\n\n  @media (max-width: 370px) {\n    img {\n      width: 36px;\n      height: 36px;\n    }\n  }\n"]);return T=function(){return n},n}var B=s.ZP.div(T()),F=function(n){var t=n.products;return(0,r.jsx)(B,{children:null===t||void 0===t?void 0:t.map((function(n,t){var e=n.item,i=n.value;return(0,r.jsxs)("div",{className:"product-container",children:[(0,r.jsx)("span",{className:"product-value",children:(0,x.x6)(i)}),(0,r.jsx)("img",{title:(0,x.Dq)(e),src:"".concat(x.O4,"materials/").concat(e,".png"),alt:""})]},e+t)}))})};function U(){var n=(0,i.Z)(["\n  text-align: center;\n\n\n  .title {\n    color: #8181de;\n    font-weight: bold;\n  }\n\n  .star-signs-wrapper {\n    display: flex;\n    justify-content: center;\n\n    > div {\n      text-align: center;\n\n      > span {\n        margin: 0 5px;\n        display: block;\n\n        :nth-child(1) {\n          color: #3d85d0;\n          font-weight: bold;\n        }\n      }\n    }\n  }\n"]);return U=function(){return n},n}var L=s.ZP.div(U()),W=function(n){var t=n.signs;return(0,r.jsxs)(L,{children:[(0,r.jsx)("span",{className:"title",children:"Star Signs"}),(0,r.jsx)("div",{className:"star-signs-wrapper",children:null===t||void 0===t?void 0:t.map((function(n,t){var e=n.name,i=n.description;return"None"!==e?(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{children:(0,x.Dq)(e)}),(0,r.jsx)("span",{children:(0,x.Dq)(i)})]},e+t):null}))})]})};function X(){var n=(0,i.Z)(["\n  display: grid;\n  grid-template-columns: repeat(4, minmax(36px, 1fr));\n\n  img {\n    width: 52px;\n    height: 72px;\n    justify-self: center;\n  }\n\n  @media (max-width: 750px) {\n    img {\n      width: 48px;\n      height: 48px;\n    }\n  }\n\n  @media (max-width: 370px) {\n    img {\n      width: 36px;\n      height: 36px;\n    }\n  }\n"]);return X=function(){return n},n}var A=s.ZP.div(X()),M=function(n){var t=n.cards;return(0,r.jsx)(A,{children:null===t||void 0===t?void 0:t.map((function(n,t){var e=n.name,i=(n.stars,e.split("(",2)[0].trim().replace(/ /,"_"));return"None"!==i?(0,r.jsx)("img",{title:e,src:"".concat(x.O4,"cards/").concat(i,"_Card.png"),alt:""},i+t):null}))})};function V(){var n=(0,i.Z)(["\n  justify-self: center;\n\n  @media (max-width: 750px) {\n    img, .empty {\n      width: 48px;\n      height: 48px;\n    }\n  }\n\n  @media (max-width: 370px) {\n    img, .empty {\n      width: 36px;\n      height: 36px;\n    }\n  }\n"]);return V=function(){return n},n}var G=s.ZP.div(V()),H=function(n){var t=n.obols;return(0,r.jsx)(G,{children:null===t||void 0===t?void 0:t.map((function(n,t){var e=n.name;return"Empty"!==e?(0,r.jsx)("img",{title:(0,x.Dq)(e),src:"".concat(x.O4,"materials/").concat(e,".png"),alt:""},e+t):(0,r.jsx)("img",{title:(0,x.Dq)(e),src:"".concat(x.O4,"materials/Empty_Obol.png")},e+t)}))})};function K(){var n=(0,i.Z)(["\n  margin-bottom: 15px;\n\n  .character-profile {\n    display: flex;\n    align-items: center;\n    margin: 15px 0;\n    min-height: 110px;\n\n    .list & {\n      justify-content: center;\n    }\n\n    > img {\n      margin-right: 10px;\n    }\n\n    @media (max-width: 750px) {\n      justify-content: center;\n    }\n  }\n\n\n  .name {\n    font-weight: bold;\n    color: ",";\n  }\n\n  .character-information-container {\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    justify-content: center;\n    @media (max-width: 600px) {\n      grid-template-columns: 1fr;\n    }\n  }\n"]);return K=function(){return n},n}var Q=s.ZP.div(K(),(function(n){return n.classColor||"white"})),R=function(n){var t=n.name,e=n.level,i=n.class,a=n.equipment,c=n.tools,s=n.equippedBubbles,l=n.skillsInfo,o=n.invBagsUsed,u=n.anvil,d=n.printer,p=n.starSigns,m=n.cardsEquip,h=n.stats,f=n.obols,v=h.strength,j=h.agility,w=h.wisdom,b=h.luck;return(0,r.jsxs)(Q,{classColor:null===x.JU||void 0===x.JU?void 0:x.JU[i],children:[(0,r.jsxs)("div",{className:"character-profile",children:[(0,r.jsx)("img",{src:"".concat(x.O4,"classes/").concat(i,".png"),alt:""}),(0,r.jsxs)("div",{className:"info",children:[(0,r.jsxs)("div",{className:"name",children:["Name: ",t]}),(0,r.jsxs)("div",{children:["Level: ",e]}),(0,r.jsxs)("div",{children:["Class: ",i]}),(0,r.jsxs)("div",{children:["Str: ",v]}),(0,r.jsxs)("div",{children:["Agi: ",j]}),(0,r.jsxs)("div",{children:["Wis: ",w]}),(0,r.jsxs)("div",{children:["Luk: ",b]})]})]}),(0,r.jsxs)("div",{className:"character-information-container",children:[(0,r.jsx)(g,{equipment:a}),(0,r.jsx)(g,{equipment:c}),(0,r.jsx)(N,{skills:l}),(0,r.jsx)(C,{bags:o}),(0,r.jsx)(y,{bubbles:s}),(0,r.jsx)(z,{products:null===u||void 0===u?void 0:u.selected}),(0,r.jsx)(F,{products:null===d||void 0===d?void 0:d.selected}),(0,r.jsx)(W,{signs:p}),(0,r.jsx)(M,{cards:m}),(0,r.jsx)(H,{obols:f})]})]})},Y=e(809),$=e.n(Y),nn=e(266),tn=e(282),en=e(5477);function rn(){var n=(0,i.Z)(["\n  display: inline-flex;\n  align-items: center;\n"]);return rn=function(){return n},n}var an=s.ZP.div(rn()),cn=function(n){var t=n.handleImport,e=(0,c.useState)(!1),i=e[0],a=e[1],s=function(){var n=(0,nn.Z)($().mark((function n(){var e,i,r,c;return $().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a(!0),n.next=4,navigator.clipboard.read();case 4:return e=n.sent,n.next=7,e[0].getType("text/plain");case 7:return i=n.sent,n.next=10,i.text();case 10:r=n.sent,c=JSON.parse(r),t(c),a(!1),n.next=20;break;case 16:n.prev=16,n.t0=n.catch(0),console.log("Failed to load family JSON",n.t0),a(!1);case 20:case"end":return n.stop()}}),n,null,[[0,16]])})));return function(){return n.apply(this,arguments)}}();return(0,r.jsxs)(an,{children:[(0,r.jsx)(tn.Z,{variant:"contained",color:"primary",onClick:s,children:"Import JSON"}),i?(0,r.jsx)(en.Z,{size:"small",color:"secondary"}):null]})},sn=e(5080),ln=e(8362),on=e(3133),un=e(442),dn=e(7812);function pn(){var n=(0,i.Z)(["\n  && {\n    background-color: #545456;\n  }\n\n  & .MuiTabs-indicator {\n    background-color: #50ff00;\n  }\n"]);return pn=function(){return n},n}function xn(){var n=(0,i.Z)(["\n  color: white;\n\n  h1 {\n    color: white;\n    padding: 10px;\n    display: grid;\n    grid-template-columns: 135px 135px;\n  }\n\n  .view-icons {\n    display: flex;\n    justify-content: flex-end;\n  }\n\n  .tab-name {\n    display: flex;\n    align-items: center;\n  }\n\n  .characters {\n    display: grid;\n    gap: 1rem;\n    //grid-template-columns: repeat(auto-fit, minmax(580px, 1fr));\n    grid-template-columns: repeat(auto-fit,  minmax(580px, 1fr));\n    @media (max-width: 600px) {\n      grid-template-columns: 1fr;\n    }\n  }\n\n  .missing-json {\n    display: grid;\n\n    .missing-text {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n\n    > img {\n      place-self: center;\n    }\n  }\n\n"]);return xn=function(){return n},n}function mn(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,i)}return e}function hn(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?mn(Object(e),!0).forEach((function(t){(0,a.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):mn(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var fn=s.ZP.main(xn()),vn=(0,s.ZP)(d.Z)(pn()),gn=function(){var n,t,e,i=(0,c.useState)(null),a=i[0],s=i[1],d=(0,c.useState)(0),m=d[0],h=d[1],f=(0,c.useState)(),v=f[0],g=f[1];(0,c.useEffect)((function(){if(g(localStorage.getItem("view")||"dashboard"),!a)try{var n=localStorage.getItem("characterData"),t=JSON.parse(n);s(t)}catch(e){console.log("Failed to import family data from localStorage")}}),[]);var j=function(n){localStorage.setItem("view",n),g(n)};return(0,r.jsxs)(o.i,{children:[(0,r.jsx)(l.Z,{}),(0,r.jsxs)(fn,{view:v,children:[(0,r.jsxs)("h1",{children:["Family ",(0,r.jsx)(cn,{handleImport:function(n){s(n),localStorage.setItem("characterData",JSON.stringify(n))}})]}),(0,r.jsxs)("div",{className:"view-icons",children:[(0,r.jsx)(dn.Z,{onClick:function(){return j("dashboard")},"aria-label":"dashboard-view",title:"dashboard-view",children:(0,r.jsx)(un.Z,{})}),(0,r.jsx)(dn.Z,{onClick:function(){return j("list")},"aria-label":"list-view",title:"list-view",children:(0,r.jsx)(on.Z,{})})]}),"list"===v?(0,r.jsx)("div",{className:"characters list",children:null===a||void 0===a||null===(n=a.characters)||void 0===n?void 0:n.map((function(n,t){return(0,c.createElement)(R,hn(hn({},n),{},{key:t}))}))}):null,a?null:(0,r.jsxs)("div",{className:"missing-json",children:[(0,r.jsxs)("div",{className:"missing-text",children:[(0,r.jsx)("span",{children:"Please load your family JSON"}),(0,r.jsx)(sn.Z,{children:(0,r.jsx)(dn.Z,{children:(0,r.jsx)(ln.Z,{})})})]}),(0,r.jsx)("img",{src:"".concat(x.O4,"etc/Dr_Defecaus_Walking.gif"),alt:""})]}),"dashboard"===v&&a?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.Z,{position:"static",children:(0,r.jsx)(vn,{scrollButtons:"auto",variant:"scrollable",value:m,onChange:function(n,t){h(t)},children:null===a||void 0===a||null===(t=a.characters)||void 0===t?void 0:t.map((function(n,t){var e=n.name,i=n.class;return(0,r.jsx)(p.Z,{label:(0,r.jsxs)("div",{className:"tab-name",children:[(0,r.jsx)("img",{src:"".concat(x.O4,"icons/").concat(i,"_Icon.png"),alt:""}),e]})},e+t)}))})}),(0,r.jsx)("div",{className:"characters dashboard",children:null===a||void 0===a||null===(e=a.characters)||void 0===e?void 0:e.map((function(n,t){return t===m?(0,c.createElement)(R,hn(hn({},n),{},{key:t})):null}))})]}):null]})]})}},9294:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/family",function(){return e(3036)}])}},function(n){n.O(0,[793,769,871,774,888,179],(function(){return t=9294,n(n.s=t);var t}));var t=n.O();_N_E=t}]);