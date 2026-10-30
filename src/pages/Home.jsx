import { useEffect, useState } from 'react';

import { Link, useSearchParams } from 'react-router-dom';

import { getProducts } from '../api.js';
import { fcfa } from '../utils.js';
import { useCart } from '../CartContext.jsx';

export default function Home() {
  const [params] = useSearchParams();
  const [showAll, setShowAll] = useState(false);
  const [products, setProducts] = useState([]);

const [loading, setLoading] = useState(true);

const [error, setError] = useState('');
useEffect(() => {

  getProducts()

    .then((data) => setProducts(data))

    .catch(() => setError('Impossible de charger les produits.'))

    .finally(() => setLoading(false));

}, []);
  const q = params.get('q') || '';
  const cat = params.get('cat') || '';
  const { add } = useCart();

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(q.toLowerCase()) &&
      (!cat || p.category === cat)
  );

  // Sur l'accueil sans filtre, on montre 8 produits seulement
  const filtering = q || cat;
  const visible = filtering || showAll ? filtered : filtered.slice(0, 8);

  return (
    <>
    {loading && <p>Chargement des produits...</p>}

{error && <p>{error}</p>}
      {cat && (
        <p>
          Catégorie : <strong>{cat}</strong> · <Link to="/">Tout afficher</Link>
        </p>
      )}
{!loading && !error && filtered.length === 0 && (

  <p>Aucun produit ne correspond à ta recherche.</p>

)}
      <div className="grid" id="produits">
        {visible.map((p) => (
          <article className="card" key={p._id}>
            {p.stock < 1 ? (
              <span className="badge out">Épuisé</span>
            ) : p.stock <= 5 ? (
              <span className="badge low">Plus que {p.stock}</span>
            ) : null}

            <Link to={`/product/${p._id}`}>
              <img src={p.image} alt={p.name} />
            </Link>
            <h3>{p.name}</h3>
            <p className="price">{fcfa(p.price)}</p>
            <button onClick={() => add(p)} disabled={p.stock < 1}>
              {p.stock < 1 ? 'Épuisé' : 'Ajouter au panier'}
            </button>
          </article>
        ))}
      </div>

      {!filtering && !showAll && filtered.length > 8 && (
        <div className="more">
          <button onClick={() => setShowAll(true)}>
            Voir tous les produits ({filtered.length})
          </button>
        </div>
      )}
    </>
  );
}