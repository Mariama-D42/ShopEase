const all = () => JSON.parse(localStorage.getItem('orders') || '[]');

export const getOrders = (userId) =>
  all().filter((o) => o.userId === userId).reverse();

export function createOrder({ userId, items, address, total }) {
  const order = {
    id: Date.now().toString(),
    userId,
    items,
    address,
    total,
    status: 'en attente',
    date: new Date().toISOString(),
  };
  localStorage.setItem('orders', JSON.stringify([...all(), order]));
  return order;
}
