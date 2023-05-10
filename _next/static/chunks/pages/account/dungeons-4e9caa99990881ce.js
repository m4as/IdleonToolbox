(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5860],{9936:function(n,e,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/dungeons",function(){return l(8915)}])},3948:function(n,e,l){"use strict";var t=l(2729),r=l(5893),i=l(7294),o=l(6986),s=l(3913),d=l(9574),c=l(5934),u=l(5861);function a(){let n=(0,t._)(["\n  .overtime {\n    color: #f91d1d;\n  }\n"]);return a=function(){return n},n}let h=n=>{let{date:e,startDate:l,lastUpdated:t,type:c,pause:a,staticTime:h,placeholder:p,loop:j,variant:g="inherit"}=n,[v,Z]=(0,i.useState)();(0,i.useEffect)(()=>{if(e){if(h)return Z({...(0,d.getDuration)(new Date().getTime(),e)});let n=new Date,l=n.getTime()-(null!=t?t:0),r=(0,s.Z)(e);Z({...(0,d.getDuration)(null==n?void 0:n.getTime(),e+l*("countdown"===c?-1:1)),overtime:"countdown"===c&&r})}},[e,t]);let f=()=>{let{days:n,hours:e,minutes:l,seconds:t}=v;60===(t+=1)&&(t=0,60===(l+=1)&&(l=0,24===(e+=1)&&(n+=1))),Z({...v,days:n,hours:e,minutes:l,seconds:t})},w=()=>{let{days:n,hours:e,minutes:t,seconds:r}=v;if(0===n&&0===e&&0===t&&0===r&&j)return Z({...(0,d.getDuration)(new Date().getTime(),l)});-1==(r-=1)&&(r=59,-1==(t-=1)&&(t=59,-1==(e-=1)&&(e=0,n-=1))),Z({...v,days:n,hours:e,minutes:t,seconds:r})};(0,o.Z)(()=>{if(!v)return null;"countdown"!==c||(null==v?void 0:v.overtime)?f():w()},a||h?null:1e3);let m=n=>{let e=String(n);return(null==e?void 0:e.length)===1?"0".concat(n):n};return v?(0,r.jsx)(x,{children:((null==v?void 0:v.overtime)||a)&&p?p:(0,r.jsxs)(u.Z,{variant:g,className:"".concat((null==v?void 0:v.overtime)&&!j?"overtime":""),component:"span",children:[(null==v?void 0:v.days)?m(null==v?void 0:v.days)+"d:":"",m(null==v?void 0:v.hours)+"h:",m(null==v?void 0:v.minutes)+"m",(null==v?void 0:v.days)?"":":",(null==v?void 0:v.days)?"":m(null==v?void 0:v.seconds)+"s"]})}):null},x=c.Z.span(a());e.Z=h},8915:function(n,e,l){"use strict";l.r(e);var t=l(2729),r=l(5893),i=l(7294),o=l(5861),s=l(6447),d=l(7358),c=l(8895),u=l(2797),a=l(6242),h=l(4267),x=l(9574),p=l(9597),j=l(5934),g=l(3948),v=l(3508),Z=l(5039),f=l(2962);function w(){let n=(0,t._)(["\n  width: 25px;\n  object-fit: contain;\n"]);return w=function(){return n},n}let m=()=>{let{state:n}=(0,i.useContext)(p.I),{dungeons:e}=(null==n?void 0:n.account)||{},l=(0,i.useMemo)(()=>{var e;return(0,Z.IS)(null==n?void 0:null===(e=n.serverVars)||void 0===e?void 0:e.HappyHours)||[]},[n]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.PB,{title:"Idleon Toolbox | Dungeons",description:"Dungeon information including happy hour times, currency, upgrades and more"}),(0,r.jsx)(o.Z,{my:2,variant:"h2",children:"Dungeons"}),(0,r.jsxs)(s.Z,{direction:"row",flexWrap:"wrap",gap:4,children:[(0,r.jsxs)(y,{children:[(0,r.jsx)(_,{src:"".concat(x.prefix,"data/Dung_Rank").concat(null==e?void 0:e.rank,".png"),alt:""}),(0,r.jsxs)(s.Z,{children:[(0,r.jsxs)(o.Z,{children:["Rank: ",null==e?void 0:e.rank]}),(0,r.jsxs)(o.Z,{children:[null==e?void 0:e.progress," / ",null==e?void 0:e.rankReq]})]})]}),(0,r.jsxs)(y,{children:[(0,r.jsx)("img",{src:"".concat(x.prefix,"etc/boosted-runs.png"),alt:""}),(0,r.jsx)(o.Z,{children:null==e?void 0:e.boostedRuns}),(0,r.jsx)(_,{src:"".concat(x.prefix,"data/DungCredits1.png"),alt:""}),null==e?void 0:e.credits,(0,r.jsx)(_,{src:"".concat(x.prefix,"data/DungCredits2.png"),alt:""}),null==e?void 0:e.flurbos]})]}),(0,r.jsx)(s.Z,{my:2,direction:"row",gap:4,children:(0,r.jsxs)(d.Z,{children:[(0,r.jsx)(c.Z,{expandIcon:l.length>1?(0,r.jsx)(v.Z,{}):null,children:(0,r.jsxs)(s.Z,{direction:"row",gap:2,children:[(0,r.jsx)(o.Z,{children:"Next happy hour:"}),(null==l?void 0:l.length)>0?(0,r.jsx)(g.Z,{type:"countdown",date:null==l?void 0:l[0],lastUpdated:null==n?void 0:n.lastUpdated}):"waiting for lava to set them"]})}),l.length>1?(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(o.Z,{mb:1,children:"Future happy hours"}),(0,r.jsx)(s.Z,{gap:2,children:l.map((e,l)=>0===l?null:(0,r.jsxs)(s.Z,{direction:"row",gap:3,children:[(0,r.jsxs)(o.Z,{sx:{width:40},children:["#",l]}),(0,r.jsx)(g.Z,{date:e,lastUpdated:null==n?void 0:n.lastUpdated},"happy-".concat(l))]},"next-happy-hour-".concat(l)))})]}):null]})}),(0,r.jsxs)(s.Z,{direction:"row",flexWrap:"wrap",gap:4,children:[(0,r.jsx)(D,{upgrades:null==e?void 0:e.insideUpgrades}),(0,r.jsx)(D,{isFlurbo:!0,upgrades:null==e?void 0:e.upgrades})]})]})},y=n=>{let{column:e,sx:l={},children:t}=n;return(0,r.jsx)(a.Z,{sx:l,children:(0,r.jsx)(h.Z,{sx:{height:"100%",display:"flex"},children:(0,r.jsx)(s.Z,{direction:e?"column":"row",gap:1,justifyContent:"center",alignItems:"center",children:t})})})},_=j.Z.img(w()),D=n=>{let{isFlurbo:e,upgrades:l=[]}=n,t=n=>(0,x.growth)(null==n?void 0:n.func,null==n?void 0:n.level,null==n?void 0:n.x1,null==n?void 0:n.x2),i=n=>{let l=0;for(let t=n;t<(e?50:100);t++)l+=d(t);return l},d=n=>e?Math.floor(1+Math.pow(1.7*n,1.05)*Math.pow(1.027+(n-30)/(n+30)*.01*Math.floor((n+970)/1e3),n)):Math.floor(2+Math.pow(1.5*n,1.04)*Math.pow(1.024+(n-60)/(n+60)*.01*Math.floor((n+940)/1e3),n));return(0,r.jsxs)(s.Z,{children:[(0,r.jsxs)(o.Z,{my:2,variant:"h4",children:[e?"Flurbo":"Dungeon"," Upgrades"]}),(0,r.jsx)(s.Z,{gap:1,children:l.map((n,l)=>{let{level:c,type:u,effect:p}=n,j=c>=(e?50:100);return(0,r.jsx)(a.Z,{sx:{width:{md:450}},children:(0,r.jsx)(h.Z,{children:(0,r.jsxs)(s.Z,{direction:"row",justifyContent:"space-between",gap:2,children:[(0,r.jsxs)(s.Z,{children:[(0,r.jsxs)(o.Z,{children:["+",t(n),"%"===u?u:""," ",(0,x.cleanUnderscore)(p)]}),(0,r.jsx)(o.Z,{color:j?"success.light":"",children:j?"MAXED":"Lv. ".concat(c," / ").concat(e?50:100)})]}),(0,r.jsxs)(s.Z,{direction:"row",gap:3,children:[(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(o.Z,{color:"info.light",children:"Cost"}),(0,r.jsx)(o.Z,{children:d(c)})]}),(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(o.Z,{color:"info.light",children:"Cost to max"}),(0,r.jsx)(o.Z,{children:i(c)})]})]})]})})},"".concat(p,"-").concat(l))})})]})};e.default=m}},function(n){n.O(0,[1927,9774,2888,179],function(){return n(n.s=9936)}),_N_E=n.O()}]);