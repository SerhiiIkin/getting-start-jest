import {   render, screen } from "@testing-library/react";
import Todo from "./Todo";
import { ITodo } from "../../modules/modules";
import userEvent from "@testing-library/user-event";

describe("Todo", () => {
    const todo: ITodo = {
        title: "new",
        description: "description",
        isDone: false,
    };
    it("should show todo", async () => {
        render(<Todo todo={todo} />);
        const todoElement = await screen.findByTestId("todo");
        expect(todoElement).toBeInTheDocument();
    });

   

    it("should show title ", async () => {
        render(<Todo todo={todo} />);
        const title = await screen.findByRole("heading", {
            name: /new/i,
        });
        expect(title).toBeInTheDocument();
    });

    it("should show description ", async () => {
        render(<Todo todo={todo} />);
        const description = await screen.findByText(/description/i);
        expect(description).toBeInTheDocument();
    });

    it("input ", async () => {
        render(<Todo todo={todo} />);
        const input = await screen.findByRole("checkbox");
        expect(input).toBeInTheDocument();
        expect(input).not.toBeChecked();
        await userEvent.click(screen.getByRole("checkbox"));
        expect(input).toBeChecked();
    });

});
