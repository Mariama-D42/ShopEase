import { Link } from 'react-router-dom';
import { useCart } from '../CartContext.jsx';
import {fcfa } from '../utils.js';


export default function Cart() {
const { items, setQty, remove, total } = useCart();

return (
<>
Panier

  {items.length === 0 ? (
    <p>
      Ton panier est vide.
      <Link to="/"> Voir les produits</Link>
    </p>
  ) : (
    <>
      {items.map((i) => (
        <div className="line" key={i._id}>
          {i.image ? (
            <img src={i.image} alt={i.name || 'Produit'} />
          ) : (
            <span
              className="image-placeholder cart-image-placeholder"
              aria-hidden="true"
            >
              —
            </span>
          )}
          <span className="grow">{i.name}</span>
          <input
            type="number"
            min="1"
            value={i.qty}
            onChange={(e) =>
              setQty(i._id, Number(e.target.value))
            }
          />
          <span>{fcfa(i.price * i.qty)}</span>
          <button
            type="button"
            onClick={() => remove(i._id)}
          >
            Retirer
          </button>
        </div>
      ))}
      <p className="total">Total : {fcfa(total)}</p>
      <div className="cart-actions">
        <Link to="/">Continuer les achats</Link>
        {' '}
        <Link to="/login">Passer la commande</Link>
      </div>
    </>
  )}
</>

);
}
