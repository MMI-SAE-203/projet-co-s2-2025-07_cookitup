import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as renderScript } from '../chunks/astro/server_CfTmU_QD.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_D93dfYMT.mjs';
import { $ as $$Hero } from '../chunks/Hero_EQi9n1wd.mjs';
export { renderers } from '../renderers.mjs';

const $$AbonnementCookup = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Abonnement Pass Cookup - Cookit-UP" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Abonnement Pass Cookup", "subtitle": "Derni\xE8re \xE9tape", "description": "Choisissez votre formule et profitez de tous les avantages du Pass Cookup", "backgroundImage": "/placeholder.svg?height=600&width=1200", "centered": false })} ${maybeRenderHead()}<div class="bg-gray-50 min-h-screen py-12"> <div class="max-w-6xl mx-auto px-4"> <div class="grid lg:grid-cols-3 gap-8"> <!-- Formulaire d'abonnement --> <div class="lg:col-span-2"> <div class="bg-white rounded-lg shadow-lg p-8"> <h2 class="text-2xl font-bold text-gray-900 mb-6">
Informations d'abonnement
</h2> <form id="subscriptionForm" class="space-y-6"> <!-- Choix de la formule --> <div> <h3 class="text-lg font-semibold text-gray-900 mb-4">
Choisissez votre formule
</h3> <div class="grid md:grid-cols-2 gap-4"> <!-- Formule mensuelle --> <label class="relative cursor-pointer"> <input type="radio" name="plan" value="monthly" class="sr-only peer" checked> <div class="border-2 border-gray-200 rounded-lg p-4 peer-checked:border-emerald-500 peer-checked:bg-emerald-50 transition-all"> <div class="flex justify-between items-center mb-2"> <span class="font-semibold text-gray-900">Mensuel</span> <span class="text-2xl font-bold text-emerald-600">5,99€</span> </div> <p class="text-sm text-gray-600">
Facturé chaque mois
</p> <p class="text-xs text-gray-500 mt-1">
Résiliable à tout moment
</p> </div> </label> <!-- Formule annuelle --> <label class="relative cursor-pointer"> <input type="radio" name="plan" value="yearly" class="sr-only peer"> <div class="border-2 border-gray-200 rounded-lg p-4 peer-checked:border-emerald-500 peer-checked:bg-emerald-50 transition-all"> <div class="flex justify-between items-center mb-2"> <span class="font-semibold text-gray-900">Annuel</span> <div class="text-right"> <span class="text-2xl font-bold text-emerald-600">43,99€</span> <div class="text-xs text-red-500 font-medium">
-26% d'économie
</div> </div> </div> <p class="text-sm text-gray-600">
Facturé une fois par an
</p> <p class="text-xs text-gray-500 mt-1">
Soit 3,67€/mois
</p> </div> </label> </div> </div> <!-- Informations personnelles --> <div> <h3 class="text-lg font-semibold text-gray-900 mb-4">
Informations personnelles
</h3> <div class="grid md:grid-cols-2 gap-4"> <div> <label for="firstName" class="block text-sm font-medium text-gray-700 mb-1">Prénom *</label> <input type="text" id="firstName" name="firstName" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"> </div> <div> <label for="lastName" class="block text-sm font-medium text-gray-700 mb-1">Nom *</label> <input type="text" id="lastName" name="lastName" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"> </div> <div class="md:col-span-2"> <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email *</label> <input type="email" id="email" name="email" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"> </div> </div> </div> <!-- Informations de paiement --> <div> <h3 class="text-lg font-semibold text-gray-900 mb-4">
Informations de paiement
</h3> <div class="space-y-4"> <div> <label for="cardNumber" class="block text-sm font-medium text-gray-700 mb-1">Numéro de carte *</label> <input type="text" id="cardNumber" name="cardNumber" placeholder="1234 5678 9012 3456" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"> </div> <div class="grid grid-cols-2 gap-4"> <div> <label for="expiryDate" class="block text-sm font-medium text-gray-700 mb-1">Date d'expiration *</label> <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/AA" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"> </div> <div> <label for="cvv" class="block text-sm font-medium text-gray-700 mb-1">CVV *</label> <input type="text" id="cvv" name="cvv" placeholder="123" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"> </div> </div> </div> </div> <!-- Adresse de facturation --> <div> <h3 class="text-lg font-semibold text-gray-900 mb-4">
Adresse de facturation
</h3> <div class="space-y-4"> <div> <label for="address" class="block text-sm font-medium text-gray-700 mb-1">Adresse *</label> <input type="text" id="address" name="address" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"> </div> <div class="grid md:grid-cols-3 gap-4"> <div> <label for="postalCode" class="block text-sm font-medium text-gray-700 mb-1">Code postal *</label> <input type="text" id="postalCode" name="postalCode" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"> </div> <div class="md:col-span-2"> <label for="city" class="block text-sm font-medium text-gray-700 mb-1">Ville *</label> <input type="text" id="city" name="city" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"> </div> </div> </div> </div> <!-- Conditions générales --> <div class="flex items-start space-x-3"> <input type="checkbox" id="terms" name="terms" required class="mt-1 h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"> <label for="terms" class="text-sm text-gray-700">
J'accepte les <a href="/cgu" class="text-emerald-600 hover:underline">conditions générales d'utilisation</a>
et la <a href="/confidentialite" class="text-emerald-600 hover:underline">politique de confidentialité</a> *
</label> </div> <!-- Newsletter --> <div class="flex items-start space-x-3"> <input type="checkbox" id="newsletter" name="newsletter" class="mt-1 h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"> <label for="newsletter" class="text-sm text-gray-700">
Je souhaite recevoir les actualités et
                                    offres spéciales de Cookit-UP
</label> </div> </form> </div> </div> <!-- Récapitulatif --> <div class="lg:col-span-1"> <div class="bg-white rounded-lg shadow-lg p-6 sticky top-6"> <h3 class="text-lg font-semibold text-gray-900 mb-4">
Récapitulatif
</h3> <!-- Plan sélectionné --> <div id="selectedPlan" class="mb-6"> <div class="flex justify-between items-center py-3 border-b border-gray-200"> <span class="font-medium text-gray-900">Pass Cookup - Mensuel</span> <span class="font-bold text-emerald-600">5,99€</span> </div> </div> <!-- Avantages inclus --> <div class="mb-6"> <h4 class="font-medium text-gray-900 mb-3">
Avantages inclus :
</h4> <ul class="space-y-2 text-sm text-gray-600"> <li class="flex items-center"> <svg class="h-4 w-4 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg>
Accès aux recettes premium
</li> <li class="flex items-center"> <svg class="h-4 w-4 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg>
Codes promo partenaires
</li> <li class="flex items-center"> <svg class="h-4 w-4 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg>
Planificateur de menus
</li> <li class="flex items-center"> <svg class="h-4 w-4 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg>
Support prioritaire
</li> </ul> </div> <!-- Total --> <div class="border-t border-gray-200 pt-4 mb-6"> <div class="flex justify-between items-center"> <span class="text-lg font-semibold text-gray-900">Total</span> <span id="totalPrice" class="text-2xl font-bold text-emerald-600">5,99€</span> </div> <p class="text-sm text-gray-500 mt-1">
TVA incluse
</p> </div> <!-- Bouton de validation --> <button type="submit" form="subscriptionForm" class="w-full bg-emerald-600 text-white py-3 px-4 rounded-md font-semibold hover:bg-emerald-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
Confirmer l'abonnement
</button> <!-- Éléments de réassurance --> <div class="mt-6 space-y-3 text-sm text-gray-600"> <div class="flex items-center"> <svg class="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path> </svg>
Paiement 100% sécurisé
</div> <div class="flex items-center"> <svg class="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"></path> </svg>
Résiliation à tout moment
</div> <div class="flex items-center"> <svg class="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path> </svg>
Support client 7j/7
</div> </div> </div> </div> </div> </div> </div>  <div id="successModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden"> <div class="bg-white rounded-lg p-8 max-w-md mx-4"> <div class="text-center"> <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4"> <svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> <h3 class="text-lg font-medium text-gray-900 mb-2">
Abonnement confirmé !
</h3> <p class="text-sm text-gray-600 mb-6">
Félicitations ! Votre abonnement au Pass Cookup a été activé
                    avec succès. Vous allez recevoir un email de confirmation
                    dans quelques instants.
</p> <button onclick="closeModal()" class="w-full bg-emerald-600 text-white py-2 px-4 rounded-md font-medium hover:bg-emerald-700 transition-colors">
Continuer
</button> </div> </div> </div> ${renderScript($$result2, "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/abonnement-cookup.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/abonnement-cookup.astro", void 0);

const $$file = "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/abonnement-cookup.astro";
const $$url = "/abonnement-cookup";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$AbonnementCookup,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
