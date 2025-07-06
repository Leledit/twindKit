"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const i=require("react/jsx-runtime"),u=require("tailwind-merge"),s=require("react"),je=require("react-dom"),Fr={primary:`
    bg-[var(--color-primary)] text-[var(--color-primary-foreground)]
    hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-active)]
    dark:bg-[var(--color-primary-dark)] dark:hover:bg-[var(--color-primary-hover-dark)] dark:active:bg-[var(--color-primary-active-dark)]
    dark:text-[var(--color-primary-foreground-dark)]
  `,secondary:`
    bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)]
    hover:bg-[var(--color-secondary-hover)] active:bg-[var(--color-secondary-active)]
    dark:bg-[var(--color-secondary-dark)] dark:hover:bg-[var(--color-secondary-hover-dark)] dark:active:bg-[var(--color-secondary-active-dark)]
    dark:text-[var(--color-secondary-foreground-dark)]
  `,cancel:`
    bg-[var(--color-cancel)] text-[var(--color-cancel-foreground)]
    hover:bg-[var(--color-cancel-hover)] active:bg-[var(--color-cancel-active)]
    dark:bg-[var(--color-cancel-dark)] dark:hover:bg-[var(--color-cancel-hover-dark)] dark:active:bg-[var(--color-cancel-active-dark)]
    dark:text-[var(--color-cancel-foreground-dark)]
  `,danger:`
    bg-red-600 text-white
    hover:bg-red-700 active:bg-red-800
    dark:bg-red-500 dark:hover:bg-red-600 dark:active:bg-red-700
  `},Hr=`
  w-full min-h-[48px] min-w-[140px] py-3 px-4 mt-5 
  rounded-lg
  transition shadow-theme-xs cursor-pointer
`;function Ir({className:r,children:e,variant:t="secondary",...o}){return i.jsx("button",{className:u.twMerge(Hr,Fr[t],r),...o,children:e})}const Pr={sm:{box:"w-4 h-4",icon:"w-2.5 h-2.5",label:"text-xs"},md:{box:"w-5 h-5",icon:"w-3 h-3",label:"text-sm"},lg:{box:"w-6 h-6",icon:"w-3.5 h-3.5",label:"text-base"}};function Dr({checked:r,onChange:e,label:t,classNameLabel:o="",classNameInput:c="",size:a="md"}){const l=Pr[a];return i.jsxs("label",{className:`inline-flex items-center cursor-pointer ${o}`,children:[i.jsx("input",{type:"checkbox",checked:r,onChange:e,className:"peer hidden"}),i.jsx("div",{className:u.twMerge(`
          flex items-center justify-center rounded border 
          ${l.box}
          border-[var(--color-muted)]
          peer-checked:bg-[var(--color-secondary)]
          peer-checked:border-[var(--color-secondary)]
          transition-colors
          dark:border-[var(--color-muted-dark)]
          dark:peer-checked:bg-[var(--color-secondary-dark)]
          dark:peer-checked:border-[var(--color-secondary-dark)]
        `,c),children:i.jsx("svg",{className:u.twMerge(`
            ${l.icon} hidden peer-checked:block 
            text-[var(--color-secondary-foreground)] 
            dark:text-[var(--color-secondary-foreground-dark)]
          `),viewBox:"0 0 24 24",children:i.jsx("path",{fill:"currentColor",d:"M9 16.2l-3.5-3.6L4 14l5 5 12-12-1.5-1.4z"})})}),t&&i.jsx("span",{className:u.twMerge(`
            ml-2 ${l.label}
            text-[var(--color-foreground)] 
            dark:text-[var(--color-foreground-dark)]
          `),children:t})]})}function E(r,e){return r?"border-[var(--color-error)] focus:border-[var(--color-error)]":e?"border-[var(--color-success)] focus:border-[var(--color-success)]":"border-[var(--color-secondary)] focus:border-[var(--color-secondary)] dark:border-[var(--color-muted-dark)] dark:focus:border-[var(--color-secondary-dark)]"}function q({htmlFor:r,children:e,className:t}){return i.jsx("label",{htmlFor:r,className:u.twMerge(`block mb-1 text-sm font-medium 
         text-[var(--color-primary-foreground)] dark:text-[var(--color-foreground-dark)]`,t),children:e})}function Xr({label:r,error:e=!1,success:t=!1,disabled:o=!1,messageError:c="Campo obrigatório",isValidating:a,icon:l,className:n="",onChange:d,...h}){const m=e&&a,$=m?"text-[var(--color-error)]":t?"text-[var(--color-success)]":"text-[var(--color-muted)] dark:text-[var(--color-muted-dark)]";return i.jsxs("div",{className:"w-full mt-5",children:[r&&i.jsx(q,{children:r}),i.jsxs("div",{className:"relative",children:[l&&i.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:i.jsx(l,{className:`h-5 w-5 ${$}`})}),i.jsx("input",{disabled:o,onChange:d,className:u.twMerge(`block w-full rounded-md py-3 px-4 transition duration-200 border focus:outline-none appearance-none transition duration-200
             bg-[var(--color-background)] text-[var(--color-foreground)] placeholder-[var(--color-muted)] 
             dark:bg-[var(--color-background-dark)] dark:text-[var(--color-foreground-dark)] dark:placeholder-[var(--color-muted-dark)]
            `,l?"pl-10":"",E(m,t),o?"opacity-60 cursor-not-allowed":"",n),...h})]}),m&&c&&i.jsx("p",{className:"mt-2 text-sm text-[var(--color-error)]",children:c})]})}function Kr({label:r,error:e=!1,success:t=!1,disabled:o=!1,messageError:c="Campo obrigatório",isValidating:a,onChange:l,...n}){const[d,h]=s.useState(!1),m=e&&a;return i.jsxs("div",{className:"w-full mt-5",children:[r&&i.jsx("label",{htmlFor:n.id,className:"block mb-1 text-sm font-medium text-[var(--color-foreground)] dark:text-[var(--color-foreground-dark)]",children:r}),i.jsxs("div",{className:"relative",children:[i.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:i.jsx("svg",{className:"h-5 w-5 text-[var(--color-muted)] dark:text-[var(--color-muted-dark)]",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:i.jsx("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",clipRule:"evenodd"})})}),i.jsx("input",{type:d?"text":"password",autoComplete:"current-password",disabled:o,onChange:l,placeholder:"••••••••",className:u.twMerge(`block w-full rounded-md py-3 px-4 transition duration-200
             bg-[var(--color-background)] text-[var(--color-foreground)] placeholder-[var(--color-muted)] 
             dark:bg-[var(--color-background-dark)] dark:text-[var(--color-foreground-dark)] dark:placeholder-[var(--color-muted-dark)]
             pl-10 pr-10 border focus:outline-none appearance-none transition duration-20
            `,E(m,t),o?"opacity-60 cursor-not-allowed":""),...n}),i.jsx("button",{type:"button",onClick:()=>h($=>!$),className:"absolute inset-y-0 right-0 pr-3 flex items-center text-[var(--color-muted)] hover:text-[var(--color-secondary)] dark:text-[var(--color-muted-dark)] dark:hover:text-[var(--color-secondary-dark)] transition cursor-pointer",tabIndex:-1,children:d?i.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]}):i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.978 9.978 0 012.276-3.592M6.1 6.1a9.993 9.993 0 0111.8 0m2.063 2.062a9.978 9.978 0 012.276 3.592c-1.274 4.057-5.065 7-9.542 7-.682 0-1.348-.07-1.992-.2M3 3l18 18"})})})]}),m&&c&&i.jsx("p",{className:"mt-2 text-sm text-[var(--color-error)] dark:text-[var(--color-error-dark)]",children:c})]})}function Yr({label:r,error:e=!1,success:t=!1,disabled:o=!1,messageError:c="Campo obrigatório",isValidating:a,onChange:l,options:n,placeholder:d="Selecione uma opção",className:h,...m}){const $=e&&a;return i.jsxs("div",{className:"w-full mt-5 mb-3",children:[r&&i.jsx(q,{children:r}),i.jsxs("div",{className:"relative",children:[i.jsxs("select",{...m,onChange:l,disabled:o,className:u.twMerge(`block w-full rounded-md py-3 px-4 pr-10 transition duration-200 appearance-none
             bg-[var(--color-background)] text-[var(--color-foreground)] placeholder-[var(--color-muted)]
             dark:bg-[var(--color-background-dark)] dark:text-[var(--color-foreground-dark)] dark:placeholder-[var(--color-muted-dark)]
             transition duration-200 border focus:outline-none appearance-none transition duration-200
            `,E($,t),o?"opacity-60 cursor-not-allowed":"",h),children:[d&&i.jsx("option",{value:"",children:d}),n.map(R=>i.jsx("option",{value:R.value,children:R.label},R.value))]}),i.jsx("div",{className:"pointer-events-none absolute inset-y-0 right-3 flex items-center text-[var(--color-muted)] dark:text-[var(--color-muted-dark)]",children:i.jsx("svg",{className:"h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",stroke:"currentColor",children:i.jsx("path",{d:"M7 7l3 3 3-3",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),$&&c&&i.jsx("p",{className:"mt-2 text-sm text-[var(--color-error)] dark:text-[var(--color-error-dark)]",children:c})]})]})}function Gr({className:r,label:e,error:t=!1,success:o=!1,disabled:c=!1,messageError:a="Campo obrigatório",isValidating:l,onChange:n,...d}){const h=t&&l;return i.jsxs("div",{className:"w-full mb-3 mt-5",children:[e&&i.jsx(q,{className:"mb-2",children:e}),i.jsxs("div",{className:"relative",children:[i.jsx("textarea",{...d,onChange:n,disabled:c,className:u.twMerge(`border focus:outline-none appearance-none transition duration-200 rounded-md
             h-[50px] w-full resize-none appearance-none px-4 py-2.5 shadow-sm transition-colors duration-150
             bg-[var(--color-background)] text-[var(--color-foreground)] placeholder-[var(--color-muted)]
             dark:bg-[var(--color-background-dark)] dark:text-[var(--color-foreground-dark)] dark:placeholder-[var(--color-muted-dark)]
             focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)/10]
            `,E(h,o),c?"opacity-60 cursor-not-allowed":"",r)}),h&&a&&i.jsx("p",{className:"text-sm text-[var(--color-error)] dark:text-[var(--color-error-dark)] mt-2",children:a})]})]})}function Jr({messageError:r}){return r?i.jsx("p",{className:`
        mt-3 mb-3 p-2 min-h-[30px] w-full rounded-[var(--tw-borderRadius-md)] rounded-md
        bg-[var(--color-error)] text-[var(--color-foreground-dark)]
        text-[14px] leading-[30px] text-center
        dark:bg-[var(--color-error-dark)] dark:text-[var(--color-foreground-dark)]
      `,children:r}):null}function Qr({value:r,onChange:e,label:t,isValidating:o,error:c,className:a}){const l=n=>{const d=Number(n.target.value);e(d)};return i.jsxs("div",{className:u.twMerge("mb-2 w-full mt-4",a),children:[i.jsxs("div",{className:"flex items-center",children:[i.jsx("p",{className:"text-base text-[var(--color-foreground)] dark:text-[var(--color-foreground-dark)] mr-4",children:t}),i.jsx("input",{type:"range",min:1,max:10,step:1,value:r,onChange:l,className:"w-3/5 accent-[var(--color-secondary)] dark:accent-[var(--color-secondary-dark)]"}),i.jsx("p",{className:`
            ml-4 w-9 h-9 flex items-center justify-center rounded-full bg-[var(--color-secondary)] 
            text-[var(--color-foreground)] dark:text-[var(--color-secondary-dark)] text-sm`,children:r})]}),o&&c&&i.jsx("p",{className:"text-sm mt-2 ml-2 text-[var(--color-error)] dark:text-[var(--color-error-dark)]",children:"Este campo é obrigatório"})]})}function et({isChecked:r,onChange:e,label:t,isValidating:o,error:c,className:a}){return i.jsxs("div",{className:u.twMerge("mb-2 w-full mt-5",a),children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("p",{className:"text-base text-[var(--color-foreground)] dark:text-[var(--color-foreground-dark)]",children:t}),i.jsx("button",{type:"button",onClick:e,className:u.twMerge("relative w-11 h-6 transition-colors duration-200 ease-in-out rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2",r?"bg-[var(--color-secondary)] focus:ring-[var(--color-secondary)]":"bg-[var(--color-muted)] dark:bg-[var(--color-muted-dark)] focus:ring-[var(--color-muted)]"),children:i.jsx("span",{className:u.twMerge("absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200",r?"translate-x-5":"translate-x-0")})})]}),o&&c&&i.jsx("p",{className:"text-sm mt-2 ml-2 text-[var(--color-error)] dark:text-[var(--color-error-dark)]",children:"Este campo é obrigatório"})]})}function rt({loading:r,className:e}){return r?i.jsx("div",{className:`
        absolute top-0 left-0 flex items-center justify-center h-full w-full z-[1000]
        backdrop-blur-sm dardk:bg-[rgba(0,0,0,0.5)] bg-[rgba(255, 255, 255, 0.5)] border border-[var(--color-primary)/20]
        ${e}
      `,children:i.jsx("div",{className:`
          w-12 h-12 border-4
          border-[var(--color-secondary)/30]
          border-t-[var(--color-secondary)]
          rounded-full animate-spin
          text-secondary-active
        `})}):null}const tt={primary:`
    bg-[var(--color-primary)] text-[var(--color-primary-foreground)]
    hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-active)]
    dark:bg-[var(--color-primary-dark)] dark:hover:bg-[var(--color-primary-hover-dark)] dark:active:bg-[var(--color-primary-active-dark)]
    dark:text-[var(--color-primary-foreground-dark)]
  `,secondary:`
    bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)]
    hover:bg-[var(--color-secondary-hover)] active:bg-[var(--color-secondary-active)]
    dark:bg-[var(--color-secondary-dark)] dark:hover:bg-[var(--color-secondary-hover-dark)] dark:active:bg-[var(--color-secondary-active-dark)]
    dark:text-[var(--color-secondary-foreground-dark)]
  `,cancel:`
    bg-[var(--color-cancel)] text-[var(--color-cancel-foreground)]
    hover:bg-[var(--color-cancel-hover)] active:bg-[var(--color-cancel-active)]
    dark:bg-[var(--color-cancel-dark)] dark:hover:bg-[var(--color-cancel-hover-dark)] dark:active:bg-[var(--color-cancel-active-dark)]
    dark:text-[var(--color-cancel-foreground-dark)]
  `,danger:`
    bg-red-600 text-white
    hover:bg-red-700 active:bg-red-800
    dark:bg-red-500 dark:hover:bg-red-600 dark:active:bg-red-700
  `},ot=`
  w-full min-h-[48px] min-w-[140px] py-3 px-4 mt-5 
  rounded-lg
  transition shadow-theme-xs cursor-pointer
`;function U({className:r,children:e,variant:t="secondary",...o}){return i.jsx("button",{className:u.twMerge(ot,tt[t],r),...o,children:e})}/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),st=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),Z=r=>{const e=st(r);return e.charAt(0).toUpperCase()+e.slice(1)},Ae=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),ct=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var nt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,...nt,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:Ae("lucide",c),...!a&&!ct(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement(it,{ref:a,iconNode:e,className:Ae(`lucide-${at(Z(r))}`,`lucide-${r}`,o),...c}));return t.displayName=Z(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Le("chevrons-left",lt);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Le("chevrons-right",dt);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ht=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),mt=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),S=r=>{const e=mt(r);return e.charAt(0).toUpperCase()+e.slice(1)},We=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),ut=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var pt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,...pt,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:We("lucide",c),...!a&&!ut(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement(kt,{ref:a,iconNode:e,className:We(`lucide-${ht(S(r))}`,`lucide-${r}`,o),...c}));return t.displayName=S(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Me("chevrons-left",ft);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Me("chevrons-right",wt);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),yt=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),_=r=>{const e=yt(r);return e.charAt(0).toUpperCase()+e.slice(1)},$e=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),xt=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var gt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,...gt,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:$e("lucide",c),...!a&&!xt(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement(Nt,{ref:a,iconNode:e,className:$e(`lucide-${vt(_(r))}`,`lucide-${r}`,o),...c}));return t.displayName=_(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];ze("chevrons-left",bt);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];ze("chevrons-right",Ct);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),At=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),B=r=>{const e=At(r);return e.charAt(0).toUpperCase()+e.slice(1)},Ee=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),Lt=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Wt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,...Wt,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:Ee("lucide",c),...!a&&!Lt(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement(Mt,{ref:a,iconNode:e,className:Ee(`lucide-${jt(B(r))}`,`lucide-${r}`,o),...c}));return t.displayName=B(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];qe("chevrons-left",$t);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];qe("chevrons-right",zt);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),qt=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),O=r=>{const e=qt(r);return e.charAt(0).toUpperCase()+e.slice(1)},Re=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),Rt=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ut={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,...Ut,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:Re("lucide",c),...!a&&!Rt(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement(Zt,{ref:a,iconNode:e,className:Re(`lucide-${Et(O(r))}`,`lucide-${r}`,o),...c}));return t.displayName=O(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Ue("chevrons-left",St);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Ue("chevrons-right",_t);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ot=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),V=r=>{const e=Ot(r);return e.charAt(0).toUpperCase()+e.slice(1)},Ze=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),Vt=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Tt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,...Tt,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:Ze("lucide",c),...!a&&!Vt(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement(Ft,{ref:a,iconNode:e,className:Ze(`lucide-${Bt(V(r))}`,`lucide-${r}`,o),...c}));return t.displayName=V(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Se("chevrons-left",Ht);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Se("chevrons-right",It);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Dt=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),T=r=>{const e=Dt(r);return e.charAt(0).toUpperCase()+e.slice(1)},_e=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),Xt=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Kt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,...Kt,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:_e("lucide",c),...!a&&!Xt(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement(Yt,{ref:a,iconNode:e,className:_e(`lucide-${Pt(T(r))}`,`lucide-${r}`,o),...c}));return t.displayName=T(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Be("chevrons-left",Gt);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Be("chevrons-right",Jt);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),eo=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),F=r=>{const e=eo(r);return e.charAt(0).toUpperCase()+e.slice(1)},Oe=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),ro=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var to={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,...to,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:Oe("lucide",c),...!a&&!ro(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement(oo,{ref:a,iconNode:e,className:Oe(`lucide-${Qt(F(r))}`,`lucide-${r}`,o),...c}));return t.displayName=F(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ao=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Ve("chevrons-left",ao);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Ve("chevrons-right",so);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),no=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),H=r=>{const e=no(r);return e.charAt(0).toUpperCase()+e.slice(1)},Te=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),io=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var lo={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,...lo,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:Te("lucide",c),...!a&&!io(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement(ho,{ref:a,iconNode:e,className:Te(`lucide-${co(H(r))}`,`lucide-${r}`,o),...c}));return t.displayName=H(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Fe("chevrons-left",mo);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Fe("chevrons-right",uo);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const po=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ko=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),I=r=>{const e=ko(r);return e.charAt(0).toUpperCase()+e.slice(1)},He=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),fo=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var wo={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,...wo,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:He("lucide",c),...!a&&!fo(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement(vo,{ref:a,iconNode:e,className:He(`lucide-${po(I(r))}`,`lucide-${r}`,o),...c}));return t.displayName=I(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Ie("chevrons-left",yo);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Ie("chevrons-right",xo);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),No=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),P=r=>{const e=No(r);return e.charAt(0).toUpperCase()+e.slice(1)},Pe=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),bo=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Co={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,...Co,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:Pe("lucide",c),...!a&&!bo(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement(jo,{ref:a,iconNode:e,className:Pe(`lucide-${go(P(r))}`,`lucide-${r}`,o),...c}));return t.displayName=P(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];De("chevrons-left",Ao);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];De("chevrons-right",Lo);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wo=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Mo=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),D=r=>{const e=Mo(r);return e.charAt(0).toUpperCase()+e.slice(1)},Xe=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),$o=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var zo={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,...zo,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:Xe("lucide",c),...!a&&!$o(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement(Eo,{ref:a,iconNode:e,className:Xe(`lucide-${Wo(D(r))}`,`lucide-${r}`,o),...c}));return t.displayName=D(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qo=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Ke("chevrons-left",qo);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ro=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Ke("chevrons-right",Ro);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Zo=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),X=r=>{const e=Zo(r);return e.charAt(0).toUpperCase()+e.slice(1)},Ye=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),So=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,..._o,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:Ye("lucide",c),...!a&&!So(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement(Bo,{ref:a,iconNode:e,className:Ye(`lucide-${Uo(X(r))}`,`lucide-${r}`,o),...c}));return t.displayName=X(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Ge("chevrons-left",Oo);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Ge("chevrons-right",Vo);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Fo=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),K=r=>{const e=Fo(r);return e.charAt(0).toUpperCase()+e.slice(1)},Je=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),Ho=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Io={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Po=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,...Io,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:Je("lucide",c),...!a&&!Ho(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement(Po,{ref:a,iconNode:e,className:Je(`lucide-${To(K(r))}`,`lucide-${r}`,o),...c}));return t.displayName=K(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Qe("chevrons-left",Do);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Qe("chevrons-right",Xo);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Yo=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),Y=r=>{const e=Yo(r);return e.charAt(0).toUpperCase()+e.slice(1)},er=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),Go=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Jo={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,...Jo,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:er("lucide",c),...!a&&!Go(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement(Qo,{ref:a,iconNode:e,className:er(`lucide-${Ko(Y(r))}`,`lucide-${r}`,o),...c}));return t.displayName=Y(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];rr("chevrons-left",ea);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];rr("chevrons-right",ra);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),oa=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),G=r=>{const e=oa(r);return e.charAt(0).toUpperCase()+e.slice(1)},tr=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),aa=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var sa={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,...sa,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:tr("lucide",c),...!a&&!aa(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const or=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement(ca,{ref:a,iconNode:e,className:tr(`lucide-${ta(G(r))}`,`lucide-${r}`,o),...c}));return t.displayName=G(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];or("chevrons-left",na);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];or("chevrons-right",ia);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),da=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),J=r=>{const e=da(r);return e.charAt(0).toUpperCase()+e.slice(1)},ar=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),ha=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ma={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ua=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,...ma,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:ar("lucide",c),...!a&&!ha(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement(ua,{ref:a,iconNode:e,className:ar(`lucide-${la(J(r))}`,`lucide-${r}`,o),...c}));return t.displayName=J(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];sr("chevrons-left",pa);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];sr("chevrons-right",ka);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),wa=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),Q=r=>{const e=wa(r);return e.charAt(0).toUpperCase()+e.slice(1)},cr=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),va=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ya={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xa=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,...ya,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:cr("lucide",c),...!a&&!va(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement(xa,{ref:a,iconNode:e,className:cr(`lucide-${fa(Q(r))}`,`lucide-${r}`,o),...c}));return t.displayName=Q(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];nr("chevrons-left",ga);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];nr("chevrons-right",Na);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ca=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),ee=r=>{const e=Ca(r);return e.charAt(0).toUpperCase()+e.slice(1)},ir=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),ja=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Aa={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,...Aa,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:ir("lucide",c),...!a&&!ja(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lr=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement(La,{ref:a,iconNode:e,className:ir(`lucide-${ba(ee(r))}`,`lucide-${r}`,o),...c}));return t.displayName=ee(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wa=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];lr("chevrons-left",Wa);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ma=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];lr("chevrons-right",Ma);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),za=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),re=r=>{const e=za(r);return e.charAt(0).toUpperCase()+e.slice(1)},dr=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),Ea=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qa={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ra=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,...qa,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:dr("lucide",c),...!a&&!Ea(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement(Ra,{ref:a,iconNode:e,className:dr(`lucide-${$a(re(r))}`,`lucide-${r}`,o),...c}));return t.displayName=re(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ua=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];hr("chevrons-left",Ua);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Za=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];hr("chevrons-right",Za);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),_a=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),te=r=>{const e=_a(r);return e.charAt(0).toUpperCase()+e.slice(1)},mr=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),Ba=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Oa={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Va=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,...Oa,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:mr("lucide",c),...!a&&!Ba(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ur=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement(Va,{ref:a,iconNode:e,className:mr(`lucide-${Sa(te(r))}`,`lucide-${r}`,o),...c}));return t.displayName=te(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];ur("chevrons-left",Ta);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fa=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];ur("chevrons-right",Fa);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ha=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ia=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),oe=r=>{const e=Ia(r);return e.charAt(0).toUpperCase()+e.slice(1)},pr=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),Pa=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Da={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xa=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,...Da,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:pr("lucide",c),...!a&&!Pa(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement(Xa,{ref:a,iconNode:e,className:pr(`lucide-${Ha(oe(r))}`,`lucide-${r}`,o),...c}));return t.displayName=oe(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];kr("chevrons-left",Ka);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];kr("chevrons-right",Ya);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ga=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ja=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),ae=r=>{const e=Ja(r);return e.charAt(0).toUpperCase()+e.slice(1)},fr=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),Qa=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var es={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,...es,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:fr("lucide",c),...!a&&!Qa(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement(rs,{ref:a,iconNode:e,className:fr(`lucide-${Ga(ae(r))}`,`lucide-${r}`,o),...c}));return t.displayName=ae(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];wr("chevrons-left",ts);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];wr("chevrons-right",os);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const as=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ss=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),se=r=>{const e=ss(r);return e.charAt(0).toUpperCase()+e.slice(1)},vr=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),cs=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ns={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,...ns,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:vr("lucide",c),...!a&&!cs(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement(is,{ref:a,iconNode:e,className:vr(`lucide-${as(se(r))}`,`lucide-${r}`,o),...c}));return t.displayName=se(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];yr("chevrons-left",ls);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];yr("chevrons-right",ds);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ms=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),ce=r=>{const e=ms(r);return e.charAt(0).toUpperCase()+e.slice(1)},xr=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),us=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ps={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ks=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,...ps,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:xr("lucide",c),...!a&&!us(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement(ks,{ref:a,iconNode:e,className:xr(`lucide-${hs(ce(r))}`,`lucide-${r}`,o),...c}));return t.displayName=ce(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];gr("chevrons-left",fs);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];gr("chevrons-right",ws);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ys=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),ne=r=>{const e=ys(r);return e.charAt(0).toUpperCase()+e.slice(1)},Nr=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),xs=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var gs={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ns=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,...gs,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:Nr("lucide",c),...!a&&!xs(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement(Ns,{ref:a,iconNode:e,className:Nr(`lucide-${vs(ne(r))}`,`lucide-${r}`,o),...c}));return t.displayName=ne(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];br("chevrons-left",bs);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cs=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];br("chevrons-right",Cs);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const js=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),As=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),ie=r=>{const e=As(r);return e.charAt(0).toUpperCase()+e.slice(1)},Cr=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),Ls=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ws={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ms=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,...Ws,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:Cr("lucide",c),...!a&&!Ls(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jr=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement(Ms,{ref:a,iconNode:e,className:Cr(`lucide-${js(ie(r))}`,`lucide-${r}`,o),...c}));return t.displayName=ie(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $s=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];jr("chevrons-left",$s);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zs=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];jr("chevrons-right",zs);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Es=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),qs=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),le=r=>{const e=qs(r);return e.charAt(0).toUpperCase()+e.slice(1)},Ar=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),Rs=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Us={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zs=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,...Us,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:Ar("lucide",c),...!a&&!Rs(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement(Zs,{ref:a,iconNode:e,className:Ar(`lucide-${Es(le(r))}`,`lucide-${r}`,o),...c}));return t.displayName=le(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ss=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];j("check-check",Ss);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _s=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];j("chevrons-left",_s);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bs=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];j("chevrons-right",Bs);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Os=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];j("info",Os);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vs=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];j("link",Vs);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];j("pencil",Ts);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fs=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];j("trash",Fs);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hs=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Is=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),de=r=>{const e=Is(r);return e.charAt(0).toUpperCase()+e.slice(1)},Lr=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),Ps=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ds={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xs=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,...Ds,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:Lr("lucide",c),...!a&&!Ps(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement(Xs,{ref:a,iconNode:e,className:Lr(`lucide-${Hs(de(r))}`,`lucide-${r}`,o),...c}));return t.displayName=de(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ks=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];A("check-check",Ks);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ys=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];A("chevrons-left",Ys);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gs=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];A("chevrons-right",Gs);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Js=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];A("info",Js);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qs=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];A("link",Qs);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];A("pencil",ec);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];A("trash",rc);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tc=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),oc=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),he=r=>{const e=oc(r);return e.charAt(0).toUpperCase()+e.slice(1)},Wr=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),ac=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var sc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,...sc,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:Wr("lucide",c),...!a&&!ac(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement(cc,{ref:a,iconNode:e,className:Wr(`lucide-${tc(he(r))}`,`lucide-${r}`,o),...c}));return t.displayName=he(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nc=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];L("check-check",nc);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];L("chevrons-left",ic);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];L("chevrons-right",lc);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];L("info",dc);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];L("link",hc);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];L("pencil",mc);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];L("trash",uc);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),kc=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),me=r=>{const e=kc(r);return e.charAt(0).toUpperCase()+e.slice(1)},Mr=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),fc=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var wc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,...wc,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:Mr("lucide",c),...!a&&!fc(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement(vc,{ref:a,iconNode:e,className:Mr(`lucide-${pc(me(r))}`,`lucide-${r}`,o),...c}));return t.displayName=me(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];W("check-check",yc);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];W("chevrons-left",xc);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];W("chevrons-right",gc);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];W("info",Nc);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];W("link",bc);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];W("pencil",Cc);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];W("trash",jc);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Lc=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),ue=r=>{const e=Lc(r);return e.charAt(0).toUpperCase()+e.slice(1)},$r=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),Wc=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Mc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $c=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,...Mc,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:$r("lucide",c),...!a&&!Wc(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement($c,{ref:a,iconNode:e,className:$r(`lucide-${Ac(ue(r))}`,`lucide-${r}`,o),...c}));return t.displayName=ue(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];M("check-check",zc);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ec=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];M("chevrons-left",Ec);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];M("chevrons-right",qc);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];M("info",Rc);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];M("link",Uc);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];M("pencil",Zc);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];M("trash",Sc);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _c=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Bc=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),pe=r=>{const e=Bc(r);return e.charAt(0).toUpperCase()+e.slice(1)},zr=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),Oc=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Vc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,...Vc,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:zr("lucide",c),...!a&&!Oc(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement(Tc,{ref:a,iconNode:e,className:zr(`lucide-${_c(pe(r))}`,`lucide-${r}`,o),...c}));return t.displayName=pe(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];y("check-check",Fc);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];y("chevron-down",Hc);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];y("chevron-up",Ic);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pc=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];y("chevrons-left",Pc);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];y("chevrons-right",Dc);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];y("info",Xc);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];y("link",Kc);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];y("pencil",Yc);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];y("trash",Gc);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Qc=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),ke=r=>{const e=Qc(r);return e.charAt(0).toUpperCase()+e.slice(1)},Er=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),en=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var rn={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,...rn,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:Er("lucide",c),...!a&&!en(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement(tn,{ref:a,iconNode:e,className:Er(`lucide-${Jc(ke(r))}`,`lucide-${r}`,o),...c}));return t.displayName=ke(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];x("check-check",on);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];x("chevron-down",an);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];x("chevron-up",sn);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];x("chevrons-left",cn);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];x("chevrons-right",nn);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];x("info",ln);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];x("link",dn);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];x("pencil",hn);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];x("trash",mn);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),pn=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),fe=r=>{const e=pn(r);return e.charAt(0).toUpperCase()+e.slice(1)},qr=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),kn=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var fn={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,...fn,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:qr("lucide",c),...!a&&!kn(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement(wn,{ref:a,iconNode:e,className:qr(`lucide-${un(fe(r))}`,`lucide-${r}`,o),...c}));return t.displayName=fe(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];g("check-check",vn);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];g("chevron-down",yn);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];g("chevron-up",xn);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];g("chevrons-left",gn);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];g("chevrons-right",Nn);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];g("info",bn);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];g("link",Cn);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];g("pencil",jn);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];g("trash",An);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Wn=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),we=r=>{const e=Wn(r);return e.charAt(0).toUpperCase()+e.slice(1)},Rr=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),Mn=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,...$n,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:Rr("lucide",c),...!a&&!Mn(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement(zn,{ref:a,iconNode:e,className:Rr(`lucide-${Ln(we(r))}`,`lucide-${r}`,o),...c}));return t.displayName=we(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];N("check-check",En);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];N("chevron-down",qn);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];N("chevron-up",Rn);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];N("chevrons-left",Un);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];N("chevrons-right",Zn);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];N("info",Sn);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];N("link",_n);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];N("pencil",Bn);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];N("trash",On);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Tn=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),ve=r=>{const e=Tn(r);return e.charAt(0).toUpperCase()+e.slice(1)},Ur=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),Fn=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Hn={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,...Hn,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:Ur("lucide",c),...!a&&!Fn(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement(In,{ref:a,iconNode:e,className:Ur(`lucide-${Vn(ve(r))}`,`lucide-${r}`,o),...c}));return t.displayName=ve(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];b("check-check",Pn);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];b("chevron-down",Dn);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];b("chevron-up",Xn);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];b("chevrons-left",Kn);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];b("chevrons-right",Yn);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];b("info",Gn);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];b("link",Jn);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];b("pencil",Qn);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ei=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];b("trash",ei);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ri=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ti=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),ye=r=>{const e=ti(r);return e.charAt(0).toUpperCase()+e.slice(1)},Zr=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),oi=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ai={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const si=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,...ai,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:Zr("lucide",c),...!a&&!oi(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement(si,{ref:a,iconNode:e,className:Zr(`lucide-${ri(ye(r))}`,`lucide-${r}`,o),...c}));return t.displayName=ye(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ci=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];C("check-check",ci);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];C("chevron-down",ni);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ii=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];C("chevron-up",ii);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const li=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];C("chevrons-left",li);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const di=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];C("chevrons-right",di);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];C("info",hi);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mi=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];C("link",mi);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ui=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];C("pencil",ui);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pi=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];C("trash",pi);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),fi=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),xe=r=>{const e=fi(r);return e.charAt(0).toUpperCase()+e.slice(1)},Sr=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),wi=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var vi={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,...vi,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:Sr("lucide",c),...!a&&!wi(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement(yi,{ref:a,iconNode:e,className:Sr(`lucide-${ki(xe(r))}`,`lucide-${r}`,o),...c}));return t.displayName=xe(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xi=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];p("check-check",xi);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gi=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];p("chevron-down",gi);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ni=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];p("chevron-up",Ni);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bi=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];p("chevrons-left",bi);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ci=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];p("chevrons-right",Ci);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];p("info",ji);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];p("link",Ai);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Li=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];p("pencil",Li);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];p("trash",Wi);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];p("x",Mi);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),zi=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),ge=r=>{const e=zi(r);return e.charAt(0).toUpperCase()+e.slice(1)},_r=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),Ei=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qi={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ri=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,...qi,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:_r("lucide",c),...!a&&!Ei(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement(Ri,{ref:a,iconNode:e,className:_r(`lucide-${$i(ge(r))}`,`lucide-${r}`,o),...c}));return t.displayName=ge(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];k("check-check",Ui);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];k("chevron-down",Zi);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Si=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];k("chevron-up",Si);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _i=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];k("chevrons-left",_i);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];k("chevrons-right",Bi);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oi=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];k("info",Oi);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];k("link",Vi);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];k("pencil",Ti);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fi=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];k("trash",Fi);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hi=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];k("x",Hi);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Pi=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),Ne=r=>{const e=Pi(r);return e.charAt(0).toUpperCase()+e.slice(1)},Br=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),Di=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Xi={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,...Xi,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:Br("lucide",c),...!a&&!Di(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement(Ki,{ref:a,iconNode:e,className:Br(`lucide-${Ii(Ne(r))}`,`lucide-${r}`,o),...c}));return t.displayName=Ne(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];f("check-check",Yi);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gi=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];f("chevron-down",Gi);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];f("chevron-up",Ji);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];f("chevrons-left",Qi);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];f("chevrons-right",el);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rl=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];f("info",rl);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tl=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];f("link",tl);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ol=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];f("pencil",ol);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const al=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];f("trash",al);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sl=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];f("x",sl);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cl=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),nl=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),be=r=>{const e=nl(r);return e.charAt(0).toUpperCase()+e.slice(1)},Or=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),il=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ll={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dl=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,...ll,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:Or("lucide",c),...!a&&!il(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement(dl,{ref:a,iconNode:e,className:Or(`lucide-${cl(be(r))}`,`lucide-${r}`,o),...c}));return t.displayName=be(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hl=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];w("check-check",hl);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ml=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];w("chevron-down",ml);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ul=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];w("chevron-up",ul);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pl=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];w("chevrons-left",pl);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];w("chevrons-right",kl);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fl=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];w("info",fl);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];w("link",wl);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];w("pencil",vl);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];w("trash",yl);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];w("x",xl);function gl({text:r,children:e,className:t,coordTop:o,coordLeft:c}){const[a,l]=s.useState(!1),[n,d]=s.useState({top:0,left:0}),h=s.useRef(null);return s.useEffect(()=>{if(a&&h.current){const m=h.current.getBoundingClientRect();d({top:m.top+window.scrollY+(o??0),left:m.left+m.width/2+window.scrollX+(c??0)})}},[c,o,a]),i.jsxs("button",{className:u.twMerge("relative inline-block",t),onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),ref:h,children:[e,a&&je.createPortal(i.jsx("div",{style:{top:n.top-10,left:n.left,transform:"translate(-50%, -100%)",position:"absolute",zIndex:9999},className:u.twMerge("px-3 py-1 text-sm border rounded shadow-lg whitespace-nowrap","bg-[var(--color-background)] text-[var(--color-foreground)] border-[var(--color-muted)]"),children:r}),document.body)]})}function Vr({isOpen:r,onClose:e,children:t,className:o="",isFullscreen:c=!1,title:a}){return s.useEffect(()=>{const l=n=>{n.key==="Escape"&&e()};return r&&document.addEventListener("keydown",l),()=>{document.removeEventListener("keydown",l)}},[r,e]),s.useEffect(()=>(r?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[r]),r?i.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-6 sm:py-12",children:[!c&&i.jsx("div",{className:"fixed inset-0 bg-black/40 backdrop-blur-sm",onClick:e}),i.jsxs("div",{onClick:l=>l.stopPropagation(),className:u.twMerge(o,"border border-[#454545] relative z-50 w-full bg-[var(--color-background)] text-[var(--color-foreground)] dark:bg-[var(--color-background-dark)] dark:text-[var(--color-foreground-dark)] shadow-xl transition-all",c?"h-full":"max-w-lg rounded-xl p-6"),children:[i.jsxs("div",{children:[i.jsx("p",{className:"mt-[-10px] text-[20px] text-[var(--color-foreground)] dark:text-[var(--color-foreground-dark)]",children:a}),i.jsxs("button",{onClick:e,className:"absolute top-4 right-3 text-[var(--color-muted)] hover:text-[var(--color-secondary)] cursor-pointer",children:[i.jsx("span",{className:"sr-only",children:"Close modal"}),i.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",strokeWidth:2,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})]})]}),i.jsx("div",{className:"mt-4",children:t})]})]}):null}function Nl({isOpen:r,onClose:e,performAction:t,description:o,title:c,className:a="",isFullscreen:l=!1}){return i.jsxs(Vr,{isOpen:r,onClose:e,title:c,className:a,isFullscreen:l,children:[i.jsx("h3",{className:"mt-5 mb-2 text-[var(--color-foreground)] dark:text-[var(--color-foreground-dark)]",children:o}),i.jsxs("div",{className:"flex flex-row justify-end",children:[i.jsx(U,{type:"button",className:"max-w-[100px] mr-2",onClick:e,variant:"secondary",children:"Cancelar"}),i.jsx(U,{type:"button",className:"max-w-[100px]",onClick:t,variant:"danger",children:"Confirmar"})]})]})}/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Cl=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),Ce=r=>{const e=Cl(r);return e.charAt(0).toUpperCase()+e.slice(1)},Tr=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),jl=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Al={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ll=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:l,...n},d)=>s.createElement("svg",{ref:d,...Al,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:Tr("lucide",c),...!a&&!jl(n)&&{"aria-hidden":"true"},...n},[...l.map(([h,m])=>s.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=(r,e)=>{const t=s.forwardRef(({className:o,...c},a)=>s.createElement(Ll,{ref:a,iconNode:e,className:Tr(`lucide-${bl(Ce(r))}`,`lucide-${r}`,o),...c}));return t.displayName=Ce(r),t};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]],Ml=v("check-check",Wl);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $l=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],zl=v("chevron-down",$l);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],ql=v("chevron-up",El);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]],Ul=v("chevrons-left",Rl);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]],Sl=v("chevrons-right",Zl);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _l=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Bl=v("info",_l);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ol=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],Vl=v("link",Ol);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],Fl=v("pencil",Tl);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]],Il=v("trash",Hl);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Dl=v("x",Pl);function Xl({totalData:r,currentPage:e,setCurrentPage:t,elementsPerPage:o=20}){const c=Math.ceil(r/o);if(r===0||r<o)return null;const a=l=>{t(l)};return i.jsx("div",{className:"w-full flex flex-col justify-center items-center mb-10 mt-5",children:i.jsxs("div",{className:"max-w-[400px] w-full flex flex-row justify-around items-center",children:[i.jsx(Ul,{className:"text-[var(--color-secondary)] cursor-pointer",onClick:()=>a(1)}),Array.from({length:c},(l,n)=>i.jsx("button",{onClick:()=>a(n+1),className:u.twMerge("flex justify-center items-center w-[40px] h-[40px] text-sm rounded-full transition-colors duration-200 cursor-pointer",e===n+1?`bg-[var(--color-secondary-active)] text-[var(--color-primary-foreground)] 
                   dark:bg-[var(--color-secondary-active-dark)] dark:text-[var(--color-primary-foreground-dark)]`:"text-[var(--color-foreground)] dark:text-[var(--color-foreground-dark)] hover:bg-[var(--color-muted-dark)/10]"),children:n+1},n+1)),i.jsx(Sl,{className:"text-[var(--color-secondary)] cursor-pointer",onClick:()=>a(c)})]})})}function Kl({data:r,columns:e,rowActions:t}){return i.jsx("div",{className:"shadow-sm border border-[var(--color-muted)] rounded-md text-[var(--color-foreground)] overflow-x-auto w-full",children:i.jsxs("table",{className:"min-w-[800px] table-auto w-full",children:[i.jsx("thead",{children:i.jsxs("tr",{className:"border-b border-[var(--color-muted)] bg-[var(--color-background)] dark:bg-[var(--color-background-dark)]",children:[e.map(o=>i.jsx("th",{className:"px-4 py-2 text-[16px] text-left font-semibold text-[var(--color-secondary)]",children:o.title},o.key)),t&&i.jsx("th",{className:"px-4 py-2 text-center"})]})}),i.jsx("tbody",{children:r.length===0?i.jsx("tr",{children:i.jsx("td",{colSpan:e.length+(t?1:0),className:"px-4 py-4 text-center text-[var(--color-muted)]",children:"Nenhum registro encontrado!"})}):r.map((o,c)=>i.jsxs("tr",{className:c===r.length-1?"":"border-b border-[var(--color-muted)]",children:[e.map(a=>{const l=o[a.key];return i.jsx("td",{className:"px-4 py-2 text-[14px] font-normal text-left text-[var(--color-foreground)] dark:text-[var(--color-foreground-dark)]",children:a.render?a.render(l,o):l},String(a.key))}),t&&i.jsx("td",{className:"px-4 py-2 whitespace-nowrap w-[5%]",children:t(o)})]},c))})]})})}function z({text:r,children:e,className:t,coordTop:o,coordLeft:c}){const[a,l]=s.useState(!1),[n,d]=s.useState({top:0,left:0}),h=s.useRef(null);return s.useEffect(()=>{if(a&&h.current){const m=h.current.getBoundingClientRect();d({top:m.top+window.scrollY+(o??0),left:m.left+m.width/2+window.scrollX+(c??0)})}},[c,o,a]),i.jsxs("button",{className:u.twMerge("relative inline-block",t),onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),ref:h,children:[e,a&&je.createPortal(i.jsx("div",{style:{top:n.top-10,left:n.left,transform:"translate(-50%, -100%)",position:"absolute",zIndex:9999},className:u.twMerge("px-3 py-1 text-sm border rounded shadow-lg whitespace-nowrap","bg-[var(--color-background)] text-[var(--color-foreground)] border-[var(--color-muted)]"),children:r}),document.body)]})}function Yl({type:r,action:e,textTooltip:t}){const o="w-[18px] h-[18px] cursor-pointer text-[var(--color-secondary)] dark:text-[var(--color-secondary-dark)] mx-1";return{edit:i.jsx(z,{text:t,children:i.jsx(Fl,{className:o,onClick:e})},"tableActionEdit"),delete:i.jsx(z,{text:t,children:i.jsx(Il,{className:o,onClick:e})},"tableActionDelete"),link:i.jsx(z,{text:t,children:i.jsx(Vl,{className:o,onClick:e})},"tableActionLink"),info:i.jsx(z,{text:t,children:i.jsx(Bl,{className:o,onClick:e})},"tableActionInfo"),check:i.jsx(z,{text:t,children:i.jsx(Ml,{className:o,onClick:e})},"tableActionCheck")}[r]}function Gl({tabs:r,defaultTabKey:e}){var a,l;const[t,o]=s.useState(e||((a=r[0])==null?void 0:a.key));s.useEffect(()=>{!r.some(d=>d.key===t)&&r.length>0&&o(r[0].key)},[r,t]);const c=(l=r.find(n=>n.key===t))==null?void 0:l.content;return i.jsxs("div",{className:"overflow-x-auto p-4 sm:p-6",children:[i.jsx("div",{className:"border border-[var(--color-border)] rounded-t-xl bg-[var(--color-surface)]",children:i.jsx("nav",{className:"flex overflow-x-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white h-[50px]",children:r.map(n=>{const d=t===n.key;return i.jsx("button",{onClick:()=>o(n.key),className:u.twMerge("inline-flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer rounded-md",d?"bg-[var(--color-primary)] text-[var(--color-on-primary)] shadow":"bg-transparent text-[var(--color-text)] hover:text-[var(--color-primary)]"),children:n.label},n.key)})})}),i.jsx("div",{className:"rounded-b-xl border border-t-0 border-[var(--color-border)] p-6 pt-4 bg-[var(--color-surface)] text-[var(--color-text)]",children:c})]})}function Jl({tabs:r,defaultTab:e,actions:t,className:o}){var n;const[c,a]=s.useState(e||((n=r[0])==null?void 0:n.id)||""),l=r.find(d=>d.id===c);return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:u.twMerge("fixed top-[50px] left-0 h-[calc(100%-50px)] w-12 flex flex-col justify-between py-4 z-50 bg-[var(--color-surface)] border-r border-[var(--color-border)]",o),children:[i.jsx("div",{className:"flex flex-col items-center space-y-4",children:r.map(d=>i.jsx("button",{onClick:()=>a(d.id),className:u.twMerge("p-2 rounded transition-colors cursor-pointer text-[var(--color-text)] hover:bg-[var(--color-hover)]",c===d.id&&"bg-[var(--color-hover)]"),"aria-label":`Tab ${d.id}`,children:d.icon},d.id))}),i.jsx("div",{className:"flex flex-col items-center space-y-3 mb-2",children:t==null?void 0:t.map(d=>i.jsx("span",{onClick:d.action,className:"cursor-pointer hover:bg-[var(--color-hover)] p-2 rounded transition-colors text-[var(--color-text)]",children:i.jsx(gl,{text:d.text,coordLeft:70,children:d.icon})},d.id))})]}),i.jsx("div",{className:"fixed top-[50px] left-12 h-[calc(100%-50px)] w-64 bg-[var(--color-surface)] border-r border-[var(--color-border)] shadow-lg z-40 overflow-y-auto text-[var(--color-text)]",children:l==null?void 0:l.content})]})}function Ql({title:r,children:e,defaultOpen:t=!1,className:o}){const[c,a]=s.useState(t);return i.jsxs("div",{className:u.twMerge("overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] shadow-sm",o),children:[i.jsxs("button",{className:"flex w-full items-center justify-between px-4 py-5 cursor-pointer hover:bg-[var(--color-hover)] transition-colors",onClick:()=>a(l=>!l),"aria-expanded":c,"aria-controls":"accordion-content",children:[i.jsx("span",{className:"text-sm font-medium",children:r}),c?i.jsx(ql,{className:"w-4 h-4 text-[var(--color-text)]"}):i.jsx(zl,{className:"w-4 h-4 text-[var(--color-text)]"})]}),i.jsx("div",{id:"accordion-content",className:`transition-all duration-300 ease-in-out overflow-hidden ${c?"max-h-screen py-2 px-2":"max-h-0 p-0"}`,children:i.jsx("div",{className:"text-sm",children:e})})]})}function ed({children:r,href:e,className:t="",disabled:o=!1}){return i.jsx("a",{href:o?"/":e,"aria-disabled":o,className:u.twMerge(`
        mt-5 inline-block min-w-[140px] rounded-lg bg-[var(--color-primary)] 
        px-4 py-2 text-center text-[16px] text-white transition 
        shadow-theme-xs hover:bg-[var(--color-primary-hover)] 
        disabled:pointer-events-none disabled:opacity-50
        `,o&&"cursor-not-allowed",t),children:r})}const rd={success:"bg-[var(--color-success)] text-[var(--color-on-success)]",error:"bg-[var(--color-error)] text-[var(--color-on-error)]",warning:"bg-[var(--color-warning)] text-[var(--color-on-warning)]",info:"bg-[var(--color-info)] text-[var(--color-on-info)]"};function td({open:r,message:e,severity:t="info",autoHideDuration:o=6e3,onClose:c}){return s.useEffect(()=>{if(r){const a=setTimeout(c,o);return()=>clearTimeout(a)}},[r,o,c]),i.jsx("div",{className:`
        fixed bottom-4 right-4 z-50
        transition-all duration-300 ease-in-out
        ${r?"opacity-100 translate-y-0":"opacity-0 translate-y-4 pointer-events-none"}
      `,children:i.jsxs("div",{className:`
          flex items-center gap-3 px-4 py-3 rounded-md shadow-lg w-80
          ${rd[t]}
        `,children:[i.jsx("span",{className:"flex-1 text-sm",children:e}),i.jsx("button",{onClick:c,"aria-label":"Fechar notificação",children:i.jsx(Dl,{className:"w-4 h-4 cursor-pointer hover:opacity-80 transition-opacity"})})]})})}function od(){const[r,e]=s.useState(null);s.useEffect(()=>{const o=localStorage.getItem("theme"),c=window.matchMedia("(prefers-color-scheme: dark)").matches,a=o?o==="dark":c;e(a),t(a)},[]),s.useEffect(()=>{r!==null&&t(r)},[r]);const t=o=>{const c=document.documentElement;o?(c.classList.add("dark"),c.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark")):(c.classList.remove("dark"),c.setAttribute("data-theme","light"),localStorage.setItem("theme","light"))};return r===null?null:i.jsx("button",{type:"button",onClick:()=>e(!r),className:"cursor-pointer flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--color-secondary)] text-[var(--color-on-secondary)] hover:opacity-90 transition",children:r?"🌙 Modo Escuro":"☀️ Modo Claro"})}exports.Accordion=Ql;exports.Button=Ir;exports.CustomLink=ed;exports.FormCheckbox=Dr;exports.FormInput=Xr;exports.FormInputPassword=Kr;exports.FormLabel=q;exports.FormSelect=Yr;exports.FormSlider=Qr;exports.FormSwitch=et;exports.FormTextArea=Gr;exports.MessageError=Jr;exports.ModalConfirmation=Nl;exports.ModalDefault=Vr;exports.Pagination=Xl;exports.Progress=rt;exports.SnackBar=td;exports.Table=Kl;exports.TableAction=Yl;exports.Tabs=Gl;exports.ThemeToggle=od;exports.Tooltip=z;exports.VerticalTabs=Jl;exports.getBorderColor=E;
