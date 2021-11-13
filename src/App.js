import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import ReactGa from "react-ga";
function App() {
  useEffect(() => {
    ReactGa.initialize("UA-212838462-1");
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
