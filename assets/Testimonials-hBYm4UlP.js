import { r as reactExports, j as jsxRuntimeExports, w as cjsExports } from "../_virtual_one-entry.js";
import TextureBackground from "./TextureBackground-DC9pxGSt.js";
import "node:async_hooks";
import "crypto";
function Testimonial({ quote, name, title, journey, hasAudio = false, featured = false }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
    className: `
      ${featured ? "bg-gradient-to-b from-amber-50/90 via-stone-50/90 to-amber-50/80 border-amber-200" : "bg-gradient-to-r from-stone-50/90 to-amber-50/80 border-amber-100"} 
      rounded-2xl p-8 md:p-12 mb-6 md:mb-0 shadow-sm border transition-all duration-500 relative overflow-hidden
      ${featured ? "hover:shadow-lg hover:border-amber-300" : "hover:shadow-md hover:border-amber-200"}
    `,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
        className: "absolute top-5 left-6 opacity-10",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
          className: "text-9xl text-amber-800 font-serif",
          children: '"'
        })
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
        className: "absolute bottom-5 right-6 opacity-10",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
          className: "text-9xl text-amber-800 font-serif",
          children: '"'
        })
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
        className: "absolute inset-0 bg-amber-50/10"
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
        className: "relative z-10",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
            className: "text-amber-700 text-3xl mb-3 font-serif",
            children: '"'
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
            className: `text-stone-700 mb-6 italic leading-relaxed ${featured ? "text-xl" : "text-lg"} font-serif`,
            children: quote
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
            className: "w-16 h-px bg-gradient-to-r from-amber-300 to-amber-200 my-6"
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
            className: "flex-row items-center mt-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                className: `${featured ? "w-14 h-14" : "w-12 h-12"} rounded-full bg-gradient-to-br from-amber-100 to-amber-200 mr-4 flex items-center justify-center shadow-sm overflow-hidden`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                  className: "text-amber-800 text-base font-medium",
                  children: name.charAt(0)
                })
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                className: "flex-1",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                    className: `font-medium text-stone-800 ${featured ? "text-lg" : ""}`,
                    children: name
                  }),
                  title && /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                    className: "text-sm text-amber-700 italic",
                    children: title
                  }),
                  journey && /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.Text, {
                    className: "text-sm text-stone-600 mt-1 font-serif italic",
                    children: [
                      "— ",
                      journey
                    ]
                  })
                ]
              }),
              hasAudio && /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
                className: "w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center hover:bg-amber-200 transition-colors duration-300",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                  className: "text-amber-800 text-xs",
                  children: "▶"
                })
              })
            ]
          })
        ]
      })
    ]
  });
}
function Testimonials() {
  const [activeSlide, setActiveSlide] = reactExports.useState(0);
  const scrollViewRef = reactExports.useRef(null);
  const featuredTestimonial = {
    quote: "Working with Jordi completely transformed my relationship with myself. The Mirror Path helped me see patterns I'd been blind to for decades. This journey feels like coming home to my true nature, embracing both light and shadow aspects of myself with compassion and wisdom.",
    name: "Sophia M.",
    title: "Life Coach",
    journey: "Ceremony Seeker, 8-month journey"
  };
  const testimonials = [
    {
      id: "2",
      quote: "I was skeptical at first, but the energy work in our sessions created tangible shifts in my life. I feel more aligned and purposeful than I have in years.",
      name: "James R.",
      title: "Entrepreneur",
      journey: "Soul Session Graduate"
    },
    {
      id: "3",
      quote: "The sacred container Jordi creates is unlike anything I've experienced before. Deep, transformative work happens naturally in that space of reverence.",
      name: "Alexis T.",
      title: "Artist",
      journey: "Mirror Path Explorer"
    },
    {
      id: "4",
      quote: "I've worked with many coaches, but Jordi's approach balances the spiritual with the practical in a way that created lasting change for me.",
      name: "Michael K.",
      title: "Executive",
      journey: "Clarity Call to Deep Work",
      hasAudio: true
    },
    {
      id: "5",
      quote: "The sacred rituals and practices helped me embody the lessons we uncovered. This wasn't just talk therapy—it was soul remembrance.",
      name: "Elena J.",
      title: "Therapist",
      journey: "Sacred Immersion Day"
    }
  ];
  const handleScroll = (event) => {
    const slideSize = 336;
    const offset = event.nativeEvent.contentOffset.x;
    const index = Math.round(offset / slideSize);
    setActiveSlide(index);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
    className: "w-full py-28 px-4 relative overflow-hidden",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
        className: "absolute inset-0 bg-gradient-to-b from-stone-100 to-stone-50"
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextureBackground, {
        type: "grain",
        opacity: 0.1,
        className: "absolute inset-0",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
          className: "w-full h-full"
        })
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextureBackground, {
        type: "noise",
        opacity: 0.05,
        className: "absolute inset-0",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
          className: "w-full h-full"
        })
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
        className: "absolute top-1/4 left-1/2 -translate-x-1/2 opacity-[0.03]",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
          className: "text-[300px] text-amber-800 leading-none",
          children: "✧"
        })
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
        className: "max-w-6xl mx-auto relative z-10",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
            className: "opacity-0 animate-fade-up",
            style: {
              animationDelay: "0.3s"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
              className: "text-center text-amber-700 italic mb-2 font-serif",
              children: "What Others Have Found Inside The Mirror"
            })
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
            className: "opacity-0 animate-fade-up",
            style: {
              animationDelay: "0.5s"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
              className: "text-3xl font-bold text-center text-stone-800 mb-3 font-serif",
              children: "Words from Those Who've Walked the Path"
            })
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
            className: "opacity-0 animate-fade-up",
            style: {
              animationDelay: "0.7s"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
              className: "text-xl text-center text-stone-600 mb-12 max-w-3xl mx-auto font-serif italic",
              children: "The journey is different for everyone, but transformation is always possible"
            })
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
            className: "mb-16 opacity-0 animate-fade-up max-w-4xl mx-auto shadow-lg rounded-2xl",
            style: {
              animationDelay: "0.9s"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonial, {
              quote: featuredTestimonial.quote,
              name: featuredTestimonial.name,
              title: featuredTestimonial.title,
              journey: featuredTestimonial.journey,
              featured: true
            })
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
            className: "w-full h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent mb-16 opacity-0 animate-fade-up",
            style: {
              animationDelay: "1.1s"
            }
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
            className: "relative",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.ScrollView, {
                ref: scrollViewRef,
                horizontal: true,
                showsHorizontalScrollIndicator: false,
                className: "pb-8",
                decelerationRate: "fast",
                snapToInterval: 336,
                snapToAlignment: "center",
                onScroll: handleScroll,
                scrollEventThrottle: 16,
                contentContainerStyle: {
                  paddingLeft: 16,
                  paddingRight: 16
                },
                children: testimonials.map((testimonial, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                  className: "w-80 mr-6 opacity-0 animate-fade-up",
                  style: {
                    animationDelay: `${1.3 + index * 0.2}s`
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonial, {
                    quote: testimonial.quote,
                    name: testimonial.name,
                    title: testimonial.title,
                    journey: testimonial.journey,
                    hasAudio: testimonial.hasAudio
                  })
                }, testimonial.id))
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
                className: "flex-row justify-center mt-4 opacity-0 animate-fade-up",
                style: {
                  animationDelay: "1.9s"
                },
                children: testimonials.map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
                  onPress: () => {
                    var _a;
                    (_a = scrollViewRef.current) == null ? void 0 : _a.scrollTo({
                      x: index * 336,
                      animated: true
                    });
                    setActiveSlide(index);
                  },
                  className: `w-2 h-2 rounded-full mx-1 ${activeSlide === index ? "bg-amber-500" : "bg-amber-200"}`
                }, index))
              })
            ]
          })
        ]
      })
    ]
  });
}
export {
  Testimonials as default
};
