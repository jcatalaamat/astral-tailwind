import { r as reactExports, j as jsxRuntimeExports, w as cjsExports } from "../_virtual_one-entry.js";
import TextureBackground from "./TextureBackground-DC9pxGSt.js";
import "node:async_hooks";
import "crypto";
function SacredPortrait({ headline = "This Is Not Coaching", supportingText = "This is soul remembrance. A sacred invitation to witness yourself through the mirror of divine presence.", imagePath = "/images/sacred-portraits/main-portrait.jpg", secondaryImagePath = "/images/sacred-portraits/secondary-portrait.jpg", alignment = "left" }) {
  const [isHovered, setIsHovered] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
    className: "w-full py-24 px-4 relative overflow-hidden bg-stone-50",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextureBackground, {
        type: "paper",
        opacity: 0.07,
        className: "absolute inset-0",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {})
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
        className: "absolute inset-0 flex items-center justify-center opacity-[0.03]",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
          className: "text-[300px] text-amber-800 leading-none",
          children: "✧"
        })
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
        className: `max-w-6xl mx-auto flex flex-col ${alignment === "left" ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
            className: "md:w-1/2 relative",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
              className: `relative transition-all duration-500 ${isHovered ? "scale-[1.02]" : ""}`,
              onMouseEnter: () => setIsHovered(true),
              onMouseLeave: () => setIsHovered(false),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                  className: "bg-stone-50 p-3 shadow-xl rounded-sm rotate-1",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Image, {
                    source: {
                      uri: imagePath
                    },
                    className: "w-full aspect-[3/4] object-cover rounded-sm",
                    resizeMode: "cover"
                  })
                }),
                secondaryImagePath && /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                  className: "absolute -bottom-10 -right-10 w-32 h-32 bg-stone-50 p-2 shadow-xl rounded-sm -rotate-3 z-20",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Image, {
                    source: {
                      uri: secondaryImagePath
                    },
                    className: "w-full h-full object-cover rounded-sm",
                    resizeMode: "cover"
                  })
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                  className: `absolute top-5 ${alignment === "left" ? "right-5" : "left-5"} w-20 h-20 border-2 border-amber-300/20 rounded-full -z-10`
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                  className: `absolute -bottom-8 ${alignment === "left" ? "-left-8" : "-right-8"} w-36 h-36 border-2 border-amber-300/20 rounded-full -z-10`
                })
              ]
            })
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
            className: "md:w-1/2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                className: "text-amber-700 font-serif text-3xl mb-6",
                children: headline
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                className: "w-16 h-px bg-amber-300 mb-8"
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                className: "text-stone-700 text-xl leading-relaxed mb-6 font-serif",
                children: supportingText
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                className: "text-amber-600 italic",
                children: "Your journey begins with one sacred step."
              })
            ]
          })
        ]
      })
    ]
  });
}
export {
  SacredPortrait as default
};
