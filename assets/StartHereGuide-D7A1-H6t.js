import { r as reactExports, j as jsxRuntimeExports, w as cjsExports } from "../_virtual_one-entry.js";
import TextureBackground from "./TextureBackground-DC9pxGSt.js";
import "node:async_hooks";
import "crypto";
function StartHereGuide({ onClarityCallPress, onMirrorPathPress }) {
  const [hoverCard1, setHoverCard1] = reactExports.useState(false);
  const [hoverCard2, setHoverCard2] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
    className: "w-full py-24 relative overflow-hidden",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
        className: "absolute inset-0 bg-gradient-to-br from-amber-50/50 via-stone-50 to-amber-50/50"
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextureBackground, {
        type: "paper",
        opacity: 0.1,
        className: "absolute inset-0",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {})
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
        className: "max-w-6xl mx-auto px-4 relative z-10",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
            className: "flex items-center justify-center mb-6",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                className: "text-amber-700 text-lg font-serif italic opacity-0 animate-fade-up",
                style: {
                  animationDelay: "0.3s"
                },
                children: "Begin Your Journey"
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                className: "text-3xl font-bold text-stone-800 font-serif text-center mb-2 max-w-xl mx-auto opacity-0 animate-fade-up",
                style: {
                  animationDelay: "0.5s"
                },
                children: "Start Here"
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                className: "flex items-center justify-center mb-2 opacity-0 animate-fade-up",
                style: {
                  animationDelay: "0.6s"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                  className: "text-amber-600 text-2xl",
                  children: "✧ ✦ ✧"
                })
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                className: "w-24 h-px bg-amber-500/50 my-4 opacity-0 animate-fade-up",
                style: {
                  animationDelay: "0.7s"
                }
              })
            ]
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
            className: "text-center text-amber-700 italic max-w-xl mx-auto mb-8 opacity-0 animate-fade-up",
            style: {
              animationDelay: "0.8s"
            },
            children: "Not sure where to begin? Here's your first sacred step."
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
            className: "text-center max-w-3xl mx-auto mb-10 opacity-0 animate-fade-up",
            style: {
              animationDelay: "0.9s"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                className: "text-xl text-stone-700 mb-6",
                children: "New to the work? Start with a Clarity Call or Soul Session."
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                className: "text-stone-600",
                children: "The path of transformation begins with a single step. Choose an entry point that feels aligned with your current needs."
              })
            ]
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
            className: "flex-row flex-wrap justify-center gap-6 mt-8 opacity-0 animate-fade-up",
            style: {
              animationDelay: "1.1s"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                className: "relative w-full md:w-[330px]",
                children: [
                  hoverCard1 && /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                    className: "absolute -inset-2",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                      className: "absolute inset-0 bg-amber-300/10 rounded-3xl blur-lg"
                    })
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.TouchableOpacity, {
                    className: `bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 p-8 rounded-2xl ${hoverCard1 ? "shadow-lg shadow-amber-200/40" : "shadow-md"} w-full hover:translate-y-[-2px] transition-all duration-500 flex items-center relative z-10`,
                    onPress: onClarityCallPress,
                    onMouseEnter: () => setHoverCard1(true),
                    onMouseLeave: () => setHoverCard1(false),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                        className: "mr-6 bg-amber-200/50 p-4 rounded-full",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                          className: "text-3xl text-amber-700",
                          children: "✧"
                        })
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                        className: "flex-1",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                            className: "text-lg font-semibold text-stone-800 mb-1",
                            children: "Explore Clarity Call"
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                            className: "text-stone-600 text-sm",
                            children: "A perfect first step to illuminate your path"
                          })
                        ]
                      })
                    ]
                  })
                ]
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                className: "relative w-full md:w-[330px]",
                children: [
                  hoverCard2 && /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                    className: "absolute -inset-2",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                      className: "absolute inset-0 bg-amber-300/10 rounded-3xl blur-lg"
                    })
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.TouchableOpacity, {
                    className: `bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 p-8 rounded-2xl ${hoverCard2 ? "shadow-lg shadow-amber-200/40" : "shadow-md"} w-full hover:translate-y-[-2px] transition-all duration-500 flex items-center relative z-10`,
                    onPress: onMirrorPathPress,
                    onMouseEnter: () => setHoverCard2(true),
                    onMouseLeave: () => setHoverCard2(false),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                        className: "mr-6 bg-amber-200/50 p-4 rounded-full",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                          className: "text-3xl text-amber-700",
                          children: "⊹"
                        })
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                        className: "flex-1",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                            className: "text-lg font-semibold text-stone-800 mb-1",
                            children: "Learn About Mirror Path"
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                            className: "text-stone-600 text-sm",
                            children: "Discover the transformative journey"
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
            className: "flex items-center justify-center mt-16 opacity-0 animate-fade-up",
            style: {
              animationDelay: "1.3s"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
              className: "flex-row items-center w-full max-w-sm",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                  className: "flex-1 h-px bg-gradient-to-r from-transparent to-amber-300/50"
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                  className: "mx-4 text-amber-600 text-lg",
                  children: "✦"
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                  className: "flex-1 h-px bg-gradient-to-l from-transparent to-amber-300/50"
                })
              ]
            })
          })
        ]
      })
    ]
  });
}
export {
  StartHereGuide as default
};
