import { c as createComponent, r as renderComponent, b as renderScript, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CmPnL_Nc.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_218_os4B.mjs';
import { $ as $$Hero } from '../chunks/Hero_sNwyMDeS.mjs';
export { renderers } from '../renderers.mjs';

const $$AvisSite = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Donnez votre avis | Cookit-UP" }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div id="loadingState" class="min-h-screen flex items-center justify-center bg-gray-50"> <div class="text-center"> <div class="text-4xl mb-4">⏳</div> <h2 class="text-xl font-bold mb-2">Chargement...</h2> <p class="text-gray-600">Vérification de votre connexion...</p> </div> </div>  <div id="notLoggedInState" class="min-h-screen bg-gray-50 py-12 hidden"> <div class="max-w-4xl mx-auto px-6 text-center"> <div class="bg-white rounded-lg shadow-lg p-12"> <div class="text-6xl mb-6">🔒</div> <h1 class="text-3xl font-bold mb-4">Connexion requise</h1> <p class="text-gray-600 mb-8 text-lg">
Vous devez être connecté pour donner votre avis sur
                    Cookit-UP.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="/connexion" class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-8 py-4 rounded-lg transition transform hover:scale-105">
🔑 Se connecter
</a> <a href="/inscription" class="bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white font-bold px-8 py-4 rounded-lg transition transform hover:scale-105">
📝 Créer un compte
</a> </div> </div> </div> </div>  <div id="mainContent" class="hidden"> <!-- Hero Section --> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Votre Avis Compte", "subtitle": "PARTAGEZ", "description": "AIDEZ-NOUS A AMELIORER COOKIT-UP EN PARTAGEANT VOTRE EXPERIENCE ET VOS SUGGESTIONS", "backgroundImage": "/placeholder.svg?height=600&width=1200&text=Avis+Hero", "stats": [
    { number: "4.8", label: "Note moyenne", icon: "\u2B50" },
    { number: "1000+", label: "Avis re\xE7us", icon: "\u{1F4AC}" },
    { number: "95%", label: "Satisfaction", icon: "\u{1F60A}" },
    { number: "24h", label: "Temps de r\xE9ponse", icon: "\u26A1" }
  ] }, { "default": async ($$result3) => renderTemplate`  <div class="flex flex-col sm:flex-row gap-4 justify-center mt-8"> <button class="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 rounded-lg transition transform hover:scale-105 shadow-lg" onclick="document.getElementById('avis-form-section').scrollIntoView({ behavior: 'smooth' })">
✍️ Donner mon avis
</button> <button class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold px-8 py-4 rounded-lg transition transform hover:scale-105" onclick="document.getElementById('avis-communaute-section').scrollIntoView({ behavior: 'smooth' })">
👥 Voir les avis
</button> </div> ` })} <!-- Section Formulaire d'avis --> <section id="avis-form-section" class="py-16 px-6 bg-white"> <div class="max-w-4xl mx-auto"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold mb-4">
Donnez votre avis sur Cookit-UP
</h2> <p class="text-gray-600 text-lg">
Votre opinion nous aide à améliorer l'expérience pour
                        tous les utilisateurs
</p> </div> <!-- Vérification si l'utilisateur a déjà donné un avis --> <div id="hasExistingAvis" class="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 hidden"> <div class="flex items-center"> <div class="text-3xl mr-4">ℹ️</div> <div> <h3 class="font-bold text-blue-800 mb-2">
Vous avez déjà donné votre avis
</h3> <p class="text-blue-600 mb-3">
Vous pouvez modifier votre avis existant ou en
                                créer un nouveau.
</p> <div class="flex gap-3"> <button id="editExistingAvis" class="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded transition">
✏️ Modifier mon avis
</button> <button id="createNewAvis" class="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded transition">
➕ Nouvel avis
</button> </div> </div> </div> </div> <!-- Formulaire d'avis --> <div class="bg-gray-50 rounded-lg p-8"> <form id="avisForm" class="space-y-6"> <!-- Commentaire principal --> <div> <label for="commentContent" class="block text-lg font-medium text-gray-700 mb-2">
Partagez votre avis sur Cookit-UP
</label> <textarea id="commentContent" name="comment" rows="8" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none" placeholder="Dites-nous ce que vous pensez de Cookit-UP : votre expérience, ce que vous aimez, ce qui pourrait être amélioré, vos suggestions..." required minlength="20" maxlength="2000"></textarea> <div class="flex justify-between text-sm text-gray-500 mt-2"> <span>Minimum 20 caractères</span> <span id="charCount">0/2000</span> </div> </div> <!-- Autorisation de publication --> <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4"> <label class="flex items-start"> <input type="checkbox" id="allowPublication" name="allowPublication" class="mt-1 mr-3" checked> <div> <span class="font-medium text-gray-800">Autoriser la publication de mon avis</span> <p class="text-sm text-gray-600 mt-1">
En cochant cette case, vous autorisez
                                        Cookit-UP à publier votre avis sur le
                                        site (votre nom sera affiché). Vous
                                        pouvez décocher si vous souhaitez que
                                        votre avis reste privé.
</p> </div> </label> </div> <!-- Messages d'erreur/succès --> <div id="avisMessage" class="hidden"></div> <!-- Boutons --> <div class="flex gap-4"> <button type="submit" class="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-8 py-4 rounded-lg transition transform hover:scale-105" id="submitAvis">
✍️ Publier mon avis
</button> <button type="button" class="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold px-8 py-4 rounded-lg transition" onclick="resetForm()">
🗑️ Effacer
</button> </div> </form> </div> </div> </section> <!-- Section Avis de la communauté --> <section id="avis-communaute-section" class="py-16 px-6 bg-gray-50"> <div class="max-w-6xl mx-auto"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold mb-4">
Ce que dit notre communauté
</h2> <p class="text-gray-600 text-lg">
Découvrez les avis et témoignages de nos utilisateurs
</p> </div> <!-- Filtres --> <div class="mb-8 flex flex-wrap gap-4 justify-center"> <select id="categorieAvisFilter" class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"> <option value="tous">Toutes les catégories</option> <option value="recettes">🍽️ Recettes</option> <option value="interface">🎨 Interface</option> <option value="partenaires">🏪 Partenaires</option> <option value="fonctionnalites">⚙️ Fonctionnalités</option> <option value="support">🆘 Support</option> <option value="general">🌟 Général</option> </select> <button id="sortAvis" class="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-lg transition" data-sort="recent">
📅 Plus récents
</button> </div> <!-- Liste des avis --> <div id="avisList"> <!-- État de chargement --> <div id="avisLoading" class="text-center py-12"> <div class="text-4xl mb-4">⏳</div> <h3 class="text-xl font-bold mb-2">
Chargement des avis...
</h3> </div> <!-- État vide --> <div id="noAvis" class="text-center py-16 hidden"> <div class="text-6xl mb-4">💭</div> <h3 class="text-xl font-bold mb-2">
Aucun avis pour le moment
</h3> <p class="text-gray-600 mb-6">
Soyez le premier à partager votre expérience !
</p> <button onclick="document.getElementById('avis-form-section').scrollIntoView({ behavior: 'smooth' })" class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-3 rounded-lg transition">
✍️ Donner mon avis
</button> </div> <!-- Conteneur des avis --> <div id="avisContainer" class="space-y-6 hidden"> <!-- Les avis seront ajoutés ici dynamiquement --> </div> </div> <!-- Pagination --> <div id="avisPagination" class="mt-12 flex justify-center hidden"> <!-- Pagination sera générée dynamiquement --> </div> </div> </section> <!-- Section CTA --> <section class="py-16 px-6 bg-yellow-500 text-black"> <div class="max-w-4xl mx-auto text-center"> <h2 class="text-3xl md:text-4xl font-bold mb-4">
Merci pour votre confiance !
</h2> <p class="text-lg mb-8">
Votre avis nous aide à créer la meilleure expérience
                    culinaire possible.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="/recette-plat" class="bg-black text-yellow-500 font-bold px-8 py-4 rounded-lg hover:bg-gray-800 transition transform hover:scale-105">
🍽️ Découvrir les recettes
</a> <a href="/profil" class="bg-transparent border-2 border-black text-black hover:bg-black hover:text-yellow-500 font-bold px-8 py-4 rounded-lg transition transform hover:scale-105">
👤 Mon profil
</a> </div> </div> </section> </div> ` })} ${renderScript($$result, "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/avis-site.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/avis-site.astro", void 0);

const $$file = "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/avis-site.astro";
const $$url = "/avis-site";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$AvisSite,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
