import { Link } from "react-router-dom";
import "./VinylCard.css";

export default function VinylCard({ vinyl, onDelete }) {
  return (
    <div className="vinyl-card">
      <h2>{vinyl.title}</h2>
      <p>Artist: {vinyl.artist}</p>
      <p>Utgångsår: {vinyl.releaseYear}</p>
      <p>Genre: {vinyl.genre}</p>
      <p>Tryckår: {vinyl.pressYear}</p>

      <Link to={`/edit/${vinyl.id}`} className="edit-button">
        Redigera
      </Link>
      <button onClick={() => onDelete(vinyl.id)} className="delete-button">
        Ta bort
      </button>
    </div>
  );
}
