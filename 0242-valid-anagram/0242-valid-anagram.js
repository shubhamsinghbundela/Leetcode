/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let s1=s.toLowerCase().split('').sort()
  let t1=t.toLowerCase().split('').sort()
  // console.log(s1)
  // console.log(t1)
  return s1.join('')===t1.join('')
    
};