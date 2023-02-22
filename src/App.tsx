import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navigation from "./pages/Navigation";
import Home from "./pages/home/Home";
import Footer from "./pages/Footer";
import Plan from "./pages/plan/Plan";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/plan" element={<Plan />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
