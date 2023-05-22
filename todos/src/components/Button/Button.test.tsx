import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
    it("should render the button", async () => {
        const onClick = vi.fn();
        render(
            <Button type="submit" text="Add todo" className="bg-blue-400" onClick={onClick} />
        );
        const button = screen.getByRole("button", {
            name: /Add todo/i,
        });
        expect(button).toHaveClass("bg-blue-400");
        expect(button).toHaveAttribute("type", "submit");
        fireEvent.click(button)
        expect(onClick).toBeCalledTimes(1);
    });
});
