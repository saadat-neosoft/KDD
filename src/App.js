import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect, useState } from "react";

import logo from "./assets/Homepage Design/Group-10.png";
import Dashboard from "./pages/Dashboard";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  useEffect(() => {
    document.title = "Home | KDD";
    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.href = logo;
    document.head.appendChild(favicon);
  }, []);

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes isUserLoggedIn={isUserLoggedIn} />}>
          <Route
            path="/dashboard"
            element={<Dashboard isUserLoggedIn={isUserLoggedIn}    setIsUserLoggedIn={setIsUserLoggedIn}/>}
          />
        </Route>
        <Route
          path="/"
          element={
            <Home
              isUserLoggedIn={isUserLoggedIn}
              setIsUserLoggedIn={setIsUserLoggedIn}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
