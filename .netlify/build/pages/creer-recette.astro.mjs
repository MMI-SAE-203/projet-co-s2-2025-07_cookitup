import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as renderScript } from '../chunks/astro/server_CfTmU_QD.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BngmRMf4.mjs';
import { $ as $$Hero } from '../chunks/Hero_EQi9n1wd.mjs';
export { renderers } from '../renderers.mjs';

const $$CreerRecette = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cr\xE9er une recette - Cookit-UP" }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Cr\xE9er une nouvelle recette", "subtitle": "Partagez vos cr\xE9ations culinaires", "description": "Compl\xE9tez le formulaire ci-dessous pour partager votre recette avec la communaut\xE9 Cookit-UP.", "backgroundImage": "/placeholder.svg?height=400&width=1200&text=Cr\xE9ation+de+recette", "centered": true })}  ${maybeRenderHead()}<div id="loginRequired" class="hidden bg-red-50 border border-red-200 rounded-lg p-6 max-w-4xl mx-auto mt-8"> <div class="text-center"> <h2 class="text-2xl font-semibold text-red-800 mb-4">
Connexion requise
</h2> <p class="text-red-600 mb-6">
Vous devez être connecté pour créer une recette.
</p> <div class="space-x-4"> <a href="/connexion" class="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">
Se connecter
</a> <a href="/inscription" class="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition">
S'inscrire
</a> </div> </div> </div>  <div id="recetteForm" class="max-w-4xl mx-auto px-4 py-8"> <form id="createRecetteForm" class="space-y-8"> <!-- Informations de base --> <div class="bg-white rounded-lg shadow-md p-6"> <h2 class="text-2xl font-semibold mb-6 text-gray-800">
Informations générales
</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <!-- Nom de la recette --> <div class="md:col-span-2"> <label for="nom" class="block text-sm font-medium text-gray-700 mb-2">
Nom de la recette *
</label> <input type="text" id="nom" name="nom" required maxlength="100" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent" placeholder="Ex: Pâtes à la carbonara"> </div> <!-- Image --> <div class="md:col-span-2"> <label for="img" class="block text-sm font-medium text-gray-700 mb-2">
Photo de la recette
</label> <input type="file" id="img" name="img" accept="image/*" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"> <p class="text-sm text-gray-500 mt-1">
Formats acceptés: JPG, PNG, WebP (max 5MB)
</p> </div> <!-- Temps de préparation --> <div> <label for="temps_prep" class="block text-sm font-medium text-gray-700 mb-2">
Temps de préparation *
</label> <input type="text" id="temps_prep" name="temps_prep" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent" placeholder="Ex: 30 minutes"> <p class="text-sm text-gray-500 mt-1">
Exemple: 30 minutes, 1h30, etc.
</p> </div> <!-- Catégorie --> <div> <label for="categorie" class="block text-sm font-medium text-gray-700 mb-2">
Catégorie *
</label> <select id="categorie" name="categorie" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"> <option value="">Choisir une catégorie</option> <option value="entree">Entrée</option> <option value="plat">Plat principal</option> <option value="dessert">Dessert</option> </select> </div> <!-- Calories --> <div> <label for="calories" class="block text-sm font-medium text-gray-700 mb-2">
Calories (optionnel)
</label> <input type="number" id="calories" name="calories" min="1" max="5000" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent" placeholder="250"> </div> </div> <!-- Régimes alimentaires --> <div class="mt-6"> <label class="block text-sm font-medium text-gray-700 mb-3">
Régimes alimentaires (optionnel)
</label> <div class="grid grid-cols-2 md:grid-cols-4 gap-3"> <label class="flex items-center"> <input type="checkbox" name="regime" value="végétarien" class="mr-2 text-yellow-500 focus:ring-yellow-500"> <span class="text-sm">Végétarien</span> </label> <label class="flex items-center"> <input type="checkbox" name="regime" value="végan" class="mr-2 text-yellow-500 focus:ring-yellow-500"> <span class="text-sm">Végan</span> </label> <label class="flex items-center"> <input type="checkbox" name="regime" value="sans-gluten" class="mr-2 text-yellow-500 focus:ring-yellow-500"> <span class="text-sm">Sans gluten</span> </label> <label class="flex items-center"> <input type="checkbox" name="regime" value="halal" class="mr-2 text-yellow-500 focus:ring-yellow-500"> <span class="text-sm">Halal</span> </label> </div> </div> </div> <!-- Ingrédients --> <div class="bg-white rounded-lg shadow-md p-6"> <h2 class="text-2xl font-semibold mb-6 text-gray-800">
Ingrédients
</h2> <div id="ingredientsList" class="space-y-3"> <!-- Les ingrédients seront ajoutés ici dynamiquement --> </div> <button type="button" id="addIngredient" class="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path> </svg>
Ajouter un ingrédient
</button> </div> <!-- Instructions de préparation --> <div class="bg-white rounded-lg shadow-md p-6"> <h2 class="text-2xl font-semibold mb-6 text-gray-800">
Instructions de préparation
</h2> <div class="space-y-3"> <label for="preparation" class="block text-sm font-medium text-gray-700 mb-2">
Étapes de préparation *
</label> <textarea id="preparation" name="preparation" required rows="8" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent" placeholder="Décrivez toutes les étapes de préparation de votre recette..."></textarea> <p class="text-sm text-gray-500">
Conseil: Numérotez vos étapes pour plus de clarté (1.,
                        2., 3., etc.)
</p> </div> </div> <!-- Messages --> <div id="errorMessage" class="hidden bg-red-50 border border-red-200 rounded-lg p-4"> <div class="flex"> <svg class="h-5 w-5 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path> </svg> <span id="errorText" class="text-red-800"></span> </div> </div> <div id="successMessage" class="hidden bg-green-50 border border-green-200 rounded-lg p-4"> <div class="flex"> <svg class="h-5 w-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span id="successText" class="text-green-800"></span> </div> </div> <!-- Boutons d'action --> <div class="flex justify-between items-center pt-6"> <a href="/mes-recettes" class="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition">
Annuler
</a> <button type="submit" id="submitBtn" class="bg-yellow-500 text-white px-8 py-3 rounded-lg hover:bg-yellow-600 transition font-semibold flex items-center"> <span id="submitText">Créer la recette</span> <svg id="loadingSpinner" class="hidden animate-spin ml-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"> <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle> <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path> </svg> </button> </div> </form> </div> ${renderScript($$result2, "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/creer-recette.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/creer-recette.astro", void 0);

const $$file = "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/creer-recette.astro";
const $$url = "/creer-recette";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$CreerRecette,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
