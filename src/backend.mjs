import pb from './lib/pocketbase.js';

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
        const result = await pb.collection('recettes').getFullList({
            sort: '-created',
            fields: 'id,nom,description,image,temps_preparation,difficulte,created,updated'
        });

        console.log(`✅ ${result.length} recettes récupérées depuis PocketBase`);

        // Transformer les données pour inclure l'URL complète de l'image
        const recettes = result.map(recette => ({
            id: recette.id,
            nom: recette.nom,
            description: recette.description,
            image: recette.image ? `http://127.0.0.1:8090/api/files/recettes/${recette.id}/${recette.image}` : null,
            temps_preparation: recette.temps_preparation,
            difficulte: recette.difficulte,
            created: recette.created,
            updated: recette.updated,
            isFavorite: false // Par défaut, sera mis à jour côté client si l'utilisateur est connecté
        }));

        console.log('🍽️ Exemple de recette transformée:', recettes[0]);

        return recettes;

    } catch (error) {
        console.error('❌ Erreur lors de la récupération des recettes:', error);

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

        // Transformer les données
        const recetteComplete = {
            id: recette.id,
            nom: recette.nom,
            description: recette.description,
            image: recette.image ? `http://127.0.0.1:8090/api/files/recettes/${recette.id}/${recette.image}` : null,
            temps_preparation: recette.temps_preparation,
            difficulte: recette.difficulte,
            ingredients: recette.ingredients || [],
            instructions: recette.instructions || [],
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

// ✅ RÉCUPÈRE LES COMMENTAIRES D'UNE RECETTE
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
                    `http://127.0.0.1:8090/api/files/users/${commentaire.expand.user.id}/${commentaire.expand.user.avatar}` :
                    null
            }
        }));

        return commentairesTransformes;

    } catch (error) {
        console.error(`❌ Erreur lors de la récupération des commentaires:`, error);
        return [];
    }
}

// ✅ AJOUTE UN COMMENTAIRE À UNE RECETTE
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

// ✅ GÈRE LES FAVORIS (AJOUTER/SUPPRIMER)
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

// ✅ RÉCUPÈRE LES FAVORIS D'UN UTILISATEUR
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

            return {
                id: recette.id,
                nom: recette.nom,
                description: recette.description,
                image: recette.image ? `http://127.0.0.1:8090/api/files/recettes/${recette.id}/${recette.image}` : null,
                temps_preparation: recette.temps_preparation,
                difficulte: recette.difficulte,
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

// ✅ VÉRIFIE QUELLES RECETTES SONT EN FAVORIS POUR UN UTILISATEUR
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

// ✅ DONNÉES DE DÉMONSTRATION (FALLBACK)
function getDemoRecettes() {
    return [
        {
            id: 'demo-1',
            nom: 'Pâtes à la Carbonara',
            description: 'Un classique italien avec des œufs, du parmesan et des lardons.',
            image: '/placeholder.svg?height=300&width=400&text=Carbonara',
            temps_preparation: 20,
            difficulte: 'Facile',
            created: new Date().toISOString(),
            updated: new Date().toISOString(),
            isFavorite: false
        },
        {
            id: 'demo-2',
            nom: 'Salade César',
            description: 'Salade fraîche avec croûtons, parmesan et sauce César maison.',
            image: '/placeholder.svg?height=300&width=400&text=Salade+César',
            temps_preparation: 15,
            difficulte: 'Facile',
            created: new Date().toISOString(),
            updated: new Date().toISOString(),
            isFavorite: false
        },
        {
            id: 'demo-3',
            nom: 'Bœuf Bourguignon',
            description: 'Plat traditionnel français mijoté au vin rouge.',
            image: '/placeholder.svg?height=300&width=400&text=Bœuf+Bourguignon',
            temps_preparation: 180,
            difficulte: 'Difficile',
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
            instructions: [
                'Faire cuire les pâtes dans l\'eau bouillante salée.',
                'Faire revenir les lardons dans une poêle.',
                'Battre les œufs avec le parmesan.',
                'Mélanger les pâtes chaudes avec les œufs.',
                'Ajouter les lardons et servir immédiatement.'
            ],
            commentaires: []
        };
    }

    return null;
}

// ✅ RÉCUPÈRE LES RECETTES CRÉÉES PAR UN UTILISATEUR
export async function getRecettesByUser(userId) {
    try {
        console.log(`👨‍🍳 Récupération des recettes créées par l'utilisateur ${userId}`);

        const recettes = await pb.collection('recettes').getFullList({
            filter: `user = "${userId}"`,
            sort: '-created'
        });

        console.log(`✅ ${recettes.length} recettes créées par l'utilisateur`);

        // Transformer les données
        const recettesTransformees = recettes.map(recette => ({
            id: recette.id,
            nom: recette.nom,
            description: recette.description,
            image: recette.image ? `http://127.0.0.1:8090/api/files/recettes/${recette.id}/${recette.image}` : null,
            temps_preparation: recette.temps_preparation,
            difficulte: recette.difficulte,
            created: recette.created,
            updated: recette.updated,
            isFavorite: false // Sera mis à jour côté client
        }));

        return recettesTransformees;

    } catch (error) {
        console.error('❌ Erreur lors de la récupération des recettes utilisateur:', error);
        return [];
    }
}

// ✅ CRÉE UNE NOUVELLE RECETTE
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

// ✅ MET À JOUR UNE RECETTE EXISTANTE
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

// ✅ SUPPRIME UNE RECETTE
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

// ✅ RECHERCHE DE RECETTES
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
        const recettesTransformees = recettes.map(recette => ({
            id: recette.id,
            nom: recette.nom,
            description: recette.description,
            image: recette.image ? `http://127.0.0.1:8090/api/files/recettes/${recette.id}/${recette.image}` : null,
            temps_preparation: recette.temps_preparation,
            difficulte: recette.difficulte,
            created: recette.created,
            updated: recette.updated,
            isFavorite: false
        }));

        return recettesTransformees;

    } catch (error) {
        console.error('❌ Erreur lors de la recherche:', error);
        return [];
    }
}

// ✅ RÉCUPÈRE LES PARTENAIRES
export async function getPartenaires() {
    try {
        console.log('🏪 Récupération des partenaires...');

        const partenaires = await pb.collection('partenaires').getFullList({
            sort: 'nom'
        });

        console.log(`✅ ${partenaires.length} partenaires récupérés`);

        // Transformer les données pour inclure l'URL complète de l'image
        const partenairesTransformes = partenaires.map(partenaire => ({
            id: partenaire.id,
            nom: partenaire.nom,
            description: partenaire.description,
            adresse: partenaire.adresse,
            ville: partenaire.ville,
            code_postal: partenaire.code_postal,
            region: partenaire.region,
            latitude: partenaire.latitude,
            longitude: partenaire.longitude,
            categories: partenaire.categories,
            promo_code: partenaire.promo_code,
            promo_description: partenaire.promo_description,
            image: partenaire.image ? `http://127.0.0.1:8090/api/files/partenaires/${partenaire.id}/${partenaire.image}` : null,
            created: partenaire.created,
            updated: partenaire.updated
        }));

        return partenairesTransformes;

    } catch (error) {
        console.error('❌ Erreur lors de la récupération des partenaires:', error);

        // Retourner des données de démonstration en cas d'erreur
        return getDemoPartenaires();
    }
}

// ✅ DONNÉES DE DÉMONSTRATION POUR LES PARTENAIRES
function getDemoPartenaires() {
    return [
        {
            id: 'demo-p1',
            nom: 'Bio Market',
            description: 'Magasin bio avec des produits frais et locaux',
            adresse: '123 Rue de la Paix',
            ville: 'Paris',
            code_postal: '75001',
            region: 'Île-de-France',
            latitude: 48.8566,
            longitude: 2.3522,
            categories: ['bio', 'légumes'],
            promo_code: 'COOKUP10',
            promo_description: '10% de réduction sur tous les légumes bio',
            image: '/placeholder.svg?height=200&width=300&text=Bio+Market',
            created: new Date().toISOString(),
            updated: new Date().toISOString()
        },
        {
            id: 'demo-p2',
            nom: 'Boucherie Traditionnelle',
            description: 'Viandes de qualité, élevage local',
            adresse: '456 Avenue des Champs',
            ville: 'Lyon',
            code_postal: '69001',
            region: 'Auvergne-Rhône-Alpes',
            latitude: 45.7640,
            longitude: 4.8357,
            categories: ['viande', 'traditionnel'],
            promo_code: 'VIANDE15',
            promo_description: '15% sur les viandes premium',
            image: '/placeholder.svg?height=200&width=300&text=Boucherie',
            created: new Date().toISOString(),
            updated: new Date().toISOString()
        }
    ];
}
