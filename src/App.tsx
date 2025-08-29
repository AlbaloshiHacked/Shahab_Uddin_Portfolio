import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

function App() {
  // Always call the hook, pass empty routes when not in Tempo
  const tempoRoutes = useRoutes(
    import.meta.env.VITE_TEMPO === "true" ? routes : [],
  );

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {tempoRoutes}
      </>
    </Suspense>
  );
}

export default App;
