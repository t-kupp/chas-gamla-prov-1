// 4	Skriv klart funktionen sumArray
// sumArray returnerar summan av alla talen i arrayen som skickas till den:

function sumArray(numbers) {
  let sum = 0;
  for (n of numbers) {
    sum += n;
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5])); // ska logga 15
console.log(sumArray([-1, -2, -3, -4, -5])); // ska logga -15
