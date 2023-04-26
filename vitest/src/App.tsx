import "./App.css";
import { useCounter } from "./hooks/Counter/useCounter";

function App() {
    const { count, increment } = useCounter();

    return (
        <>
            <p>Hello</p>
            <button type="button" className="border-0" onClick={increment}>
                count is: {count}
            </button>
        </>
    );
}

export default App;
