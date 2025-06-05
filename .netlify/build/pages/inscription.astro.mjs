import { c as createComponent, r as renderComponent, b as renderScript, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CmPnL_Nc.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_218_os4B.mjs';
export { renderers } from '../renderers.mjs';

const $$Inscription = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Inscription | Cookit-UP" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-emerald-700 min-h-screen py-12"> <div class="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg"> <div class="p-8"> <h2 class="text-2xl font-bold mb-6">Inscription</h2> <!-- Bouton Google --> <button class="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-full py-2 px-4 mb-6 hover:bg-gray-50 transition"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"> <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"></path> </svg> <span>Continuer avec Google</span> </button> <!-- Séparateur --> <div class="flex items-center my-6"> <div class="flex-1 border-t border-gray-300"></div> <span class="px-4 text-gray-500 text-sm">ou</span> <div class="flex-1 border-t border-gray-300"></div> </div> <!-- Formulaire d'inscription --> <form id="registerForm" class="space-y-4"> <div> <label for="pseudo" class="block text-sm font-medium text-gray-700 mb-1">Pseudo</label> <input type="text" id="pseudo" name="pseudo" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="Pseudo"> </div> <div> <label for="prenom" class="block text-sm font-medium text-gray-700 mb-1">Prénom</label> <input type="text" id="prenom" name="prenom" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="Prénom"> </div> <div> <label for="nomFamille" class="block text-sm font-medium text-gray-700 mb-1">Nom de famille</label> <input type="text" id="nomFamille" name="nomFamille" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="Nom de famille"> </div> <div> <label for="telephone" class="block text-sm font-medium text-gray-700 mb-1">Numéro de téléphone</label> <input type="tel" id="telephone" name="telephone" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="Numéro de téléphone"> </div> <div> <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Adresse email</label> <input type="email" id="email" name="email" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="Adresse email"> </div> <div> <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label> <input type="password" id="password" name="password" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="Mot de passe"> </div> <div class="flex items-start"> <input type="checkbox" id="newsletter" name="newsletter" class="mt-1 h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-gray-300 rounded"> <label for="newsletter" class="ml-2 block text-sm text-gray-700">
Oui je souhaite recevoir des réductions, offres
                            fidélité et infos.
</label> </div> <!-- Message d'erreur --> <div id="errorMessage" class="text-red-500 text-sm hidden"></div> <button type="submit" class="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full transition">
Créer un compte
</button> </form> <p class="mt-6 text-center text-sm text-gray-600">
Vous avez déjà un compte ? <a href="/connexion" class="text-yellow-500 hover:text-yellow-600 font-medium">Se connecter</a> </p> </div> </div> </div> ` })} ${renderScript($$result, "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/inscription.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/inscription.astro", void 0);

const $$file = "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/inscription.astro";
const $$url = "/inscription";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Inscription,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
