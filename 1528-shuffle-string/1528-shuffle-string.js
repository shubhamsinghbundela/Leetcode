/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let s1=[];
    for(let i=0;i<s.length;i++){
        s1[indices[i]]=s[i];
    }
    return s1.join('')
};