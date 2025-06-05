import PocketBase from 'pocketbase';

const pb = new PocketBase("https://cookit-up.titouan-winkel.fr");

// ✅ RÉCUPÈRE TOUTES LES RECETTES AVEC STATUT FAVORI (VERSION CORRIGÉE)
async function getAllRecettes() {
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
            fields: 'id,nom,description,img,temps_preparation,difficulte,created,updated'
        });

        console.log(`✅ ${result.length} recettes récupérées depuis PocketBase`);

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
                description: recette.description,
                img: imageUrl,
                temps_preparation: recette.temps_preparation,
                difficulte: recette.difficulte,
                created: recette.created,
                updated: recette.updated,
                isFavorite: false // Par défaut, sera mis à jour côté client si l'utilisateur est connecté
            };
        });

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
async function getRecetteById(id) {
    try {
        console.log(`🔍 Recherche de la recette avec l'ID: ${id}`);

        const recette = await pb.collection('recettes').getOne(id, {
            expand: 'commentaires(recette).user'
        });

        console.log('✅ Recette trouvée:', recette.nom);

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
            description: recette.description,
            img: imageUrl,
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

// ✅ VÉRIFIE QUELLES RECETTES SONT EN FAVORIS POUR UN UTILISATEUR
async function checkFavoriteStatus(recetteIds, userId) {
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
            img: '/placeholder.svg?height=300&width=400&text=Carbonara',
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
            img: '/placeholder.svg?height=300&width=400&text=Salade+César',
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
            img: '/placeholder.svg?height=300&width=400&text=Bœuf+Bourguignon',
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

// ✅ RÉCUPÈRE LES PARTENAIRES AVEC LES VRAIS NOMS DE CHAMPS
async function getPartenaires() {
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

// ✅ ALIAS POUR RÉCUPÉRER TOUS LES PARTENAIRES
async function getAllPartenaires() {
    return await getPartenaires();
}

// ✅ FONCTION POUR RÉCUPÉRER LES RECETTES SPONSORISÉES (FALLBACK)
async function getRecettesSponsors() {
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
async function getCommentedRecettes() {
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
                temps_preparation: recette.temps_preparation,
                difficulte: recette.difficulte,
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

// ✅ RÉCUPÈRE DES RECETTES SIMILAIRES À UNE RECETTE DONNÉE
async function getRecettesSimilaires(recetteId, limit = 4) {
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
            fields: 'id,nom,img,temps_preparation,difficulte,categorie,created'
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
                fields: 'id,nom,img,temps_preparation,difficulte,categorie,created'
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
                temps_prep: recette.temps_preparation,
                difficulte: recette.difficulte,
                categorie: recette.categorie,
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

export { getAllRecettes as a, getAllPartenaires as b, getRecetteById as c, getRecettesSimilaires as d, getRecettesSponsors as e, getCommentedRecettes as g };
