import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input", () => {
    it("should render the input with standard classes and correct onChange fn", async () => {
        const onChange = vi.fn();
        render(
            <Input
                type="text"
                placeholder="write title"
                value=""
                onChange={onChange}
            />
        );
        const input = screen.getByPlaceholderText("write title");

        expect(input).toHaveClass("p-1 rounded border");
        expect(input).toBeInTheDocument();
        expect(input).not.toBeDisabled();
        expect(input).not.toHaveValue();
        expect(input).toHaveAttribute("type", "text")
        await userEvent.type(screen.getByRole("textbox"), "text");

        expect(onChange).toHaveBeenCalledTimes(4);
    });

    it("should render the input with standard classes and correct onChange fn", async () => {
        const onChange = vi.fn();
        render(
            <Input
                type="text"
                placeholder="write todo"
                value=""
                onChange={onChange}
            />
        );
        const input = screen.getByPlaceholderText("write todo");

        expect(input).toHaveClass("p-1 rounded border");
        expect(input).toBeInTheDocument();
        expect(input).not.toBeDisabled();
        expect(input).not.toHaveValue();
        expect(input).toHaveAttribute("type", "text")
        await userEvent.type(screen.getByRole("textbox"), "text");

        expect(onChange).toHaveBeenCalledTimes(4);
    });
});
