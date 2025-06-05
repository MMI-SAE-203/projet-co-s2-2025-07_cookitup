import { c as createComponent, r as renderComponent, b as renderScript, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CfTmU_QD.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BngmRMf4.mjs';
import { $ as $$Plat } from '../chunks/Plat_37PDSyej.mjs';
import { i as isLoggedIn, g as getCurrentUser } from '../chunks/auth_B-95kMeM.mjs';
import { b as getRecettesByUser } from '../chunks/backend_B2qRaZ9z.mjs';
export { renderers } from '../renderers.mjs';

const $$MesRecettes = createComponent(async ($$result, $$props, $$slots) => {
  const loggedIn = isLoggedIn();
  let recettes = [];
  let user = null;
  if (loggedIn) {
    user = getCurrentUser();
    if (user) {
      recettes = await getRecettesByUser(user.id);
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Mes Recettes | Cookit-UP" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-7xl mx-auto px-4 py-8"> <div class="flex justify-between items-center mb-8"> <h1 class="text-3xl font-bold">Mes Recettes</h1> <a href="/creer-recette" class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-3 rounded-lg transition">
Créer une recette
</a> </div> ${!loggedIn && renderTemplate`<div class="bg-gray-100 rounded-lg p-8 text-center"> <h2 class="text-2xl font-bold mb-4">
Connectez-vous pour voir vos recettes
</h2> <p class="text-gray-600 mb-6">
Vous devez être connecté pour accéder à vos recettes
                        personnelles.
</p> <a href="/connexion" class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-3 rounded-lg transition">
Se connecter
</a> </div>`} ${loggedIn && recettes.length === 0 && renderTemplate`<div class="bg-gray-100 rounded-lg p-8 text-center"> <h2 class="text-2xl font-bold mb-4">
Vous n'avez pas encore créé de recettes
</h2> <p class="text-gray-600 mb-6">
Partagez vos talents culinaires avec la communauté en
                        créant votre première recette !
</p> <a href="/creer-recette" class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-3 rounded-lg transition">
Créer ma première recette
</a> </div>`} ${loggedIn && recettes.length > 0 && renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${recettes.map((recette) => renderTemplate`${renderComponent($$result2, "Plat", $$Plat, { "id": recette.id, "nom": recette.nom, "img": recette.img, "temps_prep": recette.temps_prep, "categorie": recette.categorie, "isFavorite": recette.isFavorite, "showFavoriteButton": true })}`)} </div>`} </main> ` })} ${renderScript($$result, "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/mes-recettes.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/mes-recettes.astro", void 0);

const $$file = "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/mes-recettes.astro";
const $$url = "/mes-recettes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$MesRecettes,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
