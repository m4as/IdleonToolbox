(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3233],{6242:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var o=r(7462),n=r(3366),l=r(7294),a=r(6010),i=r(4780),s=r(948),c=r(1657),d=r(5113),u=r(4867);function m(e){return(0,u.Z)("MuiCard",e)}(0,r(1588).Z)("MuiCard",["root"]);var Z=r(5893);let f=["className","raised"],v=e=>{let{classes:t}=e;return(0,i.Z)({root:["root"]},m,t)},b=(0,s.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),p=l.forwardRef(function(e,t){let r=(0,c.Z)({props:e,name:"MuiCard"}),{className:l,raised:i=!1}=r,s=(0,n.Z)(r,f),d=(0,o.Z)({},r,{raised:i}),u=v(d);return(0,Z.jsx)(b,(0,o.Z)({className:(0,a.Z)(u.root,l),elevation:i?8:void 0,ref:t,ownerState:d},s))});var h=p},4267:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var o=r(7462),n=r(3366),l=r(7294),a=r(6010),i=r(4780),s=r(948),c=r(1657),d=r(4867);function u(e){return(0,d.Z)("MuiCardContent",e)}(0,r(1588).Z)("MuiCardContent",["root"]);var m=r(5893);let Z=["className","component"],f=e=>{let{classes:t}=e;return(0,i.Z)({root:["root"]},u,t)},v=(0,s.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),b=l.forwardRef(function(e,t){let r=(0,c.Z)({props:e,name:"MuiCardContent"}),{className:l,component:i="div"}=r,s=(0,n.Z)(r,Z),d=(0,o.Z)({},r,{component:i}),u=f(d);return(0,m.jsx)(v,(0,o.Z)({as:i,className:(0,a.Z)(u.root,l),ownerState:d,ref:t},s))});var p=b},480:function(e,t,r){"use strict";r.d(t,{Z:function(){return w}});var o=r(3366),n=r(7462),l=r(7294),a=r(6010),i=r(4780),s=r(4423),c=r(5861),d=r(8216),u=r(948),m=r(1657),Z=r(4867),f=r(1588);function v(e){return(0,Z.Z)("MuiFormControlLabel",e)}let b=(0,f.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]);var p=r(5704),h=r(5893);let g=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","value"],x=e=>{let{classes:t,disabled:r,labelPlacement:o,error:n}=e,l={root:["root",r&&"disabled",`labelPlacement${(0,d.Z)(o)}`,n&&"error"],label:["label",r&&"disabled"]};return(0,i.Z)(l,v,t)},C=(0,u.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[{[`& .${b.label}`]:t.label},t.root,t[`labelPlacement${(0,d.Z)(r.labelPlacement)}`]]}})(({theme:e,ownerState:t})=>(0,n.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${b.disabled}`]:{cursor:"default"}},"start"===t.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===t.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===t.labelPlacement&&{flexDirection:"column",marginLeft:16},{[`& .${b.label}`]:{[`&.${b.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),j=l.forwardRef(function(e,t){let r=(0,m.Z)({props:e,name:"MuiFormControlLabel"}),{className:i,componentsProps:d={},control:u,disabled:Z,disableTypography:f,label:v,labelPlacement:b="end"}=r,j=(0,o.Z)(r,g),w=(0,s.Z)(),P=Z;void 0===P&&void 0!==u.props.disabled&&(P=u.props.disabled),void 0===P&&w&&(P=w.disabled);let M={disabled:P};["checked","name","onChange","value","inputRef"].forEach(e=>{void 0===u.props[e]&&void 0!==r[e]&&(M[e]=r[e])});let N=(0,p.Z)({props:r,muiFormControl:w,states:["error"]}),R=(0,n.Z)({},r,{disabled:P,labelPlacement:b,error:N.error}),_=x(R),k=v;return null==k||k.type===c.Z||f||(k=(0,h.jsx)(c.Z,(0,n.Z)({component:"span",className:_.label},d.typography,{children:k}))),(0,h.jsxs)(C,(0,n.Z)({className:(0,a.Z)(_.root,i),ownerState:R,ref:t},j,{children:[l.cloneElement(u,M),k]}))});var w=j},6531:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/storage",function(){return r(186)}])},186:function(e,t,r){"use strict";r.r(t);var o=r(2729),n=r(5893),l=r(9597),a=r(7294),i=r(6447),s=r(5861),c=r(480),d=r(9368),u=r(6242),m=r(4267),Z=r(9574),f=r(5934),v=r(1053),b=r(2962);function p(){let e=(0,o._)(["\n  height: 30px;\n  width: 30px;\n  object-fit: contain;\n"]);return p=function(){return e},e}let h=()=>{let{state:e}=(0,a.useContext)(l.I),[t,r]=(0,a.useState)(!1),[o,f]=(0,a.useState)(),p=(0,a.useMemo)(()=>{var t;return[...null==e?void 0:null===(t=e.account)||void 0===t?void 0:t.storage].sort((e,t)=>(null==t?void 0:t.amount)-(null==e?void 0:e.amount))},[e]);(0,a.useEffect)(()=>{var r,o;(null==e?void 0:null===(r=e.account)||void 0===r?void 0:r.storage)&&f(t?p:null==e?void 0:null===(o=e.account)||void 0===o?void 0:o.storage)},[e]);let h=t=>{if(t.target.checked)f(p);else{var o;f(null==e?void 0:null===(o=e.account)||void 0===o?void 0:o.storage)}r(t.target.checked)};return(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(b.PB,{title:"Idleon Toolbox | Storage",description:"A list of your storage items"}),(0,n.jsx)(s.Z,{textAlign:"center",mt:2,mb:2,variant:"h2",children:"Storage"}),(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(i.Z,{children:(0,n.jsx)(c.Z,{control:(0,n.jsx)(d.Z,{checked:t,onChange:h}),label:"Sort by stack size"})}),(0,n.jsx)(i.Z,{direction:"row",gap:1,flexWrap:"wrap",children:null==o?void 0:o.map((e,t)=>{let{name:r,rawName:o,amount:l}=e;return(0,n.jsx)(u.Z,{sx:{width:75},children:(0,n.jsx)(m.Z,{children:(0,n.jsxs)(i.Z,{alignItems:"center","data-index":t,children:[(0,n.jsx)(v.Z,{title:(0,Z.cleanUnderscore)(r),children:(0,n.jsx)(g,{"data-index":t,width:50,height:50,src:"".concat(Z.prefix,"data/").concat(o,".png"),alt:""})}),(0,n.jsx)(v.Z,{title:(0,Z.numberWithCommas)(l),children:(0,n.jsx)(s.Z,{color:l>=1e7?"success.light":"",children:(0,Z.notateNumber)(l,"Big")})})]},"".concat(o,"-").concat(t))})},"".concat(r,"-").concat(t))})})]})]})},g=f.Z.img(p());t.default=h}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=6531)}),_N_E=e.O()}]);