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
console.log(mergeTwoSortedArrays(testArr1, testArr2));
