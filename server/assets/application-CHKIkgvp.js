import { r as reactExports, j as jsxRuntimeExports, w as cjsExports } from "../_virtual_one-entry.js";
/* empty css              */
import "node:async_hooks";
import "crypto";
function SacredChamberApplication() {
  const [isReady, setIsReady] = reactExports.useState(false);
  const [currentStep, setCurrentStep] = reactExports.useState(0);
  const [isSubmitted, setIsSubmitted] = reactExports.useState(false);
  const [formData, setFormData] = reactExports.useState({
    name: "",
    email: "",
    intention: "",
    calling: "",
    challenges: "",
    priorWork: "",
    commitment: "",
    questions: ""
  });
  reactExports.useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);
  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };
  const handleSubmit = () => {
    console.log("Application submitted:", formData);
    setIsSubmitted(true);
    window.scrollTo(0, 0);
  };
  const navigateToHome = () => {
    window.location.href = "/";
  };
  const navigateToSacredChamber = () => {
    window.location.href = "/sacred-chamber";
  };
  const goToNextStep = () => {
    window.scrollTo(0, 0);
    setCurrentStep(currentStep + 1);
  };
  const goToPreviousStep = () => {
    window.scrollTo(0, 0);
    setCurrentStep(currentStep - 1);
  };
  const steps = [
    {
      title: "Sacred Introduction",
      subtitle: "Establish your energy and intention",
      fields: [
        {
          id: "name",
          label: "Your Sacred Name",
          placeholder: "Enter your full name",
          type: "text"
        },
        {
          id: "email",
          label: "Your Connection Point",
          placeholder: "Enter your email address",
          type: "email"
        },
        {
          id: "intention",
          label: "Your Soul's Intention",
          placeholder: "Share what calls you to the Sacred Chamber...",
          type: "textarea",
          rows: 6
        }
      ]
    },
    {
      title: "The Sacred Call",
      subtitle: "What draws you to this journey",
      fields: [
        {
          id: "calling",
          label: "The Call You Feel",
          placeholder: "Describe what you're feeling called toward at this moment in your journey...",
          type: "textarea",
          rows: 6
        },
        {
          id: "challenges",
          label: "Sacred Challenges",
          placeholder: "What patterns or challenges are you ready to transform?",
          type: "textarea",
          rows: 6
        }
      ]
    },
    {
      title: "Your Sacred Readiness",
      subtitle: "Preparation for the journey ahead",
      fields: [
        {
          id: "priorWork",
          label: "Your Path Thus Far",
          placeholder: "Share any prior inner work, spiritual practices, or transformational experiences...",
          type: "textarea",
          rows: 5
        },
        {
          id: "commitment",
          label: "Your Sacred Commitment",
          placeholder: "How will you honor this container and commit to your transformation?",
          type: "textarea",
          rows: 5
        },
        {
          id: "questions",
          label: "Questions from Your Soul",
          placeholder: "What questions arise as you consider entering the Sacred Chamber?",
          type: "textarea",
          rows: 5
        }
      ]
    }
  ];
  const renderForm = () => {
    const currentStepData = steps[currentStep];
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
      className: "mb-8",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
          className: "text-amber-100 text-3xl font-bold text-center mb-2 font-serif opacity-0 animate-fade-up",
          style: {
            animationDelay: "0.6s"
          },
          children: currentStepData.title
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
          className: "text-amber-400/70 text-center italic mb-12 opacity-0 animate-fade-up",
          style: {
            animationDelay: "0.8s"
          },
          children: currentStepData.subtitle
        }),
        currentStepData.fields.map((field, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
          className: "mb-8 opacity-0 animate-fade-up",
          style: {
            animationDelay: `${1 + index * 0.2}s`
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
              className: "text-amber-100 mb-2",
              children: field.label
            }),
            field.type === "textarea" ? /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TextInput, {
              className: "bg-stone-800 border border-amber-800/50 rounded-md p-4 text-white min-h-32",
              placeholder: field.placeholder,
              placeholderTextColor: "#9c9c9c",
              multiline: true,
              textAlignVertical: "top",
              numberOfLines: field.rows,
              value: formData[field.id],
              onChangeText: (text) => handleInputChange(field.id, text)
            }) : /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TextInput, {
              className: "bg-stone-800 border border-amber-800/50 rounded-md p-4 text-white",
              placeholder: field.placeholder,
              placeholderTextColor: "#9c9c9c",
              keyboardType: field.type === "email" ? "email-address" : "default",
              value: formData[field.id],
              onChangeText: (text) => handleInputChange(field.id, text)
            })
          ]
        }, field.id)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
          className: "flex-row justify-between mt-12 opacity-0 animate-fade-up",
          style: {
            animationDelay: "1.6s"
          },
          children: [
            currentStep > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.TouchableOpacity, {
              onPress: goToPreviousStep,
              className: "border border-amber-600/50 px-6 py-3 rounded-md flex-row items-center",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                  className: "text-amber-400 mr-2",
                  children: "←"
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                  className: "text-amber-400",
                  children: "Previous Step"
                })
              ]
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
              className: "flex-1"
            }),
            currentStep < steps.length - 1 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.TouchableOpacity, {
              onPress: goToNextStep,
              className: "bg-gradient-to-r from-amber-800 to-amber-700 px-8 py-3 rounded-md flex-row items-center hover:shadow-lg hover:shadow-amber-900/30 transition-all duration-300 transform hover:-translate-y-1",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                  className: "text-white",
                  children: "Continue Journey"
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                  className: "text-white ml-2",
                  children: "→"
                })
              ]
            }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.TouchableOpacity, {
              onPress: handleSubmit,
              className: "bg-gradient-to-r from-amber-700 to-amber-600 px-8 py-3 rounded-md hover:shadow-lg hover:shadow-amber-900/30 transition-all duration-500 transform hover:-translate-y-1 group relative overflow-hidden",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                  className: "absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-opacity duration-700"
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                  className: "text-white font-medium",
                  children: "Send With Intention"
                })
              ]
            })
          ]
        })
      ]
    });
  };
  const renderConfirmation = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
      className: "items-center py-10 opacity-0 animate-fade-up",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
          className: "text-amber-400 text-6xl mb-6 animate-pulse-slow",
          children: "✧"
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
          className: "text-amber-100 text-3xl font-bold text-center mb-4 font-serif",
          children: "Your Intention Has Been Received"
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
          className: "text-amber-50/80 text-center text-lg mb-8 max-w-md",
          children: "Thank you for your interest in the Sacred Chamber. We will review your application with care and respond within 3 days."
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
          className: "text-amber-200 italic text-center mb-10 font-serif",
          children: '"The journey has already begun."'
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
          onPress: navigateToHome,
          className: "bg-stone-800 border border-amber-700/50 px-8 py-3 rounded-md hover:bg-stone-700 transition-all duration-300",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
            className: "text-amber-100",
            children: "Return to Sacred Gateway"
          })
        })
      ]
    });
  };
  const renderProgressIndicator = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
      className: "flex-row justify-center space-x-2 mb-12 opacity-0 animate-fade-up",
      style: {
        animationDelay: "0.4s"
      },
      children: steps.map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
        className: `w-3 h-3 rounded-full ${index === currentStep ? "bg-amber-500" : index < currentStep ? "bg-amber-700" : "bg-stone-700"}`
      }, index))
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
    className: `min-h-screen bg-stone-950 transition-opacity duration-1000 ${isReady ? "opacity-100" : "opacity-0"}`,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
        className: "border-b border-amber-900/30 bg-stone-950",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
          className: "max-w-5xl mx-auto px-4 py-4 flex-row items-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
              onPress: navigateToHome,
              className: "mr-6",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                className: "text-amber-400 font-serif",
                children: "The Mirror Path"
              })
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
              className: "h-4 w-px bg-amber-800/30 mr-6"
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
              onPress: navigateToSacredChamber,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                className: "text-amber-400/70 hover:text-amber-400 transition-colors duration-300",
                children: "Sacred Chamber"
              })
            })
          ]
        })
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.ScrollView, {
        className: "flex-1",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
          className: "py-16 px-4 relative",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
              className: "absolute inset-0 opacity-10",
              children: [
                ...Array(15)
              ].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                className: "absolute bg-amber-400/40 rounded-full blur-xl animate-pulse-slow",
                style: {
                  width: 10 + Math.random() * 40,
                  height: 10 + Math.random() * 40,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${2 + Math.random() * 5}s`,
                  animationDelay: `${Math.random() * 5}s`
                }
              }, `flicker-${i}`))
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
              className: "absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                className: "text-amber-400 text-[400px]",
                children: "⊛"
              })
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
              className: "max-w-3xl mx-auto relative z-10",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                  className: "mb-12 opacity-0 animate-fade-up",
                  style: {
                    animationDelay: "0.2s"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                    className: "text-center text-amber-300/80 text-sm tracking-widest uppercase",
                    children: "Sacred Chamber"
                  })
                }),
                !isSubmitted && renderProgressIndicator(),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                  className: "border border-amber-800/50 rounded-xl p-10 bg-stone-900/90 relative overflow-hidden shadow-2xl shadow-amber-900/20",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                      className: "absolute inset-0 -m-1 rounded-xl border border-amber-400/30 blur-sm"
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                      className: "absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-amber-400/0 via-amber-400/80 to-amber-400/0"
                    }),
                    isSubmitted ? renderConfirmation() : renderForm()
                  ]
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
  SacredChamberApplication as default
};
