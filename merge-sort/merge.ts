function mergeTwoSortedArrays(arr1: number[], arr2: number[]): number[] {
  const merged: number[] = [];

  let arr1Index: number = 0;
  let arr2Index: number = 0;

  while (arr1Index < arr1.length || arr2Index < arr2.length) {
    const value1: number = arr1[arr1Index];
    const value2: number = arr2[arr2Index];

    if (value1 !== undefined && value2 !== undefined) {
      if (value1 < value2) {
        merged.push(value1);
        arr1Index++;
      } else {
        merged.push(value2);
        arr2Index++;
      }
    }

    if (value1 !== undefined && value2 === undefined) {
      merged.push(value1);
      arr1Index++;
    }

    if (value1 === undefined && value2 !== undefined) {
      merged.push(value2);
      arr2Index++;
    }
  }

  return merged;
}

const testArr1: number[] = [1, 3, 6, 7, 8, 9, 10, 100];
const testArr2: number[] = [-12, 4, 5, 8];

console.log(mergeTwoSortedArrays(testArr1, testArr2));
