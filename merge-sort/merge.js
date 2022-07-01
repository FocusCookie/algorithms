function mergeTwoSortedArrays(arr1, arr2) {
    var merged = [];
    var arr1Index = 0;
    var arr2Index = 0;
    while (arr1Index < arr1.length || arr2Index < arr2.length) {
        var value1 = arr1[arr1Index];
        var value2 = arr2[arr2Index];
        if (value1 !== undefined && value2 !== undefined) {
            if (value1 < value2) {
                merged.push(value1);
                arr1Index++;
            }
            else {
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
var testArr1 = [1, 3, 6, 7, 8, 9, 10, 100];
var testArr2 = [-12, 4, 5, 8];
function mergeSort(arr) {
    if (arr.length <= 1)
        return arr;
    var mid = Math.floor(arr.length / 2);
    var left = mergeSort(arr.slice(0, mid));
    var right = mergeSort(arr.slice(mid));
    return mergeTwoSortedArrays(left, right);
}
var unsortedTestArr = [, 1, 8, 3, 5, 2, 8, 99, 32, 1, -1, -24];
console.log(mergeSort(unsortedTestArr));
