import { c as createComponent, d as createAstro, r as renderComponent, b as renderScript, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_CmPnL_Nc.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_218_os4B.mjs';
import { c as getRecetteById, d as getRecettesSimilaires, a as getAllRecettes } from '../../chunks/backend_B6EQEUu_.mjs';
import { $ as $$Plat } from '../../chunks/Plat_D1npN_Vv.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  try {
    const recettes = await getAllRecettes();
    console.log(
      "\u{1F4CB} G\xE9n\xE9ration des pages statiques pour",
      recettes.length,
      "recettes"
    );
    return recettes.map((recette) => ({
      params: {
        id: recette.id
      },
      props: {
        recette
      }
    }));
  } catch (error) {
    console.error(
      "\u274C Erreur lors de la g\xE9n\xE9ration des chemins statiques:",
      error
    );
    return [];
  }
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const { recette: recetteProp } = Astro2.props;
  let recette;
  let recettesSimilaires = [];
  if (recetteProp) {
    recette = recetteProp;
    console.log("\u2705 Utilisation des donn\xE9es depuis getStaticPaths");
  } else {
    console.log("\u{1F4E1} R\xE9cup\xE9ration des donn\xE9es via API...");
    try {
      recette = await getRecetteById(id);
      if (!recette) {
        return Astro2.redirect("/recette-plat", 302);
      }
    } catch (error) {
      console.error("\u274C Erreur:", error);
      return Astro2.redirect("/recette-plat", 302);
    }
  }
  try {
    recettesSimilaires = await getRecettesSimilaires(id, 4);
  } catch (error) {
    console.error("\u274C Erreur recettes similaires:", error);
  }
  const imageUrl = recette.img ? `http://127.0.0.1:8090/api/files/recettes/${recette.id}/${recette.img}` : "/placeholder.svg";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative w-full h-[500px]"> <img${addAttribute(imageUrl || "/placeholder.svg", "src")}${addAttribute(recette.nom, "alt")} class="w-full h-full object-cover"> <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 flex items-center justify-center"> <div class="text-center text-white px-4"> <h1 class="text-4xl md:text-6xl font-bold mb-4 uppercase drop-shadow-lg"> ${recette.nom} </h1> <div class="flex justify-center gap-6 text-lg flex-wrap"> <span class="bg-black/30 backdrop-blur-sm px-3 py-1 rounded">⏱️ ${recette.temps_prep}</span> ${recette.calories && renderTemplate`<span class="bg-orange-500/80 backdrop-blur-sm px-3 py-1 rounded">
🔥 ${recette.calories} cal
</span>`} ${recette.categorie && renderTemplate`<span class="bg-blue-500/80 backdrop-blur-sm px-3 py-1 rounded">
📂 ${recette.categorie} </span>`} ${recette.regime && recette.regime.length > 0 && recette.regime.map((regimeType) => {
    const regimeConfig = {
      v\u00E9g\u00E9tarien: {
        icon: "\u{1F331}",
        color: "bg-green-500/80"
      },
      v\u00E9gan: {
        icon: "\u{1F33F}",
        color: "bg-green-500/80"
      },
      "sans-gluten": {
        icon: "\u{1F33E}",
        color: "bg-blue-500/80"
      },
      halal: {
        icon: "\u262A\uFE0F",
        color: "bg-purple-500/80"
      }
    };
    const config = regimeConfig[regimeType] || {
      icon: "\u{1F37D}\uFE0F",
      color: "bg-gray-500/80"
    };
    return renderTemplate`<span${addAttribute(`${config.color} backdrop-blur-sm px-3 py-1 rounded`, "class")}> ${config.icon} ${regimeType} </span>`;
  })} ${recette.isFavorite && renderTemplate`<span class="bg-red-500/80 backdrop-blur-sm px-3 py-1 rounded">
❤️ Favoris
</span>`} ${recette.expand?.sponsorise && renderTemplate`<span class="bg-yellow-500/80 backdrop-blur-sm px-3 py-1 rounded">
🌟 Sponsorisé
</span>`} </div> </div> </div> </section>  <div class="max-w-6xl mx-auto px-6 py-12"> <div class="grid grid-cols-1 lg:grid-cols-3 gap-12"> <!-- Ingrédients --> <div class="lg:col-span-1"> <div class="bg-gray-50 p-6 rounded-lg sticky top-6 space-y-6"> <!-- Informations nutritionnelles --> ${(recette.calories || recette.regime && recette.regime.length > 0) && renderTemplate`<div> <h3 class="text-lg font-bold mb-4">
INFORMATIONS NUTRITIONNELLES
</h3> ${recette.calories && renderTemplate`<div class="mb-4 p-3 bg-orange-50 border border-orange-200 rounded-lg"> <div class="flex items-center justify-between"> <span class="font-medium text-orange-800">
Calories
</span> <span class="text-xl font-bold text-orange-600">
🔥 ${recette.calories} </span> </div> </div>`} ${recette.regime && recette.regime.length > 0 && renderTemplate`<div> <h4 class="font-medium text-gray-700 mb-2">
REGIMES COMPATIBLES
</h4> <div class="space-y-2"> ${recette.regime.map(
    (regimeType) => {
      const regimeConfig = {
        v\u00E9g\u00E9tarien: {
          icon: "\u{1F331}",
          color: "bg-green-50 border-green-200 text-green-800",
          label: "VEGETARIEN"
        },
        v\u00E9gan: {
          icon: "\u{1F33F}",
          color: "bg-green-50 border-green-200 text-green-800",
          label: "VEGAN"
        },
        "sans-gluten": {
          icon: "\u{1F33E}",
          color: "bg-blue-50 border-blue-200 text-blue-800",
          label: "SANS GLUTEN"
        },
        halal: {
          icon: "\u262A\uFE0F",
          color: "bg-purple-50 border-purple-200 text-purple-800",
          label: "Halal"
        }
      };
      const config = regimeConfig[regimeType] || {
        icon: "\u{1F37D}\uFE0F",
        color: "bg-gray-50 border-gray-200 text-gray-800",
        label: regimeType
      };
      return renderTemplate`<div${addAttribute(`p-2 border rounded ${config.color}`, "class")}> <span class="font-medium"> ${config.icon}${" "} ${config.label} </span> </div>`;
    }
  )} </div> </div>`} </div>`} <!-- Ingrédients --> <div> <h2 class="text-2xl font-bold mb-6">INGREDIENTS</h2> ${recette.expand?.ingredients && recette.expand.ingredients.length > 0 ? renderTemplate`<ul class="space-y-3"> ${recette.expand.ingredients.map(
    (ingredient) => renderTemplate`<li class="flex items-center"> <span class="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span> <span> ${ingredient.nom || ingredient.name} </span> </li>`
  )} </ul>` : renderTemplate`<p class="text-gray-500">
Aucun ingrédient spécifié
</p>`} </div> </div> </div> <!-- Instructions --> <div class="lg:col-span-2"> <h2 class="text-2xl font-bold mb-6">PREPARATION</h2> <!-- Contenu des instructions avec gestion dynamique --> <div class="prose max-w-none"> <div class="text-gray-800 whitespace-pre-line leading-relaxed"> ${recette.preparation || "Instructions de pr\xE9paration non disponibles"} </div> </div> ${recette.expand?.sponsorise && renderTemplate`<div class="mt-12 p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg"> <h3 class="font-bold text-lg mb-3">
RECETTE SPONSORISEE
</h3> <p class="text-gray-700">
Cette recette est sponsorisée par${" "} ${recette.expand.sponsorise.nom || "notre partenaire"} </p> </div>`} </div> </div> </div>  <section class="py-8 px-6 border-t border-gray-200"> <div class="max-w-6xl mx-auto flex justify-center gap-4 flex-wrap"> <button class="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition font-medium js-favori-btn"${addAttribute(recette.id, "data-id")}> <svg class="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path> </svg> <span class="button-text"> ${recette.isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"} </span> </button> <button class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition font-medium" onclick="window.print()">
🖨️ Imprimer la recette
</button> <button class="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition font-medium" onclick="navigator.share ? navigator.share({title: document.title, url: window.location.href}) : navigator.clipboard.writeText(window.location.href)">
📤 Partager
</button> </div> </section>  <section class="bg-gray-50 py-12 px-6"> <div class="max-w-6xl mx-auto"> <div class="bg-white rounded-lg shadow-lg p-8"> <h2 class="text-2xl font-bold mb-8 flex items-center">
💬 Commentaires et avis
<span id="commentCount" class="ml-2 text-sm bg-gray-100 px-2 py-1 rounded-full">0</span> </h2> <!-- Formulaire d'ajout de commentaire --> <div id="commentForm" class="mb-8 p-6 bg-gray-50 rounded-lg"> <!-- État non connecté --> <div id="notLoggedComment" class="text-center py-8"> <div class="text-4xl mb-4">🔒</div> <h3 class="text-lg font-bold mb-2">
Connectez-vous pour laisser un avis
</h3> <p class="text-gray-600 mb-4">
Partagez votre expérience avec cette recette !
</p> <a href="/connexion" class="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-3 rounded-lg transition">
Se connecter
</a> </div> <!-- Formulaire pour utilisateur connecté --> <div id="loggedComment" class="hidden"> <h3 class="text-lg font-bold mb-4">
Laissez votre avis
</h3> <form id="addCommentForm" class="space-y-4"> <!-- Système de notation --> <div> <label class="block text-sm font-medium text-gray-700 mb-2">Note (optionnel)</label> <div class="flex items-center space-x-1" id="starRating"> <button type="button" class="star-btn text-2xl text-gray-300 hover:text-yellow-400 transition" data-rating="1">⭐</button> <button type="button" class="star-btn text-2xl text-gray-300 hover:text-yellow-400 transition" data-rating="2">⭐</button> <button type="button" class="star-btn text-2xl text-gray-300 hover:text-yellow-400 transition" data-rating="3">⭐</button> <button type="button" class="star-btn text-2xl text-gray-300 hover:text-yellow-400 transition" data-rating="4">⭐</button> <button type="button" class="star-btn text-2xl text-gray-300 hover:text-yellow-400 transition" data-rating="5">⭐</button> <span id="ratingText" class="ml-2 text-sm text-gray-600"></span> </div> <input type="hidden" id="selectedRating" value=""> </div> <!-- Commentaire --> <div> <label for="commentContent" class="block text-sm font-medium text-gray-700 mb-2">Votre commentaire</label> <textarea id="commentContent" rows="4" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none" placeholder="Partagez votre expérience avec cette recette..." required minlength="10" maxlength="1000"></textarea> <div class="flex justify-between text-xs text-gray-500 mt-1"> <span>Minimum 10 caractères</span> <span id="charCount">0/1000</span> </div> </div> <!-- Message d'erreur --> <div id="commentError" class="text-red-500 text-sm hidden"></div> <!-- Boutons --> <div class="flex gap-3"> <button type="submit" class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-2 rounded-lg transition" id="submitComment">
📝 Publier le commentaire
</button> <button type="button" class="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold px-6 py-2 rounded-lg transition" onclick="document.getElementById('addCommentForm').reset(); updateCharCount(); resetStars();">
🗑️ Effacer
</button> </div> </form> </div> </div> <!-- Liste des commentaires --> <div id="commentsList"> <!-- État de chargement --> <div id="commentsLoading" class="text-center py-8"> <div class="text-2xl mb-2">⏳</div> <p class="text-gray-600">
Chargement des commentaires...
</p> </div> <!-- État vide --> <div id="noComments" class="text-center py-12 hidden"> <div class="text-6xl mb-4">💭</div> <h3 class="text-xl font-bold mb-2">
Aucun commentaire pour le moment
</h3> <p class="text-gray-600">
Soyez le premier à partager votre avis sur cette
                            recette !
</p> </div> <!-- Commentaires --> <div id="commentsContainer" class="space-y-6 hidden"> <!-- Les commentaires seront ajoutés ici dynamiquement --> </div> </div> </div> </div> </section>  ${recettesSimilaires.length > 0 && renderTemplate`<section class="bg-gray-50 py-12 px-6"> <div class="max-w-6xl mx-auto"> <h2 class="text-2xl md:text-3xl font-bold mb-8">
RECETTES SIMILAIRES
</h2> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> ${recettesSimilaires.map((recette2) => renderTemplate`${renderComponent($$result2, "Plat", $$Plat, { "id": recette2.id, "nom": recette2.nom, "img": recette2.img, "temps_prep": recette2.temps_prep, "isFavorite": recette2.isFavorite, "sponsorise": recette2.expand?.sponsorise, "categorie": recette2.categorie })}`)} </div> </div> </section>`}` })} ${renderScript($$result, "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/recette-plat/[id].astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/recette-plat/[id].astro", void 0);

const $$file = "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/recette-plat/[id].astro";
const $$url = "/recette-plat/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
