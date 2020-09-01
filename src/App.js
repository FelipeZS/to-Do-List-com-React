import React, {useState} from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>React To-Do</p>
        <TodoInput addTodo={addTodo}/>
        <TodoList todos={todos}/>
      </header>
    </div>
  );
}

export default App;
