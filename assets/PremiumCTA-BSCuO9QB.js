import { r as reactExports, j as jsxRuntimeExports, w as cjsExports } from "../_virtual_one-entry.js";
import "node:async_hooks";
import "crypto";
function PremiumCTA({ onApplyNow = () => console.log("Apply for Premium") }) {
  const [showApplicationForm, setShowApplicationForm] = reactExports.useState(false);
  const [formData, setFormData] = reactExports.useState({
    name: "",
    email: "",
    intention: ""
  });
  const [submitted, setSubmitted] = reactExports.useState(false);
  const handleApplyClick = () => {
    setShowApplicationForm(true);
    onApplyNow();
  };
  const handleSubmitApplication = () => {
    console.log("Application submitted:", formData);
    setSubmitted(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
    className: "w-full py-28 bg-stone-950 relative overflow-hidden",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
        className: "absolute inset-0 opacity-20",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
            className: "absolute top-0 left-1/4 w-80 h-80 rounded-full bg-amber-500/30 blur-3xl animate-pulse-slow",
            style: {
              animationDuration: "7s"
            }
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
            className: "absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-amber-500/30 blur-3xl animate-pulse-slow",
            style: {
              animationDuration: "10s",
              animationDelay: "2s"
            }
          })
        ]
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
        className: "absolute inset-0 opacity-10",
        children: [
          ...Array(30)
        ].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
          className: "absolute bg-amber-400/40 rounded-full blur-xl animate-pulse-slow",
          style: {
            width: 20 + Math.random() * 80,
            height: 20 + Math.random() * 80,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${2 + Math.random() * 5}s`,
            animationDelay: `${Math.random() * 5}s`
          }
        }, `flicker-${i}`))
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
        className: "max-w-4xl mx-auto px-4 relative z-10",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
            className: "mb-8 opacity-0 animate-fade-up",
            style: {
              animationDelay: "0.3s"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
              className: "text-center text-amber-300/80 text-sm tracking-widest uppercase",
              children: "This space is not for everyone — only those who are truly ready"
            })
          }),
          !showApplicationForm ? /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
            className: "border border-amber-800/50 rounded-xl p-10 bg-stone-900/90 relative overflow-hidden shadow-2xl shadow-amber-900/20 opacity-0 animate-fade-up",
            style: {
              animationDelay: "0.6s"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                className: "absolute inset-0 -m-1 rounded-xl border border-amber-400/40 blur-sm animate-pulse-slow",
                style: {
                  animationDuration: "4s"
                }
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                className: "absolute inset-0 -m-0.5 rounded-xl border border-amber-400/30 blur-md animate-pulse-slow",
                style: {
                  animationDuration: "6s"
                }
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                className: "absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-amber-400/0 via-amber-400/80 to-amber-400/0"
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                className: "absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                  className: "text-amber-400 text-[400px]",
                  children: "⊛"
                })
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                className: "flex items-center",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                    className: "mb-6 opacity-0 animate-fade-up",
                    style: {
                      animationDelay: "0.9s"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                      className: "text-amber-400 text-4xl",
                      children: "☉"
                    })
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                    className: "text-amber-300/70 text-center text-sm italic mb-6 max-w-md opacity-0 animate-fade-up",
                    style: {
                      animationDelay: "1.2s"
                    },
                    children: "Not everyone will feel the call. If you do — follow it."
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                    className: "text-amber-50/80 text-center text-lg italic mb-3 opacity-0 animate-fade-up",
                    style: {
                      animationDelay: "1.5s"
                    },
                    children: "For those called not to grow, but to become."
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                    className: "text-amber-100 text-4xl md:text-5xl font-bold text-center mb-6 font-serif opacity-0 animate-fade-up",
                    style: {
                      animationDelay: "1.8s"
                    },
                    children: "The Sacred Chamber"
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                    className: "text-amber-50/80 text-xl text-center mb-8 max-w-2xl opacity-0 animate-fade-up",
                    style: {
                      animationDelay: "2.1s"
                    },
                    children: "For those called to a deeper journey. One-on-one mentorship in a sacred container, where true transformation unfolds."
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                    className: "text-amber-200 italic text-center mb-10 font-serif opacity-0 animate-fade-up",
                    style: {
                      animationDelay: "2.4s"
                    },
                    children: '"This is not coaching. This is initiation."'
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                    className: "relative mb-12 opacity-0 animate-fade-up",
                    style: {
                      animationDelay: "2.7s"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.TouchableOpacity, {
                        onPress: handleApplyClick,
                        className: "bg-gradient-to-r from-amber-700 to-amber-600 px-10 py-5 rounded-md hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-500 transform hover:-translate-y-1 relative overflow-hidden group",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                            className: "absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-opacity duration-700"
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                            className: "text-white font-medium text-lg",
                            children: "Apply for Initiation"
                          })
                        ]
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                        className: "absolute -top-3 -right-3 px-3 py-1 bg-amber-900 rounded-full border border-amber-400/50 shadow-lg shadow-amber-900/30",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                          className: "text-xs text-amber-100 font-medium",
                          children: "Limited Availability"
                        })
                      })
                    ]
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                    className: "border border-amber-800/30 rounded-lg p-8 max-w-xl bg-stone-900/70 opacity-0 animate-fade-up",
                    style: {
                      animationDelay: "3.0s"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                        className: "absolute -top-4 left-1/2 -translate-x-1/2 text-amber-400 text-lg",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                          children: "✧"
                        })
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                        className: "text-amber-50/90 italic mb-4 text-center leading-relaxed font-serif",
                        children: `"The Sacred Chamber was the turning point in my journey. What Jordi creates in this space is nothing short of alchemical. It's for those ready to let go of who they've been told they are."`
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                        className: "text-amber-200 text-center",
                        children: "— Elena R., Sacred Chamber Graduate"
                      })
                    ]
                  })
                ]
              })
            ]
          }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.ScrollView, {
            className: "border border-amber-800/50 rounded-xl p-8 bg-stone-900/90 relative shadow-2xl shadow-amber-900/20 opacity-0 animate-fade-up",
            style: {
              animationDelay: "0.6s"
            },
            showsVerticalScrollIndicator: false,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                className: "absolute inset-0 -m-1 rounded-xl border border-amber-400/30 blur-sm"
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                className: "absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-amber-400/0 via-amber-400/80 to-amber-400/0"
              }),
              !submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                    className: "flex items-center mb-6 opacity-0 animate-fade-up",
                    style: {
                      animationDelay: "0.9s"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                      className: "text-amber-400 text-3xl",
                      children: "☉"
                    })
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                    className: "text-amber-100 text-3xl font-bold text-center mb-2 font-serif opacity-0 animate-fade-up",
                    style: {
                      animationDelay: "1.2s"
                    },
                    children: "Sacred Chamber Application"
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                    className: "text-amber-200/70 text-center italic mb-8 opacity-0 animate-fade-up",
                    style: {
                      animationDelay: "1.5s"
                    },
                    children: '"The path reveals itself to those who are ready to walk it."'
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                    className: "mb-6 opacity-0 animate-fade-up",
                    style: {
                      animationDelay: "1.8s"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                        className: "text-amber-100 mb-2",
                        children: "Your Sacred Name"
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TextInput, {
                        className: "bg-stone-800 border border-amber-800/50 rounded-md p-4 text-white",
                        placeholder: "Enter your full name",
                        placeholderTextColor: "#9c9c9c",
                        value: formData.name,
                        onChangeText: (text) => setFormData({
                          ...formData,
                          name: text
                        })
                      })
                    ]
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                    className: "mb-6 opacity-0 animate-fade-up",
                    style: {
                      animationDelay: "2.1s"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                        className: "text-amber-100 mb-2",
                        children: "Your Connection Point"
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TextInput, {
                        className: "bg-stone-800 border border-amber-800/50 rounded-md p-4 text-white",
                        placeholder: "Enter your email address",
                        placeholderTextColor: "#9c9c9c",
                        keyboardType: "email-address",
                        value: formData.email,
                        onChangeText: (text) => setFormData({
                          ...formData,
                          email: text
                        })
                      })
                    ]
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                    className: "mb-10 opacity-0 animate-fade-up",
                    style: {
                      animationDelay: "2.4s"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                        className: "text-amber-100 mb-2",
                        children: "Your Soul's Intention"
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TextInput, {
                        className: "bg-stone-800 border border-amber-800/50 rounded-md p-4 text-white min-h-32",
                        placeholder: "Share what calls you to the Sacred Chamber...",
                        placeholderTextColor: "#9c9c9c",
                        multiline: true,
                        textAlignVertical: "top",
                        value: formData.intention,
                        onChangeText: (text) => setFormData({
                          ...formData,
                          intention: text
                        })
                      })
                    ]
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
                    onPress: handleSubmitApplication,
                    className: "bg-gradient-to-r from-amber-700 to-amber-600 py-4 rounded-md w-full mb-4 hover:shadow-lg hover:shadow-amber-900/30 transition-all duration-500 opacity-0 animate-fade-up",
                    style: {
                      animationDelay: "2.7s"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                      className: "text-white font-medium text-center text-lg",
                      children: "Send With Intention"
                    })
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
                    onPress: () => setShowApplicationForm(false),
                    className: "py-2 opacity-0 animate-fade-up",
                    style: {
                      animationDelay: "3.0s"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                      className: "text-amber-400 text-center",
                      children: "Return to previous page"
                    })
                  })
                ]
              }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                className: "items-center py-10",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                    className: "text-amber-400 text-6xl mb-6 animate-pulse-slow opacity-0 animate-fade-up",
                    style: {
                      animationDelay: "0.8s"
                    },
                    children: "✧"
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                    className: "text-amber-100 text-3xl font-bold text-center mb-4 font-serif opacity-0 animate-fade-up",
                    style: {
                      animationDelay: "1.1s"
                    },
                    children: "Your Intention Has Been Received"
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                    className: "text-amber-50/80 text-center text-lg mb-8 max-w-md opacity-0 animate-fade-up",
                    style: {
                      animationDelay: "1.4s"
                    },
                    children: "Thank you for your interest in the Sacred Chamber. We will review your application with care and respond within 3 days."
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                    className: "text-amber-200 italic text-center mb-10 font-serif opacity-0 animate-fade-up",
                    style: {
                      animationDelay: "1.7s"
                    },
                    children: '"The journey has already begun."'
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
                    onPress: () => {
                      setShowApplicationForm(false);
                      setSubmitted(false);
                    },
                    className: "bg-stone-800 border border-amber-700/50 px-8 py-3 rounded-md hover:bg-stone-700 transition-all duration-300 opacity-0 animate-fade-up",
                    style: {
                      animationDelay: "2.0s"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                      className: "text-amber-100",
                      children: "Return to Sacred Gateway"
                    })
                  })
                ]
              })
            ]
          })
        ]
      })
    ]
  });
}
export {
  PremiumCTA as default
};
