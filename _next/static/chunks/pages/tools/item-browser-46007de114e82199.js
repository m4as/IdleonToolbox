(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4495],{2761:function(e,n,t){"use strict";var r=t(5318);n.Z=void 0;var i=r(t(4938)),l=t(5893),o=(0,i.default)((0,l.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");n.Z=o},7954:function(e,n,t){var r=0/0,i=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof t.g&&t.g&&t.g.Object===Object&&t.g,u="object"==typeof self&&self&&self.Object===Object&&self,d=s||u||Function("return this")(),p=Object.prototype.toString,x=Math.max,f=Math.min,h=function(){return d.Date.now()};function m(e){var n=typeof e;return!!e&&("object"==n||"function"==n)}function j(e){if("number"==typeof e)return e;if("symbol"==typeof(n=e)||n&&"object"==typeof n&&"[object Symbol]"==p.call(n))return r;if(m(e)){var n,t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var s=o.test(e);return s||a.test(e)?c(e.slice(2),s?2:8):l.test(e)?r:+e}e.exports=function(e,n,t){var r,i,l,o,a,c,s=0,u=!1,d=!1,p=!0;if("function"!=typeof e)throw TypeError("Expected a function");function v(n){var t=r,l=i;return r=i=void 0,s=n,o=e.apply(l,t)}function g(e){var t=e-c,r=e-s;return void 0===c||t>=n||t<0||d&&r>=l}function Z(){var e,t,r,i=h();if(g(i))return w(i);a=setTimeout(Z,(e=i-c,t=i-s,r=n-e,d?f(r,l-t):r))}function w(e){return(a=void 0,p&&r)?v(e):(r=i=void 0,o)}function b(){var e,t=h(),l=g(t);if(r=arguments,i=this,c=t,l){if(void 0===a)return s=e=c,a=setTimeout(Z,n),u?v(e):o;if(d)return a=setTimeout(Z,n),v(c)}return void 0===a&&(a=setTimeout(Z,n)),o}return n=j(n)||0,m(t)&&(u=!!t.leading,l=(d="maxWait"in t)?x(j(t.maxWait)||0,n):l,p="trailing"in t?!!t.trailing:p),b.cancel=function(){void 0!==a&&clearTimeout(a),s=0,r=c=i=a=void 0},b.flush=function(){return void 0===a?o:w(h())},b}},7743:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/item-browser",function(){return t(9575)}])},3283:function(e,n,t){"use strict";var r=t(2729),i=t(5893),l=t(5934),o=t(9574),a=t(6447),c=t(5861),s=t(7720),u=t(5164);function d(){let e=(0,r._)(["\n  width: 48px;\n  height: 48px;\n  object-fit: contain;\n"]);return d=function(){return e},e}let p=e=>{let n,{Type:t,description:r,lvReqToEquip:l,Class:d,rawName:p,displayName:f,Defence:h,Speed:m,Weapon_Power:j,Reach:v,STR:g,AGI:Z,WIS:w,LUK:b,UQ1txt:y,UQ1val:I,UQ2txt:S,UQ2val:_,Upgrade_Slots_Left:C,desc_line1:N,desc_line2:Q,desc_line3:T,desc_line4:U,desc_line5:E,desc_line6:O,desc_line7:k,desc_line8:W,Amount:P,Cooldown:M,capacity:B}=e,F=[N,Q,T,U,E,O,k,W].filter(e=>"Filler"!==e).join(" ").replace(/\[/,P).replace(/]/,M);return f&&"Empty"!==f&&"Locked"!==f&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.Z,{gap:1,direction:"row",alignItems:"center",children:[(0,i.jsx)(x,{src:"".concat(o.prefix,"data/").concat(p,".png"),alt:f}),(0,i.jsx)(c.Z,{fontWeight:"bold",variant:"subtitle1",children:(0,o.cleanUnderscore)(f)})]}),(0,i.jsx)(s.Z,{flexItem:!0,sx:{my:2},color:"black"}),(null==t?void 0:t.includes("INVENTORY"))||(null==t?void 0:t.includes("CARRY"))?(0,i.jsxs)(a.Z,{children:[t?(0,i.jsx)(u.uQ,{title:"Type",value:(0,o.cleanUnderscore)(t)}):null,B?(0,i.jsx)(u.uQ,{title:(null==t?void 0:t.includes("CARRY"))?"Capacity":"Description",value:"+".concat((0,o.cleanUnderscore)(B)," slots")}):null]}):(0,i.jsxs)(a.Z,{children:[t?(0,i.jsx)(u.uQ,{title:"Type",value:(0,o.cleanUnderscore)(t)}):null,B?(0,i.jsx)(u.uQ,{title:"Description",value:"+".concat((0,o.cleanUnderscore)(B)," slots")}):null,r?(0,i.jsx)(u.uQ,{value:(0,o.cleanUnderscore)(r)}):null,F.length>0?(0,i.jsx)(u.uQ,{value:(0,o.cleanUnderscore)(F)}):null,m?(0,i.jsx)(u.uQ,{title:"Speed",value:m}):null,j?(0,i.jsx)(u.uQ,{title:(n=(y||p).toLowerCase())?n.includes("mining")?"Mining Power":n.includes("fishin")?"Fishing Power":n.includes("choppin")?"Choppin Power":n.includes("catch")?"Catching Power":"Weapon Power":"Weapon Power",value:j}):null,g?(0,i.jsx)(u.uQ,{title:"STR",value:g}):null,Z?(0,i.jsx)(u.uQ,{title:"AGI",value:Z}):null,w?(0,i.jsx)(u.uQ,{title:"WIS",value:w}):null,b?(0,i.jsx)(u.uQ,{title:"LUK",value:b}):null,h?(0,i.jsx)(u.uQ,{title:"Defence",value:h}):null,v?(0,i.jsx)(u.uQ,{title:"Reach",value:v}):null,y&&I?(0,i.jsx)(u.uQ,{title:"Misc",value:(0,o.cleanUnderscore)("+".concat(I).concat(y))}):null,S&&_?(0,i.jsx)(u.uQ,{title:"Misc",value:(0,o.cleanUnderscore)("+".concat(_).concat(S))}):null,C>0?(0,i.jsx)(u.uQ,{title:"Upgrade Slots Left",value:C}):null]})]})},x=l.Z.img(d());n.Z=p},5164:function(e,n,t){"use strict";t.d(n,{Gr:function(){return C},M5:function(){return j},Wd:function(){return _},iy:function(){return Z},j8:function(){return g},u3:function(){return S},uQ:function(){return v}});var r=t(2729),i=t(5893),l=t(7294),o=t(9574),a=t(6447),c=t(5861),s=t(1594),u=t(5934),d=t(1053),p=t(510);function x(){let e=(0,r._)(["\n  & .MuiBadge-badge {\n    background-color: #d5d5dc;\n    color: rgba(0, 0, 0, 0.87);\n  }\n"]);return x=function(){return e},e}function f(){let e=(0,r._)(["\n  height: 20px;\n  object-fit: contain;\n"]);return f=function(){return e},e}function h(){let e=(0,r._)(["\n  width: 56px;\n  height: 72px;\n  object-fit: contain;\n  opacity: ",";\n"]);return h=function(){return e},e}function m(){let e=(0,r._)(["\n  position: absolute;\n  left: 50%;\n  top: -3px;\n  pointer-events: none;\n  transform: translateX(-50%);\n"]);return m=function(){return e},e}let j=(0,l.forwardRef)((e,n)=>{let{stat:t,icon:r}=e,{img:l,...s}=e;return(0,i.jsxs)(a.Z,{alignItems:"center",...s,ref:n,style:{position:"relative",width:"fit-content"},children:[(0,i.jsx)("img",{...l,src:"".concat(o.prefix,"data/").concat(r,".png"),alt:""}),(0,i.jsx)(c.Z,{variant:"body1",component:"span",children:t})]})});j.displayName="IconWithText";let v=e=>{let{title:n,value:t,boldTitle:r}=e;return(0,i.jsxs)(a.Z,{direction:"row",flexWrap:"wrap",alignItems:"center",children:[n?(0,i.jsxs)(c.Z,{fontWeight:r?"bold":500,component:"span",children:[n,":\xa0"]}):null,(0,i.jsx)(c.Z,{fontSize:15,component:"span",children:t})]})},g=(0,u.Z)(s.Z)(x()),Z=e=>{let{cardName:n,stars:t,cardIndex:r,name:l,variant:a,rawName:c,amount:s,nextLevelReq:u}=e,p="cardSet"===a?"".concat(o.prefix,"data/").concat(c,".png"):"".concat(o.prefix,"data/2Cards").concat(r,".png");return(0,i.jsxs)(i.Fragment,{children:[t>0?(0,i.jsx)(I,{src:"".concat(o.prefix,"data/CardEquipBorder").concat(t,".png"),alt:""}):null,(0,i.jsx)(d.Z,{title:(0,i.jsx)(w,{...e,cardName:"cardSet"===a?l:n,nextLevelReq:u,amount:s}),children:(0,i.jsx)(y,{isCardSet:"cardSet"===a,amount:s,src:p,alt:""})})]})},w=e=>{let{displayName:n,effect:t,bonus:r,stars:l,showInfo:s,nextLevelReq:u,amount:d}=e,x=r;return s&&(x=(0,p.BZ)({bonus:r,stars:l})),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Z,{fontWeight:"bold",variant:"h6",children:(0,o.cleanUnderscore)(n)}),(0,i.jsx)(c.Z,{children:(0,o.cleanUnderscore)(t.replace("{",x))}),s?(0,i.jsx)(a.Z,{mt:1,direction:"row",gap:1,flexWrap:"wrap",children:[1,2,3,4,5].map((e,t)=>(0,i.jsxs)(a.Z,{alignItems:"center",justifyContent:"space-between",children:[0===t?(0,i.jsx)(c.Z,{children:"Base"}):(0,i.jsx)(b,{src:"".concat(o.prefix,"etc/Star").concat(t,".png"),alt:""}),(0,i.jsx)(c.Z,{children:r*(t+1)})]},"".concat(n,"-").concat(t)))}):null,u>0?(0,i.jsxs)(a.Z,{children:["Progress: ",d," / ",u]}):null]})},b=u.Z.img(f()),y=u.Z.img(h(),e=>{let{amount:n,isCardSet:t}=e;return n||t?1:.5}),I=u.Z.img(m()),S=e=>{let{level:n,funcX:t,x1:r,x2:l,funcY:s,y1:u,y2:d,description:p,name:x,talentId:f}=e,h=n>0?(0,o.growth)(t,n,r,l):0,m=n>0?(0,o.growth)(s,n,u,d):0;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.Z,{direction:"row",alignItems:"center",gap:1,children:[(0,i.jsx)("img",{src:"".concat(o.prefix,"data/UISkillIcon").concat(f,".png"),alt:""}),(0,i.jsx)(c.Z,{fontWeight:"bold",variant:"h6",children:(0,o.cleanUnderscore)(x)})]}),(0,i.jsx)(c.Z,{children:(0,o.cleanUnderscore)(p).replace("{",h).replace("}",m)})]})},_=e=>{let{players:n,characters:t}=e;return(0,i.jsx)(a.Z,{gap:1,direction:"row",children:n.map(e=>{var n;let{index:r}=e;return(0,i.jsx)(d.Z,{title:null==t?void 0:null===(n=t[r])||void 0===n?void 0:n.name,children:(0,i.jsx)("img",{src:"".concat(o.prefix,"data/headBIG.png"),alt:""})},name+"-head-"+r)})})},C=e=>{let{name:n}=e;return(0,i.jsxs)(c.Z,{variant:"h3",children:["Your account is missing data for ",n]})}},9575:function(e,n,t){"use strict";t.r(n);var r=t(2729),i=t(5893),l=t(7294),o=t(2032),a=t(2458),c=t(5949),s=t(5861),u=t(6447),d=t(4054),p=t(476),x=t(8061),f=t(480),h=t(6872),m=t(417),j=t(1903),v=t(7109),g=t(6242),Z=t(4267),w=t(7357),b=t(9368),y=t(9574),I=t(5934),S=t(3283),_=t(9597),C=t(2962),N=t(4674),Q=t(2761),T=t(7954),U=t.n(T),E=t(1053);function O(){let e=(0,r._)(["\n  padding-left: 10px;\n  margin-top: 25px;\n\n  .main-header {\n    font-size: 22px;\n    font-weight: bold;\n  }\n\n  .sub-header {\n    margin-top: 15px;\n    margin-bottom: 2em;\n  }\n\n  .results {\n    margin-top: 15px;\n    padding-left: 15px;\n    display: grid;\n    grid-template-columns: repeat(2, 250px);\n\n    & .owner-name {\n      display: inline-block;\n      width: 150px;\n    }\n\n    & .amount {\n      color: #54c34d;\n    }\n  }\n"]);return O=function(){return e},e}function k(){let e=(0,r._)(["\n  && label.Mui-focused {\n    color: rgba(255, 255, 255, 0.7);\n  }\n"]);return k=function(){return e},e}function W(){let e=(0,r._)(["\n  && {\n    color: white;\n  }\n"]);return W=function(){return e},e}let P=(0,c.D)({trim:!0,limit:250}),M=e=>{var n,t;let{}=e,{state:r}=(0,l.useContext)(_.I),[c,b]=(0,l.useState)(""),[I,T]=(0,l.useState)(),[O,k]=(0,l.useState)(),[W,M]=(0,l.useState)(),[A,D]=(0,l.useState)("name"),[L,z]=(0,l.useState)(!1),G=(0,l.useMemo)(()=>(0,a.tP)(null==r?void 0:r.characters,L),[L]),Y=(0,l.useMemo)(()=>(0,a.Nx)(null==r?void 0:r.characters,null==r?void 0:r.account),[null==r?void 0:r.characters,null==r?void 0:r.account]);(0,l.useEffect)(()=>{k(o.itemsArray),(null==r?void 0:r.characters)||(null==r?void 0:r.account)?T(L?[...Y||[],...G||[]]:Y):T(o.itemsArray)},[r,L]),(0,l.useEffect)(()=>{if(c&&"name"===A){let e=(0,a.QU)(I,null==c?void 0:c.displayName);M(e)}else if(c&&"description"===A){let e=(0,a.wA)(I,c);M(e)}else M([])},[c,L,I]),(0,l.useEffect)(()=>{b("")},[A]);let $=U()(e=>{b(e.target.value)},100);return(0,i.jsxs)(B,{children:[(0,i.jsx)(C.PB,{title:"Idleon Toolbox | Item Browser",description:"Browse all of your existing items with a handy search"}),(0,i.jsx)(s.Z,{my:2,variant:"h2",children:"Item Browser"}),(0,i.jsx)(s.Z,{variant:"subtitle1",children:"Browse all items in your account!"}),(0,i.jsx)(s.Z,{mb:4,variant:"subtitle1",children:"The amount of items you own will be displayed below the item's display"}),(0,i.jsx)(u.Z,{children:(0,i.jsxs)(d.Z,{children:[(0,i.jsx)(p.Z,{id:"demo-radio-buttons-group-label",children:"Search by"}),(0,i.jsxs)(x.Z,{row:!0,"aria-labelledby":"demo-radio-buttons-group-label",defaultValue:"name",name:"radio-buttons-group",onChange:e=>D(e.target.value),children:[(0,i.jsx)(f.Z,{value:"name",control:(0,i.jsx)(h.Z,{}),label:"Item Name"}),(0,i.jsx)(f.Z,{value:"description",control:(0,i.jsx)(h.Z,{}),label:"Item Description"})]})]})}),(0,i.jsxs)(u.Z,{direction:"row",alignItems:"center",gap:2,children:["name"===A&&(null==O?void 0:O.length)>0?(0,i.jsx)(m.Z,{id:"item-browser",value:c,onChange:(e,n)=>{b(n)},autoComplete:!0,options:[c,...O],filterSelectedOptions:!0,filterOptions:P,getOptionLabel:e=>{var n;return(null==e?void 0:e.displayName)?null==e?void 0:null===(n=e.displayName)||void 0===n?void 0:n.replace(/_/g," "):""},renderOption:(e,n)=>{var t;return(0,l.createElement)(u.Z,{...e,key:e.id,gap:2,direction:"row",children:[(0,i.jsx)("img",{width:24,height:24,src:"".concat(y.prefix,"data/").concat(null==n?void 0:n.rawName,".png"),alt:""},"img-".concat(e.id)),(0,i.jsx)(s.Z,{children:null==n?void 0:null===(t=n.displayName)||void 0===t?void 0:t.replace(/_/g," ")},"text-".concat(e.id))]})},style:{width:300},renderInput:e=>(0,i.jsx)(F,{...e,label:"Item Name",variant:"outlined"})}):null,"description"===A?(0,i.jsx)(j.Z,{sx:{mt:1},placeholder:"Type anything",onChange:e=>$(e),InputProps:{endAdornment:(0,i.jsx)(v.Z,{position:"end",children:(0,i.jsx)(N.Z,{children:(0,i.jsx)(Q.Z,{})})})}}):null,(0,i.jsx)(f.Z,{control:(0,i.jsx)(R,{checked:L,onChange:()=>z(!L),name:"Include Equipped Items",color:"default"}),label:"Include Equipped Items"})]}),"name"===A?(0,i.jsx)(s.Z,{component:"div",variant:"caption",sx:{width:300,mt:1},children:"Start to write to narrow down the results (max of 250 items)"}):null,c&&"name"===A?(0,i.jsx)(g.Z,{sx:{my:2,width:"fit-content"},children:(0,i.jsx)(Z.Z,{children:(0,i.jsx)(S.Z,{style:{marginTop:15},...c})})}):null,c&&"description"===A?(0,i.jsx)(u.Z,{direction:"row",gap:3,flexWrap:"wrap",flexShrink:0,flexGrow:0,children:null==W?void 0:W.map((e,n)=>{var t;return(0,i.jsx)(w.Z,{sx:{width:200,height:"fit-content"},children:(0,i.jsx)(E.Z,{title:null==e?void 0:null===(t=e.owners)||void 0===t?void 0:t.join(", "),children:(0,i.jsx)(g.Z,{sx:{my:2},children:(0,i.jsx)(Z.Z,{children:(0,i.jsx)(S.Z,{style:{marginTop:15},...e})})})})},(null==e?void 0:e.rawName)+n)})}):null,"name"===A&&W&&(null===(n=Object.keys(W))||void 0===n?void 0:n.length)>0?(0,i.jsx)(g.Z,{sx:{my:2,width:"fit-content"},children:(0,i.jsx)(Z.Z,{children:null===(t=Object.keys(W))||void 0===t?void 0:t.map((e,n)=>{var t,r;return(0,i.jsxs)(u.Z,{direction:"row",gap:2,children:[(0,i.jsx)("span",{className:"owner-name",children:e}),(null==W?void 0:null===(t=W[e])||void 0===t?void 0:t.amount)?(0,i.jsxs)(s.Z,{color:"success.light",className:"amount",children:["(",(0,y.kFormatter)(null==W?void 0:null===(r=W[e])||void 0===r?void 0:r.amount),")"]}):""]},e+n)})})}):null]})},B=I.Z.div(O()),F=(0,I.Z)(j.Z)(k()),R=(0,I.Z)(b.Z)(W());n.default=M}},function(e){e.O(0,[7419,9030,3536,9774,2888,179],function(){return e(e.s=7743)}),_N_E=e.O()}]);