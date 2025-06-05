import { c as createComponent, d as createAstro, m as maybeRenderHead, e as addAttribute, a as renderTemplate, r as renderComponent, b as renderScript } from '../chunks/astro/server_CfTmU_QD.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_D93dfYMT.mjs';
import { $ as $$Plat } from '../chunks/Plat_Ll2eTVGW.mjs';
import 'clsx';
import { $ as $$Hero } from '../chunks/Hero_EQi9n1wd.mjs';
import { a as getAllRecettes, e as getRecettesSponsors } from '../chunks/backend_B6EQEUu_.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$PlatFavoris = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PlatFavoris;
  const { id, nom, img, calories = "", regime = "" } = Astro2.props;
  const imageUrl = img || "/placeholder.svg";
  let regimeIcon = "";
  if (regime) {
    if (regime.toLowerCase().includes("v\xE9g\xE9tarien")) regimeIcon = "\u{1F331}";
    else if (regime.toLowerCase().includes("v\xE9gan")) regimeIcon = "\u{1F33F}";
    else if (regime.toLowerCase().includes("sans gluten")) regimeIcon = "\u{1F33E}";
    else if (regime.toLowerCase().includes("halal")) regimeIcon = "\u262A\uFE0F";
  }
  return renderTemplate`${maybeRenderHead()}<div class="relative flex-shrink-0 w-48 sm:w-56 snap-start rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"> <!-- Image avec overlay --> <div class="aspect-square w-full h-36 relative overflow-hidden"> <img${addAttribute(imageUrl, "src")}${addAttribute(nom, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy"> <!-- Overlay sombre pour meilleure lisibilité --> <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div> <!-- Bouton favori --> <button type="button" class="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow js-favori-btn"${addAttribute(id, "data-id")} aria-label="Ajouter aux favoris"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 text-gray-600"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path> </svg> </button> </div> <!-- Informations de la recette --> <div class="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent text-white"> <h3 class="font-bold text-sm mb-1 line-clamp-1">${nom}</h3> <div class="flex flex-wrap items-center text-xs gap-2"> <!-- Calories si disponible --> ${calories && renderTemplate`<div class="flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path> </svg> ${calories} </div>`} <!-- Régime si disponible --> ${regimeIcon && renderTemplate`<div class="flex items-center"> <span class="mr-1">${regimeIcon}</span> <span class="truncate max-w-[80px]">${regime}</span> </div>`} </div> </div> <!-- Lien vers la recette (couvre toute la carte) --> <a${addAttribute(`/recette-plat/${id}`, "href")} class="absolute inset-0 z-10"${addAttribute(`Voir la recette ${nom}`, "aria-label")}></a> </div>`;
}, "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/components/PlatFavoris.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  console.log("\u{1F680} D\xE9but du chargement de la page recettes...");
  let recettes = [];
  let recettesSponsors = [];
  try {
    console.log("\u{1F4E1} R\xE9cup\xE9ration des recettes...");
    recettes = await getAllRecettes();
    console.log("\u2705 Recettes r\xE9cup\xE9r\xE9es:", recettes.length);
    if (recettes.length > 0) {
      console.log("\u{1F4DD} Exemple de recette:", {
        id: recettes[0].id,
        nom: recettes[0].nom,
        img: recettes[0].img,
        temps_prep: recettes[0].temps_prep
      });
    }
    console.log("\u{1F31F} R\xE9cup\xE9ration des recettes sponsoris\xE9es...");
    recettesSponsors = await getRecettesSponsors();
    console.log(
      "\u2705 Recettes sponsoris\xE9es r\xE9cup\xE9r\xE9es:",
      recettesSponsors.length
    );
  } catch (error) {
    console.error("\u274C Erreur lors du chargement des donn\xE9es:", error);
    console.error("\u274C Message d'erreur:", error.message);
  }
  const totalRecettes = recettes.length;
  console.log("\u{1F4CA} R\xE9sum\xE9:");
  console.log("- Recettes totales:", totalRecettes);
  console.log("- Recettes sponsoris\xE9es:", recettesSponsors.length);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Nos Recettes", "subtitle": "DECOUVREZ", "description": "UNE COLLECTION DE RECETTES DELICIEUSES ET AUTHENTIQUES POUR TOUS LES GOUTS ET TOUTES LES OCCASIONS", "backgroundImage": "/placeholder.svg?height=600&width=1200", "stats": [
    { number: totalRecettes.toString(), label: "Recettes", icon: "\u{1F37D}\uFE0F" },
    { number: "12", label: "CATEGORIES", icon: "\u{1F4C2}" },
    { number: "4.8", label: "NOTE MOYENNE", icon: "\u2B50" },
    { number: "1000+", label: "Avis", icon: "\u{1F4AC}" }
  ] }, { "default": async ($$result3) => renderTemplate`  ${maybeRenderHead()}<div class="flex flex-col sm:flex-row gap-4 justify-center mt-8"> <button class="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 rounded-lg transition transform hover:scale-105 shadow-lg" onclick="document.getElementById('recettes-section').scrollIntoView({ behavior: 'smooth' })">
🔍 Explorer les recettes
</button> <button class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold px-8 py-4 rounded-lg transition transform hover:scale-105" onclick="window.location.href = '/favoris'">
❤️ Mes favoris
</button> </div> ` })}  <section class="bg-[#C2584F] text-white py-8 px-4 sm:px-6 relative"> <h2 class="text-xl md:text-3xl font-bold uppercase mb-6">
Recettes en vedette
</h2> <div class="flex gap-3 overflow-x-auto snap-x pb-4 -mx-1 px-1" id="vedettesContainer"> ${recettesSponsors.length > 0 ? recettesSponsors.slice(0, 6).map((plat) => renderTemplate`${renderComponent($$result2, "PlatFavoris", $$PlatFavoris, { "id": plat.id, "nom": plat.nom, "img": plat.img, "calories": plat.calories, "regime": plat.regime })}`) : recettes.slice(0, 6).map((plat) => renderTemplate`${renderComponent($$result2, "PlatFavoris", $$PlatFavoris, { "id": plat.id, "nom": plat.nom, "img": plat.img, "calories": plat.calories, "regime": plat.regime })}`)} </div> </section>  <section id="recettes-section" class="py-8 px-4 sm:px-6 max-w-7xl mx-auto"> <div class="flex justify-between items-center mb-4"> <h2 class="text-xl md:text-3xl font-bold">Toutes nos recettes</h2> <div class="text-sm text-gray-600"> <span id="recettesCount">${recettes.length}</span> recettes disponibles
</div> </div> <p class="mb-6 text-gray-600">
Choisissez parmi une grande liste de plats celui qui vous
            correspond, et lancez-vous !
</p> <!-- Barre de recherche et filtres --> <div class="mb-6 flex flex-col md:flex-row gap-3"> <div class="flex-1"> <input type="text" placeholder="Rechercher une recette..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" id="searchInput"> </div> <div class="flex gap-2 flex-wrap"> <!-- Filtre par catégorie --> <select class="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm" id="categorieSelect"> <option value="tous">Toutes les catégories</option> <option value="entree">Entrées</option> <option value="plat">Plats</option> <option value="dessert">Desserts</option> </select> <!-- Autres filtres --> <select class="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm" id="filterSelect"> <option value="tous">Tous les types</option> <option value="sponsorises">Sponsorisés</option> <option value="favoris">Favoris</option> </select> <!-- Tri --> <select class="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm" id="sortSelect"> <option value="default">Trier par</option> <option value="nom">Nom A-Z</option> <option value="recent">Plus récent</option> <option value="temps">Temps de préparation</option> </select> <!-- Filtre par régime --> <select class="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm" id="regimeSelect"> <option value="tous">Tous les régimes</option> <option value="végétarien">🌱 Végétarien</option> <option value="végan">🌿 Végan</option> <option value="sans-gluten">🌾 Sans gluten</option> <option value="halal">☪️ Halal</option> </select> </div> </div> <!-- Informations de pagination --> <div class="mb-4 flex justify-between items-center text-sm"> <div class="text-gray-600">
Affichage de <span id="currentRangeStart">1</span>-<span id="currentRangeEnd">12</span>
sur <span id="totalRecettes">${recettes.length}</span> recettes
</div> <div class="text-gray-600">
Page <span id="currentPageDisplay">1</span> sur <span id="totalPagesDisplay">1</span> </div> </div> <!-- Grille des recettes --> <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4" id="recettesGrid"> ${recettes.length > 0 ? recettes.map((plat) => renderTemplate`${renderComponent($$result2, "Plat", $$Plat, { "id": plat.id, "nom": plat.nom, "img": plat.img, "temps_prep": plat.temps_prep, "isFavorite": plat.isFavorite, "sponsorise": plat.expand?.sponsorise, "categorie": plat.categorie, "calories": plat.calories, "regime": plat.regime })}`) : renderTemplate`<div class="col-span-full text-center py-12 bg-gray-100 rounded-lg"> <h3 class="text-xl font-bold text-gray-800 mb-2">
Aucune recette trouvée
</h3> <p class="text-gray-600">
Vérifiez que PocketBase est démarré et contient des
                            données
</p> </div>`} </div> <!-- Pagination --> <div class="pagination-container mt-8"> <!-- La pagination sera générée dynamiquement --> </div> </section>  <section class="bg-green-600 text-white py-8 px-4 sm:px-6 text-center"> <h2 class="text-2xl md:text-3xl font-bold mb-4">
DECOUVREZ NOS RECETTES
</h2> <p class="mb-6">
Explorez notre collection de recettes delicieuses et faciles a
            realiser !
</p> <div class="flex justify-center gap-4 flex-wrap"> <a href="#recettesGrid" class="inline-block bg-white text-green-600 font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition">
Voir toutes les recettes
</a> <a href="/favoris" class="inline-block bg-red-500 text-white font-bold px-6 py-3 rounded-full hover:bg-red-600 transition">
Mes recettes favorites
</a> </div> </section> ` })} ${renderScript($$result, "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/recette-plat/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/recette-plat/index.astro", void 0);

const $$file = "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/recette-plat/index.astro";
const $$url = "/recette-plat";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
