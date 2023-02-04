import React, {useState} from 'react';
import './App.css';
import ToDoTable from './components/ToDoTable';
import NewTodoForm from './components/NewTodoForm';


function App() {

  const [showAddTodoform, setShowAddTodoForm] = useState(false);

  const [todos,setTodos] = useState([
    {rowNumber: 1, rowDescription:'Daily Design', rowAssigned: 'Aastha'},
    {rowNumber: 2, rowDescription:'Revise Java', rowAssigned: 'Aastha'},
    {rowNumber: 3, rowDescription:'Implement ML', rowAssigned: 'Aastha'},
    {rowNumber: 4, rowDescription:'Model to deploy', rowAssigned: 'Aastha & Anushka'}
  ]
  )

  const addTodo = (description, assigned) =>{
    // console.log('Our Add todo  buuton has been clicked');
    let rowNumber=0;
    if(todos.length >0){
      rowNumber = todos[todos.length-1].rowNumber+1;}
      else{
        rowNumber=1;
      }
      const newTodo = {
        rowNumber:rowNumber,
        rowDescription:description,
        rowAssigned: assigned
      };
      setTodos(todos =>[...todos,newTodo])
      // console.log(todos);
    }

    const deleteTodo = (deleteTodorowNumber) => {
      let filtered = todos.filter(function(value){
        return value.rowNumber !== deleteTodorowNumber;
      });
      setTodos(filtered);
    }
   

  return (
    <div className="mt-5 container">
    <div className="card">
      <div className="card-header">
        Your To Dos
      </div>
      <div className="card-body">
        <ToDoTable todos={todos} deleteTodo={deleteTodo}/>
        <button  onClick={()=> setShowAddTodoForm(!showAddTodoform)} className='btn btn-primary'>
          {showAddTodoform ?'Close New Todo' :'New Todo'}
          </button>
          {showAddTodoform && 
          <NewTodoForm addTodo={addTodo}/>
          }
          
      </div>
    </div>
    </div>
  );
}

export default App;
