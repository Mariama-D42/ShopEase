const items = [
  { icone: '🚚', titre: 'Livraison rapide',   texte: 'Partout au Sénégal' },
  { icone: '🔒', titre: 'Paiement sécurisé',  texte: 'Wave, Orange Money' },
  { icone: '↩️', titre: 'Retours faciles',    texte: 'Sous 7 jours' },
  { icone: '📞', titre: 'Service client',     texte: 'Disponible 7j/7' },
];

export default function Reassurance() {
  return (
    <div className="section">
      <div className="reassure">
        {items.map(i => (
          <div key={i.titre}>
            <span className="reassure-icon">{i.icone}</span>
            <div>
              <strong>{i.titre}</strong>
              <p>{i.texte}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}