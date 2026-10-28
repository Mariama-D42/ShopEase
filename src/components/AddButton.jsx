import { useState } from 'react';
import { useCart } from '../CartContext.jsx';

export default function AddButton({ product }) {
  const { add } = useCart();
  const [done, setDone] = useState(false);

  function click() {
    add(product);
    setDone(true);
    setTimeout(() => setDone(false), 1200);
  }

  if (product.stock < 1) return <button disabled>Épuisé</button>;
  return <button onClick={click}>{done ? 'Ajouté ✓' : 'Ajouter au panier'}</button>;
}
