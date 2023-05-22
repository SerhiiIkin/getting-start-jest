import Todo from "./components/Todo/Todo";
import Form from "./components/Form/Form";
import { useEffect } from "react";
import { fetchData } from "./requests/requests";
import { useTodoStore } from "./store/useTodoStore";

function App() {
    const { setTodos, todos, error, isLoading, setIsLoading, setError } =
        useTodoStore();

    async function fetch() {
        const { todos, error } = await fetchData();

        setTodos(todos);
        setIsLoading(false);
        setError(error);
    }

    useEffect(() => {
        fetch();
    }, []);

    return (
        <div className="container mx-auto gap-2 flex flex-col items-center pt-2">
            <Form />

            <h1 className="text-center">Todo list</h1>

            {isLoading && <p>Loading...</p>}
            {error?.message && <p>{error.message}</p>}

            {!isLoading &&
                !error?.message &&
                todos.map((todo) => {
                    return <Todo key={todo?._id} todo={todo} />;
                })}
        </div>
    );
}

export default App;
