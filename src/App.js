import TodoInput from "./components/TodoInput";

import './styles/main.scss';

function App() {
    return (
        <main className="App">
            <h1
                className="header"
            >
                TODOS
            </h1>
            <TodoInput/>
        </main>
    );
}

export default App;
