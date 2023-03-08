import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import InputToDo from "./InputToDo";

const ToDoContainer = () => {
  return (
    <div className="todoContainer">
      <NavBar />
      <div className="todoBody">
        <Header />
        <InputToDo />
        {/* <ToDoList/> */}
      </div>
    </div>
  );
};

export default ToDoContainer;
