import { j as jsxRuntimeExports, w as cjsExports } from "../_virtual_one-entry.js";
import "node:async_hooks";
import "crypto";
function GradientTest() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
    className: "p-6",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
        className: "mb-4 text-lg font-bold",
        children: "Gradient Tests"
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
        className: "h-20 w-full bg-gradient-to-r from-amber-500 to-amber-700 mb-4 rounded-lg",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
          className: "text-white p-2",
          children: "Standard gradient"
        })
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
        className: "h-20 w-full bg-gradient-to-b from-stone-900/20 via-stone-900/60 to-stone-900/85 mb-4 rounded-lg",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
          className: "text-white p-2",
          children: "Gradient with opacity"
        })
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
        className: "h-20 w-full bg-amber-500/50 mb-4 rounded-lg",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
          className: "text-white p-2",
          children: "Color with opacity"
        })
      })
    ]
  });
}
export {
  GradientTest as default
};
