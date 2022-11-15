function TodoListTask({todoTask: {task, completed}}) {
    return (
        <div className="list-item">
            <li className="list-item__element">{task}</li>
            <button className="list-item__edit-button">Edit</button>
        </div>
    );
}

export default TodoListTask;