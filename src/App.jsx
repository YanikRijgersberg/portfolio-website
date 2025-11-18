import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home.jsx";
import "./css/App.css";
function App() {
  return (
    <BrowserRouter basename="/portfolio-website">
      <Routes>
        <Route index element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
