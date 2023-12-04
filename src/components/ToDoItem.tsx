import React, {useEffect, useState} from 'react'
import { Todo } from '../interface';
import { AiOutlineEdit, AiOutlineDelete,  } from 'react-icons/ai'
import { MdOutlineDownloadDone  } from 'react-icons/md'
import './todoItem.css'
import { Draggable } from 'react-beautiful-dnd';

type TDUrgentProps = {
    index: number;
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ToDoItem: React.FC<TDUrgentProps> = ({index, todo, todos, setTodos}) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo)=> 
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            ))
    };

    const handleDelete = (id: number) => {
        setTodos(
            todos.filter((todo)=> 
            todo.id !== id
            ))
    };

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(todos.map((todo) => (
            todo.id === id ? {...todo, todo: editTodo} : todo
        )));
        setEdit(false);
    }

    const editRef = React.useRef<HTMLInputElement>(null);

    useEffect(() => {
        editRef.current?.focus();
    }, [edit]);

    return (
        <Draggable draggableId={todo.id.toString()} index={index}>
            {(provided) => (
                <form className='toDoItem' onSubmit={(e) => handleEdit(e,todo.id)}
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                >
                <div className="toDoItem__content">
                    {edit ? (
                        <input 
                        ref={editRef}
                        value={editTodo} onChange={(e) => setEditTodo(e.target.value)} className='toDoItem__input'/>
                    ): todo.isDone ? (
                        <s className="toDoItem__text">{todo.todo}</s>
                    ) : (
                        <span className="toDoItem__text">{todo.todo}</span>
                    )}
                    
                    <div className='toDoItem__icons'>
                        <div className="toDoItem__icon" 
                            onClick={() => {
                                if(!edit && !todo.isDone) {
                                    setEdit(!edit);
                                } 
                            }}
                        >
                            <AiOutlineEdit />
                        </div>
                        <div className="toDoItem__icon" onClick={()=>handleDelete(todo.id)}>
                            <AiOutlineDelete />
                        </div>
                        <div className="toDoItem__icon" onClick={()=>handleDone(todo.id)}>
                            <MdOutlineDownloadDone />
                        </div>
                    </div>
                </div>
            </form>)
            }
        
        </Draggable>
    );
}

export default ToDoItem