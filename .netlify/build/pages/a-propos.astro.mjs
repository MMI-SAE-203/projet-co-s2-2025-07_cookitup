import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CfTmU_QD.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BaAgPpdC.mjs';
export { renderers } from '../renderers.mjs';

const $$APropos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="text-center px-6 py-10"> <h1 class="text-4xl font-bold mb-6">À propos de CookItUp</h1> <img src="URL de l'image" alt="Image d'introduction" class="mx-auto w-full max-w-md rounded-lg shadow-md"> </section>  <hr class="border-t-2 border-gray-300 w-3/4 mx-auto my-6">  <section class="px-6 max-w-4xl mx-auto text-justify mb-10"> <p class="text-lg leading-relaxed">
Aujourd’hui, bien manger est un véritable défi pour de nombreux
            jeunes. Entre un emploi du temps chargé, un budget serré et le prix
            des courses qui ne cesse d’augmenter, il devient de plus en plus
            difficile de préparer des repas équilibrés sans se ruiner. Trop
            souvent, cela se traduit par des plats tout prêts, des commandes à
            emporter ou encore des repas sautés, ce qui impacte non seulement la
            santé, mais aussi la concentration et l’énergie au quotidien. Face à
            cette réalité, nous avons décidé d’agir. CookItUp est né d’une idée
            simple : rendre la cuisine accessible à tous, sans stress ni
            dépenses inutiles. Notre mission est de permettre aux étudiants et
            aux jeunes actifs de mieux se nourrir en utilisant au maximum ce
            qu’ils ont déjà sous la main.
</p> </section>  <section class="px-6 flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto mb-16"> <img src="URL de l'image" alt="Image interface application" class="w-full md:w-1/2 rounded-lg shadow"> <div class="flex flex-col gap-6 text-justify"> <p class="text-lg leading-relaxed">
Notre plateforme, entièrement gratuite, a été conçue pour vous
                accompagner au quotidien. L’idée est simple : entrez les
                ingrédients que vous avez dans votre frigo, et notre
                intelligence artificielle vous propose instantanément des
                recettes adaptées, savoureuses et équilibrées. Fini le
                casse-tête des repas, fini le gaspillage ! Plus besoin de
                chercher pendant des heures ou d’acheter des ingrédients
                supplémentaires. CookItUp vous aide à transformer le peu que
                vous avez en un plat gourmand et nutritif.
</p> <p class="text-lg leading-relaxed">
Mais CookItUp, c’est bien plus qu’un simple générateur de
                recettes. Nous avons à cœur de construire une véritable
                communauté, où chacun peut partager ses idées, ses astuces et
                ses propres recettes créées à partir de restes. Car bien manger,
                ce n’est pas seulement une question de budget, c’est aussi un
                mode de vie. Nous voulons vous prouver qu’avec un peu de
                créativité, il est possible de manger mieux, de dépenser moins
                et de réduire le gaspillage alimentaire.
</p> </div> </section>  <section class="bg-red-200 px-6 py-10"> <div class="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto"> <div class="md:w-2/3"> <p class="text-white text-xl font-medium leading-relaxed">
Bien manger, c’est mieux vivre. Avec CookItUp, profitez
                    d’une solution simple, gratuite et intuitive pour cuisiner
                    avec ce que vous avez déjà. Ouvrez votre frigo, laissez
                    parler votre créativité et adoptez une alimentation plus
                    saine et responsable !
</p> </div> <img src="URL de l'image" alt="Icône de chef cuisinier" class="w-24 h-24 md:w-40 md:h-40"> </div> </section>  <hr class="border-t-2 border-gray-300 w-3/4 mx-auto my-6"> ` })}`;
}, "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/a-propos.astro", void 0);

const $$file = "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/a-propos.astro";
const $$url = "/a-propos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$APropos,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
