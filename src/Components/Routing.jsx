import Features from "./Features/Features";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Nav from "./Navigation/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pricing from "./Pricing/Pricing";
import Login from "./Login/Login";
import SignUp from "./Login/SignUp";
import SignIn from "./Login/SignIn";
import VerifyMail from "./Login/VerifyMail";

function Routing() {
  const user = false;
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/Login" element={user ? <Home /> : <Login />} />
        <Route path="/SignUp" element={<SignUp/> } />
        <Route path="/SignIn" element={<SignIn/> } />
        <Route path="/VerifyMail" element={<VerifyMail />} />
      
      </Routes>
      <Footer />
    </Router>
  );
}

export default Routing;
