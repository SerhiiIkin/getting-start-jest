import { environments } from "./environments";

it("should have environment URL", () => {
    expect(environments.URL).toContain("http")
});
