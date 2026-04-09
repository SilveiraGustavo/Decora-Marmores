import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("../pages/Home/Home"));
const Catalogo = lazy(() => import("../pages/Catalog/Catalago"));

function AppRoutes() {
  return (
     <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;


