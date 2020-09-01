import React, {useState} from "react";
// import uuid from "uuidv4";
const {uuid} = require("uuidv4");

function TodoInput({addTodo}) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
  });

  function handleChange(event) {
    setTodo({...todo, task: event.target.value});
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (todo.task.trim()) {
      addTodo({...todo, id: uuid()});
      setTodo({...todo, task: ""});
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="task" type="text" value={todo.task} onChange={handleChange}/>
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TodoInput;