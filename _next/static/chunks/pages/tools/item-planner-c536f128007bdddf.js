(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2731],{5539:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/item-planner",function(){return t(5355)}])},5355:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return nn}});var i=t(2729),l=t(5893),a=t(2032),o=t(7294),r=t(5949),s=t(5861),d=t(6447),u=t(1903),c=t(7109),m=t(4054),v=t(476),p=t(8061),x=t(480),h=t(6872),j=t(7358),g=t(8895),f=t(2797),Z=t(417),y=t(1594),w=t(9368),b=t(9597),N=t(9574),I=t(3321),C=t(2458),Q=t(4674),k=t(3508),_=t(4895),T=t(4282),S=t(6540),E=t(8364),A=t(5934),O=t(1053),M=t(6242),F=t(4267);function P(){let n=(0,i._)(["\n  width: 40px;\n"]);return P=function(){return n},n}let W=n=>{var e;let{inventoryItems:t,itemsList:i=[],copies:r=1,itemDisplay:u}=n,c=(n,e)=>null==n?void 0:n.reduce((n,i)=>{let{amount:l,owner:o}=(0,C.AN)(t,null==i?void 0:i.itemName);if("0"===e){let e=(null==i?void 0:i.itemQuantity)-l;if((null==i?void 0:i.type)==="Equip"&&e!==(null==i?void 0:i.itemQuantity)){var r;let s=null===(r=(0,C.F6)(a.crafts[null==i?void 0:i.itemName]))||void 0===r?void 0:r.map(n=>{let{amount:i,owner:l}=(0,C.AN)(t,null==n?void 0:n.itemName);return{...n,baseQuantity:null==n?void 0:n.itemQuantity,itemQuantity:(null==n?void 0:n.itemQuantity)*e,quantityOwned:i,owner:l}});return s.forEach(t=>{var i,a;let o=null==n?void 0:null===(i=n[null==t?void 0:t.subType])||void 0===i?void 0:i.find(n=>(null==n?void 0:n.itemName)===(null==t?void 0:t.itemName)),r=null==n?void 0:null===(a=n[null==t?void 0:t.subType])||void 0===a?void 0:a.filter(n=>(null==n?void 0:n.itemName)!==(null==t?void 0:t.itemName));o&&e>0&&(null==o?void 0:o.itemQuantity)-l>(null==o?void 0:o.quantityOwned)&&(r=[...r||[],{...o,itemQuantity:(null==o?void 0:o.itemQuantity)-l}]),n={...n,[null==t?void 0:t.subType]:r}}),e>0&&(n={...n,[null==i?void 0:i.subType]:[...(null==n?void 0:n[null==i?void 0:i.subType])||[],{...i,quantityOwned:0,owner:o,itemQuantity:e}]}),n}return l>=(null==i?void 0:i.itemQuantity)?n:{...n,[null==i?void 0:i.subType]:[...(null==n?void 0:n[null==i?void 0:i.subType])||[],{...i,owner:o,quantityOwned:l}]}}return"1"!==e?n:{...n,[null==i?void 0:i.subType]:[...(null==n?void 0:n[null==i?void 0:i.subType])||[],{...i,quantityOwned:l,owner:o}]}},{}),m=(0,o.useMemo)(()=>c(i,u),[i,u,t]);return(0,l.jsx)(d.Z,{flexWrap:"wrap",direction:"row",gap:4,children:null===(e=Object.entries(m))||void 0===e?void 0:e.map((n,e)=>{let[t,i]=n,a="0"!==u||(null==i?void 0:i.length)>0;return a?(0,l.jsx)(M.Z,{variant:"outlined",children:(0,l.jsxs)(F.Z,{children:[(0,l.jsx)("span",{className:"title",children:(0,N.cleanUnderscore)((0,N.pascalCase)(t))}),(0,l.jsx)(d.Z,{flexWrap:"wrap",direction:"row",gap:3,children:null==i?void 0:i.map((n,e)=>{let{itemName:t,itemQuantity:i,rawName:a,type:o,quantityOwned:c,owner:m}=n;return(0,l.jsxs)(d.Z,{gap:1,alignItems:"center",children:[(0,l.jsx)(O.Z,{title:(0,l.jsx)(z,{itemName:t,owners:m}),children:(0,l.jsx)(q,{src:"".concat(N.prefix,"data/").concat(a,".png"),alt:""})}),(0,l.jsxs)(d.Z,{direction:"row",children:[(0,l.jsx)(O.Z,{title:c>=1e3?(0,N.numberWithCommas)(c):"",children:(0,l.jsx)(s.Z,{color:c>=("0"===u?parseInt(i):parseInt(i)*r)?"success.light":"",children:(0,N.notateNumber)(c)})}),(0,l.jsx)(O.Z,{title:i>=1e3?(0,N.numberWithCommas)(i):"",children:(0,l.jsxs)(s.Z,{color:c>=("0"===u?parseInt(i):parseInt(i)*r)?"success.light":"",children:["/","0"===u?(0,N.notateNumber)(parseInt(i)):(0,N.notateNumber)(parseInt(i)*r,2)]})})]})]},t+""+e)})})]})},t+""+e):null})})},q=A.Z.img(P()),z=n=>{let{itemName:e,owners:t}=n;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.Z,{fontWeight:"bold",variant:"h5",children:(0,N.cleanUnderscore)(e)}),(0,l.jsx)(d.Z,{children:(0,l.jsx)(d.Z,{direction:"row",children:(null==t?void 0:t.length)>0?null==t?void 0:t.map((n,e)=>(0,l.jsx)("div",{children:(0,l.jsxs)(s.Z,{children:[n,"\xa0"]})},e+""+n)):(0,l.jsx)(s.Z,{children:"None"})})})]})};var U=t(2962);function D(){let n=(0,i._)(["\n  width: 50px;\n"]);return D=function(){return n},n}function L(){let n=(0,i._)(["\n  padding: 15px;\n  margin-top: 15px;\n  margin-bottom: 25px;\n\n  .item-wrapper {\n    width: 105px;\n    height: 102px;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .title {\n    font-size: 20px;\n    font-weight: bold;\n    display: inline-block;\n    margin-bottom: 10px;\n  }\n\n  .preview {\n    min-height: 77px;\n    min-width: 77px;\n  }\n\n  .controls {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    flex-wrap: wrap;\n    @media (max-width: 800px) {\n      padding: 10px;\n    }\n  }\n\n  .items-wrapper {\n    margin-top: 15px;\n\n    .items {\n      margin-top: 10px;\n      display: flex;\n      flex-wrap: wrap;\n      gap: 15px;\n    }\n  }\n\n  .content {\n    margin-top: 25px;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    column-gap: 50px;\n  }\n\n  .crafts-container {\n    margin-top: 15px;\n  }\n"]);return L=function(){return n},n}function R(){let n=(0,i._)(["\n  ","\n  && label.Mui-focused {\n    color: rgba(255, 255, 255, 0.7);\n  }\n"]);return R=function(){return n},n}function X(){let n=(0,i._)(["\n  && {\n    color: white;\n  }\n"]);return X=function(){return n},n}let B=(0,r.D)({trim:!0}),V={rawName:"EquipmentTransparent108"},G=n=>{var e,t;let{}=n,{state:i,lastUpdated:r,dispatch:w}=(0,o.useContext)(b.I),{planner:A={sections:[]}}=i,[M]=(0,o.useState)(Object.keys(a.crafts)),[F,P]=(0,o.useState)({0:""}),[q,z]=(0,o.useState)([]),[D,L]=(0,o.useState)([V]),[R,X]=(0,o.useState)("0"),[G,J]=(0,o.useState)(!1),[nn,ne]=(0,o.useState)(1),[nt,ni]=(0,o.useState)({}),[nl,na]=(0,o.useState)(),no=(0,o.useMemo)(()=>(0,C.tP)(null==i?void 0:i.characters,G),[G]),nr=(0,o.useMemo)(()=>(0,C.Nx)(null==i?void 0:i.characters,null==i?void 0:i.account),[null==i?void 0:i.characters,null==i?void 0:i.account]);(0,o.useEffect)(()=>{var n;(null==i?void 0:i.characters)||(null==i?void 0:i.account)?z(G?[...nr||[],...no||[]]:nr):z(a.itemsArray),L(null==A?void 0:null===(n=A.sections)||void 0===n?void 0:n.map(()=>V))},[i,r,G]);let ns=(n,e)=>{let t=D.map((t,i)=>i===e?n?a.crafts[n]:V:t);P({...F,["".concat(e)]:n}),L(t)},nd=(n,e,t)=>{var i;let l,o;let r=null==A?void 0:null===(i=A.sections)||void 0===i?void 0:i[n],s=a.crafts[null==e?void 0:e.itemName];if(s){l=nm(null==r?void 0:r.items,s,!1,!1,t);let i=Array.isArray(e)?e:(0,C.F6)(e);o=null==i?void 0:i.reduce((n,e)=>nm(n,e,!0,!1,t),null==r?void 0:r.materials);let a=nc(n,{materials:o,items:l,name:null==r?void 0:r.name});w({type:"planner",data:{sections:a}})}},nu=(n,e,t)=>{if((null==e?void 0:e.rawName)!==V.rawName){var i;let l,o;let r=null==A?void 0:null===(i=A.sections)||void 0===i?void 0:i[n];l=nm(null==r?void 0:r.items,e,!1,!0,t);let s=Array.isArray(a.crafts[null==e?void 0:e.itemName])?a.crafts[null==e?void 0:e.itemName]:(0,C.F6)(a.crafts[null==e?void 0:e.itemName]);o=null==s?void 0:s.reduce((n,e)=>nm(n,e,!0,!0,t),null==r?void 0:r.materials);let d=nc(n,{materials:o,items:l,name:null==r?void 0:r.name});w({type:"planner",data:{sections:d}}),P({...F,[n]:""}),ne(1)}},nc=(n,e)=>{var t;return null==A?void 0:null===(t=A.sections)||void 0===t?void 0:t.map((t,i)=>n===i?e:t)},nm=function(n,e,t){let i=!(arguments.length>3)||void 0===arguments[3]||arguments[3],l=arguments.length>4?arguments[4]:void 0,a=null==n?void 0:n.find(n=>(null==e?void 0:e.itemName)===(null==n?void 0:n.itemName));return a?null==n?void 0:n.reduce((n,t)=>{if((null==e?void 0:e.itemName)!==(null==t?void 0:t.itemName))return[...n,t];let o=l?l*(null==e?void 0:e.itemQuantity):null==t?void 0:t.itemQuantity;return!i&&(null==a?void 0:a.itemQuantity)-o<=0?n:[...n,{...a,itemQuantity:i?(null==a?void 0:a.itemQuantity)+o:(null==a?void 0:a.itemQuantity)-o,itemCount:parseFloat(l)}]},[]):i?[...n||[],{...e,itemQuantity:(null==e?void 0:e.itemQuantity)*l,itemCount:parseFloat(l)}]:n},nv=()=>{w({type:"planner",data:{sections:[...(null==A?void 0:A.sections)||[],{items:[],materials:[],name:nl||"section-".concat(Math.floor(100*Math.random()))}]}})},np=n=>{let e=A.sections.filter((e,t)=>t!==n);P({...F,[n]:""}),w({type:"planner",data:{sections:e}})},nx=()=>{P({0:""}),L([V]),w({type:"planner",data:{sections:[]}})};return(0,l.jsxs)(K,{children:[(0,l.jsx)(U.PB,{title:"Idleon Toolbox | Item Planner",description:"Useful tool to keep track of your crafting projects by tracking existing and missing materials"}),(null==i?void 0:i.characters)||(null==i?void 0:i.account)?null:(0,l.jsx)(s.Z,{component:"div",sx:{mb:2},variant:"caption",children:"* This tool will work better if you're logged in"}),(0,l.jsxs)(d.Z,{direction:"row",gap:5,children:[(0,l.jsxs)("div",{children:[(0,l.jsx)(d.Z,{direction:"row",alignItems:"center",children:(0,l.jsx)(u.Z,{sx:{mt:1},label:"Section name",placeholder:"Enter section name",onChange:n=>na(n.target.value),InputProps:{endAdornment:(0,l.jsx)(c.Z,{position:"end",children:(0,l.jsx)(Q.Z,{onClick:nv,children:(0,l.jsx)(S.Z,{})})})}})}),(0,l.jsx)(O.Z,{title:"This will reset all sections and items",children:(0,l.jsxs)(I.Z,{sx:{mt:1},onClick:nx,children:[(0,l.jsx)(T.Z,{})," Reset all sections"]})})]}),(0,l.jsxs)(d.Z,{sx:{pl:1,mt:1},children:[(0,l.jsxs)(m.Z,{children:[(0,l.jsx)(v.Z,{id:"demo-radio-buttons-group-label",children:"Display"}),(0,l.jsxs)(p.Z,{row:!0,"aria-labelledby":"demo-radio-buttons-group-label",defaultValue:"0",name:"radio-buttons-group",onChange:n=>X(n.target.value),children:[(0,l.jsx)(x.Z,{value:"0",control:(0,l.jsx)(h.Z,{}),label:"Show Missing Items"}),(0,l.jsx)(x.Z,{value:"1",control:(0,l.jsx)(h.Z,{}),label:"Show All Items"})]})]}),(0,l.jsx)(x.Z,{control:(0,l.jsx)($,{checked:G,onChange:()=>J(!G),name:"Include Equipped Items",color:"default"}),label:"Include Equipped Items"})]})]}),(0,l.jsx)(d.Z,{sx:{mt:2},children:(null==A?void 0:null===(e=A.sections)||void 0===e?void 0:e.length)>0?null==A?void 0:null===(t=A.sections)||void 0===t?void 0:t.map((n,e)=>{var t;let{items:i,materials:o,name:r}=n;return(0,l.jsxs)(j.Z,{children:[(0,l.jsx)(g.Z,{expandIcon:(0,l.jsx)(k.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,l.jsx)(s.Z,{children:r||"Accordion-".concat(e)})}),(0,l.jsxs)(f.Z,{children:[(0,l.jsxs)(I.Z,{onClick:()=>np(e),children:[(0,l.jsx)(_.Z,{})," Remove Section"]}),(0,l.jsxs)("div",{className:"controls",children:[(0,l.jsx)("div",{className:"preview",children:(null==D?void 0:D[e])?(0,l.jsx)("img",{src:"".concat(N.prefix,"data/").concat(null==D?void 0:null===(t=D[e])||void 0===t?void 0:t.rawName,".png"),alt:""}):null}),(0,l.jsx)(Z.Z,{id:"item-locator",value:null==F?void 0:F[e],onChange:(n,t)=>ns(t,e),autoComplete:!0,options:[null==F?void 0:F[e],...M],filterSelectedOptions:!0,filterOptions:B,getOptionLabel:n=>n?null==n?void 0:n.replace(/_/g," "):"",renderOption:(n,e)=>{var t;return e?(0,l.jsxs)(d.Z,{gap:2,...n,direction:"row",children:[(0,l.jsx)("img",{width:24,height:24,src:"".concat(N.prefix,"data/").concat(null===a.crafts||void 0===a.crafts?void 0:null===(t=a.crafts[e])||void 0===t?void 0:t.rawName,".png"),alt:""}),null==e?void 0:e.replace(/_/g," ")]}):(0,l.jsx)("span",{style:{height:0}},"empty")},style:{width:300},renderInput:n=>(0,l.jsx)(Y,{...n,label:"Item Name",variant:"outlined"})}),(0,l.jsx)(Y,{value:nn,width:"100px",inputProps:{min:1},onChange:n=>{var e;return ne(null==n?void 0:null===(e=n.target)||void 0===e?void 0:e.value)},type:"number",label:"Item Count",variant:"outlined"}),(0,l.jsx)(I.Z,{color:"primary",variant:"contained",onClick:()=>nu(e,null==D?void 0:D[e],nn),title:"Add Item",children:"Add"})]}),(0,l.jsxs)("div",{className:"content",children:[(0,l.jsxs)("div",{className:"items-wrapper",children:[(0,l.jsx)("span",{className:"title",children:"Tracked Items"}),(0,l.jsx)("div",{className:"items",children:null==i?void 0:i.map((n,t)=>(0,l.jsxs)("div",{className:"item-wrapper",onMouseEnter:()=>ni({...nt,["".concat(e,"-").concat(t)]:!0}),onMouseLeave:()=>ni({...nt,["".concat(e,"-").concat(t)]:!1}),children:[(0,l.jsx)(y.Z,{badgeContent:(0,N.numberWithCommas)(null==n?void 0:n.itemQuantity),max:1e4,anchorOrigin:{vertical:"top",horizontal:"right"},color:"primary",children:(0,l.jsx)(O.Z,{title:(0,l.jsx)(H,{name:null==n?void 0:n.itemName,items:(0,C.F6)(n)}),children:(0,l.jsx)("img",{src:"".concat(N.prefix,"data/").concat(null==n?void 0:n.rawName,".png"),alt:""},(null==n?void 0:n.rawName)+" "+t)})}),(null==nt?void 0:nt["".concat(e,"-").concat(t)])?(0,l.jsxs)("div",{className:"buttons",children:[(0,l.jsx)(Q.Z,{type:"bottom",size:"small",onClick:()=>nu(e,{...n,itemQuantity:1},1),children:(0,l.jsx)(S.Z,{})}),(0,l.jsx)(Q.Z,{type:"bottom",size:"small",onClick:()=>nd(e,n,1),children:(0,l.jsx)(_.Z,{})}),(0,l.jsx)(Q.Z,{size:"small",onClick:()=>nd(e,n,null==n?void 0:n.itemQuantity),children:(0,l.jsx)(E.Z,{})})]}):null]},e+""+(null==n?void 0:n.itemName)+t))})]}),(0,l.jsxs)("div",{className:"crafts-container",children:[(0,l.jsx)("span",{className:"title",children:"Required Materials"}),(null==q?void 0:q.length)>0?(0,l.jsx)(W,{itemsList:o,inventoryItems:q,itemDisplay:R}):null]})]})]})]},"accordion-".concat(e))}):(0,l.jsx)(s.Z,{sx:{mt:3},variant:"h3",children:"Please add a section"})})]})},H=n=>{let{name:e,items:t}=n;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.Z,{fontWeight:"bold",variant:"h5",children:(0,N.cleanUnderscore)(e)}),(0,l.jsx)(d.Z,{direction:"row",gap:1,flexWrap:"wrap",children:null==t?void 0:t.map((n,e)=>{let{rawName:t,itemQuantity:i}=n;return(0,l.jsxs)(d.Z,{alignItems:"center",children:[(0,l.jsx)(J,{src:"".concat(N.prefix,"data/").concat(t,".png"),alt:""}),(0,l.jsx)(s.Z,{children:i})]},t+""+e)})})]})},J=A.Z.img(D()),K=A.Z.div(L()),Y=(0,A.Z)(u.Z)(R(),n=>{let{width:e}=n;return e?"width:".concat(e,";"):""}),$=(0,A.Z)(w.Z)(X());var nn=G}},function(n){n.O(0,[7419,3536,4867,9774,2888,179],function(){return n(n.s=5539)}),_N_E=n.O()}]);