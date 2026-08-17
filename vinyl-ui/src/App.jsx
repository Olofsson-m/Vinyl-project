import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import VinylList from "./pages/VinylList.jsx";
import AddVinyl from "./pages/AddVinyl.jsx";
import EditVinyl from "./pages/EditVinyl.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* Här definierar vi vår meny med länkar till olika sidor */}
      <nav className="menu">
        <ul>
          <li>
            <Link to="/" className="menu-item-h">
              Hem
            </Link>
          </li>
          <li>
            <Link to="/vinyls" className="menu-item">
              Min Vinylsamling
            </Link>
          </li>
          <li>
            <Link to="/add" className="menu-item">
              Lägg till ny skiva
            </Link>
          </li>
        </ul>
      </nav>
      {/* Här definierar vi våra routes, dvs. vilka komponenter som ska visas för olika URL:er */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vinyls" element={<VinylList />} />
        <Route path="/add" element={<AddVinyl />} />
        <Route path="/edit/:id" element={<EditVinyl />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
