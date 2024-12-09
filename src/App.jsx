import React from "react";
import Gsap from "./Pages/GSAP/Gsap";
import ReactPage from "./Pages/ReactPage/ReactPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactCode from "./PracticeCode/ReactCode/ReactCode";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReactPage />}></Route>
        <Route path="/gsap" element={<Gsap />}></Route>
        <Route path="/reactcode" element={<ReactCode />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
