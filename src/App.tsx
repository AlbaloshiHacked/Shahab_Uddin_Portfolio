import { Suspense, useEffect, useState } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";

// Render Tempo storyboards only when running inside Tempo.
// This avoids importing the virtual module in production builds.
function TempoRoutes() {
  const [tempoRoutes, setTempoRoutes] = useState<any[]>([]);

  useEffect(() => {
    if (import.meta.env.VITE_TEMPO === "true") {
      import(/* @vite-ignore */ "tempo-routes")
        .then((mod) => setTempoRoutes(mod.default || []))
        .catch(() => setTempoRoutes([]));
    }
  }, []);

  // Always call the hook; pass empty routes until loaded
  const element = useRoutes(tempoRoutes);
  return element;
}

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" ? <TempoRoutes /> : null}
      </>
    </Suspense>
  );
}

export default App;
