/*
1 2 3 4 5 6
1 2 3 4 5
1 2 3 4
1 2 3
1 2 
1
*/

function pattern4(n) {
  let string = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      string += j + 1;
    }
    string += '\n';
  }
  console.log(string);
}
pattern4(5);
