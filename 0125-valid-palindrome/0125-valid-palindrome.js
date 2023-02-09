/**
 * @param {string} s
 * @return {boolean}
 */
//1. convert uppercase into lowercase(done)
//2. removing all non-alphanumeric characters
var isPalindrome = function(s) {
  let s1=s.toLowerCase()
    // console.log(s1)
  var regexPattern = /[^A-Za-z0-9]/g;
  var ans = s1.replace(regexPattern, "");
  console.log(ans)
  let temp="";
  for(let i=ans.length-1;i>=0;i--){
    temp+=ans[i]
  }
  if(ans==temp){
    return true;
  }else{
    return false;
  }
    
    
};

