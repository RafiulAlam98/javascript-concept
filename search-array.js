var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var find = 10;

var isFound = false;

for (i = 0; i < arr.length; i++) {
  if (arr[i] == find) {
    console.log("data found at index", i);
    isFound = true;
    break;
  }
}

if (!isFound) {
  console.log("data not found");
}
