/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
  let s1=s.split(' ');
  // console.log(s1)
  let s2=[];
  for(let i=0;i<s1.length;i++){
    s2[Number(s1[i].charAt(s1[i].length-1))-1]=s1[i].replace(s1[i].charAt(s1[i].length-1),'')
  }
  // console.log(s1[0].charAt(s1[0].length-1))
  return s2.join(' ')
};