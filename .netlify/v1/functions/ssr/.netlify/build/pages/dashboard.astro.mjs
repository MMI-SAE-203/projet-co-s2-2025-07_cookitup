import { c as createComponent, d as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CfTmU_QD.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BaAgPpdC.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Dashboard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const { locals, redirect } = Astro2;
  if (!locals?.session?.user) {
    return redirect("/connexion");
  }
  const user = locals.session.user;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Mon compte | Cookit-UP", "user": user }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-emerald-50 py-12"> <div class="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow"> <h1 class="text-2xl font-bold mb-4 text-emerald-700">
Bonjour ${user.prenom || user.username || user.email} 👋
</h1> <p class="text-gray-700 mb-6">
Bienvenue sur votre tableau de bord. Vous pouvez gérer vos
                recettes, votre profil ou consulter vos commandes ici.
</p> <ul class="space-y-2"> <li> <a href="/mes-recettes" class="text-yellow-600 hover:underline">
📋 Voir mes recettes
</a> </li> <li> <a href="/profil" class="text-yellow-600 hover:underline">
👤 Modifier mon profil
</a> </li> <li> <a href="/logout" class="text-red-500 hover:underline">
🚪 Déconnexion
</a> </li> </ul> </div> </div> ` })}`;
}, "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/dashboard.astro", void 0);

const $$file = "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Dashboard,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
