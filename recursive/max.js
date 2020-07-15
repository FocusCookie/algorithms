function max(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    if (arr.length === 1) {
      return arr[0];
    } else {
      arr[0] < arr[arr.length - 1] ? arr.shift() : arr.pop();
      return max(arr);
    }
  }
}

const arr = [1, 2, 11, 99, 4, 123];
console.log(max(arr));
