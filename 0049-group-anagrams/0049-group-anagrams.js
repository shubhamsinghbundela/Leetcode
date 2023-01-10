/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map={}
    for(let i=0;i<strs.length;i++){
      let strs1=strs[i].split('').sort().join('')
      if(!map[strs1]){
        map[strs1]=[]
      }
      map[strs1].push(strs[i])
      
      
    }
  return Object.values(map);
  
    
};