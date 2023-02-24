/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let arr={};
  for(let i=0;i<strs.length;i++){
    let strs1=strs[i].split('').sort().join('');
    arr[strs1]?arr[strs1].push(strs[i]):arr[strs1]=[strs[i]]
  }
   return Object.values(arr);
  
  
};
