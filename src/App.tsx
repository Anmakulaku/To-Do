import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import InputField from './components/InputField';
import { Todo } from './interface';
import TodoList from './components/TodoList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [UrgentTodos, setUrgentTodos] = useState<Todo[]>([]);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo) {
      setTodos([...todos, {id:Date.now(), todo, isDone: false}]);
      setTodo("");
    }
  };

  const onDragEnd = (result: DropResult) => {
    const {destination, source} = result;
    
    if(!destination) {
      return;
    }
    if(destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    let add, 
        active = todos, 
        urgent = UrgentTodos;
    //SOURCE
    if(source.droppableId === 'Tasks') {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = urgent[source.index];
      urgent.splice(source.index, 1);
    }
    //DESTINATION
    if(destination.droppableId === 'Tasks') {
      active.splice(destination.index, 0, add);
    } else {
      urgent.splice(destination.index, 0, add);
    }

    setUrgentTodos(urgent);
    setTodos(active);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <div className="App">
      <div className='App__content section__padding'>
        <Header />
        <InputField  todo={todo} setTodo={setTodo} addTodo={addTodo} />
        <TodoList todos={todos} setTodos={setTodos} UrgentTodos={UrgentTodos} setUrgentTodos={setUrgentTodos}/>
      </div>
    </div>
    </DragDropContext>
  );
}

export default App;
