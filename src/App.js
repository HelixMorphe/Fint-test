import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import ReactGa from "react-ga";
function App() {
  useEffect(() => {
    ReactGa.initialize("G-M6F67TDY0M");
    //to report page views

    ReactGa.pageview("/");
  }, []);
  return (
    <div>
      <Home />
      <Outlet />
    </div>
  );
}

export default App;
