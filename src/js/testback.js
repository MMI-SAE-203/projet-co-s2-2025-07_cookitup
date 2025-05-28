// src/test-pocketbase.js
import pb from '../lib/pocketbase.js';

// Test de connexion
console.log('PocketBase URL:', pb.baseUrl);

// Test simple
try {
    const recettes = await pb.collection('recettes').getList(1, 10);
    console.log('✅ Recettes récupérées:', recettes);
} catch (error) {
    console.error('❌ Erreur PocketBase:', error);
}