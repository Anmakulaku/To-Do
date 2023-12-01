export interface Todo{
    id: number;
    todo: string;
    isDone: boolean;
}

// type TodoAction = 
// | {type: 'add'; payload: string}
// | {type: 'delete'; payload: number}
// | {type: 'done'; payload: number}

// const TodoReducer = (state: Todo[], action: TodoAction) => {
//     switch (action.type) {
//         case"add":
//             return [
//                 ...state,
//                 { id: Date.now(), todo: action.payload, isDone: false}
//             ];
//         case "delete":
//             return state.filter((todo) => todo.id !== action.payload);
//         case "done":
//             return state.map((todo) => {
//                 todo.id === action.payload ? {...todo, isDone: !todo.isDone} : todo;
//             });
//         default:
//             return state;
//     }
// };

// import React, { useReducer } from 'react'

// const ReducerExample = () => {

// const [state, dispatch] = useReducer(TodoReducer, [])

//     return (
//         <div />>
//     )
// }