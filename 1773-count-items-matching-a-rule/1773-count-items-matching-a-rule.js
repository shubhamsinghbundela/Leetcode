/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
  const rules={
    'type':0,
    'color':1,
    'name':2
  }
  // let count=0
  // console.log(value)
   let match= items.map(e=>e).reduce((acc,cur)=>cur[rules[ruleKey]]===ruleValue?acc+1:acc,0)
  return match
};