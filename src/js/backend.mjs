import pb from '../lib/pocketbase.js';

// ✅ RÉCUPÈRE TOUTES LES RECETTES AVEC STATUT FAVORI
export async function getAllRecettes() {
    try {
        const result = await pb.collection('recettes').getFullList({
            sort: '-created',
            expand: 'ingredients,sponsorise'
        });

        // Ajouter le statut favori pour chaque recette
        if (pb.authStore.isValid) {
            const favoris = await pb.collection('favoris').getFullList({
                filter: `user = "${pb.authStore.model.id}"`,
            });
            const favoriteIds = favoris.map(favori => favori.recette);

            return result.map(recette => ({
                ...recette,
                isFavorite: favoriteIds.includes(recette.id)
            }));
        } else {
            return result.map(recette => ({ ...recette, isFavorite: false }));
        }
    } catch (error) {
        console.error('❌ Erreur getAllRecettes:', error);
        return [];
    }
}

// ✅ RÉCUPÈRE UNE RECETTE PAR ID
export async function getRecetteById(id) {
    try {
        const recette = await pb.collection('recettes').getOne(id, {
            expand: 'ingredients,sponsorise'
        });

        // Vérifier si c'est un favori pour l'utilisateur connecté
        if (pb.authStore.isValid) {
            const favoris = await pb.collection('favoris').getFullList({
                filter: `user = "${pb.authStore.model.id}" && recette = "${id}"`,
            });
            recette.isFavorite = favoris.length > 0;
        } else {
            recette.isFavorite = false;
        }

        return recette;
    } catch (error) {
        console.error('❌ Erreur getRecetteById:', error);
        return null;
    }
}

// ✅ RECETTES SIMILAIRES AVEC STATUT FAVORI
export async function getRecettesSimilaires(recetteId, limit = 4) {
    try {
        const recettes = await pb.collection('recettes').getFullList({
            filter: `id != "${recetteId}"`,
            sort: '-created',
            limit: limit,
            expand: 'ingredients,sponsorise'
        });

        // Ajouter le statut favori pour chaque recette
        if (pb.authStore.isValid) {
            const favoris = await pb.collection('favoris').getFullList({
                filter: `user = "${pb.authStore.model.id}"`,
            });
            const favoriteIds = favoris.map(favori => favori.recette);

            return recettes.map(recette => ({
                ...recette,
                isFavorite: favoriteIds.includes(recette.id)
            }));
        } else {
            return recettes.map(recette => ({ ...recette, isFavorite: false }));
        }
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

// ✅ RÉCUPÈRE LES FAVORIS DE L'UTILISATEUR CONNECTÉ
export async function getUserFavorites() {
    if (!pb.authStore.isValid) return [];

    try {
        console.log("🔍 Récupération des favoris pour l'utilisateur:", pb.authStore.model.id);

        const favoris = await pb.collection('favoris').getFullList({
            filter: `user = "${pb.authStore.model.id}"`,
            expand: 'recette,recette.ingredients,recette.sponsorise',
            sort: '-created'
        });

        console.log(`📊 Nombre de favoris trouvés: ${favoris.length}`);

        // Extraire les recettes des favoris et ajouter isFavorite=true
        const recettes = favoris
            .map(favori => {
                if (!favori.expand?.recette) {
                    console.warn("⚠️ Favori sans recette associée:", favori.id);
                    return null;
                }
                return {
                    ...favori.expand.recette,
                    isFavorite: true
                };
            })
            .filter(Boolean);

        console.log(`📊 Nombre de recettes favorites valides: ${recettes.length}`);
        return recettes;
    } catch (error) {
        console.error('❌ Erreur getUserFavorites:', error);
        return [];
    }
}
