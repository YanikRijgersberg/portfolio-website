import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home.jsx";
import "./css/App.css";
function App() {
  return (
<<<<<<< Updated upstream
    <BrowserRouter basename="/portfolio-website">
=======
    <BrowserRouter basename="/portfolio-website/">
>>>>>>> Stashed changes
      <Routes>
        <Route index element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
