import { j as jsxRuntimeExports, w as cjsExports, r as reactExports } from "../_virtual_one-entry.js";
import TextureBackground from "./TextureBackground-DC9pxGSt.js";
import GlowEffect from "./GlowEffect-B71rQeKJ.js";
import "node:async_hooks";
import "crypto";
function OfferingCard({ title, icon, glyphIcon, iconClass = "", description, onExplore, color }) {
  const [isHovered, setIsHovered] = reactExports.useState(false);
  const cardColors = {
    gold: "bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200",
    blue: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200",
    violet: "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200"
  };
  const textColors = {
    gold: "text-amber-800",
    blue: "text-blue-800",
    violet: "text-purple-800"
  };
  const buttonColors = {
    gold: "border-amber-700 text-amber-700 hover:bg-amber-50 group-hover:bg-amber-100/30",
    blue: "border-blue-700 text-blue-700 hover:bg-blue-50 group-hover:bg-blue-100/30",
    violet: "border-purple-700 text-purple-700 hover:bg-purple-50 group-hover:bg-purple-100/30"
  };
  const iconColors = {
    gold: "bg-gradient-to-br from-amber-100 to-amber-200 text-amber-700",
    blue: "bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700",
    violet: "bg-gradient-to-br from-purple-100 to-purple-200 text-purple-700"
  };
  const glowColors = {
    gold: "amber",
    blue: "indigo",
    violet: "purple"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
    className: `${cardColors[color]} rounded-lg shadow-md p-10 flex items-center transition-all duration-500 border transform ${isHovered ? "shadow-lg -translate-y-1" : ""} relative overflow-hidden sacred-glow`,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
        className: "absolute inset-0 opacity-[0.03] flex items-center justify-center pointer-events-none",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
          className: `text-9xl ${textColors[color]}`,
          children: icon
        })
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextureBackground, {
        type: "sacred",
        opacity: 0.07
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
        className: `absolute inset-6 ${color === "gold" ? "bg-amber-200/20" : color === "blue" ? "bg-blue-200/20" : "bg-purple-200/20"} rounded-full blur-lg opacity-40 transition-opacity duration-700 ${isHovered ? "opacity-70" : ""}`
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
        className: `absolute inset-0 border-2 rounded-lg transition-all duration-700 ${isHovered ? "opacity-100" : "opacity-0"} ${color === "gold" ? "border-amber-300/70" : color === "blue" ? "border-blue-300/70" : "border-purple-300/70"}`
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GlowEffect, {
        color: glowColors[color],
        intensity: isHovered ? "medium" : "soft",
        size: isHovered ? "md" : "sm",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
          className: `w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-inner animate-float ${iconColors[color]} transition-all duration-500 ${isHovered ? "scale-110" : ""}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
            className: "text-4xl",
            children: icon
          })
        })
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
        className: `absolute top-5 right-5 opacity-${isHovered ? "60" : "30"} transition-opacity duration-500`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
          className: `text-4xl ${textColors[color]} animate-pulse-slow`,
          style: {
            animationDuration: "5s"
          },
          children: glyphIcon
        })
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
        className: `text-xl font-semibold mb-4 text-center font-serif ${textColors[color]}`,
        children: title
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
        className: "text-stone-600 mb-8 text-center",
        children: description
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.TouchableOpacity, {
        onPress: onExplore,
        className: `border px-6 py-3 rounded-md transition-all duration-300 relative group overflow-hidden sacred-hover mt-4 transform ${isHovered ? "scale-105" : ""} ${buttonColors[color]}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
            className: `absolute inset-0 transition-all duration-500 ${isHovered ? color === "gold" ? "bg-amber-100/30" : color === "blue" ? "bg-blue-100/30" : "bg-purple-100/30" : "bg-transparent"}`
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
            className: textColors[color],
            children: "Enter"
          })
        ]
      })
    ]
  });
}
function OfferingsGrid() {
  const offerings = [
    {
      id: "awaken",
      title: "Awaken",
      icon: "⊹",
      glyphIcon: "☼",
      iconClass: "bg-gradient-to-br from-amber-50 to-amber-100 text-amber-700 shadow-inner",
      description: "Begin your journey of self-discovery and consciousness expansion.",
      onExplore: () => console.log("Explore Awaken"),
      color: "gold"
    },
    {
      id: "remember",
      title: "Remember",
      icon: "⊛",
      glyphIcon: "☽",
      iconClass: "bg-gradient-to-br from-blue-100 to-blue-200 text-blue-800 shadow-inner",
      description: "Reconnect with your soul's wisdom and your true divine nature.",
      onExplore: () => console.log("Explore Remember"),
      color: "blue"
    },
    {
      id: "embody",
      title: "Embody",
      icon: "⊝",
      glyphIcon: "✧",
      iconClass: "bg-gradient-to-br from-purple-200 to-purple-300 text-purple-900 shadow-inner",
      description: "Integrate your highest knowing into everyday lived experience.",
      onExplore: () => console.log("Explore Embody"),
      color: "violet"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
    className: "w-full py-28 px-4 relative overflow-hidden parallax-container",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
        className: "absolute inset-0 bg-gradient-to-b from-amber-50 to-stone-100 parallax-bg"
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextureBackground, {
        type: "sacred",
        opacity: 0.04
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
        className: "absolute inset-0 noise-overlay"
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-amber-400/5 blur-3xl parallax-bg",
        style: {
          transform: "translateZ(-5px) scale(1.5)"
        }
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
        className: "absolute top-20 left-1/2 -translate-x-1/2 opacity-10",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
          className: "text-8xl text-amber-800",
          children: "☉"
        })
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
        className: "max-w-6xl mx-auto relative z-10 parallax-content",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
            className: "text-center text-amber-700 italic mb-2 opacity-0 animate-fade-up",
            style: {
              animationDelay: "0.3s"
            },
            children: "Every soul walks this spiral: awaken, remember, embody."
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
            className: "text-3xl font-bold text-center text-stone-800 mb-3 font-serif opacity-0 animate-fade-up",
            style: {
              animationDelay: "0.5s"
            },
            children: "The Mirror Path"
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
            className: "text-xl text-center text-stone-600 mb-16 max-w-3xl mx-auto opacity-0 animate-fade-up",
            style: {
              animationDelay: "0.7s"
            },
            children: "A three-phase journey to authentic self-realization and conscious living"
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
            className: "flex flex-col md:flex-row gap-10",
            children: offerings.map((offering, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
              className: "flex-1 mb-6 md:mb-0 opacity-0 animate-fade-up",
              style: {
                animationDelay: `${0.9 + index * 0.3}s`
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(OfferingCard, {
                title: offering.title,
                icon: offering.icon,
                glyphIcon: offering.glyphIcon,
                iconClass: offering.iconClass,
                description: offering.description,
                onExplore: offering.onExplore,
                color: offering.color
              })
            }, offering.id))
          })
        ]
      })
    ]
  });
}
export {
  OfferingsGrid as default
};
