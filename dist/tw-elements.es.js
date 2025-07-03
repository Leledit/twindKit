import { jsx as r, jsxs as v } from "react/jsx-runtime";
import { twMerge as t } from "tailwind-merge";
const g = {
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
}, h = `
  w-full min-h-[48px] min-w-[140px] py-3 px-4 mt-5 
  rounded-lg
  transition shadow-theme-xs cursor-pointer
`;
function y({
  className: a,
  children: d,
  variant: o = "secondary",
  ...c
}) {
  return /* @__PURE__ */ r(
    "button",
    {
      className: t(h, g[o], a),
      ...c,
      children: d
    }
  );
}
const p = {
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
function w({
  checked: a,
  onChange: d,
  label: o,
  classNameLabel: c = "",
  classNameInput: l = "",
  size: n = "md"
}) {
  const e = p[n];
  return /* @__PURE__ */ v(
    "label",
    {
      className: `inline-flex items-center cursor-pointer ${c}`,
      children: [
        /* @__PURE__ */ r(
          "input",
          {
            type: "checkbox",
            checked: a,
            onChange: d,
            className: "peer hidden"
          }
        ),
        /* @__PURE__ */ r(
          "div",
          {
            className: t(
              `
          flex items-center justify-center rounded border 
          ${e.box}
          border-[var(--color-muted)]
          peer-checked:bg-[var(--color-secondary)]
          peer-checked:border-[var(--color-secondary)]
          transition-colors
          dark:border-[var(--color-muted-dark)]
          dark:peer-checked:bg-[var(--color-secondary-dark)]
          dark:peer-checked:border-[var(--color-secondary-dark)]
        `,
              l
            ),
            children: /* @__PURE__ */ r(
              "svg",
              {
                className: t(`
            ${e.icon} hidden peer-checked:block 
            text-[var(--color-secondary-foreground)] 
            dark:text-[var(--color-secondary-foreground-dark)]
          `),
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ r(
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
        o && /* @__PURE__ */ r(
          "span",
          {
            className: t(`
            ml-2 ${e.label}
            text-[var(--color-foreground)] 
            dark:text-[var(--color-foreground-dark)]
          `),
            children: o
          }
        )
      ]
    }
  );
}
function N({
  label: a,
  error: d = !1,
  success: o = !1,
  disabled: c = !1,
  messageError: l = "Campo obrigatório",
  isValidating: n,
  icon: e,
  className: k = "",
  onChange: b,
  ...i
}) {
  const s = d && n, u = () => s ? "border-[var(--color-error)] focus:border-[var(--color-error)]" : o ? "border-[var(--color-success)] focus:border-[var(--color-success)]" : "border-[var(--color-secondary)] focus:border-[var(--color-secondary)] dark:border-[var(--color-muted-dark)] dark:focus:border-[var(--color-secondary-dark)]", m = s ? "text-[var(--color-error)]" : o ? "text-[var(--color-success)]" : "text-[var(--color-muted)] dark:text-[var(--color-muted-dark)]";
  return /* @__PURE__ */ v("div", { className: "w-full mt-5", children: [
    a && /* @__PURE__ */ r(
      "label",
      {
        htmlFor: i.id,
        className: "block mb-1 text-sm font-medium text-[var(--color-primary-foreground)] dark:text-[var(--color-foreground-dark)]",
        children: a
      }
    ),
    /* @__PURE__ */ v("div", { className: "relative", children: [
      e && /* @__PURE__ */ r("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ r(e, { className: `h-5 w-5 ${m}` }) }),
      /* @__PURE__ */ r(
        "input",
        {
          disabled: c,
          onChange: b,
          className: t(
            `block w-full rounded-md py-3 px-4 transition duration-200 border focus:outline-none appearance-none transition duration-200
             bg-[var(--color-background)] text-[var(--color-foreground)] placeholder-[var(--color-muted)] 
             dark:bg-[var(--color-background-dark)] dark:text-[var(--color-foreground-dark)] dark:placeholder-[var(--color-muted-dark)]
             ${e ? "pl-10" : ""}
             ${u()}
             ${c ? "opacity-60 cursor-not-allowed" : ""}
            `,
            k
          ),
          ...i
        }
      )
    ] }),
    s && l && /* @__PURE__ */ r("p", { className: "mt-2 text-sm text-[var(--color-error)]", children: l })
  ] });
}
export {
  y as Button,
  w as FormCheckbox,
  N as FormInput
};
