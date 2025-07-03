"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("react/jsx-runtime"),t=require("tailwind-merge"),g={primary:`
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
  `},m=`
  w-full min-h-[48px] min-w-[140px] py-3 px-4 mt-5 
  rounded-lg
  transition shadow-theme-xs cursor-pointer
`;function x({className:a,children:d,variant:o="secondary",...c}){return r.jsx("button",{className:t.twMerge(m,g[o],a),...c,children:d})}const h={sm:{box:"w-4 h-4",icon:"w-2.5 h-2.5",label:"text-xs"},md:{box:"w-5 h-5",icon:"w-3 h-3",label:"text-sm"},lg:{box:"w-6 h-6",icon:"w-3.5 h-3.5",label:"text-base"}};function p({checked:a,onChange:d,label:o,classNameLabel:c="",classNameInput:l="",size:n="md"}){const e=h[n];return r.jsxs("label",{className:`inline-flex items-center cursor-pointer ${c}`,children:[r.jsx("input",{type:"checkbox",checked:a,onChange:d,className:"peer hidden"}),r.jsx("div",{className:t.twMerge(`
          flex items-center justify-center rounded border 
          ${e.box}
          border-[var(--color-muted)]
          peer-checked:bg-[var(--color-secondary)]
          peer-checked:border-[var(--color-secondary)]
          transition-colors
          dark:border-[var(--color-muted-dark)]
          dark:peer-checked:bg-[var(--color-secondary-dark)]
          dark:peer-checked:border-[var(--color-secondary-dark)]
        `,l),children:r.jsx("svg",{className:t.twMerge(`
            ${e.icon} hidden peer-checked:block 
            text-[var(--color-secondary-foreground)] 
            dark:text-[var(--color-secondary-foreground-dark)]
          `),viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M9 16.2l-3.5-3.6L4 14l5 5 12-12-1.5-1.4z"})})}),o&&r.jsx("span",{className:t.twMerge(`
            ml-2 ${e.label}
            text-[var(--color-foreground)] 
            dark:text-[var(--color-foreground-dark)]
          `),children:o})]})}function f({label:a,error:d=!1,success:o=!1,disabled:c=!1,messageError:l="Campo obrigatório",isValidating:n,icon:e,className:v="",onChange:u,...i}){const s=d&&n,b=()=>s?"border-[var(--color-error)] focus:border-[var(--color-error)]":o?"border-[var(--color-success)] focus:border-[var(--color-success)]":"border-[var(--color-secondary)] focus:border-[var(--color-secondary)] dark:border-[var(--color-muted-dark)] dark:focus:border-[var(--color-secondary-dark)]",k=s?"text-[var(--color-error)]":o?"text-[var(--color-success)]":"text-[var(--color-muted)] dark:text-[var(--color-muted-dark)]";return r.jsxs("div",{className:"w-full mt-5",children:[a&&r.jsx("label",{htmlFor:i.id,className:"block mb-1 text-sm font-medium text-[var(--color-primary-foreground)] dark:text-[var(--color-foreground-dark)]",children:a}),r.jsxs("div",{className:"relative",children:[e&&r.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:r.jsx(e,{className:`h-5 w-5 ${k}`})}),r.jsx("input",{disabled:c,onChange:u,className:t.twMerge(`block w-full rounded-md py-3 px-4 transition duration-200 border focus:outline-none appearance-none transition duration-200
             bg-[var(--color-background)] text-[var(--color-foreground)] placeholder-[var(--color-muted)] 
             dark:bg-[var(--color-background-dark)] dark:text-[var(--color-foreground-dark)] dark:placeholder-[var(--color-muted-dark)]
             ${e?"pl-10":""}
             ${b()}
             ${c?"opacity-60 cursor-not-allowed":""}
            `,v),...i})]}),s&&l&&r.jsx("p",{className:"mt-2 text-sm text-[var(--color-error)]",children:l})]})}exports.Button=x;exports.FormCheckbox=p;exports.FormInput=f;
