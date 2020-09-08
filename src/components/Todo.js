import React from 'react';

function Todo({todo, removeTodo}) {
  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <div>
      <li>{todo.task} - <button onClick={handleRemoveClick}>Deletar</button></li>
    </div>
  );
}

export default Todo;