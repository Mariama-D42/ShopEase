import { Link} from 'react-router-dom';
import { fcfa } from '../utils.js';



export default function Orders() {

  const orders = JSON.parse(

    localStorage.getItem("orders") || "[]"

  );

  return (

    <div className="orders-page">

      <h1>Mes commandes</h1>

      {orders.length === 0 ? (

        <div>

          <p>Aucune commande pour le moment.</p>

          <Link to="/">Voir les produits</Link>

        </div>

      ) : (

        orders.map((order, index) => (

          <div className="order-card" key={order.id || index}>

            <h2>Commande numero {order.id || index + 1}</h2>

            <p>Date : {order.date || "Non disponible"}</p>

            <p>Statut : {order.status || "En attente"}</p>

            {Array.isArray(order.items) &&

              order.items.map((item, i) => (

                <div key={item._id || i}>

                  <p>{item.name}</p>

                  <p>Quantite : {item.qty}</p>

                  <p>{fcfa(item.price * item.qty)}</p>

                </div>

              ))}

            <p>

              Total : {fcfa(order.total || 0)}

            </p>

          </div>

        ))

      )}

      <p>

        <Link to="/">Continuer les achats</Link>

      </p>

    </div>

  );

}