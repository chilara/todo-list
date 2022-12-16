import React from 'react'
import ToDoList from './ToDoList';

const InputToDo = () => {
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
    }
]
  const submit = () =>{

  }
  return (
    <>
    <div className='input-todo'>
        <input type='text' placeholder='Add me..' />
        <button onClick={submit}>Add</button>
    </div>
    <ToDoList listOfTodos= {todos}/>
    </>
  )
}

export default InputToDo