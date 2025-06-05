import { c as createComponent, r as renderComponent, b as renderScript, a as renderTemplate, f as defineScriptVars, e as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_CfTmU_QD.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BaAgPpdC.mjs';
import { $ as $$Hero } from '../chunks/Hero_EQi9n1wd.mjs';
import { b as getAllPartenaires } from '../chunks/backend_B6EQEUu_.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Partenaires = createComponent(async ($$result, $$props, $$slots) => {
  let partenaires = [];
  let totalPartenaires = 0;
  let reductionMoyenne = 0;
  let errorMessage = null;
  try {
    console.log("\u{1F3EA} Chargement des partenaires depuis PocketBase...");
    partenaires = await getAllPartenaires();
    console.log("\u{1F4CA} Partenaires r\xE9cup\xE9r\xE9s:", partenaires);
    totalPartenaires = partenaires.length;
    if (partenaires.length > 0) {
      const reductions = partenaires.map((p) => parseInt(p.reduction?.replace("%", "") || "0")).filter((r) => r > 0);
      reductionMoyenne = reductions.length > 0 ? Math.round(reductions.reduce((sum, r) => sum + r, 0) / reductions.length) : 0;
      console.log(`\u2705 ${totalPartenaires} partenaires charg\xE9s, r\xE9duction moyenne: ${reductionMoyenne}%`);
    } else {
      console.warn("\u26A0\uFE0F Aucun partenaire r\xE9cup\xE9r\xE9");
    }
  } catch (error) {
    console.error("\u274C Erreur lors du chargement des partenaires:", error);
    errorMessage = error.message || "Erreur inconnue";
    partenaires = [
      {
        id: "fallback-1",
        nom: "Exemple Partenaire",
        description: "Donn\xE9es de d\xE9monstration",
        adresse: "123 Rue Example, 75001 Paris",
        latitude: 48.8566,
        longitude: 2.3522,
        ville: "Paris",
        code_postal: "75001",
        telephone: "01 23 45 67 89",
        horaires: "Lun-Sam: 9h-19h",
        reduction: "10%",
        code_promo: "DEMO10",
        validite_offre: "31/12/2024",
        categories: ["\xC9picerie"],
        logo: null,
        image: null
      }
    ];
    totalPartenaires = 1;
    reductionMoyenne = 10;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nos Partenaires | Cookit-UP" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template(['  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">  ', `<div id="loadingState" class="min-h-screen flex items-center justify-center bg-gray-50"> <div class="text-center"> <div class="text-4xl mb-4">\u23F3</div> <h2 class="text-xl font-bold mb-2">V\xE9rification de votre acc\xE8s...</h2> <p class="text-gray-600">Chargement des partenaires...</p> </div> </div>  <div id="notLoggedInState" class="min-h-screen bg-gray-50 py-12 hidden"> <div class="max-w-4xl mx-auto px-6 text-center"> <div class="bg-white rounded-lg shadow-lg p-12"> <div class="text-6xl mb-6">\u{1F512}</div> <h1 class="text-3xl font-bold mb-4">Connexion requise</h1> <p class="text-gray-600 mb-8 text-lg">
Vous devez \xEAtre connect\xE9 pour acc\xE9der \xE0 la page des partenaires et d\xE9couvrir nos offres exclusives.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="/connexion" class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-8 py-4 rounded-lg transition transform hover:scale-105">
\u{1F511} Se connecter
</a> <a href="/inscription" class="bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white font-bold px-8 py-4 rounded-lg transition transform hover:scale-105">
\u{1F4DD} Cr\xE9er un compte
</a> </div> </div> </div> </div>  <div id="noCookupPassState" class="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 py-12 hidden"> <div class="max-w-6xl mx-auto px-6"> <!-- Hero Section pour non-abonn\xE9s --> <div class="text-center mb-12"> <div class="text-6xl mb-6">\u2B50</div> <h1 class="text-4xl md:text-5xl font-bold mb-4">Pass Cookup requis</h1> <p class="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
Les r\xE9ductions partenaires sont une fonctionnalit\xE9 exclusive du <strong>Pass Cookup</strong>. 
                    D\xE9bloquez l'acc\xE8s \xE0 tous nos partenaires et \xE9conomisez sur vos courses !
</p> </div> <!-- Carte des partenaires (verrouill\xE9e) --> <div class="mb-12"> <h2 class="text-2xl font-bold mb-6 text-center">Localisation de nos partenaires</h2> <div class="relative bg-white rounded-lg shadow-lg overflow-hidden"> <!-- Overlay de verrouillage sur la carte --> <div class="absolute inset-0 bg-black/60 z-20 flex items-center justify-center"> <div class="text-center text-white"> <div class="text-6xl mb-4">\u{1F512}</div> <h3 class="text-2xl font-bold mb-2">Carte verrouill\xE9e</h3> <p class="text-lg mb-4">Pass Cookup requis pour voir les emplacements</p> <button onclick="window.location.href = '/pass-cookup'" class="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold px-6 py-3 rounded-lg hover:from-yellow-500 hover:to-orange-600 transition">
\u2B50 D\xE9bloquer la carte
</button> </div> </div> <!-- Carte flout\xE9e --> <div id="lockedMap" class="h-96 filter blur-sm"></div> </div> </div> <!-- CTA Pass Cookup --> <div class="text-center"> <div class="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg p-8 text-white"> <h2 class="text-3xl font-bold mb-4">D\xE9bloquez tous les avantages !</h2> <p class="text-lg mb-6 opacity-90">
Rejoignez le Pass Cookup et commencez \xE0 \xE9conomiser d\xE8s aujourd'hui
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="/pass-cookup" class="bg-white text-orange-500 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition transform hover:scale-105">
\u2B50 D\xE9couvrir le Pass Cookup
</a> <button onclick="window.location.href = '/profil'" class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-500 font-bold px-8 py-4 rounded-lg transition transform hover:scale-105">
\u{1F464} Mon profil
</button> </div> </div> </div> </div> </div>  <div id="mainContent" class="hidden"> <!-- Hero Section --> `, ' <!-- Section Carte Interactive --> <section id="carte-section" class="py-16 px-6 bg-gray-50"> <div class="max-w-6xl mx-auto"> <div class="text-center mb-8"> <h2 class="text-3xl md:text-4xl font-bold mb-4">Trouvez nos partenaires pr\xE8s de chez vous</h2> <p class="text-gray-600 text-lg">\nD\xE9couvrez tous nos magasins partenaires sur la carte interactive\n</p> </div> <!-- Contr\xF4les de la carte --> <div class="mb-6 flex flex-wrap gap-4 justify-center"> <select id="mapCategorieFilter" class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"> <option value="tous">Toutes les cat\xE9gories</option> <option value="\xC9picerie">\xC9picerie</option> <option value="Bio">Bio</option> <option value="Boucherie">Boucherie</option> <option value="Boulangerie">Boulangerie</option> <option value="Poissonnerie">Poissonnerie</option> <option value="Fruits et L\xE9gumes">Fruits et L\xE9gumes</option> <option value="Traditionnel">Traditionnel</option> </select> <select id="mapVilleFilter" class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"> <option value="tous">Toutes les villes</option> ', ' </select> <button id="centerMapBtn" class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-4 py-2 rounded-lg transition">\n\u{1F3AF} Centrer la carte\n</button> <button id="locateUserBtn" class="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-lg transition">\n\u{1F4CD} Ma position\n</button> </div> <!-- Carte --> <div class="bg-white rounded-lg shadow-lg overflow-hidden"> <div id="map" class="h-96 md:h-[500px] w-full"></div> </div> <!-- L\xE9gende --> <div class="mt-6 bg-white rounded-lg shadow p-6"> <h3 class="text-lg font-bold mb-4">L\xE9gende</h3> <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm"> <div class="flex items-center"> <div class="w-4 h-4 bg-red-500 rounded-full mr-2"></div> <span>\xC9picerie</span> </div> <div class="flex items-center"> <div class="w-4 h-4 bg-green-500 rounded-full mr-2"></div> <span>Bio</span> </div> <div class="flex items-center"> <div class="w-4 h-4 bg-blue-500 rounded-full mr-2"></div> <span>Produits frais</span> </div> <div class="flex items-center"> <div class="w-4 h-4 bg-purple-500 rounded-full mr-2"></div> <span>Surgel\xE9s</span> </div> </div> </div> </div> </section> <!-- Section Liste des partenaires --> <section id="partenaires-section" class="py-16 px-6 bg-white"> <div class="max-w-6xl mx-auto"> <div class="flex justify-between items-center mb-8"> <h2 class="text-3xl md:text-4xl font-bold">Nos partenaires</h2> <div class="text-sm text-gray-600"> ', ' partenaires disponibles\n</div> </div> <!-- Badge Pass Cookup actif --> <div class="mb-8 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4"> <div class="flex items-center justify-center"> <div class="text-2xl mr-3">\u2705</div> <div> <h3 class="font-bold text-green-800">Pass Cookup actif</h3> <p class="text-sm text-green-600">Vous avez acc\xE8s \xE0 toutes les r\xE9ductions partenaires !</p> </div> </div> </div> <!-- Grille des partenaires --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="partenairesList"> ', " </div> <!-- Message si aucun partenaire --> ", " </div> </section> </div>  ", "  <script>(function(){", "\n        // Les donn\xE9es des partenaires sont maintenant disponibles dans la variable partenairesData\n        window.partenairesData = partenairesData;\n    })();<\/script> "])), maybeRenderHead(), renderComponent($$result2, "Hero", $$Hero, { "title": "Nos Partenaires", "subtitle": "DECOUVREZ", "description": "BENEFICIEZ DE REDUCTIONS EXCLUSIVES CHEZ NOS PARTENAIRES POUR VOS COURSES ALIMENTAIRES", "backgroundImage": "/images/hero_partenaires.webp", "stats": [
    { number: totalPartenaires.toString(), label: "Partenaires", icon: "\u{1F3EA}" },
    { number: reductionMoyenne.toString() + "%", label: "R\xE9duction moyenne", icon: "\u{1F4B0}" },
    { number: "50+", label: "Magasins", icon: "\u{1F4CD}" },
    { number: "100%", label: "Gratuit", icon: "\u{1F381}" }
  ] }, { "default": async ($$result3) => renderTemplate`  <div class="flex flex-col sm:flex-row gap-4 justify-center mt-8"> <button class="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 rounded-lg transition transform hover:scale-105 shadow-lg" onclick="document.getElementById('carte-section').scrollIntoView({ behavior: 'smooth' })">
🗺️ Voir la carte
</button> <button class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold px-8 py-4 rounded-lg transition transform hover:scale-105" onclick="document.getElementById('partenaires-section').scrollIntoView({ behavior: 'smooth' })">
🏪 Liste des partenaires
</button> </div> ` }), [...new Set(partenaires.map((p) => p.ville))].map((ville) => renderTemplate`<option${addAttribute(ville, "value")}>${ville}</option>`), totalPartenaires, partenaires.map((partenaire) => renderTemplate`<div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow partenaire-card"${addAttribute(Array.isArray(partenaire.categories) ? partenaire.categories.join(",") : "", "data-categories")}${addAttribute(parseInt(partenaire.reduction?.replace("%", "") || "0"), "data-reduction")}${addAttribute(partenaire.id, "data-id")}${addAttribute(partenaire.latitude, "data-lat")}${addAttribute(partenaire.longitude, "data-lng")}> <div class="p-6"> <!-- Logo, nom et badges --> <div class="flex items-center justify-between mb-4"> <div class="flex items-center"> ${partenaire.logo && renderTemplate`<img${addAttribute(partenaire.logo || "/placeholder.svg", "src")}${addAttribute(`Logo ${partenaire.nom}`, "alt")} class="h-16 w-auto mr-4">`} <div> <h3 class="text-xl font-bold">${partenaire.nom}</h3> <p class="text-sm text-gray-500">${partenaire.ville} (${partenaire.code_postal})</p> </div> </div> <!-- Badges déplacés --> <div class="flex flex-col gap-2"> ${partenaire.reduction && renderTemplate`<div class="bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm">
-${partenaire.reduction} </div>`} <div class="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-bold">
✅ ACTIF
</div> </div> </div> <!-- Description --> <p class="text-gray-600 mb-4 text-sm leading-relaxed"> ${partenaire.description} </p> <!-- Offre débloquée --> ${partenaire.reduction && partenaire.code_promo && renderTemplate`<div class="bg-green-50 border border-green-200 rounded-lg p-4 mb-4"> <div class="flex items-center justify-between mb-2"> <span class="text-2xl font-bold text-green-600"> ${partenaire.reduction} </span> ${partenaire.validite_offre && renderTemplate`<span class="text-xs text-gray-500">
Valide jusqu'au ${partenaire.validite_offre} </span>`} </div> <div class="bg-white border border-dashed border-green-400 rounded p-2 text-center"> <span class="text-xs text-gray-500">Code promo :</span> <span class="font-mono font-bold text-green-600 ml-1 promo-code"> ${partenaire.code_promo} </span> </div> </div>`} <!-- Catégories --> ${Array.isArray(partenaire.categories) && partenaire.categories.length > 0 && renderTemplate`<div class="flex flex-wrap gap-1 mb-4"> ${partenaire.categories.map((categorie) => renderTemplate`<span class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"> ${categorie} </span>`)} </div>`} <!-- Informations pratiques --> <div class="space-y-2 text-sm text-gray-600 mb-4"> <div class="flex items-start"> <span class="mr-2">📍</span> <span>${partenaire.adresse}</span> </div> ${partenaire.telephone && renderTemplate`<div class="flex items-center"> <span class="mr-2">📞</span> <a${addAttribute(`tel:${partenaire.telephone}`, "href")} class="hover:text-blue-600"> ${partenaire.telephone} </a> </div>`} ${partenaire.horaires && renderTemplate`<div class="flex items-start"> <span class="mr-2">🕒</span> <span>${partenaire.horaires}</span> </div>`} ${partenaire.region && renderTemplate`<div class="flex items-center"> <span class="mr-2">🗺️</span> <span>${partenaire.region}</span> </div>`} </div> <!-- Actions --> <div class="flex gap-2"> ${partenaire.code_promo && renderTemplate`<button class="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition"${addAttribute(`copyPromoCode('${partenaire.code_promo}')`, "onclick")}>
📋 Copier le code
</button>`} <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition"${addAttribute(`showOnMap('${partenaire.id}')`, "onclick")}>
🗺️
</button> </div> </div> </div>`), partenaires.length === 0 && renderTemplate`<div class="text-center py-12"> <div class="text-6xl mb-4">🏪</div> <h3 class="text-xl font-bold mb-2">Aucun partenaire disponible</h3> <p class="text-gray-600">Les partenaires seront bientôt ajoutés !</p> </div>`, renderScript($$result2, "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/partenaires.astro?astro&type=script&index=0&lang.ts"), defineScriptVars({ partenairesData: partenaires })) })} ${errorMessage && renderTemplate`<div class="fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 max-w-md"> <div class="flex items-center"> <span class="mr-2">⚠️</span> <span>Erreur: ${errorMessage}</span> </div> </div>`} ${renderScript($$result, "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/partenaires.astro?astro&type=script&index=1&lang.ts")}`;
}, "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/partenaires.astro", void 0);

const $$file = "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/partenaires.astro";
const $$url = "/partenaires";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Partenaires,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
