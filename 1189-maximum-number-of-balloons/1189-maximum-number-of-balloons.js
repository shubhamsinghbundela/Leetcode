/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
  const v={};
  let newText=new Set(text.split(''))
  console.log(newText)
  for(let char of text){
    if(!newText.has(char)){
      continue;
    }
    let count=((v[char]??0)+1)
    v[char]=count
  }
  console.log(v)
  
  let min=Math.min(v['b'],v['a'],Math.floor(v['l']/2),Math.floor(v['o']/2),v['n'])
  
  return min?min:0;
  
};