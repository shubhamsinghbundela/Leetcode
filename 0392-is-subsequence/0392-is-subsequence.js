/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  
  if(s.length>t.length){
    return false;
  }
  else{
    let count=0;
    for(let i=0;i<t.length;i++){
      if(s[count]===t[i]){
        count++;
      }
    }
    if(count===s.length){
      return true;
    }else{
      return false;
    }
  }
};