import { r as reactExports, j as jsxRuntimeExports, w as cjsExports } from "../_virtual_one-entry.js";
import "node:async_hooks";
import "crypto";
function Hero({ headline = "Awaken to Your Highest Potential", headlineAccent = "", subheadline = "Spiritual coaching to guide you to profound inner transformation and authentic living", supportingText = "", microText = "", ctaText = "Enter the Mirror Path", ctaLink = "/contact", backgroundImage = "/images/sacred-cosmos.jpg", alignment = "center", onCtaPress }) {
  const [pulsing, setPulsing] = reactExports.useState(false);
  const [hoverCTA, setHoverCTA] = reactExports.useState(false);
  const [fadeComplete, setFadeComplete] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const interval = setInterval(() => {
      setPulsing((prev) => !prev);
    }, 2e3);
    const fadeTimer = setTimeout(() => {
      setFadeComplete(true);
    }, 2500);
    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimer);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
    className: "relative w-full min-h-[100vh] overflow-hidden",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
        className: "absolute inset-0 z-0",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Image, {
            source: {
              uri: backgroundImage
            },
            className: "absolute inset-0 w-full h-full object-cover",
            resizeMode: "cover"
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
            className: "absolute inset-0 bg-stone-950/90"
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
            className: "absolute inset-0 opacity-20"
          })
        ]
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
        className: `relative z-20 px-6 py-24 flex items-${alignment} justify-center h-full w-full max-w-6xl mx-auto`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
          className: `max-w-2xl ${alignment === "center" ? "mx-auto text-center" : alignment === "right" ? "ml-auto text-right" : "text-left"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
              className: "mb-6",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.Text, {
                  className: "text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight font-bold",
                  children: [
                    headline,
                    " ",
                    headlineAccent && /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                      className: "text-amber-400",
                      children: headlineAccent
                    })
                  ]
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                  className: "w-24 h-1 bg-amber-500 mt-6 mb-8 mx-auto"
                })
              ]
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
              className: "text-xl md:text-2xl text-white mb-6 font-light leading-relaxed",
              children: subheadline
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
              className: "text-lg text-amber-300 mb-6 italic font-medium",
              children: supportingText || "This is not self-help. This is sacred remembering."
            }),
            microText && /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
              className: "text-sm text-amber-300 mb-8 tracking-wider font-medium",
              children: microText
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
              className: "mt-8",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                  className: "relative",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                      className: `absolute inset-0 -m-1 rounded-md bg-amber-500/0 ${hoverCTA ? "bg-amber-500/20 blur-md" : ""} transition-all duration-700`
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
                      className: `inline-flex items-center px-8 py-4 rounded-md bg-amber-600 text-white hover:shadow-lg hover:shadow-amber-600/40 transition-all duration-500 transform ${hoverCTA ? "-translate-y-1" : ""}`,
                      onPress: onCtaPress,
                      onMouseEnter: () => setHoverCTA(true),
                      onMouseLeave: () => setHoverCTA(false),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                        className: "flex-row items-center",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                            className: "font-medium text-white text-lg",
                            children: ctaText
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                            className: `ml-2 text-lg ${hoverCTA ? "translate-x-1" : ""} transition-all duration-300`,
                            children: "→"
                          })
                        ]
                      })
                    })
                  ]
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                  className: "text-amber-300 text-sm mt-4 italic font-serif",
                  children: "This is your first breath back home."
                })
              ]
            })
          ]
        })
      })
    ]
  });
}
export {
  Hero as default
};
