import PocketBase from 'pocketbase';
const pb = new PocketBase("https://cookit-up.titouan-winkel.fr");

// ✅ RÉCUPÈRE TOUTES LES RECETTES AVEC STATUT FAVORI (VERSION CORRIGÉE)
export async function getAllRecettes() {
    try {
        console.log('🔄 Début de récupération des recettes...');

        // Vérifier la connexion à PocketBase
        if (!pb.baseUrl) {
            console.error('❌ PocketBase non configuré');
            return [];
        }

        console.log('📡 Connexion à PocketBase:', pb.baseUrl);

        // Utiliser getFullList() pour récupérer TOUTES les recettes sans limitation
        // ✅ CORRECTION: Mise à jour des noms de champs pour correspondre à la structure réelle
        const result = await pb.collection('recettes').getFullList({
            sort: '-created',
            fields: 'id,nom,img,temps_prep,categorie,ingredients,preparation,regime,calories,commentaire,sponsorise,created,updated'
        });

        console.log(`✅ ${result.length} recettes récupérées depuis PocketBase`);

        if (result.length > 0) {
            console.log('📝 Exemple de recette brute:', result[0]);
        }

        // Transformer les données pour inclure l'URL complète de l'image
        const recettes = result.map(recette => {
            console.log(`🖼️ Recette ${recette.nom} - img field:`, recette.img);

            // ✅ CORRECTION : Vérifier si l'URL est déjà complète
            let imageUrl = null;
            if (recette.img) {
                if (recette.img.startsWith('http')) {
                    // L'URL est déjà complète
                    imageUrl = recette.img;
                } else {
                    // Construire l'URL complète
                    imageUrl = `https://cookit-up.titouan-winkel.fr/api/files/recettes/${recette.id}/${recette.img}`;
                }
            }

            return {
                id: recette.id,
                nom: recette.nom,
                img: imageUrl,
                temps_prep: recette.temps_prep,
                categorie: recette.categorie,
                ingredients: recette.ingredients || [],
                preparation: recette.preparation || "",
                regime: recette.regime || [],
                calories: recette.calories || 0,
                commentaire: recette.commentaire || "",
                sponsorise: recette.sponsorise || false,
                created: recette.created,
                updated: recette.updated,
                isFavorite: false // Par défaut, sera mis à jour côté client si l'utilisateur est connecté
            };
        });

        console.log('🍽️ Exemple de recette transformée:', recettes[0]);

        return recettes;

    } catch (error) {
        console.error('❌ Erreur lors de la récupération des recettes:', error);
        console.error('Détails de l\'erreur:', error);

        // Retourner des données de démonstration en cas d'erreur
        console.log('🔄 Utilisation des données de démonstration...');
        return getDemoRecettes();
    }
}

// ✅ RÉCUPÈRE UNE RECETTE SPÉCIFIQUE PAR ID
export async function getRecetteById(id) {
    try {
        console.log(`🔍 Recherche de la recette avec l'ID: ${id}`);

        const recette = await pb.collection('recettes').getOne(id, {
            expand: 'commentaires(recette).user'
        });

        console.log('✅ Recette trouvée:', recette.nom);
        console.log('📝 Données brutes de la recette:', recette);

        // ✅ CORRECTION : Vérifier si l'URL est déjà complète
        let imageUrl = null;
        if (recette.img) {
            if (recette.img.startsWith('http')) {
                imageUrl = recette.img;
            } else {
                imageUrl = `https://cookit-up.titouan-winkel.fr/api/files/recettes/${recette.id}/${recette.img}`;
            }
        }

        // Transformer les données
        const recetteComplete = {
            id: recette.id,
            nom: recette.nom,
            img: imageUrl,
            temps_prep: recette.temps_prep,
            categorie: recette.categorie,
            ingredients: recette.ingredients || [],
            preparation: recette.preparation || "",
            regime: recette.regime || [],
            calories: recette.calories || 0,
            commentaire: recette.commentaire || "",
            sponsorise: recette.sponsorise || false,
            created: recette.created,
            updated: recette.updated,
            commentaires: recette.expand?.['commentaires(recette)'] || []
        };

        return recetteComplete;

    } catch (error) {
        console.error(`❌ Erreur lors de la récupération de la recette ${id}:`, error);

        // Retourner une recette de démonstration
        return getDemoRecetteById(id);
    }
}

// ✅ RÉCUPÈRE LES INGRÉDIENTS PAR LEURS IDS
export async function getIngredientsByIds(ingredientIds) {
    try {
        if (!ingredientIds || !Array.isArray(ingredientIds) || ingredientIds.length === 0) {
            return [];
        }

        console.log(`🥕 Récupération des ingrédients par IDs: ${ingredientIds.join(', ')}`);

        // Créer un filtre pour tous les IDs
        const filter = ingredientIds.map(id => `id = "${id}"`).join(' || ');

        const ingredients = await pb.collection('ingredients').getFullList({
            filter: filter,
            fields: 'id,nom'
        });

        console.log(`✅ ${ingredients.length} ingrédients récupérés`);

        // Créer un mapping des IDs aux noms pour préserver l'ordre
        const ingredientsMap = {};
        ingredients.forEach(ing => {
            ingredientsMap[ing.id] = ing.nom;
        });

        // Retourner les noms dans le même ordre que les IDs
        return ingredientIds.map(id => ingredientsMap[id] || "Ingrédient inconnu");

    } catch (error) {
        console.error('❌ Erreur lors de la récupération des ingrédients:', error);
        return ingredientIds.map(() => "Ingrédient");
    }
}

// ✅ RÉCUPÈRE LES RECETTES SIMILAIRES À UNE RECETTE DONNÉE
export async function getRecettesSimilaires(recetteId, limit = 4) {
    try {
        console.log(`🔍 Recherche de recettes similaires à la recette ${recetteId}...`);

        // Récupérer la recette principale pour connaître sa catégorie
        const recettePrincipale = await pb.collection('recettes').getOne(recetteId, {
            fields: 'id,categorie,regime'
        });

        console.log(`✅ Recette principale récupérée: ${recettePrincipale.id}`);

        // Construire le filtre pour trouver des recettes similaires
        let filterParts = [];

        // Exclure la recette principale
        filterParts.push(`id != "${recetteId}"`);

        // Filtrer par catégorie si disponible
        if (recettePrincipale.categorie) {
            filterParts.push(`categorie = "${recettePrincipale.categorie}"`);
        }

        // Filtrer par régime si disponible
        if (recettePrincipale.regime && recettePrincipale.regime.length > 0) {
            const regimeFilters = recettePrincipale.regime.map(regime => `regime ?~ "${regime}"`);
            if (regimeFilters.length > 0) {
                filterParts.push(`(${regimeFilters.join(' || ')})`);
            }
        }

        // Combiner les filtres
        const filter = filterParts.join(' && ');

        console.log(`🔍 Filtre pour recettes similaires: ${filter}`);

        // Récupérer les recettes similaires
        const recettesSimilaires = await pb.collection('recettes').getList(1, limit, {
            filter: filter,
            sort: 'created',
            fields: 'id,nom,img,temps_prep,categorie,ingredients,regime,calories,sponsorise,created'
        });

        console.log(`✅ ${recettesSimilaires.items.length} recettes similaires trouvées`);

        // Si on n'a pas assez de recettes similaires, compléter avec des recettes aléatoires
        let recettes = [...recettesSimilaires.items];

        if (recettes.length < limit) {
            console.log(`⚠️ Pas assez de recettes similaires, ajout de recettes aléatoires...`);

            // Récupérer des recettes aléatoires (en excluant la recette principale et celles déjà trouvées)
            const idsExclus = [recetteId, ...recettes.map(r => r.id)];
            const filtreAleatoire = `id != "${idsExclus.join('" && id != "')}"`;

            const recettesAleatoires = await pb.collection('recettes').getList(1, limit - recettes.length, {
                filter: filtreAleatoire,
                sort: 'random()',
                fields: 'id,nom,img,temps_prep,categorie,ingredients,regime,calories,sponsorise,created'
            });

            recettes = [...recettes, ...recettesAleatoires.items];
            console.log(`✅ ${recettesAleatoires.items.length} recettes aléatoires ajoutées`);
        }

        // Transformer les données pour le format attendu par le composant Plat
        const recettesTransformees = recettes.map(recette => {
            // ✅ CORRECTION : Vérifier si l'URL est déjà complète
            let imageUrl = null;
            if (recette.img) {
                if (recette.img.startsWith('http')) {
                    imageUrl = recette.img;
                } else {
                    imageUrl = `https://cookit-up.titouan-winkel.fr/api/files/recettes/${recette.id}/${recette.img}`;
                }
            }

            return {
                id: recette.id,
                nom: recette.nom,
                img: imageUrl,
                temps_prep: recette.temps_prep,
                categorie: recette.categorie,
                ingredients: recette.ingredients || [],
                regime: recette.regime || [],
                calories: recette.calories || 0,
                sponsorise: recette.sponsorise || false,
                created: recette.created,
                isFavorite: false // Sera mis à jour côté client si nécessaire
            };
        });

        // Vérifier le statut favori des recettes si un utilisateur est connecté
        const authData = pb.authStore.model;
        if (authData) {
            const userId = authData.id;
            const recetteIds = recettesTransformees.map(r => r.id);
            const favoriteStatus = await checkFavoriteStatus(recetteIds, userId);

            // Mettre à jour le statut favori
            recettesTransformees.forEach(recette => {
                recette.isFavorite = favoriteStatus[recette.id] || false;
            });
        }

        return recettesTransformees;

    } catch (error) {
        console.error('❌ Erreur lors de la récupération des recettes similaires:', error);

        // En cas d'erreur, retourner un tableau vide
        return [];
    }
}

// Conserver les autres fonctions existantes...
export async function getCommentairesByRecette(recetteId) {
    try {
        console.log(`💬 Récupération des commentaires pour la recette ${recetteId}`);

        const commentaires = await pb.collection('commentaires').getFullList({
            filter: `recette = "${recetteId}"`,
            expand: 'user',
            sort: '-created'
        });

        console.log(`✅ ${commentaires.length} commentaires récupérés`);

        // Transformer les données des commentaires
        const commentairesTransformes = commentaires.map(commentaire => ({
            id: commentaire.id,
            contenu: commentaire.contenu,
            note: commentaire.note,
            created: commentaire.created,
            user: {
                id: commentaire.expand?.user?.id,
                pseudo: commentaire.expand?.user?.pseudo || 'Utilisateur anonyme',
                avatar: commentaire.expand?.user?.avatar ?
                    `https://cookit-up.titouan-winkel.fr/api/files/users/${commentaire.expand.user.id}/${commentaire.expand.user.avatar}` :
                    null
            }
        }));

        return commentairesTransformes;

    } catch (error) {
        console.error(`❌ Erreur lors de la récupération des commentaires:`, error);
        return [];
    }
}

export async function ajouterCommentaire(recetteId, userId, contenu, note = null) {
    try {
        console.log(`💬 Ajout d'un commentaire pour la recette ${recetteId}`);

        const commentaireData = {
            recette: recetteId,
            user: userId,
            contenu: contenu
        };

        if (note !== null && note >= 1 && note <= 5) {
            commentaireData.note = note;
        }

        const nouveauCommentaire = await pb.collection('commentaires').create(commentaireData);

        console.log('✅ Commentaire ajouté avec succès:', nouveauCommentaire.id);

        return nouveauCommentaire;

    } catch (error) {
        console.error('❌ Erreur lors de l\'ajout du commentaire:', error);
        throw error;
    }
}

export async function toggleFavori(recetteId, userId) {
    try {
        console.log(`❤️ Toggle favori pour recette ${recetteId} et utilisateur ${userId}`);

        // Vérifier si le favori existe déjà
        const favorisExistants = await pb.collection('favoris').getFullList({
            filter: `recette = "${recetteId}" && user = "${userId}"`
        });

        if (favorisExistants.length > 0) {
            // Supprimer le favori
            await pb.collection('favoris').delete(favorisExistants[0].id);
            console.log('💔 Favori supprimé');
            return { action: 'removed', isFavorite: false };
        } else {
            // Ajouter le favori
            const nouveauFavori = await pb.collection('favoris').create({
                recette: recetteId,
                user: userId
            });
            console.log('❤️ Favori ajouté');
            return { action: 'added', isFavorite: true };
        }

    } catch (error) {
        console.error('❌ Erreur lors de la gestion du favori:', error);
        throw error;
    }
}

export async function getFavorisByUser(userId) {
    try {
        console.log(`❤️ Récupération des favoris pour l'utilisateur ${userId}`);

        const favoris = await pb.collection('favoris').getFullList({
            filter: `user = "${userId}"`,
            expand: 'recette',
            sort: '-created'
        });

        console.log(`✅ ${favoris.length} favoris récupérés`);

        // Transformer les données
        const recettesFavorites = favoris.map(favori => {
            const recette = favori.expand?.recette;
            if (!recette) return null;

            // ✅ CORRECTION : Vérifier si l'URL est déjà complète
            let imageUrl = null;
            if (recette.img) {
                if (recette.img.startsWith('http')) {
                    imageUrl = recette.img;
                } else {
                    imageUrl = `https://cookit-up.titouan-winkel.fr/api/files/recettes/${recette.id}/${recette.img}`;
                }
            }

            return {
                id: recette.id,
                nom: recette.nom,
                description: recette.description,
                img: imageUrl,
                temps_prep: recette.temps_prep,
                categorie: recette.categorie,
                created: recette.created,
                updated: recette.updated,
                isFavorite: true,
                favoriId: favori.id,
                favoriDate: favori.created
            };
        }).filter(Boolean); // Supprimer les entrées null

        return recettesFavorites;

    } catch (error) {
        console.error('❌ Erreur lors de la récupération des favoris:', error);
        return [];
    }
}

export async function checkFavoriteStatus(recetteIds, userId) {
    try {
        if (!userId || !recetteIds || recetteIds.length === 0) {
            return {};
        }

        console.log(`🔍 Vérification du statut favori pour ${recetteIds.length} recettes`);

        // Créer un filtre pour toutes les recettes
        const recetteFilter = recetteIds.map(id => `recette = "${id}"`).join(' || ');
        const filter = `(${recetteFilter}) && user = "${userId}"`;

        const favoris = await pb.collection('favoris').getFullList({
            filter: filter,
            fields: 'recette'
        });

        // Créer un objet de mapping
        const favoriteStatus = {};
        recetteIds.forEach(id => {
            favoriteStatus[id] = favoris.some(favori => favori.recette === id);
        });

        console.log(`✅ Statut favori vérifié pour ${Object.keys(favoriteStatus).length} recettes`);

        return favoriteStatus;

    } catch (error) {
        console.error('❌ Erreur lors de la vérification du statut favori:', error);
        return {};
    }
}

export async function getRecettesByUser(userId) {
    try {
        console.log(`👨‍🍳 Récupération des recettes créées par l'utilisateur ${userId}`);

        const recettes = await pb.collection('recettes').getFullList({
            filter: `user = "${userId}"`,
            sort: '-created'
        });

        console.log(`✅ ${recettes.length} recettes créées par l'utilisateur`);

        // Transformer les données
        const recettesTransformees = recettes.map(recette => {
            // ✅ CORRECTION : Vérifier si l'URL est déjà complète
            let imageUrl = null;
            if (recette.img) {
                if (recette.img.startsWith('http')) {
                    imageUrl = recette.img;
                } else {
                    imageUrl = `https://cookit-up.titouan-winkel.fr/api/files/recettes/${recette.id}/${recette.img}`;
                }
            }

            return {
                id: recette.id,
                nom: recette.nom,
                description: recette.description,
                img: imageUrl,
                temps_prep: recette.temps_prep,
                categorie: recette.categorie,
                created: recette.created,
                updated: recette.updated,
                isFavorite: false // Sera mis à jour côté client
            };
        });

        return recettesTransformees;

    } catch (error) {
        console.error('❌ Erreur lors de la récupération des recettes utilisateur:', error);
        return [];
    }
}

export async function creerRecette(recetteData, userId) {
    try {
        console.log('👨‍🍳 Création d\'une nouvelle recette...');

        const nouvelleRecette = await pb.collection('recettes').create({
            ...recetteData,
            user: userId
        });

        console.log('✅ Recette créée avec succès:', nouvelleRecette.id);

        return nouvelleRecette;

    } catch (error) {
        console.error('❌ Erreur lors de la création de la recette:', error);
        throw error;
    }
}

export async function modifierRecette(recetteId, recetteData, userId) {
    try {
        console.log(`✏️ Modification de la recette ${recetteId}...`);

        // Vérifier que l'utilisateur est le propriétaire de la recette
        const recette = await pb.collection('recettes').getOne(recetteId);

        if (recette.user !== userId) {
            throw new Error('Vous n\'êtes pas autorisé à modifier cette recette');
        }

        const recetteModifiee = await pb.collection('recettes').update(recetteId, recetteData);

        console.log('✅ Recette modifiée avec succès');

        return recetteModifiee;

    } catch (error) {
        console.error('❌ Erreur lors de la modification de la recette:', error);
        throw error;
    }
}

export async function supprimerRecette(recetteId, userId) {
    try {
        console.log(`🗑️ Suppression de la recette ${recetteId}...`);

        // Vérifier que l'utilisateur est le propriétaire de la recette
        const recette = await pb.collection('recettes').getOne(recetteId);

        if (recette.user !== userId) {
            throw new Error('Vous n\'êtes pas autorisé à supprimer cette recette');
        }

        await pb.collection('recettes').delete(recetteId);

        console.log('✅ Recette supprimée avec succès');

        return true;

    } catch (error) {
        console.error('❌ Erreur lors de la suppression de la recette:', error);
        throw error;
    }
}

export async function rechercherRecettes(query, filters = {}) {
    try {
        console.log(`🔍 Recherche de recettes avec la requête: "${query}"`);

        let filter = '';
        const filterParts = [];

        // Recherche textuelle
        if (query && query.trim()) {
            filterParts.push(`(nom ~ "${query}" || description ~ "${query}")`);
        }

        // Filtres additionnels
        if (filters.difficulte) {
            filterParts.push(`difficulte = "${filters.difficulte}"`);
        }

        if (filters.temps_max) {
            filterParts.push(`temps_preparation <= ${filters.temps_max}`);
        }

        // Combiner les filtres
        if (filterParts.length > 0) {
            filter = filterParts.join(' && ');
        }

        const recettes = await pb.collection('recettes').getFullList({
            filter: filter,
            sort: '-created'
        });

        console.log(`✅ ${recettes.length} recettes trouvées`);

        // Transformer les données
        const recettesTransformees = recettes.map(recette => {
            // ✅ CORRECTION : Vérifier si l'URL est déjà complète
            let imageUrl = null;
            if (recette.img) {
                if (recette.img.startsWith('http')) {
                    imageUrl = recette.img;
                } else {
                    imageUrl = `https://cookit-up.titouan-winkel.fr/api/files/recettes/${recette.id}/${recette.img}`;
                }
            }

            return {
                id: recette.id,
                nom: recette.nom,
                description: recette.description,
                img: imageUrl,
                temps_prep: recette.temps_prep,
                categorie: recette.categorie,
                created: recette.created,
                updated: recette.updated,
                isFavorite: false
            };
        });

        return recettesTransformees;

    } catch (error) {
        console.error('❌ Erreur lors de la recherche:', error);
        return [];
    }
}

export async function getPartenaires() {
    try {
        console.log('🏪 Récupération des partenaires depuis:', pb.baseUrl);

        // Récupérer tous les partenaires
        const partenaires = await pb.collection('partenaires').getFullList({
            sort: 'nom'
        });

        console.log(`✅ ${partenaires.length} partenaires récupérés depuis PocketBase`);
        console.log('📊 Premier partenaire brut:', partenaires[0]);

        // Transformer les données avec les vrais noms de champs
        const partenairesTransformes = partenaires.map(partenaire => {
            console.log(`🔄 Transformation du partenaire: ${partenaire.nom}`);

            return {
                id: partenaire.id,
                nom: partenaire.nom || '',
                description: partenaire.description || '',
                adresse: partenaire.adresse || '',
                latitude: partenaire.latitude || null,
                longitude: partenaire.longitude || null,
                ville: partenaire.ville || '',
                code_postal: partenaire.code_postal || '',
                region: partenaire.region || '',
                telephone: partenaire.telephone || '',
                horaires: partenaire.horaires || '',
                reduction: partenaire.reduction || '',
                code_promo: partenaire.code_promo || '',
                validite_offre: partenaire.validite_offre || '',
                categories: partenaire.categories || [],
                logo: partenaire.logo ? `${pb.baseUrl}/api/files/partenaires/${partenaire.id}/${partenaire.logo}` : null,
                image: partenaire.image ? `${pb.baseUrl}/api/files/partenaires/${partenaire.id}/${partenaire.image}` : null,
                created: partenaire.created,
                updated: partenaire.updated
            };
        });

        console.log('🍽️ Premier partenaire transformé:', partenairesTransformes[0]);

        return partenairesTransformes;

    } catch (error) {
        console.error('❌ Erreur lors de la récupération des partenaires:', error);
        console.error('Détails de l\'erreur:', {
            message: error.message,
            status: error.status,
            data: error.data
        });

        // En cas d'erreur, retourner un tableau vide au lieu des données de démo
        // pour voir si le problème vient de la récupération des données
        return [];
    }
}

export async function getAllPartenaires() {
    return await getPartenaires();
}

export async function getRecettesSponsors() {
    try {
        // Pour l'instant, retourner les premières recettes comme "sponsorisées"
        const recettes = await getAllRecettes();
        return recettes.slice(0, 6);
    } catch (error) {
        console.error('❌ Erreur lors de la récupération des recettes sponsorisées:', error);
        return [];
    }
}

// ✅ RÉCUPÈRE LES RECETTES COMMENTÉES PAR L'UTILISATEUR CONNECTÉ
export async function getCommentedRecettes() {
    try {
        console.log('💬 Récupération des recettes commentées par l\'utilisateur...');

        // Vérifier si un utilisateur est connecté
        const authData = pb.authStore.model;
        if (!authData) {
            console.log('❌ Aucun utilisateur connecté');
            return [];
        }

        const userId = authData.id;
        console.log(`👤 Utilisateur connecté: ${userId}`);

        // Récupérer les commentaires de l'utilisateur
        const commentaires = await pb.collection('commentaires').getFullList({
            filter: `user = "${userId}"`,
            expand: 'recette',
            sort: '-created'
        });

        console.log(`✅ ${commentaires.length} commentaires récupérés`);

        // Extraire les recettes uniques des commentaires
        const recettesMap = new Map();

        commentaires.forEach(commentaire => {
            if (commentaire.expand?.recette) {
                const recette = commentaire.expand.recette;
                // Ne pas ajouter de doublons (si l'utilisateur a commenté plusieurs fois la même recette)
                if (!recettesMap.has(recette.id)) {
                    recettesMap.set(recette.id, recette);
                }
            }
        });

        // Transformer les données pour le format attendu par le composant Plat
        const recettesCommentees = Array.from(recettesMap.values()).map(recette => {
            // ✅ CORRECTION : Vérifier si l'URL est déjà complète
            let imageUrl = null;
            if (recette.img) {
                if (recette.img.startsWith('http')) {
                    imageUrl = recette.img;
                } else {
                    imageUrl = `https://cookit-up.titouan-winkel.fr/api/files/recettes/${recette.id}/${recette.img}`;
                }
            }

            return {
                id: recette.id,
                nom: recette.nom,
                description: recette.description,
                img: imageUrl,
                temps_prep: recette.temps_prep,
                categorie: recette.categorie,
                created: recette.created,
                updated: recette.updated,
                isFavorite: false, // Sera mis à jour côté client
                commentDate: commentaires.find(c => c.recette === recette.id)?.created
            };
        });

        console.log(`🍽️ ${recettesCommentees.length} recettes commentées récupérées`);

        // Vérifier le statut favori des recettes si l'utilisateur est connecté
        if (userId) {
            const recetteIds = recettesCommentees.map(r => r.id);
            const favoriteStatus = await checkFavoriteStatus(recetteIds, userId);

            // Mettre à jour le statut favori
            recettesCommentees.forEach(recette => {
                recette.isFavorite = favoriteStatus[recette.id] || false;
            });
        }

        return recettesCommentees;

    } catch (error) {
        console.error('❌ Erreur lors de la récupération des recettes commentées:', error);
        return [];
    }
}

// ✅ DONNÉES DE DÉMONSTRATION (FALLBACK)
function getDemoRecettes() {
    return [
        {
            id: 'demo-1',
            nom: 'Pâtes à la Carbonara',
            description: 'Un classique italien avec des œufs, du parmesan et des lardons.',
            img: '/placeholder.svg?height=300&width=400&text=Carbonara',
            temps_prep: "20 min",
            categorie: 'plat',
            ingredients: ['pâtes', 'lardons', 'œufs', 'parmesan'],
            preparation: 'Faire cuire les pâtes...',
            regime: [],
            calories: 450,
            created: new Date().toISOString(),
            updated: new Date().toISOString(),
            isFavorite: false
        },
        {
            id: 'demo-2',
            nom: 'Salade César',
            description: 'Salade fraîche avec croûtons, parmesan et sauce César maison.',
            img: '/placeholder.svg?height=300&width=400&text=Salade+César',
            temps_prep: "15 min",
            categorie: 'entree',
            ingredients: ['salade', 'croûtons', 'parmesan', 'sauce césar'],
            preparation: 'Laver la salade...',
            regime: ['végétarien'],
            calories: 250,
            created: new Date().toISOString(),
            updated: new Date().toISOString(),
            isFavorite: false
        },
        {
            id: 'demo-3',
            nom: 'Bœuf Bourguignon',
            description: 'Plat traditionnel français mijoté au vin rouge.',
            img: '/placeholder.svg?height=300&width=400&text=Bœuf+Bourguignon',
            temps_prep: "180 min",
            categorie: 'plat',
            ingredients: ['bœuf', 'vin rouge', 'carottes', 'oignons'],
            preparation: 'Faire revenir le bœuf...',
            regime: [],
            calories: 650,
            created: new Date().toISOString(),
            updated: new Date().toISOString(),
            isFavorite: false
        }
    ];
}

function getDemoRecetteById(id) {
    const demoRecettes = getDemoRecettes();
    const recette = demoRecettes.find(r => r.id === id);

    if (recette) {
        return {
            ...recette,
            ingredients: [
                '200g de pâtes',
                '100g de lardons',
                '2 œufs',
                '50g de parmesan râpé',
                'Poivre noir'
            ],
            preparation: `Faire cuire les pâtes dans l'eau bouillante salée.

Faire revenir les lardons dans une poêle.

Battre les œufs avec le parmesan.

Mélanger les pâtes chaudes avec les œufs.

Ajouter les lardons et servir immédiatement.`,
            commentaires: []
        };
    }

    return null;
}
