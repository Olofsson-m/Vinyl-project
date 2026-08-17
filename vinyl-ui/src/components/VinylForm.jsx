import { useState } from "react";
import "./VinylForm.css";

export default function VinylForm({
  initialValues = {},
  onSubmit,
  formTitle,
  submitButtonText,
}) {
  const [title, setTitle] = useState(initialValues?.title || "");
  const [artist, setArtist] = useState(initialValues?.artist || "");
  const [releaseYear, setReleaseYear] = useState(
    initialValues?.releaseYear || "",
  );
  const [genre, setGenre] = useState(initialValues?.genre || "");
  const [pressYear, setPressYear] = useState(initialValues?.pressYear || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      title,
      artist,
      releaseYear: releaseYear ? parseInt(releaseYear, 10) : 0,
      genre,
      pressYear: pressYear ? parseInt(pressYear, 10) : null,
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="group-form">
        <h1>{formTitle}</h1>
        <div className="form-group">
          <label htmlFor="title">Titel:</label>
          <input
            type="text"
            id="title"
            placeholder="Titel"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="artist">Artist:</label>
          <input
            type="text"
            id="artist"
            placeholder="Artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="releaseYear">Utgångsår:</label>
          <input
            type="number"
            id="releaseYear"
            placeholder="Utgångsår"
            value={releaseYear}
            onChange={(e) => setReleaseYear(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="genre">Genre:</label>
          <input
            type="text"
            id="genre"
            placeholder="Genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pressYear">Tryckår:</label>
          <input
            type="number"
            id="pressYear"
            placeholder="Tryckår"
            value={pressYear}
            onChange={(e) => setPressYear(e.target.value)}
          />
        </div>
        <button type="submit">{submitButtonText}</button>
      </form>
    </div>
  );
}
