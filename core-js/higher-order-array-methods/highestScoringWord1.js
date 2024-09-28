function highestScoringWord(str) {
  const words = str.split(" ");

  // Map the array of words to an array of scores
  const scores = words.map((word) => {
    let score = 0;
    for (const letter of word) {
      score += letter.charCodeAt(0) - 96;
    }
    return score;
  });

  let highestScore = 0;
  let highestIndex = 0;

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > highestScore) {
      highestScore = scores[i];
      highestIndex = i;
    }
  }

  // Return the word with the highest score
  return words[highestIndex];
}

const result = highestScoringWord("Hello name is winston");
console.log(result);
