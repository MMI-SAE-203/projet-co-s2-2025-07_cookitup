import pb from '../lib/pocketbase.js';

// ✅ ADAPTÉE À VOTRE STRUCTURE : récupère toutes les recettes avec les relations
export async function getAllRecettes() {
    try {
        return await pb.collection('recettes').getFullList({
            sort: '-created', // Tri par date de création (plus récent en premier)
            expand: 'ingredients,sponsorise' // ← CHANGE: expand vos relations (ingredients et sponsorisé)
        });
    } catch (error) {
        console.error('Erreur lors de la récupération des recettes:', error);
        return [];
    }
}

// ✅ ADAPTÉE À VOTRE STRUCTURE : récupère une recette par ID
export async function getRecetteById(id) {
    try {
        return await pb.collection('recettes').getOne(id, {
            expand: 'ingredients,sponsorise' // ← CHANGE: expand vos relations
        });
    } catch (error) {
        console.error('Erreur lors de la récupération de la recette:', error);
        return null;
    }
}

// ✅ ADAPTÉE À VOTRE STRUCTURE : récupère les recettes favorites
export async function getFavorisRecettes() {
    try {
        return await pb.collection('recettes').getFullList({
            filter: 'favori = true', // ← CHANGE: utilise votre champ "favori" (booléen)
            sort: '-created',
            limit: 6,
            expand: 'ingredients,sponsorise'
        });
    } catch (error) {
        console.error('Erreur lors de la récupération des favoris:', error);
        return [];
    }
}

// ✅ ADAPTÉE À VOTRE STRUCTURE : recettes similaires (basé sur les ingrédients communs)
export async function getRecettesSimilaires(recetteId, limit = 4) {
    try {
        // Récupère d'abord la recette actuelle
        const recetteActuelle = await pb.collection('recettes').getOne(recetteId, {
            expand: 'ingredients'
        });

        // Si pas d'ingrédients, retourne des recettes récentes
        if (!recetteActuelle.expand?.ingredients) {
            return await pb.collection('recettes').getFullList({
                filter: `id != "${recetteId}"`,
                sort: '-created',
                limit: limit,
                expand: 'ingredients,sponsorise'
            });
        }

        // Sinon, trouve des recettes avec des ingrédients similaires
        // ← CHANGE: Adaptez cette logique selon vos besoins
        return await pb.collection('recettes').getFullList({
            filter: `id != "${recetteId}"`,
            sort: '-created',
            limit: limit,
            expand: 'ingredients,sponsorise'
        });
    } catch (error) {
        console.error('Erreur lors de la récupération des recettes similaires:', error);
        return [];
    }
}

// ✅ ADAPTÉE À VOTRE STRUCTURE : recherche dans les recettes
export async function searchRecettes(query) {
    try {
        return await pb.collection('recettes').getFullList({
            filter: `nom ~ "${query}"`, // ← CHANGE: recherche dans le champ "nom"
            sort: '-created',
            expand: 'ingredients,sponsorise'
        });
    } catch (error) {
        console.error('Erreur lors de la recherche de recettes:', error);
        return [];
    }
}

// ✅ ADAPTÉE À VOTRE STRUCTURE : toggle favoris
export async function toggleFavoris(recetteId) {
    try {
        // Récupère l'état actuel
        const recette = await pb.collection('recettes').getOne(recetteId);

        // Inverse l'état du champ "favori"
        return await pb.collection('recettes').update(recetteId, {
            favori: !recette.favori // ← CHANGE: utilise votre champ "favori"
        });
    } catch (error) {
        console.error('Erreur lors de la mise à jour des favoris:', error);
        return null;
    }
}

// ✅ NOUVELLE : récupère les recettes sponsorisées
export async function getRecettesSponsors() {
    try {
        return await pb.collection('recettes').getFullList({
            filter: 'sponsorise != ""', // ← CHANGE: filtre les recettes qui ont un sponsor
            sort: '-created',
            expand: 'ingredients,sponsorise'
        });
    } catch (error) {
        console.error('Erreur lors de la récupération des recettes sponsorisées:', error);
        return [];
    }
}

// ✅ NOUVELLE : récupère tous les ingrédients
export async function getAllIngredients() {
    try {
        return await pb.collection('ingredients').getFullList({
            sort: 'nom' // ← CHANGE: adaptez selon le nom de votre champ dans la collection ingredients
        });
    } catch (error) {
        console.error('Erreur lors de la récupération des ingrédients:', error);
        return [];
    }
}