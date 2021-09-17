import React,{useState} from 'react';

import './App.css';

const App = () => {

  const [task ,setTask] = useState({
   username:"",
   date:"",
  
   });

  const [todos,setTodos] = useState([{
  //   username:"",
  //  email:"",
  //  phonenumber:""
  }]);
  const changeHandler = e =>{
    // setTask(e.target.value)
    setTask({...task,[e.target.name]:[e.target.value]})
  }

  const submitHandler= e=>{
    e.preventDefault();
    // console.log(task);
    const newTodos =[...todos,task];
    setTodos(newTodos);
    setTask("");
    // console.log(todos);
   
  }

  const deleteHandler = (indexValue)=>{
    const newTodos = todos.filter((todo,index) => index!==indexValue );
    setTodos(newTodos)
    setTask("");
    
  }
  return (
    <div>
      <center>
        
            <form onSubmit={submitHandler} autoComplete="off">
              <input type="text" name="username" required value={task.username} onChange={changeHandler} placeholder="UserName"/><br/>
              <input type="date" name="date"  required value={task.date} onChange={changeHandler} /> <br/>
             
              <input type="submit" value="submit" required  />
              
            </form>
            <br/>
              {/* <TodoList todolist={todos} deletebtn={deleteHandler}/> */}

              <br/>
              {/* regular h1 */}
              {
              
                todos.map((element,index)=>(
                  <>
                    <h1> {element.username} </h1>
                    <h1> {element.date} </h1>
                    
                    <button onClick={()=>deleteHandler(index)}>Delete</button>
                  </>
                ))  
              }
              
      
      </center>
    </div>
  )
}

export default App
