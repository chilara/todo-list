import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import ToDoContainer from "../components/ToDoContainer";

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ToDoContainer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;
