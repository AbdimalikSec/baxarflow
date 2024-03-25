import "./App.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/contact";
import Work from "./pages/work";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
