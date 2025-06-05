import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CfTmU_QD.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BngmRMf4.mjs';
import { $ as $$Plat } from '../chunks/Plat_37PDSyej.mjs';
import { g as getCommentedRecettes } from '../chunks/backend_B2qRaZ9z.mjs';
export { renderers } from '../renderers.mjs';

const $$Commentaires = createComponent(async ($$result, $$props, $$slots) => {
  const pageTitle = "Mes Commentaires | Cookit-UP";
  let commentedRecettes = [];
  try {
    commentedRecettes = await getCommentedRecettes();
  } catch (error) {
    console.error(
      "Erreur lors de la r\xE9cup\xE9ration des recettes comment\xE9es:",
      error
    );
    commentedRecettes = [];
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-6xl mx-auto px-4 py-8"> <!-- Onglets de navigation --> <div class="bg-gray-800 rounded-full mb-8"> <div class="flex justify-center"> <a href="/favoris" class="py-3 px-8 rounded-full text-white font-bold text-center hover:bg-gray-700 transition">
Favoris
</a> <a href="/commentaires" class="py-3 px-8 rounded-full bg-yellow-500 text-white font-bold text-center">
recette commenter
</a> </div> </div> <!-- Titre de section --> <h1 class="text-3xl font-bold mb-8">Mes Recettes Commentées</h1> <!-- Grille de recettes commentées --> ${commentedRecettes.length > 0 ? renderTemplate`<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> ${commentedRecettes.map((recette) => renderTemplate`${renderComponent($$result2, "Plat", $$Plat, { "id": recette.id, "nom": recette.nom, "image": recette.image, "temps_preparation": recette.temps_preparation, "favori": recette.favori, "sponsorise": recette.expand?.sponsorise })}`)} </div>` : renderTemplate`<div class="text-center py-16 bg-gray-50 rounded-lg"> <div class="text-6xl mb-4">💬</div> <h2 class="text-2xl font-bold mb-2">
Aucune recette commentée
</h2> <p class="text-gray-600 mb-6">
Vous n'avez pas encore commenté de recettes.
</p> <a href="/recette-plat" class="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-3 rounded-lg transition">
Découvrir des recettes
</a> </div>`} </main> ` })}`;
}, "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/commentaires.astro", void 0);

const $$file = "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/commentaires.astro";
const $$url = "/commentaires";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Commentaires,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
