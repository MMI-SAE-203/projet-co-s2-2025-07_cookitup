import pb from "../lib/pocketbase.js"

/**
 * Vérifie si l'utilisateur est connecté
 * @returns {boolean} True si l'utilisateur est connecté
 */
export function isLoggedIn() {
    return pb.authStore.isValid
}

/**
 * Récupère les informations de l'utilisateur connecté
 * @returns {Object|null} Informations de l'utilisateur ou null
 */
export function getCurrentUser() {
    return pb.authStore.isValid ? pb.authStore.model : null
}

/**
 * Connecte l'utilisateur
 * @param {string} email Email de l'utilisateur
 * @param {string} password Mot de passe de l'utilisateur
 * @returns {Promise<Object>} Données de l'utilisateur
 */
export async function login(email, password) {
    try {
        const authData = await pb.collection("users").authWithPassword(email, password)

        // Déclencher un événement pour informer l'application
        const event = new CustomEvent("userLogin", { detail: authData.record })
        document.dispatchEvent(event)

        return authData.record
    } catch (error) {
        console.error("Erreur de connexion:", error)
        throw error
    }
}

/**
 * Déconnecte l'utilisateur
 */
export function logout() {
    pb.authStore.clear()

    // Déclencher un événement pour informer l'application
    const event = new CustomEvent("userLogout")
    document.dispatchEvent(event)
}

/**
 * Enregistre un nouvel utilisateur
 * @param {Object} userData Données du nouvel utilisateur
 * @returns {Promise<Object>} Données de l'utilisateur créé
 */
export async function register(userData) {
    try {
        // Créer l'utilisateur dans PocketBase
        const data = {
            email: userData.email,
            password: userData.password,
            passwordConfirm: userData.password,
            name: `${userData.prenom} ${userData.pseudo}`.trim(),
            prenom: userData.prenom,
            pseudo: userData.pseudo || userData.nom, // Fallback pour la compatibilité
        }

        const createdUser = await pb.collection("users").create(data)

        // Connecter automatiquement l'utilisateur après l'inscription
        await login(userData.email, userData.password)

        return createdUser
    } catch (error) {
        console.error("Erreur d'inscription:", error)
        throw error
    }
}

/**
 * Demande de réinitialisation de mot de passe
 * @param {string} email Email de l'utilisateur
 */
export async function requestPasswordReset(email) {
    try {
        await pb.collection("users").requestPasswordReset(email)
        return true
    } catch (error) {
        console.error("Erreur de demande de réinitialisation:", error)
        throw error
    }
}

/**
 * Met à jour les informations de l'utilisateur
 * @param {Object} userData Nouvelles données de l'utilisateur
 */
export async function updateUserProfile(userData) {
    if (!isLoggedIn()) return

    try {
        const userId = pb.authStore.model.id
        const updatedUser = await pb.collection("users").update(userId, userData)

        // Déclencher un événement pour informer l'application
        const event = new CustomEvent("userUpdate", { detail: updatedUser })
        document.dispatchEvent(event)

        return updatedUser
    } catch (error) {
        console.error("Erreur de mise à jour du profil:", error)
        throw error
    }
}
