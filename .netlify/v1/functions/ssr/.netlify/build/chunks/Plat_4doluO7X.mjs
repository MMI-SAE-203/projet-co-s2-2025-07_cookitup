import { c as createComponent, d as createAstro, m as maybeRenderHead, e as addAttribute, a as renderTemplate } from './astro/server_CmPnL_Nc.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Plat = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Plat;
  const {
    id = "1",
    nom = "Recette par d\xE9faut",
    img = "/placeholder.svg",
    temps_prep = "30 min",
    isFavorite = false,
    sponsorise = null,
    categorie = "plat",
    calories = null,
    regime = []
  } = Astro2.props;
  const imageUrl = img ? `http://127.0.0.1:8090/api/files/recettes/${id}/${img}` : "/placeholder.svg";
  const categorieColors = {
    entree: "bg-green-100 text-green-800",
    plat: "bg-blue-100 text-blue-800",
    dessert: "bg-purple-100 text-purple-800"
  };
  const categorieColor = categorieColors[categorie?.toLowerCase()] || "bg-gray-100 text-gray-800";
  return renderTemplate`${maybeRenderHead()}<div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow card-recette"${addAttribute(categorie, "data-categorie")}${addAttribute(calories, "data-calories")}${addAttribute(regime ? regime.join(",") : "", "data-regime")}> <div class="relative"> <img${addAttribute(imageUrl || "/placeholder.svg", "src")}${addAttribute(nom, "alt")} class="w-full h-48 object-cover"> ${sponsorise && renderTemplate`<div class="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded text-xs font-bold">
SPONSORISÉ
</div>`} <!-- Badge catégorie --> ${categorie && renderTemplate`<div${addAttribute(`absolute bottom-2 left-2 ${categorieColor} px-2 py-1 rounded text-xs font-bold uppercase`, "class")}> ${categorie} </div>`} <!-- ✅ BOUTON FAVORI CORRIGÉ --> <button type="button" class="absolute top-2 right-2 text-white bg-black/40 hover:bg-black/60 p-2 rounded-full js-favori-btn transition-all duration-200"${addAttribute(id, "data-id")}${addAttribute(isFavorite ? "Retirer des favoris" : "Ajouter aux favoris", "aria-label")}> <svg xmlns="http://www.w3.org/2000/svg"${addAttribute(isFavorite ? "red" : "none", "fill")} viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6"${addAttribute(isFavorite ? "color: red;" : "color: white;", "style")}> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path> </svg> </button> </div> <div class="p-4"> <h3 class="font-bold text-lg mb-2 uppercase card-title">${nom}</h3> <div class="space-y-2 text-sm text-gray-600 mb-3"> <div class="flex justify-between items-center"> <span>⏱️ ${temps_prep}</span> ${calories && renderTemplate`<span class="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">
🔥 ${calories} cal
</span>`} </div> ${regime && regime.length > 0 && renderTemplate`<div class="flex flex-wrap gap-1"> ${regime.map((regimeType) => {
    const regimeConfig = {
      v\u00E9g\u00E9tarien: {
        icon: "\u{1F331}",
        color: "bg-green-100 text-green-800"
      },
      v\u00E9gan: {
        icon: "\u{1F33F}",
        color: "bg-green-100 text-green-800"
      },
      "sans-gluten": {
        icon: "\u{1F33E}",
        color: "bg-blue-100 text-blue-800"
      },
      halal: {
        icon: "\u262A\uFE0F",
        color: "bg-purple-100 text-purple-800"
      }
    };
    const config = regimeConfig[regimeType] || {
      icon: "\u{1F37D}\uFE0F",
      color: "bg-gray-100 text-gray-800"
    };
    return renderTemplate`<span${addAttribute(`${config.color} px-2 py-1 rounded text-xs font-medium`, "class")}> ${config.icon} ${regimeType} </span>`;
  })} </div>`} ${isFavorite && renderTemplate`<span class="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">
❤️ Favoris
</span>`} </div> <a${addAttribute(`/recette-plat/${id}`, "href")} class="block mt-3 bg-yellow-500 hover:bg-yellow-600 text-white text-center py-2 rounded transition font-medium">
VOIR LA RECETTE
</a> </div> </div>`;
}, "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/components/Plat.astro", void 0);

export { $$Plat as $ };
