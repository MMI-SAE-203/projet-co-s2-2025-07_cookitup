/**
 * Supprime les accents d'une chaîne de caractères
 * Utile pour les polices qui ne supportent pas les caractères accentués
 * @param {string} str - La chaîne à traiter
 * @returns {string} - La chaîne sans accents
 */
export function removeAccents(str) {
    if (!str) return ""
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

/**
 * Prépare un texte pour l'affichage avec la police Koulen
 * Supprime les accents et met en majuscules
 * @param {string} str - La chaîne à traiter
 * @returns {string} - La chaîne préparée pour Koulen
 */
export function prepareForKoulen(str) {
    return removeAccents(str).toUpperCase()
}
  