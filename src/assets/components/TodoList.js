import React from 'react';
import TodoItem from './TodoItem';
import EditTodo from './EditTodo';

function TodoList({
  todoList, 
  deleteTodo, 
  toggleTodo, 
  toggleTodoEdit, 
  editTodo
}) {
  return todoList.length ? (
    <ul>
      { todoList.map( (todo) => 
        todo.edit ? (
          <EditTodo 
            key={todo.id} 
            todo={ todo }
            cancelEditTodo={() => toggleTodoEdit(todo.id)}
            editTodo={ (content) => editTodo(todo.id, content)}
          />
      ) : (
          <TodoItem 
            key={todo.id} 
            todo={todo}
            deleteTodo={ () => deleteTodo(todo.id)}
            toggleTodo={ () => toggleTodo(todo.id)}
            editTodo={() => toggleTodoEdit(todo.id)}
          />
      ))}
    </ul>
  ) : <p>Aucune todo pour le moment</p> ;
}

export default TodoList;
