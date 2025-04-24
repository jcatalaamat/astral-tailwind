import { j as jsxRuntimeExports, w as cjsExports } from "../_virtual_one-entry.js";
import "node:async_hooks";
import "crypto";
function FadeIn({ children, delay = 300, className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
    className: `animate-fade-up ${className}`,
    style: {
      animationDelay: `${delay / 1e3}s`
    },
    children
  });
}
export {
  FadeIn as default
};
