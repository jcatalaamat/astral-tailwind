import { r as reactExports, j as jsxRuntimeExports, w as cjsExports } from "../_virtual_one-entry.js";
import TextureBackground from "./TextureBackground-DC9pxGSt.js";
import "node:async_hooks";
import "crypto";
function ContactFooter() {
  const [messageSent, setMessageSent] = reactExports.useState(false);
  const handleSendMessage = () => {
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
    }, 5e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
        className: "w-full py-20 px-4 bg-stone-50 relative overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TextureBackground, {
            type: "paper",
            opacity: 0.07
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
            className: "max-w-4xl mx-auto flex items-center relative z-10",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                className: "text-amber-700 text-lg italic mb-2 font-serif opacity-0 animate-fade-up",
                style: {
                  animationDelay: "0.3s"
                },
                children: "Sacred Connection"
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                className: "text-3xl font-bold text-center text-stone-800 mb-3 font-serif opacity-0 animate-fade-up",
                style: {
                  animationDelay: "0.5s"
                },
                children: "Ready to Begin Your Journey?"
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                className: "text-xl text-center text-stone-600 mb-6 max-w-2xl opacity-0 animate-fade-up",
                style: {
                  animationDelay: "0.7s"
                },
                children: "Take the first sacred step toward authentic transformation"
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                className: "text-center text-amber-700 italic mb-4 max-w-xl leading-relaxed opacity-0 animate-fade-up",
                style: {
                  animationDelay: "0.9s"
                },
                children: "If your heart is stirring, reach out. I will meet you there."
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                className: "w-full max-w-md flex flex-col gap-4 mb-8 opacity-0 animate-fade-up bg-white/50 p-8 rounded-xl border border-amber-100/50 shadow-sm",
                style: {
                  animationDelay: "1.1s"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TextInput, {
                    placeholder: "Your sacred name",
                    className: "bg-white border border-amber-200/70 rounded-xl px-5 py-3 shadow-sm focus:border-amber-500 transition-all duration-300"
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TextInput, {
                    placeholder: "Where I can reach you",
                    className: "bg-white border border-amber-200/70 rounded-xl px-5 py-3 shadow-sm focus:border-amber-500 transition-all duration-300"
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                    className: "w-full relative",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TextInput, {
                        placeholder: "What's rising in your heart?",
                        multiline: true,
                        numberOfLines: 5,
                        className: "bg-white border border-amber-200/70 rounded-xl px-5 py-4 min-h-[120px] shadow-sm focus:border-amber-500 transition-all duration-300"
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                        className: "absolute bottom-3 right-3 opacity-30",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                          className: "text-amber-600 text-lg",
                          children: "✎"
                        })
                      })
                    ]
                  })
                ]
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.TouchableOpacity, {
                className: "group bg-gradient-to-r from-amber-600 to-amber-700 px-8 py-4 rounded-xl shadow-sm hover:shadow-lg hover:shadow-amber-200/20 transition-all duration-500 transform hover:-translate-y-0.5 relative overflow-hidden mt-4 opacity-0 animate-fade-up",
                style: {
                  animationDelay: "1.3s"
                },
                onPress: handleSendMessage,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                    className: "absolute top-0 -left-10 w-20 h-full bg-white/20 transform -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-52 transition-all duration-1000 ease-in-out"
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                    className: "absolute top-1 right-2 w-1.5 h-1.5 bg-white rounded-full opacity-80 animate-pulse",
                    style: {
                      animationDuration: "2s"
                    }
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                    className: "absolute bottom-2 left-3 w-1 h-1 bg-white rounded-full opacity-60 animate-pulse",
                    style: {
                      animationDuration: "3s"
                    }
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                    className: "text-white font-medium text-lg",
                    children: "Send With Intention"
                  })
                ]
              }),
              messageSent && /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                className: "mt-6 opacity-0 animate-fade-up",
                style: {
                  animationDelay: "0.3s"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                  className: "text-amber-700 text-center font-serif italic",
                  children: "Thank you. Your message has entered the sacred field."
                })
              })
            ]
          })
        ]
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
        className: "w-full py-16 px-4 bg-stone-900 relative overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
            className: "absolute inset-0 opacity-10",
            children: [
              ...Array(20)
            ].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
              className: "absolute w-1 h-1 rounded-full bg-amber-100",
              style: {
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.1 + Math.random() * 0.3
              }
            }, `star-${i}`))
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
            className: "max-w-6xl mx-auto text-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                className: "mb-12",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                    className: "text-2xl font-bold text-white mb-2 font-serif",
                    children: "The Mirror Path"
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                    className: "text-amber-100/70 italic",
                    children: "Reflect. Remember. Return."
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                    className: "text-amber-50/60 italic text-sm mt-6 max-w-xl mx-auto",
                    children: "May your return be soft, your voice be heard, and your path be lit from within."
                  })
                ]
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                className: "flex flex-row justify-center gap-8 flex-wrap mb-12",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
                    className: "group",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.Text, {
                      className: "text-white hover:text-amber-100 transition-all duration-300",
                      children: [
                        "Home",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                          className: "h-px w-0 group-hover:w-full bg-amber-400 mt-1 transition-all duration-500"
                        })
                      ]
                    })
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
                    className: "group",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.Text, {
                      className: "text-white hover:text-amber-100 transition-all duration-300",
                      children: [
                        "About",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                          className: "h-px w-0 group-hover:w-full bg-amber-400 mt-1 transition-all duration-500"
                        })
                      ]
                    })
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
                    className: "group",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.Text, {
                      className: "text-white hover:text-amber-100 transition-all duration-300",
                      children: [
                        "Offerings",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                          className: "h-px w-0 group-hover:w-full bg-amber-400 mt-1 transition-all duration-500"
                        })
                      ]
                    })
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
                    className: "group",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.Text, {
                      className: "text-white hover:text-amber-100 transition-all duration-300",
                      children: [
                        "Contact",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                          className: "h-px w-0 group-hover:w-full bg-amber-400 mt-1 transition-all duration-500"
                        })
                      ]
                    })
                  })
                ]
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                className: "flex flex-row justify-center gap-8 mb-12",
                children: [
                  {
                    icon: "✧",
                    label: "Instagram"
                  },
                  {
                    icon: "⦿",
                    label: "Spotify"
                  },
                  {
                    icon: "⌘",
                    label: "Newsletter"
                  }
                ].map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.TouchableOpacity, {
                  className: "group flex flex-col items-center",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                      className: "w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center group-hover:bg-amber-900/30 transition-all duration-500 group-hover:shadow-inner group-hover:shadow-amber-700/20",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                        className: "text-amber-100/70 group-hover:text-amber-100 text-xl transition-all duration-300 animate-pulse-slow",
                        children: item.icon
                      })
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                      className: "text-stone-500 text-xs mt-1",
                      children: item.label
                    })
                  ]
                }, index))
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                className: "mb-8",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                  className: "text-amber-400/80 text-center italic font-serif",
                  children: "May your path be lit with remembrance."
                })
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                className: "border-t border-stone-800 pt-8",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                      className: "text-amber-100/60 text-sm text-center mb-2",
                      children: "Awaken. Remember. Embody. You are already home."
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                      className: "text-stone-400 text-sm",
                      children: "© 2023 Jordi Sacred Coaching. All rights reserved."
                    })
                  ]
                })
              })
            ]
          })
        ]
      })
    ]
  });
}
export {
  ContactFooter as default
};
