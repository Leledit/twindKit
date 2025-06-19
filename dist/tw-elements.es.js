import { jsx as a } from "react/jsx-runtime";
import { twMerge as s } from "tailwind-merge";
const p = ({
  children: r,
  onClick: t,
  className: e = "",
  disabled: o = !1,
  ...n
}) => /* @__PURE__ */ a(
  "button",
  {
    className: s(
      `rounded-lg transition py-3 px-4 text-primary-50 min-w-[140px] cursor-pointer mt-5
        shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300 bg-accent-500 hover:accent-500/90 w-full`,
      e
    ),
    onClick: t,
    disabled: o,
    ...n,
    children: r
  }
);
export {
  p as Button
};
