import React from "react";
import Gsap from "./Pages/GSAP/Gsap";
import ReactPage from "./Pages/ReactPage/ReactPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReactPage />} />
        <Route path="/gsap" element={<Gsap />} />
      </Routes>
    </Router>
  );
};

export default App;
