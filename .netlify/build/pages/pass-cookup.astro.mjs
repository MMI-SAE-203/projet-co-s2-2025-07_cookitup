import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CfTmU_QD.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_KgNoU2jj.mjs';
import { $ as $$Hero } from '../chunks/Hero_EQi9n1wd.mjs';
import PocketBase from 'pocketbase';
export { renderers } from '../renderers.mjs';

const pb = new PocketBase("https://cookit-up.titouan-winkel.fr");

/**
 * Vérifie si l'utilisateur est connecté
 * @returns {boolean} True si l'utilisateur est connecté
 */
function isLoggedIn() {
    return pb.authStore.isValid
}

const $$PassCookup = createComponent(($$result, $$props, $$slots) => {
  isLoggedIn();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Pass Cookup - \xC9conomisez sur vos courses" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="w-full"> <!-- Hero Section --> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Votre abonnement Cookup", "subtitle": "Exp\xE9rience culinaire optimale", "description": "Profitez d'avantages exclusifs chez nos partenaires pr\xE9f\xE9r\xE9s, ainsi qu'un acc\xE8s illimit\xE9 aux fonctionnalit\xE9s premium de notre plateforme. D\xE9couvrez des recettes exclusives cr\xE9\xE9es par nos chefs partenaires pour une cuisine accessible.", "backgroundImage": "/images/hero_cookup.webp", "overlay": true, "centered": false })} <!-- Avantages Section --> <section class="py-12 bg-emerald-700 text-white"> <div class="max-w-6xl mx-auto px-4"> <h2 class="text-3xl font-semibold mb-8 text-left">
POURQUOI CHOISIR COOKUP ?
</h2> <ul class="space-y-4"> <li class="flex items-start text-lg"> <span class="text-emerald-300 font-bold mr-3 mt-1">✓</span> <span>Accès illimité aux fonctionnalités de la version
                            premium</span> </li> <li class="flex items-start text-lg"> <span class="text-emerald-300 font-bold mr-3 mt-1">✓</span> <span>Codes promotionnels exclusifs chez nos partenaires</span> </li> <li class="flex items-start text-lg"> <span class="text-emerald-300 font-bold mr-3 mt-1">✓</span> <span>Économisez plus d'argent et de temps en évitant
                            parfaitement le gaspillage de vos restes</span> </li> <li class="flex items-start text-lg"> <span class="text-emerald-300 font-bold mr-3 mt-1">✓</span> <span>Recettes personnalisées selon vos préférences et
                            adaptées à vos objectifs</span> </li> <li class="flex items-start text-lg"> <span class="text-emerald-300 font-bold mr-3 mt-1">✓</span> <span>Menu optimisé selon régime et préférences</span> </li> <li class="flex items-start text-lg"> <span class="text-emerald-300 font-bold mr-3 mt-1">✓</span> <span>Accédez à nos nutritionnistes partenaires</span> </li> </ul> </div> </section> <!-- Mission Section --> <section class="py-16 bg-gray-900 text-white text-center relative overflow-hidden"> <div class="absolute inset-0 bg-black bg-opacity-60"></div> <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/placeholder.svg?height=600&width=1200')"></div> <div class="relative z-10 max-w-4xl mx-auto px-4"> <h2 class="text-4xl lg:text-5xl font-bold mb-8">
NOTRE BUT PREMIER: VOUS FAIRE ÉCONOMISER
</h2> <p class="text-lg tracking-widest mt-12">
SE NOURRIR | ÉCONOMISER | PROFITER
</p> </div> </section> <!-- Pricing Section --> <section class="py-12 bg-red-300 text-gray-800"> <div class="max-w-6xl mx-auto px-4"> <div class="flex flex-col lg:flex-row items-center gap-8"> <div class="flex-1"> <div class="rounded-xl overflow-hidden shadow-lg"> <img src="/images/illustration_cookup.webp" alt="Plats gastronomiques" class="w-full h-auto object-cover"> </div> </div> <div class="flex-1 text-center lg:text-left"> <p class="text-2xl lg:text-3xl font-semibold mb-4 leading-relaxed">
Tout ceci pour seulement
<span class="text-4xl font-bold">5,99 €</span>
par mois et
<span class="text-4xl font-bold">43,99 €</span>
à l'année.
</p> <p class="text-xl mb-8">
Ne manquez pas votre chance de cuisiner vos restes.
</p> <a href="/abonnement-cookup" class="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-center">
OBTENIR LE PASS COOKUP
</a> </div> </div> </div> </section> <!-- Legal Section --> <section class="py-8 bg-gray-100"> <div class="max-w-6xl mx-auto px-4"> <p class="text-sm text-gray-600 mb-4 leading-relaxed">
Profitez des meilleurs établissements partenaires de Cookup
                    avec
<a href="#" class="text-orange-500 hover:text-orange-600 hover:underline">votre pass premium</a>. Nous avons sélectionné pour vous des partenaires de
                    qualité, soucieux de l'environnement et de votre santé.
</p> <p class="text-sm text-gray-600 leading-relaxed">
Pour profiter des réductions, connectez-vous simplement à
                    votre compte
<a href="#" class="text-orange-500 hover:text-orange-600 hover:underline">Cookup premium</a>. Pour toute question ou demande d'ordre technique,
                    écrivez-nous à
<a href="mailto:support@cookup.com" class="text-orange-500 hover:text-orange-600 hover:underline">support@cookup.com</a>
et nous vous répondrons dans les plus brefs délais.
</p> </div> </section> </main> ` })}`;
}, "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/pass-cookup.astro", void 0);

const $$file = "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/pass-cookup.astro";
const $$url = "/pass-cookup";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$PassCookup,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
