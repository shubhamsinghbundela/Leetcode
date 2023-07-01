/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
  let names1 = new Map();
  for(let i=0;i<names.length;i++){
    names1.set(heights[i],names[i]);
  }
  let heights1 = heights.sort((a,b)=>b-a);
  for(let i=0;i<heights1.length;i++){
    names[i] = names1.get(heights[i])
  }
  // console.log(names)
  return names;

}