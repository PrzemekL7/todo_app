
function TodoListTask({todoTask: {task, id}, setValues, todoList}) {
    function handleOnComplete() {
        const newTodos = [...todoList]
        newTodos.map(todo => todo.id === id ? todo.completed = !todo.completed : todo)
        setValues([...newTodos])
    }

    return (
        <div className="list-item">
            <li
                className="list-item__element"
            >
                {task}
            </li>
            <button
                title="edit"
                className="list-item__edit-button"
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
    );
}

export default TodoListTask;