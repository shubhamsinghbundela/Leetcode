/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
  let count=0;
  let str=word;
  while(sequence.includes(word)){
    // console.log(sequence.includes(word))
    count++;
    word+=str;
    // console.log(word)
  }
  return count;
};