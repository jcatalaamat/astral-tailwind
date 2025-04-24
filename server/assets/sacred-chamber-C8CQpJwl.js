import { r as reactExports, j as jsxRuntimeExports, w as cjsExports } from "../_virtual_one-entry.js";
import TextureBackground from "./TextureBackground-DC9pxGSt.js";
/* empty css              */
import "node:async_hooks";
import "crypto";
function SacredChamber() {
  const [activeSection, setActiveSection] = reactExports.useState("overview");
  const [scrollPosition, setScrollPosition] = reactExports.useState(0);
  const [isReady, setIsReady] = reactExports.useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  reactExports.useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const headerOpacity = Math.max(0, Math.min(1, scrollPosition / 200));
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const handleMobileNavigation = (section) => {
    navigateToSection(section);
    setMobileMenuOpen(false);
  };
  const testimonials = [
    {
      quote: "The Sacred Chamber transformed not just how I see myself, but how I walk through the world. This isn't coaching—it's remembrance of your divine nature.",
      name: "Elena R.",
      title: "Spiritual Guide",
      journey: "6-month Sacred Chamber Journey"
    },
    {
      quote: "I've worked with spiritual mentors for years, but what Jordi creates in the Sacred Chamber is beyond anything I've experienced. The container itself is medicine.",
      name: "Michael L.",
      title: "Executive & Mystic",
      journey: "Sacred Chamber Graduate"
    },
    {
      quote: "There are moments in the Chamber when time stops, and you feel yourself being rewoven at the soul level. This work reaches places nothing else can touch.",
      name: "Sarah J.",
      title: "Artist & Ceremonialist",
      journey: "3-cycle Sacred Chamber Initiate"
    }
  ];
  const journeyPhases = [
    {
      name: "Sacred Alignment",
      description: "Our journey begins with a profound alignment ritual—setting intentions, creating sacred space, and opening to divine guidance.",
      symbol: "☉",
      duration: "Weeks 1-3"
    },
    {
      name: "Shadow Integration",
      description: "We enter the shadows together, illuminating patterns and reclaiming the wisdom and power hidden within forgotten aspects of self.",
      symbol: "☽",
      duration: "Weeks 4-9"
    },
    {
      name: "Divine Remembrance",
      description: "Reconnection to your sovereign nature and the cosmic wisdom that has always lived within you, awakening dormant gifts.",
      symbol: "✧",
      duration: "Weeks 10-15"
    },
    {
      name: "Sacred Embodiment",
      description: "Integrating insights into lived experience, establishing new patterns, and anchoring your transformation in daily practice.",
      symbol: "⊛",
      duration: "Weeks 16-20"
    }
  ];
  const readinessChecklist = [
    "You've done personal development work but sense a deeper calling",
    "You're ready to move beyond productivity and into presence",
    "You feel drawn to sacred ritual and mystical practice",
    "You're willing to examine shadow aspects with courage and compassion",
    "You sense there's a greater purpose to your existence waiting to unfold",
    "You're prepared to invest time, energy, and resources in your transformation"
  ];
  const handleApplyClick = () => {
    window.scrollTo(0, 0);
    window.location.href = "/sacred-chamber/application";
  };
  const navigateToHome = () => {
    window.location.href = "/";
  };
  const navigateToSection = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
    className: `min-h-screen bg-stone-950 ${isReady ? "opacity-100" : "opacity-0"}`,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerOpacity > 0.1 ? "backdrop-blur-md bg-stone-950/80" : "bg-transparent"}`,
        style: {
          opacity: headerOpacity
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
            className: "max-w-7xl mx-auto px-4 py-4 flex-row items-center justify-between",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
                onPress: navigateToHome,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                  className: "text-amber-400 font-serif text-xl",
                  children: "The Mirror Path"
                })
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                className: "hidden md:flex md:flex-row md:space-x-12 md:items-center",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
                    onPress: () => navigateToSection("overview"),
                    className: "px-2 py-1",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                      className: `text-sm ${activeSection === "overview" ? "text-amber-400" : "text-amber-400/70"}`,
                      children: "Overview"
                    })
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
                    onPress: () => navigateToSection("journey"),
                    className: "px-2 py-1",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                      className: `text-sm ${activeSection === "journey" ? "text-amber-400" : "text-amber-400/70"}`,
                      children: "The Journey"
                    })
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
                    onPress: () => navigateToSection("testimonials"),
                    className: "px-2 py-1",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                      className: `text-sm ${activeSection === "testimonials" ? "text-amber-400" : "text-amber-400/70"}`,
                      children: "Reflections"
                    })
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
                    onPress: () => navigateToSection("readiness"),
                    className: "px-2 py-1",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                      className: `text-sm ${activeSection === "readiness" ? "text-amber-400" : "text-amber-400/70"}`,
                      children: "Your Readiness"
                    })
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.TouchableOpacity, {
                    onPress: handleApplyClick,
                    className: "bg-amber-800/30 border border-amber-500/30 px-4 py-2 rounded-full hover:bg-amber-800/50 transition-all duration-300 group overflow-hidden relative",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                        className: "absolute inset-0 opacity-0 group-hover:opacity-100 bg-amber-500/10 blur-sm transition-opacity duration-500"
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                        className: "text-amber-300 text-sm",
                        children: "Begin My Journey"
                      })
                    ]
                  })
                ]
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.TouchableOpacity, {
                onPress: toggleMobileMenu,
                className: "md:hidden z-50",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                    className: `w-6 h-0.5 bg-amber-400 mb-1.5 transform transition-transform ${mobileMenuOpen ? "translate-y-2 rotate-45" : ""}`
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                    className: `w-6 h-0.5 bg-amber-400 mb-1.5 transition-opacity ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                    className: `w-6 h-0.5 bg-amber-400 transform transition-transform ${mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`
                  })
                ]
              })
            ]
          }),
          mobileMenuOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
            className: "absolute top-full left-0 right-0 bg-stone-950 border-t border-amber-900/30 py-4 px-4 md:hidden",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
                onPress: () => handleMobileNavigation("overview"),
                className: "py-3 border-b border-amber-900/20",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                  className: `text-base ${activeSection === "overview" ? "text-amber-400" : "text-amber-400/70"}`,
                  children: "Overview"
                })
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
                onPress: () => handleMobileNavigation("journey"),
                className: "py-3 border-b border-amber-900/20",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                  className: `text-base ${activeSection === "journey" ? "text-amber-400" : "text-amber-400/70"}`,
                  children: "The Journey"
                })
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
                onPress: () => handleMobileNavigation("testimonials"),
                className: "py-3 border-b border-amber-900/20",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                  className: `text-base ${activeSection === "testimonials" ? "text-amber-400" : "text-amber-400/70"}`,
                  children: "Reflections"
                })
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
                onPress: () => handleMobileNavigation("readiness"),
                className: "py-3 border-b border-amber-900/20",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                  className: `text-base ${activeSection === "readiness" ? "text-amber-400" : "text-amber-400/70"}`,
                  children: "Your Readiness"
                })
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
                onPress: handleApplyClick,
                className: "mt-6 bg-amber-800/30 border border-amber-500/30 px-4 py-3 rounded-full flex items-center justify-center",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                  className: "text-amber-300 text-base",
                  children: "Begin My Journey"
                })
              })
            ]
          })
        ]
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.ScrollView, {
        className: "flex-1",
        contentContainerStyle: {
          flexGrow: 1
        },
        style: {
          height: "100%"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
            className: "h-screen relative overflow-hidden",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                className: "absolute inset-0 bg-stone-950",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Image, {
                    source: {
                      uri: "/images/sacred-portraits/hero-portrait.jpg"
                    },
                    className: "absolute inset-0 w-full h-full object-cover opacity-40",
                    resizeMode: "cover"
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                    className: "absolute inset-0 bg-gradient-to-b from-amber-900/40 to-stone-950"
                  })
                ]
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                className: "absolute inset-0",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                    className: "absolute top-1/4 left-1/4 w-64 md:w-80 h-64 md:h-80 rounded-full bg-amber-500/10 blur-3xl animate-pulse-slow",
                    style: {
                      animationDuration: "7s"
                    }
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                    className: "absolute bottom-1/4 right-1/4 w-64 md:w-80 h-64 md:h-80 rounded-full bg-amber-500/10 blur-3xl animate-pulse-slow",
                    style: {
                      animationDuration: "10s",
                      animationDelay: "2s"
                    }
                  })
                ]
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                className: "absolute inset-0 opacity-20",
                children: [
                  [
                    ...Array(30)
                  ].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                    className: "absolute animate-float",
                    style: {
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDuration: `${15 + Math.random() * 20}s`,
                      animationDelay: `${Math.random() * 10}s`,
                      transform: [
                        {
                          rotate: `${Math.random() * 360}deg`
                        }
                      ]
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                      className: "text-amber-400/30 text-4xl",
                      children: [
                        "✧",
                        "⊛",
                        "✦",
                        "◯",
                        "☉",
                        "☽"
                      ][Math.floor(Math.random() * 6)]
                    })
                  }, `symbol-${i}`)),
                  [
                    ...Array(40)
                  ].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                    className: "absolute bg-amber-400/30 rounded-full blur-sm animate-float",
                    style: {
                      width: 1 + Math.random() * 3,
                      height: 1 + Math.random() * 3,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDuration: `${10 + Math.random() * 20}s`,
                      animationDelay: `${Math.random() * 10}s`
                    }
                  }, `particle-${i}`))
                ]
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                className: "absolute inset-0 flex items-center justify-center",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                  className: "max-w-5xl px-6 text-center",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                      className: "text-amber-300 text-xs sm:text-sm tracking-widest uppercase mb-4 sm:mb-6",
                      children: "A Sacred Invitation"
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                      className: "text-amber-100 text-4xl sm:text-5xl md:text-7xl font-bold font-serif mb-4 sm:mb-8",
                      children: "The Sacred Chamber"
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                      className: "text-amber-200 text-lg sm:text-xl md:text-2xl italic font-serif mb-6 sm:mb-12 max-w-3xl mx-auto",
                      children: '"Not everyone will feel the call. If you do — follow it."'
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                      className: "text-amber-50 text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto",
                      children: "An intimate 5-month journey of profound transformation through sacred ritual, mystical wisdom, and soul remembrance."
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.TouchableOpacity, {
                        onPress: () => navigateToSection("overview"),
                        className: "bg-gradient-to-r from-amber-800 to-amber-700 px-6 sm:px-10 py-3 sm:py-4 rounded-md inline-flex items-center justify-center hover:shadow-lg hover:shadow-amber-900/30 transition-all duration-500 transform hover:-translate-y-1 group overflow-hidden relative",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                            className: "absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-700"
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                            className: "text-white font-medium text-base sm:text-lg",
                            children: "Enter The Sacred Chamber"
                          })
                        ]
                      })
                    })
                  ]
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
            id: "overview",
            className: "py-16 sm:py-24 md:py-32 px-4 relative bg-stone-950",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TextureBackground, {
                type: "noise",
                opacity: 0.05,
                className: "absolute inset-0",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                  className: "w-full h-full"
                })
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                className: "absolute inset-0 bg-gradient-to-b from-stone-950 to-stone-900"
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                className: "max-w-5xl mx-auto relative z-10",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                    className: "mb-12 sm:mb-16 md:mb-20 text-center",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                        className: "text-amber-400 text-base sm:text-lg mb-3 sm:mb-4",
                        children: "The Sacred Chamber is Unlike Any Other Space"
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                        className: "text-amber-100 text-2xl sm:text-3xl md:text-4xl font-serif mb-4 sm:mb-6",
                        children: "This is Not Coaching. This is Initiation."
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                        className: "w-24 h-px bg-gradient-to-r from-amber-500/20 via-amber-500/80 to-amber-500/20 mx-auto mb-6"
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                        className: "text-amber-200 text-sm sm:text-base max-w-2xl mx-auto mb-8 sm:mb-12",
                        children: "Trusted by transformational leaders, healers, and visionaries across the globe."
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                        className: "flex flex-col md:flex-row items-center justify-center mb-8 sm:mb-12",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                            className: "w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-amber-700/30 shadow-lg mb-6 md:mb-0 md:mr-8",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Image, {
                              source: {
                                uri: "/images/sacred-portraits/initiation-portrait.jpg"
                              },
                              className: "w-full h-full object-cover",
                              resizeMode: "cover"
                            })
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                            className: "max-w-xl text-center md:text-left",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                className: "text-amber-100 text-lg sm:text-xl italic font-serif mb-2",
                                children: '"The Sacred Chamber is a space of ancient remembrance, where the veils between worlds thin, and you reconnect with the truth of who you are—beyond conditioning, beyond limitation, beyond the stories that have kept you small."'
                              }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                className: "text-amber-400 text-sm font-medium",
                                children: "— Jordi Amat, Sacred Guide"
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                        className: "bg-stone-900/50 p-5 sm:p-6 rounded-lg border border-amber-900/30",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                            className: "text-amber-400 text-sm mb-3 sm:mb-4",
                            children: "The Container"
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                            className: "text-amber-100 text-xl sm:text-2xl md:text-3xl font-serif mb-4 sm:mb-6",
                            children: "A Sacred Vessel for Your Becoming"
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                            className: "text-amber-50 leading-relaxed mb-6 sm:mb-8",
                            children: "The Sacred Chamber is an intimate 5-month container that combines ancient wisdom practices, energetic transmission, and personalized ritual work. Limited to just 4 initiates per cycle, this is a space of profound attention and witnessing."
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                            className: "w-16 h-px bg-amber-700 my-4 sm:my-6"
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                            className: "text-amber-50 italic mb-6 sm:mb-8",
                            children: "We meet in ceremony twice monthly within your private sacred space, complemented by personalized practices, energy work, and voice message support throughout your journey."
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                            className: "mt-6 sm:mt-10 space-y-4 sm:space-y-5",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                                className: "flex-row items-center",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                                    className: "w-8 h-8 rounded-full bg-amber-900/30 border border-amber-700/50 flex items-center justify-center mr-4",
                                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                      className: "text-amber-400 text-lg",
                                      children: "✦"
                                    })
                                  }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                    className: "text-amber-50 flex-1",
                                    children: "Bi-monthly sacred ceremonies within your private vessel"
                                  })
                                ]
                              }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                                className: "flex-row items-center",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                                    className: "w-8 h-8 rounded-full bg-amber-900/30 border border-amber-700/50 flex items-center justify-center mr-4",
                                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                      className: "text-amber-400 text-lg",
                                      children: "✧"
                                    })
                                  }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                    className: "text-amber-50 flex-1",
                                    children: "Personalized practices and energy work"
                                  })
                                ]
                              }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                                className: "flex-row items-center",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                                    className: "w-8 h-8 rounded-full bg-amber-900/30 border border-amber-700/50 flex items-center justify-center mr-4",
                                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                      className: "text-amber-400 text-lg",
                                      children: "⊛"
                                    })
                                  }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                    className: "text-amber-50 flex-1",
                                    children: "Continuous voice message support throughout"
                                  })
                                ]
                              })
                            ]
                          })
                        ]
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                        className: "bg-stone-900/50 p-5 sm:p-6 rounded-lg border border-amber-900/30 mt-8 md:mt-0",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                            className: "text-amber-400 text-sm mb-3 sm:mb-4",
                            children: "The Invitation"
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                            className: "text-amber-100 text-xl sm:text-2xl md:text-3xl font-serif mb-4 sm:mb-6",
                            children: "Who The Chamber Calls"
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                            className: "text-amber-50 leading-relaxed mb-4 sm:mb-6",
                            children: "You may be an entrepreneur, healer, artist, or leader feeling called to deeper work. You've done personal development, but sense there's something more sacred waiting. You're ready to shed what no longer serves and step into the fullness of your sovereign power."
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                            className: "w-16 h-px bg-amber-700 my-4 sm:my-6"
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                            className: "text-amber-300 italic mb-4 sm:mb-8 text-base sm:text-lg",
                            children: "You are being invited into the space beyond performance."
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                            className: "text-amber-50 italic mb-6 sm:mb-8",
                            children: "The Sacred Chamber isn't for everyone. It's for souls ready to commit to their transformation—those who sense they're being called to something greater than what the conventional world offers."
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                            className: "mt-6 sm:mt-10 space-y-4 sm:space-y-5",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                                className: "flex-row items-center",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                                    className: "w-8 h-8 rounded-full bg-amber-900/30 border border-amber-700/50 flex items-center justify-center mr-4",
                                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                      className: "text-amber-400 text-lg",
                                      children: "☽"
                                    })
                                  }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                    className: "text-amber-50 flex-1",
                                    children: "You're ready to move beyond productivity and into presence"
                                  })
                                ]
                              }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                                className: "flex-row items-center",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                                    className: "w-8 h-8 rounded-full bg-amber-900/30 border border-amber-700/50 flex items-center justify-center mr-4",
                                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                      className: "text-amber-400 text-lg",
                                      children: "☉"
                                    })
                                  }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                    className: "text-amber-50 flex-1",
                                    children: "You feel drawn to sacred ritual and mystical practice"
                                  })
                                ]
                              }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                                className: "flex-row items-center",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                                    className: "w-8 h-8 rounded-full bg-amber-900/30 border border-amber-700/50 flex items-center justify-center mr-4",
                                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                      className: "text-amber-400 text-lg",
                                      children: "◯"
                                    })
                                  }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                    className: "text-amber-50 flex-1",
                                    children: "You sense there's a greater purpose to your existence waiting to unfold"
                                  })
                                ]
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
            id: "journey",
            className: "py-16 sm:py-24 md:py-32 px-4 relative bg-stone-900",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                className: "absolute inset-0 bg-gradient-to-b from-stone-900 to-stone-950"
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                className: "absolute inset-0 flex items-center justify-center opacity-[0.03]",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                  className: "text-amber-400 text-[300px] sm:text-[400px] md:text-[600px]",
                  children: "⊛"
                })
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                className: "max-w-5xl mx-auto relative z-10",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                    className: "mb-12 sm:mb-16 md:mb-20 text-center",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                        className: "text-amber-400 text-base sm:text-lg mb-3 sm:mb-4",
                        children: "The Transformational Path"
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                        className: "text-amber-100 text-2xl sm:text-3xl md:text-4xl font-serif mb-6 sm:mb-12",
                        children: "Your Sacred Chamber Journey"
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                        className: "w-24 h-px bg-gradient-to-r from-amber-500/20 via-amber-500/80 to-amber-500/20 mx-auto mb-6 sm:mb-12"
                      })
                    ]
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-16 mb-16 sm:mb-20 md:mb-24",
                    children: journeyPhases.map((phase, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                      className: "border border-amber-900/30 rounded-lg p-6 sm:p-8 hover:border-amber-700/50 transition-all duration-500 bg-stone-900/30 hover:bg-stone-900/50",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                          className: "mb-4 sm:mb-6 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-900/30 border border-amber-700/30",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                            className: "text-amber-400 text-xl sm:text-2xl",
                            children: phase.symbol
                          })
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                          className: "text-amber-100 text-lg sm:text-xl font-serif mb-2 sm:mb-3",
                          children: phase.name
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                          className: "text-amber-400/70 text-xs sm:text-sm mb-3 sm:mb-4",
                          children: phase.duration
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                          className: "text-amber-50 text-sm sm:text-base leading-relaxed",
                          children: phase.description
                        })
                      ]
                    }, index))
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                    className: "text-center",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                        className: "text-amber-100 text-xl sm:text-2xl font-serif mb-6 sm:mb-8",
                        children: "What You'll Receive"
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                        className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-left",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                            className: "bg-stone-900/30 p-4 sm:p-6 rounded-lg border border-amber-800/20 mb-4 sm:mb-6 hover:border-amber-700/30 hover:bg-stone-900/50 transition-all duration-300",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                                className: "flex items-center mb-3 sm:mb-4",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                                    className: "w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-900/30 border border-amber-700/30 flex items-center justify-center mr-3",
                                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                      className: "text-amber-400 text-lg sm:text-xl",
                                      children: "✧"
                                    })
                                  }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                    className: "text-amber-400 text-base sm:text-lg",
                                    children: "Sacred Ceremonies"
                                  })
                                ]
                              }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                className: "text-amber-50 text-sm sm:text-base",
                                children: "10 private ceremonial sessions with personalized rituals and energy work"
                              })
                            ]
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                            className: "bg-stone-900/30 p-4 sm:p-6 rounded-lg border border-amber-800/20 mb-4 sm:mb-6 hover:border-amber-700/30 hover:bg-stone-900/50 transition-all duration-300",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                                className: "flex items-center mb-3 sm:mb-4",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                                    className: "w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-900/30 border border-amber-700/30 flex items-center justify-center mr-3",
                                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                      className: "text-amber-400 text-lg sm:text-xl",
                                      children: "⊛"
                                    })
                                  }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                    className: "text-amber-400 text-base sm:text-lg",
                                    children: "Daily Practices"
                                  })
                                ]
                              }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                className: "text-amber-50 text-sm sm:text-base",
                                children: "Custom-crafted rituals, meditations, and embodiment practices"
                              })
                            ]
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                            className: "bg-stone-900/30 p-4 sm:p-6 rounded-lg border border-amber-800/20 mb-4 sm:mb-6 hover:border-amber-700/30 hover:bg-stone-900/50 transition-all duration-300",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                                className: "flex items-center mb-3 sm:mb-4",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                                    className: "w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-900/30 border border-amber-700/30 flex items-center justify-center mr-3",
                                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                      className: "text-amber-400 text-lg sm:text-xl",
                                      children: "☉"
                                    })
                                  }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                    className: "text-amber-400 text-base sm:text-lg",
                                    children: "Sacred Connection"
                                  })
                                ]
                              }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                className: "text-amber-50 text-sm sm:text-base",
                                children: "Voice message support and energetic holding throughout your journey"
                              })
                            ]
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                            className: "bg-stone-900/30 p-4 sm:p-6 rounded-lg border border-amber-800/20 mb-4 sm:mb-6 hover:border-amber-700/30 hover:bg-stone-900/50 transition-all duration-300",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                                className: "flex items-center mb-3 sm:mb-4",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                                    className: "w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-900/30 border border-amber-700/30 flex items-center justify-center mr-3",
                                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                      className: "text-amber-400 text-lg sm:text-xl",
                                      children: "☽"
                                    })
                                  }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                    className: "text-amber-400 text-base sm:text-lg",
                                    children: "Soul Library"
                                  })
                                ]
                              }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                className: "text-amber-50 text-sm sm:text-base",
                                children: "Access to exclusive teachings, meditations, and wisdom transmissions"
                              })
                            ]
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                            className: "bg-stone-900/30 p-4 sm:p-6 rounded-lg border border-amber-800/20 mb-4 sm:mb-6 hover:border-amber-700/30 hover:bg-stone-900/50 transition-all duration-300",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                                className: "flex items-center mb-3 sm:mb-4",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                                    className: "w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-900/30 border border-amber-700/30 flex items-center justify-center mr-3",
                                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                      className: "text-amber-400 text-lg sm:text-xl",
                                      children: "◯"
                                    })
                                  }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                    className: "text-amber-400 text-base sm:text-lg",
                                    children: "Energy Clearings"
                                  })
                                ]
                              }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                className: "text-amber-50 text-sm sm:text-base",
                                children: "Regular energetic clearings and sacred attunements"
                              })
                            ]
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                            className: "bg-stone-900/30 p-4 sm:p-6 rounded-lg border border-amber-800/20 mb-4 sm:mb-6 hover:border-amber-700/30 hover:bg-stone-900/50 transition-all duration-300",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                                className: "flex items-center mb-3 sm:mb-4",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                                    className: "w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-900/30 border border-amber-700/30 flex items-center justify-center mr-3",
                                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                      className: "text-amber-400 text-lg sm:text-xl",
                                      children: "✦"
                                    })
                                  }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                    className: "text-amber-400 text-base sm:text-lg",
                                    children: "Completion Ceremony"
                                  })
                                ]
                              }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                className: "text-amber-50 text-sm sm:text-base",
                                children: "Sacred culmination ritual to honor your transformation"
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
            id: "testimonials",
            className: "py-16 sm:py-24 md:py-32 px-4 relative overflow-hidden bg-stone-950",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                className: "absolute inset-0 bg-gradient-to-b from-stone-950 to-stone-900"
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                className: "absolute inset-0 opacity-30",
                children: [
                  ...Array(50)
                ].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                  className: "absolute bg-amber-400/20 rounded-full blur-sm animate-float",
                  style: {
                    width: 2 + Math.random() * 4,
                    height: 2 + Math.random() * 4,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDuration: `${20 + Math.random() * 40}s`,
                    animationDelay: `${Math.random() * 20}s`
                  }
                }, `particle-${i}`))
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                className: "max-w-5xl mx-auto relative z-10",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                    className: "mb-12 sm:mb-16 md:mb-20 text-center",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                        className: "text-amber-400 text-base sm:text-lg mb-3 sm:mb-4",
                        children: "Sacred Reflections"
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                        className: "text-amber-100 text-2xl sm:text-3xl md:text-4xl font-serif mb-6 sm:mb-12",
                        children: "From Those Who've Walked The Path"
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                        className: "w-24 h-px bg-gradient-to-r from-amber-500/20 via-amber-500/80 to-amber-500/20 mx-auto mb-6 sm:mb-12"
                      })
                    ]
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                    className: "mb-12 sm:mb-16 md:mb-20 border-2 border-amber-700/30 rounded-xl p-6 sm:p-8 md:p-12 bg-gradient-to-br from-amber-900/20 to-stone-900/60 relative overflow-hidden",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                        className: "absolute top-5 left-6 opacity-20",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                          className: "text-5xl sm:text-7xl md:text-9xl text-amber-400 font-serif",
                          children: '"'
                        })
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                        className: "absolute bottom-5 right-6 opacity-20",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                          className: "text-5xl sm:text-7xl md:text-9xl text-amber-400 font-serif",
                          children: '"'
                        })
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                        className: "flex flex-col md:flex-row md:items-center",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                            className: "w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-amber-700/30 shadow-xl mx-auto md:mx-0 md:mr-10 relative mb-6 md:mb-0",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Image, {
                                source: {
                                  uri: "/images/sacred-portraits/testimonial-portrait.jpg"
                                },
                                className: "w-full h-full object-cover",
                                resizeMode: "cover"
                              }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                                className: "absolute inset-0 bg-gradient-to-t from-amber-950/40 to-transparent"
                              })
                            ]
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                            className: "flex-1",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                className: "text-amber-200 text-lg sm:text-xl md:text-2xl font-serif italic mb-6 sm:mb-8 leading-relaxed text-center md:text-left",
                                children: `"The Sacred Chamber transformed not just how I see myself, but how I walk through the world. This isn't coaching—it's remembrance of your divine nature."`
                              }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                                className: "w-16 h-px bg-gradient-to-r from-amber-600/50 to-amber-400/30 my-4 sm:my-6 mx-auto md:mx-0"
                              }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                                className: "text-center md:text-left",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                    className: "text-amber-100 font-medium text-base sm:text-lg",
                                    children: "Elena R."
                                  }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                    className: "text-amber-400",
                                    children: "Spiritual Guide & Oracle"
                                  }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                    className: "text-amber-100 text-sm italic mt-1",
                                    children: "— 6-month Sacred Chamber Journey"
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
                    className: "space-y-8 sm:space-y-12 md:space-y-16",
                    children: testimonials.slice(1).map((testimonial, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                      className: "border border-amber-800/30 rounded-xl p-6 sm:p-8 md:p-10 bg-stone-900/60 relative overflow-hidden",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                          className: "absolute top-5 left-6 opacity-10",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                            className: "text-4xl sm:text-6xl md:text-9xl text-amber-800 font-serif",
                            children: '"'
                          })
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                          className: "absolute bottom-5 right-6 opacity-10",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                            className: "text-4xl sm:text-6xl md:text-9xl text-amber-800 font-serif",
                            children: '"'
                          })
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                          className: "relative z-10",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.Text, {
                              className: "text-amber-100 text-lg sm:text-xl md:text-2xl font-serif italic mb-6 sm:mb-8 leading-relaxed",
                              children: [
                                '"',
                                testimonial.quote,
                                '"'
                              ]
                            }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                              className: "w-16 h-px bg-gradient-to-r from-amber-600/50 to-amber-400/30 my-6 sm:my-8"
                            }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                              className: "flex flex-col sm:flex-row sm:items-center",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                                  className: "w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-amber-500/30 to-amber-700/30 mx-auto sm:mx-0 sm:mr-4 flex items-center justify-center mb-3 sm:mb-0",
                                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                    className: "text-amber-400 text-lg sm:text-xl",
                                    children: testimonial.name.charAt(0)
                                  })
                                }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                                  className: "text-center sm:text-left",
                                  children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                      className: "text-amber-100 font-medium",
                                      children: testimonial.name
                                    }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                      className: "text-amber-400",
                                      children: testimonial.title
                                    }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.Text, {
                                      className: "text-amber-100 text-sm italic",
                                      children: [
                                        "— ",
                                        testimonial.journey
                                      ]
                                    })
                                  ]
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    }, index))
                  })
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
            id: "readiness",
            className: "py-16 sm:py-24 md:py-32 px-4 relative bg-stone-900",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                className: "absolute inset-0 bg-gradient-to-b from-stone-900 to-stone-950"
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                className: "max-w-5xl mx-auto relative z-10",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                      className: "bg-stone-900/50 p-6 rounded-lg border border-amber-900/30",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                          className: "text-amber-400 text-base sm:text-lg mb-3 sm:mb-4",
                          children: "The Sacred Call"
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                          className: "text-amber-100 text-xl sm:text-2xl md:text-3xl font-serif mb-4 sm:mb-8",
                          children: "Is This Your Time?"
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                          className: "text-amber-50 text-sm sm:text-base leading-relaxed mb-4 sm:mb-8",
                          children: "The Sacred Chamber calls to those ready to transcend limitations and step into their sovereign power. This is not for the casually curious, but for souls committed to transformation."
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.Text, {
                          className: "text-amber-50 text-sm sm:text-base leading-relaxed mb-4 sm:mb-8",
                          children: [
                            "The Sacred Chamber begins at ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                              className: "text-amber-300",
                              children: "$4444"
                            }),
                            ". This is a high-level investment of energy, devotion, and presence."
                          ]
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                          className: "text-amber-50 text-sm sm:text-base leading-relaxed mb-4 sm:mb-8",
                          children: "With just 4 spaces available each cycle, this ensures the depth and attention your journey deserves."
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                          className: "text-amber-200 italic font-serif mb-8 sm:mb-12",
                          children: '"Those who feel the call know it in their bones. There is no convincing needed—only the courage to answer."'
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.TouchableOpacity, {
                          onPress: handleApplyClick,
                          className: "bg-gradient-to-r from-amber-800 to-amber-700 px-6 sm:px-10 py-3 sm:py-5 rounded-md inline-flex items-center justify-center hover:shadow-lg hover:shadow-amber-900/30 transition-all duration-500 transform hover:-translate-y-1 group overflow-hidden relative",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                              className: "absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-700"
                            }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                              className: "text-white font-medium text-base sm:text-lg",
                              children: "Begin Your Sacred Application"
                            })
                          ]
                        })
                      ]
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                      className: "bg-stone-900/50 p-6 rounded-lg border border-amber-900/30 mt-8 md:mt-0",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                          className: "text-amber-400 text-base sm:text-lg mb-3 sm:mb-4",
                          children: "Signs of Readiness"
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                          className: "text-amber-100 text-xl sm:text-2xl md:text-3xl font-serif mb-4 sm:mb-8",
                          children: "You May Be Called If..."
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                          className: "space-y-3 sm:space-y-4 mb-6 sm:mb-8",
                          children: readinessChecklist.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                            className: "flex-row items-start",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                className: "text-amber-400 mr-3",
                                children: "✦"
                              }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                className: "text-amber-50 text-sm sm:text-base flex-1",
                                children: item
                              })
                            ]
                          }, index))
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                          className: "border border-amber-800/30 rounded-lg p-5 sm:p-8 bg-stone-900/40",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                              className: "text-amber-100 text-base sm:text-lg font-serif mb-3 sm:mb-4",
                              children: "Next Sacred Chamber Cycle"
                            }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.Text, {
                              className: "text-amber-50 text-sm sm:text-base mb-2",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                  className: "text-amber-400",
                                  children: "Applications open:"
                                }),
                                " September 15-30"
                              ]
                            }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.Text, {
                              className: "text-amber-50 text-sm sm:text-base mb-2",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                  className: "text-amber-400",
                                  children: "Journey begins:"
                                }),
                                " October New Moon"
                              ]
                            }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.Text, {
                              className: "text-amber-50 text-sm sm:text-base mb-2",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                  className: "text-amber-400",
                                  children: "Spaces available:"
                                }),
                                " 4 initiates"
                              ]
                            }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.Text, {
                              className: "text-amber-50 text-sm sm:text-base mb-4",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                  className: "text-amber-400",
                                  children: "Application process:"
                                }),
                                " Written reflection followed by sacred connection call"
                              ]
                            }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
                              onPress: () => {
                              },
                              className: "border border-amber-600/30 py-3 rounded-md flex items-center justify-center hover:bg-amber-900/20 transition-all duration-300",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                                className: "text-amber-400 text-sm",
                                children: "Join the Waiting List"
                              })
                            })
                          ]
                        })
                      ]
                    })
                  ]
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
            className: "py-16 sm:py-24 md:py-32 px-4 relative bg-stone-950",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                className: "absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950"
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                className: "absolute inset-0",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                  className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-amber-600/5 blur-3xl"
                })
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                className: "max-w-3xl mx-auto text-center relative z-10",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                    className: "text-amber-300 italic font-serif mb-4 sm:mb-8 text-base sm:text-lg",
                    children: '"There is a place within you that already remembers."'
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                    className: "text-amber-300 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-6 sm:mb-10",
                    children: "The Chamber Awaits You"
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                    className: "text-amber-100 text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto",
                    children: "If you've read this far, you've felt the resonance. Trust the call that brought you here."
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                    className: "flex items-center justify-center mb-8 sm:mb-12",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                      className: "space-y-3 sm:space-y-4 inline-block text-left",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                          className: "flex-row items-center",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                              className: "text-amber-400 mr-3 text-base sm:text-xl",
                              children: "⊹"
                            }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                              className: "text-amber-100 text-sm sm:text-base",
                              children: "5-month sacred container for profound transformation"
                            })
                          ]
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                          className: "flex-row items-center",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                              className: "text-amber-400 mr-3 text-base sm:text-xl",
                              children: "⊛"
                            }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                              className: "text-amber-100 text-sm sm:text-base",
                              children: "Bi-monthly ceremonial sessions & continuous support"
                            })
                          ]
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                          className: "flex-row items-center",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                              className: "text-amber-400 mr-3 text-base sm:text-xl",
                              children: "✧"
                            }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                              className: "text-amber-100 text-sm sm:text-base",
                              children: "Limited to 4 initiates per cycle. By invitation only."
                            })
                          ]
                        })
                      ]
                    })
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.TouchableOpacity, {
                      onPress: handleApplyClick,
                      className: "bg-gradient-to-r from-amber-700 to-amber-600 px-8 sm:px-12 py-4 sm:py-6 rounded-md inline-flex items-center justify-center hover:shadow-lg hover:shadow-amber-700/30 transition-all duration-500 transform hover:-translate-y-1 group overflow-hidden relative",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                          className: "absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-700"
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                          className: "absolute inset-0 opacity-0 group-hover:opacity-100 bg-amber-500/20 blur-xl transition-opacity duration-1000"
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                          className: "text-white font-medium text-lg sm:text-xl",
                          children: "Begin My Application"
                        })
                      ]
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
  SacredChamber as default
};
