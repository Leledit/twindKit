import { jsx as e } from "react/jsx-runtime";
import { twMerge as n } from "tailwind-merge";
const s = ({
  className: r = "",
  children: o,
  ...t
}) => /* @__PURE__ */ e(
  "button",
  {
    className: n(
      `w-full min-h-[48px] rounded-lg transition py-3 px-4 min-w-[140px] cursor-pointer mt-5 shadow-theme-xs 
        bg-secondary dark:bg-secondary-dark text-foreground dark:text-foreground-dark`,
      r
    ),
    ...t,
    children: o
  }
);
export {
  s as Button
};
