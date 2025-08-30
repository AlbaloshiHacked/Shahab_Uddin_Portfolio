import { Suspense, useEffect, useState } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";

// Simple error boundary to avoid blank screen on runtime errors
import React from "react";
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: any }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }
  componentDidCatch() {}
  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            padding: 24,
            fontFamily: "ui-sans-serif, system-ui",
            background: "#fff",
          }}
        >
          <h1 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
            Something went wrong
          </h1>
          <p style={{ color: "#666" }}>Please try refreshing the page.</p>
        </div>
      );
    }
    return this.props.children as any;
  }
}

// Render Tempo storyboards only when running inside Tempo.
// This avoids importing the virtual module in production builds.
function TempoRoutes() {
  const [tempoRoutes, setTempoRoutes] = useState<any[]>([]);

  useEffect(() => {
    if (import.meta.env.VITE_TEMPO === "true") {
      // Build the module id dynamically so Rollup doesn't try to resolve it during production builds
      const tempoModuleId = "tempo-" + "routes";
      import(/* @vite-ignore */ tempoModuleId)
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
      <ErrorBoundary>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Fallback to Home for any unknown route to prevent blank screens */}
            <Route path="*" element={<Home />} />
          </Routes>
          {import.meta.env.VITE_TEMPO === "true" ? <TempoRoutes /> : null}
        </>
      </ErrorBoundary>
    </Suspense>
  );
}

export default App;
