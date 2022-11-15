import {useState} from "react";

import {v4 as idGenarator} from "uuid";

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
        setValues([...values, { id: idGenarator(), task: todo, completed: false }]);
        setTodo("")
    }

    return (
        <div className="App">
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
            <button>Clear completed</button>
        </div>
    );
}

export default App;
