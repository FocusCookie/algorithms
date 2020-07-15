let myList = [];
for (let i = 0; i <= 128; i++) {
  myList.push(i);
}

function binarySearch(list, item) {
  let high = list.length - 1;
  let low = 0;

  while (low <= high) {
    let mid = Math.round((low + high) / 2);
    let guess = list[mid];

    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
}
const searchFor = 200;
const result = binarySearch(myList, searchFor);
result
  ? console.log("value of the search ", myList[result])
  : console.log(searchFor, "doens´t exist in list");
