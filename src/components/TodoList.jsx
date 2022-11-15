import TodoListTask from "./TodoListTask";

function TodoList({todoList}) {
    return (
        <ul className="task-list">
            {todoList.length > 0 ? todoList.map(todo => (
                <TodoListTask key={todo.id} todoTask={todo}/>
            )) : <div>no tasks</div>}
        </ul>
    );
}

export default TodoList;