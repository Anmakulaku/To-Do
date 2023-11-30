import React from 'react'
import './todoList.css'
import {Todo} from '../interface'
import ToDoItem from './ToDoItem';

interface TDListProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<TDListProps> = ({todos, setTodos}) => {
    return (
        <div className='todoList'>
            <div className="todoList__content">
                {todos.map((todo: Todo) => (
                    <ToDoItem todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
                ))}
            </div>
        </div>
    )
}

export default TodoList