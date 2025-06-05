import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_C9UJ2AqN.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/a-propos.astro.mjs');
const _page2 = () => import('./pages/abonnement-cookup.astro.mjs');
const _page3 = () => import('./pages/avis-site.astro.mjs');
const _page4 = () => import('./pages/commentaires.astro.mjs');
const _page5 = () => import('./pages/connexion.astro.mjs');
const _page6 = () => import('./pages/conseil.astro.mjs');
const _page7 = () => import('./pages/contact.astro.mjs');
const _page8 = () => import('./pages/creer-recette.astro.mjs');
const _page9 = () => import('./pages/dashboard.astro.mjs');
const _page10 = () => import('./pages/favoris.astro.mjs');
const _page11 = () => import('./pages/glossaire.astro.mjs');
const _page12 = () => import('./pages/inscription.astro.mjs');
const _page13 = () => import('./pages/landingpage.astro.mjs');
const _page14 = () => import('./pages/mentions-legales.astro.mjs');
const _page15 = () => import('./pages/menu-semaine.astro.mjs');
const _page16 = () => import('./pages/mot-de-passe-oublie.astro.mjs');
const _page17 = () => import('./pages/partenaires.astro.mjs');
const _page18 = () => import('./pages/pass-cookup.astro.mjs');
const _page19 = () => import('./pages/profil.astro.mjs');
const _page20 = () => import('./pages/recette-commentee.astro.mjs');
const _page21 = () => import('./pages/recette-plat/_id_.astro.mjs');
const _page22 = () => import('./pages/recette-plat.astro.mjs');
const _page23 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/a-propos.astro", _page1],
    ["src/pages/abonnement-cookup.astro", _page2],
    ["src/pages/avis-site.astro", _page3],
    ["src/pages/commentaires.astro", _page4],
    ["src/pages/connexion.astro", _page5],
    ["src/pages/conseil.astro", _page6],
    ["src/pages/contact.astro", _page7],
    ["src/pages/creer-recette.astro", _page8],
    ["src/pages/dashboard.astro", _page9],
    ["src/pages/favoris.astro", _page10],
    ["src/pages/glossaire.astro", _page11],
    ["src/pages/inscription.astro", _page12],
    ["src/pages/landingpage.astro", _page13],
    ["src/pages/mentions-legales.astro", _page14],
    ["src/pages/menu-semaine.astro", _page15],
    ["src/pages/mot-de-passe-oublie.astro", _page16],
    ["src/pages/partenaires.astro", _page17],
    ["src/pages/pass-cookup.astro", _page18],
    ["src/pages/profil.astro", _page19],
    ["src/pages/recette-commentee.astro", _page20],
    ["src/pages/recette-plat/[id].astro", _page21],
    ["src/pages/recette-plat/index.astro", _page22],
    ["src/pages/index.astro", _page23]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "1c1a2d1b-bb2e-4ae1-80a4-5964fc0cd15f"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
