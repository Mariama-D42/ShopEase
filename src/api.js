const API_URL = 'https://shopease-backend-jpx1.onrender.com/api';

export async function getProducts() {

  const response = await fetch(`${API_URL}/products`);

  if (!response.ok) {

    throw new Error('Impossible de récupérer les produits');

  }

  return response.json();
}