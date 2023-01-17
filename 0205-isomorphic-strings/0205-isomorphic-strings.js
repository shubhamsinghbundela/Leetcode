/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if(s.length!=t.length){
    return false;
  }
  if(s===t){
    return true;
  }
  let obj1={}
  let obj2={}
  for(let i=0;i<s.length;i++){
    if(!obj1[s[i]]){
      obj1[s[i]]=t[i]
    }
    if(!obj2[t[i]]){
      obj2[t[i]]=s[i]
    }
    if(obj1[s[i]]!==t[i] || obj2[t[i]]!==s[i]){
      return false;
    }
  }
  return true;
}