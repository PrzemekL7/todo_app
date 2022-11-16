import TodoListTask from "./TodoListTask";

function TodoList({todoList, setValues}) {
    return (
        <ul className="task-list">
            {todoList.length > 0 ? todoList.map(todo => (
                <TodoListTask key={todo.id} todoTask={todo} setValues={setValues} todoList={todoList}/>
            )) : <div>no tasks</div>}
        </ul>
    );
}

export default TodoList;