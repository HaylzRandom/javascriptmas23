const people = ['Alice', 'Bob', 'Carly', 'Dan', 'Ed', 'Ferdinand', 'Ginny'];

function generateSecretSantaPairs(arr) {
  // Your code here

  // Shuffle original array
  const shuffledPeople = arr.slice();

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledPeople[i], shuffledPeople[j]] = [
      shuffledPeople[j],
      shuffledPeople[i],
    ];
  }

  // Create object with random pairs
  const secretPairs = {};

  for (let i = 0; i < shuffledPeople.length; i++) {
    const giver = shuffledPeople[i];
    const receiver = shuffledPeople[(i + 1) % shuffledPeople.length];
    secretPairs[giver] = receiver;
  }

  return secretPairs;
}

console.log(generateSecretSantaPairs(people));

/**
Example output:
{
    Alice: "Dan",
    Bob: "Ferdinand",
    Carly: "Ed",
    Dan: "Alice",
    Ed: "Ginny",
    Ferdinand: "Bob",
    Ginny: "Carly"
}
 */
