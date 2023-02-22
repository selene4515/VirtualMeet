import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navigation from "./pages/Navigation";
import Home from "./pages/home/Home";
import Footer from "./pages/Footer";
import Plan from "./pages/plan/Plan";
import Payment from "./pages/payment/Payment";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/plan" element={<Plan />} />
          <Route path="/plan/payment" element={<Payment />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
