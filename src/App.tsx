import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Detail from "./pages/Detail";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:invoiceNo" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
