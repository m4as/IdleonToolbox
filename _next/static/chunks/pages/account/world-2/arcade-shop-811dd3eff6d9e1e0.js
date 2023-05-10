(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5696],{6242:function(t,e,n){"use strict";n.d(e,{Z:function(){return Z}});var r=n(7462),o=n(3366),i=n(7294),a=n(6010),l=n(4780),d=n(948),s=n(1657),c=n(5113),u=n(4867);function f(t){return(0,u.Z)("MuiCard",t)}(0,n(1588).Z)("MuiCard",["root"]);var v=n(5893);let h=["className","raised"],p=t=>{let{classes:e}=t;return(0,l.Z)({root:["root"]},f,e)},m=(0,d.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:(t,e)=>e.root})(()=>({overflow:"hidden"})),x=i.forwardRef(function(t,e){let n=(0,s.Z)({props:t,name:"MuiCard"}),{className:i,raised:l=!1}=n,d=(0,o.Z)(n,h),c=(0,r.Z)({},n,{raised:l}),u=p(c);return(0,v.jsx)(m,(0,r.Z)({className:(0,a.Z)(u.root,i),elevation:l?8:void 0,ref:e,ownerState:c},d))});var Z=x},4267:function(t,e,n){"use strict";n.d(e,{Z:function(){return x}});var r=n(7462),o=n(3366),i=n(7294),a=n(6010),l=n(4780),d=n(948),s=n(1657),c=n(4867);function u(t){return(0,c.Z)("MuiCardContent",t)}(0,n(1588).Z)("MuiCardContent",["root"]);var f=n(5893);let v=["className","component"],h=t=>{let{classes:e}=t;return(0,l.Z)({root:["root"]},u,e)},p=(0,d.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(t,e)=>e.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),m=i.forwardRef(function(t,e){let n=(0,s.Z)({props:t,name:"MuiCardContent"}),{className:i,component:l="div"}=n,d=(0,o.Z)(n,v),c=(0,r.Z)({},n,{component:l}),u=h(c);return(0,f.jsx)(p,(0,r.Z)({as:l,className:(0,a.Z)(u.root,i),ownerState:c,ref:e},d))});var x=m},133:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/world-2/arcade-shop",function(){return n(8835)}])},8835:function(t,e,n){"use strict";n.r(e);var r=n(2729),o=n(5893),i=n(6447),a=n(5861),l=n(6242),d=n(4267),s=n(7294),c=n(9597),u=n(9574),f=n(5934),v=n(7780),h=n(2962);function p(){let t=(0,r._)(["\n  width: 62px;\n  height: 62px;\n"]);return p=function(){return t},t}function m(){let t=(0,r._)(["\n  width: 24px;\n  height: 24px;\n  ","\n"]);return m=function(){return t},t}let x=()=>{var t;let{state:e}=(0,s.useContext)(c.I),{balls:n,goldBalls:r,shop:f}=null==e?void 0:null===(t=e.account)||void 0===t?void 0:t.arcade,p=t=>{var n,r,o,i,a;let l=(null===(n=null==e?void 0:null===(r=e.account)||void 0===r?void 0:null===(o=r.lab)||void 0===o?void 0:null===(i=o.labBonuses)||void 0===i?void 0:i.find(t=>"Certified_Stamp_Book"===t.name))||void 0===n?void 0:n.active)?2:1,d=(0,v.fE)(null==e?void 0:null===(a=e.account)||void 0===a?void 0:a.stamps,"misc","StampC5",0,l);return Math.round(Math.max(.6,1-d/100)*(5+(3*t+Math.pow(t,1.3))))},m=t=>{let e=0;for(let n=t;n<100;n++)e+=p(n);return e};return(0,o.jsxs)(i.Z,{children:[(0,o.jsx)(h.PB,{title:"Idleon Toolbox | Arcade Shop",description:"Arcade shop upgrades, balls and golden balls"}),(0,o.jsx)(a.Z,{variant:"h2",mb:3,children:"Arcade Shop"}),(0,o.jsx)(i.Z,{direction:"row",gap:2,children:[n,r].map((t,e)=>(0,o.jsx)(l.Z,{children:(0,o.jsx)(d.Z,{children:(0,o.jsxs)(i.Z,{direction:"row",alignItems:"center",gap:1,children:[(0,o.jsx)(g,{gold:1===e,src:"".concat(u.prefix,"data/PachiBall").concat(e,".png"),alt:""}),t]})})},e))}),(0,o.jsx)(i.Z,{mt:2,direction:"row",flexWrap:"wrap",gap:2,children:null==f?void 0:f.map((t,e)=>{let{level:n,effect:r,active:i,iconName:a,bonus:s}=t,c=(0,u.cleanUnderscore)(r.replace("{",(0,u.notateNumber)(s,"Small"))),f=p(n),v=m(n);return(0,o.jsxs)(l.Z,{sx:{width:{xs:150,md:350},display:"flex",flexDirection:{xs:"column",sm:"column",md:"row"}},children:[(0,o.jsx)(Z,{style:{margin:16,justifySelf:"center",alignSelf:"center",filter:i?"unset":"grayscale(1)"},src:"".concat(u.prefix,"data/").concat(a,".png")}),(0,o.jsxs)(d.Z,{children:[(0,o.jsxs)("div",{style:{fontWeight:"bold"},children:["Effect: ",c]}),100!==n?(0,o.jsxs)("div",{children:["Lv: ",n," / 100"]}):(0,o.jsx)("div",{className:"done",children:"MAXED"}),(0,o.jsxs)("div",{children:["Cost: ",(0,u.kFormatter)(f,2)]}),(0,o.jsxs)("div",{children:["Cost to max: ",(0,u.kFormatter)(v,2)]})]})]},"".concat(a,"-").concat(e))})})]})},Z=f.Z.img(p()),g=f.Z.img(m(),t=>{let{gold:e}=t;return e?"filter: hue-rotate(70deg) brightness(2);":""});e.default=x}},function(t){t.O(0,[9774,2888,179],function(){return t(t.s=133)}),_N_E=t.O()}]);