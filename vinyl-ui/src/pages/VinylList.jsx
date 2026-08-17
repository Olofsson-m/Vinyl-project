import { useState, useEffect } from "react";
import VinylCard from "../components/vinylCard.jsx";
export default function VinylList() {
  const [vinyls, setVinyls] = useState([]);
  //metod för att ta bort vinylskiva
  const handleDelete = (id) => {
    // Skapa en pop-up som frågar om man är säker
    if (!window.confirm("Är du säker på att du vill ta bort den här skivan?")) {
      return;
    }

    // Anropar DELETE-metoden på vårt API för att ta bort skivan med det givna ID:t
    fetch(`http://localhost:5108/api/vinyl/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // Vi filtrerar bort den skiva som just togs bort från vår state-variabel "vinyls"
          setVinyls(vinyls.filter((vinyl) => vinyl.id !== id));
        } else {
          // Om servern svarar med ett fel, logga det i konsolen
          console.error(
            "Kunde inte ta bort skivan. Servern svarade med status:",
            response.status,
          );
        }
      })
      .catch((error) => console.error("Nätverksfel vid borttagning:", error));
  };
  //UseEffect används för att hämta data från API:t när komponenten laddas
  useEffect(() => {
    //fetch hämtar data från API:t och returnerar ett promise som vi kan hantera med .then()
    fetch("http://localhost:5108/api/vinyl")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Nätverksfel: Kunde inte hämta data");
        }
        return response.json(); // Gör om svaret till ett JavaScript-objekt
      })
      .then((data) => {
        setVinyls(data); // Spara datan i vår state-variabel
      })
      .catch((error) => {
        console.error("Något gick fel:", error);
      });
  }, []);

  //Ritar ut listan med vinylskivor. Om listan är tom visas ett meddelande, annars visas en grid med VinylCard-komponenter.
  return (
    <div className="app-container">
      <h1>Min Vinylsamling</h1>

      {vinyls.length === 0 ? (
        <p>Laddar skivor... (Eller så är samlingen tom!)</p>
      ) : (
        <div className="vinyl-grid">
          {vinyls.map((vinyl) => (
            <VinylCard key={vinyl.id} vinyl={vinyl} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
}
