(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7339],{435:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/world-1/anvil",function(){return t(8362)}])},6554:function(n,e,t){"use strict";var l=t(5893),i=t(7357),r=t(1458),o=t(5861);t(7294);let d=n=>{let{percent:e,bgColor:t,label:d=!0,sx:a,pre:s}=n;return(0,l.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center"},children:[s,(0,l.jsx)(i.Z,{sx:{width:"100%",mr:1},children:(0,l.jsx)(r.Z,{sx:{width:"100%",height:10,borderRadius:5,"& .MuiLinearProgress-bar":{backgroundColor:t||""},...a},variant:"determinate",value:e>100?100:e})}),d?(0,l.jsx)(i.Z,{children:(0,l.jsx)(o.Z,{variant:"body2",color:"text.secondary",children:"".concat(Math.round(e),"%")})}):null]})};e.Z=d},3948:function(n,e,t){"use strict";var l=t(2729),i=t(5893),r=t(7294),o=t(6986),d=t(3913),a=t(9574),s=t(5934),c=t(5861);function u(){let n=(0,l._)(["\n  .overtime {\n    color: #f91d1d;\n  }\n"]);return u=function(){return n},n}let v=n=>{let{date:e,startDate:t,lastUpdated:l,type:s,pause:u,staticTime:v,placeholder:x,loop:m,variant:p="inherit"}=n,[f,g]=(0,r.useState)();(0,r.useEffect)(()=>{if(e){if(v)return g({...(0,a.getDuration)(new Date().getTime(),e)});let n=new Date,t=n.getTime()-(null!=l?l:0),i=(0,d.Z)(e);g({...(0,a.getDuration)(null==n?void 0:n.getTime(),e+t*("countdown"===s?-1:1)),overtime:"countdown"===s&&i})}},[e,l]);let j=()=>{let{days:n,hours:e,minutes:t,seconds:l}=f;60===(l+=1)&&(l=0,60===(t+=1)&&(t=0,24===(e+=1)&&(n+=1))),g({...f,days:n,hours:e,minutes:t,seconds:l})},Z=()=>{let{days:n,hours:e,minutes:l,seconds:i}=f;if(0===n&&0===e&&0===l&&0===i&&m)return g({...(0,a.getDuration)(new Date().getTime(),t)});-1==(i-=1)&&(i=59,-1==(l-=1)&&(l=59,-1==(e-=1)&&(e=0,n-=1))),g({...f,days:n,hours:e,minutes:l,seconds:i})};(0,o.Z)(()=>{if(!f)return null;"countdown"!==s||(null==f?void 0:f.overtime)?j():Z()},u||v?null:1e3);let w=n=>{let e=String(n);return(null==e?void 0:e.length)===1?"0".concat(n):n};return f?(0,i.jsx)(h,{children:((null==f?void 0:f.overtime)||u)&&x?x:(0,i.jsxs)(c.Z,{variant:p,className:"".concat((null==f?void 0:f.overtime)&&!m?"overtime":""),component:"span",children:[(null==f?void 0:f.days)?w(null==f?void 0:f.days)+"d:":"",w(null==f?void 0:f.hours)+"h:",w(null==f?void 0:f.minutes)+"m",(null==f?void 0:f.days)?"":":",(null==f?void 0:f.days)?"":w(null==f?void 0:f.seconds)+"s"]})}):null},h=s.Z.span(u());e.Z=v},8362:function(n,e,t){"use strict";t.r(e);var l=t(2729),i=t(5893),r=t(7294),o=t(9597),d=t(5861),a=t(6447),s=t(6242),c=t(4267),u=t(1594),v=t(9574),h=t(3948),x=t(5934),m=t(6554),p=t(2421),f=t(2962);function g(){let n=(0,l._)(["\n  width: 42px;\n  height: 42px;\n"]);return g=function(){return n},n}let j=()=>{let{state:n}=(0,r.useContext)(o.I),{anvil:e}=(null==n?void 0:n.account)||{};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f.PB,{title:"Idleon Toolbox | Anvil",description:"Keep track of your characters anvil production"}),(0,i.jsx)(d.Z,{variant:"h2",mb:3,children:"Anvil"}),(0,i.jsx)(a.Z,{gap:3,children:null==e?void 0:e.map((e,t)=>{var l,r,o,x,f,g,j,w,y,_,b,C,I,T,M,D;let E=null==n?void 0:null===(l=n.characters)||void 0===l?void 0:null===(r=l[t])||void 0===r?void 0:r.classIndex,k=null==n?void 0:null===(o=n.characters)||void 0===o?void 0:null===(x=o[t])||void 0===x?void 0:x.name,N=null===(f=null==n?void 0:null===(g=n.characters)||void 0===g?void 0:g[t].skillsInfo)||void 0===f?void 0:null===(j=f.smithing)||void 0===j?void 0:j.level,{availablePoints:A,pointsFromCoins:P,pointsFromMats:S}=(null==n?void 0:null===(w=n.characters)||void 0===w?void 0:null===(y=w[t])||void 0===y?void 0:null===(_=y.anvil)||void 0===_?void 0:_.stats)||{},H=null==n?void 0:null===(b=n.characters)||void 0===b?void 0:null===(C=b[t])||void 0===C?void 0:C.afkTime,R=null==n?void 0:null===(I=n.characters)||void 0===I?void 0:null===(T=I[t])||void 0===T?void 0:null===(M=T.equippedBubbles)||void 0===M?void 0:M.find(n=>{let{bubbleName:e}=n;return"HAMMER_HAMMER"===e}),B=null==e?void 0:null===(D=e.production)||void 0===D?void 0:D.filter(n=>{let{hammers:e}=n;return e>0}),F=null==B?void 0:B.reduce((n,e)=>{let{hammers:t}=e;return n+t},0),L=F===(R?3:2)?B:(0,v.fillArrayToLength)(F,B);return(0,i.jsx)(s.Z,{sx:{width:{xs:"100%",lg:700}},children:(0,i.jsx)(c.Z,{children:(0,i.jsxs)(a.Z,{sx:{flexDirection:{xs:"column",md:"row"}},alignItems:"center",gap:2,children:[(0,i.jsxs)(a.Z,{sx:{width:175,textAlign:"center",flexDirection:{xs:"column",md:"row"}},alignItems:"center",gap:2,children:[(0,i.jsx)(a.Z,{alignItems:"center",justifyContent:"center",children:(0,i.jsx)("img",{className:"class-icon",src:"".concat(v.prefix,"data/ClassIcons").concat(E,".png"),alt:""})}),(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(d.Z,{className:"character-name",children:k}),(0,i.jsxs)(d.Z,{variant:"caption",children:["Smithing lv. ",N]}),(0,i.jsxs)(d.Z,{variant:"caption",color:0===A?"":A>0?"error.light":"secondary",children:["Points ",P+S-A," / ",P+S]})]})]}),(0,i.jsx)(a.Z,{sx:{justifyContent:{xs:"center",md:"flex-start"}},direction:"row",alignItems:"center",flexWrap:"wrap",gap:3,children:null==L?void 0:L.map((t,l)=>{var r,o,x;let{rawName:f,hammers:g,currentAmount:j,currentProgress:w,time:y}=t,_=(new Date().getTime()-H)/1e3,b=Math.min(Math.round(j+(w+_*(null==e?void 0:null===(r=e.stats)||void 0===r?void 0:r.anvilSpeed)/3600)/y*(null!=g?g:0)),null==e?void 0:null===(o=e.stats)||void 0===o?void 0:o.anvilCapacity),C=Math.round(b/(null==e?void 0:null===(x=e.stats)||void 0===x?void 0:x.anvilCapacity)*100),I=(0,p.MH)({...t,anvil:e,afkTime:H});return(0,i.jsx)(s.Z,{elevation:5,sx:{boxShadow:g>0?"inherit":"0px 0px 5px #ff0707"},children:(0,i.jsx)(c.Z,{children:g>0?(0,i.jsxs)(a.Z,{sx:{width:90,height:65},justifyContent:"flex-start",alignItems:"center",children:[(0,i.jsx)(u.Z,{color:"secondary",variant:"standard",badgeContent:g>1?g:0,children:(0,i.jsx)(Z,{src:"".concat(v.prefix,"data/").concat(f,".png"),alt:""})}),(0,i.jsx)(m.Z,{percent:C,label:!1}),(0,i.jsx)(h.Z,{date:new Date().getTime()+1e3*I,type:"countdown",placeholder:(0,i.jsx)(d.Z,{color:"error.light",children:"Full"}),lastUpdated:null==n?void 0:n.lastUpdated})]}):(0,i.jsx)(a.Z,{sx:{width:90,height:65},alignItems:"center",justifyContent:"center",children:(0,i.jsx)(d.Z,{variant:"caption",children:"EMPTY"})})})},"".concat(f,"-").concat(l))})})]})})},"printer-row-".concat(t))})})]})},Z=x.Z.img(g());e.default=j}},function(n){n.O(0,[8734,9774,2888,179],function(){return n(n.s=435)}),_N_E=n.O()}]);