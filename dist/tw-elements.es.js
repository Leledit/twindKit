import { jsx as c } from "react/jsx-runtime";
import { twMerge as d } from "tailwind-merge";
const v = {
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
}, t = `
  w-full min-h-[48px] min-w-[140px] py-3 px-4 mt-5 
  rounded-lg
  transition shadow-theme-xs cursor-pointer
`;
function g({
  className: r,
  children: a,
  variant: o = "secondary",
  ...e
}) {
  return /* @__PURE__ */ c(
    "button",
    {
      className: d(t, v[o], r),
      ...e,
      children: a
    }
  );
}
export {
  g as Button
};
