import { j as jsxRuntimeExports, w as cjsExports } from "../_virtual_one-entry.js";
import "node:async_hooks";
import "crypto";
function GlowEffect({ children, color, intensity = "medium", size = "md" }) {
  const intensityMap = {
    soft: {
      opacity: 0.15,
      blur: "blur-md"
    },
    medium: {
      opacity: 0.25,
      blur: "blur-lg"
    },
    strong: {
      opacity: 0.35,
      blur: "blur-xl"
    }
  };
  const sizeMap = {
    xs: {
      size: "w-[110%] h-[110%]"
    },
    sm: {
      size: "w-[120%] h-[120%]"
    },
    md: {
      size: "w-[140%] h-[140%]"
    },
    lg: {
      size: "w-[160%] h-[160%]"
    }
  };
  const colorMap = {
    amber: "bg-amber-300",
    indigo: "bg-indigo-300",
    purple: "bg-purple-300",
    blue: "bg-blue-300",
    teal: "bg-teal-300",
    emerald: "bg-emerald-300",
    rose: "bg-rose-300"
  };
  const { opacity, blur } = intensityMap[intensity];
  const { size: dimensions } = sizeMap[size];
  const bgColor = colorMap[color] || "bg-amber-300";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
    className: "relative",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
        className: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ${dimensions} ${blur} ${bgColor} z-0`,
        style: {
          opacity
        }
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
        className: "relative z-10",
        children
      })
    ]
  });
}
export {
  GlowEffect as default
};
