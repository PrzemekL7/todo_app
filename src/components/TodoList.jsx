function TodoList({todoList}) {
    return (
        <>
            {todoList.map(todo => (
                <div>{todo}</div>
            ))}
        </>
    );
}

export default TodoList;