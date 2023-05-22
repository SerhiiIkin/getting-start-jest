export interface ITodo {
    _id?: number;
    title: string;
    description: string;
    isDone: boolean;
}

export interface ErrorResponse {
    status: number;
    message: string;
}

export interface IFetchData {
    todos: ITodo[];
    error: ErrorResponse | null;
    isLoading: boolean;
}

export interface ISendData {
    data: {
        message: string;
        newTodo: ITodo | null;
    };

    error: ErrorResponse | null;
    isLoading: boolean;
}

export interface IEnvironments {
    URL: string;
}