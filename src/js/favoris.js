export async function toggleFavori(event) {
    const button = event.currentTarget
    const platId = button.dataset.id

    try {
        const response = await fetch(`http://127.0.0.1:8090/api/collections/recettes/records/${platId}`)
        const recette = await response.json()

        const nouveauFavori = !recette.favori

        await fetch(`http://127.0.0.1:8090/api/collections/recettes/records/${platId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ favori: nouveauFavori }),
        })

        location.reload() // ou mettre à jour dynamiquement le cœur
    } catch (err) {
        console.error("Erreur lors de la mise à jour du favori :", err)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".js-favori-btn")
    buttons.forEach((btn) => {
        btn.addEventListener("click", toggleFavori)
    })
})
  