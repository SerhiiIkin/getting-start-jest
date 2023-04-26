import axios from "axios";

export function sum(a: number, b: number) {
    return a + b;
}

export function arrayClone(arr) {
    return [...arr];
}

export function compileAndroidCode() {
    throw new Error("you are using the wrong JDK!");
}

export async function getData() {
    return await axios
        .get("https://jsonplaceholder.typicode.com/todos/1")
        .then((res) => res.data);
}

export function reverseString(str: string) {
    return str.split("").reverse().join("");
}

export function showUserName(userId: number) {
    interface IUser {
        id: number;
        name: string;
    }

    const USERS: IUser[] = [
        { id: 1, name: "John" },
        { id: 2, name: "Jane" },
        { id: 3, name: "Joe" },
    ];

    function findUserByUserId(id: number) {
        return USERS.find((user) => user.id === id);
    }

    return findUserByUserId(userId).name;
}
