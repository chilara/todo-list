import React, { useState } from "react";
import ToDoList from "./ToDoList";

const InputToDo = () => {
  const [inputValue, setInputValue] = useState("");
  const todos = [
    {
      id: 1,
      text: "Monday: Chest-Day",
      status: true,
    },
    {
      id: 2,
      text: "Tuesday: Leg-Day",
      status: true,
    },
    {
      id: 3,
      text: "Wednesday: Back-Day",
      status: false,
    },
  ];
  const [listItems, setListItems] = useState(todos);
  const submit = () => {
    if (inputValue !== "") {
      setListItems([
        ...listItems,
        {
          id: listItems.length + 1,
          text: inputValue,
          status: false,
        },
      ]);
    }
    setInputValue("");
  };

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const delToDo = (id) => () => {
    const delItem = (item) => {
      return item.id !== id;
    };

    const newList = listItems.filter(delItem);
    setListItems(newList);
  };

  return (
    <>
      <div className="input-todo">
        <input
          type="text"
          placeholder="Add me.."
          value={inputValue}
          onChange={changeHandler}
        />
        <button onClick={submit}>Add</button>
      </div>
      <ToDoList listOfTodos={listItems} deleteToDo={delToDo} />
    </>
  );
};

export default InputToDo;
