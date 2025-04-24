import { j as jsxRuntimeExports, w as cjsExports } from "../_virtual_one-entry.js";
import TextureBackground from "./TextureBackground-DC9pxGSt.js";
import "node:async_hooks";
import "crypto";
function QuoteDivider() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
    className: "w-full py-24 bg-gradient-to-br from-stone-50 via-amber-50/50 to-stone-50 relative overflow-hidden",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextureBackground, {
        type: "paper",
        opacity: 0.1
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
        className: "max-w-4xl mx-auto px-6 text-center relative z-10",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
            className: "flex items-center justify-center mb-10",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                className: "w-full h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent mb-10"
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                className: "text-amber-600 text-4xl",
                children: "⊹"
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                className: "w-full h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent mt-10"
              })
            ]
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
            className: "opacity-0 animate-fade-up",
            style: {
              animationDelay: "0.3s"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
              className: "text-3xl text-stone-800 font-serif italic mb-6",
              children: '"You are not broken. You are awakening."'
            })
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
            className: "opacity-0 animate-fade-up",
            style: {
              animationDelay: "0.5s"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
              className: "text-amber-700 text-lg font-serif",
              children: "Every journey begins with a single sacred step"
            })
          })
        ]
      })
    ]
  });
}
export {
  QuoteDivider as default
};
