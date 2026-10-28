import { Link } from 'react-router-dom';
import { categories } from '../categories.js';

export default function Categories() {
  return (
    <div className="section cat-grid">
      {categories.map(c => (
        <div className="cat-card" key={c.nom}>
          <span className="cat-icon">{c.icone}</span>
          <span>{c.nom}</span>
          <Link to={`/?cat=${encodeURIComponent(c.nom)}`}>Voir</Link>
        </div>
      ))}
    </div>
  );
}