import React from 'react'
import { Todo } from '../interface';
import { AiOutlineEdit, AiOutlineDelete,  } from 'react-icons/ai'
import { MdOutlineDownloadDone  } from 'react-icons/md'
import './todoItem.css'

type TDIProps = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ToDoItem: React.FC<TDIProps> = ({todo, todos, setTodos}) => {
    return <form className='toDoItem'>
        <div className="toDoItem__content">
            <span className="toDoItem__text">
                {todo.todo}
            </span>
            <div className='toDoItem__icons'>
                <div className="toDoItem__icon">
                    <AiOutlineEdit />
                </div>
                <div className="toDoItem__icon">
                    <AiOutlineDelete />
                </div>
                <div className="toDoItem__icon">
                    <MdOutlineDownloadDone />
                </div>
            </div>
        </div>
    </form>
}

export default ToDoItem