const { isAnagram } = require("../src/anagram");

test("Anagrama de duas strings", async () => {
    expect(isAnagram('amor', 'roma')).toBeTruthy();
});
