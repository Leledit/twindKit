import { jsx as f, jsxs as C, Fragment as P0 } from "react/jsx-runtime";
import { twMerge as q } from "tailwind-merge";
import * as va from "react";
import D0, { useState as O, useEffect as Y, forwardRef as u, createElement as d, useRef as te, createContext as x, useLayoutEffect as O0, useId as wa, useContext as Z, useInsertionEffect as Ml, useMemo as gr, useCallback as Cl, Children as U0, isValidElement as E0, Fragment as Al, Component as B0 } from "react";
import { createPortal as Ll } from "react-dom";
const Z0 = {
  primary: `
    bg-[var(--color-primary)] text-[var(--color-primary-foreground)]
    hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-active)]
    dark:bg-[var(--color-primary-dark)] dark:hover:bg-[var(--color-primary-hover-dark)] dark:active:bg-[var(--color-primary-active-dark)]
    dark:text-[var(--color-primary-foreground-dark)]
  `,
  secondary: `
    bg-[var(--color-secondary)] text-[var(--color-secondary-active)]
    hover:bg-[var(--color-secondary-hover)] active:bg-[var(--color-secondary-active)]
    dark:bg-[var(--color-secondary-dark)] dark:hover:bg-[var(--color-secondary-hover-dark)] dark:active:bg-[var(--color-secondary-active-dark)]
    dark:text-[var(--color-secondary-foreground-dark)]
  `,
  cancel: `
    bg-[var(--color-cancel)] text-[var(--color-cancel-foreground)]
    hover:bg-[var(--color-cancel-hover)] active:bg-[var(--color-cancel-active)]
    dark:bg-[var(--color-cancel-dark)] dark:hover:bg-[var(--color-cancel-hover-dark)] dark:active:bg-[var(--color-cancel-active-dark)]
    dark:text-[var(--color-cancel-foreground-dark)]
  `,
  danger: `
    bg-red-600 text-white
    hover:bg-red-700 active:bg-red-800
    dark:bg-red-500 dark:hover:bg-red-600 dark:active:bg-red-700
  `
}, R0 = `
  w-full min-h-[48px] min-w-[140px] py-3 px-4 mt-5 
  rounded-lg
  transition shadow-theme-xs cursor-pointer
`;
function go({
  className: t,
  children: e,
  variant: r = "secondary",
  ...o
}) {
  return /* @__PURE__ */ f(
    "button",
    {
      className: q(R0, Z0[r], t),
      ...o,
      children: e
    }
  );
}
const _0 = {
  sm: {
    box: "w-4 h-4",
    icon: "w-2.5 h-2.5",
    label: "text-xs"
  },
  md: {
    box: "w-5 h-5",
    icon: "w-3 h-3",
    label: "text-sm"
  },
  lg: {
    box: "w-6 h-6",
    icon: "w-3.5 h-3.5",
    label: "text-base"
  }
};
function IF({
  checked: t,
  onChange: e,
  label: r,
  classNameLabel: o = "",
  classNameInput: s = "",
  size: a = "md"
}) {
  const i = _0[a];
  return /* @__PURE__ */ C(
    "label",
    {
      className: `inline-flex items-center cursor-pointer ${o}`,
      children: [
        /* @__PURE__ */ f(
          "input",
          {
            type: "checkbox",
            checked: t,
            onChange: e,
            className: "peer hidden"
          }
        ),
        /* @__PURE__ */ f(
          "div",
          {
            className: q(
              `
          flex items-center justify-center rounded border 
          ${i.box}
          border-[var(--color-muted)]
          peer-checked:bg-[var(--color-secondary-foreground)]
          peer-checked:border-[var(--color-secondary-foreground)]
          transition-colors
          dark:border-[var(--color-muted-dark)]
          dark:peer-checked:bg-[var(--color-secondary-foreground-dark)]
          dark:peer-checked:border-[var(--color-secondary-foreground-dark)]
        `,
              s
            ),
            children: /* @__PURE__ */ f(
              "svg",
              {
                className: q(`
            ${i.icon} hidden peer-checked:block 
            text-[var(--color-secondary-foreground)] 
            dark:text-[var(--color-secondary-foreground-dark)]
          `),
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ f(
                  "path",
                  {
                    fill: "currentColor",
                    d: "M9 16.2l-3.5-3.6L4 14l5 5 12-12-1.5-1.4z"
                  }
                )
              }
            )
          }
        ),
        r && /* @__PURE__ */ f(
          "span",
          {
            className: q(`
            ml-2 ${i.label}
            text-[var(--color-primary-foreground)] 
            dark:text-[var(--color-primary-foreground-dark)]
          `),
            children: r
          }
        )
      ]
    }
  );
}
function Ao(t, e) {
  return t ? "border-[var(--color-error)] focus:border-[var(--color-error)]" : e ? "border-[var(--color-success)] focus:border-[var(--color-success)]" : "border-[var(--color-secondary)] focus:border-[var(--color-secondary)] dark:border-[var(--color-muted-dark)] dark:focus:border-[var(--color-secondary-dark)]";
}
function Lo({ htmlFor: t, children: e, className: r }) {
  return /* @__PURE__ */ f(
    "label",
    {
      htmlFor: t,
      className: q(
        `block mb-1 text-sm font-medium 
         text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)]`,
        r
      ),
      children: e
    }
  );
}
function F0({
  label: t,
  error: e = !1,
  success: r = !1,
  disabled: o = !1,
  messageError: s = "Campo obrigatório",
  isValidating: a,
  icon: i,
  className: n = "",
  onChange: c,
  ...l
}) {
  const h = e && a;
  return /* @__PURE__ */ C("div", { className: "w-full mt-5", children: [
    t && /* @__PURE__ */ f(Lo, { children: t }),
    /* @__PURE__ */ C("div", { className: "relative", children: [
      i && /* @__PURE__ */ f("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ f(i, { className: `h-5 w-5 ${h ? "text-[var(--color-error)]" : r ? "text-[var(--color-success)]" : "text-[var(--color-muted)] dark:text-[var(--color-muted-dark)]"}` }) }),
      /* @__PURE__ */ f(
        "input",
        {
          disabled: o,
          onChange: c,
          className: q(
            `block w-full rounded-md py-3 px-4 transition duration-200 border focus:outline-none appearance-none transition duration-200
             bg-[var(--color-primary)] text-[var(--color-primary-foreground)] placeholder-[var(--color-muted)] 
             dark:bg-[var(--color-primary-dark)] dark:text-[var(--color-primary-foreground-dark)] dark:placeholder-[var(--color-muted-dark)]
            `,
            i ? "pl-10" : "",
            Ao(h, r),
            o ? "opacity-60 cursor-not-allowed" : "",
            n
          ),
          ...l
        }
      )
    ] }),
    h && s && /* @__PURE__ */ f("p", { className: "mt-2 text-sm text-[var(--color-error)]", children: s })
  ] });
}
function HF({
  label: t,
  error: e = !1,
  success: r = !1,
  disabled: o = !1,
  messageError: s = "Campo obrigatório",
  isValidating: a,
  onChange: i,
  ...n
}) {
  const [c, l] = O(!1), h = e && a;
  return /* @__PURE__ */ C("div", { className: "w-full mt-5", children: [
    t && /* @__PURE__ */ f(
      "label",
      {
        htmlFor: n.id,
        className: "block mb-1 text-sm font-medium text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)]",
        children: t
      }
    ),
    /* @__PURE__ */ C("div", { className: "relative", children: [
      /* @__PURE__ */ f("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ f(
        "svg",
        {
          className: "h-5 w-5 text-[var(--color-muted)] dark:text-[var(--color-muted-dark)]",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          children: /* @__PURE__ */ f(
            "path",
            {
              fillRule: "evenodd",
              d: "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",
              clipRule: "evenodd"
            }
          )
        }
      ) }),
      /* @__PURE__ */ f(
        "input",
        {
          type: c ? "text" : "password",
          autoComplete: "current-password",
          disabled: o,
          onChange: i,
          placeholder: "••••••••",
          className: q(
            `block w-full rounded-md py-3 px-4 transition duration-200
             bg-[var(--color-primary)] text-[var(--color-primary-foreground)] placeholder-[var(--color-muted)] 
             dark:bg-[var(--color-primary-dark)] dark:text-[var(--color-primary-foreground-dark)] dark:placeholder-[var(--color-muted-dark)]
             pl-10 pr-10 border focus:outline-none appearance-none transition duration-20
            `,
            Ao(h, r),
            o ? "opacity-60 cursor-not-allowed" : ""
          ),
          ...n
        }
      ),
      /* @__PURE__ */ f(
        "button",
        {
          type: "button",
          onClick: () => l((p) => !p),
          className: "absolute inset-y-0 right-0 pr-3 flex items-center text-[var(--color-muted)] hover:text-[var(--color-secondary)] dark:text-[var(--color-muted-dark)] dark:hover:text-[var(--color-secondary-dark)] transition cursor-pointer",
          tabIndex: -1,
          children: c ? /* @__PURE__ */ C(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "h-5 w-5",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: [
                /* @__PURE__ */ f("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" }),
                /* @__PURE__ */ f("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" })
              ]
            }
          ) : /* @__PURE__ */ f(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "h-5 w-5",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: /* @__PURE__ */ f("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.978 9.978 0 012.276-3.592M6.1 6.1a9.993 9.993 0 0111.8 0m2.063 2.062a9.978 9.978 0 012.276 3.592c-1.274 4.057-5.065 7-9.542 7-.682 0-1.348-.07-1.992-.2M3 3l18 18" })
            }
          )
        }
      )
    ] }),
    h && s && /* @__PURE__ */ f("p", { className: "mt-2 text-sm text-[var(--color-error)] dark:text-[var(--color-error-dark)]", children: s })
  ] });
}
function I0({
  label: t,
  error: e = !1,
  success: r = !1,
  disabled: o = !1,
  messageError: s = "Campo obrigatório",
  isValidating: a,
  onChange: i,
  options: n,
  placeholder: c = "Selecione uma opção",
  className: l,
  ...h
}) {
  const p = e && a;
  return /* @__PURE__ */ C("div", { className: "w-full mt-5 mb-3", children: [
    t && /* @__PURE__ */ f(Lo, { children: t }),
    /* @__PURE__ */ C("div", { className: "relative", children: [
      /* @__PURE__ */ C(
        "select",
        {
          ...h,
          onChange: i,
          disabled: o,
          className: q(
            `block w-full rounded-md py-3 px-4 pr-10 transition duration-200 appearance-none
             bg-[var(--color-primary)] text-[var(--color-primary-foreground)] placeholder-[var(--color-muted)]
             dark:bg-[var(--color-primary-dark)] dark:text-[var(--color-primary-foreground-dark)] dark:placeholder-[var(--color-muted-dark)]
             transition duration-200 border focus:outline-none appearance-none transition duration-200
            `,
            Ao(p, r),
            o ? "opacity-60 cursor-not-allowed" : "",
            l
          ),
          children: [
            c && /* @__PURE__ */ f("option", { value: "", children: c }),
            n.map((m) => /* @__PURE__ */ f("option", { value: m.value, children: m.label }, m.value))
          ]
        }
      ),
      /* @__PURE__ */ f("div", { className: "pointer-events-none absolute inset-y-0 right-3 flex items-center text-[var(--color-muted)] dark:text-[var(--color-muted-dark)]", children: /* @__PURE__ */ f(
        "svg",
        {
          className: "h-4 w-4",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 20 20",
          stroke: "currentColor",
          children: /* @__PURE__ */ f(
            "path",
            {
              d: "M7 7l3 3 3-3",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          )
        }
      ) }),
      p && s && /* @__PURE__ */ f("p", { className: "mt-2 text-sm text-[var(--color-error)] dark:text-[var(--color-error-dark)]", children: s })
    ] })
  ] });
}
function YF({
  className: t,
  label: e,
  error: r = !1,
  success: o = !1,
  disabled: s = !1,
  messageError: a = "Campo obrigatório",
  isValidating: i,
  onChange: n,
  ...c
}) {
  const l = r && i;
  return /* @__PURE__ */ C("div", { className: "w-full mb-3 mt-5", children: [
    e && /* @__PURE__ */ f(Lo, { className: "mb-2", children: e }),
    /* @__PURE__ */ C("div", { className: "relative", children: [
      /* @__PURE__ */ f(
        "textarea",
        {
          ...c,
          onChange: n,
          disabled: s,
          className: q(
            `border focus:outline-none appearance-none transition duration-200 rounded-md
             h-[50px] w-full resize-none appearance-none px-4 py-2.5 shadow-sm transition-colors duration-150
             bg-[var(--color-primary)] text-[var(--color-primary-foreground)] placeholder-[var(--color-muted)]
             dark:bg-[var(--color-primary-dark)] dark:text-[var(--color-primary-foreground-dark)] dark:placeholder-[var(--color-muted-dark)]
             focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)/10]
            `,
            Ao(l, o),
            s ? "opacity-60 cursor-not-allowed" : "",
            t
          )
        }
      ),
      l && a && /* @__PURE__ */ f("p", { className: "text-sm text-[var(--color-error)] dark:text-[var(--color-error-dark)] mt-2", children: a })
    ] })
  ] });
}
function XF({ messageError: t }) {
  return t ? /* @__PURE__ */ f(
    "p",
    {
      className: `
        mt-3 mb-3 p-2 min-h-[30px] w-full rounded-[var(--tw-borderRadius-md)] rounded-md
        bg-[var(--color-error)] text-[var(--color-primary-foreground-dark)]
        text-[14px] leading-[30px] text-center
        dark:bg-[var(--color-error-dark)] dark:text-[var(--color-primary-foreground-dark)]
      `,
      children: t
    }
  ) : null;
}
function KF({
  value: t,
  onChange: e,
  label: r,
  isValidating: o,
  error: s,
  className: a
}) {
  const i = (n) => {
    const c = Number(n.target.value);
    e(c);
  };
  return /* @__PURE__ */ C("div", { className: q("mb-2 w-full mt-4", a), children: [
    /* @__PURE__ */ C("div", { className: "flex items-center", children: [
      /* @__PURE__ */ f(
        "p",
        {
          className: `
            text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)] mr-4
          `,
          children: r
        }
      ),
      /* @__PURE__ */ f(
        "input",
        {
          type: "range",
          min: 1,
          max: 10,
          step: 1,
          value: t,
          onChange: i,
          className: "w-3/5 accent-[var(--color-secondary)] dark:accent-[var(--color-secondary-dark)]"
        }
      ),
      /* @__PURE__ */ f(
        "p",
        {
          className: `
            ml-4 w-9 h-9 flex items-center justify-center rounded-full text-sm
            bg-[var(--color-secondary)] text-[var(--color-primary-foreground)] 
            dark:bg-[var(--color-secondary-dark)] dark:text-[var(--color-secondary-foreground-dark)] `,
          children: t
        }
      )
    ] }),
    o && s && /* @__PURE__ */ f("p", { className: "text-sm mt-2 ml-2 text-[var(--color-error)] dark:text-[var(--color-error-dark)]", children: "Este campo é obrigatório" })
  ] });
}
function GF({
  isChecked: t,
  onChange: e,
  label: r,
  isValidating: o,
  error: s,
  className: a
}) {
  return /* @__PURE__ */ C("div", { className: q("mb-2 w-full mt-5", a), children: [
    /* @__PURE__ */ C("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ f("p", { className: "text-base text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)]", children: r }),
      /* @__PURE__ */ f(
        "button",
        {
          type: "button",
          onClick: e,
          className: q(
            "relative w-11 h-6 transition-colors duration-200 ease-in-out rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2",
            t ? "bg-[var(--color-secondary)] focus:ring-[var(--color-secondary)]" : "bg-[var(--color-muted)] dark:bg-[var(--color-muted-dark)] focus:ring-[var(--color-muted)]"
          ),
          children: /* @__PURE__ */ f(
            "span",
            {
              className: q(
                "absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200",
                t ? "translate-x-5" : "translate-x-0"
              )
            }
          )
        }
      )
    ] }),
    o && s && /* @__PURE__ */ f("p", { className: "text-sm mt-2 ml-2 text-[var(--color-error)] dark:text-[var(--color-error-dark)]", children: "Este campo é obrigatório" })
  ] });
}
function QF({ loading: t, className: e }) {
  return t ? /* @__PURE__ */ f(
    "div",
    {
      className: `
        absolute top-0 left-0 flex items-center justify-center h-full w-full z-[1000]
        backdrop-blur-sm dardk:bg-[rgba(0,0,0,0.5)] bg-[rgba(255, 255, 255, 0.5)] border border-[var(--color-primary)/20]
        ${e}
      `,
      children: /* @__PURE__ */ f(
        "div",
        {
          className: `
          w-12 h-12 border-4
          border-[var(--color-secondary)/30]
          border-t-[var(--color-secondary)]
          rounded-full animate-spin
          text-secondary-active
        `
        }
      )
    }
  ) : null;
}
function H0({
  isOpen: t,
  onClose: e,
  children: r,
  className: o = "",
  isFullscreen: s = !1,
  title: a
}) {
  return Y(() => {
    const i = (n) => {
      n.key === "Escape" && e();
    };
    return t && document.addEventListener("keydown", i), () => {
      document.removeEventListener("keydown", i);
    };
  }, [t, e]), Y(() => (t ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset", () => {
    document.body.style.overflow = "unset";
  }), [t]), t ? /* @__PURE__ */ C("div", { className: "fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-6 sm:py-12", children: [
    !s && /* @__PURE__ */ f(
      "div",
      {
        className: "fixed inset-0 bg-black/40 backdrop-blur-sm",
        onClick: e
      }
    ),
    /* @__PURE__ */ C(
      "div",
      {
        onClick: (i) => i.stopPropagation(),
        className: q(
          o,
          `border border-[#454545] relative z-50 w-full 
           bg-[var(--color-primary)] text-[var(--color-primary-foreground)] 
           dark:bg-[var(--color-primary-dark)] dark:text-[var(--color-primary-foreground-dark)] shadow-xl transition-all`,
          s ? "h-full" : "max-w-lg rounded-xl p-6"
        ),
        children: [
          /* @__PURE__ */ C("div", { children: [
            /* @__PURE__ */ f("p", { className: "mt-[-10px] text-[20px] text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)]", children: a }),
            /* @__PURE__ */ C(
              "button",
              {
                onClick: e,
                className: "absolute top-4 right-3 text-[var(--color-muted)] hover:text-[var(--color-secondary)] cursor-pointer",
                children: [
                  /* @__PURE__ */ f("span", { className: "sr-only", children: "Close modal" }),
                  /* @__PURE__ */ f(
                    "svg",
                    {
                      className: "w-6 h-6",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: 2,
                      viewBox: "0 0 24 24",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: /* @__PURE__ */ f(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          d: "M6 18L18 6M6 6l12 12"
                        }
                      )
                    }
                  )
                ]
              }
            )
          ] }),
          /* @__PURE__ */ f("div", { className: "mt-4", children: r })
        ]
      }
    )
  ] }) : null;
}
function JF({
  isOpen: t,
  onClose: e,
  performAction: r,
  description: o,
  title: s,
  className: a = "",
  isFullscreen: i = !1
}) {
  return /* @__PURE__ */ C(
    H0,
    {
      isOpen: t,
      onClose: e,
      title: s,
      className: a,
      isFullscreen: i,
      children: [
        /* @__PURE__ */ f("h3", { className: "mt-5 mb-2 text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)]", children: o }),
        /* @__PURE__ */ C("div", { className: "flex flex-row justify-end", children: [
          /* @__PURE__ */ f(
            go,
            {
              type: "button",
              className: "max-w-[100px] mr-2",
              onClick: e,
              variant: "secondary",
              children: "Cancelar"
            }
          ),
          /* @__PURE__ */ f(
            go,
            {
              type: "button",
              className: "max-w-[100px]",
              onClick: r,
              variant: "danger",
              children: "Confirmar"
            }
          )
        ] })
      ]
    }
  );
}
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y0 = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), X0 = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), is = (t) => {
  const e = X0(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, zl = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), K0 = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var G0 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q0 = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...G0,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: zl("lucide", s),
      ...!a && !K0(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ae = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(Q0, {
      ref: a,
      iconNode: e,
      className: zl(
        `lucide-${Y0(is(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = is(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J0 = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
], ep = ae("check-check", J0);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tp = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], rp = ae("chevron-down", tp);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const op = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], ap = ae("chevron-up", op);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sp = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
], np = ae("chevrons-left", sp);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ip = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
], cp = ae("chevrons-right", ip);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lp = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], hp = ae("info", lp);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dp = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], up = ae("link", dp);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pp = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
], mp = ae("pencil", pp);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fp = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
], kp = ae("trash", fp);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yp = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], xa = ae("x", yp);
function eI({
  totalData: t,
  currentPage: e,
  setCurrentPage: r,
  elementsPerPage: o = 20
}) {
  const s = Math.ceil(t / o);
  if (t === 0 || t < o) return null;
  const a = (i) => {
    r(i);
  };
  return /* @__PURE__ */ f("div", { className: "w-full flex flex-col justify-center items-center mb-10 mt-5", children: /* @__PURE__ */ C("div", { className: "max-w-[400px] w-full flex flex-row justify-around items-center", children: [
    /* @__PURE__ */ f(
      np,
      {
        className: "text-[var(--color-secondary)] cursor-pointer",
        onClick: () => a(1)
      }
    ),
    Array.from({ length: s }, (i, n) => /* @__PURE__ */ f(
      "button",
      {
        onClick: () => a(n + 1),
        className: q(
          "flex justify-center items-center w-[40px] h-[40px] text-sm rounded-full transition-colors duration-200 cursor-pointer",
          e === n + 1 ? `bg-[var(--color-secondary-active)] text-[var(--color-primary-foreground)] 
                   dark:bg-[var(--color-secondary-active-dark)] dark:text-[var(--color-primary-foreground-dark)]` : "text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)] hover:bg-[var(--color-muted-dark)/10]"
        ),
        children: n + 1
      },
      n + 1
    )),
    /* @__PURE__ */ f(
      cp,
      {
        className: "text-[var(--color-secondary)] cursor-pointer",
        onClick: () => a(s)
      }
    )
  ] }) });
}
function tI({
  data: t,
  columns: e,
  rowActions: r
}) {
  return /* @__PURE__ */ f("div", { className: "shadow-sm border border-[var(--color-muted)] rounded-md text-[var(--color-primary-foreground)] overflow-x-auto w-full", children: /* @__PURE__ */ C("table", { className: "min-w-[800px] table-auto w-full", children: [
    /* @__PURE__ */ f("thead", { children: /* @__PURE__ */ C("tr", { className: "border-b border-[var(--color-muted)] bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)]", children: [
      e.map((o) => /* @__PURE__ */ f(
        "th",
        {
          className: "px-4 py-2 text-[16px] text-left font-semibold text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)]",
          children: o.title
        },
        o.key
      )),
      r && /* @__PURE__ */ f("th", { className: "px-4 py-2 text-center" })
    ] }) }),
    /* @__PURE__ */ f("tbody", { children: t.length === 0 ? /* @__PURE__ */ f("tr", { children: /* @__PURE__ */ f(
      "td",
      {
        colSpan: e.length + (r ? 1 : 0),
        className: "px-4 py-4 text-center text-[var(--color-muted)]",
        children: "Nenhum registro encontrado!"
      }
    ) }) : t.map((o, s) => /* @__PURE__ */ C(
      "tr",
      {
        className: s === t.length - 1 ? "" : "border-b border-[var(--color-muted)]",
        children: [
          e.map((a) => {
            const i = o[a.key];
            return /* @__PURE__ */ f(
              "td",
              {
                className: "px-4 py-2 text-[14px] font-normal text-left text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)]",
                children: a.render ? a.render(i, o) : i
              },
              String(a.key)
            );
          }),
          r && /* @__PURE__ */ f("td", { className: "px-4 py-2 whitespace-nowrap w-[5%]", children: r(o) })
        ]
      },
      s
    )) })
  ] }) });
}
function Lr({
  text: t,
  children: e,
  className: r,
  coordTop: o,
  coordLeft: s
}) {
  const [a, i] = O(!1), [n, c] = O({
    top: 0,
    left: 0
  }), l = te(null);
  return Y(() => {
    if (a && l.current) {
      const h = l.current.getBoundingClientRect();
      c({
        top: h.top + window.scrollY + (o ?? 0),
        left: h.left + h.width / 2 + window.scrollX + (s ?? 0)
      });
    }
  }, [s, o, a]), /* @__PURE__ */ C(
    "button",
    {
      className: q("relative inline-block", r),
      onMouseEnter: () => i(!0),
      onMouseLeave: () => i(!1),
      ref: l,
      children: [
        e,
        a && Ll(
          /* @__PURE__ */ f(
            "div",
            {
              style: {
                top: n.top - 10,
                left: n.left,
                transform: "translate(-50%, -100%)",
                position: "absolute",
                zIndex: 9999
              },
              className: q(
                "px-3 py-1 text-sm border rounded shadow-lg whitespace-nowrap",
                `bg-[var(--color-primary-foreground)] text-[var(--color-primary)] 
               dark:bg-[var(--color-primary-foreground-dark)] dark:text-[var(--color-primary-dark)] border-[var(--color-muted)]`
              ),
              children: t
            }
          ),
          document.body
        )
      ]
    }
  );
}
function rI({
  type: t,
  action: e,
  textTooltip: r,
  className: o
}) {
  const s = "w-[18px] h-[18px] cursor-pointer text-[var(--color-secondary)] dark:text-[var(--color-secondary-dark)] mx-1";
  return {
    edit: /* @__PURE__ */ f(Lr, { text: r, children: /* @__PURE__ */ f(mp, { className: q(s, o), onClick: e }) }, "tableActionEdit"),
    delete: /* @__PURE__ */ f(Lr, { text: r, children: /* @__PURE__ */ f(kp, { className: q(s, o), onClick: e }) }, "tableActionDelete"),
    link: /* @__PURE__ */ f(Lr, { text: r, children: /* @__PURE__ */ f(up, { className: q(s, o), onClick: e }) }, "tableActionLink"),
    info: /* @__PURE__ */ f(Lr, { text: r, children: /* @__PURE__ */ f(hp, { className: q(s, o), onClick: e }) }, "tableActionInfo"),
    check: /* @__PURE__ */ f(Lr, { text: r, children: /* @__PURE__ */ f(ep, { className: q(s, o), onClick: e }) }, "tableActionCheck")
  }[t];
}
function oI({
  tabs: t,
  defaultTabKey: e
}) {
  var a, i;
  const [r, o] = O(
    e || ((a = t[0]) == null ? void 0 : a.key)
  );
  Y(() => {
    !t.some((c) => c.key === r) && t.length > 0 && o(t[0].key);
  }, [t, r]);
  const s = (i = t.find((n) => n.key === r)) == null ? void 0 : i.content;
  return /* @__PURE__ */ C("div", { className: "overflow-x-auto p-4 sm:p-6", children: [
    /* @__PURE__ */ f("div", { className: "border border-[var(--color-border)] rounded-t-xl bg-[var(--color-surface)]", children: /* @__PURE__ */ f("nav", { className: "flex overflow-x-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white h-[50px]", children: t.map((n) => {
      const c = r === n.key;
      return /* @__PURE__ */ f(
        "button",
        {
          onClick: () => o(n.key),
          className: q(
            "inline-flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer rounded-md",
            c ? "bg-[var(--color-primary)] text-[var(--color-on-primary)] shadow" : "bg-transparent text-[var(--color-text)] hover:text-[var(--color-primary)]"
          ),
          children: n.label
        },
        n.key
      );
    }) }) }),
    /* @__PURE__ */ f("div", { className: "rounded-b-xl border border-t-0 border-[var(--color-border)] p-6 pt-4 bg-[var(--color-surface)] text-[var(--color-text)]", children: s })
  ] });
}
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gp = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), vp = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), cs = (t) => {
  const e = vp(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Wl = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), wp = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var xp = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bp = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...xp,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Wl("lucide", s),
      ...!a && !wp(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const se = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(bp, {
      ref: a,
      iconNode: e,
      className: Wl(
        `lucide-${gp(cs(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = cs(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Np = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
se("check-check", Np);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mp = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
se("chevron-down", Mp);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cp = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
se("chevron-up", Cp);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ap = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
se("chevrons-left", Ap);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lp = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
se("chevrons-right", Lp);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zp = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
se("info", zp);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wp = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
se("link", Wp);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jp = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
se("pencil", jp);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qp = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
se("trash", qp);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $p = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
se("x", $p);
function Sp({
  text: t,
  children: e,
  className: r,
  coordTop: o,
  coordLeft: s
}) {
  const [a, i] = O(!1), [n, c] = O({
    top: 0,
    left: 0
  }), l = te(null);
  return Y(() => {
    if (a && l.current) {
      const h = l.current.getBoundingClientRect();
      c({
        top: h.top + window.scrollY + (o ?? 0),
        left: h.left + h.width / 2 + window.scrollX + (s ?? 0)
      });
    }
  }, [s, o, a]), /* @__PURE__ */ C(
    "button",
    {
      className: q("relative inline-block", r),
      onMouseEnter: () => i(!0),
      onMouseLeave: () => i(!1),
      ref: l,
      children: [
        e,
        a && Ll(
          /* @__PURE__ */ f(
            "div",
            {
              style: {
                top: n.top - 10,
                left: n.left,
                transform: "translate(-50%, -100%)",
                position: "absolute",
                zIndex: 9999
              },
              className: q(
                "px-3 py-1 text-sm border rounded shadow-lg whitespace-nowrap",
                `bg-[var(--color-primary-foreground)] text-[var(--color-primary)] 
               dark:bg-[var(--color-primary-foreground-dark)] dark:text-[var(--color-primary-dark)] border-[var(--color-muted)]`
              ),
              children: t
            }
          ),
          document.body
        )
      ]
    }
  );
}
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vp = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Tp = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), ls = (t) => {
  const e = Tp(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, jl = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), Pp = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Dp = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Op = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...Dp,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: jl("lucide", s),
      ...!a && !Pp(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ne = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(Op, {
      ref: a,
      iconNode: e,
      className: jl(
        `lucide-${Vp(ls(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = ls(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Up = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
ne("check-check", Up);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ep = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
ne("chevron-down", Ep);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bp = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
ne("chevron-up", Bp);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zp = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
ne("chevrons-left", Zp);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rp = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
ne("chevrons-right", Rp);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _p = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
ne("info", _p);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fp = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
ne("link", Fp);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ip = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
ne("pencil", Ip);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hp = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
ne("trash", Hp);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yp = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
ne("x", Yp);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xp = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Kp = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), hs = (t) => {
  const e = Kp(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, ql = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), Gp = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Qp = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jp = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...Qp,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: ql("lucide", s),
      ...!a && !Gp(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ie = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(Jp, {
      ref: a,
      iconNode: e,
      className: ql(
        `lucide-${Xp(hs(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = hs(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const em = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
ie("check-check", em);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tm = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
ie("chevron-down", tm);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rm = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
ie("chevron-up", rm);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const om = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
ie("chevrons-left", om);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const am = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
ie("chevrons-right", am);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sm = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
ie("info", sm);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nm = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
ie("link", nm);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const im = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
ie("pencil", im);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cm = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
ie("trash", cm);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lm = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
ie("x", lm);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hm = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), dm = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), ds = (t) => {
  const e = dm(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, $l = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), um = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var pm = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mm = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...pm,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: $l("lucide", s),
      ...!a && !um(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ce = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(mm, {
      ref: a,
      iconNode: e,
      className: $l(
        `lucide-${hm(ds(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = ds(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fm = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
ce("check-check", fm);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const km = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
ce("chevron-down", km);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ym = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
ce("chevron-up", ym);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gm = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
ce("chevrons-left", gm);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vm = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
ce("chevrons-right", vm);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wm = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
ce("info", wm);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xm = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
ce("link", xm);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bm = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
ce("pencil", bm);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nm = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
ce("trash", Nm);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mm = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
ce("x", Mm);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cm = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Am = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), us = (t) => {
  const e = Am(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Sl = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), Lm = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var zm = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wm = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...zm,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Sl("lucide", s),
      ...!a && !Lm(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const le = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(Wm, {
      ref: a,
      iconNode: e,
      className: Sl(
        `lucide-${Cm(us(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = us(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jm = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
le("check-check", jm);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qm = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
le("chevron-down", qm);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $m = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
le("chevron-up", $m);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sm = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
le("chevrons-left", Sm);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vm = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
le("chevrons-right", Vm);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tm = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
le("info", Tm);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pm = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
le("link", Pm);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dm = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
le("pencil", Dm);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Om = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
le("trash", Om);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Um = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
le("x", Um);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Em = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Bm = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), ps = (t) => {
  const e = Bm(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Vl = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), Zm = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Rm = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _m = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...Rm,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Vl("lucide", s),
      ...!a && !Zm(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const he = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(_m, {
      ref: a,
      iconNode: e,
      className: Vl(
        `lucide-${Em(ps(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = ps(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fm = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
he("check-check", Fm);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Im = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
he("chevron-down", Im);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hm = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
he("chevron-up", Hm);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ym = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
he("chevrons-left", Ym);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xm = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
he("chevrons-right", Xm);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Km = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
he("info", Km);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gm = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
he("link", Gm);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qm = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
he("pencil", Qm);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jm = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
he("trash", Jm);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const e2 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
he("x", e2);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t2 = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), r2 = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), ms = (t) => {
  const e = r2(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Tl = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), o2 = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var a2 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s2 = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...a2,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Tl("lucide", s),
      ...!a && !o2(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const de = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(s2, {
      ref: a,
      iconNode: e,
      className: Tl(
        `lucide-${t2(ms(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = ms(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n2 = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
de("check-check", n2);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i2 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
de("chevron-down", i2);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c2 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
de("chevron-up", c2);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l2 = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
de("chevrons-left", l2);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h2 = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
de("chevrons-right", h2);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
de("info", d2);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u2 = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
de("link", u2);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p2 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
de("pencil", p2);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m2 = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
de("trash", m2);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f2 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
de("x", f2);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k2 = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), y2 = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), fs = (t) => {
  const e = y2(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Pl = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), g2 = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var v2 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w2 = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...v2,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Pl("lucide", s),
      ...!a && !g2(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ue = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(w2, {
      ref: a,
      iconNode: e,
      className: Pl(
        `lucide-${k2(fs(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = fs(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x2 = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
ue("check-check", x2);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b2 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
ue("chevron-down", b2);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N2 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
ue("chevron-up", N2);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M2 = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
ue("chevrons-left", M2);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C2 = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
ue("chevrons-right", C2);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
ue("info", A2);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L2 = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
ue("link", L2);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z2 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
ue("pencil", z2);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W2 = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
ue("trash", W2);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j2 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
ue("x", j2);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q2 = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), $2 = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), ks = (t) => {
  const e = $2(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Dl = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), S2 = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var V2 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T2 = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...V2,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Dl("lucide", s),
      ...!a && !S2(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pe = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(T2, {
      ref: a,
      iconNode: e,
      className: Dl(
        `lucide-${q2(ks(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = ks(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P2 = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
pe("check-check", P2);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D2 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
pe("chevron-down", D2);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O2 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
pe("chevron-up", O2);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U2 = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
pe("chevrons-left", U2);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E2 = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
pe("chevrons-right", E2);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
pe("info", B2);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z2 = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
pe("link", Z2);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R2 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
pe("pencil", R2);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _2 = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
pe("trash", _2);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F2 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
pe("x", F2);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I2 = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), H2 = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), ys = (t) => {
  const e = H2(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Ol = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), Y2 = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var X2 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K2 = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...X2,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Ol("lucide", s),
      ...!a && !Y2(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const me = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(K2, {
      ref: a,
      iconNode: e,
      className: Ol(
        `lucide-${I2(ys(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = ys(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G2 = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
me("check-check", G2);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q2 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
me("chevron-down", Q2);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J2 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
me("chevron-up", J2);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const e5 = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
me("chevrons-left", e5);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t5 = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
me("chevrons-right", t5);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
me("info", r5);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const o5 = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
me("link", o5);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a5 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
me("pencil", a5);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s5 = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
me("trash", s5);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n5 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
me("x", n5);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i5 = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), c5 = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), gs = (t) => {
  const e = c5(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Ul = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), l5 = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var h5 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d5 = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...h5,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Ul("lucide", s),
      ...!a && !l5(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fe = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(d5, {
      ref: a,
      iconNode: e,
      className: Ul(
        `lucide-${i5(gs(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = gs(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u5 = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
fe("check-check", u5);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p5 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
fe("chevron-down", p5);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m5 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
fe("chevron-up", m5);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f5 = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
fe("chevrons-left", f5);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k5 = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
fe("chevrons-right", k5);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
fe("info", y5);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g5 = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
fe("link", g5);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v5 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
fe("pencil", v5);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w5 = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
fe("trash", w5);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x5 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
fe("x", x5);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b5 = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), N5 = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), vs = (t) => {
  const e = N5(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, El = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), M5 = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var C5 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A5 = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...C5,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: El("lucide", s),
      ...!a && !M5(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ke = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(A5, {
      ref: a,
      iconNode: e,
      className: El(
        `lucide-${b5(vs(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = vs(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L5 = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
ke("check-check", L5);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z5 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
ke("chevron-down", z5);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W5 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
ke("chevron-up", W5);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j5 = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
ke("chevrons-left", j5);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q5 = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
ke("chevrons-right", q5);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
ke("info", $5);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S5 = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
ke("link", S5);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V5 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
ke("pencil", V5);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T5 = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
ke("trash", T5);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P5 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
ke("x", P5);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D5 = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), O5 = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), ws = (t) => {
  const e = O5(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Bl = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), U5 = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var E5 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B5 = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...E5,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Bl("lucide", s),
      ...!a && !U5(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ye = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(B5, {
      ref: a,
      iconNode: e,
      className: Bl(
        `lucide-${D5(ws(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = ws(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z5 = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
ye("check-check", Z5);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R5 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
ye("chevron-down", R5);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _5 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
ye("chevron-up", _5);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F5 = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
ye("chevrons-left", F5);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I5 = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
ye("chevrons-right", I5);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
ye("info", H5);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y5 = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
ye("link", Y5);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X5 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
ye("pencil", X5);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K5 = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
ye("trash", K5);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G5 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
ye("x", G5);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q5 = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), J5 = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), xs = (t) => {
  const e = J5(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Zl = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), ef = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var tf = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rf = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...tf,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Zl("lucide", s),
      ...!a && !ef(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ge = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(rf, {
      ref: a,
      iconNode: e,
      className: Zl(
        `lucide-${Q5(xs(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = xs(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const of = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
ge("check-check", of);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const af = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
ge("chevron-down", af);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sf = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
ge("chevron-up", sf);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nf = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
ge("chevrons-left", nf);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cf = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
ge("chevrons-right", cf);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lf = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
ge("info", lf);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hf = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
ge("link", hf);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const df = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
ge("pencil", df);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uf = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
ge("trash", uf);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pf = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
ge("x", pf);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mf = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ff = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), bs = (t) => {
  const e = ff(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Rl = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), kf = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var yf = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gf = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...yf,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Rl("lucide", s),
      ...!a && !kf(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ve = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(gf, {
      ref: a,
      iconNode: e,
      className: Rl(
        `lucide-${mf(bs(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = bs(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vf = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
ve("check-check", vf);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wf = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
ve("chevron-down", wf);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xf = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
ve("chevron-up", xf);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bf = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
ve("chevrons-left", bf);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nf = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
ve("chevrons-right", Nf);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mf = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
ve("info", Mf);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cf = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
ve("link", Cf);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Af = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
ve("pencil", Af);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lf = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
ve("trash", Lf);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zf = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
ve("x", zf);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wf = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), jf = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Ns = (t) => {
  const e = jf(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, _l = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), qf = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var $f = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sf = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...$f,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: _l("lucide", s),
      ...!a && !qf(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const we = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(Sf, {
      ref: a,
      iconNode: e,
      className: _l(
        `lucide-${Wf(Ns(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Ns(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vf = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
we("check-check", Vf);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tf = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
we("chevron-down", Tf);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pf = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
we("chevron-up", Pf);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Df = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
we("chevrons-left", Df);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Of = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
we("chevrons-right", Of);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uf = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
we("info", Uf);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ef = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
we("link", Ef);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bf = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
we("pencil", Bf);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zf = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
we("trash", Zf);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rf = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
we("x", Rf);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _f = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ff = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Ms = (t) => {
  const e = Ff(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Fl = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), If = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Hf = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yf = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...Hf,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Fl("lucide", s),
      ...!a && !If(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xe = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(Yf, {
      ref: a,
      iconNode: e,
      className: Fl(
        `lucide-${_f(Ms(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Ms(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xf = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
xe("check-check", Xf);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kf = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
xe("chevron-down", Kf);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gf = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
xe("chevron-up", Gf);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qf = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
xe("chevrons-left", Qf);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jf = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
xe("chevrons-right", Jf);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ek = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
xe("info", ek);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tk = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
xe("link", tk);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rk = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
xe("pencil", rk);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ok = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
xe("trash", ok);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ak = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
xe("x", ak);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sk = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), nk = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Cs = (t) => {
  const e = nk(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Il = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), ik = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ck = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lk = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...ck,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Il("lucide", s),
      ...!a && !ik(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const be = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(lk, {
      ref: a,
      iconNode: e,
      className: Il(
        `lucide-${sk(Cs(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Cs(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hk = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
be("check-check", hk);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dk = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
be("chevron-down", dk);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uk = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
be("chevron-up", uk);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pk = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
be("chevrons-left", pk);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mk = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
be("chevrons-right", mk);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fk = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
be("info", fk);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kk = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
be("link", kk);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yk = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
be("pencil", yk);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gk = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
be("trash", gk);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vk = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
be("x", vk);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wk = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), xk = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), As = (t) => {
  const e = xk(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Hl = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), bk = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Nk = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mk = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...Nk,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Hl("lucide", s),
      ...!a && !bk(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ne = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(Mk, {
      ref: a,
      iconNode: e,
      className: Hl(
        `lucide-${wk(As(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = As(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ck = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Ne("check-check", Ck);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ak = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
Ne("chevron-down", Ak);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lk = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
Ne("chevron-up", Lk);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zk = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Ne("chevrons-left", zk);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wk = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Ne("chevrons-right", Wk);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jk = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Ne("info", jk);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qk = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Ne("link", qk);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $k = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Ne("pencil", $k);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sk = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Ne("trash", Sk);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vk = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
Ne("x", Vk);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tk = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Pk = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Ls = (t) => {
  const e = Pk(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Yl = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), Dk = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ok = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uk = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...Ok,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Yl("lucide", s),
      ...!a && !Dk(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Me = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(Uk, {
      ref: a,
      iconNode: e,
      className: Yl(
        `lucide-${Tk(Ls(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Ls(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ek = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Me("check-check", Ek);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bk = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
Me("chevron-down", Bk);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zk = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
Me("chevron-up", Zk);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rk = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Me("chevrons-left", Rk);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _k = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Me("chevrons-right", _k);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fk = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Me("info", Fk);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ik = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Me("link", Ik);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hk = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Me("pencil", Hk);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yk = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Me("trash", Yk);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xk = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
Me("x", Xk);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kk = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Gk = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), zs = (t) => {
  const e = Gk(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Xl = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), Qk = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Jk = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ey = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...Jk,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Xl("lucide", s),
      ...!a && !Qk(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ce = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(ey, {
      ref: a,
      iconNode: e,
      className: Xl(
        `lucide-${Kk(zs(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = zs(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ty = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Ce("check-check", ty);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ry = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
Ce("chevron-down", ry);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oy = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
Ce("chevron-up", oy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ay = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Ce("chevrons-left", ay);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sy = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Ce("chevrons-right", sy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ny = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Ce("info", ny);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iy = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Ce("link", iy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cy = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Ce("pencil", cy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ly = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Ce("trash", ly);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hy = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
Ce("x", hy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dy = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), uy = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Ws = (t) => {
  const e = uy(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Kl = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), py = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var my = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fy = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...my,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Kl("lucide", s),
      ...!a && !py(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ae = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(fy, {
      ref: a,
      iconNode: e,
      className: Kl(
        `lucide-${dy(Ws(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Ws(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ky = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Ae("check-check", ky);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yy = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
Ae("chevron-down", yy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gy = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
Ae("chevron-up", gy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vy = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Ae("chevrons-left", vy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wy = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Ae("chevrons-right", wy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xy = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Ae("info", xy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const by = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Ae("link", by);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ny = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Ae("pencil", Ny);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const My = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Ae("trash", My);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cy = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
Ae("x", Cy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ay = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ly = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), js = (t) => {
  const e = Ly(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Gl = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), zy = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Wy = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jy = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...Wy,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Gl("lucide", s),
      ...!a && !zy(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Le = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(jy, {
      ref: a,
      iconNode: e,
      className: Gl(
        `lucide-${Ay(js(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = js(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qy = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Le("check-check", qy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $y = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
Le("chevron-down", $y);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sy = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
Le("chevron-up", Sy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vy = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Le("chevrons-left", Vy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ty = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Le("chevrons-right", Ty);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Py = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Le("info", Py);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dy = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Le("link", Dy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oy = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Le("pencil", Oy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uy = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Le("trash", Uy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ey = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
Le("x", Ey);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const By = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Zy = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), qs = (t) => {
  const e = Zy(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Ql = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), Ry = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var _y = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fy = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ..._y,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Ql("lucide", s),
      ...!a && !Ry(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ze = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(Fy, {
      ref: a,
      iconNode: e,
      className: Ql(
        `lucide-${By(qs(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = qs(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Iy = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
ze("check-check", Iy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hy = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
ze("chevron-down", Hy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yy = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
ze("chevron-up", Yy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xy = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
ze("chevrons-left", Xy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ky = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
ze("chevrons-right", Ky);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gy = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
ze("info", Gy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qy = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
ze("link", Qy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jy = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
ze("pencil", Jy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const e7 = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
ze("trash", e7);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t7 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
ze("x", t7);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r7 = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), o7 = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), $s = (t) => {
  const e = o7(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Jl = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), a7 = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var s7 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n7 = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...s7,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Jl("lucide", s),
      ...!a && !a7(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const We = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(n7, {
      ref: a,
      iconNode: e,
      className: Jl(
        `lucide-${r7($s(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = $s(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i7 = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
We("check-check", i7);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c7 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
We("chevron-down", c7);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l7 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
We("chevron-up", l7);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h7 = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
We("chevrons-left", h7);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d7 = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
We("chevrons-right", d7);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u7 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
We("info", u7);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p7 = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
We("link", p7);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m7 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
We("pencil", m7);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f7 = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
We("trash", f7);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k7 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
We("x", k7);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y7 = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), g7 = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Ss = (t) => {
  const e = g7(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, eh = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), v7 = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var w7 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x7 = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...w7,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: eh("lucide", s),
      ...!a && !v7(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const je = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(x7, {
      ref: a,
      iconNode: e,
      className: eh(
        `lucide-${y7(Ss(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Ss(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b7 = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
je("check-check", b7);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N7 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
je("chevron-down", N7);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M7 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
je("chevron-up", M7);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C7 = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
je("chevrons-left", C7);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A7 = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
je("chevrons-right", A7);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L7 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
je("info", L7);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z7 = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
je("link", z7);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W7 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
je("pencil", W7);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j7 = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
je("trash", j7);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q7 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
je("x", q7);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $7 = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), S7 = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Vs = (t) => {
  const e = S7(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, th = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), V7 = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var T7 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P7 = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...T7,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: th("lucide", s),
      ...!a && !V7(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qe = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(P7, {
      ref: a,
      iconNode: e,
      className: th(
        `lucide-${$7(Vs(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Vs(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D7 = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
qe("check-check", D7);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O7 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
qe("chevron-down", O7);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U7 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
qe("chevron-up", U7);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E7 = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
qe("chevrons-left", E7);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B7 = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
qe("chevrons-right", B7);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z7 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
qe("info", Z7);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R7 = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
qe("link", R7);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _7 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
qe("pencil", _7);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F7 = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
qe("trash", F7);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I7 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
qe("x", I7);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H7 = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Y7 = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Ts = (t) => {
  const e = Y7(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, rh = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), X7 = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var K7 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G7 = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...K7,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: rh("lucide", s),
      ...!a && !X7(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $e = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(G7, {
      ref: a,
      iconNode: e,
      className: rh(
        `lucide-${H7(Ts(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Ts(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q7 = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
$e("check-check", Q7);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J7 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
$e("chevron-down", J7);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const e6 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
$e("chevron-up", e6);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t6 = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
$e("chevrons-left", t6);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r6 = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
$e("chevrons-right", r6);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const o6 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
$e("info", o6);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a6 = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
$e("link", a6);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s6 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
$e("pencil", s6);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n6 = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
$e("trash", n6);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i6 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
$e("x", i6);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c6 = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), l6 = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Ps = (t) => {
  const e = l6(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, oh = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), h6 = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var d6 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u6 = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...d6,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: oh("lucide", s),
      ...!a && !h6(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Se = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(u6, {
      ref: a,
      iconNode: e,
      className: oh(
        `lucide-${c6(Ps(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Ps(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p6 = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Se("check-check", p6);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m6 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
Se("chevron-down", m6);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f6 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
Se("chevron-up", f6);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k6 = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Se("chevrons-left", k6);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y6 = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Se("chevrons-right", y6);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g6 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Se("info", g6);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v6 = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Se("link", v6);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w6 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Se("pencil", w6);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x6 = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Se("trash", x6);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b6 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
Se("x", b6);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N6 = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), M6 = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Ds = (t) => {
  const e = M6(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, ah = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), C6 = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var A6 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L6 = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...A6,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: ah("lucide", s),
      ...!a && !C6(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ve = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(L6, {
      ref: a,
      iconNode: e,
      className: ah(
        `lucide-${N6(Ds(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Ds(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z6 = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Ve("check-check", z6);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W6 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
Ve("chevron-down", W6);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j6 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
Ve("chevron-up", j6);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q6 = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Ve("chevrons-left", q6);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $6 = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Ve("chevrons-right", $6);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S6 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Ve("info", S6);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V6 = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Ve("link", V6);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T6 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Ve("pencil", T6);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P6 = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Ve("trash", P6);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D6 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
Ve("x", D6);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O6 = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), U6 = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Os = (t) => {
  const e = U6(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, sh = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), E6 = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var B6 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z6 = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...B6,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: sh("lucide", s),
      ...!a && !E6(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Te = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(Z6, {
      ref: a,
      iconNode: e,
      className: sh(
        `lucide-${O6(Os(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Os(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R6 = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Te("check-check", R6);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _6 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
Te("chevron-down", _6);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F6 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
Te("chevron-up", F6);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I6 = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Te("chevrons-left", I6);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H6 = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Te("chevrons-right", H6);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y6 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Te("info", Y6);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X6 = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Te("link", X6);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K6 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Te("pencil", K6);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G6 = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Te("trash", G6);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q6 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
Te("x", Q6);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J6 = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), e4 = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Us = (t) => {
  const e = e4(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, nh = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), t4 = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var r4 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const o4 = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...r4,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: nh("lucide", s),
      ...!a && !t4(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pe = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(o4, {
      ref: a,
      iconNode: e,
      className: nh(
        `lucide-${J6(Us(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Us(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a4 = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Pe("check-check", a4);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s4 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
Pe("chevron-down", s4);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n4 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
Pe("chevron-up", n4);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i4 = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Pe("chevrons-left", i4);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c4 = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Pe("chevrons-right", c4);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l4 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Pe("info", l4);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h4 = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Pe("link", h4);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d4 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Pe("pencil", d4);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u4 = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Pe("trash", u4);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p4 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
Pe("x", p4);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m4 = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), f4 = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Es = (t) => {
  const e = f4(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, ih = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), k4 = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var y4 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g4 = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...y4,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: ih("lucide", s),
      ...!a && !k4(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const De = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(g4, {
      ref: a,
      iconNode: e,
      className: ih(
        `lucide-${m4(Es(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Es(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v4 = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
De("check-check", v4);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w4 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
De("chevron-down", w4);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x4 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
De("chevron-up", x4);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b4 = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
De("chevrons-left", b4);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N4 = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
De("chevrons-right", N4);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M4 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
De("info", M4);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C4 = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
De("link", C4);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A4 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
De("pencil", A4);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L4 = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
De("trash", L4);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z4 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
De("x", z4);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W4 = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), j4 = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Bs = (t) => {
  const e = j4(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, ch = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), q4 = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var $4 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S4 = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...$4,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: ch("lucide", s),
      ...!a && !q4(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oe = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(S4, {
      ref: a,
      iconNode: e,
      className: ch(
        `lucide-${W4(Bs(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Bs(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V4 = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Oe("check-check", V4);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T4 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
Oe("chevron-down", T4);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P4 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
Oe("chevron-up", P4);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D4 = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Oe("chevrons-left", D4);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O4 = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Oe("chevrons-right", O4);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U4 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Oe("info", U4);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E4 = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Oe("link", E4);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B4 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Oe("pencil", B4);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z4 = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Oe("trash", Z4);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R4 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
Oe("x", R4);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _4 = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), F4 = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Zs = (t) => {
  const e = F4(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, lh = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), I4 = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var H4 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y4 = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...H4,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: lh("lucide", s),
      ...!a && !I4(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ue = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(Y4, {
      ref: a,
      iconNode: e,
      className: lh(
        `lucide-${_4(Zs(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Zs(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X4 = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Ue("check-check", X4);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K4 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
Ue("chevron-down", K4);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G4 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
Ue("chevron-up", G4);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q4 = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Ue("chevrons-left", Q4);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J4 = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Ue("chevrons-right", J4);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eg = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Ue("info", eg);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tg = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Ue("link", tg);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rg = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Ue("pencil", rg);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const og = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Ue("trash", og);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ag = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
Ue("x", ag);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sg = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ng = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Rs = (t) => {
  const e = ng(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, hh = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), ig = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var cg = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lg = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...cg,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: hh("lucide", s),
      ...!a && !ig(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ee = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(lg, {
      ref: a,
      iconNode: e,
      className: hh(
        `lucide-${sg(Rs(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Rs(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hg = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Ee("check-check", hg);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dg = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
Ee("chevron-down", dg);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ug = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
Ee("chevron-up", ug);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pg = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Ee("chevrons-left", pg);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mg = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Ee("chevrons-right", mg);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fg = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Ee("info", fg);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kg = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Ee("link", kg);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yg = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Ee("pencil", yg);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gg = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Ee("trash", gg);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vg = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
Ee("x", vg);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wg = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), xg = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), _s = (t) => {
  const e = xg(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, dh = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), bg = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ng = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mg = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...Ng,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: dh("lucide", s),
      ...!a && !bg(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Be = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(Mg, {
      ref: a,
      iconNode: e,
      className: dh(
        `lucide-${wg(_s(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = _s(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cg = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Be("check-check", Cg);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ag = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
Be("chevron-down", Ag);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lg = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
Be("chevron-up", Lg);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zg = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Be("chevrons-left", zg);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wg = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Be("chevrons-right", Wg);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jg = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Be("info", jg);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qg = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Be("link", qg);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $g = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Be("pencil", $g);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sg = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Be("trash", Sg);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vg = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
Be("x", Vg);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tg = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Pg = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Fs = (t) => {
  const e = Pg(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, uh = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), Dg = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Og = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ug = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...Og,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: uh("lucide", s),
      ...!a && !Dg(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ze = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(Ug, {
      ref: a,
      iconNode: e,
      className: uh(
        `lucide-${Tg(Fs(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Fs(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eg = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Ze("check-check", Eg);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bg = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
Ze("chevron-down", Bg);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zg = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
Ze("chevron-up", Zg);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rg = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Ze("chevrons-left", Rg);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _g = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Ze("chevrons-right", _g);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fg = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Ze("info", Fg);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ig = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Ze("link", Ig);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hg = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Ze("pencil", Hg);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yg = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Ze("trash", Yg);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xg = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
Ze("x", Xg);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kg = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Gg = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Is = (t) => {
  const e = Gg(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, ph = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), Qg = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Jg = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ev = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...Jg,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: ph("lucide", s),
      ...!a && !Qg(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Re = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(ev, {
      ref: a,
      iconNode: e,
      className: ph(
        `lucide-${Kg(Is(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Is(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tv = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Re("check-check", tv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rv = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
Re("chevron-down", rv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ov = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
Re("chevron-up", ov);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const av = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Re("chevrons-left", av);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sv = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Re("chevrons-right", sv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nv = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Re("info", nv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iv = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Re("link", iv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cv = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Re("pencil", cv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lv = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Re("trash", lv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hv = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
Re("x", hv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dv = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), uv = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Hs = (t) => {
  const e = uv(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, mh = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), pv = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var mv = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fv = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...mv,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: mh("lucide", s),
      ...!a && !pv(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _e = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(fv, {
      ref: a,
      iconNode: e,
      className: mh(
        `lucide-${dv(Hs(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Hs(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kv = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
_e("check-check", kv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yv = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
_e("chevron-down", yv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gv = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
_e("chevron-up", gv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vv = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
_e("chevrons-left", vv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wv = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
_e("chevrons-right", wv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xv = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
_e("info", xv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bv = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
_e("link", bv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nv = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
_e("pencil", Nv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mv = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
_e("trash", Mv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cv = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
_e("x", Cv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Av = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Lv = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Ys = (t) => {
  const e = Lv(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, fh = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), zv = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Wv = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jv = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...Wv,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: fh("lucide", s),
      ...!a && !zv(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fe = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(jv, {
      ref: a,
      iconNode: e,
      className: fh(
        `lucide-${Av(Ys(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Ys(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qv = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Fe("check-check", qv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $v = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
Fe("chevron-down", $v);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sv = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
Fe("chevron-up", Sv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vv = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Fe("chevrons-left", Vv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tv = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Fe("chevrons-right", Tv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pv = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Fe("info", Pv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dv = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Fe("link", Dv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ov = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Fe("pencil", Ov);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uv = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Fe("trash", Uv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ev = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
Fe("x", Ev);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bv = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Zv = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Xs = (t) => {
  const e = Zv(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, kh = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), Rv = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var _v = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fv = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ..._v,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: kh("lucide", s),
      ...!a && !Rv(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ie = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(Fv, {
      ref: a,
      iconNode: e,
      className: kh(
        `lucide-${Bv(Xs(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Xs(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Iv = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Ie("check-check", Iv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hv = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
Ie("chevron-down", Hv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yv = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
Ie("chevron-up", Yv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xv = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Ie("chevrons-left", Xv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kv = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Ie("chevrons-right", Kv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gv = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Ie("info", Gv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qv = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Ie("link", Qv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jv = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Ie("pencil", Jv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const e3 = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Ie("trash", e3);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t3 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
Ie("x", t3);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r3 = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), o3 = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Ks = (t) => {
  const e = o3(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, yh = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), a3 = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var s3 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n3 = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...s3,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: yh("lucide", s),
      ...!a && !a3(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const He = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(n3, {
      ref: a,
      iconNode: e,
      className: yh(
        `lucide-${r3(Ks(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Ks(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i3 = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
He("check-check", i3);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c3 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
He("chevron-down", c3);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l3 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
He("chevron-up", l3);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h3 = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
He("chevrons-left", h3);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d3 = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
He("chevrons-right", d3);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
He("info", u3);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p3 = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
He("link", p3);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m3 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
He("pencil", m3);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f3 = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
He("trash", f3);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k3 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
He("x", k3);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y3 = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), g3 = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Gs = (t) => {
  const e = g3(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, gh = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), v3 = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var w3 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x3 = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...w3,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: gh("lucide", s),
      ...!a && !v3(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ye = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(x3, {
      ref: a,
      iconNode: e,
      className: gh(
        `lucide-${y3(Gs(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Gs(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b3 = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Ye("check-check", b3);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N3 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
Ye("chevron-down", N3);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M3 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
Ye("chevron-up", M3);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C3 = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Ye("chevrons-left", C3);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A3 = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Ye("chevrons-right", A3);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Ye("info", L3);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z3 = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Ye("link", z3);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W3 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Ye("pencil", W3);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j3 = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Ye("trash", j3);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q3 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
Ye("x", q3);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $3 = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), S3 = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Qs = (t) => {
  const e = S3(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, vh = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), V3 = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var T3 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P3 = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...T3,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: vh("lucide", s),
      ...!a && !V3(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xe = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(P3, {
      ref: a,
      iconNode: e,
      className: vh(
        `lucide-${$3(Qs(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Qs(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D3 = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Xe("check-check", D3);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O3 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
Xe("chevron-down", O3);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U3 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
Xe("chevron-up", U3);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E3 = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Xe("chevrons-left", E3);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B3 = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Xe("chevrons-right", B3);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Xe("info", Z3);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R3 = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Xe("link", R3);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _3 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Xe("pencil", _3);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F3 = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Xe("trash", F3);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I3 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
Xe("x", I3);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H3 = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Y3 = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Js = (t) => {
  const e = Y3(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, wh = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), X3 = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var K3 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G3 = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...K3,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: wh("lucide", s),
      ...!a && !X3(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ke = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(G3, {
      ref: a,
      iconNode: e,
      className: wh(
        `lucide-${H3(Js(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Js(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q3 = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Ke("check-check", Q3);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J3 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
Ke("chevron-down", J3);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ew = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
Ke("chevron-up", ew);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tw = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Ke("chevrons-left", tw);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rw = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Ke("chevrons-right", rw);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ow = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Ke("info", ow);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aw = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Ke("link", aw);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sw = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Ke("pencil", sw);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nw = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Ke("trash", nw);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iw = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
Ke("x", iw);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cw = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), lw = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), en = (t) => {
  const e = lw(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, xh = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), hw = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var dw = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uw = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...dw,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: xh("lucide", s),
      ...!a && !hw(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ge = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(uw, {
      ref: a,
      iconNode: e,
      className: xh(
        `lucide-${cw(en(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = en(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pw = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Ge("check-check", pw);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mw = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
Ge("chevron-down", mw);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fw = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
Ge("chevron-up", fw);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kw = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Ge("chevrons-left", kw);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yw = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Ge("chevrons-right", yw);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gw = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Ge("info", gw);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vw = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Ge("link", vw);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ww = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Ge("pencil", ww);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xw = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Ge("trash", xw);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bw = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
Ge("x", bw);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nw = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Mw = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), tn = (t) => {
  const e = Mw(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, bh = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), Cw = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Aw = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lw = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...Aw,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: bh("lucide", s),
      ...!a && !Cw(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qe = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(Lw, {
      ref: a,
      iconNode: e,
      className: bh(
        `lucide-${Nw(tn(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = tn(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zw = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Qe("check-check", zw);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ww = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
Qe("chevron-down", Ww);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jw = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
Qe("chevron-up", jw);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qw = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Qe("chevrons-left", qw);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $w = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Qe("chevrons-right", $w);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sw = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Qe("info", Sw);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vw = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Qe("link", Vw);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tw = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Qe("pencil", Tw);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pw = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Qe("trash", Pw);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dw = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
Qe("x", Dw);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ow = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Uw = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), rn = (t) => {
  const e = Uw(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Nh = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), Ew = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Bw = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zw = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...Bw,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Nh("lucide", s),
      ...!a && !Ew(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Je = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(Zw, {
      ref: a,
      iconNode: e,
      className: Nh(
        `lucide-${Ow(rn(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = rn(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rw = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Je("check-check", Rw);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _w = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
Je("chevron-down", _w);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fw = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
Je("chevron-up", Fw);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Iw = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Je("chevrons-left", Iw);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hw = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Je("chevrons-right", Hw);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yw = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Je("info", Yw);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xw = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Je("link", Xw);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kw = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Je("pencil", Kw);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gw = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Je("trash", Gw);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qw = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
Je("x", Qw);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jw = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), e8 = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), on = (t) => {
  const e = e8(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Mh = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), t8 = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var r8 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const o8 = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...r8,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Mh("lucide", s),
      ...!a && !t8(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const et = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(o8, {
      ref: a,
      iconNode: e,
      className: Mh(
        `lucide-${Jw(on(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = on(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a8 = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
et("check-check", a8);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s8 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
et("chevron-down", s8);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n8 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
et("chevron-up", n8);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i8 = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
et("chevrons-left", i8);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c8 = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
et("chevrons-right", c8);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l8 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
et("info", l8);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h8 = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
et("link", h8);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d8 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
et("pencil", d8);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u8 = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
et("trash", u8);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p8 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
et("x", p8);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m8 = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), f8 = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), an = (t) => {
  const e = f8(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Ch = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), k8 = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var y8 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g8 = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...y8,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Ch("lucide", s),
      ...!a && !k8(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tt = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(g8, {
      ref: a,
      iconNode: e,
      className: Ch(
        `lucide-${m8(an(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = an(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v8 = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
tt("check-check", v8);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w8 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
tt("chevron-down", w8);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x8 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
tt("chevron-up", x8);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b8 = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
tt("chevrons-left", b8);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N8 = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
tt("chevrons-right", N8);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M8 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
tt("info", M8);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C8 = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
tt("link", C8);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A8 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
tt("pencil", A8);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L8 = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
tt("trash", L8);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z8 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
tt("x", z8);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W8 = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), j8 = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), sn = (t) => {
  const e = j8(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Ah = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), q8 = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var $8 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S8 = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...$8,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Ah("lucide", s),
      ...!a && !q8(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rt = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(S8, {
      ref: a,
      iconNode: e,
      className: Ah(
        `lucide-${W8(sn(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = sn(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V8 = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
rt("check-check", V8);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T8 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
rt("chevron-down", T8);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P8 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
rt("chevron-up", P8);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D8 = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
rt("chevrons-left", D8);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O8 = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
rt("chevrons-right", O8);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U8 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
rt("info", U8);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E8 = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
rt("link", E8);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B8 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
rt("pencil", B8);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z8 = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
rt("trash", Z8);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R8 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
rt("x", R8);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _8 = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), F8 = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), nn = (t) => {
  const e = F8(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Lh = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), I8 = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var H8 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y8 = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...H8,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Lh("lucide", s),
      ...!a && !I8(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ot = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(Y8, {
      ref: a,
      iconNode: e,
      className: Lh(
        `lucide-${_8(nn(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = nn(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X8 = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
ot("check-check", X8);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K8 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
ot("chevron-down", K8);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G8 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
ot("chevron-up", G8);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q8 = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
ot("chevrons-left", Q8);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J8 = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
ot("chevrons-right", J8);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ex = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
ot("info", ex);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tx = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
ot("link", tx);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rx = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
ot("pencil", rx);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ox = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
ot("trash", ox);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ax = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
ot("x", ax);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sx = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), nx = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), cn = (t) => {
  const e = nx(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, zh = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), ix = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var cx = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lx = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...cx,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: zh("lucide", s),
      ...!a && !ix(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const at = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(lx, {
      ref: a,
      iconNode: e,
      className: zh(
        `lucide-${sx(cn(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = cn(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hx = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
at("check-check", hx);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dx = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
at("chevron-down", dx);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ux = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
at("chevron-up", ux);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const px = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
at("chevrons-left", px);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mx = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
at("chevrons-right", mx);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fx = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
at("info", fx);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kx = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
at("link", kx);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yx = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
at("pencil", yx);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gx = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
at("trash", gx);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vx = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
at("x", vx);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wx = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), xx = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), ln = (t) => {
  const e = xx(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Wh = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), bx = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Nx = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mx = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...Nx,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Wh("lucide", s),
      ...!a && !bx(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const st = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(Mx, {
      ref: a,
      iconNode: e,
      className: Wh(
        `lucide-${wx(ln(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = ln(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cx = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
st("check-check", Cx);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ax = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
st("chevron-down", Ax);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lx = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
st("chevron-up", Lx);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zx = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
st("chevrons-left", zx);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wx = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
st("chevrons-right", Wx);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jx = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
st("info", jx);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qx = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
st("link", qx);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $x = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
st("pencil", $x);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sx = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
st("trash", Sx);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vx = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
st("x", Vx);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tx = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Px = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), hn = (t) => {
  const e = Px(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, jh = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), Dx = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ox = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ux = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...Ox,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: jh("lucide", s),
      ...!a && !Dx(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nt = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(Ux, {
      ref: a,
      iconNode: e,
      className: jh(
        `lucide-${Tx(hn(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = hn(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ex = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
nt("check-check", Ex);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bx = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
nt("chevron-down", Bx);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zx = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
nt("chevron-up", Zx);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rx = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
nt("chevrons-left", Rx);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _x = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
nt("chevrons-right", _x);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fx = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
nt("info", Fx);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ix = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
nt("link", Ix);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hx = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
nt("pencil", Hx);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yx = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
nt("trash", Yx);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xx = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
nt("x", Xx);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kx = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Gx = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), dn = (t) => {
  const e = Gx(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, qh = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), Qx = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Jx = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eb = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...Jx,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: qh("lucide", s),
      ...!a && !Qx(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const it = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(eb, {
      ref: a,
      iconNode: e,
      className: qh(
        `lucide-${Kx(dn(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = dn(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tb = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
it("check-check", tb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rb = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
it("chevron-down", rb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ob = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
it("chevron-up", ob);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ab = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
it("chevrons-left", ab);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sb = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
it("chevrons-right", sb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nb = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
it("info", nb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ib = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
it("link", ib);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cb = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
it("pencil", cb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lb = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
it("trash", lb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hb = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
it("x", hb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const db = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ub = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), un = (t) => {
  const e = ub(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, $h = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), pb = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var mb = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fb = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...mb,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: $h("lucide", s),
      ...!a && !pb(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ct = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(fb, {
      ref: a,
      iconNode: e,
      className: $h(
        `lucide-${db(un(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = un(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kb = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
ct("check-check", kb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yb = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
ct("chevron-down", yb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gb = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
ct("chevron-up", gb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vb = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
ct("chevrons-left", vb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wb = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
ct("chevrons-right", wb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xb = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
ct("info", xb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bb = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
ct("link", bb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nb = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
ct("pencil", Nb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mb = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
ct("trash", Mb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cb = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
ct("x", Cb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ab = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Lb = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), pn = (t) => {
  const e = Lb(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Sh = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), zb = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Wb = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jb = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...Wb,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Sh("lucide", s),
      ...!a && !zb(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lt = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(jb, {
      ref: a,
      iconNode: e,
      className: Sh(
        `lucide-${Ab(pn(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = pn(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qb = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
lt("check-check", qb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $b = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
lt("chevron-down", $b);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sb = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
lt("chevron-up", Sb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vb = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
lt("chevrons-left", Vb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tb = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
lt("chevrons-right", Tb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pb = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
lt("info", Pb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Db = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
lt("link", Db);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ob = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
lt("pencil", Ob);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ub = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
lt("trash", Ub);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eb = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
lt("x", Eb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bb = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Zb = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), mn = (t) => {
  const e = Zb(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Vh = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), Rb = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var _b = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fb = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ..._b,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Vh("lucide", s),
      ...!a && !Rb(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ht = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(Fb, {
      ref: a,
      iconNode: e,
      className: Vh(
        `lucide-${Bb(mn(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = mn(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ib = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
ht("check-check", Ib);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hb = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
ht("chevron-down", Hb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yb = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
ht("chevron-up", Yb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xb = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
ht("chevrons-left", Xb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kb = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
ht("chevrons-right", Kb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gb = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
ht("info", Gb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qb = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
ht("link", Qb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jb = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
ht("pencil", Jb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eN = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
ht("trash", eN);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tN = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
ht("x", tN);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rN = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), oN = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), fn = (t) => {
  const e = oN(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Th = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), aN = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var sN = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nN = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...sN,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Th("lucide", s),
      ...!a && !aN(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dt = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(nN, {
      ref: a,
      iconNode: e,
      className: Th(
        `lucide-${rN(fn(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = fn(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iN = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
dt("check-check", iN);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cN = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
dt("chevron-down", cN);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lN = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
dt("chevron-up", lN);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hN = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
dt("chevrons-left", hN);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dN = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
dt("chevrons-right", dN);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uN = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
dt("info", uN);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pN = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
dt("link", pN);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mN = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
dt("pencil", mN);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fN = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
dt("trash", fN);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kN = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
dt("x", kN);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yN = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), gN = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), kn = (t) => {
  const e = gN(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Ph = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), vN = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var wN = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xN = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...wN,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Ph("lucide", s),
      ...!a && !vN(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ut = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(xN, {
      ref: a,
      iconNode: e,
      className: Ph(
        `lucide-${yN(kn(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = kn(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bN = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
ut("check-check", bN);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const NN = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
ut("chevron-down", NN);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MN = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
ut("chevron-up", MN);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CN = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
ut("chevrons-left", CN);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AN = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
ut("chevrons-right", AN);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LN = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
ut("info", LN);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zN = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
ut("link", zN);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const WN = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
ut("pencil", WN);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jN = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
ut("trash", jN);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qN = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
ut("x", qN);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $N = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), SN = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), yn = (t) => {
  const e = SN(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Dh = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), VN = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var TN = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PN = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...TN,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Dh("lucide", s),
      ...!a && !VN(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pt = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(PN, {
      ref: a,
      iconNode: e,
      className: Dh(
        `lucide-${$N(yn(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = yn(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const DN = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
pt("check-check", DN);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ON = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
pt("chevron-down", ON);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const UN = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
pt("chevron-up", UN);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const EN = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
pt("chevrons-left", EN);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BN = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
pt("chevrons-right", BN);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ZN = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
pt("info", ZN);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const RN = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
pt("link", RN);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _N = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
pt("pencil", _N);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const FN = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
pt("trash", FN);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const IN = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
pt("x", IN);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const HN = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), YN = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), gn = (t) => {
  const e = YN(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Oh = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), XN = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var KN = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const GN = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...KN,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Oh("lucide", s),
      ...!a && !XN(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uh = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(GN, {
      ref: a,
      iconNode: e,
      className: Oh(
        `lucide-${HN(gn(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = gn(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const QN = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Uh("chevrons-left", QN);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const JN = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Uh("chevrons-right", JN);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eM = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), tM = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), vn = (t) => {
  const e = tM(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Eh = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), rM = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var oM = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aM = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...oM,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Eh("lucide", s),
      ...!a && !rM(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bh = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(aM, {
      ref: a,
      iconNode: e,
      className: Eh(
        `lucide-${eM(vn(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = vn(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sM = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Bh("chevrons-left", sM);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nM = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Bh("chevrons-right", nM);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iM = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), cM = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), wn = (t) => {
  const e = cM(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Zh = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), lM = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var hM = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dM = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...hM,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Zh("lucide", s),
      ...!a && !lM(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rh = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(dM, {
      ref: a,
      iconNode: e,
      className: Zh(
        `lucide-${iM(wn(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = wn(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uM = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Rh("chevrons-left", uM);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pM = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Rh("chevrons-right", pM);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mM = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), fM = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), xn = (t) => {
  const e = fM(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, _h = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), kM = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var yM = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gM = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...yM,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: _h("lucide", s),
      ...!a && !kM(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fh = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(gM, {
      ref: a,
      iconNode: e,
      className: _h(
        `lucide-${mM(xn(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = xn(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vM = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Fh("chevrons-left", vM);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wM = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Fh("chevrons-right", wM);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xM = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), bM = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), bn = (t) => {
  const e = bM(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Ih = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), NM = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var MM = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CM = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...MM,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Ih("lucide", s),
      ...!a && !NM(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hh = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(CM, {
      ref: a,
      iconNode: e,
      className: Ih(
        `lucide-${xM(bn(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = bn(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AM = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Hh("chevrons-left", AM);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LM = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Hh("chevrons-right", LM);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zM = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), WM = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Nn = (t) => {
  const e = WM(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Yh = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), jM = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var qM = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $M = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...qM,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Yh("lucide", s),
      ...!a && !jM(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xh = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d($M, {
      ref: a,
      iconNode: e,
      className: Yh(
        `lucide-${zM(Nn(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Nn(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const SM = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Xh("chevrons-left", SM);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const VM = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Xh("chevrons-right", VM);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const TM = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), PM = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Mn = (t) => {
  const e = PM(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Kh = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), DM = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var OM = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const UM = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...OM,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Kh("lucide", s),
      ...!a && !DM(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gh = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(UM, {
      ref: a,
      iconNode: e,
      className: Kh(
        `lucide-${TM(Mn(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Mn(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const EM = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Gh("chevrons-left", EM);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BM = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Gh("chevrons-right", BM);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ZM = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), RM = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Cn = (t) => {
  const e = RM(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Qh = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), _M = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var FM = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const IM = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...FM,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Qh("lucide", s),
      ...!a && !_M(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jh = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(IM, {
      ref: a,
      iconNode: e,
      className: Qh(
        `lucide-${ZM(Cn(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Cn(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const HM = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Jh("chevrons-left", HM);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const YM = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Jh("chevrons-right", YM);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const XM = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), KM = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), An = (t) => {
  const e = KM(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, ed = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), GM = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var QM = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const JM = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...QM,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: ed("lucide", s),
      ...!a && !GM(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const td = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(JM, {
      ref: a,
      iconNode: e,
      className: ed(
        `lucide-${XM(An(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = An(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eC = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
td("chevrons-left", eC);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tC = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
td("chevrons-right", tC);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rC = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), oC = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Ln = (t) => {
  const e = oC(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, rd = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), aC = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var sC = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nC = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...sC,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: rd("lucide", s),
      ...!a && !aC(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const od = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(nC, {
      ref: a,
      iconNode: e,
      className: rd(
        `lucide-${rC(Ln(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Ln(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iC = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
od("chevrons-left", iC);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cC = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
od("chevrons-right", cC);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lC = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), hC = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), zn = (t) => {
  const e = hC(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, ad = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), dC = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var uC = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pC = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...uC,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: ad("lucide", s),
      ...!a && !dC(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sd = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(pC, {
      ref: a,
      iconNode: e,
      className: ad(
        `lucide-${lC(zn(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = zn(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mC = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
sd("chevrons-left", mC);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fC = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
sd("chevrons-right", fC);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kC = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), yC = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Wn = (t) => {
  const e = yC(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, nd = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), gC = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var vC = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wC = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...vC,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: nd("lucide", s),
      ...!a && !gC(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const id = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(wC, {
      ref: a,
      iconNode: e,
      className: nd(
        `lucide-${kC(Wn(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Wn(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xC = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
id("chevrons-left", xC);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bC = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
id("chevrons-right", bC);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const NC = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), MC = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), jn = (t) => {
  const e = MC(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, cd = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), CC = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var AC = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LC = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...AC,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: cd("lucide", s),
      ...!a && !CC(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ld = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(LC, {
      ref: a,
      iconNode: e,
      className: cd(
        `lucide-${NC(jn(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = jn(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zC = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
ld("chevrons-left", zC);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const WC = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
ld("chevrons-right", WC);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jC = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), qC = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), qn = (t) => {
  const e = qC(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, hd = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), $C = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var SC = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const VC = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...SC,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: hd("lucide", s),
      ...!a && !$C(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dd = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(VC, {
      ref: a,
      iconNode: e,
      className: hd(
        `lucide-${jC(qn(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = qn(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const TC = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
dd("chevrons-left", TC);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PC = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
dd("chevrons-right", PC);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const DC = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), OC = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), $n = (t) => {
  const e = OC(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, ud = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), UC = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var EC = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BC = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...EC,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: ud("lucide", s),
      ...!a && !UC(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pd = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(BC, {
      ref: a,
      iconNode: e,
      className: ud(
        `lucide-${DC($n(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = $n(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ZC = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
pd("chevrons-left", ZC);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const RC = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
pd("chevrons-right", RC);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _C = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), FC = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Sn = (t) => {
  const e = FC(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, md = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), IC = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var HC = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const YC = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...HC,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: md("lucide", s),
      ...!a && !IC(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fd = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(YC, {
      ref: a,
      iconNode: e,
      className: md(
        `lucide-${_C(Sn(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Sn(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const XC = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
fd("chevrons-left", XC);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const KC = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
fd("chevrons-right", KC);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const GC = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), QC = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Vn = (t) => {
  const e = QC(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, kd = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), JC = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var eA = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tA = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...eA,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: kd("lucide", s),
      ...!a && !JC(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yd = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(tA, {
      ref: a,
      iconNode: e,
      className: kd(
        `lucide-${GC(Vn(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Vn(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rA = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
yd("chevrons-left", rA);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oA = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
yd("chevrons-right", oA);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aA = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), sA = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Tn = (t) => {
  const e = sA(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, gd = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), nA = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var iA = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cA = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...iA,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: gd("lucide", s),
      ...!a && !nA(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vd = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(cA, {
      ref: a,
      iconNode: e,
      className: gd(
        `lucide-${aA(Tn(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Tn(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lA = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
vd("chevrons-left", lA);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hA = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
vd("chevrons-right", hA);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dA = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), uA = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Pn = (t) => {
  const e = uA(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, wd = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), pA = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var mA = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fA = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...mA,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: wd("lucide", s),
      ...!a && !pA(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xd = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(fA, {
      ref: a,
      iconNode: e,
      className: wd(
        `lucide-${dA(Pn(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Pn(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kA = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
xd("chevrons-left", kA);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yA = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
xd("chevrons-right", yA);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gA = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), vA = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Dn = (t) => {
  const e = vA(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, bd = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), wA = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var xA = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bA = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...xA,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: bd("lucide", s),
      ...!a && !wA(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nd = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(bA, {
      ref: a,
      iconNode: e,
      className: bd(
        `lucide-${gA(Dn(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Dn(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const NA = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Nd("chevrons-left", NA);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MA = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Nd("chevrons-right", MA);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CA = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), AA = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), On = (t) => {
  const e = AA(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Md = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), LA = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var zA = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const WA = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...zA,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Md("lucide", s),
      ...!a && !LA(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cd = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(WA, {
      ref: a,
      iconNode: e,
      className: Md(
        `lucide-${CA(On(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = On(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jA = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Cd("chevrons-left", jA);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qA = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Cd("chevrons-right", qA);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $A = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), SA = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Un = (t) => {
  const e = SA(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Ad = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), VA = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var TA = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PA = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...TA,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Ad("lucide", s),
      ...!a && !VA(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ld = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(PA, {
      ref: a,
      iconNode: e,
      className: Ad(
        `lucide-${$A(Un(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Un(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const DA = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Ld("chevrons-left", DA);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const OA = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Ld("chevrons-right", OA);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const UA = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), EA = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), En = (t) => {
  const e = EA(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, zd = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), BA = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ZA = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const RA = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...ZA,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: zd("lucide", s),
      ...!a && !BA(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wd = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(RA, {
      ref: a,
      iconNode: e,
      className: zd(
        `lucide-${UA(En(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = En(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _A = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Wd("chevrons-left", _A);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const FA = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Wd("chevrons-right", FA);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const IA = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), HA = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Bn = (t) => {
  const e = HA(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, jd = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), YA = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var XA = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const KA = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...XA,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: jd("lucide", s),
      ...!a && !YA(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qd = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(KA, {
      ref: a,
      iconNode: e,
      className: jd(
        `lucide-${IA(Bn(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Bn(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const GA = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
qd("chevrons-left", GA);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const QA = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
qd("chevrons-right", QA);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const JA = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), eL = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Zn = (t) => {
  const e = eL(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, $d = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), tL = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var rL = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oL = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...rL,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: $d("lucide", s),
      ...!a && !tL(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sd = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(oL, {
      ref: a,
      iconNode: e,
      className: $d(
        `lucide-${JA(Zn(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Zn(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aL = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Sd("chevrons-left", aL);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sL = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Sd("chevrons-right", sL);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nL = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), iL = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Rn = (t) => {
  const e = iL(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Vd = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), cL = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var lL = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hL = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...lL,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Vd("lucide", s),
      ...!a && !cL(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Td = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(hL, {
      ref: a,
      iconNode: e,
      className: Vd(
        `lucide-${nL(Rn(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Rn(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dL = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Td("chevrons-left", dL);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uL = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Td("chevrons-right", uL);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pL = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), mL = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), _n = (t) => {
  const e = mL(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Pd = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), fL = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var kL = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yL = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...kL,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Pd("lucide", s),
      ...!a && !fL(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dd = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(yL, {
      ref: a,
      iconNode: e,
      className: Pd(
        `lucide-${pL(_n(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = _n(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gL = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Dd("chevrons-left", gL);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vL = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Dd("chevrons-right", vL);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wL = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), xL = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Fn = (t) => {
  const e = xL(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Od = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), bL = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var NL = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ML = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...NL,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Od("lucide", s),
      ...!a && !bL(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xr = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(ML, {
      ref: a,
      iconNode: e,
      className: Od(
        `lucide-${wL(Fn(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Fn(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CL = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
xr("check-check", CL);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AL = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
xr("chevrons-left", AL);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LL = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
xr("chevrons-right", LL);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zL = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
xr("info", zL);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const WL = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
xr("link", WL);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jL = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
xr("pencil", jL);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qL = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
xr("trash", qL);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $L = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), SL = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), In = (t) => {
  const e = SL(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Ud = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), VL = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var TL = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PL = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...TL,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Ud("lucide", s),
      ...!a && !VL(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const br = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(PL, {
      ref: a,
      iconNode: e,
      className: Ud(
        `lucide-${$L(In(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = In(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const DL = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
br("check-check", DL);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const OL = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
br("chevrons-left", OL);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const UL = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
br("chevrons-right", UL);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const EL = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
br("info", EL);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BL = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
br("link", BL);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ZL = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
br("pencil", ZL);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const RL = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
br("trash", RL);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _L = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), FL = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Hn = (t) => {
  const e = FL(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Ed = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), IL = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var HL = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const YL = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...HL,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Ed("lucide", s),
      ...!a && !IL(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nr = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(YL, {
      ref: a,
      iconNode: e,
      className: Ed(
        `lucide-${_L(Hn(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Hn(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const XL = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Nr("check-check", XL);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const KL = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Nr("chevrons-left", KL);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const GL = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Nr("chevrons-right", GL);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const QL = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Nr("info", QL);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const JL = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Nr("link", JL);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const e9 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Nr("pencil", e9);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t9 = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Nr("trash", t9);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r9 = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), o9 = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Yn = (t) => {
  const e = o9(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Bd = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), a9 = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var s9 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n9 = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...s9,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Bd("lucide", s),
      ...!a && !a9(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mr = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(n9, {
      ref: a,
      iconNode: e,
      className: Bd(
        `lucide-${r9(Yn(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Yn(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i9 = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Mr("check-check", i9);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c9 = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Mr("chevrons-left", c9);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l9 = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Mr("chevrons-right", l9);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h9 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Mr("info", h9);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d9 = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Mr("link", d9);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u9 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Mr("pencil", u9);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p9 = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Mr("trash", p9);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m9 = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), f9 = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Xn = (t) => {
  const e = f9(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Zd = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), k9 = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var y9 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g9 = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...y9,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Zd("lucide", s),
      ...!a && !k9(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cr = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(g9, {
      ref: a,
      iconNode: e,
      className: Zd(
        `lucide-${m9(Xn(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Xn(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v9 = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Cr("check-check", v9);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w9 = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Cr("chevrons-left", w9);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x9 = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Cr("chevrons-right", x9);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b9 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Cr("info", b9);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N9 = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Cr("link", N9);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M9 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Cr("pencil", M9);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C9 = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Cr("trash", C9);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A9 = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), L9 = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Kn = (t) => {
  const e = L9(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Rd = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), z9 = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var W9 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j9 = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...W9,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Rd("lucide", s),
      ...!a && !z9(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jt = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(j9, {
      ref: a,
      iconNode: e,
      className: Rd(
        `lucide-${A9(Kn(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Kn(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q9 = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Jt("check-check", q9);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $9 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
Jt("chevron-down", $9);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S9 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
Jt("chevron-up", S9);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V9 = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Jt("chevrons-left", V9);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T9 = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Jt("chevrons-right", T9);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P9 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Jt("info", P9);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D9 = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Jt("link", D9);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O9 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Jt("pencil", O9);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U9 = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Jt("trash", U9);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E9 = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), B9 = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Gn = (t) => {
  const e = B9(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, _d = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), Z9 = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var R9 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _9 = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...R9,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: _d("lucide", s),
      ...!a && !Z9(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const er = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(_9, {
      ref: a,
      iconNode: e,
      className: _d(
        `lucide-${E9(Gn(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Gn(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F9 = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
er("check-check", F9);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I9 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
er("chevron-down", I9);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H9 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
er("chevron-up", H9);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y9 = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
er("chevrons-left", Y9);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X9 = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
er("chevrons-right", X9);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K9 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
er("info", K9);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G9 = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
er("link", G9);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q9 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
er("pencil", Q9);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J9 = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
er("trash", J9);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ez = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), tz = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Qn = (t) => {
  const e = tz(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Fd = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), rz = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var oz = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const az = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...oz,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Fd("lucide", s),
      ...!a && !rz(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tr = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(az, {
      ref: a,
      iconNode: e,
      className: Fd(
        `lucide-${ez(Qn(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Qn(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sz = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
tr("check-check", sz);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nz = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
tr("chevron-down", nz);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iz = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
tr("chevron-up", iz);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cz = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
tr("chevrons-left", cz);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lz = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
tr("chevrons-right", lz);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hz = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
tr("info", hz);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dz = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
tr("link", dz);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uz = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
tr("pencil", uz);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pz = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
tr("trash", pz);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mz = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), fz = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Jn = (t) => {
  const e = fz(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Id = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), kz = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var yz = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gz = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...yz,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Id("lucide", s),
      ...!a && !kz(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rr = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(gz, {
      ref: a,
      iconNode: e,
      className: Id(
        `lucide-${mz(Jn(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Jn(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vz = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
rr("check-check", vz);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wz = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
rr("chevron-down", wz);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xz = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
rr("chevron-up", xz);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bz = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
rr("chevrons-left", bz);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nz = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
rr("chevrons-right", Nz);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mz = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
rr("info", Mz);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cz = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
rr("link", Cz);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Az = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
rr("pencil", Az);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lz = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
rr("trash", Lz);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zz = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Wz = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), ei = (t) => {
  const e = Wz(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Hd = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), jz = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var qz = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $z = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...qz,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Hd("lucide", s),
      ...!a && !jz(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const or = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d($z, {
      ref: a,
      iconNode: e,
      className: Hd(
        `lucide-${zz(ei(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = ei(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sz = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
or("check-check", Sz);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vz = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
or("chevron-down", Vz);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tz = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
or("chevron-up", Tz);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pz = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
or("chevrons-left", Pz);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dz = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
or("chevrons-right", Dz);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oz = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
or("info", Oz);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uz = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
or("link", Uz);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ez = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
or("pencil", Ez);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bz = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
or("trash", Bz);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zz = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Rz = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), ti = (t) => {
  const e = Rz(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Yd = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), _z = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Fz = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Iz = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...Fz,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Yd("lucide", s),
      ...!a && !_z(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ar = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(Iz, {
      ref: a,
      iconNode: e,
      className: Yd(
        `lucide-${Zz(ti(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = ti(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hz = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
ar("check-check", Hz);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yz = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
ar("chevron-down", Yz);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xz = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
ar("chevron-up", Xz);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kz = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
ar("chevrons-left", Kz);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gz = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
ar("chevrons-right", Gz);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qz = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
ar("info", Qz);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jz = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
ar("link", Jz);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eW = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
ar("pencil", eW);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tW = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
ar("trash", tW);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rW = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), oW = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), ri = (t) => {
  const e = oW(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Xd = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), aW = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var sW = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nW = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...sW,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Xd("lucide", s),
      ...!a && !aW(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mt = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(nW, {
      ref: a,
      iconNode: e,
      className: Xd(
        `lucide-${rW(ri(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = ri(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iW = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
mt("check-check", iW);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cW = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
mt("chevron-down", cW);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lW = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
mt("chevron-up", lW);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hW = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
mt("chevrons-left", hW);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dW = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
mt("chevrons-right", dW);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uW = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
mt("info", uW);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pW = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
mt("link", pW);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mW = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
mt("pencil", mW);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fW = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
mt("trash", fW);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kW = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
mt("x", kW);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yW = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), gW = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), oi = (t) => {
  const e = gW(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Kd = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), vW = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var wW = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xW = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...wW,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Kd("lucide", s),
      ...!a && !vW(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ft = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(xW, {
      ref: a,
      iconNode: e,
      className: Kd(
        `lucide-${yW(oi(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = oi(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bW = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
ft("check-check", bW);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const NW = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
ft("chevron-down", NW);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MW = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
ft("chevron-up", MW);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CW = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
ft("chevrons-left", CW);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AW = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
ft("chevrons-right", AW);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LW = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
ft("info", LW);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zW = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
ft("link", zW);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const WW = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
ft("pencil", WW);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jW = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
ft("trash", jW);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qW = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
ft("x", qW);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $W = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), SW = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), ai = (t) => {
  const e = SW(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Gd = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), VW = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var TW = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PW = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...TW,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Gd("lucide", s),
      ...!a && !VW(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kt = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(PW, {
      ref: a,
      iconNode: e,
      className: Gd(
        `lucide-${$W(ai(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = ai(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const DW = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
kt("check-check", DW);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const OW = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
kt("chevron-down", OW);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const UW = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
kt("chevron-up", UW);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const EW = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
kt("chevrons-left", EW);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BW = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
kt("chevrons-right", BW);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ZW = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
kt("info", ZW);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const RW = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
kt("link", RW);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _W = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
kt("pencil", _W);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const FW = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
kt("trash", FW);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const IW = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
kt("x", IW);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const HW = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), YW = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), si = (t) => {
  const e = YW(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Qd = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), XW = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var KW = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const GW = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...KW,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Qd("lucide", s),
      ...!a && !XW(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yt = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(GW, {
      ref: a,
      iconNode: e,
      className: Qd(
        `lucide-${HW(si(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = si(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const QW = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
yt("check-check", QW);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const JW = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
yt("chevron-down", JW);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ej = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
yt("chevron-up", ej);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tj = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
yt("chevrons-left", tj);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rj = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
yt("chevrons-right", rj);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oj = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
yt("info", oj);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aj = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
yt("link", aj);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sj = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
yt("pencil", sj);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nj = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
yt("trash", nj);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ij = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
yt("x", ij);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cj = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), lj = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), ni = (t) => {
  const e = lj(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Jd = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), hj = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var dj = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uj = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...dj,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: Jd("lucide", s),
      ...!a && !hj(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gt = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(uj, {
      ref: a,
      iconNode: e,
      className: Jd(
        `lucide-${cj(ni(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = ni(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pj = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
gt("check-check", pj);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mj = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
gt("chevron-down", mj);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fj = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
gt("chevron-up", fj);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kj = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
gt("chevrons-left", kj);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yj = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
gt("chevrons-right", yj);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gj = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
gt("info", gj);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vj = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
gt("link", vj);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wj = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
gt("pencil", wj);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xj = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
gt("trash", xj);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bj = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
gt("x", bj);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nj = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Mj = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), ii = (t) => {
  const e = Mj(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, e1 = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), Cj = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Aj = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lj = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...Aj,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: e1("lucide", s),
      ...!a && !Cj(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vt = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(Lj, {
      ref: a,
      iconNode: e,
      className: e1(
        `lucide-${Nj(ii(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = ii(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zj = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
vt("check-check", zj);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wj = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
vt("chevron-down", Wj);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jj = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
vt("chevron-up", jj);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qj = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
vt("chevrons-left", qj);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $j = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
vt("chevrons-right", $j);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sj = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
vt("info", Sj);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vj = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
vt("link", Vj);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tj = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
vt("pencil", Tj);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pj = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
vt("trash", Pj);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dj = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
vt("x", Dj);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oj = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Uj = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), ci = (t) => {
  const e = Uj(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, t1 = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), Ej = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Bj = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zj = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...Bj,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: t1("lucide", s),
      ...!a && !Ej(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wt = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(Zj, {
      ref: a,
      iconNode: e,
      className: t1(
        `lucide-${Oj(ci(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = ci(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rj = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
wt("check-check", Rj);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _j = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
wt("chevron-down", _j);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fj = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
wt("chevron-up", Fj);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ij = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
wt("chevrons-left", Ij);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hj = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
wt("chevrons-right", Hj);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yj = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
wt("info", Yj);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xj = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
wt("link", Xj);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kj = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
wt("pencil", Kj);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gj = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
wt("trash", Gj);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qj = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
wt("x", Qj);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jj = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), eq = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), li = (t) => {
  const e = eq(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, r1 = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), tq = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var rq = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oq = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...rq,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: r1("lucide", s),
      ...!a && !tq(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xt = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(oq, {
      ref: a,
      iconNode: e,
      className: r1(
        `lucide-${Jj(li(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = li(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aq = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
xt("check-check", aq);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sq = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
xt("chevron-down", sq);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nq = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
xt("chevron-up", nq);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iq = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
xt("chevrons-left", iq);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cq = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
xt("chevrons-right", cq);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lq = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
xt("info", lq);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hq = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
xt("link", hq);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dq = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
xt("pencil", dq);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uq = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
xt("trash", uq);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pq = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
xt("x", pq);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mq = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), fq = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), hi = (t) => {
  const e = fq(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, o1 = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), kq = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var yq = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gq = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...yq,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: o1("lucide", s),
      ...!a && !kq(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bt = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(gq, {
      ref: a,
      iconNode: e,
      className: o1(
        `lucide-${mq(hi(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = hi(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vq = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
bt("check-check", vq);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wq = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
bt("chevron-down", wq);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xq = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
bt("chevron-up", xq);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bq = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
bt("chevrons-left", bq);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nq = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
bt("chevrons-right", Nq);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mq = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
bt("info", Mq);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cq = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
bt("link", Cq);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Aq = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
bt("pencil", Aq);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lq = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
bt("trash", Lq);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zq = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
bt("x", zq);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wq = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), jq = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), di = (t) => {
  const e = jq(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, a1 = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), qq = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var $q = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sq = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...$q,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: a1("lucide", s),
      ...!a && !qq(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nt = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(Sq, {
      ref: a,
      iconNode: e,
      className: a1(
        `lucide-${Wq(di(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = di(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vq = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Nt("check-check", Vq);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tq = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
Nt("chevron-down", Tq);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pq = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
Nt("chevron-up", Pq);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dq = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Nt("chevrons-left", Dq);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oq = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Nt("chevrons-right", Oq);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uq = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Nt("info", Uq);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eq = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Nt("link", Eq);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bq = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Nt("pencil", Bq);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zq = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Nt("trash", Zq);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rq = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
Nt("x", Rq);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _q = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Fq = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), ui = (t) => {
  const e = Fq(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, s1 = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), Iq = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Hq = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yq = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...Hq,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: s1("lucide", s),
      ...!a && !Iq(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mt = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(Yq, {
      ref: a,
      iconNode: e,
      className: s1(
        `lucide-${_q(ui(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = ui(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xq = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Mt("check-check", Xq);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kq = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
Mt("chevron-down", Kq);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gq = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
Mt("chevron-up", Gq);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qq = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Mt("chevrons-left", Qq);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jq = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Mt("chevrons-right", Jq);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const e$ = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Mt("info", e$);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t$ = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Mt("link", t$);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r$ = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Mt("pencil", r$);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const o$ = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Mt("trash", o$);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a$ = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
Mt("x", a$);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s$ = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), n$ = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), pi = (t) => {
  const e = n$(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, n1 = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), i$ = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var c$ = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l$ = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...c$,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: n1("lucide", s),
      ...!a && !i$(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ct = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(l$, {
      ref: a,
      iconNode: e,
      className: n1(
        `lucide-${s$(pi(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = pi(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h$ = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Ct("check-check", h$);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d$ = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
Ct("chevron-down", d$);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u$ = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
Ct("chevron-up", u$);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p$ = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Ct("chevrons-left", p$);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m$ = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Ct("chevrons-right", m$);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f$ = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Ct("info", f$);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k$ = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Ct("link", k$);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y$ = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Ct("pencil", y$);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g$ = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Ct("trash", g$);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v$ = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
Ct("x", v$);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w$ = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), x$ = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), mi = (t) => {
  const e = x$(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, i1 = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), b$ = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var N$ = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M$ = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...N$,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: i1("lucide", s),
      ...!a && !b$(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const At = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(M$, {
      ref: a,
      iconNode: e,
      className: i1(
        `lucide-${w$(mi(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = mi(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C$ = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
At("check-check", C$);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A$ = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
At("chevron-down", A$);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L$ = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
At("chevron-up", L$);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z$ = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
At("chevrons-left", z$);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W$ = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
At("chevrons-right", W$);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j$ = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
At("info", j$);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q$ = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
At("link", q$);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $$ = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
At("pencil", $$);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S$ = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
At("trash", S$);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V$ = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
At("x", V$);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T$ = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), P$ = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), fi = (t) => {
  const e = P$(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, c1 = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), D$ = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var O$ = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U$ = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...O$,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: c1("lucide", s),
      ...!a && !D$(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lt = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(U$, {
      ref: a,
      iconNode: e,
      className: c1(
        `lucide-${T$(fi(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = fi(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E$ = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Lt("check-check", E$);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B$ = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
Lt("chevron-down", B$);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z$ = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
Lt("chevron-up", Z$);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R$ = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Lt("chevrons-left", R$);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _$ = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Lt("chevrons-right", _$);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F$ = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Lt("info", F$);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I$ = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Lt("link", I$);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H$ = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Lt("pencil", H$);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y$ = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Lt("trash", Y$);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X$ = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
Lt("x", X$);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K$ = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), G$ = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), ki = (t) => {
  const e = G$(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, l1 = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), Q$ = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var J$ = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eS = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...J$,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: l1("lucide", s),
      ...!a && !Q$(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zt = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(eS, {
      ref: a,
      iconNode: e,
      className: l1(
        `lucide-${K$(ki(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = ki(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tS = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
zt("check-check", tS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rS = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
zt("chevron-down", rS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oS = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
zt("chevron-up", oS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aS = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
zt("chevrons-left", aS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sS = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
zt("chevrons-right", sS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nS = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
zt("info", nS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iS = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
zt("link", iS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cS = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
zt("pencil", cS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lS = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
zt("trash", lS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hS = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
zt("x", hS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dS = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), uS = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), yi = (t) => {
  const e = uS(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, h1 = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), pS = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var mS = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fS = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...mS,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: h1("lucide", s),
      ...!a && !pS(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wt = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(fS, {
      ref: a,
      iconNode: e,
      className: h1(
        `lucide-${dS(yi(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = yi(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kS = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Wt("check-check", kS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yS = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
Wt("chevron-down", yS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gS = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
Wt("chevron-up", gS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vS = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Wt("chevrons-left", vS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wS = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Wt("chevrons-right", wS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xS = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Wt("info", xS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bS = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Wt("link", bS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const NS = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Wt("pencil", NS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MS = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Wt("trash", MS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CS = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
Wt("x", CS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AS = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), LS = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), gi = (t) => {
  const e = LS(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, d1 = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), zS = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var WS = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jS = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...WS,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: d1("lucide", s),
      ...!a && !zS(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jt = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(jS, {
      ref: a,
      iconNode: e,
      className: d1(
        `lucide-${AS(gi(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = gi(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qS = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
jt("check-check", qS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $S = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
jt("chevron-down", $S);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const SS = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
jt("chevron-up", SS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const VS = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
jt("chevrons-left", VS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const TS = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
jt("chevrons-right", TS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PS = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
jt("info", PS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const DS = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
jt("link", DS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const OS = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
jt("pencil", OS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const US = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
jt("trash", US);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ES = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
jt("x", ES);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BS = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ZS = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), vi = (t) => {
  const e = ZS(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, u1 = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), RS = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var _S = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const FS = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ..._S,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: u1("lucide", s),
      ...!a && !RS(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qt = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(FS, {
      ref: a,
      iconNode: e,
      className: u1(
        `lucide-${BS(vi(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = vi(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const IS = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
qt("check-check", IS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const HS = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
qt("chevron-down", HS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const YS = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
qt("chevron-up", YS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const XS = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
qt("chevrons-left", XS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const KS = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
qt("chevrons-right", KS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const GS = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
qt("info", GS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const QS = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
qt("link", QS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const JS = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
qt("pencil", JS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eV = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
qt("trash", eV);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tV = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
qt("x", tV);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rV = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), oV = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), wi = (t) => {
  const e = oV(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, p1 = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), aV = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var sV = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nV = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...sV,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: p1("lucide", s),
      ...!a && !aV(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $t = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(nV, {
      ref: a,
      iconNode: e,
      className: p1(
        `lucide-${rV(wi(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = wi(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iV = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
$t("check-check", iV);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cV = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
$t("chevron-down", cV);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lV = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
$t("chevron-up", lV);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hV = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
$t("chevrons-left", hV);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dV = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
$t("chevrons-right", dV);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uV = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
$t("info", uV);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pV = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
$t("link", pV);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mV = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
$t("pencil", mV);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fV = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
$t("trash", fV);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kV = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
$t("x", kV);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yV = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), gV = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), xi = (t) => {
  const e = gV(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, m1 = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), vV = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var wV = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xV = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...wV,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: m1("lucide", s),
      ...!a && !vV(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const St = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(xV, {
      ref: a,
      iconNode: e,
      className: m1(
        `lucide-${yV(xi(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = xi(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bV = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
St("check-check", bV);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const NV = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
St("chevron-down", NV);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MV = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
St("chevron-up", MV);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CV = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
St("chevrons-left", CV);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AV = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
St("chevrons-right", AV);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LV = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
St("info", LV);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zV = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
St("link", zV);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const WV = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
St("pencil", WV);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jV = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
St("trash", jV);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qV = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
St("x", qV);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $V = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), SV = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), bi = (t) => {
  const e = SV(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, f1 = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), VV = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var TV = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PV = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...TV,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: f1("lucide", s),
      ...!a && !VV(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vt = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(PV, {
      ref: a,
      iconNode: e,
      className: f1(
        `lucide-${$V(bi(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = bi(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const DV = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Vt("check-check", DV);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const OV = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
Vt("chevron-down", OV);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const UV = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
Vt("chevron-up", UV);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const EV = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Vt("chevrons-left", EV);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BV = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Vt("chevrons-right", BV);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ZV = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Vt("info", ZV);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const RV = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Vt("link", RV);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _V = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Vt("pencil", _V);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const FV = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Vt("trash", FV);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const IV = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
Vt("x", IV);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const HV = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), YV = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Ni = (t) => {
  const e = YV(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, k1 = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), XV = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var KV = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const GV = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...KV,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: k1("lucide", s),
      ...!a && !XV(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tt = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(GV, {
      ref: a,
      iconNode: e,
      className: k1(
        `lucide-${HV(Ni(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Ni(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const QV = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Tt("check-check", QV);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const JV = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
Tt("chevron-down", JV);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eT = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
Tt("chevron-up", eT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tT = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Tt("chevrons-left", tT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rT = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Tt("chevrons-right", rT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oT = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Tt("info", oT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aT = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Tt("link", aT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sT = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Tt("pencil", sT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nT = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Tt("trash", nT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iT = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
Tt("x", iT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cT = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), lT = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Mi = (t) => {
  const e = lT(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, y1 = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), hT = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var dT = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uT = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...dT,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: y1("lucide", s),
      ...!a && !hT(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pt = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(uT, {
      ref: a,
      iconNode: e,
      className: y1(
        `lucide-${cT(Mi(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Mi(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pT = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Pt("check-check", pT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mT = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
Pt("chevron-down", mT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fT = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
Pt("chevron-up", fT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kT = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Pt("chevrons-left", kT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yT = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Pt("chevrons-right", yT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gT = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Pt("info", gT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vT = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Pt("link", vT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wT = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Pt("pencil", wT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xT = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Pt("trash", xT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bT = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
Pt("x", bT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const NT = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), MT = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Ci = (t) => {
  const e = MT(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, g1 = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), CT = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var AT = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LT = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...AT,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: g1("lucide", s),
      ...!a && !CT(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dt = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(LT, {
      ref: a,
      iconNode: e,
      className: g1(
        `lucide-${NT(Ci(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Ci(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zT = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Dt("check-check", zT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const WT = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
Dt("chevron-down", WT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jT = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
Dt("chevron-up", jT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qT = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Dt("chevrons-left", qT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $T = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Dt("chevrons-right", $T);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ST = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Dt("info", ST);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const VT = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Dt("link", VT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const TT = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Dt("pencil", TT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PT = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Dt("trash", PT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const DT = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
Dt("x", DT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const OT = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), UT = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Ai = (t) => {
  const e = UT(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, v1 = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), ET = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var BT = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ZT = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...BT,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: v1("lucide", s),
      ...!a && !ET(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ot = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(ZT, {
      ref: a,
      iconNode: e,
      className: v1(
        `lucide-${OT(Ai(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Ai(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const RT = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Ot("check-check", RT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _T = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
Ot("chevron-down", _T);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const FT = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
Ot("chevron-up", FT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const IT = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Ot("chevrons-left", IT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const HT = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Ot("chevrons-right", HT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const YT = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Ot("info", YT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const XT = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Ot("link", XT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const KT = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Ot("pencil", KT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const GT = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Ot("trash", GT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const QT = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
Ot("x", QT);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const JT = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), eP = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Li = (t) => {
  const e = eP(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, w1 = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), tP = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var rP = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oP = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...rP,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: w1("lucide", s),
      ...!a && !tP(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ut = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(oP, {
      ref: a,
      iconNode: e,
      className: w1(
        `lucide-${JT(Li(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Li(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aP = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Ut("check-check", aP);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sP = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
Ut("chevron-down", sP);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nP = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
Ut("chevron-up", nP);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iP = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Ut("chevrons-left", iP);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cP = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Ut("chevrons-right", cP);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lP = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Ut("info", lP);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hP = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Ut("link", hP);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dP = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Ut("pencil", dP);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uP = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Ut("trash", uP);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pP = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
Ut("x", pP);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mP = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), fP = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), zi = (t) => {
  const e = fP(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, x1 = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), kP = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var yP = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gP = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...yP,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: x1("lucide", s),
      ...!a && !kP(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Et = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(gP, {
      ref: a,
      iconNode: e,
      className: x1(
        `lucide-${mP(zi(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = zi(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vP = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Et("check-check", vP);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wP = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
Et("chevron-down", wP);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xP = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
Et("chevron-up", xP);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bP = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Et("chevrons-left", bP);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const NP = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Et("chevrons-right", NP);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MP = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Et("info", MP);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CP = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Et("link", CP);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AP = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Et("pencil", AP);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LP = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Et("trash", LP);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zP = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
Et("x", zP);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const WP = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), jP = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Wi = (t) => {
  const e = jP(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, b1 = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), qP = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var $P = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const SP = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...$P,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: b1("lucide", s),
      ...!a && !qP(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bt = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(SP, {
      ref: a,
      iconNode: e,
      className: b1(
        `lucide-${WP(Wi(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Wi(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const VP = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Bt("check-check", VP);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const TP = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
Bt("chevron-down", TP);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PP = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
Bt("chevron-up", PP);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const DP = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Bt("chevrons-left", DP);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const OP = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Bt("chevrons-right", OP);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const UP = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Bt("info", UP);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const EP = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Bt("link", EP);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BP = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Bt("pencil", BP);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ZP = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Bt("trash", ZP);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const RP = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
Bt("x", RP);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _P = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), FP = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), ji = (t) => {
  const e = FP(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, N1 = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), IP = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var HP = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const YP = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...HP,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: N1("lucide", s),
      ...!a && !IP(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zt = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(YP, {
      ref: a,
      iconNode: e,
      className: N1(
        `lucide-${_P(ji(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = ji(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const XP = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Zt("check-check", XP);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const KP = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
Zt("chevron-down", KP);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const GP = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
Zt("chevron-up", GP);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const QP = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Zt("chevrons-left", QP);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const JP = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Zt("chevrons-right", JP);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eD = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Zt("info", eD);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tD = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Zt("link", tD);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rD = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Zt("pencil", rD);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oD = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Zt("trash", oD);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aD = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
Zt("x", aD);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sD = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), nD = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), qi = (t) => {
  const e = nD(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, M1 = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), iD = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var cD = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lD = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...cD,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: M1("lucide", s),
      ...!a && !iD(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rt = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(lD, {
      ref: a,
      iconNode: e,
      className: M1(
        `lucide-${sD(qi(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = qi(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hD = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Rt("check-check", hD);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dD = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
Rt("chevron-down", dD);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uD = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
Rt("chevron-up", uD);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pD = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Rt("chevrons-left", pD);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mD = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Rt("chevrons-right", mD);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fD = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Rt("info", fD);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kD = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Rt("link", kD);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yD = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Rt("pencil", yD);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gD = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Rt("trash", gD);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vD = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
Rt("x", vD);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wD = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), xD = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), $i = (t) => {
  const e = xD(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, C1 = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), bD = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ND = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MD = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...ND,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: C1("lucide", s),
      ...!a && !bD(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _t = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(MD, {
      ref: a,
      iconNode: e,
      className: C1(
        `lucide-${wD($i(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = $i(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CD = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
_t("check-check", CD);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AD = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
_t("chevron-down", AD);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LD = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
_t("chevron-up", LD);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zD = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
_t("chevrons-left", zD);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const WD = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
_t("chevrons-right", WD);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jD = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
_t("info", jD);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qD = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
_t("link", qD);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $D = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
_t("pencil", $D);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const SD = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
_t("trash", SD);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const VD = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
_t("x", VD);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const TD = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), PD = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Si = (t) => {
  const e = PD(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, A1 = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), DD = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var OD = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const UD = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...OD,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: A1("lucide", s),
      ...!a && !DD(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ft = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(UD, {
      ref: a,
      iconNode: e,
      className: A1(
        `lucide-${TD(Si(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Si(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ED = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Ft("check-check", ED);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BD = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
Ft("chevron-down", BD);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ZD = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
Ft("chevron-up", ZD);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const RD = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Ft("chevrons-left", RD);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _D = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Ft("chevrons-right", _D);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const FD = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Ft("info", FD);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ID = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Ft("link", ID);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const HD = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Ft("pencil", HD);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const YD = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Ft("trash", YD);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const XD = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
Ft("x", XD);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const KD = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), GD = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Vi = (t) => {
  const e = GD(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, L1 = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), QD = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var JD = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eO = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...JD,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: L1("lucide", s),
      ...!a && !QD(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const It = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(eO, {
      ref: a,
      iconNode: e,
      className: L1(
        `lucide-${KD(Vi(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Vi(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tO = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
It("check-check", tO);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rO = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
It("chevron-down", rO);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oO = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
It("chevron-up", oO);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aO = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
It("chevrons-left", aO);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sO = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
It("chevrons-right", sO);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nO = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
It("info", nO);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iO = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
It("link", iO);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cO = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
It("pencil", cO);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lO = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
It("trash", lO);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hO = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
It("x", hO);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dO = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), uO = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Ti = (t) => {
  const e = uO(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, z1 = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), pO = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var mO = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fO = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...mO,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: z1("lucide", s),
      ...!a && !pO(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ht = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(fO, {
      ref: a,
      iconNode: e,
      className: z1(
        `lucide-${dO(Ti(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Ti(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kO = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Ht("check-check", kO);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yO = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
Ht("chevron-down", yO);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gO = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
Ht("chevron-up", gO);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vO = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Ht("chevrons-left", vO);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wO = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Ht("chevrons-right", wO);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xO = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Ht("info", xO);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bO = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Ht("link", bO);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const NO = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Ht("pencil", NO);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MO = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Ht("trash", MO);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CO = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
Ht("x", CO);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AO = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), LO = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), Pi = (t) => {
  const e = LO(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, W1 = (...t) => t.filter((e, r, o) => !!e && e.trim() !== "" && o.indexOf(e) === r).join(" ").trim(), zO = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var WO = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jO = u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: i,
    ...n
  }, c) => d(
    "svg",
    {
      ref: c,
      ...WO,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(r) * 24 / Number(e) : r,
      className: W1("lucide", s),
      ...!a && !zO(n) && { "aria-hidden": "true" },
      ...n
    },
    [
      ...i.map(([l, h]) => d(l, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yt = (t, e) => {
  const r = u(
    ({ className: o, ...s }, a) => d(jO, {
      ref: a,
      iconNode: e,
      className: W1(
        `lucide-${AO(Pi(t))}`,
        `lucide-${t}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = Pi(t), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qO = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
Yt("check-check", qO);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $O = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
Yt("chevron-down", $O);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const SO = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
Yt("chevron-up", SO);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const VO = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Yt("chevrons-left", VO);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const TO = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Yt("chevrons-right", TO);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PO = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
Yt("info", PO);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const DO = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
Yt("link", DO);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const OO = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
Yt("pencil", OO);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const UO = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
Yt("trash", UO);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const EO = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
Yt("x", EO);
x({});
process.env.NODE_ENV;
const j1 = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
];
new Set(j1);
const BO = /* @__PURE__ */ new Set(["x", "y", "z"]);
j1.filter((t) => !BO.has(t));
x({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
x({ strict: !1 });
try {
  require("@emotion/is-prop-valid").default;
} catch {
}
const ZO = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), RO = "framerAppearId";
"" + ZO(RO);
x({});
const Di = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t);
Di("applewebkit/") && Di("chrome/");
x({});
process.env.NODE_ENV;
const q1 = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
];
new Set(q1);
const _O = /* @__PURE__ */ new Set(["x", "y", "z"]);
q1.filter((t) => !_O.has(t));
x({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
x({ strict: !1 });
try {
  require("@emotion/is-prop-valid").default;
} catch {
}
const FO = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), IO = "framerAppearId";
"" + FO(IO);
x({});
const Oi = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t);
Oi("applewebkit/") && Oi("chrome/");
x({});
process.env.NODE_ENV;
const $1 = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
];
new Set($1);
const HO = /* @__PURE__ */ new Set(["x", "y", "z"]);
$1.filter((t) => !HO.has(t));
x({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
x({ strict: !1 });
try {
  require("@emotion/is-prop-valid").default;
} catch {
}
const YO = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), XO = "framerAppearId";
"" + YO(XO);
x({});
const Ui = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t);
Ui("applewebkit/") && Ui("chrome/");
x({});
process.env.NODE_ENV;
const S1 = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
];
new Set(S1);
const KO = /* @__PURE__ */ new Set(["x", "y", "z"]);
S1.filter((t) => !KO.has(t));
x({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
x({ strict: !1 });
try {
  require("@emotion/is-prop-valid").default;
} catch {
}
const GO = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), QO = "framerAppearId";
"" + GO(QO);
x({});
const Ei = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t);
Ei("applewebkit/") && Ei("chrome/");
x({});
process.env.NODE_ENV;
const V1 = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
];
new Set(V1);
const JO = /* @__PURE__ */ new Set(["x", "y", "z"]);
V1.filter((t) => !JO.has(t));
x({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
x({ strict: !1 });
try {
  require("@emotion/is-prop-valid").default;
} catch {
}
const eU = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), tU = "framerAppearId";
"" + eU(tU);
x({});
const Bi = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t);
Bi("applewebkit/") && Bi("chrome/");
x({});
process.env.NODE_ENV;
const T1 = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
];
new Set(T1);
const rU = /* @__PURE__ */ new Set(["x", "y", "z"]);
T1.filter((t) => !rU.has(t));
x({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
x({ strict: !1 });
try {
  require("@emotion/is-prop-valid").default;
} catch {
}
const oU = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), aU = "framerAppearId";
"" + oU(aU);
x({});
const Zi = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t);
Zi("applewebkit/") && Zi("chrome/");
x({});
process.env.NODE_ENV;
const P1 = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
];
new Set(P1);
const sU = /* @__PURE__ */ new Set(["x", "y", "z"]);
P1.filter((t) => !sU.has(t));
x({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
x({ strict: !1 });
try {
  require("@emotion/is-prop-valid").default;
} catch {
}
const nU = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), iU = "framerAppearId";
"" + nU(iU);
x({});
const Ri = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t);
Ri("applewebkit/") && Ri("chrome/");
x({});
process.env.NODE_ENV;
const D1 = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
];
new Set(D1);
const cU = /* @__PURE__ */ new Set(["x", "y", "z"]);
D1.filter((t) => !cU.has(t));
x({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
x({ strict: !1 });
try {
  require("@emotion/is-prop-valid").default;
} catch {
}
const lU = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), hU = "framerAppearId";
"" + lU(hU);
x({});
const _i = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t);
_i("applewebkit/") && _i("chrome/");
x({});
process.env.NODE_ENV;
const O1 = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
];
new Set(O1);
const dU = /* @__PURE__ */ new Set(["x", "y", "z"]);
O1.filter((t) => !dU.has(t));
x({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
x({ strict: !1 });
try {
  require("@emotion/is-prop-valid").default;
} catch {
}
const uU = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), pU = "framerAppearId";
"" + uU(pU);
x({});
const Fi = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t);
Fi("applewebkit/") && Fi("chrome/");
x({});
process.env.NODE_ENV;
const U1 = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
];
new Set(U1);
const mU = /* @__PURE__ */ new Set(["x", "y", "z"]);
U1.filter((t) => !mU.has(t));
x({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
x({ strict: !1 });
try {
  require("@emotion/is-prop-valid").default;
} catch {
}
const fU = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), kU = "framerAppearId";
"" + fU(kU);
x({});
const Ii = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t);
Ii("applewebkit/") && Ii("chrome/");
x({});
process.env.NODE_ENV;
const E1 = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
];
new Set(E1);
const yU = /* @__PURE__ */ new Set(["x", "y", "z"]);
E1.filter((t) => !yU.has(t));
x({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
x({ strict: !1 });
try {
  require("@emotion/is-prop-valid").default;
} catch {
}
const gU = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), vU = "framerAppearId";
"" + gU(vU);
x({});
const Hi = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t);
Hi("applewebkit/") && Hi("chrome/");
x({});
process.env.NODE_ENV;
const B1 = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
];
new Set(B1);
const wU = /* @__PURE__ */ new Set(["x", "y", "z"]);
B1.filter((t) => !wU.has(t));
x({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
x({ strict: !1 });
try {
  require("@emotion/is-prop-valid").default;
} catch {
}
const xU = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), bU = "framerAppearId";
"" + xU(bU);
x({});
const Yi = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t);
Yi("applewebkit/") && Yi("chrome/");
x({});
process.env.NODE_ENV;
const Z1 = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
];
new Set(Z1);
const NU = /* @__PURE__ */ new Set(["x", "y", "z"]);
Z1.filter((t) => !NU.has(t));
x({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
x({ strict: !1 });
try {
  require("@emotion/is-prop-valid").default;
} catch {
}
const MU = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), CU = "framerAppearId";
"" + MU(CU);
x({});
const Xi = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t);
Xi("applewebkit/") && Xi("chrome/");
x({});
process.env.NODE_ENV;
const R1 = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
];
new Set(R1);
const AU = /* @__PURE__ */ new Set(["x", "y", "z"]);
R1.filter((t) => !AU.has(t));
x({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
x({ strict: !1 });
try {
  require("@emotion/is-prop-valid").default;
} catch {
}
const LU = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), zU = "framerAppearId";
"" + LU(zU);
x({});
const Ki = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t);
Ki("applewebkit/") && Ki("chrome/");
x({});
const _1 = (t, e, r) => r > e ? e : r < t ? t : r;
process.env.NODE_ENV;
const WU = /* @__NO_SIDE_EFFECTS__ */ (t) => t, zo = {
  test: (t) => typeof t == "number",
  parse: parseFloat,
  transform: (t) => t
}, F1 = {
  ...zo,
  transform: (t) => _1(0, 1, t)
};
({
  ...zo
});
const Fr = (t) => Math.round(t * 1e5) / 1e5, I1 = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function jU(t) {
  return t == null;
}
const qU = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, ba = (t, e) => (r) => !!(typeof r == "string" && qU.test(r) && r.startsWith(t) || e && !jU(r) && Object.prototype.hasOwnProperty.call(r, e)), H1 = (t, e, r) => (o) => {
  if (typeof o != "string")
    return o;
  const [s, a, i, n] = o.match(I1);
  return {
    [t]: parseFloat(s),
    [e]: parseFloat(a),
    [r]: parseFloat(i),
    alpha: n !== void 0 ? parseFloat(n) : 1
  };
}, $U = (t) => _1(0, 255, t), Po = {
  ...zo,
  transform: (t) => Math.round($U(t))
}, Rr = {
  test: /* @__PURE__ */ ba("rgb", "red"),
  parse: /* @__PURE__ */ H1("red", "green", "blue"),
  transform: ({ red: t, green: e, blue: r, alpha: o = 1 }) => "rgba(" + Po.transform(t) + ", " + Po.transform(e) + ", " + Po.transform(r) + ", " + Fr(F1.transform(o)) + ")"
};
function SU(t) {
  let e = "", r = "", o = "", s = "";
  return t.length > 5 ? (e = t.substring(1, 3), r = t.substring(3, 5), o = t.substring(5, 7), s = t.substring(7, 9)) : (e = t.substring(1, 2), r = t.substring(2, 3), o = t.substring(3, 4), s = t.substring(4, 5), e += e, r += r, o += o, s += s), {
    red: parseInt(e, 16),
    green: parseInt(r, 16),
    blue: parseInt(o, 16),
    alpha: s ? parseInt(s, 16) / 255 : 1
  };
}
const Gi = {
  test: /* @__PURE__ */ ba("#"),
  parse: SU,
  transform: Rr.transform
}, VU = /* @__NO_SIDE_EFFECTS__ */ (t) => ({
  test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
  parse: parseFloat,
  transform: (e) => `${e}${t}`
}), Qo = /* @__PURE__ */ VU("%");
({
  ...Qo
});
const io = {
  test: /* @__PURE__ */ ba("hsl", "hue"),
  parse: /* @__PURE__ */ H1("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: r, alpha: o = 1 }) => "hsla(" + Math.round(t) + ", " + Qo.transform(Fr(e)) + ", " + Qo.transform(Fr(r)) + ", " + Fr(F1.transform(o)) + ")"
}, vr = {
  test: (t) => Rr.test(t) || Gi.test(t) || io.test(t),
  parse: (t) => Rr.test(t) ? Rr.parse(t) : io.test(t) ? io.parse(t) : Gi.parse(t),
  transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? Rr.transform(t) : io.transform(t),
  getAnimatableNone: (t) => {
    const e = vr.parse(t);
    return e.alpha = 0, vr.transform(e);
  }
}, TU = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function PU(t) {
  var e, r;
  return isNaN(t) && typeof t == "string" && (((e = t.match(I1)) == null ? void 0 : e.length) || 0) + (((r = t.match(TU)) == null ? void 0 : r.length) || 0) > 0;
}
const Y1 = "number", X1 = "color", DU = "var", OU = "var(", Qi = "${}", UU = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function K1(t) {
  const e = t.toString(), r = [], o = {
    color: [],
    number: [],
    var: []
  }, s = [];
  let a = 0;
  const i = e.replace(UU, (n) => (vr.test(n) ? (o.color.push(a), s.push(X1), r.push(vr.parse(n))) : n.startsWith(OU) ? (o.var.push(a), s.push(DU), r.push(n)) : (o.number.push(a), s.push(Y1), r.push(parseFloat(n))), ++a, Qi)).split(Qi);
  return { values: r, split: i, indexes: o, types: s };
}
function G1(t) {
  return K1(t).values;
}
function Q1(t) {
  const { split: e, types: r } = K1(t), o = e.length;
  return (s) => {
    let a = "";
    for (let i = 0; i < o; i++)
      if (a += e[i], s[i] !== void 0) {
        const n = r[i];
        n === Y1 ? a += Fr(s[i]) : n === X1 ? a += vr.transform(s[i]) : a += s[i];
      }
    return a;
  };
}
const EU = (t) => typeof t == "number" ? 0 : vr.test(t) ? vr.getAnimatableNone(t) : t;
function BU(t) {
  const e = G1(t);
  return Q1(t)(e.map(EU));
}
const ZU = {
  test: PU,
  parse: G1,
  createTransformer: Q1,
  getAnimatableNone: BU
}, J1 = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
];
new Set(J1);
const RU = /* @__PURE__ */ new Set(["x", "y", "z"]);
J1.filter((t) => !RU.has(t));
({
  ...ZU
});
({
  ...zo
});
x({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
x({ strict: !1 });
try {
  require("@emotion/is-prop-valid").default;
} catch {
}
const _U = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), FU = "framerAppearId";
"" + _U(FU);
x({});
const Ji = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t);
Ji("applewebkit/") && Ji("chrome/");
function aI({
  tabs: t,
  defaultTab: e,
  actions: r,
  className: o
}) {
  var n;
  const [s, a] = O(e || ((n = t[0]) == null ? void 0 : n.id) || ""), i = t.find((c) => c.id === s);
  return /* @__PURE__ */ C("div", { className: "flex flex-row h-full", children: [
    /* @__PURE__ */ C(
      "div",
      {
        className: q(
          "w-12 flex flex-col justify-between py-4 z-50 bg-[var(--color-surface)] border-r border-[var(--color-border)]",
          o
        ),
        children: [
          /* @__PURE__ */ f("div", { className: "flex flex-col items-center space-y-4", children: t.map((c) => /* @__PURE__ */ f(
            "button",
            {
              onClick: () => a(c.id),
              className: q(
                "p-2 rounded transition-colors cursor-pointer text-[var(--color-text)] hover:bg-[var(--color-hover)]",
                s === c.id && "bg-[var(--color-hover)]"
              ),
              "aria-label": `Tab ${c.id}`,
              children: c.icon
            },
            c.id
          )) }),
          /* @__PURE__ */ f("div", { className: "flex flex-col items-center space-y-3 mb-[50px]", children: r == null ? void 0 : r.map((c) => /* @__PURE__ */ f(
            "span",
            {
              onClick: c.action,
              className: "cursor-pointer hover:bg-[var(--color-hover)] p-2 rounded transition-colors text-[var(--color-text)]",
              children: /* @__PURE__ */ f(Sp, { text: c.text, coordLeft: 70, children: c.icon })
            },
            c.id
          )) })
        ]
      }
    ),
    /* @__PURE__ */ f("div", { className: "relative w-64 bg-[var(--color-surface)] border-r border-[var(--color-border)] shadow-lg z-40 overflow-y-auto text-[var(--color-text)]", children: i == null ? void 0 : i.content })
  ] });
}
function IU({
  title: t,
  children: e,
  isOpen: r,
  onToggle: o,
  className: s
}) {
  const [a, i] = O(!1), n = r !== void 0 ? r : a, c = () => {
    o ? o() : i((l) => !l);
  };
  return /* @__PURE__ */ C("div", { className: "overflow-hidden shadow-sm", children: [
    /* @__PURE__ */ C(
      "button",
      {
        className: q("flex justify-between items-center w-full cursor-pointer p-4 hover:bg-background-surface transition-colors border-b border-[#E3E3E3] border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] text-primary-foreground dark:text-primary-foreground-dark", s),
        onClick: c,
        children: [
          /* @__PURE__ */ f("span", { className: "text-sm ", children: t }),
          n ? /* @__PURE__ */ f(ap, { className: "w-4 h-4" }) : /* @__PURE__ */ f(rp, { className: "w-4 h-4" })
        ]
      }
    ),
    /* @__PURE__ */ f(
      "div",
      {
        className: `transition-all duration-300 ease-in-out overflow-hidden ${n ? "max-h-screen py-2" : "max-h-0 py-0"}`,
        children: /* @__PURE__ */ f("div", { className: "text-sm text-gray-700 dark:text-gray-300", children: e })
      }
    )
  ] });
}
function sI({
  children: t,
  href: e,
  className: r = "",
  disabled: o = !1
}) {
  return /* @__PURE__ */ f(
    "a",
    {
      href: o ? "/" : e,
      "aria-disabled": o,
      className: q(
        `
        mt-5 inline-block min-w-[140px] rounded-lg bg-[var(--color-primary)] 
        px-4 py-2 text-center text-[16px] text-white transition 
        shadow-theme-xs hover:bg-[var(--color-primary-hover)] 
        disabled:pointer-events-none disabled:opacity-50
        `,
        o && "cursor-not-allowed",
        r
      ),
      children: t
    }
  );
}
const HU = {
  success: "bg-[var(--color-success)] text-[var(--color-on-success)]",
  error: "bg-[var(--color-error)] text-[var(--color-on-error)]",
  warning: "bg-[var(--color-warning)] text-[var(--color-on-warning)]",
  info: "bg-[var(--color-info)] text-[var(--color-on-info)]"
};
function nI({
  open: t,
  message: e,
  severity: r = "info",
  autoHideDuration: o = 6e3,
  onClose: s
}) {
  return Y(() => {
    if (t) {
      const a = setTimeout(s, o);
      return () => clearTimeout(a);
    }
  }, [t, o, s]), /* @__PURE__ */ f(
    "div",
    {
      className: `
        fixed bottom-4 right-4 z-50
        transition-all duration-300 ease-in-out
        ${t ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
      `,
      children: /* @__PURE__ */ C(
        "div",
        {
          className: `
          flex items-center gap-3 px-4 py-3 rounded-md shadow-lg w-80
          ${HU[r]}
        `,
          children: [
            /* @__PURE__ */ f("span", { className: "flex-1 text-sm", children: e }),
            /* @__PURE__ */ f("button", { onClick: s, "aria-label": "Fechar notificação", children: /* @__PURE__ */ f(xa, { className: "w-4 h-4 cursor-pointer hover:opacity-80 transition-opacity" }) })
          ]
        }
      )
    }
  );
}
function iI() {
  const [t, e] = O(null);
  Y(() => {
    const o = localStorage.getItem("theme"), s = window.matchMedia("(prefers-color-scheme: dark)").matches, a = o ? o === "dark" : s;
    e(a), r(a);
  }, []), Y(() => {
    t !== null && r(t);
  }, [t]);
  const r = (o) => {
    const s = document.documentElement;
    o ? (s.classList.add("dark"), s.setAttribute("data-theme", "dark"), localStorage.setItem("theme", "dark")) : (s.classList.remove("dark"), s.setAttribute("data-theme", "light"), localStorage.setItem("theme", "light"));
  };
  return t === null ? null : /* @__PURE__ */ f(
    "button",
    {
      type: "button",
      onClick: () => e(!t),
      className: `
        cursor-pointer flex items-center gap-2 px-4 py-2 rounded-md hover:opacity-90 transition border
         border-[var(--color-secondary-foreground)] text-[var(--color-secondary-foreground)]
         dark:border-[var(--color-secondary-foreground-dark)] dark:text-[var(--color-secondary-foreground-dark)]
        `,
      children: t ? "🌙 Modo Escuro" : "☀️ Modo Claro"
    }
  );
}
function cI({
  loading: t,
  className: e = "",
  width: r = "2rem",
  height: o = "2rem"
}) {
  return t ? /* @__PURE__ */ f(
    "div",
    {
      className: `flex items-center justify-center ${e}`,
      children: /* @__PURE__ */ f(
        "div",
        {
          style: { width: r, height: o },
          className: "rounded-full animate-spin border-4 border-[var(--color-primary)/30] border-t-[var(--color-primary)]"
        }
      )
    }
  ) : null;
}
function lI({
  isOpen: t,
  onClose: e,
  image: r,
  className: o
}) {
  return Y(() => {
    const s = (a) => {
      a.key === "Escape" && e();
    };
    return t && (document.addEventListener("keydown", s), document.body.style.overflow = "hidden"), () => {
      document.removeEventListener("keydown", s), document.body.style.overflow = "unset";
    };
  }, [t, e]), t ? /* @__PURE__ */ C(
    "div",
    {
      className: "overflow-scroll fixed inset-0 z-50 flex items-center justify-center py-6 sm:px-6 sm:py-12 overflow-auto bg-black/30 backdrop-blur-sm",
      children: [
        /* @__PURE__ */ f(
          "div",
          {
            className: "absolute inset-0",
            onClick: e
          }
        ),
        /* @__PURE__ */ C(
          "div",
          {
            onClick: (s) => s.stopPropagation(),
            className: q(
              "relative z-50 bg-background-base text-text-default shadow-xl transition-all overflow-auto w-full max-w-4xl rounded-lg max-h-[90%]",
              o
            ),
            children: [
              /* @__PURE__ */ f(
                "button",
                {
                  onClick: e,
                  className: "absolute top-3 right-3 text-[var(--color-text)] hover:text-gray-700 cursor-pointer bg-white rounded-full p-1",
                  "aria-label": "Fechar modal",
                  children: /* @__PURE__ */ f(
                    "svg",
                    {
                      className: "w-5 h-5",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: 2,
                      viewBox: "0 0 24 24",
                      children: /* @__PURE__ */ f(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          d: "M6 18L18 6M6 6l12 12"
                        }
                      )
                    }
                  )
                }
              ),
              /* @__PURE__ */ f(
                "img",
                {
                  src: r,
                  alt: "Visualização ampliada",
                  className: "w-full h-auto object-contain rounded-b-lg"
                }
              )
            ]
          }
        )
      ]
    }
  ) : null;
}
function hI({
  label: t,
  value: e,
  error: r = !1,
  messageError: o,
  onChangeValueArray: s,
  options: a,
  placeholder: i = "",
  isValidating: n = !1,
  externalClassName: c,
  ...l
}) {
  const [h, p] = O(""), [m, k] = O(a);
  Y(() => {
    m.length > 0 && p(m[0].value.toString());
  }, [m]);
  const y = () => {
    h !== "" && !e.includes(h) && (s([...e, h]), k(
      m.filter((g) => g.value !== h)
    ));
  };
  return /* @__PURE__ */ C("div", { className: q("w-full mb-3", c), children: [
    /* @__PURE__ */ C("div", { className: "flex items-center", children: [
      /* @__PURE__ */ f(
        I0,
        {
          isValidating: n,
          value: h || "",
          error: r,
          placeholder: i,
          onChange: (g) => {
            p(g.target.value);
          },
          options: m,
          className: "w-full",
          label: t,
          ...l
        },
        m.length
      ),
      /* @__PURE__ */ f(
        go,
        {
          disabled: !h,
          type: "button",
          onClick: () => {
            y(), p("");
          },
          className: "ml-[15px] mt-[30px]",
          children: "Adicionar"
        }
      )
    ] }),
    n && r && /* @__PURE__ */ f("p", { className: "mt-2 text-xs text-danger-700", children: o || "Campo obrigatório!" }),
    e.length > 0 && /* @__PURE__ */ f("div", { className: "mt-2 flex flex-row items-center justify-start flex-wrap", children: e.map((g) => {
      var v;
      return /* @__PURE__ */ C(
        "div",
        {
          className: q(
            "flex items-center justify-between px-3 py-1 mt-1 text-sm border rounded-[5px] max-w-[32%] mr-1 mr-1 mb-2",
            "border-gray-300",
            "bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)]",
            "text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)]"
          ),
          children: [
            /* @__PURE__ */ f("span", { children: ((v = a.find((w) => w.value === g)) == null ? void 0 : v.label) || g }),
            /* @__PURE__ */ f(
              "button",
              {
                type: "button",
                onClick: () => {
                  s(e.filter((b) => b !== g));
                  const w = a.find(
                    (b) => b.value === g
                  );
                  w && k([...m, w]);
                },
                className: "text-danger-500 hover:text-danger-700 cursor-pointer ml-2",
                children: /* @__PURE__ */ f(xa, { className: "w-[15px] h-[15px]" })
              }
            )
          ]
        },
        g
      );
    }) })
  ] });
}
function dI({
  data: t,
  columns: e,
  rowActions: r,
  renderExpandedRow: o
}) {
  const [s, a] = O(/* @__PURE__ */ new Set()), [i, n] = O(!1), c = (l) => {
    n(!0), a((h) => {
      const p = /* @__PURE__ */ new Set();
      return h.has(l) || p.add(l), p;
    });
  };
  return /* @__PURE__ */ f("div", { className: "shadow-sm border border-gray-200 rounded-[10px] overflow-x-auto w-full", children: /* @__PURE__ */ C("table", { className: "min-w-[800px] table-auto w-full", children: [
    /* @__PURE__ */ f("thead", { children: /* @__PURE__ */ C("tr", { className: "border-b border-gray-200 bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)]", children: [
      e.map((l) => /* @__PURE__ */ f(
        "th",
        {
          className: "px-4 py-2 text-[16px] font-normal text-left text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)]",
          children: l.title
        },
        l.key
      )),
      /* @__PURE__ */ f("th", { className: "px-4 py-2 text-center" })
    ] }) }),
    /* @__PURE__ */ f("tbody", { children: !t || t.length === 0 ? /* @__PURE__ */ f("tr", { children: /* @__PURE__ */ f(
      "td",
      {
        colSpan: e.length + 1,
        className: "px-4 py-2 text-center text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)]",
        children: "Nenhum dado disponível"
      }
    ) }) : t.map((l, h) => /* @__PURE__ */ C(D0.Fragment, { children: [
      /* @__PURE__ */ C(
        "tr",
        {
          className: `cursor-pointer hover:bg-[var(--color-primary)] dark:hover:bg-[var(--color-primary-dark)] ${h === t.length - 1 ? "" : "border-b border-gray-200"}`,
          onClick: () => !(r != null && r(l)) && c(h),
          children: [
            e.map((p) => {
              const m = l[p.key];
              return /* @__PURE__ */ f(
                "td",
                {
                  className: "px-4 py-2 text-[14px] font-normal text-left text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)]",
                  children: p.render ? p.render(m, l) : m
                },
                String(p.key)
              );
            }),
            /* @__PURE__ */ f("td", { className: "px-2 py-1 text-center align-middle whitespace-nowrap w-1", children: /* @__PURE__ */ C("div", { className: "flex items-center justify-center gap-1", children: [
              /* @__PURE__ */ f(Lr, { text: "Abrir/Fechar", children: /* @__PURE__ */ f(
                "button",
                {
                  className: "text-[20px] text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)] mr-3",
                  onClick: () => (r == null ? void 0 : r(l)) && c(h),
                  children: s.has(h) ? "-" : "+"
                }
              ) }),
              r && r(l)
            ] }) })
          ]
        }
      ),
      s.has(h) && /* @__PURE__ */ f("tr", { children: /* @__PURE__ */ f(
        "td",
        {
          colSpan: e.length + 1,
          className: `p-4 ${i ? "animate-slide-down" : ""}`,
          onAnimationEnd: () => n(!1),
          children: /* @__PURE__ */ f("div", { className: "overflow-hidden", children: o(l) })
        }
      ) })
    ] }, h)) })
  ] }) });
}
function uI({
  className: t,
  label: e,
  error: r = !1,
  success: o = !1,
  disabled: s = !1,
  messageError: a,
  isValidating: i = !1,
  value: n,
  onChange: c,
  ...l
}) {
  const h = (m) => {
    const y = m.target.value.replace(/\D/g, "");
    let g = "";
    y.length > 0 && (g += y.substring(0, 2)), y.length >= 3 && (g += "/" + y.substring(2, 4)), y.length >= 5 && (g += "/" + y.substring(4, 8)), c(g, y);
  };
  let p = `
    h-10 w-full rounded-[5px] appearance-none px-4 py-2.5 text-sm shadow-sm transition-colors 
    duration-150 border focus:outline-none appearance-none transition duration-200
    text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)]
    bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)]
    placeholder:text-gray-500
    border
  `;
  return s ? p += " opacity-50 cursor-not-allowed" : r && i ? p += " border-danger-700" : o ? p += " border-success" : p += " border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary/30", t && (p += ` ${t}`), /* @__PURE__ */ C("div", { className: "w-full mb-3", children: [
    e && /* @__PURE__ */ f(Lo, { className: "mb-2", children: e }),
    /* @__PURE__ */ C("div", { className: "relative", children: [
      /* @__PURE__ */ f(
        "input",
        {
          ...l,
          type: "text",
          value: n,
          onChange: h,
          disabled: s,
          className: p,
          maxLength: 10,
          placeholder: l.placeholder || "dd/mm/aaaa"
        }
      ),
      i && r && /* @__PURE__ */ f("p", { className: "mt-[10px] text-xs text-danger-700", children: a || "Campo obrigatório!" })
    ] })
  ] });
}
function pI({
  label: t,
  value: e,
  error: r = !1,
  messageError: o,
  onChangeValueArray: s,
  placeholder: a = "",
  isValidating: i = !1,
  ...n
}) {
  const [c, l] = O(""), h = () => {
    const k = c.trim();
    k !== "" && !e.includes(k) && (s([...e, k]), l(""));
  }, p = (k) => {
    s(e.filter((y) => y !== k));
  };
  let m = `
    h-10 w-full rounded-[5px] border appearance-none px-4 py-2.5 text-sm
    text-[var(--color-primary-foreground)] 
    dark:text-[var(--color-primary-foreground-dark)]
    placeholder:text-gray-400
    bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)]
    focus:outline-none shadow-sm transition-colors duration-150
    focus:ring-primary/10 focus:border-gray-500
    border-gray-300 dark:border-gray-700
  `;
  return r && i && (m += " border-danger-900"), /* @__PURE__ */ C("div", { className: "w-full mb-3", children: [
    /* @__PURE__ */ C("div", { className: "flex items-center", children: [
      /* @__PURE__ */ f(
        F0,
        {
          value: c,
          onChange: (k) => l(k.target.value),
          placeholder: a,
          className: m,
          ...n,
          isValidating: i,
          error: r,
          label: t
        }
      ),
      /* @__PURE__ */ f(
        go,
        {
          disabled: !c,
          type: "button",
          onClick: () => {
            h(), l("");
          },
          className: "ml-[15px] mt-[30px]",
          children: "Adicionar"
        }
      )
    ] }),
    i && r && /* @__PURE__ */ f("p", { className: "mt-2 text-xs text-danger-700", children: o || "Campo obrigatório!" }),
    e.length > 0 && /* @__PURE__ */ f("div", { className: "mt-2 flex flex-row items-center justify-between flex-wrap", children: e.map((k, y) => /* @__PURE__ */ C(
      "div",
      {
        className: `
                flex items-center justify-between px-3 py-1 mt-1 text-sm
                text-[var(--color-primary-foreground)]
                dark:text-[var(--color-primary-foreground-dark)]
                border border-gray-300 dark:border-gray-700
                rounded-[5px] max-w-[32%] mr-1
              `,
        children: [
          /* @__PURE__ */ f("span", { children: k }),
          /* @__PURE__ */ f(
            "button",
            {
              type: "button",
              onClick: () => p(k),
              className: "text-danger-500 hover:text-danger-700 cursor-pointer",
              children: /* @__PURE__ */ f(xa, { className: "w-[15px] h-[15px]" })
            }
          )
        ]
      },
      y
    )) })
  ] });
}
const eu = 6048e5, YU = 864e5, ec = Symbol.for("constructDateFrom");
function ee(t, e) {
  return typeof t == "function" ? t(e) : t && typeof t == "object" && ec in t ? t[ec](e) : t instanceof Date ? new t.constructor(e) : new Date(e);
}
function B(t, e) {
  return ee(e || t, t);
}
function Do(t, e, r) {
  const o = B(t, r == null ? void 0 : r.in);
  return isNaN(e) ? ee(t, NaN) : (e && o.setDate(o.getDate() + e), o);
}
function tu(t, e, r) {
  const o = B(t, r == null ? void 0 : r.in);
  if (isNaN(e)) return ee(t, NaN);
  if (!e)
    return o;
  const s = o.getDate(), a = ee(t, o.getTime());
  a.setMonth(o.getMonth() + e + 1, 0);
  const i = a.getDate();
  return s >= i ? a : (o.setFullYear(
    a.getFullYear(),
    a.getMonth(),
    s
  ), o);
}
let XU = {};
function Wo() {
  return XU;
}
function wr(t, e) {
  var n, c, l, h;
  const r = Wo(), o = (e == null ? void 0 : e.weekStartsOn) ?? ((c = (n = e == null ? void 0 : e.locale) == null ? void 0 : n.options) == null ? void 0 : c.weekStartsOn) ?? r.weekStartsOn ?? ((h = (l = r.locale) == null ? void 0 : l.options) == null ? void 0 : h.weekStartsOn) ?? 0, s = B(t, e == null ? void 0 : e.in), a = s.getDay(), i = (a < o ? 7 : 0) + a - o;
  return s.setDate(s.getDate() - i), s.setHours(0, 0, 0, 0), s;
}
function vo(t, e) {
  return wr(t, { ...e, weekStartsOn: 1 });
}
function ru(t, e) {
  const r = B(t, e == null ? void 0 : e.in), o = r.getFullYear(), s = ee(r, 0);
  s.setFullYear(o + 1, 0, 4), s.setHours(0, 0, 0, 0);
  const a = vo(s), i = ee(r, 0);
  i.setFullYear(o, 0, 4), i.setHours(0, 0, 0, 0);
  const n = vo(i);
  return r.getTime() >= a.getTime() ? o + 1 : r.getTime() >= n.getTime() ? o : o - 1;
}
function tc(t) {
  const e = B(t), r = new Date(
    Date.UTC(
      e.getFullYear(),
      e.getMonth(),
      e.getDate(),
      e.getHours(),
      e.getMinutes(),
      e.getSeconds(),
      e.getMilliseconds()
    )
  );
  return r.setUTCFullYear(e.getFullYear()), +t - +r;
}
function Na(t, ...e) {
  const r = ee.bind(
    null,
    e.find((o) => typeof o == "object")
  );
  return e.map(r);
}
function wo(t, e) {
  const r = B(t, e == null ? void 0 : e.in);
  return r.setHours(0, 0, 0, 0), r;
}
function KU(t, e, r) {
  const [o, s] = Na(
    r == null ? void 0 : r.in,
    t,
    e
  ), a = wo(o), i = wo(s), n = +a - tc(a), c = +i - tc(i);
  return Math.round((n - c) / YU);
}
function GU(t, e) {
  const r = ru(t, e), o = ee(t, 0);
  return o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0), vo(o);
}
function rc(t, e, r) {
  const [o, s] = Na(
    r == null ? void 0 : r.in,
    t,
    e
  );
  return +wo(o) == +wo(s);
}
function QU(t) {
  return t instanceof Date || typeof t == "object" && Object.prototype.toString.call(t) === "[object Date]";
}
function JU(t) {
  return !(!QU(t) && typeof t != "number" || isNaN(+B(t)));
}
function oc(t, e) {
  const r = B(t, e == null ? void 0 : e.in), o = r.getMonth();
  return r.setFullYear(r.getFullYear(), o + 1, 0), r.setHours(23, 59, 59, 999), r;
}
function eE(t, e) {
  const r = B(t, e == null ? void 0 : e.in);
  return r.setDate(1), r.setHours(0, 0, 0, 0), r;
}
function tE(t, e) {
  const r = B(t, e == null ? void 0 : e.in);
  return r.setFullYear(r.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r;
}
const rE = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, oE = (t, e, r) => {
  let o;
  const s = rE[t];
  return typeof s == "string" ? o = s : e === 1 ? o = s.one : o = s.other.replace("{{count}}", e.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + o : o + " ago" : o;
};
function Oo(t) {
  return (e = {}) => {
    const r = e.width ? String(e.width) : t.defaultWidth;
    return t.formats[r] || t.formats[t.defaultWidth];
  };
}
const aE = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, sE = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, nE = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, iE = {
  date: Oo({
    formats: aE,
    defaultWidth: "full"
  }),
  time: Oo({
    formats: sE,
    defaultWidth: "full"
  }),
  dateTime: Oo({
    formats: nE,
    defaultWidth: "full"
  })
}, cE = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, lE = (t, e, r, o) => cE[t];
function Er(t) {
  return (e, r) => {
    const o = r != null && r.context ? String(r.context) : "standalone";
    let s;
    if (o === "formatting" && t.formattingValues) {
      const i = t.defaultFormattingWidth || t.defaultWidth, n = r != null && r.width ? String(r.width) : i;
      s = t.formattingValues[n] || t.formattingValues[i];
    } else {
      const i = t.defaultWidth, n = r != null && r.width ? String(r.width) : t.defaultWidth;
      s = t.values[n] || t.values[i];
    }
    const a = t.argumentCallback ? t.argumentCallback(e) : e;
    return s[a];
  };
}
const hE = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, dE = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, uE = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, pE = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, mE = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, fE = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, kE = (t, e) => {
  const r = Number(t), o = r % 100;
  if (o > 20 || o < 10)
    switch (o % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, yE = {
  ordinalNumber: kE,
  era: Er({
    values: hE,
    defaultWidth: "wide"
  }),
  quarter: Er({
    values: dE,
    defaultWidth: "wide",
    argumentCallback: (t) => t - 1
  }),
  month: Er({
    values: uE,
    defaultWidth: "wide"
  }),
  day: Er({
    values: pE,
    defaultWidth: "wide"
  }),
  dayPeriod: Er({
    values: mE,
    defaultWidth: "wide",
    formattingValues: fE,
    defaultFormattingWidth: "wide"
  })
};
function Br(t) {
  return (e, r = {}) => {
    const o = r.width, s = o && t.matchPatterns[o] || t.matchPatterns[t.defaultMatchWidth], a = e.match(s);
    if (!a)
      return null;
    const i = a[0], n = o && t.parsePatterns[o] || t.parsePatterns[t.defaultParseWidth], c = Array.isArray(n) ? vE(n, (p) => p.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      gE(n, (p) => p.test(i))
    );
    let l;
    l = t.valueCallback ? t.valueCallback(c) : c, l = r.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      r.valueCallback(l)
    ) : l;
    const h = e.slice(i.length);
    return { value: l, rest: h };
  };
}
function gE(t, e) {
  for (const r in t)
    if (Object.prototype.hasOwnProperty.call(t, r) && e(t[r]))
      return r;
}
function vE(t, e) {
  for (let r = 0; r < t.length; r++)
    if (e(t[r]))
      return r;
}
function wE(t) {
  return (e, r = {}) => {
    const o = e.match(t.matchPattern);
    if (!o) return null;
    const s = o[0], a = e.match(t.parsePattern);
    if (!a) return null;
    let i = t.valueCallback ? t.valueCallback(a[0]) : a[0];
    i = r.valueCallback ? r.valueCallback(i) : i;
    const n = e.slice(s.length);
    return { value: i, rest: n };
  };
}
const xE = /^(\d+)(th|st|nd|rd)?/i, bE = /\d+/i, NE = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, ME = {
  any: [/^b/i, /^(a|c)/i]
}, CE = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, AE = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, LE = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, zE = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, WE = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, jE = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, qE = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, $E = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, SE = {
  ordinalNumber: wE({
    matchPattern: xE,
    parsePattern: bE,
    valueCallback: (t) => parseInt(t, 10)
  }),
  era: Br({
    matchPatterns: NE,
    defaultMatchWidth: "wide",
    parsePatterns: ME,
    defaultParseWidth: "any"
  }),
  quarter: Br({
    matchPatterns: CE,
    defaultMatchWidth: "wide",
    parsePatterns: AE,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: Br({
    matchPatterns: LE,
    defaultMatchWidth: "wide",
    parsePatterns: zE,
    defaultParseWidth: "any"
  }),
  day: Br({
    matchPatterns: WE,
    defaultMatchWidth: "wide",
    parsePatterns: jE,
    defaultParseWidth: "any"
  }),
  dayPeriod: Br({
    matchPatterns: qE,
    defaultMatchWidth: "any",
    parsePatterns: $E,
    defaultParseWidth: "any"
  })
}, VE = {
  code: "en-US",
  formatDistance: oE,
  formatLong: iE,
  formatRelative: lE,
  localize: yE,
  match: SE,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function TE(t, e) {
  const r = B(t, e == null ? void 0 : e.in);
  return KU(r, tE(r)) + 1;
}
function PE(t, e) {
  const r = B(t, e == null ? void 0 : e.in), o = +vo(r) - +GU(r);
  return Math.round(o / eu) + 1;
}
function ou(t, e) {
  var h, p, m, k;
  const r = B(t, e == null ? void 0 : e.in), o = r.getFullYear(), s = Wo(), a = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((p = (h = e == null ? void 0 : e.locale) == null ? void 0 : h.options) == null ? void 0 : p.firstWeekContainsDate) ?? s.firstWeekContainsDate ?? ((k = (m = s.locale) == null ? void 0 : m.options) == null ? void 0 : k.firstWeekContainsDate) ?? 1, i = ee((e == null ? void 0 : e.in) || t, 0);
  i.setFullYear(o + 1, 0, a), i.setHours(0, 0, 0, 0);
  const n = wr(i, e), c = ee((e == null ? void 0 : e.in) || t, 0);
  c.setFullYear(o, 0, a), c.setHours(0, 0, 0, 0);
  const l = wr(c, e);
  return +r >= +n ? o + 1 : +r >= +l ? o : o - 1;
}
function DE(t, e) {
  var n, c, l, h;
  const r = Wo(), o = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((c = (n = e == null ? void 0 : e.locale) == null ? void 0 : n.options) == null ? void 0 : c.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((h = (l = r.locale) == null ? void 0 : l.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, s = ou(t, e), a = ee((e == null ? void 0 : e.in) || t, 0);
  return a.setFullYear(s, 0, o), a.setHours(0, 0, 0, 0), wr(a, e);
}
function OE(t, e) {
  const r = B(t, e == null ? void 0 : e.in), o = +wr(r, e) - +DE(r, e);
  return Math.round(o / eu) + 1;
}
function $(t, e) {
  const r = t < 0 ? "-" : "", o = Math.abs(t).toString().padStart(e, "0");
  return r + o;
}
const nr = {
  // Year
  y(t, e) {
    const r = t.getFullYear(), o = r > 0 ? r : 1 - r;
    return $(e === "yy" ? o % 100 : o, e.length);
  },
  // Month
  M(t, e) {
    const r = t.getMonth();
    return e === "M" ? String(r + 1) : $(r + 1, 2);
  },
  // Day of the month
  d(t, e) {
    return $(t.getDate(), e.length);
  },
  // AM or PM
  a(t, e) {
    const r = t.getHours() / 12 >= 1 ? "pm" : "am";
    switch (e) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(t, e) {
    return $(t.getHours() % 12 || 12, e.length);
  },
  // Hour [0-23]
  H(t, e) {
    return $(t.getHours(), e.length);
  },
  // Minute
  m(t, e) {
    return $(t.getMinutes(), e.length);
  },
  // Second
  s(t, e) {
    return $(t.getSeconds(), e.length);
  },
  // Fraction of second
  S(t, e) {
    const r = e.length, o = t.getMilliseconds(), s = Math.trunc(
      o * Math.pow(10, r - 3)
    );
    return $(s, e.length);
  }
}, Ar = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, ac = {
  // Era
  G: function(t, e, r) {
    const o = t.getFullYear() > 0 ? 1 : 0;
    switch (e) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(o, { width: "abbreviated" });
      case "GGGGG":
        return r.era(o, { width: "narrow" });
      case "GGGG":
      default:
        return r.era(o, { width: "wide" });
    }
  },
  // Year
  y: function(t, e, r) {
    if (e === "yo") {
      const o = t.getFullYear(), s = o > 0 ? o : 1 - o;
      return r.ordinalNumber(s, { unit: "year" });
    }
    return nr.y(t, e);
  },
  // Local week-numbering year
  Y: function(t, e, r, o) {
    const s = ou(t, o), a = s > 0 ? s : 1 - s;
    if (e === "YY") {
      const i = a % 100;
      return $(i, 2);
    }
    return e === "Yo" ? r.ordinalNumber(a, { unit: "year" }) : $(a, e.length);
  },
  // ISO week-numbering year
  R: function(t, e) {
    const r = ru(t);
    return $(r, e.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(t, e) {
    const r = t.getFullYear();
    return $(r, e.length);
  },
  // Quarter
  Q: function(t, e, r) {
    const o = Math.ceil((t.getMonth() + 1) / 3);
    switch (e) {
      case "Q":
        return String(o);
      case "QQ":
        return $(o, 2);
      case "Qo":
        return r.ordinalNumber(o, { unit: "quarter" });
      case "QQQ":
        return r.quarter(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(o, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(t, e, r) {
    const o = Math.ceil((t.getMonth() + 1) / 3);
    switch (e) {
      case "q":
        return String(o);
      case "qq":
        return $(o, 2);
      case "qo":
        return r.ordinalNumber(o, { unit: "quarter" });
      case "qqq":
        return r.quarter(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(o, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(t, e, r) {
    const o = t.getMonth();
    switch (e) {
      case "M":
      case "MM":
        return nr.M(t, e);
      case "Mo":
        return r.ordinalNumber(o + 1, { unit: "month" });
      case "MMM":
        return r.month(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(o, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(o, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(t, e, r) {
    const o = t.getMonth();
    switch (e) {
      case "L":
        return String(o + 1);
      case "LL":
        return $(o + 1, 2);
      case "Lo":
        return r.ordinalNumber(o + 1, { unit: "month" });
      case "LLL":
        return r.month(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(o, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(o, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(t, e, r, o) {
    const s = OE(t, o);
    return e === "wo" ? r.ordinalNumber(s, { unit: "week" }) : $(s, e.length);
  },
  // ISO week of year
  I: function(t, e, r) {
    const o = PE(t);
    return e === "Io" ? r.ordinalNumber(o, { unit: "week" }) : $(o, e.length);
  },
  // Day of the month
  d: function(t, e, r) {
    return e === "do" ? r.ordinalNumber(t.getDate(), { unit: "date" }) : nr.d(t, e);
  },
  // Day of year
  D: function(t, e, r) {
    const o = TE(t);
    return e === "Do" ? r.ordinalNumber(o, { unit: "dayOfYear" }) : $(o, e.length);
  },
  // Day of week
  E: function(t, e, r) {
    const o = t.getDay();
    switch (e) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(o, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(t, e, r, o) {
    const s = t.getDay(), a = (s - o.weekStartsOn + 8) % 7 || 7;
    switch (e) {
      case "e":
        return String(a);
      case "ee":
        return $(a, 2);
      case "eo":
        return r.ordinalNumber(a, { unit: "day" });
      case "eee":
        return r.day(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(s, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(s, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(t, e, r, o) {
    const s = t.getDay(), a = (s - o.weekStartsOn + 8) % 7 || 7;
    switch (e) {
      case "c":
        return String(a);
      case "cc":
        return $(a, e.length);
      case "co":
        return r.ordinalNumber(a, { unit: "day" });
      case "ccc":
        return r.day(s, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(s, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(s, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(s, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(t, e, r) {
    const o = t.getDay(), s = o === 0 ? 7 : o;
    switch (e) {
      case "i":
        return String(s);
      case "ii":
        return $(s, e.length);
      case "io":
        return r.ordinalNumber(s, { unit: "day" });
      case "iii":
        return r.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(o, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(t, e, r) {
    const s = t.getHours() / 12 >= 1 ? "pm" : "am";
    switch (e) {
      case "a":
      case "aa":
        return r.dayPeriod(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(s, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(s, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(t, e, r) {
    const o = t.getHours();
    let s;
    switch (o === 12 ? s = Ar.noon : o === 0 ? s = Ar.midnight : s = o / 12 >= 1 ? "pm" : "am", e) {
      case "b":
      case "bb":
        return r.dayPeriod(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(s, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(s, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(t, e, r) {
    const o = t.getHours();
    let s;
    switch (o >= 17 ? s = Ar.evening : o >= 12 ? s = Ar.afternoon : o >= 4 ? s = Ar.morning : s = Ar.night, e) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(s, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(t, e, r) {
    if (e === "ho") {
      let o = t.getHours() % 12;
      return o === 0 && (o = 12), r.ordinalNumber(o, { unit: "hour" });
    }
    return nr.h(t, e);
  },
  // Hour [0-23]
  H: function(t, e, r) {
    return e === "Ho" ? r.ordinalNumber(t.getHours(), { unit: "hour" }) : nr.H(t, e);
  },
  // Hour [0-11]
  K: function(t, e, r) {
    const o = t.getHours() % 12;
    return e === "Ko" ? r.ordinalNumber(o, { unit: "hour" }) : $(o, e.length);
  },
  // Hour [1-24]
  k: function(t, e, r) {
    let o = t.getHours();
    return o === 0 && (o = 24), e === "ko" ? r.ordinalNumber(o, { unit: "hour" }) : $(o, e.length);
  },
  // Minute
  m: function(t, e, r) {
    return e === "mo" ? r.ordinalNumber(t.getMinutes(), { unit: "minute" }) : nr.m(t, e);
  },
  // Second
  s: function(t, e, r) {
    return e === "so" ? r.ordinalNumber(t.getSeconds(), { unit: "second" }) : nr.s(t, e);
  },
  // Fraction of second
  S: function(t, e) {
    return nr.S(t, e);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, e, r) {
    const o = t.getTimezoneOffset();
    if (o === 0)
      return "Z";
    switch (e) {
      case "X":
        return nc(o);
      case "XXXX":
      case "XX":
        return ur(o);
      case "XXXXX":
      case "XXX":
      default:
        return ur(o, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, e, r) {
    const o = t.getTimezoneOffset();
    switch (e) {
      case "x":
        return nc(o);
      case "xxxx":
      case "xx":
        return ur(o);
      case "xxxxx":
      case "xxx":
      default:
        return ur(o, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, e, r) {
    const o = t.getTimezoneOffset();
    switch (e) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + sc(o, ":");
      case "OOOO":
      default:
        return "GMT" + ur(o, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, e, r) {
    const o = t.getTimezoneOffset();
    switch (e) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + sc(o, ":");
      case "zzzz":
      default:
        return "GMT" + ur(o, ":");
    }
  },
  // Seconds timestamp
  t: function(t, e, r) {
    const o = Math.trunc(+t / 1e3);
    return $(o, e.length);
  },
  // Milliseconds timestamp
  T: function(t, e, r) {
    return $(+t, e.length);
  }
};
function sc(t, e = "") {
  const r = t > 0 ? "-" : "+", o = Math.abs(t), s = Math.trunc(o / 60), a = o % 60;
  return a === 0 ? r + String(s) : r + String(s) + e + $(a, 2);
}
function nc(t, e) {
  return t % 60 === 0 ? (t > 0 ? "-" : "+") + $(Math.abs(t) / 60, 2) : ur(t, e);
}
function ur(t, e = "") {
  const r = t > 0 ? "-" : "+", o = Math.abs(t), s = $(Math.trunc(o / 60), 2), a = $(o % 60, 2);
  return r + s + e + a;
}
const ic = (t, e) => {
  switch (t) {
    case "P":
      return e.date({ width: "short" });
    case "PP":
      return e.date({ width: "medium" });
    case "PPP":
      return e.date({ width: "long" });
    case "PPPP":
    default:
      return e.date({ width: "full" });
  }
}, au = (t, e) => {
  switch (t) {
    case "p":
      return e.time({ width: "short" });
    case "pp":
      return e.time({ width: "medium" });
    case "ppp":
      return e.time({ width: "long" });
    case "pppp":
    default:
      return e.time({ width: "full" });
  }
}, UE = (t, e) => {
  const r = t.match(/(P+)(p+)?/) || [], o = r[1], s = r[2];
  if (!s)
    return ic(t, e);
  let a;
  switch (o) {
    case "P":
      a = e.dateTime({ width: "short" });
      break;
    case "PP":
      a = e.dateTime({ width: "medium" });
      break;
    case "PPP":
      a = e.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      a = e.dateTime({ width: "full" });
      break;
  }
  return a.replace("{{date}}", ic(o, e)).replace("{{time}}", au(s, e));
}, EE = {
  p: au,
  P: UE
}, BE = /^D+$/, ZE = /^Y+$/, RE = ["D", "DD", "YY", "YYYY"];
function _E(t) {
  return BE.test(t);
}
function FE(t) {
  return ZE.test(t);
}
function IE(t, e, r) {
  const o = HE(t, e, r);
  if (console.warn(o), RE.includes(t)) throw new RangeError(o);
}
function HE(t, e, r) {
  const o = t[0] === "Y" ? "years" : "days of the month";
  return `Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${o} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const YE = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, XE = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, KE = /^'([^]*?)'?$/, GE = /''/g, QE = /[a-zA-Z]/;
function co(t, e, r) {
  var h, p, m, k;
  const o = Wo(), s = o.locale ?? VE, a = o.firstWeekContainsDate ?? ((p = (h = o.locale) == null ? void 0 : h.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, i = o.weekStartsOn ?? ((k = (m = o.locale) == null ? void 0 : m.options) == null ? void 0 : k.weekStartsOn) ?? 0, n = B(t, r == null ? void 0 : r.in);
  if (!JU(n))
    throw new RangeError("Invalid time value");
  let c = e.match(XE).map((y) => {
    const g = y[0];
    if (g === "p" || g === "P") {
      const v = EE[g];
      return v(y, s.formatLong);
    }
    return y;
  }).join("").match(YE).map((y) => {
    if (y === "''")
      return { isToken: !1, value: "'" };
    const g = y[0];
    if (g === "'")
      return { isToken: !1, value: JE(y) };
    if (ac[g])
      return { isToken: !0, value: y };
    if (g.match(QE))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + g + "`"
      );
    return { isToken: !1, value: y };
  });
  s.localize.preprocessor && (c = s.localize.preprocessor(n, c));
  const l = {
    firstWeekContainsDate: a,
    weekStartsOn: i,
    locale: s
  };
  return c.map((y) => {
    if (!y.isToken) return y.value;
    const g = y.value;
    (FE(g) || _E(g)) && IE(g, e, String(t));
    const v = ac[g[0]];
    return v(n, g, s.localize, l);
  }).join("");
}
function JE(t) {
  const e = t.match(KE);
  return e ? e[1].replace(GE, "'") : t;
}
function eB(t, e) {
  return +B(t) > +B(e);
}
function tB(t, e, r) {
  const [o, s] = Na(
    r == null ? void 0 : r.in,
    t,
    e
  );
  return o.getFullYear() === s.getFullYear() && o.getMonth() === s.getMonth();
}
function rB(t, e, r) {
  return tu(t, -1, r);
}
const Ma = x({});
function Ca(t) {
  const e = te(null);
  return e.current === null && (e.current = t()), e.current;
}
const Aa = typeof window < "u", su = Aa ? O0 : Y, jo = /* @__PURE__ */ x(null);
function La(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function za(t, e) {
  const r = t.indexOf(e);
  r > -1 && t.splice(r, 1);
}
const Kt = (t, e, r) => r > e ? e : r < t ? t : r;
let Pr = () => {
}, Gt = () => {
};
if (process.env.NODE_ENV !== "production") {
  const t = (e, r) => r ? `${e}. For more information and steps for solving, visit https://motion.dev/error/${r}` : e;
  Pr = (e, r, o) => {
    !e && typeof console < "u" && console.warn(t(r, o));
  }, Gt = (e, r, o) => {
    if (!e)
      throw new Error(t(r, o));
  };
}
const Qt = {}, nu = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
function iu(t) {
  return typeof t == "object" && t !== null;
}
const cu = (t) => /^0[^.\s]+$/u.test(t);
// @__NO_SIDE_EFFECTS__
function Wa(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const G = /* @__NO_SIDE_EFFECTS__ */ (t) => t, oB = (t, e) => (r) => e(t(r)), oo = (...t) => t.reduce(oB), Kr = /* @__NO_SIDE_EFFECTS__ */ (t, e, r) => {
  const o = e - t;
  return o === 0 ? 1 : (r - t) / o;
};
class ja {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return La(this.subscriptions, e), () => za(this.subscriptions, e);
  }
  notify(e, r, o) {
    const s = this.subscriptions.length;
    if (s)
      if (s === 1)
        this.subscriptions[0](e, r, o);
      else
        for (let a = 0; a < s; a++) {
          const i = this.subscriptions[a];
          i && i(e, r, o);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const J = /* @__NO_SIDE_EFFECTS__ */ (t) => t * 1e3, re = /* @__NO_SIDE_EFFECTS__ */ (t) => t / 1e3;
function lu(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const cc = /* @__PURE__ */ new Set();
function qa(t, e, r) {
  t || cc.has(e) || (console.warn(e), cc.add(e));
}
const hu = (t, e, r) => (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t, aB = 1e-7, sB = 12;
function nB(t, e, r, o, s) {
  let a, i, n = 0;
  do
    i = e + (r - e) / 2, a = hu(i, o, s) - t, a > 0 ? r = i : e = i;
  while (Math.abs(a) > aB && ++n < sB);
  return i;
}
function ao(t, e, r, o) {
  if (t === e && r === o)
    return G;
  const s = (a) => nB(a, 0, 1, t, r);
  return (a) => a === 0 || a === 1 ? a : hu(s(a), e, o);
}
const du = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, uu = (t) => (e) => 1 - t(1 - e), pu = /* @__PURE__ */ ao(0.33, 1.53, 0.69, 0.99), $a = /* @__PURE__ */ uu(pu), mu = /* @__PURE__ */ du($a), fu = (t) => (t *= 2) < 1 ? 0.5 * $a(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), Sa = (t) => 1 - Math.sin(Math.acos(t)), ku = uu(Sa), yu = du(Sa), iB = /* @__PURE__ */ ao(0.42, 0, 1, 1), cB = /* @__PURE__ */ ao(0, 0, 0.58, 1), gu = /* @__PURE__ */ ao(0.42, 0, 0.58, 1), lB = (t) => Array.isArray(t) && typeof t[0] != "number", vu = (t) => Array.isArray(t) && typeof t[0] == "number", lc = {
  linear: G,
  easeIn: iB,
  easeInOut: gu,
  easeOut: cB,
  circIn: Sa,
  circInOut: yu,
  circOut: ku,
  backIn: $a,
  backInOut: mu,
  backOut: pu,
  anticipate: fu
}, hB = (t) => typeof t == "string", hc = (t) => {
  if (vu(t)) {
    Gt(t.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [e, r, o, s] = t;
    return ao(e, r, o, s);
  } else if (hB(t))
    return Gt(lc[t] !== void 0, `Invalid easing type '${t}'`), lc[t];
  return t;
}, lo = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
], dc = {
  value: null
};
function dB(t, e) {
  let r = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), s = !1, a = !1;
  const i = /* @__PURE__ */ new WeakSet();
  let n = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, c = 0;
  function l(p) {
    i.has(p) && (h.schedule(p), t()), c++, p(n);
  }
  const h = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (p, m = !1, k = !1) => {
      const g = k && s ? r : o;
      return m && i.add(p), g.has(p) || g.add(p), p;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (p) => {
      o.delete(p), i.delete(p);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (p) => {
      if (n = p, s) {
        a = !0;
        return;
      }
      s = !0, [r, o] = [o, r], r.forEach(l), e && dc.value && dc.value.frameloop[e].push(c), c = 0, r.clear(), s = !1, a && (a = !1, h.process(p));
    }
  };
  return h;
}
const uB = 40;
function wu(t, e) {
  let r = !1, o = !0;
  const s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, a = () => r = !0, i = lo.reduce((N, z) => (N[z] = dB(a, e ? z : void 0), N), {}), { setup: n, read: c, resolveKeyframes: l, preUpdate: h, update: p, preRender: m, render: k, postRender: y } = i, g = () => {
    const N = Qt.useManualTiming ? s.timestamp : performance.now();
    r = !1, Qt.useManualTiming || (s.delta = o ? 1e3 / 60 : Math.max(Math.min(N - s.timestamp, uB), 1)), s.timestamp = N, s.isProcessing = !0, n.process(s), c.process(s), l.process(s), h.process(s), p.process(s), m.process(s), k.process(s), y.process(s), s.isProcessing = !1, r && e && (o = !1, t(g));
  }, v = () => {
    r = !0, o = !0, s.isProcessing || t(g);
  };
  return { schedule: lo.reduce((N, z) => {
    const M = i[z];
    return N[z] = (W, j = !1, L = !1) => (r || v(), M.schedule(W, j, L)), N;
  }, {}), cancel: (N) => {
    for (let z = 0; z < lo.length; z++)
      i[lo[z]].cancel(N);
  }, state: s, steps: i };
}
const { schedule: S, cancel: cr, state: E, steps: Uo } = /* @__PURE__ */ wu(typeof requestAnimationFrame < "u" ? requestAnimationFrame : G, !0);
let mo;
function pB() {
  mo = void 0;
}
const H = {
  now: () => (mo === void 0 && H.set(E.isProcessing || Qt.useManualTiming ? E.timestamp : performance.now()), mo),
  set: (t) => {
    mo = t, queueMicrotask(pB);
  }
}, xu = (t) => (e) => typeof e == "string" && e.startsWith(t), Va = /* @__PURE__ */ xu("--"), mB = /* @__PURE__ */ xu("var(--"), Ta = (t) => mB(t) ? fB.test(t.split("/*")[0].trim()) : !1, fB = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Dr = {
  test: (t) => typeof t == "number",
  parse: parseFloat,
  transform: (t) => t
}, Gr = {
  ...Dr,
  transform: (t) => Kt(0, 1, t)
}, ho = {
  ...Dr,
  default: 1
}, Ir = (t) => Math.round(t * 1e5) / 1e5, Pa = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function kB(t) {
  return t == null;
}
const yB = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Da = (t, e) => (r) => !!(typeof r == "string" && yB.test(r) && r.startsWith(t) || e && !kB(r) && Object.prototype.hasOwnProperty.call(r, e)), bu = (t, e, r) => (o) => {
  if (typeof o != "string")
    return o;
  const [s, a, i, n] = o.match(Pa);
  return {
    [t]: parseFloat(s),
    [e]: parseFloat(a),
    [r]: parseFloat(i),
    alpha: n !== void 0 ? parseFloat(n) : 1
  };
}, gB = (t) => Kt(0, 255, t), Eo = {
  ...Dr,
  transform: (t) => Math.round(gB(t))
}, mr = {
  test: /* @__PURE__ */ Da("rgb", "red"),
  parse: /* @__PURE__ */ bu("red", "green", "blue"),
  transform: ({ red: t, green: e, blue: r, alpha: o = 1 }) => "rgba(" + Eo.transform(t) + ", " + Eo.transform(e) + ", " + Eo.transform(r) + ", " + Ir(Gr.transform(o)) + ")"
};
function vB(t) {
  let e = "", r = "", o = "", s = "";
  return t.length > 5 ? (e = t.substring(1, 3), r = t.substring(3, 5), o = t.substring(5, 7), s = t.substring(7, 9)) : (e = t.substring(1, 2), r = t.substring(2, 3), o = t.substring(3, 4), s = t.substring(4, 5), e += e, r += r, o += o, s += s), {
    red: parseInt(e, 16),
    green: parseInt(r, 16),
    blue: parseInt(o, 16),
    alpha: s ? parseInt(s, 16) / 255 : 1
  };
}
const Jo = {
  test: /* @__PURE__ */ Da("#"),
  parse: vB,
  transform: mr.transform
}, so = /* @__NO_SIDE_EFFECTS__ */ (t) => ({
  test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
  parse: parseFloat,
  transform: (e) => `${e}${t}`
}), ir = /* @__PURE__ */ so("deg"), oe = /* @__PURE__ */ so("%"), A = /* @__PURE__ */ so("px"), wB = /* @__PURE__ */ so("vh"), xB = /* @__PURE__ */ so("vw"), uc = {
  ...oe,
  parse: (t) => oe.parse(t) / 100,
  transform: (t) => oe.transform(t * 100)
}, zr = {
  test: /* @__PURE__ */ Da("hsl", "hue"),
  parse: /* @__PURE__ */ bu("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: r, alpha: o = 1 }) => "hsla(" + Math.round(t) + ", " + oe.transform(Ir(e)) + ", " + oe.transform(Ir(r)) + ", " + Ir(Gr.transform(o)) + ")"
}, D = {
  test: (t) => mr.test(t) || Jo.test(t) || zr.test(t),
  parse: (t) => mr.test(t) ? mr.parse(t) : zr.test(t) ? zr.parse(t) : Jo.parse(t),
  transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? mr.transform(t) : zr.transform(t),
  getAnimatableNone: (t) => {
    const e = D.parse(t);
    return e.alpha = 0, D.transform(e);
  }
}, bB = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function NB(t) {
  var e, r;
  return isNaN(t) && typeof t == "string" && (((e = t.match(Pa)) == null ? void 0 : e.length) || 0) + (((r = t.match(bB)) == null ? void 0 : r.length) || 0) > 0;
}
const Nu = "number", Mu = "color", MB = "var", CB = "var(", pc = "${}", AB = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Qr(t) {
  const e = t.toString(), r = [], o = {
    color: [],
    number: [],
    var: []
  }, s = [];
  let a = 0;
  const n = e.replace(AB, (c) => (D.test(c) ? (o.color.push(a), s.push(Mu), r.push(D.parse(c))) : c.startsWith(CB) ? (o.var.push(a), s.push(MB), r.push(c)) : (o.number.push(a), s.push(Nu), r.push(parseFloat(c))), ++a, pc)).split(pc);
  return { values: r, split: n, indexes: o, types: s };
}
function Cu(t) {
  return Qr(t).values;
}
function Au(t) {
  const { split: e, types: r } = Qr(t), o = e.length;
  return (s) => {
    let a = "";
    for (let i = 0; i < o; i++)
      if (a += e[i], s[i] !== void 0) {
        const n = r[i];
        n === Nu ? a += Ir(s[i]) : n === Mu ? a += D.transform(s[i]) : a += s[i];
      }
    return a;
  };
}
const LB = (t) => typeof t == "number" ? 0 : D.test(t) ? D.getAnimatableNone(t) : t;
function zB(t) {
  const e = Cu(t);
  return Au(t)(e.map(LB));
}
const lr = {
  test: NB,
  parse: Cu,
  createTransformer: Au,
  getAnimatableNone: zB
};
function Bo(t, e, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + (e - t) * 6 * r : r < 1 / 2 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t;
}
function WB({ hue: t, saturation: e, lightness: r, alpha: o }) {
  t /= 360, e /= 100, r /= 100;
  let s = 0, a = 0, i = 0;
  if (!e)
    s = a = i = r;
  else {
    const n = r < 0.5 ? r * (1 + e) : r + e - r * e, c = 2 * r - n;
    s = Bo(c, n, t + 1 / 3), a = Bo(c, n, t), i = Bo(c, n, t - 1 / 3);
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(a * 255),
    blue: Math.round(i * 255),
    alpha: o
  };
}
function xo(t, e) {
  return (r) => r > 0 ? e : t;
}
const T = (t, e, r) => t + (e - t) * r, Zo = (t, e, r) => {
  const o = t * t, s = r * (e * e - o) + o;
  return s < 0 ? 0 : Math.sqrt(s);
}, jB = [Jo, mr, zr], qB = (t) => jB.find((e) => e.test(t));
function mc(t) {
  const e = qB(t);
  if (Pr(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`), !e)
    return !1;
  let r = e.parse(t);
  return e === zr && (r = WB(r)), r;
}
const fc = (t, e) => {
  const r = mc(t), o = mc(e);
  if (!r || !o)
    return xo(t, e);
  const s = { ...r };
  return (a) => (s.red = Zo(r.red, o.red, a), s.green = Zo(r.green, o.green, a), s.blue = Zo(r.blue, o.blue, a), s.alpha = T(r.alpha, o.alpha, a), mr.transform(s));
}, ea = /* @__PURE__ */ new Set(["none", "hidden"]);
function $B(t, e) {
  return ea.has(t) ? (r) => r <= 0 ? t : e : (r) => r >= 1 ? e : t;
}
function SB(t, e) {
  return (r) => T(t, e, r);
}
function Oa(t) {
  return typeof t == "number" ? SB : typeof t == "string" ? Ta(t) ? xo : D.test(t) ? fc : PB : Array.isArray(t) ? Lu : typeof t == "object" ? D.test(t) ? fc : VB : xo;
}
function Lu(t, e) {
  const r = [...t], o = r.length, s = t.map((a, i) => Oa(a)(a, e[i]));
  return (a) => {
    for (let i = 0; i < o; i++)
      r[i] = s[i](a);
    return r;
  };
}
function VB(t, e) {
  const r = { ...t, ...e }, o = {};
  for (const s in r)
    t[s] !== void 0 && e[s] !== void 0 && (o[s] = Oa(t[s])(t[s], e[s]));
  return (s) => {
    for (const a in o)
      r[a] = o[a](s);
    return r;
  };
}
function TB(t, e) {
  const r = [], o = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < e.values.length; s++) {
    const a = e.types[s], i = t.indexes[a][o[a]], n = t.values[i] ?? 0;
    r[s] = n, o[a]++;
  }
  return r;
}
const PB = (t, e) => {
  const r = lr.createTransformer(e), o = Qr(t), s = Qr(e);
  return o.indexes.var.length === s.indexes.var.length && o.indexes.color.length === s.indexes.color.length && o.indexes.number.length >= s.indexes.number.length ? ea.has(t) && !s.values.length || ea.has(e) && !o.values.length ? $B(t, e) : oo(Lu(TB(o, s), s.values), r) : (Pr(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), xo(t, e));
};
function zu(t, e, r) {
  return typeof t == "number" && typeof e == "number" && typeof r == "number" ? T(t, e, r) : Oa(t)(t, e);
}
const DB = (t) => {
  const e = ({ timestamp: r }) => t(r);
  return {
    start: (r = !0) => S.update(e, r),
    stop: () => cr(e),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => E.isProcessing ? E.timestamp : H.now()
  };
}, Wu = (t, e, r = 10) => {
  let o = "";
  const s = Math.max(Math.round(e / r), 2);
  for (let a = 0; a < s; a++)
    o += Math.round(t(a / (s - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${o.substring(0, o.length - 2)})`;
}, bo = 2e4;
function Ua(t) {
  let e = 0;
  const r = 50;
  let o = t.next(e);
  for (; !o.done && e < bo; )
    e += r, o = t.next(e);
  return e >= bo ? 1 / 0 : e;
}
function OB(t, e = 100, r) {
  const o = r({ ...t, keyframes: [0, e] }), s = Math.min(Ua(o), bo);
  return {
    type: "keyframes",
    ease: (a) => o.next(s * a).value / e,
    duration: /* @__PURE__ */ re(s)
  };
}
const UB = 5;
function ju(t, e, r) {
  const o = Math.max(e - UB, 0);
  return lu(r - t(o), e - o);
}
const V = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, Ro = 1e-3;
function EB({ duration: t = V.duration, bounce: e = V.bounce, velocity: r = V.velocity, mass: o = V.mass }) {
  let s, a;
  Pr(t <= /* @__PURE__ */ J(V.maxDuration), "Spring duration must be 10 seconds or less");
  let i = 1 - e;
  i = Kt(V.minDamping, V.maxDamping, i), t = Kt(V.minDuration, V.maxDuration, /* @__PURE__ */ re(t)), i < 1 ? (s = (l) => {
    const h = l * i, p = h * t, m = h - r, k = ta(l, i), y = Math.exp(-p);
    return Ro - m / k * y;
  }, a = (l) => {
    const p = l * i * t, m = p * r + r, k = Math.pow(i, 2) * Math.pow(l, 2) * t, y = Math.exp(-p), g = ta(Math.pow(l, 2), i);
    return (-s(l) + Ro > 0 ? -1 : 1) * ((m - k) * y) / g;
  }) : (s = (l) => {
    const h = Math.exp(-l * t), p = (l - r) * t + 1;
    return -Ro + h * p;
  }, a = (l) => {
    const h = Math.exp(-l * t), p = (r - l) * (t * t);
    return h * p;
  });
  const n = 5 / t, c = ZB(s, a, n);
  if (t = /* @__PURE__ */ J(t), isNaN(c))
    return {
      stiffness: V.stiffness,
      damping: V.damping,
      duration: t
    };
  {
    const l = Math.pow(c, 2) * o;
    return {
      stiffness: l,
      damping: i * 2 * Math.sqrt(o * l),
      duration: t
    };
  }
}
const BB = 12;
function ZB(t, e, r) {
  let o = r;
  for (let s = 1; s < BB; s++)
    o = o - t(o) / e(o);
  return o;
}
function ta(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const RB = ["duration", "bounce"], _B = ["stiffness", "damping", "mass"];
function kc(t, e) {
  return e.some((r) => t[r] !== void 0);
}
function FB(t) {
  let e = {
    velocity: V.velocity,
    stiffness: V.stiffness,
    damping: V.damping,
    mass: V.mass,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!kc(t, _B) && kc(t, RB))
    if (t.visualDuration) {
      const r = t.visualDuration, o = 2 * Math.PI / (r * 1.2), s = o * o, a = 2 * Kt(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(s);
      e = {
        ...e,
        mass: V.mass,
        stiffness: s,
        damping: a
      };
    } else {
      const r = EB(t);
      e = {
        ...e,
        ...r,
        mass: V.mass
      }, e.isResolvedFromDuration = !0;
    }
  return e;
}
function No(t = V.visualDuration, e = V.bounce) {
  const r = typeof t != "object" ? {
    visualDuration: t,
    keyframes: [0, 1],
    bounce: e
  } : t;
  let { restSpeed: o, restDelta: s } = r;
  const a = r.keyframes[0], i = r.keyframes[r.keyframes.length - 1], n = { done: !1, value: a }, { stiffness: c, damping: l, mass: h, duration: p, velocity: m, isResolvedFromDuration: k } = FB({
    ...r,
    velocity: -/* @__PURE__ */ re(r.velocity || 0)
  }), y = m || 0, g = l / (2 * Math.sqrt(c * h)), v = i - a, w = /* @__PURE__ */ re(Math.sqrt(c / h)), b = Math.abs(v) < 5;
  o || (o = b ? V.restSpeed.granular : V.restSpeed.default), s || (s = b ? V.restDelta.granular : V.restDelta.default);
  let N;
  if (g < 1) {
    const M = ta(w, g);
    N = (W) => {
      const j = Math.exp(-g * w * W);
      return i - j * ((y + g * w * v) / M * Math.sin(M * W) + v * Math.cos(M * W));
    };
  } else if (g === 1)
    N = (M) => i - Math.exp(-w * M) * (v + (y + w * v) * M);
  else {
    const M = w * Math.sqrt(g * g - 1);
    N = (W) => {
      const j = Math.exp(-g * w * W), L = Math.min(M * W, 300);
      return i - j * ((y + g * w * v) * Math.sinh(L) + M * v * Math.cosh(L)) / M;
    };
  }
  const z = {
    calculatedDuration: k && p || null,
    next: (M) => {
      const W = N(M);
      if (k)
        n.done = M >= p;
      else {
        let j = M === 0 ? y : 0;
        g < 1 && (j = M === 0 ? /* @__PURE__ */ J(y) : ju(N, M, W));
        const L = Math.abs(j) <= o, U = Math.abs(i - W) <= s;
        n.done = L && U;
      }
      return n.value = n.done ? i : W, n;
    },
    toString: () => {
      const M = Math.min(Ua(z), bo), W = Wu((j) => z.next(M * j).value, M, 30);
      return M + "ms " + W;
    },
    toTransition: () => {
    }
  };
  return z;
}
No.applyToOptions = (t) => {
  const e = OB(t, 100, No);
  return t.ease = e.ease, t.duration = /* @__PURE__ */ J(e.duration), t.type = "keyframes", t;
};
function ra({ keyframes: t, velocity: e = 0, power: r = 0.8, timeConstant: o = 325, bounceDamping: s = 10, bounceStiffness: a = 500, modifyTarget: i, min: n, max: c, restDelta: l = 0.5, restSpeed: h }) {
  const p = t[0], m = {
    done: !1,
    value: p
  }, k = (L) => n !== void 0 && L < n || c !== void 0 && L > c, y = (L) => n === void 0 ? c : c === void 0 || Math.abs(n - L) < Math.abs(c - L) ? n : c;
  let g = r * e;
  const v = p + g, w = i === void 0 ? v : i(v);
  w !== v && (g = w - p);
  const b = (L) => -g * Math.exp(-L / o), N = (L) => w + b(L), z = (L) => {
    const U = b(L), _ = N(L);
    m.done = Math.abs(U) <= l, m.value = m.done ? w : _;
  };
  let M, W;
  const j = (L) => {
    k(m.value) && (M = L, W = No({
      keyframes: [m.value, y(m.value)],
      velocity: ju(N, L, m.value),
      // TODO: This should be passing * 1000
      damping: s,
      stiffness: a,
      restDelta: l,
      restSpeed: h
    }));
  };
  return j(0), {
    calculatedDuration: null,
    next: (L) => {
      let U = !1;
      return !W && M === void 0 && (U = !0, z(L), j(L)), M !== void 0 && L >= M ? W.next(L - M) : (!U && z(L), m);
    }
  };
}
function IB(t, e, r) {
  const o = [], s = r || Qt.mix || zu, a = t.length - 1;
  for (let i = 0; i < a; i++) {
    let n = s(t[i], t[i + 1]);
    if (e) {
      const c = Array.isArray(e) ? e[i] || G : e;
      n = oo(c, n);
    }
    o.push(n);
  }
  return o;
}
function HB(t, e, { clamp: r = !0, ease: o, mixer: s } = {}) {
  const a = t.length;
  if (Gt(a === e.length, "Both input and output ranges must be the same length"), a === 1)
    return () => e[0];
  if (a === 2 && e[0] === e[1])
    return () => e[1];
  const i = t[0] === t[1];
  t[0] > t[a - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const n = IB(e, o, s), c = n.length, l = (h) => {
    if (i && h < t[0])
      return e[0];
    let p = 0;
    if (c > 1)
      for (; p < t.length - 2 && !(h < t[p + 1]); p++)
        ;
    const m = /* @__PURE__ */ Kr(t[p], t[p + 1], h);
    return n[p](m);
  };
  return r ? (h) => l(Kt(t[0], t[a - 1], h)) : l;
}
function YB(t, e) {
  const r = t[t.length - 1];
  for (let o = 1; o <= e; o++) {
    const s = /* @__PURE__ */ Kr(0, e, o);
    t.push(T(r, 1, s));
  }
}
function XB(t) {
  const e = [0];
  return YB(e, t.length - 1), e;
}
function KB(t, e) {
  return t.map((r) => r * e);
}
function GB(t, e) {
  return t.map(() => e || gu).splice(0, t.length - 1);
}
function Wr({ duration: t = 300, keyframes: e, times: r, ease: o = "easeInOut" }) {
  const s = lB(o) ? o.map(hc) : hc(o), a = {
    done: !1,
    value: e[0]
  }, i = KB(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    r && r.length === e.length ? r : XB(e),
    t
  ), n = HB(i, e, {
    ease: Array.isArray(s) ? s : GB(e, s)
  });
  return {
    calculatedDuration: t,
    next: (c) => (a.value = n(c), a.done = c >= t, a)
  };
}
const QB = (t) => t !== null;
function Ea(t, { repeat: e, repeatType: r = "loop" }, o, s = 1) {
  const a = t.filter(QB), n = s < 0 || e && r !== "loop" && e % 2 === 1 ? 0 : a.length - 1;
  return !n || o === void 0 ? a[n] : o;
}
const JB = {
  decay: ra,
  inertia: ra,
  tween: Wr,
  keyframes: Wr,
  spring: No
};
function qu(t) {
  typeof t.type == "string" && (t.type = JB[t.type]);
}
class Ba {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((e) => {
      this.resolve = e;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(e, r) {
    return this.finished.then(e, r);
  }
}
const eZ = (t) => t / 100;
class Za extends Ba {
  constructor(e) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      var o, s;
      const { motionValue: r } = this.options;
      r && r.updatedAt !== H.now() && this.tick(H.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), (s = (o = this.options).onStop) == null || s.call(o));
    }, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: e } = this;
    qu(e);
    const { type: r = Wr, repeat: o = 0, repeatDelay: s = 0, repeatType: a, velocity: i = 0 } = e;
    let { keyframes: n } = e;
    const c = r || Wr;
    process.env.NODE_ENV !== "production" && c !== Wr && Gt(n.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${n}`, "spring-two-frames"), c !== Wr && typeof n[0] != "number" && (this.mixKeyframes = oo(eZ, zu(n[0], n[1])), n = [0, 100]);
    const l = c({ ...e, keyframes: n });
    a === "mirror" && (this.mirroredGenerator = c({
      ...e,
      keyframes: [...n].reverse(),
      velocity: -i
    })), l.calculatedDuration === null && (l.calculatedDuration = Ua(l));
    const { calculatedDuration: h } = l;
    this.calculatedDuration = h, this.resolvedDuration = h + s, this.totalDuration = this.resolvedDuration * (o + 1) - s, this.generator = l;
  }
  updateTime(e) {
    const r = Math.round(e - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = r;
  }
  tick(e, r = !1) {
    const { generator: o, totalDuration: s, mixKeyframes: a, mirroredGenerator: i, resolvedDuration: n, calculatedDuration: c } = this;
    if (this.startTime === null)
      return o.next(0);
    const { delay: l = 0, keyframes: h, repeat: p, repeatType: m, repeatDelay: k, type: y, onUpdate: g, finalKeyframe: v } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - s / this.speed, this.startTime)), r ? this.currentTime = e : this.updateTime(e);
    const w = this.currentTime - l * (this.playbackSpeed >= 0 ? 1 : -1), b = this.playbackSpeed >= 0 ? w < 0 : w > s;
    this.currentTime = Math.max(w, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = s);
    let N = this.currentTime, z = o;
    if (p) {
      const L = Math.min(this.currentTime, s) / n;
      let U = Math.floor(L), _ = L % 1;
      !_ && L >= 1 && (_ = 1), _ === 1 && U--, U = Math.min(U, p + 1), !!(U % 2) && (m === "reverse" ? (_ = 1 - _, k && (_ -= k / n)) : m === "mirror" && (z = i)), N = Kt(0, 1, _) * n;
    }
    const M = b ? { done: !1, value: h[0] } : z.next(N);
    a && (M.value = a(M.value));
    let { done: W } = M;
    !b && c !== null && (W = this.playbackSpeed >= 0 ? this.currentTime >= s : this.currentTime <= 0);
    const j = this.holdTime === null && (this.state === "finished" || this.state === "running" && W);
    return j && y !== ra && (M.value = Ea(h, this.options, v, this.speed)), g && g(M.value), j && this.finish(), M;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(e, r) {
    return this.finished.then(e, r);
  }
  get duration() {
    return /* @__PURE__ */ re(this.calculatedDuration);
  }
  get time() {
    return /* @__PURE__ */ re(this.currentTime);
  }
  set time(e) {
    var r;
    e = /* @__PURE__ */ J(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), (r = this.driver) == null || r.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    this.updateTime(H.now());
    const r = this.playbackSpeed !== e;
    this.playbackSpeed = e, r && (this.time = /* @__PURE__ */ re(this.currentTime));
  }
  play() {
    var s, a;
    if (this.isStopped)
      return;
    const { driver: e = DB, startTime: r } = this.options;
    this.driver || (this.driver = e((i) => this.tick(i))), (a = (s = this.options).onPlay) == null || a.call(s);
    const o = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = o) : this.holdTime !== null ? this.startTime = o - this.holdTime : this.startTime || (this.startTime = r ?? o), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(H.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    var e, r;
    this.notifyFinished(), this.teardown(), this.state = "finished", (r = (e = this.options).onComplete) == null || r.call(e);
  }
  cancel() {
    var e, r;
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), (r = (e = this.options).onCancel) == null || r.call(e);
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(e) {
    return this.startTime = 0, this.tick(e, !0);
  }
  attachTimeline(e) {
    var r;
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), (r = this.driver) == null || r.stop(), e.observe(this);
  }
}
function tZ(t) {
  for (let e = 1; e < t.length; e++)
    t[e] ?? (t[e] = t[e - 1]);
}
const fr = (t) => t * 180 / Math.PI, oa = (t) => {
  const e = fr(Math.atan2(t[1], t[0]));
  return aa(e);
}, rZ = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
  rotate: oa,
  rotateZ: oa,
  skewX: (t) => fr(Math.atan(t[1])),
  skewY: (t) => fr(Math.atan(t[2])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2
}, aa = (t) => (t = t % 360, t < 0 && (t += 360), t), yc = oa, gc = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]), vc = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]), oZ = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: gc,
  scaleY: vc,
  scale: (t) => (gc(t) + vc(t)) / 2,
  rotateX: (t) => aa(fr(Math.atan2(t[6], t[5]))),
  rotateY: (t) => aa(fr(Math.atan2(-t[2], t[0]))),
  rotateZ: yc,
  rotate: yc,
  skewX: (t) => fr(Math.atan(t[4])),
  skewY: (t) => fr(Math.atan(t[1])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2
};
function sa(t) {
  return t.includes("scale") ? 1 : 0;
}
function na(t, e) {
  if (!t || t === "none")
    return sa(e);
  const r = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let o, s;
  if (r)
    o = oZ, s = r;
  else {
    const n = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    o = rZ, s = n;
  }
  if (!s)
    return sa(e);
  const a = o[e], i = s[1].split(",").map(sZ);
  return typeof a == "function" ? a(i) : i[a];
}
const aZ = (t, e) => {
  const { transform: r = "none" } = getComputedStyle(t);
  return na(r, e);
};
function sZ(t) {
  return parseFloat(t.trim());
}
const Or = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], Ur = new Set(Or), wc = (t) => t === Dr || t === A, nZ = /* @__PURE__ */ new Set(["x", "y", "z"]), iZ = Or.filter((t) => !nZ.has(t));
function cZ(t) {
  const e = [];
  return iZ.forEach((r) => {
    const o = t.getValue(r);
    o !== void 0 && (e.push([r, o.get()]), o.set(r.startsWith("scale") ? 1 : 0));
  }), e;
}
const kr = {
  // Dimensions
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: r = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(r),
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: r = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(r),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  // Transform
  x: (t, { transform: e }) => na(e, "x"),
  y: (t, { transform: e }) => na(e, "y")
};
kr.translateX = kr.x;
kr.translateY = kr.y;
const yr = /* @__PURE__ */ new Set();
let ia = !1, ca = !1, la = !1;
function $u() {
  if (ca) {
    const t = Array.from(yr).filter((o) => o.needsMeasurement), e = new Set(t.map((o) => o.element)), r = /* @__PURE__ */ new Map();
    e.forEach((o) => {
      const s = cZ(o);
      s.length && (r.set(o, s), o.render());
    }), t.forEach((o) => o.measureInitialState()), e.forEach((o) => {
      o.render();
      const s = r.get(o);
      s && s.forEach(([a, i]) => {
        var n;
        (n = o.getValue(a)) == null || n.set(i);
      });
    }), t.forEach((o) => o.measureEndState()), t.forEach((o) => {
      o.suspendedScrollY !== void 0 && window.scrollTo(0, o.suspendedScrollY);
    });
  }
  ca = !1, ia = !1, yr.forEach((t) => t.complete(la)), yr.clear();
}
function Su() {
  yr.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (ca = !0);
  });
}
function lZ() {
  la = !0, Su(), $u(), la = !1;
}
class Ra {
  constructor(e, r, o, s, a, i = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = r, this.name = o, this.motionValue = s, this.element = a, this.isAsync = i;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (yr.add(this), ia || (ia = !0, S.read(Su), S.resolveKeyframes($u))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, name: r, element: o, motionValue: s } = this;
    if (e[0] === null) {
      const a = s == null ? void 0 : s.get(), i = e[e.length - 1];
      if (a !== void 0)
        e[0] = a;
      else if (o && r) {
        const n = o.readValue(r, i);
        n != null && (e[0] = n);
      }
      e[0] === void 0 && (e[0] = i), s && a === void 0 && s.set(e[0]);
    }
    tZ(e);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(e = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), yr.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (yr.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const hZ = (t) => t.startsWith("--");
function dZ(t, e, r) {
  hZ(e) ? t.style.setProperty(e, r) : t.style[e] = r;
}
const uZ = /* @__PURE__ */ Wa(() => window.ScrollTimeline !== void 0), pZ = {};
function mZ(t, e) {
  const r = /* @__PURE__ */ Wa(t);
  return () => pZ[e] ?? r();
}
const Vu = /* @__PURE__ */ mZ(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), _r = ([t, e, r, o]) => `cubic-bezier(${t}, ${e}, ${r}, ${o})`, xc = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ _r([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ _r([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ _r([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ _r([0.33, 1.53, 0.69, 0.99])
};
function Tu(t, e) {
  if (t)
    return typeof t == "function" ? Vu() ? Wu(t, e) : "ease-out" : vu(t) ? _r(t) : Array.isArray(t) ? t.map((r) => Tu(r, e) || xc.easeOut) : xc[t];
}
function fZ(t, e, r, { delay: o = 0, duration: s = 300, repeat: a = 0, repeatType: i = "loop", ease: n = "easeOut", times: c } = {}, l = void 0) {
  const h = {
    [e]: r
  };
  c && (h.offset = c);
  const p = Tu(n, s);
  Array.isArray(p) && (h.easing = p);
  const m = {
    delay: o,
    duration: s,
    easing: Array.isArray(p) ? "linear" : p,
    fill: "both",
    iterations: a + 1,
    direction: i === "reverse" ? "alternate" : "normal"
  };
  return l && (m.pseudoElement = l), t.animate(h, m);
}
function Pu(t) {
  return typeof t == "function" && "applyToOptions" in t;
}
function kZ({ type: t, ...e }) {
  return Pu(t) && Vu() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e);
}
class yZ extends Ba {
  constructor(e) {
    if (super(), this.finishedTime = null, this.isStopped = !1, !e)
      return;
    const { element: r, name: o, keyframes: s, pseudoElement: a, allowFlatten: i = !1, finalKeyframe: n, onComplete: c } = e;
    this.isPseudoElement = !!a, this.allowFlatten = i, this.options = e, Gt(typeof e.type != "string", `animateMini doesn't support "type" as a string. Did you mean to import { spring } from "motion"?`);
    const l = kZ(e);
    this.animation = fZ(r, o, s, l, a), l.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !a) {
        const h = Ea(s, this.options, n, this.speed);
        this.updateMotionValue ? this.updateMotionValue(h) : dZ(r, o, h), this.animation.cancel();
      }
      c == null || c(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var e, r;
    (r = (e = this.animation).finish) == null || r.call(e);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: e } = this;
    e === "idle" || e === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    var e, r;
    this.isPseudoElement || (r = (e = this.animation).commitStyles) == null || r.call(e);
  }
  get duration() {
    var r, o;
    const e = ((o = (r = this.animation.effect) == null ? void 0 : r.getComputedTiming) == null ? void 0 : o.call(r).duration) || 0;
    return /* @__PURE__ */ re(Number(e));
  }
  get time() {
    return /* @__PURE__ */ re(Number(this.animation.currentTime) || 0);
  }
  set time(e) {
    this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ J(e);
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(e) {
    e < 0 && (this.finishedTime = null), this.animation.playbackRate = e;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(e) {
    this.animation.startTime = e;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: e, observe: r }) {
    var o;
    return this.allowFlatten && ((o = this.animation.effect) == null || o.updateTiming({ easing: "linear" })), this.animation.onfinish = null, e && uZ() ? (this.animation.timeline = e, G) : r(this);
  }
}
const Du = {
  anticipate: fu,
  backInOut: mu,
  circInOut: yu
};
function gZ(t) {
  return t in Du;
}
function vZ(t) {
  typeof t.ease == "string" && gZ(t.ease) && (t.ease = Du[t.ease]);
}
const bc = 10;
class wZ extends yZ {
  constructor(e) {
    vZ(e), qu(e), super(e), e.startTime && (this.startTime = e.startTime), this.options = e;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read commited styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(e) {
    const { motionValue: r, onUpdate: o, onComplete: s, element: a, ...i } = this.options;
    if (!r)
      return;
    if (e !== void 0) {
      r.set(e);
      return;
    }
    const n = new Za({
      ...i,
      autoplay: !1
    }), c = /* @__PURE__ */ J(this.finishedTime ?? this.time);
    r.setWithVelocity(n.sample(c - bc).value, n.sample(c).value, bc), n.stop();
  }
}
const Nc = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(lr.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url("));
function xZ(t) {
  const e = t[0];
  if (t.length === 1)
    return !0;
  for (let r = 0; r < t.length; r++)
    if (t[r] !== e)
      return !0;
}
function bZ(t, e, r, o) {
  const s = t[0];
  if (s === null)
    return !1;
  if (e === "display" || e === "visibility")
    return !0;
  const a = t[t.length - 1], i = Nc(s, e), n = Nc(a, e);
  return Pr(i === n, `You are trying to animate ${e} from "${s}" to "${a}". ${s} is not an animatable value - to enable this animation set ${s} to a value animatable to ${a} via the \`style\` property.`), !i || !n ? !1 : xZ(t) || (r === "spring" || Pu(r)) && o;
}
function _a(t) {
  return iu(t) && "offsetHeight" in t;
}
const NZ = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Could be re-enabled now we have support for linear() easing
  // "background-color"
]), MZ = /* @__PURE__ */ Wa(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function CZ(t) {
  var l;
  const { motionValue: e, name: r, repeatDelay: o, repeatType: s, damping: a, type: i } = t;
  if (!_a((l = e == null ? void 0 : e.owner) == null ? void 0 : l.current))
    return !1;
  const { onUpdate: n, transformTemplate: c } = e.owner.getProps();
  return MZ() && r && NZ.has(r) && (r !== "transform" || !c) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !n && !o && s !== "mirror" && a !== 0 && i !== "inertia";
}
const AZ = 40;
class LZ extends Ba {
  constructor({ autoplay: e = !0, delay: r = 0, type: o = "keyframes", repeat: s = 0, repeatDelay: a = 0, repeatType: i = "loop", keyframes: n, name: c, motionValue: l, element: h, ...p }) {
    var y;
    super(), this.stop = () => {
      var g, v;
      this._animation && (this._animation.stop(), (g = this.stopTimeline) == null || g.call(this)), (v = this.keyframeResolver) == null || v.cancel();
    }, this.createdAt = H.now();
    const m = {
      autoplay: e,
      delay: r,
      type: o,
      repeat: s,
      repeatDelay: a,
      repeatType: i,
      name: c,
      motionValue: l,
      element: h,
      ...p
    }, k = (h == null ? void 0 : h.KeyframeResolver) || Ra;
    this.keyframeResolver = new k(n, (g, v, w) => this.onKeyframesResolved(g, v, m, !w), c, l, h), (y = this.keyframeResolver) == null || y.scheduleResolve();
  }
  onKeyframesResolved(e, r, o, s) {
    this.keyframeResolver = void 0;
    const { name: a, type: i, velocity: n, delay: c, isHandoff: l, onUpdate: h } = o;
    this.resolvedAt = H.now(), bZ(e, a, i, n) || ((Qt.instantAnimations || !c) && (h == null || h(Ea(e, o, r))), e[0] = e[e.length - 1], o.duration = 0, o.repeat = 0);
    const m = {
      startTime: s ? this.resolvedAt ? this.resolvedAt - this.createdAt > AZ ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: r,
      ...o,
      keyframes: e
    }, k = !l && CZ(m) ? new wZ({
      ...m,
      element: m.motionValue.owner.current
    }) : new Za(m);
    k.finished.then(() => this.notifyFinished()).catch(G), this.pendingTimeline && (this.stopTimeline = k.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = k;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(e, r) {
    return this.finished.finally(e).then(() => {
    });
  }
  get animation() {
    var e;
    return this._animation || ((e = this.keyframeResolver) == null || e.resume(), lZ()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get time() {
    return this.animation.time;
  }
  set time(e) {
    this.animation.time = e;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(e) {
    this.animation.speed = e;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(e) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var e;
    this._animation && this.animation.cancel(), (e = this.keyframeResolver) == null || e.cancel();
  }
}
const zZ = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function WZ(t) {
  const e = zZ.exec(t);
  if (!e)
    return [,];
  const [, r, o, s] = e;
  return [`--${r ?? o}`, s];
}
const jZ = 4;
function Ou(t, e, r = 1) {
  Gt(r <= jZ, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
  const [o, s] = WZ(t);
  if (!o)
    return;
  const a = window.getComputedStyle(e).getPropertyValue(o);
  if (a) {
    const i = a.trim();
    return nu(i) ? parseFloat(i) : i;
  }
  return Ta(s) ? Ou(s, e, r + 1) : s;
}
function Fa(t, e) {
  return (t == null ? void 0 : t[e]) ?? (t == null ? void 0 : t.default) ?? t;
}
const Uu = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Or
]), qZ = {
  test: (t) => t === "auto",
  parse: (t) => t
}, Eu = (t) => (e) => e.test(t), Bu = [Dr, A, oe, ir, xB, wB, qZ], Mc = (t) => Bu.find(Eu(t));
function $Z(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || cu(t) : !0;
}
const SZ = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function VZ(t) {
  const [e, r] = t.slice(0, -1).split("(");
  if (e === "drop-shadow")
    return t;
  const [o] = r.match(Pa) || [];
  if (!o)
    return t;
  const s = r.replace(o, "");
  let a = SZ.has(e) ? 1 : 0;
  return o !== r && (a *= 100), e + "(" + a + s + ")";
}
const TZ = /\b([a-z-]*)\(.*?\)/gu, ha = {
  ...lr,
  getAnimatableNone: (t) => {
    const e = t.match(TZ);
    return e ? e.map(VZ).join(" ") : t;
  }
}, Cc = {
  ...Dr,
  transform: Math.round
}, PZ = {
  rotate: ir,
  rotateX: ir,
  rotateY: ir,
  rotateZ: ir,
  scale: ho,
  scaleX: ho,
  scaleY: ho,
  scaleZ: ho,
  skew: ir,
  skewX: ir,
  skewY: ir,
  distance: A,
  translateX: A,
  translateY: A,
  translateZ: A,
  x: A,
  y: A,
  z: A,
  perspective: A,
  transformPerspective: A,
  opacity: Gr,
  originX: uc,
  originY: uc,
  originZ: A
}, Ia = {
  // Border props
  borderWidth: A,
  borderTopWidth: A,
  borderRightWidth: A,
  borderBottomWidth: A,
  borderLeftWidth: A,
  borderRadius: A,
  radius: A,
  borderTopLeftRadius: A,
  borderTopRightRadius: A,
  borderBottomRightRadius: A,
  borderBottomLeftRadius: A,
  // Positioning props
  width: A,
  maxWidth: A,
  height: A,
  maxHeight: A,
  top: A,
  right: A,
  bottom: A,
  left: A,
  // Spacing props
  padding: A,
  paddingTop: A,
  paddingRight: A,
  paddingBottom: A,
  paddingLeft: A,
  margin: A,
  marginTop: A,
  marginRight: A,
  marginBottom: A,
  marginLeft: A,
  // Misc
  backgroundPositionX: A,
  backgroundPositionY: A,
  ...PZ,
  zIndex: Cc,
  // SVG
  fillOpacity: Gr,
  strokeOpacity: Gr,
  numOctaves: Cc
}, DZ = {
  ...Ia,
  // Color props
  color: D,
  backgroundColor: D,
  outlineColor: D,
  fill: D,
  stroke: D,
  // Border props
  borderColor: D,
  borderTopColor: D,
  borderRightColor: D,
  borderBottomColor: D,
  borderLeftColor: D,
  filter: ha,
  WebkitFilter: ha
}, Zu = (t) => DZ[t];
function Ru(t, e) {
  let r = Zu(t);
  return r !== ha && (r = lr), r.getAnimatableNone ? r.getAnimatableNone(e) : void 0;
}
const OZ = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function UZ(t, e, r) {
  let o = 0, s;
  for (; o < t.length && !s; ) {
    const a = t[o];
    typeof a == "string" && !OZ.has(a) && Qr(a).values.length && (s = t[o]), o++;
  }
  if (s && r)
    for (const a of e)
      t[a] = Ru(r, s);
}
class EZ extends Ra {
  constructor(e, r, o, s, a) {
    super(e, r, o, s, a, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: r, name: o } = this;
    if (!r || !r.current)
      return;
    super.readKeyframes();
    for (let c = 0; c < e.length; c++) {
      let l = e[c];
      if (typeof l == "string" && (l = l.trim(), Ta(l))) {
        const h = Ou(l, r.current);
        h !== void 0 && (e[c] = h), c === e.length - 1 && (this.finalKeyframe = l);
      }
    }
    if (this.resolveNoneKeyframes(), !Uu.has(o) || e.length !== 2)
      return;
    const [s, a] = e, i = Mc(s), n = Mc(a);
    if (i !== n)
      if (wc(i) && wc(n))
        for (let c = 0; c < e.length; c++) {
          const l = e[c];
          typeof l == "string" && (e[c] = parseFloat(l));
        }
      else kr[o] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: r } = this, o = [];
    for (let s = 0; s < e.length; s++)
      (e[s] === null || $Z(e[s])) && o.push(s);
    o.length && UZ(e, o, r);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: r, name: o } = this;
    if (!e || !e.current)
      return;
    o === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = kr[o](e.measureViewportBox(), window.getComputedStyle(e.current)), r[0] = this.measuredOrigin;
    const s = r[r.length - 1];
    s !== void 0 && e.getValue(o, s).jump(s, !1);
  }
  measureEndState() {
    var n;
    const { element: e, name: r, unresolvedKeyframes: o } = this;
    if (!e || !e.current)
      return;
    const s = e.getValue(r);
    s && s.jump(this.measuredOrigin, !1);
    const a = o.length - 1, i = o[a];
    o[a] = kr[r](e.measureViewportBox(), window.getComputedStyle(e.current)), i !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = i), (n = this.removedTransforms) != null && n.length && this.removedTransforms.forEach(([c, l]) => {
      e.getValue(c).set(l);
    }), this.resolveNoneKeyframes();
  }
}
function BZ(t, e, r) {
  if (t instanceof EventTarget)
    return [t];
  if (typeof t == "string") {
    let o = document;
    const s = (r == null ? void 0 : r[t]) ?? o.querySelectorAll(t);
    return s ? Array.from(s) : [];
  }
  return Array.from(t);
}
const _u = (t, e) => e && typeof t == "number" ? e.transform(t) : t, Ac = 30, ZZ = (t) => !isNaN(parseFloat(t));
class RZ {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(e, r = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (o, s = !0) => {
      var i, n;
      const a = H.now();
      if (this.updatedAt !== a && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(o), this.current !== this.prev && ((i = this.events.change) == null || i.notify(this.current), this.dependents))
        for (const c of this.dependents)
          c.dirty();
      s && ((n = this.events.renderRequest) == null || n.notify(this.current));
    }, this.hasAnimated = !1, this.setCurrent(e), this.owner = r.owner;
  }
  setCurrent(e) {
    this.current = e, this.updatedAt = H.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = ZZ(this.current));
  }
  setPrevFrameValue(e = this.current) {
    this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(e) {
    return process.env.NODE_ENV !== "production" && qa(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", e);
  }
  on(e, r) {
    this.events[e] || (this.events[e] = new ja());
    const o = this.events[e].add(r);
    return e === "change" ? () => {
      o(), S.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : o;
  }
  clearListeners() {
    for (const e in this.events)
      this.events[e].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(e, r) {
    this.passiveEffect = e, this.stopPassiveEffect = r;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(e, r = !0) {
    !r || !this.passiveEffect ? this.updateAndNotify(e, r) : this.passiveEffect(e, this.updateAndNotify);
  }
  setWithVelocity(e, r, o) {
    this.set(r), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - o;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(e, r = !0) {
    this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, r && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    var e;
    (e = this.events.change) == null || e.notify(this.current);
  }
  addDependent(e) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(e);
  }
  removeDependent(e) {
    this.dependents && this.dependents.delete(e);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const e = H.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Ac)
      return 0;
    const r = Math.min(this.updatedAt - this.prevUpdatedAt, Ac);
    return lu(parseFloat(this.current) - parseFloat(this.prevFrameValue), r);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(e) {
    return this.stop(), new Promise((r) => {
      this.hasAnimated = !0, this.animation = e(r), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    var e, r;
    (e = this.dependents) == null || e.clear(), (r = this.events.destroy) == null || r.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Vr(t, e) {
  return new RZ(t, e);
}
const { schedule: Ha } = /* @__PURE__ */ wu(queueMicrotask, !1), Q = {
  x: !1,
  y: !1
};
function Fu() {
  return Q.x || Q.y;
}
function _Z(t) {
  return t === "x" || t === "y" ? Q[t] ? null : (Q[t] = !0, () => {
    Q[t] = !1;
  }) : Q.x || Q.y ? null : (Q.x = Q.y = !0, () => {
    Q.x = Q.y = !1;
  });
}
function Iu(t, e) {
  const r = BZ(t), o = new AbortController(), s = {
    passive: !0,
    ...e,
    signal: o.signal
  };
  return [r, s, () => o.abort()];
}
function Lc(t) {
  return !(t.pointerType === "touch" || Fu());
}
function FZ(t, e, r = {}) {
  const [o, s, a] = Iu(t, r), i = (n) => {
    if (!Lc(n))
      return;
    const { target: c } = n, l = e(c, n);
    if (typeof l != "function" || !c)
      return;
    const h = (p) => {
      Lc(p) && (l(p), c.removeEventListener("pointerleave", h));
    };
    c.addEventListener("pointerleave", h, s);
  };
  return o.forEach((n) => {
    n.addEventListener("pointerenter", i, s);
  }), a;
}
const Hu = (t, e) => e ? t === e ? !0 : Hu(t, e.parentElement) : !1, Ya = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1, IZ = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function HZ(t) {
  return IZ.has(t.tagName) || t.tabIndex !== -1;
}
const fo = /* @__PURE__ */ new WeakSet();
function zc(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function _o(t, e) {
  t.dispatchEvent(new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }));
}
const YZ = (t, e) => {
  const r = t.currentTarget;
  if (!r)
    return;
  const o = zc(() => {
    if (fo.has(r))
      return;
    _o(r, "down");
    const s = zc(() => {
      _o(r, "up");
    }), a = () => _o(r, "cancel");
    r.addEventListener("keyup", s, e), r.addEventListener("blur", a, e);
  });
  r.addEventListener("keydown", o, e), r.addEventListener("blur", () => r.removeEventListener("keydown", o), e);
};
function Wc(t) {
  return Ya(t) && !Fu();
}
function XZ(t, e, r = {}) {
  const [o, s, a] = Iu(t, r), i = (n) => {
    const c = n.currentTarget;
    if (!Wc(n))
      return;
    fo.add(c);
    const l = e(c, n), h = (k, y) => {
      window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", m), fo.has(c) && fo.delete(c), Wc(k) && typeof l == "function" && l(k, { success: y });
    }, p = (k) => {
      h(k, c === window || c === document || r.useGlobalTarget || Hu(c, k.target));
    }, m = (k) => {
      h(k, !1);
    };
    window.addEventListener("pointerup", p, s), window.addEventListener("pointercancel", m, s);
  };
  return o.forEach((n) => {
    (r.useGlobalTarget ? window : n).addEventListener("pointerdown", i, s), _a(n) && (n.addEventListener("focus", (l) => YZ(l, s)), !HZ(n) && !n.hasAttribute("tabindex") && (n.tabIndex = 0));
  }), a;
}
function Yu(t) {
  return iu(t) && "ownerSVGElement" in t;
}
function KZ(t) {
  return Yu(t) && t.tagName === "svg";
}
const R = (t) => !!(t && t.getVelocity), GZ = [...Bu, D, lr], QZ = (t) => GZ.find(Eu(t)), Xa = x({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
class JZ extends va.Component {
  getSnapshotBeforeUpdate(e) {
    const r = this.props.childRef.current;
    if (r && e.isPresent && !this.props.isPresent) {
      const o = r.offsetParent, s = _a(o) && o.offsetWidth || 0, a = this.props.sizeRef.current;
      a.height = r.offsetHeight || 0, a.width = r.offsetWidth || 0, a.top = r.offsetTop, a.left = r.offsetLeft, a.right = s - a.width - a.left;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function eR({ children: t, isPresent: e, anchorX: r, root: o }) {
  const s = wa(), a = te(null), i = te({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  }), { nonce: n } = Z(Xa);
  return Ml(() => {
    const { width: c, height: l, top: h, left: p, right: m } = i.current;
    if (e || !a.current || !c || !l)
      return;
    const k = r === "left" ? `left: ${p}` : `right: ${m}`;
    a.current.dataset.motionPopId = s;
    const y = document.createElement("style");
    n && (y.nonce = n);
    const g = o ?? document.head;
    return g.appendChild(y), y.sheet && y.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${l}px !important;
            ${k}px !important;
            top: ${h}px !important;
          }
        `), () => {
      g.removeChild(y), g.contains(y) && g.removeChild(y);
    };
  }, [e]), f(JZ, { isPresent: e, childRef: a, sizeRef: i, children: va.cloneElement(t, { ref: a }) });
}
const tR = ({ children: t, initial: e, isPresent: r, onExitComplete: o, custom: s, presenceAffectsLayout: a, mode: i, anchorX: n, root: c }) => {
  const l = Ca(rR), h = wa();
  let p = !0, m = gr(() => (p = !1, {
    id: h,
    initial: e,
    isPresent: r,
    custom: s,
    onExitComplete: (k) => {
      l.set(k, !0);
      for (const y of l.values())
        if (!y)
          return;
      o && o();
    },
    register: (k) => (l.set(k, !1), () => l.delete(k))
  }), [r, l, o]);
  return a && p && (m = { ...m }), gr(() => {
    l.forEach((k, y) => l.set(y, !1));
  }, [r]), va.useEffect(() => {
    !r && !l.size && o && o();
  }, [r]), i === "popLayout" && (t = f(eR, { isPresent: r, anchorX: n, root: c, children: t })), f(jo.Provider, { value: m, children: t });
};
function rR() {
  return /* @__PURE__ */ new Map();
}
function Xu(t = !0) {
  const e = Z(jo);
  if (e === null)
    return [!0, null];
  const { isPresent: r, onExitComplete: o, register: s } = e, a = wa();
  Y(() => {
    if (t)
      return s(a);
  }, [t]);
  const i = Cl(() => t && o && o(a), [a, o, t]);
  return !r && o ? [!1, i] : [!0];
}
const uo = (t) => t.key || "";
function jc(t) {
  const e = [];
  return U0.forEach(t, (r) => {
    E0(r) && e.push(r);
  }), e;
}
const oR = ({ children: t, custom: e, initial: r = !0, onExitComplete: o, presenceAffectsLayout: s = !0, mode: a = "sync", propagate: i = !1, anchorX: n = "left", root: c }) => {
  const [l, h] = Xu(i), p = gr(() => jc(t), [t]), m = i && !l ? [] : p.map(uo), k = te(!0), y = te(p), g = Ca(() => /* @__PURE__ */ new Map()), [v, w] = O(p), [b, N] = O(p);
  su(() => {
    k.current = !1, y.current = p;
    for (let W = 0; W < b.length; W++) {
      const j = uo(b[W]);
      m.includes(j) ? g.delete(j) : g.get(j) !== !0 && g.set(j, !1);
    }
  }, [b, m.length, m.join("-")]);
  const z = [];
  if (p !== v) {
    let W = [...p];
    for (let j = 0; j < b.length; j++) {
      const L = b[j], U = uo(L);
      m.includes(U) || (W.splice(j, 0, L), z.push(L));
    }
    return a === "wait" && z.length && (W = z), N(jc(W)), w(p), null;
  }
  process.env.NODE_ENV !== "production" && a === "wait" && b.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  const { forceRender: M } = Z(Ma);
  return f(P0, { children: b.map((W) => {
    const j = uo(W), L = i && !l ? !1 : p === b || m.includes(j), U = () => {
      if (g.has(j))
        g.set(j, !0);
      else
        return;
      let _ = !0;
      g.forEach((sr) => {
        sr || (_ = !1);
      }), _ && (M == null || M(), N(y.current), i && (h == null || h()), o && o());
    };
    return f(tR, { isPresent: L, initial: !k.current || r ? void 0 : !1, custom: e, presenceAffectsLayout: s, mode: a, root: c, onExitComplete: L ? void 0 : U, anchorX: n, children: W }, j);
  }) });
}, Ku = x({ strict: !1 }), qc = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, Tr = {};
for (const t in qc)
  Tr[t] = {
    isEnabled: (e) => qc[t].some((r) => !!e[r])
  };
function aR(t) {
  for (const e in t)
    Tr[e] = {
      ...Tr[e],
      ...t[e]
    };
}
const sR = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function Mo(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || sR.has(t);
}
let Gu = (t) => !Mo(t);
function nR(t) {
  typeof t == "function" && (Gu = (e) => e.startsWith("on") ? !Mo(e) : t(e));
}
try {
  nR(require("@emotion/is-prop-valid").default);
} catch {
}
function iR(t, e, r) {
  const o = {};
  for (const s in t)
    s === "values" && typeof t.values == "object" || (Gu(s) || r === !0 && Mo(s) || !e && !Mo(s) || // If trying to use native HTML drag events, forward drag listeners
    t.draggable && s.startsWith("onDrag")) && (o[s] = t[s]);
  return o;
}
function cR(t) {
  if (typeof Proxy > "u")
    return t;
  const e = /* @__PURE__ */ new Map(), r = (...o) => (process.env.NODE_ENV !== "production" && qa(!1, "motion() is deprecated. Use motion.create() instead."), t(...o));
  return new Proxy(r, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (o, s) => s === "create" ? t : (e.has(s) || e.set(s, t(s)), e.get(s))
  });
}
const qo = /* @__PURE__ */ x({});
function $o(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function Jr(t) {
  return typeof t == "string" || Array.isArray(t);
}
const Ka = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Ga = ["initial", ...Ka];
function So(t) {
  return $o(t.animate) || Ga.some((e) => Jr(t[e]));
}
function Qu(t) {
  return !!(So(t) || t.variants);
}
function lR(t, e) {
  if (So(t)) {
    const { initial: r, animate: o } = t;
    return {
      initial: r === !1 || Jr(r) ? r : void 0,
      animate: Jr(o) ? o : void 0
    };
  }
  return t.inherit !== !1 ? e : {};
}
function hR(t) {
  const { initial: e, animate: r } = lR(t, Z(qo));
  return gr(() => ({ initial: e, animate: r }), [$c(e), $c(r)]);
}
function $c(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const dR = Symbol.for("motionComponentSymbol");
function jr(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function uR(t, e, r) {
  return Cl(
    (o) => {
      o && t.onMount && t.onMount(o), e && (o ? e.mount(o) : e.unmount()), r && (typeof r == "function" ? r(o) : jr(r) && (r.current = o));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [e]
  );
}
const Qa = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), pR = "framerAppearId", Ju = "data-" + Qa(pR), e0 = x({});
function mR(t, e, r, o, s) {
  var g, v;
  const { visualElement: a } = Z(qo), i = Z(Ku), n = Z(jo), c = Z(Xa).reducedMotion, l = te(null);
  o = o || i.renderer, !l.current && o && (l.current = o(t, {
    visualState: e,
    parent: a,
    props: r,
    presenceContext: n,
    blockInitialAnimation: n ? n.initial === !1 : !1,
    reducedMotionConfig: c
  }));
  const h = l.current, p = Z(e0);
  h && !h.projection && s && (h.type === "html" || h.type === "svg") && fR(l.current, r, s, p);
  const m = te(!1);
  Ml(() => {
    h && m.current && h.update(r, n);
  });
  const k = r[Ju], y = te(!!k && !((g = window.MotionHandoffIsComplete) != null && g.call(window, k)) && ((v = window.MotionHasOptimisedAnimation) == null ? void 0 : v.call(window, k)));
  return su(() => {
    h && (m.current = !0, window.MotionIsMounted = !0, h.updateFeatures(), Ha.render(h.render), y.current && h.animationState && h.animationState.animateChanges());
  }), Y(() => {
    h && (!y.current && h.animationState && h.animationState.animateChanges(), y.current && (queueMicrotask(() => {
      var w;
      (w = window.MotionHandoffMarkAsComplete) == null || w.call(window, k);
    }), y.current = !1));
  }), h;
}
function fR(t, e, r, o) {
  const { layoutId: s, layout: a, drag: i, dragConstraints: n, layoutScroll: c, layoutRoot: l, layoutCrossfade: h } = e;
  t.projection = new r(t.latestValues, e["data-framer-portal-id"] ? void 0 : t0(t.parent)), t.projection.setOptions({
    layoutId: s,
    layout: a,
    alwaysMeasureLayout: !!i || n && jr(n),
    visualElement: t,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof a == "string" ? a : "both",
    initialPromotionConfig: o,
    crossfade: h,
    layoutScroll: c,
    layoutRoot: l
  });
}
function t0(t) {
  if (t)
    return t.options.allowProjection !== !1 ? t.projection : t0(t.parent);
}
function kR({ preloadedFeatures: t, createVisualElement: e, useRender: r, useVisualState: o, Component: s }) {
  t && aR(t);
  function a(n, c) {
    let l;
    const h = {
      ...Z(Xa),
      ...n,
      layoutId: yR(n)
    }, { isStatic: p } = h, m = hR(n), k = o(n, p);
    if (!p && Aa) {
      gR(h, t);
      const y = vR(h);
      l = y.MeasureLayout, m.visualElement = mR(s, k, h, e, y.ProjectionNode);
    }
    return C(qo.Provider, { value: m, children: [l && m.visualElement ? f(l, { visualElement: m.visualElement, ...h }) : null, r(s, n, uR(k, m.visualElement, c), k, p, m.visualElement)] });
  }
  a.displayName = `motion.${typeof s == "string" ? s : `create(${s.displayName ?? s.name ?? ""})`}`;
  const i = u(a);
  return i[dR] = s, i;
}
function yR({ layoutId: t }) {
  const e = Z(Ma).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function gR(t, e) {
  const r = Z(Ku).strict;
  if (process.env.NODE_ENV !== "production" && e && r) {
    const o = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    t.ignoreStrict ? Pr(!1, o) : Gt(!1, o);
  }
}
function vR(t) {
  const { drag: e, layout: r } = Tr;
  if (!e && !r)
    return {};
  const o = { ...e, ...r };
  return {
    MeasureLayout: e != null && e.isEnabled(t) || r != null && r.isEnabled(t) ? o.MeasureLayout : void 0,
    ProjectionNode: o.ProjectionNode
  };
}
const eo = {};
function wR(t) {
  for (const e in t)
    eo[e] = t[e], Va(e) && (eo[e].isCSSVariable = !0);
}
function r0(t, { layout: e, layoutId: r }) {
  return Ur.has(t) || t.startsWith("origin") || (e || r !== void 0) && (!!eo[t] || t === "opacity");
}
const xR = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, bR = Or.length;
function NR(t, e, r) {
  let o = "", s = !0;
  for (let a = 0; a < bR; a++) {
    const i = Or[a], n = t[i];
    if (n === void 0)
      continue;
    let c = !0;
    if (typeof n == "number" ? c = n === (i.startsWith("scale") ? 1 : 0) : c = parseFloat(n) === 0, !c || r) {
      const l = _u(n, Ia[i]);
      if (!c) {
        s = !1;
        const h = xR[i] || i;
        o += `${h}(${l}) `;
      }
      r && (e[i] = l);
    }
  }
  return o = o.trim(), r ? o = r(e, s ? "" : o) : s && (o = "none"), o;
}
function Ja(t, e, r) {
  const { style: o, vars: s, transformOrigin: a } = t;
  let i = !1, n = !1;
  for (const c in e) {
    const l = e[c];
    if (Ur.has(c)) {
      i = !0;
      continue;
    } else if (Va(c)) {
      s[c] = l;
      continue;
    } else {
      const h = _u(l, Ia[c]);
      c.startsWith("origin") ? (n = !0, a[c] = h) : o[c] = h;
    }
  }
  if (e.transform || (i || r ? o.transform = NR(e, t.transform, r) : o.transform && (o.transform = "none")), n) {
    const { originX: c = "50%", originY: l = "50%", originZ: h = 0 } = a;
    o.transformOrigin = `${c} ${l} ${h}`;
  }
}
const es = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function o0(t, e, r) {
  for (const o in e)
    !R(e[o]) && !r0(o, r) && (t[o] = e[o]);
}
function MR({ transformTemplate: t }, e) {
  return gr(() => {
    const r = es();
    return Ja(r, e, t), Object.assign({}, r.vars, r.style);
  }, [e]);
}
function CR(t, e) {
  const r = t.style || {}, o = {};
  return o0(o, r, t), Object.assign(o, MR(t, e)), o;
}
function AR(t, e) {
  const r = {}, o = CR(t, e);
  return t.drag && t.dragListener !== !1 && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (r.tabIndex = 0), r.style = o, r;
}
const LR = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, zR = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function WR(t, e, r = 1, o = 0, s = !0) {
  t.pathLength = 1;
  const a = s ? LR : zR;
  t[a.offset] = A.transform(-o);
  const i = A.transform(e), n = A.transform(r);
  t[a.array] = `${i} ${n}`;
}
function a0(t, {
  attrX: e,
  attrY: r,
  attrScale: o,
  pathLength: s,
  pathSpacing: a = 1,
  pathOffset: i = 0,
  // This is object creation, which we try to avoid per-frame.
  ...n
}, c, l, h) {
  if (Ja(t, n, l), c) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: p, style: m } = t;
  p.transform && (m.transform = p.transform, delete p.transform), (m.transform || p.transformOrigin) && (m.transformOrigin = p.transformOrigin ?? "50% 50%", delete p.transformOrigin), m.transform && (m.transformBox = (h == null ? void 0 : h.transformBox) ?? "fill-box", delete p.transformBox), e !== void 0 && (p.x = e), r !== void 0 && (p.y = r), o !== void 0 && (p.scale = o), s !== void 0 && WR(p, s, a, i, !1);
}
const s0 = () => ({
  ...es(),
  attrs: {}
}), n0 = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function jR(t, e, r, o) {
  const s = gr(() => {
    const a = s0();
    return a0(a, e, n0(o), t.transformTemplate, t.style), {
      ...a.attrs,
      style: { ...a.style }
    };
  }, [e]);
  if (t.style) {
    const a = {};
    o0(a, t.style, t), s.style = { ...a, ...s.style };
  }
  return s;
}
const qR = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function ts(t) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof t != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    t.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(qR.indexOf(t) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(t))
    )
  );
}
function $R(t = !1) {
  return (r, o, s, { latestValues: a }, i) => {
    const c = (ts(r) ? jR : AR)(o, a, i, r), l = iR(o, typeof r == "string", t), h = r !== Al ? { ...l, ...c, ref: s } : {}, { children: p } = o, m = gr(() => R(p) ? p.get() : p, [p]);
    return d(r, {
      ...h,
      children: m
    });
  };
}
function Sc(t) {
  const e = [{}, {}];
  return t == null || t.values.forEach((r, o) => {
    e[0][o] = r.get(), e[1][o] = r.getVelocity();
  }), e;
}
function rs(t, e, r, o) {
  if (typeof e == "function") {
    const [s, a] = Sc(o);
    e = e(r !== void 0 ? r : t.custom, s, a);
  }
  if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
    const [s, a] = Sc(o);
    e = e(r !== void 0 ? r : t.custom, s, a);
  }
  return e;
}
function ko(t) {
  return R(t) ? t.get() : t;
}
function SR({ scrapeMotionValuesFromProps: t, createRenderState: e }, r, o, s) {
  return {
    latestValues: VR(r, o, s, t),
    renderState: e()
  };
}
const i0 = (t) => (e, r) => {
  const o = Z(qo), s = Z(jo), a = () => SR(t, e, o, s);
  return r ? a() : Ca(a);
};
function VR(t, e, r, o) {
  const s = {}, a = o(t, {});
  for (const m in a)
    s[m] = ko(a[m]);
  let { initial: i, animate: n } = t;
  const c = So(t), l = Qu(t);
  e && l && !c && t.inherit !== !1 && (i === void 0 && (i = e.initial), n === void 0 && (n = e.animate));
  let h = r ? r.initial === !1 : !1;
  h = h || i === !1;
  const p = h ? n : i;
  if (p && typeof p != "boolean" && !$o(p)) {
    const m = Array.isArray(p) ? p : [p];
    for (let k = 0; k < m.length; k++) {
      const y = rs(t, m[k]);
      if (y) {
        const { transitionEnd: g, transition: v, ...w } = y;
        for (const b in w) {
          let N = w[b];
          if (Array.isArray(N)) {
            const z = h ? N.length - 1 : 0;
            N = N[z];
          }
          N !== null && (s[b] = N);
        }
        for (const b in g)
          s[b] = g[b];
      }
    }
  }
  return s;
}
function os(t, e, r) {
  var a;
  const { style: o } = t, s = {};
  for (const i in o)
    (R(o[i]) || e.style && R(e.style[i]) || r0(i, t) || ((a = r == null ? void 0 : r.getValue(i)) == null ? void 0 : a.liveStyle) !== void 0) && (s[i] = o[i]);
  return s;
}
const TR = {
  useVisualState: i0({
    scrapeMotionValuesFromProps: os,
    createRenderState: es
  })
};
function c0(t, e, r) {
  const o = os(t, e, r);
  for (const s in t)
    if (R(t[s]) || R(e[s])) {
      const a = Or.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
      o[a] = t[s];
    }
  return o;
}
const PR = {
  useVisualState: i0({
    scrapeMotionValuesFromProps: c0,
    createRenderState: s0
  })
};
function DR(t, e) {
  return function(o, { forwardMotionProps: s } = { forwardMotionProps: !1 }) {
    const i = {
      ...ts(o) ? PR : TR,
      preloadedFeatures: t,
      useRender: $R(s),
      createVisualElement: e,
      Component: o
    };
    return kR(i);
  };
}
function to(t, e, r) {
  const o = t.getProps();
  return rs(o, e, r !== void 0 ? r : o.custom, t);
}
const da = (t) => Array.isArray(t);
function OR(t, e, r) {
  t.hasValue(e) ? t.getValue(e).set(r) : t.addValue(e, Vr(r));
}
function UR(t) {
  return da(t) ? t[t.length - 1] || 0 : t;
}
function ER(t, e) {
  const r = to(t, e);
  let { transitionEnd: o = {}, transition: s = {}, ...a } = r || {};
  a = { ...a, ...o };
  for (const i in a) {
    const n = UR(a[i]);
    OR(t, i, n);
  }
}
function BR(t) {
  return !!(R(t) && t.add);
}
function ua(t, e) {
  const r = t.getValue("willChange");
  if (BR(r))
    return r.add(e);
  if (!r && Qt.WillChange) {
    const o = new Qt.WillChange("auto");
    t.addValue("willChange", o), o.add(e);
  }
}
function l0(t) {
  return t.props[Ju];
}
const ZR = (t) => t !== null;
function RR(t, { repeat: e, repeatType: r = "loop" }, o) {
  const s = t.filter(ZR), a = e && r !== "loop" && e % 2 === 1 ? 0 : s.length - 1;
  return s[a];
}
const _R = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, FR = (t) => ({
  type: "spring",
  stiffness: 550,
  damping: t === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), IR = {
  type: "keyframes",
  duration: 0.8
}, HR = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, YR = (t, { keyframes: e }) => e.length > 2 ? IR : Ur.has(t) ? t.startsWith("scale") ? FR(e[1]) : _R : HR;
function XR({ when: t, delay: e, delayChildren: r, staggerChildren: o, staggerDirection: s, repeat: a, repeatType: i, repeatDelay: n, from: c, elapsed: l, ...h }) {
  return !!Object.keys(h).length;
}
const as = (t, e, r, o = {}, s, a) => (i) => {
  const n = Fa(o, t) || {}, c = n.delay || o.delay || 0;
  let { elapsed: l = 0 } = o;
  l = l - /* @__PURE__ */ J(c);
  const h = {
    keyframes: Array.isArray(r) ? r : [null, r],
    ease: "easeOut",
    velocity: e.getVelocity(),
    ...n,
    delay: -l,
    onUpdate: (m) => {
      e.set(m), n.onUpdate && n.onUpdate(m);
    },
    onComplete: () => {
      i(), n.onComplete && n.onComplete();
    },
    name: t,
    motionValue: e,
    element: a ? void 0 : s
  };
  XR(n) || Object.assign(h, YR(t, h)), h.duration && (h.duration = /* @__PURE__ */ J(h.duration)), h.repeatDelay && (h.repeatDelay = /* @__PURE__ */ J(h.repeatDelay)), h.from !== void 0 && (h.keyframes[0] = h.from);
  let p = !1;
  if ((h.type === !1 || h.duration === 0 && !h.repeatDelay) && (h.duration = 0, h.delay === 0 && (p = !0)), (Qt.instantAnimations || Qt.skipAnimations) && (p = !0, h.duration = 0, h.delay = 0), h.allowFlatten = !n.type && !n.ease, p && !a && e.get() !== void 0) {
    const m = RR(h.keyframes, n);
    if (m !== void 0) {
      S.update(() => {
        h.onUpdate(m), h.onComplete();
      });
      return;
    }
  }
  return n.isSync ? new Za(h) : new LZ(h);
};
function KR({ protectedKeys: t, needsAnimating: e }, r) {
  const o = t.hasOwnProperty(r) && e[r] !== !0;
  return e[r] = !1, o;
}
function h0(t, e, { delay: r = 0, transitionOverride: o, type: s } = {}) {
  let { transition: a = t.getDefaultTransition(), transitionEnd: i, ...n } = e;
  o && (a = o);
  const c = [], l = s && t.animationState && t.animationState.getState()[s];
  for (const h in n) {
    const p = t.getValue(h, t.latestValues[h] ?? null), m = n[h];
    if (m === void 0 || l && KR(l, h))
      continue;
    const k = {
      delay: r,
      ...Fa(a || {}, h)
    }, y = p.get();
    if (y !== void 0 && !p.isAnimating && !Array.isArray(m) && m === y && !k.velocity)
      continue;
    let g = !1;
    if (window.MotionHandoffAnimation) {
      const w = l0(t);
      if (w) {
        const b = window.MotionHandoffAnimation(w, h, S);
        b !== null && (k.startTime = b, g = !0);
      }
    }
    ua(t, h), p.start(as(h, p, m, t.shouldReduceMotion && Uu.has(h) ? { type: !1 } : k, t, g));
    const v = p.animation;
    v && c.push(v);
  }
  return i && Promise.all(c).then(() => {
    S.update(() => {
      i && ER(t, i);
    });
  }), c;
}
function pa(t, e, r = {}) {
  var c;
  const o = to(t, e, r.type === "exit" ? (c = t.presenceContext) == null ? void 0 : c.custom : void 0);
  let { transition: s = t.getDefaultTransition() || {} } = o || {};
  r.transitionOverride && (s = r.transitionOverride);
  const a = o ? () => Promise.all(h0(t, o, r)) : () => Promise.resolve(), i = t.variantChildren && t.variantChildren.size ? (l = 0) => {
    const { delayChildren: h = 0, staggerChildren: p, staggerDirection: m } = s;
    return GR(t, e, l, h, p, m, r);
  } : () => Promise.resolve(), { when: n } = s;
  if (n) {
    const [l, h] = n === "beforeChildren" ? [a, i] : [i, a];
    return l().then(() => h());
  } else
    return Promise.all([a(), i(r.delay)]);
}
function GR(t, e, r = 0, o = 0, s = 0, a = 1, i) {
  const n = [], c = t.variantChildren.size, l = (c - 1) * s, h = typeof o == "function", p = h ? (m) => o(m, c) : (
    // Support deprecated staggerChildren
    a === 1 ? (m = 0) => m * s : (m = 0) => l - m * s
  );
  return Array.from(t.variantChildren).sort(QR).forEach((m, k) => {
    m.notify("AnimationStart", e), n.push(pa(m, e, {
      ...i,
      delay: r + (h ? 0 : o) + p(k)
    }).then(() => m.notify("AnimationComplete", e)));
  }), Promise.all(n);
}
function QR(t, e) {
  return t.sortNodePosition(e);
}
function JR(t, e, r = {}) {
  t.notify("AnimationStart", e);
  let o;
  if (Array.isArray(e)) {
    const s = e.map((a) => pa(t, a, r));
    o = Promise.all(s);
  } else if (typeof e == "string")
    o = pa(t, e, r);
  else {
    const s = typeof e == "function" ? to(t, e, r.custom) : e;
    o = Promise.all(h0(t, s, r));
  }
  return o.then(() => {
    t.notify("AnimationComplete", e);
  });
}
function d0(t, e) {
  if (!Array.isArray(e))
    return !1;
  const r = e.length;
  if (r !== t.length)
    return !1;
  for (let o = 0; o < r; o++)
    if (e[o] !== t[o])
      return !1;
  return !0;
}
const e_ = Ga.length;
function u0(t) {
  if (!t)
    return;
  if (!t.isControllingVariants) {
    const r = t.parent ? u0(t.parent) || {} : {};
    return t.props.initial !== void 0 && (r.initial = t.props.initial), r;
  }
  const e = {};
  for (let r = 0; r < e_; r++) {
    const o = Ga[r], s = t.props[o];
    (Jr(s) || s === !1) && (e[o] = s);
  }
  return e;
}
const t_ = [...Ka].reverse(), r_ = Ka.length;
function o_(t) {
  return (e) => Promise.all(e.map(({ animation: r, options: o }) => JR(t, r, o)));
}
function a_(t) {
  let e = o_(t), r = Vc(), o = !0;
  const s = (c) => (l, h) => {
    var m;
    const p = to(t, h, c === "exit" ? (m = t.presenceContext) == null ? void 0 : m.custom : void 0);
    if (p) {
      const { transition: k, transitionEnd: y, ...g } = p;
      l = { ...l, ...g, ...y };
    }
    return l;
  };
  function a(c) {
    e = c(t);
  }
  function i(c) {
    const { props: l } = t, h = u0(t.parent) || {}, p = [], m = /* @__PURE__ */ new Set();
    let k = {}, y = 1 / 0;
    for (let v = 0; v < r_; v++) {
      const w = t_[v], b = r[w], N = l[w] !== void 0 ? l[w] : h[w], z = Jr(N), M = w === c ? b.isActive : null;
      M === !1 && (y = v);
      let W = N === h[w] && N !== l[w] && z;
      if (W && o && t.manuallyAnimateOnMount && (W = !1), b.protectedKeys = { ...k }, // If it isn't active and hasn't *just* been set as inactive
      !b.isActive && M === null || // If we didn't and don't have any defined prop for this animation type
      !N && !b.prevProp || // Or if the prop doesn't define an animation
      $o(N) || typeof N == "boolean")
        continue;
      const j = s_(b.prevProp, N);
      let L = j || // If we're making this variant active, we want to always make it active
      w === c && b.isActive && !W && z || // If we removed a higher-priority variant (i is in reverse order)
      v > y && z, U = !1;
      const _ = Array.isArray(N) ? N : [N];
      let sr = _.reduce(s(w), {});
      M === !1 && (sr = {});
      const { prevResolvedValues: ss = {} } = b, T0 = {
        ...ss,
        ...sr
      }, ns = (F) => {
        L = !0, m.has(F) && (U = !0, m.delete(F)), b.needsAnimating[F] = !0;
        const Xt = t.getValue(F);
        Xt && (Xt.liveStyle = !1);
      };
      for (const F in T0) {
        const Xt = sr[F], Vo = ss[F];
        if (k.hasOwnProperty(F))
          continue;
        let To = !1;
        da(Xt) && da(Vo) ? To = !d0(Xt, Vo) : To = Xt !== Vo, To ? Xt != null ? ns(F) : m.add(F) : Xt !== void 0 && m.has(F) ? ns(F) : b.protectedKeys[F] = !0;
      }
      b.prevProp = N, b.prevResolvedValues = sr, b.isActive && (k = { ...k, ...sr }), o && t.blockInitialAnimation && (L = !1), L && (!(W && j) || U) && p.push(..._.map((F) => ({
        animation: F,
        options: { type: w }
      })));
    }
    if (m.size) {
      const v = {};
      if (typeof l.initial != "boolean") {
        const w = to(t, Array.isArray(l.initial) ? l.initial[0] : l.initial);
        w && w.transition && (v.transition = w.transition);
      }
      m.forEach((w) => {
        const b = t.getBaseTarget(w), N = t.getValue(w);
        N && (N.liveStyle = !0), v[w] = b ?? null;
      }), p.push({ animation: v });
    }
    let g = !!p.length;
    return o && (l.initial === !1 || l.initial === l.animate) && !t.manuallyAnimateOnMount && (g = !1), o = !1, g ? e(p) : Promise.resolve();
  }
  function n(c, l) {
    var p;
    if (r[c].isActive === l)
      return Promise.resolve();
    (p = t.variantChildren) == null || p.forEach((m) => {
      var k;
      return (k = m.animationState) == null ? void 0 : k.setActive(c, l);
    }), r[c].isActive = l;
    const h = i(c);
    for (const m in r)
      r[m].protectedKeys = {};
    return h;
  }
  return {
    animateChanges: i,
    setActive: n,
    setAnimateFunction: a,
    getState: () => r,
    reset: () => {
      r = Vc(), o = !0;
    }
  };
}
function s_(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !d0(e, t) : !1;
}
function dr(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Vc() {
  return {
    animate: dr(!0),
    whileInView: dr(),
    whileHover: dr(),
    whileTap: dr(),
    whileDrag: dr(),
    whileFocus: dr(),
    exit: dr()
  };
}
class hr {
  constructor(e) {
    this.isMounted = !1, this.node = e;
  }
  update() {
  }
}
class n_ extends hr {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(e) {
    super(e), e.animationState || (e.animationState = a_(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    $o(e) && (this.unmountControls = e.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(), { animate: r } = this.node.prevProps || {};
    e !== r && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var e;
    this.node.animationState.reset(), (e = this.unmountControls) == null || e.call(this);
  }
}
let i_ = 0;
class c_ extends hr {
  constructor() {
    super(...arguments), this.id = i_++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: e, onExitComplete: r } = this.node.presenceContext, { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === o)
      return;
    const s = this.node.animationState.setActive("exit", !e);
    r && !e && s.then(() => {
      r(this.id);
    });
  }
  mount() {
    const { register: e, onExitComplete: r } = this.node.presenceContext || {};
    r && r(this.id), e && (this.unmount = e(this.id));
  }
  unmount() {
  }
}
const l_ = {
  animation: {
    Feature: n_
  },
  exit: {
    Feature: c_
  }
};
function ro(t, e, r, o = { passive: !0 }) {
  return t.addEventListener(e, r, o), () => t.removeEventListener(e, r);
}
function no(t) {
  return {
    point: {
      x: t.pageX,
      y: t.pageY
    }
  };
}
const h_ = (t) => (e) => Ya(e) && t(e, no(e));
function Hr(t, e, r, o) {
  return ro(t, e, h_(r), o);
}
function p0({ top: t, left: e, right: r, bottom: o }) {
  return {
    x: { min: e, max: r },
    y: { min: t, max: o }
  };
}
function d_({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function u_(t, e) {
  if (!e)
    return t;
  const r = e({ x: t.left, y: t.top }), o = e({ x: t.right, y: t.bottom });
  return {
    top: r.y,
    left: r.x,
    bottom: o.y,
    right: o.x
  };
}
const m0 = 1e-4, p_ = 1 - m0, m_ = 1 + m0, f0 = 0.01, f_ = 0 - f0, k_ = 0 + f0;
function I(t) {
  return t.max - t.min;
}
function y_(t, e, r) {
  return Math.abs(t - e) <= r;
}
function Tc(t, e, r, o = 0.5) {
  t.origin = o, t.originPoint = T(e.min, e.max, t.origin), t.scale = I(r) / I(e), t.translate = T(r.min, r.max, t.origin) - t.originPoint, (t.scale >= p_ && t.scale <= m_ || isNaN(t.scale)) && (t.scale = 1), (t.translate >= f_ && t.translate <= k_ || isNaN(t.translate)) && (t.translate = 0);
}
function Yr(t, e, r, o) {
  Tc(t.x, e.x, r.x, o ? o.originX : void 0), Tc(t.y, e.y, r.y, o ? o.originY : void 0);
}
function Pc(t, e, r) {
  t.min = r.min + e.min, t.max = t.min + I(e);
}
function g_(t, e, r) {
  Pc(t.x, e.x, r.x), Pc(t.y, e.y, r.y);
}
function Dc(t, e, r) {
  t.min = e.min - r.min, t.max = t.min + I(e);
}
function Xr(t, e, r) {
  Dc(t.x, e.x, r.x), Dc(t.y, e.y, r.y);
}
const Oc = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), qr = () => ({
  x: Oc(),
  y: Oc()
}), Uc = () => ({ min: 0, max: 0 }), P = () => ({
  x: Uc(),
  y: Uc()
});
function K(t) {
  return [t("x"), t("y")];
}
function Fo(t) {
  return t === void 0 || t === 1;
}
function ma({ scale: t, scaleX: e, scaleY: r }) {
  return !Fo(t) || !Fo(e) || !Fo(r);
}
function pr(t) {
  return ma(t) || k0(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function k0(t) {
  return Ec(t.x) || Ec(t.y);
}
function Ec(t) {
  return t && t !== "0%";
}
function Co(t, e, r) {
  const o = t - r, s = e * o;
  return r + s;
}
function Bc(t, e, r, o, s) {
  return s !== void 0 && (t = Co(t, s, o)), Co(t, r, o) + e;
}
function fa(t, e = 0, r = 1, o, s) {
  t.min = Bc(t.min, e, r, o, s), t.max = Bc(t.max, e, r, o, s);
}
function y0(t, { x: e, y: r }) {
  fa(t.x, e.translate, e.scale, e.originPoint), fa(t.y, r.translate, r.scale, r.originPoint);
}
const Zc = 0.999999999999, Rc = 1.0000000000001;
function v_(t, e, r, o = !1) {
  const s = r.length;
  if (!s)
    return;
  e.x = e.y = 1;
  let a, i;
  for (let n = 0; n < s; n++) {
    a = r[n], i = a.projectionDelta;
    const { visualElement: c } = a.options;
    c && c.props.style && c.props.style.display === "contents" || (o && a.options.layoutScroll && a.scroll && a !== a.root && Sr(t, {
      x: -a.scroll.offset.x,
      y: -a.scroll.offset.y
    }), i && (e.x *= i.x.scale, e.y *= i.y.scale, y0(t, i)), o && pr(a.latestValues) && Sr(t, a.latestValues));
  }
  e.x < Rc && e.x > Zc && (e.x = 1), e.y < Rc && e.y > Zc && (e.y = 1);
}
function $r(t, e) {
  t.min = t.min + e, t.max = t.max + e;
}
function _c(t, e, r, o, s = 0.5) {
  const a = T(t.min, t.max, s);
  fa(t, e, r, a, o);
}
function Sr(t, e) {
  _c(t.x, e.x, e.scaleX, e.scale, e.originX), _c(t.y, e.y, e.scaleY, e.scale, e.originY);
}
function g0(t, e) {
  return p0(u_(t.getBoundingClientRect(), e));
}
function w_(t, e, r) {
  const o = g0(t, r), { scroll: s } = e;
  return s && ($r(o.x, s.offset.x), $r(o.y, s.offset.y)), o;
}
const v0 = ({ current: t }) => t ? t.ownerDocument.defaultView : null, Fc = (t, e) => Math.abs(t - e);
function x_(t, e) {
  const r = Fc(t.x, e.x), o = Fc(t.y, e.y);
  return Math.sqrt(r ** 2 + o ** 2);
}
class w0 {
  constructor(e, r, { transformPagePoint: o, contextWindow: s = window, dragSnapToOrigin: a = !1, distanceThreshold: i = 3 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const m = Ho(this.lastMoveEventInfo, this.history), k = this.startEvent !== null, y = x_(m.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!k && !y)
        return;
      const { point: g } = m, { timestamp: v } = E;
      this.history.push({ ...g, timestamp: v });
      const { onStart: w, onMove: b } = this.handlers;
      k || (w && w(this.lastMoveEvent, m), this.startEvent = this.lastMoveEvent), b && b(this.lastMoveEvent, m);
    }, this.handlePointerMove = (m, k) => {
      this.lastMoveEvent = m, this.lastMoveEventInfo = Io(k, this.transformPagePoint), S.update(this.updatePoint, !0);
    }, this.handlePointerUp = (m, k) => {
      this.end();
      const { onEnd: y, onSessionEnd: g, resumeAnimation: v } = this.handlers;
      if (this.dragSnapToOrigin && v && v(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const w = Ho(m.type === "pointercancel" ? this.lastMoveEventInfo : Io(k, this.transformPagePoint), this.history);
      this.startEvent && y && y(m, w), g && g(m, w);
    }, !Ya(e))
      return;
    this.dragSnapToOrigin = a, this.handlers = r, this.transformPagePoint = o, this.distanceThreshold = i, this.contextWindow = s || window;
    const n = no(e), c = Io(n, this.transformPagePoint), { point: l } = c, { timestamp: h } = E;
    this.history = [{ ...l, timestamp: h }];
    const { onSessionStart: p } = r;
    p && p(e, Ho(c, this.history)), this.removeListeners = oo(Hr(this.contextWindow, "pointermove", this.handlePointerMove), Hr(this.contextWindow, "pointerup", this.handlePointerUp), Hr(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), cr(this.updatePoint);
  }
}
function Io(t, e) {
  return e ? { point: e(t.point) } : t;
}
function Ic(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function Ho({ point: t }, e) {
  return {
    point: t,
    delta: Ic(t, x0(e)),
    offset: Ic(t, b_(e)),
    velocity: N_(e, 0.1)
  };
}
function b_(t) {
  return t[0];
}
function x0(t) {
  return t[t.length - 1];
}
function N_(t, e) {
  if (t.length < 2)
    return { x: 0, y: 0 };
  let r = t.length - 1, o = null;
  const s = x0(t);
  for (; r >= 0 && (o = t[r], !(s.timestamp - o.timestamp > /* @__PURE__ */ J(e))); )
    r--;
  if (!o)
    return { x: 0, y: 0 };
  const a = /* @__PURE__ */ re(s.timestamp - o.timestamp);
  if (a === 0)
    return { x: 0, y: 0 };
  const i = {
    x: (s.x - o.x) / a,
    y: (s.y - o.y) / a
  };
  return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
}
function M_(t, { min: e, max: r }, o) {
  return e !== void 0 && t < e ? t = o ? T(e, t, o.min) : Math.max(t, e) : r !== void 0 && t > r && (t = o ? T(r, t, o.max) : Math.min(t, r)), t;
}
function Hc(t, e, r) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: r !== void 0 ? t.max + r - (t.max - t.min) : void 0
  };
}
function C_(t, { top: e, left: r, bottom: o, right: s }) {
  return {
    x: Hc(t.x, r, s),
    y: Hc(t.y, e, o)
  };
}
function Yc(t, e) {
  let r = e.min - t.min, o = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([r, o] = [o, r]), { min: r, max: o };
}
function A_(t, e) {
  return {
    x: Yc(t.x, e.x),
    y: Yc(t.y, e.y)
  };
}
function L_(t, e) {
  let r = 0.5;
  const o = I(t), s = I(e);
  return s > o ? r = /* @__PURE__ */ Kr(e.min, e.max - o, t.min) : o > s && (r = /* @__PURE__ */ Kr(t.min, t.max - s, e.min)), Kt(0, 1, r);
}
function z_(t, e) {
  const r = {};
  return e.min !== void 0 && (r.min = e.min - t.min), e.max !== void 0 && (r.max = e.max - t.min), r;
}
const ka = 0.35;
function W_(t = ka) {
  return t === !1 ? t = 0 : t === !0 && (t = ka), {
    x: Xc(t, "left", "right"),
    y: Xc(t, "top", "bottom")
  };
}
function Xc(t, e, r) {
  return {
    min: Kc(t, e),
    max: Kc(t, r)
  };
}
function Kc(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const j_ = /* @__PURE__ */ new WeakMap();
class q_ {
  constructor(e) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = P(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e;
  }
  start(e, { snapToCursor: r = !1, distanceThreshold: o } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === !1)
      return;
    const a = (p) => {
      const { dragSnapToOrigin: m } = this.getProps();
      m ? this.pauseAnimation() : this.stopAnimation(), r && this.snapToCursor(no(p).point);
    }, i = (p, m) => {
      const { drag: k, dragPropagation: y, onDragStart: g } = this.getProps();
      if (k && !y && (this.openDragLock && this.openDragLock(), this.openDragLock = _Z(k), !this.openDragLock))
        return;
      this.latestPointerEvent = p, this.latestPanInfo = m, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), K((w) => {
        let b = this.getAxisMotionValue(w).get() || 0;
        if (oe.test(b)) {
          const { projection: N } = this.visualElement;
          if (N && N.layout) {
            const z = N.layout.layoutBox[w];
            z && (b = I(z) * (parseFloat(b) / 100));
          }
        }
        this.originPoint[w] = b;
      }), g && S.postRender(() => g(p, m)), ua(this.visualElement, "transform");
      const { animationState: v } = this.visualElement;
      v && v.setActive("whileDrag", !0);
    }, n = (p, m) => {
      this.latestPointerEvent = p, this.latestPanInfo = m;
      const { dragPropagation: k, dragDirectionLock: y, onDirectionLock: g, onDrag: v } = this.getProps();
      if (!k && !this.openDragLock)
        return;
      const { offset: w } = m;
      if (y && this.currentDirection === null) {
        this.currentDirection = $_(w), this.currentDirection !== null && g && g(this.currentDirection);
        return;
      }
      this.updateAxis("x", m.point, w), this.updateAxis("y", m.point, w), this.visualElement.render(), v && v(p, m);
    }, c = (p, m) => {
      this.latestPointerEvent = p, this.latestPanInfo = m, this.stop(p, m), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, l = () => K((p) => {
      var m;
      return this.getAnimationState(p) === "paused" && ((m = this.getAxisMotionValue(p).animation) == null ? void 0 : m.play());
    }), { dragSnapToOrigin: h } = this.getProps();
    this.panSession = new w0(e, {
      onSessionStart: a,
      onStart: i,
      onMove: n,
      onSessionEnd: c,
      resumeAnimation: l
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: h,
      distanceThreshold: o,
      contextWindow: v0(this.visualElement)
    });
  }
  /**
   * @internal
   */
  stop(e, r) {
    const o = e || this.latestPointerEvent, s = r || this.latestPanInfo, a = this.isDragging;
    if (this.cancel(), !a || !s || !o)
      return;
    const { velocity: i } = s;
    this.startAnimation(i);
    const { onDragEnd: n } = this.getProps();
    n && S.postRender(() => n(o, s));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: r } = this.visualElement;
    e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: o } = this.getProps();
    !o && this.openDragLock && (this.openDragLock(), this.openDragLock = null), r && r.setActive("whileDrag", !1);
  }
  updateAxis(e, r, o) {
    const { drag: s } = this.getProps();
    if (!o || !po(e, s, this.currentDirection))
      return;
    const a = this.getAxisMotionValue(e);
    let i = this.originPoint[e] + o[e];
    this.constraints && this.constraints[e] && (i = M_(i, this.constraints[e], this.elastic[e])), a.set(i);
  }
  resolveConstraints() {
    var a;
    const { dragConstraints: e, dragElastic: r } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (a = this.visualElement.projection) == null ? void 0 : a.layout, s = this.constraints;
    e && jr(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && o ? this.constraints = C_(o.layoutBox, e) : this.constraints = !1, this.elastic = W_(r), s !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && K((i) => {
      this.constraints !== !1 && this.getAxisMotionValue(i) && (this.constraints[i] = z_(o.layoutBox[i], this.constraints[i]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: r } = this.getProps();
    if (!e || !jr(e))
      return !1;
    const o = e.current;
    Gt(o !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: s } = this.visualElement;
    if (!s || !s.layout)
      return !1;
    const a = w_(o, s.root, this.visualElement.getTransformPagePoint());
    let i = A_(s.layout.layoutBox, a);
    if (r) {
      const n = r(d_(i));
      this.hasMutatedConstraints = !!n, n && (i = p0(n));
    }
    return i;
  }
  startAnimation(e) {
    const { drag: r, dragMomentum: o, dragElastic: s, dragTransition: a, dragSnapToOrigin: i, onDragTransitionEnd: n } = this.getProps(), c = this.constraints || {}, l = K((h) => {
      if (!po(h, r, this.currentDirection))
        return;
      let p = c && c[h] || {};
      i && (p = { min: 0, max: 0 });
      const m = s ? 200 : 1e6, k = s ? 40 : 1e7, y = {
        type: "inertia",
        velocity: o ? e[h] : 0,
        bounceStiffness: m,
        bounceDamping: k,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...a,
        ...p
      };
      return this.startAxisValueAnimation(h, y);
    });
    return Promise.all(l).then(n);
  }
  startAxisValueAnimation(e, r) {
    const o = this.getAxisMotionValue(e);
    return ua(this.visualElement, e), o.start(as(e, o, 0, r, this.visualElement, !1));
  }
  stopAnimation() {
    K((e) => this.getAxisMotionValue(e).stop());
  }
  pauseAnimation() {
    K((e) => {
      var r;
      return (r = this.getAxisMotionValue(e).animation) == null ? void 0 : r.pause();
    });
  }
  getAnimationState(e) {
    var r;
    return (r = this.getAxisMotionValue(e).animation) == null ? void 0 : r.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(e) {
    const r = `_drag${e.toUpperCase()}`, o = this.visualElement.getProps(), s = o[r];
    return s || this.visualElement.getValue(e, (o.initial ? o.initial[e] : void 0) || 0);
  }
  snapToCursor(e) {
    K((r) => {
      const { drag: o } = this.getProps();
      if (!po(r, o, this.currentDirection))
        return;
      const { projection: s } = this.visualElement, a = this.getAxisMotionValue(r);
      if (s && s.layout) {
        const { min: i, max: n } = s.layout.layoutBox[r];
        a.set(e[r] - T(i, n, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: e, dragConstraints: r } = this.getProps(), { projection: o } = this.visualElement;
    if (!jr(r) || !o || !this.constraints)
      return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    K((i) => {
      const n = this.getAxisMotionValue(i);
      if (n && this.constraints !== !1) {
        const c = n.get();
        s[i] = L_({ min: c, max: c }, this.constraints[i]);
      }
    });
    const { transformTemplate: a } = this.visualElement.getProps();
    this.visualElement.current.style.transform = a ? a({}, "") : "none", o.root && o.root.updateScroll(), o.updateLayout(), this.resolveConstraints(), K((i) => {
      if (!po(i, e, null))
        return;
      const n = this.getAxisMotionValue(i), { min: c, max: l } = this.constraints[i];
      n.set(T(c, l, s[i]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    j_.set(this.visualElement, this);
    const e = this.visualElement.current, r = Hr(e, "pointerdown", (c) => {
      const { drag: l, dragListener: h = !0 } = this.getProps();
      l && h && this.start(c);
    }), o = () => {
      const { dragConstraints: c } = this.getProps();
      jr(c) && c.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: s } = this.visualElement, a = s.addEventListener("measure", o);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), S.read(o);
    const i = ro(window, "resize", () => this.scalePositionWithinConstraints()), n = s.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: l }) => {
      this.isDragging && l && (K((h) => {
        const p = this.getAxisMotionValue(h);
        p && (this.originPoint[h] += c[h].translate, p.set(p.get() + c[h].translate));
      }), this.visualElement.render());
    });
    return () => {
      i(), r(), a(), n && n();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(), { drag: r = !1, dragDirectionLock: o = !1, dragPropagation: s = !1, dragConstraints: a = !1, dragElastic: i = ka, dragMomentum: n = !0 } = e;
    return {
      ...e,
      drag: r,
      dragDirectionLock: o,
      dragPropagation: s,
      dragConstraints: a,
      dragElastic: i,
      dragMomentum: n
    };
  }
}
function po(t, e, r) {
  return (e === !0 || e === t) && (r === null || r === t);
}
function $_(t, e = 10) {
  let r = null;
  return Math.abs(t.y) > e ? r = "y" : Math.abs(t.x) > e && (r = "x"), r;
}
class S_ extends hr {
  constructor(e) {
    super(e), this.removeGroupControls = G, this.removeListeners = G, this.controls = new q_(e);
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || G;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Gc = (t) => (e, r) => {
  t && S.postRender(() => t(e, r));
};
class V_ extends hr {
  constructor() {
    super(...arguments), this.removePointerDownListener = G;
  }
  onPointerDown(e) {
    this.session = new w0(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: v0(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: e, onPanStart: r, onPan: o, onPanEnd: s } = this.node.getProps();
    return {
      onSessionStart: Gc(e),
      onStart: Gc(r),
      onMove: o,
      onEnd: (a, i) => {
        delete this.session, s && S.postRender(() => s(a, i));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Hr(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const yo = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function Qc(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
const Zr = {
  correct: (t, e) => {
    if (!e.target)
      return t;
    if (typeof t == "string")
      if (A.test(t))
        t = parseFloat(t);
      else
        return t;
    const r = Qc(t, e.target.x), o = Qc(t, e.target.y);
    return `${r}% ${o}%`;
  }
}, T_ = {
  correct: (t, { treeScale: e, projectionDelta: r }) => {
    const o = t, s = lr.parse(t);
    if (s.length > 5)
      return o;
    const a = lr.createTransformer(t), i = typeof s[0] != "number" ? 1 : 0, n = r.x.scale * e.x, c = r.y.scale * e.y;
    s[0 + i] /= n, s[1 + i] /= c;
    const l = T(n, c, 0.5);
    return typeof s[2 + i] == "number" && (s[2 + i] /= l), typeof s[3 + i] == "number" && (s[3 + i] /= l), a(s);
  }
};
let Jc = !1;
class P_ extends B0 {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: e, layoutGroup: r, switchLayoutGroup: o, layoutId: s } = this.props, { projection: a } = e;
    wR(D_), a && (r.group && r.group.add(a), o && o.register && s && o.register(a), Jc && a.root.didUpdate(), a.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), a.setOptions({
      ...a.options,
      onExitComplete: () => this.safeToRemove()
    })), yo.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: r, visualElement: o, drag: s, isPresent: a } = this.props, { projection: i } = o;
    return i && (i.isPresent = a, Jc = !0, s || e.layoutDependency !== r || r === void 0 || e.isPresent !== a ? i.willUpdate() : this.safeToRemove(), e.isPresent !== a && (a ? i.promote() : i.relegate() || S.postRender(() => {
      const n = i.getStack();
      (!n || !n.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e && (e.root.didUpdate(), Ha.postRender(() => {
      !e.currentAnimation && e.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: e, layoutGroup: r, switchLayoutGroup: o } = this.props, { projection: s } = e;
    s && (s.scheduleCheckAfterUnmount(), r && r.group && r.group.remove(s), o && o.deregister && o.deregister(s));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function b0(t) {
  const [e, r] = Xu(), o = Z(Ma);
  return f(P_, { ...t, layoutGroup: o, switchLayoutGroup: Z(e0), isPresent: e, safeToRemove: r });
}
const D_ = {
  borderRadius: {
    ...Zr,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Zr,
  borderTopRightRadius: Zr,
  borderBottomLeftRadius: Zr,
  borderBottomRightRadius: Zr,
  boxShadow: T_
};
function O_(t, e, r) {
  const o = R(t) ? t : Vr(t);
  return o.start(as("", o, e, r)), o.animation;
}
const U_ = (t, e) => t.depth - e.depth;
class E_ {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(e) {
    La(this.children, e), this.isDirty = !0;
  }
  remove(e) {
    za(this.children, e), this.isDirty = !0;
  }
  forEach(e) {
    this.isDirty && this.children.sort(U_), this.isDirty = !1, this.children.forEach(e);
  }
}
function B_(t, e) {
  const r = H.now(), o = ({ timestamp: s }) => {
    const a = s - r;
    a >= e && (cr(o), t(a - e));
  };
  return S.setup(o, !0), () => cr(o);
}
const N0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], Z_ = N0.length, el = (t) => typeof t == "string" ? parseFloat(t) : t, tl = (t) => typeof t == "number" || A.test(t);
function R_(t, e, r, o, s, a) {
  s ? (t.opacity = T(0, r.opacity ?? 1, __(o)), t.opacityExit = T(e.opacity ?? 1, 0, F_(o))) : a && (t.opacity = T(e.opacity ?? 1, r.opacity ?? 1, o));
  for (let i = 0; i < Z_; i++) {
    const n = `border${N0[i]}Radius`;
    let c = rl(e, n), l = rl(r, n);
    if (c === void 0 && l === void 0)
      continue;
    c || (c = 0), l || (l = 0), c === 0 || l === 0 || tl(c) === tl(l) ? (t[n] = Math.max(T(el(c), el(l), o), 0), (oe.test(l) || oe.test(c)) && (t[n] += "%")) : t[n] = l;
  }
  (e.rotate || r.rotate) && (t.rotate = T(e.rotate || 0, r.rotate || 0, o));
}
function rl(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const __ = /* @__PURE__ */ M0(0, 0.5, ku), F_ = /* @__PURE__ */ M0(0.5, 0.95, G);
function M0(t, e, r) {
  return (o) => o < t ? 0 : o > e ? 1 : r(/* @__PURE__ */ Kr(t, e, o));
}
function ol(t, e) {
  t.min = e.min, t.max = e.max;
}
function X(t, e) {
  ol(t.x, e.x), ol(t.y, e.y);
}
function al(t, e) {
  t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin;
}
function sl(t, e, r, o, s) {
  return t -= e, t = Co(t, 1 / r, o), s !== void 0 && (t = Co(t, 1 / s, o)), t;
}
function I_(t, e = 0, r = 1, o = 0.5, s, a = t, i = t) {
  if (oe.test(e) && (e = parseFloat(e), e = T(i.min, i.max, e / 100) - i.min), typeof e != "number")
    return;
  let n = T(a.min, a.max, o);
  t === a && (n -= e), t.min = sl(t.min, e, r, n, s), t.max = sl(t.max, e, r, n, s);
}
function nl(t, e, [r, o, s], a, i) {
  I_(t, e[r], e[o], e[s], e.scale, a, i);
}
const H_ = ["x", "scaleX", "originX"], Y_ = ["y", "scaleY", "originY"];
function il(t, e, r, o) {
  nl(t.x, e, H_, r ? r.x : void 0, o ? o.x : void 0), nl(t.y, e, Y_, r ? r.y : void 0, o ? o.y : void 0);
}
function cl(t) {
  return t.translate === 0 && t.scale === 1;
}
function C0(t) {
  return cl(t.x) && cl(t.y);
}
function ll(t, e) {
  return t.min === e.min && t.max === e.max;
}
function X_(t, e) {
  return ll(t.x, e.x) && ll(t.y, e.y);
}
function hl(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
}
function A0(t, e) {
  return hl(t.x, e.x) && hl(t.y, e.y);
}
function dl(t) {
  return I(t.x) / I(t.y);
}
function ul(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
}
class K_ {
  constructor() {
    this.members = [];
  }
  add(e) {
    La(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (za(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
      const r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }
  relegate(e) {
    const r = this.members.findIndex((s) => e === s);
    if (r === 0)
      return !1;
    let o;
    for (let s = r; s >= 0; s--) {
      const a = this.members[s];
      if (a.isPresent !== !1) {
        o = a;
        break;
      }
    }
    return o ? (this.promote(o), !0) : !1;
  }
  promote(e, r) {
    const o = this.lead;
    if (e !== o && (this.prevLead = o, this.lead = e, e.show(), o)) {
      o.instance && o.scheduleRender(), e.scheduleRender(), e.resumeFrom = o, r && (e.resumeFrom.preserveOpacity = !0), o.snapshot && (e.snapshot = o.snapshot, e.snapshot.latestValues = o.animationValues || o.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      const { crossfade: s } = e.options;
      s === !1 && o.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: r, resumingFrom: o } = e;
      r.onExitComplete && r.onExitComplete(), o && o.options.onExitComplete && o.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function G_(t, e, r) {
  let o = "";
  const s = t.x.translate / e.x, a = t.y.translate / e.y, i = (r == null ? void 0 : r.z) || 0;
  if ((s || a || i) && (o = `translate3d(${s}px, ${a}px, ${i}px) `), (e.x !== 1 || e.y !== 1) && (o += `scale(${1 / e.x}, ${1 / e.y}) `), r) {
    const { transformPerspective: l, rotate: h, rotateX: p, rotateY: m, skewX: k, skewY: y } = r;
    l && (o = `perspective(${l}px) ${o}`), h && (o += `rotate(${h}deg) `), p && (o += `rotateX(${p}deg) `), m && (o += `rotateY(${m}deg) `), k && (o += `skewX(${k}deg) `), y && (o += `skewY(${y}deg) `);
  }
  const n = t.x.scale * e.x, c = t.y.scale * e.y;
  return (n !== 1 || c !== 1) && (o += `scale(${n}, ${c})`), o || "none";
}
const Yo = ["", "X", "Y", "Z"], Q_ = 1e3;
let J_ = 0;
function Xo(t, e, r, o) {
  const { latestValues: s } = e;
  s[t] && (r[t] = s[t], e.setStaticValue(t, 0), o && (o[t] = 0));
}
function L0(t) {
  if (t.hasCheckedOptimisedAppear = !0, t.root === t)
    return;
  const { visualElement: e } = t.options;
  if (!e)
    return;
  const r = l0(e);
  if (window.MotionHasOptimisedAnimation(r, "transform")) {
    const { layout: s, layoutId: a } = t.options;
    window.MotionCancelOptimisedAnimation(r, "transform", S, !(s || a));
  }
  const { parent: o } = t;
  o && !o.hasCheckedOptimisedAppear && L0(o);
}
function z0({ attachResizeListener: t, defaultParent: e, measureScroll: r, checkIsScrollRoot: o, resetTransform: s }) {
  return class {
    constructor(i = {}, n = e == null ? void 0 : e()) {
      this.id = J_++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(rF), this.nodes.forEach(nF), this.nodes.forEach(iF), this.nodes.forEach(oF);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = i, this.root = n ? n.root || n : this, this.path = n ? [...n.path, n] : [], this.parent = n, this.depth = n ? n.depth + 1 : 0;
      for (let c = 0; c < this.path.length; c++)
        this.path[c].shouldResetTransform = !0;
      this.root === this && (this.nodes = new E_());
    }
    addEventListener(i, n) {
      return this.eventHandlers.has(i) || this.eventHandlers.set(i, new ja()), this.eventHandlers.get(i).add(n);
    }
    notifyListeners(i, ...n) {
      const c = this.eventHandlers.get(i);
      c && c.notify(...n);
    }
    hasListeners(i) {
      return this.eventHandlers.has(i);
    }
    /**
     * Lifecycles
     */
    mount(i) {
      if (this.instance)
        return;
      this.isSVG = Yu(i) && !KZ(i), this.instance = i;
      const { layoutId: n, layout: c, visualElement: l } = this.options;
      if (l && !l.current && l.mount(i), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (c || n) && (this.isLayoutDirty = !0), t) {
        let h, p = 0;
        const m = () => this.root.updateBlockedByResize = !1;
        S.read(() => {
          p = window.innerWidth;
        }), t(i, () => {
          const k = window.innerWidth;
          k !== p && (p = k, this.root.updateBlockedByResize = !0, h && h(), h = B_(m, 250), yo.hasAnimatedSinceResize && (yo.hasAnimatedSinceResize = !1, this.nodes.forEach(fl)));
        });
      }
      n && this.root.registerSharedNode(n, this), this.options.animate !== !1 && l && (n || c) && this.addEventListener("didUpdate", ({ delta: h, hasLayoutChanged: p, hasRelativeLayoutChanged: m, layout: k }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const y = this.options.transition || l.getDefaultTransition() || uF, { onLayoutAnimationStart: g, onLayoutAnimationComplete: v } = l.getProps(), w = !this.targetLayout || !A0(this.targetLayout, k), b = !p && m;
        if (this.options.layoutRoot || this.resumeFrom || b || p && (w || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const N = {
            ...Fa(y, "layout"),
            onPlay: g,
            onComplete: v
          };
          (l.shouldReduceMotion || this.options.layoutRoot) && (N.delay = 0, N.type = !1), this.startAnimation(N), this.setAnimationOrigin(h, b);
        } else
          p || fl(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = k;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const i = this.getStack();
      i && i.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), cr(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(cF), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: i } = this.options;
      return i && i.getProps().transformTemplate;
    }
    willUpdate(i = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && L0(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let h = 0; h < this.path.length; h++) {
        const p = this.path[h];
        p.shouldResetTransform = !0, p.updateScroll("snapshot"), p.options.layoutRoot && p.willUpdate(!1);
      }
      const { layoutId: n, layout: c } = this.options;
      if (n === void 0 && !c)
        return;
      const l = this.getTransformTemplate();
      this.prevTransformTemplateValue = l ? l(this.latestValues, "") : void 0, this.updateSnapshot(), i && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(pl);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(ml);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(sF), this.nodes.forEach(eF), this.nodes.forEach(tF)) : this.nodes.forEach(ml), this.clearAllSnapshots();
      const n = H.now();
      E.delta = Kt(0, 1e3 / 60, n - E.timestamp), E.timestamp = n, E.isProcessing = !0, Uo.update.process(E), Uo.preRender.process(E), Uo.render.process(E), E.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Ha.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(aF), this.sharedNodes.forEach(lF);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, S.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      S.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !I(this.snapshot.measuredBox.x) && !I(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let c = 0; c < this.path.length; c++)
          this.path[c].updateScroll();
      const i = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = P(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: n } = this.options;
      n && n.notify("LayoutMeasure", this.layout.layoutBox, i ? i.layoutBox : void 0);
    }
    updateScroll(i = "measure") {
      let n = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === i && (n = !1), n && this.instance) {
        const c = o(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: i,
          isRoot: c,
          offset: r(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : c
        };
      }
    }
    resetTransform() {
      if (!s)
        return;
      const i = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, n = this.projectionDelta && !C0(this.projectionDelta), c = this.getTransformTemplate(), l = c ? c(this.latestValues, "") : void 0, h = l !== this.prevTransformTemplateValue;
      i && this.instance && (n || pr(this.latestValues) || h) && (s(this.instance, l), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(i = !0) {
      const n = this.measurePageBox();
      let c = this.removeElementScroll(n);
      return i && (c = this.removeTransform(c)), pF(c), {
        animationId: this.root.animationId,
        measuredBox: n,
        layoutBox: c,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var l;
      const { visualElement: i } = this.options;
      if (!i)
        return P();
      const n = i.measureViewportBox();
      if (!(((l = this.scroll) == null ? void 0 : l.wasRoot) || this.path.some(mF))) {
        const { scroll: h } = this.root;
        h && ($r(n.x, h.offset.x), $r(n.y, h.offset.y));
      }
      return n;
    }
    removeElementScroll(i) {
      var c;
      const n = P();
      if (X(n, i), (c = this.scroll) != null && c.wasRoot)
        return n;
      for (let l = 0; l < this.path.length; l++) {
        const h = this.path[l], { scroll: p, options: m } = h;
        h !== this.root && p && m.layoutScroll && (p.wasRoot && X(n, i), $r(n.x, p.offset.x), $r(n.y, p.offset.y));
      }
      return n;
    }
    applyTransform(i, n = !1) {
      const c = P();
      X(c, i);
      for (let l = 0; l < this.path.length; l++) {
        const h = this.path[l];
        !n && h.options.layoutScroll && h.scroll && h !== h.root && Sr(c, {
          x: -h.scroll.offset.x,
          y: -h.scroll.offset.y
        }), pr(h.latestValues) && Sr(c, h.latestValues);
      }
      return pr(this.latestValues) && Sr(c, this.latestValues), c;
    }
    removeTransform(i) {
      const n = P();
      X(n, i);
      for (let c = 0; c < this.path.length; c++) {
        const l = this.path[c];
        if (!l.instance || !pr(l.latestValues))
          continue;
        ma(l.latestValues) && l.updateSnapshot();
        const h = P(), p = l.measurePageBox();
        X(h, p), il(n, l.latestValues, l.snapshot ? l.snapshot.layoutBox : void 0, h);
      }
      return pr(this.latestValues) && il(n, this.latestValues), n;
    }
    setTargetDelta(i) {
      this.targetDelta = i, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(i) {
      this.options = {
        ...this.options,
        ...i,
        crossfade: i.crossfade !== void 0 ? i.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== E.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(i = !1) {
      var m;
      const n = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = n.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = n.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = n.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== n;
      if (!(i || c && this.isSharedProjectionDirty || this.isProjectionDirty || (m = this.parent) != null && m.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: h, layoutId: p } = this.options;
      if (!(!this.layout || !(h || p))) {
        if (this.resolvedRelativeTargetAt = E.timestamp, !this.targetDelta && !this.relativeTarget) {
          const k = this.getClosestProjectingParent();
          k && k.layout && this.animationProgress !== 1 ? (this.relativeParent = k, this.forceRelativeParentToResolveTarget(), this.relativeTarget = P(), this.relativeTargetOrigin = P(), Xr(this.relativeTargetOrigin, this.layout.layoutBox, k.layout.layoutBox), X(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = P(), this.targetWithTransforms = P()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), g_(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : X(this.target, this.layout.layoutBox), y0(this.target, this.targetDelta)) : X(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const k = this.getClosestProjectingParent();
          k && !!k.resumingFrom == !!this.resumingFrom && !k.options.layoutScroll && k.target && this.animationProgress !== 1 ? (this.relativeParent = k, this.forceRelativeParentToResolveTarget(), this.relativeTarget = P(), this.relativeTargetOrigin = P(), Xr(this.relativeTargetOrigin, this.target, k.target), X(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || ma(this.parent.latestValues) || k0(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var y;
      const i = this.getLead(), n = !!this.resumingFrom || this !== i;
      let c = !0;
      if ((this.isProjectionDirty || (y = this.parent) != null && y.isProjectionDirty) && (c = !1), n && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === E.timestamp && (c = !1), c)
        return;
      const { layout: l, layoutId: h } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(l || h))
        return;
      X(this.layoutCorrected, this.layout.layoutBox);
      const p = this.treeScale.x, m = this.treeScale.y;
      v_(this.layoutCorrected, this.treeScale, this.path, n), i.layout && !i.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (i.target = i.layout.layoutBox, i.targetWithTransforms = P());
      const { target: k } = i;
      if (!k) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (al(this.prevProjectionDelta.x, this.projectionDelta.x), al(this.prevProjectionDelta.y, this.projectionDelta.y)), Yr(this.projectionDelta, this.layoutCorrected, k, this.latestValues), (this.treeScale.x !== p || this.treeScale.y !== m || !ul(this.projectionDelta.x, this.prevProjectionDelta.x) || !ul(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", k));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(i = !0) {
      var n;
      if ((n = this.options.visualElement) == null || n.scheduleRender(), i) {
        const c = this.getStack();
        c && c.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = qr(), this.projectionDelta = qr(), this.projectionDeltaWithTransform = qr();
    }
    setAnimationOrigin(i, n = !1) {
      const c = this.snapshot, l = c ? c.latestValues : {}, h = { ...this.latestValues }, p = qr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !n;
      const m = P(), k = c ? c.source : void 0, y = this.layout ? this.layout.source : void 0, g = k !== y, v = this.getStack(), w = !v || v.members.length <= 1, b = !!(g && !w && this.options.crossfade === !0 && !this.path.some(dF));
      this.animationProgress = 0;
      let N;
      this.mixTargetDelta = (z) => {
        const M = z / 1e3;
        kl(p.x, i.x, M), kl(p.y, i.y, M), this.setTargetDelta(p), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Xr(m, this.layout.layoutBox, this.relativeParent.layout.layoutBox), hF(this.relativeTarget, this.relativeTargetOrigin, m, M), N && X_(this.relativeTarget, N) && (this.isProjectionDirty = !1), N || (N = P()), X(N, this.relativeTarget)), g && (this.animationValues = h, R_(h, l, this.latestValues, M, b, w)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = M;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(i) {
      var n, c, l;
      this.notifyListeners("animationStart"), (n = this.currentAnimation) == null || n.stop(), (l = (c = this.resumingFrom) == null ? void 0 : c.currentAnimation) == null || l.stop(), this.pendingAnimation && (cr(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = S.update(() => {
        yo.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Vr(0)), this.currentAnimation = O_(this.motionValue, [0, 1e3], {
          ...i,
          velocity: 0,
          isSync: !0,
          onUpdate: (h) => {
            this.mixTargetDelta(h), i.onUpdate && i.onUpdate(h);
          },
          onStop: () => {
          },
          onComplete: () => {
            i.onComplete && i.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const i = this.getStack();
      i && i.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Q_), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const i = this.getLead();
      let { targetWithTransforms: n, target: c, layout: l, latestValues: h } = i;
      if (!(!n || !c || !l)) {
        if (this !== i && this.layout && l && W0(this.options.animationType, this.layout.layoutBox, l.layoutBox)) {
          c = this.target || P();
          const p = I(this.layout.layoutBox.x);
          c.x.min = i.target.x.min, c.x.max = c.x.min + p;
          const m = I(this.layout.layoutBox.y);
          c.y.min = i.target.y.min, c.y.max = c.y.min + m;
        }
        X(n, c), Sr(n, h), Yr(this.projectionDeltaWithTransform, this.layoutCorrected, n, h);
      }
    }
    registerSharedNode(i, n) {
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new K_()), this.sharedNodes.get(i).add(n);
      const l = n.options.initialPromotionConfig;
      n.promote({
        transition: l ? l.transition : void 0,
        preserveFollowOpacity: l && l.shouldPreserveFollowOpacity ? l.shouldPreserveFollowOpacity(n) : void 0
      });
    }
    isLead() {
      const i = this.getStack();
      return i ? i.lead === this : !0;
    }
    getLead() {
      var n;
      const { layoutId: i } = this.options;
      return i ? ((n = this.getStack()) == null ? void 0 : n.lead) || this : this;
    }
    getPrevLead() {
      var n;
      const { layoutId: i } = this.options;
      return i ? (n = this.getStack()) == null ? void 0 : n.prevLead : void 0;
    }
    getStack() {
      const { layoutId: i } = this.options;
      if (i)
        return this.root.sharedNodes.get(i);
    }
    promote({ needsReset: i, transition: n, preserveFollowOpacity: c } = {}) {
      const l = this.getStack();
      l && l.promote(this, c), i && (this.projectionDelta = void 0, this.needsReset = !0), n && this.setOptions({ transition: n });
    }
    relegate() {
      const i = this.getStack();
      return i ? i.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: i } = this.options;
      if (!i)
        return;
      let n = !1;
      const { latestValues: c } = i;
      if ((c.z || c.rotate || c.rotateX || c.rotateY || c.rotateZ || c.skewX || c.skewY) && (n = !0), !n)
        return;
      const l = {};
      c.z && Xo("z", i, l, this.animationValues);
      for (let h = 0; h < Yo.length; h++)
        Xo(`rotate${Yo[h]}`, i, l, this.animationValues), Xo(`skew${Yo[h]}`, i, l, this.animationValues);
      i.render();
      for (const h in l)
        i.setStaticValue(h, l[h]), this.animationValues && (this.animationValues[h] = l[h]);
      i.scheduleRender();
    }
    applyProjectionStyles(i, n) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        i.visibility = "hidden";
        return;
      }
      const c = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, i.visibility = "", i.opacity = "", i.pointerEvents = ko(n == null ? void 0 : n.pointerEvents) || "", i.transform = c ? c(this.latestValues, "") : "none";
        return;
      }
      const l = this.getLead();
      if (!this.projectionDelta || !this.layout || !l.target) {
        this.options.layoutId && (i.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, i.pointerEvents = ko(n == null ? void 0 : n.pointerEvents) || ""), this.hasProjected && !pr(this.latestValues) && (i.transform = c ? c({}, "") : "none", this.hasProjected = !1);
        return;
      }
      i.visibility = "";
      const h = l.animationValues || l.latestValues;
      this.applyTransformsToTarget();
      let p = G_(this.projectionDeltaWithTransform, this.treeScale, h);
      c && (p = c(h, p)), i.transform = p;
      const { x: m, y: k } = this.projectionDelta;
      i.transformOrigin = `${m.origin * 100}% ${k.origin * 100}% 0`, l.animationValues ? i.opacity = l === this ? h.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : h.opacityExit : i.opacity = l === this ? h.opacity !== void 0 ? h.opacity : "" : h.opacityExit !== void 0 ? h.opacityExit : 0;
      for (const y in eo) {
        if (h[y] === void 0)
          continue;
        const { correct: g, applyTo: v, isCSSVariable: w } = eo[y], b = p === "none" ? h[y] : g(h[y], l);
        if (v) {
          const N = v.length;
          for (let z = 0; z < N; z++)
            i[v[z]] = b;
        } else
          w ? this.options.visualElement.renderState.vars[y] = b : i[y] = b;
      }
      this.options.layoutId && (i.pointerEvents = l === this ? ko(n == null ? void 0 : n.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((i) => {
        var n;
        return (n = i.currentAnimation) == null ? void 0 : n.stop();
      }), this.root.nodes.forEach(pl), this.root.sharedNodes.clear();
    }
  };
}
function eF(t) {
  t.updateLayout();
}
function tF(t) {
  var r;
  const e = ((r = t.resumeFrom) == null ? void 0 : r.snapshot) || t.snapshot;
  if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
    const { layoutBox: o, measuredBox: s } = t.layout, { animationType: a } = t.options, i = e.source !== t.layout.source;
    a === "size" ? K((p) => {
      const m = i ? e.measuredBox[p] : e.layoutBox[p], k = I(m);
      m.min = o[p].min, m.max = m.min + k;
    }) : W0(a, e.layoutBox, o) && K((p) => {
      const m = i ? e.measuredBox[p] : e.layoutBox[p], k = I(o[p]);
      m.max = m.min + k, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[p].max = t.relativeTarget[p].min + k);
    });
    const n = qr();
    Yr(n, o, e.layoutBox);
    const c = qr();
    i ? Yr(c, t.applyTransform(s, !0), e.measuredBox) : Yr(c, o, e.layoutBox);
    const l = !C0(n);
    let h = !1;
    if (!t.resumeFrom) {
      const p = t.getClosestProjectingParent();
      if (p && !p.resumeFrom) {
        const { snapshot: m, layout: k } = p;
        if (m && k) {
          const y = P();
          Xr(y, e.layoutBox, m.layoutBox);
          const g = P();
          Xr(g, o, k.layoutBox), A0(y, g) || (h = !0), p.options.layoutRoot && (t.relativeTarget = g, t.relativeTargetOrigin = y, t.relativeParent = p);
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: o,
      snapshot: e,
      delta: c,
      layoutDelta: n,
      hasLayoutChanged: l,
      hasRelativeLayoutChanged: h
    });
  } else if (t.isLead()) {
    const { onExitComplete: o } = t.options;
    o && o();
  }
  t.options.transition = void 0;
}
function rF(t) {
  t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function oF(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function aF(t) {
  t.clearSnapshot();
}
function pl(t) {
  t.clearMeasurements();
}
function ml(t) {
  t.isLayoutDirty = !1;
}
function sF(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function fl(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0;
}
function nF(t) {
  t.resolveTargetDelta();
}
function iF(t) {
  t.calcProjection();
}
function cF(t) {
  t.resetSkewAndRotation();
}
function lF(t) {
  t.removeLeadSnapshot();
}
function kl(t, e, r) {
  t.translate = T(e.translate, 0, r), t.scale = T(e.scale, 1, r), t.origin = e.origin, t.originPoint = e.originPoint;
}
function yl(t, e, r, o) {
  t.min = T(e.min, r.min, o), t.max = T(e.max, r.max, o);
}
function hF(t, e, r, o) {
  yl(t.x, e.x, r.x, o), yl(t.y, e.y, r.y, o);
}
function dF(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const uF = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, gl = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), vl = gl("applewebkit/") && !gl("chrome/") ? Math.round : G;
function wl(t) {
  t.min = vl(t.min), t.max = vl(t.max);
}
function pF(t) {
  wl(t.x), wl(t.y);
}
function W0(t, e, r) {
  return t === "position" || t === "preserve-aspect" && !y_(dl(e), dl(r), 0.2);
}
function mF(t) {
  var e;
  return t !== t.root && ((e = t.scroll) == null ? void 0 : e.wasRoot);
}
const fF = z0({
  attachResizeListener: (t, e) => ro(t, "resize", e),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Ko = {
  current: void 0
}, j0 = z0({
  measureScroll: (t) => ({
    x: t.scrollLeft,
    y: t.scrollTop
  }),
  defaultParent: () => {
    if (!Ko.current) {
      const t = new fF({});
      t.mount(window), t.setOptions({ layoutScroll: !0 }), Ko.current = t;
    }
    return Ko.current;
  },
  resetTransform: (t, e) => {
    t.style.transform = e !== void 0 ? e : "none";
  },
  checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
}), kF = {
  pan: {
    Feature: V_
  },
  drag: {
    Feature: S_,
    ProjectionNode: j0,
    MeasureLayout: b0
  }
};
function xl(t, e, r) {
  const { props: o } = t;
  t.animationState && o.whileHover && t.animationState.setActive("whileHover", r === "Start");
  const s = "onHover" + r, a = o[s];
  a && S.postRender(() => a(e, no(e)));
}
class yF extends hr {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = FZ(e, (r, o) => (xl(this.node, o, "Start"), (s) => xl(this.node, s, "End"))));
  }
  unmount() {
  }
}
class gF extends hr {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = !0;
    }
    !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = oo(ro(this.node.current, "focus", () => this.onFocus()), ro(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function bl(t, e, r) {
  const { props: o } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled)
    return;
  t.animationState && o.whileTap && t.animationState.setActive("whileTap", r === "Start");
  const s = "onTap" + (r === "End" ? "" : r), a = o[s];
  a && S.postRender(() => a(e, no(e)));
}
class vF extends hr {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = XZ(e, (r, o) => (bl(this.node, o, "Start"), (s, { success: a }) => bl(this.node, s, a ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const ya = /* @__PURE__ */ new WeakMap(), Go = /* @__PURE__ */ new WeakMap(), wF = (t) => {
  const e = ya.get(t.target);
  e && e(t);
}, xF = (t) => {
  t.forEach(wF);
};
function bF({ root: t, ...e }) {
  const r = t || document;
  Go.has(r) || Go.set(r, {});
  const o = Go.get(r), s = JSON.stringify(e);
  return o[s] || (o[s] = new IntersectionObserver(xF, { root: t, ...e })), o[s];
}
function NF(t, e, r) {
  const o = bF(e);
  return ya.set(t, r), o.observe(t), () => {
    ya.delete(t), o.unobserve(t);
  };
}
const MF = {
  some: 0,
  all: 1
};
class CF extends hr {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(), { root: r, margin: o, amount: s = "some", once: a } = e, i = {
      root: r ? r.current : void 0,
      rootMargin: o,
      threshold: typeof s == "number" ? s : MF[s]
    }, n = (c) => {
      const { isIntersecting: l } = c;
      if (this.isInView === l || (this.isInView = l, a && !l && this.hasEnteredView))
        return;
      l && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", l);
      const { onViewportEnter: h, onViewportLeave: p } = this.node.getProps(), m = l ? h : p;
      m && m(c);
    };
    return NF(this.node.current, i, n);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: e, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(AF(e, r)) && this.startObserver();
  }
  unmount() {
  }
}
function AF({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (r) => t[r] !== e[r];
}
const LF = {
  inView: {
    Feature: CF
  },
  tap: {
    Feature: vF
  },
  focus: {
    Feature: gF
  },
  hover: {
    Feature: yF
  }
}, zF = {
  layout: {
    ProjectionNode: j0,
    MeasureLayout: b0
  }
}, ga = { current: null }, q0 = { current: !1 };
function WF() {
  if (q0.current = !0, !!Aa)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => ga.current = t.matches;
      t.addEventListener("change", e), e();
    } else
      ga.current = !1;
}
const jF = /* @__PURE__ */ new WeakMap();
function qF(t, e, r) {
  for (const o in e) {
    const s = e[o], a = r[o];
    if (R(s))
      t.addValue(o, s);
    else if (R(a))
      t.addValue(o, Vr(s, { owner: t }));
    else if (a !== s)
      if (t.hasValue(o)) {
        const i = t.getValue(o);
        i.liveStyle === !0 ? i.jump(s) : i.hasAnimated || i.set(s);
      } else {
        const i = t.getStaticValue(o);
        t.addValue(o, Vr(i !== void 0 ? i : s, { owner: t }));
      }
  }
  for (const o in r)
    e[o] === void 0 && t.removeValue(o);
  return e;
}
const Nl = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class $F {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(e, r, o) {
    return {};
  }
  constructor({ parent: e, props: r, presenceContext: o, reducedMotionConfig: s, blockInitialAnimation: a, visualState: i }, n = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Ra, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const m = H.now();
      this.renderScheduledAt < m && (this.renderScheduledAt = m, S.render(this.render, !1, !0));
    };
    const { latestValues: c, renderState: l } = i;
    this.latestValues = c, this.baseTarget = { ...c }, this.initialValues = r.initial ? { ...c } : {}, this.renderState = l, this.parent = e, this.props = r, this.presenceContext = o, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = s, this.options = n, this.blockInitialAnimation = !!a, this.isControllingVariants = So(r), this.isVariantNode = Qu(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
    const { willChange: h, ...p } = this.scrapeMotionValuesFromProps(r, {}, this);
    for (const m in p) {
      const k = p[m];
      c[m] !== void 0 && R(k) && k.set(c[m], !1);
    }
  }
  mount(e) {
    this.current = e, jF.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, o) => this.bindToMotionValue(o, r)), q0.current || WF(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : ga.current, process.env.NODE_ENV !== "production" && qa(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), cr(this.notifyUpdate), cr(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const e in this.events)
      this.events[e].clear();
    for (const e in this.features) {
      const r = this.features[e];
      r && (r.unmount(), r.isMounted = !1);
    }
    this.current = null;
  }
  bindToMotionValue(e, r) {
    this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
    const o = Ur.has(e);
    o && this.onBindTransform && this.onBindTransform();
    const s = r.on("change", (n) => {
      this.latestValues[e] = n, this.props.onUpdate && S.preRender(this.notifyUpdate), o && this.projection && (this.projection.isTransformDirty = !0);
    }), a = r.on("renderRequest", this.scheduleRender);
    let i;
    window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, e, r)), this.valueSubscriptions.set(e, () => {
      s(), a(), i && i(), r.owner && r.stop();
    });
  }
  sortNodePosition(e) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = "animation";
    for (e in Tr) {
      const r = Tr[e];
      if (!r)
        continue;
      const { isEnabled: o, Feature: s } = r;
      if (!this.features[e] && s && o(this.props) && (this.features[e] = new s(this)), this.features[e]) {
        const a = this.features[e];
        a.isMounted ? a.update() : (a.mount(), a.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : P();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, r) {
    this.latestValues[e] = r;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(e, r) {
    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = r;
    for (let o = 0; o < Nl.length; o++) {
      const s = Nl[o];
      this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](), delete this.propEventSubscriptions[s]);
      const a = "on" + s, i = e[a];
      i && (this.propEventSubscriptions[s] = this.on(s, i));
    }
    this.prevMotionValues = qF(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(e) {
    const r = this.getClosestVariantNode();
    if (r)
      return r.variantChildren && r.variantChildren.add(e), () => r.variantChildren.delete(e);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(e, r) {
    const o = this.values.get(e);
    r !== o && (o && this.removeValue(e), this.bindToMotionValue(e, r), this.values.set(e, r), this.latestValues[e] = r.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(e) {
    this.values.delete(e);
    const r = this.valueSubscriptions.get(e);
    r && (r(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, r) {
    if (this.props.values && this.props.values[e])
      return this.props.values[e];
    let o = this.values.get(e);
    return o === void 0 && r !== void 0 && (o = Vr(r === null ? void 0 : r, { owner: this }), this.addValue(e, o)), o;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(e, r) {
    let o = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
    return o != null && (typeof o == "string" && (nu(o) || cu(o)) ? o = parseFloat(o) : !QZ(o) && lr.test(r) && (o = Ru(e, r)), this.setBaseTarget(e, R(o) ? o.get() : o)), R(o) ? o.get() : o;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(e, r) {
    this.baseTarget[e] = r;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(e) {
    var a;
    const { initial: r } = this.props;
    let o;
    if (typeof r == "string" || typeof r == "object") {
      const i = rs(this.props, r, (a = this.presenceContext) == null ? void 0 : a.custom);
      i && (o = i[e]);
    }
    if (r && o !== void 0)
      return o;
    const s = this.getBaseTargetFromProps(this.props, e);
    return s !== void 0 && !R(s) ? s : this.initialValues[e] !== void 0 && o === void 0 ? void 0 : this.baseTarget[e];
  }
  on(e, r) {
    return this.events[e] || (this.events[e] = new ja()), this.events[e].add(r);
  }
  notify(e, ...r) {
    this.events[e] && this.events[e].notify(...r);
  }
}
class $0 extends $F {
  constructor() {
    super(...arguments), this.KeyframeResolver = EZ;
  }
  sortInstanceNodePosition(e, r) {
    return e.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, r) {
    return e.style ? e.style[r] : void 0;
  }
  removeValueFromRenderState(e, { vars: r, style: o }) {
    delete r[e], delete o[e];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    R(e) && (this.childSubscription = e.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
}
function S0(t, { style: e, vars: r }, o, s) {
  const a = t.style;
  let i;
  for (i in e)
    a[i] = e[i];
  s == null || s.applyProjectionStyles(a, o);
  for (i in r)
    a.setProperty(i, r[i]);
}
function SF(t) {
  return window.getComputedStyle(t);
}
class VF extends $0 {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = S0;
  }
  readValueFromInstance(e, r) {
    var o;
    if (Ur.has(r))
      return (o = this.projection) != null && o.isProjecting ? sa(r) : aZ(e, r);
    {
      const s = SF(e), a = (Va(r) ? s.getPropertyValue(r) : s[r]) || 0;
      return typeof a == "string" ? a.trim() : a;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: r }) {
    return g0(e, r);
  }
  build(e, r, o) {
    Ja(e, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, r, o) {
    return os(e, r, o);
  }
}
const V0 = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function TF(t, e, r, o) {
  S0(t, e, void 0, o);
  for (const s in e.attrs)
    t.setAttribute(V0.has(s) ? s : Qa(s), e.attrs[s]);
}
class PF extends $0 {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = P;
  }
  getBaseTargetFromProps(e, r) {
    return e[r];
  }
  readValueFromInstance(e, r) {
    if (Ur.has(r)) {
      const o = Zu(r);
      return o && o.default || 0;
    }
    return r = V0.has(r) ? r : Qa(r), e.getAttribute(r);
  }
  scrapeMotionValuesFromProps(e, r, o) {
    return c0(e, r, o);
  }
  build(e, r, o) {
    a0(e, r, this.isSVGTag, o.transformTemplate, o.style);
  }
  renderInstance(e, r, o, s) {
    TF(e, r, o, s);
  }
  mount(e) {
    this.isSVGTag = n0(e.tagName), super.mount(e);
  }
}
const DF = (t, e) => ts(t) ? new PF(e) : new VF(e, {
  allowProjection: t !== Al
}), OF = /* @__PURE__ */ DR({
  ...l_,
  ...LF,
  ...kF,
  ...zF
}, DF), UF = /* @__PURE__ */ cR(OF);
function fI({
  selectedDate: t,
  onChange: e,
  maxDate: r
}) {
  const [o, s] = O(/* @__PURE__ */ new Date()), [a, i] = O(!1), n = () => /* @__PURE__ */ C("div", { className: "flex justify-between items-center mb-2 px-2 text-primary-foreground dark:text-primary-foreground-dark", children: [
    /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        onClick: () => s(rB(o)),
        className: "p-1 hover:bg-[var(--color-primary-hover)] rounded",
        children: "←"
      }
    ),
    /* @__PURE__ */ f("div", { className: "font-semibold text-lg", children: co(o, "MMMM yyyy") }),
    /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        onClick: () => s(tu(o, 1)),
        className: "p-1 hover:bg-[var(--color-primary-hover)] rounded",
        children: "→"
      }
    )
  ] }), c = () => {
    const h = [], p = wr(o);
    for (let m = 0; m < 7; m++)
      h.push(
        /* @__PURE__ */ f(
          "div",
          {
            className: "text-center text-sm font-medium text-[var(--color-primary-foreground)]",
            children: co(Do(p, m), "EEE")
          },
          m
        )
      );
    return /* @__PURE__ */ f("div", { className: "grid grid-cols-7", children: h });
  }, l = () => {
    const h = eE(o), p = oc(h), m = wr(h), k = Do(oc(p), 6), y = [];
    let g = [], v = m;
    for (; v <= k; ) {
      for (let w = 0; w < 7; w++) {
        const b = v, N = rc(v, /* @__PURE__ */ new Date()), z = t && rc(v, t), M = tB(v, o), W = r && eB(v, r);
        g.push(
          /* @__PURE__ */ f(
            "div",
            {
              className: `text-center text-sm p-2 rounded-lg transition text-primary-foreground dark:text-primary-foreground-dark 
              ${z ? "bg-secondary dark:bg-secondary-dark" : ""}
              ${M ? "text-[var(--color-primary-foreground)]" : "text-gray-400"}
              ${N && !z ? "border border-blue-400" : ""}
              ${W ? "text-gray-400 cursor-not-allowed" : "cursor-pointer hover:bg-blue-100"}
            `,
              onClick: () => {
                W || (e(b), i(!1));
              },
              children: co(v, "d")
            },
            v.toISOString()
          )
        ), v = Do(v, 1);
      }
      y.push(
        /* @__PURE__ */ f("div", { className: "grid grid-cols-7", children: g }, v.toISOString())
      ), g = [];
    }
    return /* @__PURE__ */ f("div", { children: y });
  };
  return /* @__PURE__ */ C("div", { className: "relative flex flex-row justify-start w-full mt-5 mb-5 ", children: [
    /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        onClick: () => i(!a),
        className: "cursor-pointer px-4 py-2 border rounded-lg bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:bg-[var(--color-primary-hover)] shadow-sm text-sm",
        children: t ? co(t, "dd/MM/yyyy") : "Selecionar data"
      }
    ),
    /* @__PURE__ */ f(oR, { children: a && /* @__PURE__ */ C(
      UF.div,
      {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 },
        className: "absolute mt-2 z-10 w-80 p-4 border rounded-lg shadow-lg bg-primary dark:bg-primary-dark text-primary-foreground dark:text-primary-foreground-dark",
        children: [
          n(),
          c(),
          l()
        ]
      }
    ) })
  ] });
}
function kI({
  items: t,
  contentComponent: e,
  className: r,
  classNameAccordion: o
}) {
  const [s, a] = O(null);
  return /* @__PURE__ */ f("div", { className: r, children: t.map(({ id: i, title: n, data: c }) => /* @__PURE__ */ f(
    IU,
    {
      title: n,
      isOpen: s === i,
      onToggle: () => a(s === i ? null : i),
      className: o,
      children: e(c)
    },
    i
  )) });
}
export {
  IU as Accordion,
  kI as AccordionGroup,
  cI as ActivityIndicator,
  go as Button,
  sI as CustomLink,
  fI as DatePicker,
  dI as ExpandableTable,
  IF as FormCheckbox,
  F0 as FormInput,
  pI as FormInputArray,
  uI as FormInputDate,
  HF as FormInputPassword,
  Lo as FormLabel,
  I0 as FormSelect,
  hI as FormSelectArray,
  KF as FormSlider,
  GF as FormSwitch,
  YF as FormTextArea,
  XF as MessageError,
  JF as ModalConfirmation,
  H0 as ModalDefault,
  lI as ModalExpandImage,
  eI as Pagination,
  QF as Progress,
  nI as SnackBar,
  tI as Table,
  rI as TableAction,
  oI as Tabs,
  iI as ThemeToggle,
  Lr as Tooltip,
  aI as VerticalTabs,
  Ao as getBorderColor
};
