import React, { useState } from "react";
import Home from "./home/Home";
import InformationWeather from "./informationWeather/InformationWeather";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [active, setActive] = useState(true); //vamos a activarlo desde la raiz

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setActive={setActive} />} />
          <Route
            path="/weather-information/:regionName/:country"
            element={
              <InformationWeather setActive={setActive} active={active} />
            }
          />
          <Route path="/newsJamesWebb" />
          <Route path="/newsMetaVerse" />
          <Route path="/*" element={<>Not Found</>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
