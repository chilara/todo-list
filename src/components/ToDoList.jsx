import React from "react";
import icon from "../Assets/icon.png";

const ToDoList = ({ listOfTodos, deleteToDo }) => {
  return (
    <div className="todo-list">
      <hr />
      {listOfTodos?.map((items) => (
        <div className="todo-item">
          <div>
            <input type="checkbox" checked={items.status} />
            {items.text}
          </div>

          <button onClick={deleteToDo(items.id)}>
            <img src={icon} alt="img" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;

// the following array uses .filter() to create a filtered
// array that has all elements with values less than 10

// const filtered = [12, 5, 8, 130, 44];

// function isBigEnough(value) {
//   return value >= 10;
// }

// const newList = filtered.filter(isBigEnough);

// console.log(newList);

// [12, 130, 44];
