// Gestion des interactions pour les recettes individuelles
export function initRecetteInteractions(recetteId) {
    // Gestion des favoris
    const toggleFavoris = document.getElementById("toggleFavoris")
    if (toggleFavoris) {
        toggleFavoris.addEventListener("click", async () => {
            try {
                const response = await fetch(`/api/favoris/${recetteId}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })

                if (response.ok) {
                    const result = await response.json()
                    // Mettre à jour le bouton sans recharger la page
                    toggleFavoris.innerHTML = result.isFavoris ? "❤️ Retirer des favoris" : "🤍 Ajouter aux favoris"

                    // Optionnel : afficher une notification
                    showNotification(result.isFavoris ? "Ajouté aux favoris !" : "Retiré des favoris !")
                } else {
                    throw new Error("Erreur lors de la mise à jour")
                }
            } catch (error) {
                console.error("Erreur lors de la mise à jour des favoris:", error)
                showNotification("Erreur lors de la mise à jour des favoris", "error")
            }
        })
    }

    // Partage de recette
    const shareRecette = document.getElementById("shareRecette")
    if (shareRecette) {
        shareRecette.addEventListener("click", async () => {
            const recetteTitle = document.querySelector("h1").textContent

            if (navigator.share) {
                try {
                    await navigator.share({
                        title: `Recette: ${recetteTitle}`,
                        text: `Découvrez cette délicieuse recette: ${recetteTitle}`,
                        url: window.location.href,
                    })
                } catch (error) {
                    console.log("Partage annulé")
                }
            } else {
                // Fallback pour les navigateurs qui ne supportent pas Web Share API
                try {
                    await navigator.clipboard.writeText(window.location.href)
                    showNotification("Lien copié dans le presse-papiers !")
                } catch (error) {
                    // Fallback ultime
                    const textArea = document.createElement("textarea")
                    textArea.value = window.location.href
                    document.body.appendChild(textArea)
                    textArea.select()
                    document.execCommand("copy")
                    document.body.removeChild(textArea)
                    showNotification("Lien copié dans le presse-papiers !")
                }
            }
        })
    }

    // Impression de la recette
    const printRecette = document.querySelector('[onclick="window.print()"]')
    if (printRecette) {
        printRecette.removeAttribute("onclick")
        printRecette.addEventListener("click", () => {
            window.print()
        })
    }
}

// Fonction pour afficher des notifications
export function showNotification(message, type = "success") {
    // Créer l'élément de notification
    const notification = document.createElement("div")
    notification.className = `fixed top-4 right-4 px-6 py-3 rounded-lg text-white z-50 transition-all duration-300 ${type === "error" ? "bg-red-500" : "bg-green-500"
        }`
    notification.textContent = message

    // Ajouter au DOM
    document.body.appendChild(notification)

    // Animation d'entrée
    setTimeout(() => {
        notification.style.transform = "translateX(0)"
        notification.style.opacity = "1"
    }, 100)

    // Supprimer après 3 secondes
    setTimeout(() => {
        notification.style.transform = "translateX(100%)"
        notification.style.opacity = "0"
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification)
            }
        }, 300)
    }, 3000)
  }