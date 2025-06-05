import { c as createComponent, d as createAstro, m as maybeRenderHead, e as addAttribute, a as renderTemplate } from './astro/server_CfTmU_QD.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Plat = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Plat;
  const {
    id,
    nom,
    img,
    temps_prep,
    isFavorite = false,
    sponsorise = false,
    categorie = "",
    calories = "",
    regime = "",
    ingredients = "",
    preparation = "",
    commentaire = ""
  } = Astro2.props;
  const imageUrl = img || "/placeholder.svg?height=300&width=400&text=" + encodeURIComponent(nom);
  let badgeClass = "bg-gray-500";
  let categorieIcon = "";
  let categorieText = "";
  if (categorie) {
    const cat = categorie.toLowerCase();
    if (cat === "entree") {
      badgeClass = "bg-green-500";
      categorieIcon = "\u{1F957}";
      categorieText = "Entr\xE9e";
    } else if (cat === "plat") {
      badgeClass = "bg-red-500";
      categorieIcon = "\u{1F37D}\uFE0F";
      categorieText = "Plat";
    } else if (cat === "dessert") {
      badgeClass = "bg-purple-500";
      categorieIcon = "\u{1F370}";
      categorieText = "Dessert";
    }
  }
  let regimeIcon = "";
  if (regime && Array.isArray(regime) && regime.length > 0) {
    const firstRegime = regime[0];
    if (typeof firstRegime === "string") {
      if (firstRegime.toLowerCase().includes("v\xE9g\xE9tarien")) regimeIcon = "\u{1F331}";
      else if (firstRegime.toLowerCase().includes("v\xE9gan")) regimeIcon = "\u{1F33F}";
      else if (firstRegime.toLowerCase().includes("sans gluten"))
        regimeIcon = "\u{1F33E}";
      else if (firstRegime.toLowerCase().includes("halal")) regimeIcon = "\u262A\uFE0F";
    }
  } else if (regime && typeof regime === "string" && regime !== "Select -") {
    if (regime.toLowerCase().includes("v\xE9g\xE9tarien")) regimeIcon = "\u{1F331}";
    else if (regime.toLowerCase().includes("v\xE9gan")) regimeIcon = "\u{1F33F}";
    else if (regime.toLowerCase().includes("sans gluten")) regimeIcon = "\u{1F33E}";
    else if (regime.toLowerCase().includes("halal")) regimeIcon = "\u262A\uFE0F";
  }
  let ingredientsText = "";
  if (ingredients) {
    if (Array.isArray(ingredients)) {
      ingredientsText = ingredients.join(", ");
    } else {
      ingredientsText = ingredients.toString();
    }
  }
  const showCalories = calories && calories !== "0" && calories !== 0;
  console.log(`\u{1F5BC}\uFE0F Plat ${nom} - Image URL:`, imageUrl);
  return renderTemplate`${maybeRenderHead()}<div class="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group h-full max-h-[360px]"${addAttribute(categorie, "data-categorie")}${addAttribute(ingredientsText, "data-ingredients")}${addAttribute(calories, "data-calories")}${addAttribute(regime, "data-regime")}${addAttribute(preparation, "data-preparation")}${addAttribute(commentaire, "data-commentaire")}> <!-- Image avec overlay --> <div class="aspect-square w-full h-48 relative overflow-hidden"> <img${addAttribute(imageUrl || "/placeholder.svg", "src")}${addAttribute(nom, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" onerror="this.src='/placeholder.svg?height=300&width=400&text=Image+non+disponible'"> <!-- Overlay sombre pour meilleure lisibilité --> <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div> <!-- Badge sponsorisé --> ${sponsorise && renderTemplate`<div class="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
Sponsorisé
</div>`} <!-- Badge catégorie avec icône --> ${categorie && renderTemplate`<div${addAttribute(`absolute top-2 right-12 ${badgeClass} text-white text-xs px-2 py-1 rounded-full flex items-center gap-1`, "class")}> <span>${categorieIcon}</span> <span>${categorieText}</span> </div>`} <!-- Bouton favori - Positionné en haut à droite avec z-index élevé --> <button type="button" class="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow js-favori-btn z-20"${addAttribute(id, "data-id")}${addAttribute(isFavorite ? "Retirer des favoris" : "Ajouter aux favoris", "aria-label")} onclick="event.stopPropagation(); event.preventDefault();"> <svg xmlns="http://www.w3.org/2000/svg"${addAttribute(isFavorite ? "red" : "none", "fill")} viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5"${addAttribute(isFavorite ? "color: red;" : "color: #666;", "style")}> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path> </svg> </button> </div> <!-- Informations de la recette --> <div class="p-3 bg-white"> <h3 class="font-bold text-gray-800 mb-1 line-clamp-1">${nom}</h3> <div class="flex flex-wrap items-center text-sm text-gray-600 gap-2"> <!-- Temps de préparation --> <div class="flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> ${temps_prep || "30 min"} </div> <!-- Calories si disponible et > 0 --> ${showCalories && renderTemplate`<div class="flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path> </svg> ${calories} cal
</div>`} <!-- Régime si disponible --> ${regimeIcon && renderTemplate`<div class="flex items-center"> <span class="mr-1">${regimeIcon}</span> ${Array.isArray(regime) && regime.length > 0 ? regime[0] : regime} </div>`} </div> </div> <!-- Lien vers la recette (couvre toute la carte sauf le bouton favori) --> <a${addAttribute(`/recette-plat/${id}`, "href")} class="absolute inset-0 z-10"${addAttribute(`Voir la recette ${nom}`, "aria-label")}></a> </div>`;
}, "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/components/Plat.astro", void 0);

export { $$Plat as $ };
