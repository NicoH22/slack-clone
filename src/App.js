import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/Chat";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Login from "./components/login/Login";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app_body">
              <Sidebar />
              <Routes>
                <Route path="/room/:roomId" element={<Chat />} />
                <Route path="/" element={<h1>Welcome</h1>} />
              </Routes>
              {/* REACT-ROUTER > CHAT SCREEN */}
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
