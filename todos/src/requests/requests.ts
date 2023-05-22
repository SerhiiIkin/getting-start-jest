import { environments } from "../enviroments/environments";
import {
    ITodo,
    IFetchData,
    ErrorResponse,
    ISendData,
} from "../modules/modules";

export async function fetchData(): Promise<IFetchData> {
    try {
        const response = await fetch(`${environments.URL}api/todos`);
        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }
        const data: ITodo[] = await response.json();
        return { todos: data, isLoading: false, error: null };
    } catch (error: ErrorResponse | any) {
        return {
            todos: [],
            isLoading: false,
            error: { status: 500, message: error.message },
        };
    }
}

export async function sendData(todo: ITodo): Promise<ISendData> {
    try {
        const response = await fetch(`${environments.URL}api/todo`, {
            method: "POST",
            body: JSON.stringify(todo),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }
        const data: { newTodo: ITodo | null; message: string } =
            await response.json();

        return {
            data: {
                newTodo: data.newTodo,
                message: data.message,
            },
            isLoading: false,
            error: null,
        };
    } catch (error: ErrorResponse | any) {
        return {
            data: {
                newTodo: null,
                message: "",
            },
            isLoading: false,
            error: { status: 500, message: error.message },
        };
    }
}

export async function removeData(id: number) {
    try {
        const response = await fetch(`${environments.URL}api/todo/${id}`, {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }
        const data: { message: string } = await response.json();
        return { message: data.message, isLoading: false, error: null };
    } catch (error: ErrorResponse | any) {
        return {
            message: null,
            isLoading: false,
            error: { status: 500, message: error.message },
        };
    }
}
