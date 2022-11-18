import './App.css';
import TodoInput from "./components/TodoInput";

function App() {
    return (
        <div className="container">
            <h1
                className="header container__header"
            >
                TODOS
            </h1>
            <TodoInput/>
        </div>
    );
}

export default App;
