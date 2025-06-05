import PocketBase from "pocketbase"

// Initialiser PocketBase directement dans ce fichier
const pb = new PocketBase("https://cookit-up.titouan-winkel.fr")

/**
 * Vérifie si une recette est dans les favoris de l'utilisateur connecté
 * @param {string} recetteId ID de la recette
 * @returns {Promise<boolean>} True si la recette est favorite
 */
export async function isFavorite(recetteId) {
    if (!pb.authStore.isValid) return false

    try {
        const favoris = await pb.collection("favoris").getFullList({
            filter: `user = "${pb.authStore.model.id}" && recette = "${recetteId}"`,
        })
        return favoris.length > 0
    } catch (error) {
        console.error("Erreur lors de la vérification des favoris:", error)
        return false
    }
}

/**
 * Ajoute ou retire une recette des favoris
 * @param {string} recetteId ID de la recette
 * @returns {Promise<boolean>} True si ajouté, false si retiré
 */
export async function toggleFavori(recetteId) {
    if (!pb.authStore.isValid) {
        throw new Error("Vous devez être connecté pour gérer vos favoris")
    }

    try {
        console.log("🔍 Vérification si la recette est déjà en favori...")
        // Vérifier si la recette est déjà en favori
        const existingFavoris = await pb.collection("favoris").getFullList({
            filter: `user = "${pb.authStore.model.id}" && recette = "${recetteId}"`,
        })

        console.log("📊 Résultat de la recherche:", existingFavoris.length > 0 ? "Déjà en favori" : "Pas encore en favori")

        if (existingFavoris.length > 0) {
            // Retirer des favoris
            console.log("🗑️ Suppression du favori ID:", existingFavoris[0].id)
            await pb.collection("favoris").delete(existingFavoris[0].id)
            console.log("✅ Recette retirée des favoris")
            return false
        } else {
            // Ajouter aux favoris
            console.log("➕ Ajout aux favoris - User:", pb.authStore.model.id, "Recette:", recetteId)
            const result = await pb.collection("favoris").create({
                user: pb.authStore.model.id,
                recette: recetteId,
            })
            console.log("✅ Recette ajoutée aux favoris, ID:", result.id)
            return true
        }
    } catch (error) {
        console.error("❌ Erreur lors de la gestion des favoris:", error)
        throw error
    }
}

/**
 * Récupère toutes les recettes favorites de l'utilisateur connecté
 * @returns {Promise<Array>} Liste des recettes favorites
 */
export async function getUserFavorites() {
    if (!pb.authStore.isValid) return []

    try {
        const favoris = await pb.collection("favoris").getFullList({
            filter: `user = "${pb.authStore.model.id}"`,
            expand: "recette",
            sort: "-created",
        })

        return favoris.map((favori) => favori.expand.recette).filter(Boolean)
    } catch (error) {
        console.error("Erreur lors de la récupération des favoris:", error)
        return []
    }
}

/**
 * Récupère les IDs des recettes favorites pour l'affichage
 * @returns {Promise<Array>} Liste des IDs des recettes favorites
 */
export async function getUserFavoriteIds() {
    if (!pb.authStore.isValid) return []

    try {
        const favoris = await pb.collection("favoris").getFullList({
            filter: `user = "${pb.authStore.model.id}"`,
        })

        return favoris.map((favori) => favori.recette)
    } catch (error) {
        console.error("Erreur lors de la récupération des IDs favoris:", error)
        return []
    }
}

// Exporter l'instance PocketBase pour l'utiliser dans d'autres fichiers si nécessaire
export { pb }

// Gestion des événements pour les boutons favoris
export function initFavorisButtons() {
    console.log("🔄 Initialisation des boutons favoris...")

    // Utiliser la délégation d'événements pour gérer les clics
    document.addEventListener("click", async (event) => {
        // Vérifier si l'élément cliqué ou un de ses parents a la classe js-favori-btn
        const button = event.target.closest(".js-favori-btn")
        if (!button) return

        console.log("❤️ Clic sur bouton favori détecté")

        event.preventDefault()
        event.stopPropagation()

        const recetteId = button.dataset.id
        if (!recetteId) {
            console.error("❌ ID de recette manquant")
            return
        }

        console.log("📝 ID de recette:", recetteId)

        // Vérifier si l'utilisateur est connecté
        if (!pb.authStore.isValid) {
            console.log("⚠️ Utilisateur non connecté")
            if (confirm("Vous devez être connecté pour gérer vos favoris. Voulez-vous vous connecter ?")) {
                window.location.href = "/connexion"
            }
            return
        }

        const heartIcon = button.querySelector("svg")
        const buttonText = button.querySelector(".button-text")

        try {
            // Désactiver le bouton pendant le traitement
            button.disabled = true
            console.log("🔄 Traitement en cours...")

            const isNowFavorite = await toggleFavori(recetteId)
            console.log("✅ Favori mis à jour:", isNowFavorite ? "ajouté" : "retiré")

            // Mettre à jour l'icône immédiatement
            if (heartIcon) {
                heartIcon.setAttribute("fill", isNowFavorite ? "red" : "none")
                heartIcon.style.color = isNowFavorite ? "red" : "#666"
            }

            // Animation
            button.style.transform = "scale(1.2)"
            setTimeout(() => {
                button.style.transform = "scale(1)"
            }, 150)

            // Mettre à jour le texte du bouton si présent
            if (buttonText) {
                buttonText.textContent = isNowFavorite ? "❤️ Retirer des favoris" : "🤍 Ajouter aux favoris"
            }

            // Afficher un message de confirmation
            const message = isNowFavorite ? "Ajouté aux favoris !" : "Retiré des favoris !"
            console.log("📢", message)

            // Optionnel : afficher une notification
            showNotification(message)

            // Déclencher un événement personnalisé pour informer les autres parties de l'app
            const favoriEvent = new CustomEvent("favoriToggled", {
                detail: { recetteId, isNowFavorite },
            })
            document.dispatchEvent(favoriEvent)
        } catch (error) {
            console.error("❌ Erreur favoris:", error)
            alert("Erreur lors de la mise à jour des favoris: " + error.message)
        } finally {
            button.disabled = false
        }
    })
}

// Fonction pour afficher une notification temporaire
function showNotification(message) {
    // Créer l'élément de notification
    const notification = document.createElement("div")
    notification.className =
        "fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 transition-opacity"
    notification.textContent = message

    // Ajouter au DOM
    document.body.appendChild(notification)

    // Supprimer après 3 secondes
    setTimeout(() => {
        notification.style.opacity = "0"
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification)
            }
        }, 300)
    }, 3000)
}
