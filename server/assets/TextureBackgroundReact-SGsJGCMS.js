import { j as jsxRuntimeExports } from "../_virtual_one-entry.js";
import "node:async_hooks";
import "crypto";
function TextureBackgroundReact({ children, type, opacity = 0.1, className = "" }) {
  const getTextureClass = () => {
    switch (type) {
      case "paper":
        return "texture-paper";
      case "linen":
        return "texture-linen";
      case "grain":
        return "texture-grain";
      case "noise":
        return "noise-overlay";
      default:
        return "noise-overlay";
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: `relative ${className}`,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: `absolute inset-0 ${getTextureClass()}`,
        style: {
          opacity
        }
      })
    ]
  });
}
export {
  TextureBackgroundReact as default
};
