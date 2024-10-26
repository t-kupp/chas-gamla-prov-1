// 3. Samma ord?
// Skriv klart funktionen som kollar om två ord är likadana
// oberoende av stor och liten bokstav.
function compareWords(word1, word2) {
  return word1.toLowerCase() == word2.toLowerCase();
}

console.log(compareWords("hej", "HEJ")); // Ska logga true
console.log(compareWords("hej", "nej")); // Ska logga false
