/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let address1=address.split('').map(e=>e=="."?"[.]":e).join('');
    return address1;
};
//P:
