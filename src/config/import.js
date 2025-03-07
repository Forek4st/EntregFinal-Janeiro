import admin from 'firebase-admin';
import fs from 'fs';

// Cargar las credenciales con fs.readFileSync
const serviceAccount = JSON.parse(fs.readFileSync('./credenciales-firebase.json', 'utf8'));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

async function importData() {
  const products = data.products;

  for (const product of products) {
    const productId = String(product.id); // Asegura que el ID sea una cadena
    
    console.log(`ID del producto: ${productId}`);
    await db.collection('products').doc(productId).set(product);
    console.log(`✔️ Producto ${product.name} importado`);
  }

  console.log('✅ ¡Importación completa!');
}

importData().catch(console.error);
