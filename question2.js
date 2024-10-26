// 2.	Skriv klart funktionen findLargest.
// findLargest ska returnera det största numret i arrayen som skickas till den:
function findLargest(numbers) {
  let highestNumber = numbers[0];
  for (n of numbers) {
    if (n > highestNumber) {
      highestNumber = n;
    }
  }
  return highestNumber;
}

console.log(findLargest([1, 2, 3, 4, 5])); // ska logga 5
console.log(findLargest([-1, -2, -3, -4, -5])); // ska logga -1

// 2.1	Skriv klart funktionen findSmallest.
// findSmallest ska returnera det minsta talet i arrayen.
function findSmallest(numbers) {
  let smallestNumber = numbers[0];
  for (n of numbers) {
    if (n < smallestNumber) {
      smallestNumber = n;
    }
  }
  return smallestNumber;
}

console.log(findSmallest([1, 2, 3, 4, 5])); // ska logga 1
console.log(findSmallest([-1, -2, -3, -4, -5])); // ska logga -5
