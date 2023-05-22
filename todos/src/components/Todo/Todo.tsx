import { useMemo, useState } from "react";
import { ITodo } from "../../modules/modules";
import Button from "../Button/Button";
import { useTodoStore } from "../../store/useTodoStore";
import { removeData } from "../../requests/requests";

function Todo({ todo }: { todo: ITodo }) {
    const { removeTodo } = useTodoStore();

    const [isDone, setIsDone] = useState(todo?.isDone);

    const labelName = useMemo(() => {
        return `isDone${todo?._id}`;
    }, []);

    function onDeleteClick(id: number) {
        removeTodo(id);
        removeData(id);
    }

    return (
        <>
            <div data-testid="todo"  className="flex gap-2">
                <label htmlFor={labelName}>
                    <input
                        type="checkbox"
                        id={labelName}
                        checked={isDone}
                        onChange={() => setIsDone((prev) => !prev)}
                    />
                </label>
                <h2> {todo?.title} </h2>
                <p> {todo?.description} </p>
                <Button
                    type="button"
                    text="X"
                    className="text-red-400 bg-gray-500 p-1 rounded"
                    onClick={() => onDeleteClick(todo?._id!)}
                />
            </div>
        </>
    );
}

export default Todo;
