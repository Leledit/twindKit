import { jsx as m, jsxs as p, Fragment as Dr } from "react/jsx-runtime";
import { twMerge as k } from "tailwind-merge";
import { useState as x, forwardRef as u, createElement as i, useRef as ze, useEffect as $ } from "react";
import { createPortal as je } from "react-dom";
const Xr = {
  primary: `
    bg-[var(--color-primary)] text-[var(--color-primary-foreground)]
    hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-active)]
    dark:bg-[var(--color-primary-dark)] dark:hover:bg-[var(--color-primary-hover-dark)] dark:active:bg-[var(--color-primary-active-dark)]
    dark:text-[var(--color-primary-foreground-dark)]
  `,
  secondary: `
    bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)]
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
}, Kr = `
  w-full min-h-[48px] min-w-[140px] py-3 px-4 mt-5 
  rounded-lg
  transition shadow-theme-xs cursor-pointer
`;
function Xl({
  className: r,
  children: e,
  variant: t = "secondary",
  ...o
}) {
  return /* @__PURE__ */ m(
    "button",
    {
      className: k(Kr, Xr[t], r),
      ...o,
      children: e
    }
  );
}
const Yr = {
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
function Kl({
  checked: r,
  onChange: e,
  label: t,
  classNameLabel: o = "",
  classNameInput: s = "",
  size: a = "md"
}) {
  const n = Yr[a];
  return /* @__PURE__ */ p(
    "label",
    {
      className: `inline-flex items-center cursor-pointer ${o}`,
      children: [
        /* @__PURE__ */ m(
          "input",
          {
            type: "checkbox",
            checked: r,
            onChange: e,
            className: "peer hidden"
          }
        ),
        /* @__PURE__ */ m(
          "div",
          {
            className: k(
              `
          flex items-center justify-center rounded border 
          ${n.box}
          border-[var(--color-muted)]
          peer-checked:bg-[var(--color-secondary)]
          peer-checked:border-[var(--color-secondary)]
          transition-colors
          dark:border-[var(--color-muted-dark)]
          dark:peer-checked:bg-[var(--color-secondary-dark)]
          dark:peer-checked:border-[var(--color-secondary-dark)]
        `,
              s
            ),
            children: /* @__PURE__ */ m(
              "svg",
              {
                className: k(`
            ${n.icon} hidden peer-checked:block 
            text-[var(--color-secondary-foreground)] 
            dark:text-[var(--color-secondary-foreground-dark)]
          `),
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ m(
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
        t && /* @__PURE__ */ m(
          "span",
          {
            className: k(`
            ml-2 ${n.label}
            text-[var(--color-foreground)] 
            dark:text-[var(--color-foreground-dark)]
          `),
            children: t
          }
        )
      ]
    }
  );
}
function B(r, e) {
  return r ? "border-[var(--color-error)] focus:border-[var(--color-error)]" : e ? "border-[var(--color-success)] focus:border-[var(--color-success)]" : "border-[var(--color-secondary)] focus:border-[var(--color-secondary)] dark:border-[var(--color-muted-dark)] dark:focus:border-[var(--color-secondary-dark)]";
}
function O({ htmlFor: r, children: e, className: t }) {
  return /* @__PURE__ */ m(
    "label",
    {
      htmlFor: r,
      className: k(
        `block mb-1 text-sm font-medium 
         text-[var(--color-primary-foreground)] dark:text-[var(--color-foreground-dark)]`,
        t
      ),
      children: e
    }
  );
}
function Yl({
  label: r,
  error: e = !1,
  success: t = !1,
  disabled: o = !1,
  messageError: s = "Campo obrigatório",
  isValidating: a,
  icon: n,
  className: c = "",
  onChange: l,
  ...d
}) {
  const h = e && a;
  return /* @__PURE__ */ p("div", { className: "w-full mt-5", children: [
    r && /* @__PURE__ */ m(O, { children: r }),
    /* @__PURE__ */ p("div", { className: "relative", children: [
      n && /* @__PURE__ */ m("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ m(n, { className: `h-5 w-5 ${h ? "text-[var(--color-error)]" : t ? "text-[var(--color-success)]" : "text-[var(--color-muted)] dark:text-[var(--color-muted-dark)]"}` }) }),
      /* @__PURE__ */ m(
        "input",
        {
          disabled: o,
          onChange: l,
          className: k(
            `block w-full rounded-md py-3 px-4 transition duration-200 border focus:outline-none appearance-none transition duration-200
             bg-[var(--color-background)] text-[var(--color-foreground)] placeholder-[var(--color-muted)] 
             dark:bg-[var(--color-background-dark)] dark:text-[var(--color-foreground-dark)] dark:placeholder-[var(--color-muted-dark)]
            `,
            n ? "pl-10" : "",
            B(h, t),
            o ? "opacity-60 cursor-not-allowed" : "",
            c
          ),
          ...d
        }
      )
    ] }),
    h && s && /* @__PURE__ */ m("p", { className: "mt-2 text-sm text-[var(--color-error)]", children: s })
  ] });
}
function Gl({
  label: r,
  error: e = !1,
  success: t = !1,
  disabled: o = !1,
  messageError: s = "Campo obrigatório",
  isValidating: a,
  onChange: n,
  ...c
}) {
  const [l, d] = x(!1), h = e && a;
  return /* @__PURE__ */ p("div", { className: "w-full mt-5", children: [
    r && /* @__PURE__ */ m(
      "label",
      {
        htmlFor: c.id,
        className: "block mb-1 text-sm font-medium text-[var(--color-foreground)] dark:text-[var(--color-foreground-dark)]",
        children: r
      }
    ),
    /* @__PURE__ */ p("div", { className: "relative", children: [
      /* @__PURE__ */ m("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ m(
        "svg",
        {
          className: "h-5 w-5 text-[var(--color-muted)] dark:text-[var(--color-muted-dark)]",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          children: /* @__PURE__ */ m(
            "path",
            {
              fillRule: "evenodd",
              d: "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",
              clipRule: "evenodd"
            }
          )
        }
      ) }),
      /* @__PURE__ */ m(
        "input",
        {
          type: l ? "text" : "password",
          autoComplete: "current-password",
          disabled: o,
          onChange: n,
          placeholder: "••••••••",
          className: k(
            `block w-full rounded-md py-3 px-4 transition duration-200
             bg-[var(--color-background)] text-[var(--color-foreground)] placeholder-[var(--color-muted)] 
             dark:bg-[var(--color-background-dark)] dark:text-[var(--color-foreground-dark)] dark:placeholder-[var(--color-muted-dark)]
             pl-10 pr-10 border focus:outline-none appearance-none transition duration-20
            `,
            B(h, t),
            o ? "opacity-60 cursor-not-allowed" : ""
          ),
          ...c
        }
      ),
      /* @__PURE__ */ m(
        "button",
        {
          type: "button",
          onClick: () => d((Z) => !Z),
          className: "absolute inset-y-0 right-0 pr-3 flex items-center text-[var(--color-muted)] hover:text-[var(--color-secondary)] dark:text-[var(--color-muted-dark)] dark:hover:text-[var(--color-secondary-dark)] transition cursor-pointer",
          tabIndex: -1,
          children: l ? /* @__PURE__ */ p(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "h-5 w-5",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: [
                /* @__PURE__ */ m("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" }),
                /* @__PURE__ */ m("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" })
              ]
            }
          ) : /* @__PURE__ */ m(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "h-5 w-5",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: /* @__PURE__ */ m("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.978 9.978 0 012.276-3.592M6.1 6.1a9.993 9.993 0 0111.8 0m2.063 2.062a9.978 9.978 0 012.276 3.592c-1.274 4.057-5.065 7-9.542 7-.682 0-1.348-.07-1.992-.2M3 3l18 18" })
            }
          )
        }
      )
    ] }),
    h && s && /* @__PURE__ */ m("p", { className: "mt-2 text-sm text-[var(--color-error)] dark:text-[var(--color-error-dark)]", children: s })
  ] });
}
function Jl({
  label: r,
  error: e = !1,
  success: t = !1,
  disabled: o = !1,
  messageError: s = "Campo obrigatório",
  isValidating: a,
  onChange: n,
  options: c,
  placeholder: l = "Selecione uma opção",
  className: d,
  ...h
}) {
  const Z = e && a;
  return /* @__PURE__ */ p("div", { className: "w-full mt-5 mb-3", children: [
    r && /* @__PURE__ */ m(O, { children: r }),
    /* @__PURE__ */ p("div", { className: "relative", children: [
      /* @__PURE__ */ p(
        "select",
        {
          ...h,
          onChange: n,
          disabled: o,
          className: k(
            `block w-full rounded-md py-3 px-4 pr-10 transition duration-200 appearance-none
             bg-[var(--color-background)] text-[var(--color-foreground)] placeholder-[var(--color-muted)]
             dark:bg-[var(--color-background-dark)] dark:text-[var(--color-foreground-dark)] dark:placeholder-[var(--color-muted-dark)]
             transition duration-200 border focus:outline-none appearance-none transition duration-200
            `,
            B(Z, t),
            o ? "opacity-60 cursor-not-allowed" : "",
            d
          ),
          children: [
            l && /* @__PURE__ */ m("option", { value: "", children: l }),
            c.map((S) => /* @__PURE__ */ m("option", { value: S.value, children: S.label }, S.value))
          ]
        }
      ),
      /* @__PURE__ */ m("div", { className: "pointer-events-none absolute inset-y-0 right-3 flex items-center text-[var(--color-muted)] dark:text-[var(--color-muted-dark)]", children: /* @__PURE__ */ m(
        "svg",
        {
          className: "h-4 w-4",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 20 20",
          stroke: "currentColor",
          children: /* @__PURE__ */ m(
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
      Z && s && /* @__PURE__ */ m("p", { className: "mt-2 text-sm text-[var(--color-error)] dark:text-[var(--color-error-dark)]", children: s })
    ] })
  ] });
}
function Ql({
  className: r,
  label: e,
  error: t = !1,
  success: o = !1,
  disabled: s = !1,
  messageError: a = "Campo obrigatório",
  isValidating: n,
  onChange: c,
  ...l
}) {
  const d = t && n;
  return /* @__PURE__ */ p("div", { className: "w-full mb-3 mt-5", children: [
    e && /* @__PURE__ */ m(O, { className: "mb-2", children: e }),
    /* @__PURE__ */ p("div", { className: "relative", children: [
      /* @__PURE__ */ m(
        "textarea",
        {
          ...l,
          onChange: c,
          disabled: s,
          className: k(
            `border focus:outline-none appearance-none transition duration-200 rounded-md
             h-[50px] w-full resize-none appearance-none px-4 py-2.5 shadow-sm transition-colors duration-150
             bg-[var(--color-background)] text-[var(--color-foreground)] placeholder-[var(--color-muted)]
             dark:bg-[var(--color-background-dark)] dark:text-[var(--color-foreground-dark)] dark:placeholder-[var(--color-muted-dark)]
             focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)/10]
            `,
            B(d, o),
            s ? "opacity-60 cursor-not-allowed" : "",
            r
          )
        }
      ),
      d && a && /* @__PURE__ */ m("p", { className: "text-sm text-[var(--color-error)] dark:text-[var(--color-error-dark)] mt-2", children: a })
    ] })
  ] });
}
function ed({ messageError: r }) {
  return r ? /* @__PURE__ */ m(
    "p",
    {
      className: `
        mt-3 mb-3 p-2 min-h-[30px] w-full rounded-[var(--tw-borderRadius-md)] rounded-md
        bg-[var(--color-error)] text-[var(--color-foreground-dark)]
        text-[14px] leading-[30px] text-center
        dark:bg-[var(--color-error-dark)] dark:text-[var(--color-foreground-dark)]
      `,
      children: r
    }
  ) : null;
}
function rd({
  value: r,
  onChange: e,
  label: t,
  isValidating: o,
  error: s,
  className: a
}) {
  const n = (c) => {
    const l = Number(c.target.value);
    e(l);
  };
  return /* @__PURE__ */ p("div", { className: k("mb-2 w-full mt-4", a), children: [
    /* @__PURE__ */ p("div", { className: "flex items-center", children: [
      /* @__PURE__ */ m("p", { className: "text-base text-[var(--color-foreground)] dark:text-[var(--color-foreground-dark)] mr-4", children: t }),
      /* @__PURE__ */ m(
        "input",
        {
          type: "range",
          min: 1,
          max: 10,
          step: 1,
          value: r,
          onChange: n,
          className: "w-3/5 accent-[var(--color-secondary)] dark:accent-[var(--color-secondary-dark)]"
        }
      ),
      /* @__PURE__ */ m(
        "p",
        {
          className: `
            ml-4 w-9 h-9 flex items-center justify-center rounded-full bg-[var(--color-secondary)] 
            text-[var(--color-foreground)] dark:text-[var(--color-secondary-dark)] text-sm`,
          children: r
        }
      )
    ] }),
    o && s && /* @__PURE__ */ m("p", { className: "text-sm mt-2 ml-2 text-[var(--color-error)] dark:text-[var(--color-error-dark)]", children: "Este campo é obrigatório" })
  ] });
}
function td({
  isChecked: r,
  onChange: e,
  label: t,
  isValidating: o,
  error: s,
  className: a
}) {
  return /* @__PURE__ */ p("div", { className: k("mb-2 w-full mt-5", a), children: [
    /* @__PURE__ */ p("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ m("p", { className: "text-base text-[var(--color-foreground)] dark:text-[var(--color-foreground-dark)]", children: t }),
      /* @__PURE__ */ m(
        "button",
        {
          type: "button",
          onClick: e,
          className: k(
            "relative w-11 h-6 transition-colors duration-200 ease-in-out rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2",
            r ? "bg-[var(--color-secondary)] focus:ring-[var(--color-secondary)]" : "bg-[var(--color-muted)] dark:bg-[var(--color-muted-dark)] focus:ring-[var(--color-muted)]"
          ),
          children: /* @__PURE__ */ m(
            "span",
            {
              className: k(
                "absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200",
                r ? "translate-x-5" : "translate-x-0"
              )
            }
          )
        }
      )
    ] }),
    o && s && /* @__PURE__ */ m("p", { className: "text-sm mt-2 ml-2 text-[var(--color-error)] dark:text-[var(--color-error-dark)]", children: "Este campo é obrigatório" })
  ] });
}
function od({ loading: r, className: e }) {
  return r ? /* @__PURE__ */ m(
    "div",
    {
      className: `
        absolute top-0 left-0 flex items-center justify-center h-full w-full z-[1000]
        backdrop-blur-sm dardk:bg-[rgba(0,0,0,0.5)] bg-[rgba(255, 255, 255, 0.5)] border border-[var(--color-primary)/20]
        ${e}
      `,
      children: /* @__PURE__ */ m(
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
const Gr = {
  primary: `
    bg-[var(--color-primary)] text-[var(--color-primary-foreground)]
    hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-active)]
    dark:bg-[var(--color-primary-dark)] dark:hover:bg-[var(--color-primary-hover-dark)] dark:active:bg-[var(--color-primary-active-dark)]
    dark:text-[var(--color-primary-foreground-dark)]
  `,
  secondary: `
    bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)]
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
}, Jr = `
  w-full min-h-[48px] min-w-[140px] py-3 px-4 mt-5 
  rounded-lg
  transition shadow-theme-xs cursor-pointer
`;
function V({
  className: r,
  children: e,
  variant: t = "secondary",
  ...o
}) {
  return /* @__PURE__ */ m(
    "button",
    {
      className: k(Jr, Gr[t], r),
      ...o,
      children: e
    }
  );
}
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qr = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), et = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), H = (r) => {
  const e = et(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Me = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), rt = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var tt = {
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
const ot = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ...tt,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: Me("lucide", s),
      ...!a && !rt(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const qe = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(ot, {
      ref: a,
      iconNode: e,
      className: Me(
        `lucide-${Qr(H(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = H(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const at = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
qe("chevrons-left", at);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const st = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
qe("chevrons-right", st);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ct = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), nt = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), E = (r) => {
  const e = nt(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Ue = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), it = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var lt = {
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
const dt = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ...lt,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: Ue("lucide", s),
      ...!a && !it(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const Ze = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(dt, {
      ref: a,
      iconNode: e,
      className: Ue(
        `lucide-${ct(E(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = E(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ht = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Ze("chevrons-left", ht);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mt = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Ze("chevrons-right", mt);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ut = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), pt = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), T = (r) => {
  const e = pt(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, _e = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), kt = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ft = {
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
const vt = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ...ft,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: _e("lucide", s),
      ...!a && !kt(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const Be = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(vt, {
      ref: a,
      iconNode: e,
      className: _e(
        `lucide-${ut(T(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = T(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yt = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Be("chevrons-left", yt);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wt = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Be("chevrons-right", wt);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gt = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), xt = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), I = (r) => {
  const e = xt(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Se = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), Nt = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var bt = {
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
const Ct = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ...bt,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: Se("lucide", s),
      ...!a && !Nt(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const Oe = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(Ct, {
      ref: a,
      iconNode: e,
      className: Se(
        `lucide-${gt(I(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = I(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const At = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Oe("chevrons-left", At);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lt = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Oe("chevrons-right", Lt);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wt = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), $t = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), F = (r) => {
  const e = $t(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Ve = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), zt = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var jt = {
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
const Mt = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ...jt,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: Ve("lucide", s),
      ...!a && !zt(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const He = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(Mt, {
      ref: a,
      iconNode: e,
      className: Ve(
        `lucide-${Wt(F(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = F(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qt = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
He("chevrons-left", qt);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ut = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
He("chevrons-right", Ut);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zt = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), _t = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), P = (r) => {
  const e = _t(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Ee = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), Bt = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var St = {
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
const Ot = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ...St,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: Ee("lucide", s),
      ...!a && !Bt(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const Te = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(Ot, {
      ref: a,
      iconNode: e,
      className: Ee(
        `lucide-${Zt(P(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = P(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vt = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Te("chevrons-left", Vt);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ht = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Te("chevrons-right", Ht);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Et = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Tt = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), R = (r) => {
  const e = Tt(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Ie = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), It = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ft = {
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
const Pt = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ...Ft,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: Ie("lucide", s),
      ...!a && !It(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const Fe = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(Pt, {
      ref: a,
      iconNode: e,
      className: Ie(
        `lucide-${Et(R(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = R(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rt = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Fe("chevrons-left", Rt);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dt = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Fe("chevrons-right", Dt);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xt = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Kt = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), D = (r) => {
  const e = Kt(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Pe = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), Yt = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Gt = {
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
const Jt = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ...Gt,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: Pe("lucide", s),
      ...!a && !Yt(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const Re = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(Jt, {
      ref: a,
      iconNode: e,
      className: Pe(
        `lucide-${Xt(D(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = D(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qt = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Re("chevrons-left", Qt);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eo = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Re("chevrons-right", eo);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ro = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), to = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), X = (r) => {
  const e = to(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, De = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), oo = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ao = {
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
const so = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ...ao,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: De("lucide", s),
      ...!a && !oo(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const Xe = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(so, {
      ref: a,
      iconNode: e,
      className: De(
        `lucide-${ro(X(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = X(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const co = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Xe("chevrons-left", co);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const no = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Xe("chevrons-right", no);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const io = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), lo = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), K = (r) => {
  const e = lo(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Ke = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), ho = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var mo = {
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
const uo = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ...mo,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: Ke("lucide", s),
      ...!a && !ho(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const Ye = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(uo, {
      ref: a,
      iconNode: e,
      className: Ke(
        `lucide-${io(K(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = K(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const po = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Ye("chevrons-left", po);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ko = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Ye("chevrons-right", ko);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fo = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), vo = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), Y = (r) => {
  const e = vo(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Ge = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), yo = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var wo = {
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
const go = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ...wo,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: Ge("lucide", s),
      ...!a && !yo(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const Je = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(go, {
      ref: a,
      iconNode: e,
      className: Ge(
        `lucide-${fo(Y(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = Y(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xo = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Je("chevrons-left", xo);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const No = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Je("chevrons-right", No);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bo = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Co = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), G = (r) => {
  const e = Co(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Qe = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), Ao = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Lo = {
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
const Wo = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ...Lo,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: Qe("lucide", s),
      ...!a && !Ao(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const er = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(Wo, {
      ref: a,
      iconNode: e,
      className: Qe(
        `lucide-${bo(G(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = G(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $o = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
er("chevrons-left", $o);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zo = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
er("chevrons-right", zo);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jo = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Mo = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), J = (r) => {
  const e = Mo(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, rr = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), qo = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Uo = {
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
const Zo = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ...Uo,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: rr("lucide", s),
      ...!a && !qo(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const tr = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(Zo, {
      ref: a,
      iconNode: e,
      className: rr(
        `lucide-${jo(J(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = J(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _o = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
tr("chevrons-left", _o);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bo = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
tr("chevrons-right", Bo);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const So = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Oo = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), Q = (r) => {
  const e = Oo(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, or = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), Vo = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ho = {
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
const Eo = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ...Ho,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: or("lucide", s),
      ...!a && !Vo(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const ar = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(Eo, {
      ref: a,
      iconNode: e,
      className: or(
        `lucide-${So(Q(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = Q(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const To = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
ar("chevrons-left", To);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Io = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
ar("chevrons-right", Io);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fo = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Po = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), ee = (r) => {
  const e = Po(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, sr = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), Ro = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Do = {
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
const Xo = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ...Do,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: sr("lucide", s),
      ...!a && !Ro(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const cr = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(Xo, {
      ref: a,
      iconNode: e,
      className: sr(
        `lucide-${Fo(ee(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = ee(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ko = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
cr("chevrons-left", Ko);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yo = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
cr("chevrons-right", Yo);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Go = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Jo = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), re = (r) => {
  const e = Jo(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, nr = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), Qo = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ea = {
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
const ra = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ...ea,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: nr("lucide", s),
      ...!a && !Qo(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const ir = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(ra, {
      ref: a,
      iconNode: e,
      className: nr(
        `lucide-${Go(re(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = re(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ta = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
ir("chevrons-left", ta);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oa = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
ir("chevrons-right", oa);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aa = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), sa = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), te = (r) => {
  const e = sa(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, lr = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), ca = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var na = {
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
const ia = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ...na,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: lr("lucide", s),
      ...!a && !ca(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const dr = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(ia, {
      ref: a,
      iconNode: e,
      className: lr(
        `lucide-${aa(te(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = te(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const la = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
dr("chevrons-left", la);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const da = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
dr("chevrons-right", da);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ha = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ma = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), oe = (r) => {
  const e = ma(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, hr = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), ua = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var pa = {
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
const ka = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ...pa,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: hr("lucide", s),
      ...!a && !ua(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const mr = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(ka, {
      ref: a,
      iconNode: e,
      className: hr(
        `lucide-${ha(oe(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = oe(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fa = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
mr("chevrons-left", fa);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const va = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
mr("chevrons-right", va);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ya = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), wa = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), ae = (r) => {
  const e = wa(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, ur = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), ga = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var xa = {
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
const Na = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ...xa,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: ur("lucide", s),
      ...!a && !ga(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const pr = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(Na, {
      ref: a,
      iconNode: e,
      className: ur(
        `lucide-${ya(ae(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = ae(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ba = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
pr("chevrons-left", ba);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ca = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
pr("chevrons-right", Ca);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Aa = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), La = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), se = (r) => {
  const e = La(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, kr = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), Wa = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var $a = {
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
const za = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ...$a,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: kr("lucide", s),
      ...!a && !Wa(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const fr = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(za, {
      ref: a,
      iconNode: e,
      className: kr(
        `lucide-${Aa(se(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = se(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ja = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
fr("chevrons-left", ja);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ma = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
fr("chevrons-right", Ma);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qa = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ua = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), ce = (r) => {
  const e = Ua(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, vr = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), Za = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var _a = {
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
const Ba = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ..._a,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: vr("lucide", s),
      ...!a && !Za(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const yr = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(Ba, {
      ref: a,
      iconNode: e,
      className: vr(
        `lucide-${qa(ce(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = ce(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sa = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
yr("chevrons-left", Sa);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oa = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
yr("chevrons-right", Oa);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Va = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ha = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), ne = (r) => {
  const e = Ha(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, wr = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), Ea = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ta = {
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
const Ia = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ...Ta,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: wr("lucide", s),
      ...!a && !Ea(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const gr = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(Ia, {
      ref: a,
      iconNode: e,
      className: wr(
        `lucide-${Va(ne(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = ne(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fa = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
gr("chevrons-left", Fa);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pa = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
gr("chevrons-right", Pa);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ra = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Da = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), ie = (r) => {
  const e = Da(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, xr = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), Xa = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ka = {
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
const Ya = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ...Ka,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: xr("lucide", s),
      ...!a && !Xa(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const Nr = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(Ya, {
      ref: a,
      iconNode: e,
      className: xr(
        `lucide-${Ra(ie(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = ie(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ga = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Nr("chevrons-left", Ga);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ja = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Nr("chevrons-right", Ja);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qa = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), es = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), le = (r) => {
  const e = es(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, br = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), rs = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ts = {
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
const os = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ...ts,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: br("lucide", s),
      ...!a && !rs(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const Cr = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(os, {
      ref: a,
      iconNode: e,
      className: br(
        `lucide-${Qa(le(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = le(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const as = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Cr("chevrons-left", as);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ss = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Cr("chevrons-right", ss);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cs = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ns = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), de = (r) => {
  const e = ns(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Ar = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), is = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ls = {
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
const ds = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ...ls,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: Ar("lucide", s),
      ...!a && !is(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const Lr = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(ds, {
      ref: a,
      iconNode: e,
      className: Ar(
        `lucide-${cs(de(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = de(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hs = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
Lr("chevrons-left", hs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ms = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
Lr("chevrons-right", ms);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const us = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ps = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), he = (r) => {
  const e = ps(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Wr = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), ks = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var fs = {
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
const vs = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ...fs,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: Wr("lucide", s),
      ...!a && !ks(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const $r = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(vs, {
      ref: a,
      iconNode: e,
      className: Wr(
        `lucide-${us(he(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = he(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ys = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
$r("chevrons-left", ys);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ws = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
$r("chevrons-right", ws);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gs = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), xs = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), me = (r) => {
  const e = xs(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, zr = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), Ns = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var bs = {
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
const Cs = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ...bs,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: zr("lucide", s),
      ...!a && !Ns(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const jr = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(Cs, {
      ref: a,
      iconNode: e,
      className: zr(
        `lucide-${gs(me(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = me(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const As = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
jr("chevrons-left", As);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ls = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
jr("chevrons-right", Ls);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ws = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), $s = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), ue = (r) => {
  const e = $s(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Mr = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), zs = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var js = {
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
const Ms = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ...js,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: Mr("lucide", s),
      ...!a && !zs(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const z = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(Ms, {
      ref: a,
      iconNode: e,
      className: Mr(
        `lucide-${Ws(ue(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = ue(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qs = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
z("check-check", qs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Us = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
z("chevrons-left", Us);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zs = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
z("chevrons-right", Zs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _s = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
z("info", _s);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bs = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
z("link", Bs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ss = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
z("pencil", Ss);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Os = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
z("trash", Os);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vs = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Hs = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), pe = (r) => {
  const e = Hs(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, qr = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), Es = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ts = {
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
const Is = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ...Ts,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: qr("lucide", s),
      ...!a && !Es(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const j = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(Is, {
      ref: a,
      iconNode: e,
      className: qr(
        `lucide-${Vs(pe(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = pe(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fs = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
j("check-check", Fs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ps = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
j("chevrons-left", Ps);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rs = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
j("chevrons-right", Rs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ds = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
j("info", Ds);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xs = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
j("link", Xs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ks = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
j("pencil", Ks);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ys = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
j("trash", Ys);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gs = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Js = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), ke = (r) => {
  const e = Js(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Ur = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), Qs = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ec = {
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
const rc = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ...ec,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: Ur("lucide", s),
      ...!a && !Qs(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const M = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(rc, {
      ref: a,
      iconNode: e,
      className: Ur(
        `lucide-${Gs(ke(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = ke(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tc = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
M("check-check", tc);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oc = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
M("chevrons-left", oc);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ac = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
M("chevrons-right", ac);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sc = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
M("info", sc);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cc = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
M("link", cc);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nc = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
M("pencil", nc);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ic = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
M("trash", ic);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lc = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), dc = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), fe = (r) => {
  const e = dc(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Zr = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), hc = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var mc = {
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
const uc = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ...mc,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: Zr("lucide", s),
      ...!a && !hc(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const q = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(uc, {
      ref: a,
      iconNode: e,
      className: Zr(
        `lucide-${lc(fe(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = fe(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pc = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
q("check-check", pc);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kc = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
q("chevrons-left", kc);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fc = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
q("chevrons-right", fc);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vc = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
q("info", vc);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yc = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
q("link", yc);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wc = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
q("pencil", wc);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gc = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
q("trash", gc);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xc = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Nc = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), ve = (r) => {
  const e = Nc(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, _r = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), bc = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Cc = {
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
const Ac = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ...Cc,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: _r("lucide", s),
      ...!a && !bc(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const U = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(Ac, {
      ref: a,
      iconNode: e,
      className: _r(
        `lucide-${xc(ve(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = ve(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lc = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
U("check-check", Lc);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wc = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
U("chevrons-left", Wc);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $c = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
U("chevrons-right", $c);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zc = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
U("info", zc);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jc = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
U("link", jc);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mc = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
U("pencil", Mc);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qc = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
U("trash", qc);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uc = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Zc = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), ye = (r) => {
  const e = Zc(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Br = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), _c = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Bc = {
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
const Sc = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ...Bc,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: Br("lucide", s),
      ...!a && !_c(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const N = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(Sc, {
      ref: a,
      iconNode: e,
      className: Br(
        `lucide-${Uc(ye(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = ye(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oc = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
N("check-check", Oc);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vc = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
N("chevron-down", Vc);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hc = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
N("chevron-up", Hc);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ec = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
N("chevrons-left", Ec);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tc = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
N("chevrons-right", Tc);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ic = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
N("info", Ic);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fc = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
N("link", Fc);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pc = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
N("pencil", Pc);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rc = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
N("trash", Rc);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dc = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Xc = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), we = (r) => {
  const e = Xc(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Sr = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), Kc = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Yc = {
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
const Gc = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ...Yc,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: Sr("lucide", s),
      ...!a && !Kc(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const b = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(Gc, {
      ref: a,
      iconNode: e,
      className: Sr(
        `lucide-${Dc(we(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = we(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jc = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
b("check-check", Jc);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qc = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
b("chevron-down", Qc);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const en = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
b("chevron-up", en);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rn = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
b("chevrons-left", rn);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tn = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
b("chevrons-right", tn);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const on = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
b("info", on);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const an = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
b("link", an);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sn = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
b("pencil", sn);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cn = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
b("trash", cn);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nn = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ln = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), ge = (r) => {
  const e = ln(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Or = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), dn = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var hn = {
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
const mn = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ...hn,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: Or("lucide", s),
      ...!a && !dn(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const C = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(mn, {
      ref: a,
      iconNode: e,
      className: Or(
        `lucide-${nn(ge(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = ge(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const un = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
C("check-check", un);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pn = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
C("chevron-down", pn);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kn = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
C("chevron-up", kn);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fn = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
C("chevrons-left", fn);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vn = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
C("chevrons-right", vn);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yn = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
C("info", yn);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wn = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
C("link", wn);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gn = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
C("pencil", gn);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xn = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
C("trash", xn);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nn = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), bn = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), xe = (r) => {
  const e = bn(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Vr = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), Cn = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var An = {
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
const Ln = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ...An,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: Vr("lucide", s),
      ...!a && !Cn(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const A = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(Ln, {
      ref: a,
      iconNode: e,
      className: Vr(
        `lucide-${Nn(xe(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = xe(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wn = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
A("check-check", Wn);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $n = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
A("chevron-down", $n);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zn = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
A("chevron-up", zn);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jn = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
A("chevrons-left", jn);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mn = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
A("chevrons-right", Mn);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qn = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
A("info", qn);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Un = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
A("link", Un);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zn = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
A("pencil", Zn);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _n = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
A("trash", _n);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bn = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Sn = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), Ne = (r) => {
  const e = Sn(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Hr = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), On = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Vn = {
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
const Hn = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ...Vn,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: Hr("lucide", s),
      ...!a && !On(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const L = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(Hn, {
      ref: a,
      iconNode: e,
      className: Hr(
        `lucide-${Bn(Ne(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = Ne(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const En = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
L("check-check", En);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tn = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
L("chevron-down", Tn);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const In = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
L("chevron-up", In);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fn = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
L("chevrons-left", Fn);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pn = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
L("chevrons-right", Pn);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rn = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
L("info", Rn);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dn = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
L("link", Dn);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xn = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
L("pencil", Xn);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kn = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
L("trash", Kn);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yn = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Gn = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), be = (r) => {
  const e = Gn(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Er = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), Jn = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Qn = {
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
const ei = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ...Qn,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: Er("lucide", s),
      ...!a && !Jn(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const W = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(ei, {
      ref: a,
      iconNode: e,
      className: Er(
        `lucide-${Yn(be(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = be(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ri = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
W("check-check", ri);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ti = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
W("chevron-down", ti);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oi = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
W("chevron-up", oi);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ai = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
W("chevrons-left", ai);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const si = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
W("chevrons-right", si);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ci = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
W("info", ci);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ni = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
W("link", ni);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ii = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
W("pencil", ii);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const li = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
W("trash", li);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const di = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), hi = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), Ce = (r) => {
  const e = hi(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Tr = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), mi = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ui = {
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
const pi = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ...ui,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: Tr("lucide", s),
      ...!a && !mi(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const f = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(pi, {
      ref: a,
      iconNode: e,
      className: Tr(
        `lucide-${di(Ce(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = Ce(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ki = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
f("check-check", ki);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fi = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
f("chevron-down", fi);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vi = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
f("chevron-up", vi);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yi = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
f("chevrons-left", yi);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wi = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
f("chevrons-right", wi);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gi = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
f("info", gi);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xi = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
f("link", xi);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ni = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
f("pencil", Ni);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bi = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
f("trash", bi);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ci = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
f("x", Ci);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ai = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Li = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), Ae = (r) => {
  const e = Li(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Ir = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), Wi = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var $i = {
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
const zi = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ...$i,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: Ir("lucide", s),
      ...!a && !Wi(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const v = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(zi, {
      ref: a,
      iconNode: e,
      className: Ir(
        `lucide-${Ai(Ae(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = Ae(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ji = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
v("check-check", ji);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mi = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
v("chevron-down", Mi);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qi = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
v("chevron-up", qi);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ui = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
v("chevrons-left", Ui);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zi = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
v("chevrons-right", Zi);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _i = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
v("info", _i);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bi = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
v("link", Bi);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Si = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
v("pencil", Si);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oi = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
v("trash", Oi);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vi = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
v("x", Vi);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hi = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ei = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), Le = (r) => {
  const e = Ei(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Fr = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), Ti = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ii = {
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
const Fi = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ...Ii,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: Fr("lucide", s),
      ...!a && !Ti(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const y = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(Fi, {
      ref: a,
      iconNode: e,
      className: Fr(
        `lucide-${Hi(Le(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = Le(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pi = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
y("check-check", Pi);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ri = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
y("chevron-down", Ri);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Di = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
y("chevron-up", Di);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xi = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
y("chevrons-left", Xi);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ki = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
y("chevrons-right", Ki);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yi = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
y("info", Yi);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gi = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
y("link", Gi);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ji = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
y("pencil", Ji);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qi = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
y("trash", Qi);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const el = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
y("x", el);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rl = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), tl = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), We = (r) => {
  const e = tl(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Pr = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), ol = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var al = {
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
const sl = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ...al,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: Pr("lucide", s),
      ...!a && !ol(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const w = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(sl, {
      ref: a,
      iconNode: e,
      className: Pr(
        `lucide-${rl(We(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = We(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cl = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
w("check-check", cl);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nl = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
w("chevron-down", nl);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const il = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
w("chevron-up", il);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ll = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
w("chevrons-left", ll);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dl = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
w("chevrons-right", dl);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hl = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
w("info", hl);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ml = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
w("link", ml);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ul = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
w("pencil", ul);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pl = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
];
w("trash", pl);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kl = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
w("x", kl);
function fl({
  text: r,
  children: e,
  className: t,
  coordTop: o,
  coordLeft: s
}) {
  const [a, n] = x(!1), [c, l] = x({
    top: 0,
    left: 0
  }), d = ze(null);
  return $(() => {
    if (a && d.current) {
      const h = d.current.getBoundingClientRect();
      l({
        top: h.top + window.scrollY + (o ?? 0),
        left: h.left + h.width / 2 + window.scrollX + (s ?? 0)
      });
    }
  }, [s, o, a]), /* @__PURE__ */ p(
    "button",
    {
      className: k("relative inline-block", t),
      onMouseEnter: () => n(!0),
      onMouseLeave: () => n(!1),
      ref: d,
      children: [
        e,
        a && je(
          /* @__PURE__ */ m(
            "div",
            {
              style: {
                top: c.top - 10,
                left: c.left,
                transform: "translate(-50%, -100%)",
                position: "absolute",
                zIndex: 9999
              },
              className: k(
                "px-3 py-1 text-sm border rounded shadow-lg whitespace-nowrap",
                "bg-[var(--color-background)] text-[var(--color-foreground)] border-[var(--color-muted)]"
              ),
              children: r
            }
          ),
          document.body
        )
      ]
    }
  );
}
function vl({
  isOpen: r,
  onClose: e,
  children: t,
  className: o = "",
  isFullscreen: s = !1,
  title: a
}) {
  return $(() => {
    const n = (c) => {
      c.key === "Escape" && e();
    };
    return r && document.addEventListener("keydown", n), () => {
      document.removeEventListener("keydown", n);
    };
  }, [r, e]), $(() => (r ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset", () => {
    document.body.style.overflow = "unset";
  }), [r]), r ? /* @__PURE__ */ p("div", { className: "fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-6 sm:py-12", children: [
    !s && /* @__PURE__ */ m(
      "div",
      {
        className: "fixed inset-0 bg-black/40 backdrop-blur-sm",
        onClick: e
      }
    ),
    /* @__PURE__ */ p(
      "div",
      {
        onClick: (n) => n.stopPropagation(),
        className: k(
          o,
          "border border-[#454545] relative z-50 w-full bg-[var(--color-background)] text-[var(--color-foreground)] dark:bg-[var(--color-background-dark)] dark:text-[var(--color-foreground-dark)] shadow-xl transition-all",
          s ? "h-full" : "max-w-lg rounded-xl p-6"
        ),
        children: [
          /* @__PURE__ */ p("div", { children: [
            /* @__PURE__ */ m("p", { className: "mt-[-10px] text-[20px] text-[var(--color-foreground)] dark:text-[var(--color-foreground-dark)]", children: a }),
            /* @__PURE__ */ p(
              "button",
              {
                onClick: e,
                className: "absolute top-4 right-3 text-[var(--color-muted)] hover:text-[var(--color-secondary)] cursor-pointer",
                children: [
                  /* @__PURE__ */ m("span", { className: "sr-only", children: "Close modal" }),
                  /* @__PURE__ */ m(
                    "svg",
                    {
                      className: "w-6 h-6",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: 2,
                      viewBox: "0 0 24 24",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: /* @__PURE__ */ m(
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
          /* @__PURE__ */ m("div", { className: "mt-4", children: t })
        ]
      }
    )
  ] }) : null;
}
function ad({
  isOpen: r,
  onClose: e,
  performAction: t,
  description: o,
  title: s,
  className: a = "",
  isFullscreen: n = !1
}) {
  return /* @__PURE__ */ p(
    vl,
    {
      isOpen: r,
      onClose: e,
      title: s,
      className: a,
      isFullscreen: n,
      children: [
        /* @__PURE__ */ m("h3", { className: "mt-5 mb-2 text-[var(--color-foreground)] dark:text-[var(--color-foreground-dark)]", children: o }),
        /* @__PURE__ */ p("div", { className: "flex flex-row justify-end", children: [
          /* @__PURE__ */ m(
            V,
            {
              type: "button",
              className: "max-w-[100px] mr-2",
              onClick: e,
              variant: "secondary",
              children: "Cancelar"
            }
          ),
          /* @__PURE__ */ m(
            V,
            {
              type: "button",
              className: "max-w-[100px]",
              onClick: t,
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
const yl = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), wl = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), $e = (r) => {
  const e = wl(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Rr = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim(), gl = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var xl = {
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
const Nl = u(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: n,
    ...c
  }, l) => i(
    "svg",
    {
      ref: l,
      ...xl,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: Rr("lucide", s),
      ...!a && !gl(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...n.map(([d, h]) => i(d, h)),
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
const g = (r, e) => {
  const t = u(
    ({ className: o, ...s }, a) => i(Nl, {
      ref: a,
      iconNode: e,
      className: Rr(
        `lucide-${yl($e(r))}`,
        `lucide-${r}`,
        o
      ),
      ...s
    })
  );
  return t.displayName = $e(r), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bl = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
], Cl = g("check-check", bl);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Al = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Ll = g("chevron-down", Al);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wl = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], $l = g("chevron-up", Wl);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zl = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
], jl = g("chevrons-left", zl);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ml = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
], ql = g("chevrons-right", Ml);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ul = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], Zl = g("info", Ul);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _l = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], Bl = g("link", _l);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sl = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
], Ol = g("pencil", Sl);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vl = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
], Hl = g("trash", Vl);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const El = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Tl = g("x", El);
function sd({
  totalData: r,
  currentPage: e,
  setCurrentPage: t,
  elementsPerPage: o = 20
}) {
  const s = Math.ceil(r / o);
  if (r === 0 || r < o) return null;
  const a = (n) => {
    t(n);
  };
  return /* @__PURE__ */ m("div", { className: "w-full flex flex-col justify-center items-center mb-10 mt-5", children: /* @__PURE__ */ p("div", { className: "max-w-[400px] w-full flex flex-row justify-around items-center", children: [
    /* @__PURE__ */ m(
      jl,
      {
        className: "text-[var(--color-secondary)] cursor-pointer",
        onClick: () => a(1)
      }
    ),
    Array.from({ length: s }, (n, c) => /* @__PURE__ */ m(
      "button",
      {
        onClick: () => a(c + 1),
        className: k(
          "flex justify-center items-center w-[40px] h-[40px] text-sm rounded-full transition-colors duration-200 cursor-pointer",
          e === c + 1 ? `bg-[var(--color-secondary-active)] text-[var(--color-primary-foreground)] 
                   dark:bg-[var(--color-secondary-active-dark)] dark:text-[var(--color-primary-foreground-dark)]` : "text-[var(--color-foreground)] dark:text-[var(--color-foreground-dark)] hover:bg-[var(--color-muted-dark)/10]"
        ),
        children: c + 1
      },
      c + 1
    )),
    /* @__PURE__ */ m(
      ql,
      {
        className: "text-[var(--color-secondary)] cursor-pointer",
        onClick: () => a(s)
      }
    )
  ] }) });
}
function cd({
  data: r,
  columns: e,
  rowActions: t
}) {
  return /* @__PURE__ */ m("div", { className: "shadow-sm border border-[var(--color-muted)] rounded-md text-[var(--color-foreground)] overflow-x-auto w-full", children: /* @__PURE__ */ p("table", { className: "min-w-[800px] table-auto w-full", children: [
    /* @__PURE__ */ m("thead", { children: /* @__PURE__ */ p("tr", { className: "border-b border-[var(--color-muted)] bg-[var(--color-background)] dark:bg-[var(--color-background-dark)]", children: [
      e.map((o) => /* @__PURE__ */ m(
        "th",
        {
          className: "px-4 py-2 text-[16px] text-left font-semibold text-[var(--color-secondary)]",
          children: o.title
        },
        o.key
      )),
      t && /* @__PURE__ */ m("th", { className: "px-4 py-2 text-center" })
    ] }) }),
    /* @__PURE__ */ m("tbody", { children: r.length === 0 ? /* @__PURE__ */ m("tr", { children: /* @__PURE__ */ m(
      "td",
      {
        colSpan: e.length + (t ? 1 : 0),
        className: "px-4 py-4 text-center text-[var(--color-muted)]",
        children: "Nenhum registro encontrado!"
      }
    ) }) : r.map((o, s) => /* @__PURE__ */ p(
      "tr",
      {
        className: s === r.length - 1 ? "" : "border-b border-[var(--color-muted)]",
        children: [
          e.map((a) => {
            const n = o[a.key];
            return /* @__PURE__ */ m(
              "td",
              {
                className: "px-4 py-2 text-[14px] font-normal text-left text-[var(--color-foreground)] dark:text-[var(--color-foreground-dark)]",
                children: a.render ? a.render(n, o) : n
              },
              String(a.key)
            );
          }),
          t && /* @__PURE__ */ m("td", { className: "px-4 py-2 whitespace-nowrap w-[5%]", children: t(o) })
        ]
      },
      s
    )) })
  ] }) });
}
function _({
  text: r,
  children: e,
  className: t,
  coordTop: o,
  coordLeft: s
}) {
  const [a, n] = x(!1), [c, l] = x({
    top: 0,
    left: 0
  }), d = ze(null);
  return $(() => {
    if (a && d.current) {
      const h = d.current.getBoundingClientRect();
      l({
        top: h.top + window.scrollY + (o ?? 0),
        left: h.left + h.width / 2 + window.scrollX + (s ?? 0)
      });
    }
  }, [s, o, a]), /* @__PURE__ */ p(
    "button",
    {
      className: k("relative inline-block", t),
      onMouseEnter: () => n(!0),
      onMouseLeave: () => n(!1),
      ref: d,
      children: [
        e,
        a && je(
          /* @__PURE__ */ m(
            "div",
            {
              style: {
                top: c.top - 10,
                left: c.left,
                transform: "translate(-50%, -100%)",
                position: "absolute",
                zIndex: 9999
              },
              className: k(
                "px-3 py-1 text-sm border rounded shadow-lg whitespace-nowrap",
                "bg-[var(--color-background)] text-[var(--color-foreground)] border-[var(--color-muted)]"
              ),
              children: r
            }
          ),
          document.body
        )
      ]
    }
  );
}
function nd({
  type: r,
  action: e,
  textTooltip: t
}) {
  const o = "w-[18px] h-[18px] cursor-pointer text-[var(--color-secondary)] dark:text-[var(--color-secondary-dark)] mx-1";
  return {
    edit: /* @__PURE__ */ m(_, { text: t, children: /* @__PURE__ */ m(Ol, { className: o, onClick: e }) }, "tableActionEdit"),
    delete: /* @__PURE__ */ m(_, { text: t, children: /* @__PURE__ */ m(Hl, { className: o, onClick: e }) }, "tableActionDelete"),
    link: /* @__PURE__ */ m(_, { text: t, children: /* @__PURE__ */ m(Bl, { className: o, onClick: e }) }, "tableActionLink"),
    info: /* @__PURE__ */ m(_, { text: t, children: /* @__PURE__ */ m(Zl, { className: o, onClick: e }) }, "tableActionInfo"),
    check: /* @__PURE__ */ m(_, { text: t, children: /* @__PURE__ */ m(Cl, { className: o, onClick: e }) }, "tableActionCheck")
  }[r];
}
function id({
  tabs: r,
  defaultTabKey: e
}) {
  var a, n;
  const [t, o] = x(
    e || ((a = r[0]) == null ? void 0 : a.key)
  );
  $(() => {
    !r.some((l) => l.key === t) && r.length > 0 && o(r[0].key);
  }, [r, t]);
  const s = (n = r.find((c) => c.key === t)) == null ? void 0 : n.content;
  return /* @__PURE__ */ p("div", { className: "overflow-x-auto p-4 sm:p-6", children: [
    /* @__PURE__ */ m("div", { className: "border border-[var(--color-border)] rounded-t-xl bg-[var(--color-surface)]", children: /* @__PURE__ */ m("nav", { className: "flex overflow-x-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white h-[50px]", children: r.map((c) => {
      const l = t === c.key;
      return /* @__PURE__ */ m(
        "button",
        {
          onClick: () => o(c.key),
          className: k(
            "inline-flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer rounded-md",
            l ? "bg-[var(--color-primary)] text-[var(--color-on-primary)] shadow" : "bg-transparent text-[var(--color-text)] hover:text-[var(--color-primary)]"
          ),
          children: c.label
        },
        c.key
      );
    }) }) }),
    /* @__PURE__ */ m("div", { className: "rounded-b-xl border border-t-0 border-[var(--color-border)] p-6 pt-4 bg-[var(--color-surface)] text-[var(--color-text)]", children: s })
  ] });
}
function ld({
  tabs: r,
  defaultTab: e,
  actions: t,
  className: o
}) {
  var c;
  const [s, a] = x(e || ((c = r[0]) == null ? void 0 : c.id) || ""), n = r.find((l) => l.id === s);
  return /* @__PURE__ */ p(Dr, { children: [
    /* @__PURE__ */ p(
      "div",
      {
        className: k(
          "fixed top-[50px] left-0 h-[calc(100%-50px)] w-12 flex flex-col justify-between py-4 z-50 bg-[var(--color-surface)] border-r border-[var(--color-border)]",
          o
        ),
        children: [
          /* @__PURE__ */ m("div", { className: "flex flex-col items-center space-y-4", children: r.map((l) => /* @__PURE__ */ m(
            "button",
            {
              onClick: () => a(l.id),
              className: k(
                "p-2 rounded transition-colors cursor-pointer text-[var(--color-text)] hover:bg-[var(--color-hover)]",
                s === l.id && "bg-[var(--color-hover)]"
              ),
              "aria-label": `Tab ${l.id}`,
              children: l.icon
            },
            l.id
          )) }),
          /* @__PURE__ */ m("div", { className: "flex flex-col items-center space-y-3 mb-2", children: t == null ? void 0 : t.map((l) => /* @__PURE__ */ m(
            "span",
            {
              onClick: l.action,
              className: "cursor-pointer hover:bg-[var(--color-hover)] p-2 rounded transition-colors text-[var(--color-text)]",
              children: /* @__PURE__ */ m(fl, { text: l.text, coordLeft: 70, children: l.icon })
            },
            l.id
          )) })
        ]
      }
    ),
    /* @__PURE__ */ m("div", { className: "fixed top-[50px] left-12 h-[calc(100%-50px)] w-64 bg-[var(--color-surface)] border-r border-[var(--color-border)] shadow-lg z-40 overflow-y-auto text-[var(--color-text)]", children: n == null ? void 0 : n.content })
  ] });
}
function dd({
  title: r,
  children: e,
  defaultOpen: t = !1,
  className: o
}) {
  const [s, a] = x(t);
  return /* @__PURE__ */ p(
    "div",
    {
      className: k(
        "overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] shadow-sm",
        o
      ),
      children: [
        /* @__PURE__ */ p(
          "button",
          {
            className: "flex w-full items-center justify-between px-4 py-5 cursor-pointer hover:bg-[var(--color-hover)] transition-colors",
            onClick: () => a((n) => !n),
            "aria-expanded": s,
            "aria-controls": "accordion-content",
            children: [
              /* @__PURE__ */ m("span", { className: "text-sm font-medium", children: r }),
              s ? /* @__PURE__ */ m($l, { className: "w-4 h-4 text-[var(--color-text)]" }) : /* @__PURE__ */ m(Ll, { className: "w-4 h-4 text-[var(--color-text)]" })
            ]
          }
        ),
        /* @__PURE__ */ m(
          "div",
          {
            id: "accordion-content",
            className: `transition-all duration-300 ease-in-out overflow-hidden ${s ? "max-h-screen py-2 px-2" : "max-h-0 p-0"}`,
            children: /* @__PURE__ */ m("div", { className: "text-sm", children: e })
          }
        )
      ]
    }
  );
}
function hd({
  children: r,
  href: e,
  className: t = "",
  disabled: o = !1
}) {
  return /* @__PURE__ */ m(
    "a",
    {
      href: o ? "/" : e,
      "aria-disabled": o,
      className: k(
        `
        mt-5 inline-block min-w-[140px] rounded-lg bg-[var(--color-primary)] 
        px-4 py-2 text-center text-[16px] text-white transition 
        shadow-theme-xs hover:bg-[var(--color-primary-hover)] 
        disabled:pointer-events-none disabled:opacity-50
        `,
        o && "cursor-not-allowed",
        t
      ),
      children: r
    }
  );
}
const Il = {
  success: "bg-[var(--color-success)] text-[var(--color-on-success)]",
  error: "bg-[var(--color-error)] text-[var(--color-on-error)]",
  warning: "bg-[var(--color-warning)] text-[var(--color-on-warning)]",
  info: "bg-[var(--color-info)] text-[var(--color-on-info)]"
};
function md({
  open: r,
  message: e,
  severity: t = "info",
  autoHideDuration: o = 6e3,
  onClose: s
}) {
  return $(() => {
    if (r) {
      const a = setTimeout(s, o);
      return () => clearTimeout(a);
    }
  }, [r, o, s]), /* @__PURE__ */ m(
    "div",
    {
      className: `
        fixed bottom-4 right-4 z-50
        transition-all duration-300 ease-in-out
        ${r ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
      `,
      children: /* @__PURE__ */ p(
        "div",
        {
          className: `
          flex items-center gap-3 px-4 py-3 rounded-md shadow-lg w-80
          ${Il[t]}
        `,
          children: [
            /* @__PURE__ */ m("span", { className: "flex-1 text-sm", children: e }),
            /* @__PURE__ */ m("button", { onClick: s, "aria-label": "Fechar notificação", children: /* @__PURE__ */ m(Tl, { className: "w-4 h-4 cursor-pointer hover:opacity-80 transition-opacity" }) })
          ]
        }
      )
    }
  );
}
function ud() {
  const [r, e] = x(null);
  $(() => {
    const o = localStorage.getItem("theme"), s = window.matchMedia("(prefers-color-scheme: dark)").matches, a = o ? o === "dark" : s;
    e(a), t(a);
  }, []), $(() => {
    r !== null && t(r);
  }, [r]);
  const t = (o) => {
    const s = document.documentElement;
    o ? (s.classList.add("dark"), s.setAttribute("data-theme", "dark"), localStorage.setItem("theme", "dark")) : (s.classList.remove("dark"), s.setAttribute("data-theme", "light"), localStorage.setItem("theme", "light"));
  };
  return r === null ? null : /* @__PURE__ */ m(
    "button",
    {
      type: "button",
      onClick: () => e(!r),
      className: "cursor-pointer flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--color-secondary)] text-[var(--color-on-secondary)] hover:opacity-90 transition",
      children: r ? "🌙 Modo Escuro" : "☀️ Modo Claro"
    }
  );
}
export {
  dd as Accordion,
  Xl as Button,
  hd as CustomLink,
  Kl as FormCheckbox,
  Yl as FormInput,
  Gl as FormInputPassword,
  O as FormLabel,
  Jl as FormSelect,
  rd as FormSlider,
  td as FormSwitch,
  Ql as FormTextArea,
  ed as MessageError,
  ad as ModalConfirmation,
  vl as ModalDefault,
  sd as Pagination,
  od as Progress,
  md as SnackBar,
  cd as Table,
  nd as TableAction,
  id as Tabs,
  ud as ThemeToggle,
  _ as Tooltip,
  ld as VerticalTabs,
  B as getBorderColor
};
