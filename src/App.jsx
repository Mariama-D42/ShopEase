import { Link, Route, Routes, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Product from './pages/Product.jsx';
import Cart from './pages/Cart.jsx';
import Login from './pages/Login.jsx';
import Orders from './pages/Orders.jsx';
import Hero from './components/Hero.jsx';
import Categories from './components/Categories.jsx';
import Footer from './components/Footer.jsx';
import { categories } from './categories.js';
import { useCart } from './CartContext.jsx';
import Reassurance from './components/Reassurance.jsx';

export default function App() {
  const { count } = useCart();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [params] = useSearchParams();

  // La recherche de l'en-tête écrit dans l'URL
  function onSearch(e) {
    const next = new URLSearchParams(pathname === '/' ? params : '');
    const v = e.target.value;
    if (v) next.set('q', v); else next.delete('q');
    navigate({ pathname: '/', search: next.toString() }, { replace: true });
  }

  return (
    <>
      <div className="topbar">
        <span>Livraison partout au Sénégal</span>
        <span>+221 77 593 48 11</span>
      </div>

      <header className="bar">
        <Link to="/" className="logo">ShopEase</Link>
        <input
          className="bar-search"
          placeholder="Rechercher un produit"
          value={pathname === '/' ? params.get('q') || '' : ''}
          onChange={onSearch}
        />
        <nav>
          <Link to="/orders">Mes commandes</Link>
          <Link to="/cart">Panier ({count})</Link>
          <Link to="/login">Se connecter</Link>
        </nav>
      </header>

      <div className="catnav">
        <Link to="/">Accueil</Link>
        {categories.map(c => (
          <Link
            key={c.nom}
            to={`/?cat=${encodeURIComponent(c.nom)}`}
            className={params.get('cat') === c.nom ? 'active' : ''}
          >
            {c.nom}
          </Link>
        ))}
      </div>

      {pathname === '/' && (
  <>
    <Hero />
    <Categories />
    <Reassurance />
    <div className="section">
      <h2 className="deals-title" id="produits">
        OFFRES <b>DU JOUR</b>
      </h2>
    </div>
  </>
)}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}