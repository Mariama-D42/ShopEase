import { Link, useParams } from 'react-router-dom';
import { products } from '../data.js';
import { fcfa } from '../utils.js';
import { useCart } from '../CartContext.jsx';   

export default function Product() {
  const { id } = useParams();
  const p = products.find((x) => x._id === id);
    const { add } = useCart();
  if (!p) return <p>Produit introuvable. <Link to="/">Retour au catalogue</Link></p>;

  return (
    <div className="detail">
      {p.image ? (
        <img src={p.image} alt={p.name} />
      ) : (
        <div className="image-placeholder detail-image-placeholder" role="img" aria-label={`Image indisponible pour ${p.name}`}>
          Image indisponible
        </div>
      )}
      <div>
        <h1>{p.name}</h1>
        <p>{p.description}</p>
        <p className="price">{fcfa(p.price)}</p>
        <p>{p.stock > 0 ? `${p.stock} en stock` : 'Épuisé'}</p>
        <button onClick={() => add(p)} disabled={p.stock < 1}>Ajouter au panier</button>
      </div>
    </div>
  );
}