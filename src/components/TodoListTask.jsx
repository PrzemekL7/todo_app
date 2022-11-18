import {useEffect, useRef, useState} from "react";

function TodoListTask({todoTask: {task, id, edit}, setValues, todoList}) {
    const [todoValue, setTodoValue] = useState(() => task.toString());
    const [focus, setFocus] = useState(false);
    const inputElement = useRef();

    useEffect(() => {
        handleOnFocus();
    }, [focus])

    function handleOnComplete() {
        const newTodos = [...todoList]
        newTodos.map(todo => todo.id === id ? todo.completed = !todo.completed : todo)
        setValues([...newTodos])
    }

    function handleOnChange(e) {
        setTodoValue(e.target.value)
    }

    function handleEditToggle() {
        const newTodos = [...todoList]
        newTodos.map(todo => todo.id === id ? todo.edit = true : todo)
        setValues([...newTodos])
        setFocus(prevState => !prevState)
    }

    function handleEditedTodo() {
        if (edit === true) {
            const newTodos = [...todoList]
            newTodos.map(todo => todo.id === id ? (todo.task = todoValue) && (todo.edit = false) : (todo))
            setValues([...newTodos])
        }
    }

    function handleOnFocus() {
        if (focus === true) {
            inputElement.current.focus()
        }
    }

    return (
        <>
            {
                edit === false
                ?
                (
                    <div className="list-item">
                        <li
                            className="list-item__element"
                        >
                            {task}
                        </li>
                        <button
                            title="edit"
                            className="list-item__edit-button"
                            onClick={handleEditToggle}
                        >
                            📑
                        </button>
                        <button
                            title="complete"
                            className="list-item__completed-button"
                            onClick={handleOnComplete}
                        >
                            ✔
                        </button>
                    </div>
                )
                :
                (
                    <div className="list-item">
                        <input
                            type="text"
                            className="list-item__input input"
                            value={todoValue}
                            onChange={handleOnChange}
                            onKeyUp={e => e.key === 'Enter' && handleEditedTodo(e)}
                            ref={inputElement}
                        />
                        <button
                            className="search__button"
                            onClick={handleEditedTodo}
                        >
                            Confirm
                        </button>
                    </div>
                )
            }
        </>

    );
}

export default TodoListTask;