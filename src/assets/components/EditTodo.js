import React from 'react';
import { useState } from 'react';

function EditTodo({
  todo, 
  editTodo, 
  cancelEditTodo
}) {
  const [value, setValue] = useState(todo.content);

  function handleChange(e) {
    const inputValue = e.target.value;
    setValue(inputValue);
  }

  function handleKeyDown(e){
    if (e.key === 'Enter' && value.length){
      editTodo(value);
      setValue("");
    }
  }

  function handleClick() {
    if(value.length){
      editTodo(value);
      setValue("");
    }
  }

  return (
    <div className='d-flex flex-row justify-content-center align-items-center mb-10'>
      <input 
      type="text"
      onChange={ handleChange }
      onKeyDown={ handleKeyDown }
      value={ value }
      placeholder='Modifier la todo' 
      className='mr-15 flex-fill' />
      <button onClick={handleClick} className='btn btn-primary'>Sauvegarder</button>
      <button onClick={cancelEditTodo} className='btn btn-reverse-primary'>Annuler</button>
    </div>
  )

}

export default EditTodo;