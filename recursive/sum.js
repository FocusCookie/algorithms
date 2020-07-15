function sum(arr) {
  return arr.length === 0 ? 0 : arr.pop() + sum(arr);
}

let arr = [1, 2, 3, 4, 5];
console.log(sum(arr));
