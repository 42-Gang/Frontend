import "./index.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Select_GameOption from "./pages/Select_GameOption";
import Select_GameMode_Auto from "./pages/Select_GameMode_Auto";
import Select_GameMode_Custom from "./pages/Select_GameMode_Custom";
import Setting from "./pages/Setting";
import History_Home from "./pages/History_Home";
import Tournament from "./pages/Tournament/Tournament.tsx";
import Waiting from "./pages/Tournament/Waiting.tsx";
import Invitation from "./pages/Tournament/invitation.tsx";

const App = () => {
  useEffect(() => {
    const lockWindowSize = () => {
      window.resizeTo(800, 600);
    };

    window.addEventListener("resize", lockWindowSize);
    lockWindowSize(); // 실행 시 즉시 크기 고정

    return () => {
      window.removeEventListener("resize", lockWindowSize);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Select_GameOption" element={<Select_GameOption />} />
          <Route
            path="/Select_GameMode_Auto"
            element={<Select_GameMode_Auto />}
          />
          <Route
            path="/Select_GameMode_Custom"
            element={<Select_GameMode_Custom />}
          />
          <Route path="/Setting" element={<Setting />} />
          <Route path="/History_Home" element={<History_Home />} />

          {/* 토너먼트 */}
          <Route path="/Tournament" element={<Tournament />} />
          <Route path="/Waiting" element={<Waiting />} />
          <Route path="/Invitation" element={<Invitation />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
