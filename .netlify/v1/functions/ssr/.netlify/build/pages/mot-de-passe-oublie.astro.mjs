import { c as createComponent, r as renderComponent, b as renderScript, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CfTmU_QD.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BaAgPpdC.mjs';
export { renderers } from '../renderers.mjs';

const $$MotDePasseOublie = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Mot de passe oubli\xE9 | Cookit-UP" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-emerald-700 min-h-screen py-12"> <div class="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg"> <div class="p-8"> <h2 class="text-2xl font-bold mb-6">Mot de passe oublié</h2> <p class="text-gray-600 mb-6">
Entrez votre adresse email et nous vous enverrons un lien
                    pour réinitialiser votre mot de passe.
</p> <!-- Formulaire de réinitialisation --> <form id="resetForm" class="space-y-4"> <div> <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Adresse email</label> <input type="email" id="email" name="email" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="Adresse email"> </div> <!-- Message d'erreur/succès --> <div id="message" class="text-sm hidden"></div> <button type="submit" class="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full transition">
Envoyer le lien
</button> </form> <p class="mt-6 text-center text-sm text-gray-600"> <a href="/connexion" class="text-yellow-500 hover:text-yellow-600 font-medium">
Retour à la connexion
</a> </p> </div> </div> </div> ` })} ${renderScript($$result, "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/mot-de-passe-oublie.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/mot-de-passe-oublie.astro", void 0);

const $$file = "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/mot-de-passe-oublie.astro";
const $$url = "/mot-de-passe-oublie";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$MotDePasseOublie,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
