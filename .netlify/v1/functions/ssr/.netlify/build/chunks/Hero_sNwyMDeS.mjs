import { c as createComponent, d as createAstro, m as maybeRenderHead, e as addAttribute, g as renderSlot, a as renderTemplate } from './astro/server_CmPnL_Nc.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const {
    title,
    subtitle,
    description,
    backgroundImage = "/placeholder.svg?height=600&width=1200",
    overlay = true,
    centered = true
  } = Astro2.props;
  function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  const displayTitle = removeAccents(title).toUpperCase();
  const displaySubtitle = subtitle ? removeAccents(subtitle).toUpperCase() : "";
  return renderTemplate`${maybeRenderHead()}<section class="relative w-full h-[500px] md:h-[600px] overflow-hidden"> <!-- Image de fond --> <div class="absolute inset-0"> <img${addAttribute(backgroundImage || "/placeholder.svg", "src")}${addAttribute(title, "alt")} class="w-full h-full object-cover"> </div> <!-- Overlay --> ${overlay && renderTemplate`<div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>`} <!-- Contenu --> <div${addAttribute(`relative z-10 h-full flex items-center ${centered ? "justify-center text-center" : "justify-start"}`, "class")}> <div class="max-w-6xl mx-auto px-6 w-full"> <div${addAttribute(`text-white ${centered ? "text-center" : "text-left"} max-w-4xl ${centered ? "mx-auto" : ""}`, "class")}> ${subtitle && renderTemplate`<p class="text-yellow-400 font-semibold text-lg md:text-xl mb-4 uppercase tracking-wide"> ${displaySubtitle} </p>`} <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"> ${displayTitle} </h1> ${description && renderTemplate`<p class="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl {centered ? 'mx-auto' : ''}"> ${description} </p>`} <!-- Slot pour contenu additionnel --> ${renderSlot($$result, $$slots["default"])} </div> </div> </div> <!-- Indicateur de scroll --> <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"> <div class="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"> <div class="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div> </div> </div> </section>`;
}, "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/components/Hero.astro", void 0);

export { $$Hero as $ };
