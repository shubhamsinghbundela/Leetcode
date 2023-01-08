/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function(s) {
  let s1=s.trim();
  let s2=s1.split(' ');
  return s2[s2.length-1].length
   
};