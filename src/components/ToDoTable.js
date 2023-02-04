import ToDoRowItem from "./ToDoRowItem"

function ToDoTable(props){
    return(
       <table className="table table-hover">
        <thead>
        <tr>
            <th scope='col'>S.no</th>
            <th scope='col'>Description</th>
            <th scope='col'>Assigned</th>
        </tr>
        </thead>
        <tbody>
            {/* <ToDoRowItem 
            rowNumber={props.todos[0].rowNumber}
            rowDescription={props.todos[0].rowDescription}
            rowAssigned={props.todos[0].rowAssigned}/>

            <ToDoRowItem 
            rowNumber={props.todos[1].rowNumber}
            rowDescription={props.todos[1].rowDescription}
            rowAssigned={props.todos[1].rowAssigned}/>

            <ToDoRowItem 
            rowNumber={props.todos[2].rowNumber}
            rowDescription={props.todos[2].rowDescription}
            rowAssigned={props.todos[2].rowAssigned}/> */}
            {props.todos.map(todo =>(
                <ToDoRowItem
                key={todo.rowNumber}
                rowNumber={todo.rowNumber} 
                rowDescription={todo.rowDescription} 
                rowAssigned={todo.rowAssigned}
                deleteTodo={props.deleteTodo}
                />
            )
                )}
        </tbody>
       </table> 
    )
}

export default ToDoTable