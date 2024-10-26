// 3. Skriv klart funktionen removeVowels som tar
// bort vokaler, alltså bokstäverna: aouåeiyäö.

function removeVowels(word) {
  const vowels = ["a", "o", "u", "å", "e", "i", "y", "ä", "ö"];
  let string = "";
  for (char of word) {
    if (vowels.find((vowel) => vowel == char) == undefined) {
      string += char;
    }
  }
  return string;
}

console.log(removeVowels("hej")); // Ska logga "hj"
console.log(removeVowels("hallå")); // Ska logga hll
