import { useNavigate } from "react-router-dom";
import VinylForm from "../components/VinylForm.jsx";

export default function AddVinyl() {
  const navigate = useNavigate(); // Verktyg för att byta sida efter att skivan har lagts till

  const handleSubmit = (vinylData) => {
    fetch("http://localhost:5108/api/vinyl", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(vinylData),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Kunde inte spara skivan");
        // När skivan är sparad, navigera tillbaka till list sidan
        navigate("/vinyls");
      })
      .catch((error) => console.error("Fel vid sparning:", error));
  };
  // Renderar formuläret för att lägga till en ny vinylskiva. Användaren fyller i fälten och skickar in formuläret.
  return (
    <VinylForm
      formTitle="Lägg till ny skiva"
      submitButtonText="Lägg till skiva"
      onSubmit={handleSubmit}
    />
  );
}
