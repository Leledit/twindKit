"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const p=require("react/jsx-runtime"),j=require("tailwind-merge"),i=require("react"),fl=require("react-dom");function jm(t){const e=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(t){for(const r in t)if(r!=="default"){const a=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,a.get?a:{enumerable:!0,get:()=>t[r]})}}return e.default=t,Object.freeze(e)}const ho=jm(i),zm={primary:`
    bg-[var(--color-primary)] text-[var(--color-primary-foreground)]
    hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-active)]
    dark:bg-[var(--color-primary-dark)] dark:hover:bg-[var(--color-primary-hover-dark)] dark:active:bg-[var(--color-primary-active-dark)]
    dark:text-[var(--color-primary-foreground-dark)]
  `,secondary:`
    bg-[var(--color-secondary)] text-[var(--color-secondary-active)]
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
  `},Wm=`
  w-full min-h-[48px] min-w-[140px] py-3 px-4 mt-5 
  rounded-lg
  transition shadow-theme-xs cursor-pointer
`;function Br({className:t,children:e,variant:r="secondary",...a}){return p.jsx("button",{className:j.twMerge(Wm,zm[r],t),...a,children:e})}const qm={sm:{box:"w-4 h-4",icon:"w-2.5 h-2.5",label:"text-xs"},md:{box:"w-5 h-5",icon:"w-3 h-3",label:"text-sm"},lg:{box:"w-6 h-6",icon:"w-3.5 h-3.5",label:"text-base"}};function Em({checked:t,onChange:e,label:r,classNameLabel:a="",classNameInput:n="",size:o="md"}){const c=qm[o];return p.jsxs("label",{className:`inline-flex items-center cursor-pointer ${a}`,children:[p.jsx("input",{type:"checkbox",checked:t,onChange:e,className:"peer hidden"}),p.jsx("div",{className:j.twMerge(`
          flex items-center justify-center rounded border 
          ${c.box}
          border-[var(--color-muted)]
          peer-checked:bg-[var(--color-secondary-foreground)]
          peer-checked:border-[var(--color-secondary-foreground)]
          transition-colors
          dark:border-[var(--color-muted-dark)]
          dark:peer-checked:bg-[var(--color-secondary-foreground-dark)]
          dark:peer-checked:border-[var(--color-secondary-foreground-dark)]
        `,n),children:p.jsx("svg",{className:j.twMerge(`
            ${c.icon} hidden peer-checked:block 
            text-[var(--color-secondary-foreground)] 
            dark:text-[var(--color-secondary-foreground-dark)]
          `),viewBox:"0 0 24 24",children:p.jsx("path",{fill:"currentColor",d:"M9 16.2l-3.5-3.6L4 14l5 5 12-12-1.5-1.4z"})})}),r&&p.jsx("span",{className:j.twMerge(`
            ml-2 ${c.label}
            text-[var(--color-primary-foreground)] 
            dark:text-[var(--color-primary-foreground-dark)]
          `),children:r})]})}function Kr(t,e){return t?"border-[var(--color-error)] focus:border-[var(--color-error)]":e?"border-[var(--color-success)] focus:border-[var(--color-success)]":"border-[var(--color-secondary)] focus:border-[var(--color-secondary)] dark:border-[var(--color-muted-dark)] dark:focus:border-[var(--color-secondary-dark)]"}function Gr({htmlFor:t,children:e,className:r}){return p.jsx("label",{htmlFor:t,className:j.twMerge(`block mb-1 text-sm font-medium 
         text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)]`,r),children:e})}function kl({label:t,error:e=!1,success:r=!1,disabled:a=!1,messageError:n="Campo obrigatório",isValidating:o,icon:c,className:s="",onChange:l,...d}){const h=e&&o,u=h?"text-[var(--color-error)]":r?"text-[var(--color-success)]":"text-[var(--color-muted)] dark:text-[var(--color-muted-dark)]";return p.jsxs("div",{className:"w-full mt-5",children:[t&&p.jsx(Gr,{children:t}),p.jsxs("div",{className:"relative",children:[c&&p.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:p.jsx(c,{className:`h-5 w-5 ${u}`})}),p.jsx("input",{disabled:a,onChange:l,className:j.twMerge(`block w-full rounded-md py-3 px-4 transition duration-200 border focus:outline-none appearance-none transition duration-200
             bg-[var(--color-primary)] text-[var(--color-primary-foreground)] placeholder-[var(--color-muted)] 
             dark:bg-[var(--color-primary-dark)] dark:text-[var(--color-primary-foreground-dark)] dark:placeholder-[var(--color-muted-dark)]
            `,c?"pl-10":"",Kr(h,r),a?"opacity-60 cursor-not-allowed":"",s),...d})]}),h&&n&&p.jsx("p",{className:"mt-2 text-sm text-[var(--color-error)]",children:n})]})}function $m({label:t,error:e=!1,success:r=!1,disabled:a=!1,messageError:n="Campo obrigatório",isValidating:o,onChange:c,...s}){const[l,d]=i.useState(!1),h=e&&o;return p.jsxs("div",{className:"w-full mt-5",children:[t&&p.jsx("label",{htmlFor:s.id,className:"block mb-1 text-sm font-medium text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)]",children:t}),p.jsxs("div",{className:"relative",children:[p.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:p.jsx("svg",{className:"h-5 w-5 text-[var(--color-muted)] dark:text-[var(--color-muted-dark)]",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:p.jsx("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",clipRule:"evenodd"})})}),p.jsx("input",{type:l?"text":"password",autoComplete:"current-password",disabled:a,onChange:c,placeholder:"••••••••",className:j.twMerge(`block w-full rounded-md py-3 px-4 transition duration-200
             bg-[var(--color-primary)] text-[var(--color-primary-foreground)] placeholder-[var(--color-muted)] 
             dark:bg-[var(--color-primary-dark)] dark:text-[var(--color-primary-foreground-dark)] dark:placeholder-[var(--color-muted-dark)]
             pl-10 pr-10 border focus:outline-none appearance-none transition duration-20
            `,Kr(h,r),a?"opacity-60 cursor-not-allowed":""),...s}),p.jsx("button",{type:"button",onClick:()=>d(u=>!u),className:"absolute inset-y-0 right-0 pr-3 flex items-center text-[var(--color-muted)] hover:text-[var(--color-secondary)] dark:text-[var(--color-muted-dark)] dark:hover:text-[var(--color-secondary-dark)] transition cursor-pointer",tabIndex:-1,children:l?p.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]}):p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.978 9.978 0 012.276-3.592M6.1 6.1a9.993 9.993 0 0111.8 0m2.063 2.062a9.978 9.978 0 012.276 3.592c-1.274 4.057-5.065 7-9.542 7-.682 0-1.348-.07-1.992-.2M3 3l18 18"})})})]}),h&&n&&p.jsx("p",{className:"mt-2 text-sm text-[var(--color-error)] dark:text-[var(--color-error-dark)]",children:n})]})}function yl({label:t,error:e=!1,success:r=!1,disabled:a=!1,messageError:n="Campo obrigatório",isValidating:o,onChange:c,options:s,placeholder:l="Selecione uma opção",className:d,...h}){const u=e&&o;return p.jsxs("div",{className:"w-full mt-5 mb-3",children:[t&&p.jsx(Gr,{children:t}),p.jsxs("div",{className:"relative",children:[p.jsxs("select",{...h,onChange:c,disabled:a,className:j.twMerge(`block w-full rounded-md py-3 px-4 pr-10 transition duration-200 appearance-none
             bg-[var(--color-primary)] text-[var(--color-primary-foreground)] placeholder-[var(--color-muted)]
             dark:bg-[var(--color-primary-dark)] dark:text-[var(--color-primary-foreground-dark)] dark:placeholder-[var(--color-muted-dark)]
             transition duration-200 border focus:outline-none appearance-none transition duration-200
            `,Kr(u,r),a?"opacity-60 cursor-not-allowed":"",d),children:[l&&p.jsx("option",{value:"",children:l}),s.map(m=>p.jsx("option",{value:m.value,children:m.label},m.value))]}),p.jsx("div",{className:"pointer-events-none absolute inset-y-0 right-3 flex items-center text-[var(--color-muted)] dark:text-[var(--color-muted-dark)]",children:p.jsx("svg",{className:"h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",stroke:"currentColor",children:p.jsx("path",{d:"M7 7l3 3 3-3",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),u&&n&&p.jsx("p",{className:"mt-2 text-sm text-[var(--color-error)] dark:text-[var(--color-error-dark)]",children:n})]})]})}function Sm({className:t,label:e,error:r=!1,success:a=!1,disabled:n=!1,messageError:o="Campo obrigatório",isValidating:c,onChange:s,...l}){const d=r&&c;return p.jsxs("div",{className:"w-full mb-3 mt-5",children:[e&&p.jsx(Gr,{className:"mb-2",children:e}),p.jsxs("div",{className:"relative",children:[p.jsx("textarea",{...l,onChange:s,disabled:n,className:j.twMerge(`border focus:outline-none appearance-none transition duration-200 rounded-md
             h-[50px] w-full resize-none appearance-none px-4 py-2.5 shadow-sm transition-colors duration-150
             bg-[var(--color-primary)] text-[var(--color-primary-foreground)] placeholder-[var(--color-muted)]
             dark:bg-[var(--color-primary-dark)] dark:text-[var(--color-primary-foreground-dark)] dark:placeholder-[var(--color-muted-dark)]
             focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)/10]
            `,Kr(d,a),n?"opacity-60 cursor-not-allowed":"",t)}),d&&o&&p.jsx("p",{className:"text-sm text-[var(--color-error)] dark:text-[var(--color-error-dark)] mt-2",children:o})]})]})}function Vm({messageError:t}){return t?p.jsx("p",{className:`
        mt-3 mb-3 p-2 min-h-[30px] w-full rounded-[var(--tw-borderRadius-md)] rounded-md
        bg-[var(--color-error)] text-[var(--color-primary-foreground-dark)]
        text-[14px] leading-[30px] text-center
        dark:bg-[var(--color-error-dark)] dark:text-[var(--color-primary-foreground-dark)]
      `,children:t}):null}function Tm({value:t,onChange:e,label:r,isValidating:a,error:n,className:o}){const c=s=>{const l=Number(s.target.value);e(l)};return p.jsxs("div",{className:j.twMerge("mb-2 w-full mt-4",o),children:[p.jsxs("div",{className:"flex items-center",children:[p.jsx("p",{className:`
            text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)] mr-4
          `,children:r}),p.jsx("input",{type:"range",min:1,max:10,step:1,value:t,onChange:c,className:"w-3/5 accent-[var(--color-secondary)] dark:accent-[var(--color-secondary-dark)]"}),p.jsx("p",{className:`
            ml-4 w-9 h-9 flex items-center justify-center rounded-full text-sm
            bg-[var(--color-secondary)] text-[var(--color-primary-foreground)] 
            dark:bg-[var(--color-secondary-dark)] dark:text-[var(--color-secondary-foreground-dark)] `,children:t})]}),a&&n&&p.jsx("p",{className:"text-sm mt-2 ml-2 text-[var(--color-error)] dark:text-[var(--color-error-dark)]",children:"Este campo é obrigatório"})]})}function Pm({isChecked:t,onChange:e,label:r,isValidating:a,error:n,className:o}){return p.jsxs("div",{className:j.twMerge("mb-2 w-full mt-5",o),children:[p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsx("p",{className:"text-base text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)]",children:r}),p.jsx("button",{type:"button",onClick:e,className:j.twMerge("relative w-11 h-6 transition-colors duration-200 ease-in-out rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2",t?"bg-[var(--color-secondary)] focus:ring-[var(--color-secondary)]":"bg-[var(--color-muted)] dark:bg-[var(--color-muted-dark)] focus:ring-[var(--color-muted)]"),children:p.jsx("span",{className:j.twMerge("absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200",t?"translate-x-5":"translate-x-0")})})]}),a&&n&&p.jsx("p",{className:"text-sm mt-2 ml-2 text-[var(--color-error)] dark:text-[var(--color-error-dark)]",children:"Este campo é obrigatório"})]})}function Rm({loading:t,className:e}){return t?p.jsx("div",{className:`
        absolute top-0 left-0 flex items-center justify-center h-full w-full z-[1000]
        backdrop-blur-sm dardk:bg-[rgba(0,0,0,0.5)] bg-[rgba(255, 255, 255, 0.5)] border border-[var(--color-primary)/20]
        ${e}
      `,children:p.jsx("div",{className:`
          w-12 h-12 border-4
          border-[var(--color-secondary)/30]
          border-t-[var(--color-secondary)]
          rounded-full animate-spin
          text-secondary-active
        `})}):null}function gl({isOpen:t,onClose:e,children:r,className:a="",isFullscreen:n=!1,title:o}){return i.useEffect(()=>{const c=s=>{s.key==="Escape"&&e()};return t&&document.addEventListener("keydown",c),()=>{document.removeEventListener("keydown",c)}},[t,e]),i.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[t]),t?p.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-6 sm:py-12",children:[!n&&p.jsx("div",{className:"fixed inset-0 bg-black/40 backdrop-blur-sm",onClick:e}),p.jsxs("div",{onClick:c=>c.stopPropagation(),className:j.twMerge(a,`border border-[#454545] relative z-50 w-full 
           bg-[var(--color-primary)] text-[var(--color-primary-foreground)] 
           dark:bg-[var(--color-primary-dark)] dark:text-[var(--color-primary-foreground-dark)] shadow-xl transition-all`,n?"h-full":"max-w-lg rounded-xl p-6"),children:[p.jsxs("div",{children:[p.jsx("p",{className:"mt-[-10px] text-[20px] text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)]",children:o}),p.jsxs("button",{onClick:e,className:"absolute top-4 right-3 text-[var(--color-muted)] hover:text-[var(--color-secondary)] cursor-pointer",children:[p.jsx("span",{className:"sr-only",children:"Close modal"}),p.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",strokeWidth:2,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})]})]}),p.jsx("div",{className:"mt-4",children:r})]})]}):null}function Dm({isOpen:t,onClose:e,performAction:r,description:a,title:n,className:o="",isFullscreen:c=!1}){return p.jsxs(gl,{isOpen:t,onClose:e,title:n,className:o,isFullscreen:c,children:[p.jsx("h3",{className:"mt-5 mb-2 text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)]",children:a}),p.jsxs("div",{className:"flex flex-row justify-end",children:[p.jsx(Br,{type:"button",className:"max-w-[100px] mr-2",onClick:e,variant:"secondary",children:"Cancelar"}),p.jsx(Br,{type:"button",className:"max-w-[100px]",onClick:r,variant:"danger",children:"Confirmar"})]})]})}/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Um=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Qo=t=>{const e=Um(t);return e.charAt(0).toUpperCase()+e.slice(1)},wl=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),Bm=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Zm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...Zm,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:wl("lucide",n),...!o&&!Bm(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(Fm,{ref:o,iconNode:e,className:wl(`lucide-${Om(Qo(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Qo(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]],Im=G("check-check",_m);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Ym=G("chevron-down",Hm);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Km=G("chevron-up",Xm);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]],Qm=G("chevrons-left",Gm);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]],e0=G("chevrons-right",Jm);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],r0=G("info",t0);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],o0=G("link",a0);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],s0=G("pencil",n0);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]],c0=G("trash",i0);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],uo=G("x",l0);function d0({totalData:t,currentPage:e,setCurrentPage:r,elementsPerPage:a=20}){const n=Math.ceil(t/a);if(t===0||t<a)return null;const o=c=>{r(c)};return p.jsx("div",{className:"w-full flex flex-col justify-center items-center mb-10 mt-5",children:p.jsxs("div",{className:"max-w-[400px] w-full flex flex-row justify-around items-center",children:[p.jsx(Qm,{className:"text-[var(--color-secondary)] cursor-pointer",onClick:()=>o(1)}),Array.from({length:n},(c,s)=>p.jsx("button",{onClick:()=>o(s+1),className:j.twMerge("flex justify-center items-center w-[40px] h-[40px] text-sm rounded-full transition-colors duration-200 cursor-pointer",e===s+1?`bg-[var(--color-secondary-active)] text-[var(--color-primary-foreground)] 
                   dark:bg-[var(--color-secondary-active-dark)] dark:text-[var(--color-primary-foreground-dark)]`:"text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)] hover:bg-[var(--color-muted-dark)/10]"),children:s+1},s+1)),p.jsx(e0,{className:"text-[var(--color-secondary)] cursor-pointer",onClick:()=>o(n)})]})})}function h0({data:t,columns:e,rowActions:r}){return p.jsx("div",{className:"shadow-sm border border-[var(--color-muted)] rounded-md text-[var(--color-primary-foreground)] overflow-x-auto w-full",children:p.jsxs("table",{className:"min-w-[800px] table-auto w-full",children:[p.jsx("thead",{children:p.jsxs("tr",{className:"border-b border-[var(--color-muted)] bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)]",children:[e.map(a=>p.jsx("th",{className:"px-4 py-2 text-[16px] text-left font-semibold text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)]",children:a.title},a.key)),r&&p.jsx("th",{className:"px-4 py-2 text-center"})]})}),p.jsx("tbody",{children:t.length===0?p.jsx("tr",{children:p.jsx("td",{colSpan:e.length+(r?1:0),className:"px-4 py-4 text-center text-[var(--color-muted)]",children:"Nenhum registro encontrado!"})}):t.map((a,n)=>p.jsxs("tr",{className:n===t.length-1?"":"border-b border-[var(--color-muted)]",children:[e.map(o=>{const c=a[o.key];return p.jsx("td",{className:"px-4 py-2 text-[14px] font-normal text-left text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)]",children:o.render?o.render(c,a):c},String(o.key))}),r&&p.jsx("td",{className:"px-4 py-2 whitespace-nowrap w-[5%]",children:r(a)})]},n))})]})})}function ir({text:t,children:e,className:r,coordTop:a,coordLeft:n}){const[o,c]=i.useState(!1),[s,l]=i.useState({top:0,left:0}),d=i.useRef(null);return i.useEffect(()=>{if(o&&d.current){const h=d.current.getBoundingClientRect();l({top:h.top+window.scrollY+(a??0),left:h.left+h.width/2+window.scrollX+(n??0)})}},[n,a,o]),p.jsxs("button",{className:j.twMerge("relative inline-block",r),onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),ref:d,children:[e,o&&fl.createPortal(p.jsx("div",{style:{top:s.top-10,left:s.left,transform:"translate(-50%, -100%)",position:"absolute",zIndex:9999},className:j.twMerge("px-3 py-1 text-sm border rounded shadow-lg whitespace-nowrap",`bg-[var(--color-primary-foreground)] text-[var(--color-primary)] 
               dark:bg-[var(--color-primary-foreground-dark)] dark:text-[var(--color-primary-dark)] border-[var(--color-muted)]`),children:t}),document.body)]})}function u0({type:t,action:e,textTooltip:r,className:a}){const n="w-[18px] h-[18px] cursor-pointer text-[var(--color-secondary)] dark:text-[var(--color-secondary-dark)] mx-1";return{edit:p.jsx(ir,{text:r,children:p.jsx(s0,{className:j.twMerge(n,a),onClick:e})},"tableActionEdit"),delete:p.jsx(ir,{text:r,children:p.jsx(c0,{className:j.twMerge(n,a),onClick:e})},"tableActionDelete"),link:p.jsx(ir,{text:r,children:p.jsx(o0,{className:j.twMerge(n,a),onClick:e})},"tableActionLink"),info:p.jsx(ir,{text:r,children:p.jsx(r0,{className:j.twMerge(n,a),onClick:e})},"tableActionInfo"),check:p.jsx(ir,{text:r,children:p.jsx(Im,{className:j.twMerge(n,a),onClick:e})},"tableActionCheck")}[t]}function m0({tabs:t,defaultTabKey:e}){var o,c;const[r,a]=i.useState(e||((o=t[0])==null?void 0:o.key));i.useEffect(()=>{!t.some(l=>l.key===r)&&t.length>0&&a(t[0].key)},[t,r]);const n=(c=t.find(s=>s.key===r))==null?void 0:c.content;return p.jsxs("div",{className:"overflow-x-auto p-4 sm:p-6",children:[p.jsx("div",{className:"border border-[var(--color-border)] rounded-t-xl bg-[var(--color-surface)]",children:p.jsx("nav",{className:"flex overflow-x-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white h-[50px]",children:t.map(s=>{const l=r===s.key;return p.jsx("button",{onClick:()=>a(s.key),className:j.twMerge("inline-flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer rounded-md",l?"bg-[var(--color-primary)] text-[var(--color-on-primary)] shadow":"bg-transparent text-[var(--color-text)] hover:text-[var(--color-primary)]"),children:s.label},s.key)})})}),p.jsx("div",{className:"rounded-b-xl border border-t-0 border-[var(--color-border)] p-6 pt-4 bg-[var(--color-surface)] text-[var(--color-text)]",children:n})]})}/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),f0=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Jo=t=>{const e=f0(t);return e.charAt(0).toUpperCase()+e.slice(1)},vl=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),k0=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var y0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...y0,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:vl("lucide",n),...!o&&!k0(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(g0,{ref:o,iconNode:e,className:vl(`lucide-${p0(Jo(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Jo(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];Q("check-check",w0);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];Q("chevron-down",v0);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];Q("chevron-up",x0);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Q("chevrons-left",b0);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Q("chevrons-right",M0);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];Q("info",N0);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];Q("link",C0);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];Q("pencil",A0);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];Q("trash",L0);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];Q("x",j0);function z0({text:t,children:e,className:r,coordTop:a,coordLeft:n}){const[o,c]=i.useState(!1),[s,l]=i.useState({top:0,left:0}),d=i.useRef(null);return i.useEffect(()=>{if(o&&d.current){const h=d.current.getBoundingClientRect();l({top:h.top+window.scrollY+(a??0),left:h.left+h.width/2+window.scrollX+(n??0)})}},[n,a,o]),p.jsxs("button",{className:j.twMerge("relative inline-block",r),onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),ref:d,children:[e,o&&fl.createPortal(p.jsx("div",{style:{top:s.top-10,left:s.left,transform:"translate(-50%, -100%)",position:"absolute",zIndex:9999},className:j.twMerge("px-3 py-1 text-sm border rounded shadow-lg whitespace-nowrap",`bg-[var(--color-primary-foreground)] text-[var(--color-primary)] 
               dark:bg-[var(--color-primary-foreground-dark)] dark:text-[var(--color-primary-dark)] border-[var(--color-muted)]`),children:t}),document.body)]})}/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),q0=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),en=t=>{const e=q0(t);return e.charAt(0).toUpperCase()+e.slice(1)},xl=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),E0=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...$0,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:xl("lucide",n),...!o&&!E0(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(S0,{ref:o,iconNode:e,className:xl(`lucide-${W0(en(t))}`,`lucide-${t}`,a),...n}));return r.displayName=en(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];J("check-check",V0);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];J("chevron-down",T0);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];J("chevron-up",P0);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];J("chevrons-left",R0);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];J("chevrons-right",D0);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];J("info",O0);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];J("link",U0);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];J("pencil",B0);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];J("trash",Z0);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];J("x",F0);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),I0=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),tn=t=>{const e=I0(t);return e.charAt(0).toUpperCase()+e.slice(1)},bl=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),H0=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Y0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...Y0,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:bl("lucide",n),...!o&&!H0(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(X0,{ref:o,iconNode:e,className:bl(`lucide-${_0(tn(t))}`,`lucide-${t}`,a),...n}));return r.displayName=tn(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];ee("check-check",K0);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];ee("chevron-down",G0);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];ee("chevron-up",Q0);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];ee("chevrons-left",J0);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];ee("chevrons-right",ep);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];ee("info",tp);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];ee("link",rp);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];ee("pencil",ap);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];ee("trash",op);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];ee("x",np);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ip=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),rn=t=>{const e=ip(t);return e.charAt(0).toUpperCase()+e.slice(1)},Ml=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),cp=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var lp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...lp,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Ml("lucide",n),...!o&&!cp(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(dp,{ref:o,iconNode:e,className:Ml(`lucide-${sp(rn(t))}`,`lucide-${t}`,a),...n}));return r.displayName=rn(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];te("check-check",hp);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];te("chevron-down",up);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];te("chevron-up",mp);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];te("chevrons-left",pp);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];te("chevrons-right",fp);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];te("info",kp);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];te("link",yp);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];te("pencil",gp);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];te("trash",wp);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];te("x",vp);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),bp=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),an=t=>{const e=bp(t);return e.charAt(0).toUpperCase()+e.slice(1)},Nl=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),Mp=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Np={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...Np,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Nl("lucide",n),...!o&&!Mp(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(Cp,{ref:o,iconNode:e,className:Nl(`lucide-${xp(an(t))}`,`lucide-${t}`,a),...n}));return r.displayName=an(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];re("check-check",Ap);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];re("chevron-down",Lp);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];re("chevron-up",jp);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];re("chevrons-left",zp);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];re("chevrons-right",Wp);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];re("info",qp);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];re("link",Ep);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];re("pencil",$p);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];re("trash",Sp);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];re("x",Vp);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Pp=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),on=t=>{const e=Pp(t);return e.charAt(0).toUpperCase()+e.slice(1)},Cl=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),Rp=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Dp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...Dp,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Cl("lucide",n),...!o&&!Rp(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(Op,{ref:o,iconNode:e,className:Cl(`lucide-${Tp(on(t))}`,`lucide-${t}`,a),...n}));return r.displayName=on(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];ae("check-check",Up);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];ae("chevron-down",Bp);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];ae("chevron-up",Zp);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];ae("chevrons-left",Fp);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];ae("chevrons-right",_p);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];ae("info",Ip);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];ae("link",Hp);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];ae("pencil",Yp);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];ae("trash",Xp);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];ae("x",Kp);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Qp=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),nn=t=>{const e=Qp(t);return e.charAt(0).toUpperCase()+e.slice(1)},Al=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),Jp=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ef={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...ef,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Al("lucide",n),...!o&&!Jp(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(tf,{ref:o,iconNode:e,className:Al(`lucide-${Gp(nn(t))}`,`lucide-${t}`,a),...n}));return r.displayName=nn(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];oe("check-check",rf);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];oe("chevron-down",af);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];oe("chevron-up",of);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];oe("chevrons-left",nf);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];oe("chevrons-right",sf);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];oe("info",cf);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];oe("link",lf);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];oe("pencil",df);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];oe("trash",hf);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];oe("x",uf);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),pf=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),sn=t=>{const e=pf(t);return e.charAt(0).toUpperCase()+e.slice(1)},Ll=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),ff=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var kf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...kf,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Ll("lucide",n),...!o&&!ff(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(yf,{ref:o,iconNode:e,className:Ll(`lucide-${mf(sn(t))}`,`lucide-${t}`,a),...n}));return r.displayName=sn(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];ne("check-check",gf);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];ne("chevron-down",wf);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];ne("chevron-up",vf);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];ne("chevrons-left",xf);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];ne("chevrons-right",bf);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];ne("info",Mf);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];ne("link",Nf);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];ne("pencil",Cf);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];ne("trash",Af);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];ne("x",Lf);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),zf=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),cn=t=>{const e=zf(t);return e.charAt(0).toUpperCase()+e.slice(1)},jl=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),Wf=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...qf,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:jl("lucide",n),...!o&&!Wf(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(Ef,{ref:o,iconNode:e,className:jl(`lucide-${jf(cn(t))}`,`lucide-${t}`,a),...n}));return r.displayName=cn(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];se("check-check",$f);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];se("chevron-down",Sf);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];se("chevron-up",Vf);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];se("chevrons-left",Tf);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];se("chevrons-right",Pf);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];se("info",Rf);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];se("link",Df);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];se("pencil",Of);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];se("trash",Uf);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];se("x",Bf);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ff=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),ln=t=>{const e=Ff(t);return e.charAt(0).toUpperCase()+e.slice(1)},zl=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),_f=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var If={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...If,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:zl("lucide",n),...!o&&!_f(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(Hf,{ref:o,iconNode:e,className:zl(`lucide-${Zf(ln(t))}`,`lucide-${t}`,a),...n}));return r.displayName=ln(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];ie("check-check",Yf);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];ie("chevron-down",Xf);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];ie("chevron-up",Kf);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];ie("chevrons-left",Gf);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];ie("chevrons-right",Qf);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];ie("info",Jf);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];ie("link",e2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];ie("pencil",t2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];ie("trash",r2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];ie("x",a2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),n2=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),dn=t=>{const e=n2(t);return e.charAt(0).toUpperCase()+e.slice(1)},Wl=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),s2=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var i2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...i2,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Wl("lucide",n),...!o&&!s2(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(c2,{ref:o,iconNode:e,className:Wl(`lucide-${o2(dn(t))}`,`lucide-${t}`,a),...n}));return r.displayName=dn(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];ce("check-check",l2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];ce("chevron-down",d2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];ce("chevron-up",h2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];ce("chevrons-left",u2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];ce("chevrons-right",m2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];ce("info",p2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];ce("link",f2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];ce("pencil",k2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];ce("trash",y2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];ce("x",g2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),v2=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),hn=t=>{const e=v2(t);return e.charAt(0).toUpperCase()+e.slice(1)},ql=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),x2=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var b2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...b2,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:ql("lucide",n),...!o&&!x2(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(M2,{ref:o,iconNode:e,className:ql(`lucide-${w2(hn(t))}`,`lucide-${t}`,a),...n}));return r.displayName=hn(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];le("check-check",N2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];le("chevron-down",C2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];le("chevron-up",A2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];le("chevrons-left",L2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];le("chevrons-right",j2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];le("info",z2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];le("link",W2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];le("pencil",q2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];le("trash",E2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];le("x",$2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),V2=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),un=t=>{const e=V2(t);return e.charAt(0).toUpperCase()+e.slice(1)},El=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),T2=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var P2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...P2,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:El("lucide",n),...!o&&!T2(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(R2,{ref:o,iconNode:e,className:El(`lucide-${S2(un(t))}`,`lucide-${t}`,a),...n}));return r.displayName=un(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];de("check-check",D2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];de("chevron-down",O2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];de("chevron-up",U2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];de("chevrons-left",B2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];de("chevrons-right",Z2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];de("info",F2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];de("link",_2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];de("pencil",I2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];de("trash",H2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];de("x",Y2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),K2=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),mn=t=>{const e=K2(t);return e.charAt(0).toUpperCase()+e.slice(1)},$l=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),G2=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Q2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...Q2,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:$l("lucide",n),...!o&&!G2(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(J2,{ref:o,iconNode:e,className:$l(`lucide-${X2(mn(t))}`,`lucide-${t}`,a),...n}));return r.displayName=mn(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e5=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];he("check-check",e5);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t5=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];he("chevron-down",t5);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r5=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];he("chevron-up",r5);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a5=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];he("chevrons-left",a5);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o5=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];he("chevrons-right",o5);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n5=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];he("info",n5);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s5=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];he("link",s5);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i5=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];he("pencil",i5);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c5=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];he("trash",c5);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l5=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];he("x",l5);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d5=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),h5=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),pn=t=>{const e=h5(t);return e.charAt(0).toUpperCase()+e.slice(1)},Sl=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),u5=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var m5={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p5=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...m5,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Sl("lucide",n),...!o&&!u5(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(p5,{ref:o,iconNode:e,className:Sl(`lucide-${d5(pn(t))}`,`lucide-${t}`,a),...n}));return r.displayName=pn(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f5=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];ue("check-check",f5);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k5=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];ue("chevron-down",k5);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y5=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];ue("chevron-up",y5);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g5=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];ue("chevrons-left",g5);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w5=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];ue("chevrons-right",w5);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v5=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];ue("info",v5);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x5=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];ue("link",x5);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b5=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];ue("pencil",b5);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M5=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];ue("trash",M5);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N5=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];ue("x",N5);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C5=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),A5=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),fn=t=>{const e=A5(t);return e.charAt(0).toUpperCase()+e.slice(1)},Vl=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),L5=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var j5={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z5=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...j5,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Vl("lucide",n),...!o&&!L5(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(z5,{ref:o,iconNode:e,className:Vl(`lucide-${C5(fn(t))}`,`lucide-${t}`,a),...n}));return r.displayName=fn(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W5=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];me("check-check",W5);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q5=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];me("chevron-down",q5);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E5=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];me("chevron-up",E5);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $5=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];me("chevrons-left",$5);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S5=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];me("chevrons-right",S5);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V5=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];me("info",V5);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T5=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];me("link",T5);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P5=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];me("pencil",P5);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R5=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];me("trash",R5);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D5=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];me("x",D5);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O5=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),U5=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),kn=t=>{const e=U5(t);return e.charAt(0).toUpperCase()+e.slice(1)},Tl=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),B5=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Z5={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F5=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...Z5,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Tl("lucide",n),...!o&&!B5(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(F5,{ref:o,iconNode:e,className:Tl(`lucide-${O5(kn(t))}`,`lucide-${t}`,a),...n}));return r.displayName=kn(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _5=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];pe("check-check",_5);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I5=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];pe("chevron-down",I5);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H5=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];pe("chevron-up",H5);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y5=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];pe("chevrons-left",Y5);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X5=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];pe("chevrons-right",X5);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K5=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];pe("info",K5);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G5=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];pe("link",G5);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q5=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];pe("pencil",Q5);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J5=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];pe("trash",J5);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ek=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];pe("x",ek);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tk=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),rk=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),yn=t=>{const e=rk(t);return e.charAt(0).toUpperCase()+e.slice(1)},Pl=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),ak=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ok={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nk=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...ok,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Pl("lucide",n),...!o&&!ak(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(nk,{ref:o,iconNode:e,className:Pl(`lucide-${tk(yn(t))}`,`lucide-${t}`,a),...n}));return r.displayName=yn(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sk=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];fe("check-check",sk);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ik=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];fe("chevron-down",ik);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ck=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];fe("chevron-up",ck);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lk=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];fe("chevrons-left",lk);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dk=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];fe("chevrons-right",dk);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hk=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];fe("info",hk);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uk=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];fe("link",uk);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mk=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];fe("pencil",mk);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pk=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];fe("trash",pk);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fk=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];fe("x",fk);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kk=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),yk=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),gn=t=>{const e=yk(t);return e.charAt(0).toUpperCase()+e.slice(1)},Rl=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),gk=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var wk={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vk=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...wk,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Rl("lucide",n),...!o&&!gk(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(vk,{ref:o,iconNode:e,className:Rl(`lucide-${kk(gn(t))}`,`lucide-${t}`,a),...n}));return r.displayName=gn(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xk=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];ke("check-check",xk);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bk=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];ke("chevron-down",bk);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mk=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];ke("chevron-up",Mk);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nk=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];ke("chevrons-left",Nk);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ck=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];ke("chevrons-right",Ck);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ak=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];ke("info",Ak);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lk=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];ke("link",Lk);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jk=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];ke("pencil",jk);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zk=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];ke("trash",zk);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wk=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];ke("x",Wk);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qk=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ek=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),wn=t=>{const e=Ek(t);return e.charAt(0).toUpperCase()+e.slice(1)},Dl=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),$k=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Sk={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vk=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...Sk,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Dl("lucide",n),...!o&&!$k(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(Vk,{ref:o,iconNode:e,className:Dl(`lucide-${qk(wn(t))}`,`lucide-${t}`,a),...n}));return r.displayName=wn(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tk=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];ye("check-check",Tk);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pk=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];ye("chevron-down",Pk);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rk=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];ye("chevron-up",Rk);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];ye("chevrons-left",Dk);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ok=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];ye("chevrons-right",Ok);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uk=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];ye("info",Uk);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bk=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];ye("link",Bk);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zk=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];ye("pencil",Zk);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fk=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];ye("trash",Fk);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _k=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];ye("x",_k);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ik=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Hk=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),vn=t=>{const e=Hk(t);return e.charAt(0).toUpperCase()+e.slice(1)},Ol=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),Yk=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Xk={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kk=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...Xk,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Ol("lucide",n),...!o&&!Yk(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(Kk,{ref:o,iconNode:e,className:Ol(`lucide-${Ik(vn(t))}`,`lucide-${t}`,a),...n}));return r.displayName=vn(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gk=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];ge("check-check",Gk);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qk=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];ge("chevron-down",Qk);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jk=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];ge("chevron-up",Jk);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];ge("chevrons-left",ey);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];ge("chevrons-right",ty);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];ge("info",ry);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];ge("link",ay);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];ge("pencil",oy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];ge("trash",ny);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];ge("x",sy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),cy=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),xn=t=>{const e=cy(t);return e.charAt(0).toUpperCase()+e.slice(1)},Ul=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),ly=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...dy,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Ul("lucide",n),...!o&&!ly(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(hy,{ref:o,iconNode:e,className:Ul(`lucide-${iy(xn(t))}`,`lucide-${t}`,a),...n}));return r.displayName=xn(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];we("check-check",uy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];we("chevron-down",my);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];we("chevron-up",py);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];we("chevrons-left",fy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];we("chevrons-right",ky);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];we("info",yy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];we("link",gy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];we("pencil",wy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];we("trash",vy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];we("x",xy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),My=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),bn=t=>{const e=My(t);return e.charAt(0).toUpperCase()+e.slice(1)},Bl=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),Ny=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Cy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...Cy,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Bl("lucide",n),...!o&&!Ny(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(Ay,{ref:o,iconNode:e,className:Bl(`lucide-${by(bn(t))}`,`lucide-${t}`,a),...n}));return r.displayName=bn(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];ve("check-check",Ly);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];ve("chevron-down",jy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];ve("chevron-up",zy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];ve("chevrons-left",Wy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];ve("chevrons-right",qy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];ve("info",Ey);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];ve("link",$y);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];ve("pencil",Sy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];ve("trash",Vy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];ve("x",Ty);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ry=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Mn=t=>{const e=Ry(t);return e.charAt(0).toUpperCase()+e.slice(1)},Zl=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),Dy=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Oy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...Oy,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Zl("lucide",n),...!o&&!Dy(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(Uy,{ref:o,iconNode:e,className:Zl(`lucide-${Py(Mn(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Mn(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];xe("check-check",By);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];xe("chevron-down",Zy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];xe("chevron-up",Fy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];xe("chevrons-left",_y);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];xe("chevrons-right",Iy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];xe("info",Hy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];xe("link",Yy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];xe("pencil",Xy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];xe("trash",Ky);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];xe("x",Gy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Jy=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Nn=t=>{const e=Jy(t);return e.charAt(0).toUpperCase()+e.slice(1)},Fl=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),e7=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var t7={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r7=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...t7,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Fl("lucide",n),...!o&&!e7(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(r7,{ref:o,iconNode:e,className:Fl(`lucide-${Qy(Nn(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Nn(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a7=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];be("check-check",a7);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o7=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];be("chevron-down",o7);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n7=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];be("chevron-up",n7);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s7=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];be("chevrons-left",s7);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i7=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];be("chevrons-right",i7);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c7=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];be("info",c7);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l7=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];be("link",l7);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d7=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];be("pencil",d7);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h7=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];be("trash",h7);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u7=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];be("x",u7);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m7=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),p7=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Cn=t=>{const e=p7(t);return e.charAt(0).toUpperCase()+e.slice(1)},_l=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),f7=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var k7={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y7=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...k7,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:_l("lucide",n),...!o&&!f7(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(y7,{ref:o,iconNode:e,className:_l(`lucide-${m7(Cn(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Cn(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g7=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];Me("check-check",g7);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w7=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];Me("chevron-down",w7);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v7=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];Me("chevron-up",v7);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x7=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Me("chevrons-left",x7);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b7=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Me("chevrons-right",b7);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M7=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];Me("info",M7);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N7=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];Me("link",N7);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C7=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];Me("pencil",C7);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A7=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];Me("trash",A7);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L7=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];Me("x",L7);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j7=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),z7=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),An=t=>{const e=z7(t);return e.charAt(0).toUpperCase()+e.slice(1)},Il=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),W7=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var q7={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E7=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...q7,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Il("lucide",n),...!o&&!W7(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(E7,{ref:o,iconNode:e,className:Il(`lucide-${j7(An(t))}`,`lucide-${t}`,a),...n}));return r.displayName=An(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $7=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];Ne("check-check",$7);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S7=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];Ne("chevron-down",S7);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V7=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];Ne("chevron-up",V7);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T7=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Ne("chevrons-left",T7);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P7=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Ne("chevrons-right",P7);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R7=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];Ne("info",R7);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D7=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];Ne("link",D7);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O7=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];Ne("pencil",O7);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U7=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];Ne("trash",U7);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B7=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];Ne("x",B7);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z7=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),F7=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Ln=t=>{const e=F7(t);return e.charAt(0).toUpperCase()+e.slice(1)},Hl=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),_7=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var I7={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H7=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...I7,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Hl("lucide",n),...!o&&!_7(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(H7,{ref:o,iconNode:e,className:Hl(`lucide-${Z7(Ln(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Ln(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y7=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];Ce("check-check",Y7);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X7=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];Ce("chevron-down",X7);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K7=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];Ce("chevron-up",K7);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G7=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Ce("chevrons-left",G7);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q7=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Ce("chevrons-right",Q7);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J7=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];Ce("info",J7);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e6=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];Ce("link",e6);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t6=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];Ce("pencil",t6);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r6=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];Ce("trash",r6);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a6=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];Ce("x",a6);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o6=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),n6=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),jn=t=>{const e=n6(t);return e.charAt(0).toUpperCase()+e.slice(1)},Yl=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),s6=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var i6={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c6=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...i6,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Yl("lucide",n),...!o&&!s6(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(c6,{ref:o,iconNode:e,className:Yl(`lucide-${o6(jn(t))}`,`lucide-${t}`,a),...n}));return r.displayName=jn(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l6=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];Ae("check-check",l6);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d6=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];Ae("chevron-down",d6);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h6=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];Ae("chevron-up",h6);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u6=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Ae("chevrons-left",u6);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m6=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Ae("chevrons-right",m6);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];Ae("info",p6);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f6=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];Ae("link",f6);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k6=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];Ae("pencil",k6);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y6=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];Ae("trash",y6);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g6=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];Ae("x",g6);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w6=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),v6=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),zn=t=>{const e=v6(t);return e.charAt(0).toUpperCase()+e.slice(1)},Xl=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),x6=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var b6={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M6=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...b6,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Xl("lucide",n),...!o&&!x6(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(M6,{ref:o,iconNode:e,className:Xl(`lucide-${w6(zn(t))}`,`lucide-${t}`,a),...n}));return r.displayName=zn(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N6=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];Le("check-check",N6);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C6=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];Le("chevron-down",C6);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A6=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];Le("chevron-up",A6);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L6=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Le("chevrons-left",L6);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j6=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Le("chevrons-right",j6);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];Le("info",z6);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W6=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];Le("link",W6);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q6=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];Le("pencil",q6);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E6=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];Le("trash",E6);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $6=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];Le("x",$6);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S6=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),V6=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Wn=t=>{const e=V6(t);return e.charAt(0).toUpperCase()+e.slice(1)},Kl=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),T6=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var P6={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R6=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...P6,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Kl("lucide",n),...!o&&!T6(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(R6,{ref:o,iconNode:e,className:Kl(`lucide-${S6(Wn(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Wn(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D6=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];je("check-check",D6);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O6=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];je("chevron-down",O6);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U6=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];je("chevron-up",U6);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B6=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];je("chevrons-left",B6);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z6=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];je("chevrons-right",Z6);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];je("info",F6);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _6=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];je("link",_6);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I6=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];je("pencil",I6);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H6=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];je("trash",H6);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y6=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];je("x",Y6);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X6=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),K6=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),qn=t=>{const e=K6(t);return e.charAt(0).toUpperCase()+e.slice(1)},Gl=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),G6=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Q6={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J6=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...Q6,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Gl("lucide",n),...!o&&!G6(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(J6,{ref:o,iconNode:e,className:Gl(`lucide-${X6(qn(t))}`,`lucide-${t}`,a),...n}));return r.displayName=qn(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];ze("check-check",eg);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];ze("chevron-down",tg);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];ze("chevron-up",rg);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];ze("chevrons-left",ag);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];ze("chevrons-right",og);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];ze("info",ng);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];ze("link",sg);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];ze("pencil",ig);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];ze("trash",cg);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];ze("x",lg);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),hg=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),En=t=>{const e=hg(t);return e.charAt(0).toUpperCase()+e.slice(1)},Ql=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),ug=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var mg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...mg,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Ql("lucide",n),...!o&&!ug(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const We=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(pg,{ref:o,iconNode:e,className:Ql(`lucide-${dg(En(t))}`,`lucide-${t}`,a),...n}));return r.displayName=En(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];We("check-check",fg);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];We("chevron-down",kg);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];We("chevron-up",yg);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];We("chevrons-left",gg);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];We("chevrons-right",wg);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];We("info",vg);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];We("link",xg);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];We("pencil",bg);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];We("trash",Mg);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];We("x",Ng);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ag=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),$n=t=>{const e=Ag(t);return e.charAt(0).toUpperCase()+e.slice(1)},Jl=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),Lg=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...jg,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Jl("lucide",n),...!o&&!Lg(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(zg,{ref:o,iconNode:e,className:Jl(`lucide-${Cg($n(t))}`,`lucide-${t}`,a),...n}));return r.displayName=$n(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];qe("check-check",Wg);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];qe("chevron-down",qg);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];qe("chevron-up",Eg);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];qe("chevrons-left",$g);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];qe("chevrons-right",Sg);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];qe("info",Vg);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];qe("link",Tg);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];qe("pencil",Pg);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];qe("trash",Rg);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];qe("x",Dg);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ug=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Sn=t=>{const e=Ug(t);return e.charAt(0).toUpperCase()+e.slice(1)},ed=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),Bg=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Zg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...Zg,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:ed("lucide",n),...!o&&!Bg(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(Fg,{ref:o,iconNode:e,className:ed(`lucide-${Og(Sn(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Sn(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];Ee("check-check",_g);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];Ee("chevron-down",Ig);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];Ee("chevron-up",Hg);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Ee("chevrons-left",Yg);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Ee("chevrons-right",Xg);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];Ee("info",Kg);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];Ee("link",Gg);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];Ee("pencil",Qg);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];Ee("trash",Jg);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e4=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];Ee("x",e4);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t4=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),r4=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Vn=t=>{const e=r4(t);return e.charAt(0).toUpperCase()+e.slice(1)},td=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),a4=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var o4={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n4=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...o4,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:td("lucide",n),...!o&&!a4(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(n4,{ref:o,iconNode:e,className:td(`lucide-${t4(Vn(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Vn(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s4=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];$e("check-check",s4);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i4=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];$e("chevron-down",i4);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c4=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];$e("chevron-up",c4);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l4=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];$e("chevrons-left",l4);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d4=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];$e("chevrons-right",d4);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h4=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];$e("info",h4);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u4=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];$e("link",u4);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m4=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];$e("pencil",m4);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p4=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];$e("trash",p4);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f4=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];$e("x",f4);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k4=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),y4=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Tn=t=>{const e=y4(t);return e.charAt(0).toUpperCase()+e.slice(1)},rd=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),g4=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var w4={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v4=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...w4,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:rd("lucide",n),...!o&&!g4(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(v4,{ref:o,iconNode:e,className:rd(`lucide-${k4(Tn(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Tn(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x4=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];Se("check-check",x4);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b4=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];Se("chevron-down",b4);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M4=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];Se("chevron-up",M4);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N4=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Se("chevrons-left",N4);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C4=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Se("chevrons-right",C4);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A4=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];Se("info",A4);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L4=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];Se("link",L4);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j4=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];Se("pencil",j4);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z4=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];Se("trash",z4);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W4=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];Se("x",W4);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q4=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),E4=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Pn=t=>{const e=E4(t);return e.charAt(0).toUpperCase()+e.slice(1)},ad=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),$4=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var S4={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V4=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...S4,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:ad("lucide",n),...!o&&!$4(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(V4,{ref:o,iconNode:e,className:ad(`lucide-${q4(Pn(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Pn(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T4=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];Ve("check-check",T4);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P4=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];Ve("chevron-down",P4);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R4=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];Ve("chevron-up",R4);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D4=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Ve("chevrons-left",D4);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O4=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Ve("chevrons-right",O4);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U4=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];Ve("info",U4);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B4=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];Ve("link",B4);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z4=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];Ve("pencil",Z4);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F4=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];Ve("trash",F4);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _4=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];Ve("x",_4);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I4=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),H4=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Rn=t=>{const e=H4(t);return e.charAt(0).toUpperCase()+e.slice(1)},od=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),Y4=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var X4={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K4=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...X4,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:od("lucide",n),...!o&&!Y4(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(K4,{ref:o,iconNode:e,className:od(`lucide-${I4(Rn(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Rn(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G4=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];Te("check-check",G4);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q4=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];Te("chevron-down",Q4);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J4=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];Te("chevron-up",J4);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Te("chevrons-left",ew);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Te("chevrons-right",tw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];Te("info",rw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];Te("link",aw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];Te("pencil",ow);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];Te("trash",nw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];Te("x",sw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),cw=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Dn=t=>{const e=cw(t);return e.charAt(0).toUpperCase()+e.slice(1)},nd=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),lw=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...dw,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:nd("lucide",n),...!o&&!lw(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(hw,{ref:o,iconNode:e,className:nd(`lucide-${iw(Dn(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Dn(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];Pe("check-check",uw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];Pe("chevron-down",mw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];Pe("chevron-up",pw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Pe("chevrons-left",fw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Pe("chevrons-right",kw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];Pe("info",yw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];Pe("link",gw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];Pe("pencil",ww);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];Pe("trash",vw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];Pe("x",xw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Mw=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),On=t=>{const e=Mw(t);return e.charAt(0).toUpperCase()+e.slice(1)},sd=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),Nw=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Cw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...Cw,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:sd("lucide",n),...!o&&!Nw(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(Aw,{ref:o,iconNode:e,className:sd(`lucide-${bw(On(t))}`,`lucide-${t}`,a),...n}));return r.displayName=On(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lw=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];Re("check-check",Lw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];Re("chevron-down",jw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zw=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];Re("chevron-up",zw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ww=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Re("chevrons-left",Ww);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Re("chevrons-right",qw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];Re("info",Ew);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $w=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];Re("link",$w);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];Re("pencil",Sw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vw=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];Re("trash",Vw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];Re("x",Tw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pw=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Rw=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Un=t=>{const e=Rw(t);return e.charAt(0).toUpperCase()+e.slice(1)},id=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),Dw=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ow={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uw=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...Ow,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:id("lucide",n),...!o&&!Dw(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(Uw,{ref:o,iconNode:e,className:id(`lucide-${Pw(Un(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Un(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bw=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];De("check-check",Bw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zw=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];De("chevron-down",Zw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fw=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];De("chevron-up",Fw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];De("chevrons-left",_w);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];De("chevrons-right",Iw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];De("info",Hw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yw=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];De("link",Yw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];De("pencil",Xw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kw=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];De("trash",Kw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];De("x",Gw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qw=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Jw=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Bn=t=>{const e=Jw(t);return e.charAt(0).toUpperCase()+e.slice(1)},cd=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),ev=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var tv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...tv,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:cd("lucide",n),...!o&&!ev(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(rv,{ref:o,iconNode:e,className:cd(`lucide-${Qw(Bn(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Bn(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];Oe("check-check",av);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];Oe("chevron-down",ov);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];Oe("chevron-up",nv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Oe("chevrons-left",sv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Oe("chevrons-right",iv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];Oe("info",cv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];Oe("link",lv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];Oe("pencil",dv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];Oe("trash",hv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];Oe("x",uv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),pv=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Zn=t=>{const e=pv(t);return e.charAt(0).toUpperCase()+e.slice(1)},ld=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),fv=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var kv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...kv,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:ld("lucide",n),...!o&&!fv(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(yv,{ref:o,iconNode:e,className:ld(`lucide-${mv(Zn(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Zn(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];Ue("check-check",gv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];Ue("chevron-down",wv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];Ue("chevron-up",vv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Ue("chevrons-left",xv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Ue("chevrons-right",bv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];Ue("info",Mv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];Ue("link",Nv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];Ue("pencil",Cv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];Ue("trash",Av);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];Ue("x",Lv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),zv=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Fn=t=>{const e=zv(t);return e.charAt(0).toUpperCase()+e.slice(1)},dd=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),Wv=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...qv,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:dd("lucide",n),...!o&&!Wv(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(Ev,{ref:o,iconNode:e,className:dd(`lucide-${jv(Fn(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Fn(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];Be("check-check",$v);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];Be("chevron-down",Sv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];Be("chevron-up",Vv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Be("chevrons-left",Tv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Be("chevrons-right",Pv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];Be("info",Rv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];Be("link",Dv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];Be("pencil",Ov);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];Be("trash",Uv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];Be("x",Bv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Fv=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),_n=t=>{const e=Fv(t);return e.charAt(0).toUpperCase()+e.slice(1)},hd=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),_v=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Iv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...Iv,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:hd("lucide",n),...!o&&!_v(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(Hv,{ref:o,iconNode:e,className:hd(`lucide-${Zv(_n(t))}`,`lucide-${t}`,a),...n}));return r.displayName=_n(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];Ze("check-check",Yv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];Ze("chevron-down",Xv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];Ze("chevron-up",Kv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Ze("chevrons-left",Gv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Ze("chevrons-right",Qv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];Ze("info",Jv);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e3=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];Ze("link",e3);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t3=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];Ze("pencil",t3);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r3=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];Ze("trash",r3);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a3=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];Ze("x",a3);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o3=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),n3=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),In=t=>{const e=n3(t);return e.charAt(0).toUpperCase()+e.slice(1)},ud=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),s3=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var i3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c3=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...i3,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:ud("lucide",n),...!o&&!s3(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(c3,{ref:o,iconNode:e,className:ud(`lucide-${o3(In(t))}`,`lucide-${t}`,a),...n}));return r.displayName=In(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l3=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];Fe("check-check",l3);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d3=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];Fe("chevron-down",d3);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h3=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];Fe("chevron-up",h3);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u3=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Fe("chevrons-left",u3);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m3=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Fe("chevrons-right",m3);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p3=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];Fe("info",p3);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f3=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];Fe("link",f3);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k3=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];Fe("pencil",k3);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y3=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];Fe("trash",y3);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g3=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];Fe("x",g3);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w3=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),v3=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Hn=t=>{const e=v3(t);return e.charAt(0).toUpperCase()+e.slice(1)},md=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),x3=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var b3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M3=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...b3,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:md("lucide",n),...!o&&!x3(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(M3,{ref:o,iconNode:e,className:md(`lucide-${w3(Hn(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Hn(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N3=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];_e("check-check",N3);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C3=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];_e("chevron-down",C3);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A3=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];_e("chevron-up",A3);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L3=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];_e("chevrons-left",L3);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j3=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];_e("chevrons-right",j3);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z3=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];_e("info",z3);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W3=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];_e("link",W3);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q3=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];_e("pencil",q3);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E3=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];_e("trash",E3);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $3=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];_e("x",$3);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S3=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),V3=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Yn=t=>{const e=V3(t);return e.charAt(0).toUpperCase()+e.slice(1)},pd=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),T3=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var P3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R3=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...P3,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:pd("lucide",n),...!o&&!T3(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(R3,{ref:o,iconNode:e,className:pd(`lucide-${S3(Yn(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Yn(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D3=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];Ie("check-check",D3);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O3=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];Ie("chevron-down",O3);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U3=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];Ie("chevron-up",U3);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B3=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Ie("chevrons-left",B3);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z3=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Ie("chevrons-right",Z3);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F3=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];Ie("info",F3);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _3=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];Ie("link",_3);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I3=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];Ie("pencil",I3);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H3=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];Ie("trash",H3);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y3=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];Ie("x",Y3);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X3=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),K3=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Xn=t=>{const e=K3(t);return e.charAt(0).toUpperCase()+e.slice(1)},fd=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),G3=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Q3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J3=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...Q3,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:fd("lucide",n),...!o&&!G3(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(J3,{ref:o,iconNode:e,className:fd(`lucide-${X3(Xn(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Xn(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];He("check-check",ex);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];He("chevron-down",tx);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];He("chevron-up",rx);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];He("chevrons-left",ax);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];He("chevrons-right",ox);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];He("info",nx);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];He("link",sx);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];He("pencil",ix);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];He("trash",cx);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];He("x",lx);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),hx=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Kn=t=>{const e=hx(t);return e.charAt(0).toUpperCase()+e.slice(1)},kd=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),ux=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var mx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...mx,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:kd("lucide",n),...!o&&!ux(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(px,{ref:o,iconNode:e,className:kd(`lucide-${dx(Kn(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Kn(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];Ye("check-check",fx);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];Ye("chevron-down",kx);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];Ye("chevron-up",yx);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Ye("chevrons-left",gx);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Ye("chevrons-right",wx);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];Ye("info",vx);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];Ye("link",xx);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];Ye("pencil",bx);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];Ye("trash",Mx);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];Ye("x",Nx);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ax=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Gn=t=>{const e=Ax(t);return e.charAt(0).toUpperCase()+e.slice(1)},yd=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),Lx=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...jx,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:yd("lucide",n),...!o&&!Lx(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(zx,{ref:o,iconNode:e,className:yd(`lucide-${Cx(Gn(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Gn(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];Xe("check-check",Wx);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];Xe("chevron-down",qx);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];Xe("chevron-up",Ex);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Xe("chevrons-left",$x);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Xe("chevrons-right",Sx);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];Xe("info",Vx);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];Xe("link",Tx);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];Xe("pencil",Px);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];Xe("trash",Rx);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];Xe("x",Dx);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ux=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Qn=t=>{const e=Ux(t);return e.charAt(0).toUpperCase()+e.slice(1)},gd=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),Bx=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Zx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...Zx,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:gd("lucide",n),...!o&&!Bx(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(Fx,{ref:o,iconNode:e,className:gd(`lucide-${Ox(Qn(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Qn(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];Ke("check-check",_x);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];Ke("chevron-down",Ix);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];Ke("chevron-up",Hx);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Ke("chevrons-left",Yx);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Ke("chevrons-right",Xx);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];Ke("info",Kx);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];Ke("link",Gx);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];Ke("pencil",Qx);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];Ke("trash",Jx);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e8=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];Ke("x",e8);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t8=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),r8=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Jn=t=>{const e=r8(t);return e.charAt(0).toUpperCase()+e.slice(1)},wd=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),a8=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var o8={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n8=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...o8,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:wd("lucide",n),...!o&&!a8(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(n8,{ref:o,iconNode:e,className:wd(`lucide-${t8(Jn(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Jn(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s8=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];Ge("check-check",s8);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i8=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];Ge("chevron-down",i8);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c8=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];Ge("chevron-up",c8);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l8=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Ge("chevrons-left",l8);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d8=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Ge("chevrons-right",d8);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h8=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];Ge("info",h8);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u8=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];Ge("link",u8);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m8=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];Ge("pencil",m8);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p8=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];Ge("trash",p8);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f8=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];Ge("x",f8);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k8=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),y8=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),es=t=>{const e=y8(t);return e.charAt(0).toUpperCase()+e.slice(1)},vd=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),g8=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var w8={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v8=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...w8,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:vd("lucide",n),...!o&&!g8(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(v8,{ref:o,iconNode:e,className:vd(`lucide-${k8(es(t))}`,`lucide-${t}`,a),...n}));return r.displayName=es(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x8=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];Qe("check-check",x8);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b8=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];Qe("chevron-down",b8);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M8=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];Qe("chevron-up",M8);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N8=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Qe("chevrons-left",N8);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C8=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Qe("chevrons-right",C8);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A8=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];Qe("info",A8);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L8=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];Qe("link",L8);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j8=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];Qe("pencil",j8);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z8=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];Qe("trash",z8);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W8=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];Qe("x",W8);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q8=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),E8=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),ts=t=>{const e=E8(t);return e.charAt(0).toUpperCase()+e.slice(1)},xd=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),$8=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var S8={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V8=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...S8,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:xd("lucide",n),...!o&&!$8(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(V8,{ref:o,iconNode:e,className:xd(`lucide-${q8(ts(t))}`,`lucide-${t}`,a),...n}));return r.displayName=ts(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T8=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];Je("check-check",T8);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P8=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];Je("chevron-down",P8);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R8=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];Je("chevron-up",R8);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D8=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Je("chevrons-left",D8);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O8=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Je("chevrons-right",O8);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U8=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];Je("info",U8);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B8=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];Je("link",B8);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z8=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];Je("pencil",Z8);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F8=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];Je("trash",F8);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _8=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];Je("x",_8);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I8=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),H8=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),rs=t=>{const e=H8(t);return e.charAt(0).toUpperCase()+e.slice(1)},bd=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),Y8=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var X8={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K8=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...X8,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:bd("lucide",n),...!o&&!Y8(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const et=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(K8,{ref:o,iconNode:e,className:bd(`lucide-${I8(rs(t))}`,`lucide-${t}`,a),...n}));return r.displayName=rs(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G8=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];et("check-check",G8);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q8=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];et("chevron-down",Q8);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J8=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];et("chevron-up",J8);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];et("chevrons-left",eb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];et("chevrons-right",tb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];et("info",rb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];et("link",ab);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];et("pencil",ob);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];et("trash",nb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];et("x",sb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),cb=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),as=t=>{const e=cb(t);return e.charAt(0).toUpperCase()+e.slice(1)},Md=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),lb=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var db={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...db,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Md("lucide",n),...!o&&!lb(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(hb,{ref:o,iconNode:e,className:Md(`lucide-${ib(as(t))}`,`lucide-${t}`,a),...n}));return r.displayName=as(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];tt("check-check",ub);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];tt("chevron-down",mb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];tt("chevron-up",pb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];tt("chevrons-left",fb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];tt("chevrons-right",kb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];tt("info",yb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];tt("link",gb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];tt("pencil",wb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];tt("trash",vb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];tt("x",xb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Mb=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),os=t=>{const e=Mb(t);return e.charAt(0).toUpperCase()+e.slice(1)},Nd=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),Nb=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Cb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...Cb,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Nd("lucide",n),...!o&&!Nb(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(Ab,{ref:o,iconNode:e,className:Nd(`lucide-${bb(os(t))}`,`lucide-${t}`,a),...n}));return r.displayName=os(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];rt("check-check",Lb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];rt("chevron-down",jb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];rt("chevron-up",zb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];rt("chevrons-left",Wb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];rt("chevrons-right",qb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];rt("info",Eb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];rt("link",$b);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];rt("pencil",Sb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];rt("trash",Vb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];rt("x",Tb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Rb=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),ns=t=>{const e=Rb(t);return e.charAt(0).toUpperCase()+e.slice(1)},Cd=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),Db=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ob={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...Ob,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Cd("lucide",n),...!o&&!Db(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(Ub,{ref:o,iconNode:e,className:Cd(`lucide-${Pb(ns(t))}`,`lucide-${t}`,a),...n}));return r.displayName=ns(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];at("check-check",Bb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];at("chevron-down",Zb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];at("chevron-up",Fb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];at("chevrons-left",_b);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];at("chevrons-right",Ib);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];at("info",Hb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];at("link",Yb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];at("pencil",Xb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];at("trash",Kb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];at("x",Gb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Jb=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),ss=t=>{const e=Jb(t);return e.charAt(0).toUpperCase()+e.slice(1)},Ad=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),eM=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var tM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...tM,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Ad("lucide",n),...!o&&!eM(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(rM,{ref:o,iconNode:e,className:Ad(`lucide-${Qb(ss(t))}`,`lucide-${t}`,a),...n}));return r.displayName=ss(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aM=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];ot("check-check",aM);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oM=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];ot("chevron-down",oM);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nM=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];ot("chevron-up",nM);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sM=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];ot("chevrons-left",sM);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];ot("chevrons-right",iM);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cM=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];ot("info",cM);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lM=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];ot("link",lM);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dM=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];ot("pencil",dM);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hM=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];ot("trash",hM);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uM=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];ot("x",uM);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),pM=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),is=t=>{const e=pM(t);return e.charAt(0).toUpperCase()+e.slice(1)},Ld=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),fM=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var kM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...kM,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Ld("lucide",n),...!o&&!fM(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(yM,{ref:o,iconNode:e,className:Ld(`lucide-${mM(is(t))}`,`lucide-${t}`,a),...n}));return r.displayName=is(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];nt("check-check",gM);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];nt("chevron-down",wM);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];nt("chevron-up",vM);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];nt("chevrons-left",xM);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];nt("chevrons-right",bM);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];nt("info",MM);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];nt("link",NM);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CM=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];nt("pencil",CM);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AM=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];nt("trash",AM);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];nt("x",LM);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jM=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),zM=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),cs=t=>{const e=zM(t);return e.charAt(0).toUpperCase()+e.slice(1)},jd=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),WM=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...qM,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:jd("lucide",n),...!o&&!WM(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(EM,{ref:o,iconNode:e,className:jd(`lucide-${jM(cs(t))}`,`lucide-${t}`,a),...n}));return r.displayName=cs(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $M=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];st("check-check",$M);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SM=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];st("chevron-down",SM);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];st("chevron-up",VM);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];st("chevrons-left",TM);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];st("chevrons-right",PM);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];st("info",RM);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];st("link",DM);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];st("pencil",OM);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];st("trash",UM);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];st("x",BM);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZM=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),FM=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),ls=t=>{const e=FM(t);return e.charAt(0).toUpperCase()+e.slice(1)},zd=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),_M=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var IM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...IM,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:zd("lucide",n),...!o&&!_M(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(HM,{ref:o,iconNode:e,className:zd(`lucide-${ZM(ls(t))}`,`lucide-${t}`,a),...n}));return r.displayName=ls(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YM=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Wd("chevrons-left",YM);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Wd("chevrons-right",XM);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KM=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),GM=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),ds=t=>{const e=GM(t);return e.charAt(0).toUpperCase()+e.slice(1)},qd=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),QM=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var JM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eN=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...JM,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:qd("lucide",n),...!o&&!QM(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(eN,{ref:o,iconNode:e,className:qd(`lucide-${KM(ds(t))}`,`lucide-${t}`,a),...n}));return r.displayName=ds(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tN=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Ed("chevrons-left",tN);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rN=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Ed("chevrons-right",rN);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aN=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),oN=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),hs=t=>{const e=oN(t);return e.charAt(0).toUpperCase()+e.slice(1)},$d=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),nN=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var sN={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iN=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...sN,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:$d("lucide",n),...!o&&!nN(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(iN,{ref:o,iconNode:e,className:$d(`lucide-${aN(hs(t))}`,`lucide-${t}`,a),...n}));return r.displayName=hs(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cN=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Sd("chevrons-left",cN);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lN=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Sd("chevrons-right",lN);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dN=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),hN=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),us=t=>{const e=hN(t);return e.charAt(0).toUpperCase()+e.slice(1)},Vd=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),uN=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var mN={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pN=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...mN,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Vd("lucide",n),...!o&&!uN(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(pN,{ref:o,iconNode:e,className:Vd(`lucide-${dN(us(t))}`,`lucide-${t}`,a),...n}));return r.displayName=us(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fN=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Td("chevrons-left",fN);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kN=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Td("chevrons-right",kN);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yN=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),gN=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),ms=t=>{const e=gN(t);return e.charAt(0).toUpperCase()+e.slice(1)},Pd=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),wN=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var vN={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xN=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...vN,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Pd("lucide",n),...!o&&!wN(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(xN,{ref:o,iconNode:e,className:Pd(`lucide-${yN(ms(t))}`,`lucide-${t}`,a),...n}));return r.displayName=ms(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bN=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Rd("chevrons-left",bN);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MN=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Rd("chevrons-right",MN);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NN=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),CN=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),ps=t=>{const e=CN(t);return e.charAt(0).toUpperCase()+e.slice(1)},Dd=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),AN=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var LN={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jN=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...LN,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Dd("lucide",n),...!o&&!AN(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(jN,{ref:o,iconNode:e,className:Dd(`lucide-${NN(ps(t))}`,`lucide-${t}`,a),...n}));return r.displayName=ps(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zN=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Od("chevrons-left",zN);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WN=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Od("chevrons-right",WN);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qN=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),EN=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),fs=t=>{const e=EN(t);return e.charAt(0).toUpperCase()+e.slice(1)},Ud=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),$N=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var SN={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VN=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...SN,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Ud("lucide",n),...!o&&!$N(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(VN,{ref:o,iconNode:e,className:Ud(`lucide-${qN(fs(t))}`,`lucide-${t}`,a),...n}));return r.displayName=fs(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TN=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Bd("chevrons-left",TN);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PN=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Bd("chevrons-right",PN);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RN=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),DN=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),ks=t=>{const e=DN(t);return e.charAt(0).toUpperCase()+e.slice(1)},Zd=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),ON=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var UN={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BN=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...UN,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Zd("lucide",n),...!o&&!ON(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(BN,{ref:o,iconNode:e,className:Zd(`lucide-${RN(ks(t))}`,`lucide-${t}`,a),...n}));return r.displayName=ks(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZN=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Fd("chevrons-left",ZN);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FN=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Fd("chevrons-right",FN);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _N=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),IN=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),ys=t=>{const e=IN(t);return e.charAt(0).toUpperCase()+e.slice(1)},_d=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),HN=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var YN={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XN=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...YN,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:_d("lucide",n),...!o&&!HN(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(XN,{ref:o,iconNode:e,className:_d(`lucide-${_N(ys(t))}`,`lucide-${t}`,a),...n}));return r.displayName=ys(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KN=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Id("chevrons-left",KN);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GN=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Id("chevrons-right",GN);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QN=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),JN=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),gs=t=>{const e=JN(t);return e.charAt(0).toUpperCase()+e.slice(1)},Hd=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),eC=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var tC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rC=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...tC,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Hd("lucide",n),...!o&&!eC(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(rC,{ref:o,iconNode:e,className:Hd(`lucide-${QN(gs(t))}`,`lucide-${t}`,a),...n}));return r.displayName=gs(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aC=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Yd("chevrons-left",aC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oC=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Yd("chevrons-right",oC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nC=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),sC=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),ws=t=>{const e=sC(t);return e.charAt(0).toUpperCase()+e.slice(1)},Xd=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),iC=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var cC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lC=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...cC,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Xd("lucide",n),...!o&&!iC(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(lC,{ref:o,iconNode:e,className:Xd(`lucide-${nC(ws(t))}`,`lucide-${t}`,a),...n}));return r.displayName=ws(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dC=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Kd("chevrons-left",dC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hC=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Kd("chevrons-right",hC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uC=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),mC=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),vs=t=>{const e=mC(t);return e.charAt(0).toUpperCase()+e.slice(1)},Gd=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),pC=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var fC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kC=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...fC,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Gd("lucide",n),...!o&&!pC(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(kC,{ref:o,iconNode:e,className:Gd(`lucide-${uC(vs(t))}`,`lucide-${t}`,a),...n}));return r.displayName=vs(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yC=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Qd("chevrons-left",yC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gC=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Qd("chevrons-right",gC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wC=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),vC=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),xs=t=>{const e=vC(t);return e.charAt(0).toUpperCase()+e.slice(1)},Jd=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),xC=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var bC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MC=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...bC,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Jd("lucide",n),...!o&&!xC(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(MC,{ref:o,iconNode:e,className:Jd(`lucide-${wC(xs(t))}`,`lucide-${t}`,a),...n}));return r.displayName=xs(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NC=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];eh("chevrons-left",NC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CC=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];eh("chevrons-right",CC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AC=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),LC=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),bs=t=>{const e=LC(t);return e.charAt(0).toUpperCase()+e.slice(1)},th=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),jC=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var zC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WC=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...zC,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:th("lucide",n),...!o&&!jC(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(WC,{ref:o,iconNode:e,className:th(`lucide-${AC(bs(t))}`,`lucide-${t}`,a),...n}));return r.displayName=bs(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qC=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];rh("chevrons-left",qC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EC=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];rh("chevrons-right",EC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $C=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),SC=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Ms=t=>{const e=SC(t);return e.charAt(0).toUpperCase()+e.slice(1)},ah=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),VC=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var TC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PC=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...TC,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:ah("lucide",n),...!o&&!VC(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(PC,{ref:o,iconNode:e,className:ah(`lucide-${$C(Ms(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Ms(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RC=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];oh("chevrons-left",RC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DC=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];oh("chevrons-right",DC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OC=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),UC=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Ns=t=>{const e=UC(t);return e.charAt(0).toUpperCase()+e.slice(1)},nh=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),BC=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ZC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FC=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...ZC,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:nh("lucide",n),...!o&&!BC(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(FC,{ref:o,iconNode:e,className:nh(`lucide-${OC(Ns(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Ns(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _C=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];sh("chevrons-left",_C);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IC=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];sh("chevrons-right",IC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HC=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),YC=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Cs=t=>{const e=YC(t);return e.charAt(0).toUpperCase()+e.slice(1)},ih=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),XC=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var KC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GC=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...KC,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:ih("lucide",n),...!o&&!XC(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(GC,{ref:o,iconNode:e,className:ih(`lucide-${HC(Cs(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Cs(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QC=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];ch("chevrons-left",QC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JC=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];ch("chevrons-right",JC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eA=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),tA=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),As=t=>{const e=tA(t);return e.charAt(0).toUpperCase()+e.slice(1)},lh=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),rA=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var aA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oA=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...aA,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:lh("lucide",n),...!o&&!rA(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(oA,{ref:o,iconNode:e,className:lh(`lucide-${eA(As(t))}`,`lucide-${t}`,a),...n}));return r.displayName=As(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nA=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];dh("chevrons-left",nA);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sA=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];dh("chevrons-right",sA);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iA=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),cA=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Ls=t=>{const e=cA(t);return e.charAt(0).toUpperCase()+e.slice(1)},hh=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),lA=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hA=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...dA,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:hh("lucide",n),...!o&&!lA(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(hA,{ref:o,iconNode:e,className:hh(`lucide-${iA(Ls(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Ls(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uA=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];uh("chevrons-left",uA);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mA=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];uh("chevrons-right",mA);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),fA=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),js=t=>{const e=fA(t);return e.charAt(0).toUpperCase()+e.slice(1)},mh=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),kA=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var yA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gA=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...yA,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:mh("lucide",n),...!o&&!kA(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(gA,{ref:o,iconNode:e,className:mh(`lucide-${pA(js(t))}`,`lucide-${t}`,a),...n}));return r.displayName=js(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];ph("chevrons-left",wA);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vA=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];ph("chevrons-right",vA);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xA=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),bA=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),zs=t=>{const e=bA(t);return e.charAt(0).toUpperCase()+e.slice(1)},fh=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),MA=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var NA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...NA,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:fh("lucide",n),...!o&&!MA(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(CA,{ref:o,iconNode:e,className:fh(`lucide-${xA(zs(t))}`,`lucide-${t}`,a),...n}));return r.displayName=zs(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AA=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];kh("chevrons-left",AA);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];kh("chevrons-right",LA);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jA=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),zA=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Ws=t=>{const e=zA(t);return e.charAt(0).toUpperCase()+e.slice(1)},yh=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),WA=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EA=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...qA,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:yh("lucide",n),...!o&&!WA(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(EA,{ref:o,iconNode:e,className:yh(`lucide-${jA(Ws(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Ws(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $A=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];gh("chevrons-left",$A);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SA=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];gh("chevrons-right",SA);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VA=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),TA=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),qs=t=>{const e=TA(t);return e.charAt(0).toUpperCase()+e.slice(1)},wh=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),PA=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var RA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...RA,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:wh("lucide",n),...!o&&!PA(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(DA,{ref:o,iconNode:e,className:wh(`lucide-${VA(qs(t))}`,`lucide-${t}`,a),...n}));return r.displayName=qs(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];vh("chevrons-left",OA);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];vh("chevrons-right",UA);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BA=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ZA=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Es=t=>{const e=ZA(t);return e.charAt(0).toUpperCase()+e.slice(1)},xh=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),FA=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _A={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IA=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,..._A,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:xh("lucide",n),...!o&&!FA(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(IA,{ref:o,iconNode:e,className:xh(`lucide-${BA(Es(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Es(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HA=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];bh("chevrons-left",HA);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YA=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];bh("chevrons-right",YA);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XA=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),KA=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),$s=t=>{const e=KA(t);return e.charAt(0).toUpperCase()+e.slice(1)},Mh=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),GA=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var QA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...QA,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Mh("lucide",n),...!o&&!GA(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(JA,{ref:o,iconNode:e,className:Mh(`lucide-${XA($s(t))}`,`lucide-${t}`,a),...n}));return r.displayName=$s(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eL=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Nh("chevrons-left",eL);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tL=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Nh("chevrons-right",tL);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rL=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),aL=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Ss=t=>{const e=aL(t);return e.charAt(0).toUpperCase()+e.slice(1)},Ch=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),oL=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var nL={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sL=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...nL,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Ch("lucide",n),...!o&&!oL(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(sL,{ref:o,iconNode:e,className:Ch(`lucide-${rL(Ss(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Ss(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iL=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Ah("chevrons-left",iL);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cL=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Ah("chevrons-right",cL);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lL=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),dL=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Vs=t=>{const e=dL(t);return e.charAt(0).toUpperCase()+e.slice(1)},Lh=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),hL=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var uL={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mL=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...uL,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Lh("lucide",n),...!o&&!hL(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(mL,{ref:o,iconNode:e,className:Lh(`lucide-${lL(Vs(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Vs(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pL=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];jh("chevrons-left",pL);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fL=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];jh("chevrons-right",fL);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kL=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),yL=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Ts=t=>{const e=yL(t);return e.charAt(0).toUpperCase()+e.slice(1)},zh=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),gL=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var wL={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vL=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...wL,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:zh("lucide",n),...!o&&!gL(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(vL,{ref:o,iconNode:e,className:zh(`lucide-${kL(Ts(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Ts(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xL=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];pr("check-check",xL);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bL=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];pr("chevrons-left",bL);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ML=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];pr("chevrons-right",ML);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NL=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];pr("info",NL);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CL=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];pr("link",CL);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AL=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];pr("pencil",AL);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LL=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];pr("trash",LL);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jL=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),zL=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Ps=t=>{const e=zL(t);return e.charAt(0).toUpperCase()+e.slice(1)},Wh=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),WL=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qL={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EL=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...qL,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Wh("lucide",n),...!o&&!WL(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(EL,{ref:o,iconNode:e,className:Wh(`lucide-${jL(Ps(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Ps(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $L=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];fr("check-check",$L);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SL=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];fr("chevrons-left",SL);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VL=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];fr("chevrons-right",VL);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TL=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];fr("info",TL);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PL=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];fr("link",PL);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RL=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];fr("pencil",RL);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DL=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];fr("trash",DL);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OL=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),UL=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Rs=t=>{const e=UL(t);return e.charAt(0).toUpperCase()+e.slice(1)},qh=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),BL=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ZL={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FL=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...ZL,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:qh("lucide",n),...!o&&!BL(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(FL,{ref:o,iconNode:e,className:qh(`lucide-${OL(Rs(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Rs(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _L=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];kr("check-check",_L);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IL=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];kr("chevrons-left",IL);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HL=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];kr("chevrons-right",HL);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YL=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];kr("info",YL);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XL=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];kr("link",XL);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KL=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];kr("pencil",KL);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GL=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];kr("trash",GL);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QL=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),JL=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Ds=t=>{const e=JL(t);return e.charAt(0).toUpperCase()+e.slice(1)},Eh=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),ej=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var tj={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rj=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...tj,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Eh("lucide",n),...!o&&!ej(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(rj,{ref:o,iconNode:e,className:Eh(`lucide-${QL(Ds(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Ds(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aj=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];yr("check-check",aj);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oj=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];yr("chevrons-left",oj);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nj=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];yr("chevrons-right",nj);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];yr("info",sj);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ij=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];yr("link",ij);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cj=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];yr("pencil",cj);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lj=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];yr("trash",lj);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dj=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),hj=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Os=t=>{const e=hj(t);return e.charAt(0).toUpperCase()+e.slice(1)},$h=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),uj=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var mj={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pj=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...mj,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:$h("lucide",n),...!o&&!uj(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(pj,{ref:o,iconNode:e,className:$h(`lucide-${dj(Os(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Os(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fj=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];gr("check-check",fj);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kj=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];gr("chevrons-left",kj);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yj=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];gr("chevrons-right",yj);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];gr("info",gj);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wj=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];gr("link",wj);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vj=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];gr("pencil",vj);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xj=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];gr("trash",xj);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bj=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Mj=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Us=t=>{const e=Mj(t);return e.charAt(0).toUpperCase()+e.slice(1)},Sh=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),Nj=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Cj={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aj=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...Cj,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Sh("lucide",n),...!o&&!Nj(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(Aj,{ref:o,iconNode:e,className:Sh(`lucide-${bj(Us(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Us(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lj=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];It("check-check",Lj);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jj=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];It("chevron-down",jj);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zj=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];It("chevron-up",zj);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wj=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];It("chevrons-left",Wj);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qj=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];It("chevrons-right",qj);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ej=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];It("info",Ej);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $j=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];It("link",$j);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sj=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];It("pencil",Sj);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vj=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];It("trash",Vj);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tj=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Pj=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Bs=t=>{const e=Pj(t);return e.charAt(0).toUpperCase()+e.slice(1)},Vh=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),Rj=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Dj={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oj=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...Dj,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Vh("lucide",n),...!o&&!Rj(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(Oj,{ref:o,iconNode:e,className:Vh(`lucide-${Tj(Bs(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Bs(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uj=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];Ht("check-check",Uj);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bj=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];Ht("chevron-down",Bj);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zj=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];Ht("chevron-up",Zj);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fj=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Ht("chevrons-left",Fj);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _j=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Ht("chevrons-right",_j);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ij=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];Ht("info",Ij);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hj=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];Ht("link",Hj);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yj=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];Ht("pencil",Yj);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xj=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];Ht("trash",Xj);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kj=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Gj=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Zs=t=>{const e=Gj(t);return e.charAt(0).toUpperCase()+e.slice(1)},Th=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),Qj=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Jj={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e9=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...Jj,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Th("lucide",n),...!o&&!Qj(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(e9,{ref:o,iconNode:e,className:Th(`lucide-${Kj(Zs(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Zs(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t9=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];Yt("check-check",t9);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r9=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];Yt("chevron-down",r9);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a9=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];Yt("chevron-up",a9);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o9=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Yt("chevrons-left",o9);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n9=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Yt("chevrons-right",n9);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s9=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];Yt("info",s9);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i9=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];Yt("link",i9);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c9=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];Yt("pencil",c9);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l9=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];Yt("trash",l9);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d9=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),h9=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Fs=t=>{const e=h9(t);return e.charAt(0).toUpperCase()+e.slice(1)},Ph=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),u9=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var m9={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p9=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...m9,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Ph("lucide",n),...!o&&!u9(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(p9,{ref:o,iconNode:e,className:Ph(`lucide-${d9(Fs(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Fs(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f9=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];Xt("check-check",f9);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k9=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];Xt("chevron-down",k9);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y9=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];Xt("chevron-up",y9);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g9=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Xt("chevrons-left",g9);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w9=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Xt("chevrons-right",w9);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v9=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];Xt("info",v9);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x9=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];Xt("link",x9);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b9=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];Xt("pencil",b9);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M9=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];Xt("trash",M9);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N9=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),C9=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),_s=t=>{const e=C9(t);return e.charAt(0).toUpperCase()+e.slice(1)},Rh=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),A9=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var L9={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j9=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...L9,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Rh("lucide",n),...!o&&!A9(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(j9,{ref:o,iconNode:e,className:Rh(`lucide-${N9(_s(t))}`,`lucide-${t}`,a),...n}));return r.displayName=_s(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z9=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];Kt("check-check",z9);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W9=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];Kt("chevron-down",W9);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q9=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];Kt("chevron-up",q9);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E9=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Kt("chevrons-left",E9);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $9=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Kt("chevrons-right",$9);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S9=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];Kt("info",S9);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V9=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];Kt("link",V9);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T9=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];Kt("pencil",T9);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P9=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];Kt("trash",P9);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R9=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),D9=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Is=t=>{const e=D9(t);return e.charAt(0).toUpperCase()+e.slice(1)},Dh=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),O9=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var U9={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B9=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...U9,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Dh("lucide",n),...!o&&!O9(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(B9,{ref:o,iconNode:e,className:Dh(`lucide-${R9(Is(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Is(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z9=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];Gt("check-check",Z9);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F9=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];Gt("chevron-down",F9);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _9=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];Gt("chevron-up",_9);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I9=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Gt("chevrons-left",I9);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H9=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Gt("chevrons-right",H9);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y9=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];Gt("info",Y9);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X9=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];Gt("link",X9);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K9=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];Gt("pencil",K9);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G9=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];Gt("trash",G9);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q9=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),J9=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Hs=t=>{const e=J9(t);return e.charAt(0).toUpperCase()+e.slice(1)},Oh=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),ez=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var tz={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rz=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...tz,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Oh("lucide",n),...!o&&!ez(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(rz,{ref:o,iconNode:e,className:Oh(`lucide-${Q9(Hs(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Hs(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const az=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];it("check-check",az);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oz=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];it("chevron-down",oz);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nz=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];it("chevron-up",nz);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sz=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];it("chevrons-left",sz);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iz=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];it("chevrons-right",iz);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cz=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];it("info",cz);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lz=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];it("link",lz);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dz=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];it("pencil",dz);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hz=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];it("trash",hz);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uz=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];it("x",uz);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mz=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),pz=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Ys=t=>{const e=pz(t);return e.charAt(0).toUpperCase()+e.slice(1)},Uh=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),fz=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var kz={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yz=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...kz,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Uh("lucide",n),...!o&&!fz(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(yz,{ref:o,iconNode:e,className:Uh(`lucide-${mz(Ys(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Ys(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gz=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];ct("check-check",gz);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wz=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];ct("chevron-down",wz);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vz=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];ct("chevron-up",vz);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xz=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];ct("chevrons-left",xz);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bz=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];ct("chevrons-right",bz);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mz=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];ct("info",Mz);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nz=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];ct("link",Nz);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cz=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];ct("pencil",Cz);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Az=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];ct("trash",Az);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lz=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];ct("x",Lz);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jz=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),zz=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Xs=t=>{const e=zz(t);return e.charAt(0).toUpperCase()+e.slice(1)},Bh=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),Wz=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qz={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ez=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...qz,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Bh("lucide",n),...!o&&!Wz(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(Ez,{ref:o,iconNode:e,className:Bh(`lucide-${jz(Xs(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Xs(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $z=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];lt("check-check",$z);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sz=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];lt("chevron-down",Sz);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vz=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];lt("chevron-up",Vz);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tz=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];lt("chevrons-left",Tz);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pz=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];lt("chevrons-right",Pz);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rz=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];lt("info",Rz);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dz=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];lt("link",Dz);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oz=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];lt("pencil",Oz);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uz=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];lt("trash",Uz);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bz=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];lt("x",Bz);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zz=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Fz=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Ks=t=>{const e=Fz(t);return e.charAt(0).toUpperCase()+e.slice(1)},Zh=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),_z=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Iz={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hz=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...Iz,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Zh("lucide",n),...!o&&!_z(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(Hz,{ref:o,iconNode:e,className:Zh(`lucide-${Zz(Ks(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Ks(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yz=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];dt("check-check",Yz);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xz=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];dt("chevron-down",Xz);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kz=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];dt("chevron-up",Kz);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gz=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];dt("chevrons-left",Gz);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qz=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];dt("chevrons-right",Qz);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jz=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];dt("info",Jz);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eW=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];dt("link",eW);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tW=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];dt("pencil",tW);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rW=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];dt("trash",rW);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aW=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];dt("x",aW);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oW=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),nW=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Gs=t=>{const e=nW(t);return e.charAt(0).toUpperCase()+e.slice(1)},Fh=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),sW=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var iW={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cW=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...iW,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Fh("lucide",n),...!o&&!sW(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ht=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(cW,{ref:o,iconNode:e,className:Fh(`lucide-${oW(Gs(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Gs(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lW=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];ht("check-check",lW);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dW=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];ht("chevron-down",dW);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hW=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];ht("chevron-up",hW);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uW=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];ht("chevrons-left",uW);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mW=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];ht("chevrons-right",mW);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pW=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];ht("info",pW);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fW=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];ht("link",fW);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kW=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];ht("pencil",kW);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yW=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];ht("trash",yW);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gW=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];ht("x",gW);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wW=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),vW=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Qs=t=>{const e=vW(t);return e.charAt(0).toUpperCase()+e.slice(1)},_h=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),xW=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var bW={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MW=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...bW,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:_h("lucide",n),...!o&&!xW(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(MW,{ref:o,iconNode:e,className:_h(`lucide-${wW(Qs(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Qs(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NW=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];ut("check-check",NW);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CW=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];ut("chevron-down",CW);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AW=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];ut("chevron-up",AW);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LW=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];ut("chevrons-left",LW);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jW=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];ut("chevrons-right",jW);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zW=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];ut("info",zW);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WW=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];ut("link",WW);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qW=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];ut("pencil",qW);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EW=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];ut("trash",EW);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $W=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];ut("x",$W);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SW=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),VW=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Js=t=>{const e=VW(t);return e.charAt(0).toUpperCase()+e.slice(1)},Ih=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),TW=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var PW={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RW=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...PW,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Ih("lucide",n),...!o&&!TW(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(RW,{ref:o,iconNode:e,className:Ih(`lucide-${SW(Js(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Js(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DW=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];mt("check-check",DW);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OW=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];mt("chevron-down",OW);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UW=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];mt("chevron-up",UW);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BW=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];mt("chevrons-left",BW);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZW=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];mt("chevrons-right",ZW);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FW=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];mt("info",FW);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _W=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];mt("link",_W);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IW=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];mt("pencil",IW);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HW=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];mt("trash",HW);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YW=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];mt("x",YW);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XW=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),KW=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),ei=t=>{const e=KW(t);return e.charAt(0).toUpperCase()+e.slice(1)},Hh=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),GW=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var QW={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JW=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...QW,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Hh("lucide",n),...!o&&!GW(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(JW,{ref:o,iconNode:e,className:Hh(`lucide-${XW(ei(t))}`,`lucide-${t}`,a),...n}));return r.displayName=ei(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eq=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];pt("check-check",eq);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tq=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];pt("chevron-down",tq);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rq=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];pt("chevron-up",rq);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aq=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];pt("chevrons-left",aq);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oq=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];pt("chevrons-right",oq);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nq=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];pt("info",nq);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sq=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];pt("link",sq);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iq=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];pt("pencil",iq);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cq=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];pt("trash",cq);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lq=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];pt("x",lq);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dq=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),hq=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),ti=t=>{const e=hq(t);return e.charAt(0).toUpperCase()+e.slice(1)},Yh=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),uq=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var mq={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pq=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...mq,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Yh("lucide",n),...!o&&!uq(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(pq,{ref:o,iconNode:e,className:Yh(`lucide-${dq(ti(t))}`,`lucide-${t}`,a),...n}));return r.displayName=ti(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fq=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];ft("check-check",fq);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kq=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];ft("chevron-down",kq);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yq=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];ft("chevron-up",yq);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gq=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];ft("chevrons-left",gq);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wq=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];ft("chevrons-right",wq);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vq=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];ft("info",vq);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xq=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];ft("link",xq);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bq=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];ft("pencil",bq);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mq=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];ft("trash",Mq);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nq=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];ft("x",Nq);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cq=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Aq=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),ri=t=>{const e=Aq(t);return e.charAt(0).toUpperCase()+e.slice(1)},Xh=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),Lq=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jq={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zq=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...jq,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Xh("lucide",n),...!o&&!Lq(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(zq,{ref:o,iconNode:e,className:Xh(`lucide-${Cq(ri(t))}`,`lucide-${t}`,a),...n}));return r.displayName=ri(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wq=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];kt("check-check",Wq);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qq=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];kt("chevron-down",qq);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eq=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];kt("chevron-up",Eq);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $q=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];kt("chevrons-left",$q);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sq=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];kt("chevrons-right",Sq);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vq=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];kt("info",Vq);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tq=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];kt("link",Tq);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pq=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];kt("pencil",Pq);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rq=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];kt("trash",Rq);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dq=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];kt("x",Dq);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oq=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Uq=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),ai=t=>{const e=Uq(t);return e.charAt(0).toUpperCase()+e.slice(1)},Kh=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),Bq=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Zq={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fq=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...Zq,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Kh("lucide",n),...!o&&!Bq(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(Fq,{ref:o,iconNode:e,className:Kh(`lucide-${Oq(ai(t))}`,`lucide-${t}`,a),...n}));return r.displayName=ai(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _q=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];yt("check-check",_q);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iq=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];yt("chevron-down",Iq);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hq=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];yt("chevron-up",Hq);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yq=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];yt("chevrons-left",Yq);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xq=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];yt("chevrons-right",Xq);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kq=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];yt("info",Kq);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gq=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];yt("link",Gq);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qq=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];yt("pencil",Qq);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jq=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];yt("trash",Jq);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eE=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];yt("x",eE);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tE=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),rE=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),oi=t=>{const e=rE(t);return e.charAt(0).toUpperCase()+e.slice(1)},Gh=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),aE=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var oE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nE=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...oE,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Gh("lucide",n),...!o&&!aE(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(nE,{ref:o,iconNode:e,className:Gh(`lucide-${tE(oi(t))}`,`lucide-${t}`,a),...n}));return r.displayName=oi(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sE=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];gt("check-check",sE);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iE=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];gt("chevron-down",iE);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cE=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];gt("chevron-up",cE);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lE=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];gt("chevrons-left",lE);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dE=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];gt("chevrons-right",dE);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];gt("info",hE);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uE=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];gt("link",uE);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mE=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];gt("pencil",mE);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pE=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];gt("trash",pE);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fE=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];gt("x",fE);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),yE=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),ni=t=>{const e=yE(t);return e.charAt(0).toUpperCase()+e.slice(1)},Qh=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),gE=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var wE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vE=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...wE,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Qh("lucide",n),...!o&&!gE(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(vE,{ref:o,iconNode:e,className:Qh(`lucide-${kE(ni(t))}`,`lucide-${t}`,a),...n}));return r.displayName=ni(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];wt("check-check",xE);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bE=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];wt("chevron-down",bE);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ME=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];wt("chevron-up",ME);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NE=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];wt("chevrons-left",NE);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CE=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];wt("chevrons-right",CE);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];wt("info",AE);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LE=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];wt("link",LE);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jE=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];wt("pencil",jE);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];wt("trash",zE);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WE=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];wt("x",WE);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qE=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),EE=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),si=t=>{const e=EE(t);return e.charAt(0).toUpperCase()+e.slice(1)},Jh=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),$E=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var SE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...SE,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:Jh("lucide",n),...!o&&!$E(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(VE,{ref:o,iconNode:e,className:Jh(`lucide-${qE(si(t))}`,`lucide-${t}`,a),...n}));return r.displayName=si(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TE=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];vt("check-check",TE);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PE=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];vt("chevron-down",PE);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];vt("chevron-up",RE);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DE=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];vt("chevrons-left",DE);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OE=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];vt("chevrons-right",OE);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];vt("info",UE);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BE=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];vt("link",BE);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZE=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];vt("pencil",ZE);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FE=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];vt("trash",FE);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _E=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];vt("x",_E);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IE=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),HE=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),ii=t=>{const e=HE(t);return e.charAt(0).toUpperCase()+e.slice(1)},e1=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),YE=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var XE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...XE,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:e1("lucide",n),...!o&&!YE(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xt=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(KE,{ref:o,iconNode:e,className:e1(`lucide-${IE(ii(t))}`,`lucide-${t}`,a),...n}));return r.displayName=ii(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];xt("check-check",GE);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QE=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];xt("chevron-down",QE);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JE=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];xt("chevron-up",JE);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e$=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];xt("chevrons-left",e$);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t$=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];xt("chevrons-right",t$);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r$=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];xt("info",r$);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a$=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];xt("link",a$);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o$=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];xt("pencil",o$);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n$=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];xt("trash",n$);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s$=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];xt("x",s$);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i$=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),c$=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),ci=t=>{const e=c$(t);return e.charAt(0).toUpperCase()+e.slice(1)},t1=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),l$=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var d$={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h$=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...d$,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:t1("lucide",n),...!o&&!l$(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(h$,{ref:o,iconNode:e,className:t1(`lucide-${i$(ci(t))}`,`lucide-${t}`,a),...n}));return r.displayName=ci(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u$=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];bt("check-check",u$);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m$=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];bt("chevron-down",m$);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p$=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];bt("chevron-up",p$);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f$=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];bt("chevrons-left",f$);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k$=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];bt("chevrons-right",k$);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y$=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];bt("info",y$);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g$=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];bt("link",g$);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w$=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];bt("pencil",w$);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v$=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];bt("trash",v$);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x$=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];bt("x",x$);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b$=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),M$=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),li=t=>{const e=M$(t);return e.charAt(0).toUpperCase()+e.slice(1)},r1=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),N$=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var C$={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A$=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...C$,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:r1("lucide",n),...!o&&!N$(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(A$,{ref:o,iconNode:e,className:r1(`lucide-${b$(li(t))}`,`lucide-${t}`,a),...n}));return r.displayName=li(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L$=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];Mt("check-check",L$);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j$=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];Mt("chevron-down",j$);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z$=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];Mt("chevron-up",z$);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W$=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Mt("chevrons-left",W$);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q$=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Mt("chevrons-right",q$);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E$=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];Mt("info",E$);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $$=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];Mt("link",$$);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S$=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];Mt("pencil",S$);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V$=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];Mt("trash",V$);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T$=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];Mt("x",T$);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P$=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),R$=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),di=t=>{const e=R$(t);return e.charAt(0).toUpperCase()+e.slice(1)},a1=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),D$=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var O$={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U$=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...O$,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:a1("lucide",n),...!o&&!D$(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(U$,{ref:o,iconNode:e,className:a1(`lucide-${P$(di(t))}`,`lucide-${t}`,a),...n}));return r.displayName=di(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B$=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];Nt("check-check",B$);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z$=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];Nt("chevron-down",Z$);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F$=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];Nt("chevron-up",F$);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _$=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Nt("chevrons-left",_$);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I$=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Nt("chevrons-right",I$);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H$=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];Nt("info",H$);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y$=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];Nt("link",Y$);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X$=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];Nt("pencil",X$);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K$=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];Nt("trash",K$);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G$=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];Nt("x",G$);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q$=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),J$=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),hi=t=>{const e=J$(t);return e.charAt(0).toUpperCase()+e.slice(1)},o1=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),eS=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var tS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...tS,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:o1("lucide",n),...!o&&!eS(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(rS,{ref:o,iconNode:e,className:o1(`lucide-${Q$(hi(t))}`,`lucide-${t}`,a),...n}));return r.displayName=hi(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];Ct("check-check",aS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];Ct("chevron-down",oS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];Ct("chevron-up",nS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Ct("chevrons-left",sS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Ct("chevrons-right",iS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];Ct("info",cS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];Ct("link",lS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];Ct("pencil",dS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];Ct("trash",hS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];Ct("x",uS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),pS=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),ui=t=>{const e=pS(t);return e.charAt(0).toUpperCase()+e.slice(1)},n1=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),fS=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var kS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...kS,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:n1("lucide",n),...!o&&!fS(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(yS,{ref:o,iconNode:e,className:n1(`lucide-${mS(ui(t))}`,`lucide-${t}`,a),...n}));return r.displayName=ui(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];At("check-check",gS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];At("chevron-down",wS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];At("chevron-up",vS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];At("chevrons-left",xS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];At("chevrons-right",bS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];At("info",MS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];At("link",NS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];At("pencil",CS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];At("trash",AS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];At("x",LS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),zS=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),mi=t=>{const e=zS(t);return e.charAt(0).toUpperCase()+e.slice(1)},s1=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),WS=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...qS,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:s1("lucide",n),...!o&&!WS(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(ES,{ref:o,iconNode:e,className:s1(`lucide-${jS(mi(t))}`,`lucide-${t}`,a),...n}));return r.displayName=mi(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];Lt("check-check",$S);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];Lt("chevron-down",SS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];Lt("chevron-up",VS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Lt("chevrons-left",TS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Lt("chevrons-right",PS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];Lt("info",RS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];Lt("link",DS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];Lt("pencil",OS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];Lt("trash",US);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];Lt("x",BS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),FS=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),pi=t=>{const e=FS(t);return e.charAt(0).toUpperCase()+e.slice(1)},i1=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),_S=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var IS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...IS,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:i1("lucide",n),...!o&&!_S(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(HS,{ref:o,iconNode:e,className:i1(`lucide-${ZS(pi(t))}`,`lucide-${t}`,a),...n}));return r.displayName=pi(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];jt("check-check",YS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];jt("chevron-down",XS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];jt("chevron-up",KS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];jt("chevrons-left",GS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];jt("chevrons-right",QS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];jt("info",JS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eV=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];jt("link",eV);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tV=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];jt("pencil",tV);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rV=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];jt("trash",rV);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aV=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];jt("x",aV);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oV=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),nV=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),fi=t=>{const e=nV(t);return e.charAt(0).toUpperCase()+e.slice(1)},c1=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),sV=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var iV={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cV=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...iV,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:c1("lucide",n),...!o&&!sV(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(cV,{ref:o,iconNode:e,className:c1(`lucide-${oV(fi(t))}`,`lucide-${t}`,a),...n}));return r.displayName=fi(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lV=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];zt("check-check",lV);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dV=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];zt("chevron-down",dV);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hV=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];zt("chevron-up",hV);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uV=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];zt("chevrons-left",uV);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mV=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];zt("chevrons-right",mV);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pV=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];zt("info",pV);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fV=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];zt("link",fV);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kV=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];zt("pencil",kV);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yV=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];zt("trash",yV);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gV=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];zt("x",gV);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wV=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),vV=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),ki=t=>{const e=vV(t);return e.charAt(0).toUpperCase()+e.slice(1)},l1=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),xV=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var bV={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MV=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...bV,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:l1("lucide",n),...!o&&!xV(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(MV,{ref:o,iconNode:e,className:l1(`lucide-${wV(ki(t))}`,`lucide-${t}`,a),...n}));return r.displayName=ki(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NV=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];Wt("check-check",NV);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CV=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];Wt("chevron-down",CV);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AV=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];Wt("chevron-up",AV);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LV=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Wt("chevrons-left",LV);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jV=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Wt("chevrons-right",jV);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zV=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];Wt("info",zV);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WV=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];Wt("link",WV);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qV=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];Wt("pencil",qV);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EV=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];Wt("trash",EV);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $V=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];Wt("x",$V);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SV=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),VV=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),yi=t=>{const e=VV(t);return e.charAt(0).toUpperCase()+e.slice(1)},d1=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),TV=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var PV={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RV=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...PV,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:d1("lucide",n),...!o&&!TV(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(RV,{ref:o,iconNode:e,className:d1(`lucide-${SV(yi(t))}`,`lucide-${t}`,a),...n}));return r.displayName=yi(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DV=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];qt("check-check",DV);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OV=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];qt("chevron-down",OV);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UV=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];qt("chevron-up",UV);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BV=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];qt("chevrons-left",BV);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZV=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];qt("chevrons-right",ZV);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FV=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];qt("info",FV);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _V=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];qt("link",_V);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IV=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];qt("pencil",IV);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HV=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];qt("trash",HV);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YV=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];qt("x",YV);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XV=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),KV=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),gi=t=>{const e=KV(t);return e.charAt(0).toUpperCase()+e.slice(1)},h1=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),GV=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var QV={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JV=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...QV,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:h1("lucide",n),...!o&&!GV(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(JV,{ref:o,iconNode:e,className:h1(`lucide-${XV(gi(t))}`,`lucide-${t}`,a),...n}));return r.displayName=gi(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eT=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];Et("check-check",eT);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tT=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];Et("chevron-down",tT);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rT=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];Et("chevron-up",rT);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aT=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Et("chevrons-left",aT);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oT=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Et("chevrons-right",oT);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];Et("info",nT);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sT=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];Et("link",sT);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iT=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];Et("pencil",iT);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cT=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];Et("trash",cT);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lT=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];Et("x",lT);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),hT=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),wi=t=>{const e=hT(t);return e.charAt(0).toUpperCase()+e.slice(1)},u1=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),uT=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var mT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pT=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...mT,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:u1("lucide",n),...!o&&!uT(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(pT,{ref:o,iconNode:e,className:u1(`lucide-${dT(wi(t))}`,`lucide-${t}`,a),...n}));return r.displayName=wi(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fT=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];$t("check-check",fT);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kT=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];$t("chevron-down",kT);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yT=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];$t("chevron-up",yT);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gT=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];$t("chevrons-left",gT);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wT=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];$t("chevrons-right",wT);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];$t("info",vT);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xT=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];$t("link",xT);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bT=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];$t("pencil",bT);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MT=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];$t("trash",MT);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NT=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];$t("x",NT);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),AT=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),vi=t=>{const e=AT(t);return e.charAt(0).toUpperCase()+e.slice(1)},m1=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),LT=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zT=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...jT,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:m1("lucide",n),...!o&&!LT(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(zT,{ref:o,iconNode:e,className:m1(`lucide-${CT(vi(t))}`,`lucide-${t}`,a),...n}));return r.displayName=vi(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WT=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];St("check-check",WT);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qT=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];St("chevron-down",qT);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ET=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];St("chevron-up",ET);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $T=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];St("chevrons-left",$T);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ST=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];St("chevrons-right",ST);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];St("info",VT);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TT=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];St("link",TT);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PT=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];St("pencil",PT);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RT=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];St("trash",RT);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DT=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];St("x",DT);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),UT=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),xi=t=>{const e=UT(t);return e.charAt(0).toUpperCase()+e.slice(1)},p1=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),BT=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ZT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FT=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...ZT,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:p1("lucide",n),...!o&&!BT(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(FT,{ref:o,iconNode:e,className:p1(`lucide-${OT(xi(t))}`,`lucide-${t}`,a),...n}));return r.displayName=xi(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _T=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];Vt("check-check",_T);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IT=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];Vt("chevron-down",IT);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HT=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];Vt("chevron-up",HT);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YT=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Vt("chevrons-left",YT);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XT=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Vt("chevrons-right",XT);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];Vt("info",KT);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GT=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];Vt("link",GT);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QT=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];Vt("pencil",QT);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JT=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];Vt("trash",JT);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eP=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];Vt("x",eP);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tP=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),rP=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),bi=t=>{const e=rP(t);return e.charAt(0).toUpperCase()+e.slice(1)},f1=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),aP=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var oP={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nP=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...oP,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:f1("lucide",n),...!o&&!aP(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(nP,{ref:o,iconNode:e,className:f1(`lucide-${tP(bi(t))}`,`lucide-${t}`,a),...n}));return r.displayName=bi(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sP=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];Tt("check-check",sP);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iP=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];Tt("chevron-down",iP);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cP=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];Tt("chevron-up",cP);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lP=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Tt("chevrons-left",lP);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dP=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Tt("chevrons-right",dP);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hP=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];Tt("info",hP);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uP=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];Tt("link",uP);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mP=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];Tt("pencil",mP);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pP=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];Tt("trash",pP);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fP=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];Tt("x",fP);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kP=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),yP=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Mi=t=>{const e=yP(t);return e.charAt(0).toUpperCase()+e.slice(1)},k1=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),gP=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var wP={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vP=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...wP,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:k1("lucide",n),...!o&&!gP(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(vP,{ref:o,iconNode:e,className:k1(`lucide-${kP(Mi(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Mi(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xP=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];Pt("check-check",xP);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bP=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];Pt("chevron-down",bP);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MP=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];Pt("chevron-up",MP);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NP=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Pt("chevrons-left",NP);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CP=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Pt("chevrons-right",CP);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AP=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];Pt("info",AP);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LP=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];Pt("link",LP);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jP=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];Pt("pencil",jP);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zP=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];Pt("trash",zP);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WP=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];Pt("x",WP);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qP=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),EP=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Ni=t=>{const e=EP(t);return e.charAt(0).toUpperCase()+e.slice(1)},y1=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),$P=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var SP={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VP=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...SP,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:y1("lucide",n),...!o&&!$P(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(VP,{ref:o,iconNode:e,className:y1(`lucide-${qP(Ni(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Ni(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TP=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];Rt("check-check",TP);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PP=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];Rt("chevron-down",PP);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RP=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];Rt("chevron-up",RP);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DP=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Rt("chevrons-left",DP);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OP=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Rt("chevrons-right",OP);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UP=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];Rt("info",UP);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BP=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];Rt("link",BP);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZP=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];Rt("pencil",ZP);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FP=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];Rt("trash",FP);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _P=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];Rt("x",_P);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IP=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),HP=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Ci=t=>{const e=HP(t);return e.charAt(0).toUpperCase()+e.slice(1)},g1=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),YP=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var XP={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KP=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...XP,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:g1("lucide",n),...!o&&!YP(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(KP,{ref:o,iconNode:e,className:g1(`lucide-${IP(Ci(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Ci(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GP=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];Dt("check-check",GP);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QP=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];Dt("chevron-down",QP);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JP=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];Dt("chevron-up",JP);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eR=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Dt("chevrons-left",eR);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tR=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Dt("chevrons-right",tR);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];Dt("info",rR);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aR=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];Dt("link",aR);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oR=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];Dt("pencil",oR);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nR=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];Dt("trash",nR);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sR=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];Dt("x",sR);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iR=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),cR=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Ai=t=>{const e=cR(t);return e.charAt(0).toUpperCase()+e.slice(1)},w1=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),lR=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dR={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hR=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...dR,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:w1("lucide",n),...!o&&!lR(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(hR,{ref:o,iconNode:e,className:w1(`lucide-${iR(Ai(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Ai(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uR=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];Ot("check-check",uR);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mR=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];Ot("chevron-down",mR);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pR=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];Ot("chevron-up",pR);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fR=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Ot("chevrons-left",fR);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kR=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Ot("chevrons-right",kR);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];Ot("info",yR);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gR=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];Ot("link",gR);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wR=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];Ot("pencil",wR);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vR=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];Ot("trash",vR);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xR=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];Ot("x",xR);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bR=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),MR=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),Li=t=>{const e=MR(t);return e.charAt(0).toUpperCase()+e.slice(1)},v1=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),NR=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var CR={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AR=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...s},l)=>i.createElement("svg",{ref:l,...CR,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:v1("lucide",n),...!o&&!NR(s)&&{"aria-hidden":"true"},...s},[...c.map(([d,h])=>i.createElement(d,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ut=(t,e)=>{const r=i.forwardRef(({className:a,...n},o)=>i.createElement(AR,{ref:o,iconNode:e,className:v1(`lucide-${bR(Li(t))}`,`lucide-${t}`,a),...n}));return r.displayName=Li(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LR=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]];Ut("check-check",LR);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jR=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]];Ut("chevron-down",jR);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zR=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]];Ut("chevron-up",zR);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WR=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]];Ut("chevrons-left",WR);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qR=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]];Ut("chevrons-right",qR);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ER=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]];Ut("info",ER);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $R=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]];Ut("link",$R);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SR=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]];Ut("pencil",SR);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VR=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]];Ut("trash",VR);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TR=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]];Ut("x",TR);i.createContext({});process.env.NODE_ENV;const x1=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"];new Set(x1);const PR=new Set(["x","y","z"]);x1.filter(t=>!PR.has(t));i.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});i.createContext({strict:!1});try{require("@emotion/is-prop-valid").default}catch{}const RR=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),DR="framerAppearId";""+RR(DR);i.createContext({});const ji=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t);ji("applewebkit/")&&ji("chrome/");i.createContext({});process.env.NODE_ENV;const b1=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"];new Set(b1);const OR=new Set(["x","y","z"]);b1.filter(t=>!OR.has(t));i.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});i.createContext({strict:!1});try{require("@emotion/is-prop-valid").default}catch{}const UR=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),BR="framerAppearId";""+UR(BR);i.createContext({});const zi=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t);zi("applewebkit/")&&zi("chrome/");i.createContext({});process.env.NODE_ENV;const M1=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"];new Set(M1);const ZR=new Set(["x","y","z"]);M1.filter(t=>!ZR.has(t));i.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});i.createContext({strict:!1});try{require("@emotion/is-prop-valid").default}catch{}const FR=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),_R="framerAppearId";""+FR(_R);i.createContext({});const Wi=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t);Wi("applewebkit/")&&Wi("chrome/");i.createContext({});process.env.NODE_ENV;const N1=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"];new Set(N1);const IR=new Set(["x","y","z"]);N1.filter(t=>!IR.has(t));i.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});i.createContext({strict:!1});try{require("@emotion/is-prop-valid").default}catch{}const HR=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),YR="framerAppearId";""+HR(YR);i.createContext({});const qi=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t);qi("applewebkit/")&&qi("chrome/");i.createContext({});process.env.NODE_ENV;const C1=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"];new Set(C1);const XR=new Set(["x","y","z"]);C1.filter(t=>!XR.has(t));i.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});i.createContext({strict:!1});try{require("@emotion/is-prop-valid").default}catch{}const KR=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),GR="framerAppearId";""+KR(GR);i.createContext({});const Ei=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t);Ei("applewebkit/")&&Ei("chrome/");i.createContext({});process.env.NODE_ENV;const A1=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"];new Set(A1);const QR=new Set(["x","y","z"]);A1.filter(t=>!QR.has(t));i.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});i.createContext({strict:!1});try{require("@emotion/is-prop-valid").default}catch{}const JR=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),eD="framerAppearId";""+JR(eD);i.createContext({});const $i=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t);$i("applewebkit/")&&$i("chrome/");i.createContext({});process.env.NODE_ENV;const L1=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"];new Set(L1);const tD=new Set(["x","y","z"]);L1.filter(t=>!tD.has(t));i.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});i.createContext({strict:!1});try{require("@emotion/is-prop-valid").default}catch{}const rD=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),aD="framerAppearId";""+rD(aD);i.createContext({});const Si=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t);Si("applewebkit/")&&Si("chrome/");i.createContext({});process.env.NODE_ENV;const j1=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"];new Set(j1);const oD=new Set(["x","y","z"]);j1.filter(t=>!oD.has(t));i.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});i.createContext({strict:!1});try{require("@emotion/is-prop-valid").default}catch{}const nD=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),sD="framerAppearId";""+nD(sD);i.createContext({});const Vi=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t);Vi("applewebkit/")&&Vi("chrome/");i.createContext({});process.env.NODE_ENV;const z1=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"];new Set(z1);const iD=new Set(["x","y","z"]);z1.filter(t=>!iD.has(t));i.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});i.createContext({strict:!1});try{require("@emotion/is-prop-valid").default}catch{}const cD=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),lD="framerAppearId";""+cD(lD);i.createContext({});const Ti=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t);Ti("applewebkit/")&&Ti("chrome/");i.createContext({});process.env.NODE_ENV;const W1=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"];new Set(W1);const dD=new Set(["x","y","z"]);W1.filter(t=>!dD.has(t));i.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});i.createContext({strict:!1});try{require("@emotion/is-prop-valid").default}catch{}const hD=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),uD="framerAppearId";""+hD(uD);i.createContext({});const Pi=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t);Pi("applewebkit/")&&Pi("chrome/");i.createContext({});process.env.NODE_ENV;const q1=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"];new Set(q1);const mD=new Set(["x","y","z"]);q1.filter(t=>!mD.has(t));i.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});i.createContext({strict:!1});try{require("@emotion/is-prop-valid").default}catch{}const pD=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),fD="framerAppearId";""+pD(fD);i.createContext({});const Ri=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t);Ri("applewebkit/")&&Ri("chrome/");i.createContext({});process.env.NODE_ENV;const E1=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"];new Set(E1);const kD=new Set(["x","y","z"]);E1.filter(t=>!kD.has(t));i.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});i.createContext({strict:!1});try{require("@emotion/is-prop-valid").default}catch{}const yD=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),gD="framerAppearId";""+yD(gD);i.createContext({});const Di=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t);Di("applewebkit/")&&Di("chrome/");i.createContext({});process.env.NODE_ENV;const $1=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"];new Set($1);const wD=new Set(["x","y","z"]);$1.filter(t=>!wD.has(t));i.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});i.createContext({strict:!1});try{require("@emotion/is-prop-valid").default}catch{}const vD=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),xD="framerAppearId";""+vD(xD);i.createContext({});const Oi=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t);Oi("applewebkit/")&&Oi("chrome/");i.createContext({});process.env.NODE_ENV;const S1=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"];new Set(S1);const bD=new Set(["x","y","z"]);S1.filter(t=>!bD.has(t));i.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});i.createContext({strict:!1});try{require("@emotion/is-prop-valid").default}catch{}const MD=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),ND="framerAppearId";""+MD(ND);i.createContext({});const Ui=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t);Ui("applewebkit/")&&Ui("chrome/");i.createContext({});const V1=(t,e,r)=>r>e?e:r<t?t:r;process.env.NODE_ENV;const CD=t=>t,wa={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},T1={...wa,transform:t=>V1(0,1,t)};({...wa});const Pr=t=>Math.round(t*1e5)/1e5,P1=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function AD(t){return t==null}const LD=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,mo=(t,e)=>r=>!!(typeof r=="string"&&LD.test(r)&&r.startsWith(t)||e&&!AD(r)&&Object.prototype.hasOwnProperty.call(r,e)),R1=(t,e,r)=>a=>{if(typeof a!="string")return a;const[n,o,c,s]=a.match(P1);return{[t]:parseFloat(n),[e]:parseFloat(o),[r]:parseFloat(c),alpha:s!==void 0?parseFloat(s):1}},jD=t=>V1(0,255,t),La={...wa,transform:t=>Math.round(jD(t))},Vr={test:mo("rgb","red"),parse:R1("red","green","blue"),transform:({red:t,green:e,blue:r,alpha:a=1})=>"rgba("+La.transform(t)+", "+La.transform(e)+", "+La.transform(r)+", "+Pr(T1.transform(a))+")"};function zD(t){let e="",r="",a="",n="";return t.length>5?(e=t.substring(1,3),r=t.substring(3,5),a=t.substring(5,7),n=t.substring(7,9)):(e=t.substring(1,2),r=t.substring(2,3),a=t.substring(3,4),n=t.substring(4,5),e+=e,r+=r,a+=a,n+=n),{red:parseInt(e,16),green:parseInt(r,16),blue:parseInt(a,16),alpha:n?parseInt(n,16)/255:1}}const Bi={test:mo("#"),parse:zD,transform:Vr.transform},WD=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Za=WD("%");({...Za});const ra={test:mo("hsl","hue"),parse:R1("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:r,alpha:a=1})=>"hsla("+Math.round(t)+", "+Za.transform(Pr(e))+", "+Za.transform(Pr(r))+", "+Pr(T1.transform(a))+")"},ur={test:t=>Vr.test(t)||Bi.test(t)||ra.test(t),parse:t=>Vr.test(t)?Vr.parse(t):ra.test(t)?ra.parse(t):Bi.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Vr.transform(t):ra.transform(t),getAnimatableNone:t=>{const e=ur.parse(t);return e.alpha=0,ur.transform(e)}},qD=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function ED(t){var e,r;return isNaN(t)&&typeof t=="string"&&(((e=t.match(P1))==null?void 0:e.length)||0)+(((r=t.match(qD))==null?void 0:r.length)||0)>0}const D1="number",O1="color",$D="var",SD="var(",Zi="${}",VD=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function U1(t){const e=t.toString(),r=[],a={color:[],number:[],var:[]},n=[];let o=0;const c=e.replace(VD,s=>(ur.test(s)?(a.color.push(o),n.push(O1),r.push(ur.parse(s))):s.startsWith(SD)?(a.var.push(o),n.push($D),r.push(s)):(a.number.push(o),n.push(D1),r.push(parseFloat(s))),++o,Zi)).split(Zi);return{values:r,split:c,indexes:a,types:n}}function B1(t){return U1(t).values}function Z1(t){const{split:e,types:r}=U1(t),a=e.length;return n=>{let o="";for(let c=0;c<a;c++)if(o+=e[c],n[c]!==void 0){const s=r[c];s===D1?o+=Pr(n[c]):s===O1?o+=ur.transform(n[c]):o+=n[c]}return o}}const TD=t=>typeof t=="number"?0:ur.test(t)?ur.getAnimatableNone(t):t;function PD(t){const e=B1(t);return Z1(t)(e.map(TD))}const RD={test:ED,parse:B1,createTransformer:Z1,getAnimatableNone:PD},F1=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"];new Set(F1);const DD=new Set(["x","y","z"]);F1.filter(t=>!DD.has(t));({...RD});({...wa});i.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});i.createContext({strict:!1});try{require("@emotion/is-prop-valid").default}catch{}const OD=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),UD="framerAppearId";""+OD(UD);i.createContext({});const Fi=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t);Fi("applewebkit/")&&Fi("chrome/");function BD({tabs:t,defaultTab:e,actions:r,className:a}){var s;const[n,o]=i.useState(e||((s=t[0])==null?void 0:s.id)||""),c=t.find(l=>l.id===n);return p.jsxs("div",{className:"flex flex-row h-full",children:[p.jsxs("div",{className:j.twMerge("w-12 flex flex-col justify-between py-4 z-50 bg-[var(--color-surface)] border-r border-[var(--color-border)]",a),children:[p.jsx("div",{className:"flex flex-col items-center space-y-4",children:t.map(l=>p.jsx("button",{onClick:()=>o(l.id),className:j.twMerge("p-2 rounded transition-colors cursor-pointer text-[var(--color-text)] hover:bg-[var(--color-hover)]",n===l.id&&"bg-[var(--color-hover)]"),"aria-label":`Tab ${l.id}`,children:l.icon},l.id))}),p.jsx("div",{className:"flex flex-col items-center space-y-3 mb-[50px]",children:r==null?void 0:r.map(l=>p.jsx("span",{onClick:l.action,className:"cursor-pointer hover:bg-[var(--color-hover)] p-2 rounded transition-colors text-[var(--color-text)]",children:p.jsx(z0,{text:l.text,coordLeft:70,children:l.icon})},l.id))})]}),p.jsx("div",{className:"relative w-64 bg-[var(--color-surface)] border-r border-[var(--color-border)] shadow-lg z-40 overflow-y-auto text-[var(--color-text)]",children:c==null?void 0:c.content})]})}function _1({title:t,children:e,isOpen:r,onToggle:a,className:n}){const[o,c]=i.useState(!1),s=r!==void 0?r:o,l=()=>{a?a():c(d=>!d)};return p.jsxs("div",{className:"overflow-hidden shadow-sm",children:[p.jsxs("button",{className:j.twMerge("flex justify-between items-center w-full cursor-pointer p-4 hover:bg-background-surface transition-colors border-b border-[#E3E3E3] border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] text-primary-foreground dark:text-primary-foreground-dark",n),onClick:l,children:[p.jsx("span",{className:"text-sm ",children:t}),s?p.jsx(Km,{className:"w-4 h-4"}):p.jsx(Ym,{className:"w-4 h-4"})]}),p.jsx("div",{className:`transition-all duration-300 ease-in-out overflow-hidden ${s?"max-h-screen py-2":"max-h-0 py-0"}`,children:p.jsx("div",{className:"text-sm text-gray-700 dark:text-gray-300",children:e})})]})}function ZD({children:t,href:e,className:r="",disabled:a=!1}){return p.jsx("a",{href:a?"/":e,"aria-disabled":a,className:j.twMerge(`
        mt-5 inline-block min-w-[140px] rounded-lg bg-[var(--color-primary)] 
        px-4 py-2 text-center text-[16px] text-white transition 
        shadow-theme-xs hover:bg-[var(--color-primary-hover)] 
        disabled:pointer-events-none disabled:opacity-50
        `,a&&"cursor-not-allowed",r),children:t})}const FD={success:"bg-[var(--color-success)] text-[var(--color-on-success)]",error:"bg-[var(--color-error)] text-[var(--color-on-error)]",warning:"bg-[var(--color-warning)] text-[var(--color-on-warning)]",info:"bg-[var(--color-info)] text-[var(--color-on-info)]"};function _D({open:t,message:e,severity:r="info",autoHideDuration:a=6e3,onClose:n}){return i.useEffect(()=>{if(t){const o=setTimeout(n,a);return()=>clearTimeout(o)}},[t,a,n]),p.jsx("div",{className:`
        fixed bottom-4 right-4 z-50
        transition-all duration-300 ease-in-out
        ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-4 pointer-events-none"}
      `,children:p.jsxs("div",{className:`
          flex items-center gap-3 px-4 py-3 rounded-md shadow-lg w-80
          ${FD[r]}
        `,children:[p.jsx("span",{className:"flex-1 text-sm",children:e}),p.jsx("button",{onClick:n,"aria-label":"Fechar notificação",children:p.jsx(uo,{className:"w-4 h-4 cursor-pointer hover:opacity-80 transition-opacity"})})]})})}function ID(){const[t,e]=i.useState(null);i.useEffect(()=>{const a=localStorage.getItem("theme"),n=window.matchMedia("(prefers-color-scheme: dark)").matches,o=a?a==="dark":n;e(o),r(o)},[]),i.useEffect(()=>{t!==null&&r(t)},[t]);const r=a=>{const n=document.documentElement;a?(n.classList.add("dark"),n.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark")):(n.classList.remove("dark"),n.setAttribute("data-theme","light"),localStorage.setItem("theme","light"))};return t===null?null:p.jsx("button",{type:"button",onClick:()=>e(!t),className:`
        cursor-pointer flex items-center gap-2 px-4 py-2 rounded-md hover:opacity-90 transition border
         border-[var(--color-secondary-foreground)] text-[var(--color-secondary-foreground)]
         dark:border-[var(--color-secondary-foreground-dark)] dark:text-[var(--color-secondary-foreground-dark)]
        `,children:t?"🌙 Modo Escuro":"☀️ Modo Claro"})}function HD({loading:t,className:e="",width:r="2rem",height:a="2rem"}){return t?p.jsx("div",{className:`flex items-center justify-center ${e}`,children:p.jsx("div",{style:{width:r,height:a},className:"rounded-full animate-spin border-4 border-[var(--color-primary)/30] border-t-[var(--color-primary)]"})}):null}function YD({isOpen:t,onClose:e,image:r,className:a}){return i.useEffect(()=>{const n=o=>{o.key==="Escape"&&e()};return t&&(document.addEventListener("keydown",n),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",n),document.body.style.overflow="unset"}},[t,e]),t?p.jsxs("div",{className:"overflow-scroll fixed inset-0 z-50 flex items-center justify-center py-6 sm:px-6 sm:py-12 overflow-auto bg-black/30 backdrop-blur-sm",children:[p.jsx("div",{className:"absolute inset-0",onClick:e}),p.jsxs("div",{onClick:n=>n.stopPropagation(),className:j.twMerge("relative z-50 bg-background-base text-text-default shadow-xl transition-all overflow-auto w-full max-w-4xl rounded-lg max-h-[90%]",a),children:[p.jsx("button",{onClick:e,className:"absolute top-3 right-3 text-[var(--color-text)] hover:text-gray-700 cursor-pointer bg-white rounded-full p-1","aria-label":"Fechar modal",children:p.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",strokeWidth:2,viewBox:"0 0 24 24",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})}),p.jsx("img",{src:r,alt:"Visualização ampliada",className:"w-full h-auto object-contain rounded-b-lg"})]})]}):null}function XD({label:t,value:e,error:r=!1,messageError:a,onChangeValueArray:n,options:o,placeholder:c="",isValidating:s=!1,externalClassName:l,...d}){const[h,u]=i.useState(""),[m,f]=i.useState(o);i.useEffect(()=>{m.length>0&&u(m[0].value.toString())},[m]);const k=()=>{h!==""&&!e.includes(h)&&(n([...e,h]),f(m.filter(y=>y.value!==h)))};return p.jsxs("div",{className:j.twMerge("w-full mb-3",l),children:[p.jsxs("div",{className:"flex items-center",children:[p.jsx(yl,{isValidating:s,value:h||"",error:r,placeholder:c,onChange:y=>{u(y.target.value)},options:m,className:"w-full",label:t,...d},m.length),p.jsx(Br,{disabled:!h,type:"button",onClick:()=>{k(),u("")},className:"ml-[15px] mt-[30px]",children:"Adicionar"})]}),s&&r&&p.jsx("p",{className:"mt-2 text-xs text-danger-700",children:a||"Campo obrigatório!"}),e.length>0&&p.jsx("div",{className:"mt-2 flex flex-row items-center justify-start flex-wrap",children:e.map(y=>{var g;return p.jsxs("div",{className:j.twMerge("flex items-center justify-between px-3 py-1 mt-1 text-sm border rounded-[5px] max-w-[32%] mr-1 mr-1 mb-2","border-gray-300","bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)]","text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)]"),children:[p.jsx("span",{children:((g=o.find(w=>w.value===y))==null?void 0:g.label)||y}),p.jsx("button",{type:"button",onClick:()=>{n(e.filter(v=>v!==y));const w=o.find(v=>v.value===y);w&&f([...m,w])},className:"text-danger-500 hover:text-danger-700 cursor-pointer ml-2",children:p.jsx(uo,{className:"w-[15px] h-[15px]"})})]},y)})})]})}function KD({data:t,columns:e,rowActions:r,renderExpandedRow:a}){const[n,o]=i.useState(new Set),[c,s]=i.useState(!1),l=d=>{s(!0),o(h=>{const u=new Set;return h.has(d)||u.add(d),u})};return p.jsx("div",{className:"shadow-sm border border-gray-200 rounded-[10px] overflow-x-auto w-full",children:p.jsxs("table",{className:"min-w-[800px] table-auto w-full",children:[p.jsx("thead",{children:p.jsxs("tr",{className:"border-b border-gray-200 bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)]",children:[e.map(d=>p.jsx("th",{className:"px-4 py-2 text-[16px] font-normal text-left text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)]",children:d.title},d.key)),p.jsx("th",{className:"px-4 py-2 text-center"})]})}),p.jsx("tbody",{children:!t||t.length===0?p.jsx("tr",{children:p.jsx("td",{colSpan:e.length+1,className:"px-4 py-2 text-center text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)]",children:"Nenhum dado disponível"})}):t.map((d,h)=>p.jsxs(i.Fragment,{children:[p.jsxs("tr",{className:`cursor-pointer hover:bg-[var(--color-primary)] dark:hover:bg-[var(--color-primary-dark)] ${h===t.length-1?"":"border-b border-gray-200"}`,onClick:()=>!(r!=null&&r(d))&&l(h),children:[e.map(u=>{const m=d[u.key];return p.jsx("td",{className:"px-4 py-2 text-[14px] font-normal text-left text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)]",children:u.render?u.render(m,d):m},String(u.key))}),p.jsx("td",{className:"px-2 py-1 text-center align-middle whitespace-nowrap w-1",children:p.jsxs("div",{className:"flex items-center justify-center gap-1",children:[p.jsx(ir,{text:"Abrir/Fechar",children:p.jsx("button",{className:"text-[20px] text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)] mr-3",onClick:()=>(r==null?void 0:r(d))&&l(h),children:n.has(h)?"-":"+"})}),r&&r(d)]})})]}),n.has(h)&&p.jsx("tr",{children:p.jsx("td",{colSpan:e.length+1,className:`p-4 ${c?"animate-slide-down":""}`,onAnimationEnd:()=>s(!1),children:p.jsx("div",{className:"overflow-hidden",children:a(d)})})})]},h))})]})})}function GD({className:t,label:e,error:r=!1,success:a=!1,disabled:n=!1,messageError:o,isValidating:c=!1,value:s,onChange:l,...d}){const h=m=>{const k=m.target.value.replace(/\D/g,"");let y="";k.length>0&&(y+=k.substring(0,2)),k.length>=3&&(y+="/"+k.substring(2,4)),k.length>=5&&(y+="/"+k.substring(4,8)),l(y,k)};let u=`
    h-10 w-full rounded-[5px] appearance-none px-4 py-2.5 text-sm shadow-sm transition-colors 
    duration-150 border focus:outline-none appearance-none transition duration-200
    text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)]
    bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)]
    placeholder:text-gray-500
    border
  `;return n?u+=" opacity-50 cursor-not-allowed":r&&c?u+=" border-danger-700":a?u+=" border-success":u+=" border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary/30",t&&(u+=` ${t}`),p.jsxs("div",{className:"w-full mb-3",children:[e&&p.jsx(Gr,{className:"mb-2",children:e}),p.jsxs("div",{className:"relative",children:[p.jsx("input",{...d,type:"text",value:s,onChange:h,disabled:n,className:u,maxLength:10,placeholder:d.placeholder||"dd/mm/aaaa"}),c&&r&&p.jsx("p",{className:"mt-[10px] text-xs text-danger-700",children:o||"Campo obrigatório!"})]})]})}function QD({label:t,value:e,error:r=!1,messageError:a,onChangeValueArray:n,placeholder:o="",isValidating:c=!1,...s}){const[l,d]=i.useState(""),h=()=>{const f=l.trim();f!==""&&!e.includes(f)&&(n([...e,f]),d(""))},u=f=>{n(e.filter(k=>k!==f))};let m=`
    h-10 w-full rounded-[5px] border appearance-none px-4 py-2.5 text-sm
    text-[var(--color-primary-foreground)] 
    dark:text-[var(--color-primary-foreground-dark)]
    placeholder:text-gray-400
    bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)]
    focus:outline-none shadow-sm transition-colors duration-150
    focus:ring-primary/10 focus:border-gray-500
    border-gray-300 dark:border-gray-700
  `;return r&&c&&(m+=" border-danger-900"),p.jsxs("div",{className:"w-full mb-3",children:[p.jsxs("div",{className:"flex items-center",children:[p.jsx(kl,{value:l,onChange:f=>d(f.target.value),placeholder:o,className:m,...s,isValidating:c,error:r,label:t}),p.jsx(Br,{disabled:!l,type:"button",onClick:()=>{h(),d("")},className:"ml-[15px] mt-[30px]",children:"Adicionar"})]}),c&&r&&p.jsx("p",{className:"mt-2 text-xs text-danger-700",children:a||"Campo obrigatório!"}),e.length>0&&p.jsx("div",{className:"mt-2 flex flex-row items-center justify-between flex-wrap",children:e.map((f,k)=>p.jsxs("div",{className:`
                flex items-center justify-between px-3 py-1 mt-1 text-sm
                text-[var(--color-primary-foreground)]
                dark:text-[var(--color-primary-foreground-dark)]
                border border-gray-300 dark:border-gray-700
                rounded-[5px] max-w-[32%] mr-1
              `,children:[p.jsx("span",{children:f}),p.jsx("button",{type:"button",onClick:()=>u(f),className:"text-danger-500 hover:text-danger-700 cursor-pointer",children:p.jsx(uo,{className:"w-[15px] h-[15px]"})})]},k))})]})}const I1=6048e5,JD=864e5,_i=Symbol.for("constructDateFrom");function Y(t,e){return typeof t=="function"?t(e):t&&typeof t=="object"&&_i in t?t[_i](e):t instanceof Date?new t.constructor(e):new Date(e)}function P(t,e){return Y(e||t,t)}function ja(t,e,r){const a=P(t,r==null?void 0:r.in);return isNaN(e)?Y(t,NaN):(e&&a.setDate(a.getDate()+e),a)}function H1(t,e,r){const a=P(t,r==null?void 0:r.in);if(isNaN(e))return Y(t,NaN);if(!e)return a;const n=a.getDate(),o=Y(t,a.getTime());o.setMonth(a.getMonth()+e+1,0);const c=o.getDate();return n>=c?o:(a.setFullYear(o.getFullYear(),o.getMonth(),n),a)}let eO={};function va(){return eO}function mr(t,e){var s,l,d,h;const r=va(),a=(e==null?void 0:e.weekStartsOn)??((l=(s=e==null?void 0:e.locale)==null?void 0:s.options)==null?void 0:l.weekStartsOn)??r.weekStartsOn??((h=(d=r.locale)==null?void 0:d.options)==null?void 0:h.weekStartsOn)??0,n=P(t,e==null?void 0:e.in),o=n.getDay(),c=(o<a?7:0)+o-a;return n.setDate(n.getDate()-c),n.setHours(0,0,0,0),n}function ua(t,e){return mr(t,{...e,weekStartsOn:1})}function Y1(t,e){const r=P(t,e==null?void 0:e.in),a=r.getFullYear(),n=Y(r,0);n.setFullYear(a+1,0,4),n.setHours(0,0,0,0);const o=ua(n),c=Y(r,0);c.setFullYear(a,0,4),c.setHours(0,0,0,0);const s=ua(c);return r.getTime()>=o.getTime()?a+1:r.getTime()>=s.getTime()?a:a-1}function Ii(t){const e=P(t),r=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return r.setUTCFullYear(e.getFullYear()),+t-+r}function po(t,...e){const r=Y.bind(null,e.find(a=>typeof a=="object"));return e.map(r)}function ma(t,e){const r=P(t,e==null?void 0:e.in);return r.setHours(0,0,0,0),r}function tO(t,e,r){const[a,n]=po(r==null?void 0:r.in,t,e),o=ma(a),c=ma(n),s=+o-Ii(o),l=+c-Ii(c);return Math.round((s-l)/JD)}function rO(t,e){const r=Y1(t,e),a=Y(t,0);return a.setFullYear(r,0,4),a.setHours(0,0,0,0),ua(a)}function Hi(t,e,r){const[a,n]=po(r==null?void 0:r.in,t,e);return+ma(a)==+ma(n)}function aO(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function oO(t){return!(!aO(t)&&typeof t!="number"||isNaN(+P(t)))}function Yi(t,e){const r=P(t,e==null?void 0:e.in),a=r.getMonth();return r.setFullYear(r.getFullYear(),a+1,0),r.setHours(23,59,59,999),r}function nO(t,e){const r=P(t,e==null?void 0:e.in);return r.setDate(1),r.setHours(0,0,0,0),r}function sO(t,e){const r=P(t,e==null?void 0:e.in);return r.setFullYear(r.getFullYear(),0,1),r.setHours(0,0,0,0),r}const iO={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},cO=(t,e,r)=>{let a;const n=iO[t];return typeof n=="string"?a=n:e===1?a=n.one:a=n.other.replace("{{count}}",e.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+a:a+" ago":a};function za(t){return(e={})=>{const r=e.width?String(e.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}const lO={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},dO={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},hO={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},uO={date:za({formats:lO,defaultWidth:"full"}),time:za({formats:dO,defaultWidth:"full"}),dateTime:za({formats:hO,defaultWidth:"full"})},mO={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},pO=(t,e,r,a)=>mO[t];function Er(t){return(e,r)=>{const a=r!=null&&r.context?String(r.context):"standalone";let n;if(a==="formatting"&&t.formattingValues){const c=t.defaultFormattingWidth||t.defaultWidth,s=r!=null&&r.width?String(r.width):c;n=t.formattingValues[s]||t.formattingValues[c]}else{const c=t.defaultWidth,s=r!=null&&r.width?String(r.width):t.defaultWidth;n=t.values[s]||t.values[c]}const o=t.argumentCallback?t.argumentCallback(e):e;return n[o]}}const fO={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},kO={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},yO={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},gO={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},wO={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},vO={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},xO=(t,e)=>{const r=Number(t),a=r%100;if(a>20||a<10)switch(a%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},bO={ordinalNumber:xO,era:Er({values:fO,defaultWidth:"wide"}),quarter:Er({values:kO,defaultWidth:"wide",argumentCallback:t=>t-1}),month:Er({values:yO,defaultWidth:"wide"}),day:Er({values:gO,defaultWidth:"wide"}),dayPeriod:Er({values:wO,defaultWidth:"wide",formattingValues:vO,defaultFormattingWidth:"wide"})};function $r(t){return(e,r={})=>{const a=r.width,n=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],o=e.match(n);if(!o)return null;const c=o[0],s=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(s)?NO(s,u=>u.test(c)):MO(s,u=>u.test(c));let d;d=t.valueCallback?t.valueCallback(l):l,d=r.valueCallback?r.valueCallback(d):d;const h=e.slice(c.length);return{value:d,rest:h}}}function MO(t,e){for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&e(t[r]))return r}function NO(t,e){for(let r=0;r<t.length;r++)if(e(t[r]))return r}function CO(t){return(e,r={})=>{const a=e.match(t.matchPattern);if(!a)return null;const n=a[0],o=e.match(t.parsePattern);if(!o)return null;let c=t.valueCallback?t.valueCallback(o[0]):o[0];c=r.valueCallback?r.valueCallback(c):c;const s=e.slice(n.length);return{value:c,rest:s}}}const AO=/^(\d+)(th|st|nd|rd)?/i,LO=/\d+/i,jO={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},zO={any:[/^b/i,/^(a|c)/i]},WO={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},qO={any:[/1/i,/2/i,/3/i,/4/i]},EO={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},$O={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},SO={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},VO={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},TO={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},PO={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},RO={ordinalNumber:CO({matchPattern:AO,parsePattern:LO,valueCallback:t=>parseInt(t,10)}),era:$r({matchPatterns:jO,defaultMatchWidth:"wide",parsePatterns:zO,defaultParseWidth:"any"}),quarter:$r({matchPatterns:WO,defaultMatchWidth:"wide",parsePatterns:qO,defaultParseWidth:"any",valueCallback:t=>t+1}),month:$r({matchPatterns:EO,defaultMatchWidth:"wide",parsePatterns:$O,defaultParseWidth:"any"}),day:$r({matchPatterns:SO,defaultMatchWidth:"wide",parsePatterns:VO,defaultParseWidth:"any"}),dayPeriod:$r({matchPatterns:TO,defaultMatchWidth:"any",parsePatterns:PO,defaultParseWidth:"any"})},DO={code:"en-US",formatDistance:cO,formatLong:uO,formatRelative:pO,localize:bO,match:RO,options:{weekStartsOn:0,firstWeekContainsDate:1}};function OO(t,e){const r=P(t,e==null?void 0:e.in);return tO(r,sO(r))+1}function UO(t,e){const r=P(t,e==null?void 0:e.in),a=+ua(r)-+rO(r);return Math.round(a/I1)+1}function X1(t,e){var h,u,m,f;const r=P(t,e==null?void 0:e.in),a=r.getFullYear(),n=va(),o=(e==null?void 0:e.firstWeekContainsDate)??((u=(h=e==null?void 0:e.locale)==null?void 0:h.options)==null?void 0:u.firstWeekContainsDate)??n.firstWeekContainsDate??((f=(m=n.locale)==null?void 0:m.options)==null?void 0:f.firstWeekContainsDate)??1,c=Y((e==null?void 0:e.in)||t,0);c.setFullYear(a+1,0,o),c.setHours(0,0,0,0);const s=mr(c,e),l=Y((e==null?void 0:e.in)||t,0);l.setFullYear(a,0,o),l.setHours(0,0,0,0);const d=mr(l,e);return+r>=+s?a+1:+r>=+d?a:a-1}function BO(t,e){var s,l,d,h;const r=va(),a=(e==null?void 0:e.firstWeekContainsDate)??((l=(s=e==null?void 0:e.locale)==null?void 0:s.options)==null?void 0:l.firstWeekContainsDate)??r.firstWeekContainsDate??((h=(d=r.locale)==null?void 0:d.options)==null?void 0:h.firstWeekContainsDate)??1,n=X1(t,e),o=Y((e==null?void 0:e.in)||t,0);return o.setFullYear(n,0,a),o.setHours(0,0,0,0),mr(o,e)}function ZO(t,e){const r=P(t,e==null?void 0:e.in),a=+mr(r,e)-+BO(r,e);return Math.round(a/I1)+1}function z(t,e){const r=t<0?"-":"",a=Math.abs(t).toString().padStart(e,"0");return r+a}const Jt={y(t,e){const r=t.getFullYear(),a=r>0?r:1-r;return z(e==="yy"?a%100:a,e.length)},M(t,e){const r=t.getMonth();return e==="M"?String(r+1):z(r+1,2)},d(t,e){return z(t.getDate(),e.length)},a(t,e){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h(t,e){return z(t.getHours()%12||12,e.length)},H(t,e){return z(t.getHours(),e.length)},m(t,e){return z(t.getMinutes(),e.length)},s(t,e){return z(t.getSeconds(),e.length)},S(t,e){const r=e.length,a=t.getMilliseconds(),n=Math.trunc(a*Math.pow(10,r-3));return z(n,e.length)}},wr={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Xi={G:function(t,e,r){const a=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return r.era(a,{width:"abbreviated"});case"GGGGG":return r.era(a,{width:"narrow"});case"GGGG":default:return r.era(a,{width:"wide"})}},y:function(t,e,r){if(e==="yo"){const a=t.getFullYear(),n=a>0?a:1-a;return r.ordinalNumber(n,{unit:"year"})}return Jt.y(t,e)},Y:function(t,e,r,a){const n=X1(t,a),o=n>0?n:1-n;if(e==="YY"){const c=o%100;return z(c,2)}return e==="Yo"?r.ordinalNumber(o,{unit:"year"}):z(o,e.length)},R:function(t,e){const r=Y1(t);return z(r,e.length)},u:function(t,e){const r=t.getFullYear();return z(r,e.length)},Q:function(t,e,r){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return z(a,2);case"Qo":return r.ordinalNumber(a,{unit:"quarter"});case"QQQ":return r.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,r){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return z(a,2);case"qo":return r.ordinalNumber(a,{unit:"quarter"});case"qqq":return r.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,r){const a=t.getMonth();switch(e){case"M":case"MM":return Jt.M(t,e);case"Mo":return r.ordinalNumber(a+1,{unit:"month"});case"MMM":return r.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,r){const a=t.getMonth();switch(e){case"L":return String(a+1);case"LL":return z(a+1,2);case"Lo":return r.ordinalNumber(a+1,{unit:"month"});case"LLL":return r.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,r,a){const n=ZO(t,a);return e==="wo"?r.ordinalNumber(n,{unit:"week"}):z(n,e.length)},I:function(t,e,r){const a=UO(t);return e==="Io"?r.ordinalNumber(a,{unit:"week"}):z(a,e.length)},d:function(t,e,r){return e==="do"?r.ordinalNumber(t.getDate(),{unit:"date"}):Jt.d(t,e)},D:function(t,e,r){const a=OO(t);return e==="Do"?r.ordinalNumber(a,{unit:"dayOfYear"}):z(a,e.length)},E:function(t,e,r){const a=t.getDay();switch(e){case"E":case"EE":case"EEE":return r.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(a,{width:"short",context:"formatting"});case"EEEE":default:return r.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,r,a){const n=t.getDay(),o=(n-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return z(o,2);case"eo":return r.ordinalNumber(o,{unit:"day"});case"eee":return r.day(n,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(n,{width:"short",context:"formatting"});case"eeee":default:return r.day(n,{width:"wide",context:"formatting"})}},c:function(t,e,r,a){const n=t.getDay(),o=(n-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return z(o,e.length);case"co":return r.ordinalNumber(o,{unit:"day"});case"ccc":return r.day(n,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(n,{width:"narrow",context:"standalone"});case"cccccc":return r.day(n,{width:"short",context:"standalone"});case"cccc":default:return r.day(n,{width:"wide",context:"standalone"})}},i:function(t,e,r){const a=t.getDay(),n=a===0?7:a;switch(e){case"i":return String(n);case"ii":return z(n,e.length);case"io":return r.ordinalNumber(n,{unit:"day"});case"iii":return r.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(a,{width:"short",context:"formatting"});case"iiii":default:return r.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,r){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},b:function(t,e,r){const a=t.getHours();let n;switch(a===12?n=wr.noon:a===0?n=wr.midnight:n=a/12>=1?"pm":"am",e){case"b":case"bb":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},B:function(t,e,r){const a=t.getHours();let n;switch(a>=17?n=wr.evening:a>=12?n=wr.afternoon:a>=4?n=wr.morning:n=wr.night,e){case"B":case"BB":case"BBB":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},h:function(t,e,r){if(e==="ho"){let a=t.getHours()%12;return a===0&&(a=12),r.ordinalNumber(a,{unit:"hour"})}return Jt.h(t,e)},H:function(t,e,r){return e==="Ho"?r.ordinalNumber(t.getHours(),{unit:"hour"}):Jt.H(t,e)},K:function(t,e,r){const a=t.getHours()%12;return e==="Ko"?r.ordinalNumber(a,{unit:"hour"}):z(a,e.length)},k:function(t,e,r){let a=t.getHours();return a===0&&(a=24),e==="ko"?r.ordinalNumber(a,{unit:"hour"}):z(a,e.length)},m:function(t,e,r){return e==="mo"?r.ordinalNumber(t.getMinutes(),{unit:"minute"}):Jt.m(t,e)},s:function(t,e,r){return e==="so"?r.ordinalNumber(t.getSeconds(),{unit:"second"}):Jt.s(t,e)},S:function(t,e){return Jt.S(t,e)},X:function(t,e,r){const a=t.getTimezoneOffset();if(a===0)return"Z";switch(e){case"X":return Gi(a);case"XXXX":case"XX":return nr(a);case"XXXXX":case"XXX":default:return nr(a,":")}},x:function(t,e,r){const a=t.getTimezoneOffset();switch(e){case"x":return Gi(a);case"xxxx":case"xx":return nr(a);case"xxxxx":case"xxx":default:return nr(a,":")}},O:function(t,e,r){const a=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Ki(a,":");case"OOOO":default:return"GMT"+nr(a,":")}},z:function(t,e,r){const a=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Ki(a,":");case"zzzz":default:return"GMT"+nr(a,":")}},t:function(t,e,r){const a=Math.trunc(+t/1e3);return z(a,e.length)},T:function(t,e,r){return z(+t,e.length)}};function Ki(t,e=""){const r=t>0?"-":"+",a=Math.abs(t),n=Math.trunc(a/60),o=a%60;return o===0?r+String(n):r+String(n)+e+z(o,2)}function Gi(t,e){return t%60===0?(t>0?"-":"+")+z(Math.abs(t)/60,2):nr(t,e)}function nr(t,e=""){const r=t>0?"-":"+",a=Math.abs(t),n=z(Math.trunc(a/60),2),o=z(a%60,2);return r+n+e+o}const Qi=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},K1=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},FO=(t,e)=>{const r=t.match(/(P+)(p+)?/)||[],a=r[1],n=r[2];if(!n)return Qi(t,e);let o;switch(a){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;case"PPPP":default:o=e.dateTime({width:"full"});break}return o.replace("{{date}}",Qi(a,e)).replace("{{time}}",K1(n,e))},_O={p:K1,P:FO},IO=/^D+$/,HO=/^Y+$/,YO=["D","DD","YY","YYYY"];function XO(t){return IO.test(t)}function KO(t){return HO.test(t)}function GO(t,e,r){const a=QO(t,e,r);if(console.warn(a),YO.includes(t))throw new RangeError(a)}function QO(t,e,r){const a=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${a} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const JO=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,eU=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,tU=/^'([^]*?)'?$/,rU=/''/g,aU=/[a-zA-Z]/;function aa(t,e,r){var h,u,m,f;const a=va(),n=a.locale??DO,o=a.firstWeekContainsDate??((u=(h=a.locale)==null?void 0:h.options)==null?void 0:u.firstWeekContainsDate)??1,c=a.weekStartsOn??((f=(m=a.locale)==null?void 0:m.options)==null?void 0:f.weekStartsOn)??0,s=P(t,r==null?void 0:r.in);if(!oO(s))throw new RangeError("Invalid time value");let l=e.match(eU).map(k=>{const y=k[0];if(y==="p"||y==="P"){const g=_O[y];return g(k,n.formatLong)}return k}).join("").match(JO).map(k=>{if(k==="''")return{isToken:!1,value:"'"};const y=k[0];if(y==="'")return{isToken:!1,value:oU(k)};if(Xi[y])return{isToken:!0,value:k};if(y.match(aU))throw new RangeError("Format string contains an unescaped latin alphabet character `"+y+"`");return{isToken:!1,value:k}});n.localize.preprocessor&&(l=n.localize.preprocessor(s,l));const d={firstWeekContainsDate:o,weekStartsOn:c,locale:n};return l.map(k=>{if(!k.isToken)return k.value;const y=k.value;(KO(y)||XO(y))&&GO(y,e,String(t));const g=Xi[y[0]];return g(s,y,n.localize,d)}).join("")}function oU(t){const e=t.match(tU);return e?e[1].replace(rU,"'"):t}function nU(t,e){return+P(t)>+P(e)}function sU(t,e,r){const[a,n]=po(r==null?void 0:r.in,t,e);return a.getFullYear()===n.getFullYear()&&a.getMonth()===n.getMonth()}function iU(t,e,r){return H1(t,-1,r)}const fo=i.createContext({});function ko(t){const e=i.useRef(null);return e.current===null&&(e.current=t()),e.current}const yo=typeof window<"u",G1=yo?i.useLayoutEffect:i.useEffect,xa=i.createContext(null);function go(t,e){t.indexOf(e)===-1&&t.push(e)}function wo(t,e){const r=t.indexOf(e);r>-1&&t.splice(r,1)}const Zt=(t,e,r)=>r>e?e:r<t?t:r;let jr=()=>{},Ft=()=>{};if(process.env.NODE_ENV!=="production"){const t=(e,r)=>r?`${e}. For more information and steps for solving, visit https://motion.dev/error/${r}`:e;jr=(e,r,a)=>{!e&&typeof console<"u"&&console.warn(t(r,a))},Ft=(e,r,a)=>{if(!e)throw new Error(t(r,a))}}const _t={},Q1=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function J1(t){return typeof t=="object"&&t!==null}const eu=t=>/^0[^.\s]+$/u.test(t);function vo(t){let e;return()=>(e===void 0&&(e=t()),e)}const _=t=>t,cU=(t,e)=>r=>e(t(r)),Qr=(...t)=>t.reduce(cU),Zr=(t,e,r)=>{const a=e-t;return a===0?1:(r-t)/a};class xo{constructor(){this.subscriptions=[]}add(e){return go(this.subscriptions,e),()=>wo(this.subscriptions,e)}notify(e,r,a){const n=this.subscriptions.length;if(n)if(n===1)this.subscriptions[0](e,r,a);else for(let o=0;o<n;o++){const c=this.subscriptions[o];c&&c(e,r,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const H=t=>t*1e3,X=t=>t/1e3;function tu(t,e){return e?t*(1e3/e):0}const Ji=new Set;function bo(t,e,r){t||Ji.has(e)||(console.warn(e),Ji.add(e))}const ru=(t,e,r)=>(((1-3*r+3*e)*t+(3*r-6*e))*t+3*e)*t,lU=1e-7,dU=12;function hU(t,e,r,a,n){let o,c,s=0;do c=e+(r-e)/2,o=ru(c,a,n)-t,o>0?r=c:e=c;while(Math.abs(o)>lU&&++s<dU);return c}function Jr(t,e,r,a){if(t===e&&r===a)return _;const n=o=>hU(o,0,1,t,r);return o=>o===0||o===1?o:ru(n(o),e,a)}const au=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,ou=t=>e=>1-t(1-e),nu=Jr(.33,1.53,.69,.99),Mo=ou(nu),su=au(Mo),iu=t=>(t*=2)<1?.5*Mo(t):.5*(2-Math.pow(2,-10*(t-1))),No=t=>1-Math.sin(Math.acos(t)),cu=ou(No),lu=au(No),uU=Jr(.42,0,1,1),mU=Jr(0,0,.58,1),du=Jr(.42,0,.58,1),pU=t=>Array.isArray(t)&&typeof t[0]!="number",hu=t=>Array.isArray(t)&&typeof t[0]=="number",ec={linear:_,easeIn:uU,easeInOut:du,easeOut:mU,circIn:No,circInOut:lu,circOut:cu,backIn:Mo,backInOut:su,backOut:nu,anticipate:iu},fU=t=>typeof t=="string",tc=t=>{if(hu(t)){Ft(t.length===4,"Cubic bezier arrays must contain four numerical values.");const[e,r,a,n]=t;return Jr(e,r,a,n)}else if(fU(t))return Ft(ec[t]!==void 0,`Invalid easing type '${t}'`),ec[t];return t},oa=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],rc={value:null};function kU(t,e){let r=new Set,a=new Set,n=!1,o=!1;const c=new WeakSet;let s={delta:0,timestamp:0,isProcessing:!1},l=0;function d(u){c.has(u)&&(h.schedule(u),t()),l++,u(s)}const h={schedule:(u,m=!1,f=!1)=>{const y=f&&n?r:a;return m&&c.add(u),y.has(u)||y.add(u),u},cancel:u=>{a.delete(u),c.delete(u)},process:u=>{if(s=u,n){o=!0;return}n=!0,[r,a]=[a,r],r.forEach(d),e&&rc.value&&rc.value.frameloop[e].push(l),l=0,r.clear(),n=!1,o&&(o=!1,h.process(u))}};return h}const yU=40;function uu(t,e){let r=!1,a=!0;const n={delta:0,timestamp:0,isProcessing:!1},o=()=>r=!0,c=oa.reduce((x,C)=>(x[C]=kU(o,e?C:void 0),x),{}),{setup:s,read:l,resolveKeyframes:d,preUpdate:h,update:u,preRender:m,render:f,postRender:k}=c,y=()=>{const x=_t.useManualTiming?n.timestamp:performance.now();r=!1,_t.useManualTiming||(n.delta=a?1e3/60:Math.max(Math.min(x-n.timestamp,yU),1)),n.timestamp=x,n.isProcessing=!0,s.process(n),l.process(n),d.process(n),h.process(n),u.process(n),m.process(n),f.process(n),k.process(n),n.isProcessing=!1,r&&e&&(a=!1,t(y))},g=()=>{r=!0,a=!0,n.isProcessing||t(y)};return{schedule:oa.reduce((x,C)=>{const b=c[C];return x[C]=(A,L=!1,N=!1)=>(r||g(),b.schedule(A,L,N)),x},{}),cancel:x=>{for(let C=0;C<oa.length;C++)c[oa[C]].cancel(x)},state:n,steps:c}}const{schedule:W,cancel:tr,state:T,steps:Wa}=uu(typeof requestAnimationFrame<"u"?requestAnimationFrame:_,!0);let ca;function gU(){ca=void 0}const B={now:()=>(ca===void 0&&B.set(T.isProcessing||_t.useManualTiming?T.timestamp:performance.now()),ca),set:t=>{ca=t,queueMicrotask(gU)}},mu=t=>e=>typeof e=="string"&&e.startsWith(t),Co=mu("--"),wU=mu("var(--"),Ao=t=>wU(t)?vU.test(t.split("/*")[0].trim()):!1,vU=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,zr={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Fr={...zr,transform:t=>Zt(0,1,t)},na={...zr,default:1},Rr=t=>Math.round(t*1e5)/1e5,Lo=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function xU(t){return t==null}const bU=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,jo=(t,e)=>r=>!!(typeof r=="string"&&bU.test(r)&&r.startsWith(t)||e&&!xU(r)&&Object.prototype.hasOwnProperty.call(r,e)),pu=(t,e,r)=>a=>{if(typeof a!="string")return a;const[n,o,c,s]=a.match(Lo);return{[t]:parseFloat(n),[e]:parseFloat(o),[r]:parseFloat(c),alpha:s!==void 0?parseFloat(s):1}},MU=t=>Zt(0,255,t),qa={...zr,transform:t=>Math.round(MU(t))},cr={test:jo("rgb","red"),parse:pu("red","green","blue"),transform:({red:t,green:e,blue:r,alpha:a=1})=>"rgba("+qa.transform(t)+", "+qa.transform(e)+", "+qa.transform(r)+", "+Rr(Fr.transform(a))+")"};function NU(t){let e="",r="",a="",n="";return t.length>5?(e=t.substring(1,3),r=t.substring(3,5),a=t.substring(5,7),n=t.substring(7,9)):(e=t.substring(1,2),r=t.substring(2,3),a=t.substring(3,4),n=t.substring(4,5),e+=e,r+=r,a+=a,n+=n),{red:parseInt(e,16),green:parseInt(r,16),blue:parseInt(a,16),alpha:n?parseInt(n,16)/255:1}}const Fa={test:jo("#"),parse:NU,transform:cr.transform},ea=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),er=ea("deg"),K=ea("%"),M=ea("px"),CU=ea("vh"),AU=ea("vw"),ac={...K,parse:t=>K.parse(t)/100,transform:t=>K.transform(t*100)},vr={test:jo("hsl","hue"),parse:pu("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:r,alpha:a=1})=>"hsla("+Math.round(t)+", "+K.transform(Rr(e))+", "+K.transform(Rr(r))+", "+Rr(Fr.transform(a))+")"},S={test:t=>cr.test(t)||Fa.test(t)||vr.test(t),parse:t=>cr.test(t)?cr.parse(t):vr.test(t)?vr.parse(t):Fa.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?cr.transform(t):vr.transform(t),getAnimatableNone:t=>{const e=S.parse(t);return e.alpha=0,S.transform(e)}},LU=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function jU(t){var e,r;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Lo))==null?void 0:e.length)||0)+(((r=t.match(LU))==null?void 0:r.length)||0)>0}const fu="number",ku="color",zU="var",WU="var(",oc="${}",qU=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function _r(t){const e=t.toString(),r=[],a={color:[],number:[],var:[]},n=[];let o=0;const s=e.replace(qU,l=>(S.test(l)?(a.color.push(o),n.push(ku),r.push(S.parse(l))):l.startsWith(WU)?(a.var.push(o),n.push(zU),r.push(l)):(a.number.push(o),n.push(fu),r.push(parseFloat(l))),++o,oc)).split(oc);return{values:r,split:s,indexes:a,types:n}}function yu(t){return _r(t).values}function gu(t){const{split:e,types:r}=_r(t),a=e.length;return n=>{let o="";for(let c=0;c<a;c++)if(o+=e[c],n[c]!==void 0){const s=r[c];s===fu?o+=Rr(n[c]):s===ku?o+=S.transform(n[c]):o+=n[c]}return o}}const EU=t=>typeof t=="number"?0:S.test(t)?S.getAnimatableNone(t):t;function $U(t){const e=yu(t);return gu(t)(e.map(EU))}const rr={test:jU,parse:yu,createTransformer:gu,getAnimatableNone:$U};function Ea(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+(e-t)*6*r:r<1/2?e:r<2/3?t+(e-t)*(2/3-r)*6:t}function SU({hue:t,saturation:e,lightness:r,alpha:a}){t/=360,e/=100,r/=100;let n=0,o=0,c=0;if(!e)n=o=c=r;else{const s=r<.5?r*(1+e):r+e-r*e,l=2*r-s;n=Ea(l,s,t+1/3),o=Ea(l,s,t),c=Ea(l,s,t-1/3)}return{red:Math.round(n*255),green:Math.round(o*255),blue:Math.round(c*255),alpha:a}}function pa(t,e){return r=>r>0?e:t}const E=(t,e,r)=>t+(e-t)*r,$a=(t,e,r)=>{const a=t*t,n=r*(e*e-a)+a;return n<0?0:Math.sqrt(n)},VU=[Fa,cr,vr],TU=t=>VU.find(e=>e.test(t));function nc(t){const e=TU(t);if(jr(!!e,`'${t}' is not an animatable color. Use the equivalent color code instead.`),!e)return!1;let r=e.parse(t);return e===vr&&(r=SU(r)),r}const sc=(t,e)=>{const r=nc(t),a=nc(e);if(!r||!a)return pa(t,e);const n={...r};return o=>(n.red=$a(r.red,a.red,o),n.green=$a(r.green,a.green,o),n.blue=$a(r.blue,a.blue,o),n.alpha=E(r.alpha,a.alpha,o),cr.transform(n))},_a=new Set(["none","hidden"]);function PU(t,e){return _a.has(t)?r=>r<=0?t:e:r=>r>=1?e:t}function RU(t,e){return r=>E(t,e,r)}function zo(t){return typeof t=="number"?RU:typeof t=="string"?Ao(t)?pa:S.test(t)?sc:UU:Array.isArray(t)?wu:typeof t=="object"?S.test(t)?sc:DU:pa}function wu(t,e){const r=[...t],a=r.length,n=t.map((o,c)=>zo(o)(o,e[c]));return o=>{for(let c=0;c<a;c++)r[c]=n[c](o);return r}}function DU(t,e){const r={...t,...e},a={};for(const n in r)t[n]!==void 0&&e[n]!==void 0&&(a[n]=zo(t[n])(t[n],e[n]));return n=>{for(const o in a)r[o]=a[o](n);return r}}function OU(t,e){const r=[],a={color:0,var:0,number:0};for(let n=0;n<e.values.length;n++){const o=e.types[n],c=t.indexes[o][a[o]],s=t.values[c]??0;r[n]=s,a[o]++}return r}const UU=(t,e)=>{const r=rr.createTransformer(e),a=_r(t),n=_r(e);return a.indexes.var.length===n.indexes.var.length&&a.indexes.color.length===n.indexes.color.length&&a.indexes.number.length>=n.indexes.number.length?_a.has(t)&&!n.values.length||_a.has(e)&&!a.values.length?PU(t,e):Qr(wu(OU(a,n),n.values),r):(jr(!0,`Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),pa(t,e))};function vu(t,e,r){return typeof t=="number"&&typeof e=="number"&&typeof r=="number"?E(t,e,r):zo(t)(t,e)}const BU=t=>{const e=({timestamp:r})=>t(r);return{start:(r=!0)=>W.update(e,r),stop:()=>tr(e),now:()=>T.isProcessing?T.timestamp:B.now()}},xu=(t,e,r=10)=>{let a="";const n=Math.max(Math.round(e/r),2);for(let o=0;o<n;o++)a+=Math.round(t(o/(n-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},fa=2e4;function Wo(t){let e=0;const r=50;let a=t.next(e);for(;!a.done&&e<fa;)e+=r,a=t.next(e);return e>=fa?1/0:e}function ZU(t,e=100,r){const a=r({...t,keyframes:[0,e]}),n=Math.min(Wo(a),fa);return{type:"keyframes",ease:o=>a.next(n*o).value/e,duration:X(n)}}const FU=5;function bu(t,e,r){const a=Math.max(e-FU,0);return tu(r-t(a),e-a)}const q={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Sa=.001;function _U({duration:t=q.duration,bounce:e=q.bounce,velocity:r=q.velocity,mass:a=q.mass}){let n,o;jr(t<=H(q.maxDuration),"Spring duration must be 10 seconds or less");let c=1-e;c=Zt(q.minDamping,q.maxDamping,c),t=Zt(q.minDuration,q.maxDuration,X(t)),c<1?(n=d=>{const h=d*c,u=h*t,m=h-r,f=Ia(d,c),k=Math.exp(-u);return Sa-m/f*k},o=d=>{const u=d*c*t,m=u*r+r,f=Math.pow(c,2)*Math.pow(d,2)*t,k=Math.exp(-u),y=Ia(Math.pow(d,2),c);return(-n(d)+Sa>0?-1:1)*((m-f)*k)/y}):(n=d=>{const h=Math.exp(-d*t),u=(d-r)*t+1;return-Sa+h*u},o=d=>{const h=Math.exp(-d*t),u=(r-d)*(t*t);return h*u});const s=5/t,l=HU(n,o,s);if(t=H(t),isNaN(l))return{stiffness:q.stiffness,damping:q.damping,duration:t};{const d=Math.pow(l,2)*a;return{stiffness:d,damping:c*2*Math.sqrt(a*d),duration:t}}}const IU=12;function HU(t,e,r){let a=r;for(let n=1;n<IU;n++)a=a-t(a)/e(a);return a}function Ia(t,e){return t*Math.sqrt(1-e*e)}const YU=["duration","bounce"],XU=["stiffness","damping","mass"];function ic(t,e){return e.some(r=>t[r]!==void 0)}function KU(t){let e={velocity:q.velocity,stiffness:q.stiffness,damping:q.damping,mass:q.mass,isResolvedFromDuration:!1,...t};if(!ic(t,XU)&&ic(t,YU))if(t.visualDuration){const r=t.visualDuration,a=2*Math.PI/(r*1.2),n=a*a,o=2*Zt(.05,1,1-(t.bounce||0))*Math.sqrt(n);e={...e,mass:q.mass,stiffness:n,damping:o}}else{const r=_U(t);e={...e,...r,mass:q.mass},e.isResolvedFromDuration=!0}return e}function ka(t=q.visualDuration,e=q.bounce){const r=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:a,restDelta:n}=r;const o=r.keyframes[0],c=r.keyframes[r.keyframes.length-1],s={done:!1,value:o},{stiffness:l,damping:d,mass:h,duration:u,velocity:m,isResolvedFromDuration:f}=KU({...r,velocity:-X(r.velocity||0)}),k=m||0,y=d/(2*Math.sqrt(l*h)),g=c-o,w=X(Math.sqrt(l/h)),v=Math.abs(g)<5;a||(a=v?q.restSpeed.granular:q.restSpeed.default),n||(n=v?q.restDelta.granular:q.restDelta.default);let x;if(y<1){const b=Ia(w,y);x=A=>{const L=Math.exp(-y*w*A);return c-L*((k+y*w*g)/b*Math.sin(b*A)+g*Math.cos(b*A))}}else if(y===1)x=b=>c-Math.exp(-w*b)*(g+(k+w*g)*b);else{const b=w*Math.sqrt(y*y-1);x=A=>{const L=Math.exp(-y*w*A),N=Math.min(b*A,300);return c-L*((k+y*w*g)*Math.sinh(N)+b*g*Math.cosh(N))/b}}const C={calculatedDuration:f&&u||null,next:b=>{const A=x(b);if(f)s.done=b>=u;else{let L=b===0?k:0;y<1&&(L=b===0?H(k):bu(x,b,A));const N=Math.abs(L)<=a,V=Math.abs(c-A)<=n;s.done=N&&V}return s.value=s.done?c:A,s},toString:()=>{const b=Math.min(Wo(C),fa),A=xu(L=>C.next(b*L).value,b,30);return b+"ms "+A},toTransition:()=>{}};return C}ka.applyToOptions=t=>{const e=ZU(t,100,ka);return t.ease=e.ease,t.duration=H(e.duration),t.type="keyframes",t};function Ha({keyframes:t,velocity:e=0,power:r=.8,timeConstant:a=325,bounceDamping:n=10,bounceStiffness:o=500,modifyTarget:c,min:s,max:l,restDelta:d=.5,restSpeed:h}){const u=t[0],m={done:!1,value:u},f=N=>s!==void 0&&N<s||l!==void 0&&N>l,k=N=>s===void 0?l:l===void 0||Math.abs(s-N)<Math.abs(l-N)?s:l;let y=r*e;const g=u+y,w=c===void 0?g:c(g);w!==g&&(y=w-u);const v=N=>-y*Math.exp(-N/a),x=N=>w+v(N),C=N=>{const V=v(N),D=x(N);m.done=Math.abs(V)<=d,m.value=m.done?w:D};let b,A;const L=N=>{f(m.value)&&(b=N,A=ka({keyframes:[m.value,k(m.value)],velocity:bu(x,N,m.value),damping:n,stiffness:o,restDelta:d,restSpeed:h}))};return L(0),{calculatedDuration:null,next:N=>{let V=!1;return!A&&b===void 0&&(V=!0,C(N),L(N)),b!==void 0&&N>=b?A.next(N-b):(!V&&C(N),m)}}}function GU(t,e,r){const a=[],n=r||_t.mix||vu,o=t.length-1;for(let c=0;c<o;c++){let s=n(t[c],t[c+1]);if(e){const l=Array.isArray(e)?e[c]||_:e;s=Qr(l,s)}a.push(s)}return a}function QU(t,e,{clamp:r=!0,ease:a,mixer:n}={}){const o=t.length;if(Ft(o===e.length,"Both input and output ranges must be the same length"),o===1)return()=>e[0];if(o===2&&e[0]===e[1])return()=>e[1];const c=t[0]===t[1];t[0]>t[o-1]&&(t=[...t].reverse(),e=[...e].reverse());const s=GU(e,a,n),l=s.length,d=h=>{if(c&&h<t[0])return e[0];let u=0;if(l>1)for(;u<t.length-2&&!(h<t[u+1]);u++);const m=Zr(t[u],t[u+1],h);return s[u](m)};return r?h=>d(Zt(t[0],t[o-1],h)):d}function JU(t,e){const r=t[t.length-1];for(let a=1;a<=e;a++){const n=Zr(0,e,a);t.push(E(r,1,n))}}function eB(t){const e=[0];return JU(e,t.length-1),e}function tB(t,e){return t.map(r=>r*e)}function rB(t,e){return t.map(()=>e||du).splice(0,t.length-1)}function xr({duration:t=300,keyframes:e,times:r,ease:a="easeInOut"}){const n=pU(a)?a.map(tc):tc(a),o={done:!1,value:e[0]},c=tB(r&&r.length===e.length?r:eB(e),t),s=QU(c,e,{ease:Array.isArray(n)?n:rB(e,n)});return{calculatedDuration:t,next:l=>(o.value=s(l),o.done=l>=t,o)}}const aB=t=>t!==null;function qo(t,{repeat:e,repeatType:r="loop"},a,n=1){const o=t.filter(aB),s=n<0||e&&r!=="loop"&&e%2===1?0:o.length-1;return!s||a===void 0?o[s]:a}const oB={decay:Ha,inertia:Ha,tween:xr,keyframes:xr,spring:ka};function Mu(t){typeof t.type=="string"&&(t.type=oB[t.type])}class Eo{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,r){return this.finished.then(e,r)}}const nB=t=>t/100;class $o extends Eo{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var a,n;const{motionValue:r}=this.options;r&&r.updatedAt!==B.now()&&this.tick(B.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(n=(a=this.options).onStop)==null||n.call(a))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;Mu(e);const{type:r=xr,repeat:a=0,repeatDelay:n=0,repeatType:o,velocity:c=0}=e;let{keyframes:s}=e;const l=r||xr;process.env.NODE_ENV!=="production"&&l!==xr&&Ft(s.length<=2,`Only two keyframes currently supported with spring and inertia animations. Trying to animate ${s}`,"spring-two-frames"),l!==xr&&typeof s[0]!="number"&&(this.mixKeyframes=Qr(nB,vu(s[0],s[1])),s=[0,100]);const d=l({...e,keyframes:s});o==="mirror"&&(this.mirroredGenerator=l({...e,keyframes:[...s].reverse(),velocity:-c})),d.calculatedDuration===null&&(d.calculatedDuration=Wo(d));const{calculatedDuration:h}=d;this.calculatedDuration=h,this.resolvedDuration=h+n,this.totalDuration=this.resolvedDuration*(a+1)-n,this.generator=d}updateTime(e){const r=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=r}tick(e,r=!1){const{generator:a,totalDuration:n,mixKeyframes:o,mirroredGenerator:c,resolvedDuration:s,calculatedDuration:l}=this;if(this.startTime===null)return a.next(0);const{delay:d=0,keyframes:h,repeat:u,repeatType:m,repeatDelay:f,type:k,onUpdate:y,finalKeyframe:g}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-n/this.speed,this.startTime)),r?this.currentTime=e:this.updateTime(e);const w=this.currentTime-d*(this.playbackSpeed>=0?1:-1),v=this.playbackSpeed>=0?w<0:w>n;this.currentTime=Math.max(w,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=n);let x=this.currentTime,C=a;if(u){const N=Math.min(this.currentTime,n)/s;let V=Math.floor(N),D=N%1;!D&&N>=1&&(D=1),D===1&&V--,V=Math.min(V,u+1),!!(V%2)&&(m==="reverse"?(D=1-D,f&&(D-=f/s)):m==="mirror"&&(C=c)),x=Zt(0,1,D)*s}const b=v?{done:!1,value:h[0]}:C.next(x);o&&(b.value=o(b.value));let{done:A}=b;!v&&l!==null&&(A=this.playbackSpeed>=0?this.currentTime>=n:this.currentTime<=0);const L=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&A);return L&&k!==Ha&&(b.value=qo(h,this.options,g,this.speed)),y&&y(b.value),L&&this.finish(),b}then(e,r){return this.finished.then(e,r)}get duration(){return X(this.calculatedDuration)}get time(){return X(this.currentTime)}set time(e){var r;e=H(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),(r=this.driver)==null||r.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(B.now());const r=this.playbackSpeed!==e;this.playbackSpeed=e,r&&(this.time=X(this.currentTime))}play(){var n,o;if(this.isStopped)return;const{driver:e=BU,startTime:r}=this.options;this.driver||(this.driver=e(c=>this.tick(c))),(o=(n=this.options).onPlay)==null||o.call(n);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=r??a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(B.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,r;this.notifyFinished(),this.teardown(),this.state="finished",(r=(e=this.options).onComplete)==null||r.call(e)}cancel(){var e,r;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(r=(e=this.options).onCancel)==null||r.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var r;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(r=this.driver)==null||r.stop(),e.observe(this)}}function sB(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const lr=t=>t*180/Math.PI,Ya=t=>{const e=lr(Math.atan2(t[1],t[0]));return Xa(e)},iB={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Ya,rotateZ:Ya,skewX:t=>lr(Math.atan(t[1])),skewY:t=>lr(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Xa=t=>(t=t%360,t<0&&(t+=360),t),cc=Ya,lc=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),dc=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),cB={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:lc,scaleY:dc,scale:t=>(lc(t)+dc(t))/2,rotateX:t=>Xa(lr(Math.atan2(t[6],t[5]))),rotateY:t=>Xa(lr(Math.atan2(-t[2],t[0]))),rotateZ:cc,rotate:cc,skewX:t=>lr(Math.atan(t[4])),skewY:t=>lr(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Ka(t){return t.includes("scale")?1:0}function Ga(t,e){if(!t||t==="none")return Ka(e);const r=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,n;if(r)a=cB,n=r;else{const s=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=iB,n=s}if(!n)return Ka(e);const o=a[e],c=n[1].split(",").map(dB);return typeof o=="function"?o(c):c[o]}const lB=(t,e)=>{const{transform:r="none"}=getComputedStyle(t);return Ga(r,e)};function dB(t){return parseFloat(t.trim())}const Wr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],qr=new Set(Wr),hc=t=>t===zr||t===M,hB=new Set(["x","y","z"]),uB=Wr.filter(t=>!hB.has(t));function mB(t){const e=[];return uB.forEach(r=>{const a=t.getValue(r);a!==void 0&&(e.push([r,a.get()]),a.set(r.startsWith("scale")?1:0))}),e}const dr={width:({x:t},{paddingLeft:e="0",paddingRight:r="0"})=>t.max-t.min-parseFloat(e)-parseFloat(r),height:({y:t},{paddingTop:e="0",paddingBottom:r="0"})=>t.max-t.min-parseFloat(e)-parseFloat(r),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>Ga(e,"x"),y:(t,{transform:e})=>Ga(e,"y")};dr.translateX=dr.x;dr.translateY=dr.y;const hr=new Set;let Qa=!1,Ja=!1,eo=!1;function Nu(){if(Ja){const t=Array.from(hr).filter(a=>a.needsMeasurement),e=new Set(t.map(a=>a.element)),r=new Map;e.forEach(a=>{const n=mB(a);n.length&&(r.set(a,n),a.render())}),t.forEach(a=>a.measureInitialState()),e.forEach(a=>{a.render();const n=r.get(a);n&&n.forEach(([o,c])=>{var s;(s=a.getValue(o))==null||s.set(c)})}),t.forEach(a=>a.measureEndState()),t.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}Ja=!1,Qa=!1,hr.forEach(t=>t.complete(eo)),hr.clear()}function Cu(){hr.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Ja=!0)})}function pB(){eo=!0,Cu(),Nu(),eo=!1}class So{constructor(e,r,a,n,o,c=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=r,this.name=a,this.motionValue=n,this.element=o,this.isAsync=c}scheduleResolve(){this.state="scheduled",this.isAsync?(hr.add(this),Qa||(Qa=!0,W.read(Cu),W.resolveKeyframes(Nu))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:r,element:a,motionValue:n}=this;if(e[0]===null){const o=n==null?void 0:n.get(),c=e[e.length-1];if(o!==void 0)e[0]=o;else if(a&&r){const s=a.readValue(r,c);s!=null&&(e[0]=s)}e[0]===void 0&&(e[0]=c),n&&o===void 0&&n.set(e[0])}sB(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),hr.delete(this)}cancel(){this.state==="scheduled"&&(hr.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const fB=t=>t.startsWith("--");function kB(t,e,r){fB(e)?t.style.setProperty(e,r):t.style[e]=r}const yB=vo(()=>window.ScrollTimeline!==void 0),gB={};function wB(t,e){const r=vo(t);return()=>gB[e]??r()}const Au=wB(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Tr=([t,e,r,a])=>`cubic-bezier(${t}, ${e}, ${r}, ${a})`,uc={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Tr([0,.65,.55,1]),circOut:Tr([.55,0,1,.45]),backIn:Tr([.31,.01,.66,-.59]),backOut:Tr([.33,1.53,.69,.99])};function Lu(t,e){if(t)return typeof t=="function"?Au()?xu(t,e):"ease-out":hu(t)?Tr(t):Array.isArray(t)?t.map(r=>Lu(r,e)||uc.easeOut):uc[t]}function vB(t,e,r,{delay:a=0,duration:n=300,repeat:o=0,repeatType:c="loop",ease:s="easeOut",times:l}={},d=void 0){const h={[e]:r};l&&(h.offset=l);const u=Lu(s,n);Array.isArray(u)&&(h.easing=u);const m={delay:a,duration:n,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:o+1,direction:c==="reverse"?"alternate":"normal"};return d&&(m.pseudoElement=d),t.animate(h,m)}function ju(t){return typeof t=="function"&&"applyToOptions"in t}function xB({type:t,...e}){return ju(t)&&Au()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class bB extends Eo{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:r,name:a,keyframes:n,pseudoElement:o,allowFlatten:c=!1,finalKeyframe:s,onComplete:l}=e;this.isPseudoElement=!!o,this.allowFlatten=c,this.options=e,Ft(typeof e.type!="string",`animateMini doesn't support "type" as a string. Did you mean to import { spring } from "motion"?`);const d=xB(e);this.animation=vB(r,a,n,d,o),d.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!o){const h=qo(n,this.options,s,this.speed);this.updateMotionValue?this.updateMotionValue(h):kB(r,a,h),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,r;(r=(e=this.animation).finish)==null||r.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var e,r;this.isPseudoElement||(r=(e=this.animation).commitStyles)==null||r.call(e)}get duration(){var r,a;const e=((a=(r=this.animation.effect)==null?void 0:r.getComputedTiming)==null?void 0:a.call(r).duration)||0;return X(Number(e))}get time(){return X(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=H(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline({timeline:e,observe:r}){var a;return this.allowFlatten&&((a=this.animation.effect)==null||a.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&yB()?(this.animation.timeline=e,_):r(this)}}const zu={anticipate:iu,backInOut:su,circInOut:lu};function MB(t){return t in zu}function NB(t){typeof t.ease=="string"&&MB(t.ease)&&(t.ease=zu[t.ease])}const mc=10;class CB extends bB{constructor(e){NB(e),Mu(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:r,onUpdate:a,onComplete:n,element:o,...c}=this.options;if(!r)return;if(e!==void 0){r.set(e);return}const s=new $o({...c,autoplay:!1}),l=H(this.finishedTime??this.time);r.setWithVelocity(s.sample(l-mc).value,s.sample(l).value,mc),s.stop()}}const pc=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(rr.test(t)||t==="0")&&!t.startsWith("url("));function AB(t){const e=t[0];if(t.length===1)return!0;for(let r=0;r<t.length;r++)if(t[r]!==e)return!0}function LB(t,e,r,a){const n=t[0];if(n===null)return!1;if(e==="display"||e==="visibility")return!0;const o=t[t.length-1],c=pc(n,e),s=pc(o,e);return jr(c===s,`You are trying to animate ${e} from "${n}" to "${o}". ${n} is not an animatable value - to enable this animation set ${n} to a value animatable to ${o} via the \`style\` property.`),!c||!s?!1:AB(t)||(r==="spring"||ju(r))&&a}function Vo(t){return J1(t)&&"offsetHeight"in t}const jB=new Set(["opacity","clipPath","filter","transform"]),zB=vo(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function WB(t){var d;const{motionValue:e,name:r,repeatDelay:a,repeatType:n,damping:o,type:c}=t;if(!Vo((d=e==null?void 0:e.owner)==null?void 0:d.current))return!1;const{onUpdate:s,transformTemplate:l}=e.owner.getProps();return zB()&&r&&jB.has(r)&&(r!=="transform"||!l)&&!s&&!a&&n!=="mirror"&&o!==0&&c!=="inertia"}const qB=40;class EB extends Eo{constructor({autoplay:e=!0,delay:r=0,type:a="keyframes",repeat:n=0,repeatDelay:o=0,repeatType:c="loop",keyframes:s,name:l,motionValue:d,element:h,...u}){var k;super(),this.stop=()=>{var y,g;this._animation&&(this._animation.stop(),(y=this.stopTimeline)==null||y.call(this)),(g=this.keyframeResolver)==null||g.cancel()},this.createdAt=B.now();const m={autoplay:e,delay:r,type:a,repeat:n,repeatDelay:o,repeatType:c,name:l,motionValue:d,element:h,...u},f=(h==null?void 0:h.KeyframeResolver)||So;this.keyframeResolver=new f(s,(y,g,w)=>this.onKeyframesResolved(y,g,m,!w),l,d,h),(k=this.keyframeResolver)==null||k.scheduleResolve()}onKeyframesResolved(e,r,a,n){this.keyframeResolver=void 0;const{name:o,type:c,velocity:s,delay:l,isHandoff:d,onUpdate:h}=a;this.resolvedAt=B.now(),LB(e,o,c,s)||((_t.instantAnimations||!l)&&(h==null||h(qo(e,a,r))),e[0]=e[e.length-1],a.duration=0,a.repeat=0);const m={startTime:n?this.resolvedAt?this.resolvedAt-this.createdAt>qB?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:r,...a,keyframes:e},f=!d&&WB(m)?new CB({...m,element:m.motionValue.owner.current}):new $o(m);f.finished.then(()=>this.notifyFinished()).catch(_),this.pendingTimeline&&(this.stopTimeline=f.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=f}get finished(){return this._animation?this.animation.finished:this._finished}then(e,r){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),pB()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}const $B=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function SB(t){const e=$B.exec(t);if(!e)return[,];const[,r,a,n]=e;return[`--${r??a}`,n]}const VB=4;function Wu(t,e,r=1){Ft(r<=VB,`Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);const[a,n]=SB(t);if(!a)return;const o=window.getComputedStyle(e).getPropertyValue(a);if(o){const c=o.trim();return Q1(c)?parseFloat(c):c}return Ao(n)?Wu(n,e,r+1):n}function To(t,e){return(t==null?void 0:t[e])??(t==null?void 0:t.default)??t}const qu=new Set(["width","height","top","left","right","bottom",...Wr]),TB={test:t=>t==="auto",parse:t=>t},Eu=t=>e=>e.test(t),$u=[zr,M,K,er,AU,CU,TB],fc=t=>$u.find(Eu(t));function PB(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||eu(t):!0}const RB=new Set(["brightness","contrast","saturate","opacity"]);function DB(t){const[e,r]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[a]=r.match(Lo)||[];if(!a)return t;const n=r.replace(a,"");let o=RB.has(e)?1:0;return a!==r&&(o*=100),e+"("+o+n+")"}const OB=/\b([a-z-]*)\(.*?\)/gu,to={...rr,getAnimatableNone:t=>{const e=t.match(OB);return e?e.map(DB).join(" "):t}},kc={...zr,transform:Math.round},UB={rotate:er,rotateX:er,rotateY:er,rotateZ:er,scale:na,scaleX:na,scaleY:na,scaleZ:na,skew:er,skewX:er,skewY:er,distance:M,translateX:M,translateY:M,translateZ:M,x:M,y:M,z:M,perspective:M,transformPerspective:M,opacity:Fr,originX:ac,originY:ac,originZ:M},Po={borderWidth:M,borderTopWidth:M,borderRightWidth:M,borderBottomWidth:M,borderLeftWidth:M,borderRadius:M,radius:M,borderTopLeftRadius:M,borderTopRightRadius:M,borderBottomRightRadius:M,borderBottomLeftRadius:M,width:M,maxWidth:M,height:M,maxHeight:M,top:M,right:M,bottom:M,left:M,padding:M,paddingTop:M,paddingRight:M,paddingBottom:M,paddingLeft:M,margin:M,marginTop:M,marginRight:M,marginBottom:M,marginLeft:M,backgroundPositionX:M,backgroundPositionY:M,...UB,zIndex:kc,fillOpacity:Fr,strokeOpacity:Fr,numOctaves:kc},BB={...Po,color:S,backgroundColor:S,outlineColor:S,fill:S,stroke:S,borderColor:S,borderTopColor:S,borderRightColor:S,borderBottomColor:S,borderLeftColor:S,filter:to,WebkitFilter:to},Su=t=>BB[t];function Vu(t,e){let r=Su(t);return r!==to&&(r=rr),r.getAnimatableNone?r.getAnimatableNone(e):void 0}const ZB=new Set(["auto","none","0"]);function FB(t,e,r){let a=0,n;for(;a<t.length&&!n;){const o=t[a];typeof o=="string"&&!ZB.has(o)&&_r(o).values.length&&(n=t[a]),a++}if(n&&r)for(const o of e)t[o]=Vu(r,n)}class _B extends So{constructor(e,r,a,n,o){super(e,r,a,n,o,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:r,name:a}=this;if(!r||!r.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let d=e[l];if(typeof d=="string"&&(d=d.trim(),Ao(d))){const h=Wu(d,r.current);h!==void 0&&(e[l]=h),l===e.length-1&&(this.finalKeyframe=d)}}if(this.resolveNoneKeyframes(),!qu.has(a)||e.length!==2)return;const[n,o]=e,c=fc(n),s=fc(o);if(c!==s)if(hc(c)&&hc(s))for(let l=0;l<e.length;l++){const d=e[l];typeof d=="string"&&(e[l]=parseFloat(d))}else dr[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:r}=this,a=[];for(let n=0;n<e.length;n++)(e[n]===null||PB(e[n]))&&a.push(n);a.length&&FB(e,a,r)}measureInitialState(){const{element:e,unresolvedKeyframes:r,name:a}=this;if(!e||!e.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=dr[a](e.measureViewportBox(),window.getComputedStyle(e.current)),r[0]=this.measuredOrigin;const n=r[r.length-1];n!==void 0&&e.getValue(a,n).jump(n,!1)}measureEndState(){var s;const{element:e,name:r,unresolvedKeyframes:a}=this;if(!e||!e.current)return;const n=e.getValue(r);n&&n.jump(this.measuredOrigin,!1);const o=a.length-1,c=a[o];a[o]=dr[r](e.measureViewportBox(),window.getComputedStyle(e.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),(s=this.removedTransforms)!=null&&s.length&&this.removedTransforms.forEach(([l,d])=>{e.getValue(l).set(d)}),this.resolveNoneKeyframes()}}function IB(t,e,r){if(t instanceof EventTarget)return[t];if(typeof t=="string"){let a=document;const n=(r==null?void 0:r[t])??a.querySelectorAll(t);return n?Array.from(n):[]}return Array.from(t)}const Tu=(t,e)=>e&&typeof t=="number"?e.transform(t):t,yc=30,HB=t=>!isNaN(parseFloat(t));class YB{constructor(e,r={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=(a,n=!0)=>{var c,s;const o=B.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((c=this.events.change)==null||c.notify(this.current),this.dependents))for(const l of this.dependents)l.dirty();n&&((s=this.events.renderRequest)==null||s.notify(this.current))},this.hasAnimated=!1,this.setCurrent(e),this.owner=r.owner}setCurrent(e){this.current=e,this.updatedAt=B.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=HB(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return process.env.NODE_ENV!=="production"&&bo(!1,'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'),this.on("change",e)}on(e,r){this.events[e]||(this.events[e]=new xo);const a=this.events[e].add(r);return e==="change"?()=>{a(),W.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,r){this.passiveEffect=e,this.stopPassiveEffect=r}set(e,r=!0){!r||!this.passiveEffect?this.updateAndNotify(e,r):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,r,a){this.set(r),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-a}jump(e,r=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=B.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>yc)return 0;const r=Math.min(this.updatedAt-this.prevUpdatedAt,yc);return tu(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(e){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=e(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,r;(e=this.dependents)==null||e.clear(),(r=this.events.destroy)==null||r.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ar(t,e){return new YB(t,e)}const{schedule:Ro}=uu(queueMicrotask,!1),I={x:!1,y:!1};function Pu(){return I.x||I.y}function XB(t){return t==="x"||t==="y"?I[t]?null:(I[t]=!0,()=>{I[t]=!1}):I.x||I.y?null:(I.x=I.y=!0,()=>{I.x=I.y=!1})}function Ru(t,e){const r=IB(t),a=new AbortController,n={passive:!0,...e,signal:a.signal};return[r,n,()=>a.abort()]}function gc(t){return!(t.pointerType==="touch"||Pu())}function KB(t,e,r={}){const[a,n,o]=Ru(t,r),c=s=>{if(!gc(s))return;const{target:l}=s,d=e(l,s);if(typeof d!="function"||!l)return;const h=u=>{gc(u)&&(d(u),l.removeEventListener("pointerleave",h))};l.addEventListener("pointerleave",h,n)};return a.forEach(s=>{s.addEventListener("pointerenter",c,n)}),o}const Du=(t,e)=>e?t===e?!0:Du(t,e.parentElement):!1,Do=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,GB=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function QB(t){return GB.has(t.tagName)||t.tabIndex!==-1}const la=new WeakSet;function wc(t){return e=>{e.key==="Enter"&&t(e)}}function Va(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const JB=(t,e)=>{const r=t.currentTarget;if(!r)return;const a=wc(()=>{if(la.has(r))return;Va(r,"down");const n=wc(()=>{Va(r,"up")}),o=()=>Va(r,"cancel");r.addEventListener("keyup",n,e),r.addEventListener("blur",o,e)});r.addEventListener("keydown",a,e),r.addEventListener("blur",()=>r.removeEventListener("keydown",a),e)};function vc(t){return Do(t)&&!Pu()}function eZ(t,e,r={}){const[a,n,o]=Ru(t,r),c=s=>{const l=s.currentTarget;if(!vc(s))return;la.add(l);const d=e(l,s),h=(f,k)=>{window.removeEventListener("pointerup",u),window.removeEventListener("pointercancel",m),la.has(l)&&la.delete(l),vc(f)&&typeof d=="function"&&d(f,{success:k})},u=f=>{h(f,l===window||l===document||r.useGlobalTarget||Du(l,f.target))},m=f=>{h(f,!1)};window.addEventListener("pointerup",u,n),window.addEventListener("pointercancel",m,n)};return a.forEach(s=>{(r.useGlobalTarget?window:s).addEventListener("pointerdown",c,n),Vo(s)&&(s.addEventListener("focus",d=>JB(d,n)),!QB(s)&&!s.hasAttribute("tabindex")&&(s.tabIndex=0))}),o}function Ou(t){return J1(t)&&"ownerSVGElement"in t}function tZ(t){return Ou(t)&&t.tagName==="svg"}const R=t=>!!(t&&t.getVelocity),rZ=[...$u,S,rr],aZ=t=>rZ.find(Eu(t)),Oo=i.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class oZ extends ho.Component{getSnapshotBeforeUpdate(e){const r=this.props.childRef.current;if(r&&e.isPresent&&!this.props.isPresent){const a=r.offsetParent,n=Vo(a)&&a.offsetWidth||0,o=this.props.sizeRef.current;o.height=r.offsetHeight||0,o.width=r.offsetWidth||0,o.top=r.offsetTop,o.left=r.offsetLeft,o.right=n-o.width-o.left}return null}componentDidUpdate(){}render(){return this.props.children}}function nZ({children:t,isPresent:e,anchorX:r,root:a}){const n=i.useId(),o=i.useRef(null),c=i.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:s}=i.useContext(Oo);return i.useInsertionEffect(()=>{const{width:l,height:d,top:h,left:u,right:m}=c.current;if(e||!o.current||!l||!d)return;const f=r==="left"?`left: ${u}`:`right: ${m}`;o.current.dataset.motionPopId=n;const k=document.createElement("style");s&&(k.nonce=s);const y=a??document.head;return y.appendChild(k),k.sheet&&k.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${l}px !important;
            height: ${d}px !important;
            ${f}px !important;
            top: ${h}px !important;
          }
        `),()=>{y.removeChild(k),y.contains(k)&&y.removeChild(k)}},[e]),p.jsx(oZ,{isPresent:e,childRef:o,sizeRef:c,children:ho.cloneElement(t,{ref:o})})}const sZ=({children:t,initial:e,isPresent:r,onExitComplete:a,custom:n,presenceAffectsLayout:o,mode:c,anchorX:s,root:l})=>{const d=ko(iZ),h=i.useId();let u=!0,m=i.useMemo(()=>(u=!1,{id:h,initial:e,isPresent:r,custom:n,onExitComplete:f=>{d.set(f,!0);for(const k of d.values())if(!k)return;a&&a()},register:f=>(d.set(f,!1),()=>d.delete(f))}),[r,d,a]);return o&&u&&(m={...m}),i.useMemo(()=>{d.forEach((f,k)=>d.set(k,!1))},[r]),ho.useEffect(()=>{!r&&!d.size&&a&&a()},[r]),c==="popLayout"&&(t=p.jsx(nZ,{isPresent:r,anchorX:s,root:l,children:t})),p.jsx(xa.Provider,{value:m,children:t})};function iZ(){return new Map}function Uu(t=!0){const e=i.useContext(xa);if(e===null)return[!0,null];const{isPresent:r,onExitComplete:a,register:n}=e,o=i.useId();i.useEffect(()=>{if(t)return n(o)},[t]);const c=i.useCallback(()=>t&&a&&a(o),[o,a,t]);return!r&&a?[!1,c]:[!0]}const sa=t=>t.key||"";function xc(t){const e=[];return i.Children.forEach(t,r=>{i.isValidElement(r)&&e.push(r)}),e}const cZ=({children:t,custom:e,initial:r=!0,onExitComplete:a,presenceAffectsLayout:n=!0,mode:o="sync",propagate:c=!1,anchorX:s="left",root:l})=>{const[d,h]=Uu(c),u=i.useMemo(()=>xc(t),[t]),m=c&&!d?[]:u.map(sa),f=i.useRef(!0),k=i.useRef(u),y=ko(()=>new Map),[g,w]=i.useState(u),[v,x]=i.useState(u);G1(()=>{f.current=!1,k.current=u;for(let A=0;A<v.length;A++){const L=sa(v[A]);m.includes(L)?y.delete(L):y.get(L)!==!0&&y.set(L,!1)}},[v,m.length,m.join("-")]);const C=[];if(u!==g){let A=[...u];for(let L=0;L<v.length;L++){const N=v[L],V=sa(N);m.includes(V)||(A.splice(L,0,N),C.push(N))}return o==="wait"&&C.length&&(A=C),x(xc(A)),w(u),null}process.env.NODE_ENV!=="production"&&o==="wait"&&v.length>1&&console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);const{forceRender:b}=i.useContext(fo);return p.jsx(p.Fragment,{children:v.map(A=>{const L=sa(A),N=c&&!d?!1:u===v||m.includes(L),V=()=>{if(y.has(L))y.set(L,!0);else return;let D=!0;y.forEach(Qt=>{Qt||(D=!1)}),D&&(b==null||b(),x(k.current),c&&(h==null||h()),a&&a())};return p.jsx(sZ,{isPresent:N,initial:!f.current||r?void 0:!1,custom:e,presenceAffectsLayout:n,mode:o,root:l,onExitComplete:N?void 0:V,anchorX:s,children:A},L)})})},Bu=i.createContext({strict:!1}),bc={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Lr={};for(const t in bc)Lr[t]={isEnabled:e=>bc[t].some(r=>!!e[r])};function lZ(t){for(const e in t)Lr[e]={...Lr[e],...t[e]}}const dZ=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ya(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||dZ.has(t)}let Zu=t=>!ya(t);function hZ(t){typeof t=="function"&&(Zu=e=>e.startsWith("on")?!ya(e):t(e))}try{hZ(require("@emotion/is-prop-valid").default)}catch{}function uZ(t,e,r){const a={};for(const n in t)n==="values"&&typeof t.values=="object"||(Zu(n)||r===!0&&ya(n)||!e&&!ya(n)||t.draggable&&n.startsWith("onDrag"))&&(a[n]=t[n]);return a}function mZ(t){if(typeof Proxy>"u")return t;const e=new Map,r=(...a)=>(process.env.NODE_ENV!=="production"&&bo(!1,"motion() is deprecated. Use motion.create() instead."),t(...a));return new Proxy(r,{get:(a,n)=>n==="create"?t:(e.has(n)||e.set(n,t(n)),e.get(n))})}const ba=i.createContext({});function Ma(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Ir(t){return typeof t=="string"||Array.isArray(t)}const Uo=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Bo=["initial",...Uo];function Na(t){return Ma(t.animate)||Bo.some(e=>Ir(t[e]))}function Fu(t){return!!(Na(t)||t.variants)}function pZ(t,e){if(Na(t)){const{initial:r,animate:a}=t;return{initial:r===!1||Ir(r)?r:void 0,animate:Ir(a)?a:void 0}}return t.inherit!==!1?e:{}}function fZ(t){const{initial:e,animate:r}=pZ(t,i.useContext(ba));return i.useMemo(()=>({initial:e,animate:r}),[Mc(e),Mc(r)])}function Mc(t){return Array.isArray(t)?t.join(" "):t}const kZ=Symbol.for("motionComponentSymbol");function br(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function yZ(t,e,r){return i.useCallback(a=>{a&&t.onMount&&t.onMount(a),e&&(a?e.mount(a):e.unmount()),r&&(typeof r=="function"?r(a):br(r)&&(r.current=a))},[e])}const Zo=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),gZ="framerAppearId",_u="data-"+Zo(gZ),Iu=i.createContext({});function wZ(t,e,r,a,n){var y,g;const{visualElement:o}=i.useContext(ba),c=i.useContext(Bu),s=i.useContext(xa),l=i.useContext(Oo).reducedMotion,d=i.useRef(null);a=a||c.renderer,!d.current&&a&&(d.current=a(t,{visualState:e,parent:o,props:r,presenceContext:s,blockInitialAnimation:s?s.initial===!1:!1,reducedMotionConfig:l}));const h=d.current,u=i.useContext(Iu);h&&!h.projection&&n&&(h.type==="html"||h.type==="svg")&&vZ(d.current,r,n,u);const m=i.useRef(!1);i.useInsertionEffect(()=>{h&&m.current&&h.update(r,s)});const f=r[_u],k=i.useRef(!!f&&!((y=window.MotionHandoffIsComplete)!=null&&y.call(window,f))&&((g=window.MotionHasOptimisedAnimation)==null?void 0:g.call(window,f)));return G1(()=>{h&&(m.current=!0,window.MotionIsMounted=!0,h.updateFeatures(),Ro.render(h.render),k.current&&h.animationState&&h.animationState.animateChanges())}),i.useEffect(()=>{h&&(!k.current&&h.animationState&&h.animationState.animateChanges(),k.current&&(queueMicrotask(()=>{var w;(w=window.MotionHandoffMarkAsComplete)==null||w.call(window,f)}),k.current=!1))}),h}function vZ(t,e,r,a){const{layoutId:n,layout:o,drag:c,dragConstraints:s,layoutScroll:l,layoutRoot:d,layoutCrossfade:h}=e;t.projection=new r(t.latestValues,e["data-framer-portal-id"]?void 0:Hu(t.parent)),t.projection.setOptions({layoutId:n,layout:o,alwaysMeasureLayout:!!c||s&&br(s),visualElement:t,animationType:typeof o=="string"?o:"both",initialPromotionConfig:a,crossfade:h,layoutScroll:l,layoutRoot:d})}function Hu(t){if(t)return t.options.allowProjection!==!1?t.projection:Hu(t.parent)}function xZ({preloadedFeatures:t,createVisualElement:e,useRender:r,useVisualState:a,Component:n}){t&&lZ(t);function o(s,l){let d;const h={...i.useContext(Oo),...s,layoutId:bZ(s)},{isStatic:u}=h,m=fZ(s),f=a(s,u);if(!u&&yo){MZ(h,t);const k=NZ(h);d=k.MeasureLayout,m.visualElement=wZ(n,f,h,e,k.ProjectionNode)}return p.jsxs(ba.Provider,{value:m,children:[d&&m.visualElement?p.jsx(d,{visualElement:m.visualElement,...h}):null,r(n,s,yZ(f,m.visualElement,l),f,u,m.visualElement)]})}o.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const c=i.forwardRef(o);return c[kZ]=n,c}function bZ({layoutId:t}){const e=i.useContext(fo).id;return e&&t!==void 0?e+"-"+t:t}function MZ(t,e){const r=i.useContext(Bu).strict;if(process.env.NODE_ENV!=="production"&&e&&r){const a="You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";t.ignoreStrict?jr(!1,a):Ft(!1,a)}}function NZ(t){const{drag:e,layout:r}=Lr;if(!e&&!r)return{};const a={...e,...r};return{MeasureLayout:e!=null&&e.isEnabled(t)||r!=null&&r.isEnabled(t)?a.MeasureLayout:void 0,ProjectionNode:a.ProjectionNode}}const Hr={};function CZ(t){for(const e in t)Hr[e]=t[e],Co(e)&&(Hr[e].isCSSVariable=!0)}function Yu(t,{layout:e,layoutId:r}){return qr.has(t)||t.startsWith("origin")||(e||r!==void 0)&&(!!Hr[t]||t==="opacity")}const AZ={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},LZ=Wr.length;function jZ(t,e,r){let a="",n=!0;for(let o=0;o<LZ;o++){const c=Wr[o],s=t[c];if(s===void 0)continue;let l=!0;if(typeof s=="number"?l=s===(c.startsWith("scale")?1:0):l=parseFloat(s)===0,!l||r){const d=Tu(s,Po[c]);if(!l){n=!1;const h=AZ[c]||c;a+=`${h}(${d}) `}r&&(e[c]=d)}}return a=a.trim(),r?a=r(e,n?"":a):n&&(a="none"),a}function Fo(t,e,r){const{style:a,vars:n,transformOrigin:o}=t;let c=!1,s=!1;for(const l in e){const d=e[l];if(qr.has(l)){c=!0;continue}else if(Co(l)){n[l]=d;continue}else{const h=Tu(d,Po[l]);l.startsWith("origin")?(s=!0,o[l]=h):a[l]=h}}if(e.transform||(c||r?a.transform=jZ(e,t.transform,r):a.transform&&(a.transform="none")),s){const{originX:l="50%",originY:d="50%",originZ:h=0}=o;a.transformOrigin=`${l} ${d} ${h}`}}const _o=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Xu(t,e,r){for(const a in e)!R(e[a])&&!Yu(a,r)&&(t[a]=e[a])}function zZ({transformTemplate:t},e){return i.useMemo(()=>{const r=_o();return Fo(r,e,t),Object.assign({},r.vars,r.style)},[e])}function WZ(t,e){const r=t.style||{},a={};return Xu(a,r,t),Object.assign(a,zZ(t,e)),a}function qZ(t,e){const r={},a=WZ(t,e);return t.drag&&t.dragListener!==!1&&(r.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(r.tabIndex=0),r.style=a,r}const EZ={offset:"stroke-dashoffset",array:"stroke-dasharray"},$Z={offset:"strokeDashoffset",array:"strokeDasharray"};function SZ(t,e,r=1,a=0,n=!0){t.pathLength=1;const o=n?EZ:$Z;t[o.offset]=M.transform(-a);const c=M.transform(e),s=M.transform(r);t[o.array]=`${c} ${s}`}function Ku(t,{attrX:e,attrY:r,attrScale:a,pathLength:n,pathSpacing:o=1,pathOffset:c=0,...s},l,d,h){if(Fo(t,s,d),l){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:u,style:m}=t;u.transform&&(m.transform=u.transform,delete u.transform),(m.transform||u.transformOrigin)&&(m.transformOrigin=u.transformOrigin??"50% 50%",delete u.transformOrigin),m.transform&&(m.transformBox=(h==null?void 0:h.transformBox)??"fill-box",delete u.transformBox),e!==void 0&&(u.x=e),r!==void 0&&(u.y=r),a!==void 0&&(u.scale=a),n!==void 0&&SZ(u,n,o,c,!1)}const Gu=()=>({..._o(),attrs:{}}),Qu=t=>typeof t=="string"&&t.toLowerCase()==="svg";function VZ(t,e,r,a){const n=i.useMemo(()=>{const o=Gu();return Ku(o,e,Qu(a),t.transformTemplate,t.style),{...o.attrs,style:{...o.style}}},[e]);if(t.style){const o={};Xu(o,t.style,t),n.style={...o,...n.style}}return n}const TZ=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Io(t){return typeof t!="string"||t.includes("-")?!1:!!(TZ.indexOf(t)>-1||/[A-Z]/u.test(t))}function PZ(t=!1){return(r,a,n,{latestValues:o},c)=>{const l=(Io(r)?VZ:qZ)(a,o,c,r),d=uZ(a,typeof r=="string",t),h=r!==i.Fragment?{...d,...l,ref:n}:{},{children:u}=a,m=i.useMemo(()=>R(u)?u.get():u,[u]);return i.createElement(r,{...h,children:m})}}function Nc(t){const e=[{},{}];return t==null||t.values.forEach((r,a)=>{e[0][a]=r.get(),e[1][a]=r.getVelocity()}),e}function Ho(t,e,r,a){if(typeof e=="function"){const[n,o]=Nc(a);e=e(r!==void 0?r:t.custom,n,o)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[n,o]=Nc(a);e=e(r!==void 0?r:t.custom,n,o)}return e}function da(t){return R(t)?t.get():t}function RZ({scrapeMotionValuesFromProps:t,createRenderState:e},r,a,n){return{latestValues:DZ(r,a,n,t),renderState:e()}}const Ju=t=>(e,r)=>{const a=i.useContext(ba),n=i.useContext(xa),o=()=>RZ(t,e,a,n);return r?o():ko(o)};function DZ(t,e,r,a){const n={},o=a(t,{});for(const m in o)n[m]=da(o[m]);let{initial:c,animate:s}=t;const l=Na(t),d=Fu(t);e&&d&&!l&&t.inherit!==!1&&(c===void 0&&(c=e.initial),s===void 0&&(s=e.animate));let h=r?r.initial===!1:!1;h=h||c===!1;const u=h?s:c;if(u&&typeof u!="boolean"&&!Ma(u)){const m=Array.isArray(u)?u:[u];for(let f=0;f<m.length;f++){const k=Ho(t,m[f]);if(k){const{transitionEnd:y,transition:g,...w}=k;for(const v in w){let x=w[v];if(Array.isArray(x)){const C=h?x.length-1:0;x=x[C]}x!==null&&(n[v]=x)}for(const v in y)n[v]=y[v]}}}return n}function Yo(t,e,r){var o;const{style:a}=t,n={};for(const c in a)(R(a[c])||e.style&&R(e.style[c])||Yu(c,t)||((o=r==null?void 0:r.getValue(c))==null?void 0:o.liveStyle)!==void 0)&&(n[c]=a[c]);return n}const OZ={useVisualState:Ju({scrapeMotionValuesFromProps:Yo,createRenderState:_o})};function em(t,e,r){const a=Yo(t,e,r);for(const n in t)if(R(t[n])||R(e[n])){const o=Wr.indexOf(n)!==-1?"attr"+n.charAt(0).toUpperCase()+n.substring(1):n;a[o]=t[n]}return a}const UZ={useVisualState:Ju({scrapeMotionValuesFromProps:em,createRenderState:Gu})};function BZ(t,e){return function(a,{forwardMotionProps:n}={forwardMotionProps:!1}){const c={...Io(a)?UZ:OZ,preloadedFeatures:t,useRender:PZ(n),createVisualElement:e,Component:a};return xZ(c)}}function Yr(t,e,r){const a=t.getProps();return Ho(a,e,r!==void 0?r:a.custom,t)}const ro=t=>Array.isArray(t);function ZZ(t,e,r){t.hasValue(e)?t.getValue(e).set(r):t.addValue(e,Ar(r))}function FZ(t){return ro(t)?t[t.length-1]||0:t}function _Z(t,e){const r=Yr(t,e);let{transitionEnd:a={},transition:n={},...o}=r||{};o={...o,...a};for(const c in o){const s=FZ(o[c]);ZZ(t,c,s)}}function IZ(t){return!!(R(t)&&t.add)}function ao(t,e){const r=t.getValue("willChange");if(IZ(r))return r.add(e);if(!r&&_t.WillChange){const a=new _t.WillChange("auto");t.addValue("willChange",a),a.add(e)}}function tm(t){return t.props[_u]}const HZ=t=>t!==null;function YZ(t,{repeat:e,repeatType:r="loop"},a){const n=t.filter(HZ),o=e&&r!=="loop"&&e%2===1?0:n.length-1;return n[o]}const XZ={type:"spring",stiffness:500,damping:25,restSpeed:10},KZ=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),GZ={type:"keyframes",duration:.8},QZ={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},JZ=(t,{keyframes:e})=>e.length>2?GZ:qr.has(t)?t.startsWith("scale")?KZ(e[1]):XZ:QZ;function eF({when:t,delay:e,delayChildren:r,staggerChildren:a,staggerDirection:n,repeat:o,repeatType:c,repeatDelay:s,from:l,elapsed:d,...h}){return!!Object.keys(h).length}const Xo=(t,e,r,a={},n,o)=>c=>{const s=To(a,t)||{},l=s.delay||a.delay||0;let{elapsed:d=0}=a;d=d-H(l);const h={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:e.getVelocity(),...s,delay:-d,onUpdate:m=>{e.set(m),s.onUpdate&&s.onUpdate(m)},onComplete:()=>{c(),s.onComplete&&s.onComplete()},name:t,motionValue:e,element:o?void 0:n};eF(s)||Object.assign(h,JZ(t,h)),h.duration&&(h.duration=H(h.duration)),h.repeatDelay&&(h.repeatDelay=H(h.repeatDelay)),h.from!==void 0&&(h.keyframes[0]=h.from);let u=!1;if((h.type===!1||h.duration===0&&!h.repeatDelay)&&(h.duration=0,h.delay===0&&(u=!0)),(_t.instantAnimations||_t.skipAnimations)&&(u=!0,h.duration=0,h.delay=0),h.allowFlatten=!s.type&&!s.ease,u&&!o&&e.get()!==void 0){const m=YZ(h.keyframes,s);if(m!==void 0){W.update(()=>{h.onUpdate(m),h.onComplete()});return}}return s.isSync?new $o(h):new EB(h)};function tF({protectedKeys:t,needsAnimating:e},r){const a=t.hasOwnProperty(r)&&e[r]!==!0;return e[r]=!1,a}function rm(t,e,{delay:r=0,transitionOverride:a,type:n}={}){let{transition:o=t.getDefaultTransition(),transitionEnd:c,...s}=e;a&&(o=a);const l=[],d=n&&t.animationState&&t.animationState.getState()[n];for(const h in s){const u=t.getValue(h,t.latestValues[h]??null),m=s[h];if(m===void 0||d&&tF(d,h))continue;const f={delay:r,...To(o||{},h)},k=u.get();if(k!==void 0&&!u.isAnimating&&!Array.isArray(m)&&m===k&&!f.velocity)continue;let y=!1;if(window.MotionHandoffAnimation){const w=tm(t);if(w){const v=window.MotionHandoffAnimation(w,h,W);v!==null&&(f.startTime=v,y=!0)}}ao(t,h),u.start(Xo(h,u,m,t.shouldReduceMotion&&qu.has(h)?{type:!1}:f,t,y));const g=u.animation;g&&l.push(g)}return c&&Promise.all(l).then(()=>{W.update(()=>{c&&_Z(t,c)})}),l}function oo(t,e,r={}){var l;const a=Yr(t,e,r.type==="exit"?(l=t.presenceContext)==null?void 0:l.custom:void 0);let{transition:n=t.getDefaultTransition()||{}}=a||{};r.transitionOverride&&(n=r.transitionOverride);const o=a?()=>Promise.all(rm(t,a,r)):()=>Promise.resolve(),c=t.variantChildren&&t.variantChildren.size?(d=0)=>{const{delayChildren:h=0,staggerChildren:u,staggerDirection:m}=n;return rF(t,e,d,h,u,m,r)}:()=>Promise.resolve(),{when:s}=n;if(s){const[d,h]=s==="beforeChildren"?[o,c]:[c,o];return d().then(()=>h())}else return Promise.all([o(),c(r.delay)])}function rF(t,e,r=0,a=0,n=0,o=1,c){const s=[],l=t.variantChildren.size,d=(l-1)*n,h=typeof a=="function",u=h?m=>a(m,l):o===1?(m=0)=>m*n:(m=0)=>d-m*n;return Array.from(t.variantChildren).sort(aF).forEach((m,f)=>{m.notify("AnimationStart",e),s.push(oo(m,e,{...c,delay:r+(h?0:a)+u(f)}).then(()=>m.notify("AnimationComplete",e)))}),Promise.all(s)}function aF(t,e){return t.sortNodePosition(e)}function oF(t,e,r={}){t.notify("AnimationStart",e);let a;if(Array.isArray(e)){const n=e.map(o=>oo(t,o,r));a=Promise.all(n)}else if(typeof e=="string")a=oo(t,e,r);else{const n=typeof e=="function"?Yr(t,e,r.custom):e;a=Promise.all(rm(t,n,r))}return a.then(()=>{t.notify("AnimationComplete",e)})}function am(t,e){if(!Array.isArray(e))return!1;const r=e.length;if(r!==t.length)return!1;for(let a=0;a<r;a++)if(e[a]!==t[a])return!1;return!0}const nF=Bo.length;function om(t){if(!t)return;if(!t.isControllingVariants){const r=t.parent?om(t.parent)||{}:{};return t.props.initial!==void 0&&(r.initial=t.props.initial),r}const e={};for(let r=0;r<nF;r++){const a=Bo[r],n=t.props[a];(Ir(n)||n===!1)&&(e[a]=n)}return e}const sF=[...Uo].reverse(),iF=Uo.length;function cF(t){return e=>Promise.all(e.map(({animation:r,options:a})=>oF(t,r,a)))}function lF(t){let e=cF(t),r=Cc(),a=!0;const n=l=>(d,h)=>{var m;const u=Yr(t,h,l==="exit"?(m=t.presenceContext)==null?void 0:m.custom:void 0);if(u){const{transition:f,transitionEnd:k,...y}=u;d={...d,...y,...k}}return d};function o(l){e=l(t)}function c(l){const{props:d}=t,h=om(t.parent)||{},u=[],m=new Set;let f={},k=1/0;for(let g=0;g<iF;g++){const w=sF[g],v=r[w],x=d[w]!==void 0?d[w]:h[w],C=Ir(x),b=w===l?v.isActive:null;b===!1&&(k=g);let A=x===h[w]&&x!==d[w]&&C;if(A&&a&&t.manuallyAnimateOnMount&&(A=!1),v.protectedKeys={...f},!v.isActive&&b===null||!x&&!v.prevProp||Ma(x)||typeof x=="boolean")continue;const L=dF(v.prevProp,x);let N=L||w===l&&v.isActive&&!A&&C||g>k&&C,V=!1;const D=Array.isArray(x)?x:[x];let Qt=D.reduce(n(w),{});b===!1&&(Qt={});const{prevResolvedValues:Ko={}}=v,Lm={...Ko,...Qt},Go=O=>{N=!0,m.has(O)&&(V=!0,m.delete(O)),v.needsAnimating[O]=!0;const Bt=t.getValue(O);Bt&&(Bt.liveStyle=!1)};for(const O in Lm){const Bt=Qt[O],Ca=Ko[O];if(f.hasOwnProperty(O))continue;let Aa=!1;ro(Bt)&&ro(Ca)?Aa=!am(Bt,Ca):Aa=Bt!==Ca,Aa?Bt!=null?Go(O):m.add(O):Bt!==void 0&&m.has(O)?Go(O):v.protectedKeys[O]=!0}v.prevProp=x,v.prevResolvedValues=Qt,v.isActive&&(f={...f,...Qt}),a&&t.blockInitialAnimation&&(N=!1),N&&(!(A&&L)||V)&&u.push(...D.map(O=>({animation:O,options:{type:w}})))}if(m.size){const g={};if(typeof d.initial!="boolean"){const w=Yr(t,Array.isArray(d.initial)?d.initial[0]:d.initial);w&&w.transition&&(g.transition=w.transition)}m.forEach(w=>{const v=t.getBaseTarget(w),x=t.getValue(w);x&&(x.liveStyle=!0),g[w]=v??null}),u.push({animation:g})}let y=!!u.length;return a&&(d.initial===!1||d.initial===d.animate)&&!t.manuallyAnimateOnMount&&(y=!1),a=!1,y?e(u):Promise.resolve()}function s(l,d){var u;if(r[l].isActive===d)return Promise.resolve();(u=t.variantChildren)==null||u.forEach(m=>{var f;return(f=m.animationState)==null?void 0:f.setActive(l,d)}),r[l].isActive=d;const h=c(l);for(const m in r)r[m].protectedKeys={};return h}return{animateChanges:c,setActive:s,setAnimateFunction:o,getState:()=>r,reset:()=>{r=Cc(),a=!0}}}function dF(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!am(e,t):!1}function or(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Cc(){return{animate:or(!0),whileInView:or(),whileHover:or(),whileTap:or(),whileDrag:or(),whileFocus:or(),exit:or()}}class ar{constructor(e){this.isMounted=!1,this.node=e}update(){}}class hF extends ar{constructor(e){super(e),e.animationState||(e.animationState=lF(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Ma(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:r}=this.node.prevProps||{};e!==r&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let uF=0;class mF extends ar{constructor(){super(...arguments),this.id=uF++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:r}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===a)return;const n=this.node.animationState.setActive("exit",!e);r&&!e&&n.then(()=>{r(this.id)})}mount(){const{register:e,onExitComplete:r}=this.node.presenceContext||{};r&&r(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const pF={animation:{Feature:hF},exit:{Feature:mF}};function Xr(t,e,r,a={passive:!0}){return t.addEventListener(e,r,a),()=>t.removeEventListener(e,r)}function ta(t){return{point:{x:t.pageX,y:t.pageY}}}const fF=t=>e=>Do(e)&&t(e,ta(e));function Dr(t,e,r,a){return Xr(t,e,fF(r),a)}function nm({top:t,left:e,right:r,bottom:a}){return{x:{min:e,max:r},y:{min:t,max:a}}}function kF({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function yF(t,e){if(!e)return t;const r=e({x:t.left,y:t.top}),a=e({x:t.right,y:t.bottom});return{top:r.y,left:r.x,bottom:a.y,right:a.x}}const sm=1e-4,gF=1-sm,wF=1+sm,im=.01,vF=0-im,xF=0+im;function U(t){return t.max-t.min}function bF(t,e,r){return Math.abs(t-e)<=r}function Ac(t,e,r,a=.5){t.origin=a,t.originPoint=E(e.min,e.max,t.origin),t.scale=U(r)/U(e),t.translate=E(r.min,r.max,t.origin)-t.originPoint,(t.scale>=gF&&t.scale<=wF||isNaN(t.scale))&&(t.scale=1),(t.translate>=vF&&t.translate<=xF||isNaN(t.translate))&&(t.translate=0)}function Or(t,e,r,a){Ac(t.x,e.x,r.x,a?a.originX:void 0),Ac(t.y,e.y,r.y,a?a.originY:void 0)}function Lc(t,e,r){t.min=r.min+e.min,t.max=t.min+U(e)}function MF(t,e,r){Lc(t.x,e.x,r.x),Lc(t.y,e.y,r.y)}function jc(t,e,r){t.min=e.min-r.min,t.max=t.min+U(e)}function Ur(t,e,r){jc(t.x,e.x,r.x),jc(t.y,e.y,r.y)}const zc=()=>({translate:0,scale:1,origin:0,originPoint:0}),Mr=()=>({x:zc(),y:zc()}),Wc=()=>({min:0,max:0}),$=()=>({x:Wc(),y:Wc()});function F(t){return[t("x"),t("y")]}function Ta(t){return t===void 0||t===1}function no({scale:t,scaleX:e,scaleY:r}){return!Ta(t)||!Ta(e)||!Ta(r)}function sr(t){return no(t)||cm(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function cm(t){return qc(t.x)||qc(t.y)}function qc(t){return t&&t!=="0%"}function ga(t,e,r){const a=t-r,n=e*a;return r+n}function Ec(t,e,r,a,n){return n!==void 0&&(t=ga(t,n,a)),ga(t,r,a)+e}function so(t,e=0,r=1,a,n){t.min=Ec(t.min,e,r,a,n),t.max=Ec(t.max,e,r,a,n)}function lm(t,{x:e,y:r}){so(t.x,e.translate,e.scale,e.originPoint),so(t.y,r.translate,r.scale,r.originPoint)}const $c=.999999999999,Sc=1.0000000000001;function NF(t,e,r,a=!1){const n=r.length;if(!n)return;e.x=e.y=1;let o,c;for(let s=0;s<n;s++){o=r[s],c=o.projectionDelta;const{visualElement:l}=o.options;l&&l.props.style&&l.props.style.display==="contents"||(a&&o.options.layoutScroll&&o.scroll&&o!==o.root&&Cr(t,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),c&&(e.x*=c.x.scale,e.y*=c.y.scale,lm(t,c)),a&&sr(o.latestValues)&&Cr(t,o.latestValues))}e.x<Sc&&e.x>$c&&(e.x=1),e.y<Sc&&e.y>$c&&(e.y=1)}function Nr(t,e){t.min=t.min+e,t.max=t.max+e}function Vc(t,e,r,a,n=.5){const o=E(t.min,t.max,n);so(t,e,r,o,a)}function Cr(t,e){Vc(t.x,e.x,e.scaleX,e.scale,e.originX),Vc(t.y,e.y,e.scaleY,e.scale,e.originY)}function dm(t,e){return nm(yF(t.getBoundingClientRect(),e))}function CF(t,e,r){const a=dm(t,r),{scroll:n}=e;return n&&(Nr(a.x,n.offset.x),Nr(a.y,n.offset.y)),a}const hm=({current:t})=>t?t.ownerDocument.defaultView:null,Tc=(t,e)=>Math.abs(t-e);function AF(t,e){const r=Tc(t.x,e.x),a=Tc(t.y,e.y);return Math.sqrt(r**2+a**2)}class um{constructor(e,r,{transformPagePoint:a,contextWindow:n=window,dragSnapToOrigin:o=!1,distanceThreshold:c=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=Ra(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,k=AF(m.offset,{x:0,y:0})>=this.distanceThreshold;if(!f&&!k)return;const{point:y}=m,{timestamp:g}=T;this.history.push({...y,timestamp:g});const{onStart:w,onMove:v}=this.handlers;f||(w&&w(this.lastMoveEvent,m),this.startEvent=this.lastMoveEvent),v&&v(this.lastMoveEvent,m)},this.handlePointerMove=(m,f)=>{this.lastMoveEvent=m,this.lastMoveEventInfo=Pa(f,this.transformPagePoint),W.update(this.updatePoint,!0)},this.handlePointerUp=(m,f)=>{this.end();const{onEnd:k,onSessionEnd:y,resumeAnimation:g}=this.handlers;if(this.dragSnapToOrigin&&g&&g(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=Ra(m.type==="pointercancel"?this.lastMoveEventInfo:Pa(f,this.transformPagePoint),this.history);this.startEvent&&k&&k(m,w),y&&y(m,w)},!Do(e))return;this.dragSnapToOrigin=o,this.handlers=r,this.transformPagePoint=a,this.distanceThreshold=c,this.contextWindow=n||window;const s=ta(e),l=Pa(s,this.transformPagePoint),{point:d}=l,{timestamp:h}=T;this.history=[{...d,timestamp:h}];const{onSessionStart:u}=r;u&&u(e,Ra(l,this.history)),this.removeListeners=Qr(Dr(this.contextWindow,"pointermove",this.handlePointerMove),Dr(this.contextWindow,"pointerup",this.handlePointerUp),Dr(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),tr(this.updatePoint)}}function Pa(t,e){return e?{point:e(t.point)}:t}function Pc(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Ra({point:t},e){return{point:t,delta:Pc(t,mm(e)),offset:Pc(t,LF(e)),velocity:jF(e,.1)}}function LF(t){return t[0]}function mm(t){return t[t.length-1]}function jF(t,e){if(t.length<2)return{x:0,y:0};let r=t.length-1,a=null;const n=mm(t);for(;r>=0&&(a=t[r],!(n.timestamp-a.timestamp>H(e)));)r--;if(!a)return{x:0,y:0};const o=X(n.timestamp-a.timestamp);if(o===0)return{x:0,y:0};const c={x:(n.x-a.x)/o,y:(n.y-a.y)/o};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}function zF(t,{min:e,max:r},a){return e!==void 0&&t<e?t=a?E(e,t,a.min):Math.max(t,e):r!==void 0&&t>r&&(t=a?E(r,t,a.max):Math.min(t,r)),t}function Rc(t,e,r){return{min:e!==void 0?t.min+e:void 0,max:r!==void 0?t.max+r-(t.max-t.min):void 0}}function WF(t,{top:e,left:r,bottom:a,right:n}){return{x:Rc(t.x,r,n),y:Rc(t.y,e,a)}}function Dc(t,e){let r=e.min-t.min,a=e.max-t.max;return e.max-e.min<t.max-t.min&&([r,a]=[a,r]),{min:r,max:a}}function qF(t,e){return{x:Dc(t.x,e.x),y:Dc(t.y,e.y)}}function EF(t,e){let r=.5;const a=U(t),n=U(e);return n>a?r=Zr(e.min,e.max-a,t.min):a>n&&(r=Zr(t.min,t.max-n,e.min)),Zt(0,1,r)}function $F(t,e){const r={};return e.min!==void 0&&(r.min=e.min-t.min),e.max!==void 0&&(r.max=e.max-t.min),r}const io=.35;function SF(t=io){return t===!1?t=0:t===!0&&(t=io),{x:Oc(t,"left","right"),y:Oc(t,"top","bottom")}}function Oc(t,e,r){return{min:Uc(t,e),max:Uc(t,r)}}function Uc(t,e){return typeof t=="number"?t:t[e]||0}const VF=new WeakMap;class TF{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=$(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:r=!1,distanceThreshold:a}={}){const{presenceContext:n}=this.visualElement;if(n&&n.isPresent===!1)return;const o=u=>{const{dragSnapToOrigin:m}=this.getProps();m?this.pauseAnimation():this.stopAnimation(),r&&this.snapToCursor(ta(u).point)},c=(u,m)=>{const{drag:f,dragPropagation:k,onDragStart:y}=this.getProps();if(f&&!k&&(this.openDragLock&&this.openDragLock(),this.openDragLock=XB(f),!this.openDragLock))return;this.latestPointerEvent=u,this.latestPanInfo=m,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),F(w=>{let v=this.getAxisMotionValue(w).get()||0;if(K.test(v)){const{projection:x}=this.visualElement;if(x&&x.layout){const C=x.layout.layoutBox[w];C&&(v=U(C)*(parseFloat(v)/100))}}this.originPoint[w]=v}),y&&W.postRender(()=>y(u,m)),ao(this.visualElement,"transform");const{animationState:g}=this.visualElement;g&&g.setActive("whileDrag",!0)},s=(u,m)=>{this.latestPointerEvent=u,this.latestPanInfo=m;const{dragPropagation:f,dragDirectionLock:k,onDirectionLock:y,onDrag:g}=this.getProps();if(!f&&!this.openDragLock)return;const{offset:w}=m;if(k&&this.currentDirection===null){this.currentDirection=PF(w),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",m.point,w),this.updateAxis("y",m.point,w),this.visualElement.render(),g&&g(u,m)},l=(u,m)=>{this.latestPointerEvent=u,this.latestPanInfo=m,this.stop(u,m),this.latestPointerEvent=null,this.latestPanInfo=null},d=()=>F(u=>{var m;return this.getAnimationState(u)==="paused"&&((m=this.getAxisMotionValue(u).animation)==null?void 0:m.play())}),{dragSnapToOrigin:h}=this.getProps();this.panSession=new um(e,{onSessionStart:o,onStart:c,onMove:s,onSessionEnd:l,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:h,distanceThreshold:a,contextWindow:hm(this.visualElement)})}stop(e,r){const a=e||this.latestPointerEvent,n=r||this.latestPanInfo,o=this.isDragging;if(this.cancel(),!o||!n||!a)return;const{velocity:c}=n;this.startAnimation(c);const{onDragEnd:s}=this.getProps();s&&W.postRender(()=>s(a,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:r}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),r&&r.setActive("whileDrag",!1)}updateAxis(e,r,a){const{drag:n}=this.getProps();if(!a||!ia(e,n,this.currentDirection))return;const o=this.getAxisMotionValue(e);let c=this.originPoint[e]+a[e];this.constraints&&this.constraints[e]&&(c=zF(c,this.constraints[e],this.elastic[e])),o.set(c)}resolveConstraints(){var o;const{dragConstraints:e,dragElastic:r}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(o=this.visualElement.projection)==null?void 0:o.layout,n=this.constraints;e&&br(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&a?this.constraints=WF(a.layoutBox,e):this.constraints=!1,this.elastic=SF(r),n!==this.constraints&&a&&this.constraints&&!this.hasMutatedConstraints&&F(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=$F(a.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:r}=this.getProps();if(!e||!br(e))return!1;const a=e.current;Ft(a!==null,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");const{projection:n}=this.visualElement;if(!n||!n.layout)return!1;const o=CF(a,n.root,this.visualElement.getTransformPagePoint());let c=qF(n.layout.layoutBox,o);if(r){const s=r(kF(c));this.hasMutatedConstraints=!!s,s&&(c=nm(s))}return c}startAnimation(e){const{drag:r,dragMomentum:a,dragElastic:n,dragTransition:o,dragSnapToOrigin:c,onDragTransitionEnd:s}=this.getProps(),l=this.constraints||{},d=F(h=>{if(!ia(h,r,this.currentDirection))return;let u=l&&l[h]||{};c&&(u={min:0,max:0});const m=n?200:1e6,f=n?40:1e7,k={type:"inertia",velocity:a?e[h]:0,bounceStiffness:m,bounceDamping:f,timeConstant:750,restDelta:1,restSpeed:10,...o,...u};return this.startAxisValueAnimation(h,k)});return Promise.all(d).then(s)}startAxisValueAnimation(e,r){const a=this.getAxisMotionValue(e);return ao(this.visualElement,e),a.start(Xo(e,a,0,r,this.visualElement,!1))}stopAnimation(){F(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){F(e=>{var r;return(r=this.getAxisMotionValue(e).animation)==null?void 0:r.pause()})}getAnimationState(e){var r;return(r=this.getAxisMotionValue(e).animation)==null?void 0:r.state}getAxisMotionValue(e){const r=`_drag${e.toUpperCase()}`,a=this.visualElement.getProps(),n=a[r];return n||this.visualElement.getValue(e,(a.initial?a.initial[e]:void 0)||0)}snapToCursor(e){F(r=>{const{drag:a}=this.getProps();if(!ia(r,a,this.currentDirection))return;const{projection:n}=this.visualElement,o=this.getAxisMotionValue(r);if(n&&n.layout){const{min:c,max:s}=n.layout.layoutBox[r];o.set(e[r]-E(c,s,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:r}=this.getProps(),{projection:a}=this.visualElement;if(!br(r)||!a||!this.constraints)return;this.stopAnimation();const n={x:0,y:0};F(c=>{const s=this.getAxisMotionValue(c);if(s&&this.constraints!==!1){const l=s.get();n[c]=EF({min:l,max:l},this.constraints[c])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.resolveConstraints(),F(c=>{if(!ia(c,e,null))return;const s=this.getAxisMotionValue(c),{min:l,max:d}=this.constraints[c];s.set(E(l,d,n[c]))})}addListeners(){if(!this.visualElement.current)return;VF.set(this.visualElement,this);const e=this.visualElement.current,r=Dr(e,"pointerdown",l=>{const{drag:d,dragListener:h=!0}=this.getProps();d&&h&&this.start(l)}),a=()=>{const{dragConstraints:l}=this.getProps();br(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:n}=this.visualElement,o=n.addEventListener("measure",a);n&&!n.layout&&(n.root&&n.root.updateScroll(),n.updateLayout()),W.read(a);const c=Xr(window,"resize",()=>this.scalePositionWithinConstraints()),s=n.addEventListener("didUpdate",({delta:l,hasLayoutChanged:d})=>{this.isDragging&&d&&(F(h=>{const u=this.getAxisMotionValue(h);u&&(this.originPoint[h]+=l[h].translate,u.set(u.get()+l[h].translate))}),this.visualElement.render())});return()=>{c(),r(),o(),s&&s()}}getProps(){const e=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:a=!1,dragPropagation:n=!1,dragConstraints:o=!1,dragElastic:c=io,dragMomentum:s=!0}=e;return{...e,drag:r,dragDirectionLock:a,dragPropagation:n,dragConstraints:o,dragElastic:c,dragMomentum:s}}}function ia(t,e,r){return(e===!0||e===t)&&(r===null||r===t)}function PF(t,e=10){let r=null;return Math.abs(t.y)>e?r="y":Math.abs(t.x)>e&&(r="x"),r}class RF extends ar{constructor(e){super(e),this.removeGroupControls=_,this.removeListeners=_,this.controls=new TF(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||_}unmount(){this.removeGroupControls(),this.removeListeners()}}const Bc=t=>(e,r)=>{t&&W.postRender(()=>t(e,r))};class DF extends ar{constructor(){super(...arguments),this.removePointerDownListener=_}onPointerDown(e){this.session=new um(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:hm(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:r,onPan:a,onPanEnd:n}=this.node.getProps();return{onSessionStart:Bc(e),onStart:Bc(r),onMove:a,onEnd:(o,c)=>{delete this.session,n&&W.postRender(()=>n(o,c))}}}mount(){this.removePointerDownListener=Dr(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const ha={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Zc(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Sr={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(M.test(t))t=parseFloat(t);else return t;const r=Zc(t,e.target.x),a=Zc(t,e.target.y);return`${r}% ${a}%`}},OF={correct:(t,{treeScale:e,projectionDelta:r})=>{const a=t,n=rr.parse(t);if(n.length>5)return a;const o=rr.createTransformer(t),c=typeof n[0]!="number"?1:0,s=r.x.scale*e.x,l=r.y.scale*e.y;n[0+c]/=s,n[1+c]/=l;const d=E(s,l,.5);return typeof n[2+c]=="number"&&(n[2+c]/=d),typeof n[3+c]=="number"&&(n[3+c]/=d),o(n)}};let Fc=!1;class UF extends i.Component{componentDidMount(){const{visualElement:e,layoutGroup:r,switchLayoutGroup:a,layoutId:n}=this.props,{projection:o}=e;CZ(BF),o&&(r.group&&r.group.add(o),a&&a.register&&n&&a.register(o),Fc&&o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),ha.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:r,visualElement:a,drag:n,isPresent:o}=this.props,{projection:c}=a;return c&&(c.isPresent=o,Fc=!0,n||e.layoutDependency!==r||r===void 0||e.isPresent!==o?c.willUpdate():this.safeToRemove(),e.isPresent!==o&&(o?c.promote():c.relegate()||W.postRender(()=>{const s=c.getStack();(!s||!s.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Ro.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:r,switchLayoutGroup:a}=this.props,{projection:n}=e;n&&(n.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(n),a&&a.deregister&&a.deregister(n))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function pm(t){const[e,r]=Uu(),a=i.useContext(fo);return p.jsx(UF,{...t,layoutGroup:a,switchLayoutGroup:i.useContext(Iu),isPresent:e,safeToRemove:r})}const BF={borderRadius:{...Sr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Sr,borderTopRightRadius:Sr,borderBottomLeftRadius:Sr,borderBottomRightRadius:Sr,boxShadow:OF};function ZF(t,e,r){const a=R(t)?t:Ar(t);return a.start(Xo("",a,e,r)),a.animation}const FF=(t,e)=>t.depth-e.depth;class _F{constructor(){this.children=[],this.isDirty=!1}add(e){go(this.children,e),this.isDirty=!0}remove(e){wo(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(FF),this.isDirty=!1,this.children.forEach(e)}}function IF(t,e){const r=B.now(),a=({timestamp:n})=>{const o=n-r;o>=e&&(tr(a),t(o-e))};return W.setup(a,!0),()=>tr(a)}const fm=["TopLeft","TopRight","BottomLeft","BottomRight"],HF=fm.length,_c=t=>typeof t=="string"?parseFloat(t):t,Ic=t=>typeof t=="number"||M.test(t);function YF(t,e,r,a,n,o){n?(t.opacity=E(0,r.opacity??1,XF(a)),t.opacityExit=E(e.opacity??1,0,KF(a))):o&&(t.opacity=E(e.opacity??1,r.opacity??1,a));for(let c=0;c<HF;c++){const s=`border${fm[c]}Radius`;let l=Hc(e,s),d=Hc(r,s);if(l===void 0&&d===void 0)continue;l||(l=0),d||(d=0),l===0||d===0||Ic(l)===Ic(d)?(t[s]=Math.max(E(_c(l),_c(d),a),0),(K.test(d)||K.test(l))&&(t[s]+="%")):t[s]=d}(e.rotate||r.rotate)&&(t.rotate=E(e.rotate||0,r.rotate||0,a))}function Hc(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const XF=km(0,.5,cu),KF=km(.5,.95,_);function km(t,e,r){return a=>a<t?0:a>e?1:r(Zr(t,e,a))}function Yc(t,e){t.min=e.min,t.max=e.max}function Z(t,e){Yc(t.x,e.x),Yc(t.y,e.y)}function Xc(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function Kc(t,e,r,a,n){return t-=e,t=ga(t,1/r,a),n!==void 0&&(t=ga(t,1/n,a)),t}function GF(t,e=0,r=1,a=.5,n,o=t,c=t){if(K.test(e)&&(e=parseFloat(e),e=E(c.min,c.max,e/100)-c.min),typeof e!="number")return;let s=E(o.min,o.max,a);t===o&&(s-=e),t.min=Kc(t.min,e,r,s,n),t.max=Kc(t.max,e,r,s,n)}function Gc(t,e,[r,a,n],o,c){GF(t,e[r],e[a],e[n],e.scale,o,c)}const QF=["x","scaleX","originX"],JF=["y","scaleY","originY"];function Qc(t,e,r,a){Gc(t.x,e,QF,r?r.x:void 0,a?a.x:void 0),Gc(t.y,e,JF,r?r.y:void 0,a?a.y:void 0)}function Jc(t){return t.translate===0&&t.scale===1}function ym(t){return Jc(t.x)&&Jc(t.y)}function el(t,e){return t.min===e.min&&t.max===e.max}function e_(t,e){return el(t.x,e.x)&&el(t.y,e.y)}function tl(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function gm(t,e){return tl(t.x,e.x)&&tl(t.y,e.y)}function rl(t){return U(t.x)/U(t.y)}function al(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class t_{constructor(){this.members=[]}add(e){go(this.members,e),e.scheduleRender()}remove(e){if(wo(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(e){const r=this.members.findIndex(n=>e===n);if(r===0)return!1;let a;for(let n=r;n>=0;n--){const o=this.members[n];if(o.isPresent!==!1){a=o;break}}return a?(this.promote(a),!0):!1}promote(e,r){const a=this.lead;if(e!==a&&(this.prevLead=a,this.lead=e,e.show(),a)){a.instance&&a.scheduleRender(),e.scheduleRender(),e.resumeFrom=a,r&&(e.resumeFrom.preserveOpacity=!0),a.snapshot&&(e.snapshot=a.snapshot,e.snapshot.latestValues=a.animationValues||a.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:n}=e.options;n===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:r,resumingFrom:a}=e;r.onExitComplete&&r.onExitComplete(),a&&a.options.onExitComplete&&a.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function r_(t,e,r){let a="";const n=t.x.translate/e.x,o=t.y.translate/e.y,c=(r==null?void 0:r.z)||0;if((n||o||c)&&(a=`translate3d(${n}px, ${o}px, ${c}px) `),(e.x!==1||e.y!==1)&&(a+=`scale(${1/e.x}, ${1/e.y}) `),r){const{transformPerspective:d,rotate:h,rotateX:u,rotateY:m,skewX:f,skewY:k}=r;d&&(a=`perspective(${d}px) ${a}`),h&&(a+=`rotate(${h}deg) `),u&&(a+=`rotateX(${u}deg) `),m&&(a+=`rotateY(${m}deg) `),f&&(a+=`skewX(${f}deg) `),k&&(a+=`skewY(${k}deg) `)}const s=t.x.scale*e.x,l=t.y.scale*e.y;return(s!==1||l!==1)&&(a+=`scale(${s}, ${l})`),a||"none"}const Da=["","X","Y","Z"],a_=1e3;let o_=0;function Oa(t,e,r,a){const{latestValues:n}=e;n[t]&&(r[t]=n[t],e.setStaticValue(t,0),a&&(a[t]=0))}function wm(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const r=tm(e);if(window.MotionHasOptimisedAnimation(r,"transform")){const{layout:n,layoutId:o}=t.options;window.MotionCancelOptimisedAnimation(r,"transform",W,!(n||o))}const{parent:a}=t;a&&!a.hasCheckedOptimisedAppear&&wm(a)}function vm({attachResizeListener:t,defaultParent:e,measureScroll:r,checkIsScrollRoot:a,resetTransform:n}){return class{constructor(c={},s=e==null?void 0:e()){this.id=o_++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(i_),this.nodes.forEach(h_),this.nodes.forEach(u_),this.nodes.forEach(c_)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=s?s.root||s:this,this.path=s?[...s.path,s]:[],this.parent=s,this.depth=s?s.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new _F)}addEventListener(c,s){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new xo),this.eventHandlers.get(c).add(s)}notifyListeners(c,...s){const l=this.eventHandlers.get(c);l&&l.notify(...s)}hasListeners(c){return this.eventHandlers.has(c)}mount(c){if(this.instance)return;this.isSVG=Ou(c)&&!tZ(c),this.instance=c;const{layoutId:s,layout:l,visualElement:d}=this.options;if(d&&!d.current&&d.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||s)&&(this.isLayoutDirty=!0),t){let h,u=0;const m=()=>this.root.updateBlockedByResize=!1;W.read(()=>{u=window.innerWidth}),t(c,()=>{const f=window.innerWidth;f!==u&&(u=f,this.root.updateBlockedByResize=!0,h&&h(),h=IF(m,250),ha.hasAnimatedSinceResize&&(ha.hasAnimatedSinceResize=!1,this.nodes.forEach(sl)))})}s&&this.root.registerSharedNode(s,this),this.options.animate!==!1&&d&&(s||l)&&this.addEventListener("didUpdate",({delta:h,hasLayoutChanged:u,hasRelativeLayoutChanged:m,layout:f})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const k=this.options.transition||d.getDefaultTransition()||y_,{onLayoutAnimationStart:y,onLayoutAnimationComplete:g}=d.getProps(),w=!this.targetLayout||!gm(this.targetLayout,f),v=!u&&m;if(this.options.layoutRoot||this.resumeFrom||v||u&&(w||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const x={...To(k,"layout"),onPlay:y,onComplete:g};(d.shouldReduceMotion||this.options.layoutRoot)&&(x.delay=0,x.type=!1),this.startAnimation(x),this.setAnimationOrigin(h,v)}else u||sl(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=f})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),tr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(m_),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&wm(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let h=0;h<this.path.length;h++){const u=this.path[h];u.shouldResetTransform=!0,u.updateScroll("snapshot"),u.options.layoutRoot&&u.willUpdate(!1)}const{layoutId:s,layout:l}=this.options;if(s===void 0&&!l)return;const d=this.getTransformTemplate();this.prevTransformTemplateValue=d?d(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(ol);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(nl);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(d_),this.nodes.forEach(n_),this.nodes.forEach(s_)):this.nodes.forEach(nl),this.clearAllSnapshots();const s=B.now();T.delta=Zt(0,1e3/60,s-T.timestamp),T.timestamp=s,T.isProcessing=!0,Wa.update.process(T),Wa.preRender.process(T),Wa.render.process(T),T.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ro.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(l_),this.sharedNodes.forEach(p_)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,W.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){W.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!U(this.snapshot.measuredBox.x)&&!U(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutCorrected=$(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:s}=this.options;s&&s.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let s=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(s=!1),s&&this.instance){const l=a(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:l,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!n)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,s=this.projectionDelta&&!ym(this.projectionDelta),l=this.getTransformTemplate(),d=l?l(this.latestValues,""):void 0,h=d!==this.prevTransformTemplateValue;c&&this.instance&&(s||sr(this.latestValues)||h)&&(n(this.instance,d),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const s=this.measurePageBox();let l=this.removeElementScroll(s);return c&&(l=this.removeTransform(l)),g_(l),{animationId:this.root.animationId,measuredBox:s,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var d;const{visualElement:c}=this.options;if(!c)return $();const s=c.measureViewportBox();if(!(((d=this.scroll)==null?void 0:d.wasRoot)||this.path.some(w_))){const{scroll:h}=this.root;h&&(Nr(s.x,h.offset.x),Nr(s.y,h.offset.y))}return s}removeElementScroll(c){var l;const s=$();if(Z(s,c),(l=this.scroll)!=null&&l.wasRoot)return s;for(let d=0;d<this.path.length;d++){const h=this.path[d],{scroll:u,options:m}=h;h!==this.root&&u&&m.layoutScroll&&(u.wasRoot&&Z(s,c),Nr(s.x,u.offset.x),Nr(s.y,u.offset.y))}return s}applyTransform(c,s=!1){const l=$();Z(l,c);for(let d=0;d<this.path.length;d++){const h=this.path[d];!s&&h.options.layoutScroll&&h.scroll&&h!==h.root&&Cr(l,{x:-h.scroll.offset.x,y:-h.scroll.offset.y}),sr(h.latestValues)&&Cr(l,h.latestValues)}return sr(this.latestValues)&&Cr(l,this.latestValues),l}removeTransform(c){const s=$();Z(s,c);for(let l=0;l<this.path.length;l++){const d=this.path[l];if(!d.instance||!sr(d.latestValues))continue;no(d.latestValues)&&d.updateSnapshot();const h=$(),u=d.measurePageBox();Z(h,u),Qc(s,d.latestValues,d.snapshot?d.snapshot.layoutBox:void 0,h)}return sr(this.latestValues)&&Qc(s,this.latestValues),s}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==T.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var m;const s=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=s.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=s.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=s.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==s;if(!(c||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(m=this.parent)!=null&&m.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:h,layoutId:u}=this.options;if(!(!this.layout||!(h||u))){if(this.resolvedRelativeTargetAt=T.timestamp,!this.targetDelta&&!this.relativeTarget){const f=this.getClosestProjectingParent();f&&f.layout&&this.animationProgress!==1?(this.relativeParent=f,this.forceRelativeParentToResolveTarget(),this.relativeTarget=$(),this.relativeTargetOrigin=$(),Ur(this.relativeTargetOrigin,this.layout.layoutBox,f.layout.layoutBox),Z(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=$(),this.targetWithTransforms=$()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),MF(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Z(this.target,this.layout.layoutBox),lm(this.target,this.targetDelta)):Z(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const f=this.getClosestProjectingParent();f&&!!f.resumingFrom==!!this.resumingFrom&&!f.options.layoutScroll&&f.target&&this.animationProgress!==1?(this.relativeParent=f,this.forceRelativeParentToResolveTarget(),this.relativeTarget=$(),this.relativeTargetOrigin=$(),Ur(this.relativeTargetOrigin,this.target,f.target),Z(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||no(this.parent.latestValues)||cm(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var k;const c=this.getLead(),s=!!this.resumingFrom||this!==c;let l=!0;if((this.isProjectionDirty||(k=this.parent)!=null&&k.isProjectionDirty)&&(l=!1),s&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===T.timestamp&&(l=!1),l)return;const{layout:d,layoutId:h}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||h))return;Z(this.layoutCorrected,this.layout.layoutBox);const u=this.treeScale.x,m=this.treeScale.y;NF(this.layoutCorrected,this.treeScale,this.path,s),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=$());const{target:f}=c;if(!f){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Xc(this.prevProjectionDelta.x,this.projectionDelta.x),Xc(this.prevProjectionDelta.y,this.projectionDelta.y)),Or(this.projectionDelta,this.layoutCorrected,f,this.latestValues),(this.treeScale.x!==u||this.treeScale.y!==m||!al(this.projectionDelta.x,this.prevProjectionDelta.x)||!al(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",f))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var s;if((s=this.options.visualElement)==null||s.scheduleRender(),c){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Mr(),this.projectionDelta=Mr(),this.projectionDeltaWithTransform=Mr()}setAnimationOrigin(c,s=!1){const l=this.snapshot,d=l?l.latestValues:{},h={...this.latestValues},u=Mr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!s;const m=$(),f=l?l.source:void 0,k=this.layout?this.layout.source:void 0,y=f!==k,g=this.getStack(),w=!g||g.members.length<=1,v=!!(y&&!w&&this.options.crossfade===!0&&!this.path.some(k_));this.animationProgress=0;let x;this.mixTargetDelta=C=>{const b=C/1e3;il(u.x,c.x,b),il(u.y,c.y,b),this.setTargetDelta(u),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ur(m,this.layout.layoutBox,this.relativeParent.layout.layoutBox),f_(this.relativeTarget,this.relativeTargetOrigin,m,b),x&&e_(this.relativeTarget,x)&&(this.isProjectionDirty=!1),x||(x=$()),Z(x,this.relativeTarget)),y&&(this.animationValues=h,YF(h,d,this.latestValues,b,v,w)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=b},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){var s,l,d;this.notifyListeners("animationStart"),(s=this.currentAnimation)==null||s.stop(),(d=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||d.stop(),this.pendingAnimation&&(tr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=W.update(()=>{ha.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Ar(0)),this.currentAnimation=ZF(this.motionValue,[0,1e3],{...c,velocity:0,isSync:!0,onUpdate:h=>{this.mixTargetDelta(h),c.onUpdate&&c.onUpdate(h)},onStop:()=>{},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(a_),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:s,target:l,layout:d,latestValues:h}=c;if(!(!s||!l||!d)){if(this!==c&&this.layout&&d&&xm(this.options.animationType,this.layout.layoutBox,d.layoutBox)){l=this.target||$();const u=U(this.layout.layoutBox.x);l.x.min=c.target.x.min,l.x.max=l.x.min+u;const m=U(this.layout.layoutBox.y);l.y.min=c.target.y.min,l.y.max=l.y.min+m}Z(s,l),Cr(s,h),Or(this.projectionDeltaWithTransform,this.layoutCorrected,s,h)}}registerSharedNode(c,s){this.sharedNodes.has(c)||this.sharedNodes.set(c,new t_),this.sharedNodes.get(c).add(s);const d=s.options.initialPromotionConfig;s.promote({transition:d?d.transition:void 0,preserveFollowOpacity:d&&d.shouldPreserveFollowOpacity?d.shouldPreserveFollowOpacity(s):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var s;const{layoutId:c}=this.options;return c?((s=this.getStack())==null?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:c}=this.options;return c?(s=this.getStack())==null?void 0:s.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:s,preserveFollowOpacity:l}={}){const d=this.getStack();d&&d.promote(this,l),c&&(this.projectionDelta=void 0,this.needsReset=!0),s&&this.setOptions({transition:s})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let s=!1;const{latestValues:l}=c;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(s=!0),!s)return;const d={};l.z&&Oa("z",c,d,this.animationValues);for(let h=0;h<Da.length;h++)Oa(`rotate${Da[h]}`,c,d,this.animationValues),Oa(`skew${Da[h]}`,c,d,this.animationValues);c.render();for(const h in d)c.setStaticValue(h,d[h]),this.animationValues&&(this.animationValues[h]=d[h]);c.scheduleRender()}applyProjectionStyles(c,s){if(!this.instance||this.isSVG)return;if(!this.isVisible){c.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,c.visibility="",c.opacity="",c.pointerEvents=da(s==null?void 0:s.pointerEvents)||"",c.transform=l?l(this.latestValues,""):"none";return}const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){this.options.layoutId&&(c.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,c.pointerEvents=da(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!sr(this.latestValues)&&(c.transform=l?l({},""):"none",this.hasProjected=!1);return}c.visibility="";const h=d.animationValues||d.latestValues;this.applyTransformsToTarget();let u=r_(this.projectionDeltaWithTransform,this.treeScale,h);l&&(u=l(h,u)),c.transform=u;const{x:m,y:f}=this.projectionDelta;c.transformOrigin=`${m.origin*100}% ${f.origin*100}% 0`,d.animationValues?c.opacity=d===this?h.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:h.opacityExit:c.opacity=d===this?h.opacity!==void 0?h.opacity:"":h.opacityExit!==void 0?h.opacityExit:0;for(const k in Hr){if(h[k]===void 0)continue;const{correct:y,applyTo:g,isCSSVariable:w}=Hr[k],v=u==="none"?h[k]:y(h[k],d);if(g){const x=g.length;for(let C=0;C<x;C++)c[g[C]]=v}else w?this.options.visualElement.renderState.vars[k]=v:c[k]=v}this.options.layoutId&&(c.pointerEvents=d===this?da(s==null?void 0:s.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var s;return(s=c.currentAnimation)==null?void 0:s.stop()}),this.root.nodes.forEach(ol),this.root.sharedNodes.clear()}}}function n_(t){t.updateLayout()}function s_(t){var r;const e=((r=t.resumeFrom)==null?void 0:r.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:n}=t.layout,{animationType:o}=t.options,c=e.source!==t.layout.source;o==="size"?F(u=>{const m=c?e.measuredBox[u]:e.layoutBox[u],f=U(m);m.min=a[u].min,m.max=m.min+f}):xm(o,e.layoutBox,a)&&F(u=>{const m=c?e.measuredBox[u]:e.layoutBox[u],f=U(a[u]);m.max=m.min+f,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[u].max=t.relativeTarget[u].min+f)});const s=Mr();Or(s,a,e.layoutBox);const l=Mr();c?Or(l,t.applyTransform(n,!0),e.measuredBox):Or(l,a,e.layoutBox);const d=!ym(s);let h=!1;if(!t.resumeFrom){const u=t.getClosestProjectingParent();if(u&&!u.resumeFrom){const{snapshot:m,layout:f}=u;if(m&&f){const k=$();Ur(k,e.layoutBox,m.layoutBox);const y=$();Ur(y,a,f.layoutBox),gm(k,y)||(h=!0),u.options.layoutRoot&&(t.relativeTarget=y,t.relativeTargetOrigin=k,t.relativeParent=u)}}}t.notifyListeners("didUpdate",{layout:a,snapshot:e,delta:l,layoutDelta:s,hasLayoutChanged:d,hasRelativeLayoutChanged:h})}else if(t.isLead()){const{onExitComplete:a}=t.options;a&&a()}t.options.transition=void 0}function i_(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function c_(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function l_(t){t.clearSnapshot()}function ol(t){t.clearMeasurements()}function nl(t){t.isLayoutDirty=!1}function d_(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function sl(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function h_(t){t.resolveTargetDelta()}function u_(t){t.calcProjection()}function m_(t){t.resetSkewAndRotation()}function p_(t){t.removeLeadSnapshot()}function il(t,e,r){t.translate=E(e.translate,0,r),t.scale=E(e.scale,1,r),t.origin=e.origin,t.originPoint=e.originPoint}function cl(t,e,r,a){t.min=E(e.min,r.min,a),t.max=E(e.max,r.max,a)}function f_(t,e,r,a){cl(t.x,e.x,r.x,a),cl(t.y,e.y,r.y,a)}function k_(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const y_={duration:.45,ease:[.4,0,.1,1]},ll=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),dl=ll("applewebkit/")&&!ll("chrome/")?Math.round:_;function hl(t){t.min=dl(t.min),t.max=dl(t.max)}function g_(t){hl(t.x),hl(t.y)}function xm(t,e,r){return t==="position"||t==="preserve-aspect"&&!bF(rl(e),rl(r),.2)}function w_(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const v_=vm({attachResizeListener:(t,e)=>Xr(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Ua={current:void 0},bm=vm({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Ua.current){const t=new v_({});t.mount(window),t.setOptions({layoutScroll:!0}),Ua.current=t}return Ua.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),x_={pan:{Feature:DF},drag:{Feature:RF,ProjectionNode:bm,MeasureLayout:pm}};function ul(t,e,r){const{props:a}=t;t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",r==="Start");const n="onHover"+r,o=a[n];o&&W.postRender(()=>o(e,ta(e)))}class b_ extends ar{mount(){const{current:e}=this.node;e&&(this.unmount=KB(e,(r,a)=>(ul(this.node,a,"Start"),n=>ul(this.node,n,"End"))))}unmount(){}}class M_ extends ar{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Qr(Xr(this.node.current,"focus",()=>this.onFocus()),Xr(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function ml(t,e,r){const{props:a}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&a.whileTap&&t.animationState.setActive("whileTap",r==="Start");const n="onTap"+(r==="End"?"":r),o=a[n];o&&W.postRender(()=>o(e,ta(e)))}class N_ extends ar{mount(){const{current:e}=this.node;e&&(this.unmount=eZ(e,(r,a)=>(ml(this.node,a,"Start"),(n,{success:o})=>ml(this.node,n,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const co=new WeakMap,Ba=new WeakMap,C_=t=>{const e=co.get(t.target);e&&e(t)},A_=t=>{t.forEach(C_)};function L_({root:t,...e}){const r=t||document;Ba.has(r)||Ba.set(r,{});const a=Ba.get(r),n=JSON.stringify(e);return a[n]||(a[n]=new IntersectionObserver(A_,{root:t,...e})),a[n]}function j_(t,e,r){const a=L_(e);return co.set(t,r),a.observe(t),()=>{co.delete(t),a.unobserve(t)}}const z_={some:0,all:1};class W_ extends ar{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:r,margin:a,amount:n="some",once:o}=e,c={root:r?r.current:void 0,rootMargin:a,threshold:typeof n=="number"?n:z_[n]},s=l=>{const{isIntersecting:d}=l;if(this.isInView===d||(this.isInView=d,o&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:h,onViewportLeave:u}=this.node.getProps(),m=d?h:u;m&&m(l)};return j_(this.node.current,c,s)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:r}=this.node;["amount","margin","root"].some(q_(e,r))&&this.startObserver()}unmount(){}}function q_({viewport:t={}},{viewport:e={}}={}){return r=>t[r]!==e[r]}const E_={inView:{Feature:W_},tap:{Feature:N_},focus:{Feature:M_},hover:{Feature:b_}},$_={layout:{ProjectionNode:bm,MeasureLayout:pm}},lo={current:null},Mm={current:!1};function S_(){if(Mm.current=!0,!!yo)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>lo.current=t.matches;t.addEventListener("change",e),e()}else lo.current=!1}const V_=new WeakMap;function T_(t,e,r){for(const a in e){const n=e[a],o=r[a];if(R(n))t.addValue(a,n);else if(R(o))t.addValue(a,Ar(n,{owner:t}));else if(o!==n)if(t.hasValue(a)){const c=t.getValue(a);c.liveStyle===!0?c.jump(n):c.hasAnimated||c.set(n)}else{const c=t.getStaticValue(a);t.addValue(a,Ar(c!==void 0?c:n,{owner:t}))}}for(const a in r)e[a]===void 0&&t.removeValue(a);return e}const pl=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class P_{scrapeMotionValuesFromProps(e,r,a){return{}}constructor({parent:e,props:r,presenceContext:a,reducedMotionConfig:n,blockInitialAnimation:o,visualState:c},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=So,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const m=B.now();this.renderScheduledAt<m&&(this.renderScheduledAt=m,W.render(this.render,!1,!0))};const{latestValues:l,renderState:d}=c;this.latestValues=l,this.baseTarget={...l},this.initialValues=r.initial?{...l}:{},this.renderState=d,this.parent=e,this.props=r,this.presenceContext=a,this.depth=e?e.depth+1:0,this.reducedMotionConfig=n,this.options=s,this.blockInitialAnimation=!!o,this.isControllingVariants=Na(r),this.isVariantNode=Fu(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:h,...u}=this.scrapeMotionValuesFromProps(r,{},this);for(const m in u){const f=u[m];l[m]!==void 0&&R(f)&&f.set(l[m],!1)}}mount(e){this.current=e,V_.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,a)=>this.bindToMotionValue(a,r)),Mm.current||S_(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:lo.current,process.env.NODE_ENV!=="production"&&bo(this.shouldReduceMotion!==!0,"You have Reduced Motion enabled on your device. Animations may not appear as expected."),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),tr(this.notifyUpdate),tr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const r=this.features[e];r&&(r.unmount(),r.isMounted=!1)}this.current=null}bindToMotionValue(e,r){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const a=qr.has(e);a&&this.onBindTransform&&this.onBindTransform();const n=r.on("change",s=>{this.latestValues[e]=s,this.props.onUpdate&&W.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0)}),o=r.on("renderRequest",this.scheduleRender);let c;window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,e,r)),this.valueSubscriptions.set(e,()=>{n(),o(),c&&c(),r.owner&&r.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Lr){const r=Lr[e];if(!r)continue;const{isEnabled:a,Feature:n}=r;if(!this.features[e]&&n&&a(this.props)&&(this.features[e]=new n(this)),this.features[e]){const o=this.features[e];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):$()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,r){this.latestValues[e]=r}update(e,r){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let a=0;a<pl.length;a++){const n=pl[a];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);const o="on"+n,c=e[o];c&&(this.propEventSubscriptions[n]=this.on(n,c))}this.prevMotionValues=T_(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(e),()=>r.variantChildren.delete(e)}addValue(e,r){const a=this.values.get(e);r!==a&&(a&&this.removeValue(e),this.bindToMotionValue(e,r),this.values.set(e,r),this.latestValues[e]=r.get())}removeValue(e){this.values.delete(e);const r=this.valueSubscriptions.get(e);r&&(r(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,r){if(this.props.values&&this.props.values[e])return this.props.values[e];let a=this.values.get(e);return a===void 0&&r!==void 0&&(a=Ar(r===null?void 0:r,{owner:this}),this.addValue(e,a)),a}readValue(e,r){let a=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return a!=null&&(typeof a=="string"&&(Q1(a)||eu(a))?a=parseFloat(a):!aZ(a)&&rr.test(r)&&(a=Vu(e,r)),this.setBaseTarget(e,R(a)?a.get():a)),R(a)?a.get():a}setBaseTarget(e,r){this.baseTarget[e]=r}getBaseTarget(e){var o;const{initial:r}=this.props;let a;if(typeof r=="string"||typeof r=="object"){const c=Ho(this.props,r,(o=this.presenceContext)==null?void 0:o.custom);c&&(a=c[e])}if(r&&a!==void 0)return a;const n=this.getBaseTargetFromProps(this.props,e);return n!==void 0&&!R(n)?n:this.initialValues[e]!==void 0&&a===void 0?void 0:this.baseTarget[e]}on(e,r){return this.events[e]||(this.events[e]=new xo),this.events[e].add(r)}notify(e,...r){this.events[e]&&this.events[e].notify(...r)}}class Nm extends P_{constructor(){super(...arguments),this.KeyframeResolver=_B}sortInstanceNodePosition(e,r){return e.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(e,r){return e.style?e.style[r]:void 0}removeValueFromRenderState(e,{vars:r,style:a}){delete r[e],delete a[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;R(e)&&(this.childSubscription=e.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}}function Cm(t,{style:e,vars:r},a,n){const o=t.style;let c;for(c in e)o[c]=e[c];n==null||n.applyProjectionStyles(o,a);for(c in r)o.setProperty(c,r[c])}function R_(t){return window.getComputedStyle(t)}class D_ extends Nm{constructor(){super(...arguments),this.type="html",this.renderInstance=Cm}readValueFromInstance(e,r){var a;if(qr.has(r))return(a=this.projection)!=null&&a.isProjecting?Ka(r):lB(e,r);{const n=R_(e),o=(Co(r)?n.getPropertyValue(r):n[r])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:r}){return dm(e,r)}build(e,r,a){Fo(e,r,a.transformTemplate)}scrapeMotionValuesFromProps(e,r,a){return Yo(e,r,a)}}const Am=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function O_(t,e,r,a){Cm(t,e,void 0,a);for(const n in e.attrs)t.setAttribute(Am.has(n)?n:Zo(n),e.attrs[n])}class U_ extends Nm{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=$}getBaseTargetFromProps(e,r){return e[r]}readValueFromInstance(e,r){if(qr.has(r)){const a=Su(r);return a&&a.default||0}return r=Am.has(r)?r:Zo(r),e.getAttribute(r)}scrapeMotionValuesFromProps(e,r,a){return em(e,r,a)}build(e,r,a){Ku(e,r,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(e,r,a,n){O_(e,r,a,n)}mount(e){this.isSVGTag=Qu(e.tagName),super.mount(e)}}const B_=(t,e)=>Io(t)?new U_(e):new D_(e,{allowProjection:t!==i.Fragment}),Z_=BZ({...pF,...E_,...x_,...$_},B_),F_=mZ(Z_);function __({selectedDate:t,onChange:e,maxDate:r}){const[a,n]=i.useState(new Date),[o,c]=i.useState(!1),s=()=>p.jsxs("div",{className:"flex justify-between items-center mb-2 px-2 text-primary-foreground dark:text-primary-foreground-dark",children:[p.jsx("button",{type:"button",onClick:()=>n(iU(a)),className:"p-1 hover:bg-[var(--color-primary-hover)] rounded",children:"←"}),p.jsx("div",{className:"font-semibold text-lg",children:aa(a,"MMMM yyyy")}),p.jsx("button",{type:"button",onClick:()=>n(H1(a,1)),className:"p-1 hover:bg-[var(--color-primary-hover)] rounded",children:"→"})]}),l=()=>{const h=[],u=mr(a);for(let m=0;m<7;m++)h.push(p.jsx("div",{className:"text-center text-sm font-medium text-[var(--color-primary-foreground)]",children:aa(ja(u,m),"EEE")},m));return p.jsx("div",{className:"grid grid-cols-7",children:h})},d=()=>{const h=nO(a),u=Yi(h),m=mr(h),f=ja(Yi(u),6),k=[];let y=[],g=m;for(;g<=f;){for(let w=0;w<7;w++){const v=g,x=Hi(g,new Date),C=t&&Hi(g,t),b=sU(g,a),A=r&&nU(g,r);y.push(p.jsx("div",{className:`text-center text-sm p-2 rounded-lg transition text-primary-foreground dark:text-primary-foreground-dark 
              ${C?"bg-secondary dark:bg-secondary-dark":""}
              ${b?"text-[var(--color-primary-foreground)]":"text-gray-400"}
              ${x&&!C?"border border-blue-400":""}
              ${A?"text-gray-400 cursor-not-allowed":"cursor-pointer hover:bg-blue-100"}
            `,onClick:()=>{A||(e(v),c(!1))},children:aa(g,"d")},g.toISOString())),g=ja(g,1)}k.push(p.jsx("div",{className:"grid grid-cols-7",children:y},g.toISOString())),y=[]}return p.jsx("div",{children:k})};return p.jsxs("div",{className:"relative flex flex-row justify-start w-full mt-5 mb-5 ",children:[p.jsx("button",{type:"button",onClick:()=>c(!o),className:"cursor-pointer px-4 py-2 border rounded-lg bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:bg-[var(--color-primary-hover)] shadow-sm text-sm",children:t?aa(t,"dd/MM/yyyy"):"Selecionar data"}),p.jsx(cZ,{children:o&&p.jsxs(F_.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},className:"absolute mt-2 z-10 w-80 p-4 border rounded-lg shadow-lg bg-primary dark:bg-primary-dark text-primary-foreground dark:text-primary-foreground-dark",children:[s(),l(),d()]})})]})}function I_({items:t,contentComponent:e,className:r,classNameAccordion:a}){const[n,o]=i.useState(null);return p.jsx("div",{className:r,children:t.map(({id:c,title:s,data:l})=>p.jsx(_1,{title:s,isOpen:n===c,onToggle:()=>o(n===c?null:c),className:a,children:e(l)},c))})}exports.Accordion=_1;exports.AccordionGroup=I_;exports.ActivityIndicator=HD;exports.Button=Br;exports.CustomLink=ZD;exports.DatePicker=__;exports.ExpandableTable=KD;exports.FormCheckbox=Em;exports.FormInput=kl;exports.FormInputArray=QD;exports.FormInputDate=GD;exports.FormInputPassword=$m;exports.FormLabel=Gr;exports.FormSelect=yl;exports.FormSelectArray=XD;exports.FormSlider=Tm;exports.FormSwitch=Pm;exports.FormTextArea=Sm;exports.MessageError=Vm;exports.ModalConfirmation=Dm;exports.ModalDefault=gl;exports.ModalExpandImage=YD;exports.Pagination=d0;exports.Progress=Rm;exports.SnackBar=_D;exports.Table=h0;exports.TableAction=u0;exports.Tabs=m0;exports.ThemeToggle=ID;exports.Tooltip=ir;exports.VerticalTabs=BD;exports.getBorderColor=Kr;
