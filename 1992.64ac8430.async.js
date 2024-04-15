(self.webpackChunkantd=self.webpackChunkantd||[]).push([[1992],{438746:function(Le,H,t){"use strict";t.d(H,{Z:function(){return O}});var X=t(97857),x=t.n(X),a=t(952677),f=t.n(a),F=t(805574),D=t.n(F),w=t(385956),h=t(667294),W=t(302559);function L(C){return C.replace("-cn","").replace(/\/$/,"")}function O(){var C=(0,w.useLocation)(),z=C.search,E=(0,W.default)(),j=D()(E,2),c=j[1],v=h.useCallback(function(m,r){var u=L(m);if(c==="cn"&&(u="".concat(u,"-cn")),z&&(u="".concat(u).concat(z)),r){var d;f()(r)==="object"?d=r[c]:d=r,u="".concat(u,"#").concat(d)}return u},[c,z]);return x()(x()({},C),{},{pathname:L(C.pathname),getLink:v})}},858992:function(Le,H,t){"use strict";t.r(H),t.d(H,{default:function(){return at}});var X=t(97857),x=t.n(X),a=t(667294),f=t(385956),F=t(9783),D=t.n(F),w=t(168400),h=t.n(w),W=t(805574),L=t.n(W),O=t(639389),C=t.n(O),z=t(944226),E=t(11739),j=t(879587),c=t(106750),v=t(707898),m=t(647759),r=t(693967),u=t.n(r),d=t(826961),U=t.n(d),G=t(438746),e=t(785893),g=function(n){var o=n.children;return(0,e.jsx)("div",{className:"browser-mockup with-url",children:o})},M=g,K=function(n){var o=n.children,s=(0,a.useState)(!1),l=L()(s,2),y=l[0],R=l[1];return(0,a.useLayoutEffect)(function(){R(!0)},[]),y?o:null},S=K,ie=function(){return(0,e.jsx)("svg",{viewBox:"0 0 15 15",fill:"currentColor",children:(0,e.jsx)("path",{d:"M14.777304,4.75062256 L7.77734505,0.0839936563 C7.60939924,-0.0279665065 7.39060662,-0.0279665065 7.22266081,0.0839936563 L0.222701813,4.75062256 C0.0836082937,4.84334851 5.66973453e-05,4.99945222 4.6875e-05,5.16662013 L4.6875e-05,9.83324903 C4.6875e-05,10.0004355 0.0836088906,10.1565596 0.222701812,10.2492466 L7.22266081,14.9158755 C7.30662908,14.9718752 7.403316,14.999875 7.50000292,14.999875 C7.59668984,14.999875 7.69337678,14.9718752 7.77734505,14.9158755 L14.777304,10.2492466 C14.9163976,10.1565206 14.9999492,10.0004169 14.999959,9.83324903 L14.999959,5.16662013 C14.9999492,4.99945222 14.9163976,4.84334851 14.777304,4.75062256 Z M7.50000292,9.23237755 L4.90139316,7.4999502 L7.50000292,5.76755409 L10.0986127,7.4999502 L7.50000292,9.23237755 Z M8,4.89905919 L8,1.43423573 L13.598561,5.16665138 L10.9999824,6.89904747 L8,4.89905919 Z M7.00000586,4.89905919 L4.00002344,6.89904747 L1.40141366,5.16665138 L7.00000586,1.43423573 L7.00000586,4.89905919 Z M3.09865372,7.4999502 L1.00004102,8.89903575 L1.00004102,6.10089589 L3.09865372,7.4999502 Z M4.00002344,8.10085292 L7.00000586,10.1008412 L7.00000586,13.5656334 L1.40141366,9.83328028 L4.00002344,8.10085292 Z M8,10.1008412 L10.9999824,8.10085292 L13.5985922,9.83328028 L8,13.5656647 L8,10.1008412 L8,10.1008412 Z M11.9013521,7.4999502 L13.9999648,6.10089589 L13.9999648,8.899067 L11.9013521,7.4999502 Z"})})},Se=function(n){return(0,e.jsx)(C(),x()({component:ie},n))},Ne=Se,be=t(941346),le=t(700781),Ae=t(468990),Be=t(224292),Ee=t.n(Be),ue=t(626826),me=t(915660),Y=t.n(me),De=t(524229),Ze=t(728207),Fe=t(302559),se=t(965516),ve=function(n){var o=n.error,s=se.Z.useToken(),l=s.token;return o?(0,e.jsx)(E.Z,{banner:!0,type:"error",message:o.toString(),style:{color:l.colorError}}):null},ze=ve,pe,fe,Ue=(0,m.kc)(function(i){var n=i.token,o=i.css,s=n.colorBgContainer,l=n.colorIcon;return{editor:o(pe||(pe=h()([`
      // override dumi editor styles
      .dumi-default-source-code-editor {
        .dumi-default-source-code {
          background: `,`;
        }

        .dumi-default-source-code > pre,
        .dumi-default-source-code-scroll-content > pre,
        .dumi-default-source-code-editor-textarea {
          padding: `,"px ",`px;
        }

        .dumi-default-source-code > pre,
        .dumi-default-source-code-scroll-content > pre {
          font-size: 13px;
          line-height: 2;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
        }

        // disable dumi default copy button
        .dumi-default-source-code-copy {
          display: none;
        }

        &::after {
          border-radius: 0 !important;
        }

        &:hover:not(:focus-within) {
          &::after {
            box-shadow: 0 0 0 1px `,` inset;
          }
        }
      }
    `])),s,n.paddingSM,n.padding,n.colorPrimaryBorderHover),editableIcon:o(fe||(fe=h()([`
      position: absolute;
      z-index: 2;
      height: 32px;
      width: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 16px;
      inset-inline-end: 56px;
      color: `,`;
    `])),l)}}),Ke={cn:{demoEditable:"\u7F16\u8F91 Demo \u53EF\u5B9E\u65F6\u9884\u89C8"},en:{demoEditable:"Edit demo with real-time preview"}},he="hide-live-demo-tip",Me=function(n){var o=(0,a.useState)(!1),s=L()(o,2),l=s[0],y=s[1],R=Ue(),B=R.styles,P=(0,Fe.default)(Ke),T=L()(P,1),Z=T[0];(0,a.useEffect)(function(){var k=!localStorage.getItem(he);k&&y(!0)},[]);var I=function($){y($),$||localStorage.setItem(he,"true")};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:B.editor,children:[(0,e.jsx)(Ze.Z,{lang:n.lang,initialValue:n.initialValue,onChange:n.onChange}),(0,e.jsx)(ze,{error:n.error})]}),(0,e.jsx)(j.Z,{title:Z.demoEditable,open:l,onOpenChange:I,children:(0,e.jsx)(O.EditFilled,{className:B.editableIcon})})]})},Pe=Me,Oe,ge,xe,Ve=(0,m.kc)(function(i){var n=i.token,o=i.css,s=n.colorIcon,l=n.antCls;return{code:o(Oe||(Oe=h()([`
      position: relative;
      margin-top: -`,`px;
    `])),n.margin),copyButton:o(ge||(ge=h()([`
      color: `,`;
      position: absolute;
      z-index: 2;
      top: 16px;
      inset-inline-end: `,`px;
      width: 32px;
      text-align: center;
      padding: 0;
    `])),s,n.padding),copyIcon:o(xe||(xe=h()([`
      `,`-typography-copy {
        position: relative;
        margin-inline-start: 0;

        // expand clickable area
        &::before {
          content: '';
          display: block;
          position: absolute;
          top: -5px;
          left: -9px;
          bottom: -5px;
          right: -9px;
        }
      }
      `,"-typography-copy:not(",`-typography-copy-success) {
        color: `,`;

        &:hover {
          color: `,`;
        }
      }
    `])),l,l,l,s,s)}}),He={tsx:"TypeScript",jsx:"JavaScript",style:"CSS"};function We(i){return Ee()(i,[[function(n){return ue.isElement(n)&&ue.getTagName(n)==="pre"},function(n,o){var s=ue.getAttributes(n);return(0,e.jsx)("pre",{className:"language-".concat(s.lang),children:(0,e.jsx)("code",{dangerouslySetInnerHTML:{__html:s.highlighted}})},o)}]])}var Ge=function(n){var o=n.sourceCode,s=o===void 0?"":o,l=n.jsxCode,y=l===void 0?"":l,R=n.styleCode,B=R===void 0?"":R,P=n.entryName,T=n.onSourceChange,Z=n.error,I={};s&&(I.tsx=""),y&&(I.jsx=""),B&&(I.style="");var k=a.useState(I),$=L()(k,2),ee=$[0],ne=$[1],te=(0,a.useContext)(De.Z),Ce=te.codeType,oe=te.setCodeType,J={tsx:s==null?void 0:s.trim(),jsx:y==null?void 0:y.trim(),style:B==null?void 0:B.trim()};(0,a.useEffect)(function(){var b={tsx:Y().highlight(s,Y().languages.javascript,"jsx"),jsx:Y().highlight(y,Y().languages.javascript,"jsx"),style:Y().highlight(B,Y().languages.css,"css")};Object.keys(b).forEach(function(re){b[re]||delete b[re]}),ne(b)},[y,s,B]);var Q=Object.keys(ee),N=Ve(),_=N.styles,Re=(0,a.useMemo)(function(){return Q.map(function(b){return{label:He[b],key:b,children:(0,e.jsxs)("div",{className:_.code,children:[b==="tsx"?(0,e.jsx)(Pe,{error:Z,lang:b,initialValue:J[b],onChange:function(we){T==null||T(D()({},P,we))}}):We(["pre",{lang:b,highlighted:ee[b]}]),(0,e.jsx)(be.ZP,{type:"text",className:_.copyButton,children:(0,e.jsx)(le.Z.Text,{className:_.copyIcon,copyable:{text:J[b]}})})]})}})},[JSON.stringify(ee),_.code,_.copyButton,_.copyIcon]);return Q.length?Q.length===1?(0,e.jsx)(Pe,{error:Z,lang:Q[0],initialValue:J[Q[0]],onChange:function(re){T==null||T(D()({},P,re))}}):(0,e.jsx)(Ae.Z,{centered:!0,className:"highlight",activeKey:Ce,onChange:oe,items:Re}):null},On=Ge,Rn=function(){return(0,e.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",children:(0,e.jsx)("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"})})},Tn=function(n){return(0,e.jsx)(C(),x()({component:Rn},n))},In=Tn,Nn=t(148050),An=function(n){var o=n.color,s=o===void 0?"currentColor":o;return(0,e.jsxs)("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:s,children:[(0,e.jsx)("path",{d:"M853.333 469.333A42.667 42.667 0 0 0 810.667 512v256A42.667 42.667 0 0 1 768 810.667H256A42.667 42.667 0 0 1 213.333 768V256A42.667 42.667 0 0 1 256 213.333h256A42.667 42.667 0 0 0 512 128H256a128 128 0 0 0-128 128v512a128 128 0 0 0 128 128h512a128 128 0 0 0 128-128V512a42.667 42.667 0 0 0-42.667-42.667z"}),(0,e.jsx)("path",{d:"M682.667 213.333h67.413L481.707 481.28a42.667 42.667 0 0 0 0 60.587 42.667 42.667 0 0 0 60.586 0L810.667 273.92v67.413A42.667 42.667 0 0 0 853.333 384 42.667 42.667 0 0 0 896 341.333V170.667A42.667 42.667 0 0 0 853.333 128H682.667a42.667 42.667 0 0 0 0 85.333z"})]})},Bn=function(n){return(0,e.jsx)(C(),x()({component:An},n))},Zn=Bn,Fn=function(){return(0,e.jsx)("svg",{viewBox:"0 0 14 14",fill:"currentColor",children:(0,e.jsx)("path",{d:"M13.8875145,13.1234844 C13.8687399,13.0691875 13.8499977,13.0329687 13.8312555,12.9786562 L11.3687445,8.83296875 C12.9187468,8.05754687 13.9640694,6.49009375 13.9640694,4.68728125 C13.9624994,2.09095312 11.7968694,0 9.10938728,0 L3.86404855,0 C3.04217572,0 2.37028902,0.648703125 2.37028902,1.44223437 L2.37028902,1.82090625 L0.746871676,1.82090625 C0.33593526,1.82090625 0,2.14526562 0,2.54203125 L0,13.4478437 C0,13.7540937 0.242191908,13.9879375 0.559368786,13.9879375 C0.615627746,13.9879375 0.67187052,13.9698281 0.72812948,13.9517187 L13.440615,13.9517187 C13.7578081,13.9517187 14,13.7178906 14,13.4116406 C14,13.321125 13.9624994,13.2125 13.8875145,13.1234844 Z M3.49061272,8.0394375 L3.49061272,2.9206875 L8.71719306,2.9206875 C9.74375723,2.9206875 10.5843723,3.73232812 10.5843723,4.7235 C10.5843723,5.71465625 9.76249942,6.5081875 8.71719306,6.5081875 L6.53280462,6.5081875 L6.53280462,6.52629688 C6.45781965,6.52629688 6.3828185,6.5625 6.3093711,6.59870313 C6.04843699,6.74354688 5.95469364,7.08598438 6.10467977,7.33792188 L8.3078104,11.0325469 L3.4906289,11.0325469 L3.4906289,8.0394375 L3.49061272,8.0394375 Z M1.1203237,12.8881406 L1.1203237,2.9206875 L2.3703052,2.9206875 L2.3703052,11.5545313 C2.3703052,11.8607813 2.61249711,12.0946094 2.92969017,12.0946094 L2.94843237,12.0946094 C2.98593295,12.1127188 3.04219191,12.1127188 3.09843468,12.1127188 L9.16563006,12.1127188 C9.48280694,12.1127188 9.72499884,11.878875 9.72499884,11.572625 L9.72499884,11.5364219 C9.76249942,11.3915938 9.74375723,11.2482813 9.66875607,11.1215469 L7.5593526,7.58835938 L8.6984185,7.58835938 C10.3406104,7.58835938 11.6843514,6.29095313 11.6843514,4.703875 C11.6843514,3.1168125 10.3406104,1.81939063 8.6984185,1.81939063 L3.4906289,1.81939063 L3.4906289,1.44073437 C3.4906289,1.24310937 3.65937341,1.08017187 3.86406474,1.08017187 L9.09061272,1.08017187 C11.143741,1.08017187 12.8234173,2.7019375 12.8234173,4.68578125 C12.8234173,6.21853125 11.8343538,7.5340625 10.4343538,8.05603125 C10.378111,8.07414063 10.3406104,8.09223438 10.2843514,8.11034375 C10.0234173,8.25517188 9.92967399,8.597625 10.0796763,8.8495625 L12.5062405,12.8881563 L1.12030751,12.8881563 L1.1203237,12.8881406 Z"})})},zn=function(n){return(0,e.jsx)(C(),x()({component:Fn},n))},Un=zn,Kn=t(438199),Vn=t(373638),en,Hn=E.Z.ErrorBoundary;function Wn(i){return U().compressToBase64(i).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}var ye=function(n){var o=n.type,s=n.demo;window.gtag&&window.gtag("event","demo",{event_category:o,event_label:s})},$e;function Gn(){var i=(0,a.useState)(!1),n=L()(i,2),o=n[0],s=n[1];return(0,a.useEffect)(function(){var l;(l=$e)!==null&&l!==void 0||($e=new Promise(function(y){(0,Vn.qE)(function(R){return y(R!=="timeout"&&R!=="error")})})),$e.then(s)},[]),o}var $n=(0,m.kc)(function(i){var n=i.token,o=n.borderRadius;return{codeHideBtn:(0,m.iv)(en||(en=h()([`
      position: sticky;
      bottom: 0;
      z-index: 1;
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0 0 `,"px ",`px;
      border-top: 1px solid `,`;
      color: `,`;
      transition: all `,` ease-in-out;
      background-color: `,`;
      cursor: pointer;
      &:hover {
        color: `,`;
      }
      span {
        margin-inline-end: `,`px;
      }
    `])),o,o,n.colorSplit,n.colorTextSecondary,n.motionDurationMid,n.colorBgElevated,n.colorPrimary,n.marginXXS)}}),wn=function(n){var o=n.asset,s=n.expand,l=n.iframe,y=n.demoUrl,R=n.children,B=n.title,P=n.description,T=n.originDebug,Z=n.jsx,I=n.style,k=n.compact,$=n.background,ee=n.filename,ne=n.version,te=n.simplify,Ce=n.clientOnly,oe=n.pkgDependencyList,J=(0,a.useContext)(De.Z),Q=J.showDebug,N=J.codeType,_=(0,f.useSiteData)(),Re=_.pkg,b=(0,G.Z)(),re=$n(),we=re.styles,un="index.tsx",mn=o.dependencies[un].value,it=Gn(),ke=(0,a.useRef)(null),vn=(0,a.useRef)(null),Je=(0,f.useLiveDemo)(o.id,{iframe:!!l,containerRef:vn}),st=Je.node,ct=Je.error,dt=Je.setSource,pn=(0,a.useRef)(null),fn=(0,a.useRef)(null),hn=(0,a.useRef)(null),gn=(0,a.useRef)(null),lt=(0,a.useState)(!1),xn=L()(lt,2),ce=xn[0],Xe=xn[1],ut=(0,a.useContext)(Kn.Z),ae=ut.theme,mt=b.hash,vt=b.pathname,pt=b.search,ft="https://ant.design".concat(vt).concat(pt,"#").concat(o.id),ht=(0,a.useState)(!1),yn=L()(ht,2),gt=yn[0],xt=yn[1];(0,a.useEffect)(function(){var p=/preview-(\d+)-ant-design/;xt(p.test(window.location.hostname))},[]);var Cn=function(A){Xe(function(de){return!de}),ye({type:"expand",demo:A})};(0,a.useEffect)(function(){if(o.id===mt.slice(1)){var p;(p=pn.current)===null||p===void 0||p.click()}},[]),(0,a.useEffect)(function(){Xe(s)},[s]);var yt=!l&&Ce?(0,e.jsx)(S,{children:R}):R;ke.current||(ke.current=l?(0,e.jsx)(M,{children:(0,e.jsx)("iframe",{src:y,height:l===!0?void 0:l,title:"demo",className:"iframe-demo"})}):yt);var Ct=u()("code-box",{expand:ce,"code-box-debug":T,"code-box-simplify":te}),je=B,jt=u()("highlight-wrapper",{"highlight-wrapper-expand":ce}),Ye=`
    <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width">
          <meta name="theme-color" content="#000000">
        </head>
        <body>
          <div id="container" style="padding: 24px" />
          <script>const mountNode = document.getElementById('container');<\/script>
        </body>
      </html>
    `,Lt={compilerOptions:{target:"esnext",module:"esnext",esModuleInterop:!0,moduleResolution:"node",jsx:"react",jsxFactory:"React.createElement",jsxFragmentFactory:"React.Fragment"}},q=N==="tsx"?"tsx":"js",V=Z.split(`
`).reduce(function(p,A){var de=A.match(/import .+? from '(.+)';$/);if(de!=null&&de[1]){var Qe,_e,Ie=de[1].split("/"),qe=Ie[0].startsWith("@")?"".concat(Ie[0],"/").concat(Ie[1]):Ie[0];(Qe=p[qe])!==null&&Qe!==void 0||(p[qe]=(_e=oe[qe])!==null&&_e!==void 0?_e:"latest")}return p},{antd:Re.version});V["@ant-design/icons"]="latest",q==="tsx"&&(V["@types/react"]="^18.0.0",V["@types/react-dom"]="^18.0.0"),V.react="^18.0.0",V["react-dom"]="^18.0.0";var St={title:"".concat(je," - antd@").concat(V.antd),html:Ye,js:`const { createRoot } = ReactDOM;
`.concat(Z.replace(/import\s+(?:React,\s+)?{(\s+[^}]*\s+)}\s+from\s+'react'/,"const { $1 } = React;").replace(/import\s+{(\s+[^}]*\s+)}\s+from\s+'antd';/,"const { $1 } = antd;").replace(/import\s+{(\s+[^}]*\s+)}\s+from\s+'@ant-design\/icons';/,"const { $1 } = icons;").replace("import moment from 'moment';","").replace("import React from 'react';","").replace(/import\s+{\s+(.*)\s+}\s+from\s+'react-router';/,"const { $1 } = ReactRouter;").replace(/import\s+{\s+(.*)\s+}\s+from\s+'react-router-dom';/,"const { $1 } = ReactRouterDOM;").replace(/([A-Za-z]*)\s+as\s+([A-Za-z]*)/,"$1:$2").replace(/export default/,"const ComponentDemo ="),`

createRoot(mountNode).render(<ComponentDemo />);
`),editors:"001",css:"",js_external:["react@18/umd/react.development.js","react-dom@18/umd/react-dom.development.js","dayjs@1/dayjs.min.js","antd@".concat(Re.version,"/dist/antd-with-locales.min.js"),"@ant-design/icons/dist/index.umd.js","react-router-dom/dist/umd/react-router-dom.production.min.js","react-router/dist/umd/react-router.production.min.js"].map(function(p){return"https://unpkg.com/".concat(p)}).join(";"),js_pre_processor:"typescript"},bt={title:"".concat(je," - antd@").concat(V.antd),js:"".concat(/import React(\D*)from 'react';/.test(Z)?"":`import React from 'react';
`,`import { createRoot } from 'react-dom/client';
`).concat(Z.replace(/export default/,"const ComponentDemo ="),`

createRoot(mountNode).render(<ComponentDemo />);
`),css:"",json:JSON.stringify({name:"antd-demo",dependencies:V},null,2)},Te=q==="tsx"?mn:Z,jn="import React from 'react';",Ln=/import React(\D*)from 'react';/,Sn=Te.match(Ln);if(Sn){var Et=L()(Sn,1);jn=Et[0],Te=Te.replace(Ln,"").trim()}var bn=`
`.concat(jn,`
import './index.css';
`).concat(Te,`
    `).trim(),En=(I||"").trim().replace(new RegExp("#".concat(o.id,"\\s*"),"g"),"").replace("</style>","").replace("<style>",""),Dn=`import React from 'react';
import { createRoot } from 'react-dom/client';
import Demo from './demo';

createRoot(document.getElementById('container')).render(<Demo />);
  `,Dt={title:"".concat(je," - antd@").concat(V.antd),main:"index.js",dependencies:x()(x()({},V),{},{"rc-util":oe["rc-util"],react:"^18.0.0","react-dom":"^18.0.0","react-scripts":"^5.0.0"}),devDependencies:{typescript:"^5.0.2"},scripts:{start:"react-scripts start",build:"react-scripts build",test:"react-scripts test --env=jsdom",eject:"react-scripts eject"},browserslist:[">0.2%","not dead"]},Mt={files:D()(D()(D()({"package.json":{content:Dt},"index.css":{content:En}},"index.".concat(q),{content:Dn}),"demo.".concat(q),{content:bn}),"index.html",{content:Ye})},Mn={title:"".concat(je," - antd@").concat(V.antd),template:"create-react-app",dependencies:V,description:"",files:D()(D()(D()({"index.css":En},"index.".concat(q),Dn),"demo.".concat(q),bn),"index.html",Ye)};q==="tsx"&&(Mn.files["tsconfig.json"]=JSON.stringify(Lt,null,2));var Pt=ae.includes("dark")?"#303030":"#f0f2f5",Ot={padding:l||k?0:void 0,overflow:l||k?"hidden":void 0,backgroundColor:$==="grey"?Pt:void 0},Pn=(0,e.jsxs)("section",{className:Ct,id:o.id,children:[(0,e.jsx)("section",{className:"code-box-demo",style:Ot,ref:vn,children:st||(0,e.jsx)(Hn,{children:(0,e.jsx)(a.StrictMode,{children:ke.current})})}),!te&&(0,e.jsxs)("section",{className:"code-box-meta markdown",children:[(0,e.jsxs)("div",{className:"code-box-title",children:[(0,e.jsx)(j.Z,{title:T?(0,e.jsx)(f.FormattedMessage,{id:"app.demo.debug"}):"",children:(0,e.jsx)("a",{href:"#".concat(o.id),ref:pn,children:je})}),(0,e.jsx)(Nn.default,{title:(0,e.jsx)(f.FormattedMessage,{id:"app.content.edit-demo"}),filename:ee})]}),P&&(0,e.jsx)("div",{className:"code-box-description",dangerouslySetInnerHTML:{__html:P}}),(0,e.jsxs)(c.Z,{wrap:"wrap",gap:"middle",className:"code-box-actions",children:[gt&&(0,e.jsx)(j.Z,{title:(0,e.jsx)(f.FormattedMessage,{id:"app.demo.online"}),children:(0,e.jsx)("a",{className:"code-box-code-action",target:"_blank",rel:"noreferrer",href:ft,children:(0,e.jsx)(O.LinkOutlined,{"aria-label":"open in new tab",className:"code-box-online"})})}),it?(0,e.jsxs)("form",{className:"code-box-code-action",action:"//riddle.alibaba-inc.com/riddles/define",method:"POST",target:"_blank",ref:hn,onClick:function(){var A;ye({type:"riddle",demo:o.id}),(A=hn.current)===null||A===void 0||A.submit()},children:[(0,e.jsx)("input",{type:"hidden",name:"data",value:JSON.stringify(bt)}),(0,e.jsx)(j.Z,{title:(0,e.jsx)(f.FormattedMessage,{id:"app.demo.riddle"}),children:(0,e.jsx)(Un,{className:"code-box-riddle"})})]}):null,(0,e.jsx)(j.Z,{title:(0,e.jsx)(f.FormattedMessage,{id:"app.demo.stackblitz"}),children:(0,e.jsx)("span",{className:"code-box-code-action",onClick:function(){ye({type:"stackblitz",demo:o.id}),z.Z.openProject(Mn,{openFile:["demo.".concat(q)]})},children:(0,e.jsx)(O.ThunderboltOutlined,{className:"code-box-stackblitz",style:{transform:"scale(1.2)"}})})}),(0,e.jsxs)("form",{className:"code-box-code-action",action:"https://codepen.io/pen/define",method:"POST",target:"_blank",ref:gn,onClick:function(){var A;ye({type:"codepen",demo:o.id}),(A=gn.current)===null||A===void 0||A.submit()},children:[(0,e.jsx)(S,{children:(0,e.jsx)("input",{type:"hidden",name:"data",value:JSON.stringify(St)})}),(0,e.jsx)(j.Z,{title:(0,e.jsx)(f.FormattedMessage,{id:"app.demo.codepen"}),children:(0,e.jsx)(Ne,{className:"code-box-codepen"})})]}),Q&&(0,e.jsxs)("form",{className:"code-box-code-action",action:"https://codesandbox.io/api/v1/sandboxes/define",method:"POST",target:"_blank",ref:fn,onClick:function(){var A;ye({type:"codesandbox",demo:o.id}),(A=fn.current)===null||A===void 0||A.submit()},children:[(0,e.jsx)("input",{type:"hidden",name:"parameters",value:Wn(JSON.stringify(Mt))}),(0,e.jsx)(j.Z,{title:(0,e.jsx)(f.FormattedMessage,{id:"app.demo.codesandbox"}),children:(0,e.jsx)(In,{className:"code-box-codesandbox"})})]}),(0,e.jsx)(j.Z,{title:(0,e.jsx)(f.FormattedMessage,{id:"app.demo.separate"}),children:(0,e.jsx)("a",{className:"code-box-code-action","aria-label":"open in new tab",target:"_blank",rel:"noreferrer",href:y,children:(0,e.jsx)(Zn,{className:"code-box-separate"})})}),(0,e.jsx)(j.Z,{title:(0,e.jsx)(f.FormattedMessage,{id:"app.demo.code.".concat(ce?"hide":"show")}),children:(0,e.jsxs)("div",{className:"code-expand-icon code-box-code-action",children:[(0,e.jsx)("img",{alt:"expand code",src:ae!=null&&ae.includes("dark")?"https://gw.alipayobjects.com/zos/antfincdn/btT3qDZn1U/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/antfincdn/Z5c7kzvi30/expand.svg",className:ce?"code-expand-icon-hide":"code-expand-icon-show",onClick:function(){return Cn(o.id)}}),(0,e.jsx)("img",{alt:"expand code",src:ae!=null&&ae.includes("dark")?"https://gw.alipayobjects.com/zos/antfincdn/CjZPwcKUG3/OpROPHYqWmrMDBFMZtKF.svg":"https://gw.alipayobjects.com/zos/antfincdn/4zAaozCvUH/unexpand.svg",className:ce?"code-expand-icon-show":"code-expand-icon-hide",onClick:function(){return Cn(o.id)}})]})})]})]}),ce&&(0,e.jsxs)("section",{className:jt,children:[(0,e.jsx)(On,{sourceCode:mn,jsxCode:Z,styleCode:I,error:ct,entryName:un,onSourceChange:dt}),(0,e.jsxs)("div",{tabIndex:0,role:"button",className:we.codeHideBtn,onClick:function(){return Xe(!1)},children:[(0,e.jsx)(O.UpOutlined,{}),(0,e.jsx)(f.FormattedMessage,{id:"app.demo.code.hide.simplify"})]})]},"code")]});return(0,a.useEffect)(function(){if(I){var p=document.createElement("style");return p.type="text/css",p.innerHTML=I,p["data-demo-url"]=y,document.head.appendChild(p),function(){document.head.removeChild(p)}}},[I,y]),ne?(0,e.jsx)(v.Z.Ribbon,{text:ne,color:ne.includes("<")?"red":void 0,children:Pn}):Pn},kn=wn,Jn=t(15009),nn=t.n(Jn),Xn=t(899289),Yn=t.n(Xn),Qn=t(471232),_n=t(820640),qn=t.n(_n),et=t(124220),tn,on,rn,an,sn,cn,dn,ln,nt=(0,m.kc)(function(i){var n=i.token,o=i.css;return{wrapper:o(tn||(tn=h()([`
    position: relative;
    border: 1px solid `,`;
    border-radius: `,`px;
    padding: `,"px ","px ",`px;
    margin-bottom: `,`px;
  `])),n.colorBorderSecondary,n.borderRadius,n.paddingMD,n.paddingLG,n.paddingMD*2,n.marginLG),title:o(on||(on=h()([`
    font-size: `,`px;
    font-weight: `,`;
    color: `,`;

    &:hover {
      color: `,`;
    }
  `])),n.fontSizeLG,n.fontWeightStrong,n.colorTextHeading,n.colorTextHeading),description:o(rn||(rn=h()([`
    margin-top: `,`px;
  `])),n.margin),demo:o(an||(an=h()([`
    margin-top: `,`px;
    display: flex;
    justify-content: center;
  `])),n.marginLG),copy:o(sn||(sn=h()([`
    position: absolute;
    inset-inline-end: `,`px;
    inset-block-start: `,`px;
    cursor: pointer;
  `])),n.paddingMD,n.paddingMD),copyTip:o(cn||(cn=h()([`
    color: `,`;
  `])),n.colorTextTertiary),copiedTip:o(dn||(dn=h()([`
    .anticon {
      color: `,`;
    }
  `])),n.colorSuccess),tip:o(ln||(ln=h()([`
    color: `,`;
    margin-top: `,`px;
  `])),n.colorTextTertiary,n.marginMD*2)}}),tt=function(n){var o=n.children,s=n.title,l=n.description,y=n.tip,R=n.asset,B=nt(),P=B.styles,T=(0,a.useRef)(null),Z=a.useState(!1),I=L()(Z,2),k=I[0],$=I[1],ee=Qn.Z.useApp(),ne=ee.message,te=function(){var Ce=Yn()(nn()().mark(function oe(){var J;return nn()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:if(N.prev=0,!T.current){N.next=8;break}return N.next=4,(0,et.Sg)(T.current);case 4:J=N.sent,qn()(JSON.stringify(J.toSketchJSON())),$(!0),setTimeout(function(){$(!1)},5e3);case 8:N.next=13;break;case 10:N.prev=10,N.t0=N.catch(0),ne.error("\u590D\u5236\u5931\u8D25");case 13:case"end":return N.stop()}},oe,null,[[0,10]])}));return function(){return Ce.apply(this,arguments)}}();return(0,e.jsxs)("div",{className:P.wrapper,id:R.id,children:[(0,e.jsx)("a",{className:P.title,href:"#".concat(R.id),children:s}),l&&(0,e.jsx)("div",{className:P.description,dangerouslySetInnerHTML:{__html:l}}),(0,e.jsx)("div",{className:P.copy,children:k?(0,e.jsxs)("div",{className:P.copiedTip,children:[(0,e.jsx)(O.CheckOutlined,{}),(0,e.jsx)("span",{style:{marginInlineStart:8},children:"\u5DF2\u590D\u5236\uFF0C\u4F7F\u7528 Kitchen \u63D2\u4EF6\u5373\u53EF\u7C98\u8D34"})]}):(0,e.jsxs)("div",{onClick:te,className:P.copyTip,children:[(0,e.jsx)(O.SketchOutlined,{}),(0,e.jsx)("span",{style:{marginInlineStart:8},children:"\u590D\u5236 Sketch JSON"})]})}),(0,e.jsx)("div",{className:P.demo,ref:T,children:o}),(0,e.jsx)("div",{className:P.tip,children:y})]})},ot=tt,rt=function(n){var o=(0,f.useTabMeta)();return(o==null?void 0:o.frontmatter.title)==="Design"?(0,e.jsx)(ot,x()({},n)):(0,e.jsx)(kn,x()({},n))},at=rt},148050:function(Le,H,t){"use strict";t.r(H);var X=t(168400),x=t.n(X),a=t(667294),f=t(639389),F=t.n(f),D=t(879587),w=t(647759),h=t(785893),W,L="https://github.com/ant-design/ant-design/edit/master/",O=(0,w.kc)(function(z){var E=z.token,j=z.css,c=E.colorIcon,v=E.colorText,m=E.iconCls;return{editButton:j(W||(W=x()([`
      a& {
        position: relative;
        top: -2px;
        display: inline-block;
        text-decoration: none;
        vertical-align: middle;
        margin-inline-start: `,`px;
        `,` {
          display: block;
          color: `,`;
          font-size: `,`px;
          transition: all `,`;
          &:hover {
            color: `,`;
          }
        }
      }
    `])),E.marginXS,m,c,E.fontSizeLG,E.motionDurationSlow,v)}}),C=function(E){var j=E.title,c=E.filename,v=O(),m=v.styles;return(0,h.jsx)(D.Z,{title:j,children:(0,h.jsx)("a",{className:m.editButton,href:"".concat(L).concat(c),target:"_blank",rel:"noopener noreferrer",children:(0,h.jsx)(f.EditOutlined,{})})})};H.default=C},373638:function(Le,H,t){"use strict";t.d(H,{J1:function(){return L},Is:function(){return j},Fy:function(){return C},KE:function(){return W},qE:function(){return O}});var X=t(661227),x=t(805574),a=t(97857),f=t(385564),F=t(842348),D=typeof location!="undefined"&&location.hostname.includes(".antgroup.com"),w={categoryOrder:{"Ant Design":0,\u5168\u5C40\u6837\u5F0F:1,"Global Styles":1,\u8BBE\u8BA1\u6A21\u5F0F:2,"Design Patterns":2,"\u8BBE\u8BA1\u6A21\u5F0F - \u63A2\u7D22":3,"Design Patterns (Research)":3,Components:100,\u7EC4\u4EF6:100},typeOrder:{Overview:-1,General:0,Layout:1,Navigation:2,"Data Entry":3,"Data Display":4,Feedback:5,Other:6,Deprecated:7,\u7EC4\u4EF6\u603B\u89C8:-1,\u901A\u7528:0,\u5E03\u5C40:1,\u5BFC\u822A:2,\u6570\u636E\u5F55\u5165:3,\u6570\u636E\u5C55\u793A:4,\u53CD\u9988:5,\u5176\u4ED6:6,\u5E9F\u5F03:7,\u539F\u5219:1,Principles:1,\u5168\u5C40\u89C4\u5219:2,\u91CD\u578B\u7EC4\u4EF6:8,ProComponents:8,"Global Rules":2,\u6A21\u677F\u6587\u6863:3,"Template Document":3},docVersions:{"4.x":D?"https://4x-ant-design.antgroup.com":"https://4x.ant.design","3.x":"https://3x.ant.design","2.x":"https://2x.ant.design","1.x":"https://1x.ant.design","0.12.x":"https://012x.ant.design","0.11.x":"https://011x.ant.design","0.10.x":"https://010x.ant.design","0.9.x":"https://09x.ant.design"}};function h(c,v,m,r){var u=c.map(function(e){return e.meta}).filter(function(e){return!e.skip}),d=[],U=function(g,M){return(g.order||0)-(M.order||0)};u.sort(U).forEach(function(e){if(e.category&&(e.category=e.category[v]||e.category),e.type&&(e.type=e.type[v]||e.type),e!=null&&e.title&&(e.title=e.title[v]||e.title),!e.category){d.push(e);return}if(e.category==="Components"&&e.type){var g=d.find(function(S){return(S==null?void 0:S.title)===e.type});g||(g={type:"type",title:e.type,children:[],order:r[e.type]},d.push(g)),g.children=g.children||[],g.children.push(e);return}var M=d.find(function(S){return(S==null?void 0:S.title)===e.category});if(M||(M={type:"category",title:e.category,children:[],order:m[e.category]},d.push(M)),M.children=M.children||[],e.type){var K=M.children.filter(function(S){return(S==null?void 0:S.title)===e.type})[0];K||(K={type:"type",title:e.type,children:[],order:r[e.type]},M.children.push(K)),K.children=K.children||[],K.children.push(e)}else M.children.push(e)});function G(e){return e.sort(U).map(function(g){return g.children?_objectSpread(_objectSpread({},g),{},{children:G(g.children)}):g})}return G(d)}function W(c){return/-cn\/?$/.test(c)}function L(c,v,m,r){var u=c.startsWith("/")?c:"/".concat(c),d;if(v?u==="/"?d="/index-cn":u.endsWith("/")?d=u.replace(/\/$/,"-cn/"):(d="".concat(u,"-cn"),d=d.replace(/(-cn)+/,"-cn")):d=/\/?index-cn/.test(u)?"/":u.replace("-cn",""),r){var U=r[v?"zhCN":"enUS"];d+="#".concat(U)}return{pathname:d,search:m}}function O(c){var v="https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png",m=new Image,r,u=function(U){r||(r=!0,m.src="",c(U))};return m.onload=function(){return u("responded")},m.onerror=function(){return u("error")},m.src=v,setTimeout(function(){return u("timeout")},1500)}function C(){var c="test",v=window.localStorage;try{return v.setItem(c,"1"),v.removeItem(c),!0}catch(m){return!1}}function z(c){return new Promise(function(v,m){var r=document.createElement("script");r.type="text/javascript",r.src=c,r.onload=v,r.onerror=m,document.head.appendChild(r)})}function E(c){var v=["h1","h2","h3","p","img","a","code","strong"];if(!Array.isArray(c))return"";var m=flattenDeep(c.filter(function(r){if(Array.isArray(r)){var u=_slicedToArray(r,1),d=u[0];return d==="p"}return!1}).map(function(r){var u=flatten(r),d=_toArray(u),U=d[0],G=d.slice(1),e=G.filter(function(g){return typeof g=="string"&&!v.includes(g)}).join("");return[U,e]})).find(function(r){return r&&typeof r=="string"&&!v.includes(r)});return m}var j=function(){return w}},471232:function(Le,H,t){"use strict";t.d(H,{Z:function(){return U}});var X=t(97857),x=t.n(X),a=t(805574),f=t.n(a),F=t(667294),D=t(693967),w=t.n(D),h=t(73287),W=t(215570),L=t(269924),O=t(890887),C=t(414466),z=t(9783),E=t.n(z),j=t(286665),c=function(e){var g=e.componentCls,M=e.colorText,K=e.fontSize,S=e.lineHeight,ie=e.fontFamily;return E()({},g,{color:M,fontSize:K,lineHeight:S,fontFamily:ie})},v=function(){return{}},m=(0,j.I$)("App",c,v),r=t(785893),u=function(){return F.useContext(C.Z)},d=function(e){var g=e.prefixCls,M=e.children,K=e.className,S=e.rootClassName,ie=e.message,Se=e.notification,Ne=e.style,be=e.component,le=be===void 0?"div":be,Ae=(0,F.useContext)(h.E_),Be=Ae.getPrefixCls,Ee=Be("app",g),ue=m(Ee),me=f()(ue,3),Y=me[0],De=me[1],Ze=me[2],Fe=w()(De,Ee,K,S,Ze),se=(0,F.useContext)(C.J),ve=F.useMemo(function(){return{message:x()(x()({},se.message),ie),notification:x()(x()({},se.notification),Se)}},[ie,Se,se.message,se.notification]),ze=(0,W.Z)(ve.message),pe=f()(ze,2),fe=pe[0],Ue=pe[1],Ke=(0,O.Z)(ve.notification),he=f()(Ke,2),Me=he[0],Pe=he[1],Oe=(0,L.Z)(),ge=f()(Oe,2),xe=ge[0],Ve=ge[1],He=F.useMemo(function(){return{message:fe,notification:Me,modal:xe}},[fe,Me,xe]),We=le===!1?F.Fragment:le,Ge={className:Fe,style:Ne};return Y((0,r.jsx)(C.Z.Provider,{value:He,children:(0,r.jsx)(C.J.Provider,{value:ve,children:(0,r.jsxs)(We,x()(x()({},le===!1?void 0:Ge),{},{children:[Ve,Ue,Pe,M]}))})}))};d.useApp=u;var U=d},991343:function(){},824654:function(){}}]);
