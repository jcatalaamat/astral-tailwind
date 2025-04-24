import { j as jsxRuntimeExports, w as cjsExports, r as reactExports } from "../_virtual_one-entry.js";
import TextureBackground from "./TextureBackground-DC9pxGSt.js";
import "node:async_hooks";
import "crypto";
function BookingCard({ offer, onBook }) {
  const [isHovered, setIsHovered] = reactExports.useState(false);
  const categoryLabels = {
    light: "Light",
    deep: "Deep",
    premium: "Premium"
  };
  const getButtonText = () => {
    if (offer.buttonText) return offer.buttonText;
    switch (offer.id) {
      case "clarity-call":
        return "Step In";
      case "soul-session":
        return "Begin Session";
      case "mirror-path-journey":
        return "Enter Path";
      case "energy-clearing":
        return "Reserve";
      case "sacred-immersion":
        return "Experience";
      default:
        return "Reserve Session";
    }
  };
  const cardBackground = offer.category === "premium" ? "bg-gradient-to-b from-amber-50 to-amber-100 border-amber-200" : offer.category === "deep" ? "bg-gradient-to-b from-stone-50 to-amber-50 border-amber-100" : "bg-gradient-to-b from-stone-100 to-stone-50 border-stone-200";
  const titleColor = "text-stone-800";
  const descriptionColor = "text-stone-600";
  const detailsColor = "text-stone-500";
  const priceColor = "text-amber-800";
  const buttonText = getButtonText();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
    className: `h-full rounded-2xl shadow-md relative overflow-visible ${cardBackground} ${isHovered ? "shadow-xl scale-[1.02]" : "shadow-md"} transition-all duration-500`,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
        className: "absolute -top-3 right-4 px-4 py-1.5 rounded-full shadow-md z-10",
        style: {
          backgroundColor: offer.category === "light" ? "#fef3c7" : offer.category === "deep" ? "#fde68a" : "#fbbf24"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
          className: "text-xs font-medium text-amber-800",
          children: categoryLabels[offer.category]
        })
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
        className: "absolute inset-0 opacity-30 overflow-hidden rounded-2xl",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
          className: "w-full h-full bg-texture-paper"
        })
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
        className: `absolute top-3 right-3 ${isHovered ? "opacity-40" : "opacity-20"} transition-opacity duration-500`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
          className: "text-4xl text-amber-800 animate-pulse-slow",
          style: {
            animationDuration: "5s"
          },
          children: offer.icon || "⊹"
        })
      }),
      isHovered && /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
        className: "absolute inset-0 bg-gradient-to-t from-amber-200/10 to-transparent rounded-2xl"
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
        className: "p-10 pt-12 h-full flex flex-col",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
            className: "flex-row items-center mb-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                className: `text-2xl font-semibold ${titleColor} font-serif`,
                children: offer.title
              }),
              offer.glyph && /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                className: "ml-2 text-amber-700 text-lg",
                children: offer.glyph
              })
            ]
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
            className: `mb-4 ${detailsColor}`,
            children: offer.details
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
            className: `mb-6 flex-grow ${descriptionColor}`,
            children: offer.description
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
            className: "flex-row justify-between items-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                className: `text-2xl font-bold ${priceColor}`,
                children: offer.price
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.TouchableOpacity, {
                onPress: () => onBook(offer.id),
                className: `${isHovered ? "bg-gradient-to-r from-amber-500 to-amber-700 translate-y-[-2px] shadow-lg shadow-amber-700/20" : "bg-gradient-to-r from-amber-600 to-amber-800"} py-2 px-6 rounded-lg transition-all duration-500 overflow-hidden relative group`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                    className: "absolute inset-0 bg-amber-400/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                    className: "text-white font-semibold relative z-10",
                    children: buttonText
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
function BookingMenu() {
  const offers = [
    {
      id: "clarity-call",
      title: "Clarity Call",
      price: "$75",
      description: "45-minute call to identify where you are on your path and what's needed next.",
      category: "light",
      details: "Perfect starting point for new clients",
      icon: "✧",
      glyph: "✦"
    },
    {
      id: "soul-session",
      title: "Soul Session",
      price: "$150",
      description: "90-minute deep dive session to clear blocks and reconnect with your essence.",
      category: "deep",
      details: "Includes post-session integration practices",
      icon: "⊛",
      glyph: "☽"
    },
    {
      id: "mirror-path-journey",
      title: "Mirror Path Journey",
      price: "$450/month",
      description: "3-month container with weekly sessions and personalized practices.",
      category: "premium",
      details: "Includes rituals, integration practices, and voice message support",
      icon: "⊹",
      glyph: "☉"
    },
    {
      id: "energy-clearing",
      title: "Energy Clearing",
      price: "$95",
      description: "Remote energy work session to release stagnant patterns and restore flow.",
      category: "light",
      icon: "⊕",
      glyph: "⚯"
    },
    {
      id: "sacred-immersion",
      title: "Sacred Immersion Day",
      price: "$350",
      description: "Full-day virtual retreat with multiple modalities for profound shifts.",
      category: "deep",
      details: "Includes preparation ritual and follow-up integration call",
      icon: "❋",
      glyph: "⚛"
    }
  ];
  const handleBookOffer = (id) => {
    console.log(`Booking offer: ${id}`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
    className: "w-full py-28 px-4 relative overflow-hidden",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
        className: "absolute inset-0 bg-gradient-to-b from-white to-amber-50"
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextureBackground, {
        type: "grain",
        opacity: 0.1,
        className: "absolute inset-0"
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextureBackground, {
        type: "noise",
        opacity: 0.05,
        className: "absolute inset-0"
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
        className: "absolute inset-0 opacity-[0.03] flex items-center justify-center",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
          className: "text-[400px] text-amber-800 leading-none",
          children: "⊛"
        })
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
        className: "absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-300/30 to-transparent"
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
        className: "max-w-6xl mx-auto relative z-10",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
            className: "text-3xl font-bold text-center text-stone-800 mb-3 font-serif opacity-0 animate-fade-up",
            style: {
              animationDelay: "0.3s"
            },
            children: "Sacred Sessions"
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
            className: "text-xl text-center text-stone-600 mb-4 max-w-3xl mx-auto opacity-0 animate-fade-up",
            style: {
              animationDelay: "0.5s"
            },
            children: "Choose the offering that resonates with your current needs and journey"
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
            className: "text-center text-amber-700 italic mb-10 max-w-xl mx-auto opacity-0 animate-fade-up",
            style: {
              animationDelay: "0.7s"
            },
            children: "These aren't sessions. They're mirrors of who you're becoming."
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
            className: "bg-amber-50 border border-amber-200 rounded-lg p-5 mb-12 max-w-2xl mx-auto glassmorphism opacity-0 animate-fade-up",
            style: {
              animationDelay: "0.9s"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                className: "text-center text-stone-700 font-medium mb-2",
                children: "Start where your soul feels the call. These are sacred invitations, not transactions."
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                className: "text-center text-stone-600",
                children: "If you're new to this work, start with a Clarity Call or Energy Clearing to identify where you are and where you're ready to go."
              })
            ]
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
            className: "flex flex-row justify-center gap-10 mb-12 opacity-0 animate-fade-up",
            style: {
              animationDelay: "1.1s"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                className: "items-center",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                    className: "w-4 h-4 rounded-full bg-amber-200 mb-2 animate-pulse-slow"
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                    className: "text-sm text-stone-600",
                    children: "Light"
                  })
                ]
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                className: "items-center",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                    className: "w-4 h-4 rounded-full bg-amber-300 mb-2 animate-pulse-slow",
                    style: {
                      animationDelay: "1s"
                    }
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                    className: "text-sm text-stone-600",
                    children: "Deep"
                  })
                ]
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                className: "items-center",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                    className: "w-4 h-4 rounded-full bg-amber-400 mb-2 animate-pulse-slow",
                    style: {
                      animationDelay: "2s"
                    }
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                    className: "text-sm text-stone-600",
                    children: "Premium"
                  })
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
            className: "flex-col md:flex-row flex-wrap -mx-4 mb-8",
            children: offers.map((offer, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
              className: "w-full md:w-1/2 lg:w-1/3 px-4 mb-12 opacity-0 animate-fade-up",
              style: {
                animationDelay: `${1.3 + index * 0.2}s`
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookingCard, {
                offer,
                onBook: handleBookOffer
              })
            }, offer.id))
          })
        ]
      })
    ]
  });
}
export {
  BookingMenu as default
};
