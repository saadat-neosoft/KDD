import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect } from "react";

import logo from "./assets/Homepage Design/Group-10.png";

function App() {
  useEffect(() => {
    document.title = "Home | KDD";
    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.href = logo;
    document.head.appendChild(favicon);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
