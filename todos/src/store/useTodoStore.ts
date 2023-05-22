import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { ErrorResponse, ITodo } from "../modules/modules";

interface TodoState {
    todos: ITodo[];
    todo: ITodo | null;
    isLoading: boolean;
    error: ErrorResponse | null;
    setError(err: ErrorResponse | null): void;
    setIsLoading: (status: boolean) => void;
    setTodos: (todos: ITodo[]) => void;
    setTodo: (todo: ITodo) => void;
    removeTodo: (id:number) => void
}

export const useTodoStore = create<TodoState>()(
    devtools(
        persist(
            (set) => ({
                todos: [],
                todo: {
                    title: "",
                    description: "",
                    isDone: false,
                },
                isLoading: true,
                error: null,
                setError: (serverError: ErrorResponse) =>
                    set(() => ({ error: { ...serverError } })),
                setIsLoading: (status: boolean) =>
                    set((state) => ({ isLoading: status })),
                setTodos: (todos: ITodo[]) =>
                    set(() => ({ todos: [...todos] })),
                removeTodo: (id: number) =>
                    set((state) => ({
                        todos: [...state.todos.filter((t) => t._id != id)],
                    })),
                setTodo: (todo: ITodo) =>
                    set((state) => ({ todos: [...state.todos, todo] })),
            }),
            {
                name: "todos",
            }
        )
    )
);
