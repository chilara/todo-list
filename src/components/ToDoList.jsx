import React from 'react'

const ToDoList = ({listOfTodos}) => {
    
  return (
    <div className='todo-list'>
            <hr />
        {
            listOfTodos?.map(items => (
                <div className='todo-item'>
                    <input type= "checkbox" checked= {items.status}/>
                    {items.text}
                </div>
            ))
        }
    </div>
  )
}

export default ToDoList