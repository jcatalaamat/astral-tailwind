import { j as jsxRuntimeExports, w as cjsExports } from "../_virtual_one-entry.js";
import "node:async_hooks";
import "crypto";
function Footer() {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
    className: "w-full bg-stone-950 relative overflow-hidden",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
        className: "absolute inset-0 opacity-5 pointer-events-none",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
            className: "absolute inset-0 bg-sacred-altar opacity-5"
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
            className: "absolute inset-0 noise-overlay"
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
            className: "flex flex-wrap",
            children: [
              ...Array(30)
            ].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
              className: "w-20 h-20 flex items-center justify-center",
              style: {
                transform: [
                  `rotate(${i * 12}deg)`
                ],
                opacity: 0.2 + i % 3 * 0.1
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                className: "text-amber-400 text-2xl animate-pulse-slow",
                style: {
                  animationDelay: `${i * 200}ms`
                },
                children: i % 3 === 0 ? "⊛" : i % 3 === 1 ? "⊹" : "⊝"
              })
            }, i))
          })
        ]
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
        className: "w-full relative",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
            className: "absolute inset-0 h-1 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent blur-sm"
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
            className: "w-full h-0.5 bg-gradient-to-r from-transparent via-amber-500/80 to-transparent"
          })
        ]
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
        className: "max-w-6xl mx-auto px-4 py-24",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
            className: "flex-row flex-wrap justify-between mb-20",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                className: "mb-10 md:mb-0 max-w-xs opacity-0 animate-fade-up",
                style: {
                  animationDelay: "0.2s"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                    className: "text-amber-400 font-serif text-3xl mb-4 animate-float",
                    children: "Astral"
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                    className: "text-amber-50/80 mb-6",
                    children: "A sacred journey to your authentic self through spiritually-informed coaching and healing experiences."
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                    className: "flex-row space-x-4",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
                        className: "w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-800 transition-colors sacred-glow",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                          className: "text-amber-400",
                          children: "✧"
                        })
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
                        className: "w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-800 transition-colors sacred-glow",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                          className: "text-amber-400",
                          children: "♫"
                        })
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
                        className: "w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-800 transition-colors sacred-glow",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                          className: "text-amber-400",
                          children: "❋"
                        })
                      })
                    ]
                  })
                ]
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                className: "mb-10 md:mb-0 opacity-0 animate-fade-up",
                style: {
                  animationDelay: "0.4s"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                    className: "text-amber-400 font-medium text-lg mb-5 font-serif",
                    children: "Path"
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                    className: "space-y-4",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
                        className: "sacred-hover",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                          className: "text-stone-300 hover:text-amber-300 transition-colors",
                          children: "About"
                        })
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
                        className: "sacred-hover",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                          className: "text-stone-300 hover:text-amber-300 transition-colors",
                          children: "Mirror Path"
                        })
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
                        className: "sacred-hover",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                          className: "text-stone-300 hover:text-amber-300 transition-colors",
                          children: "Podcast"
                        })
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
                        className: "sacred-hover",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                          className: "text-stone-300 hover:text-amber-300 transition-colors",
                          children: "Client Reflections"
                        })
                      })
                    ]
                  })
                ]
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                className: "mb-10 md:mb-0 opacity-0 animate-fade-up",
                style: {
                  animationDelay: "0.6s"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                    className: "text-amber-400 font-medium text-lg mb-5 font-serif",
                    children: "Offerings"
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                    className: "space-y-4",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
                        className: "sacred-hover",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                          className: "text-stone-300 hover:text-amber-300 transition-colors",
                          children: "1:1 Sessions"
                        })
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
                        className: "sacred-hover",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                          className: "text-stone-300 hover:text-amber-300 transition-colors",
                          children: "Workshops"
                        })
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
                        className: "sacred-hover",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                          className: "text-stone-300 hover:text-amber-300 transition-colors",
                          children: "Group Journeys"
                        })
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
                        className: "sacred-hover",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                          className: "text-stone-300 hover:text-amber-300 transition-colors",
                          children: "Free Resources"
                        })
                      })
                    ]
                  })
                ]
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                className: "mb-10 md:mb-0 opacity-0 animate-fade-up",
                style: {
                  animationDelay: "0.8s"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                    className: "text-amber-400 font-medium text-lg mb-5 font-serif",
                    children: "Connect"
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                    className: "space-y-4",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
                        className: "sacred-hover",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                          className: "text-stone-300 hover:text-amber-300 transition-colors",
                          children: "Book a Session"
                        })
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
                        className: "sacred-hover",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                          className: "text-stone-300 hover:text-amber-300 transition-colors",
                          children: "hello@astral.com"
                        })
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
                        className: "sacred-hover",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                          className: "text-stone-300 hover:text-amber-300 transition-colors",
                          children: "Newsletter"
                        })
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
            className: "w-full bg-stone-900/50 rounded-xl p-10 mb-20 border border-stone-800/80 glassmorphism-dark relative overflow-hidden opacity-0 animate-fade-up",
            style: {
              animationDelay: "1s"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                className: "absolute inset-0 -m-1 rounded-xl border border-amber-700/20 blur-sm"
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                className: "absolute inset-0 -m-0.5 rounded-xl border border-amber-600/10 blur-md"
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                className: "absolute inset-0 opacity-10",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                    className: "absolute top-0 left-1/4 w-40 h-40 rounded-full bg-amber-500/20 blur-3xl animate-pulse-slow",
                    style: {
                      animationDuration: "8s"
                    }
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                    className: "absolute bottom-0 right-1/4 w-40 h-40 rounded-full bg-amber-500/20 blur-3xl animate-pulse-slow",
                    style: {
                      animationDuration: "12s",
                      animationDelay: "2s"
                    }
                  })
                ]
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                className: "flex-row flex-wrap items-center justify-between",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                    className: "max-w-md mb-8 md:mb-0",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                        className: "text-amber-400 font-medium text-2xl mb-3 font-serif",
                        children: "Sacred Newsletter"
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                        className: "text-stone-300 mb-2",
                        children: "Receive meditation prompts, spiritual teachings, and event notifications"
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                        className: "text-amber-500/70 text-sm italic",
                        children: "Join our community of seekers and healers"
                      })
                    ]
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                    className: "flex-col space-y-4 md:flex-row md:space-y-0",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                        className: "h-14 bg-stone-800/80 rounded-md md:rounded-r-none px-4 py-2 border border-stone-700 md:w-64 flex items-center",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                          className: "text-stone-400",
                          children: "youremail@example.com"
                        })
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
                        className: "h-14 bg-gradient-to-r from-amber-700 to-amber-600 rounded-md md:rounded-l-none px-6 flex items-center justify-center sacred-glow",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                          className: "text-white font-medium",
                          children: "Subscribe"
                        })
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
            className: "w-full flex items-center justify-center mb-16 opacity-0 animate-fade-up",
            style: {
              animationDelay: "1.2s"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                className: "h-px w-24 bg-amber-700/30"
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                className: "text-amber-600/60 mx-4 text-lg",
                children: "✧"
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                className: "h-px w-24 bg-amber-700/30"
              })
            ]
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
            className: "flex-row flex-wrap items-center justify-between pt-8 border-t border-stone-800/50 opacity-0 animate-fade-up",
            style: {
              animationDelay: "1.4s"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.Text, {
                className: "text-stone-500 mb-6 md:mb-0",
                children: [
                  "© ",
                  currentYear,
                  " Astral. All rights reserved."
                ]
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                className: "flex-row space-x-8",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
                    className: "sacred-hover",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                      className: "text-stone-500 hover:text-amber-400 transition-colors",
                      children: "Privacy"
                    })
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
                    className: "sacred-hover",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                      className: "text-stone-500 hover:text-amber-400 transition-colors",
                      children: "Terms"
                    })
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
                    className: "sacred-hover",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                      className: "text-stone-500 hover:text-amber-400 transition-colors",
                      children: "Accessibility"
                    })
                  })
                ]
              })
            ]
          })
        ]
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
        className: "w-full flex items-center justify-center py-2 bg-gradient-to-r from-stone-900 via-stone-950 to-stone-900",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
          className: "flex-row space-x-4 animate-pulse-slow",
          children: [
            "✧",
            "✢",
            "✧",
            "✢",
            "✧"
          ].map((symbol, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
            className: "text-amber-500/30 text-xs tracking-widest animate-float",
            style: {
              animationDelay: `${i * 0.5}s`
            },
            children: symbol
          }, i))
        })
      })
    ]
  });
}
export {
  Footer as default
};
