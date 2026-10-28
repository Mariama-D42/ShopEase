const img = (filename) => `/produits/${encodeURIComponent(filename)}`;

export const products = [
  { _id: '1', name: 'Boubou brodé', category: 'Mode', description: 'Boubou en bazin riche, broderie main.', price: 45000, stock: 12, image: img('Boubou brodé.png') },
  { _id: '2', name: 'Sac en cuir artisanal', category: 'Mode', description: 'Cuir véritable, couture solide.', price: 28000, stock: 8, image: img('Sac en cuir.jpg') },
  { _id: '3', name: 'Sandales en cuir', category: 'Mode', description: 'Fabriquées à la main, semelle souple.', price: 12000, stock: 20, image: img('sandale en cuir.jpg') },
  { _id: '4', name: 'Écouteurs sans fil', category: 'Électronique', description: 'Autonomie 20 h, boîtier de charge.', price: 15000, stock: 30, image: img('ecouteur.jpg') },
  { _id: '5', name: 'Montre connectée', category: 'Électronique', description: 'Suivi d’activité et notifications.', price: 35000, stock: 4, image: img('montre connecter.jpg') },
  { _id: '6', name: 'Batterie externe 20 000 mAh', category: 'Électronique', description: 'Deux ports USB, charge rapide.', price: 14000, stock: 25, image: img('batterie externe.jpg') },
  { _id: '7', name: 'Bissap en poudre (500 g)', category: 'Alimentation', description: 'Fleurs d’hibiscus séchées, 100 % naturel.', price: 3500, stock: 50, image: img('bissap en poudre.jpg') },
  { _id: '8', name: 'Miel local (500 g)', category: 'Alimentation', description: 'Récolté en Casamance, non chauffé.', price: 5000, stock: 18, image: img('miel.jpg') },
  { _id: '9', name: 'Huile de baobab', category: 'Beauté', description: 'Pressée à froid, 100 ml.', price: 6000, stock: 0, image: img('huile de baobab.jpg') },
  { _id: '10', name: 'Beurre de karité', category: 'Beauté', description: 'Pur et non raffiné, pot de 200 g.', price: 4000, stock: 35, image: img('karité.jpg') },
  { _id: '11', name: 'Panier en raphia', category: 'Maison', description: 'Tressé à la main, idéal pour le rangement.', price: 9000, stock: 10, image: img('panier en raphia.jpg') },
  { _id: '12', name: 'Théière en métal', category: 'Maison', description: 'Pour le thé à la sénégalaise, 1 litre.', price: 7500, stock: 14, image: img('Théière en métal.jpg') },
  { _id: '13', name: 'Tapis berbère', category: 'Maison', description: 'Fait main, laine naturelle.', price: 25000, stock: 5, image: img('tapis.jpg') },
  { _id: '14', name: 'Casque audio Bluetooth', category: 'Électronique', description: 'Son stéréo, micro intégré.', price: 22000, stock: 7, image: img('Casque Bluetooth.jpg') },
  { _id: '15', name: 'Robe wax', category: 'Mode', description: 'Tissu wax, coupe moderne.', price: 30000, stock: 9, image: img('Robe wax.jpg') },
  { _id: '16', name: 'Crème hydratante à l\'aloe vera', category: 'Beauté', description: 'Hydrate et apaise la peau.', price: 5500, stock: 20, image: img('Crème hydratante à l\'aloe vera.jpg') },
  { _id: '17', name: 'Coussin décoratif en coton', category: 'Maison', description: 'Housse amovible, lavable en machine.', price: 12000, stock: 15, image: img('Coussin décoratif.jpg') },
  { _id: '18', name: 'Bougie parfumée à la vanille', category: 'Maison', description: 'Durée de combustion 40 h.', price: 8000, stock: 22, image: img('Bougie parfumée.jpg') },
  { _id: '19', name: 'Gel douche au karité', category: 'Beauté', description: 'Nettoie et nourrit la peau.', price: 4500, stock: 30, image: img('Gel douche.jpg') },
  { _id: '20', name: 'Café en grains (250 g)', category: 'Alimentation', description: 'Origine Sénégal, torréfaction artisanale.', price: 6000, stock: 40, image: img('Café en grains.jpg') },
  { _id: '21', name: 'Jus de mangue (1 L)', category: 'Alimentation', description: '100 % pur jus, sans sucre ajouté.', price: 4000, stock: 28, image: img('Jus de mangue.jpg') },
  { _id: '22', name: 'Savon noir africain', category: 'Beauté', description: 'Savon naturel, exfoliant doux.', price: 3500, stock: 18, image: img('Savon noir.jpg') },
  { _id: '23', name: 'Pagne wax', category: 'Mode', description: 'Tissu wax, motifs colorés.', price: 15000, stock: 12, image: img('Pagne wax.jpg') },
  { _id: '24', name: 'Chaussures en cuir', category: 'Mode', description: 'Cuir véritable, semelle résistante.', price: 28000, stock: 6, image: img('Chaussures en cuir.jpg') },
  { _id: '25', name: 'Boucles d\'oreilles en perles', category: 'Mode', description: 'Fait main, perles colorées.', price: 7000, stock: 25, image: img('Boucles d\'oreilles en perles.jpg') },
  { _id: '26', name: 'Crème solaire SPF 50', category: 'Beauté', description: 'Protection maximale contre les UV.', price: 9500, stock: 14, image: img('créme solaire.png') },
  { _id: '27', name: 'Huile essentielle de lavande', category: 'Beauté', description: 'Relaxante et apaisante.', price: 8000, stock: 20, image: img('huile lavande.png')},
  { _id: '28', name: 'Tasse en céramique', category: 'Maison', description: 'Capacité 300 ml, lavable au lave-vaisselle.', price: 5000, stock: 30, image: img('tasse en céramique.png')},
  { _id: '29', name: 'Set de couteaux de cuisine', category: 'Maison', description: 'Acier inoxydable, manche ergonomique.', price: 18000, stock: 10, image: img('couteaux de cuisine.jpg') },
  { _id: '30', name: 'Coussin chauffant électrique', category: 'Maison', description: 'Soulage les douleurs musculaires.', price: 22000, stock: 8, image: img('cousin éléctrique.png') },
  { _id: '31', name: 'Tapis de yoga antidérapant', category: 'Maison', description: 'Épaisseur 6 mm, facile à nettoyer.', price: 15000, stock: 12, image: img('tapis yoga.png')},
  { _id: '32', name: 'Bouteille d’eau en acier inoxydable', category: 'Maison', description: 'Garde les boissons chaudes ou froides.', price: 12000, stock: 20, image: img('bouteille eau.png')
    },
];

export const categories = [...new Set(products.map((p) => p.category))];