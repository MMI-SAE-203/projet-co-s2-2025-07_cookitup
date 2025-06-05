import { c as createComponent, r as renderComponent, b as renderScript, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CfTmU_QD.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BngmRMf4.mjs';
export { renderers } from '../renderers.mjs';

const $$Profil = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Mon Profil | Cookit-UP" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-8"> <!-- État de chargement --> <div id="loadingState" class="text-center py-16"> <div class="text-4xl mb-4"></div> <h2 class="text-xl font-bold mb-2">Chargement du profil...</h2> </div> <!-- État non connecté --> <div id="notLoggedInState" class="text-center py-16 bg-gray-50 rounded-lg hidden"> <div class="text-6xl mb-4"></div> <h2 class="text-2xl font-bold mb-2">Accès restreint</h2> <p class="text-gray-600 mb-6">
Vous devez être connecté pour accéder à votre profil.
</p> <a href="/connexion" class="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-3 rounded-lg transition">
Se connecter
</a> </div> <!-- Contenu principal --> <div id="mainContent" class="hidden"> <!-- En-tête du profil --> <div class="bg-white rounded-lg shadow-lg p-8 mb-8"> <div class="flex flex-col md:flex-row items-center md:items-start gap-6"> <!-- Photo de profil --> <div class="relative"> <div class="w-32 h-32 rounded-full overflow-hidden bg-gray-200 border-4 border-white shadow-lg"> <img id="profileAvatar" src="/placeholder.svg" alt="Photo de profil" class="w-full h-full object-cover"> </div> <button id="changeAvatarBtn" class="absolute bottom-0 right-0 bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-full shadow-lg transition" title="Changer la photo">
📷
</button> <input type="file" id="avatarInput" accept="image/*" class="hidden"> </div> <!-- Informations utilisateur --> <div class="flex-1 text-center md:text-left"> <h1 id="userName" class="text-3xl font-bold mb-2">
Chargement...
</h1> <p id="userEmail" class="text-gray-600 mb-4">
email@example.com
</p> <!-- Statut Cookup --> <div id="cookupStatus" class="mb-4"> <!-- Sera rempli dynamiquement --> </div> <!-- Statistiques --> <div class="flex justify-center md:justify-start gap-6 text-sm"> <div class="text-center"> <div id="commentCount" class="text-2xl font-bold text-yellow-500">
0
</div> <div class="text-gray-600">Commentaires</div> </div> <div class="text-center"> <div id="favoriteCount" class="text-2xl font-bold text-red-500">
0
</div> <div class="text-gray-600">Favoris</div> </div> <div class="text-center"> <div class="text-2xl font-bold text-green-500" id="memberSince">
2024
</div> <div class="text-gray-600">Membre depuis</div> </div> </div> </div> </div> </div> <!-- Call to Action Cookup Pass --> <div id="cookupCTA" class="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg shadow-lg p-8 mb-8 text-white hidden"> <div class="flex flex-col md:flex-row items-center justify-between"> <div class="mb-4 md:mb-0"> <h2 class="text-2xl font-bold mb-2">
Découvrez le Pass Cookup
</h2> <p class="text-yellow-100">
Accédez à des recettes exclusives, des cours de
                            cuisine, la gestion de vos préférences alimentaires
                            et bien plus encore !
</p> <ul class="text-yellow-100 text-sm mt-2 space-y-1"> <li>
• Gestion personnalisée de votre régime
                                alimentaire
</li> <li>• Recettes adaptées à vos préférences</li> <li>• Cours de cuisine exclusifs</li> <li>• Contenu premium</li> </ul> </div> <button id="getCookupPass" class="bg-white text-orange-500 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition whitespace-nowrap">
Obtenir le Pass Cookup
</button> </div> </div> <!-- Onglets --> <div class="bg-white rounded-lg shadow-lg overflow-hidden"> <!-- Navigation des onglets --> <div class="border-b border-gray-200"> <nav class="flex"> <button class="tab-btn px-6 py-4 text-sm font-medium border-b-2 border-yellow-500 text-yellow-600 bg-yellow-50" data-tab="profile">
Informations personnelles
</button> <button id="regimeTabBtn" class="tab-btn px-6 py-4 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" data-tab="regime">
Régime alimentaire
<span class="ml-1 text-xs bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full">COOKUP</span> </button> <button class="tab-btn px-6 py-4 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" data-tab="comments">
Mes commentaires
</button> <button class="tab-btn px-6 py-4 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" data-tab="avis">
Mes avis
</button> <button class="tab-btn px-6 py-4 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" data-tab="subscription">
Gérer l'abonnement
</button> <button class="tab-btn px-6 py-4 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" data-tab="security">
Sécurité
</button> <button class="tab-btn px-6 py-4 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" data-tab="recipes">
Mes recettes
</button> </nav> </div> <!-- Contenu des onglets --> <div class="p-8"> <!-- Onglet Informations personnelles --> <div id="profileTab" class="tab-content"> <h2 class="text-xl font-bold mb-6">
Informations personnelles
</h2> <form id="profileForm" class="space-y-6"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <label for="prenom" class="block text-sm font-medium text-gray-700 mb-2">Prénom</label> <input type="text" id="prenom" name="prenom" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"> </div> <div> <label for="nomFamille" class="block text-sm font-medium text-gray-700 mb-2">Nom de famille</label> <input type="text" id="nomFamille" name="nomFamille" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"> </div> </div> <div> <label for="pseudo" class="block text-sm font-medium text-gray-700 mb-2">Pseudo</label> <input type="text" id="pseudo" name="pseudo" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"> </div> <div> <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input type="email" id="email" name="email" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"> </div> <!-- Message d'erreur/succès --> <div id="profileMessage" class="hidden"></div> <div class="flex gap-4"> <button type="submit" class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-2 rounded-lg transition">
Sauvegarder les modifications
</button> <button type="button" onclick="loadUserProfile()" class="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold px-6 py-2 rounded-lg transition">
Annuler
</button> </div> </form> </div> <!-- Onglet Régime alimentaire --> <div id="regimeTab" class="tab-content hidden"> <h2 class="text-xl font-bold mb-6">
Régime alimentaire
</h2> <p class="text-gray-600 mb-6">
Sélectionnez vos préférences alimentaires pour
                            personnaliser vos recommandations de recettes.
</p> <!-- Vérification du pass Cookup --> <div id="regimeAccessDenied" class="text-center py-12 bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-xl hidden"> <div class="text-6xl mb-4"></div> <h3 class="text-2xl font-bold text-orange-800 mb-3">
Fonctionnalité réservée au Pass Cookup
</h3> <p class="text-orange-600 mb-6 max-w-md mx-auto">
Débloquez la gestion personnalisée de vos
                                préférences alimentaires et obtenez des
                                recommandations de recettes adaptées à votre
                                régime.
</p> <!-- Aperçu des fonctionnalités --> <div class="grid grid-cols-2 gap-4 max-w-lg mx-auto mb-6 text-sm"> <div class="bg-white/50 p-3 rounded-lg border border-orange-100"> <div class="text-2xl mb-1"></div> <div class="font-medium text-orange-800">
Végétarien
</div> </div> <div class="bg-white/50 p-3 rounded-lg border border-orange-100"> <div class="text-2xl mb-1"></div> <div class="font-medium text-orange-800">
Végan
</div> </div> <div class="bg-white/50 p-3 rounded-lg border border-orange-100"> <div class="text-2xl mb-1"></div> <div class="font-medium text-orange-800">
Sans gluten
</div> </div> <div class="bg-white/50 p-3 rounded-lg border border-orange-100"> <div class="text-2xl mb-1"></div> <div class="font-medium text-orange-800">
Halal
</div> </div> </div> <button id="getCookupPassFromRegime" class="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold px-8 py-4 rounded-xl hover:from-yellow-500 hover:to-orange-600 transition transform hover:scale-105 shadow-lg">
Débloquer avec le Pass Cookup
</button> <p class="text-xs text-orange-500 mt-4">
Accès immédiat à toutes les fonctionnalités
                                premium
</p> </div> <form id="regimeForm" class="space-y-6"> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <!-- Végétarien --> <label class="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"> <input type="checkbox" name="regime" value="végétarien" class="w-5 h-5 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"> <div class="ml-3"> <div class="text-lg font-medium text-gray-900">
Végétarien
</div> <div class="text-sm text-gray-500">
Pas de viande ni de poisson
</div> </div> </label> <!-- Végan --> <label class="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"> <input type="checkbox" name="regime" value="végan" class="w-5 h-5 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"> <div class="ml-3"> <div class="text-lg font-medium text-gray-900">
Végan
</div> <div class="text-sm text-gray-500">
Aucun produit d'origine animale
</div> </div> </label> <!-- Sans gluten --> <label class="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"> <input type="checkbox" name="regime" value="sans-gluten" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"> <div class="ml-3"> <div class="text-lg font-medium text-gray-900">
Sans gluten
</div> <div class="text-sm text-gray-500">
Sans blé, orge, seigle
</div> </div> </label> <!-- Halal --> <label class="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"> <input type="checkbox" name="regime" value="halal" class="w-5 h-5 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2"> <div class="ml-3"> <div class="text-lg font-medium text-gray-900">
Halal
</div> <div class="text-sm text-gray-500">
Conforme aux prescriptions
                                            islamiques
</div> </div> </label> </div> <!-- Message d'erreur/succès --> <div id="regimeMessage" class="hidden"></div> <div class="flex gap-4"> <button type="submit" class="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-2 rounded-lg transition">
Sauvegarder mes préférences
</button> <button type="button" onclick="loadUserRegimes()" class="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold px-6 py-2 rounded-lg transition">
Annuler
</button> </div> </form> <!-- Section informative --> <div class="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg"> <h3 class="text-lg font-bold text-blue-800 mb-2">
Pourquoi indiquer votre régime ?
</h3> <ul class="text-blue-700 space-y-1"> <li>
• Recettes personnalisées selon vos
                                    préférences
</li> <li>
• Filtrage automatique des recettes
                                    incompatibles
</li> <li>• Suggestions d'ingrédients adaptés</li> <li>• Meilleure expérience de navigation</li> </ul> </div> </div> <!-- Onglet Commentaires --> <div id="commentsTab" class="tab-content hidden"> <h2 class="text-xl font-bold mb-6">Mes commentaires</h2> <!-- État de chargement des commentaires --> <div id="commentsLoading" class="text-center py-8"> <div class="text-2xl mb-2"></div> <p class="text-gray-600">
Chargement de vos commentaires...
</p> </div> <!-- Liste des commentaires --> <div id="userCommentsList" class="space-y-4 hidden"> <!-- Les commentaires seront ajoutés ici --> </div> <!-- État vide --> <div id="noUserComments" class="text-center py-12 hidden"> <div class="text-6xl mb-4"></div> <h3 class="text-xl font-bold mb-2">
Aucun commentaire
</h3> <p class="text-gray-600 mb-4">
Vous n'avez pas encore laissé de commentaires
                                sur nos recettes.
</p> <a href="/recette-plat" class="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-3 rounded-lg transition">
Découvrir les recettes
</a> </div> </div> <!-- Onglet Mes avis --> <div id="avisTab" class="tab-content hidden"> <div class="flex justify-between items-center mb-6"> <h2 class="text-xl font-bold">
Mes avis sur le site
</h2> <a href="/avis-site" class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-4 py-2 rounded-lg transition">
Donner un avis
</a> </div> <!-- État de chargement des avis --> <div id="avisLoading" class="text-center py-8"> <div class="text-2xl mb-2"></div> <p class="text-gray-600">
Chargement de vos avis...
</p> </div> <!-- Liste des avis --> <div id="userAvisList" class="space-y-4 hidden"> <!-- Les avis seront ajoutés ici --> </div> <!-- État vide --> <div id="noUserAvis" class="text-center py-12 hidden"> <div class="text-6xl mb-4"></div> <h3 class="text-xl font-bold mb-2">
Aucun avis donné
</h3> <p class="text-gray-600 mb-4">
Vous n'avez pas encore donné votre avis sur
                                Cookit-UP.
</p> <a href="/avis-site" class="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-3 rounded-lg transition">
Donner mon avis
</a> </div> </div> <!-- Onglet Gérer l'abonnement --> <div id="subscriptionTab" class="tab-content hidden"> <h2 class="text-xl font-bold mb-6">
Gérer mon abonnement
</h2> <!-- État de chargement --> <div id="subscriptionLoading" class="text-center py-8"> <div class="text-2xl mb-2"></div> <p class="text-gray-600">
Chargement des informations d'abonnement...
</p> </div> <!-- Pas d'abonnement --> <div id="noSubscription" class="text-center py-12 bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-xl hidden"> <div class="text-6xl mb-4"></div> <h3 class="text-2xl font-bold text-orange-800 mb-3">
Aucun abonnement actif
</h3> <p class="text-orange-600 mb-6 max-w-md mx-auto">
Vous n'avez pas encore d'abonnement Pass Cookup.
                                Découvrez tous les avantages et souscrivez dès
                                maintenant !
</p> <!-- Aperçu des avantages --> <div class="grid grid-cols-2 gap-4 max-w-lg mx-auto mb-6 text-sm"> <div class="bg-white/50 p-3 rounded-lg border border-orange-100"> <div class="text-2xl mb-1"></div> <div class="font-medium text-orange-800">
Recettes premium
</div> </div> <div class="bg-white/50 p-3 rounded-lg border border-orange-100"> <div class="text-2xl mb-1"></div> <div class="font-medium text-orange-800">
Codes promo
</div> </div> <div class="bg-white/50 p-3 rounded-lg border border-orange-100"> <div class="text-2xl mb-1"></div> <div class="font-medium text-orange-800">
Planificateur
</div> </div> <div class="bg-white/50 p-3 rounded-lg border border-orange-100"> <div class="text-2xl mb-1"></div> <div class="font-medium text-orange-800">
Support prioritaire
</div> </div> </div> <div class="space-y-3"> <a href="/pass-cookup" class="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold px-8 py-4 rounded-xl hover:from-yellow-500 hover:to-orange-600 transition transform hover:scale-105 shadow-lg">
Découvrir le Pass Cookup
</a> <br> <a href="/abonnement-cookup" class="inline-block bg-emerald-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-emerald-700 transition">
S'abonner maintenant
</a> </div> <p class="text-xs text-orange-500 mt-4">
À partir de 5,99€/mois • Résiliable à tout
                                moment
</p> </div> <!-- Abonnement actif --> <div id="activeSubscription" class="hidden"> <!-- Informations de l'abonnement --> <div class="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg p-6 text-white mb-6"> <div class="flex items-center justify-between"> <div> <h3 class="text-xl font-bold mb-2">
Pass Cookup Actif
</h3> <p id="subscriptionType" class="text-emerald-100">
Abonnement mensuel
</p> </div> <div class="text-right"> <div class="text-2xl font-bold" id="subscriptionPrice">
5,99€
</div> <div class="text-emerald-100 text-sm">
par mois
</div> </div> </div> </div> <!-- Détails de l'abonnement --> <div class="bg-white border border-gray-200 rounded-lg p-6 mb-6"> <h4 class="font-semibold text-gray-900 mb-4">
Détails de l'abonnement
</h4> <div class="grid md:grid-cols-2 gap-4 text-sm"> <div> <span class="text-gray-600">Date de souscription :</span> <span id="subscriptionStartDate" class="font-medium ml-2">15 janvier 2024</span> </div> <div> <span class="text-gray-600">Prochaine facturation :</span> <span id="nextBillingDate" class="font-medium ml-2">15 février 2024</span> </div> <div> <span class="text-gray-600">Statut :</span> <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 ml-2">
✅ Actif
</span> </div> <div> <span class="text-gray-600">Renouvellement automatique :</span> <span id="autoRenewal" class="font-medium ml-2">Activé</span> </div> </div> </div> <!-- Avantages inclus --> <div class="bg-gray-50 rounded-lg p-6 mb-6"> <h4 class="font-semibold text-gray-900 mb-4">
Vos avantages Pass Cookup
</h4> <div class="grid md:grid-cols-2 gap-3"> <div class="flex items-center"> <svg class="h-5 w-5 text-emerald-500 mr-3" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> <span class="text-gray-700">Accès aux recettes premium</span> </div> <div class="flex items-center"> <svg class="h-5 w-5 text-emerald-500 mr-3" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> <span class="text-gray-700">Codes promo partenaires exclusifs</span> </div> <div class="flex items-center"> <svg class="h-5 w-5 text-emerald-500 mr-3" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> <span class="text-gray-700">Planificateur de menus personnalisé</span> </div> <div class="flex items-center"> <svg class="h-5 w-5 text-emerald-500 mr-3" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> <span class="text-gray-700">Support client prioritaire</span> </div> <div class="flex items-center"> <svg class="h-5 w-5 text-emerald-500 mr-3" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> <span class="text-gray-700">Gestion des préférences
                                            alimentaires</span> </div> <div class="flex items-center"> <svg class="h-5 w-5 text-emerald-500 mr-3" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> <span class="text-gray-700">Accès à la carte des partenaires</span> </div> </div> </div> <!-- Actions --> <div class="space-y-4"> <!-- Modifier l'abonnement --> <div class="bg-blue-50 border border-blue-200 rounded-lg p-4"> <h5 class="font-medium text-blue-800 mb-2">
Modifier votre abonnement
</h5> <p class="text-blue-700 text-sm mb-3">
Vous pouvez passer à l'abonnement annuel
                                        et économiser 26% sur votre facture.
</p> <button onclick="upgradeSubscription()" class="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">
Passer à l'abonnement annuel
</button> </div> <!-- Résilier l'abonnement --> <div class="bg-red-50 border border-red-200 rounded-lg p-4"> <h5 class="font-medium text-red-800 mb-2">
Résilier votre abonnement
</h5> <p class="text-red-700 text-sm mb-3">
Vous perdrez l'accès à tous les
                                        avantages du Pass Cookup à la fin de
                                        votre période de facturation actuelle.
</p> <button onclick="cancelSubscription()" class="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition">
Résilier l'abonnement
</button> </div> </div> </div> </div> <!-- Onglet Sécurité --> <div id="securityTab" class="tab-content hidden"> <h2 class="text-xl font-bold mb-6">
Sécurité du compte
</h2> <form id="passwordForm" class="space-y-6"> <div> <label for="currentPassword" class="block text-sm font-medium text-gray-700 mb-2">Mot de passe actuel</label> <input type="password" id="currentPassword" name="currentPassword" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"> </div> <div> <label for="newPassword" class="block text-sm font-medium text-gray-700 mb-2">Nouveau mot de passe</label> <input type="password" id="newPassword" name="newPassword" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"> </div> <div> <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-2">Confirmer le nouveau mot de passe</label> <input type="password" id="confirmPassword" name="confirmPassword" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"> </div> <!-- Message d'erreur/succès --> <div id="passwordMessage" class="hidden"></div> <button type="submit" class="bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-2 rounded-lg transition">
Changer le mot de passe
</button> </form> <!-- Section suppression de compte --> <div class="mt-12 p-6 bg-red-50 border border-red-200 rounded-lg"> <h3 class="text-lg font-bold text-red-800 mb-2">
Zone dangereuse
</h3> <p class="text-red-600 mb-4">
La suppression de votre compte est irréversible.
</p> <button onclick="deleteAccount()" class="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2 rounded-lg transition">
Supprimer mon compte
</button> </div> </div> <!-- Onglet Mes recettes --> <div id="recipesTab" class="tab-content hidden"> <div class="flex justify-between items-center mb-6"> <h2 class="text-xl font-bold">Mes recettes</h2> <a href="/creer-recette" class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-4 py-2 rounded-lg transition">
Créer une recette
</a> </div> <!-- État de chargement des recettes --> <div id="recipesLoading" class="text-center py-8"> <div class="text-2xl mb-2"></div> <p class="text-gray-600">
Chargement de vos recettes...
</p> </div> <!-- Liste des recettes --> <div id="userRecipesList" class="grid grid-cols-1 md:grid-cols-2 gap-6 hidden"> <!-- Les recettes seront ajoutées ici --> </div> <!-- État vide --> <div id="noUserRecipes" class="text-center py-12 hidden"> <div class="text-6xl mb-4"></div> <h3 class="text-xl font-bold mb-2">
Aucune recette publiée
</h3> <p class="text-gray-600 mb-4">
Vous n'avez pas encore créé de recettes.
                                Partagez vos talents culinaires avec la
                                communauté !
</p> <a href="/creer-recette" class="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-3 rounded-lg transition">
Créer ma première recette
</a> </div> </div> </div> </div> </div> </main> ` })} ${renderScript($$result, "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/profil.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/profil.astro", void 0);

const $$file = "C:/Users/titou/GitHub/projet-co-s2-2025-07_cookitup/src/pages/profil.astro";
const $$url = "/profil";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Profil,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
