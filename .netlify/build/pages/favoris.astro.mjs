import { c as createComponent, r as renderComponent, b as renderScript, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CfTmU_QD.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_KgNoU2jj.mjs';
export { renderers } from '../renderers.mjs';

const $$Favoris = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Mes Recettes Favorites" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-6xl mx-auto px-4 py-8"> <div class="flex justify-between items-center mb-8"> <h1 class="text-3xl font-bold">Mes Recettes Favorites</h1> <a href="/recette-plat" class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition">
Retour aux recettes
</a> </div> <!-- État de chargement --> <div id="loadingState" class="text-center py-16"> <div class="text-4xl mb-4">⏳</div> <h2 class="text-xl font-bold mb-2">Chargement...</h2> <p class="text-gray-600">Vérification de votre connexion...</p> </div> <!-- État non connecté --> <div id="notLoggedInState" class="text-center py-16 bg-gray-50 rounded-lg hidden"> <div class="text-6xl mb-4">🔒</div> <h2 class="text-2xl font-bold mb-2">
Connectez-vous pour voir vos favoris
</h2> <p class="text-gray-600 mb-6">
Vous devez être connecté pour accéder à vos recettes favorites.
</p> <a href="/connexion" class="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-3 rounded-lg transition">
Se connecter
</a> </div> <!-- Contenu principal --> <div id="mainContent" class="hidden"> <!-- Onglets de catégories --> <div class="mb-8 border-b border-gray-200"> <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="categoriesTabs" role="tablist"> <li class="mr-2" role="presentation"> <button class="inline-block p-4 border-b-2 border-yellow-500 rounded-t-lg active" id="all-tab" data-tabs-target="#all" type="button" role="tab" aria-controls="all" aria-selected="true">
Tous (<span id="allCount">0</span>)
</button> </li> <li class="mr-2" role="presentation"> <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:border-gray-300" id="entrees-tab" data-tabs-target="#entrees" type="button" role="tab" aria-controls="entrees" aria-selected="false">
Entrées (<span id="entreesCount">0</span>)
</button> </li> <li class="mr-2" role="presentation"> <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:border-gray-300" id="plats-tab" data-tabs-target="#plats" type="button" role="tab" aria-controls="plats" aria-selected="false">
Plats (<span id="platsCount">0</span>)
</button> </li> <li class="mr-2" role="presentation"> <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:border-gray-300" id="desserts-tab" data-tabs-target="#desserts" type="button" role="tab" aria-controls="desserts" aria-selected="false">
Desserts (<span id="dessertsCount">0</span>)
</button> </li> </ul> </div> <!-- Contenu des onglets --> <div id="categoriesContent"> <!-- Tous les favoris --> <div class="block" id="all" role="tabpanel" aria-labelledby="all-tab"> <div id="allFavorites" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"></div> </div> <!-- Entrées --> <div class="hidden" id="entrees" role="tabpanel" aria-labelledby="entrees-tab"> <div id="entreesFavorites" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"></div> </div> <!-- Plats --> <div class="hidden" id="plats" role="tabpanel" aria-labelledby="plats-tab"> <div id="platsFavorites" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"></div> </div> <!-- Desserts --> <div class="hidden" id="desserts" role="tabpanel" aria-labelledby="desserts-tab"> <div id="dessertsFavorites" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"></div> </div> </div> <!-- État vide --> <div id="emptyState" class="text-center py-16 bg-gray-50 rounded-lg hidden"> <div class="text-6xl mb-4">❤️</div> <h2 class="text-2xl font-bold mb-2">Aucune recette favorite</h2> <p class="text-gray-600 mb-6">
Vous n'avez pas encore ajouté de recettes à vos favoris.
</p> <a href="/recette-plat" class="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-3 rounded-lg transition">
Découvrir des recettes
</a> </div> <!-- Section d'aide --> <div class="mt-16 p-6 bg-green-50 rounded-lg border border-green-100"> <h2 class="text-xl font-bold mb-4">
Comment gérer vos favoris ?
</h2> <ul class="space-y-2 text-gray-700"> <li class="flex items-start"> <span class="text-green-500 mr-2">•</span> <span>Cliquez sur l'icône ❤️ sur une recette pour
                            l'ajouter ou la retirer de vos favoris</span> </li> <li class="flex items-start"> <span class="text-green-500 mr-2">•</span> <span>Retrouvez toutes vos recettes favorites sur cette
                            page</span> </li> <li class="flex items-start"> <span class="text-green-500 mr-2">•</span> <span>Utilisez les onglets pour filtrer par type de plat</span> </li> </ul> </div> </div> </main> ` })} ${renderScript($$result, "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/favoris.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/favoris.astro", void 0);

const $$file = "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/favoris.astro";
const $$url = "/favoris";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Favoris,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
