import { ChangeEvent } from "react";

interface InputProps {
    type: string,
    className?: string  ,
    placeholder: string
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function Input(props: InputProps) {
    return <input {...props} className={`p-1 rounded border ${props.className}`} />;
}

export default Input;
