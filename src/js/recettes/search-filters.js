// Gestion de la recherche et des filtres
export function initSearchAndFilters() {
    const searchInput = document.getElementById("searchInput")
    const recettesGrid = document.getElementById("recettesGrid")
    const categorieSelect = document.getElementById("categorieSelect")
    const favorisSelect = document.getElementById("favorisSelect")

    let allRecettes = []

    // Récupérer toutes les cartes de recettes au chargement
    if (recettesGrid) {
        allRecettes = Array.from(recettesGrid.children).map((card) => ({
            element: card,
            nom: card.querySelector("h3")?.textContent.toLowerCase() || "",
            categorie: card.dataset.categorie || "",
            ingredients: card.dataset.ingredients?.toLowerCase() || "",
            favori: card.querySelector(".bg-red-100") !== null,
            sponsorise: card.querySelector(".bg-yellow-500") !== null,
            temps: card.querySelector('[class*="⏱️"]')?.textContent || "",
            calories: card.dataset.calories ? Number.parseInt(card.dataset.calories) : null,
            regime: card.dataset.regime ? card.dataset.regime.split(",") : [],
        }))
    }

    function filterRecettes() {
        const searchTerm = searchInput?.value.toLowerCase() || ""
        const selectedCategorie = categorieSelect?.value || "tous"
        const selectedFavoris = favorisSelect?.value || "tous"

        const filteredRecettes = allRecettes.filter((recette) => {
            // Recherche par nom ou ingrédients
            const matchesSearch = recette.nom.includes(searchTerm) || recette.ingredients.includes(searchTerm)

            // Filtre par catégorie
            const matchesCategorie = selectedCategorie === "tous" || recette.categorie.toLowerCase() === selectedCategorie

            // Filtre par favoris
            const matchesFavoris = selectedFavoris === "tous" || (selectedFavoris === "favoris" && recette.favori)

            return matchesSearch && matchesCategorie && matchesFavoris
        })

        // Afficher/masquer les recettes
        allRecettes.forEach((recette) => {
            const isVisible = filteredRecettes.includes(recette)
            recette.element.style.display = isVisible ? "block" : "none"
        })

        // Afficher un message si aucun résultat
        showNoResultsMessage(filteredRecettes.length === 0)

        // Réinitialiser la pagination après filtrage
        if (typeof initPagination === "function") {
            setTimeout(() => {
                initPagination()
            }, 100)
        }
    }

    function showNoResultsMessage(show) {
        let noResultsMsg = document.getElementById("noResultsMessage")

        if (show && !noResultsMsg) {
            noResultsMsg = document.createElement("div")
            noResultsMsg.id = "noResultsMessage"
            noResultsMsg.className = "col-span-full text-center py-12 text-gray-500"
            noResultsMsg.innerHTML = `
                  <div class="text-6xl mb-4">🔍</div>
                  <h3 class="text-xl font-bold mb-2">Aucune recette trouvée</h3>
                  <p>Essayez de modifier vos critères de recherche ou d'utiliser d'autres mots-clés</p>
              `
            recettesGrid?.appendChild(noResultsMsg)
        } else if (!show && noResultsMsg) {
            noResultsMsg.remove()
        }
    }

    // Event listeners
    if (searchInput) {
        searchInput.addEventListener("input", debounce(filterRecettes, 300))
    }

    if (categorieSelect) {
        categorieSelect.addEventListener("change", filterRecettes)
    }

    if (favorisSelect) {
        favorisSelect.addEventListener("change", filterRecettes)
    }
}

// Fonction debounce pour éviter trop d'appels lors de la saisie
function debounce(func, wait) {
    let timeout
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout)
            func(...args)
        }
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
    }
}
  