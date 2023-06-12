import Education from "./components/Education/Eduction";
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
