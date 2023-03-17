// Packeage
import { React, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  json,
  redirect,
  Route,
  Routes,
} from "react-router-dom";
import { UserProvider } from "./UserContext";

// Pages
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentFaild from "./pages/PaymentFaild";
import MyComponent from "./pages/MyComponent";
import "slick-carousel/slick/slick.css";
function App() {
  // const [loading, setLoading] = useState(true);
  // const [userSession, setUserSession] = useState(true);

  useEffect(() => {
    const fetchUserAuth = async () => {
      try {
        const API_BASE_URL = "https://apis.mazimatic.com";
        const token = await localStorage.getItem("token");
        if (token) {
          fetch(`${API_BASE_URL}/api/getuser`, {
            headers: { Authorization: "Bearer " + token },
          })
            .then((resp) => resp.json())
            .then((json) => {
              // console.log(json.user.id);
              if (json.user) {
                localStorage.setItem("user", json.user.id);
                redirect("/");
              } else {
                localStorage.clear();
              }
            });
        } else {
          console.log("clear");
          localStorage.clear();
        }
      } catch (error) {
        console.error("There was an error fetch auth", error);
        return;
      }
    };
    fetchUserAuth();
  }, []);
  const user = localStorage.getItem("user");
  // console.log(user);
  return (
    <UserProvider value={user}>
      <div className="app">
        <Router>
          <Routes>
            <Route exact path="/*" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
            <Route path="/payment-fail" element={<PaymentFaild />} />
            <Route path="/test" element={<MyComponent />} />
          </Routes>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
