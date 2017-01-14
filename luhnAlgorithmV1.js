//Convert number to string, then to array, and sum all digits in array
const sumDigits = (number) => {
  return number.toString().split("")
    .map(element => parseInt(element))
    .reduce((a, b) => a + b, 0);
};

//Loop through every other digit from right to left and each digit
const loopAndMultiply = (numArr) => {
  let arr = [];

  for (i = numArr.length -1; i >= 0; i = i - 2 ) {
    let result = numArr[i];
    if (result > 4) {
      arr.push(sumDigits(result * 2))
    } else {
      arr.push(result * 2)
    }
  }
  return arr;
};

//Loop through every other digit, starting from second last digit to right
const loopWithoutMultiplying = (numArr) => {
  let arr = [];

  for (i = numArr.length - 2; i >= 0; i = i - 2 ) {
    let result = numArr[i];
    arr.push(sumDigits(result))
  }
  return arr;
};

//Check if number is valid
//Find check digit by multiplying sum of all final digits. Check digit is last digit in integer.
const check = (accountNumber) => {
  let digits               = accountNumber.toString().split("");
  let mulitpliedNumbers    = loopAndMultiply(digits);
  let nonmultipliedNumbers = loopWithoutMultiplying(digits);
  let sumOfAllDigits       = 0;
  let isValid;

  mulitpliedNumbers.forEach((value) => {
    sumOfAllDigits += value;
  })
  nonmultipliedNumbers.forEach((value) => {
    sumOfAllDigits += value;
  })
  if (sumOfAllDigits % 10 !== 0) {
    isValid = false;
  }
  let checkDigit = (sumOfAllDigits * 9) % 10;

  console.log(`The check digit is: ${checkDigit}\nThe full account number with check digit is: ${accountNumber}${checkDigit}`)
  return isValid;
};

const wikiEx = 7992739871;

console.log(check(wikiEx) === false)
