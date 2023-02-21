import React, { useState } from "react";
import Card from "./Card";
import Task from "./Task";


const AddTask = () => {
  const [tasks , setTasks]=useState([
    {}
])
  const [newtask, setnewtask]=useState({name:"" , done:false})
  const addnew=()=>{
    setTasks([...tasks,newtask])
  }
  return (
    <div>
      <h1>To Do List</h1>
      <div className="typing_area">
      <input type="text" name="" id="typed_task"  onChange={(e)=>(setnewtask({name:e.target.value}))}/>
      <button onClick={()=>addnew()}> ADD </button>
      </div>
      <div>
      {tasks.map((el)=><Card  task={el}/>)}
    </div></div>
  );
};

export default AddTask;
