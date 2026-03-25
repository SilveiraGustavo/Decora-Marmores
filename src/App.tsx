import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import Catalogo from "./pages/Catalog/Catalago";

export default function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
      </Routes>
    </BrowserRouter>
  );
}