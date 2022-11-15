import {useState} from "react";

import TodoList from "./components/TodoList";
import {useLocalStorage} from "./hooks/useLocalStorage";

import './App.css';

function App() {
    const [todo, setTodo] = useState("");
    const [values, setValues] = useLocalStorage("todo", [])

    function handleOnChange(e) {
        setTodo(e.target.value)
    }

    function handleNewTodo() {
        setValues([...values, todo]);
        setTodo("")
    }

    return (
        <div className="search">
            <input
                type="text"
                placeholder="Add todo"
                className="search__input"
                value={todo}
                onChange={handleOnChange}
            />
            <button
                className="search__button"
                onClick={handleNewTodo}
            >
                Do!
            </button>
            <TodoList
                todoList={values}
            />
        </div>
    );
}

export default App;
