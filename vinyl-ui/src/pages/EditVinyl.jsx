import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import VinylForm from "../components/VinylForm.jsx";

export default function EditVinyl() {
  // Skapa state-variabler för varje fält i formuläret
  const [vinylData, setVinylData] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams(); // Hämtar ID:t från URL:en, t.ex. /edit/3 ger id = 3

  // Hämtar den befintliga skivan från API:t när komponenten laddas, och fyller i formuläret med dess data.
  useEffect(() => {
    fetch(`http://localhost:5108/api/vinyl/${id}`)
      .then((response) => response.json())
      .then((data) => setVinylData(data))
      .catch((error) => console.error("Kunde inte hämta skivan:", error));
  }, [id]);

  if (!vinylData) {
    return <p>Laddar skiva...</p>; // Visas medan datan hämtas
  }
  const handleSubmit = (updatedData) => {
    // Skapa det uppdaterade objektet.
    const updatedVinyl = { ...updatedData, id: id };
    // Skicka iväg datan med PUT
    fetch(`http://localhost:5108/api/vinyl/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedVinyl),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Kunde inte uppdatera skivan");
        navigate("/vinyls"); // Gå tillbaka till listan
      })
      .catch((error) => console.error("Fel vid uppdatering:", error));
  };
  // Renderar formuläret med de befintliga värdena, som användaren kan ändra på.
  return (
    <VinylForm
      initialValues={vinylData}
      formTitle="Redigera skiva"
      submitButtonText="Uppdatera skiva"
      onSubmit={handleSubmit}
    />
  );
}
