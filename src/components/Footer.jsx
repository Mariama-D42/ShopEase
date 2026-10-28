import { Link } from 'react-router-dom';
import { categories } from '../categories.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <strong>ShopEase</strong>
          <p>Votre boutique en ligne au Sénégal.</p>
        </div>

        <div>
          <strong>Catégories</strong>
          {categories.map(c => (
            <Link key={c.nom} to={`/?cat=${encodeURIComponent(c.nom)}`}>
              {c.nom}
            </Link>
          ))}
        </div>

        <div>
          <strong>Mon compte</strong>
          <Link to="/login">Se connecter</Link>
          <Link to="/orders">Mes commandes</Link>
          <Link to="/cart">Panier</Link>
        </div>

        <div>
          <strong>Contact</strong>
          <p>+221 77 593 48 11</p>
          <p>Paiement : Wave · Orange Money</p>
        </div>
      </div>

      <p className="footer-copy">© {new Date().getFullYear()} ShopEase</p>
    </footer>
  );
}