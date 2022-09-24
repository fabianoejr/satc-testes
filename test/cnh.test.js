const { obterCnh } = require("../src/cnh");

test("Idade maior para CNH", async () => {
    expect(obterCnh(21)).toBeTruthy();
});

test("Idade menor para CNH", async () => {
    expect(obterCnh(15)).toBeTruthy();
});
