import {useEffect, useRef, useState} from "react";
import {useLocalStorage} from "../hooks/useLocalStorage";
import {v4 as idGenerator} from "uuid";
import TodoList from "./TodoList";

function TodoInput() {
    const [todo, setTodo] = useState("");
    const [values, setValues] = useLocalStorage("todo", []);
    const inputElement = useRef();

    useEffect(() => {
        inputElement.current.focus();
    }, [])

    function handleOnChange(e) {
        setTodo(e.target.value)
    }

    function handleNewTodo() {
        if (todo !== "") {
            setValues([...values, {id: idGenerator(), task: todo, completed: false, edit: false}]);
            setTodo("")
        }
    }

    function handleOnClear() {
        const newTodos = values.filter(todo => todo.completed === false)
        setValues([...newTodos])
    }

    return (
        <div
            className="input-container">
            <div
                className="input-container__wrapper"
            >
                <input
                    type="text"
                    placeholder="Add todo"
                    className="input-container__input input"
                    value={todo}
                    onChange={handleOnChange}
                    onKeyUp={e => e.key === 'Enter' && handleNewTodo(e)}
                    ref={inputElement}
                />
                <button
                    className="input-container__btn btn"
                    onClick={handleNewTodo}
                >
                    Do!
                </button>
            </div>
            {
                values.length > 0
                    ?
                    <button
                        className="input-container__btn btn sticky"
                        onClick={handleOnClear}
                    >
                        Clear completed ❌
                    </button>
                    :
                    null
            }
            <TodoList
                todoList={values}
                setValues={setValues}
            />

        </div>
    );
}

export default TodoInput;