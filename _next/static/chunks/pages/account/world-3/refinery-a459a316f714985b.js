(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6169],{7687:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/world-3/refinery",function(){return l(7001)}])},6554:function(e,n,l){"use strict";var t=l(5893),i=l(7357),o=l(1458),r=l(5861);l(7294);let d=e=>{let{percent:n,bgColor:l,label:d=!0,sx:a,pre:s}=e;return(0,t.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center"},children:[s,(0,t.jsx)(i.Z,{sx:{width:"100%",mr:1},children:(0,t.jsx)(o.Z,{sx:{width:"100%",height:10,borderRadius:5,"& .MuiLinearProgress-bar":{backgroundColor:l||""},...a},variant:"determinate",value:n>100?100:n})}),d?(0,t.jsx)(i.Z,{children:(0,t.jsx)(r.Z,{variant:"body2",color:"text.secondary",children:"".concat(Math.round(n),"%")})}):null]})};n.Z=d},3948:function(e,n,l){"use strict";var t=l(2729),i=l(5893),o=l(7294),r=l(6986),d=l(3913),a=l(9574),s=l(5934),c=l(5861);function u(){let e=(0,t._)(["\n  .overtime {\n    color: #f91d1d;\n  }\n"]);return u=function(){return e},e}let h=e=>{let{date:n,startDate:l,lastUpdated:t,type:s,pause:u,staticTime:h,placeholder:x,loop:m,variant:p="inherit"}=e,[f,g]=(0,o.useState)();(0,o.useEffect)(()=>{if(n){if(h)return g({...(0,a.getDuration)(new Date().getTime(),n)});let e=new Date,l=e.getTime()-(null!=t?t:0),i=(0,d.Z)(n);g({...(0,a.getDuration)(null==e?void 0:e.getTime(),n+l*("countdown"===s?-1:1)),overtime:"countdown"===s&&i})}},[n,t]);let j=()=>{let{days:e,hours:n,minutes:l,seconds:t}=f;60===(t+=1)&&(t=0,60===(l+=1)&&(l=0,24===(n+=1)&&(e+=1))),g({...f,days:e,hours:n,minutes:l,seconds:t})},Z=()=>{let{days:e,hours:n,minutes:t,seconds:i}=f;if(0===e&&0===n&&0===t&&0===i&&m)return g({...(0,a.getDuration)(new Date().getTime(),l)});-1==(i-=1)&&(i=59,-1==(t-=1)&&(t=59,-1==(n-=1)&&(n=0,e-=1))),g({...f,days:e,hours:n,minutes:t,seconds:i})};(0,r.Z)(()=>{if(!f)return null;"countdown"!==s||(null==f?void 0:f.overtime)?j():Z()},u||h?null:1e3);let w=e=>{let n=String(e);return(null==n?void 0:n.length)===1?"0".concat(e):e};return f?(0,i.jsx)(v,{children:((null==f?void 0:f.overtime)||u)&&x?x:(0,i.jsxs)(c.Z,{variant:p,className:"".concat((null==f?void 0:f.overtime)&&!m?"overtime":""),component:"span",children:[(null==f?void 0:f.days)?w(null==f?void 0:f.days)+"d:":"",w(null==f?void 0:f.hours)+"h:",w(null==f?void 0:f.minutes)+"m",(null==f?void 0:f.days)?"":":",(null==f?void 0:f.days)?"":w(null==f?void 0:f.seconds)+"s"]})}):null},v=s.Z.span(u());n.Z=h},7001:function(e,n,l){"use strict";l.r(n);var t=l(2729),i=l(5893),o=l(5861),r=l(6447),d=l(6242),a=l(4267),s=l(480),c=l(9368),u=l(7294),h=l(9597),v=l(9574),x=l(5934),m=l(3948),p=l(9222),f=l(7836),g=l(6554),j=l(7780),Z=l(1909),w=l(5031),y=l(2032),_=l(4310),b=l(2962),M=l(8696),T=l(5492),k=l(7277);function D(){let e=(0,t._)(["\n  width: 32px;\n"]);return D=function(){return e},e}let S=["#EF476F","#ff8d00","#00dcff","#cdff68","#d822cb","#9a9ca4"],C={fontWeight:"bold"},I=()=>{var e,n,l,t,x,D,I,R;let{state:U}=(0,u.useContext)(h.I),{refinery:P,alchemy:W,saltLick:F,lab:N,stamps:q,charactersLevels:L,breeding:A,rift:G,towers:K}=null==U?void 0:U.account,B=null==W?void 0:W.vials,Y=(0,p.YG)(B,"Refinery_Cycle_Speed"),H=(null==F?void 0:F[2])?(null==F?void 0:null===(e=F[2])||void 0===e?void 0:e.baseBonus)*(null==F?void 0:null===(n=F[2])||void 0===n?void 0:n.level):0,O=(null===(l=null==N?void 0:null===(t=N.labBonuses)||void 0===t?void 0:t.find(e=>"Gilded_Cyclical_Tubing"===e.name))||void 0===l?void 0:l.active)?3:1,X=(null===(x=null==W?void 0:null===(D=W.p2w)||void 0===D?void 0:null===(I=D.sigils)||void 0===I?void 0:I.find(e=>(null==e?void 0:e.name)==="PIPE_GAUGE"))||void 0===x?void 0:x.bonus)||0,V=(0,j.mV)(q,"faster_refinery"),z=(0,M.d)(null==A?void 0:A.pets,"Faster_Refinery_Speed"),J=0,Q=(0,T.R)(G,"Construct_Mastery");Q&&(J=(null==K?void 0:K.totalLevels)>=(null===k.q5||void 0===k.q5?void 0:k.q5[0])?Math.floor((null==K?void 0:K.totalLevels)/10):0);let $=(0,Z.Hx)(L,"Divine_Knight"),ee=(0,_.A5)(null==U?void 0:U.characters,3,"Divine_Knight","THE_FAMILY_GUY"),en=(0,w.D)(y.classFamilyBonuses,"Refinery_Speed",$),el=Y+H+en*(ee>0?1+ee/100:1)+X+V+z+J,[et,ei]=(0,u.useState)(!1),[eo,er]=(0,u.useState)(0),[ed,ea]=(0,u.useState)([]),[es,ec]=(0,u.useState)([]);(0,u.useEffect)(()=>{var e,n;let l=null==U?void 0:null===(e=U.characters)||void 0===e?void 0:e.filter(e=>(null==e?void 0:e.class)==="Squire"||(null==e?void 0:e.class)==="Divine_Knight"),t=l.reduce((e,n)=>{var l;let{name:t,talents:i,cooldowns:o,postOffice:r,afkTime:d}=n,a=(0,f.x)(r,"Magician_Starterpack",2),s=null==i?void 0:null===(l=i[2])||void 0===l?void 0:l.orderedTalents.find(e=>(null==e?void 0:e.name)==="REFINERY_THROTTLE"),c=0;(null==s?void 0:s.maxLevel)>0&&(c=(0,v.growth)(null==s?void 0:s.funcX,null==s?void 0:s.maxLevel,null==s?void 0:s.x1,null==s?void 0:s.x2)||0);let u=(new Date().getTime()-d)/1e3,h=(1-Math.max(0,a)/100)*(null==o?void 0:o[130]),x=h-u;return{cycles:(null==e?void 0:e.cycles)+c,cooldowns:[...null==e?void 0:e.cooldowns,{name:t,cooldown:x<0?x:new Date().getTime()+1e3*x}]}},{cycles:0,cooldowns:[]});er(null==t?void 0:t.cycles),ea(null==t?void 0:t.cooldowns);let i=(new Date().getTime()-(null!==(n=null==U?void 0:U.lastUpdated)&&void 0!==n?n:0))/1e3,o={name:"Combustion",time:Math.ceil(900/((1+el/100)*O)),timePast:(null==P?void 0:P.timePastCombustion)+i},r={name:"Synthesis",time:Math.ceil(3600/((1+el/100)*O)),timePast:(null==P?void 0:P.timePastSynthesis)+i};ec([o,r])},[null==U?void 0:U.lastUpdated]);let eu=(e,n,l,t)=>{let i=null==l?void 0:l.includes("Refinery");return Math.floor(Math.pow(e,i&&t<=(null==P?void 0:P.refinerySaltTaskLevel)?1.3:1.5))*n},eh=(e,n,l,t)=>(l-n)/Math.floor(Math.pow(e,1.3))*t,ev=(e,n,l,t)=>new Date().getTime()+36e5*((n-l)/Math.floor(Math.pow(e,1.3))/(86400/((t<=2?900:3600)/(1+el/100))+(et&&null!=eo?eo:0))*24/O),ex=(e,n,l)=>{let t=[];return n.forEach(n=>{var i;let o=eu(e,null==n?void 0:n.quantity,null==n?void 0:n.rawName,l);o>(null==n?void 0:n.totalAmount)&&t.push(0),t.push((null!==(i=null==n?void 0:n.totalAmount)&&void 0!==i?i:0)/o)}),Math.min(...t)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(b.PB,{title:"Idleon Toolbox | Refinery",description:"Keep track of your refinery levels, timing, required materials and more"}),(0,i.jsx)(o.Z,{variant:"h2",mb:3,children:"Refinery"}),(0,i.jsxs)(r.Z,{my:3,direction:"row",flexWrap:"wrap",gap:2,children:[null==ed?void 0:ed.map((e,n)=>{let{name:l,cooldown:t,talentId:s}=e;return(0,i.jsx)(d.Z,{className:"squire",sx:{width:232},children:(0,i.jsx)(a.Z,{sx:{padding:4},children:(0,i.jsxs)(r.Z,{alignItems:"center",children:[(0,i.jsx)("img",{src:"".concat(v.prefix,"data/UISkillIcon130.png"),alt:""}),(0,i.jsx)(o.Z,{sx:C,children:l}),(0,i.jsx)(m.Z,{placeholder:(0,i.jsx)(o.Z,{sx:{color:"success.main",fontWeight:"bold"},children:"Ready"}),type:"countdown",date:t,lastUpdated:null==U?void 0:U.lastUpdated})]})})},l+" "+n)}),null==es?void 0:es.map((e,n)=>{let{name:l,time:t,timePast:r}=e,s=t%60,c=new Date().getTime()+(t-r)*1e3,u=new Date().getTime()+1e3*t;return(0,i.jsx)(d.Z,{sx:{width:232},children:(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(o.Z,{sx:{...C,color:0===n?"error.light":"success.light"},mb:1,variant:"h5",children:l}),(0,i.jsx)(o.Z,{sx:C,component:"span",children:"Next Cycle In: "}),(0,i.jsx)(m.Z,{type:"countdown",loop:!0,startDate:u,date:c,lastUpdated:null==U?void 0:U.lastUpdated}),(0,i.jsxs)(o.Z,{sx:C,children:["Max cycle time: ",(0,i.jsxs)("span",{style:{fontWeight:400},children:[Math.floor(t/60),"m:",s<10?"0".concat(s):s,"s"]})]}),(0,i.jsxs)(o.Z,{sx:C,children:["Cycles: ",(0,i.jsxs)("span",{style:{fontWeight:400},children:[(0,v.kFormatter)(3600/t,2),"/hr"]})]})]})},"".concat(l,"-").concat(n))})]}),(0,i.jsx)(r.Z,{my:2,direction:"row",children:(0,i.jsx)(d.Z,{sx:{width:"fit-content"},children:(0,i.jsx)(a.Z,{children:(0,i.jsx)(s.Z,{control:(0,i.jsx)(c.Z,{checked:et,onChange:e=>ei(e.target.checked)}),label:"Include Squires Cycles"})})})}),(0,i.jsx)(r.Z,{gap:3,justifyContent:"center",children:null==P?void 0:null===(R=P.salts)||void 0===R?void 0:R.map((e,n)=>{let l;let{saltName:t,refined:s,powerCap:c,rawName:u,rank:h,active:x,cost:p,autoRefinePercentage:f}=e,j=null==p?void 0:p.every(e=>{let{rawName:l,quantity:t,totalAmount:i}=e;return i>=eu(h,t,l,n)});if(es.length){var Z;l=ex(h,p,n)*(null===(Z=es[Math.floor(n/3)])||void 0===Z?void 0:Z.time)}return(0,i.jsx)(d.Z,{sx:{width:"fit-content"},children:(0,i.jsx)(a.Z,{children:(0,i.jsxs)(r.Z,{direction:"row",alignItems:"flex-start",gap:3,flexWrap:"wrap",children:[(0,i.jsxs)(r.Z,{alignItems:"center",alignSelf:"center",children:[(0,i.jsx)("img",{src:"".concat(v.prefix,"data/").concat(u,".png"),alt:""}),"Rank: ",h]}),(0,i.jsxs)(r.Z,{alignSelf:"center",sx:{width:{md:200}},gap:.5,children:[(0,i.jsx)(o.Z,{variant:"h6",children:(0,v.cleanUnderscore)(t)}),(0,i.jsxs)(o.Z,{children:["Power: ",(0,v.numberWithCommas)(s)," / ",(0,v.numberWithCommas)(c)]}),(0,i.jsxs)(o.Z,{children:["Auto refine: ",f,"%"]}),(0,i.jsxs)(o.Z,{children:["Rank up: ",x?(0,i.jsx)(m.Z,{type:"countdown",lastUpdated:null==U?void 0:U.lastUpdated,pause:!x||!j,placeholder:(0,i.jsx)(o.Z,{component:"span",color:j?"success.light":"error.light",children:j?"RANK UP":"Missing Mats"}),date:ev(h,c,s,n)}):(0,i.jsx)(o.Z,{component:"span",color:"error",children:"Inactive"})]}),(0,i.jsxs)(o.Z,{children:["Fuel: ",l?(0,i.jsx)(m.Z,{type:"countdown",date:new Date().getTime()+1e3*l,lastUpdated:null==U?void 0:U.lastUpdated}):"Empty"]}),(0,i.jsx)(g.Z,{percent:s/c*100,bgColor:null==S?void 0:S[n]})]}),(0,i.jsxs)(r.Z,{children:[(0,i.jsx)(o.Z,{fontWeight:"bold",children:"Per cycle"}),(0,i.jsx)(r.Z,{flexWrap:"wrap",direction:"row",sx:{width:{md:140}},gap:1,children:null==p?void 0:p.map((e,l)=>{let{name:t,rawName:d,quantity:a,totalAmount:s}=e,c=eu(h,a,d,n);return(0,i.jsxs)(r.Z,{alignItems:"center",children:[(0,i.jsx)(E,{src:"".concat(v.prefix,"data/").concat(d,".png"),alt:""}),(0,i.jsx)(o.Z,{color:c>s?"error.light":"",children:c})]},"".concat(d,"-").concat(l))})})]}),(0,i.jsxs)(r.Z,{children:[(0,i.jsx)(o.Z,{fontWeight:"bold",children:"Per hour"}),(0,i.jsx)(r.Z,{flexWrap:"wrap",direction:"row",sx:{width:{md:140}},gap:1,children:null==p?void 0:p.map((e,l)=>{var t;let{name:d,rawName:a,quantity:s,totalAmount:c}=e,u=null===(t=es[Math.floor(n/3)])||void 0===t?void 0:t.time,x=eu(h,s,a,n);return(0,i.jsxs)(r.Z,{alignItems:"center",children:[(0,i.jsx)(E,{src:"".concat(v.prefix,"data/").concat(a,".png"),alt:""}),(0,i.jsx)(o.Z,{color:x>c?"error.light":"",children:(0,v.kFormatter)(3600*x/u,2)})]},"per-hour-".concat(a,"-").concat(l))})})]}),(0,i.jsxs)(r.Z,{children:[(0,i.jsx)(o.Z,{fontWeight:"bold",children:"Rank up"}),(0,i.jsx)(r.Z,{flexWrap:"wrap",direction:"row",width:160,gap:1,children:null==p?void 0:p.map((e,l)=>{let{name:t,rawName:d,quantity:a,totalAmount:u}=e,x=eu(h,a,d,n);return x=eh(h,s,c,x),(0,i.jsxs)(r.Z,{alignItems:"center",children:[(0,i.jsx)(E,{src:"".concat(v.prefix,"data/").concat(d,".png"),alt:""}),(0,i.jsx)(o.Z,{children:(0,v.kFormatter)(x)}),(0,i.jsxs)(o.Z,{color:x>u?"error.light":"",variant:"caption",children:["(",(0,v.kFormatter)(u),")"]})]},"".concat(d,"-").concat(l))})})]})]})})},"".concat(t,"-").concat(n))})})]})},E=x.Z.img(D());n.default=I}},function(e){e.O(0,[7270,9774,2888,179],function(){return e(e.s=7687)}),_N_E=e.O()}]);