import React from 'react'
import NavBar from './NavBar';
import Header from './Header';
import InputToDo from './InputToDo';
import ToDoList from './ToDoList';

const ToDoContainer = () => {
  return (
    <div className='todo-container'>
        <NavBar/>
        <div className='todo-body'>
        <Header/>
        <InputToDo/>
        {/* <ToDoList/> */}
        </div>
    </div>
  )
}

export default ToDoContainer