// src/test-pocketbase.js
import PocketBase from "pocketbase";
const pb = new PocketBase("https://cookit-up.titouan-winkel.fr");

// Test de connexion
console.log('PocketBase URL:', pb.baseUrl);

// Test simple
try {
    const recettes = await pb.collection('recettes').getList(1, 10);
    console.log('✅ Recettes récupérées:', recettes);
} catch (error) {
    console.error('❌ Erreur PocketBase:', error);
}