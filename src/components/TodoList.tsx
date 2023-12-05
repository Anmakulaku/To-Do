import React from 'react'
import './todoList.css'
import {Todo} from '../interface'
import ToDoItem from './ToDoItem';
import { StrictModeDroppable as Droppable } from '../helpers/StrictModeDroppable';

interface TDListProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    UrgentTodos: Todo[];
    setUrgentTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<TDListProps> = ({todos, setTodos, UrgentTodos, setUrgentTodos}) => {
    return (
        <div className='todoList'>
            <div className="todoList__container">
                <div className="todoList__content">
                    <div className='todoList__title'>
                        <h2 className='todoList__todosTitle'>Tasks to do:</h2>
                    </div>
                    <Droppable droppableId='Tasks'>
                        {(provided, snapshot) => (
                            <div className={`todoList__content todoList__content--tasks ${snapshot.isDraggingOver ? 'dragactive' : ''}`} 
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            >
                                {
                                    todos.map((todo, index) => (
                                    <ToDoItem index={index} todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </div>
                <div className="todoList__content">
                    <div className='todoList__title'>
                        <h2 className='todoList__urgentTitle'>Do it right now!</h2>
                    </div>
                    <Droppable droppableId="TodosUrgent">
                        {(provided, snapshot) => (
                            <div className={`todoList__content todoList__content--urgent ${snapshot.isDraggingOver ? 'dragurgent' : 'remove'}`} 
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            >
                                {
                                    UrgentTodos.map((todo, index) => (
                                    <ToDoItem index={index} todo={todo} key={todo.id} todos={UrgentTodos} setTodos={setUrgentTodos} />
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                        
                    </Droppable>
                </div>
            </div>
        </div>
    )
}

export default TodoList
