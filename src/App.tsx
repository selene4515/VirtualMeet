import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navigation from "./pages/Navigation";
import Home from "./pages/home/Home";
import Footer from "./pages/Footer";
import Plan from "./pages/plan/Plan";
import Payment from "./pages/payment/Payment";
import PaymentSuccess from "./pages/payment/PaymentSuccess";
import PaymentFail from "./pages/payment/PaymenetFail";
import Download from "./pages/downloads/Download";
import Login from "./pages/user/login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/plan" element={<Plan />} />
          <Route path="/plan/payment" element={<Payment />} />
          <Route path="/plan/payment/success" element={<PaymentSuccess />} />
          <Route path="/plan/payment/fail" element={<PaymentFail />} />

          <Route path="/download" element={<Download />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
