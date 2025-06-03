// Gestion de la pagination
export function initPagination() {
    const paginationContainer = document.querySelector(".pagination-container")
    const recettesGrid = document.getElementById("recettesGrid")

    if (!recettesGrid) return

    const itemsPerPage = 12
    let currentPage = 1
    const allItems = Array.from(recettesGrid.children).filter((item) => !item.classList.contains("hidden"))
    const totalItems = allItems.length
    const totalPages = Math.ceil(totalItems / itemsPerPage)

    // Mettre à jour les compteurs d'affichage
    updateDisplayCounters(currentPage, itemsPerPage, totalItems)

    function showPage(page) {
        const startIndex = (page - 1) * itemsPerPage
        const endIndex = startIndex + itemsPerPage

        allItems.forEach((item, index) => {
            item.style.display = index >= startIndex && index < endIndex ? "block" : "none"
        })

        updatePaginationButtons(page)
        updateDisplayCounters(page, itemsPerPage, totalItems)

        // Scroll vers le haut de la grille
        recettesGrid.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    function updateDisplayCounters(page, itemsPerPage, totalItems) {
        const startItem = Math.min((page - 1) * itemsPerPage + 1, totalItems)
        const endItem = Math.min(page * itemsPerPage, totalItems)

        // Mettre à jour les compteurs d'affichage
        const currentRangeStart = document.getElementById("currentRangeStart")
        const currentRangeEnd = document.getElementById("currentRangeEnd")
        const totalRecettes = document.getElementById("totalRecettes")
        const currentPageDisplay = document.getElementById("currentPageDisplay")
        const totalPagesDisplay = document.getElementById("totalPagesDisplay")

        if (currentRangeStart) currentRangeStart.textContent = startItem.toString()
        if (currentRangeEnd) currentRangeEnd.textContent = endItem.toString()
        if (totalRecettes) totalRecettes.textContent = totalItems.toString()
        if (currentPageDisplay) currentPageDisplay.textContent = page.toString()
        if (totalPagesDisplay) totalPagesDisplay.textContent = totalPages.toString()
    }

    function updatePaginationButtons(currentPage) {
        const totalPages = Math.ceil(allItems.length / itemsPerPage)
        const paginationHTML = generatePaginationHTML(currentPage, totalPages)

        if (paginationContainer) {
            paginationContainer.innerHTML = paginationHTML
            attachPaginationEvents()
        }
    }

    function generatePaginationHTML(current, total) {
        if (total <= 1) return "" // Ne pas afficher la pagination s'il n'y a qu'une seule page

        let html = '<div class="flex justify-center mt-8 gap-2">'

        // Bouton Précédent
        html += `<button class="px-3 py-2 border border-gray-300 rounded hover:bg-gray-100 transition ${current === 1 ? "opacity-50 cursor-not-allowed" : ""}" 
                   data-page="${current - 1}" ${current === 1 ? "disabled" : ""}>
                   Précédente
                   </button>`

        // Numéros de page
        for (let i = Math.max(1, current - 2); i <= Math.min(total, current + 2); i++) {
            html += `<button class="px-3 py-2 rounded transition ${i === current ? "bg-yellow-500 text-white" : "border border-gray-300 hover:bg-gray-100"}" 
                       data-page="${i}">
                       ${i}
                       </button>`
        }

        // Bouton Suivant
        html += `<button class="px-3 py-2 border border-gray-300 rounded hover:bg-gray-100 transition ${current === total ? "opacity-50 cursor-not-allowed" : ""}" 
                   data-page="${current + 1}" ${current === total ? "disabled" : ""}>
                   Suivante
                   </button>`

        html += "</div>"
        return html
    }

    function attachPaginationEvents() {
        const paginationButtons = document.querySelectorAll("[data-page]")

        paginationButtons.forEach((button) => {
            button.addEventListener("click", (e) => {
                if (button.disabled) return

                const page = Number.parseInt(e.target.dataset.page)
                if (page > 0 && page <= Math.ceil(allItems.length / itemsPerPage)) {
                    currentPage = page
                    showPage(currentPage)
                }
            })
        })
    }

    // Initialiser la pagination
    if (totalPages > 0) {
        showPage(1)
    }
}
  