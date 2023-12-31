/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let a=emails.map(e=>{
      const[local,domain]=e.split('@');
      // console.log(local)
      // console.log(domain)
      let b=local.split('+').shift().split('.').join('')+'@'+domain;
      return b
  })
    return new Set(a).size
};