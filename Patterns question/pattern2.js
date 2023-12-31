/*
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
6 6 6 6 6 6
*/

function pattern4(n) {
  let string = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i + 1; j++) {
      string += i + 1;
    }
    string += '\n';
  }
  console.log(string);
}
pattern4(5);
