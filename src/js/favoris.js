import PocketBase from "pocketbase"

// Initialiser PocketBase
const pb = new PocketBase("https://cookit-up.titouan-winkel.fr")

// Exporter l'instance pour pouvoir l'utiliser ailleurs
export { pb }

// Fonction pour initialiser les boutons favoris
export function initFavorisButtons() {
    console.log("🚀 Initialisation des boutons favoris...")

    // Sélectionner tous les boutons favoris
    const favorisButtons = document.querySelectorAll(".js-favori-btn")
    console.log(`🔍 ${favorisButtons.length} boutons favoris trouvés`)

    // Ajouter un écouteur d'événement à chaque bouton
    favorisButtons.forEach((button) => {
        button.addEventListener("click", handleFavoriClick)
    })
}

// Gérer le clic sur un bouton favori
async function handleFavoriClick(event) {
    // Empêcher la propagation de l'événement (pour éviter de cliquer sur le lien parent)
    event.stopPropagation()
    event.preventDefault()

    console.log("❤️ Clic sur un bouton favori")

    // Récupérer l'ID de la recette
    const recetteId = this.dataset.id
    if (!recetteId) {
        console.error("❌ ID de recette non trouvé")
        return
    }

    console.log(`🍽️ ID de la recette: ${recetteId}`)

    // Vérifier si l'utilisateur est connecté
    const isLoggedIn = pb.authStore.isValid
    if (!isLoggedIn) {
        console.log("⚠️ Utilisateur non connecté, redirection vers la page de connexion")
        showNotification("Connectez-vous pour ajouter des favoris", "warning")
        window.location.href = "/connexion"
        return
    }

    // Récupérer l'ID de l'utilisateur
    const userId = pb.authStore.model.id
    console.log(`👤 ID de l'utilisateur: ${userId}`)

    try {
        // Vérifier si le favori existe déjà
        console.log("🔍 Vérification si le favori existe déjà...")
        const favoris = await pb.collection("favoris").getFullList({
            filter: `recette = "${recetteId}" && user = "${userId}"`,
        })

        const isFavorite = favoris.length > 0
        console.log(`🔍 Favori existant: ${isFavorite}`)

        // Récupérer l'icône du cœur
        const heartIcon = this.querySelector("svg")

        if (isFavorite) {
            // Supprimer le favori
            console.log("💔 Suppression du favori...")
            await pb.collection("favoris").delete(favoris[0].id)

            // Mettre à jour l'icône
            if (heartIcon) {
                heartIcon.setAttribute("fill", "none")
                heartIcon.style.color = "#666"
            }

            // Mettre à jour le texte du bouton si présent
            const buttonText = this.querySelector(".button-text")
            if (buttonText) {
                buttonText.textContent = "Ajouter aux favoris"
            }

            showNotification("Recette retirée des favoris", "info")
        } else {
            // Ajouter le favori
            console.log("❤️ Ajout du favori...")
            await pb.collection("favoris").create({
                recette: recetteId,
                user: userId,
            })

            // Mettre à jour l'icône
            if (heartIcon) {
                heartIcon.setAttribute("fill", "red")
                heartIcon.style.color = "red"
            }

            // Mettre à jour le texte du bouton si présent
            const buttonText = this.querySelector(".button-text")
            if (buttonText) {
                buttonText.textContent = "Retirer des favoris"
            }

            showNotification("Recette ajoutée aux favoris", "success")
        }

        // Déclencher un événement personnalisé pour informer d'autres composants
        document.dispatchEvent(
            new CustomEvent("favoriToggled", {
                detail: {
                    recetteId,
                    isFavorite: !isFavorite,
                },
            }),
        )
    } catch (error) {
        console.error("❌ Erreur lors de la gestion du favori:", error)
        showNotification("Une erreur est survenue", "error")
    }
}

// Fonction pour afficher une notification
function showNotification(message, type = "info") {
    // Créer la notification
    const notification = document.createElement("div")

    // Définir les classes en fonction du type
    let bgColor = "bg-blue-500"
    if (type === "success") bgColor = "bg-green-500"
    if (type === "error") bgColor = "bg-red-500"
    if (type === "warning") bgColor = "bg-yellow-500"

    notification.className = `fixed top-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-opacity`
    notification.textContent = message

    // Ajouter la notification au DOM
    document.body.appendChild(notification)

    // Supprimer la notification après 3 secondes
    setTimeout(() => {
        notification.style.opacity = "0"
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification)
            }
        }, 300)
    }, 3000)
}

// Fonction pour vérifier si l'utilisateur est connecté
export function isLoggedIn() {
    return pb.authStore.isValid
}

// Fonction pour récupérer l'utilisateur connecté
export function getCurrentUser() {
    return pb.authStore.model
}
