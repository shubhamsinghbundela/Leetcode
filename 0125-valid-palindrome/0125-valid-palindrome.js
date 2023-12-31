/**
 * @param {string} s
 * @return {boolean}
 */
//1. convert uppercase into lowercase(done)
//2. removing all non-alphanumeric characters
//1. convert uppercase into lowercase(done)
//2. removing all non-alphanumeric characters
var isPalindrome = function(s) {
  if(s.length<1){
    return true;
  }
  let[left,right]=[0,s.length-1];
  // console.log(left)
  let leftChar,rightChar;
  while(left<=right){
     leftChar=s[left];
     rightChar=s[right];
    if(!/[A-Za-z0-9]/.test(leftChar)){
      left++
    }else if(!/[A-Za-z0-9]/.test(rightChar)){
      right--
    }else {
            // compare letters
            if (leftChar.toLowerCase() != rightChar.toLowerCase()) {
                return false;
            }
            left++;
            right--;
        }
  }
  return true;
    
};
// console.log(isPalindrome("A man, a plan, a canal: Panama"))

