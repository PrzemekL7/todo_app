import {useState} from "react";

import {v4 as idGenerator} from "uuid";

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
        if (todo !== "") {
            setValues([...values, {id: idGenerator(), task: todo, completed: false}]);
            setTodo("")
        }
    }

    function handleOnClear() {
        const newTodos = values.filter(todo => todo.completed === false)
        setValues([...newTodos])
    }

    return (
        <div className="App">
            <input
                type="text"
                placeholder="Add todo"
                className="search__input"
                value={todo}
                onChange={handleOnChange}
                onKeyUp={e => e.key === 'Enter' && handleNewTodo(e)}
            />
            <button
                className="search__button"
                onClick={handleNewTodo}
            >
                Do!
            </button>
            <TodoList
                todoList={values} setValues={setValues}
            />
            <button
                onClick={handleOnClear}
            >
                Clear completed ❌
            </button>
        </div>
    );
}

export default App;
