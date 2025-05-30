import pb from '../lib/pocketbase.js';

// ✅ RÉCUPÈRE TOUTES LES RECETTES
export async function getAllRecettes() {
    try {
        const result = await pb.collection('recettes').getFullList({
            sort: '-created',
            expand: 'ingredients,sponsorise'
        });
        console.log("📊 Recettes récupérées:", result.length);
        return result;
    } catch (error) {
        console.error('❌ Erreur getAllRecettes:', error);
        return [];
    }
}

// ✅ RÉCUPÈRE UNE RECETTE PAR ID
export async function getRecetteById(id) {
    try {
        return await pb.collection('recettes').getOne(id, {
            expand: 'ingredients,sponsorise'
        });
    } catch (error) {
        console.error('❌ Erreur getRecetteById:', error);
        return null;
    }
}

// ✅ RECETTES SIMILAIRES
export async function getRecettesSimilaires(recetteId, limit = 4) {
    try {
        return await pb.collection('recettes').getFullList({
            filter: `id != "${recetteId}"`,
            sort: '-created',
            limit: limit,
            expand: 'ingredients,sponsorise'
        });
    } catch (error) {
        console.error('❌ Erreur getRecettesSimilaires:', error);
        return [];
    }
}

// ✅ RECHERCHE DANS LES RECETTES
export async function searchRecettes(query) {
    try {
        return await pb.collection('recettes').getFullList({
            filter: `nom ~ "${query}"`,
            sort: '-created',
            expand: 'ingredients,sponsorise'
        });
    } catch (error) {
        console.error('❌ Erreur searchRecettes:', error);
        return [];
    }
}

// ✅ RECETTES SPONSORISÉES
export async function getRecettesSponsors() {
    try {
        return await pb.collection('recettes').getFullList({
            filter: 'sponsorise != ""',
            sort: '-created',
            expand: 'ingredients,sponsorise'
        });
    } catch (error) {
        console.error('❌ Erreur getRecettesSponsors:', error);
        return [];
    }
}

// ✅ TOUS LES INGRÉDIENTS
export async function getAllIngredients() {
    try {
        return await pb.collection('ingredients').getFullList({
            sort: 'nom'
        });
    } catch (error) {
        console.error('❌ Erreur getAllIngredients:', error);
        return [];
    }
}
