function count(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    arr.pop();
    return 1 + count(arr);
  }
}

const arr = [1, 2, 3, 4, 5];
console.log(count(arr));
