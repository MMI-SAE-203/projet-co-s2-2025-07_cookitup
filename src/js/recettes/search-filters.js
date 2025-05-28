// Gestion de la recherche et des filtres
export function initSearchAndFilters() {
    const searchInput = document.getElementById("searchInput")
    const recettesGrid = document.getElementById("recettesGrid")
    const filterSelect = document.querySelector('select[placeholder="Filtre"]')
    const sortSelect = document.querySelector('select[placeholder="Trier"]')

    let allRecettes = []

    // Récupérer toutes les cartes de recettes au chargement
    if (recettesGrid) {
        allRecettes = Array.from(recettesGrid.children).map((card) => ({
            element: card,
            nom: card.querySelector("h3")?.textContent.toLowerCase() || "",
            difficulte: card.querySelector(".bg-green-100")?.textContent || "",
            temps: card.querySelector('[class*="⏱️"]')?.textContent || "",
        }))
    }

    function filterRecettes() {
        const searchTerm = searchInput?.value.toLowerCase() || ""
        const selectedFilter = filterSelect?.value || ""
        const selectedSort = sortSelect?.value || ""

        const filteredRecettes = allRecettes.filter((recette) => {
            const matchesSearch = recette.nom.includes(searchTerm)
            const matchesFilter =
                !selectedFilter ||
                selectedFilter === "Filtre" ||
                recette.difficulte.toLowerCase().includes(selectedFilter.toLowerCase())

            return matchesSearch && matchesFilter
        })

        // Tri
        if (selectedSort && selectedSort !== "Trier") {
            filteredRecettes.sort((a, b) => {
                switch (selectedSort) {
                    case "Nom A-Z":
                        return a.nom.localeCompare(b.nom)
                    case "Temps de préparation":
                        return Number.parseInt(a.temps) - Number.parseInt(b.temps)
                    case "Difficulté":
                        const difficultyOrder = { facile: 1, moyen: 2, difficile: 3 }
                        return (
                            (difficultyOrder[a.difficulte.toLowerCase()] || 0) - (difficultyOrder[b.difficulte.toLowerCase()] || 0)
                        )
                    default:
                        return 0
                }
            })
        }

        // Afficher/masquer les recettes
        allRecettes.forEach((recette) => {
            const isVisible = filteredRecettes.includes(recette)
            recette.element.style.display = isVisible ? "block" : "none"
        })

        // Afficher un message si aucun résultat
        showNoResultsMessage(filteredRecettes.length === 0)
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
                  <p>Essayez de modifier vos critères de recherche</p>
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

    if (filterSelect) {
        filterSelect.addEventListener("change", filterRecettes)
    }

    if (sortSelect) {
        sortSelect.addEventListener("change", filterRecettes)
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

// Gestion des favoris dans la grille
export function initFavorisToggle() {
    const favorisButtons = document.querySelectorAll("[data-favoris-btn]")

    favorisButtons.forEach((button) => {
        button.addEventListener("click", async (e) => {
            e.preventDefault()
            e.stopPropagation()

            const recetteId = button.dataset.recetteId
            const heartIcon = button.querySelector("svg")

            try {
                const response = await fetch(`/api/favoris/${recetteId}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })

                if (response.ok) {
                    const result = await response.json()

                    // Mettre à jour l'icône
                    heartIcon.setAttribute("fill", result.isFavoris ? "red" : "none")

                    // Animation
                    button.style.transform = "scale(1.2)"
                    setTimeout(() => {
                        button.style.transform = "scale(1)"
                    }, 150)
                } else {
                    throw new Error("Erreur lors de la mise à jour")
                }
            } catch (error) {
                console.error("Erreur favoris:", error)
            }
        })
    })
  }