import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import PineScriptManual from "./pages/PineScriptManual.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/manual" element={<PineScriptManual />} />
      </Routes>
    </Router>
  );
}

export default App;
