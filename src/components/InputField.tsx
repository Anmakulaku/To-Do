import React, {useRef} from 'react'
import './inputfield.css'

interface InputFieldProps {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    addTodo:(e: React.FormEvent)=>void;
}

const InputField: React.FC <InputFieldProps> = ({todo, setTodo, addTodo}) => {
    const inputRef = useRef<HTMLInputElement>(null);


    return (
        <form className='input' onSubmit={(e)=> {
            e.preventDefault();
            addTodo(e)
            inputRef.current?.blur()
        }}>
            <input 
            ref={inputRef}
            type='input'
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className='input__box' placeholder='Add new task' />
            <button type='submit' className='input__button'>GO</button>
        </form>
    )
};

export default InputField