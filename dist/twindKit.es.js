import { jsx as f, jsxs as k, Fragment as lo } from "react/jsx-runtime";
import { twMerge as D } from "tailwind-merge";
import * as un from "react";
import uo, { useState as B, useEffect as G, forwardRef as dn, createElement as ue, useRef as nt, createContext as Et, useLayoutEffect as ho, useId as hn, useContext as j, useInsertionEffect as Ti, useMemo as bt, useCallback as Pi, Children as fo, isValidElement as mo, Fragment as Si, Component as po } from "react";
import { createPortal as go } from "react-dom";
const yo = {
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
}, vo = `
  w-full min-h-[48px] min-w-[140px] py-3 px-4 mt-5 
  rounded-lg
  transition shadow-theme-xs cursor-pointer
`;
function de({
  className: t,
  children: e,
  variant: n = "secondary",
  ...r
}) {
  return /* @__PURE__ */ f(
    "button",
    {
      className: D(vo, yo[n], t),
      ...r,
      children: e
    }
  );
}
const xo = {
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
function zh({
  checked: t,
  onChange: e,
  label: n,
  classNameLabel: r = "",
  classNameInput: i = "",
  size: o = "md"
}) {
  const s = xo[o];
  return /* @__PURE__ */ k(
    "label",
    {
      className: `inline-flex items-center cursor-pointer ${r}`,
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
            className: D(
              `
          flex items-center justify-center rounded border 
          ${s.box}
          border-[var(--color-muted)]
          peer-checked:bg-[var(--color-secondary-foreground)]
          peer-checked:border-[var(--color-secondary-foreground)]
          transition-colors
          dark:border-[var(--color-muted-dark)]
          dark:peer-checked:bg-[var(--color-secondary-foreground-dark)]
          dark:peer-checked:border-[var(--color-secondary-foreground-dark)]
        `,
              i
            ),
            children: /* @__PURE__ */ f(
              "svg",
              {
                className: D(`
            ${s.icon} hidden peer-checked:block 
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
        n && /* @__PURE__ */ f(
          "span",
          {
            className: D(`
            ml-2 ${s.label}
            text-[var(--color-primary-foreground)] 
            dark:text-[var(--color-primary-foreground-dark)]
          `),
            children: n
          }
        )
      ]
    }
  );
}
function xe(t, e) {
  return t ? "border-[var(--color-error)] focus:border-[var(--color-error)]" : e ? "border-[var(--color-success)] focus:border-[var(--color-success)]" : "border-[var(--color-secondary)] focus:border-[var(--color-secondary)] dark:border-[var(--color-muted-dark)] dark:focus:border-[var(--color-secondary-dark)]";
}
function be({ htmlFor: t, children: e, className: n }) {
  return /* @__PURE__ */ f(
    "label",
    {
      htmlFor: t,
      className: D(
        `block mb-1 text-sm font-medium 
         text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)]`,
        n
      ),
      children: e
    }
  );
}
function bo({
  label: t,
  error: e = !1,
  success: n = !1,
  disabled: r = !1,
  messageError: i = "Campo obrigatório",
  isValidating: o,
  icon: s,
  className: a = "",
  onChange: c,
  ...l
}) {
  const u = e && o;
  return /* @__PURE__ */ k("div", { className: "w-full mt-5", children: [
    t && /* @__PURE__ */ f(be, { children: t }),
    /* @__PURE__ */ k("div", { className: "relative", children: [
      s && /* @__PURE__ */ f("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ f(s, { className: `h-5 w-5 ${u ? "text-[var(--color-error)]" : n ? "text-[var(--color-success)]" : "text-[var(--color-muted)] dark:text-[var(--color-muted-dark)]"}` }) }),
      /* @__PURE__ */ f(
        "input",
        {
          disabled: r,
          onChange: c,
          className: D(
            `block w-full rounded-md py-3 px-4 transition duration-200 border focus:outline-none appearance-none transition duration-200
             bg-[var(--color-primary)] text-[var(--color-primary-foreground)] placeholder-[var(--color-muted)] 
             dark:bg-[var(--color-primary-dark)] dark:text-[var(--color-primary-foreground-dark)] dark:placeholder-[var(--color-muted-dark)]
            `,
            s ? "pl-10" : "",
            xe(u, n),
            r ? "opacity-60 cursor-not-allowed" : "",
            a
          ),
          ...l
        }
      )
    ] }),
    u && i && /* @__PURE__ */ f("p", { className: "mt-2 text-sm text-[var(--color-error)]", children: i })
  ] });
}
function Gh({
  label: t,
  error: e = !1,
  success: n = !1,
  disabled: r = !1,
  messageError: i = "Campo obrigatório",
  isValidating: o,
  onChange: s,
  ...a
}) {
  const [c, l] = B(!1), u = e && o;
  return /* @__PURE__ */ k("div", { className: "w-full mt-5", children: [
    t && /* @__PURE__ */ f(
      "label",
      {
        htmlFor: a.id,
        className: "block mb-1 text-sm font-medium text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)]",
        children: t
      }
    ),
    /* @__PURE__ */ k("div", { className: "relative", children: [
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
          disabled: r,
          onChange: s,
          placeholder: "••••••••",
          className: D(
            `block w-full rounded-md py-3 px-4 transition duration-200
             bg-[var(--color-primary)] text-[var(--color-primary-foreground)] placeholder-[var(--color-muted)] 
             dark:bg-[var(--color-primary-dark)] dark:text-[var(--color-primary-foreground-dark)] dark:placeholder-[var(--color-muted-dark)]
             pl-10 pr-10 border focus:outline-none appearance-none transition duration-20
            `,
            xe(u, n),
            r ? "opacity-60 cursor-not-allowed" : ""
          ),
          ...a
        }
      ),
      /* @__PURE__ */ f(
        "button",
        {
          type: "button",
          onClick: () => l((d) => !d),
          className: "absolute inset-y-0 right-0 pr-3 flex items-center text-[var(--color-muted)] hover:text-[var(--color-secondary)] dark:text-[var(--color-muted-dark)] dark:hover:text-[var(--color-secondary-dark)] transition cursor-pointer",
          tabIndex: -1,
          children: c ? /* @__PURE__ */ k(
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
    u && i && /* @__PURE__ */ f("p", { className: "mt-2 text-sm text-[var(--color-error)] dark:text-[var(--color-error-dark)]", children: i })
  ] });
}
function wo({
  label: t,
  error: e = !1,
  success: n = !1,
  disabled: r = !1,
  messageError: i = "Campo obrigatório",
  isValidating: o,
  onChange: s,
  options: a,
  placeholder: c = "Selecione uma opção",
  className: l,
  ...u
}) {
  const d = e && o;
  return /* @__PURE__ */ k("div", { className: "w-full mt-5 mb-3", children: [
    t && /* @__PURE__ */ f(be, { children: t }),
    /* @__PURE__ */ k("div", { className: "relative", children: [
      /* @__PURE__ */ k(
        "select",
        {
          ...u,
          onChange: s,
          disabled: r,
          className: D(
            `block w-full rounded-md py-3 px-4 pr-10 transition duration-200 appearance-none
             bg-[var(--color-primary)] text-[var(--color-primary-foreground)] placeholder-[var(--color-muted)]
             dark:bg-[var(--color-primary-dark)] dark:text-[var(--color-primary-foreground-dark)] dark:placeholder-[var(--color-muted-dark)]
             transition duration-200 border focus:outline-none appearance-none transition duration-200
            `,
            xe(d, n),
            r ? "opacity-60 cursor-not-allowed" : "",
            l
          ),
          children: [
            c && /* @__PURE__ */ f("option", { value: "", children: c }),
            a.map((h) => /* @__PURE__ */ f("option", { value: h.value, children: h.label }, h.value))
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
      d && i && /* @__PURE__ */ f("p", { className: "mt-2 text-sm text-[var(--color-error)] dark:text-[var(--color-error-dark)]", children: i })
    ] })
  ] });
}
function qh({
  className: t,
  label: e,
  error: n = !1,
  success: r = !1,
  disabled: i = !1,
  messageError: o = "Campo obrigatório",
  isValidating: s,
  onChange: a,
  ...c
}) {
  const l = n && s;
  return /* @__PURE__ */ k("div", { className: "w-full mb-3 mt-5", children: [
    e && /* @__PURE__ */ f(be, { className: "mb-2", children: e }),
    /* @__PURE__ */ k("div", { className: "relative", children: [
      /* @__PURE__ */ f(
        "textarea",
        {
          ...c,
          onChange: a,
          disabled: i,
          className: D(
            `border focus:outline-none appearance-none transition duration-200 rounded-md
             h-[50px] w-full resize-none appearance-none px-4 py-2.5 shadow-sm transition-colors duration-150
             bg-[var(--color-primary)] text-[var(--color-primary-foreground)] placeholder-[var(--color-muted)]
             dark:bg-[var(--color-primary-dark)] dark:text-[var(--color-primary-foreground-dark)] dark:placeholder-[var(--color-muted-dark)]
             focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)/10]
            `,
            xe(l, r),
            i ? "opacity-60 cursor-not-allowed" : "",
            t
          )
        }
      ),
      l && o && /* @__PURE__ */ f("p", { className: "text-sm text-[var(--color-error)] dark:text-[var(--color-error-dark)] mt-2", children: o })
    ] })
  ] });
}
function Xh({ messageError: t }) {
  return t ? /* @__PURE__ */ f(
    "p",
    {
      className: `
        mt-3 mb-3 p-2 min-h-[30px] w-full rounded-md
        bg-[var(--color-error)] text-[var(--color-primary-foreground-dark)]
        text-[14px] leading-[30px] text-center
        dark:bg-[var(--color-error-dark)] dark:text-[var(--color-primary-foreground-dark)]
      `,
      children: t
    }
  ) : null;
}
function Qh({
  value: t,
  onChange: e,
  label: n,
  isValidating: r,
  error: i,
  className: o
}) {
  const s = (a) => {
    const c = Number(a.target.value);
    e(c);
  };
  return /* @__PURE__ */ k("div", { className: D("mb-2 w-full mt-4", o), children: [
    /* @__PURE__ */ k("div", { className: "flex items-center", children: [
      /* @__PURE__ */ f(
        "p",
        {
          className: `
            text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)] mr-4
          `,
          children: n
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
          onChange: s,
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
    r && i && /* @__PURE__ */ f("p", { className: "text-sm mt-2 ml-2 text-[var(--color-error)] dark:text-[var(--color-error-dark)]", children: "Este campo é obrigatório" })
  ] });
}
function Zh({
  isChecked: t,
  onChange: e,
  label: n,
  isValidating: r,
  error: i,
  className: o
}) {
  return /* @__PURE__ */ k("div", { className: D("mb-2 w-full mt-5", o), children: [
    /* @__PURE__ */ k("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ f("p", { className: "text-base text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)]", children: n }),
      /* @__PURE__ */ f(
        "button",
        {
          type: "button",
          onClick: e,
          className: D(
            "relative w-11 h-6 transition-colors duration-200 ease-in-out rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2",
            t ? "bg-[var(--color-secondary)] focus:ring-[var(--color-secondary)]" : "bg-[var(--color-muted)] dark:bg-[var(--color-muted-dark)] focus:ring-[var(--color-muted)]"
          ),
          children: /* @__PURE__ */ f(
            "span",
            {
              className: D(
                "absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200",
                t ? "translate-x-5" : "translate-x-0"
              )
            }
          )
        }
      )
    ] }),
    r && i && /* @__PURE__ */ f("p", { className: "text-sm mt-2 ml-2 text-[var(--color-error)] dark:text-[var(--color-error-dark)]", children: "Este campo é obrigatório" })
  ] });
}
function Jh({ loading: t, className: e }) {
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
function ko({
  isOpen: t,
  onClose: e,
  children: n,
  className: r = "",
  isFullscreen: i = !1,
  title: o
}) {
  return G(() => {
    const s = (a) => {
      a.key === "Escape" && e();
    };
    return t && document.addEventListener("keydown", s), () => {
      document.removeEventListener("keydown", s);
    };
  }, [t, e]), G(() => (t ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset", () => {
    document.body.style.overflow = "unset";
  }), [t]), t ? /* @__PURE__ */ k("div", { className: "fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-6 sm:py-12", children: [
    !i && /* @__PURE__ */ f(
      "div",
      {
        className: "fixed inset-0 bg-black/40 backdrop-blur-sm",
        onClick: e
      }
    ),
    /* @__PURE__ */ k(
      "div",
      {
        onClick: (s) => s.stopPropagation(),
        className: D(
          r,
          `border border-[#454545] relative z-50 w-full 
           bg-[var(--color-primary)] text-[var(--color-primary-foreground)] 
           dark:bg-[var(--color-primary-dark)] dark:text-[var(--color-primary-foreground-dark)] shadow-xl transition-all`,
          i ? "h-full" : "max-w-lg rounded-xl p-6"
        ),
        children: [
          /* @__PURE__ */ k("div", { children: [
            /* @__PURE__ */ f("p", { className: "mt-[-10px] text-[20px] text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)]", children: o }),
            /* @__PURE__ */ k(
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
          /* @__PURE__ */ f("div", { className: "mt-4", children: n })
        ]
      }
    )
  ] }) : null;
}
function tf({
  isOpen: t,
  onClose: e,
  performAction: n,
  description: r,
  title: i,
  className: o = "",
  isFullscreen: s = !1
}) {
  return /* @__PURE__ */ k(
    ko,
    {
      isOpen: t,
      onClose: e,
      title: i,
      className: o,
      isFullscreen: s,
      children: [
        /* @__PURE__ */ f("h3", { className: "mt-5 mb-2 text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)]", children: r }),
        /* @__PURE__ */ k("div", { className: "flex flex-row justify-end", children: [
          /* @__PURE__ */ f(
            de,
            {
              type: "button",
              className: "max-w-[100px] mr-2",
              onClick: e,
              variant: "secondary",
              children: "Cancelar"
            }
          ),
          /* @__PURE__ */ f(
            de,
            {
              type: "button",
              className: "max-w-[100px]",
              onClick: n,
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
const To = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Po = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), Zn = (t) => {
  const e = Po(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Mi = (...t) => t.filter((e, n, r) => !!e && e.trim() !== "" && r.indexOf(e) === n).join(" ").trim(), So = (t) => {
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
var Mo = {
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
const Co = dn(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: i = "",
    children: o,
    iconNode: s,
    ...a
  }, c) => ue(
    "svg",
    {
      ref: c,
      ...Mo,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: r ? Number(n) * 24 / Number(e) : n,
      className: Mi("lucide", i),
      ...!o && !So(a) && { "aria-hidden": "true" },
      ...a
    },
    [
      ...s.map(([l, u]) => ue(l, u)),
      ...Array.isArray(o) ? o : [o]
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
  const n = dn(
    ({ className: r, ...i }, o) => ue(Co, {
      ref: o,
      iconNode: e,
      className: Mi(
        `lucide-${To(Zn(t))}`,
        `lucide-${t}`,
        r
      ),
      ...i
    })
  );
  return n.displayName = Zn(t), n;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Do = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
], Ao = tt("check-check", Do);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vo = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Eo = tt("chevron-down", Vo);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const No = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], Ro = tt("chevron-up", No);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lo = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
], Oo = tt("chevrons-left", Lo);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fo = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
], Bo = tt("chevrons-right", Fo);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Io = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], jo = tt("info", Io);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wo = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], $o = tt("link", Wo);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yo = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
], _o = tt("pencil", Yo);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uo = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
], Ko = tt("trash", Uo);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ho = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], fn = tt("x", Ho);
function ef({
  totalData: t,
  currentPage: e,
  setCurrentPage: n,
  elementsPerPage: r = 20,
  classNameIcons: i,
  classNameSelectPage: o,
  className: s
}) {
  const a = Math.ceil(t / r);
  if (t === 0 || t < r) return null;
  const c = (u) => {
    n(u);
  }, l = `bg-[var(--color-secondary-active)] text-[var(--color-primary-foreground)] 
      dark:bg-[var(--color-secondary-active-dark)] dark:text-[var(--color-primary-foreground-dark)] ${o}`;
  return /* @__PURE__ */ f("div", { className: "w-full flex flex-col justify-center items-center mb-10 mt-5", children: /* @__PURE__ */ k("div", { className: "max-w-[400px] w-full flex flex-row justify-around items-center", children: [
    /* @__PURE__ */ f(
      Oo,
      {
        className: D("text-[var(--color-secondary)] cursor-pointer", i),
        onClick: () => c(1)
      }
    ),
    Array.from({ length: a }, (u, d) => /* @__PURE__ */ f(
      "button",
      {
        onClick: () => c(d + 1),
        className: D(
          "flex justify-center items-center w-[40px] h-[40px] text-sm rounded-full transition-colors duration-200 cursor-pointer",
          e === d + 1 ? l : "text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)] hover:bg-[var(--color-muted-dark)/10] " + s
        ),
        children: d + 1
      },
      d + 1
    )),
    /* @__PURE__ */ f(
      Bo,
      {
        className: D("text-[var(--color-secondary)] cursor-pointer", i),
        onClick: () => c(a)
      }
    )
  ] }) });
}
function nf({
  data: t,
  columns: e,
  rowActions: n
}) {
  return /* @__PURE__ */ f("div", { className: "shadow-sm border border-[var(--color-muted)] rounded-md text-[var(--color-primary-foreground)] overflow-x-auto w-full", children: /* @__PURE__ */ k("table", { className: "min-w-[800px] table-auto w-full", children: [
    /* @__PURE__ */ f("thead", { children: /* @__PURE__ */ k("tr", { className: "border-b border-[var(--color-muted)] bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)]", children: [
      e.map((r) => /* @__PURE__ */ f(
        "th",
        {
          className: "px-4 py-2 text-[16px] text-left font-semibold text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)]",
          children: r.title
        },
        r.key
      )),
      n && /* @__PURE__ */ f("th", { className: "px-4 py-2 text-center" })
    ] }) }),
    /* @__PURE__ */ f("tbody", { children: t.length === 0 ? /* @__PURE__ */ f("tr", { children: /* @__PURE__ */ f(
      "td",
      {
        colSpan: e.length + (n ? 1 : 0),
        className: "px-4 py-4 text-center text-[var(--color-muted)]",
        children: "Nenhum registro encontrado!"
      }
    ) }) : t.map((r, i) => /* @__PURE__ */ k(
      "tr",
      {
        className: i === t.length - 1 ? "" : "border-b border-[var(--color-muted)]",
        children: [
          e.map((o) => {
            const s = r[o.key];
            return /* @__PURE__ */ f(
              "td",
              {
                className: "px-4 py-2 text-[14px] font-normal text-left text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)]",
                children: o.render ? o.render(s, r) : s
              },
              String(o.key)
            );
          }),
          n && /* @__PURE__ */ f("td", { className: "px-4 py-2 whitespace-nowrap w-[5%]", children: n(r) })
        ]
      },
      i
    )) })
  ] }) });
}
function pt({
  text: t,
  children: e,
  className: n,
  coordTop: r,
  coordLeft: i
}) {
  const [o, s] = B(!1), [a, c] = B({
    top: 0,
    left: 0
  }), l = nt(null);
  return G(() => {
    if (o && l.current) {
      const u = l.current.getBoundingClientRect();
      c({
        top: u.top + window.scrollY + (r ?? 0),
        left: u.left + u.width / 2 + window.scrollX + (i ?? 0)
      });
    }
  }, [i, r, o]), /* @__PURE__ */ k(
    "button",
    {
      className: D("relative inline-block", n),
      onMouseEnter: () => s(!0),
      onMouseLeave: () => s(!1),
      ref: l,
      children: [
        e,
        o && go(
          /* @__PURE__ */ f(
            "div",
            {
              style: {
                top: a.top - 10,
                left: a.left,
                transform: "translate(-50%, -100%)",
                position: "absolute",
                zIndex: 9999
              },
              className: D(
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
function rf({
  type: t,
  action: e,
  textTooltip: n,
  className: r
}) {
  const i = "w-[18px] h-[18px] cursor-pointer text-[var(--color-secondary)] dark:text-[var(--color-secondary-dark)] mx-1";
  return {
    edit: /* @__PURE__ */ f(pt, { text: n, children: /* @__PURE__ */ f(_o, { className: D(i, r), onClick: e }) }, "tableActionEdit"),
    delete: /* @__PURE__ */ f(pt, { text: n, children: /* @__PURE__ */ f(Ko, { className: D(i, r), onClick: e }) }, "tableActionDelete"),
    link: /* @__PURE__ */ f(pt, { text: n, children: /* @__PURE__ */ f($o, { className: D(i, r), onClick: e }) }, "tableActionLink"),
    info: /* @__PURE__ */ f(pt, { text: n, children: /* @__PURE__ */ f(jo, { className: D(i, r), onClick: e }) }, "tableActionInfo"),
    check: /* @__PURE__ */ f(pt, { text: n, children: /* @__PURE__ */ f(Ao, { className: D(i, r), onClick: e }) }, "tableActionCheck")
  }[t];
}
function sf({
  tabs: t,
  defaultTabKey: e
}) {
  var o, s;
  const [n, r] = B(
    e || ((o = t[0]) == null ? void 0 : o.key)
  );
  G(() => {
    !t.some((c) => c.key === n) && t.length > 0 && r(t[0].key);
  }, [t, n]);
  const i = (s = t.find((a) => a.key === n)) == null ? void 0 : s.content;
  return /* @__PURE__ */ k("div", { className: "overflow-x-auto p-4 sm:p-6", children: [
    /* @__PURE__ */ f("div", { className: "border border-[var(--color-border)] rounded-t-xl bg-[var(--color-surface)]", children: /* @__PURE__ */ f("nav", { className: "flex overflow-x-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white h-[50px]", children: t.map((a) => {
      const c = n === a.key;
      return /* @__PURE__ */ f(
        "button",
        {
          onClick: () => r(a.key),
          className: D(
            "inline-flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer rounded-md",
            c ? "bg-[var(--color-primary)] text-[var(--color-on-primary)] shadow" : "bg-transparent text-[var(--color-text)] hover:text-[var(--color-primary)]"
          ),
          children: a.label
        },
        a.key
      );
    }) }) }),
    /* @__PURE__ */ f("div", { className: "rounded-b-xl border border-t-0 border-[var(--color-border)] p-6 pt-4 bg-[var(--color-surface)] text-[var(--color-text)]", children: i })
  ] });
}
function of({
  tabs: t,
  defaultTab: e,
  actions: n,
  className: r
}) {
  var a;
  const [i, o] = B(e || ((a = t[0]) == null ? void 0 : a.id) || ""), s = t.find((c) => c.id === i);
  return /* @__PURE__ */ k("div", { className: "flex flex-row h-full", children: [
    /* @__PURE__ */ k(
      "div",
      {
        className: D(
          "w-12 flex flex-col justify-between py-4 z-50 bg-[var(--color-surface)] border-r border-[var(--color-border)]",
          r
        ),
        children: [
          /* @__PURE__ */ f("div", { className: "flex flex-col items-center space-y-4", children: t.map((c) => /* @__PURE__ */ f(
            "button",
            {
              onClick: () => o(c.id),
              className: D(
                "p-2 rounded transition-colors cursor-pointer text-[var(--color-text)] hover:bg-[var(--color-hover)]",
                i === c.id && "bg-[var(--color-hover)]"
              ),
              "aria-label": `Tab ${c.id}`,
              children: c.icon
            },
            c.id
          )) }),
          /* @__PURE__ */ f("div", { className: "flex flex-col items-center space-y-3 mb-[50px]", children: n == null ? void 0 : n.map((c) => /* @__PURE__ */ f(
            "span",
            {
              onClick: c.action,
              className: "cursor-pointer hover:bg-[var(--color-hover)] p-2 rounded transition-colors text-[var(--color-text)]",
              children: /* @__PURE__ */ f(pt, { text: c.text, coordLeft: 70, children: c.icon })
            },
            c.id
          )) })
        ]
      }
    ),
    /* @__PURE__ */ f("div", { className: "relative w-64 bg-[var(--color-surface)] border-r border-[var(--color-border)] shadow-lg z-40 overflow-y-auto text-[var(--color-text)]", children: s == null ? void 0 : s.content })
  ] });
}
function zo({
  title: t,
  children: e,
  isOpen: n,
  onToggle: r,
  className: i
}) {
  const [o, s] = B(!1), a = n !== void 0 ? n : o, c = () => {
    r ? r() : s((l) => !l);
  };
  return /* @__PURE__ */ k("div", { className: "overflow-hidden shadow-sm", children: [
    /* @__PURE__ */ k(
      "button",
      {
        className: D("flex justify-between items-center w-full cursor-pointer p-4 hover:bg-background-surface transition-colors border-b border-[#E3E3E3] border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] text-primary-foreground dark:text-primary-foreground-dark", i),
        onClick: c,
        children: [
          /* @__PURE__ */ f("span", { className: "text-sm ", children: t }),
          a ? /* @__PURE__ */ f(Ro, { className: "w-4 h-4" }) : /* @__PURE__ */ f(Eo, { className: "w-4 h-4" })
        ]
      }
    ),
    /* @__PURE__ */ f(
      "div",
      {
        className: `transition-all duration-300 ease-in-out overflow-hidden ${a ? "max-h-screen py-2" : "max-h-0 py-0"}`,
        children: /* @__PURE__ */ f("div", { className: "text-sm text-gray-700 dark:text-gray-300", children: e })
      }
    )
  ] });
}
function af({
  children: t,
  href: e,
  className: n = "",
  disabled: r = !1
}) {
  return /* @__PURE__ */ f(
    "a",
    {
      href: r ? "/" : e,
      "aria-disabled": r,
      className: D(
        `
        mt-5 inline-block min-w-[140px] rounded-lg bg-[var(--color-primary)] 
        px-4 py-2 text-center text-[16px] text-white transition 
        shadow-theme-xs hover:bg-[var(--color-primary-hover)] 
        disabled:pointer-events-none disabled:opacity-50
        `,
        r && "cursor-not-allowed",
        n
      ),
      children: t
    }
  );
}
const Go = {
  success: "bg-[var(--color-success)] text-[var(--color-on-success)]",
  error: "bg-[var(--color-error)] text-[var(--color-on-error)]",
  warning: "bg-[var(--color-warning)] text-[var(--color-on-warning)]",
  info: "bg-[var(--color-info)] text-[var(--color-on-info)]"
};
function cf({
  open: t,
  message: e,
  severity: n = "info",
  autoHideDuration: r = 6e3,
  onClose: i
}) {
  return G(() => {
    if (t) {
      const o = setTimeout(i, r);
      return () => clearTimeout(o);
    }
  }, [t, r, i]), /* @__PURE__ */ f(
    "div",
    {
      className: `
        fixed bottom-4 right-4 z-50
        transition-all duration-300 ease-in-out
        ${t ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
      `,
      children: /* @__PURE__ */ k(
        "div",
        {
          className: `
          flex items-center gap-3 px-4 py-3 rounded-md shadow-lg w-80
          ${Go[n]}
        `,
          children: [
            /* @__PURE__ */ f("span", { className: "flex-1 text-sm", children: e }),
            /* @__PURE__ */ f("button", { onClick: i, "aria-label": "Fechar notificação", children: /* @__PURE__ */ f(fn, { className: "w-4 h-4 cursor-pointer hover:opacity-80 transition-opacity" }) })
          ]
        }
      )
    }
  );
}
function lf() {
  const [t, e] = B(null);
  G(() => {
    const r = localStorage.getItem("theme"), i = window.matchMedia("(prefers-color-scheme: dark)").matches, o = r ? r === "dark" : i;
    e(o), n(o);
  }, []), G(() => {
    t !== null && n(t);
  }, [t]);
  const n = (r) => {
    const i = document.documentElement;
    r ? (i.classList.add("dark"), i.setAttribute("data-theme", "dark"), localStorage.setItem("theme", "dark")) : (i.classList.remove("dark"), i.setAttribute("data-theme", "light"), localStorage.setItem("theme", "light"));
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
function uf({
  loading: t,
  className: e = "",
  width: n = "2rem",
  height: r = "2rem"
}) {
  return t ? /* @__PURE__ */ f(
    "div",
    {
      className: `flex items-center justify-center ${e}`,
      children: /* @__PURE__ */ f(
        "div",
        {
          style: { width: n, height: r },
          className: "rounded-full animate-spin border-4 border-[var(--color-primary)/30] border-t-[var(--color-primary)]"
        }
      )
    }
  ) : null;
}
function df({
  isOpen: t,
  onClose: e,
  image: n,
  className: r
}) {
  return G(() => {
    const i = (o) => {
      o.key === "Escape" && e();
    };
    return t && (document.addEventListener("keydown", i), document.body.style.overflow = "hidden"), () => {
      document.removeEventListener("keydown", i), document.body.style.overflow = "unset";
    };
  }, [t, e]), t ? /* @__PURE__ */ k(
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
        /* @__PURE__ */ k(
          "div",
          {
            onClick: (i) => i.stopPropagation(),
            className: D(
              "relative z-50 bg-background-base text-text-default shadow-xl transition-all overflow-auto w-full max-w-4xl rounded-lg max-h-[90%]",
              r
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
                  src: n,
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
function hf({
  label: t,
  value: e,
  error: n = !1,
  messageError: r,
  onChangeValueArray: i,
  options: o,
  placeholder: s = "",
  isValidating: a = !1,
  externalClassName: c,
  ...l
}) {
  const [u, d] = B(""), [h, m] = B(o);
  G(() => {
    h.length > 0 && d(h[0].value.toString());
  }, [h]);
  const p = () => {
    u !== "" && !e.includes(u) && (i([...e, u]), m(
      h.filter((g) => g.value !== u)
    ));
  };
  return /* @__PURE__ */ k("div", { className: D("w-full mb-3", c), children: [
    /* @__PURE__ */ k("div", { className: "flex items-center", children: [
      /* @__PURE__ */ f(
        wo,
        {
          isValidating: a,
          value: u || "",
          error: n,
          placeholder: s,
          onChange: (g) => {
            d(g.target.value);
          },
          options: h,
          className: "w-full",
          label: t,
          ...l
        },
        h.length
      ),
      /* @__PURE__ */ f(
        de,
        {
          disabled: !u,
          type: "button",
          onClick: () => {
            p(), d("");
          },
          className: "ml-[15px] mt-[30px]",
          children: "Adicionar"
        }
      )
    ] }),
    a && n && /* @__PURE__ */ f("p", { className: "mt-2 text-xs text-danger-700", children: r || "Campo obrigatório!" }),
    e.length > 0 && /* @__PURE__ */ f("div", { className: "mt-2 flex flex-row items-center justify-start flex-wrap", children: e.map((g) => {
      var y;
      return /* @__PURE__ */ k(
        "div",
        {
          className: D(
            "flex items-center justify-between px-3 py-1 mt-1 text-sm border rounded-[5px] max-w-[32%] mr-1 mr-1 mb-2",
            "border-gray-300",
            "bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)]",
            "text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)]"
          ),
          children: [
            /* @__PURE__ */ f("span", { children: ((y = o.find((v) => v.value === g)) == null ? void 0 : y.label) || g }),
            /* @__PURE__ */ f(
              "button",
              {
                type: "button",
                onClick: () => {
                  i(e.filter((x) => x !== g));
                  const v = o.find(
                    (x) => x.value === g
                  );
                  v && m([...h, v]);
                },
                className: "text-danger-500 hover:text-danger-700 cursor-pointer ml-2",
                children: /* @__PURE__ */ f(fn, { className: "w-[15px] h-[15px]" })
              }
            )
          ]
        },
        g
      );
    }) })
  ] });
}
function ff({
  data: t,
  columns: e,
  rowActions: n,
  renderExpandedRow: r
}) {
  const [i, o] = B(/* @__PURE__ */ new Set()), [s, a] = B(!1), c = (l) => {
    a(!0), o((u) => {
      const d = /* @__PURE__ */ new Set();
      return u.has(l) || d.add(l), d;
    });
  };
  return /* @__PURE__ */ f("div", { className: "shadow-sm border border-gray-200 rounded-[10px] overflow-x-auto w-full", children: /* @__PURE__ */ k("table", { className: "min-w-[800px] table-auto w-full", children: [
    /* @__PURE__ */ f("thead", { children: /* @__PURE__ */ k("tr", { className: "border-b border-gray-200 bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)]", children: [
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
    ) }) : t.map((l, u) => /* @__PURE__ */ k(uo.Fragment, { children: [
      /* @__PURE__ */ k(
        "tr",
        {
          className: `cursor-pointer hover:bg-[var(--color-primary)] dark:hover:bg-[var(--color-primary-dark)] ${u === t.length - 1 ? "" : "border-b border-gray-200"}`,
          onClick: () => !(n != null && n(l)) && c(u),
          children: [
            e.map((d) => {
              const h = l[d.key];
              return /* @__PURE__ */ f(
                "td",
                {
                  className: "px-4 py-2 text-[14px] font-normal text-left text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)]",
                  children: d.render ? d.render(h, l) : h
                },
                String(d.key)
              );
            }),
            /* @__PURE__ */ f("td", { className: "px-2 py-1 text-center align-middle whitespace-nowrap w-1", children: /* @__PURE__ */ k("div", { className: "flex items-center justify-center gap-1", children: [
              /* @__PURE__ */ f(pt, { text: "Abrir/Fechar", children: /* @__PURE__ */ f(
                "button",
                {
                  className: "text-[20px] text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)] mr-3",
                  onClick: () => (n == null ? void 0 : n(l)) && c(u),
                  children: i.has(u) ? "-" : "+"
                }
              ) }),
              n && n(l)
            ] }) })
          ]
        }
      ),
      i.has(u) && /* @__PURE__ */ f("tr", { children: /* @__PURE__ */ f(
        "td",
        {
          colSpan: e.length + 1,
          className: `p-4 ${s ? "animate-slide-down" : ""}`,
          onAnimationEnd: () => a(!1),
          children: /* @__PURE__ */ f("div", { className: "overflow-hidden", children: r(l) })
        }
      ) })
    ] }, u)) })
  ] }) });
}
function mf({
  className: t,
  label: e,
  error: n = !1,
  success: r = !1,
  disabled: i = !1,
  messageError: o,
  isValidating: s = !1,
  value: a,
  onChange: c,
  ...l
}) {
  const u = (h) => {
    const p = h.target.value.replace(/\D/g, "");
    let g = "";
    p.length > 0 && (g += p.substring(0, 2)), p.length >= 3 && (g += "/" + p.substring(2, 4)), p.length >= 5 && (g += "/" + p.substring(4, 8)), c(g, p);
  };
  let d = `
    h-10 w-full rounded-[5px] appearance-none px-4 py-2.5 text-sm shadow-sm transition-colors 
    duration-150 border focus:outline-none appearance-none transition duration-200
    text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)]
    bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)]
    placeholder:text-gray-500
    border
  `;
  return i ? d += " opacity-50 cursor-not-allowed" : n && s ? d += " border-danger-700" : r ? d += " border-success" : d += " border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary/30", t && (d += ` ${t}`), /* @__PURE__ */ k("div", { className: "w-full mb-3", children: [
    e && /* @__PURE__ */ f(be, { className: "mb-2", children: e }),
    /* @__PURE__ */ k("div", { className: "relative", children: [
      /* @__PURE__ */ f(
        "input",
        {
          ...l,
          type: "text",
          value: a,
          onChange: u,
          disabled: i,
          className: d,
          maxLength: 10,
          placeholder: l.placeholder || "dd/mm/aaaa"
        }
      ),
      s && n && /* @__PURE__ */ f("p", { className: "mt-[10px] text-xs text-danger-700", children: o || "Campo obrigatório!" })
    ] })
  ] });
}
function pf({
  label: t,
  value: e,
  error: n = !1,
  messageError: r,
  onChangeValueArray: i,
  placeholder: o = "",
  isValidating: s = !1,
  ...a
}) {
  const [c, l] = B(""), u = () => {
    const m = c.trim();
    m !== "" && !e.includes(m) && (i([...e, m]), l(""));
  }, d = (m) => {
    i(e.filter((p) => p !== m));
  };
  let h = `
    h-10 w-full rounded-[5px] border appearance-none px-4 py-2.5 text-sm
    text-[var(--color-primary-foreground)] 
    dark:text-[var(--color-primary-foreground-dark)]
    placeholder:text-gray-400
    bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)]
    focus:outline-none shadow-sm transition-colors duration-150
    focus:ring-primary/10 focus:border-gray-500
    border-gray-300 dark:border-gray-700
  `;
  return n && s && (h += " border-danger-900"), /* @__PURE__ */ k("div", { className: "w-full mb-3", children: [
    /* @__PURE__ */ k("div", { className: "flex items-center", children: [
      /* @__PURE__ */ f(
        bo,
        {
          value: c,
          onChange: (m) => l(m.target.value),
          placeholder: o,
          className: h,
          ...a,
          isValidating: s,
          error: n,
          label: t
        }
      ),
      /* @__PURE__ */ f(
        de,
        {
          disabled: !c,
          type: "button",
          onClick: () => {
            u(), l("");
          },
          className: "ml-[15px] mt-[30px]",
          children: "Adicionar"
        }
      )
    ] }),
    s && n && /* @__PURE__ */ f("p", { className: "mt-2 text-xs text-danger-700", children: r || "Campo obrigatório!" }),
    e.length > 0 && /* @__PURE__ */ f("div", { className: "mt-2 flex flex-row items-center justify-between flex-wrap", children: e.map((m, p) => /* @__PURE__ */ k(
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
          /* @__PURE__ */ f("span", { children: m }),
          /* @__PURE__ */ f(
            "button",
            {
              type: "button",
              onClick: () => d(m),
              className: "text-danger-500 hover:text-danger-700 cursor-pointer",
              children: /* @__PURE__ */ f(fn, { className: "w-[15px] h-[15px]" })
            }
          )
        ]
      },
      p
    )) })
  ] });
}
const Ci = 6048e5, qo = 864e5, Jn = Symbol.for("constructDateFrom");
function Q(t, e) {
  return typeof t == "function" ? t(e) : t && typeof t == "object" && Jn in t ? t[Jn](e) : t instanceof Date ? new t.constructor(e) : new Date(e);
}
function I(t, e) {
  return Q(e || t, t);
}
function De(t, e, n) {
  const r = I(t, n == null ? void 0 : n.in);
  return isNaN(e) ? Q(t, NaN) : (e && r.setDate(r.getDate() + e), r);
}
function Di(t, e, n) {
  const r = I(t, n == null ? void 0 : n.in);
  if (isNaN(e)) return Q(t, NaN);
  if (!e)
    return r;
  const i = r.getDate(), o = Q(t, r.getTime());
  o.setMonth(r.getMonth() + e + 1, 0);
  const s = o.getDate();
  return i >= s ? o : (r.setFullYear(
    o.getFullYear(),
    o.getMonth(),
    i
  ), r);
}
let Xo = {};
function we() {
  return Xo;
}
function wt(t, e) {
  var a, c, l, u;
  const n = we(), r = (e == null ? void 0 : e.weekStartsOn) ?? ((c = (a = e == null ? void 0 : e.locale) == null ? void 0 : a.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((u = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : u.weekStartsOn) ?? 0, i = I(t, e == null ? void 0 : e.in), o = i.getDay(), s = (o < r ? 7 : 0) + o - r;
  return i.setDate(i.getDate() - s), i.setHours(0, 0, 0, 0), i;
}
function he(t, e) {
  return wt(t, { ...e, weekStartsOn: 1 });
}
function Ai(t, e) {
  const n = I(t, e == null ? void 0 : e.in), r = n.getFullYear(), i = Q(n, 0);
  i.setFullYear(r + 1, 0, 4), i.setHours(0, 0, 0, 0);
  const o = he(i), s = Q(n, 0);
  s.setFullYear(r, 0, 4), s.setHours(0, 0, 0, 0);
  const a = he(s);
  return n.getTime() >= o.getTime() ? r + 1 : n.getTime() >= a.getTime() ? r : r - 1;
}
function tr(t) {
  const e = I(t), n = new Date(
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
  return n.setUTCFullYear(e.getFullYear()), +t - +n;
}
function mn(t, ...e) {
  const n = Q.bind(
    null,
    e.find((r) => typeof r == "object")
  );
  return e.map(n);
}
function fe(t, e) {
  const n = I(t, e == null ? void 0 : e.in);
  return n.setHours(0, 0, 0, 0), n;
}
function Qo(t, e, n) {
  const [r, i] = mn(
    n == null ? void 0 : n.in,
    t,
    e
  ), o = fe(r), s = fe(i), a = +o - tr(o), c = +s - tr(s);
  return Math.round((a - c) / qo);
}
function Zo(t, e) {
  const n = Ai(t, e), r = Q(t, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), he(r);
}
function er(t, e, n) {
  const [r, i] = mn(
    n == null ? void 0 : n.in,
    t,
    e
  );
  return +fe(r) == +fe(i);
}
function Jo(t) {
  return t instanceof Date || typeof t == "object" && Object.prototype.toString.call(t) === "[object Date]";
}
function ta(t) {
  return !(!Jo(t) && typeof t != "number" || isNaN(+I(t)));
}
function nr(t, e) {
  const n = I(t, e == null ? void 0 : e.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function ea(t, e) {
  const n = I(t, e == null ? void 0 : e.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function na(t, e) {
  const n = I(t, e == null ? void 0 : e.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
const ra = {
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
}, ia = (t, e, n) => {
  let r;
  const i = ra[t];
  return typeof i == "string" ? r = i : e === 1 ? r = i.one : r = i.other.replace("{{count}}", e.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Ae(t) {
  return (e = {}) => {
    const n = e.width ? String(e.width) : t.defaultWidth;
    return t.formats[n] || t.formats[t.defaultWidth];
  };
}
const sa = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, oa = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, aa = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, ca = {
  date: Ae({
    formats: sa,
    defaultWidth: "full"
  }),
  time: Ae({
    formats: oa,
    defaultWidth: "full"
  }),
  dateTime: Ae({
    formats: aa,
    defaultWidth: "full"
  })
}, la = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, ua = (t, e, n, r) => la[t];
function Ft(t) {
  return (e, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let i;
    if (r === "formatting" && t.formattingValues) {
      const s = t.defaultFormattingWidth || t.defaultWidth, a = n != null && n.width ? String(n.width) : s;
      i = t.formattingValues[a] || t.formattingValues[s];
    } else {
      const s = t.defaultWidth, a = n != null && n.width ? String(n.width) : t.defaultWidth;
      i = t.values[a] || t.values[s];
    }
    const o = t.argumentCallback ? t.argumentCallback(e) : e;
    return i[o];
  };
}
const da = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, ha = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, fa = {
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
}, ma = {
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
}, pa = {
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
}, ga = {
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
}, ya = (t, e) => {
  const n = Number(t), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, va = {
  ordinalNumber: ya,
  era: Ft({
    values: da,
    defaultWidth: "wide"
  }),
  quarter: Ft({
    values: ha,
    defaultWidth: "wide",
    argumentCallback: (t) => t - 1
  }),
  month: Ft({
    values: fa,
    defaultWidth: "wide"
  }),
  day: Ft({
    values: ma,
    defaultWidth: "wide"
  }),
  dayPeriod: Ft({
    values: pa,
    defaultWidth: "wide",
    formattingValues: ga,
    defaultFormattingWidth: "wide"
  })
};
function Bt(t) {
  return (e, n = {}) => {
    const r = n.width, i = r && t.matchPatterns[r] || t.matchPatterns[t.defaultMatchWidth], o = e.match(i);
    if (!o)
      return null;
    const s = o[0], a = r && t.parsePatterns[r] || t.parsePatterns[t.defaultParseWidth], c = Array.isArray(a) ? ba(a, (d) => d.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      xa(a, (d) => d.test(s))
    );
    let l;
    l = t.valueCallback ? t.valueCallback(c) : c, l = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(l)
    ) : l;
    const u = e.slice(s.length);
    return { value: l, rest: u };
  };
}
function xa(t, e) {
  for (const n in t)
    if (Object.prototype.hasOwnProperty.call(t, n) && e(t[n]))
      return n;
}
function ba(t, e) {
  for (let n = 0; n < t.length; n++)
    if (e(t[n]))
      return n;
}
function wa(t) {
  return (e, n = {}) => {
    const r = e.match(t.matchPattern);
    if (!r) return null;
    const i = r[0], o = e.match(t.parsePattern);
    if (!o) return null;
    let s = t.valueCallback ? t.valueCallback(o[0]) : o[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    const a = e.slice(i.length);
    return { value: s, rest: a };
  };
}
const ka = /^(\d+)(th|st|nd|rd)?/i, Ta = /\d+/i, Pa = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Sa = {
  any: [/^b/i, /^(a|c)/i]
}, Ma = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Ca = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Da = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Aa = {
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
}, Va = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Ea = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Na = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Ra = {
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
}, La = {
  ordinalNumber: wa({
    matchPattern: ka,
    parsePattern: Ta,
    valueCallback: (t) => parseInt(t, 10)
  }),
  era: Bt({
    matchPatterns: Pa,
    defaultMatchWidth: "wide",
    parsePatterns: Sa,
    defaultParseWidth: "any"
  }),
  quarter: Bt({
    matchPatterns: Ma,
    defaultMatchWidth: "wide",
    parsePatterns: Ca,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: Bt({
    matchPatterns: Da,
    defaultMatchWidth: "wide",
    parsePatterns: Aa,
    defaultParseWidth: "any"
  }),
  day: Bt({
    matchPatterns: Va,
    defaultMatchWidth: "wide",
    parsePatterns: Ea,
    defaultParseWidth: "any"
  }),
  dayPeriod: Bt({
    matchPatterns: Na,
    defaultMatchWidth: "any",
    parsePatterns: Ra,
    defaultParseWidth: "any"
  })
}, Oa = {
  code: "en-US",
  formatDistance: ia,
  formatLong: ca,
  formatRelative: ua,
  localize: va,
  match: La,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Fa(t, e) {
  const n = I(t, e == null ? void 0 : e.in);
  return Qo(n, na(n)) + 1;
}
function Ba(t, e) {
  const n = I(t, e == null ? void 0 : e.in), r = +he(n) - +Zo(n);
  return Math.round(r / Ci) + 1;
}
function Vi(t, e) {
  var u, d, h, m;
  const n = I(t, e == null ? void 0 : e.in), r = n.getFullYear(), i = we(), o = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((d = (u = e == null ? void 0 : e.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? i.firstWeekContainsDate ?? ((m = (h = i.locale) == null ? void 0 : h.options) == null ? void 0 : m.firstWeekContainsDate) ?? 1, s = Q((e == null ? void 0 : e.in) || t, 0);
  s.setFullYear(r + 1, 0, o), s.setHours(0, 0, 0, 0);
  const a = wt(s, e), c = Q((e == null ? void 0 : e.in) || t, 0);
  c.setFullYear(r, 0, o), c.setHours(0, 0, 0, 0);
  const l = wt(c, e);
  return +n >= +a ? r + 1 : +n >= +l ? r : r - 1;
}
function Ia(t, e) {
  var a, c, l, u;
  const n = we(), r = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((c = (a = e == null ? void 0 : e.locale) == null ? void 0 : a.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((u = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, i = Vi(t, e), o = Q((e == null ? void 0 : e.in) || t, 0);
  return o.setFullYear(i, 0, r), o.setHours(0, 0, 0, 0), wt(o, e);
}
function ja(t, e) {
  const n = I(t, e == null ? void 0 : e.in), r = +wt(n, e) - +Ia(n, e);
  return Math.round(r / Ci) + 1;
}
function A(t, e) {
  const n = t < 0 ? "-" : "", r = Math.abs(t).toString().padStart(e, "0");
  return n + r;
}
const at = {
  // Year
  y(t, e) {
    const n = t.getFullYear(), r = n > 0 ? n : 1 - n;
    return A(e === "yy" ? r % 100 : r, e.length);
  },
  // Month
  M(t, e) {
    const n = t.getMonth();
    return e === "M" ? String(n + 1) : A(n + 1, 2);
  },
  // Day of the month
  d(t, e) {
    return A(t.getDate(), e.length);
  },
  // AM or PM
  a(t, e) {
    const n = t.getHours() / 12 >= 1 ? "pm" : "am";
    switch (e) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(t, e) {
    return A(t.getHours() % 12 || 12, e.length);
  },
  // Hour [0-23]
  H(t, e) {
    return A(t.getHours(), e.length);
  },
  // Minute
  m(t, e) {
    return A(t.getMinutes(), e.length);
  },
  // Second
  s(t, e) {
    return A(t.getSeconds(), e.length);
  },
  // Fraction of second
  S(t, e) {
    const n = e.length, r = t.getMilliseconds(), i = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return A(i, e.length);
  }
}, kt = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, rr = {
  // Era
  G: function(t, e, n) {
    const r = t.getFullYear() > 0 ? 1 : 0;
    switch (e) {
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      case "GGGG":
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(t, e, n) {
    if (e === "yo") {
      const r = t.getFullYear(), i = r > 0 ? r : 1 - r;
      return n.ordinalNumber(i, { unit: "year" });
    }
    return at.y(t, e);
  },
  // Local week-numbering year
  Y: function(t, e, n, r) {
    const i = Vi(t, r), o = i > 0 ? i : 1 - i;
    if (e === "YY") {
      const s = o % 100;
      return A(s, 2);
    }
    return e === "Yo" ? n.ordinalNumber(o, { unit: "year" }) : A(o, e.length);
  },
  // ISO week-numbering year
  R: function(t, e) {
    const n = Ai(t);
    return A(n, e.length);
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
    const n = t.getFullYear();
    return A(n, e.length);
  },
  // Quarter
  Q: function(t, e, n) {
    const r = Math.ceil((t.getMonth() + 1) / 3);
    switch (e) {
      case "Q":
        return String(r);
      case "QQ":
        return A(r, 2);
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(t, e, n) {
    const r = Math.ceil((t.getMonth() + 1) / 3);
    switch (e) {
      case "q":
        return String(r);
      case "qq":
        return A(r, 2);
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(t, e, n) {
    const r = t.getMonth();
    switch (e) {
      case "M":
      case "MM":
        return at.M(t, e);
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(t, e, n) {
    const r = t.getMonth();
    switch (e) {
      case "L":
        return String(r + 1);
      case "LL":
        return A(r + 1, 2);
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(t, e, n, r) {
    const i = ja(t, r);
    return e === "wo" ? n.ordinalNumber(i, { unit: "week" }) : A(i, e.length);
  },
  // ISO week of year
  I: function(t, e, n) {
    const r = Ba(t);
    return e === "Io" ? n.ordinalNumber(r, { unit: "week" }) : A(r, e.length);
  },
  // Day of the month
  d: function(t, e, n) {
    return e === "do" ? n.ordinalNumber(t.getDate(), { unit: "date" }) : at.d(t, e);
  },
  // Day of year
  D: function(t, e, n) {
    const r = Fa(t);
    return e === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : A(r, e.length);
  },
  // Day of week
  E: function(t, e, n) {
    const r = t.getDay();
    switch (e) {
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(t, e, n, r) {
    const i = t.getDay(), o = (i - r.weekStartsOn + 8) % 7 || 7;
    switch (e) {
      case "e":
        return String(o);
      case "ee":
        return A(o, 2);
      case "eo":
        return n.ordinalNumber(o, { unit: "day" });
      case "eee":
        return n.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n.day(i, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n.day(i, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return n.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(t, e, n, r) {
    const i = t.getDay(), o = (i - r.weekStartsOn + 8) % 7 || 7;
    switch (e) {
      case "c":
        return String(o);
      case "cc":
        return A(o, e.length);
      case "co":
        return n.ordinalNumber(o, { unit: "day" });
      case "ccc":
        return n.day(i, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n.day(i, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n.day(i, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return n.day(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(t, e, n) {
    const r = t.getDay(), i = r === 0 ? 7 : r;
    switch (e) {
      case "i":
        return String(i);
      case "ii":
        return A(i, e.length);
      case "io":
        return n.ordinalNumber(i, { unit: "day" });
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(t, e, n) {
    const i = t.getHours() / 12 >= 1 ? "pm" : "am";
    switch (e) {
      case "a":
      case "aa":
        return n.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(t, e, n) {
    const r = t.getHours();
    let i;
    switch (r === 12 ? i = kt.noon : r === 0 ? i = kt.midnight : i = r / 12 >= 1 ? "pm" : "am", e) {
      case "b":
      case "bb":
        return n.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(t, e, n) {
    const r = t.getHours();
    let i;
    switch (r >= 17 ? i = kt.evening : r >= 12 ? i = kt.afternoon : r >= 4 ? i = kt.morning : i = kt.night, e) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(t, e, n) {
    if (e === "ho") {
      let r = t.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return at.h(t, e);
  },
  // Hour [0-23]
  H: function(t, e, n) {
    return e === "Ho" ? n.ordinalNumber(t.getHours(), { unit: "hour" }) : at.H(t, e);
  },
  // Hour [0-11]
  K: function(t, e, n) {
    const r = t.getHours() % 12;
    return e === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : A(r, e.length);
  },
  // Hour [1-24]
  k: function(t, e, n) {
    let r = t.getHours();
    return r === 0 && (r = 24), e === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : A(r, e.length);
  },
  // Minute
  m: function(t, e, n) {
    return e === "mo" ? n.ordinalNumber(t.getMinutes(), { unit: "minute" }) : at.m(t, e);
  },
  // Second
  s: function(t, e, n) {
    return e === "so" ? n.ordinalNumber(t.getSeconds(), { unit: "second" }) : at.s(t, e);
  },
  // Fraction of second
  S: function(t, e) {
    return at.S(t, e);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, e, n) {
    const r = t.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (e) {
      case "X":
        return sr(r);
      case "XXXX":
      case "XX":
        return ft(r);
      case "XXXXX":
      case "XXX":
      default:
        return ft(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, e, n) {
    const r = t.getTimezoneOffset();
    switch (e) {
      case "x":
        return sr(r);
      case "xxxx":
      case "xx":
        return ft(r);
      case "xxxxx":
      case "xxx":
      default:
        return ft(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, e, n) {
    const r = t.getTimezoneOffset();
    switch (e) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + ir(r, ":");
      case "OOOO":
      default:
        return "GMT" + ft(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, e, n) {
    const r = t.getTimezoneOffset();
    switch (e) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + ir(r, ":");
      case "zzzz":
      default:
        return "GMT" + ft(r, ":");
    }
  },
  // Seconds timestamp
  t: function(t, e, n) {
    const r = Math.trunc(+t / 1e3);
    return A(r, e.length);
  },
  // Milliseconds timestamp
  T: function(t, e, n) {
    return A(+t, e.length);
  }
};
function ir(t, e = "") {
  const n = t > 0 ? "-" : "+", r = Math.abs(t), i = Math.trunc(r / 60), o = r % 60;
  return o === 0 ? n + String(i) : n + String(i) + e + A(o, 2);
}
function sr(t, e) {
  return t % 60 === 0 ? (t > 0 ? "-" : "+") + A(Math.abs(t) / 60, 2) : ft(t, e);
}
function ft(t, e = "") {
  const n = t > 0 ? "-" : "+", r = Math.abs(t), i = A(Math.trunc(r / 60), 2), o = A(r % 60, 2);
  return n + i + e + o;
}
const or = (t, e) => {
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
}, Ei = (t, e) => {
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
}, Wa = (t, e) => {
  const n = t.match(/(P+)(p+)?/) || [], r = n[1], i = n[2];
  if (!i)
    return or(t, e);
  let o;
  switch (r) {
    case "P":
      o = e.dateTime({ width: "short" });
      break;
    case "PP":
      o = e.dateTime({ width: "medium" });
      break;
    case "PPP":
      o = e.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      o = e.dateTime({ width: "full" });
      break;
  }
  return o.replace("{{date}}", or(r, e)).replace("{{time}}", Ei(i, e));
}, $a = {
  p: Ei,
  P: Wa
}, Ya = /^D+$/, _a = /^Y+$/, Ua = ["D", "DD", "YY", "YYYY"];
function Ka(t) {
  return Ya.test(t);
}
function Ha(t) {
  return _a.test(t);
}
function za(t, e, n) {
  const r = Ga(t, e, n);
  if (console.warn(r), Ua.includes(t)) throw new RangeError(r);
}
function Ga(t, e, n) {
  const r = t[0] === "Y" ? "years" : "days of the month";
  return `Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const qa = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Xa = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Qa = /^'([^]*?)'?$/, Za = /''/g, Ja = /[a-zA-Z]/;
function ee(t, e, n) {
  var u, d, h, m;
  const r = we(), i = r.locale ?? Oa, o = r.firstWeekContainsDate ?? ((d = (u = r.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1, s = r.weekStartsOn ?? ((m = (h = r.locale) == null ? void 0 : h.options) == null ? void 0 : m.weekStartsOn) ?? 0, a = I(t, n == null ? void 0 : n.in);
  if (!ta(a))
    throw new RangeError("Invalid time value");
  let c = e.match(Xa).map((p) => {
    const g = p[0];
    if (g === "p" || g === "P") {
      const y = $a[g];
      return y(p, i.formatLong);
    }
    return p;
  }).join("").match(qa).map((p) => {
    if (p === "''")
      return { isToken: !1, value: "'" };
    const g = p[0];
    if (g === "'")
      return { isToken: !1, value: tc(p) };
    if (rr[g])
      return { isToken: !0, value: p };
    if (g.match(Ja))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + g + "`"
      );
    return { isToken: !1, value: p };
  });
  i.localize.preprocessor && (c = i.localize.preprocessor(a, c));
  const l = {
    firstWeekContainsDate: o,
    weekStartsOn: s,
    locale: i
  };
  return c.map((p) => {
    if (!p.isToken) return p.value;
    const g = p.value;
    (Ha(g) || Ka(g)) && za(g, e, String(t));
    const y = rr[g[0]];
    return y(a, g, i.localize, l);
  }).join("");
}
function tc(t) {
  const e = t.match(Qa);
  return e ? e[1].replace(Za, "'") : t;
}
function ec(t, e) {
  return +I(t) > +I(e);
}
function nc(t, e, n) {
  const [r, i] = mn(
    n == null ? void 0 : n.in,
    t,
    e
  );
  return r.getFullYear() === i.getFullYear() && r.getMonth() === i.getMonth();
}
function rc(t, e, n) {
  return Di(t, -1, n);
}
const pn = Et({});
function gn(t) {
  const e = nt(null);
  return e.current === null && (e.current = t()), e.current;
}
const yn = typeof window < "u", Ni = yn ? ho : G, ke = /* @__PURE__ */ Et(null);
function vn(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function xn(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
const rt = (t, e, n) => n > e ? e : n < t ? t : n;
let Nt = () => {
}, it = () => {
};
if (process.env.NODE_ENV !== "production") {
  const t = (e, n) => n ? `${e}. For more information and steps for solving, visit https://motion.dev/error/${n}` : e;
  Nt = (e, n, r) => {
    !e && typeof console < "u" && console.warn(t(n, r));
  }, it = (e, n, r) => {
    if (!e)
      throw new Error(t(n, r));
  };
}
const st = {}, Ri = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
function Li(t) {
  return typeof t == "object" && t !== null;
}
const Oi = (t) => /^0[^.\s]+$/u.test(t);
// @__NO_SIDE_EFFECTS__
function bn(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const z = /* @__NO_SIDE_EFFECTS__ */ (t) => t, ic = (t, e) => (n) => e(t(n)), Qt = (...t) => t.reduce(ic), Ut = /* @__NO_SIDE_EFFECTS__ */ (t, e, n) => {
  const r = e - t;
  return r === 0 ? 1 : (n - t) / r;
};
class wn {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return vn(this.subscriptions, e), () => xn(this.subscriptions, e);
  }
  notify(e, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1)
        this.subscriptions[0](e, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(e, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const X = /* @__NO_SIDE_EFFECTS__ */ (t) => t * 1e3, Z = /* @__NO_SIDE_EFFECTS__ */ (t) => t / 1e3;
function Fi(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const ar = /* @__PURE__ */ new Set();
function kn(t, e, n) {
  t || ar.has(e) || (console.warn(e), ar.add(e));
}
const Bi = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, sc = 1e-7, oc = 12;
function ac(t, e, n, r, i) {
  let o, s, a = 0;
  do
    s = e + (n - e) / 2, o = Bi(s, r, i) - t, o > 0 ? n = s : e = s;
  while (Math.abs(o) > sc && ++a < oc);
  return s;
}
function Zt(t, e, n, r) {
  if (t === e && n === r)
    return z;
  const i = (o) => ac(o, 0, 1, t, n);
  return (o) => o === 0 || o === 1 ? o : Bi(i(o), e, r);
}
const Ii = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, ji = (t) => (e) => 1 - t(1 - e), Wi = /* @__PURE__ */ Zt(0.33, 1.53, 0.69, 0.99), Tn = /* @__PURE__ */ ji(Wi), $i = /* @__PURE__ */ Ii(Tn), Yi = (t) => (t *= 2) < 1 ? 0.5 * Tn(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), Pn = (t) => 1 - Math.sin(Math.acos(t)), _i = ji(Pn), Ui = Ii(Pn), cc = /* @__PURE__ */ Zt(0.42, 0, 1, 1), lc = /* @__PURE__ */ Zt(0, 0, 0.58, 1), Ki = /* @__PURE__ */ Zt(0.42, 0, 0.58, 1), uc = (t) => Array.isArray(t) && typeof t[0] != "number", Hi = (t) => Array.isArray(t) && typeof t[0] == "number", cr = {
  linear: z,
  easeIn: cc,
  easeInOut: Ki,
  easeOut: lc,
  circIn: Pn,
  circInOut: Ui,
  circOut: _i,
  backIn: Tn,
  backInOut: $i,
  backOut: Wi,
  anticipate: Yi
}, dc = (t) => typeof t == "string", lr = (t) => {
  if (Hi(t)) {
    it(t.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [e, n, r, i] = t;
    return Zt(e, n, r, i);
  } else if (dc(t))
    return it(cr[t] !== void 0, `Invalid easing type '${t}'`), cr[t];
  return t;
}, ne = [
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
], ur = {
  value: null
};
function hc(t, e) {
  let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), i = !1, o = !1;
  const s = /* @__PURE__ */ new WeakSet();
  let a = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, c = 0;
  function l(d) {
    s.has(d) && (u.schedule(d), t()), c++, d(a);
  }
  const u = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (d, h = !1, m = !1) => {
      const g = m && i ? n : r;
      return h && s.add(d), g.has(d) || g.add(d), d;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (d) => {
      r.delete(d), s.delete(d);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (d) => {
      if (a = d, i) {
        o = !0;
        return;
      }
      i = !0, [n, r] = [r, n], n.forEach(l), e && ur.value && ur.value.frameloop[e].push(c), c = 0, n.clear(), i = !1, o && (o = !1, u.process(d));
    }
  };
  return u;
}
const fc = 40;
function zi(t, e) {
  let n = !1, r = !0;
  const i = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, o = () => n = !0, s = ne.reduce((b, S) => (b[S] = hc(o, e ? S : void 0), b), {}), { setup: a, read: c, resolveKeyframes: l, preUpdate: u, update: d, preRender: h, render: m, postRender: p } = s, g = () => {
    const b = st.useManualTiming ? i.timestamp : performance.now();
    n = !1, st.useManualTiming || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(b - i.timestamp, fc), 1)), i.timestamp = b, i.isProcessing = !0, a.process(i), c.process(i), l.process(i), u.process(i), d.process(i), h.process(i), m.process(i), p.process(i), i.isProcessing = !1, n && e && (r = !1, t(g));
  }, y = () => {
    n = !0, r = !0, i.isProcessing || t(g);
  };
  return { schedule: ne.reduce((b, S) => {
    const w = s[S];
    return b[S] = (M, C = !1, P = !1) => (n || y(), w.schedule(M, C, P)), b;
  }, {}), cancel: (b) => {
    for (let S = 0; S < ne.length; S++)
      s[ne[S]].cancel(b);
  }, state: i, steps: s };
}
const { schedule: V, cancel: lt, state: F, steps: Ve } = /* @__PURE__ */ zi(typeof requestAnimationFrame < "u" ? requestAnimationFrame : z, !0);
let oe;
function mc() {
  oe = void 0;
}
const U = {
  now: () => (oe === void 0 && U.set(F.isProcessing || st.useManualTiming ? F.timestamp : performance.now()), oe),
  set: (t) => {
    oe = t, queueMicrotask(mc);
  }
}, Gi = (t) => (e) => typeof e == "string" && e.startsWith(t), Sn = /* @__PURE__ */ Gi("--"), pc = /* @__PURE__ */ Gi("var(--"), Mn = (t) => pc(t) ? gc.test(t.split("/*")[0].trim()) : !1, gc = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Rt = {
  test: (t) => typeof t == "number",
  parse: parseFloat,
  transform: (t) => t
}, Kt = {
  ...Rt,
  transform: (t) => rt(0, 1, t)
}, re = {
  ...Rt,
  default: 1
}, Wt = (t) => Math.round(t * 1e5) / 1e5, Cn = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function yc(t) {
  return t == null;
}
const vc = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Dn = (t, e) => (n) => !!(typeof n == "string" && vc.test(n) && n.startsWith(t) || e && !yc(n) && Object.prototype.hasOwnProperty.call(n, e)), qi = (t, e, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [i, o, s, a] = r.match(Cn);
  return {
    [t]: parseFloat(i),
    [e]: parseFloat(o),
    [n]: parseFloat(s),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, xc = (t) => rt(0, 255, t), Ee = {
  ...Rt,
  transform: (t) => Math.round(xc(t))
}, gt = {
  test: /* @__PURE__ */ Dn("rgb", "red"),
  parse: /* @__PURE__ */ qi("red", "green", "blue"),
  transform: ({ red: t, green: e, blue: n, alpha: r = 1 }) => "rgba(" + Ee.transform(t) + ", " + Ee.transform(e) + ", " + Ee.transform(n) + ", " + Wt(Kt.transform(r)) + ")"
};
function bc(t) {
  let e = "", n = "", r = "", i = "";
  return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), r = t.substring(5, 7), i = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), r = t.substring(3, 4), i = t.substring(4, 5), e += e, n += n, r += r, i += i), {
    red: parseInt(e, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  };
}
const _e = {
  test: /* @__PURE__ */ Dn("#"),
  parse: bc,
  transform: gt.transform
}, Jt = /* @__NO_SIDE_EFFECTS__ */ (t) => ({
  test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
  parse: parseFloat,
  transform: (e) => `${e}${t}`
}), ct = /* @__PURE__ */ Jt("deg"), J = /* @__PURE__ */ Jt("%"), T = /* @__PURE__ */ Jt("px"), wc = /* @__PURE__ */ Jt("vh"), kc = /* @__PURE__ */ Jt("vw"), dr = {
  ...J,
  parse: (t) => J.parse(t) / 100,
  transform: (t) => J.transform(t * 100)
}, Tt = {
  test: /* @__PURE__ */ Dn("hsl", "hue"),
  parse: /* @__PURE__ */ qi("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(t) + ", " + J.transform(Wt(e)) + ", " + J.transform(Wt(n)) + ", " + Wt(Kt.transform(r)) + ")"
}, L = {
  test: (t) => gt.test(t) || _e.test(t) || Tt.test(t),
  parse: (t) => gt.test(t) ? gt.parse(t) : Tt.test(t) ? Tt.parse(t) : _e.parse(t),
  transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? gt.transform(t) : Tt.transform(t),
  getAnimatableNone: (t) => {
    const e = L.parse(t);
    return e.alpha = 0, L.transform(e);
  }
}, Tc = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Pc(t) {
  var e, n;
  return isNaN(t) && typeof t == "string" && (((e = t.match(Cn)) == null ? void 0 : e.length) || 0) + (((n = t.match(Tc)) == null ? void 0 : n.length) || 0) > 0;
}
const Xi = "number", Qi = "color", Sc = "var", Mc = "var(", hr = "${}", Cc = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Ht(t) {
  const e = t.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, i = [];
  let o = 0;
  const a = e.replace(Cc, (c) => (L.test(c) ? (r.color.push(o), i.push(Qi), n.push(L.parse(c))) : c.startsWith(Mc) ? (r.var.push(o), i.push(Sc), n.push(c)) : (r.number.push(o), i.push(Xi), n.push(parseFloat(c))), ++o, hr)).split(hr);
  return { values: n, split: a, indexes: r, types: i };
}
function Zi(t) {
  return Ht(t).values;
}
function Ji(t) {
  const { split: e, types: n } = Ht(t), r = e.length;
  return (i) => {
    let o = "";
    for (let s = 0; s < r; s++)
      if (o += e[s], i[s] !== void 0) {
        const a = n[s];
        a === Xi ? o += Wt(i[s]) : a === Qi ? o += L.transform(i[s]) : o += i[s];
      }
    return o;
  };
}
const Dc = (t) => typeof t == "number" ? 0 : L.test(t) ? L.getAnimatableNone(t) : t;
function Ac(t) {
  const e = Zi(t);
  return Ji(t)(e.map(Dc));
}
const ut = {
  test: Pc,
  parse: Zi,
  createTransformer: Ji,
  getAnimatableNone: Ac
};
function Ne(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function Vc({ hue: t, saturation: e, lightness: n, alpha: r }) {
  t /= 360, e /= 100, n /= 100;
  let i = 0, o = 0, s = 0;
  if (!e)
    i = o = s = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e, c = 2 * n - a;
    i = Ne(c, a, t + 1 / 3), o = Ne(c, a, t), s = Ne(c, a, t - 1 / 3);
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r
  };
}
function me(t, e) {
  return (n) => n > 0 ? e : t;
}
const N = (t, e, n) => t + (e - t) * n, Re = (t, e, n) => {
  const r = t * t, i = n * (e * e - r) + r;
  return i < 0 ? 0 : Math.sqrt(i);
}, Ec = [_e, gt, Tt], Nc = (t) => Ec.find((e) => e.test(t));
function fr(t) {
  const e = Nc(t);
  if (Nt(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`), !e)
    return !1;
  let n = e.parse(t);
  return e === Tt && (n = Vc(n)), n;
}
const mr = (t, e) => {
  const n = fr(t), r = fr(e);
  if (!n || !r)
    return me(t, e);
  const i = { ...n };
  return (o) => (i.red = Re(n.red, r.red, o), i.green = Re(n.green, r.green, o), i.blue = Re(n.blue, r.blue, o), i.alpha = N(n.alpha, r.alpha, o), gt.transform(i));
}, Ue = /* @__PURE__ */ new Set(["none", "hidden"]);
function Rc(t, e) {
  return Ue.has(t) ? (n) => n <= 0 ? t : e : (n) => n >= 1 ? e : t;
}
function Lc(t, e) {
  return (n) => N(t, e, n);
}
function An(t) {
  return typeof t == "number" ? Lc : typeof t == "string" ? Mn(t) ? me : L.test(t) ? mr : Bc : Array.isArray(t) ? ts : typeof t == "object" ? L.test(t) ? mr : Oc : me;
}
function ts(t, e) {
  const n = [...t], r = n.length, i = t.map((o, s) => An(o)(o, e[s]));
  return (o) => {
    for (let s = 0; s < r; s++)
      n[s] = i[s](o);
    return n;
  };
}
function Oc(t, e) {
  const n = { ...t, ...e }, r = {};
  for (const i in n)
    t[i] !== void 0 && e[i] !== void 0 && (r[i] = An(t[i])(t[i], e[i]));
  return (i) => {
    for (const o in r)
      n[o] = r[o](i);
    return n;
  };
}
function Fc(t, e) {
  const n = [], r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < e.values.length; i++) {
    const o = e.types[i], s = t.indexes[o][r[o]], a = t.values[s] ?? 0;
    n[i] = a, r[o]++;
  }
  return n;
}
const Bc = (t, e) => {
  const n = ut.createTransformer(e), r = Ht(t), i = Ht(e);
  return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? Ue.has(t) && !i.values.length || Ue.has(e) && !r.values.length ? Rc(t, e) : Qt(ts(Fc(r, i), i.values), n) : (Nt(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), me(t, e));
};
function es(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number" ? N(t, e, n) : An(t)(t, e);
}
const Ic = (t) => {
  const e = ({ timestamp: n }) => t(n);
  return {
    start: (n = !0) => V.update(e, n),
    stop: () => lt(e),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => F.isProcessing ? F.timestamp : U.now()
  };
}, ns = (t, e, n = 10) => {
  let r = "";
  const i = Math.max(Math.round(e / n), 2);
  for (let o = 0; o < i; o++)
    r += Math.round(t(o / (i - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
}, pe = 2e4;
function Vn(t) {
  let e = 0;
  const n = 50;
  let r = t.next(e);
  for (; !r.done && e < pe; )
    e += n, r = t.next(e);
  return e >= pe ? 1 / 0 : e;
}
function jc(t, e = 100, n) {
  const r = n({ ...t, keyframes: [0, e] }), i = Math.min(Vn(r), pe);
  return {
    type: "keyframes",
    ease: (o) => r.next(i * o).value / e,
    duration: /* @__PURE__ */ Z(i)
  };
}
const Wc = 5;
function rs(t, e, n) {
  const r = Math.max(e - Wc, 0);
  return Fi(n - t(r), e - r);
}
const E = {
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
}, Le = 1e-3;
function $c({ duration: t = E.duration, bounce: e = E.bounce, velocity: n = E.velocity, mass: r = E.mass }) {
  let i, o;
  Nt(t <= /* @__PURE__ */ X(E.maxDuration), "Spring duration must be 10 seconds or less");
  let s = 1 - e;
  s = rt(E.minDamping, E.maxDamping, s), t = rt(E.minDuration, E.maxDuration, /* @__PURE__ */ Z(t)), s < 1 ? (i = (l) => {
    const u = l * s, d = u * t, h = u - n, m = Ke(l, s), p = Math.exp(-d);
    return Le - h / m * p;
  }, o = (l) => {
    const d = l * s * t, h = d * n + n, m = Math.pow(s, 2) * Math.pow(l, 2) * t, p = Math.exp(-d), g = Ke(Math.pow(l, 2), s);
    return (-i(l) + Le > 0 ? -1 : 1) * ((h - m) * p) / g;
  }) : (i = (l) => {
    const u = Math.exp(-l * t), d = (l - n) * t + 1;
    return -Le + u * d;
  }, o = (l) => {
    const u = Math.exp(-l * t), d = (n - l) * (t * t);
    return u * d;
  });
  const a = 5 / t, c = _c(i, o, a);
  if (t = /* @__PURE__ */ X(t), isNaN(c))
    return {
      stiffness: E.stiffness,
      damping: E.damping,
      duration: t
    };
  {
    const l = Math.pow(c, 2) * r;
    return {
      stiffness: l,
      damping: s * 2 * Math.sqrt(r * l),
      duration: t
    };
  }
}
const Yc = 12;
function _c(t, e, n) {
  let r = n;
  for (let i = 1; i < Yc; i++)
    r = r - t(r) / e(r);
  return r;
}
function Ke(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const Uc = ["duration", "bounce"], Kc = ["stiffness", "damping", "mass"];
function pr(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function Hc(t) {
  let e = {
    velocity: E.velocity,
    stiffness: E.stiffness,
    damping: E.damping,
    mass: E.mass,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!pr(t, Kc) && pr(t, Uc))
    if (t.visualDuration) {
      const n = t.visualDuration, r = 2 * Math.PI / (n * 1.2), i = r * r, o = 2 * rt(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(i);
      e = {
        ...e,
        mass: E.mass,
        stiffness: i,
        damping: o
      };
    } else {
      const n = $c(t);
      e = {
        ...e,
        ...n,
        mass: E.mass
      }, e.isResolvedFromDuration = !0;
    }
  return e;
}
function ge(t = E.visualDuration, e = E.bounce) {
  const n = typeof t != "object" ? {
    visualDuration: t,
    keyframes: [0, 1],
    bounce: e
  } : t;
  let { restSpeed: r, restDelta: i } = n;
  const o = n.keyframes[0], s = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: o }, { stiffness: c, damping: l, mass: u, duration: d, velocity: h, isResolvedFromDuration: m } = Hc({
    ...n,
    velocity: -/* @__PURE__ */ Z(n.velocity || 0)
  }), p = h || 0, g = l / (2 * Math.sqrt(c * u)), y = s - o, v = /* @__PURE__ */ Z(Math.sqrt(c / u)), x = Math.abs(y) < 5;
  r || (r = x ? E.restSpeed.granular : E.restSpeed.default), i || (i = x ? E.restDelta.granular : E.restDelta.default);
  let b;
  if (g < 1) {
    const w = Ke(v, g);
    b = (M) => {
      const C = Math.exp(-g * v * M);
      return s - C * ((p + g * v * y) / w * Math.sin(w * M) + y * Math.cos(w * M));
    };
  } else if (g === 1)
    b = (w) => s - Math.exp(-v * w) * (y + (p + v * y) * w);
  else {
    const w = v * Math.sqrt(g * g - 1);
    b = (M) => {
      const C = Math.exp(-g * v * M), P = Math.min(w * M, 300);
      return s - C * ((p + g * v * y) * Math.sinh(P) + w * y * Math.cosh(P)) / w;
    };
  }
  const S = {
    calculatedDuration: m && d || null,
    next: (w) => {
      const M = b(w);
      if (m)
        a.done = w >= d;
      else {
        let C = w === 0 ? p : 0;
        g < 1 && (C = w === 0 ? /* @__PURE__ */ X(p) : rs(b, w, M));
        const P = Math.abs(C) <= r, O = Math.abs(s - M) <= i;
        a.done = P && O;
      }
      return a.value = a.done ? s : M, a;
    },
    toString: () => {
      const w = Math.min(Vn(S), pe), M = ns((C) => S.next(w * C).value, w, 30);
      return w + "ms " + M;
    },
    toTransition: () => {
    }
  };
  return S;
}
ge.applyToOptions = (t) => {
  const e = jc(t, 100, ge);
  return t.ease = e.ease, t.duration = /* @__PURE__ */ X(e.duration), t.type = "keyframes", t;
};
function He({ keyframes: t, velocity: e = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: o = 500, modifyTarget: s, min: a, max: c, restDelta: l = 0.5, restSpeed: u }) {
  const d = t[0], h = {
    done: !1,
    value: d
  }, m = (P) => a !== void 0 && P < a || c !== void 0 && P > c, p = (P) => a === void 0 ? c : c === void 0 || Math.abs(a - P) < Math.abs(c - P) ? a : c;
  let g = n * e;
  const y = d + g, v = s === void 0 ? y : s(y);
  v !== y && (g = v - d);
  const x = (P) => -g * Math.exp(-P / r), b = (P) => v + x(P), S = (P) => {
    const O = x(P), $ = b(P);
    h.done = Math.abs(O) <= l, h.value = h.done ? v : $;
  };
  let w, M;
  const C = (P) => {
    m(h.value) && (w = P, M = ge({
      keyframes: [h.value, p(h.value)],
      velocity: rs(b, P, h.value),
      // TODO: This should be passing * 1000
      damping: i,
      stiffness: o,
      restDelta: l,
      restSpeed: u
    }));
  };
  return C(0), {
    calculatedDuration: null,
    next: (P) => {
      let O = !1;
      return !M && w === void 0 && (O = !0, S(P), C(P)), w !== void 0 && P >= w ? M.next(P - w) : (!O && S(P), h);
    }
  };
}
function zc(t, e, n) {
  const r = [], i = n || st.mix || es, o = t.length - 1;
  for (let s = 0; s < o; s++) {
    let a = i(t[s], t[s + 1]);
    if (e) {
      const c = Array.isArray(e) ? e[s] || z : e;
      a = Qt(c, a);
    }
    r.push(a);
  }
  return r;
}
function Gc(t, e, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = t.length;
  if (it(o === e.length, "Both input and output ranges must be the same length"), o === 1)
    return () => e[0];
  if (o === 2 && e[0] === e[1])
    return () => e[1];
  const s = t[0] === t[1];
  t[0] > t[o - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const a = zc(e, r, i), c = a.length, l = (u) => {
    if (s && u < t[0])
      return e[0];
    let d = 0;
    if (c > 1)
      for (; d < t.length - 2 && !(u < t[d + 1]); d++)
        ;
    const h = /* @__PURE__ */ Ut(t[d], t[d + 1], u);
    return a[d](h);
  };
  return n ? (u) => l(rt(t[0], t[o - 1], u)) : l;
}
function qc(t, e) {
  const n = t[t.length - 1];
  for (let r = 1; r <= e; r++) {
    const i = /* @__PURE__ */ Ut(0, e, r);
    t.push(N(n, 1, i));
  }
}
function Xc(t) {
  const e = [0];
  return qc(e, t.length - 1), e;
}
function Qc(t, e) {
  return t.map((n) => n * e);
}
function Zc(t, e) {
  return t.map(() => e || Ki).splice(0, t.length - 1);
}
function Pt({ duration: t = 300, keyframes: e, times: n, ease: r = "easeInOut" }) {
  const i = uc(r) ? r.map(lr) : lr(r), o = {
    done: !1,
    value: e[0]
  }, s = Qc(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === e.length ? n : Xc(e),
    t
  ), a = Gc(s, e, {
    ease: Array.isArray(i) ? i : Zc(e, i)
  });
  return {
    calculatedDuration: t,
    next: (c) => (o.value = a(c), o.done = c >= t, o)
  };
}
const Jc = (t) => t !== null;
function En(t, { repeat: e, repeatType: n = "loop" }, r, i = 1) {
  const o = t.filter(Jc), a = i < 0 || e && n !== "loop" && e % 2 === 1 ? 0 : o.length - 1;
  return !a || r === void 0 ? o[a] : r;
}
const tl = {
  decay: He,
  inertia: He,
  tween: Pt,
  keyframes: Pt,
  spring: ge
};
function is(t) {
  typeof t.type == "string" && (t.type = tl[t.type]);
}
class Nn {
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
  then(e, n) {
    return this.finished.then(e, n);
  }
}
const el = (t) => t / 100;
class Rn extends Nn {
  constructor(e) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      var r, i;
      const { motionValue: n } = this.options;
      n && n.updatedAt !== U.now() && this.tick(U.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), (i = (r = this.options).onStop) == null || i.call(r));
    }, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: e } = this;
    is(e);
    const { type: n = Pt, repeat: r = 0, repeatDelay: i = 0, repeatType: o, velocity: s = 0 } = e;
    let { keyframes: a } = e;
    const c = n || Pt;
    process.env.NODE_ENV !== "production" && c !== Pt && it(a.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${a}`, "spring-two-frames"), c !== Pt && typeof a[0] != "number" && (this.mixKeyframes = Qt(el, es(a[0], a[1])), a = [0, 100]);
    const l = c({ ...e, keyframes: a });
    o === "mirror" && (this.mirroredGenerator = c({
      ...e,
      keyframes: [...a].reverse(),
      velocity: -s
    })), l.calculatedDuration === null && (l.calculatedDuration = Vn(l));
    const { calculatedDuration: u } = l;
    this.calculatedDuration = u, this.resolvedDuration = u + i, this.totalDuration = this.resolvedDuration * (r + 1) - i, this.generator = l;
  }
  updateTime(e) {
    const n = Math.round(e - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n;
  }
  tick(e, n = !1) {
    const { generator: r, totalDuration: i, mixKeyframes: o, mirroredGenerator: s, resolvedDuration: a, calculatedDuration: c } = this;
    if (this.startTime === null)
      return r.next(0);
    const { delay: l = 0, keyframes: u, repeat: d, repeatType: h, repeatDelay: m, type: p, onUpdate: g, finalKeyframe: y } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - i / this.speed, this.startTime)), n ? this.currentTime = e : this.updateTime(e);
    const v = this.currentTime - l * (this.playbackSpeed >= 0 ? 1 : -1), x = this.playbackSpeed >= 0 ? v < 0 : v > i;
    this.currentTime = Math.max(v, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = i);
    let b = this.currentTime, S = r;
    if (d) {
      const P = Math.min(this.currentTime, i) / a;
      let O = Math.floor(P), $ = P % 1;
      !$ && P >= 1 && ($ = 1), $ === 1 && O--, O = Math.min(O, d + 1), !!(O % 2) && (h === "reverse" ? ($ = 1 - $, m && ($ -= m / a)) : h === "mirror" && (S = s)), b = rt(0, 1, $) * a;
    }
    const w = x ? { done: !1, value: u[0] } : S.next(b);
    o && (w.value = o(w.value));
    let { done: M } = w;
    !x && c !== null && (M = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
    const C = this.holdTime === null && (this.state === "finished" || this.state === "running" && M);
    return C && p !== He && (w.value = En(u, this.options, y, this.speed)), g && g(w.value), C && this.finish(), w;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(e, n) {
    return this.finished.then(e, n);
  }
  get duration() {
    return /* @__PURE__ */ Z(this.calculatedDuration);
  }
  get time() {
    return /* @__PURE__ */ Z(this.currentTime);
  }
  set time(e) {
    var n;
    e = /* @__PURE__ */ X(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), (n = this.driver) == null || n.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    this.updateTime(U.now());
    const n = this.playbackSpeed !== e;
    this.playbackSpeed = e, n && (this.time = /* @__PURE__ */ Z(this.currentTime));
  }
  play() {
    var i, o;
    if (this.isStopped)
      return;
    const { driver: e = Ic, startTime: n } = this.options;
    this.driver || (this.driver = e((s) => this.tick(s))), (o = (i = this.options).onPlay) == null || o.call(i);
    const r = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = n ?? r), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(U.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    var e, n;
    this.notifyFinished(), this.teardown(), this.state = "finished", (n = (e = this.options).onComplete) == null || n.call(e);
  }
  cancel() {
    var e, n;
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), (n = (e = this.options).onCancel) == null || n.call(e);
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
    var n;
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), (n = this.driver) == null || n.stop(), e.observe(this);
  }
}
function nl(t) {
  for (let e = 1; e < t.length; e++)
    t[e] ?? (t[e] = t[e - 1]);
}
const yt = (t) => t * 180 / Math.PI, ze = (t) => {
  const e = yt(Math.atan2(t[1], t[0]));
  return Ge(e);
}, rl = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
  rotate: ze,
  rotateZ: ze,
  skewX: (t) => yt(Math.atan(t[1])),
  skewY: (t) => yt(Math.atan(t[2])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2
}, Ge = (t) => (t = t % 360, t < 0 && (t += 360), t), gr = ze, yr = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]), vr = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]), il = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: yr,
  scaleY: vr,
  scale: (t) => (yr(t) + vr(t)) / 2,
  rotateX: (t) => Ge(yt(Math.atan2(t[6], t[5]))),
  rotateY: (t) => Ge(yt(Math.atan2(-t[2], t[0]))),
  rotateZ: gr,
  rotate: gr,
  skewX: (t) => yt(Math.atan(t[4])),
  skewY: (t) => yt(Math.atan(t[1])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2
};
function qe(t) {
  return t.includes("scale") ? 1 : 0;
}
function Xe(t, e) {
  if (!t || t === "none")
    return qe(e);
  const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, i;
  if (n)
    r = il, i = n;
  else {
    const a = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    r = rl, i = a;
  }
  if (!i)
    return qe(e);
  const o = r[e], s = i[1].split(",").map(ol);
  return typeof o == "function" ? o(s) : s[o];
}
const sl = (t, e) => {
  const { transform: n = "none" } = getComputedStyle(t);
  return Xe(n, e);
};
function ol(t) {
  return parseFloat(t.trim());
}
const Lt = [
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
], Ot = new Set(Lt), xr = (t) => t === Rt || t === T, al = /* @__PURE__ */ new Set(["x", "y", "z"]), cl = Lt.filter((t) => !al.has(t));
function ll(t) {
  const e = [];
  return cl.forEach((n) => {
    const r = t.getValue(n);
    r !== void 0 && (e.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), e;
}
const vt = {
  // Dimensions
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  // Transform
  x: (t, { transform: e }) => Xe(e, "x"),
  y: (t, { transform: e }) => Xe(e, "y")
};
vt.translateX = vt.x;
vt.translateY = vt.y;
const xt = /* @__PURE__ */ new Set();
let Qe = !1, Ze = !1, Je = !1;
function ss() {
  if (Ze) {
    const t = Array.from(xt).filter((r) => r.needsMeasurement), e = new Set(t.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    e.forEach((r) => {
      const i = ll(r);
      i.length && (n.set(r, i), r.render());
    }), t.forEach((r) => r.measureInitialState()), e.forEach((r) => {
      r.render();
      const i = n.get(r);
      i && i.forEach(([o, s]) => {
        var a;
        (a = r.getValue(o)) == null || a.set(s);
      });
    }), t.forEach((r) => r.measureEndState()), t.forEach((r) => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
    });
  }
  Ze = !1, Qe = !1, xt.forEach((t) => t.complete(Je)), xt.clear();
}
function os() {
  xt.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (Ze = !0);
  });
}
function ul() {
  Je = !0, os(), ss(), Je = !1;
}
class Ln {
  constructor(e, n, r, i, o, s = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = n, this.name = r, this.motionValue = i, this.element = o, this.isAsync = s;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (xt.add(this), Qe || (Qe = !0, V.read(os), V.resolveKeyframes(ss))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, name: n, element: r, motionValue: i } = this;
    if (e[0] === null) {
      const o = i == null ? void 0 : i.get(), s = e[e.length - 1];
      if (o !== void 0)
        e[0] = o;
      else if (r && n) {
        const a = r.readValue(n, s);
        a != null && (e[0] = a);
      }
      e[0] === void 0 && (e[0] = s), i && o === void 0 && i.set(e[0]);
    }
    nl(e);
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
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), xt.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (xt.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const dl = (t) => t.startsWith("--");
function hl(t, e, n) {
  dl(e) ? t.style.setProperty(e, n) : t.style[e] = n;
}
const fl = /* @__PURE__ */ bn(() => window.ScrollTimeline !== void 0), ml = {};
function pl(t, e) {
  const n = /* @__PURE__ */ bn(t);
  return () => ml[e] ?? n();
}
const as = /* @__PURE__ */ pl(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), jt = ([t, e, n, r]) => `cubic-bezier(${t}, ${e}, ${n}, ${r})`, br = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ jt([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ jt([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ jt([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ jt([0.33, 1.53, 0.69, 0.99])
};
function cs(t, e) {
  if (t)
    return typeof t == "function" ? as() ? ns(t, e) : "ease-out" : Hi(t) ? jt(t) : Array.isArray(t) ? t.map((n) => cs(n, e) || br.easeOut) : br[t];
}
function gl(t, e, n, { delay: r = 0, duration: i = 300, repeat: o = 0, repeatType: s = "loop", ease: a = "easeOut", times: c } = {}, l = void 0) {
  const u = {
    [e]: n
  };
  c && (u.offset = c);
  const d = cs(a, i);
  Array.isArray(d) && (u.easing = d);
  const h = {
    delay: r,
    duration: i,
    easing: Array.isArray(d) ? "linear" : d,
    fill: "both",
    iterations: o + 1,
    direction: s === "reverse" ? "alternate" : "normal"
  };
  return l && (h.pseudoElement = l), t.animate(u, h);
}
function ls(t) {
  return typeof t == "function" && "applyToOptions" in t;
}
function yl({ type: t, ...e }) {
  return ls(t) && as() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e);
}
class vl extends Nn {
  constructor(e) {
    if (super(), this.finishedTime = null, this.isStopped = !1, !e)
      return;
    const { element: n, name: r, keyframes: i, pseudoElement: o, allowFlatten: s = !1, finalKeyframe: a, onComplete: c } = e;
    this.isPseudoElement = !!o, this.allowFlatten = s, this.options = e, it(typeof e.type != "string", `animateMini doesn't support "type" as a string. Did you mean to import { spring } from "motion"?`);
    const l = yl(e);
    this.animation = gl(n, r, i, l, o), l.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !o) {
        const u = En(i, this.options, a, this.speed);
        this.updateMotionValue ? this.updateMotionValue(u) : hl(n, r, u), this.animation.cancel();
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
    var e, n;
    (n = (e = this.animation).finish) == null || n.call(e);
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
    var e, n;
    this.isPseudoElement || (n = (e = this.animation).commitStyles) == null || n.call(e);
  }
  get duration() {
    var n, r;
    const e = ((r = (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) == null ? void 0 : r.call(n).duration) || 0;
    return /* @__PURE__ */ Z(Number(e));
  }
  get time() {
    return /* @__PURE__ */ Z(Number(this.animation.currentTime) || 0);
  }
  set time(e) {
    this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ X(e);
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
  attachTimeline({ timeline: e, observe: n }) {
    var r;
    return this.allowFlatten && ((r = this.animation.effect) == null || r.updateTiming({ easing: "linear" })), this.animation.onfinish = null, e && fl() ? (this.animation.timeline = e, z) : n(this);
  }
}
const us = {
  anticipate: Yi,
  backInOut: $i,
  circInOut: Ui
};
function xl(t) {
  return t in us;
}
function bl(t) {
  typeof t.ease == "string" && xl(t.ease) && (t.ease = us[t.ease]);
}
const wr = 10;
class wl extends vl {
  constructor(e) {
    bl(e), is(e), super(e), e.startTime && (this.startTime = e.startTime), this.options = e;
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
    const { motionValue: n, onUpdate: r, onComplete: i, element: o, ...s } = this.options;
    if (!n)
      return;
    if (e !== void 0) {
      n.set(e);
      return;
    }
    const a = new Rn({
      ...s,
      autoplay: !1
    }), c = /* @__PURE__ */ X(this.finishedTime ?? this.time);
    n.setWithVelocity(a.sample(c - wr).value, a.sample(c).value, wr), a.stop();
  }
}
const kr = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(ut.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url("));
function kl(t) {
  const e = t[0];
  if (t.length === 1)
    return !0;
  for (let n = 0; n < t.length; n++)
    if (t[n] !== e)
      return !0;
}
function Tl(t, e, n, r) {
  const i = t[0];
  if (i === null)
    return !1;
  if (e === "display" || e === "visibility")
    return !0;
  const o = t[t.length - 1], s = kr(i, e), a = kr(o, e);
  return Nt(s === a, `You are trying to animate ${e} from "${i}" to "${o}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${o} via the \`style\` property.`), !s || !a ? !1 : kl(t) || (n === "spring" || ls(n)) && r;
}
function On(t) {
  return Li(t) && "offsetHeight" in t;
}
const Pl = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Could be re-enabled now we have support for linear() easing
  // "background-color"
]), Sl = /* @__PURE__ */ bn(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Ml(t) {
  var l;
  const { motionValue: e, name: n, repeatDelay: r, repeatType: i, damping: o, type: s } = t;
  if (!On((l = e == null ? void 0 : e.owner) == null ? void 0 : l.current))
    return !1;
  const { onUpdate: a, transformTemplate: c } = e.owner.getProps();
  return Sl() && n && Pl.has(n) && (n !== "transform" || !c) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !a && !r && i !== "mirror" && o !== 0 && s !== "inertia";
}
const Cl = 40;
class Dl extends Nn {
  constructor({ autoplay: e = !0, delay: n = 0, type: r = "keyframes", repeat: i = 0, repeatDelay: o = 0, repeatType: s = "loop", keyframes: a, name: c, motionValue: l, element: u, ...d }) {
    var p;
    super(), this.stop = () => {
      var g, y;
      this._animation && (this._animation.stop(), (g = this.stopTimeline) == null || g.call(this)), (y = this.keyframeResolver) == null || y.cancel();
    }, this.createdAt = U.now();
    const h = {
      autoplay: e,
      delay: n,
      type: r,
      repeat: i,
      repeatDelay: o,
      repeatType: s,
      name: c,
      motionValue: l,
      element: u,
      ...d
    }, m = (u == null ? void 0 : u.KeyframeResolver) || Ln;
    this.keyframeResolver = new m(a, (g, y, v) => this.onKeyframesResolved(g, y, h, !v), c, l, u), (p = this.keyframeResolver) == null || p.scheduleResolve();
  }
  onKeyframesResolved(e, n, r, i) {
    this.keyframeResolver = void 0;
    const { name: o, type: s, velocity: a, delay: c, isHandoff: l, onUpdate: u } = r;
    this.resolvedAt = U.now(), Tl(e, o, s, a) || ((st.instantAnimations || !c) && (u == null || u(En(e, r, n))), e[0] = e[e.length - 1], r.duration = 0, r.repeat = 0);
    const h = {
      startTime: i ? this.resolvedAt ? this.resolvedAt - this.createdAt > Cl ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: n,
      ...r,
      keyframes: e
    }, m = !l && Ml(h) ? new wl({
      ...h,
      element: h.motionValue.owner.current
    }) : new Rn(h);
    m.finished.then(() => this.notifyFinished()).catch(z), this.pendingTimeline && (this.stopTimeline = m.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = m;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(e, n) {
    return this.finished.finally(e).then(() => {
    });
  }
  get animation() {
    var e;
    return this._animation || ((e = this.keyframeResolver) == null || e.resume(), ul()), this._animation;
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
const Al = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function Vl(t) {
  const e = Al.exec(t);
  if (!e)
    return [,];
  const [, n, r, i] = e;
  return [`--${n ?? r}`, i];
}
const El = 4;
function ds(t, e, n = 1) {
  it(n <= El, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
  const [r, i] = Vl(t);
  if (!r)
    return;
  const o = window.getComputedStyle(e).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return Ri(s) ? parseFloat(s) : s;
  }
  return Mn(i) ? ds(i, e, n + 1) : i;
}
function Fn(t, e) {
  return (t == null ? void 0 : t[e]) ?? (t == null ? void 0 : t.default) ?? t;
}
const hs = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Lt
]), Nl = {
  test: (t) => t === "auto",
  parse: (t) => t
}, fs = (t) => (e) => e.test(t), ms = [Rt, T, J, ct, kc, wc, Nl], Tr = (t) => ms.find(fs(t));
function Rl(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || Oi(t) : !0;
}
const Ll = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Ol(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow")
    return t;
  const [r] = n.match(Cn) || [];
  if (!r)
    return t;
  const i = n.replace(r, "");
  let o = Ll.has(e) ? 1 : 0;
  return r !== n && (o *= 100), e + "(" + o + i + ")";
}
const Fl = /\b([a-z-]*)\(.*?\)/gu, tn = {
  ...ut,
  getAnimatableNone: (t) => {
    const e = t.match(Fl);
    return e ? e.map(Ol).join(" ") : t;
  }
}, Pr = {
  ...Rt,
  transform: Math.round
}, Bl = {
  rotate: ct,
  rotateX: ct,
  rotateY: ct,
  rotateZ: ct,
  scale: re,
  scaleX: re,
  scaleY: re,
  scaleZ: re,
  skew: ct,
  skewX: ct,
  skewY: ct,
  distance: T,
  translateX: T,
  translateY: T,
  translateZ: T,
  x: T,
  y: T,
  z: T,
  perspective: T,
  transformPerspective: T,
  opacity: Kt,
  originX: dr,
  originY: dr,
  originZ: T
}, Bn = {
  // Border props
  borderWidth: T,
  borderTopWidth: T,
  borderRightWidth: T,
  borderBottomWidth: T,
  borderLeftWidth: T,
  borderRadius: T,
  radius: T,
  borderTopLeftRadius: T,
  borderTopRightRadius: T,
  borderBottomRightRadius: T,
  borderBottomLeftRadius: T,
  // Positioning props
  width: T,
  maxWidth: T,
  height: T,
  maxHeight: T,
  top: T,
  right: T,
  bottom: T,
  left: T,
  // Spacing props
  padding: T,
  paddingTop: T,
  paddingRight: T,
  paddingBottom: T,
  paddingLeft: T,
  margin: T,
  marginTop: T,
  marginRight: T,
  marginBottom: T,
  marginLeft: T,
  // Misc
  backgroundPositionX: T,
  backgroundPositionY: T,
  ...Bl,
  zIndex: Pr,
  // SVG
  fillOpacity: Kt,
  strokeOpacity: Kt,
  numOctaves: Pr
}, Il = {
  ...Bn,
  // Color props
  color: L,
  backgroundColor: L,
  outlineColor: L,
  fill: L,
  stroke: L,
  // Border props
  borderColor: L,
  borderTopColor: L,
  borderRightColor: L,
  borderBottomColor: L,
  borderLeftColor: L,
  filter: tn,
  WebkitFilter: tn
}, ps = (t) => Il[t];
function gs(t, e) {
  let n = ps(t);
  return n !== tn && (n = ut), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
}
const jl = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function Wl(t, e, n) {
  let r = 0, i;
  for (; r < t.length && !i; ) {
    const o = t[r];
    typeof o == "string" && !jl.has(o) && Ht(o).values.length && (i = t[r]), r++;
  }
  if (i && n)
    for (const o of e)
      t[o] = gs(n, i);
}
class $l extends Ln {
  constructor(e, n, r, i, o) {
    super(e, n, r, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: n, name: r } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let c = 0; c < e.length; c++) {
      let l = e[c];
      if (typeof l == "string" && (l = l.trim(), Mn(l))) {
        const u = ds(l, n.current);
        u !== void 0 && (e[c] = u), c === e.length - 1 && (this.finalKeyframe = l);
      }
    }
    if (this.resolveNoneKeyframes(), !hs.has(r) || e.length !== 2)
      return;
    const [i, o] = e, s = Tr(i), a = Tr(o);
    if (s !== a)
      if (xr(s) && xr(a))
        for (let c = 0; c < e.length; c++) {
          const l = e[c];
          typeof l == "string" && (e[c] = parseFloat(l));
        }
      else vt[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: n } = this, r = [];
    for (let i = 0; i < e.length; i++)
      (e[i] === null || Rl(e[i])) && r.push(i);
    r.length && Wl(e, r, n);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: n, name: r } = this;
    if (!e || !e.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = vt[r](e.measureViewportBox(), window.getComputedStyle(e.current)), n[0] = this.measuredOrigin;
    const i = n[n.length - 1];
    i !== void 0 && e.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var a;
    const { element: e, name: n, unresolvedKeyframes: r } = this;
    if (!e || !e.current)
      return;
    const i = e.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    const o = r.length - 1, s = r[o];
    r[o] = vt[n](e.measureViewportBox(), window.getComputedStyle(e.current)), s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s), (a = this.removedTransforms) != null && a.length && this.removedTransforms.forEach(([c, l]) => {
      e.getValue(c).set(l);
    }), this.resolveNoneKeyframes();
  }
}
function Yl(t, e, n) {
  if (t instanceof EventTarget)
    return [t];
  if (typeof t == "string") {
    let r = document;
    const i = (n == null ? void 0 : n[t]) ?? r.querySelectorAll(t);
    return i ? Array.from(i) : [];
  }
  return Array.from(t);
}
const ys = (t, e) => e && typeof t == "number" ? e.transform(t) : t, Sr = 30, _l = (t) => !isNaN(parseFloat(t));
class Ul {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(e, n = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r, i = !0) => {
      var s, a;
      const o = U.now();
      if (this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && ((s = this.events.change) == null || s.notify(this.current), this.dependents))
        for (const c of this.dependents)
          c.dirty();
      i && ((a = this.events.renderRequest) == null || a.notify(this.current));
    }, this.hasAnimated = !1, this.setCurrent(e), this.owner = n.owner;
  }
  setCurrent(e) {
    this.current = e, this.updatedAt = U.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = _l(this.current));
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
    return process.env.NODE_ENV !== "production" && kn(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new wn());
    const r = this.events[e].add(n);
    return e === "change" ? () => {
      r(), V.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : r;
  }
  clearListeners() {
    for (const e in this.events)
      this.events[e].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(e, n) {
    this.passiveEffect = e, this.stopPassiveEffect = n;
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
  set(e, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(e, n) : this.passiveEffect(e, this.updateAndNotify);
  }
  setWithVelocity(e, n, r) {
    this.set(n), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - r;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(e, n = !0) {
    this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
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
    const e = U.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Sr)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Sr);
    return Fi(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = e(n), this.events.animationStart && this.events.animationStart.notify();
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
    var e, n;
    (e = this.dependents) == null || e.clear(), (n = this.events.destroy) == null || n.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function At(t, e) {
  return new Ul(t, e);
}
const { schedule: In } = /* @__PURE__ */ zi(queueMicrotask, !1), q = {
  x: !1,
  y: !1
};
function vs() {
  return q.x || q.y;
}
function Kl(t) {
  return t === "x" || t === "y" ? q[t] ? null : (q[t] = !0, () => {
    q[t] = !1;
  }) : q.x || q.y ? null : (q.x = q.y = !0, () => {
    q.x = q.y = !1;
  });
}
function xs(t, e) {
  const n = Yl(t), r = new AbortController(), i = {
    passive: !0,
    ...e,
    signal: r.signal
  };
  return [n, i, () => r.abort()];
}
function Mr(t) {
  return !(t.pointerType === "touch" || vs());
}
function Hl(t, e, n = {}) {
  const [r, i, o] = xs(t, n), s = (a) => {
    if (!Mr(a))
      return;
    const { target: c } = a, l = e(c, a);
    if (typeof l != "function" || !c)
      return;
    const u = (d) => {
      Mr(d) && (l(d), c.removeEventListener("pointerleave", u));
    };
    c.addEventListener("pointerleave", u, i);
  };
  return r.forEach((a) => {
    a.addEventListener("pointerenter", s, i);
  }), o;
}
const bs = (t, e) => e ? t === e ? !0 : bs(t, e.parentElement) : !1, jn = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1, zl = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function Gl(t) {
  return zl.has(t.tagName) || t.tabIndex !== -1;
}
const ae = /* @__PURE__ */ new WeakSet();
function Cr(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function Oe(t, e) {
  t.dispatchEvent(new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }));
}
const ql = (t, e) => {
  const n = t.currentTarget;
  if (!n)
    return;
  const r = Cr(() => {
    if (ae.has(n))
      return;
    Oe(n, "down");
    const i = Cr(() => {
      Oe(n, "up");
    }), o = () => Oe(n, "cancel");
    n.addEventListener("keyup", i, e), n.addEventListener("blur", o, e);
  });
  n.addEventListener("keydown", r, e), n.addEventListener("blur", () => n.removeEventListener("keydown", r), e);
};
function Dr(t) {
  return jn(t) && !vs();
}
function Xl(t, e, n = {}) {
  const [r, i, o] = xs(t, n), s = (a) => {
    const c = a.currentTarget;
    if (!Dr(a))
      return;
    ae.add(c);
    const l = e(c, a), u = (m, p) => {
      window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", h), ae.has(c) && ae.delete(c), Dr(m) && typeof l == "function" && l(m, { success: p });
    }, d = (m) => {
      u(m, c === window || c === document || n.useGlobalTarget || bs(c, m.target));
    }, h = (m) => {
      u(m, !1);
    };
    window.addEventListener("pointerup", d, i), window.addEventListener("pointercancel", h, i);
  };
  return r.forEach((a) => {
    (n.useGlobalTarget ? window : a).addEventListener("pointerdown", s, i), On(a) && (a.addEventListener("focus", (l) => ql(l, i)), !Gl(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
  }), o;
}
function ws(t) {
  return Li(t) && "ownerSVGElement" in t;
}
function Ql(t) {
  return ws(t) && t.tagName === "svg";
}
const W = (t) => !!(t && t.getVelocity), Zl = [...ms, L, ut], Jl = (t) => Zl.find(fs(t)), Wn = Et({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
class tu extends un.Component {
  getSnapshotBeforeUpdate(e) {
    const n = this.props.childRef.current;
    if (n && e.isPresent && !this.props.isPresent) {
      const r = n.offsetParent, i = On(r) && r.offsetWidth || 0, o = this.props.sizeRef.current;
      o.height = n.offsetHeight || 0, o.width = n.offsetWidth || 0, o.top = n.offsetTop, o.left = n.offsetLeft, o.right = i - o.width - o.left;
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
function eu({ children: t, isPresent: e, anchorX: n, root: r }) {
  const i = hn(), o = nt(null), s = nt({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  }), { nonce: a } = j(Wn);
  return Ti(() => {
    const { width: c, height: l, top: u, left: d, right: h } = s.current;
    if (e || !o.current || !c || !l)
      return;
    const m = n === "left" ? `left: ${d}` : `right: ${h}`;
    o.current.dataset.motionPopId = i;
    const p = document.createElement("style");
    a && (p.nonce = a);
    const g = r ?? document.head;
    return g.appendChild(p), p.sheet && p.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${l}px !important;
            ${m}px !important;
            top: ${u}px !important;
          }
        `), () => {
      g.removeChild(p), g.contains(p) && g.removeChild(p);
    };
  }, [e]), f(tu, { isPresent: e, childRef: o, sizeRef: s, children: un.cloneElement(t, { ref: o }) });
}
const nu = ({ children: t, initial: e, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: o, mode: s, anchorX: a, root: c }) => {
  const l = gn(ru), u = hn();
  let d = !0, h = bt(() => (d = !1, {
    id: u,
    initial: e,
    isPresent: n,
    custom: i,
    onExitComplete: (m) => {
      l.set(m, !0);
      for (const p of l.values())
        if (!p)
          return;
      r && r();
    },
    register: (m) => (l.set(m, !1), () => l.delete(m))
  }), [n, l, r]);
  return o && d && (h = { ...h }), bt(() => {
    l.forEach((m, p) => l.set(p, !1));
  }, [n]), un.useEffect(() => {
    !n && !l.size && r && r();
  }, [n]), s === "popLayout" && (t = f(eu, { isPresent: n, anchorX: a, root: c, children: t })), f(ke.Provider, { value: h, children: t });
};
function ru() {
  return /* @__PURE__ */ new Map();
}
function ks(t = !0) {
  const e = j(ke);
  if (e === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = e, o = hn();
  G(() => {
    if (t)
      return i(o);
  }, [t]);
  const s = Pi(() => t && r && r(o), [o, r, t]);
  return !n && r ? [!1, s] : [!0];
}
const ie = (t) => t.key || "";
function Ar(t) {
  const e = [];
  return fo.forEach(t, (n) => {
    mo(n) && e.push(n);
  }), e;
}
const iu = ({ children: t, custom: e, initial: n = !0, onExitComplete: r, presenceAffectsLayout: i = !0, mode: o = "sync", propagate: s = !1, anchorX: a = "left", root: c }) => {
  const [l, u] = ks(s), d = bt(() => Ar(t), [t]), h = s && !l ? [] : d.map(ie), m = nt(!0), p = nt(d), g = gn(() => /* @__PURE__ */ new Map()), [y, v] = B(d), [x, b] = B(d);
  Ni(() => {
    m.current = !1, p.current = d;
    for (let M = 0; M < x.length; M++) {
      const C = ie(x[M]);
      h.includes(C) ? g.delete(C) : g.get(C) !== !0 && g.set(C, !1);
    }
  }, [x, h.length, h.join("-")]);
  const S = [];
  if (d !== y) {
    let M = [...d];
    for (let C = 0; C < x.length; C++) {
      const P = x[C], O = ie(P);
      h.includes(O) || (M.splice(C, 0, P), S.push(P));
    }
    return o === "wait" && S.length && (M = S), b(Ar(M)), v(d), null;
  }
  process.env.NODE_ENV !== "production" && o === "wait" && x.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  const { forceRender: w } = j(pn);
  return f(lo, { children: x.map((M) => {
    const C = ie(M), P = s && !l ? !1 : d === x || h.includes(C), O = () => {
      if (g.has(C))
        g.set(C, !0);
      else
        return;
      let $ = !0;
      g.forEach((ot) => {
        ot || ($ = !1);
      }), $ && (w == null || w(), b(p.current), s && (u == null || u()), r && r());
    };
    return f(nu, { isPresent: P, initial: !m.current || n ? void 0 : !1, custom: e, presenceAffectsLayout: i, mode: o, root: c, onExitComplete: P ? void 0 : O, anchorX: a, children: M }, C);
  }) });
}, Ts = Et({ strict: !1 }), Vr = {
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
}, Vt = {};
for (const t in Vr)
  Vt[t] = {
    isEnabled: (e) => Vr[t].some((n) => !!e[n])
  };
function su(t) {
  for (const e in t)
    Vt[e] = {
      ...Vt[e],
      ...t[e]
    };
}
const ou = /* @__PURE__ */ new Set([
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
function ye(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || ou.has(t);
}
let Ps = (t) => !ye(t);
function au(t) {
  typeof t == "function" && (Ps = (e) => e.startsWith("on") ? !ye(e) : t(e));
}
try {
  au(require("@emotion/is-prop-valid").default);
} catch {
}
function cu(t, e, n) {
  const r = {};
  for (const i in t)
    i === "values" && typeof t.values == "object" || (Ps(i) || n === !0 && ye(i) || !e && !ye(i) || // If trying to use native HTML drag events, forward drag listeners
    t.draggable && i.startsWith("onDrag")) && (r[i] = t[i]);
  return r;
}
function lu(t) {
  if (typeof Proxy > "u")
    return t;
  const e = /* @__PURE__ */ new Map(), n = (...r) => (process.env.NODE_ENV !== "production" && kn(!1, "motion() is deprecated. Use motion.create() instead."), t(...r));
  return new Proxy(n, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, i) => i === "create" ? t : (e.has(i) || e.set(i, t(i)), e.get(i))
  });
}
const Te = /* @__PURE__ */ Et({});
function Pe(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function zt(t) {
  return typeof t == "string" || Array.isArray(t);
}
const $n = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Yn = ["initial", ...$n];
function Se(t) {
  return Pe(t.animate) || Yn.some((e) => zt(t[e]));
}
function Ss(t) {
  return !!(Se(t) || t.variants);
}
function uu(t, e) {
  if (Se(t)) {
    const { initial: n, animate: r } = t;
    return {
      initial: n === !1 || zt(n) ? n : void 0,
      animate: zt(r) ? r : void 0
    };
  }
  return t.inherit !== !1 ? e : {};
}
function du(t) {
  const { initial: e, animate: n } = uu(t, j(Te));
  return bt(() => ({ initial: e, animate: n }), [Er(e), Er(n)]);
}
function Er(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const hu = Symbol.for("motionComponentSymbol");
function St(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function fu(t, e, n) {
  return Pi(
    (r) => {
      r && t.onMount && t.onMount(r), e && (r ? e.mount(r) : e.unmount()), n && (typeof n == "function" ? n(r) : St(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [e]
  );
}
const _n = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), mu = "framerAppearId", Ms = "data-" + _n(mu), Cs = Et({});
function pu(t, e, n, r, i) {
  var g, y;
  const { visualElement: o } = j(Te), s = j(Ts), a = j(ke), c = j(Wn).reducedMotion, l = nt(null);
  r = r || s.renderer, !l.current && r && (l.current = r(t, {
    visualState: e,
    parent: o,
    props: n,
    presenceContext: a,
    blockInitialAnimation: a ? a.initial === !1 : !1,
    reducedMotionConfig: c
  }));
  const u = l.current, d = j(Cs);
  u && !u.projection && i && (u.type === "html" || u.type === "svg") && gu(l.current, n, i, d);
  const h = nt(!1);
  Ti(() => {
    u && h.current && u.update(n, a);
  });
  const m = n[Ms], p = nt(!!m && !((g = window.MotionHandoffIsComplete) != null && g.call(window, m)) && ((y = window.MotionHasOptimisedAnimation) == null ? void 0 : y.call(window, m)));
  return Ni(() => {
    u && (h.current = !0, window.MotionIsMounted = !0, u.updateFeatures(), In.render(u.render), p.current && u.animationState && u.animationState.animateChanges());
  }), G(() => {
    u && (!p.current && u.animationState && u.animationState.animateChanges(), p.current && (queueMicrotask(() => {
      var v;
      (v = window.MotionHandoffMarkAsComplete) == null || v.call(window, m);
    }), p.current = !1));
  }), u;
}
function gu(t, e, n, r) {
  const { layoutId: i, layout: o, drag: s, dragConstraints: a, layoutScroll: c, layoutRoot: l, layoutCrossfade: u } = e;
  t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : Ds(t.parent)), t.projection.setOptions({
    layoutId: i,
    layout: o,
    alwaysMeasureLayout: !!s || a && St(a),
    visualElement: t,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof o == "string" ? o : "both",
    initialPromotionConfig: r,
    crossfade: u,
    layoutScroll: c,
    layoutRoot: l
  });
}
function Ds(t) {
  if (t)
    return t.options.allowProjection !== !1 ? t.projection : Ds(t.parent);
}
function yu({ preloadedFeatures: t, createVisualElement: e, useRender: n, useVisualState: r, Component: i }) {
  t && su(t);
  function o(a, c) {
    let l;
    const u = {
      ...j(Wn),
      ...a,
      layoutId: vu(a)
    }, { isStatic: d } = u, h = du(a), m = r(a, d);
    if (!d && yn) {
      xu(u, t);
      const p = bu(u);
      l = p.MeasureLayout, h.visualElement = pu(i, m, u, e, p.ProjectionNode);
    }
    return k(Te.Provider, { value: h, children: [l && h.visualElement ? f(l, { visualElement: h.visualElement, ...u }) : null, n(i, a, fu(m, h.visualElement, c), m, d, h.visualElement)] });
  }
  o.displayName = `motion.${typeof i == "string" ? i : `create(${i.displayName ?? i.name ?? ""})`}`;
  const s = dn(o);
  return s[hu] = i, s;
}
function vu({ layoutId: t }) {
  const e = j(pn).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function xu(t, e) {
  const n = j(Ts).strict;
  if (process.env.NODE_ENV !== "production" && e && n) {
    const r = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    t.ignoreStrict ? Nt(!1, r) : it(!1, r);
  }
}
function bu(t) {
  const { drag: e, layout: n } = Vt;
  if (!e && !n)
    return {};
  const r = { ...e, ...n };
  return {
    MeasureLayout: e != null && e.isEnabled(t) || n != null && n.isEnabled(t) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
const Gt = {};
function wu(t) {
  for (const e in t)
    Gt[e] = t[e], Sn(e) && (Gt[e].isCSSVariable = !0);
}
function As(t, { layout: e, layoutId: n }) {
  return Ot.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!Gt[t] || t === "opacity");
}
const ku = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, Tu = Lt.length;
function Pu(t, e, n) {
  let r = "", i = !0;
  for (let o = 0; o < Tu; o++) {
    const s = Lt[o], a = t[s];
    if (a === void 0)
      continue;
    let c = !0;
    if (typeof a == "number" ? c = a === (s.startsWith("scale") ? 1 : 0) : c = parseFloat(a) === 0, !c || n) {
      const l = ys(a, Bn[s]);
      if (!c) {
        i = !1;
        const u = ku[s] || s;
        r += `${u}(${l}) `;
      }
      n && (e[s] = l);
    }
  }
  return r = r.trim(), n ? r = n(e, i ? "" : r) : i && (r = "none"), r;
}
function Un(t, e, n) {
  const { style: r, vars: i, transformOrigin: o } = t;
  let s = !1, a = !1;
  for (const c in e) {
    const l = e[c];
    if (Ot.has(c)) {
      s = !0;
      continue;
    } else if (Sn(c)) {
      i[c] = l;
      continue;
    } else {
      const u = ys(l, Bn[c]);
      c.startsWith("origin") ? (a = !0, o[c] = u) : r[c] = u;
    }
  }
  if (e.transform || (s || n ? r.transform = Pu(e, t.transform, n) : r.transform && (r.transform = "none")), a) {
    const { originX: c = "50%", originY: l = "50%", originZ: u = 0 } = o;
    r.transformOrigin = `${c} ${l} ${u}`;
  }
}
const Kn = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Vs(t, e, n) {
  for (const r in e)
    !W(e[r]) && !As(r, n) && (t[r] = e[r]);
}
function Su({ transformTemplate: t }, e) {
  return bt(() => {
    const n = Kn();
    return Un(n, e, t), Object.assign({}, n.vars, n.style);
  }, [e]);
}
function Mu(t, e) {
  const n = t.style || {}, r = {};
  return Vs(r, n, t), Object.assign(r, Su(t, e)), r;
}
function Cu(t, e) {
  const n = {}, r = Mu(t, e);
  return t.drag && t.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
const Du = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, Au = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Vu(t, e, n = 1, r = 0, i = !0) {
  t.pathLength = 1;
  const o = i ? Du : Au;
  t[o.offset] = T.transform(-r);
  const s = T.transform(e), a = T.transform(n);
  t[o.array] = `${s} ${a}`;
}
function Es(t, {
  attrX: e,
  attrY: n,
  attrScale: r,
  pathLength: i,
  pathSpacing: o = 1,
  pathOffset: s = 0,
  // This is object creation, which we try to avoid per-frame.
  ...a
}, c, l, u) {
  if (Un(t, a, l), c) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: d, style: h } = t;
  d.transform && (h.transform = d.transform, delete d.transform), (h.transform || d.transformOrigin) && (h.transformOrigin = d.transformOrigin ?? "50% 50%", delete d.transformOrigin), h.transform && (h.transformBox = (u == null ? void 0 : u.transformBox) ?? "fill-box", delete d.transformBox), e !== void 0 && (d.x = e), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), i !== void 0 && Vu(d, i, o, s, !1);
}
const Ns = () => ({
  ...Kn(),
  attrs: {}
}), Rs = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function Eu(t, e, n, r) {
  const i = bt(() => {
    const o = Ns();
    return Es(o, e, Rs(r), t.transformTemplate, t.style), {
      ...o.attrs,
      style: { ...o.style }
    };
  }, [e]);
  if (t.style) {
    const o = {};
    Vs(o, t.style, t), i.style = { ...o, ...i.style };
  }
  return i;
}
const Nu = [
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
function Hn(t) {
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
      !!(Nu.indexOf(t) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(t))
    )
  );
}
function Ru(t = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    const c = (Hn(n) ? Eu : Cu)(r, o, s, n), l = cu(r, typeof n == "string", t), u = n !== Si ? { ...l, ...c, ref: i } : {}, { children: d } = r, h = bt(() => W(d) ? d.get() : d, [d]);
    return ue(n, {
      ...u,
      children: h
    });
  };
}
function Nr(t) {
  const e = [{}, {}];
  return t == null || t.values.forEach((n, r) => {
    e[0][r] = n.get(), e[1][r] = n.getVelocity();
  }), e;
}
function zn(t, e, n, r) {
  if (typeof e == "function") {
    const [i, o] = Nr(r);
    e = e(n !== void 0 ? n : t.custom, i, o);
  }
  if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
    const [i, o] = Nr(r);
    e = e(n !== void 0 ? n : t.custom, i, o);
  }
  return e;
}
function ce(t) {
  return W(t) ? t.get() : t;
}
function Lu({ scrapeMotionValuesFromProps: t, createRenderState: e }, n, r, i) {
  return {
    latestValues: Ou(n, r, i, t),
    renderState: e()
  };
}
const Ls = (t) => (e, n) => {
  const r = j(Te), i = j(ke), o = () => Lu(t, e, r, i);
  return n ? o() : gn(o);
};
function Ou(t, e, n, r) {
  const i = {}, o = r(t, {});
  for (const h in o)
    i[h] = ce(o[h]);
  let { initial: s, animate: a } = t;
  const c = Se(t), l = Ss(t);
  e && l && !c && t.inherit !== !1 && (s === void 0 && (s = e.initial), a === void 0 && (a = e.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || s === !1;
  const d = u ? a : s;
  if (d && typeof d != "boolean" && !Pe(d)) {
    const h = Array.isArray(d) ? d : [d];
    for (let m = 0; m < h.length; m++) {
      const p = zn(t, h[m]);
      if (p) {
        const { transitionEnd: g, transition: y, ...v } = p;
        for (const x in v) {
          let b = v[x];
          if (Array.isArray(b)) {
            const S = u ? b.length - 1 : 0;
            b = b[S];
          }
          b !== null && (i[x] = b);
        }
        for (const x in g)
          i[x] = g[x];
      }
    }
  }
  return i;
}
function Gn(t, e, n) {
  var o;
  const { style: r } = t, i = {};
  for (const s in r)
    (W(r[s]) || e.style && W(e.style[s]) || As(s, t) || ((o = n == null ? void 0 : n.getValue(s)) == null ? void 0 : o.liveStyle) !== void 0) && (i[s] = r[s]);
  return i;
}
const Fu = {
  useVisualState: Ls({
    scrapeMotionValuesFromProps: Gn,
    createRenderState: Kn
  })
};
function Os(t, e, n) {
  const r = Gn(t, e, n);
  for (const i in t)
    if (W(t[i]) || W(e[i])) {
      const o = Lt.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
      r[o] = t[i];
    }
  return r;
}
const Bu = {
  useVisualState: Ls({
    scrapeMotionValuesFromProps: Os,
    createRenderState: Ns
  })
};
function Iu(t, e) {
  return function(r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const s = {
      ...Hn(r) ? Bu : Fu,
      preloadedFeatures: t,
      useRender: Ru(i),
      createVisualElement: e,
      Component: r
    };
    return yu(s);
  };
}
function qt(t, e, n) {
  const r = t.getProps();
  return zn(r, e, n !== void 0 ? n : r.custom, t);
}
const en = (t) => Array.isArray(t);
function ju(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, At(n));
}
function Wu(t) {
  return en(t) ? t[t.length - 1] || 0 : t;
}
function $u(t, e) {
  const n = qt(t, e);
  let { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...r };
  for (const s in o) {
    const a = Wu(o[s]);
    ju(t, s, a);
  }
}
function Yu(t) {
  return !!(W(t) && t.add);
}
function nn(t, e) {
  const n = t.getValue("willChange");
  if (Yu(n))
    return n.add(e);
  if (!n && st.WillChange) {
    const r = new st.WillChange("auto");
    t.addValue("willChange", r), r.add(e);
  }
}
function Fs(t) {
  return t.props[Ms];
}
const _u = (t) => t !== null;
function Uu(t, { repeat: e, repeatType: n = "loop" }, r) {
  const i = t.filter(_u), o = e && n !== "loop" && e % 2 === 1 ? 0 : i.length - 1;
  return i[o];
}
const Ku = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Hu = (t) => ({
  type: "spring",
  stiffness: 550,
  damping: t === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), zu = {
  type: "keyframes",
  duration: 0.8
}, Gu = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, qu = (t, { keyframes: e }) => e.length > 2 ? zu : Ot.has(t) ? t.startsWith("scale") ? Hu(e[1]) : Ku : Gu;
function Xu({ when: t, delay: e, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: o, repeatType: s, repeatDelay: a, from: c, elapsed: l, ...u }) {
  return !!Object.keys(u).length;
}
const qn = (t, e, n, r = {}, i, o) => (s) => {
  const a = Fn(r, t) || {}, c = a.delay || r.delay || 0;
  let { elapsed: l = 0 } = r;
  l = l - /* @__PURE__ */ X(c);
  const u = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: e.getVelocity(),
    ...a,
    delay: -l,
    onUpdate: (h) => {
      e.set(h), a.onUpdate && a.onUpdate(h);
    },
    onComplete: () => {
      s(), a.onComplete && a.onComplete();
    },
    name: t,
    motionValue: e,
    element: o ? void 0 : i
  };
  Xu(a) || Object.assign(u, qu(t, u)), u.duration && (u.duration = /* @__PURE__ */ X(u.duration)), u.repeatDelay && (u.repeatDelay = /* @__PURE__ */ X(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
  let d = !1;
  if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (u.duration = 0, u.delay === 0 && (d = !0)), (st.instantAnimations || st.skipAnimations) && (d = !0, u.duration = 0, u.delay = 0), u.allowFlatten = !a.type && !a.ease, d && !o && e.get() !== void 0) {
    const h = Uu(u.keyframes, a);
    if (h !== void 0) {
      V.update(() => {
        u.onUpdate(h), u.onComplete();
      });
      return;
    }
  }
  return a.isSync ? new Rn(u) : new Dl(u);
};
function Qu({ protectedKeys: t, needsAnimating: e }, n) {
  const r = t.hasOwnProperty(n) && e[n] !== !0;
  return e[n] = !1, r;
}
function Bs(t, e, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: o = t.getDefaultTransition(), transitionEnd: s, ...a } = e;
  r && (o = r);
  const c = [], l = i && t.animationState && t.animationState.getState()[i];
  for (const u in a) {
    const d = t.getValue(u, t.latestValues[u] ?? null), h = a[u];
    if (h === void 0 || l && Qu(l, u))
      continue;
    const m = {
      delay: n,
      ...Fn(o || {}, u)
    }, p = d.get();
    if (p !== void 0 && !d.isAnimating && !Array.isArray(h) && h === p && !m.velocity)
      continue;
    let g = !1;
    if (window.MotionHandoffAnimation) {
      const v = Fs(t);
      if (v) {
        const x = window.MotionHandoffAnimation(v, u, V);
        x !== null && (m.startTime = x, g = !0);
      }
    }
    nn(t, u), d.start(qn(u, d, h, t.shouldReduceMotion && hs.has(u) ? { type: !1 } : m, t, g));
    const y = d.animation;
    y && c.push(y);
  }
  return s && Promise.all(c).then(() => {
    V.update(() => {
      s && $u(t, s);
    });
  }), c;
}
function rn(t, e, n = {}) {
  var c;
  const r = qt(t, e, n.type === "exit" ? (c = t.presenceContext) == null ? void 0 : c.custom : void 0);
  let { transition: i = t.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = r ? () => Promise.all(Bs(t, r, n)) : () => Promise.resolve(), s = t.variantChildren && t.variantChildren.size ? (l = 0) => {
    const { delayChildren: u = 0, staggerChildren: d, staggerDirection: h } = i;
    return Zu(t, e, l, u, d, h, n);
  } : () => Promise.resolve(), { when: a } = i;
  if (a) {
    const [l, u] = a === "beforeChildren" ? [o, s] : [s, o];
    return l().then(() => u());
  } else
    return Promise.all([o(), s(n.delay)]);
}
function Zu(t, e, n = 0, r = 0, i = 0, o = 1, s) {
  const a = [], c = t.variantChildren.size, l = (c - 1) * i, u = typeof r == "function", d = u ? (h) => r(h, c) : (
    // Support deprecated staggerChildren
    o === 1 ? (h = 0) => h * i : (h = 0) => l - h * i
  );
  return Array.from(t.variantChildren).sort(Ju).forEach((h, m) => {
    h.notify("AnimationStart", e), a.push(rn(h, e, {
      ...s,
      delay: n + (u ? 0 : r) + d(m)
    }).then(() => h.notify("AnimationComplete", e)));
  }), Promise.all(a);
}
function Ju(t, e) {
  return t.sortNodePosition(e);
}
function td(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let r;
  if (Array.isArray(e)) {
    const i = e.map((o) => rn(t, o, n));
    r = Promise.all(i);
  } else if (typeof e == "string")
    r = rn(t, e, n);
  else {
    const i = typeof e == "function" ? qt(t, e, n.custom) : e;
    r = Promise.all(Bs(t, i, n));
  }
  return r.then(() => {
    t.notify("AnimationComplete", e);
  });
}
function Is(t, e) {
  if (!Array.isArray(e))
    return !1;
  const n = e.length;
  if (n !== t.length)
    return !1;
  for (let r = 0; r < n; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
const ed = Yn.length;
function js(t) {
  if (!t)
    return;
  if (!t.isControllingVariants) {
    const n = t.parent ? js(t.parent) || {} : {};
    return t.props.initial !== void 0 && (n.initial = t.props.initial), n;
  }
  const e = {};
  for (let n = 0; n < ed; n++) {
    const r = Yn[n], i = t.props[r];
    (zt(i) || i === !1) && (e[r] = i);
  }
  return e;
}
const nd = [...$n].reverse(), rd = $n.length;
function id(t) {
  return (e) => Promise.all(e.map(({ animation: n, options: r }) => td(t, n, r)));
}
function sd(t) {
  let e = id(t), n = Rr(), r = !0;
  const i = (c) => (l, u) => {
    var h;
    const d = qt(t, u, c === "exit" ? (h = t.presenceContext) == null ? void 0 : h.custom : void 0);
    if (d) {
      const { transition: m, transitionEnd: p, ...g } = d;
      l = { ...l, ...g, ...p };
    }
    return l;
  };
  function o(c) {
    e = c(t);
  }
  function s(c) {
    const { props: l } = t, u = js(t.parent) || {}, d = [], h = /* @__PURE__ */ new Set();
    let m = {}, p = 1 / 0;
    for (let y = 0; y < rd; y++) {
      const v = nd[y], x = n[v], b = l[v] !== void 0 ? l[v] : u[v], S = zt(b), w = v === c ? x.isActive : null;
      w === !1 && (p = y);
      let M = b === u[v] && b !== l[v] && S;
      if (M && r && t.manuallyAnimateOnMount && (M = !1), x.protectedKeys = { ...m }, // If it isn't active and hasn't *just* been set as inactive
      !x.isActive && w === null || // If we didn't and don't have any defined prop for this animation type
      !b && !x.prevProp || // Or if the prop doesn't define an animation
      Pe(b) || typeof b == "boolean")
        continue;
      const C = od(x.prevProp, b);
      let P = C || // If we're making this variant active, we want to always make it active
      v === c && x.isActive && !M && S || // If we removed a higher-priority variant (i is in reverse order)
      y > p && S, O = !1;
      const $ = Array.isArray(b) ? b : [b];
      let ot = $.reduce(i(v), {});
      w === !1 && (ot = {});
      const { prevResolvedValues: Xn = {} } = x, co = {
        ...Xn,
        ...ot
      }, Qn = (Y) => {
        P = !0, h.has(Y) && (O = !0, h.delete(Y)), x.needsAnimating[Y] = !0;
        const et = t.getValue(Y);
        et && (et.liveStyle = !1);
      };
      for (const Y in co) {
        const et = ot[Y], Me = Xn[Y];
        if (m.hasOwnProperty(Y))
          continue;
        let Ce = !1;
        en(et) && en(Me) ? Ce = !Is(et, Me) : Ce = et !== Me, Ce ? et != null ? Qn(Y) : h.add(Y) : et !== void 0 && h.has(Y) ? Qn(Y) : x.protectedKeys[Y] = !0;
      }
      x.prevProp = b, x.prevResolvedValues = ot, x.isActive && (m = { ...m, ...ot }), r && t.blockInitialAnimation && (P = !1), P && (!(M && C) || O) && d.push(...$.map((Y) => ({
        animation: Y,
        options: { type: v }
      })));
    }
    if (h.size) {
      const y = {};
      if (typeof l.initial != "boolean") {
        const v = qt(t, Array.isArray(l.initial) ? l.initial[0] : l.initial);
        v && v.transition && (y.transition = v.transition);
      }
      h.forEach((v) => {
        const x = t.getBaseTarget(v), b = t.getValue(v);
        b && (b.liveStyle = !0), y[v] = x ?? null;
      }), d.push({ animation: y });
    }
    let g = !!d.length;
    return r && (l.initial === !1 || l.initial === l.animate) && !t.manuallyAnimateOnMount && (g = !1), r = !1, g ? e(d) : Promise.resolve();
  }
  function a(c, l) {
    var d;
    if (n[c].isActive === l)
      return Promise.resolve();
    (d = t.variantChildren) == null || d.forEach((h) => {
      var m;
      return (m = h.animationState) == null ? void 0 : m.setActive(c, l);
    }), n[c].isActive = l;
    const u = s(c);
    for (const h in n)
      n[h].protectedKeys = {};
    return u;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      n = Rr(), r = !0;
    }
  };
}
function od(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !Is(e, t) : !1;
}
function ht(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Rr() {
  return {
    animate: ht(!0),
    whileInView: ht(),
    whileHover: ht(),
    whileTap: ht(),
    whileDrag: ht(),
    whileFocus: ht(),
    exit: ht()
  };
}
class dt {
  constructor(e) {
    this.isMounted = !1, this.node = e;
  }
  update() {
  }
}
class ad extends dt {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(e) {
    super(e), e.animationState || (e.animationState = sd(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    Pe(e) && (this.unmountControls = e.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var e;
    this.node.animationState.reset(), (e = this.unmountControls) == null || e.call(this);
  }
}
let cd = 0;
class ld extends dt {
  constructor() {
    super(...arguments), this.id = cd++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: e, onExitComplete: n } = this.node.presenceContext, { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === r)
      return;
    const i = this.node.animationState.setActive("exit", !e);
    n && !e && i.then(() => {
      n(this.id);
    });
  }
  mount() {
    const { register: e, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), e && (this.unmount = e(this.id));
  }
  unmount() {
  }
}
const ud = {
  animation: {
    Feature: ad
  },
  exit: {
    Feature: ld
  }
};
function Xt(t, e, n, r = { passive: !0 }) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n);
}
function te(t) {
  return {
    point: {
      x: t.pageX,
      y: t.pageY
    }
  };
}
const dd = (t) => (e) => jn(e) && t(e, te(e));
function $t(t, e, n, r) {
  return Xt(t, e, dd(n), r);
}
function Ws({ top: t, left: e, right: n, bottom: r }) {
  return {
    x: { min: e, max: n },
    y: { min: t, max: r }
  };
}
function hd({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function fd(t, e) {
  if (!e)
    return t;
  const n = e({ x: t.left, y: t.top }), r = e({ x: t.right, y: t.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x
  };
}
const $s = 1e-4, md = 1 - $s, pd = 1 + $s, Ys = 0.01, gd = 0 - Ys, yd = 0 + Ys;
function _(t) {
  return t.max - t.min;
}
function vd(t, e, n) {
  return Math.abs(t - e) <= n;
}
function Lr(t, e, n, r = 0.5) {
  t.origin = r, t.originPoint = N(e.min, e.max, t.origin), t.scale = _(n) / _(e), t.translate = N(n.min, n.max, t.origin) - t.originPoint, (t.scale >= md && t.scale <= pd || isNaN(t.scale)) && (t.scale = 1), (t.translate >= gd && t.translate <= yd || isNaN(t.translate)) && (t.translate = 0);
}
function Yt(t, e, n, r) {
  Lr(t.x, e.x, n.x, r ? r.originX : void 0), Lr(t.y, e.y, n.y, r ? r.originY : void 0);
}
function Or(t, e, n) {
  t.min = n.min + e.min, t.max = t.min + _(e);
}
function xd(t, e, n) {
  Or(t.x, e.x, n.x), Or(t.y, e.y, n.y);
}
function Fr(t, e, n) {
  t.min = e.min - n.min, t.max = t.min + _(e);
}
function _t(t, e, n) {
  Fr(t.x, e.x, n.x), Fr(t.y, e.y, n.y);
}
const Br = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Mt = () => ({
  x: Br(),
  y: Br()
}), Ir = () => ({ min: 0, max: 0 }), R = () => ({
  x: Ir(),
  y: Ir()
});
function H(t) {
  return [t("x"), t("y")];
}
function Fe(t) {
  return t === void 0 || t === 1;
}
function sn({ scale: t, scaleX: e, scaleY: n }) {
  return !Fe(t) || !Fe(e) || !Fe(n);
}
function mt(t) {
  return sn(t) || _s(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function _s(t) {
  return jr(t.x) || jr(t.y);
}
function jr(t) {
  return t && t !== "0%";
}
function ve(t, e, n) {
  const r = t - n, i = e * r;
  return n + i;
}
function Wr(t, e, n, r, i) {
  return i !== void 0 && (t = ve(t, i, r)), ve(t, n, r) + e;
}
function on(t, e = 0, n = 1, r, i) {
  t.min = Wr(t.min, e, n, r, i), t.max = Wr(t.max, e, n, r, i);
}
function Us(t, { x: e, y: n }) {
  on(t.x, e.translate, e.scale, e.originPoint), on(t.y, n.translate, n.scale, n.originPoint);
}
const $r = 0.999999999999, Yr = 1.0000000000001;
function bd(t, e, n, r = !1) {
  const i = n.length;
  if (!i)
    return;
  e.x = e.y = 1;
  let o, s;
  for (let a = 0; a < i; a++) {
    o = n[a], s = o.projectionDelta;
    const { visualElement: c } = o.options;
    c && c.props.style && c.props.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && Dt(t, {
      x: -o.scroll.offset.x,
      y: -o.scroll.offset.y
    }), s && (e.x *= s.x.scale, e.y *= s.y.scale, Us(t, s)), r && mt(o.latestValues) && Dt(t, o.latestValues));
  }
  e.x < Yr && e.x > $r && (e.x = 1), e.y < Yr && e.y > $r && (e.y = 1);
}
function Ct(t, e) {
  t.min = t.min + e, t.max = t.max + e;
}
function _r(t, e, n, r, i = 0.5) {
  const o = N(t.min, t.max, i);
  on(t, e, n, o, r);
}
function Dt(t, e) {
  _r(t.x, e.x, e.scaleX, e.scale, e.originX), _r(t.y, e.y, e.scaleY, e.scale, e.originY);
}
function Ks(t, e) {
  return Ws(fd(t.getBoundingClientRect(), e));
}
function wd(t, e, n) {
  const r = Ks(t, n), { scroll: i } = e;
  return i && (Ct(r.x, i.offset.x), Ct(r.y, i.offset.y)), r;
}
const Hs = ({ current: t }) => t ? t.ownerDocument.defaultView : null, Ur = (t, e) => Math.abs(t - e);
function kd(t, e) {
  const n = Ur(t.x, e.x), r = Ur(t.y, e.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class zs {
  constructor(e, n, { transformPagePoint: r, contextWindow: i = window, dragSnapToOrigin: o = !1, distanceThreshold: s = 3 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const h = Ie(this.lastMoveEventInfo, this.history), m = this.startEvent !== null, p = kd(h.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!m && !p)
        return;
      const { point: g } = h, { timestamp: y } = F;
      this.history.push({ ...g, timestamp: y });
      const { onStart: v, onMove: x } = this.handlers;
      m || (v && v(this.lastMoveEvent, h), this.startEvent = this.lastMoveEvent), x && x(this.lastMoveEvent, h);
    }, this.handlePointerMove = (h, m) => {
      this.lastMoveEvent = h, this.lastMoveEventInfo = Be(m, this.transformPagePoint), V.update(this.updatePoint, !0);
    }, this.handlePointerUp = (h, m) => {
      this.end();
      const { onEnd: p, onSessionEnd: g, resumeAnimation: y } = this.handlers;
      if (this.dragSnapToOrigin && y && y(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const v = Ie(h.type === "pointercancel" ? this.lastMoveEventInfo : Be(m, this.transformPagePoint), this.history);
      this.startEvent && p && p(h, v), g && g(h, v);
    }, !jn(e))
      return;
    this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = r, this.distanceThreshold = s, this.contextWindow = i || window;
    const a = te(e), c = Be(a, this.transformPagePoint), { point: l } = c, { timestamp: u } = F;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: d } = n;
    d && d(e, Ie(c, this.history)), this.removeListeners = Qt($t(this.contextWindow, "pointermove", this.handlePointerMove), $t(this.contextWindow, "pointerup", this.handlePointerUp), $t(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), lt(this.updatePoint);
  }
}
function Be(t, e) {
  return e ? { point: e(t.point) } : t;
}
function Kr(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function Ie({ point: t }, e) {
  return {
    point: t,
    delta: Kr(t, Gs(e)),
    offset: Kr(t, Td(e)),
    velocity: Pd(e, 0.1)
  };
}
function Td(t) {
  return t[0];
}
function Gs(t) {
  return t[t.length - 1];
}
function Pd(t, e) {
  if (t.length < 2)
    return { x: 0, y: 0 };
  let n = t.length - 1, r = null;
  const i = Gs(t);
  for (; n >= 0 && (r = t[n], !(i.timestamp - r.timestamp > /* @__PURE__ */ X(e))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const o = /* @__PURE__ */ Z(i.timestamp - r.timestamp);
  if (o === 0)
    return { x: 0, y: 0 };
  const s = {
    x: (i.x - r.x) / o,
    y: (i.y - r.y) / o
  };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function Sd(t, { min: e, max: n }, r) {
  return e !== void 0 && t < e ? t = r ? N(e, t, r.min) : Math.max(t, e) : n !== void 0 && t > n && (t = r ? N(n, t, r.max) : Math.min(t, n)), t;
}
function Hr(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
  };
}
function Md(t, { top: e, left: n, bottom: r, right: i }) {
  return {
    x: Hr(t.x, n, i),
    y: Hr(t.y, e, r)
  };
}
function zr(t, e) {
  let n = e.min - t.min, r = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, r] = [r, n]), { min: n, max: r };
}
function Cd(t, e) {
  return {
    x: zr(t.x, e.x),
    y: zr(t.y, e.y)
  };
}
function Dd(t, e) {
  let n = 0.5;
  const r = _(t), i = _(e);
  return i > r ? n = /* @__PURE__ */ Ut(e.min, e.max - r, t.min) : r > i && (n = /* @__PURE__ */ Ut(t.min, t.max - i, e.min)), rt(0, 1, n);
}
function Ad(t, e) {
  const n = {};
  return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
}
const an = 0.35;
function Vd(t = an) {
  return t === !1 ? t = 0 : t === !0 && (t = an), {
    x: Gr(t, "left", "right"),
    y: Gr(t, "top", "bottom")
  };
}
function Gr(t, e, n) {
  return {
    min: qr(t, e),
    max: qr(t, n)
  };
}
function qr(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const Ed = /* @__PURE__ */ new WeakMap();
class Nd {
  constructor(e) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = R(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e;
  }
  start(e, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1)
      return;
    const o = (d) => {
      const { dragSnapToOrigin: h } = this.getProps();
      h ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(te(d).point);
    }, s = (d, h) => {
      const { drag: m, dragPropagation: p, onDragStart: g } = this.getProps();
      if (m && !p && (this.openDragLock && this.openDragLock(), this.openDragLock = Kl(m), !this.openDragLock))
        return;
      this.latestPointerEvent = d, this.latestPanInfo = h, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), H((v) => {
        let x = this.getAxisMotionValue(v).get() || 0;
        if (J.test(x)) {
          const { projection: b } = this.visualElement;
          if (b && b.layout) {
            const S = b.layout.layoutBox[v];
            S && (x = _(S) * (parseFloat(x) / 100));
          }
        }
        this.originPoint[v] = x;
      }), g && V.postRender(() => g(d, h)), nn(this.visualElement, "transform");
      const { animationState: y } = this.visualElement;
      y && y.setActive("whileDrag", !0);
    }, a = (d, h) => {
      this.latestPointerEvent = d, this.latestPanInfo = h;
      const { dragPropagation: m, dragDirectionLock: p, onDirectionLock: g, onDrag: y } = this.getProps();
      if (!m && !this.openDragLock)
        return;
      const { offset: v } = h;
      if (p && this.currentDirection === null) {
        this.currentDirection = Rd(v), this.currentDirection !== null && g && g(this.currentDirection);
        return;
      }
      this.updateAxis("x", h.point, v), this.updateAxis("y", h.point, v), this.visualElement.render(), y && y(d, h);
    }, c = (d, h) => {
      this.latestPointerEvent = d, this.latestPanInfo = h, this.stop(d, h), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, l = () => H((d) => {
      var h;
      return this.getAnimationState(d) === "paused" && ((h = this.getAxisMotionValue(d).animation) == null ? void 0 : h.play());
    }), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new zs(e, {
      onSessionStart: o,
      onStart: s,
      onMove: a,
      onSessionEnd: c,
      resumeAnimation: l
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      distanceThreshold: r,
      contextWindow: Hs(this.visualElement)
    });
  }
  /**
   * @internal
   */
  stop(e, n) {
    const r = e || this.latestPointerEvent, i = n || this.latestPanInfo, o = this.isDragging;
    if (this.cancel(), !o || !i || !r)
      return;
    const { velocity: s } = i;
    this.startAnimation(s);
    const { onDragEnd: a } = this.getProps();
    a && V.postRender(() => a(r, i));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: n } = this.visualElement;
    e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: r } = this.getProps();
    !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(e, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !se(e, i, this.currentDirection))
      return;
    const o = this.getAxisMotionValue(e);
    let s = this.originPoint[e] + r[e];
    this.constraints && this.constraints[e] && (s = Sd(s, this.constraints[e], this.elastic[e])), o.set(s);
  }
  resolveConstraints() {
    var o;
    const { dragConstraints: e, dragElastic: n } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (o = this.visualElement.projection) == null ? void 0 : o.layout, i = this.constraints;
    e && St(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && r ? this.constraints = Md(r.layoutBox, e) : this.constraints = !1, this.elastic = Vd(n), i !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && H((s) => {
      this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = Ad(r.layoutBox[s], this.constraints[s]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !St(e))
      return !1;
    const r = e.current;
    it(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: i } = this.visualElement;
    if (!i || !i.layout)
      return !1;
    const o = wd(r, i.root, this.visualElement.getTransformPagePoint());
    let s = Cd(i.layout.layoutBox, o);
    if (n) {
      const a = n(hd(s));
      this.hasMutatedConstraints = !!a, a && (s = Ws(a));
    }
    return s;
  }
  startAnimation(e) {
    const { drag: n, dragMomentum: r, dragElastic: i, dragTransition: o, dragSnapToOrigin: s, onDragTransitionEnd: a } = this.getProps(), c = this.constraints || {}, l = H((u) => {
      if (!se(u, n, this.currentDirection))
        return;
      let d = c && c[u] || {};
      s && (d = { min: 0, max: 0 });
      const h = i ? 200 : 1e6, m = i ? 40 : 1e7, p = {
        type: "inertia",
        velocity: r ? e[u] : 0,
        bounceStiffness: h,
        bounceDamping: m,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...o,
        ...d
      };
      return this.startAxisValueAnimation(u, p);
    });
    return Promise.all(l).then(a);
  }
  startAxisValueAnimation(e, n) {
    const r = this.getAxisMotionValue(e);
    return nn(this.visualElement, e), r.start(qn(e, r, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    H((e) => this.getAxisMotionValue(e).stop());
  }
  pauseAnimation() {
    H((e) => {
      var n;
      return (n = this.getAxisMotionValue(e).animation) == null ? void 0 : n.pause();
    });
  }
  getAnimationState(e) {
    var n;
    return (n = this.getAxisMotionValue(e).animation) == null ? void 0 : n.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(e) {
    const n = `_drag${e.toUpperCase()}`, r = this.visualElement.getProps(), i = r[n];
    return i || this.visualElement.getValue(e, (r.initial ? r.initial[e] : void 0) || 0);
  }
  snapToCursor(e) {
    H((n) => {
      const { drag: r } = this.getProps();
      if (!se(n, r, this.currentDirection))
        return;
      const { projection: i } = this.visualElement, o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: a } = i.layout.layoutBox[n];
        o.set(e[n] - N(s, a, 0.5));
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
    const { drag: e, dragConstraints: n } = this.getProps(), { projection: r } = this.visualElement;
    if (!St(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    H((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const c = a.get();
        i[s] = Dd({ min: c, max: c }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), H((s) => {
      if (!se(s, e, null))
        return;
      const a = this.getAxisMotionValue(s), { min: c, max: l } = this.constraints[s];
      a.set(N(c, l, i[s]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Ed.set(this.visualElement, this);
    const e = this.visualElement.current, n = $t(e, "pointerdown", (c) => {
      const { drag: l, dragListener: u = !0 } = this.getProps();
      l && u && this.start(c);
    }), r = () => {
      const { dragConstraints: c } = this.getProps();
      St(c) && c.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: i } = this.visualElement, o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), V.read(r);
    const s = Xt(window, "resize", () => this.scalePositionWithinConstraints()), a = i.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: l }) => {
      this.isDragging && l && (H((u) => {
        const d = this.getAxisMotionValue(u);
        d && (this.originPoint[u] += c[u].translate, d.set(d.get() + c[u].translate));
      }), this.visualElement.render());
    });
    return () => {
      s(), n(), o(), a && a();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: i = !1, dragConstraints: o = !1, dragElastic: s = an, dragMomentum: a = !0 } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: a
    };
  }
}
function se(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function Rd(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
}
class Ld extends dt {
  constructor(e) {
    super(e), this.removeGroupControls = z, this.removeListeners = z, this.controls = new Nd(e);
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || z;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Xr = (t) => (e, n) => {
  t && V.postRender(() => t(e, n));
};
class Od extends dt {
  constructor() {
    super(...arguments), this.removePointerDownListener = z;
  }
  onPointerDown(e) {
    this.session = new zs(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Hs(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: e, onPanStart: n, onPan: r, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: Xr(e),
      onStart: Xr(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session, i && V.postRender(() => i(o, s));
      }
    };
  }
  mount() {
    this.removePointerDownListener = $t(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const le = {
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
function Qr(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
const It = {
  correct: (t, e) => {
    if (!e.target)
      return t;
    if (typeof t == "string")
      if (T.test(t))
        t = parseFloat(t);
      else
        return t;
    const n = Qr(t, e.target.x), r = Qr(t, e.target.y);
    return `${n}% ${r}%`;
  }
}, Fd = {
  correct: (t, { treeScale: e, projectionDelta: n }) => {
    const r = t, i = ut.parse(t);
    if (i.length > 5)
      return r;
    const o = ut.createTransformer(t), s = typeof i[0] != "number" ? 1 : 0, a = n.x.scale * e.x, c = n.y.scale * e.y;
    i[0 + s] /= a, i[1 + s] /= c;
    const l = N(a, c, 0.5);
    return typeof i[2 + s] == "number" && (i[2 + s] /= l), typeof i[3 + s] == "number" && (i[3 + s] /= l), o(i);
  }
};
let Zr = !1;
class Bd extends po {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: r, layoutId: i } = this.props, { projection: o } = e;
    wu(Id), o && (n.group && n.group.add(o), r && r.register && i && r.register(o), Zr && o.root.didUpdate(), o.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), o.setOptions({
      ...o.options,
      onExitComplete: () => this.safeToRemove()
    })), le.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: n, visualElement: r, drag: i, isPresent: o } = this.props, { projection: s } = r;
    return s && (s.isPresent = o, Zr = !0, i || e.layoutDependency !== n || n === void 0 || e.isPresent !== o ? s.willUpdate() : this.safeToRemove(), e.isPresent !== o && (o ? s.promote() : s.relegate() || V.postRender(() => {
      const a = s.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e && (e.root.didUpdate(), In.postRender(() => {
      !e.currentAnimation && e.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: r } = this.props, { projection: i } = e;
    i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function qs(t) {
  const [e, n] = ks(), r = j(pn);
  return f(Bd, { ...t, layoutGroup: r, switchLayoutGroup: j(Cs), isPresent: e, safeToRemove: n });
}
const Id = {
  borderRadius: {
    ...It,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: It,
  borderTopRightRadius: It,
  borderBottomLeftRadius: It,
  borderBottomRightRadius: It,
  boxShadow: Fd
};
function jd(t, e, n) {
  const r = W(t) ? t : At(t);
  return r.start(qn("", r, e, n)), r.animation;
}
const Wd = (t, e) => t.depth - e.depth;
class $d {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(e) {
    vn(this.children, e), this.isDirty = !0;
  }
  remove(e) {
    xn(this.children, e), this.isDirty = !0;
  }
  forEach(e) {
    this.isDirty && this.children.sort(Wd), this.isDirty = !1, this.children.forEach(e);
  }
}
function Yd(t, e) {
  const n = U.now(), r = ({ timestamp: i }) => {
    const o = i - n;
    o >= e && (lt(r), t(o - e));
  };
  return V.setup(r, !0), () => lt(r);
}
const Xs = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], _d = Xs.length, Jr = (t) => typeof t == "string" ? parseFloat(t) : t, ti = (t) => typeof t == "number" || T.test(t);
function Ud(t, e, n, r, i, o) {
  i ? (t.opacity = N(0, n.opacity ?? 1, Kd(r)), t.opacityExit = N(e.opacity ?? 1, 0, Hd(r))) : o && (t.opacity = N(e.opacity ?? 1, n.opacity ?? 1, r));
  for (let s = 0; s < _d; s++) {
    const a = `border${Xs[s]}Radius`;
    let c = ei(e, a), l = ei(n, a);
    if (c === void 0 && l === void 0)
      continue;
    c || (c = 0), l || (l = 0), c === 0 || l === 0 || ti(c) === ti(l) ? (t[a] = Math.max(N(Jr(c), Jr(l), r), 0), (J.test(l) || J.test(c)) && (t[a] += "%")) : t[a] = l;
  }
  (e.rotate || n.rotate) && (t.rotate = N(e.rotate || 0, n.rotate || 0, r));
}
function ei(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const Kd = /* @__PURE__ */ Qs(0, 0.5, _i), Hd = /* @__PURE__ */ Qs(0.5, 0.95, z);
function Qs(t, e, n) {
  return (r) => r < t ? 0 : r > e ? 1 : n(/* @__PURE__ */ Ut(t, e, r));
}
function ni(t, e) {
  t.min = e.min, t.max = e.max;
}
function K(t, e) {
  ni(t.x, e.x), ni(t.y, e.y);
}
function ri(t, e) {
  t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin;
}
function ii(t, e, n, r, i) {
  return t -= e, t = ve(t, 1 / n, r), i !== void 0 && (t = ve(t, 1 / i, r)), t;
}
function zd(t, e = 0, n = 1, r = 0.5, i, o = t, s = t) {
  if (J.test(e) && (e = parseFloat(e), e = N(s.min, s.max, e / 100) - s.min), typeof e != "number")
    return;
  let a = N(o.min, o.max, r);
  t === o && (a -= e), t.min = ii(t.min, e, n, a, i), t.max = ii(t.max, e, n, a, i);
}
function si(t, e, [n, r, i], o, s) {
  zd(t, e[n], e[r], e[i], e.scale, o, s);
}
const Gd = ["x", "scaleX", "originX"], qd = ["y", "scaleY", "originY"];
function oi(t, e, n, r) {
  si(t.x, e, Gd, n ? n.x : void 0, r ? r.x : void 0), si(t.y, e, qd, n ? n.y : void 0, r ? r.y : void 0);
}
function ai(t) {
  return t.translate === 0 && t.scale === 1;
}
function Zs(t) {
  return ai(t.x) && ai(t.y);
}
function ci(t, e) {
  return t.min === e.min && t.max === e.max;
}
function Xd(t, e) {
  return ci(t.x, e.x) && ci(t.y, e.y);
}
function li(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
}
function Js(t, e) {
  return li(t.x, e.x) && li(t.y, e.y);
}
function ui(t) {
  return _(t.x) / _(t.y);
}
function di(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
}
class Qd {
  constructor() {
    this.members = [];
  }
  add(e) {
    vn(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (xn(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    const n = this.members.findIndex((i) => e === i);
    if (n === 0)
      return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(e, n) {
    const r = this.lead;
    if (e !== r && (this.prevLead = r, this.lead = e, e.show(), r)) {
      r.instance && r.scheduleRender(), e.scheduleRender(), e.resumeFrom = r, n && (e.resumeFrom.preserveOpacity = !0), r.snapshot && (e.snapshot = r.snapshot, e.snapshot.latestValues = r.animationValues || r.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      const { crossfade: i } = e.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: n, resumingFrom: r } = e;
      n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete();
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
function Zd(t, e, n) {
  let r = "";
  const i = t.x.translate / e.x, o = t.y.translate / e.y, s = (n == null ? void 0 : n.z) || 0;
  if ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `), (e.x !== 1 || e.y !== 1) && (r += `scale(${1 / e.x}, ${1 / e.y}) `), n) {
    const { transformPerspective: l, rotate: u, rotateX: d, rotateY: h, skewX: m, skewY: p } = n;
    l && (r = `perspective(${l}px) ${r}`), u && (r += `rotate(${u}deg) `), d && (r += `rotateX(${d}deg) `), h && (r += `rotateY(${h}deg) `), m && (r += `skewX(${m}deg) `), p && (r += `skewY(${p}deg) `);
  }
  const a = t.x.scale * e.x, c = t.y.scale * e.y;
  return (a !== 1 || c !== 1) && (r += `scale(${a}, ${c})`), r || "none";
}
const je = ["", "X", "Y", "Z"], Jd = 1e3;
let th = 0;
function We(t, e, n, r) {
  const { latestValues: i } = e;
  i[t] && (n[t] = i[t], e.setStaticValue(t, 0), r && (r[t] = 0));
}
function to(t) {
  if (t.hasCheckedOptimisedAppear = !0, t.root === t)
    return;
  const { visualElement: e } = t.options;
  if (!e)
    return;
  const n = Fs(e);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: o } = t.options;
    window.MotionCancelOptimisedAnimation(n, "transform", V, !(i || o));
  }
  const { parent: r } = t;
  r && !r.hasCheckedOptimisedAppear && to(r);
}
function eo({ attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
  return class {
    constructor(s = {}, a = e == null ? void 0 : e()) {
      this.id = th++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(rh), this.nodes.forEach(ah), this.nodes.forEach(ch), this.nodes.forEach(ih);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = s, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let c = 0; c < this.path.length; c++)
        this.path[c].shouldResetTransform = !0;
      this.root === this && (this.nodes = new $d());
    }
    addEventListener(s, a) {
      return this.eventHandlers.has(s) || this.eventHandlers.set(s, new wn()), this.eventHandlers.get(s).add(a);
    }
    notifyListeners(s, ...a) {
      const c = this.eventHandlers.get(s);
      c && c.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    /**
     * Lifecycles
     */
    mount(s) {
      if (this.instance)
        return;
      this.isSVG = ws(s) && !Ql(s), this.instance = s;
      const { layoutId: a, layout: c, visualElement: l } = this.options;
      if (l && !l.current && l.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (c || a) && (this.isLayoutDirty = !0), t) {
        let u, d = 0;
        const h = () => this.root.updateBlockedByResize = !1;
        V.read(() => {
          d = window.innerWidth;
        }), t(s, () => {
          const m = window.innerWidth;
          m !== d && (d = m, this.root.updateBlockedByResize = !0, u && u(), u = Yd(h, 250), le.hasAnimatedSinceResize && (le.hasAnimatedSinceResize = !1, this.nodes.forEach(mi)));
        });
      }
      a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && l && (a || c) && this.addEventListener("didUpdate", ({ delta: u, hasLayoutChanged: d, hasRelativeLayoutChanged: h, layout: m }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const p = this.options.transition || l.getDefaultTransition() || fh, { onLayoutAnimationStart: g, onLayoutAnimationComplete: y } = l.getProps(), v = !this.targetLayout || !Js(this.targetLayout, m), x = !d && h;
        if (this.options.layoutRoot || this.resumeFrom || x || d && (v || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const b = {
            ...Fn(p, "layout"),
            onPlay: g,
            onComplete: y
          };
          (l.shouldReduceMotion || this.options.layoutRoot) && (b.delay = 0, b.type = !1), this.startAnimation(b), this.setAnimationOrigin(u, x);
        } else
          d || mi(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = m;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), lt(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(lh), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && to(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u];
        d.shouldResetTransform = !0, d.updateScroll("snapshot"), d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: a, layout: c } = this.options;
      if (a === void 0 && !c)
        return;
      const l = this.getTransformTemplate();
      this.prevTransformTemplateValue = l ? l(this.latestValues, "") : void 0, this.updateSnapshot(), s && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(hi);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(fi);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(oh), this.nodes.forEach(eh), this.nodes.forEach(nh)) : this.nodes.forEach(fi), this.clearAllSnapshots();
      const a = U.now();
      F.delta = rt(0, 1e3 / 60, a - F.timestamp), F.timestamp = a, F.isProcessing = !0, Ve.update.process(F), Ve.preRender.process(F), Ve.render.process(F), F.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, In.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(sh), this.sharedNodes.forEach(uh);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, V.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      V.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !_(this.snapshot.measuredBox.x) && !_(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let c = 0; c < this.path.length; c++)
          this.path[c].updateScroll();
      const s = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = R(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0);
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (a = !1), a && this.instance) {
        const c = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: c,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : c
        };
      }
    }
    resetTransform() {
      if (!i)
        return;
      const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !Zs(this.projectionDelta), c = this.getTransformTemplate(), l = c ? c(this.latestValues, "") : void 0, u = l !== this.prevTransformTemplateValue;
      s && this.instance && (a || mt(this.latestValues) || u) && (i(this.instance, l), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let c = this.removeElementScroll(a);
      return s && (c = this.removeTransform(c)), mh(c), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: c,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var l;
      const { visualElement: s } = this.options;
      if (!s)
        return R();
      const a = s.measureViewportBox();
      if (!(((l = this.scroll) == null ? void 0 : l.wasRoot) || this.path.some(ph))) {
        const { scroll: u } = this.root;
        u && (Ct(a.x, u.offset.x), Ct(a.y, u.offset.y));
      }
      return a;
    }
    removeElementScroll(s) {
      var c;
      const a = R();
      if (K(a, s), (c = this.scroll) != null && c.wasRoot)
        return a;
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l], { scroll: d, options: h } = u;
        u !== this.root && d && h.layoutScroll && (d.wasRoot && K(a, s), Ct(a.x, d.offset.x), Ct(a.y, d.offset.y));
      }
      return a;
    }
    applyTransform(s, a = !1) {
      const c = R();
      K(c, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        !a && u.options.layoutScroll && u.scroll && u !== u.root && Dt(c, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), mt(u.latestValues) && Dt(c, u.latestValues);
      }
      return mt(this.latestValues) && Dt(c, this.latestValues), c;
    }
    removeTransform(s) {
      const a = R();
      K(a, s);
      for (let c = 0; c < this.path.length; c++) {
        const l = this.path[c];
        if (!l.instance || !mt(l.latestValues))
          continue;
        sn(l.latestValues) && l.updateSnapshot();
        const u = R(), d = l.measurePageBox();
        K(u, d), oi(a, l.latestValues, l.snapshot ? l.snapshot.layoutBox : void 0, u);
      }
      return mt(this.latestValues) && oi(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      this.targetDelta = s, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== F.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var h;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== a;
      if (!(s || c && this.isSharedProjectionDirty || this.isProjectionDirty || (h = this.parent) != null && h.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: u, layoutId: d } = this.options;
      if (!(!this.layout || !(u || d))) {
        if (this.resolvedRelativeTargetAt = F.timestamp, !this.targetDelta && !this.relativeTarget) {
          const m = this.getClosestProjectingParent();
          m && m.layout && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = R(), this.relativeTargetOrigin = R(), _t(this.relativeTargetOrigin, this.layout.layoutBox, m.layout.layoutBox), K(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = R(), this.targetWithTransforms = R()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), xd(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : K(this.target, this.layout.layoutBox), Us(this.target, this.targetDelta)) : K(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const m = this.getClosestProjectingParent();
          m && !!m.resumingFrom == !!this.resumingFrom && !m.options.layoutScroll && m.target && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = R(), this.relativeTargetOrigin = R(), _t(this.relativeTargetOrigin, this.target, m.target), K(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || sn(this.parent.latestValues) || _s(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var p;
      const s = this.getLead(), a = !!this.resumingFrom || this !== s;
      let c = !0;
      if ((this.isProjectionDirty || (p = this.parent) != null && p.isProjectionDirty) && (c = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === F.timestamp && (c = !1), c)
        return;
      const { layout: l, layoutId: u } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(l || u))
        return;
      K(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x, h = this.treeScale.y;
      bd(this.layoutCorrected, this.treeScale, this.path, a), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox, s.targetWithTransforms = R());
      const { target: m } = s;
      if (!m) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (ri(this.prevProjectionDelta.x, this.projectionDelta.x), ri(this.prevProjectionDelta.y, this.projectionDelta.y)), Yt(this.projectionDelta, this.layoutCorrected, m, this.latestValues), (this.treeScale.x !== d || this.treeScale.y !== h || !di(this.projectionDelta.x, this.prevProjectionDelta.x) || !di(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", m));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var a;
      if ((a = this.options.visualElement) == null || a.scheduleRender(), s) {
        const c = this.getStack();
        c && c.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = Mt(), this.projectionDelta = Mt(), this.projectionDeltaWithTransform = Mt();
    }
    setAnimationOrigin(s, a = !1) {
      const c = this.snapshot, l = c ? c.latestValues : {}, u = { ...this.latestValues }, d = Mt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const h = R(), m = c ? c.source : void 0, p = this.layout ? this.layout.source : void 0, g = m !== p, y = this.getStack(), v = !y || y.members.length <= 1, x = !!(g && !v && this.options.crossfade === !0 && !this.path.some(hh));
      this.animationProgress = 0;
      let b;
      this.mixTargetDelta = (S) => {
        const w = S / 1e3;
        pi(d.x, s.x, w), pi(d.y, s.y, w), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (_t(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox), dh(this.relativeTarget, this.relativeTargetOrigin, h, w), b && Xd(this.relativeTarget, b) && (this.isProjectionDirty = !1), b || (b = R()), K(b, this.relativeTarget)), g && (this.animationValues = u, Ud(u, l, this.latestValues, w, x, v)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = w;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      var a, c, l;
      this.notifyListeners("animationStart"), (a = this.currentAnimation) == null || a.stop(), (l = (c = this.resumingFrom) == null ? void 0 : c.currentAnimation) == null || l.stop(), this.pendingAnimation && (lt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = V.update(() => {
        le.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = At(0)), this.currentAnimation = jd(this.motionValue, [0, 1e3], {
          ...s,
          velocity: 0,
          isSync: !0,
          onUpdate: (u) => {
            this.mixTargetDelta(u), s.onUpdate && s.onUpdate(u);
          },
          onStop: () => {
          },
          onComplete: () => {
            s.onComplete && s.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const s = this.getStack();
      s && s.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Jd), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let { targetWithTransforms: a, target: c, layout: l, latestValues: u } = s;
      if (!(!a || !c || !l)) {
        if (this !== s && this.layout && l && no(this.options.animationType, this.layout.layoutBox, l.layoutBox)) {
          c = this.target || R();
          const d = _(this.layout.layoutBox.x);
          c.x.min = s.target.x.min, c.x.max = c.x.min + d;
          const h = _(this.layout.layoutBox.y);
          c.y.min = s.target.y.min, c.y.max = c.y.min + h;
        }
        K(a, c), Dt(a, u), Yt(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new Qd()), this.sharedNodes.get(s).add(a);
      const l = a.options.initialPromotionConfig;
      a.promote({
        transition: l ? l.transition : void 0,
        preserveFollowOpacity: l && l.shouldPreserveFollowOpacity ? l.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: s } = this.options;
      return s ? ((a = this.getStack()) == null ? void 0 : a.lead) || this : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: s } = this.options;
      return s ? (a = this.getStack()) == null ? void 0 : a.prevLead : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s)
        return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: c } = {}) {
      const l = this.getStack();
      l && l.promote(this, c), s && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s)
        return;
      let a = !1;
      const { latestValues: c } = s;
      if ((c.z || c.rotate || c.rotateX || c.rotateY || c.rotateZ || c.skewX || c.skewY) && (a = !0), !a)
        return;
      const l = {};
      c.z && We("z", s, l, this.animationValues);
      for (let u = 0; u < je.length; u++)
        We(`rotate${je[u]}`, s, l, this.animationValues), We(`skew${je[u]}`, s, l, this.animationValues);
      s.render();
      for (const u in l)
        s.setStaticValue(u, l[u]), this.animationValues && (this.animationValues[u] = l[u]);
      s.scheduleRender();
    }
    applyProjectionStyles(s, a) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        s.visibility = "hidden";
        return;
      }
      const c = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, s.visibility = "", s.opacity = "", s.pointerEvents = ce(a == null ? void 0 : a.pointerEvents) || "", s.transform = c ? c(this.latestValues, "") : "none";
        return;
      }
      const l = this.getLead();
      if (!this.projectionDelta || !this.layout || !l.target) {
        this.options.layoutId && (s.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, s.pointerEvents = ce(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !mt(this.latestValues) && (s.transform = c ? c({}, "") : "none", this.hasProjected = !1);
        return;
      }
      s.visibility = "";
      const u = l.animationValues || l.latestValues;
      this.applyTransformsToTarget();
      let d = Zd(this.projectionDeltaWithTransform, this.treeScale, u);
      c && (d = c(u, d)), s.transform = d;
      const { x: h, y: m } = this.projectionDelta;
      s.transformOrigin = `${h.origin * 100}% ${m.origin * 100}% 0`, l.animationValues ? s.opacity = l === this ? u.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : u.opacityExit : s.opacity = l === this ? u.opacity !== void 0 ? u.opacity : "" : u.opacityExit !== void 0 ? u.opacityExit : 0;
      for (const p in Gt) {
        if (u[p] === void 0)
          continue;
        const { correct: g, applyTo: y, isCSSVariable: v } = Gt[p], x = d === "none" ? u[p] : g(u[p], l);
        if (y) {
          const b = y.length;
          for (let S = 0; S < b; S++)
            s[y[S]] = x;
        } else
          v ? this.options.visualElement.renderState.vars[p] = x : s[p] = x;
      }
      this.options.layoutId && (s.pointerEvents = l === this ? ce(a == null ? void 0 : a.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) == null ? void 0 : a.stop();
      }), this.root.nodes.forEach(hi), this.root.sharedNodes.clear();
    }
  };
}
function eh(t) {
  t.updateLayout();
}
function nh(t) {
  var n;
  const e = ((n = t.resumeFrom) == null ? void 0 : n.snapshot) || t.snapshot;
  if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = t.layout, { animationType: o } = t.options, s = e.source !== t.layout.source;
    o === "size" ? H((d) => {
      const h = s ? e.measuredBox[d] : e.layoutBox[d], m = _(h);
      h.min = r[d].min, h.max = h.min + m;
    }) : no(o, e.layoutBox, r) && H((d) => {
      const h = s ? e.measuredBox[d] : e.layoutBox[d], m = _(r[d]);
      h.max = h.min + m, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[d].max = t.relativeTarget[d].min + m);
    });
    const a = Mt();
    Yt(a, r, e.layoutBox);
    const c = Mt();
    s ? Yt(c, t.applyTransform(i, !0), e.measuredBox) : Yt(c, r, e.layoutBox);
    const l = !Zs(a);
    let u = !1;
    if (!t.resumeFrom) {
      const d = t.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: h, layout: m } = d;
        if (h && m) {
          const p = R();
          _t(p, e.layoutBox, h.layoutBox);
          const g = R();
          _t(g, r, m.layoutBox), Js(p, g) || (u = !0), d.options.layoutRoot && (t.relativeTarget = g, t.relativeTargetOrigin = p, t.relativeParent = d);
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: r,
      snapshot: e,
      delta: c,
      layoutDelta: a,
      hasLayoutChanged: l,
      hasRelativeLayoutChanged: u
    });
  } else if (t.isLead()) {
    const { onExitComplete: r } = t.options;
    r && r();
  }
  t.options.transition = void 0;
}
function rh(t) {
  t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function ih(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function sh(t) {
  t.clearSnapshot();
}
function hi(t) {
  t.clearMeasurements();
}
function fi(t) {
  t.isLayoutDirty = !1;
}
function oh(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function mi(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0;
}
function ah(t) {
  t.resolveTargetDelta();
}
function ch(t) {
  t.calcProjection();
}
function lh(t) {
  t.resetSkewAndRotation();
}
function uh(t) {
  t.removeLeadSnapshot();
}
function pi(t, e, n) {
  t.translate = N(e.translate, 0, n), t.scale = N(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
}
function gi(t, e, n, r) {
  t.min = N(e.min, n.min, r), t.max = N(e.max, n.max, r);
}
function dh(t, e, n, r) {
  gi(t.x, e.x, n.x, r), gi(t.y, e.y, n.y, r);
}
function hh(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const fh = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, yi = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), vi = yi("applewebkit/") && !yi("chrome/") ? Math.round : z;
function xi(t) {
  t.min = vi(t.min), t.max = vi(t.max);
}
function mh(t) {
  xi(t.x), xi(t.y);
}
function no(t, e, n) {
  return t === "position" || t === "preserve-aspect" && !vd(ui(e), ui(n), 0.2);
}
function ph(t) {
  var e;
  return t !== t.root && ((e = t.scroll) == null ? void 0 : e.wasRoot);
}
const gh = eo({
  attachResizeListener: (t, e) => Xt(t, "resize", e),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), $e = {
  current: void 0
}, ro = eo({
  measureScroll: (t) => ({
    x: t.scrollLeft,
    y: t.scrollTop
  }),
  defaultParent: () => {
    if (!$e.current) {
      const t = new gh({});
      t.mount(window), t.setOptions({ layoutScroll: !0 }), $e.current = t;
    }
    return $e.current;
  },
  resetTransform: (t, e) => {
    t.style.transform = e !== void 0 ? e : "none";
  },
  checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
}), yh = {
  pan: {
    Feature: Od
  },
  drag: {
    Feature: Ld,
    ProjectionNode: ro,
    MeasureLayout: qs
  }
};
function bi(t, e, n) {
  const { props: r } = t;
  t.animationState && r.whileHover && t.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n, o = r[i];
  o && V.postRender(() => o(e, te(e)));
}
class vh extends dt {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = Hl(e, (n, r) => (bi(this.node, r, "Start"), (i) => bi(this.node, i, "End"))));
  }
  unmount() {
  }
}
class xh extends dt {
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
    this.unmount = Qt(Xt(this.node.current, "focus", () => this.onFocus()), Xt(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function wi(t, e, n) {
  const { props: r } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled)
    return;
  t.animationState && r.whileTap && t.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n), o = r[i];
  o && V.postRender(() => o(e, te(e)));
}
class bh extends dt {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = Xl(e, (n, r) => (wi(this.node, r, "Start"), (i, { success: o }) => wi(this.node, i, o ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const cn = /* @__PURE__ */ new WeakMap(), Ye = /* @__PURE__ */ new WeakMap(), wh = (t) => {
  const e = cn.get(t.target);
  e && e(t);
}, kh = (t) => {
  t.forEach(wh);
};
function Th({ root: t, ...e }) {
  const n = t || document;
  Ye.has(n) || Ye.set(n, {});
  const r = Ye.get(n), i = JSON.stringify(e);
  return r[i] || (r[i] = new IntersectionObserver(kh, { root: t, ...e })), r[i];
}
function Ph(t, e, n) {
  const r = Th(e);
  return cn.set(t, n), r.observe(t), () => {
    cn.delete(t), r.unobserve(t);
  };
}
const Sh = {
  some: 0,
  all: 1
};
class Mh extends dt {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(), { root: n, margin: r, amount: i = "some", once: o } = e, s = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof i == "number" ? i : Sh[i]
    }, a = (c) => {
      const { isIntersecting: l } = c;
      if (this.isInView === l || (this.isInView = l, o && !l && this.hasEnteredView))
        return;
      l && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", l);
      const { onViewportEnter: u, onViewportLeave: d } = this.node.getProps(), h = l ? u : d;
      h && h(c);
    };
    return Ph(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Ch(e, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Ch({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const Dh = {
  inView: {
    Feature: Mh
  },
  tap: {
    Feature: bh
  },
  focus: {
    Feature: xh
  },
  hover: {
    Feature: vh
  }
}, Ah = {
  layout: {
    ProjectionNode: ro,
    MeasureLayout: qs
  }
}, ln = { current: null }, io = { current: !1 };
function Vh() {
  if (io.current = !0, !!yn)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => ln.current = t.matches;
      t.addEventListener("change", e), e();
    } else
      ln.current = !1;
}
const Eh = /* @__PURE__ */ new WeakMap();
function Nh(t, e, n) {
  for (const r in e) {
    const i = e[r], o = n[r];
    if (W(i))
      t.addValue(r, i);
    else if (W(o))
      t.addValue(r, At(i, { owner: t }));
    else if (o !== i)
      if (t.hasValue(r)) {
        const s = t.getValue(r);
        s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i);
      } else {
        const s = t.getStaticValue(r);
        t.addValue(r, At(s !== void 0 ? s : i, { owner: t }));
      }
  }
  for (const r in n)
    e[r] === void 0 && t.removeValue(r);
  return e;
}
const ki = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class Rh {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(e, n, r) {
    return {};
  }
  constructor({ parent: e, props: n, presenceContext: r, reducedMotionConfig: i, blockInitialAnimation: o, visualState: s }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Ln, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const h = U.now();
      this.renderScheduledAt < h && (this.renderScheduledAt = h, V.render(this.render, !1, !0));
    };
    const { latestValues: c, renderState: l } = s;
    this.latestValues = c, this.baseTarget = { ...c }, this.initialValues = n.initial ? { ...c } : {}, this.renderState = l, this.parent = e, this.props = n, this.presenceContext = r, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = i, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = Se(n), this.isVariantNode = Ss(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
    const { willChange: u, ...d } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const h in d) {
      const m = d[h];
      c[h] !== void 0 && W(m) && m.set(c[h], !1);
    }
  }
  mount(e) {
    this.current = e, Eh.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), io.current || Vh(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : ln.current, process.env.NODE_ENV !== "production" && kn(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), lt(this.notifyUpdate), lt(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const e in this.events)
      this.events[e].clear();
    for (const e in this.features) {
      const n = this.features[e];
      n && (n.unmount(), n.isMounted = !1);
    }
    this.current = null;
  }
  bindToMotionValue(e, n) {
    this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
    const r = Ot.has(e);
    r && this.onBindTransform && this.onBindTransform();
    const i = n.on("change", (a) => {
      this.latestValues[e] = a, this.props.onUpdate && V.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0);
    }), o = n.on("renderRequest", this.scheduleRender);
    let s;
    window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, e, n)), this.valueSubscriptions.set(e, () => {
      i(), o(), s && s(), n.owner && n.stop();
    });
  }
  sortNodePosition(e) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = "animation";
    for (e in Vt) {
      const n = Vt[e];
      if (!n)
        continue;
      const { isEnabled: r, Feature: i } = n;
      if (!this.features[e] && i && r(this.props) && (this.features[e] = new i(this)), this.features[e]) {
        const o = this.features[e];
        o.isMounted ? o.update() : (o.mount(), o.isMounted = !0);
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : R();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(e, n) {
    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let r = 0; r < ki.length; r++) {
      const i = ki[r];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const o = "on" + i, s = e[o];
      s && (this.propEventSubscriptions[i] = this.on(i, s));
    }
    this.prevMotionValues = Nh(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(e, n) {
    const r = this.values.get(e);
    n !== r && (r && this.removeValue(e), this.bindToMotionValue(e, n), this.values.set(e, n), this.latestValues[e] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    n && (n(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e])
      return this.props.values[e];
    let r = this.values.get(e);
    return r === void 0 && n !== void 0 && (r = At(n === null ? void 0 : n, { owner: this }), this.addValue(e, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(e, n) {
    let r = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
    return r != null && (typeof r == "string" && (Ri(r) || Oi(r)) ? r = parseFloat(r) : !Jl(r) && ut.test(n) && (r = gs(e, n)), this.setBaseTarget(e, W(r) ? r.get() : r)), W(r) ? r.get() : r;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(e) {
    var o;
    const { initial: n } = this.props;
    let r;
    if (typeof n == "string" || typeof n == "object") {
      const s = zn(this.props, n, (o = this.presenceContext) == null ? void 0 : o.custom);
      s && (r = s[e]);
    }
    if (n && r !== void 0)
      return r;
    const i = this.getBaseTargetFromProps(this.props, e);
    return i !== void 0 && !W(i) ? i : this.initialValues[e] !== void 0 && r === void 0 ? void 0 : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new wn()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
}
class so extends Rh {
  constructor() {
    super(...arguments), this.KeyframeResolver = $l;
  }
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    return e.style ? e.style[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: r }) {
    delete n[e], delete r[e];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    W(e) && (this.childSubscription = e.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function oo(t, { style: e, vars: n }, r, i) {
  const o = t.style;
  let s;
  for (s in e)
    o[s] = e[s];
  i == null || i.applyProjectionStyles(o, r);
  for (s in n)
    o.setProperty(s, n[s]);
}
function Lh(t) {
  return window.getComputedStyle(t);
}
class Oh extends so {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = oo;
  }
  readValueFromInstance(e, n) {
    var r;
    if (Ot.has(n))
      return (r = this.projection) != null && r.isProjecting ? qe(n) : sl(e, n);
    {
      const i = Lh(e), o = (Sn(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return Ks(e, n);
  }
  build(e, n, r) {
    Un(e, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, r) {
    return Gn(e, n, r);
  }
}
const ao = /* @__PURE__ */ new Set([
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
function Fh(t, e, n, r) {
  oo(t, e, void 0, r);
  for (const i in e.attrs)
    t.setAttribute(ao.has(i) ? i : _n(i), e.attrs[i]);
}
class Bh extends so {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = R;
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (Ot.has(n)) {
      const r = ps(n);
      return r && r.default || 0;
    }
    return n = ao.has(n) ? n : _n(n), e.getAttribute(n);
  }
  scrapeMotionValuesFromProps(e, n, r) {
    return Os(e, n, r);
  }
  build(e, n, r) {
    Es(e, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(e, n, r, i) {
    Fh(e, n, r, i);
  }
  mount(e) {
    this.isSVGTag = Rs(e.tagName), super.mount(e);
  }
}
const Ih = (t, e) => Hn(t) ? new Bh(e) : new Oh(e, {
  allowProjection: t !== Si
}), jh = /* @__PURE__ */ Iu({
  ...ud,
  ...Dh,
  ...yh,
  ...Ah
}, Ih), Wh = /* @__PURE__ */ lu(jh);
function yf({
  selectedDate: t,
  onChange: e,
  maxDate: n
}) {
  const [r, i] = B(/* @__PURE__ */ new Date()), [o, s] = B(!1), a = () => /* @__PURE__ */ k("div", { className: "flex justify-between items-center mb-2 px-2 text-primary-foreground dark:text-primary-foreground-dark", children: [
    /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        onClick: () => i(rc(r)),
        className: "p-1 hover:bg-[var(--color-primary-hover)] rounded",
        children: "←"
      }
    ),
    /* @__PURE__ */ f("div", { className: "font-semibold text-lg", children: ee(r, "MMMM yyyy") }),
    /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        onClick: () => i(Di(r, 1)),
        className: "p-1 hover:bg-[var(--color-primary-hover)] rounded",
        children: "→"
      }
    )
  ] }), c = () => {
    const u = [], d = wt(r);
    for (let h = 0; h < 7; h++)
      u.push(
        /* @__PURE__ */ f(
          "div",
          {
            className: "text-center text-sm font-medium text-[var(--color-primary-foreground)]",
            children: ee(De(d, h), "EEE")
          },
          h
        )
      );
    return /* @__PURE__ */ f("div", { className: "grid grid-cols-7", children: u });
  }, l = () => {
    const u = ea(r), d = nr(u), h = wt(u), m = De(nr(d), 6), p = [];
    let g = [], y = h;
    for (; y <= m; ) {
      for (let v = 0; v < 7; v++) {
        const x = y, b = er(y, /* @__PURE__ */ new Date()), S = t && er(y, t), w = nc(y, r), M = n && ec(y, n);
        g.push(
          /* @__PURE__ */ f(
            "div",
            {
              className: `text-center text-sm p-2 rounded-lg transition text-primary-foreground dark:text-primary-foreground-dark 
              ${S ? "bg-secondary dark:bg-secondary-dark" : ""}
              ${w ? "text-[var(--color-primary-foreground)]" : "text-gray-400"}
              ${b && !S ? "border border-blue-400" : ""}
              ${M ? "text-gray-400 cursor-not-allowed" : "cursor-pointer hover:bg-blue-100"}
            `,
              onClick: () => {
                M || (e(x), s(!1));
              },
              children: ee(y, "d")
            },
            y.toISOString()
          )
        ), y = De(y, 1);
      }
      p.push(
        /* @__PURE__ */ f("div", { className: "grid grid-cols-7", children: g }, y.toISOString())
      ), g = [];
    }
    return /* @__PURE__ */ f("div", { children: p });
  };
  return /* @__PURE__ */ k("div", { className: "relative flex flex-row justify-start w-full mt-5 mb-5 ", children: [
    /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        onClick: () => s(!o),
        className: "cursor-pointer px-4 py-2 border rounded-lg bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:bg-[var(--color-primary-hover)] shadow-sm text-sm",
        children: t ? ee(t, "dd/MM/yyyy") : "Selecionar data"
      }
    ),
    /* @__PURE__ */ f(iu, { children: o && /* @__PURE__ */ k(
      Wh.div,
      {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 },
        className: "absolute mt-2 z-10 w-80 p-4 border rounded-lg shadow-lg bg-primary dark:bg-primary-dark text-primary-foreground dark:text-primary-foreground-dark",
        children: [
          a(),
          c(),
          l()
        ]
      }
    ) })
  ] });
}
function vf({
  items: t,
  contentComponent: e,
  className: n,
  classNameAccordion: r
}) {
  const [i, o] = B(null);
  return /* @__PURE__ */ f("div", { className: n, children: t.map(({ id: s, title: a, data: c }) => /* @__PURE__ */ f(
    zo,
    {
      title: a,
      isOpen: i === s,
      onToggle: () => o(i === s ? null : s),
      className: r,
      children: e(c)
    },
    s
  )) });
}
export {
  zo as Accordion,
  vf as AccordionGroup,
  uf as ActivityIndicator,
  de as Button,
  af as CustomLink,
  yf as DatePicker,
  ff as ExpandableTable,
  zh as FormCheckbox,
  bo as FormInput,
  pf as FormInputArray,
  mf as FormInputDate,
  Gh as FormInputPassword,
  be as FormLabel,
  wo as FormSelect,
  hf as FormSelectArray,
  Qh as FormSlider,
  Zh as FormSwitch,
  qh as FormTextArea,
  Xh as MessageError,
  tf as ModalConfirmation,
  ko as ModalDefault,
  df as ModalExpandImage,
  ef as Pagination,
  Jh as Progress,
  cf as SnackBar,
  nf as Table,
  rf as TableAction,
  sf as Tabs,
  lf as ThemeToggle,
  pt as Tooltip,
  of as VerticalTabs,
  xe as getBorderColor
};
