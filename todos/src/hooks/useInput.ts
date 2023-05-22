import { ChangeEvent, useState } from "react";

export default function () {
    const [value, setValue] = useState("");

    function onChange(e: ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);
    }

    function clear() {
        setValue("");
    }

    return { value, onChange, clear };
}
