import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginReg from "./pages/auth/LoginReg";
import ResetPassword from "./pages/auth/ResetPassword";
import SendPasswordResetEmail from "./pages/auth/SendPasswordResetEmail";
import Roadmap from "./pages/Roadmap";
import Layout from "./pages/Layout";
import Access from "./pages/access";
import { useSelector } from "react-redux";
import "./app.css";
import Navbar from "./components/Navbar";
import Test from "./pages/Test";
import Tmap from "./pages/Tmap";
import Radar from "./pages/Radar";
import Foot from "./components/Foot";
import Network from "./components/Network";
function App() {
  const { token } = useSelector((state) => state.auth);
  return (
    <div className="container1">
      <BrowserRouter>
        {token ? <Navbar /> : ""}
        <Routes>
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/tmap" element={<Tmap />} />
            <Route path="/radar" element={<Radar />} />
            <Route path="/network" element={<Network />} />
            <Route
              path="/login"
              element={!token ? <LoginReg /> : <Navigate to="/" />}
            />
            <Route
              path="/sendpasswordresetemail"
              element={<SendPasswordResetEmail />}
            />
            <Route
              path="/api/user/reset/:id/:token"
              element={<ResetPassword />}
            />
          <Route
            path="/"
            element={token ? <Test /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
