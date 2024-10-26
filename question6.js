// 4 Skriv en funktion som tar en array med strängar som input och
// returnerar en array med bara de strängar som är minst 4 tecken långa.
const strings = ["hello", "hallo", "bonjour", "hej"];

function filterStrings(arr) {
  let newArray = [];
  arr.forEach((string) => {
    if (string.length >= 4) newArray.push(string);
  });
  return newArray;
}

console.log(filterStrings(strings));
