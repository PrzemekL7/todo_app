import {useEffect, useRef, useState} from "react";

function TodoListTask({todoTask: {task, id, edit, completed}, setValues, todoList}) {
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
                        <h3
                            className={!completed ? "list-item__h2" : "list-item__h2--completed"}
                        >
                            {task}
                        </h3>
                        <button
                            title="edit"
                            className="list-item__btn btn"
                            onClick={handleEditToggle}
                        >
                            📑
                        </button>
                        <button
                            title="complete"
                            className="list-item__btn btn"
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
                            className="input-container__input list-item__input input"
                            value={todoValue}
                            onChange={handleOnChange}
                            onKeyUp={e => e.key === 'Enter' && handleEditedTodo(e)}
                            ref={inputElement}
                        />
                        <button
                            className="list-item__button button"
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