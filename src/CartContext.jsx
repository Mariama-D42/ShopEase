import { createContext, useContext, useEffect, useState } from 'react';
import { products } from './data.js';

const Ctx = createContext();
export const useCart = () => useContext(Ctx);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    const savedItems = JSON.parse(localStorage.getItem('cart') || '[]');
    return savedItems.map((item) => {
      const product = products.find((p) => p._id === item._id);
      return product ? { ...item, image: product.image } : item;
    });
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const add = (p) =>
    setItems((it) =>
      it.find((i) => i._id === p._id)
        ? it.map((i) => (i._id === p._id ? { ...i, qty: i.qty + 1 } : i))
        : [...it, { _id: p._id, name: p.name, price: p.price, image: p.image, qty: 1 }]
    );

  const setQty = (id, qty) =>
    setItems((it) =>
      it.map((i) => (i._id === id ? { ...i, qty: Math.max(1, qty || 1) } : i))
    );

  const remove = (id) => setItems((it) => it.filter((i) => i._id !== id));
  const clear = () => setItems([]);
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);

  return (
    <Ctx.Provider value={{ items, add, setQty, remove, clear, total, count }}>
      {children}
    </Ctx.Provider>
  );
}