import React from "react";
import { useParams } from "react-router-dom";
const User = () => {
  let params = useParams();
  return <h2>Invoice: {params.userId}</h2>;
};

export default User;
