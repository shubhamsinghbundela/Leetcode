/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let arr=new Set(sentence.split('')).size===26;
    return arr
};