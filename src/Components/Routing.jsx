import Features from "./Features/Features";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Nav from "./Navigation/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pricing from "./Pricing/Pricing";
import Login from "./Login/Login";

function Routing() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default Routing;
