(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7603],{2154:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/world-5/gaming",function(){return t(3573)}])},3948:function(n,e,t){"use strict";var r=t(2729),i=t(5893),c=t(7294),l=t(6986),s=t(3913),a=t(9574),o=t(5934),d=t(5861);function x(){let n=(0,r._)(["\n  .overtime {\n    color: #f91d1d;\n  }\n"]);return x=function(){return n},n}let u=n=>{let{date:e,startDate:t,lastUpdated:r,type:o,pause:x,staticTime:u,placeholder:j,loop:p,variant:g="inherit"}=n,[m,Z]=(0,c.useState)();(0,c.useEffect)(()=>{if(e){if(u)return Z({...(0,a.getDuration)(new Date().getTime(),e)});let n=new Date,t=n.getTime()-(null!=r?r:0),i=(0,s.Z)(e);Z({...(0,a.getDuration)(null==n?void 0:n.getTime(),e+t*("countdown"===o?-1:1)),overtime:"countdown"===o&&i})}},[e,r]);let f=()=>{let{days:n,hours:e,minutes:t,seconds:r}=m;60===(r+=1)&&(r=0,60===(t+=1)&&(t=0,24===(e+=1)&&(n+=1))),Z({...m,days:n,hours:e,minutes:t,seconds:r})},v=()=>{let{days:n,hours:e,minutes:r,seconds:i}=m;if(0===n&&0===e&&0===r&&0===i&&p)return Z({...(0,a.getDuration)(new Date().getTime(),t)});-1==(i-=1)&&(i=59,-1==(r-=1)&&(r=59,-1==(e-=1)&&(e=0,n-=1))),Z({...m,days:n,hours:e,minutes:r,seconds:i})};(0,l.Z)(()=>{if(!m)return null;"countdown"!==o||(null==m?void 0:m.overtime)?f():v()},x||u?null:1e3);let w=n=>{let e=String(n);return(null==e?void 0:e.length)===1?"0".concat(n):n};return m?(0,i.jsx)(h,{children:((null==m?void 0:m.overtime)||x)&&j?j:(0,i.jsxs)(d.Z,{variant:g,className:"".concat((null==m?void 0:m.overtime)&&!p?"overtime":""),component:"span",children:[(null==m?void 0:m.days)?w(null==m?void 0:m.days)+"d:":"",w(null==m?void 0:m.hours)+"h:",w(null==m?void 0:m.minutes)+"m",(null==m?void 0:m.days)?"":":",(null==m?void 0:m.days)?"":w(null==m?void 0:m.seconds)+"s"]})}):null},h=o.Z.span(x());e.Z=u},5164:function(n,e,t){"use strict";t.d(e,{Gr:function(){return B},M5:function(){return m},Wd:function(){return U},iy:function(){return v},j8:function(){return f},u3:function(){return _},uQ:function(){return Z}});var r=t(2729),i=t(5893),c=t(7294),l=t(9574),s=t(6447),a=t(5861),o=t(1594),d=t(5934),x=t(1053),u=t(510);function h(){let n=(0,r._)(["\n  & .MuiBadge-badge {\n    background-color: #d5d5dc;\n    color: rgba(0, 0, 0, 0.87);\n  }\n"]);return h=function(){return n},n}function j(){let n=(0,r._)(["\n  height: 20px;\n  object-fit: contain;\n"]);return j=function(){return n},n}function p(){let n=(0,r._)(["\n  width: 56px;\n  height: 72px;\n  object-fit: contain;\n  opacity: ",";\n"]);return p=function(){return n},n}function g(){let n=(0,r._)(["\n  position: absolute;\n  left: 50%;\n  top: -3px;\n  pointer-events: none;\n  transform: translateX(-50%);\n"]);return g=function(){return n},n}let m=(0,c.forwardRef)((n,e)=>{let{stat:t,icon:r}=n,{img:c,...o}=n;return(0,i.jsxs)(s.Z,{alignItems:"center",...o,ref:e,style:{position:"relative",width:"fit-content"},children:[(0,i.jsx)("img",{...c,src:"".concat(l.prefix,"data/").concat(r,".png"),alt:""}),(0,i.jsx)(a.Z,{variant:"body1",component:"span",children:t})]})});m.displayName="IconWithText";let Z=n=>{let{title:e,value:t,boldTitle:r}=n;return(0,i.jsxs)(s.Z,{direction:"row",flexWrap:"wrap",alignItems:"center",children:[e?(0,i.jsxs)(a.Z,{fontWeight:r?"bold":500,component:"span",children:[e,":\xa0"]}):null,(0,i.jsx)(a.Z,{fontSize:15,component:"span",children:t})]})},f=(0,d.Z)(o.Z)(h()),v=n=>{let{cardName:e,stars:t,cardIndex:r,name:c,variant:s,rawName:a,amount:o,nextLevelReq:d}=n,u="cardSet"===s?"".concat(l.prefix,"data/").concat(a,".png"):"".concat(l.prefix,"data/2Cards").concat(r,".png");return(0,i.jsxs)(i.Fragment,{children:[t>0?(0,i.jsx)(I,{src:"".concat(l.prefix,"data/CardEquipBorder").concat(t,".png"),alt:""}):null,(0,i.jsx)(x.Z,{title:(0,i.jsx)(w,{...n,cardName:"cardSet"===s?c:e,nextLevelReq:d,amount:o}),children:(0,i.jsx)(y,{isCardSet:"cardSet"===s,amount:o,src:u,alt:""})})]})},w=n=>{let{displayName:e,effect:t,bonus:r,stars:c,showInfo:o,nextLevelReq:d,amount:x}=n,h=r;return o&&(h=(0,u.BZ)({bonus:r,stars:c})),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.Z,{fontWeight:"bold",variant:"h6",children:(0,l.cleanUnderscore)(e)}),(0,i.jsx)(a.Z,{children:(0,l.cleanUnderscore)(t.replace("{",h))}),o?(0,i.jsx)(s.Z,{mt:1,direction:"row",gap:1,flexWrap:"wrap",children:[1,2,3,4,5].map((n,t)=>(0,i.jsxs)(s.Z,{alignItems:"center",justifyContent:"space-between",children:[0===t?(0,i.jsx)(a.Z,{children:"Base"}):(0,i.jsx)(b,{src:"".concat(l.prefix,"etc/Star").concat(t,".png"),alt:""}),(0,i.jsx)(a.Z,{children:r*(t+1)})]},"".concat(e,"-").concat(t)))}):null,d>0?(0,i.jsxs)(s.Z,{children:["Progress: ",x," / ",d]}):null]})},b=d.Z.img(j()),y=d.Z.img(p(),n=>{let{amount:e,isCardSet:t}=n;return e||t?1:.5}),I=d.Z.img(g()),_=n=>{let{level:e,funcX:t,x1:r,x2:c,funcY:o,y1:d,y2:x,description:u,name:h,talentId:j}=n,p=e>0?(0,l.growth)(t,e,r,c):0,g=e>0?(0,l.growth)(o,e,d,x):0;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.Z,{direction:"row",alignItems:"center",gap:1,children:[(0,i.jsx)("img",{src:"".concat(l.prefix,"data/UISkillIcon").concat(j,".png"),alt:""}),(0,i.jsx)(a.Z,{fontWeight:"bold",variant:"h6",children:(0,l.cleanUnderscore)(h)})]}),(0,i.jsx)(a.Z,{children:(0,l.cleanUnderscore)(u).replace("{",p).replace("}",g)})]})},U=n=>{let{players:e,characters:t}=n;return(0,i.jsx)(s.Z,{gap:1,direction:"row",children:e.map(n=>{var e;let{index:r}=n;return(0,i.jsx)(x.Z,{title:null==t?void 0:null===(e=t[r])||void 0===e?void 0:e.name,children:(0,i.jsx)("img",{src:"".concat(l.prefix,"data/headBIG.png"),alt:""})},name+"-head-"+r)})})},B=n=>{let{name:e}=n;return(0,i.jsxs)(a.Z,{variant:"h3",children:["Your account is missing data for ",e]})}},3573:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return S}});var r=t(5893),i=t(7294),c=t(9597),l=t(8396),s=t(5861),a=t(1703),o=t(44),d=t(5164),x=t(2962),u=t(2729),h=t(6447),j=t(6242),p=t(4267),g=t(7720),m=t(9574),Z=t(3948),f=t(1053),v=t(5789),w=t(5934);function b(){let n=(0,u._)(["\n  width: 50px;\n"]);return b=function(){return n},n}let y=n=>{let{bits:e,availableSprouts:t,availableDrops:i,sproutsCapacity:c,fertilizerUpgrades:l,imports:a,lastShovelClicked:o,goldNuggets:d,lastAcornClicked:x,acorns:u,nuggetsBreakpoints:w,acornsBreakpoints:b,lastUpdated:y}=n;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(h.Z,{direction:"row",gap:2,children:[(0,r.jsx)(j.Z,{sx:{width:250,display:"flex",alignItems:"center"},children:(0,r.jsx)(p.Z,{children:(0,r.jsxs)(h.Z,{direction:"row",gap:1,alignItems:"center",children:[(0,r.jsx)("img",{src:"".concat(m.prefix,"etc/Bits_").concat((0,m.getBitIndex)(e),".png"),alt:""}),(0,r.jsx)(s.Z,{children:(0,m.notateNumber)(e,"bits")})]})})}),(0,r.jsx)(j.Z,{sx:{width:250,display:"flex",alignItems:"center"},children:(0,r.jsx)(p.Z,{children:(0,r.jsxs)(h.Z,{direction:"row",gap:1,alignItems:"center",children:[(0,r.jsx)("img",{src:"".concat(m.prefix,"etc/Sprouts.png"),alt:""}),(0,r.jsxs)(s.Z,{children:[t," / ",null!=c?c:0]})]})})}),(0,r.jsx)(j.Z,{sx:{width:250,display:"flex",alignItems:"center"},children:(0,r.jsx)(p.Z,{children:(0,r.jsxs)(h.Z,{direction:"row",gap:1,alignItems:"center",children:[(0,r.jsx)("img",{src:"".concat(m.prefix,"etc/GamingDrop.png"),alt:""}),(0,r.jsxs)(s.Z,{children:[i," / ",null!=c?c:0]})]})})})]}),(0,r.jsx)(h.Z,{mt:2,direction:"row",flexWrap:"wrap",gap:2,children:null==l?void 0:l.map(n=>{let{name:e,level:t,description:i,cost:c}=n;return(0,r.jsx)(j.Z,{sx:{width:250},children:(0,r.jsxs)(p.Z,{children:[(0,r.jsxs)(h.Z,{direction:"row",gap:2,children:[(0,r.jsx)(s.Z,{sx:{width:120},children:(0,m.cleanUnderscore)(e)}),(0,r.jsxs)(s.Z,{children:["Lv. ",t]})]}),(0,r.jsx)(s.Z,{mt:1,children:(0,m.cleanUnderscore)(i)}),(0,r.jsxs)(h.Z,{mt:1,direction:"row",gap:1,alignItems:"center",children:[(0,r.jsx)("img",{src:"".concat(m.prefix,"etc/Bits_").concat((0,m.getBitIndex)(c),".png"),alt:"",style:{objectFit:"contain"}}),(0,r.jsx)(s.Z,{children:(0,m.notateNumber)(c,"bits")})]})]})},e)})}),(0,r.jsx)(s.Z,{variant:"h3",my:3,children:"Imports"}),(0,r.jsx)(h.Z,{mt:2,direction:"row",flexWrap:"wrap",gap:2,children:null==a?void 0:a.map((n,e)=>{let{boxName:t,boxDescription:i,name:c,description:l,majorBonus:a,minorBonus:U,cost:B,rawName:S,saveSprinklerChance:k,acquired:N,acornShop:W,maxNuggetValue:F,level:T}=n;return(0,r.jsx)(j.Z,{sx:{width:380},variant:N?"elevation":"outlined",children:(0,r.jsxs)(p.Z,{children:[(0,r.jsxs)(h.Z,{sx:{minHeight:200},children:[(0,r.jsxs)(h.Z,{direction:"row",alignItems:"center",gap:2,children:[(0,r.jsx)(_,{src:"".concat(m.prefix,"data/").concat(S,".png"),alt:""}),(0,r.jsxs)(s.Z,{children:[(0,m.cleanUnderscore)(c)," (",(0,m.cleanUnderscore)(t),")"]})]}),(0,r.jsx)(g.Z,{sx:{my:2}}),a?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.Z,{children:[" ",(0,m.cleanUnderscore)(a.split("|").join(" "))]}),(0,r.jsx)(g.Z,{sx:{my:2}})," "]}):null,(0,r.jsx)(s.Z,{children:(0,m.cleanUnderscore)(U)}),(0,r.jsxs)(h.Z,{mt:1,direction:"row",gap:1,alignItems:"center",children:[(0,r.jsx)("img",{src:"".concat(m.prefix,"etc/Bits_").concat((0,m.getBitIndex)(B),".png"),alt:"",style:{objectFit:"contain"}}),(0,r.jsx)(s.Z,{children:(0,m.notateNumber)(B,"bits")})]}),N&&(1===e||2===e)?(0,r.jsx)(g.Z,{sx:{my:2}}):null,N&&1===e?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(h.Z,{mt:1,direction:"row",gap:1,children:[(0,r.jsx)(Z.Z,{date:new Date().getTime()-1e3*o,lastUpdated:y}),(0,r.jsx)(f.Z,{title:(0,r.jsx)(I,{breakpoints:w}),children:(0,r.jsx)(v.Z,{})})]}),(0,r.jsxs)(s.Z,{children:["# of nuggets: ",d]}),(0,r.jsxs)(s.Z,{children:["Max roll possible: ",F]})]}):null,N&&2===e?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(h.Z,{mt:1,direction:"row",gap:1,children:[(0,r.jsx)(Z.Z,{date:new Date().getTime()-1e3*x,lastUpdated:y}),(0,r.jsx)(f.Z,{title:(0,r.jsx)(I,{breakpoints:b}),children:(0,r.jsx)(v.Z,{})})]}),(0,r.jsxs)(s.Z,{children:["# of acorns: ",u]})]}):null,k?(0,r.jsxs)(s.Z,{children:["Save sprinkler chance: ",k,"%"]}):null,W?(0,r.jsxs)(h.Z,{children:[(0,r.jsx)(g.Z,{sx:{my:2}}),(0,r.jsx)(s.Z,{children:"Acorn Shop"}),(0,r.jsx)(h.Z,{direction:"row",gap:3,children:null==W?void 0:W.map((n,e)=>{let{cost:t,bonus:i,description:c}=n;return(0,r.jsx)(h.Z,{children:(0,r.jsxs)(h.Z,{children:[(0,r.jsx)(s.Z,{children:c}),(0,r.jsxs)(s.Z,{children:["Cost: ",t]})]})},"corn-"+e)})})]}):null,(0,r.jsx)(g.Z,{sx:{my:2}})]}),(0,r.jsxs)(h.Z,{mt:"auto",children:[(0,r.jsx)(s.Z,{mb:1,variant:"body2",children:"Box info"}),(0,r.jsxs)(h.Z,{children:[(0,r.jsx)(s.Z,{variant:"caption",children:(0,m.cleanUnderscore)(i)}),(0,r.jsx)(s.Z,{mt:1,variant:"caption",children:(0,m.cleanUnderscore)(l)})]})]})]})},c)})})]})},I=n=>{let{breakpoints:e}=n;return(0,r.jsxs)(h.Z,{children:[(0,r.jsx)(s.Z,{sx:{fontWeight:"bold"},children:"Breakpoints"}),null==e?void 0:e.map((n,e)=>{let{time:t,amount:i}=n,c=Math.round(t/3600%1*60);return(0,r.jsxs)(h.Z,{direction:"row",gap:2,children:[(0,r.jsxs)(s.Z,{sx:{width:100},children:["".concat(Math.floor(t/3600),"h"),c>0?":".concat(c,"m"):""]}),(0,r.jsx)(s.Z,{children:i})]},"bp-".concat(e))})]})},_=w.Z.img(b()),U=n=>{let{superbits:e}=n;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(h.Z,{gap:1,direction:"row",flexWrap:"wrap",children:null==e?void 0:e.map((n,e)=>{var t;let{name:i,description:c,unlocked:l,bonus:a,totalBonus:o,additionalInfo:d}=n;return(0,r.jsx)(j.Z,{sx:{width:300,border:l?"1px solid #81c784":"",opacity:l?1:.5},children:(0,r.jsxs)(p.Z,{children:[(0,r.jsx)(s.Z,{children:(0,m.cleanUnderscore)(i.capitalize())}),(0,r.jsx)(s.Z,{sx:{mt:2},children:(0,m.cleanUnderscore)(null===(t=null==c?void 0:c.replace("}",a))||void 0===t?void 0:t.replace("{",(0,m.notateNumber)(o)))}),d?(0,r.jsx)(s.Z,{sx:{mt:2},children:(0,m.cleanUnderscore)(d)}):null]})},i+"".concat(e))})})})},B=()=>{var n,e,t;let{state:u}=(0,i.useContext)(c.I),{superbitsUpgrades:h}=(null==u?void 0:null===(n=u.account)||void 0===n?void 0:n.gaming)||{},[j,p]=(0,i.useState)(0),g=(0,l.Z)(n=>n.breakpoints.down("md"),{noSsr:!0});if(!(null==u?void 0:null===(e=u.account)||void 0===e?void 0:e.gaming))return(0,r.jsx)(d.Gr,{name:"gaming"});let m=(n,e)=>{p(e)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x.PB,{title:"Idleon Toolbox | Gaming",description:"Keep track of your gaming upgrades including dirty shovel and autumn squirrel timers"}),(0,r.jsx)(s.Z,{variant:"h2",textAlign:"center",mb:3,children:"Gaming"}),(0,r.jsx)(a.Z,{centered:!0,sx:{marginBottom:3},variant:g?"fullWidth":"standard",value:j,onChange:m,children:["General","Superbits"].map((n,e)=>(0,r.jsx)(o.Z,{label:n},"".concat(n,"-").concat(e)))}),0===j?(0,r.jsx)(y,{...null==u?void 0:null===(t=u.account)||void 0===t?void 0:t.gaming,lastUpdated:null==u?void 0:u.lastUpdated}):null,1===j?(0,r.jsx)(U,{superbits:h}):null]})};var S=B}},function(n){n.O(0,[9912,6384,9774,2888,179],function(){return n(n.s=2154)}),_N_E=n.O()}]);