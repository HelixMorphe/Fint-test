import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import ReactGa from "react-ga";
function App() {
  useEffect(() => {
    ReactGa.initialize("G-S22Z9M1X0Z");
    //to report page views

    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div>
      <Home />
      <Outlet />
    </div>
  );
}

export default App;
