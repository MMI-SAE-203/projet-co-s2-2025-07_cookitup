import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as renderScript } from '../chunks/astro/server_CmPnL_Nc.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BgUZg3SC.mjs';
export { renderers } from '../renderers.mjs';

const $$Landingpage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cookit-UP | Mangez bien, mangez local" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative h-[500px] overflow-hidden"> <div class="absolute inset-0"> <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Plats délicieux" class="w-full h-full object-cover"> <div class="absolute inset-0 bg-black bg-opacity-40"></div> </div> <div class="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-24"> <div class="max-w-3xl"> <h1 class="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-2"> <span class="text-yellow-400">NE PAS</span> </h1> <h1 class="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4"> <span class="text-yellow-400">MANGER</span> C'EST<br>
AUSSI BIEN <span class="text-yellow-400">MANGER</span> </h1> <p class="text-white text-sm md:text-base mb-8">
Des traditions locales et ingrédients soigneusement
                    sélectionnés pour des plats savoureux.
</p> <button class="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors">
Découvrez-nous
</button> </div> </div> </section>  <section id="qualite" class="py-16 px-6 md:px-12 lg:px-24 bg-white"> <h2 class="text-3xl font-bold text-center mb-12">
POURQUOI CHOISIR COOKIT-UP ?
</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> <!-- DU TEMPS --> <div class="bg-green-600 rounded-lg p-6 text-white flex flex-col items-center"> <div class="w-20 h-20 bg-yellow-400 rounded-lg flex items-center justify-center mb-4"> <svg class="w-12 h-12 text-green-600" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6l5.25 3.15.75-1.23-4.5-2.67z"></path> </svg> </div> <h3 class="text-xl font-bold mb-2 text-center">DU TEMPS</h3> <p class="text-sm text-center">
Nous vous facilitons la vie en vous proposant des repas déjà
                    préparés. Tous les ingrédients sont pesés et préparés, ce
                    qui vous permet de gagner du temps dans votre cuisine.
</p> </div> <!-- DE L'ARGENT --> <div class="bg-green-600 rounded-lg p-6 text-white flex flex-col items-center"> <div class="w-20 h-20 bg-yellow-400 rounded-lg flex items-center justify-center mb-4"> <svg class="w-12 h-12 text-green-600" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"></path> </svg> </div> <h3 class="text-xl font-bold mb-2 text-center">DE L'ARGENT</h3> <p class="text-sm text-center">
Fini le gaspillage! Grâce à l'achat des ingrédients en gros,
                    nous vous proposons des recettes savoureuses à des prix
                    abordables, tout en garantissant une qualité exceptionnelle.
</p> </div> <!-- AIDE --> <div class="bg-green-600 rounded-lg p-6 text-white flex flex-col items-center"> <div class="w-20 h-20 bg-yellow-400 rounded-lg flex items-center justify-center mb-4"> <svg class="w-12 h-12 text-green-600" fill="currentColor" viewBox="0 0 24 24"> <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 13h-2v-2h2v2zm0-4h-2V7h2v4z"></path> </svg> </div> <h3 class="text-xl font-bold mb-2 text-center">AIDE</h3> <p class="text-sm text-center">
Vous cherchez quoi manger ce soir? Nous sommes là pour vous
                    guider avec des recettes variées et délicieuses. Notre
                    qualification unique et notre savoir-faire vous garantissent
                    une expérience culinaire exceptionnelle.
</p> </div> <!-- PERSONNALISATION --> <div class="bg-green-600 rounded-lg p-6 text-white flex flex-col items-center"> <div class="w-20 h-20 bg-yellow-400 rounded-lg flex items-center justify-center mb-4"> <svg class="w-12 h-12 text-green-600" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path> </svg> </div> <h3 class="text-xl font-bold mb-2 text-center">
PERSONNALISATION
</h3> <p class="text-sm text-center">
Indiquez vos objectifs et vos contraintes alimentaires, nous
                    adaptons nos recettes pour répondre parfaitement à vos
                    besoins et respecter votre régime alimentaire.
</p> </div> <!-- UN ENGAGEMENT --> <div class="bg-green-600 rounded-lg p-6 text-white flex flex-col items-center"> <div class="w-20 h-20 bg-yellow-400 rounded-lg flex items-center justify-center mb-4"> <svg class="w-12 h-12 text-green-600" fill="currentColor" viewBox="0 0 24 24"> <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75S7 8 17 8z"></path> </svg> </div> <h3 class="text-xl font-bold mb-2 text-center">
UN ENGAGEMENT
</h3> <p class="text-sm text-center">
Nous privilégions les produits et ingrédients locaux et de
                    saison pour vous offrir des plats frais, savoureux et
                    respectueux de l'environnement tout en gardant l'esprit
                    local.
</p> </div> </div> </section>  <section class="bg-red-500 py-16 px-6 md:px-12 lg:px-24 text-white"> <h2 class="text-2xl font-bold text-center mb-4">
UN LARGE CHOIX DE NOURRITURE POUR TOUS
</h2> <p class="text-center max-w-3xl mx-auto mb-8">
Nous identifions rapidement d'une possible d'adaptation à vos goûts,
            avec une expérience de notre cuisine au moment.
</p> <div class="flex flex-wrap justify-center gap-4 mb-8"> <div class="w-full md:w-1/3 h-48"> <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Plat délicieux" class="w-full h-full object-cover rounded-lg"> </div> <div class="w-full md:w-1/3 h-48"> <img src="https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Dessert" class="w-full h-full object-cover rounded-lg"> </div> <div class="w-full md:w-1/3 h-48"> <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Plat principal" class="w-full h-full object-cover rounded-lg"> </div> </div> <div class="flex justify-center"> <a href="#recettes" class="border-2 border-white text-white rounded-full px-8 py-3 text-center hover:bg-white hover:text-red-500 transition-colors">
Consultez nos recettes
</a> </div> </section>  <section id="contact" class="flex flex-col md:flex-row"> <div class="w-full md:w-1/2"> <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Ingrédients de cuisine" class="w-full h-full object-cover"> </div> <div class="w-full md:w-1/2 bg-white p-8"> <h2 class="text-2xl font-bold mb-6">
CONTACTEZ-NOUS POUR PLUS D'INFORMATIONS
</h2> <form id="contact-form" class="space-y-4"> <div> <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nom</label> <input type="text" id="name" name="name" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" required> </div> <div> <label for="email" class="block text-sm font-medium text-gray-700 mb-1">E-mail</label> <input type="email" id="email" name="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" required> </div> <div> <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label> <textarea id="message" name="message" rows="4" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" placeholder="Veuillez nous faire part de votre message ou demande." required></textarea> </div> <div class="flex items-start"> <input type="checkbox" id="terms" name="terms" class="mt-1 h-4 w-4 text-green-600 focus:ring-green-600 border-gray-300 rounded" required> <label for="terms" class="ml-2 block text-sm text-gray-700">
Je lu et j'accepte les conditions générales et la
                        politique de confidentialité.
</label> </div> <div class="flex items-start"> <input type="checkbox" id="newsletter" name="newsletter" class="mt-1 h-4 w-4 text-green-600 focus:ring-green-600 border-gray-300 rounded"> <label for="newsletter" class="ml-2 block text-sm text-gray-700">
Je m'inscris pour la newsletter.
</label> </div> <div> <button type="submit" class="w-full bg-black text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-colors">
Envoyez un message
</button> </div> </form> </div> </section>  <section id="equipe" class="bg-green-600 py-16 px-6 md:px-12 lg:px-24 text-white"> <h2 class="text-3xl font-bold text-center mb-12">NOTRE ÉQUIPE</h2> <div class="space-y-6 max-w-4xl mx-auto"> <!-- Melvyn --> <div class="bg-white rounded-lg p-4 flex flex-col md:flex-row items-center text-black"> <div class="w-24 h-24 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-6 flex-shrink-0"> <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Melvyn Philippon" class="w-full h-full object-cover"> </div> <div class="flex-grow"> <h3 class="text-xl font-bold">Melvyn Philippon</h3> <p class="text-sm mb-2">
Melvyn est en charge de l'aspect design du projet. Il a
                        contribué à la conception visuelle en assurant une mise
                        en page harmonieuse et une expérience utilisateur
                        optimale.
</p> <div class="mt-2"> <p class="font-bold text-sm">Contact :</p> <a href="mailto:melvyn.philippon@edu.univ-fcomte.fr" class="text-sm text-green-600 hover:underline">
melvyn.philippon@edu.univ-fcomte.fr
</a> </div> </div> </div> <!-- Ethan --> <div class="bg-white rounded-lg p-4 flex flex-col md:flex-row items-center text-black"> <div class="w-24 h-24 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-6 flex-shrink-0"> <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Ethan Omasta-Parisot" class="w-full h-full object-cover"> </div> <div class="flex-grow"> <h3 class="text-xl font-bold">Ethan Omasta-Parisot</h3> <p class="text-sm mb-2">
Ethan s'est occupé de la partie relative du projet, en
                        gérant des aspects essentiels tels que le développement
                        et la mise en place des fonctionnalités. Son travail a
                        permis d'améliorer la visibilité du projet sur le plan
                        juridique et financier.
</p> <div class="mt-2"> <p class="font-bold text-sm">Contact :</p> <a href="mailto:ethan.omasta@edu.univ-fcomte.fr" class="text-sm text-green-600 hover:underline">
ethan.omasta@edu.univ-fcomte.fr
</a> </div> </div> </div> <!-- Titouan --> <div class="bg-white rounded-lg p-4 flex flex-col md:flex-row items-center text-black"> <div class="w-24 h-24 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-6 flex-shrink-0"> <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Titouan Winkel" class="w-full h-full object-cover"> </div> <div class="flex-grow"> <h3 class="text-xl font-bold">Titouan Winkel</h3> <p class="text-sm mb-2">
Titouan s'est occupé de la partie communication et s'est
                        concentré plus particulièrement sur le site web. Il a
                        travaillé sur les fonctionnalités, la charte graphique
                        et la mise en place des contenus pour maximiser l'impact
                        du projet.
</p> <div class="mt-2"> <p class="font-bold text-sm">Contact :</p> <a href="mailto:titouan.winkel@edu.univ-fcomte.fr" class="text-sm text-green-600 hover:underline">
titouan.winkel@edu.univ-fcomte.fr
</a> </div> </div> </div> </div> <div class="flex justify-center mt-8"> <a href="#contact" class="border-2 border-white text-white rounded-full px-8 py-3 text-center hover:bg-white hover:text-green-600 transition-colors">
Rejoignez-nous pour en découvrir plus
</a> </div> </section> ${renderScript($$result2, "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/landingpage.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/landingpage.astro", void 0);

const $$file = "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/landingpage.astro";
const $$url = "/landingpage";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Landingpage,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
