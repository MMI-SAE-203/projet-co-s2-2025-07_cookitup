import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CfTmU_QD.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_KgNoU2jj.mjs';
export { renderers } from '../renderers.mjs';

const $$Glossaire = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-6 py-10 max-w-5xl mx-auto"> <h1 class="text-4xl font-bold mb-6">Conseil nutritionnel</h1> <div class="mb-8"> <h3 class="text-2xl font-semibold mb-2">
Les bases d’une alimentation équilibrée pour une bonne santé
</h3> <p class="text-lg leading-relaxed">
Une alimentation variée et équilibrée est essentielle pour
                maintenir une bonne santé. Il est important de consommer des
                aliments de chaque groupe : protéines, glucides, lipides,
                vitamines et minéraux. Privilégier les aliments frais et
                naturels comme les fruits, légumes, viandes et poissons, tout en
                limitant les produits transformés. Boire 1,5 à 2 litres d’eau
                par jour et éviter les excès de sucre et de mauvaises graisses
                est également crucial. Manger à des horaires réguliers, ne pas
                sauter de repas et écouter son corps aide à éviter les coups de
                fatigue.
</p> </div> <div class="mb-12"> <h3 class="text-2xl font-semibold mb-2">
Les aliments essentiels pour une croissance optimale
</h3> <p class="text-lg leading-relaxed">
Pour soutenir la croissance, il est important de consommer des
                protéines : viandes, poissons, légumineuses pour construire les
                muscles et la peau. Le calcium et la vitamine D, présents dans
                les produits laitiers et les légumes verts, renforcent les os et
                les dents. Les glucides complexes comme le riz brun et le quinoa
                apportent de l'énergie durable, tandis que les bonnes graisses,
                comme celles des poissons gras et de l’avocat, soutiennent le
                cerveau. Les fruits et légumes colorés apportent vitamines et
                minéraux, essentiels pour l’immunité et la vitalité.
</p> </div> </section>  <section class="w-full bg-green-700 text-white px-6 py-12"> <div class="max-w-6xl mx-auto"> <h2 class="text-3xl font-bold uppercase mb-8">Glossaire</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <!-- Colonne 1 --> <div class="space-y-6"> <div> <h4 class="font-bold text-lg">GLUCIDES</h4> <p>
Source principale d’énergie pour le corps, trouvés
                            dans les céréales, le riz, le pain et les fruits.
</p> </div> <div> <h4 class="font-bold text-lg">GLUCIDES COMPLEXES</h4> <p>
Type de glucides qui fournissent de l’énergie sur la
                            durée, présents dans les céréales complètes, le riz
                            brun et le quinoa.
</p> </div> <div> <h4 class="font-bold text-lg">LIPIDES</h4> <p>
Aussi appelés matières grasses, ils sont une source
                            d’énergie importante et sont essentiels au bon
                            fonctionnement du corps.
</p> </div> <div> <h4 class="font-bold text-lg">BONNES GRAISSES</h4> <p>
Graisses insaturées bénéfiques pour la santé,
                            présentes dans l’huile d’olive, l’avocat et les
                            poissons gras.
</p> </div> <div> <h4 class="font-bold text-lg">VITAMINES</h4> <p>
Substances indispensables au bon fonctionnement du
                            corps, contenues dans les fruits, légumes et
                            certains produits d’origine animale.
</p> </div> </div> <!-- Colonne 2 --> <div class="space-y-6"> <div> <h4 class="font-bold text-lg">MINÉRAUX</h4> <p>
Éléments nécessaires au métabolisme, comme le fer,
                            le magnésium ou le zinc, présents dans les légumes
                            verts, les fruits secs et les produits laitiers.
</p> </div> <div> <h4 class="font-bold text-lg">CALCIUM</h4> <p>
Minéral essentiel pour la solidité des os et des
                            dents, présent dans les produits laitiers, les
                            amandes et certains légumes verts.
</p> </div> <div> <h4 class="font-bold text-lg">VITAMINE D</h4> <p>
Vitamine qui aide à l’absorption du calcium et au
                            renforcement des os, synthétisée grâce à
                            l’exposition au soleil et présente dans certains
                            aliments comme le poisson gras.
</p> </div> <div> <img src="URL de l'image" alt="Image aliments" class="rounded-lg w-full shadow-lg"> </div> </div> </div> </div> </section> ` })}`;
}, "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/glossaire.astro", void 0);

const $$file = "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/glossaire.astro";
const $$url = "/glossaire";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Glossaire,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
