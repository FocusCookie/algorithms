function getDigits(num: number, digit: number): number {
  return Math.floor(Math.abs(num) / Math.pow(10, digit)) % 10;
}

function digitCount(num: number): number {
  return num === 0 ? 1 : `${Math.abs(num)}`.length;
}

function mostDigits(nums: number[]): number {
  let maxDigits: number = 0;

  for (let i: number = 0; i < nums.length; i++) {
    const currentDigitCount: number = digitCount(nums[i]);

    if (currentDigitCount > maxDigits) maxDigits = currentDigitCount;
  }

  return maxDigits;
}

function radixSort(nums: number[]): number[] {
  let numsCopy: number[] = nums.map((el) => el);
  let maxDigitsCount = mostDigits(numsCopy);

  for (let k = 0; k < maxDigitsCount; k++) {
    let digitBuckets: Array<number[]> = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < numsCopy.length; i++) {
      let digit = getDigits(numsCopy[i], k);
      digitBuckets[digit].push(numsCopy[i]);
    }

    let tmp: number[] = []; // error that concat is not assaignable ... need to find a way to dont use tmp
    numsCopy = tmp.concat(...digitBuckets);
  }

  return numsCopy;
}

const nums = [1, 2, 532, 12, 1121235, 421, 55, 99, 8421];

console.log("radix", radixSort(nums));
