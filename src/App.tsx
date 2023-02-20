import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navigation from "./pages/Navigation";
import Home from "./pages/home/Home";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
