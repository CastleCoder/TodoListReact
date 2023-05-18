import { useState } from 'react';
// import styles from './assets/styles/index.scss';
import AddTodo from './assets/components/addTodo';
import TodoList from './assets/components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([]);

  function addTodo(content) {
    const todo = {
      id: crypto.randomUUID(),
      content,
      done: false,
      edit: false
    }
    setTodoList([...todoList, todo])
  }

  function deleteTodo(id) {
    setTodoList(todoList.filter( todo => todo.id !== id));
  }

  function toggleTodo(id) {
    setTodoList(todoList.map( (todo) => todo.id === id 
    ? {
        ...todo,
        done: !todo.done
      } 
    : todo 
    ));
  }

  function toggleTodoEdit(id) {
    setTodoList(todoList.map( (todo) => todo.id === id 
    ? {
        ...todo,
        edit: !todo.edit
      } 
    : todo 
    ));
  }

  function editTodo(id, content) {
    setTodoList(
      todoList.map( todo =>
         todo.id === id 
            ? {
                ...todo,
                edit: false,
                content
              } 
            : todo 
        )
    );
  }

  return (
    <div className="d-flex justify-content-center align-items-center p-20">
      <div className="card container p-20">
        <h1 className="mb-20">Liste de tâches</h1>
        <AddTodo addTodo={ addTodo }/>
        <TodoList 
        todoList={ todoList } 
        deleteTodo={deleteTodo} 
        toggleTodo={ toggleTodo }
        toggleTodoEdit= {toggleTodoEdit}
        editTodo= {editTodo}
        />
      </div>
    </div>
  );
}

export default App;
