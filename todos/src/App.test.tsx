import App from "./App";
import { render, screen } from "@testing-library/react";

describe("App ", () => {
    it("the title is visible", () => {
        render(<App />);
        const message = screen.getByText(/Todo list/i);
        expect(message).toBeInTheDocument();
    });
});
