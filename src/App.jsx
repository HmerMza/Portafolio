import { Routes, Route } from "react-router-dom";
import CompHabilidades from "./Components/CompHabilidades";
import CompHome from "./Components/CompHome";
import CompNavbar from "./Components/CompNavbar";
import CompNotFound from "./Components/CompNotFound";

function App() {
  return (
    <div>
      <CompNavbar />
      <Routes>
        <Route path="/Home" element={<CompHome />} index />
        <Route path="/Habilidades" element={<CompHabilidades />} />
        <Route path="*" element={<CompNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
