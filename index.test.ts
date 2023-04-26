import { arrayClone, compileAndroidCode, getData, reverseString, sum } from ".";

const init = () => {
    console.log("initial");
};
const close = () => {
    console.log("close");
};
// beforeEach(() => init());
// afterEach(() => close());
// beforeAll(() => init());
// afterAll(() => close());
function nameCheck() {
    console.log("Cheking name");
}

describe("Cheking names", () => {
    beforeEach(() => nameCheck());

    test("should called Jim", () => {
        const name = "Jim";
        expect(name).toBe("Jim");
    });

    test("should called Bob", () => {
        const name = "Bob";
        expect(name).toBe("Bob");
    });
});

test("should add 2 numbers", () => {
    expect(sum(1, 2)).toBe(3);
});

test("should equal another array", () => {
    expect(arrayClone([1, 2])).toEqual([1, 2]);
});

test("null", () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test("zero", () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

test("there is  'e' in my name", () => {
    expect("Serhii").toMatch(/e/i);
});

test("should containt milk", () => {
    const data = ["milk", "bread", "sugar"];
    expect(data).toContain("milk");
});

test("should get todo", async () => {
    const data = {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
    };

    const fetchData = await getData();

    expect(fetchData).toEqual(data);
});

test("should reverse string", () => {
    const result = "sba";
    expect(reverseString).toBeDefined();
    expect(reverseString("abs")).toBe(result);
});
