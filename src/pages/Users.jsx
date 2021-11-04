import React from "react";
import { Outlet, useParams } from "react-router-dom";
import Header from "../components/Header";
import Home from "./Home";
const Users = () => {
  let params = useParams();
  return (
    <div>
      {!params.userId && (
        <div>
          <Header />
          <Home />
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default Users;
