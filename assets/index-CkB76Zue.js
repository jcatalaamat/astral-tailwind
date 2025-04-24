import { j as jsxRuntimeExports, w as cjsExports } from "../_virtual_one-entry.js";
/* empty css                      */
import Hero from "./Hero-fzAjYtXp.js";
import About from "./About-D0RfMUlZ.js";
import OfferingsGrid from "./OfferingsGrid-BjLH6GuW.js";
import BookingMenu from "./BookingMenu-DANAnAmE.js";
import Testimonials from "./Testimonials-hBYm4UlP.js";
import QuoteDivider from "./QuoteDivider-I9PhBUrV.js";
import PremiumCTA from "./PremiumCTA-BSCuO9QB.js";
import ContactFooter from "./ContactFooter-BiD-9iby.js";
import StartHereGuide from "./StartHereGuide-D7A1-H6t.js";
import SacredPortrait from "./SacredPortrait-BaO0Qe66.js";
import "node:async_hooks";
import "crypto";
import "./TextureBackground-DC9pxGSt.js";
import "./GlowEffect-B71rQeKJ.js";
function Index() {
  const handleHeroCta = () => {
    console.log("Handle Hero CTA click");
  };
  const handleAboutCtaPress = () => {
    console.log("About CTA pressed");
  };
  const handleApplyForPremium = () => {
    console.log("Apply for premium pressed");
  };
  const handleClarityCallPress = () => {
    console.log("Clarity Call button pressed");
  };
  const handleMirrorPathPress = () => {
    console.log("Mirror Path button pressed");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.ScrollView, {
    className: "flex-1 bg-white",
    contentContainerStyle: {
      flexGrow: 1
    },
    style: {
      height: "100%"
    },
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {
        headline: "Journey Into",
        headlineAccent: "Wholeness",
        subheadline: "Transform Your Life Through Sacred Coaching & Soul Guidance",
        supportingText: "This is not self-help. This is soul remembrance.",
        microText: "Your journey begins with one sacred step.",
        ctaText: "Book a Session",
        onCtaPress: handleHeroCta
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(About, {
        quoteText: "I am not here to teach you who you are. I'm here to remind you what you've always known.",
        onCtaPress: handleAboutCtaPress
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(OfferingsGrid, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BookingMenu, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SacredPortrait, {
        headline: "This Is Not Coaching",
        supportingText: "This is soul remembrance. A sacred invitation to witness yourself through the mirror of divine presence. I create a container for your transformation through ritual, presence, and sacred witnessing.",
        imagePath: "/images/sacred-portraits/main-portrait.jpg",
        secondaryImagePath: "/images/sacred-portraits/secondary-portrait.jpg",
        alignment: "right"
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StartHereGuide, {
        onClarityCallPress: handleClarityCallPress,
        onMirrorPathPress: handleMirrorPathPress
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(QuoteDivider, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PremiumCTA, {
        onApplyNow: handleApplyForPremium
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ContactFooter, {})
    ]
  });
}
export {
  Index as default
};
