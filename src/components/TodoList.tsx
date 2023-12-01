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
            <div className="todoList__container">
                <div className='todoList__content todoList__todos'>
                    <div className='todoList__title'>
                        <h2 className='todoList__todosTitle'>Tasks to do:</h2>
                    </div>
                    {
                        todos.map((todo: Todo) => (
                        <ToDoItem todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
                    ))}
                </div>
                <div className='todoList__content todoList__emergency'>
                    <div className='todoList__title'>
                            <h2 className='todoList__emergencyTitle'>Do it right now!</h2>
                    </div>
                    {
                        todos.map((todo: Todo) => (
                        <ToDoItem todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TodoList