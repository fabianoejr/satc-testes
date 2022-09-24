const { somar, diminuir, multiplicar, dividir } = require("../src/calculator");

test("Somar dois valores válidos", async () => {
  expect(somar(5, 10)).toStrictEqual(15);
});

test("Diminuir dois valores válidos", async () => {
  expect(diminuir(5, 10)).toStrictEqual(-5);
});

test("multiplicar dois valores válidos", async () => {
  expect(multiplicar(5, 10)).toStrictEqual(50);
});

test("Dividir dois valores válidos", async () => {
  expect(dividir(5, 10)).toStrictEqual(0.5);
});
