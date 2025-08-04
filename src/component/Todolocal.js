import React, { useEffect, useState } from 'react'

export default function Todo() {
  let sorted = JSON.parse(localStorage.getItem("user"))||[];
  const [task,setTask]=useState('');
  const [todo,setTodo]=useState(sorted);
  const [edit,setEdit]=useState(null);

  useEffect(()=>{
    localStorage.setItem("user",JSON.stringify(todo));
  },[todo])

  function handleChange(e){
    
     setTask(e.target.value);
  }
   
  function AddTask(){
    setTodo([...todo,task]); 
    setTask('');

   if(edit !== null){
    const updated=[...todo];
    updated[edit]=task;
    setTodo(updated);
    setEdit(null);

   }
  }

  function DeleteTask(index){
  const DeleteList=[...todo];
  DeleteList.splice(index,1);
  setTodo(DeleteList)
  }

  function EditTask(index){
   setTask(todo[index]);
   setEdit(index);
  }
  
  return (
    <div>
     <h1>Todo</h1>
      <input type="text" onChange={handleChange} value={task} />
      <button onClick={AddTask}>Add Task</button>

      <ul>
        {
            todo.map((item,index)=>(
               <li key={index} >{item}
                
                <button onClick={()=> EditTask(index)}>Edit</button>
                <button onClick={()=> DeleteTask(index)} >Delete</button>
               
               </li>
            ))
        }
      </ul>
    </div>
  )
}

