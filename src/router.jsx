import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import AuthLayout from "./layouts/AuthLayout";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<SignUp />} />
        </Route>
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default Routers;
