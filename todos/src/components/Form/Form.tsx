import {  FormEvent  } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { ITodo } from "../../modules/modules";
import { sendData } from "../../requests/requests";
import { useTodoStore } from "../../store/useTodoStore";
import useInput from "../../hooks/useInput";

function Form() {
    const title = useInput();
    const description = useInput();

    const { setTodo, setError, setIsLoading } = useTodoStore();

    

    async function submitHandler(e: FormEvent) {
        e.preventDefault();
        const newTodo: ITodo = {
            title:title.value,
            description: description.value,
            isDone: false,
        };

        const { data, error } = await sendData(newTodo);

        if (data) {
            setTodo(data.newTodo!);
            setError(error);
            setIsLoading(false);
        }
        title.clear();
        description.clear()
    }

    return (
        <form onSubmit={submitHandler}>
            <Input
                value={title.value}
                onChange={title.onChange}
                type="text"
                placeholder="write title"
                className="mr-2"
            />
            <Input
                value={description.value}
                onChange={description.onChange}
                type="text"
                placeholder="write todo"
                className="mr-2"
            />

            <Button
                type="submit"
                text="Add todo"
                className="bg-blue-400"
            />
        </form>
    );
}

export default Form;
