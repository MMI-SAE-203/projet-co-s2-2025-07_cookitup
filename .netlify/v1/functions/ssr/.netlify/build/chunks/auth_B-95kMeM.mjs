import PocketBase from 'pocketbase';

const pb = new PocketBase("https://cookit-up.titouan-winkel.fr");

/**
 * Vérifie si l'utilisateur est connecté
 * @returns {boolean} True si l'utilisateur est connecté
 */
function isLoggedIn() {
    return pb.authStore.isValid
}

/**
 * Récupère les informations de l'utilisateur connecté
 * @returns {Object|null} Informations de l'utilisateur ou null
 */
function getCurrentUser() {
    return pb.authStore.isValid ? pb.authStore.model : null
}

export { getCurrentUser as g, isLoggedIn as i };
