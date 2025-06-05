import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CmPnL_Nc.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_218_os4B.mjs';
export { renderers } from '../renderers.mjs';

const $$Conseil = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Conseil nutritionnel</h1> <div> <h3>Les bases d’une alimentation equilibrée pour une bonne santé</h3> <p>
Une alimentation variée et équilibrée est essentielle pour maintenir
            une bonne santé. Il est important de consommer des aliments de
            chaque groupe protéines, glucides, lipides, vitamines et minéraux.
            Privilégier les aliments frais et naturels comme les fruits,
            légumes, viandes et poissons, tout en limitant les produits
            transformés. Boire 1,5 à 2 litres d’eau par jour et éviter les excès
            de sucre et de mauvaises graisses est également crucial. Manger à
            des horaires réguliers, ne pas sauter de repas et écouter son corps
            aide à éviter les coups de fatigue.
</p> </div> <div> <h3>Les aliments essentiels pour une croissance optimale</h3> <p>
Pour soutenir la croissance, il est important de consommer des
            protéines viandes, poissons, légumineuses pour construire les
            muscles et la peau. Le calcium et la vitamine D, présents dans les
            produits laitiers et les légumes verts, renforcent les os et les
            dents. Les glucides complexes comme le riz brun et le quinoa
            apportent de l'énergie durable, tandis que les bonnes graisses,
            comme celles des poissons gras et de l’avocat, soutiennent le
            cerveau. Les fruits et légumes colorés apportent vitamines et
            minéraux, essentiels pour l’immunité et la vitalité.
</p> </div> ` })}`;
}, "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/conseil.astro", void 0);

const $$file = "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/conseil.astro";
const $$url = "/conseil";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Conseil,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
