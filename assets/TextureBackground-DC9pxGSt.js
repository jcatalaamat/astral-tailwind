import { j as jsxRuntimeExports, w as cjsExports } from "../_virtual_one-entry.js";
import "node:async_hooks";
import "crypto";
function TextureBackground({ children, type = "subtle", color = "slate", opacity = 0.15, className = "" }) {
  const getTextureClass = () => {
    switch (type) {
      case "noise":
        return "bg-noise-pattern";
      case "grain":
        return "bg-grain-pattern";
      case "marble":
        return "bg-marble-pattern";
      case "paper":
        return "bg-texture-paper";
      case "sacred":
        return "bg-sacred-pattern";
      case "subtle":
      default:
        return "bg-subtle-texture";
    }
  };
  const getColorClass = () => {
    switch (color) {
      case "slate":
        return "bg-slate-900";
      case "amber":
        return "bg-amber-950";
      case "indigo":
        return "bg-indigo-950";
      case "purple":
        return "bg-purple-950";
      case "emerald":
        return "bg-emerald-950";
      default:
        return "bg-slate-900";
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
    className: `relative ${className}`,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
        className: `absolute inset-0 ${getColorClass()} ${getTextureClass()}`,
        style: {
          opacity
        }
      }),
      children && /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
        className: "relative z-10",
        children
      })
    ]
  });
}
export {
  TextureBackground as default
};
