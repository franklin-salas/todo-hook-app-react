import { TodoAdd } from "./components/TodoAdd";
import { TodoList } from "./components/TodoList";
import { useTodos } from "./hooks";


function App() {

  const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodos();

  return (
    <div className="container">
  <h1>TodoApp: { todosCount }, <small>pendientes: { pendingTodosCount }</small> </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={ todos } 
                        onDeleteTodo={ handleDeleteTodo } 
                        onToggleTodo={ handleToggleTodo }
                    />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd 
                        onNewTodo={ handleNewTodo }  
                    />
                </div>

            </div>
    </div>
  )
}

export default App
