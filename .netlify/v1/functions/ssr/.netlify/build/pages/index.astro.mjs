import { c as createComponent, r as renderComponent, b as renderScript, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_CfTmU_QD.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BaAgPpdC.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from '../chunks/_astro_assets_CHQHLvM-.mjs';
import PocketBase from 'pocketbase';
export { renderers } from '../renderers.mjs';

const image_accueil = new Proxy({"src":"/_astro/img_page_accueil_hero_1x.BGvRGMqV.webp","width":1453,"height":968,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/assets/img/accueil/img_page_accueil_hero_1x.webp";
							}
							
							return target[name];
						}
					});

const image_montre = new Proxy({"src":"/_astro/image_montre.kC3q9vVA.webp","width":300,"height":450,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/assets/img/accueil/image_montre.webp";
							}
							
							return target[name];
						}
					});

const image_pieces = new Proxy({"src":"/_astro/image_pieces.BQl0xPUg.webp","width":300,"height":450,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/assets/img/accueil/image_pieces.webp";
							}
							
							return target[name];
						}
					});

const image_plats = new Proxy({"src":"/_astro/plats_page_accueil.DA8NnZjp.webp","width":300,"height":450,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/assets/img/accueil/plats_page_accueil.webp";
							}
							
							return target[name];
						}
					});

const image_avis = new Proxy({"src":"/_astro/image_partager_avis.BzIVoYg_.webp","width":300,"height":450,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/assets/img/accueil/image_partager_avis.webp";
							}
							
							return target[name];
						}
					});

const image_robot_ai = new Proxy({"src":"/_astro/image_robot_ia.CUrCrHcH.webp","width":575,"height":831,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/assets/img/accueil/image_robot_ia.webp";
							}
							
							return target[name];
						}
					});

const image_entree = new Proxy({"src":"/_astro/image_entree_source.bg11mvkU.webp","width":1920,"height":1280,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/assets/img/accueil/image_entree_source.webp";
							}
							
							return target[name];
						}
					});

const image_plat = new Proxy({"src":"/_astro/image_plat_source.B2OPPFjq.webp","width":1920,"height":1277,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/assets/img/accueil/image_plat_source.webp";
							}
							
							return target[name];
						}
					});

const image_dessert = new Proxy({"src":"/_astro/image_dessert_source.DZUd_FYw.webp","width":500,"height":625,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/assets/img/accueil/image_dessert_source.webp";
							}
							
							return target[name];
						}
					});

const image_menu_semaine = new Proxy({"src":"/_astro/image_menu_semaine_source.JYjb-wjw.webp","width":1920,"height":511,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/assets/img/accueil/image_menu_semaine_source.webp";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const pb = new PocketBase("https://cookit-up.titouan-winkel.fr");
  let avisSite = [];
  try {
    avisSite = await pb.collection("avis_site").getFullList({
      expand: "user",
      sort: "-created"
    });
  } catch (error) {
    console.error("Erreur lors de la r\xE9cup\xE9ration des avis:", error);
  }
  function getAvatarUrl(user, userId) {
    if (user?.avatar) {
      return `https://cookit-up.titouan-winkel.fr/api/files/users/${userId}/${user.avatar}`;
    }
    const pseudo = user?.pseudo || "U";
    const initials = pseudo.charAt(0).toUpperCase();
    return `https://ui-avatars.com/api/?name=${initials}&background=ef4444&color=fff&size=64&bold=true`;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative w-full h-[500px] md:h-[600px] bg-black text-white overflow-hidden"> ${renderComponent($$result2, "Image", $$Image, { "src": image_accueil || "/placeholder.svg", "alt": "Image cuisine fond", "class": "w-full h-full object-cover" })} <!-- Overlay sombre pour améliorer la lisibilité --> <div class="absolute inset-0 bg-black/40"></div> <div class="absolute inset-0 flex items-center px-6 md:px-20 py-0"> <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold hero-main-text leading-tight relative z-10" style="font-family: 'Koulen', sans-serif !important;"> <span class="block text-white mb-2">NOTRE BUT</span> <span class="block text-yellow-400 mb-2">PREMIER VOUS,</span> <span class="block text-yellow-400">FAIRE ECONOMISER</span> </h1> </div> </section>  <section class="py-16 px-6 text-center bg-white"> <h2 class="text-3xl md:text-4xl font-koulen mb-12 text-black">
Simplifie ta vie culinaire
</h2> <!-- Les 4 cartes --> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"> <!-- Carte 1 - Gain de temps --> <div class="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"> ${renderComponent($$result2, "Image", $$Image, { "src": image_montre || "/placeholder.svg", "alt": "gain de temps", "class": "w-full h-48 object-cover rounded-lg mb-4" })} <h3 class="font-bold text-lg mb-3 text-center text-black">
un gain de temps pour tous
</h3> <p class="text-sm text-gray-700 text-center leading-relaxed">
Transformez facilement les ingrédients de votre frigo en
					recettes savoureuses. Réduisez le gaspillage alimentaire en
					utilisant ce que vous avez sous la main.
</p> </div> <!-- Carte 2 - Recettes peu coûteuses --> <div class="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"> ${renderComponent($$result2, "Image", $$Image, { "src": image_pieces || "/placeholder.svg", "alt": "recettes peu couteuses", "class": "w-full h-48 object-cover rounded-lg mb-4" })} <h3 class="font-bold text-lg mb-3 text-center text-black">
des recettes peu coûteuses
</h3> <p class="text-sm text-gray-700 text-center leading-relaxed">
Fini les repas hors de prix ! Cuisinez malin avec des
					recettes simples et économiques. Profitez de réductions
					exclusives grâce à nos partenariats avec des commerces
					locaux.
</p> </div> <!-- Carte 3 - Large choix --> <div class="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"> ${renderComponent($$result2, "Image", $$Image, { "src": image_plats || "/placeholder.svg", "alt": "choix de recettes", "class": "w-full h-48 object-cover rounded-lg mb-4" })} <h3 class="font-bold text-lg mb-3 text-center text-black">
un large choix de recettes
</h3> <p class="text-sm text-gray-700 text-center leading-relaxed">
Indiquez vos objectifs et suivez vos calories facilement.
					Obtenez des repas équilibrés et adaptés à votre régime
					alimentaire.
</p> </div> <!-- Carte 4 - Partager avis --> <div class="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"> ${renderComponent($$result2, "Image", $$Image, { "src": image_avis || "/placeholder.svg", "alt": "avis", "class": "w-full h-48 object-cover rounded-lg mb-4" })} <h3 class="font-bold text-lg mb-3 text-center text-black">
partager vos avis à d'autres
</h3> <p class="text-sm text-gray-700 text-center leading-relaxed">
Partagez vos recettes et découvrez celles des autres
					étudiants. Rejoignez un mouvement pour mieux manger et
					gaspiller moins.
</p> </div> </div> </section>  <section class="bg-teal-600 text-white py-16 px-6 text-center"> <h2 class="text-3xl md:text-4xl font-koulen mb-12">
Fais partie de l'aventure, abonne-toi !
</h2> <!-- Contenu en deux colonnes avec boutons alignés --> <div class="flex flex-col md:flex-row justify-center gap-8 max-w-6xl mx-auto"> <!-- Colonne Compte gratuit --> <div class="flex-1 text-left"> <!-- Bouton Compte gratuit aligné à gauche --> <div class="mb-8"> <a href="/inscription" class="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-teal-600 transition-all duration-300 text-lg">
Compte gratuit
</a> </div> <ul class="list-disc list-inside space-y-3 text-base"> <li>Trouvez des recettes avec les ingrédients du frigo.</li> <li>Échangez recettes et astuces entre étudiants.</li> <li>Liste de courses automatique selon vos besoins.</li> <li>Repas variés et ajustables chaque semaine.</li> <li>Réutilisez vos restes pour éviter le gaspillage.</li> <li>Profitez de réductions chez nos partenaires locaux.</li> </ul> </div> <!-- Colonne Pass CookUP --> <div class="flex-1 text-left"> <!-- Bouton Pass CookUP aligné à gauche --> <div class="mb-8"> <a href="/cookup" class="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-teal-600 transition-all duration-300 text-lg">
Pass CookUP
</a> </div> <ul class="list-disc list-inside space-y-3 text-base"> <li>Inclut toutes les fonctionnalités de la version gratuite.</li> <li>Calcul automatique selon ingrédients et quantités.</li> <li>Recommandations adaptées à vos objectifs.</li> <li>Menu optimisé selon régime et préférences.</li> <li>Accédez à des nutritionnistes partenaires.</li> </ul> </div> </div> </section>  <section class="py-16 px-6 md:px-20 bg-white"> <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10"> <!-- Texte --> <div class="flex-1 text-left"> <h2 class="text-emerald-600 text-3xl md:text-4xl font-koulen mb-6">
L'IA QUI SIMPLIFIE TA VIE
</h2> <p class="text-black text-base md:text-lg leading-relaxed">
Notre IA t'accompagne dans ton suivi nutritionnel en créant
					un planning détaillé de tes repas pour la semaine. Elle optimise
					tes ingrédients restants et s'adapte à ton budget, tout en
					te proposant des conseils personnalisés. Plus besoin de
					te creuser la tête, elle planifie pour toi !
</p> </div> <!-- Image avec bordure verte en bas --> <div class="flex-1 relative"> <div class="relative rounded-lg overflow-hidden shadow-lg"> ${renderComponent($$result2, "Image", $$Image, { "src": image_robot_ai || "/placeholder.svg", "alt": "Illustration IA robot cuisinier", "class": "w-full h-auto" })} <!-- Bordure verte en bas --> <div class="absolute bottom-0 left-0 right-0 h-2 bg-emerald-600"></div> </div> </div> </div> </section>  <section class="py-12 px-6 bg-white text-center"> <h2 class="text-2xl md:text-3xl font-koulen mb-10">
Découvrez nos recettes
</h2> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"> <!-- 🥗 Entrée --> <a href="/recette-plat" class="group relative overflow-hidden rounded-xl shadow-lg h-[400px] cursor-pointer transition-shadow duration-300 hover:shadow-2xl"> ${renderComponent($$result2, "Image", $$Image, { "src": image_entree || "/placeholder.svg", "alt": "Entr\xE9e", "class": "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" })} <!-- Filtre sombre avec animation --> <div class="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300 rounded-xl"></div> <!-- Overlay avec effet de brillance au hover --> <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 group-hover:translate-x-full"></div> <span class="absolute top-0 left-0 h-full w-full flex items-start justify-start text-white text-4xl font-bold p-4 tracking-widest z-10 transition-all duration-300 group-hover:text-yellow-300"> <span class="leading-tight text-left drop-shadow-lg transform transition-transform duration-300 group-hover:scale-110"> ${`E
N
T
R
\xC9
E`.split("\n").map((char) => renderTemplate`<span> ${char} <br> </span>`)} </span> </span> </a> <!-- 🍽 Plat --> <a href="/recette-plat" class="group relative overflow-hidden rounded-xl shadow-lg h-[400px] cursor-pointer transition-shadow duration-300 hover:shadow-2xl"> ${renderComponent($$result2, "Image", $$Image, { "src": image_plat || "/placeholder.svg", "alt": "Plat", "class": "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" })} <!-- Filtre sombre avec animation --> <div class="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300 rounded-xl"></div> <!-- Overlay avec effet de brillance au hover --> <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 group-hover:translate-x-full"></div> <span class="absolute top-0 left-0 h-full w-full flex items-start justify-start text-white text-4xl font-bold p-4 tracking-widest z-10 transition-all duration-300 group-hover:text-yellow-300"> <span class="leading-tight text-left drop-shadow-lg transform transition-transform duration-300 group-hover:scale-110"> ${`P
L
A
T`.split("\n").map((char) => renderTemplate`<span> ${char} <br> </span>`)} </span> </span> </a> <!-- 🍰 Dessert --> <a href="/recette-plat" class="group relative overflow-hidden rounded-xl shadow-lg h-[400px] cursor-pointer transition-shadow duration-300 hover:shadow-2xl"> ${renderComponent($$result2, "Image", $$Image, { "src": image_dessert || "/placeholder.svg", "alt": "Dessert", "class": "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" })} <!-- Filtre sombre avec animation --> <div class="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300 rounded-xl"></div> <!-- Overlay avec effet de brillance au hover --> <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 group-hover:translate-x-full"></div> <span class="absolute top-0 left-0 h-full w-full flex items-start justify-start text-white text-4xl font-bold p-4 tracking-widest z-10 transition-all duration-300 group-hover:text-yellow-300"> <span class="leading-tight text-left drop-shadow-lg transform transition-transform duration-300 group-hover:scale-110"> ${`D
E
S
S
E
R
T`.split("\n").map((char) => renderTemplate`<span> ${char} <br> </span>`)} </span> </span> </a> </div> <!-- Menu de la semaine avec superposition sombre + texte centré gauche + effets améliorés --> <a href="/menu-semaine" class="group relative mt-12 block overflow-hidden rounded-xl shadow-lg cursor-pointer transition-shadow duration-300 hover:shadow-2xl"> <!-- Image de fond --> ${renderComponent($$result2, "Image", $$Image, { "src": image_menu_semaine || "/placeholder.svg", "alt": "Menu de la semaine", "class": "w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110" })} <!-- Overlay sombre (assombrissement) avec animation --> <div class="absolute top-0 left-0 w-full h-full bg-black/50 group-hover:bg-black/40 transition-all duration-300 rounded-xl z-10"></div> <!-- Overlay avec effet de brillance au hover --> <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 group-hover:translate-x-full z-15"></div> <!-- Texte superposé avec animation --> <div class="absolute top-1/2 left-6 transform -translate-y-1/2 text-white text-xl md:text-2xl font-bold text-left uppercase z-20 max-w-md drop-shadow-lg transition-all duration-300 group-hover:text-yellow-300 group-hover:scale-110">
Menu de la semaine équilibré & économique
</div> </a> </section>  ${avisSite.length > 0 && renderTemplate`<section class="bg-red-400 text-white py-16 px-6"> <div class="max-w-6xl mx-auto"> <h2 class="text-3xl md:text-4xl font-koulen mb-12 text-center">
CE QUE DISENT NOS UTILISATEURS
</h2> <div class="relative"> <!-- Conteneur du carrousel --> <div class="overflow-hidden rounded-lg"> <div id="avisContainer" class="flex transition-transform duration-500 ease-in-out"> ${avisSite.map((avis, index) => {
    const user = avis.expand?.user;
    const pseudo = user?.pseudo || "Utilisateur anonyme";
    const avatarUrl = getAvatarUrl(user, user?.id);
    return renderTemplate`<div class="w-full flex-shrink-0 px-4"${addAttribute(index, "data-slide")}> <div class="bg-white/10 backdrop-blur-sm rounded-xl p-8 mx-4"> <!-- En-tête avec avatar et pseudo --> <div class="flex items-center mb-6"> <img${addAttribute(avatarUrl || "/placeholder.svg", "src")}${addAttribute(`Avatar de ${pseudo}`, "alt")} class="w-16 h-16 rounded-full border-3 border-white/30 mr-4 object-cover"> <div> <h3 class="text-xl font-bold text-white"> ${pseudo} </h3> <div class="flex text-yellow-300 text-sm"> ${"\u2605".repeat(5)} </div> </div> </div> <!-- Commentaire --> <blockquote class="text-lg leading-relaxed italic text-white/90 relative"> <span class="text-4xl text-white/30 absolute -top-2 -left-2">"</span> <p class="relative z-10 pl-6"> ${avis.comment} </p> <span class="text-4xl text-white/30 absolute -bottom-4 right-0">"</span> </blockquote> </div> </div>`;
  })} </div> </div> <!-- Boutons de navigation --> <div class="flex justify-center mt-8 space-x-4"> <button id="prevAvis" class="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300 hover:scale-110" aria-label="Avis précédent"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg> </button> <button id="nextAvis" class="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300 hover:scale-110" aria-label="Avis suivant"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </button> </div> <!-- Indicateurs --> <div class="flex justify-center mt-6 space-x-2"> ${avisSite.map((_, index) => renderTemplate`<button class="avis-indicator w-3 h-3 rounded-full bg-white/40 hover:bg-white/60 transition-all duration-300"${addAttribute(index, "data-slide")}${addAttribute(`Aller \xE0 l'avis ${index + 1}`, "aria-label")}></button>`)} </div> </div> </div> </section>`}` })} ${renderScript($$result, "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/index.astro", void 0);

const $$file = "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
