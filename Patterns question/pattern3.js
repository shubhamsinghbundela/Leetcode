/*
 * * * * * *
 * * * * *
 * * * *
 * * *
 * *
 *
 */

function pattern4(n) {
  let string = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      string += '*';
    }
    string += '\n';
  }
  console.log(string);
}
pattern4(5);
