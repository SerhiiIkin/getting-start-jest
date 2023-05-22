
interface ButtonProps {
    type: "button" | "reset" | "submit";
    text: string;
    className?: string;
    onClick?: () => void
}

function Button(props: ButtonProps) {
    return <button {...props} className={`rounded p-1 ${props.className}`} > {props.text} </button>;
}

export default Button;
