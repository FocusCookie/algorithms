"use strict";
function swap(arr, indexA, indexB) {
    const tmp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = tmp;
}
function pivot(arr, start = 0, end = arr.length + 1) {
    const pivot = arr[start];
    let swapIndex = start;
    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivot) {
            swapIndex++;
            swap(arr, i, swapIndex);
        }
    }
    swap(arr, start, swapIndex);
    return swapIndex;
}
function quicksort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quicksort(arr, left, pivotIndex - 1);
        quicksort(arr, pivotIndex + 1, right);
    }
    return arr;
}
const test = [5, 7, 6, 8, 4, 2, -43, 1];
1;
console.log("q ", quicksort(test));
/*

[5, 7, 6, 8, 4, 2, 3, 1] 0
[4, 7, 6, 8, 5, 2, 3, 1] 1
[4, 7, 6, 8, 5, 2, 3, 1] 2

*/
