import { c as createComponent, r as renderComponent, b as renderScript, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_CfTmU_QD.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BngmRMf4.mjs';
import { $ as $$Hero } from '../chunks/Hero_EQi9n1wd.mjs';
import { a as getAllRecettes } from '../chunks/backend_B2qRaZ9z.mjs';
export { renderers } from '../renderers.mjs';

const $$MenuSemaine = createComponent(async ($$result, $$props, $$slots) => {
  const recettes = await getAllRecettes();
  const joursColors = {
    LUNDI: "bg-red-500",
    MARDI: "bg-yellow-500",
    MERCREDI: "bg-green-500",
    JEUDI: "bg-gray-800",
    VENDREDI: "bg-purple-500",
    SAMEDI: "bg-gray-600",
    DIMANCHE: "bg-blue-400"
  };
  const jours = ["LUNDI", "MARDI", "MERCREDI", "JEUDI", "VENDREDI", "SAMEDI", "DIMANCHE"];
  const menuSemaine = {};
  jours.forEach((jour, index) => {
    const startIndex = index * 4;
    menuSemaine[jour] = recettes.slice(startIndex, startIndex + 4);
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Menu de la semaine | Cookit-UP" }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "MENU DE LA SEMAINE", "subtitle": "D\xE9couvrez notre s\xE9lection de recettes pour chaque jour", "backgroundImage": "/images/hero_menu-semaine.webp" })}  ${maybeRenderHead()}<main class="max-w-7xl mx-auto px-4 py-12"> <div class="space-y-12"> ${jours.map((jour) => renderTemplate`<section class="space-y-6"> <!-- Titre du jour --> <div class="text-center"> <h2 class="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-2"> ${jour} </h2> <div class="w-24 h-1 bg-gray-300 mx-auto"></div> </div> <!-- Grille des recettes du jour --> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> ${menuSemaine[jour]?.map((recette) => {
    const imageUrl = recette.img || "/placeholder.svg";
    return renderTemplate`<div${addAttribute(`relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group ${joursColors[jour]}`, "class")}> <!-- Image de la recette --> <div class="aspect-square relative overflow-hidden"> <img${addAttribute(imageUrl, "src")}${addAttribute(recette.nom, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"> <!-- Overlay coloré --> <div${addAttribute(`absolute inset-0 ${joursColors[jour]} opacity-20`, "class")}></div> <!-- Bouton favori --> <button type="button" class="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow js-favori-btn"${addAttribute(recette.id, "data-id")} aria-label="Ajouter aux favoris"> <svg xmlns="http://www.w3.org/2000/svg"${addAttribute(recette.isFavorite ? "red" : "none", "fill")} viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 text-gray-600"${addAttribute(recette.isFavorite ? "color: red;" : "", "style")}> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path> </svg> </button> </div> <!-- Informations de la recette --> <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4"> <h3 class="text-white font-bold text-lg uppercase mb-1"> ${recette.nom} </h3> <div class="flex items-center text-white/80 text-sm"> <span>⏱️ ${recette.temps_preparation || "30 min"}</span> ${recette.categorie && renderTemplate`<span class="ml-2 px-2 py-1 bg-white/20 rounded text-xs uppercase"> ${recette.categorie} </span>`} </div> </div> <!-- Lien vers la recette --> <a${addAttribute(`/recette-plat/${recette.id}`, "href")} class="absolute inset-0"${addAttribute(`Voir la recette ${recette.nom}`, "aria-label")}></a> </div>`;
  }) || // Placeholder si pas assez de recettes
  Array.from({ length: 4 }, (_, i) => renderTemplate`<div${addAttribute(`aspect-square rounded-lg ${joursColors[jour]} opacity-30 flex items-center justify-center`, "class")}> <div class="text-white text-center"> <div class="text-4xl mb-2">🍽️</div> <p class="text-sm">Recette à venir</p> </div> </div>`)} </div> </section>`)} </div> <!-- Section CTA --> <section class="mt-16 text-center bg-gray-50 rounded-lg p-8"> <h2 class="text-2xl md:text-3xl font-bold mb-4">
Planifiez vos repas de la semaine
</h2> <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
Découvrez notre sélection hebdomadaire de recettes soigneusement choisies pour vous offrir 
        une alimentation variée et équilibrée tout au long de la semaine.
</p> <div class="flex justify-center gap-4 flex-wrap"> <a href="/recette-plat" class="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-3 rounded-lg transition">
Voir toutes les recettes
</a> <a href="/favoris" class="inline-block bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-3 rounded-lg transition">
Mes favoris
</a> </div> </section> </main> ` })} ${renderScript($$result, "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/menu-semaine.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/menu-semaine.astro", void 0);

const $$file = "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/menu-semaine.astro";
const $$url = "/menu-semaine";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MenuSemaine,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
