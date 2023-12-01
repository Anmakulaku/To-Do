import React, { useState} from 'react';
import './App.css';
import Header from './components/Header';
import InputField from './components/InputField';
import {Todo} from './interface';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo) {
      setTodos([...todos, {id:Date.now(), todo, isDone: false}]);
      setTodo("");
    }
  };
  console.log(todos);

  return (
    <div className="App">
      <div className='App__content section__padding'>
        <Header />
        <InputField  todo={todo} setTodo={setTodo} addTodo={addTodo} />
        <TodoList todos={todos} setTodos={setTodos}/>
      </div>
    </div>
  );
}

export default App;
