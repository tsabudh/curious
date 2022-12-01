const process = require("process");

function getPascalTriangle(rows) {
  var arr = [];

  // This is done because we need extra lines as placeholder values : row[j-1] for j=0 does not exists
  rows = rows + 2;
  cols = rows;

  // Creates all lines:
  for (var i = 0; i < rows; i++) {
    // Creates an empty line
    arr.push([]);

    // Adds cols to the empty line:
    arr[i].push(new Array(cols));

    for (var j = 0; j < cols; j++) {
      // Initializes:
      arr[i][j] = 0;
    }
  }
  //   arr[1][1] = 1;
  arr[1][0] = 1;
  for (let j = 1; j < rows; j++) {
    //For triangular shape
    let spacer = j;
    while (spacer < rows) {
      process.stdout.write(`   `);
      spacer++;
    }

    //To print out the pattern
    for (let k = 1; k < j; k++) {
      //row[y]col[x] = row[y-1]col[x] + row[y-1]col[x-1]
      arr[j][k] = arr[j - 1][k] + arr[j - 1][k - 1];
      process.stdout.write(`${arr[j][k]}    `);
    }
    process.stdout.write(`\n`);
  }
  //   return arr;
}

getPascalTriangle(6, 6);

//             1
//           1   1
//         1   2   1
//     1     3   3    1
//   1    4   6    4    1
// 1   5    10  10    5   1
